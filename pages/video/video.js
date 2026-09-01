const {videos} = require('../../data/mock')
const archive = videos.filter(v => v.group === 'archive')
Page({
  data: {
    archive,
    filtered: archive,
    active: '全部',
    tabs: ['全部','技艺','人物','作品','体验','风情']
  },
  onLoad(query){
    if(query && query.focus==='ours'){
      // future: scroll into view if needed
    }
  },
  filter(e){
    const active = e.currentTarget.dataset.tab
    this.setData({active, filtered: active==='全部'? this.data.archive : this.data.archive.filter(v=>v.category===active)})
  },
  go(e){
    wx.navigateTo({url:'/pages/video-detail/video-detail?id='+e.currentTarget.dataset.id})
  }
})