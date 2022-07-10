import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TextGeometry } from "three//examples/jsm/geometries/TextGeometry";
import countries from "@/assets/js/countries";
import { loadImg, loadFont, loadObj, getRandomNum } from "./helpers";

let SCENE_WIDTH = window.innerWidth;
let SCENE_HEIGHT = window.innerHeight;

export default class Render {
  constructor() {
    this.fps = 60;
    this.RADIUS = 100;
    this.countryColor = [0xffffff, 0xffff00];
    this.countryGeoRadius = 2;
    this.center = new THREE.Vector3(0, 0, 0);
    this.earth = new THREE.Group();
    this.objList = []
    this.objList.push(this.earth)
    this.satelliteAnimationDuration = 20; // s
    this.satellitePathIndex = 0;
    this.raycaster = new THREE.Raycaster();
    
    this.initScene();
    this.initCamera();
    this.initLight();
    this.initRenderer();
    this.initObject().then(() => {
      // this.initDevHelpers();
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.enablePan = false;
      this.controls.enableZoom = false;
      this.controls.maxDistance = 400;
      this.controls.minDistance = 400;
      this.controls.minPolarAngle = Math.PI / 2 - Math.PI / 10;
      this.controls.maxPolarAngle = Math.PI / 2 - Math.PI / 10;
      this.objList.push(this.controls)
      this.earth.position.copy(this.center);
      this.scene.add(this.earth);
      this.render();
    });
  }

  dispose() {
    for (const obj of this.scene.children) {
      this.scene.remove(obj);
    }
  }


  initScene() {
    this.scene = new THREE.Scene();
    this.objList.push(this.scene)
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(SCENE_WIDTH, SCENE_HEIGHT);
    this.objList.push(this.renderer)
    const container = document.getElementById("webgl-container");

    container.appendChild(this.renderer.domElement);
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      45,
      SCENE_WIDTH / SCENE_HEIGHT,
      0.1,
      10000
    );
    this.camera.position.set(300, 0, 100);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.scene.add(this.camera);
    this.objList.push(this.camera)
  }

  initLight() {
    this.light = new THREE.PointLight(0xffffff, 0.8); // white light
    this.light.position.set(200, 200, 0);
    this.amLight = new THREE.AmbientLight(0xffffff, 0.4)
    this.scene.add(this.light);
    this.scene.add(this.amLight);
    this.objList.push(this.amLight);
    this.objList.push(this.light)
  }

  render() {
    this.renderer.render(this.scene, this.camera);

    const mat1 = new THREE.Matrix4();
    mat1.makeRotationX(Math.PI / 3000);
    this.track1.applyMatrix4(mat1);
    this.satellitePathPoints.forEach((vec) => {
      vec.applyMatrix4(mat1);
    });
    this.track2.rotateY(Math.PI / 1000);

    this.earth.rotateY(Math.PI / 3000);
    this.dust.rotateY(-Math.PI / 3000);
    this.earthFloatText.rotateY(Math.PI / 2000);

    this.controls.update();
    this.satelliteMove();

    requestAnimationFrame(this.render.bind(this));
  }

  initDevHelpers() {
    this.axesHelper = new THREE.AxesHelper(200);
    this.scene.add(this.axesHelper);
  }

  async loadImgs() {
    this.earthImg = await loadImg(require("@/assets/images/earth-spec.png"));
    const canvas = document.createElement("canvas");
    canvas.width = this.earthImg.width;
    canvas.height = this.earthImg.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      this.earthImg,
      0,
      0,
      this.earthImg.width,
      this.earthImg.height
    );
    this.earthImgData = ctx.getImageData(
      0,
      0,
      this.earthImg.width,
      this.earthImg.height
    );
  }

  async loadFont() {
    const font = await loadFont();
    this.font = font;
  }

  async initObject() {
    await Promise.all([this.loadImgs(), this.loadFont()]);
    // 绘制城市打点
    this.drawCountries();
    // 大陆点
    this.drawDots();
    // 云层
    // this.drawClouds();
    // 轨道
    this.satellitePathPoints = this.drawTrack(
      this.RADIUS * 2.5,
      "rotateX",
      0,
      "track1"
    );
    this.drawTrack(this.RADIUS * 2.5, "rotateX", Math.PI / 2, "track2");
    // 卫星
    this.drawSatellite();
    // 尘埃
    this.drawDust();
    // 环绕
    this.earthFloatText = new THREE.Group();
    this.objList.push(this.earthFloatText)
    this.floatText(
      "Security Need, Personal Security, Enterprise Security.Security Need, Personal Security, Enterprise Security",
      12,
      360,
      15
    );
  }

  floatText(text, size, all, lat) {
    let len = text.length;
    if (len % 2) {
      len += 1;
    }
    const step = all / len;
    let index = 0;
    for (const char of text) {
      if (char === "") {
        index++;
        continue;
      }
      var g = new TextGeometry(char, {
        font: this.font,
        size: size,
        height: 2,
      });
      var m = new THREE.MeshBasicMaterial({ color: 0xA6E5E9 });
      var mesh = new THREE.Mesh(g, m);
      this.objList.push(mesh)
      mesh.position.copy(
        this.lnglat2Vector3([-all / 2 + index * step, lat], 150)
      );
      mesh.lookAt(this.center);
      mesh.rotateY(Math.PI);
      mesh.name = "earthFloatText";
      this.earthFloatText.add(mesh);
      index++;
    }
    this.scene.add(this.earthFloatText);
  }

  // 国家打点
  drawCountries() {
    this.countriesGroup = new THREE.Group();
    this.objList.push(this.countriesGroup)
    countries.forEach((city, index) => {
      const countryGroup = new THREE.Group();
      this.objList.push(countryGroup)
      // 城市六边形
      const position = this.lnglat2Vector3(city.position);
      const circleGeo = new THREE.CircleGeometry(this.countryGeoRadius, 6); // 正六边形
      const circleMaterial = new THREE.MeshBasicMaterial({
        color: this.countryColor[index % 2],
        side: THREE.DoubleSide,
      });
      const circle = new THREE.Mesh(circleGeo, circleMaterial);
      this.objList.push(circle)
      // 城市六边形边框
      const lineGeo = new THREE.BufferGeometry();
      const linePoints = this.getVertices(
        circleGeo.getAttribute("position").array
      );
      lineGeo.setFromPoints(linePoints);
      const matrix = new THREE.Matrix4();
      matrix.scale(new THREE.Vector3(1.5, 1.5, 1.5));
      lineGeo.applyMatrix4(matrix);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: this.countryColor[index % 2],
        linewidth: 1,
      });
      const line = new THREE.Line(lineGeo, lineMaterial);
      this.objList.push(line)
      // 城市光柱
      // const beamGroup = this.drawBeams(position, index % 2);
      // this.objList.push(beamGroup)
      countryGroup.add(circle);
      countryGroup.add(line);
      countryGroup.position.copy(position);
      countryGroup.lookAt(new THREE.Vector3(0, 0, 0));
      // beamGroup.lookAt(new THREE.Vector3(0, 0, 0));
      this.countriesGroup.add(countryGroup);
      // this.countriesGroup.add(beamGroup);
    });
    this.countriesGroup.add(this.center);
    this.earth.add(this.countriesGroup);
  }

  // 光柱
  drawBeams(position, isYellow) {
    const beamGroup = new THREE.Group();
    const height = 10 + Math.random() * 30;
    const geo = new THREE.PlaneGeometry(this.countryGeoRadius * 2, height);
    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(
        require(`@/assets/images/lightray${isYellow ? "_yellow" : ""}.jpg`)
      ),
      side: THREE.DoubleSide,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    const beam = new THREE.Mesh(geo, material);
    const matrix = new THREE.Matrix4();
    matrix.makeRotationX(Math.PI / 2);
    matrix.setPosition(new THREE.Vector3(0, 0, -height / 2));
    const beamCopy = beam.clone();
    beamCopy.rotateZ(Math.PI / 2);
    beamGroup.add(beam);
    beamGroup.add(beamCopy);
    geo.applyMatrix4(matrix);
    beamGroup.position.copy(position);
    return beamGroup;
  }

  // 大陆点阵
  drawDots() {
    const xDotNum = 250;
    const yDotNum = 250;
    const positions = [];
    const spherical = new THREE.Spherical(this.RADIUS);
    const position = new THREE.Vector3();
    for (let i = 0; i < xDotNum; i++) {
      const xRatio = i / xDotNum;
      for (let j = 0; j < yDotNum; j++) {
        const yRatio = j / yDotNum;
        if (this.isLandInUv(xRatio, yRatio)) {
          spherical.theta = Math.PI * 2 * xRatio - Math.PI / 2;
          spherical.phi = Math.PI * yRatio;
          position.setFromSpherical(spherical);
          positions.push(position.clone());
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setFromPoints(positions);
    const material = new THREE.PointsMaterial({
      map: new THREE.TextureLoader().load(require("@/assets/images/dot.png")),
      color: new THREE.Color(0x81AEDB),
      transparent: true,
      depthTest: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      size: 3,
      opacity: 0.4,
    });
    const points = new THREE.Points(geo, material);
    this.objList.push(points)

    this.earth.add(points);
  }

  // 外层云层
  drawClouds() {
    const cloudGeo = new THREE.SphereGeometry(this.RADIUS * 1.3, 50, 50);
    const cloudMaterial = new THREE.ShaderMaterial({
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      uniformsNeedUpdate: true,
      uniforms: {
        cloud: {
          type: "sampler2D",
          value: new THREE.TextureLoader().load(
            require("@/assets/images/clouds.jpg")
          ),
        },
        diffuse: {
          type: "vec3",
          value: new THREE.Color(0x81AEDB),
        },
        opacity: {
          type: "float",
          value: 1,
        },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec4 vertexToCamera;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          vertexToCamera = vec4(cameraPosition - position, 1.0) * modelMatrix;
          vNormal = normal;
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform vec3 diffuse;
        uniform float opacity;
        uniform sampler2D cloud;
        varying vec3 vNormal;
        varying vec4 vertexToCamera;
        void main() {
          // 根据点和摄像头的距离判断,相机中心部分需要透明
          vec3 dist = normalize(vec3(vertexToCamera.xyz)); 
          float fAlpha = 1.0 - (dot(dist, vNormal));

          vec4 color = texture2D(cloud, vUv);
          float alpha = sin(vUv.y * 2000.0) * fAlpha;
          if(alpha < 0.0) discard;
          gl_FragColor = vec4(color.rgb * diffuse, fAlpha * opacity);
        }
      `,
    });
    const cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
    this.objList.push(cloud)
    this.earth.add(cloud);
  }

  // 轨道
  drawTrack(radius, method, value, variable) {
    const circleGeo = new THREE.CircleGeometry(radius, 1000);
    const linePoints = this.getVertices(
      circleGeo.getAttribute("position").array
    );
    const trackGeo = new THREE.BufferGeometry();
    trackGeo.setFromPoints(linePoints);
    const trackMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(0xffffff),
      transparent: true,
      opacity: 0.3,
      linewidth: 1,
    });

    this[variable] = new THREE.Line(trackGeo, trackMaterial);
    this.objList.push(this[variable])
    this[variable][method](value);
    this[variable].position.add(this.center);
    this.scene.add(this[variable]);
    return linePoints;
  }

  // 卫星
  async drawSatellite() {
    const obj = await loadObj("/satellite.obj");
    const geos = obj.children.map((mesh) => mesh.geometry);
    this.satellite = new THREE.Group();
    this.objList.push(this.satellite)
    geos.forEach((geo) => {
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(0xF0C2FF),
        transparent: true,
        opacity: 0.6,
        linewidth: 1,
      });
      const mesh = new THREE.Line(geo, material);
      this.objList.push(mesh)
      this.satellite.add(mesh);
    });
    this.scene.add(this.satellite);
  }

  // 卫星运动
  satelliteMove() {
    if (!this.satellite) return;
    this.satellitePathIndex++;
    if (this.satellitePathIndex > this.satellitePathPoints.length - 1) {
      this.satellitePathIndex = 0;
    }

    this.satellite.position.copy(
      this.satellitePathPoints[this.satellitePathIndex]
    );
    this.satellite.position.add(this.center);
    this.satellite.rotateX(Math.PI / 300);
  }

  // 尘埃
  drawDust() {
    const DUST_RADIUS = this.RADIUS * 3;
    this.dust = new THREE.Group();
    this.objList.push(this.dust)
    for (let index = 0; index < 300; index++) {
      const geo = new THREE.BoxGeometry(3, 3, 3);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0xffffff),
        side: THREE.DoubleSide,
        depthTest: false,
        transparent: true,
        opacity: 0.2,
      });
      const dust = new THREE.Mesh(geo, material);
      this.objList.push(dust)

      const r = getRandomNum(DUST_RADIUS * 0.8, DUST_RADIUS);
      const alpha = getRandomNum(0, Math.PI * 2);
      const beta = getRandomNum(0, Math.PI * 2);
      dust.position.copy(
        new THREE.Vector3(
          r * Math.sin(alpha) * Math.cos(beta),
          r * Math.sin(alpha) * Math.sin(beta),
          r * Math.cos(alpha)
        )
      );
      this.dust.add(dust);
    }
    this.dust.position.add(this.center);
    this.scene.add(this.dust);
  }

  // 经纬度 => 三维向量
  lnglat2Vector3(lnglat, radius) {
    if (!radius) radius = this.RADIUS;
    const lng = lnglat[0];
    const lat = lnglat[1];

    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 90) * (Math.PI / 180);
    const spherical = new THREE.Spherical(radius, phi, theta);
    const vec = new THREE.Vector3();
    vec.setFromSpherical(spherical);
    return vec;
  }

  // 判断是否是大陆
  isLandInUv(xRatio, yRatio) {
    const x = parseInt(this.earthImg.width * xRatio);
    const y = parseInt(this.earthImg.height * yRatio);
    return this.earthImgData.data[4 * (y * this.earthImg.width + x)] === 0;
  }

  // 获取顶点
  getVertices(positions) {
    const vertices = [];
    for (let index = 3; index < positions.length; index += 3) {
      const cur = positions[index];
      const next1 = positions[index + 1];
      const next2 = positions[index + 2];
      vertices.push(new THREE.Vector3(cur, next1, next2));
    }
    return vertices;
  }

  clearScene() {
    if (this.objList.length > 0) {
      for (var i = 0; i < this.objList.length; i++) {
        var currObj = this.objList[i];
        if (currObj instanceof THREE.Scene) {
          var children = currObj.children;
          for (var i = 0; i < children.length; i++) {
            this.deleteGroup(children[i]);
          }
        } else if(currObj instanceof THREE.Group)  {
          this.deleteGroup(currObj);
        } else {
          currObj.geometry && currObj.geometry.dispose();
        }
        this.scene.remove(currObj);
        currObj = null
      }
    }
  }

  //Delete group is object is composed
  deleteGroup(group) {
    //console.log(group);
    if (!group) return;
    //Delete all the meshes in group
    group.traverse(function (item) {
      if (item instanceof THREE.Mesh) {
        item.geometry.dispose();
      }
    });
  }
}
