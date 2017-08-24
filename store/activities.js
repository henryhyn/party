import Hex from '../utils/Hex'

export default {
  convert(instance) {
    instance.category = ['徒步', '骑行'][instance.categoryId - 1]
    instance.feeText = Hex.validNumber(instance.fee) && instance.fee > 0 ? `¥${instance.fee}` : '免费'
    instance.fullAddress = Hex.validString(instance.crossroad) ? `${instance.address} (${instance.crossroad})` : instance.address
  },

  getInstanceById({ id, cb = Hex.empty }) {
    wx.showNavigationBarLoading()
    wx.request({
      url: `${Hex.domain}/api/activities/${id}`,
      success: res => {
        const instance = res.data.data || {}
        this.convert(instance)
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
      url: `${Hex.domain}/api/activities`,
      success: res => {
        const list = res.data.data.list || []
        list.map(this.convert)
        cb(list)
        wx.hideNavigationBarLoading()
      }
    })
  }
}