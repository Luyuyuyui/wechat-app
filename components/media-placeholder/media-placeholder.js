Component({
  properties: {
    label: { type: String, value: '素材待补充' },
    type: { type: String, value: 'SILVER ARCHIVE' },
    height: { type: String, value: '360rpx' },
    play: { type: Boolean, value: false },
    image: { type: String, value: '' },
    tag: { type: String, value: '' }
  },
  methods: {
    tap() { this.triggerEvent('tap') }
  }
})