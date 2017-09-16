import Hex from '../../utils/Hex'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    type: null,
    tempFilePaths: []
  },
  submit: function (e) {
    const { reviewBody } = e.detail.value
    const { id, type, tempFilePaths } = this.data
    const pictureKeys = []
    Hex.uploadImage(tempFilePaths, pictureKeys, () => {
      console.log({
        id,
        type,
        reviewBody,
        pictureKeys: pictureKeys.join(',')
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function ({ id, type }) {
    this.setData({ id, type })
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