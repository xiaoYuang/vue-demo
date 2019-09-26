import { post, get, Delete } from '../../utils/axiosConfig'
import qs from 'qs'
export default {
  /**
   * 
   */
  // 获取token
  getToken(data) {
    return post('/bida-user/oauth/token', qs.stringify(data))
  },
  // 获取用户信息
  getUserInfo (data) {
    return post('/bida-user/sysUser/getUserInfo', data)
  },
  // 获取角色
  sysRole (data) {
    return get('/bida-user/sysRole/page', data)
  }
}