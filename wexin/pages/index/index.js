//index.js
//获取应用实例
var app = getApp()
var utils = require('../../utils/util.js')
Page({
    data: {
        motto: 'Hello World',
        appname: '聚会Plus',
        userInfo: {},
        array: [],
        hasData: true,
        openId: ''
    },
    //事件处理函数
    onLoad: function (options) {
        //console.log('onLoad')

        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        });
        var openId = wx.getStorageSync('openId');
        this.setData({openId: openId});

        //获取当前user的活动列表 tobe update使用数据库
        var url = 'https://www.yxtechs.cn/getownedpartylist?open_id=' + openId;
        //console.log(url);
        wx.request({
            url: url,
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function (res) {
                var array = res.data;
                //console.log(array);
                that.setData({array: array});
                //this.setData({ array: array });
                if (array.length == 0) {
                    this.setData({hasData: false})
                };
                //wx.setStorageSync('openId', openId);//存储openid
            }
        });
        //var array = utils.getMockData();
        //获取当前user的活动列表 tobe update使用数据库


    }
})
