<template>
  <el-header class="e-header">
    <el-dropdown class="m-dropdown" @command="handleCommand">
      <span class="dropdown-link">
        王小虎<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="see">查看</el-dropdown-item>
        <el-dropdown-item divided command="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
import * as cookie from 'utils/cookie'
import storage from '../../utils/storage'
export default {
  name: 'e-header',
  methods: {
    handleCommand (command) {
      switch (command) {
        case 'logout':
          this.logout()
          break
        case 'see':
          this.$router.push('/userInfo')
      }
    },
    logout () {
      storage.l_removeItem('ACCESS_TOKEN')
      this.$router.push({path: '/login'})
    }
  },
  created () {
    console.log(storage.l_getItem('ACCESS_TOKEN'))
  }
}
</script>

<style lang="scss" scoped>
.e-header {
  // text-align: right;
  font-size: 12px;
  background-color: #fff;
  .m-dropdown {
    float: right;
  }
  .dropdown-link {
    cursor: pointer;
  }
}
</style>
