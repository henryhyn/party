import Hex from '../utils/Hex'

export default {
  login(cb = Hex.empty) {
    wx.getUserInfo({
      lang: 'zh_CN',
      success: res => {
        const data = res.userInfo
        wx.login({
          success: res => {
            data.code = res.code
            wx.request({
              url: `${Hex.domain}/api/users/login`,
              method: 'POST',
              data,
              success: res => cb(res.data)
            })
          }
        })
      }
    })
  }
}