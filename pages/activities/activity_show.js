import activities from '../../store/activities'
import reviews from '../../store/reviews'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    reviewList: [],
    instance: {
      content: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function ({ id }) {
    activities.getInstanceById({
      id,
      cb: instance => {
        this.setData({ instance })
      }
    })

    reviews.getListByPage({
      biz: 'ACTIVITY',
      refId: id,
      cb: data => {
        if (data.data) {
          this.setData({ reviewList: data.data.list || [] })
        }
      }
    })
  },

  openMap: function () {
    const { latitude, longitude, title, fullAddress } = this.data.instance
    wx.openLocation({
      latitude: latitude || 31.221633,
      longitude: longitude || 121.426766,
      name: title,
      address: fullAddress
    })
  },

  openRoute: function (e) {
    const ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: `../maps/location?id=${ds.id}`,
    })
  },

  previewImage: function (e) {
    const { urls, current } = e.currentTarget.dataset;
    wx.previewImage({ urls, current })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    activities.getInstanceById({
      id: this.data.instance.id,
      cb: instance => {
        this.setData({ instance })
        wx.stopPullDownRefresh()
      }
    })

    reviews.getListByPage({
      biz: 'ACTIVITY',
      refId: this.data.instance.id,
      cb: data => {
        if (data.data) {
          this.setData({ reviewList: data.data.list || [] })
        }
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    const { id, title } = this.data.instance
    return {
      title,
      path: `${this.route}?id=${id}`
    }
  }
})