<template>
  <el-container>
    <el-aside width="200px">
      <el-menu mode="vertical" style="height: 100vh" :default-active="$route.path" router>
        <el-submenu
          v-for="(item, index) in menu.items"
          :index="index + 1"
          :key="`menu-item-${index}`"
        >
          <template slot="title">{{ item.title }}</template>
          <el-menu-item
            v-for="(subItem, subIndex) in item.items"
            :index="subItem.path"
            :key="`menu-item-${index}-${subIndex}`"
          >
            {{ subItem.title }}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header height=""> Svideo后台管理界面 </el-header>
      <el-main height="">
        <router-view></router-view>
      </el-main>
      <el-footer height="">
        <!-- Footer content -->
      </el-footer>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class Main extends Vue {
  menu = {
    items: [
      {
        title: "内容管理",
        items: [
          {
            path: "/",
            title: "首页",
          },
          {
            path: "/courses/list",
            title: "课程管理",
          },
          {
            path: "/courses/list",
            title: "课时管理",
          },
        ],
      },
      {
        title: "运营管理",
        items: [
          {
            path: "/users",
            title: "用户管理",
          },
        ],
      },
    ],
  };
}
</script>
<style></style>
