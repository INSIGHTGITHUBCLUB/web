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
  padding: 10px 170px;
  .left {
    width: 70%;
    button {
      border: 0;
      background-color: transparent;
      color: #000;
      outline: none;
      padding: 0 20px;
      font-size: 15px;
      cursor: pointer;
      font-family: Avenir, Helvetica, Arial, sans-serif;
    }
  }
  .right {
    width: 20%;

  }
}
</style>
