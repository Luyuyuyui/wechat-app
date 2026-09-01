const {works} = require('../../data/mock')
const tabs = ['全部','工艺品','银饰','工艺画']
Page({
  data:{works, filtered:works, active:'全部', tabs},
  filter(e){
    const active = e.currentTarget.dataset.tab
    this.setData({active, filtered: active==='全部'? works : works.filter(w=>w.type===active)})
  },
  go(e){wx.navigateTo({url:'/pages/work-detail/work-detail?id='+e.currentTarget.dataset.id})}
})