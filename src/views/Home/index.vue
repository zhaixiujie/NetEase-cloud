<!--
 * @Descripttion: 
 * @Author: Mr.You
 * @Date: 2020-10-12 14:47:41
 * @LastEditTime: 2020-10-23 21:32:02
-->
<template>
  <div class="home">
    <el-container>
      <el-header style="height: 60rem">
        <elheader />
      </el-header>
      <el-container>
        <el-aside width="130rem"><elaside /></el-aside>
        <el-main
          ><div class="header" v-if="isShow">
            <elmain />
          </div>
          <div class="main">
            <transition name="fade-transform" mode="out-in">
              <router-view></router-view>
            </transition></div
        ></el-main>
      </el-container>
      <el-footer style="height: 50rem"><elfooter /></el-footer>
    </el-container>
  </div>
</template>

<script>
import elheader from "./header";
import elmain from "./main";
import elfooter from "./footer";
import elaside from "./aside";

export default {
  name: "Home",
  components: { elheader, elaside, elmain, elfooter },
  data() {
    return {
      path: [
        "/Recommend",
        "/Leaderboard",
        "/SongList",
        "/Singer",
        "/AddedNewAlbum",
      ],
    };
  },
  computed: {
    isShow() {
      var path = this.$route.path;
      return this.path.includes(path);
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  .el-header {
    background-color: #9b0909;
    color: #333;
  }
  .el-footer {
    background-color: #2d2c2c;
    color: #333;
  }
  .el-aside {
    background-color: #ffffff;
    color: #333;

    height: calc(100vh - 110rem);
  }

  .el-main {

    background-color: #f5f5f5;
    color: #333;
    padding: 0rem;
    height: calc(100vh - 110rem);
    display: flex;
    z-index: 2;
    flex-direction: column;
    .main {
      // width: 1080rem;
      // margin: 0 auto;
    }
    .header {
      display: flex;
      background-color: #fff;
      justify-content: center;
      z-index: 100;
      position: sticky;
      top: 0;
    }
  }
}
</style>