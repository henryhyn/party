const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false
  },

  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    this.login()
  },

  login: function () {
    app.getUserInfo(data => {
      this.setData({
        userInfo: data,
        hasUserInfo: true
      })
    })
  }
})
