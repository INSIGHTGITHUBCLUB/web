import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => ({
    isLogin: false,
    username: "",
    userList: [],
  }),
  persist: {
    enabled: true,
    strategies: [
      {
          key: 'user',
          storage: localStorage,
      }
    ]
  }
});
