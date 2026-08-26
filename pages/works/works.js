const {works}=require('../../data/mock');Page({data:{works},go(e){wx.navigateTo({url:'/pages/work-detail/work-detail?id='+e.currentTarget.dataset.id})}})
