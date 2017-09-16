import { users } from './store/index'

//app.js
App({
  onLaunch: function () {
    this.getUserInfo()
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function (cb) {
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      users.login(data => {
        this.globalData.userInfo = data
        typeof cb == "function" && cb(this.globalData.userInfo)
      })
    }
  },

  globalData: {
    userInfo: null
  }
})
