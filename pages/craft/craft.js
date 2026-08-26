const {crafts}=require('../../data/mock');Page({data:{crafts},go(e){wx.navigateTo({url:'/pages/craft-detail/craft-detail?id='+e.currentTarget.dataset.id})}})
