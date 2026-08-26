const {articles}=require('../../data/mock');Page({data:{article:{}},onLoad(q){this.setData({article:articles.find(x=>x.id===+q.id)||articles[0]})}})
