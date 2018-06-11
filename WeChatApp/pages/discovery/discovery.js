const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    faxian: [
      {
        pic: '../../images/circle_icon.png',
        faxian: '课程圈',
        unread_icon: '../../images/begin_record.png',
        pyq: '../../images/quiz_icon_next_disabled.png',
      }
    ]
  },
  top: function () {
    wx.navigateTo({
      url: '../pengyouquan/pengyouquan',
    })
  }
  // /**
  //  * 生命周期函数--监听页面加载
  //  */
  // onLoad: function (options) {

  // },

  // /**
  //  * 生命周期函数--监听页面初次渲染完成
  //  */
  // onReady: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面隐藏
  //  */
  // onHide: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面卸载
  //  */
  // onUnload: function () {

  // },

  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh: function () {

  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom: function () {

  // },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage: function () {

  // }
})