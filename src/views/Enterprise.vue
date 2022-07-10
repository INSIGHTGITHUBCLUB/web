<template>
  <div class="videoSwiper">
    <swiper :options="swiperOption2" ref="myswiper" class="title">
      <swiper-slide v-for="(item, index) in videoList" :key="index">
        <div
          @click="add"
          v-if="item.type == 1"
          id="btn"
          :style="`background: rgba(13, 37, 71, 1);width:100%;height: 100%`"
        >
          <div
            class="text"
            style="
              width: 60%;
              margin: auto;
              text-align: center;
              margin-top: 200px;
            "
          >
            <h1 style="color: #724eb0">{{ item.title }}</h1>

            <span id="mistake" ref="mistake"></span>
            <span id="box" ref="box">
              <span> {{ item.content }}</span>
            </span>
          </div>
        </div>
        <div v-else-if="item.type == 2">
          <div class="mask">
            <video
              allowsInlineMediaPlayback="YES"
              webview.allowsInlineMediaPlayback="YES"
              x-webkit-airplay="true"
              x5-playsinline="true"
              webkit-playsinline="true"
              playsinline="true"
              preload="auto"
              controls
              :autoplay="false"
              loop
              :src="item.img"
              ref="video"
            ></video>
            <span id="mistake" ref="mistake"></span>
            <span id="box" ref="box"></span>
          </div>
        </div>
        <div
          v-else-if="item.type == 3"
          class="flex"
          :style="`background: center/cover url(${item.img}) no-repeat;width:100%;height: 100%`"
        >
          <div class="maskLayer">
            <div class="question" style="width: 70%; text-align: center">
              {{ item.title }}
            </div>

            <div
              class="answer"
              v-for="(items, indexs) in item.content"
              :key="indexs"
            >
              <el-button
                @click="right1(items, indexs, item.correct, item.content)"
                v-if="tu1Color"
                :class="[
                  indexs === indexAlls && items == item.correct ? right : '',
                ]"
                round
                size="medium"
                >{{ items }}</el-button
              >
              <el-button
                @click="right1(items, indexs, item.correct, item.content)"
                v-else
                round
                :class="[
                  indexs === indexAll ? right : '',
                  indexs === indexAlls ? 'right' : '',
                ]"
                size="medium"
                >{{ items }}</el-button
              >
            </div>
            <span id="box" ref="box"></span>
            <span id="mistake" style="display: none" ref="mistake">{{
              item.mistake
            }}</span>
          </div>
        </div>

        <div class="rights">{{ index + 1 }}/{{ videoList.length }}</div>
      </swiper-slide>
    </swiper>
    <div class="iconBox">
      <div>
        <span
          class="el-icon-top icon-item"
          v-if="itemIndex != 1"
          @click="getup"
        ></span>
      </div>
      <div>
        <span
          class="el-icon-bottom icon-item"
          style="color: #fff"
          v-if="itemIndex != videoList.length"
          @click="getdown"
        ></span>
      </div>
    </div>
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js"></script>
<script>
//导入swiper
import "vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { userStore } from "@/store";
import Drag from "./Drag.vue";

export default {
  name: "default",
  data() {
    const that = this;
    return {
      userStore: userStore(),
      mistakes: false,
      boxshow: false,
      readonly: false,
      textarea: "",
      contents: false,
      up: true,
      down: true,
      indexAll: 0,
      indexAlls: null,
      tu1Color: false,
      right: "",
      disableds: true,
      itemList: [],

      itemIndex: 1,
      videoList: [
        {
          id: 0,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "Lesson 1: Protect the organization’s Wi-Fi safety",
          content: "",
        },
        {
          id: 1,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "What is Wi-Fi networks",
          content: `Wi-Fi networks is integral to the daily operations of the organizations. It helps the organizations 
and employees to link each other and connect all of our devices to the internet without cables.`,
        },
        {
          id: 2,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "Why Wi-Fi Matters",
          content: `No matter where you are at work, there is always Wi-Fi networks connection. However, it is not 
always safe to connect Wi-Fi networks. You should learn the basics on how to trust connecting 
Wi-Fi networks.`,
        },
        {
          id: 3,
          type: 2,
          img: require("../../src/assets/Video/3-1-Video1.mp4"),
        },
        {
          id: 4,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "Watch out your Wi-Fi Connections!",
          content: `Once you turned on your Wi-Fi, it will always be looking for the nearest place to connect to 
without knowing the safety of the network. One of the rules as employees is that you should not 
turn on your Wi-Fi when your device is not in use.`,
        },
        {
          id: 5,
          type: 3,
          img: require("@/assets/Video/tu1.jpg"),
          title:
            "It is always secure to connect to free public Wi-Fi networks.",
          correct: "No",
          //   mistake:'Billy made the mistake that he should not share the video with his friends.',
          content: ["Yes", "No"],
        },
        {
          id: 6,
          type: 2,
          img: require("../../src/assets/Video/3-1-Video2.mp4"),
        },
        {
          id: 6,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "Rule of Thumb #1:",
          content: `You should always check if you trust the network and if someone else have access to the 
network before connecting to any free Wi-Fi in public. There are always risks of connecting to 
free public Wi-Fi networks.`,
        },

        {
          id: 7,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "What is VPN?",
          content: `A Virtual Private Network prevents hackers from monitoring and altering your data and 
            connection details.`,
        },
        {
          id: 8,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: `Activity #1: Learn how to connect to VPN`,
          content: `Let’s practice on how to connect to VPN and how it works. 
Let’s get started`,
        },
        {
          id: 9,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "Step #1:",
          content: `Connect to Internet<br/> First, you will need to have an internet connection, Once connected, your communications are<br/>
            openly available and not private.`,
        },
        {
          id: 10,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "Step #2",
          content: `Connect to VPN<br/> Open your VPN service and establish your connection. Now, the VPN server will become the
middleman between your device and the internet.`,
        },

        {
          id: 11,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "Encrypted Communications",
          content: `Once connected to a VPN, your communications are now private and encrypted. Your sensitive 
information is unable to be viewed by hackers snooping your Wi-Fi connection.`,
        },
        {
          id: 12,
          type: 3,
          img: require("@/assets/Video/tu1.jpg"),
          title: `What does VPN stand for?`,
          //  mistake:`Billy leaked Personally Identifiable Information after the scientist from MGC discovered the formula in the background of the video.`,
          correct: "Virtual Private Network",
          content: [
            "Virtual Private Network",
            "Virtual Protection Network",
            "Virus Private Network",
            "Virus Protection Network",
          ],
        },
        {
          id: 13,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "Rule of Thumb #2:",
          content: `You should always turn the Wi-Fi connection off when not using the device. There is always 
risks of having personal device automatically connecting to unknown Wi-Fi networks`,
        },
        {
          id: 14,
          type: 3,
          img: require("@/assets/Video/tu1.jpg"),
          title: `What is the function of VPN?`,
          //  mistake:`Billy leaked Personally Identifiable Information after the scientist from MGC discovered the formula in the background of the video.`,
          correct: "Encrypt Data",
          content: ["Transfer Data", "Encrypt Data", "Share Data", "Link Data"],
        },
        {
          id: 15,
          type: 3,
          img: require("@/assets/Video/tu1.jpg"),
          title: `It is a safer approach to use a private internet connection, such as mobile phone or a personal 
        hotspot, to accessing wireless internet than use a public Wi-Fi network?`,
          //  mistake:`Billy leaked Personally Identifiable Information after the scientist from MGC discovered the formula in the background of the video.`,
          correct: "Yes",
          content: ["Yes", "No"],
        },
        {
          id: 15,
          type: 2,
          img: require("../../src/assets/Video/3-1-Video3.mp4"),
        },
        {
          id: 16,
          type: 3,
          img: require("@/assets/Video/tu1.jpg"),
          title: `I am working as an employee at the organization A, what should I do after finished using the 
organization’s Wi-Fi network?`,
          //  mistake:`Billy leaked Personally Identifiable Information after the scientist from MGC discovered the formula in the background of the video.`,
          correct: "Turn the organization’s Wi-Fi network off",
          content: [
            "Reset the password of Wi-Fi network",
            "Find a free public Wi-Fi network",
            "Turn the organization’s Wi-Fi network off",
            "Find a VPN to connect my Wi-Fi network",
          ],
        },

        {
          id: 17,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "Rule of Thumb #3:",
          content: `You should always use personal hotspot to securely connect to the internet. Connecting to 
open public network should be the last solution and should be cautiously thinking when 
connecting`,
        },
        {
          id: 18,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "Rule of Thumb #4:",
          content: `You should be vigilant about transferring data when working remotely and be careful of dealing 
with sensitive data to ensure the security of the data.`,
        },
        {
          id: 19,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "Rule of Thumb #5:",
          content: `Using a VPN is one of the way to prevent hackers from viewing your online communications. 
VPN can protect your privacy and data security when working in the office.`,
        },
        {
          id: 19,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "Rule of Thumb #6::",
          content: `Employees rely heavily on internet connection while working in the office. It is always safe to 
practice what you have learned about Wi-Fi networks to protect your privacy and your 
organization’s data security.`,
        },
      ],
      pos: 1,
      lock: true,
      swiperOption2: {
        initialSlide: 0,
        //  height: document.documentElement.offsetHeight,
        direction: "vertical", // 竖向滚动
        // autoHeight: true, // 自适应高度
        slidesPerView: "auto", // 记得这里写 auto 不要默认写1哦
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        // loop: true,
        watchSlidesProgress: true,
        // 禁止滑动
        // allowSlideNext: true,
        mousewheel: true,
        // 禁止快速滑动
        //  shortSwipes : false,
        simulateTouch: false, //禁止鼠标模拟

        on: {
          slideChangeTransitionEnd: function () {
            that.itemIndex = this.realIndex + 1;
            console.log(that.itemIndex);
          },

          // touchEnd: function(swiper,event){
          //   that.swiperTouch(swiper,event)
          // },
        },
      },
    };
  },
  created() {
    if (!this.userStore.isLogin) {
      this.$message({
        showClose: true,
        message: "Please login first",
        type: "warning",
      });
      this.$router.replace("/login");
    }
  },
  computed: {
    swipers() {
      return this.$refs.myswiper.swiper;
    },
  },

  watch: {
    itemIndex(newvalue, oldvalue) {
      if (newvalue != oldvalue) {
        this.allowSlid(newvalue);
        this.itemIndex = newvalue;
        // 当前页视频播放
        switch (this.itemIndex) {
          case 4:
            this.$refs.video[0].play();
            break;

          case 7:
            this.$refs.video[1].play();
            break;
          case 18:
            this.$refs.video[2].play();
            break;

          default:
            this.$refs.video.forEach((item, index) => {
              this.$refs.video[index].pause();
            });
        }

        this.disableds = true;
        this.tu1Color = false;
        this.right = "";
        this.indexAll = 0;
        this.indexAlls = null;
      }
    },
  },

  methods: {
    add() {
      if (!this.lock) return;

      // 把过渡加上
      this.$refs.box[this.itemIndex - 1].style.transition = "all .3s linear 0s";
      if (this.pos == 1) {
        // 瞬间移动，但是由于有过渡，所以是动画
        if (this.itemIndex == 13) {
          this.$refs.box[this.itemIndex - 1].style.bottom = "250px";
        } else {
          this.$refs.box[this.itemIndex - 1].style.bottom = "290px";
        }
        // this.pos = 2;
      }
      // else if (this.pos == 2) {
      //     // 瞬间移动，但是由于有过渡，所以是动画
      //   this.$refs.box[this.itemIndex-1].style.top = '100px';
      //     this.pos = 1;
      // }

      // 关锁
      // this.lock = false;
      this.lock = true;
      // 设置延时器开锁，时间与过渡时间最好相同
      setTimeout(function () {
        this.lock = true;
      }, 500);
    },
    getUps() {
      this.readonly = true;
      this.contents = true;
    },
    allowSlid(type) {
      if (type == 6 || type == 14 || type == 16 || type == 17 || type == 19) {
        this.allowSlids();
        // this.$refs.Drags.setData(this.allowSlids)
        // 防止事件冲突
        this.swipers.simulateTouch = false;
      }
    },
    // 禁用公共方法
    allowSlids() {
      this.swipers.allowSlideNext = false;
      this.swipers.allowSlidePrev = false;
    },
    //解除禁用公共方法L
    allowSlidLift() {
      this.swipers.allowSlideNext = true;
      this.swipers.allowSlidePrev = true;
    },
    // 上一页
    getup() {
      if (this.up) {
        this.allowSlidLift();
        this.swipers.slidePrev();
        this.up = false;
        setTimeout(() => {
          this.up = true;
        }, 1000);
      }
    },
    // 下一页
    getdown() {
      if (this.down) {
        this.down = false;
        this.swipers.slideNext();
        setTimeout(() => {
          this.down = true;
        }, 1000);
      }
    },
    // 问题对答
    right1(type, index, correct, content) {
      this.rights(type, index, correct, content);
    },

    // 问题对答方法 当前项 角标 正确答案 答案列表
    rights(type, index, options, list) {
      if (this.disableds) {
        this.disableds = false;
        if (type == options) {
          this.tu1Color = true;
          this.right = "right";
          this.indexAlls = index;
          this.$message({
            message: "correct ",
            type: "success",
          });
        } else {
          list.forEach((item, index) => {
            if (item == options) {
              this.indexAlls = index;
            }
          });
          this.right = "active";
          this.tu1Color = false;
          this.indexAll = index;
          this.$refs.mistake[this.itemIndex - 1].style.display = "block";
          this.$message.error("sorry");
        }
        this.allowSlidLift();
      } else {
        this.$message("you have chosen the answer");
        this.allowSlidLift();
      }
    },
  },
  components: {
    swiper,
    swiperSlide,
    Drag,
  },
};
</script>
<style scoped lang="less">
.title {
  height: 99.92vh;
  overflow: hidden;
}
.iconBox {
  .icon-item {
    position: fixed;
    display: inline-block;
    left: 50px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #000;
    line-height: 100px;
    text-align: center;
    z-index: 99;
    font-size: 30px;
    cursor: pointer;
  }
  .icon-item:hover {
    background: #212121;
    color: #fff;
  }
  .el-icon-top {
    top: 50px;
  }
  .el-icon-bottom {
    bottom: 50px;
  }
}
::v-deep .swiper-slide {
  // background: rgba(0, 0, 0, 0.8);
  height: 100vh;
  width: 100% !important;
  overflow: auto;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  > p {
    width: 50%;
    margin: auto;
  }
  > .rights {
    color: #fff;
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  .text {
    text-align: center;

    h1 {
      font-size: 40px;
      font-weight: bold;
      color: #724eb0;
    }
    span {
      color: #212121;
      font-size: 16px;
    }
  }
}
.question {
  font-size: 26px;
  letter-spacing: -2px;
  color: #212121;
  font-weight: bold;
}
.answer {
  ::v-deep .el-button--medium {
    width: 300px;
    padding: 15px 5px;
    margin: 10px;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
  }
}
.active {
  background: red !important;
}
.right {
  background: #67c23a !important;
}
.maskLayer {
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.drag {
  position: absolute;
  top: 391px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.dragTitle {
  font-size: 35px;
  font-weight: bold;
  color: #212121;
  text-align: center;
  position: absolute;
  top: 130px;
}
#box {
  position: absolute;
  bottom: -100px;
  left: 50%;
  width: 900px;
  height: 100px;

  margin-left: -450px;
}

#btn {
  position: relative;
  border: transparent 1px #fff;
}
</style>
