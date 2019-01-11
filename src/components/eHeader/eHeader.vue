<template>
  <el-header class="e-header">
    <el-dropdown class="m-dropdown" @command="handleCommand">
      <span class="dropdown-link">
        王小虎<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item divided command="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
import * as cookie from 'utils/cookie'

export default {
  name: 'e-header',
  methods: {
    handleCommand (command) {
      switch (command) {
        case 'logout':
          this.logout()
          break
      }
    },
    logout () {
      cookie.remove('TOKEN')
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style lang="scss" scoped>
.e-header {
  // text-align: right;
  font-size: 12px;
  .m-dropdown {
    float: right;
  }
  .dropdown-link {
    cursor: pointer;
  }
}
</style>
