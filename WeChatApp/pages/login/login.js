// var util = require('../../utils/util.js');
var app = getApp()
var hitMsg = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: '',
    password: '',
    createTime: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  account: function (e) {
    this.setData({
      account: e.detail.value
    })
  },
  password: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  // toast: function () {
  //   wx.navigateTo({
  //     url: '../register2/register',
  //   })
  // },
  // forget: function () {
  //   wx.navigateTo({
  //     url: '../validate/validate',
  //   })
  // },
  loginBtn: function () {
    var that = this
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!myreg.test(that.data.account)) {
      wx.showToast({
        title: '非法手机号！',
        icon: '',
        duration: 1500
      })
      return
    }
    if (that.data.account == null) {
      wx.showToast({
        title: "账号为空",
        icon: "loading",
        duration: 1000
      })
      return
    }
    if (that.data.password == null) {
      wx.showToast({
        title: "密码为空",
        icon: "loading",
        duration: 1000
      })
      return
    } else {
      console.log(that.data.account),
        wx.request({
          url: 'http://101.132.143.60:8080/lmy/user/login',
          method: 'POST',
          data: {
            userAccount: that.data.userAccount,
            userPassword: this.data.userPassword,
            createTime: this.date = (new Date()).valueOf()
          },
          header: {
            "content-type":"application/json"
          },
          success: function (res) {
            console.log(res);
            getApp().account = res.data.data.user_info.userAccount;
            wx.showToast({
              title: "登陆成功",
              icon: "loading",
              duration: 2000
            }),
              wx.switchTab({
                url: '../index/index'
              }),
              wx.setStorage({
                key: 'key',
                data: 'data',
              })
          }
        })
    }

  }

})
