const {crafts,videos,works,person}=require('../../data/mock');
Page({data:{crafts, videos:videos.slice(0,3),works:works.slice(0,4),person},go(e){wx.navigateTo({url:e.currentTarget.dataset.url})}})
