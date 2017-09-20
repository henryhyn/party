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
    const page = payload.page || 1
    const cb = payload.cb || Hex.empty
    wx.showNavigationBarLoading()
    wx.request({
      url: `${Hex.domain}/api/activities`,
      data: {
        page,
        pageSize: 3
      },
      success: res => {
        const { list, page, pageSize, total } = res.data.data
        list.map(this.convert)
        cb({
          page,
          list: list || [],
          hasMore: page * pageSize < total
        })
        wx.hideNavigationBarLoading()
      }
    })
  }
}