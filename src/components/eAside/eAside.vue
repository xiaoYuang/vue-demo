<template>
  <el-aside width="250px" class="e-aside">
    <el-menu :default-openeds="openeds"
             :default-active="activeIndex"
              background-color="#5865B5"
              text-color="#fff"
              active-text-color="#ffd04b"
             @select="handleSelectMenu">
      <el-submenu :index="`${index + 1}`"
                  v-for="(item, index) in menuList"
                  :key="index">
        <template slot="title"><i :class="item.icon"></i>{{item.title}}</template>
        <el-menu-item-group>
          <el-menu-item v-for="(child, key) in item.children"
                        :key="key"
                        :index="`${index + 1}-${key + 1}`">{{child}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
import { menuList } from '@/assets/js/menu'

export default {
  name: 'e-aside',
  data () {
    return {
      activeIndex: '1-1',
      openeds: ['1']
    }
  },
  methods: {
    // 菜单激活函数
    handleSelectMenu (key, keyPath) {
      console.log(key)
      this.activeIndex = key
      let opened = []
      opened.push(keyPath[0])
      this.openeds = opened
      switch (key) {
        case '1-1': this.$router.push({ path: '/' }); break
        case '4-1': this.$router.push({ path: '/role' }); break // 角色管理
      }
    }
  },
  created () {
    this.menuList = menuList
  }
}
</script>

<style lang="scss" scoped>
.e-aside {
  background:#5865B5;
  padding-top: 60px;
  /deep/ .el-menu-item-group__title {
    display: none;
  }
}
</style>
