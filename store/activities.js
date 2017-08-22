import Hex from '../utils/Hex'

export default {
  getInstanceById({ id, cb = Hex.empty }) {
    wx.request({
      url: `https://kaiyuanshuwu.com/api/activities/${id}`,
      success: cb
    })
  },

  getListByPage(payload = {}) {
    const cb = payload.cb || Hex.empty
    wx.request({
      url: 'https://kaiyuanshuwu.com/api/activities',
      success: cb
    })
  }
}