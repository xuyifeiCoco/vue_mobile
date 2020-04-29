<template>
  <div id="app">
    <!-- <div>{{userInfo.name}}</div>
    <van-button @click="changeName">修改name</van-button> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {
    changeName() {
      // this.$store.commit("updateUser", { name: "测试", isAdmin: false });
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.user.userInfor;
    }
  },
  mounted() {
    console.log(222)
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
