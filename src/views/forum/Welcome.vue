<template>
  <div class="welcome">
    <div class="banner">
      <h1>Welcoming Post</h1>
      <p>Here you can learn about the functions of the forum.</p>
    </div>
    <div class="detail">
      <div class="detail-left">
        <div class="header">
          <div class="header-left">
            <div class="avatar">{{ userStore.username[0].toUpperCase() }}</div>
            <p>{{ userStore.username }}</p>
          </div>
          <div class="header-right">Jun 02,2021 · Edited: Jun 02,2021</div>
        </div>
        <h1 class="post-title">Welcome to the Welcoming Post!</h1>
        <p class="in">in welcome post</p>
        <div class="post-content">
          <p>Dear learners:</p>
          <p>Hi!</p>
          <p>
            Welcome to the discussion forum, the course forum for the
            development and design of the “iSecurity e-Learning Platform”.
          </p>
          <p>
            This forum can provide you with a space to share your learning
            process. During the course study, you can share your learning
            process and interesting ideas with other students in the forum.
          </p>
          <p>
            The forum will provide a channel for solving common problems. While
            you are engaging and exploring the course activities, you might face
            some problems regarding information security. Here you can post your
            questions and get help from other learners. At the same time, you
            can also answer questions posted by other learners.
          </p>
          <p>
            In addition, the forum will regularly share some articles about
            information security, and you can welcome to participate in learning
            and make constructive comments!
          </p>
          <p>Let’s join the course together!</p>
          <p>The Design and Development Team</p>
          <p>The University of Hong Kong</p>
        </div>
        <div class="comment-info">
          <p>9 views</p>
          <p>0 comments</p>
        </div>
        <div class="footer" :class="{ padding: !commentAreaVisible }">
          <div class="footer-left">
            <p @click="commentAreaVisible = !commentAreaVisible">
              <i class="el-icon-chat-square"></i> Comment
            </p>
            <p><i style="color: #ffd714" class="el-icon-star-off"></i> 0</p>
          </div>
          <div class="footer-right">
            <i class="el-icon-share"></i>
            <span>Share</span>
          </div>
        </div>
        <h4>Comments</h4>
        <ul class="comment-list">
          <template v-if="commentList.length">
            <li v-for="(c, index) of commentList" :key="index">
              <p>{{ c.content }}</p>
              <p>{{ c.time }}</p>
            </li>
          </template>
          <li v-else>no comments</li>
        </ul>
        <div class="comment-area" v-show="commentAreaVisible">
          <textarea
            placeholder="Write a comment..."
            v-model="comment"
          ></textarea>
          <button class="publish" @click="publish">Publish</button>
        </div>
      </div>
      <div class="detail-right">
        <button>Comment</button>
        <button class="follow"><i class="el-icon-bell"></i> Follow Post</button>
        <div class="info">
          <div class="row">
            <i class="el-icon-view"></i>
            <p>9 views</p>
          </div>
          <div class="row">
            <i class="el-icon-chat-square"></i>
            <p>0 comments</p>
          </div>
        </div>
        <div class="similar-posts">
          <h3>Similar Posts</h3>
          <p @click="$router.push('/forum/rules')">
            Welcome to the Rules & Regulations!
          </p>
          <p @click="$router.push('/forum/self')">
            Welcome to the Self-Introduction!
          </p>
          <p @click="$router.push('/forum/qa')">
            Welcome to the Questions & Answers!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { userStore } from "@/store";

export default {
  data: () => ({
    commentAreaVisible: true,
    commentList: [],
    comment: "",
    userStore: userStore()
  }),
  methods: {
    publish() {
      if (!this.comment) return
      this.commentList.push({
        content: this.comment,
        time: moment(new Date()).format("yyyy-MM-DD HH:mm:ss"),
      });
      this.comment = "";
    },
  },
};
</script>

<style lang="less" scoped>
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  .banner {
    box-sizing: border-box;
    width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 100px;
    background-color: #a3c1e0;
    color: #fff;
    height: 300px;
    h1 {
      font-size: 50px;
    }
  }
  .detail {
    width: 1100px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .detail-left {
      width: 80%;
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .header-left {
          display: flex;
          align-items: center;
          .avatar {
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background-color: orangered;
            border-radius: 50%;
            color: #fff;
          }
          p {
            margin-left: 10px;
            color: #69718b;
          }
        }
        .header-right {
          color: #69718b;
        }
      }
      .post-title {
        margin-top: 20px;
      }
      .in {
        color: #69718b;
      }
      .post-content {
        p {
          margin: 30px 0;
        }
      }
      .comment-info {
        display: flex;
        align-items: center;
        color: #69718b;
        p {
          margin-right: 10px;
        }
      }
      .footer {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #51586e;
        &.padding {
          margin-bottom: 100px;
        }
        .footer-left,
        .footer-right {
          display: flex;
          align-items: center;
          p {
            margin-right: 10px;
            cursor: pointer;
          }
          i {
            cursor: pointer;
          }
          span {
            cursor: pointer;
            display: inline-block;
            margin-left: 10px;
          }
        }
      }
      h4 {
        margin-top: 50px;
      }
      .comment-list {
        margin-top: 10px;
        list-style: none;
        li {
          border-radius: 10px;
          border: 1px solid #d5dcf3;
          padding: 20px;
          margin-bottom: 10px;
          p:last-child {
            float: right;
            font-size: 13px;
            color: #69718b;
          }
        }
      }
      .comment-area {
        box-sizing: border-box;
        padding: 20px;
        margin: 50px 0 100px 0;
        height: 200px;
        border: 1px solid #d5dcf3;
        border-radius: 10px;
        textarea {
          width: 100%;
          height: 80%;
          font-family: Avenir, Helvetica, Arial, sans-serif;
          letter-spacing: 1px;
          resize: none;
          border: 0;
          outline: none;
        }
        button {
          float: right;
          box-sizing: border-box;
          background-color: #69718b;
          border: 0;
          border-radius: 5px;
          color: #fff;
          outline: none;
          cursor: pointer;
          width: 150px;
          padding: 10px;
          margin-bottom: 20px;
        }
      }
    }
    .detail-right {
      width: 20%;
      display: flex;
      align-items: center;
      flex-direction: column;
      button {
        box-sizing: border-box;
        background-color: #69718b;
        border: 0;
        border-radius: 5px;
        color: #fff;
        outline: none;
        cursor: pointer;
        width: 150px;
        padding: 10px;
        margin-bottom: 20px;
        &.follow {
          border: 1px solid #69718b;
          background-color: #fff;
          color: #69718b;
        }
      }
      & > div {
        box-sizing: border-box;
        border: 1px solid #69718b;
        padding: 10px;
        border-radius: 5px;
        width: 150px;
        margin-bottom: 20px;
        color: #69718b;
      }
      .info {
        .row {
          display: flex;
          align-items: center;
          i {
            margin-right: 10px;
          }
        }
      }
      .similar-posts {
        p {
          margin: 10px 0;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
