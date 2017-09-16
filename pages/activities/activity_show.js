import { activities } from '../../store/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    instance: {
      content: ''
    }
  },
  addReview: function (e) {
    var ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: `../reviews/review_form?id=${ds.id}&source=activity`
    })
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
    var ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: `../maps/location?id=${ds.id}`,
    })
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
      path: `pages/activities/activity_show?id=${id}`
    }
  }
})