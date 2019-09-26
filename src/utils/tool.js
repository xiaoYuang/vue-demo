/****************
 * 封装vue全局操作方法
 ****************/
/* import store from '../store' */
export default{
  install: function (Vue, options) {
    // 手机号正则
    Vue.prototype.phoneReg = /^1[3|4|5|7|8]\d{9}$/

    Vue.prototype.Number = /[^1-9]/g

    Vue.prototype.formatDateTime = function (type, setDate) {
      let date = new Date()
      if (type == 'today'){
      } else if (type == 'tomorrow'){
        date = new Date(setDate)
        date.setTime(date.getTime() + 24 * 60 * 60 * 1000)
      }
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? ('0' + m) : m
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      /*  let h = date.getHours()
      h = h < 10 ? ('0' + h) : h
      let minute = date.getMinutes()
      let second = date.getSeconds()
      minute = minute < 10 ? ('0' + minute) : minute
      second = second < 10 ? ('0' + second) : second */
      /* return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second; */
      return y + '-' + m + '-' + d
    };

    Vue.prototype.timeFormat = function (date, fmt) {
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
      }
      for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + ''
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length))
        }
      }
      return fmt
    }
    // 调用：
    // this.timeFormat(new Date(1469281964000),'yyyy-MM-dd')//年-月-日
    // this.timeFormat(new Date(1469281964000),'yyyy-MM-dd hh:mm:ss')//年-月-日 时分秒
    // this.timeFormat(new Date(1469281964000),'yyyy-MM-dd hh:mm') //年-月-日 时分
    Vue.prototype.getDate = function (str = 0, time = '', move = 0) { // 获取当前时间
      let date;
      if (time != ''){
        date = new Date(time);
      } else {
        date = new Date();
      }
      date = new Date(date.getTime() + 24 * 60 * 60 * 1000 * str + move * 24 * 60 * 60 * 1000);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = '0' + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate;
      }
      let currentdate = year + '-' + month + '-' + strDate;
      return currentdate;
    }
    Vue.prototype.copyAndPaste = function (data) {
      let oInput = document.createElement('input')
      oInput.value = data
      document.body.appendChild(oInput)
      oInput.select()
      document.execCommand('Copy')
      oInput.style.display = 'none'
      this.$notify({
        title: '提示',
        message: '复制成功，可粘贴',
        type: 'success'
      });
    }

    Vue.prototype.getCompanyId = function () {
      if (localStorage.getItem('ACCESS_TOKEN')) {
        return JSON.parse(localStorage.getItem('ACCESS_TOKEN')).companyId
      }
    }
    
    Vue.prototype.messages = function (desc, isSuccess, type = "success") {
      return this.$message({
        message: desc + isSuccess,
        type: type
      })
    }
  }
}
