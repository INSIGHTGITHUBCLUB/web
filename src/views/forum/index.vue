<template>
  <div class="forum">
    <Nav v-model="activeIndex"></Nav>
    <ForumNav></ForumNav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import ForumNav from './Nav'

export default {
  components: {
    Nav,
    ForumNav
  },
  data: () => ({
    activeIndex: 5
  })
};
</script>

<style lang="less" scoped>
.forum {
  & /deep/ .nav {
    background-color: rgba(13, 37, 71, 1);
  }
}
</style>