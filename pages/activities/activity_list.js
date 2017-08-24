import { activities } from '../../store/index'
Page({
  data: {
    list: []
  },
  show: function (e) {
    var ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: `./activity_show?id=${ds.id}`
    })
  },
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading()
    activities.getListByPage({
      cb: res => {
        this.setData({ list: res.data.data.list || [] })
        wx.stopPullDownRefresh()
        wx.hideNavigationBarLoading()
      }
    })
  },
  onLoad: function () {
    wx.showNavigationBarLoading()
    activities.getListByPage({
      cb: res => {
        this.setData({ list: res.data.data.list || [] })
        wx.hideNavigationBarLoading()
      }
    })
  }
})
