import Hex from '../utils/Hex'

export default {
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