const {articles} = require('../../data/mock')
Page({
  data:{article:{}, related:[]},
  onLoad(q){
    const a = articles.find(x=>x.id===+q.id) || articles[0]
    this.setData({article:a, related:articles.filter(x=>x.id!==a.id).slice(0,3)})
  },
  go(e){wx.redirectTo({url:'/pages/article-detail/article-detail?id='+e.currentTarget.dataset.id})}
})