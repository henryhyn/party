import { activities } from '../../store/index'
Page({
  data: {
    list: []
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
