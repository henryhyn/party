import Hex from '../utils/Hex'

export default {
  getInstanceById({ id, cb = Hex.empty }) {
    wx.showNavigationBarLoading()
    wx.request({
      url: `https://kaiyuanshuwu.com/api/activities/${id}`,
      success: res => {
        const instance = res.data.data || {}
        instance.category = ['徒步', '骑行'][instance.categoryId - 1]
        wx.setNavigationBarTitle({ title: instance.title })
        cb(instance)
        wx.hideNavigationBarLoading()
      }
    })
  },

  getListByPage(payload = {}) {
    const cb = payload.cb || Hex.empty
    wx.showNavigationBarLoading()
    wx.request({
      url: 'https://kaiyuanshuwu.com/api/activities',
      success: res => {
        const list = res.data.data.list || []
        list.map(i => i.category = ['徒步', '骑行'][i.categoryId - 1])
        cb(list)
        wx.hideNavigationBarLoading()
      }
    })
  }
}