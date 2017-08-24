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
    activities.getListByPage({
      cb: list => {
        this.setData({ list })
        wx.stopPullDownRefresh()
      }
    })
  },
  onLoad: function () {
    activities.getListByPage({
      cb: list => this.setData({ list })
    })
  }
})
