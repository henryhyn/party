//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    var me = this
    wx.request({
      url: 'https://kaiyuanshuwu.com/api/activities',
      success: function (res) {
        me.setData({ logs: res.data.data.list || [] })
      }
    })
  }
})
