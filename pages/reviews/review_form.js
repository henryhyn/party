import Hex from '../../utils/Hex'
import reviews from '../../store/reviews'

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    submitting: false,
    userInfo: {},
    refId: null,
    biz: null,
    tempFilePaths: []
  },
  submit: function (e) {
    const { reviewBody } = e.detail.value
    const { userInfo, refId, biz, tempFilePaths } = this.data
    const pictureKeys = []
    this.setData({ submitting: true })
    reviews.save({
      userId: userInfo.id,
      refId,
      biz,
      status: 10,
      reviewBody
    }, d => {
      Hex.uploadImage(tempFilePaths, d.data.id, `${biz}_REVIEW`, d => {
        this.setData({ submitting: false })
        wx.navigateBack()
      })
    })
  },
  reset: function (e) {
  },
  chooseImage: function (e) {
    const filePaths = this.data.tempFilePaths
    wx.chooseImage({
      count: 9 - filePaths.length,
      success: res => {
        const { tempFilePaths } = res
        this.setData({ tempFilePaths: filePaths.concat(tempFilePaths) })
      },
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      urls: this.data.tempFilePaths
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function ({ refId, biz }) {
    app.getUserInfo(userInfo => this.setData({ refId, biz, userInfo }))
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

  }
})