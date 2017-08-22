//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    list: []
  },
  onLoad: function () {
    var me = this
    wx.request({
      url: 'https://kaiyuanshuwu.com/api/activities',
      success: function (res) {
        me.setData({ list: res.data.data.list || [] })
      }
    })
  }
})
