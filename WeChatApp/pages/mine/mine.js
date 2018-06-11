Page({
  data: {
    testdata: [
      {
        ava: '../../images/avatar.jpg',
        name: '熊康',
        ic: '../../images/quiz_icon_next_disabled.png'
      }
    ],

    routers: [
      {
        empiricalvalue: '3174',
        empiricalclassify: '经验值'
      },
      {
        empiricalvalue: '0',
        empiricalclassify: '魅力值'
      },
      {
        empiricalvalue: '69',
        empiricalclassify: '蓝豆'
      },
      {
        empiricalvalue: '0',
        empiricalclassify: '心意'
      }

    ]
  },
  top: function () {
    wx.navigateTo({
      url: '../userinfo/userinfo',
    })
  },
  charm: function () {
    wx.navigateTo({
      url: '../charm/charm',
    })
  },
  experience:function(){
    wx.navigateTo({
      url: '../experience/experience',
    })
  }


})