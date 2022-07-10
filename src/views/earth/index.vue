<template>
  <div class="earth" @click="$router.push('/home')">
    <h1>Welcome to the iSecurity e-Learning Platform！</h1>
    <div id="webgl-container"></div>
    <div class="footer">
      <p>The University of Hong Kong</p>
      <p>Faculty of Education</p>
      <p>Zian Lu</p>
    </div>
  </div>
</template>

<script>
import Render from "./index";
export default {
  data: () => ({
    obj: null,
  }),
  components: {},
  mounted() {
    this.obj = new Render();
  },
  beforeDestroy() {
    this.obj.clearScene();
  },
};
</script>

<style lang="less">
.earth {
  position: relative;
  height: 100%;
  h1 {
    position: absolute;
    padding: 20px;
    color: #fff
  }
  .footer {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
    color: #fff;
  }
}
#webgl-container {
  background-image: linear-gradient(
    to bottom,
    rgb(162, 171, 230),
    rgb(151, 198, 230)
  );
}
</style>
