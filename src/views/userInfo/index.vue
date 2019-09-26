<template>
  <div class="userInfo">
    <div class="base-info">
      <div>基本信息</div>
      <ul>
        <li>
          <span>手机号码</span>
          <span>{{userInfo.userPhone}}</span>
        </li>
        <li>
          <span>身份证号码</span>
          <span>{{userInfo.userPhone}}</span>
        </li>
        <li>
          <span>性别</span>
          <span>{{userInfo.userPhone}}</span>
        </li>
        <li>
          <span>出生日期</span>
          <span>{{userInfo.userPhone}}</span>
        </li>
        <li>
          <span>岗位</span>
          <span>{{userInfo.userPhone}}</span>
        </li>
        <li>
          <span>企业名称</span>
          <span>{{userInfo.userPhone}}</span>
        </li>
        <li>
          <span>所属部门</span>
          <span>{{userInfo.userPhone}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    this.userInfo = JSON.parse(localStorage.getItem('ACCESS_TOKEN'))
  }
}
</script>
<style lang="scss">
  .userInfo {
    background-color: #fff;
    padding: 10px;
    .base-info {
      div {
        line-height: 50px;
      }
      ul {
        li {
          line-height: 40px;
          font-size: 13px;
          display: flex;
          span:nth-child(1) {
            color: #A4A4A4;
            width: 80px;
            margin-right: 40px;
            text-align: right
          }
          span:nth-child(2){
            color: #353535;
            max-width: 500px;
          }
        }
      }
    }
  }
</style>