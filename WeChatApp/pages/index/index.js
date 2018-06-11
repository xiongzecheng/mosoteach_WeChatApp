//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    courser:'',
    courses:[
        {

        }  
  ]
  },
  onLoad:function(options){
    this.courses()
 
  },
  searchClick:function(e){
      console.log(e)
      console.log(e.detail.value)

      var _this =  this
    if (e.detail.value==''){
      _this.courses()
    }
      var value = e.detail.value
      var searchs=[]
      console.log(_this.data.courser)
      for (var i = 0; i < _this.data.courses.length;i++){
        if (_this.data.courses[i].courseName.toString().indexOf(value)!= -1){
          var obj = { id: _this.data.courses[i].id, courseImg: _this.data.courses[i].courseImg, courseName: _this.data.courses[i].courseName, courseClass: _this.data.courses[i].courseClass, userName: _this.data.courses[i].userName, courseStatus: _this.data.courses[i].courseStatus}
          searchs.push(obj)
        }
      }
      console.log(searchs)
      console.log(_this.data.courser)
      _this.setData({
        courses:searchs,
      })
  },
  left: function () {
    wx.navigateTo({
      url: '../banke/banke',
    })
  },
  onShow:function(){

  },
  courses:function(){
    var that = this;
    wx.request({
      url: 'http://47.106.153.181:8080/lmy/courses/allCourse',
      data: {
      },
      headers: {
        'Content-Type': 'application/json'
        },
      method: "GET",
      success: function (res) {
        console.log(res.data);
        that.setData({
          courses:res.data.data
        })
        console.log(that.data.courses)
      }
    })
  } 
})
