// 提交［电话号码］
function submitPhoneNum(phoneNum) {
  // 此处调用wx中的网络请求的API，完成电话号码的提交
  var that = this
  wx.request({
    url: 'http://101.132.143.60:8080/lmy/user/new',
    method: "POST",
    data: {

    },
    header: {
      "Content-Type": "application/json"
    },
    success: function (res) {
      that.setData({
        submitPhoneNum: res.data.value(phoneNum)
      })
    }
  })
}


//提交［验证码］  
function submitIdentifyCode(identifyCode) {
  // 此处调用wx中的网络请求的API，完成短信验证码的提交 
  var that = this
  wx.request({
    url: 'http://101.132.143.60:8080/lmy/user/verify',
    method: 'POST',
    data: {

    },
    header: { 'content-type': 'application/json' },
    success: function (res) {
      console.log(res);
      that.setData({
        submitIdentifyCode: res.data.value(identifyCode)
      })
    }
  })
}

// 提交［密码］,前一步保证两次密码输入相同  
function submitPassword(password) {
  //此处调用wx中的网络请求的API，完成密码的提交
  var that = this
  wx.request({
    url: 'http://101.132.143.60:8080/lmy/user/new',
    method: "POST",
    data: {

    },
    header: {
      "Content-Type": "application/json"
    },
    success: function (res) {
      that.setData({
        submitPassword: res.data.value(password)
      })
    }
  })
}

//  要引用这个文件的函数或者变量，除了在要引用的的js文件中模块化之外（var utils=require('js地址')），
// 在被引用的的js中要通过 module.exports={a:a}作为面向对象的变量输出函数如下：
module.exports = {
  submitPhoneNum: submitPhoneNum,
  submitIdentifyCode: submitIdentifyCode,
  submitPassword: submitPassword
}

