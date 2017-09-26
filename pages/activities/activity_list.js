import activities from '../../store/activities'

Page({
  data: {
    page: 1,
    loading: false,
    hasMore: true,
    list: []
  },

  nextPage: function () {
    if (this.data.loading || !this.data.hasMore) {
      return
    }

    this.setData({ loading: true })
    activities.getListByPage({
      page: this.data.page + 1,
      cb: ({ page, list, hasMore }) => {
        this.setData({
          page,
          hasMore,
          list: this.data.list.concat(list),
          loading: false
        })
      }
    })
  },

  onPullDownRefresh: function () {
    if (this.data.loading) {
      return
    }

    this.setData({ loading: true })
    activities.getListByPage({
      cb: ({ page, list, hasMore }) => {
        this.setData({
          page,
          hasMore,
          list,
          loading: false
        })
      }
    })
  },

  onLoad: function () {
    if (this.data.loading) {
      return
    }

    this.setData({ loading: true })
    activities.getListByPage({
      cb: ({ page, list, hasMore }) => {
        this.setData({
          page,
          hasMore,
          list,
          loading: false
        })
      }
    })
  }
})
