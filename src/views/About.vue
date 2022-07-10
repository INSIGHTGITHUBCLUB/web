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
            <div style="margin: 10px 5px" v-if="item.id == 15">
              <el-input
                :readonly="readonly"
                type="textarea"
                :rows="2"
                placeholder="Please enter your opinion"
                v-model="textarea"
              >
              </el-input>
              <el-button
                style="margin-top: 10px"
                type="success"
                @click="getUps"
                round
                >submit</el-button
              >
            </div>
            <span id="mistake" ref="mistake"></span>
            <span id="box" ref="box">
              <span v-show="item.id == 15 ? contents : true">
                {{ item.content }}</span
              >
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
        <div
          v-else-if="item.type == 4"
          class="flex"
          :style="`background: center/cover url(${item.img}) no-repeat;width:100%;height: 100%`"
        >
          <div class="maskLayer">
            <div class="dragTitle" style="width: 60%">{{ item.title }}</div>
            <Drag @allowSlidLift="allowSlidLift"></Drag>
            <span id="box" ref="box"></span>
            <span id="mistake" ref="mistake"></span>
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
import Drag from "./Drag.vue";
import { userStore } from "@/store";

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
          title: "Lesson 1: The importance of information security",
          content: "",
        },
        {
          id: 1,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "What is information security?",
          content: `In general, security is the protection against adversaries. It is “the quality or state of being 
                    secure-to be free from danger.” The Committee on National Security System (CNSS) defines 
                    information security as “the protection of information and its critical elements, such as the 
                    systems and hardware that use, store, and transmit that information.” Each employee should 
                    keep their personal data secure and practice protecting the organizations’ digital information 
                    asset from unauthorized access, use, disclosure, modification, or destruction.`,
        },

        {
          id: 3,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "Why information security matters?",
          content: `Information security is important to most organizations because most of the organization’s 
                value depend on the data they hold, Organizations also have the responsibility to protect the 
                data of their stakeholders, partners, and customers.`,
        },
        {
          id: 4,
          type: 2,
          img: require("../../src/assets/Video/1-1-Video1.mp4"),
        },
        {
          id: 5,
          type: 3,
          img: require("@/assets/Video/tu1.jpg"),
          title: "What mistakes did Billy make",
          correct: "Shared the video with his friends",
          mistake:
            "Billy made the mistake that he should not share the video with his friends.",
          content: [
            "Have access to top secret information",
            "Login to the organizations’ database",
            "Shared the video with his friends",
            "Chat with his friends via instant message",
          ],
        },

        {
          id: 6,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "What is Sensitive Data?",
          content: `Sensitive data is anything that could cause a negative impact on the organization financially, 
            legally and publicly. There are three types of sensitive data, which are Personally Identifiable 
            Information, Intellectual Property and Proprietary Information.`,
        },
        {
          id: 7,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "What is Personally Identifiable Information?",
          content: `Personally identifiable information is anything that would potentially target a specific person`,
        },
        {
          id: 8,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "What is Intellectual Property?",
          content: `Intellectual property is any data that are registered through patents, copyright, or trademarks 
            and are protected by law.`,
        },
        {
          id: 9,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "What is Proprietary Information?",
          content: `Proprietary information is any data that provides competitive advantage to an organization.`,
        },
        {
          id: 10,
          type: 4,
          img: require("@/assets/Video/tu1.jpg"),
          title:
            "Identify and drag the following items to the appropriate box for each type of sensitive data:",
        },
        {
          id: 11,
          type: 2,
          img: require("../../src/assets/Video/1-1-Video2.mp4"),
        },
        {
          id: 12,
          type: 3,
          img: require("@/assets/Video/tu1.jpg"),
          title: `What type of sensitive data did Billy leak after the scientist from MGC discovered the formula in 
            the background of the video.？`,
          mistake: `Billy leaked Personally Identifiable Information after the scientist from MGC discovered the formula in the background of the video.`,
          correct: "Intellectual Property",
          content: [
            "Personally Identifiable Information",
            "Intellectual Property",
            "Proprietary Information",
            "None of the above",
          ],
        },
        {
          id: 13,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: `After watching the video above, please elaborate on your reasoning on what should Billy do to 
            prevent sensitive data from falling in the wrong hands.`,
          content: `Billy should stop sending the leaked video and delete the video as soon as possible. His action 
            has exposed critical information about the hoverboard project. Billy should be aware that 
            sending sensitive data and information could be devastating to the future of an organization.`,
        },
        {
          id: 14,
          type: 2,
          img: require("../../src/assets/Video/1-1-Video3.mp4"),
        },
        {
          id: 15,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: `Why “need to know” access is critical to the security of an organization?`,
          content:
            "Individuals are only provided access to the data that is required to perform duty. It limits the exposure of sensitive data to outside",
        },

        {
          id: 17,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: `Information Security Program`,
          content: `Information security program leads the key strategies of securing data.`,
        },
        {
          id: 18,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: `Categorizing`,
          content: ` The ability to determine the sensitivity level of the organization’s data.`,
        },
        {
          id: 19,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: `Storing `,
          content: `The ability to determine where and how to store data.`,
        },
        {
          id: 20,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: `Sharing`,
          content: `The ability to access sensitive data and share data with others.`,
        },
        {
          id: 21,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: `Disposal`,
          content: `The processes and procedures for disposing sensitive data within the organization.`,
        },
        {
          id: 22,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: `Why “need to know” access is critical to the security of an organization?`,
          content:
            "Individuals are only provided access to the data that is required to perform duty. It limits the",
        },
        {
          id: 23,
          type: 3,
          img: require("@/assets/Video/tu1.jpg"),
          title: `It is not my responsibility to keep the organization’s Information security. Technical people are 
          responsible for ensuring the organization’s information security.`,
          correct: "False",
          mistake: `Maintain information security is integral to the organization’s data. Everyone should protect the organization’s sensitive information.`,
          content: ["True", "False"],
        },
        {
          id: 24,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: `Answer: Maintain information security is integral to the organization’s data. Everyone should 
          protect the organization’s sensitive information.`,

          content:
            "Individuals are only provided access to the data that is required to perform duty. It limits the",
        },
        {
          id: 25,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: `Your Role`,
          content: `Every employee should understand to not expose sensitive information because data leaking 
            cannot be undone and the consequences it would cause if losing of sensitive data. You as 
            employees have the responsibility to protect the integrity of the organization’s data.`,
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
  computed: {
    swipers() {
      return this.$refs.myswiper.swiper;
    },
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
          case 11:
            this.$refs.video[1].play();
            break;
          case 14:
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
        if (this.itemIndex == 15) {
          this.$refs.box[this.itemIndex - 1].style.bottom = "190px";
        } else if (this.itemIndex == 13) {
          this.$refs.box[this.itemIndex - 1].style.bottom = "250px";
        } else if (this.itemIndex == 23) {
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
      if (type == 5 || type == 12 || type == 22) {
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
