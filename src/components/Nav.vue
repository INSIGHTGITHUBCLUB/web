<template>
  <div class="nav">
    <div class="header_left" @click="$router.push('/')">iSecurity</div>
    <div class="header_right">
      <div v-for="(item, index) in list" :key="index">
        <el-dropdown>
          <span
            class="el-dropdown-link"
            @click.stop="clickHandler(index, item)"
            style="color: #fff"
            :class="{ active: value == index ? true : false }"
          >
            {{ item.name
            }}<i
              v-if="item.content && item.content.length > 0"
              class="el-icon-arrow-down el-icon--right"
            ></i>
          </span>
          <el-dropdown-menu
            v-if="!item.content || !item.content.length"
            ref="aaa"
            style="
              padding: 0;
              margin: 0;
              background: rgb(13, 37, 71);
              border: 0;
            "
          >
            <el-dropdown-item></el-dropdown-item>
          </el-dropdown-menu>
          <el-dropdown-menu
            slot="dropdown"
            v-if="item.content && item.content.length"
          >
            <el-dropdown-item
              @click.native="clickHandler(item.id, { name: dropdowns.name })"
              :divided="true"
              :command="indexs"
              v-for="(dropdowns, indexs) in item.content"
              :key="indexs"
              >{{ dropdowns.name }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { userStore } from "@/store";

export default {
  props: ["value"],
  data: () => ({
    userStore: userStore(),
    list: [
      { id: 0, name: "Home" },
      {
        id: 1,
        name: "Resources",
        content: [
          { id: 0, name: "Lessons1" },
          { id: 1, name: "Lessons2" },
          { id: 2, name: "Lessons3" },
        ],
      },
      {
        id: 2,
        name: "Activity",
        content: [
          { id: 0, name: "Lesson 1 Game" },
          { id: 1, name: "Lesson 2 Game" },
          { id: 2, name: "Lesson 3 Game" },
        ],
      },
      {
        id: 3,
        name: "Support",
      },
      {
        id: 4,
        name: "Evalution",
      },
      { id: 5, name: "Forum" },
      { id: 6, name: "Contact" },
      {
        id: 7,
        name: "Learning Analytics",
      }
    ],
  }),
  created() {
    if (!this.userStore.isLogin) {
      this.list.push({ id: 8, name: "Log in" });
    } else {
      this.list.push({ id: 8, name: "Log out" });
    }
  },
  methods: {
    dropdowns(a, type) {
      this.$refs.aaa[type].appendArrow(false);
    },
    clickHandler(index, item) {
      switch (item.name) {
        case "Home":
          this.$router.push("/home");
          break;
        case "Lessons1":
          this.$router.push("/about");
          break;
        case "Lessons2":
          this.$router.push("/enterprise");
          break;
        case "Lessons3":
          this.$router.push("/personal");
          break;
        case "Learning Analytics":
          this.$router.push("/learning-analytics");
          break;
        case "Lesson 1 Game":
          this.$router.push("/activity?game=1");
          break;
          case "Lesson 2 Game":
          this.$router.push("/activity?game=2");
          break;
          case "Lesson 3 Game":
          this.$router.push("/activity?game=3");
          break;
        case "Forum":
          this.$router.push("/forum");
          break;
        case "Contact":
          this.$router.push("/contact");
          break;
        case "Log in":
          this.$router.push("/login");
          break;
        case "Log out":
          this.userStore.isLogin = false
          location.reload();
          break;
        default:
          break;
      }
      this.$emit("input", index);
    },
  },
};
</script>

<style lang="less" scoped>
.nav {
  padding: 22.5px 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 40px;
    text-align: center;
  }
  .header_left {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
  .header_right {
    display: flex;
    > div {
      padding: 15px 20px;
      color: #fff;
      font-family: "Open Sans", sans-serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      text-transform: none;
      font-size: 16px;
    }
    > div:hover {
      color: #00cc99;
      cursor: pointer;
    }
  }
}
.active {
  color: #00cc99 !important;
}
</style>
