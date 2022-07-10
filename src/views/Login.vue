<template>
  <div class="login">
    <Nav v-model="activeIndex"></Nav>
    <div class="form">
      <el-card class="box-card">
        <el-form label-width="80px">
          <el-form-item label="Username">
            <input v-model="username" />
          </el-form-item>
          <el-form-item label="Password">
            <input v-model="password" type="password" />
          </el-form-item>
        </el-form>
        <div class="submit">
          <button @click="onSubmit">Login</button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { userStore } from '@/store'
import Nav from "@/components/Nav";

export default {
  components: {
    Nav,
  },
  data: () => ({
    activeIndex: 8,
    userStore: userStore(),
    username: "",
    password: "",
  }),
  methods: {
    onSubmit() {
      const user = {
        username: this.username,
        password: this.password,
        lesson1: 0,
        lesson2: 0,
        lesson3: 0,
      }
      this.userStore.isLogin = true
      this.userStore.username = this.username
      this.userStore.userList.push(user)
      this.$message({
        message: "Login successfully",
        type: "success",
      });
      this.$router.push('/home')
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  background: rgba(13, 37, 71, 1);
  .form {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
  & /deep/ .el-card {
    width: 700px;
    background-color: #394a70;
    border: 0;
    box-shadow: 0 0px 5px 0 #000;
    padding: 50px 30px 20px 30px;
    input {
      width: 90%;
      height: 30px;
      background-color: transparent;
      border: 1px solid #64739C;
      outline: none;
      color: #bfcefb;
      margin-left: 20px;
      padding-left: 20px;
      border-radius: 5px;
    }
    .el-card__body {
      color: #bfcefb;
    }
    .el-form-item__label {
      color: #bfcefb;
    }
  }
  .submit {
    margin-top: 50px;
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
    }
  }
}
</style>
