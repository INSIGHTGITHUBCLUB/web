<template>
  <div class="forum-nav">
    <div class="left">
      <button @click="$router.push('/forum')">Categories</button>
    </div>
    <div class="right">
      <el-input
        placeholder="Search"
        prefix-icon="el-icon-search"
        v-model="search"
      >
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    search: "",
  }),
};
</script>

<style lang="less" scoped>
.forum-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 215px;
  .left {
    width: 70%;
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
  .right {
    width: 20%;
  }
}
</style>
