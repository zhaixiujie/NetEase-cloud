<!--
 * @Descripttion: 左侧导航栏
 * @Author: Mr.You
 * @Date: 2020-10-12 19:38:36
 * @LastEditTime: 2020-10-23 12:27:21
-->

<template>
  <el-menu
    :default-active="activeMenu"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :router="true"
  >
    <el-menu-item index="/Recommend">
      <span slot="title">发现音乐</span>
    </el-menu-item>
    <!-- <el-menu-item index="/MyCreateList">
      <span slot="title">我的歌单</span>
        <el-menu-item index="/MyCreateList">我的歌单</el-menu-item>
    </el-menu-item> -->
    <el-menu-item v-show="!auth" index="/MyMuisc">我的音乐</el-menu-item>
    <el-menu-item v-show="auth" index="/MyCreateList">我的歌单</el-menu-item>
    <el-menu-item v-show="auth" index="/MyLoveList">收藏歌单</el-menu-item>
  </el-menu>
</template>





<script>
import { getToken, removeCookie } from "@/utils/cookie";

export default {
  data() {
    return {
      initMenu: ["/Recommend", "/MyMuisc", "/MyCreateList", "/MyLoveList"],
    };
  },
  computed: {
    auth() {
      var isLogin = this.$store.state.isLogin;
      if (isLogin) {
        return isLogin;
      } else if (getToken("auth")) {
        return true;
      } else {
        return false;
      }
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
   
      if (this.initMenu.includes(path)) {
        return path;
      }
      return "/Recommend";
    },
  },
  methods: {
    handleOpen() {},
    handleClose() {},
  },
};
</script>
<style lang="scss" scoped>
/deep/.el-submenu {
  padding: 0 !important;
}
.el-menu-item {
  padding-left: 0 !important;
}
/deep/.el-submenu__title {
  padding-left: 0 !important;
}
/deep/.el-icon-arrow-down:before {
  content: none !important;
}
// .el-submenu .el-menu-item {
//   // height: 50rem;
//   // line-height: 50rem;
//   padding: 0;
//   min-width: 0;
// }
</style>