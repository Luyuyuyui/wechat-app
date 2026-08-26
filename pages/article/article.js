const {articles}=require('../../data/mock');Page({data:{articles},go(e){wx.navigateTo({url:'/pages/article-detail/article-detail?id='+e.currentTarget.dataset.id})}})
