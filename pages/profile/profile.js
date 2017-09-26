import Hex from '../../utils/Hex'

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

  onPullDownRefresh: function () {
    this.login(wx.stopPullDownRefresh)
  },

  onLoad: function () {
    this.login()
  },

  login: function (cb = Hex.empty) {
    app.getUserInfo(data => {
      this.setData({
        userInfo: data,
        hasUserInfo: true
      }, cb)
    })
  }
})
