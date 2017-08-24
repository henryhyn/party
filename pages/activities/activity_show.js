import { activities } from '../../store/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    instance: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function ({ id }) {
    wx.showNavigationBarLoading()
    activities.getInstanceById({
      id,
      cb: res => {
        this.setData({ instance: res.data.data || {} })
        wx.setNavigationBarTitle({ title: this.data.instance.title })
        wx.hideNavigationBarLoading()
      }
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
    wx.showNavigationBarLoading()
    activities.getInstanceById({
      id: this.data.instance.id,
      cb: res => {
        this.setData({ instance: res.data.data || {} })
        wx.setNavigationBarTitle({ title: this.data.instance.title })
        wx.stopPullDownRefresh()
        wx.hideNavigationBarLoading()
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