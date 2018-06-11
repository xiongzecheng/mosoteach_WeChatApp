//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log('App Launch')
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  onShow: function(){
    console.log('App Show')
  },
  onHide: function(){
    console.log('App Hide')
  },
  editTabBar: function () {
    var tabbar = this.globalData.tabbar,
      currentPages = getCurrentPages(),
      _this = currentPages[currentPages.length - 1],
      pagePath = _this.__route__;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (var i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },
  globalData:{
    userInfo: null,
    tabbar: {
      color: "#a9b7b7",
      selectedColor: "#0f87ff",
      borderStyle: "#d9d9d9",
      backgroundTextStyle: "bold",
      list: [
        {
          pagePath: "/pages/resource/resource",
          text: "资源",
          iconPath: "../../images/resource_options_unfocus.png",
          selectedIconPath: "../../images/resource_options_focus.png",
          selected: true
        },
        {
          pagePath: "/pages/member/member",
          text: "成员",
          iconPath: "../../images/member_options_unfocus.png",
          selectedIconPath: "../../images/member_options_focus.png",
          selected: true
        },
        {
          pagePath: "/pages/banke/banke",
          text: "活动",
          iconPath: "../../images/interaction_options_unfocus.png",
          selectedIconPath: "../../images/cc_icon_on.png",
          selected: false
        },
        {
          pagePath: "/pages/classdetail/classdetail",
          text: "消息",
          iconPath: "../../images/notice_options_unfocus.png",
          selectedIconPath: "../../images/notice_options_focus.png",
          selected: false
        },
        {
          pagePath: "/pages/message/message",
          text: "消息",
          iconPath: "../../images/detail_options_unfocus.png",
          selectedIconPath: "../../images/detail_options_focus.png",
          selected: false
        },
      ],
      position: "bottom"
    }

  }
})