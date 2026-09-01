# 银光淬炼 · 苗族银饰非遗数字展示小程序

一个聚焦广西融水苗族银饰锻制技艺（国家级非物质文化遗产，编号Ⅷ-40）的微信小程序，以马贵兵老师为主角，从"人、技、物、文、传"五个维度展开。

> 项目以占位资源起步，现已替换为真实资料：人物事迹、5 件代表作品、11 段影像（含团队实地访谈）、宣讲会影像、苗族银饰文化档案。

## 目录结构

```
.
├── pages/              15 个页面
├── components/         3 个公共组件
├── data/mock.js        全部内容数据（人物 / 作品 / 影像 / 文化 / 文章）
├── assets/
│   ├── images/         压缩后的图片，进代码包（约 1.1 MB）
│   └── videos/         视频副本，仅模拟器本地预览，不进代码包
├── materials/          ★ 全部原始素材统一存放于此，不进代码包
│   ├── MANIFEST.md     素材清单与重命名对照表
│   ├── documents/      docx / xlsx 文字与作品资料
│   ├── images/         原始作品图与宣讲会照片
│   ├── videos/         10 段来源视频 + 视频来源.txt
│   └── interview/      团队实地访谈原片（3.3 GB，不进 git）
├── scripts/            资源构建与体积检查脚本
│   ├── build-assets.py        从 materials/ 生成 assets/
│   └── check-package-size.py  复核主包体积是否超限
├── project.config.json 已配置 packOptions.ignore 排除大文件
└── README.md
```

## 功能结构

| 板块 | 入口 | 内容 |
| --- | --- | --- |
| 首页 | `pages/index` | 主视觉 · 我们的记录 · 传承人 · 工艺 · 银饰之美 · 影像 · 文化 · 宣传册 · 记录 |
| 传承人 | `pages/person` | 人物简介 · 主要事迹 · 荣誉 · 讲学足迹 · 媒体报道 |
| 工艺 | `pages/craft` | 熔银 → 洗银 7 道代表性工序，每步配图与跳转影像 |
| 影像 | `pages/video` | **我们的记录**（团队访谈 / 马老师自述）+ **影像资料**（按技艺 / 人物 / 作品 / 体验 / 风情 分类） |
| 影像详情 | `pages/video-detail` | 真实视频播放器 + 完整素材来源（来源 / 时间 / 地点） |
| 作品 | `pages/works` | 5 件代表作品，按工艺品 / 银饰 / 工艺画 筛选 |
| 作品详情 | `pages/work-detail` | 封面 / 多图轮播 / 基本信息 / 工艺 / 寓意 / 奖项 |
| 文化 | `pages/culture` | 历史渊源 · 代表纹样 · 节庆佩戴 · 保护现状 · 现实困境 |
| 宣传册 | `pages/brochure` | 中英双语 6 章电子宣传册 |
| 记录 | `pages/article` | 5 篇实践动态 / 采访文章 / 文化观察 |
| 工坊 | `pages/workshop` | 工坊位置 / 服务 / 影像 / 参观须知 |
| 文创 | `pages/cultural` | 4 项文化衍生设计 |
| 关于 | `pages/about` | 项目介绍 · 实践地点 · 项目成果 · 致谢 |

## 素材来源

全部素材已按内容重命名并收拢到 `materials/`，对照表见 [`materials/MANIFEST.md`](materials/MANIFEST.md)。

| 类别 | 位置 |
| --- | --- |
| 文字资料 | `materials/documents/`（马贵兵个人资料、苗族银饰、作品清单 xlsx） |
| 作品与宣讲图片 | `materials/images/`（10 张作品图 + 2 张宣讲会照片） |
| 来源视频 | `materials/videos/`（10 段，来源 / 时间 / 地点见 `视频来源.txt`） |
| 团队访谈 | `materials/interview/IMG_8258.MOV`（本项目团队实地拍摄，融水梦呜苗寨） |

> 每段视频的来源 / 拍摄时间 / 拍摄地点都会在 `pages/video-detail` 的"素材信息"模块如实展示。

## 真机调试

### 1. 需要真实 AppID

`project.config.json` 当前 `appid` 为 `touristappid`（游客模式），**游客模式不提供真机调试和预览**。请：

1. 前往[微信公众平台](https://mp.weixin.qq.com/)注册小程序账号，获取 AppID；
2. 打开开发者工具 → 详情 → 基本信息 → 修改 AppID；
3. 若只是想快速验证，可在公众平台申请**小程序测试号**（测试号支持真机调试）。

### 2. 代码包体积

主包上限 2 MB。本项目已做两处处理，当前实际进包 **约 1.21 MB（余量 813 KB）**：

- `project.config.json` 的 `packOptions.ignore` 排除了 `materials/`（原始素材）与 `assets/videos/`（视频副本）；
- `assets/images/` 已统一压缩（封面 ≤820px、视频海报 ≤600px）。

改完素材后可用下面命令复核：

```bash
python scripts/check-package-size.py
```


### 3. 代理导致的上传失败

若报：

```
上传失败：网络请求错误，
tunneling socket could not be established, cause=connect ECONNREFUSED 127.0.0.1:7890
```

说明开发者工具正在走系统代理，而 `127.0.0.1:7890`（Clash 系代理默认端口）上的代理客户端当时没在监听。两种解法：

- **推荐**：开发者工具 → 设置 → 代理 → 选「不使用代理」，让工具直连；
- 或者：确保 Clash 处于运行状态且代理端口为 7890，再重试。

可用下面命令确认代理是否在监听：

```bash
netstat -ano | grep 7890
```

## 视频播放与部署

`assets/videos/` 中的视频体积较大，不进代码包，只在模拟器本地预览时可用。真机上视频会显示封面，需要部署到 CDN：

1. 把 `assets/videos/*.mp4` 上传到对象存储（腾讯云 COS / 阿里云 OSS 等）；
2. 把 `data/mock.js` 中对应的 `videoUrl` 换成 HTTPS 地址；
3. 在 `app.json` 的 `downloadFile` 合法域名或小程序后台「开发管理 → 服务器域名」中加入该域名。

克隆仓库后如需在本地重建 `assets/`（图片压缩、视频副本、视频海报、访谈转码），运行：

```bash
pip install Pillow imageio-ffmpeg
python scripts/build-assets.py            # 全部重建
python scripts/build-assets.py --images   # 只处理图片
python scripts/build-assets.py --interview # 只转码访谈原片
```

其中访谈转码等价于：

```bash
ffmpeg -y -i materials/interview/IMG_8258.MOV \
  -vf "scale=-2:720:flags=lanczos" -c:v libx264 -preset medium -crf 23 \
  -c:a aac -b:a 96k -movflags +faststart -ss 00:00:02 \
  assets/videos/v11-interview.mp4
```

## 数据替换

所有内容都在 `data/mock.js` 中维护：

```js
module.exports = {
  crafts,           // 7 道工艺
  videos,           // 11 段影像（group: 'ours' 团队原创 / 'archive' 影像资料）
  works,            // 5 件代表作品
  articles,         // 5 篇记录
  person,           // 传承人档案（含 teaching 讲学足迹）
  culture,          // 苗族银饰文化（含 patterns 代表纹样）
  brochure,         // 中英双语宣传册
  culturalDesign,   // 文创展示
  workshop          // 工坊信息
}
```

更换数据只需修改该文件，无需改动页面结构。

## 设计语言

- 主色：深蓝 `#223550` / 米白底 `#f4f0e8`
- 辅色：暗红 `#8d3c3c` / 银灰渐变
- 排版：黑体标题 + 衬线正文，章节使用中文 / 英文双语 Eyebrow 小标
- 公共组件：`media-placeholder`（支持传 `image` 渲染真实图片，无图时回落占位设计）、`section-title`、`empty-state`
