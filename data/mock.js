// 银光淬炼 · 真实资料数据层
// 来源：马贵兵个人资料.docx、苗族银饰.docx、文件素材、xlsx 作品-娜迪热.xlsx

// ——— 工艺：从熔银到洗银，近二十道纯手工工序（节选 7 道） ———
const crafts = [
  { id: 1, number: '01', title: '熔银', cover: '/assets/images/works/work-03-cover.jpg',
    description: '将银料置入坩埚，以高温炉火熔成银水，为锻造的第一道工序。',
    videoId: 9 },
  { id: 2, number: '02', title: '锻打', cover: '/assets/images/works/work-01-cover.jpg',
    description: '趁银料未冷，反复锤揲成片、抽条，奠定器形基础。马贵兵手上厚厚的常年老茧，便是在这一步日积月累。',
    videoId: 7 },
  { id: 3, number: '03', title: '拉丝', cover: '/assets/images/works/work-05-cover.jpg',
    description: '将银条反复穿过不同孔径的拔丝板，制成粗细各异的银丝，是银花丝类作品的灵魂工序。',
    videoId: 8 },
  { id: 4, number: '04', title: '錾刻', cover: '/assets/images/works/work-02-cover.jpg',
    description: '以錾刀在银片上敲凿出苗族传统纹样——花鸟、蝴蝶妈妈、龙凤、图腾，皆在这一刀一刻间成形。',
    videoId: 7 },
  { id: 5, number: '05', title: '编丝', cover: '/assets/images/works/work-01-1.jpg',
    description: '将拉好的银丝掐、填、攒、焊，组合成富有层次的银花丝纹样。',
    videoId: 8 },
  { id: 6, number: '06', title: '焊接', cover: '/assets/images/works/work-01-2.jpg',
    description: '以低温焊药将多个银饰部件连缀成形，是银饰整体结构的关键步骤。',
    videoId: 9 },
  { id: 7, number: '07', title: '抛光 · 洗银', cover: '/assets/images/works/work-05-1.jpg',
    description: '打磨银件表面，洗去氧化痕迹，呈现银饰温润的金属光泽，成品最终出炉。',
    videoId: 9 }
]

// ——— 影像：11 段（含我们团队的访谈与马贵兵老师自述） ———
const videos = [
  // ── 我们的记录 ──
  { id: 11, group: 'ours', title: '《马贵兵口述访谈》', subtitle: '本项目团队实地访谈拍摄',
    category: '访谈', duration: '19:34', featured: true,
    cover: '/assets/images/video/poster-11.jpg',
    videoUrl: '/assets/videos/v11-interview.mp4',
    description: '项目团队前往融水苗族自治县，与马贵兵老师面对面访谈，记录其学艺、返乡创业、带徒传承与非遗推广的真实经历。',
    source: '本项目团队实地拍摄', shotDate: '近期',
    location: '广西柳州市融水苗族自治县梦呜苗寨' },
  { id: 10, group: 'ours', title: '马贵兵老师个人自述·技艺简介·师徒传承', subtitle: '马老师口述',
    category: '人物', duration: '03:14',
    cover: '/assets/images/video/poster-10.jpg',
    videoUrl: '/assets/videos/v10-self-intro.mp4',
    description: '马贵兵老师亲述学艺历程、带徒心得，以及近年所获荣誉与代表性作品。',
    source: '秀美融水风情苗乡视频号', shotDate: '2024-06-09',
    location: '广西柳州市融水苗族自治县梦呜苗寨民俗文化体验园' },

  // ── 技艺 ──
  { id: 9, group: 'archive', title: '苗银做工过程及苗银简要介绍', category: '技艺', duration: '02:28',
    cover: '/assets/images/video/poster-09.jpg',
    videoUrl: '/assets/videos/v09-craft-intro.mp4',
    description: '从熔银到成器的苗族银饰锻造全流程影像，并配以苗银文化简要介绍。',
    source: '哔哩哔哩 · Google Arts & Culture', shotDate: '2016-09-07',
    location: '贵州省黔东南州台江县施洞镇' },
  { id: 7, group: 'archive', title: '苗银做工过程（湘西）', category: '技艺', duration: '00:34',
    cover: '/assets/images/video/poster-07.jpg',
    videoUrl: '/assets/videos/v07-craft-1.mp4',
    description: '苗族银匠在工坊内的锻打、拉丝与錾刻瞬间。',
    source: '抖音 · 湘西文旅', shotDate: '2021-11-08',
    location: '湖南湘西' },
  { id: 8, group: 'archive', title: '苗银做工过程（非遗学社）', category: '技艺', duration: '02:16',
    cover: '/assets/images/video/poster-08.jpg',
    videoUrl: '/assets/videos/v08-craft-2.mp4',
    description: '非遗学社记录的苗族银饰锻造过程，含银花丝细部工序。',
    source: '抖音 · 非遗学社', shotDate: '2025-06-06',
    location: '苗族银饰产区' },

  // ── 作品 ──
  { id: 2, group: 'archive', title: '苗族银饰特写', category: '作品', duration: '00:13',
    cover: '/assets/images/video/poster-02.jpg',
    videoUrl: '/assets/videos/v02-silver-closeup.mp4',
    description: '苗族银饰精致细节的镜头特写，呈现花丝、錾刻与光影的层次。',
    source: '网络素材', shotDate: '—',
    location: '—' },

  // ── 体验 ──
  { id: 1, group: 'archive', title: '奥运冠军体验苗饰制作', category: '体验', duration: '00:10',
    cover: '/assets/images/video/poster-01.jpg',
    videoUrl: '/assets/videos/v01-olympic-athlete.mp4',
    description: '奥运冠军走进融水梦呜苗寨，体验马贵兵老师指导的苗银饰品制作。',
    source: '融水文旅', shotDate: '2024-10-27',
    location: '广西柳州市融水苗族自治县梦呜苗寨民俗文化体验园' },

  // ── 风情 ──
  { id: 3, group: 'archive', title: '苗族风情', category: '风情', duration: '00:58',
    cover: '/assets/images/video/poster-03.jpg',
    videoUrl: '/assets/videos/v03-miao-style-1.mp4',
    description: '苗寨风貌、节庆场景与盛装佩戴剪影。',
    source: '网络素材', shotDate: '—',
    location: '—' },
  { id: 4, group: 'archive', title: '苗族风情（节庆）', category: '风情', duration: '01:00',
    cover: '/assets/images/video/poster-04.jpg',
    videoUrl: '/assets/videos/v04-miao-style-2.mp4',
    description: '节庆现场的苗族银饰佩戴与歌舞画面。',
    source: '抖音 · 摆烂的咸鱼', shotDate: '2026-01-19',
    location: '苗族村寨' },
  { id: 5, group: 'archive', title: '苗族风情（盛装）', category: '风情', duration: '00:25',
    cover: '/assets/images/video/poster-05.jpg',
    videoUrl: '/assets/videos/v05-miao-style-3.mp4',
    description: '苗族盛装与银饰佩戴的影像记录。',
    source: '抖音 · 时蓝Yonnie', shotDate: '2026-03-08',
    location: '苗族村寨' },
  { id: 6, group: 'archive', title: '苗族风情（寨貌）', category: '风情', duration: '00:13',
    cover: '/assets/images/video/poster-06.jpg',
    videoUrl: '/assets/videos/v06-miao-style-4.mp4',
    description: '苗寨风貌与吊脚楼、银饰作坊的真实日常。',
    source: '抖音 · 橙摄', shotDate: '2025-11-11',
    location: '苗族村寨' }
]

// ——— 作品：5 件（来源：xlsx 作品-娜迪热.xlsx） ———
const works = [
  { id: 1, name: '银花丝绣球', type: '工艺品', cover: '/assets/images/works/work-01-cover.jpg',
    images: ['/assets/images/works/work-01-1.jpg','/assets/images/works/work-01-2.jpg','/assets/images/works/work-01-3.jpg'],
    basicInfo: '取材广西壮族传统布艺绣球，以银丝替代传统绣球的刺绣丝线，将民族绣球文化与苗族银花丝锻造技艺结合，是非遗创新代表作品。',
    process: '先将银料反复拉制成纤细银丝，两根拧成一股；采用掐、填、攒、焊等银花丝技艺，先制作外框，把银丝按纹样扭曲填入框内制成银绣片，再将多片银绣片焊接、调整曲度，组装成浑圆立体的绣球造型。',
    achievements: '作品外观与制作工艺，于 2019 年获得国家专利证书。',
    meaning: '打破传统绣球布料材质的局限，是传统民族器物与苗族银饰手工技艺融合创新的代表作品，常作为研学展示、非遗文创展品。',
    videoId: 9 },
  { id: 2, name: '苗族织锦', type: '银饰', cover: '/assets/images/works/work-02-cover.jpg',
    images: ['/assets/images/works/work-02-cover.jpg'],
    basicInfo: '银艺创新作品——并非传统布料织锦，而是以银花丝、银锻打工艺模拟苗族织锦的纹样肌理，把苗族织锦的传统纹样转化为银饰工艺表达，属银饰对织锦文化的艺术转译。',
    process: '运用苗族银饰锻造技艺，经铸炼、拉丝、掐丝、攒焊等工序，复刻苗族织锦的几何、图腾纹样，将织锦的经纬纹理以银丝编织、拼接的形式呈现，把织物的视觉效果在银质载体上实现。',
    achievements: '荣获第 48 届全国"金凤凰"创新产品设计大赛银奖。"金凤凰"大赛是国内工艺美术行业重要国家级赛事。',
    meaning: '打破银饰创作的传统题材局限，将苗族织锦纹样文化融入银饰创作，实现苗族两大非遗技艺的跨界融合，推动民族传统纹样的现代表达。',
    videoId: 8 },
  { id: 3, name: '苗族银头饰', type: '银饰', cover: '/assets/images/works/work-03-cover.jpg',
    images: ['/assets/images/works/work-03-cover.jpg'],
    basicInfo: '以苗族传统盛装银冠头饰为原型的手工银饰作品，保留苗族传统头饰形制，融合现代手工创新设计，是苗族银饰锻造技艺的代表性参赛作品。',
    process: '采用苗族银饰全套手工工序，包含铸炼、锤打、拉丝、掐丝、錾刻、攒焊等；饰件雕刻花鸟、瑞兽等苗族传统吉祥纹样，搭配银花、银流苏吊饰，层次繁复，还原苗族节庆盛装头饰的华丽风貌，全程手工锻打，不使用模压工艺。',
    achievements: '荣获第 48 届全国"金凤凰"创新产品设计大赛铜奖、第二届广西发明创造成果展传统手工业创新成果奖。',
    meaning: '立足融水苗族传统头饰文化，在复原传统形制的基础上做工艺优化，既保留民族服饰文化内涵，又体现当代非遗传承人的手工创新，常用于非遗展览、工艺美术赛事参展。',
    videoId: 2 },
  { id: 4, name: '紫荆花', type: '工艺画', cover: '/assets/images/works/work-04-cover.jpg',
    images: ['/assets/images/works/work-04-cover.jpg'],
    basicInfo: '景泰蓝掐丝工艺画，是跨界创新工艺挂画，并非传统银饰首饰，是马贵兵研修归来将景泰蓝掐丝工艺与银丝技艺相结合的创新尝试。',
    process: '以银丝做掐丝基底，沿用掐丝工艺，搭配景泰蓝点彩着色，塑造紫荆花花朵形态；作品色彩艳丽，造型灵动鲜活，实现苗族银丝技艺与景泰蓝工艺的跨技艺融合。',
    achievements: '主要用于工坊展示，未参与工艺美术赛事评奖，未申请专利。',
    meaning: '突破苗族银饰传统首饰、摆件的题材边界，拓展银艺的装饰画品类，体现非遗传承人对外来工艺的吸收转化，丰富民族工艺的表现形式。',
    videoId: 1 },
  { id: 5, name: '花山岩画', type: '工艺画', cover: '/assets/images/works/work-05-cover.jpg',
    images: ['/assets/images/works/work-05-cover.jpg','/assets/images/works/work-05-1.jpg'],
    basicInfo: '以 2016 年花山岩画申遗成功为契机，马贵兵立足广西本土骆越文化，将千年岩画图腾与苗族银饰技艺结合，以银为媒传承地域非遗文化、创新银艺题材。',
    process: '运用苗族银饰锻造技艺，通过锤揲、拉丝、錾刻、焊接等工序，将花山岩画典型的蛙人、图腾人物等骆越先民岩画符号复刻在银质板材之上，把崖壁上的古老岩画图像转化为银质艺术品，实现世界文化遗产与苗族银饰非遗技艺的融合表达。',
    achievements: '公开报道中无该作品对应的专利记录，也无参赛获奖记录，主要作为工坊展示作品。',
    meaning: '挖掘广西本土骆越文化符号，把花山岩画这一世界文化遗产题材引入苗族银艺创作，拓展银饰创作题材边界，用银艺载体传播广西地域历史文化。',
    videoId: 1 }
]

// ——— 记录：实践动态 / 采访 / 非遗观察 ———
const articles = [
  { id: 1, title: '千锤百炼守初心，深耕苗艺传家脉', category: '人物故事',
    date: '2025', author: '本项目组',
    cover: '/assets/images/person/teaching-1.jpg',
    summary: '马贵兵是广西融水土生土长的苗族匠人，为家族第三代银饰技艺传承人，自孩童时期起便跟随父辈走村串寨学习苗族传统银饰锻造技艺。',
    body: [
      '苗族银饰工艺工序繁复、考验心性，一件成品需历经熔银、反复锤打、拉丝、镌刻、焊接、洗银等近二十道纯手工工序。为吃透全套技艺，他常年潜心苦练，日夜打磨技法。初学最难的银丝拉丝工艺时，他反复实操摸索，双手虎口常年被磨破皮、结厚茧，历经无数次失败与重来，逐步练就精湛纯熟的手艺。',
      '凭借极致的耐心与毅力，17 岁的他便已能独立完成全套银饰制作。青年时期他曾外出务工，但始终割舍不下祖传手艺与苗族文化根脉，最终毅然返乡深耕银饰工艺。从业三十余年，他手上布满常年锻打银器留下的厚重老茧，坚守纯手工制作初心，不偷工、不速成，同时立足传统大胆创新，让古老的苗族银饰适配现代审美与市场需求。' ] },
  { id: 2, title: '从工坊到校园：一位苗银匠人的非遗普及', category: '实践动态',
    date: '2025-11', author: '本项目组',
    cover: '/assets/images/person/teaching-2.jpg',
    summary: '2025 年 11 月，马贵兵走进融水镇城北小学，为孩子们带来一堂沉浸式苗银文化课。',
    body: [
      '课堂上，他现场演示银饰锻造全流程，细致讲解苗族银饰纹样背后的民俗寓意、文化故事，手把手指导学生体验捶银、拉丝、简单镌刻等实操环节，让青少年近距离触摸非遗、感受民族文化魅力。',
      '同时，他积极参与文化和自然遗产日、民俗文化节、文旅推介会等各类公益展演活动，常态化走进社区开展非遗科普、技艺展示、文化宣讲，让深藏大山的苗族非遗文化可看、可学、可体验，真正实现活态传承、全民共享。' ] },
  { id: 3, title: '苗族银饰：即将消失的符号语言', category: '非遗观察',
    date: '2025', author: '本项目组',
    cover: '/assets/images/works/work-02-cover.jpg',
    summary: '2006 年苗族银饰锻制技艺列入国家级非物质文化遗产名录。但传承人老龄化、机器冲击、商业化侵权、市场推广不足等四大困境正威胁着这门技艺。',
    body: [
      '银饰纹样是苗族无文字时代的"符号语言"，但如今传承人老龄化问题突出。统计显示，贵州 70% 的非遗传承人年龄超过 60 岁，掌握核心錾刻技法的传承人平均年龄超过 65 岁。控拜苗寨曾是贵州省最著名的银匠村，银匠最多时达 275 人，如今仅剩 1 人留守。',
      '机器生产对手工工艺的本真性形成强烈冲击；商业化中侵权和过度娱乐化问题突出，缺乏统一标准；市场推广不足，许多精美银饰仍鲜为人知。各地正通过文旅融合、数字化保护等途径探索创新路径，力求在保护传统技艺的同时实现可持续发展。' ] },
  { id: 4, title: '一锤一錾绣银球——记马贵兵的银花丝绣球', category: '人物故事',
    date: '2024', author: '本项目组',
    cover: '/assets/images/works/work-01-cover.jpg',
    summary: '将广西壮族传统绣球的刺绣丝线换成银丝——这一看似简单的材质置换，让马贵兵摸索出一整套新工艺，并拿下 2019 年国家专利。',
    body: [
      '银花丝绣球，取材广西壮族传统布艺绣球，以银丝替代传统绣球的刺绣丝线，把民族绣球文化与苗族银花丝锻造技艺结合，属于非遗创新作品。',
      '创作时先将银料反复拉制成纤细银丝，两根拧成一股；采用掐、填、攒、焊等银花丝技艺，先制作外框，把银丝按纹样扭曲填入框内制成银绣片，再将多片银绣片焊接、调整曲度，组装成浑圆立体的绣球造型。作品外观与制作工艺于 2019 年获得国家专利证书。' ] },
  { id: 5, title: '从骆越岩画到苗银匠心——花山岩画题材的银艺转译', category: '文化记录',
    date: '2024', author: '本项目组',
    cover: '/assets/images/works/work-05-cover.jpg',
    summary: '2016 年花山岩画申遗成功。马贵兵以此为契机，将千年岩画图腾与苗族银饰技艺结合，用银质板材复刻蛙人、图腾等骆越先民符号。',
    body: [
      '作品运用苗族银饰锻造技艺，通过锤揲、拉丝、錾刻、焊接等工序，将花山岩画典型的蛙人、图腾人物等骆越先民岩画符号复刻在银质板材之上，把崖壁上的古老岩画图像转化为银质艺术品，实现世界文化遗产与苗族银饰非遗技艺的融合表达。',
      '这一创作路径挖掘了广西本土骆越文化符号，把花山岩画这一世界文化遗产题材引入苗族银艺创作，拓展了银饰创作题材边界，用银艺载体传播广西地域历史文化。' ] }
]

// ——— 人物：马贵兵 ———
const person = {
  name: '马贵兵',
  identity: '广西壮族自治区级非物质文化遗产代表性传承人 · 广西工匠',
  bio: '广西融水土生土长的苗族匠人，家族第三代银饰技艺传承人，从艺三十余年，长期深耕苗族传统银饰工艺创作，在传统技法基础上开展文创改良与创新设计。',
  experiences: [
    ['学艺经历', '自幼跟随父辈走村串寨学习苗族银饰锻造技艺，熟练掌握熔银、锤打、拉丝、镌刻、焊接、洗银等全套制作工序，17 岁即可独立打制完整银饰作品。'],
    ['开坊创业', '返乡扎根苗乡发展银饰事业，先后在雨卜苗寨、梦呜苗寨创办马贵兵银饰工艺坊，建成苗族银饰非遗体验馆与传习研学基地，集加工、展示、体验、培训、销售于一体。'],
    ['带徒传承', '2012 年起招收本地学徒，优先吸纳贫困家庭人员，毫无保留传艺；多名学徒已能独立完成银饰加工与产品设计。'],
    ['进校园 / 社区推广', '走进多所中小学、高校开展银饰技艺研学、实践授课；接待大批学生到体验馆开展校外实践；同时走进社区开展非遗科普与文化宣讲。'],
    ['媒体报道', '其匠人故事与银饰传承事迹先后被文化和旅游部平台、广西民族报、广西新闻网、人民政协网、广西文明网等多家官方媒体采访报道。']
  ],
  honors: {
    heritage: [
      '2013 年　融水苗族自治县县级非物质文化遗产苗族银饰锻造技艺代表性传承人',
      '2016 年　柳州市市级非物质文化遗产苗族银饰锻造技艺代表性传承人',
      '2017 年　广西壮族自治区区级非物质文化遗产苗族银饰锻造技艺代表性传承人',
      '2021 年　入选文化和旅游部乡村文化和旅游能人支持项目'
    ],
    titles: [
      '广西工艺美术大师',
      '柳州工匠 · 广西工匠',
      '广西壮族自治区劳动模范 · 自治区五一劳动奖章',
      '国家旅游商品研发中心柳州联合研发基地非遗文创专家'
    ],
    awards: '多件银手镯、苗族头饰、银花丝绣球等作品先后斩获市级、自治区级、全国工艺品交易会等多项工艺奖项；作品《银花丝绣球》取得国家专利；在中国—东盟博览会旅游展获得最佳商品售卖人气奖。'
  },
  teaching: [
    { image: '/assets/images/person/teaching-1.jpg', caption: '融水镇城北小学宣讲会 · 现场体验拉丝' },
    { image: '/assets/images/person/teaching-2.jpg', caption: '融水镇城北小学宣讲会 · 苗银文化讲解' }
  ]
}

// ——— 文化：苗族银饰 ———
const culture = {
  history: '苗族银饰的起源可追溯至旧石器时代后期的原始装饰，先民佩戴动物骨牙以祈求平安，蕴涵"万物有灵"的原始宗教观念。苗族古歌中的"运金运银""铸日造月"等篇章，为银饰奠定了深厚的文化心理基础。唐代《新唐书》记载苗族首领"以金银络额"，是银饰见于史籍的最早记录。明代是正式发端期，郭子章《黔记》等文献明确记载了银耳环、银项圈等饰物。清代是苗族银饰的鼎盛时期，形成了"以多为贵、以重为美、以大为美"的审美风尚，现今多数经典款式均定型于此。民国后男子银饰逐渐式微，女性银饰得以延续。新中国成立后，在政策扶持和旅游文化推动下，银饰品种不断丰富翻新。',
  protection: '2006 年，苗族银饰锻制技艺列入第一批国家级非物质文化遗产名录（编号Ⅷ-40）。此后贵州雷山、台江、剑河及湖南凤凰等多地相继扩展入选，部分支系技艺也被纳入省市级非遗项目。国家《非物质文化遗产法》及地方保护条例提供了法律保障；贵州、湖南等地通过"传承馆+基地+工坊"模式促进产业化发展；建立了国家、省、州、县四级传承人体系，代表性国家级传承人有杨光宾、吴水根、邰引岩等。',
  challenges: '一是传承断层严重，传承人老龄化，年轻人因收入不稳定而不愿学，部分银匠村人员流失超九成；二是机器批量生产对手工锻制的本真性形成冲击；三是商业化中存在侵权与过度娱乐化问题，缺乏统一标准；四是市场推广不足，许多精美银饰仍鲜为人知。各地正通过文旅融合、数字化等手段积极探索破解之道。',
  patterns: [
    { id: 1, name: '蝴蝶妈妈', cover: '/assets/images/works/work-01-2.jpg',
      meaning: '苗族古歌中的始祖神，象征繁衍、生育与族群延续，是苗族银饰最常见的母题纹样之一。' },
    { id: 2, name: '龙凤呈祥', cover: '/assets/images/works/work-03-cover.jpg',
      meaning: '龙与凤相互缠绕，寓意阴阳调和、婚嫁吉祥，是苗族盛装头饰与项圈上的经典组合。' },
    { id: 3, name: '花鸟瑞兽', cover: '/assets/images/works/work-01-cover.jpg',
      meaning: '花鸟与瑞兽构成苗族银饰中最具装饰性的纹样群，反映苗族对自然万物的敬畏与亲和。' },
    { id: 4, name: '图腾符号', cover: '/assets/images/works/work-05-cover.jpg',
      meaning: '源自花山岩画、苗族古歌与迁徙史诗的几何与人物图腾，是无文字时代苗族文化的"符号语言"。' },
    { id: 5, name: '太阳 / 漩涡纹', cover: '/assets/images/works/work-05-1.jpg',
      meaning: '圆形发散的太阳纹与旋涡纹，象征生命循环、光与火的原始崇拜。' }
  ]
}

// ——— 宣传册（双语） ———
const brochure = {
  zh: [
    { eyebrow: '01 / THE INHERITOR', title: '马贵兵故事', text: '广西融水苗族银饰第三代传承人，从艺三十余年。' },
    { eyebrow: '02 / SILVER CULTURE', title: '苗族银饰文化', text: '2006 年列入第一批国家级非物质文化遗产名录（编号Ⅷ-40）。' },
    { eyebrow: '03 / SEVEN CRAFTS', title: '锻造工艺', text: '熔银、锻打、拉丝、錾刻、编丝、焊接、洗银等近二十道纯手工工序。' },
    { eyebrow: '04 / MASTER WORKS', title: '代表作品', text: '《银花丝绣球》《苗族织锦》《苗族银头饰》《紫荆花》《花山岩画》。' },
    { eyebrow: '05 / INHERITANCE', title: '非遗传承', text: '自 2012 年起对外开放收徒，并常态化开展进校园、进社区非遗推广。' },
    { eyebrow: '06 / OUR PRACTICE', title: '实践团队', text: '青助乡村兴 · 融水苗族非遗实践团队。' }
  ],
  en: [
    { eyebrow: '01 / THE INHERITOR', title: 'Ma Guibing', text: 'Third-generation Miao silversmith from Rongshui, Guangxi, with 30+ years of practice.' },
    { eyebrow: '02 / SILVER CULTURE', title: 'Miao Silver Culture', text: 'Inscribed in 2006 on China\'s first national intangible cultural heritage list (No. Ⅷ-40).' },
    { eyebrow: '03 / SEVEN CRAFTS', title: 'Seven Crafts', text: 'Smelting, forging, wire-drawing, chasing, filigree, soldering, and polishing — nearly 20 manual steps.' },
    { eyebrow: '04 / MASTER WORKS', title: 'Master Works', text: 'Silver-Filigree Emball · Miao Brocade · Miao Headdress · Bauhinia · Huashan Rock Paintings.' },
    { eyebrow: '05 / INHERITANCE', title: 'Inheritance', text: 'Open apprenticeship since 2012, plus regular in-school and community outreach.' },
    { eyebrow: '06 / OUR PRACTICE', title: 'Our Practice', text: 'Qingzhu Rural Vitality · Rongshui Miao ICH Practice Team.' }
  ]
}

// ——— 文创 ———
const culturalDesign = [
  { id: 1, title: '纹样腰封', cover: '/assets/images/works/work-01-2.jpg',
    desc: '以银花丝绣球为代表的苗银纹样腰封，提取蝴蝶妈妈、花鸟等核心母题，作为展览、画册与作品集的视觉统一元素。' },
  { id: 2, title: '纹样胸针', cover: '/assets/images/works/work-01-1.jpg',
    desc: '把苗族银花丝中的代表纹样小型化、再设计，形成可佩戴的胸针类衍生品，呈现非遗的"日常化"。' },
  { id: 3, title: '工艺介绍卡', cover: '/assets/images/works/work-04-cover.jpg',
    desc: '从熔银到洗银七道工序的工艺介绍卡片，每张对应一道工序的工艺要点与文化寓意。' },
  { id: 4, title: '研学手册封面', cover: '/assets/images/works/work-05-cover.jpg',
    desc: '以花山岩画与苗银结合的视觉语言设计的研学手册封面，面向中小学生研学场景。' }
]

// ——— 工坊信息 ———
const workshop = {
  name: '马贵兵银饰工艺坊',
  locations: [
    { name: '梦呜苗寨民俗文化体验园工坊', city: '广西柳州市融水苗族自治县' },
    { name: '雨卜苗寨工坊', city: '广西柳州市融水苗族自治县' }
  ],
  services: [
    '苗族银饰非遗体验（捶银、拉丝、錾刻等实操）',
    '研学课程定制（中小学、高校）',
    '苗银作品定制与展演',
    '非遗工坊参观与文化讲解'
  ],
  // 与「讲学足迹」共用同一组宣讲会照片，避免重复占用主包体积
  photos: [
    '/assets/images/person/teaching-1.jpg',
    '/assets/images/person/teaching-2.jpg'
  ]
}

module.exports = {
  pending: '【资料待补充】',
  crafts, videos, works, articles, person, culture, brochure, culturalDesign, workshop
}