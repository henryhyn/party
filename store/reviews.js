import Hex from '../utils/Hex'

export default {
  getListByPage(payload = {}) {
    const biz = payload.biz
    const refId = payload.refId
    const page = payload.page || 1
    const pageSize = payload.pageSize || 10
    const cb = payload.cb || Hex.empty
    wx.request({
      url: `${Hex.domain}/api/reviews`,
      data: { biz, refId, page, pageSize },
      success: res => cb(res.data)
    })
  },

  save(instance, cb = Hex.empty) {
    if (Hex.validId(instance.id)) {

    } else {
      wx.request({
        url: `${Hex.domain}/api/reviews`,
        data: instance,
        method: 'POST',
        success: res => cb(res.data)
      })
    }
  }
}