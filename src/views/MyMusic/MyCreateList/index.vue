<!--
 * @Descripttion: 我创建的歌单
 * @Author: Mr.You
 * @Date: 2020-10-12 16:07:04
 * @LastEditTime: 2020-10-26 15:29:56
-->
<template>
  <div class="content1">
    <div class="content_menu">
      <h3 style="padding-left: 12rem">我创建的歌单</h3>
      <el-menu :default-active="initMenu" @select="handleSelect">
        <el-menu-item
          v-for="(item, index) in userList"
          :key="index"
          :index="item.id.toString()"
          v-show="!item.ordered"
        >
          <el-image
            :src="item.coverImgUrl"
            style="width: 50rem; padding-right: 10rem"
            :lazy="true"
          ></el-image>
          <span slot="title"
            >{{ item.name.slice(0, 5) }}
            <span v-show="item.name.length > 5" style="font-size: 15rem"
              >...</span
            >
          </span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content_detail"><songs :id="initId" /></div>
  </div>
</template>





<script>
import { getToken } from "@/utils/cookie.js";
import { topList } from "@/api/index.js";
import songs from "./songs";
import { UserPlaylist } from "@/api/index";
export default {
  components: {
    songs,
    // LeaderList,
  },

  data() {
    return {
      userList: [],
      NewId: "",
    };
  },
  computed: {
    account() {
      return JSON.parse(getToken("account"));
    },
    initId() {
      if (this.NewId == "") {
        return this.userList.length != 0 && this.userList[0].id;
      } else {
        return this.NewId;
      }
    },
    initMenu() {
      var ID = this.$route.query.id;
      if (ID) {
        return ID;
      }
      if (this.userList.length != 0) {
        return this.userList[0].id.toString();
      }
    },
  },
  mounted() {
    this.getUserPlaylist();
  },
  methods: {
    async getUserPlaylist() {
      var res = await UserPlaylist({ uid: this.account.id });
      this.userList = res.playlist;
    },

    handleSelect(key, keyPath) {
      this.$router.push({ path: "/MyCreateList", query: { id: key } });
      this.NewId = key;
    },
  },
};
</script>
<style lang="scss" scoped>
.content1 {
  // width: 70vw;

  background-color: #fff;
  display: flex;
  .content_menu {
    // margin: 0 10rem 0 0;

    // display: -webkit-box;
    // -webkit-line-clamp: 1;
    // -webkit-box-orient: vertical;
    // margin: 10rem;
    // width: 120rem;
    flex: 1;
    text-align: left;
    .el-image {
      border-radius: 5rem;
    }
  }
  .content_detail {
    // padding-right: 100rem;
    margin: 10rem;
    flex: 6;
  }
}
</style>