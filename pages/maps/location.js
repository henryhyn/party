import Hex from '../../utils/Hex'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scale: 16,
    longitude: 121.476200,
    latitude: 31.229670,
    markers: [],
    points: [],
    polyline: [],
    controls: [{
      id: 1,
      iconPath: '/image/discovery_focus.png',
      position: {
        left: 10,
        top: 10,
        width: 30,
        height: 30
      },
      clickable: true
    }, {
      id: 2,
      iconPath: '/image/discovery_focus.png',
      position: {
        left: 10,
        top: 50,
        width: 30,
        height: 30
      },
      clickable: true
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const route = [{
      longitude: 121.420150,
      latitude: 31.215430,
      title: '大众点评'
    }, {
      longitude: 121.416520,
      latitude: 31.219030
    }, {
      longitude: 121.430626,
      latitude: 31.220292,
      title: '江苏路'
    }]
    const markers = route.filter(i => i.title)
    const points = route.map(i => {
      const { longitude, latitude } = i
      return { longitude, latitude }
    })
    const length = points.length
    const longitude = Hex.sum(points.map(i => i.longitude)) / length
    const latitude = Hex.sum(points.map(i => i.latitude)) / length
    const polyline = [{
      points,
      color: "#FF0000",
      width: 2
    }]
    this.setData({ longitude, latitude, markers, points, polyline })
  },

  controltap: function ({ controlId }) {
    if (controlId === 1) {
      wx.getLocation({
        success: res => {
          const { longitude, latitude } = res
          this.setData({ longitude, latitude })
        }
      })
    } else if (controlId === 2) {
      this.setData({ scale: 16 })
    }
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