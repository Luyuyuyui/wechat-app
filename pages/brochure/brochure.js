const {brochure} = require('../../data/mock')
Page({
  data:{lang:'中文', chapters: brochure.zh},
  switch(){
    const lang = this.data.lang==='中文'?'English':'中文'
    this.setData({lang, chapters: lang==='中文'? brochure.zh : brochure.en})
  }
})