<template>
  <div class="home">
    <Nav v-model="activeIndex"></Nav>
    <div class="content_baram1">
      <div class="content_title">
        <h1>Information Security Learning and Training</h1>
        <div>
          that’s fun and interactive for every employee!<br />
          iSecurity is a fun eLearning platform to educate and train<br />
          employees by boosting their security awareness,<br />
          empowering the workforce and securing the business.
        </div>
        <img src="~@/assets/Video/ws1.png" width="400px" />
      </div>
      <img src="~@/assets/Video/works.svg" width="960px" height="444px" />
    </div>
    <div class="content_baram2">
      <div class="title">
        <h1>Trigger events: Why we created the iSecurity platform?</h1>
        <div style="color: #b7bbcb; line-height: 20px; margin: 20px">
          It has come to our attention that employees are often tired of
          watching information security<br />
          awareness training created by PowerPoint. Instead of embracing the
          learning of information<br />
          security, employees learned the knowledge with minimum interests and
          responded by resenting of <br />learning it. The website adopted the
          learning with technology constructivist models, which<br />
          emphasize on the technology as a tool in a learning activity. It is
          designed to make employees more<br />
          active in their learning and use of technology. It trains employees by
          using gamified quizzes and<br />
          engaging videos based on real-world scenarios.
        </div>
      </div>
    </div>
    <div class="content_baram3">
      <div class="title">
        Objectives: What is the goal of the iSecurity platform?
      </div>
      <div class="Objectives">
        <div class="Objectives_title">
          <div class="content">
            <div class="Objectives_img">
              <img src="~@/assets/Video/f.svg" width="25px" height="25px" />
            </div>
            <p>Educate</p>
          </div>

          <div style="color: #b7bbcb">
            Strength employees’ knowledge and awareness of information security.
          </div>
        </div>
        <div class="Objectives_title">
          <div class="content">
            <div class="Objectives_img">
              <img src="~@/assets/Video/x.svg" width="25px" height="25px" />
            </div>
            <p>Engage</p>
          </div>

          <div style="color: #b7bbcb">
            Interact with employees by enhancing their understanding of personal
            security.
          </div>
        </div>
        <div class="Objectives_title">
          <div class="content">
            <div class="Objectives_img">
              <img src="~@/assets/Video/s.svg" width="25px" height="25px" />
            </div>
            <p>Evaluate</p>
          </div>
          <div style="color: #b7bbcb">
            Measure the effectiveness of enterprise security training by
            examining employees’ problem-solving abilities.
          </div>
        </div>
      </div>
    </div>
    <div class="content_baram4">
      <div>Strengths: What are the benefits of the iSecurity platform?</div>
      <p>
        <i class="el-icon-circle-check"></i>One platform fits all —— The
        eLearning platform has everything you need to drive employee information
        security awareness.
      </p>
      <p>
        <i class="el-icon-circle-check"></i>Division of the learning unit —— The
        eLearning platform has three learning sessions, which divides the course
        content from the micro level to the macro level.
      </p>
      <p>
        <i class="el-icon-circle-check"></i>Gamification design —— The eLearning
        platform engages users by embedding gamified elements throughout the
        learning process.
      </p>
      <p>
        <i class="el-icon-circle-check"></i>Story-based learning experience ——
        The eLearning platform deliver training materials by introducing
        interesting stories to employees.
      </p>
      <p>
        <i class="el-icon-circle-check"></i>Engaging videos —— The eLearning
        platform provides personalized videos in each session to attract
        employees’ attention.
      </p>
      <p>
        <i class="el-icon-circle-check"></i>Gamified quizzes —— Gamified quizzes
        increase the joy of the learning experience, allowing employees to
        evaluate their learning results and reinforce their understanding of the
        training content.
      </p>
      <p>
        <i class="el-icon-circle-check"></i>Guided learning with feedback ——
        Employees will receive feedback and guided suggestions after completing
        each quiz.
      </p>
      <p>
        <i class="el-icon-circle-check"></i>Interactive training content based
        on real-world scenarios —— Employees could get hands-on experience by
        putting the knowledge they have learned into practice.
      </p>
      <p>
        <i class="el-icon-circle-check"></i>Reward system with leaderboard ——
        Leaderboard uses the concept of positive reinforcement to invite
        competition and promotes the overall learning efficiency. After
        completing each session, employees will receive corresponding scores
        based on their performance and the results will show on the leaderboard
        to mark their achievement.
      </p>
      <p>
        <i class="el-icon-circle-check"></i>Multimedia Learning resources ——
        Multimedia learning resources is embedded in the iSecurity learning
        platform, such as videos,
      </p>
    </div>
    <div class="content_baram5">
      <div>Strengths: What are the benefits of the iSecurity platform?</div>
      <el-row class="rows">
        <el-col :span="4">
          <div class="grid-contents">
            <div class="absolutes balacks"></div>
            <img src="~@/assets/Video/du1.svg" width="36px" height="36px" />
            <p>Home</p>
            <div>
              Introduction, trigger events, objectives, strengths & core
              features.
            </div>
            <div class="antialiased black"></div>
          </div>
        </el-col>
        <el-col :span="4"
          ><div class="bg-purples">
            <div class="absolutes"></div>
            <img src="~@/assets/Video/du2.svg" width="36px" height="36px" />
            <p>Lessons</p>
            <div>
              Access three sessions and other digital content released in the
              platform.
            </div>
            <div class="antialiased"></div></div
        ></el-col>
        <el-col :span="4"
          ><div class="grid-contents">
            <div class="absolutes balacks"></div>
            <img src="~@/assets/Video/du3.svg" width="36px" height="36px" />
            <p>Session 1</p>
            <div>Security need, video & interactive courses.</div>
            <div class="antialiased black"></div>
          </div>
        </el-col>
        <el-col :span="4"
          ><div class="bg-purples">
            <div class="absolutes"></div>
            <img src="~@/assets/Video/du4.svg" width="36px" height="36px" />
            <p>Session 2</p>
            <div>Personal security, video & interactive courses.</div>
            <div class="antialiased"></div></div
        ></el-col>
        <el-col :span="4"
          ><div class="grid-contents">
            <div class="absolutes balacks"></div>
            <img src="~@/assets/Video/du5.svg" width="36px" height="36px" />
            <p>Session 3</p>
            <div>Enterprise security, video & interactive courses.</div>
            <div class="antialiased black"></div></div
        ></el-col>
      </el-row>
      <el-row class="rows">
        <el-col :span="4"
          ><div class="bg-purples">
            <div class="absolutes"></div>
            <img src="~@/assets/Video/du6.svg" width="36px" height="36px" />
            <p>Resources</p>
            <div>
              Access a library of security awareness videos, posters,
              infographics, readings & downloads.
            </div>
            <div class="antialiased"></div></div
        ></el-col>
        <el-col :span="4"
          ><div class="grid-contents">
            <div class="absolutes balacks"></div>
            <img src="~@/assets/Video/du7.svg" width="36px" height="36px" />
            <p>Forum</p>
            <div>Post assignments or questions for peer review.</div>
            <div class="antialiased black"></div></div
        ></el-col>
        <el-col :span="4"
          ><div class="bg-purples">
            <div class="absolutes"></div>
            <img src="~@/assets/Video/du8.svg" width="36px" height="36px" />
            <p>Support</p>
            <div>
              Provide technical support for accessing email contacts, chat-bot
              support & one-on-one tutorials.
            </div>
            <div class="antialiased"></div></div
        ></el-col>
        <el-col :span="4"
          ><div class="grid-contents">
            <div class="absolutes balacks"></div>
            <img src="~@/assets/Video/du9.svg" width="36px" height="36px" />
            <p>Credit</p>
            <div>
              Provide citation page to the sources utilized throughout the
              iSecurity platform.
            </div>
            <div class="antialiased black"></div></div
        ></el-col>
        <el-col :span="4"
          ><div class="bg-purples">
            <div class="absolutes"></div>
            <img src="~@/assets/Video/du10.svg" width="36px" height="36px" />
            <p>Login</p>
            <div>
              Password credentials are required to use for each employees login
              the platform.
            </div>
            <div class="antialiased"></div></div
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  components: {
    Nav,
  },
  data: () => ({
    activeIndex: 0
  })
};
</script>

<style scoped lang="less">
.home {
  width: 100%;
  background: rgba(13, 37, 71, 1);
  .title {
    text-align: center;
    padding: 8px;
    font-size: 16px;
    color: #fff;
    font-weight: 700;
  }
  .content_baram1,
  .content_baram2 {
    position: relative;
    padding: 80px 150px;
    background: url("../../src/assets/Video/work1.png") center/cover no-repeat;
    height: 650px;
    background-size: 100% 100%;
    > img {
      position: absolute;
      right: 0px;
      top: 110px;
    }
    .content_title {
      width: 55%;
      > h1 {
        padding: 34px 0 27px;
        font-size: 52px;
        color: #fff;
      }
      > div {
        color: #b7bbcb;
        font-size: 20px;
      }
    }
  }
}
.content_baram2 {
  background: url("../../src/assets/Video/work2.jpg") center/cover no-repeat !important;
  height: 353px !important;
  > title {
    > h1 {
      font-size: 40px;
      color: #fff;
    }
  }
}
.content_baram3 {
  padding: 0 150px;
  background: rgb(8, 26, 50);
  .Objectives {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: auto;

    > div {
      width: 30%;
      margin-top: 30px;
      p {
        font-size: 20px;
        color: #fff;
      }
      div {
        font-size: 18px;
        color: #fff;
        margin-top: 10px;
      }
    }
  }
}
.content_baram4 {
  background: url("../../src/assets/Video/work3.jpg") center/cover no-repeat;
  height: 740px;
  background-size: 100% 100%;
  padding: 90px 20% 30px 20%;
  > div {
    color: #fff;
    font-size: 36px;
  }
  > p {
    font-size: 18px;
    color: #fff;
    margin: 27px 0;
    display: flex;
    align-items: center;
  }
}
.el-icon-circle-check {
  color: #1e7be4;
  font-size: 25px;
  margin-right: 10px;
}
.content_baram5 {
  background: url("../../src/assets/Video/work4.jpg") center/cover no-repeat;
  height: 640px;
  background-size: 100% 100%;
  padding: 90px 10% 30px 10%;
  > div {
    text-align: center;
    font-size: 25px;
    color: #fff;
  }
}
.rows {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
.grid-contents {
  background: rgb(26, 32, 44) !important;
}
.grid-contents:hover {
  box-shadow: 2px 0px 1px 8px rgba(26, 32, 44, 0.1);
}
.bg-purples,
.grid-contents {
  background-color: rgb(78, 79, 128);
  width: 190px;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;
  padding: 20px;
  position: relative;
  overflow: hidden;
  > img {
    position: absolute;
    top: 30px;
  }
  > p {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 50px;
  }
  > div {
    font-size: 14px;
    color: #b7bbcb;
  }
}
.bg-purples {
  background: rgb(78, 79, 128) !important;
}
.bg-purples:hover {
  box-shadow: 0px 0px 0px 8px rgba(78, 79, 128, 0.1);
}
.antialiased,
.absolutes {
  width: 160px;
  height: 160px;
  background: rgb(65, 66, 107);
  opacity: 0.3;
  position: absolute;
  right: -80px;
  bottom: -80px;
  transform: rotate(45deg) !important;
}
.black {
  background: rgb(0, 0, 0) !important;
  opacity: 0.1 !important;
}
.absolutes {
  top: -80px !important;
  left: -80px !important;
  background: rgb(150, 151, 201) !important;
  opacity: 0.1;
}
.balacks {
  background: rgb(74, 85, 104) !important;
  opacity: 0.1 !important;
}
.Objectives_img {
  background: rgb(16, 45, 123);
  padding: 10px;
  width: 30px;
  height: 30px;
  border-radius: 250px;
  margin-right: 10px;
  > img {
    margin: 3px 0 0 3px;
  }
}
.Objectives_title {
  .content {
    display: flex;
    margin-left: -63px;
    align-items: center;
  }
}
.el-popper /deep/ .popper__arrow {
  border-bottom-color: #1ebef4 !important;
  left: 50% !important;
  visibility: hidden;
}
/deep/.el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: #00cc99;
  color: #fff;
}
</style>
