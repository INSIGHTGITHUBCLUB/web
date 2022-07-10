<template>
  <div class="robot" ref="robot" :class="{ active }">
    <img
      class="avatar"
      @click="active = true"
      :src="require('@/assets/images/robot.png')"
      alt=""
    />
    <div class="chat-box">
      <h3 class="title">Security Bot</h3>
      <div class="chart-box-container">
        <ul class="chart-history" ref="list">
          <li
            v-for="(record, index) of chartHistory"
            :key="index"
            :class="{
              'robot-record': record.from === 'robot',
              'user-record': record.from === 'user',
            }"
          >
            <div class="record-content">
              <Spinner v-if="record.loading"/>
              <template v-else>{{record.content}}</template>
            </div>
          </li>
        </ul>
      </div>
      <div class="input-container">
        <input
          @keypress.enter="submit"
          v-model="inputVal"
          type="text"
          placeholder="type your problem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from './Spinner'
import fetchAnswer from "./dialogue";

export default {
  components: {
    Spinner
  },
  data: () => ({
    active: false,
    inputVal: null,
    chartHistory: [
      {
        from: "robot",
        content: "Hi! Welcome to the iSecurity Platform. May I help you?",
      },
    ],
  }),
  watch: {
    "chartHistory.length": {
      async handler(v) {
        const lastRecord = this.chartHistory[v - 1];
        if (lastRecord.from === "robot") return;
        this.chartHistory.push({
          from: "robot",
          content: '',
          loading: true
        });
        const answer = await fetchAnswer(lastRecord.content);
        this.chartHistory[this.chartHistory.length - 1].content = answer
        this.chartHistory[this.chartHistory.length - 1].loading = false
        this.scrollToEnd()
      },
    },
  },
  mounted() {
    document.body.addEventListener("click", this.clickHandler.bind(this));
  },
  methods: {
    clickHandler(e) {
      if (!e.path.find((el) => el === this.$refs.robot)) {
        this.active = false;
      }
    },
    async scrollToEnd() {
      await this.$nextTick();
      this.$refs.list.scrollTop = this.$refs.list.scrollHeight + 100;
    },
    async submit() {
      if (!this.inputVal) {
        this.inputVal = null;
        return;
      }
      
      this.chartHistory.push({
        from: "user",
        content: this.inputVal,
      });
      this.inputVal = null;
      this.scrollToEnd()
    },
  },
  beforeDestroy() {
    document.body.removeEventListener("click", this.clickHandler);
  },
};
</script>

<style lang="less" scoped>
.robot {
  position: fixed;
  z-index: 10;
  bottom: 0;
  right: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(0, 90.5%);
  transition: transform 0.3s;
  &:hover {
    transform: translate(0, 87%);
  }
  &.active {
    transform: translate(0, 27%);
  }
  .chat-box {
    width: 300px;
    height: 400px;
    background-color: #394a70;
    border-radius: 10px;
    box-shadow: 0 0px 5px 0 #000;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      text-align: center;
      color: #bfcefb;
    }
    .chart-box-container {
      width: 100%;
      height: 70%;
      border-radius: 10px;
      padding: 10px 0;
      ul {
        height: 100%;
        overflow-y: auto;
        list-style: none;
      }
      li {
        display: flex;
        margin-top: 10px;
        padding: 0 20px;
        &.robot-record {
          justify-content: flex-start;
          .record-content {
            background-color: #bfcefb;
          }
        }
        &.user-record {
          justify-content: flex-end;
          .record-content {
            background-color: #00c6be;
            color: #fff;
          }
        }
        .record-content {
          border-radius: 7px;
          max-width: 70%;
          font-size: 13px;
          padding: 10px;
          word-wrap: break-word;
          white-space: normal;
          word-break: break-all;
        }
      }
    }
    .input-container {
      width: 90%;
      margin-top: 20px;
      input {
        box-sizing: border-box;
        resize:none;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        width: 100%;
        height: 60px;
        border-radius: 20px;
        border: 0;
        background-color: #64739c;
        color: #bfcefb;
        outline: none;
        padding: 10px 20px;
        transition: all 0.5s;
        cursor: pointer;
        &::placeholder {
          color: #bfcefb;
        }
        &:hover {
          background-color: #bfcefb;
          color: #0d2547;
          &::placeholder {
            color: #0d2547;
          }
        }
      }
    }
  }
  .avatar {
    width: 150px;
    cursor: pointer;
  }
}
</style>
