<template>
  <div class="contact">
    <Nav v-model="activeIndex"></Nav>
    <h1>Contact Information</h1>
    <div class="desc">
      Thank you for choosing iSecurity Platform as your learning and training
      website! For all your concerns and inquiries, please contact our reception
      hot line 24 hours a day and 7 days a week: +86 13906513176.
    </div>
    <div class="form">
      <el-card class="box-card">
        <div class="left">
          <img class="map" :src="require('@/assets/images/map.png')" alt="">
          <p>Map/Satellite</p>
          <p>The University of Hong Kong</p>
          <p>The Faculty of Education</p>
        </div>
        <div class="right">
          <div class="row first" style="text-align: center">
            Contact Us via Email
          </div>
          <div class="row">
            First Name: <input type="text" v-model="form.firstName" />
          </div>
          <div class="row">
            Last Name: <input type="text" v-model="form.lastName" />
          </div>
          <div class="row">
            Email: <input type="text" v-model="form.email" />
          </div>
          <div class="row">
            Subject: <input type="text" v-model="form.subject" />
          </div>
          <div class="row">
            Message: <input type="text" v-model="form.message" />
          </div>
        </div>
      </el-card>
    </div>
    <div class="submit">
      <button :class="{disabled}" @click="onSubmit">Submit</button>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  components: {
    Nav,
  },
  data: () => ({
    activeIndex: 6,
    form: {
      firstName: "",
      lastName: "",
      subject: "",
      message: "",
    },
  }),
  computed: {
    disabled() {
      return (
        !this.form.firstName ||
        !this.form.lastName ||
        !this.form.subject ||
        !this.form.message
      );
    },
  },
  methods: {
    onSubmit() {
      if (this.disabled) return;
      this.form = {
        firstName: "",
        lastName: "",
        subject: "",
        message: "",
      };
      this.$message({
        message: "Submitted successfully",
        type: "success",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.contact {
  background: rgba(13, 37, 71, 1);
  padding-bottom: 100px;
  color: #bfcefb;
  h1 {
    margin-top: 50px;
    text-align: center;
  }
  .desc {
    margin-top: 20px;
    text-align: center;
    padding: 0 100px;
  }
  & /deep/ .el-card {
    background-color: #394a70;
    border: 0;
    box-shadow: 0 0px 5px 0 #000;
    .el-card__body {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #bfcefb;
      .left,
      .right {
        width: 50%;
        padding: 20px;
      }
      .left {
        min-height: 300px;
        .map {
          width: 100%;
        }
      }
      .right {
        border-left: 1px solid #909fcb;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .row:not(.first) {
          border-bottom: 1px solid #909fcb;
          padding-bottom: 5px;
          input {
            margin-left: 10px;
            background-color: transparent;
            border: 0;
            outline: none;
            color: #bfcefb;
          }
        }
      }
    }
    .el-form-item__label {
      color: #bfcefb;
    }
  }
  .form {
    margin-top: 50px;
    padding: 0 200px;
  }
  .submit {
    margin-top: 50px;
    padding: 0 200px;
    text-align: center;
    button {
      border: 0;
      outline: none;
      cursor: pointer;
      width: 300px;
      height: 50px;
      line-height: 50px;
      border-radius: 10px;
      background-color: #00cc99;
      color: #fff;
      font-size: 18px;
      transition: all 0.5s;
      &.disabled {
        background-color: #aaa;
      }
    }
  }
}
</style>
