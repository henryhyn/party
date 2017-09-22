import users from './store/users'

App({
  onLaunch: function () {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function (cb) {
    this.globalData.userInfo = wx.getStorageSync('userInfo')
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      // 登录
      users.login(data => {
        this.globalData.userInfo = data
        wx.setStorageSync('userInfo', data)
        typeof cb == "function" && cb(this.globalData.userInfo)
      })
    }
  },

  globalData: {
    userInfo: null
  }
})