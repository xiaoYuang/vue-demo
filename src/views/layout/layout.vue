<template>
  <el-container class="container">
    <e-aside/>
    <el-container class="main-container">
      <e-header style="width: 100%;"/>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import eHeader from '@/components/eHeader/eHeader'
import eAside from '@/components/eAside/eAside'
import * as cookie from 'utils/cookie'

export default {
  name: 'layout',
  components: {
    eHeader,
    eAside
  },
  created () {
    console.log(cookie.decode(cookie.get('TOKEN'))) // 解密
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  .main-container {
    flex-direction: column;
  }
}
</style>
