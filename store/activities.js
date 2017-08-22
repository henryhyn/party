import Hex from '../utils/Hex'

export default {
  getListByPage(payload = {}) {
    const cb = payload.cb || Hex.empty
    wx.request({
      url: 'https://kaiyuanshuwu.com/api/activities',
      success: cb
    })
  }
}