// pages/resource/resource.js
var util = require('../../utils/util.js')
var app=getApp()

Page({
  data:{
    src:'',
    tabbar: {}
  },
  gotoShow: function () {
    var _this = this
    var time = util.formatTime(new Date());  
    var username;
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        var tempFilePaths=res.tempFilePaths
        console.log(res.tempFilePaths)
        if (_this.data.src!=''){
          _this.data.src.forEach(function(item){
            tempFilePaths.push(item)
          })
        }

        console.log(_this.data.src)
        _this.setData({
          src: tempFilePaths,
          time:time,
          username:'任课老师'
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.src // 需要预览的图片http链接列表  
    })
  },
  onLoad:function(){
    app.editTabBar(); 
  }
})