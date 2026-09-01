const {videos} = require('../../data/mock')
Page({
  data:{video:{}, related:[]},
  onLoad(q){
    const v = videos.find(x=>x.id===+q.id) || videos[0]
    this.setData({video:v, related:videos.filter(x=>x.id!==v.id).slice(0,4)})
  },
  go(e){wx.redirectTo({url:'/pages/video-detail/video-detail?id='+e.currentTarget.dataset.id})}
})