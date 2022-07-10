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
          title: "Lesson 1: How to set up passwords",
          content: "",
        },
        {
          id: 1,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "Passwords",
          content: `A password is a secret word or phrase that enables individuals access to certain things or data.`,
        },
        {
          id: 3,
          type: 2,
          img: require("../../src/assets/Video/2-1-Video1.mp4"),
        },
        {
          id: 4,
          type: 3,
          img: require("@/assets/Video/tu1.jpg"),
          title:
            "Which of the following passwords could be considered as weak passwords?",
          correct: "All of the above",
          //   mistake:'Billy made the mistake that he should not share the video with his friends.',
          content: ["123456", "Password", "Qwerty", "All of the above"],
        },
        {
          id: 5,
          type: 2,
          img: require("../../src/assets/Video/2-1-Video2.mp4"),
        },
        {
          id: 6,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "You must curious how do hackers steal passwords?",
          content: `There are five common tactics that hackers 
use, which are brute force attack, phishing attack, guessing attack, dictionary attack and rainbow 
table attack`,
        },

        {
          id: 7,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "What is Brute Force attack?",
          content: `Brute Force is automated software used to generate a large number of consecutive guesses to 
            break into an online account.`,
        },
        {
          id: 8,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: `Phishing is an attempt to steal account information by pretending to be a trustworthy person 
            via email`,
        },
        {
          id: 9,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "What is Guessing attack?",
          content: `Without software needed, password guessing consists of simply guessing a word and number 
            such as victim’s last name and birthdate`,
        },
        {
          id: 10,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "What is Dictionary attack?",
          content: `Dictionary is attempting to hack a password by trying hundreds or sometimes millions of likely 
possibilities, such as words in a dictionary.`,
        },
        {
          id: 11,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "What is Rainbow Table?",
          content: `Rainbow Table attack is very fast and uses a listing of all possible plaintext permutations of 
encrypted passwords specific to a given hash algorithm.`,
        },
        {
          id: 12,
          type: 3,
          img: require("@/assets/Video/tu1.jpg"),
          title: `Which of the following is the method that hackers use to steal passwords?`,
          //  mistake:`Billy leaked Personally Identifiable Information after the scientist from MGC discovered the formula in the background of the video.`,
          correct: "Dictionary attack",
          content: [
            "Brilliant Force attack",
            "Fishing attack",
            "Dictionary attack",
            "Rain Table",
          ],
        },
        {
          id: 13,
          type: 2,
          img: require("../../src/assets/Video/2-1-Video3.mp4"),
        },
        {
          id: 14,
          type: 3,
          img: require("@/assets/Video/tu1.jpg"),
          title: `What strategy did Peter use to create a strong password?`,
          //  mistake:`Billy leaked Personally Identifiable Information after the scientist from MGC discovered the formula in the background of the video.`,
          correct: "Passphrases",
          content: ["Lockpass", "Passdoors", "Passphrases", "Passlinks"],
        },
        {
          id: 15,
          type: 3,
          img: require("@/assets/Video/tu1.jpg"),
          title: `Which of the following is the strongest password?`,
          //  mistake:`Billy leaked Personally Identifiable Information after the scientist from MGC discovered the formula in the background of the video.`,
          correct: "al8sk!@#dj8fh",
          content: [
            "qwertYuiop",
            "al8sk!@#dj8fh",
            "BaseballTeam",
            "Straw10berry29",
          ],
        },
        {
          id: 16,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "Activity #1: Be Difficult",
          content: `Let’s practice on how to create a secure password using the strategy passphrases<br/>
            Let’s get started`,
        },
        {
          id: 17,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "Step #1",
          content: `Type your favorite book, country, or lesson.<br/>
            “The People’s Republic of China”`,
        },
        {
          id: 18,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "Step #2:",
          content: `Now take only the first letter of each word in that phrase.<br/>
            ““T P R O C”`,
        },
        {
          id: 19,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "Put a number and special character inside.",
          content: `“T 1 P ! R @ O 9C”`,
        },
        {
          id: 20,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "Put it all together",
          content: `T1P!R@O9C”`,
        },
        {
          id: 21,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title:
            "Make the password to have numbers, uppercase, lowercase, and special character.",
          content: `“t1P!R@O9c”`,
        },
        {
          id: 22,
          type: 1,
          img: require("@/assets/Video/tu1.jpg"),
          title: "Congratulations! You have created a strong password.",
          content: `Restart`,
        },
        {
          id: 23,
          type: 3,
          img: require("@/assets/Video/tu1.jpg"),
          title: `Using the same password for both the office and personal accounts is acceptable`,
          //  mistake:`Billy leaked Personally Identifiable Information after the scientist from MGC discovered the formula in the background of the video.`,
          correct: "No",
          content: ["Yes", "No"],
        },
        {
          id: 24,
          type: 2,
          img: require("../../src/assets/Video/2-1-Video4.mp4"),
        },

        {
          id: 25,
          type: 3,
          img: require("@/assets/Video/tu1.jpg"),
          title: `Having learned the passphrases technique, what would be the correct way of showing the 
phrase “Building Secure Passwords is Critical”?`,
          //  mistake:`Billy leaked Personally Identifiable Information after the scientist from MGC discovered the formula in the background of the video.`,
          correct: "BSPIC",
          content: ["BSPIC", "BSPC", "bspic", "BsPiC"],
        },
        {
          id: 26,
          type: 3,
          img: require("@/assets/Video/tu1.jpg"),
          title: `What people should remember when creating new passwords?`,
          //  mistake:`Billy leaked Personally Identifiable Information after the scientist from MGC discovered the formula in the background of the video.`,
          correct: "All of the above",
          content: [
            "Be difficult",
            "Don’t share",
            "Don’t reuse",
            "All of the above",
          ],
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
          case 3:
            this.$refs.video[0].play();
            break;
          case 5:
            this.$refs.video[1].play();
            break;
          case 13:
            this.$refs.video[2].play();
            break;
          case 24:
            this.$refs.video[3].play();
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
      if (
        type == 4 ||
        type == 12 ||
        type == 14 ||
        type == 15 ||
        type == 23 ||
        type == 25 ||
        type == 26
      ) {
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
