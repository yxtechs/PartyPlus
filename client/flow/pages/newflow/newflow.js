// newflow.js
Page({

    /**
     * 页面的初始数据
     */
    data: {},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    bindButtonTap: function (e) {
        var that = this;
        var url = "../shareflow/shareflow?flow_id="
        wx.navigateTo({
            url: url
        })
    }
})