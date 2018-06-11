Page({
  data: {
    charmdata: [
      {
        teachername:"熊康",
        teacher_avatar:"../../images/avatar.jpg",
        meili_value:"0",
        class_amount:"1",
        resource_amount:"10",
        student_amount:"3",
        active_amount:"4"
      }]
  },
  test:function(){
    wx.navigateTo({
      url: '../mine/mine'
    })
  }
})