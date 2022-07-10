<template>
  <div class="categories">
    <div class="banner">
      <img :src="require('@/assets/images/banner.png')" alt="" />
      <div class="mask">
        <h3>Forum</h3>
        <p>
          Thank for joining the forum of iSecurity Platform! Here you can create
          engaging conversations with your fellow learners and sharing knowledge
          with others.
        </p>
      </div>
    </div>
    <div class="create">
      <button>Create New Post</button>
    </div>
    <div class="list">
      <div class="row" @click="$router.push('/forum/welcome')">
        <div class="left">
          <h3>Welcoming Post</h3>
          <p>Here you can learn about the functions of the forum.</p>
        </div>
        <div class="mid">
          <div><i class="el-icon-view"></i>0</div>
          <div><i class="el-icon-chat-square"></i>0</div>
        </div>
        <div class="right">
          <div>Follow</div>
        </div>
      </div>
      <div class="row" @click="$router.push('/forum/rules')">
        <div class="left">
          <h3>Rules & Regulations</h3>
          <p>Here you can learn about the rules and regulations of the forum</p>
        </div>
        <div class="mid">
          <div><i class="el-icon-view"></i>0</div>
          <div><i class="el-icon-chat-square"></i>0</div>
        </div>
        <div class="right">
          <div>Follow</div>
        </div>
      </div>
      <div class="row" @click="$router.push('/forum/self')">
        <div class="left">
          <h3>Self-Introduction</h3>
          <p>Here you can introduce yourselves to others fellow learners.</p>
        </div>
        <div class="mid">
          <div><i class="el-icon-view"></i>0</div>
          <div><i class="el-icon-chat-square"></i>0</div>
        </div>
        <div class="right">
          <div>Follow</div>
        </div>
      </div>
      <div class="row" @click="$router.push('/forum/qa')">
        <div class="left">
          <h3>Questions & Answers</h3>
          <p>
            Here you can generate questions, get answers and share your
            knowledge.
          </p>
        </div>
        <div class="mid">
          <div><i class="el-icon-view"></i>0</div>
          <div><i class="el-icon-chat-square"></i>0</div>
        </div>
        <div class="right">
          <div>Follow</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.flex-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.categories {
  display: flex;
  flex-direction: column;
  align-items: center;
  .banner {
    display: flex;
    justify-content: center;
    img {
      position: absolute;
      height: 342px;
      width: 1100px;
    }
    .mask {
      height: 342px;
      width: 1100px;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 2;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h3 {
        color: #fff;
        font-size: 25px;
      }
      p {
        margin-top: 20px;
        color: #fff;
        width: 60%;
        font-size: 17px;
      }
    }
  }
  .create {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 1100px;
    padding: 20px 0;
    button {
      box-sizing: border-box;
      background-color: #69718b;
      border: 0;
      border-radius: 5px;
      color: #fff;
      outline: none;
      cursor: pointer;
      padding: 10px;
    }
  }
  .list {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 1100px;
    padding: 0 10px;
    .row {
      cursor: pointer;
      border: 1px solid #69718b;
      width: 100%;
      padding: 20px;
      border-radius: 5px;
      color: #69718b;
      margin-bottom: 20px;
      .flex-box();
      .left {
        width: 40%;
      }
      .mid {
        .flex-box();
        div {
          margin-right: 10px;
          i {
            margin-right: 5px;
          }
        }
      }
      .right {
        div {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
