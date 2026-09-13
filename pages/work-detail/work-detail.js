const {works} = require('../../data/mock')
Page({
  data:{work:{}, active:0, currentImage:''},
  onLoad(q){
    const w = works.find(x=>x.id===+q.id) || works[0]
    this.setData({work:w, active:0, currentImage:w.cover})
  },
  thumb(e){
    const i=+e.currentTarget.dataset.i
    this.setData({active:i, currentImage:this.data.work.images[i] || this.data.work.cover})
  },
  craft(){wx.navigateTo({url:'/pages/craft/craft'})},
  video(){wx.navigateTo({url:'/pages/video-detail/video-detail?id='+this.data.work.videoId})}
})