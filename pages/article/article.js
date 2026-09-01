const {articles} = require('../../data/mock')
const tabs = ['全部','人物故事','实践动态','非遗观察','文化记录']
Page({
  data:{articles, filtered:articles, active:'全部', tabs},
  filter(e){
    const active = e.currentTarget.dataset.tab
    this.setData({active, filtered: active==='全部'? articles : articles.filter(a=>a.category===active)})
  },
  go(e){wx.navigateTo({url:'/pages/article-detail/article-detail?id='+e.currentTarget.dataset.id})}
})