const {brochure} = require('../../data/mock')

function render(lang) {
  const zh = lang === '中文'
  return {
    lang,
    cover: {
      byline: zh ? brochure.cover.bylineZh : brochure.cover.bylineEn,
      title:   zh ? brochure.cover.titleZh   : brochure.cover.titleEn,
      sub:     zh ? brochure.cover.subZh     : brochure.cover.subEn,
      tag:     zh ? brochure.cover.tagZh     : brochure.cover.tagEn,
      contact: brochure.cover.contact
    },
    sections: brochure.sections.map(s => ({
      eyebrow: s.eyebrow,
      title:   zh ? s.titleZh : s.titleEn,
      body:    s.body.map(b => ({ kind: b.kind, text: zh ? b.textZh : b.textEn }))
    })),
    end: zh ? brochure.endZh : brochure.endEn
  }
}

Page({
  data: render('中文'),
  switch() {
    const lang = this.data.lang === '中文' ? 'English' : '中文'
    this.setData(render(lang))
  }
})