import { activities } from '../../store/index'
Page({
  data: {
    list: []
  },
  show: function (e) {
    var ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: `./activity_show?id=${ds.id}&title=${ds.title}`
    })
  },
  onPullDownRefresh: function () {
    var me = this
    activities.getListByPage({
      cb: res => {
        this.setData({ list: res.data.data.list || [] })
        wx.stopPullDownRefresh()
      }
    })
  },
  onLoad: function () {
    activities.getListByPage({
      cb: res => this.setData({ list: res.data.data.list || [] })
    })
  }
})
