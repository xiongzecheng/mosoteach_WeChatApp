var app = getApp()
Page({
  data: {
    currentTab: 0,
    tabbar:{}
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    app.editTabBar(); 
  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTba: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }

})