const {works} = require('../../data/mock')
Page({
  data:{work:{}, active:0},
  onLoad(q){
    const w = works.find(x=>x.id===+q.id) || works[0]
    this.setData({work:w, active:0})
  },
  thumb(e){this.setData({active:+e.currentTarget.dataset.i})},
  craft(){wx.navigateTo({url:'/pages/craft/craft'})},
  video(){wx.navigateTo({url:'/pages/video-detail/video-detail?id='+this.data.work.videoId})}
})