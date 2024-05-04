/**
 * config.ts 是咕咕主页的内容配置文件
 * 按照注释上对键值对的解释，试着改改看吧！(=ﾟωﾟ)=
 */
export default {

    // config 配置文件版本
    configVersion: 1,

    // 网站基础信息
    site: {

        // 指定主页的名称 & 标题
        name: '云萧的咕咕客栈',

        // 指定主页运行的网址
        url: 'https://www.crrashh.com',

        // 指定主页的运行目录，一般保持默认即可
        base: '/',

        // 指定主页的资源文件 CDN，设置后需要将 ch_assets 文件夹下的资源传输到该 CDN 目录下
        // cdn: 'https://cdn.aaaaaa.bbb',

        // 指定主页的浏览器标题后缀
        suffix: ' / under building...',

        // 指定主页的副标题
        description: '以万象之不息，致不息之万象。',

        // 指定 <meta name="description" > 的 content 属性，用于展示给搜索引擎
        seoDescription: '基于Astro构建的咕咕的个人主页！云萧的咕咕客栈 / Creating makes miracles. / 以万象之不息，致不息之万象。'
    },


    // 顶栏导航
    nav: [
        // 此处的每一个对象（用大括号包起来的东西）对应一个右上角的链接
        //     其中 “name” 为链接显示的文字，“url” 为链接到的地址
        // *你可以通过增加或减少对象的方式来调整显示的链接的个数*
        {
            name: '博客',
            url: 'https://blog.crrashh.com'
        },
        {
            name: '关于',
            url: 'https://blog.crrashh.com/archives/5'
        }
    ],


    // 横幅内的下侧社交媒体栏
    social: [
        // 此处的每一个对象（用大括号包起来的东西）对应一个横幅下的方块形链接
        //     其中 “icon” 为显示的图标，当前项目内置的图标值可以为 bilibili、blog、
        //     coolapk、discord、douyin、email、github、qq、twitter、weibo；其中
        //     “url” 为链接到的个人社交媒体网页地址
        // *你可以通过增加或减少对象的方式来调整显示的链接的个数*
        {
            icon: 'blog',
            url: 'https://blog.crrashh.com'
        },
        {
            icon: 'github',
            url: 'https://github.com/crrashh1542'
        },
        {
            icon: 'bilibili',
            url: 'https://space.bilibili.com/40683339'
        },
        {
            icon: 'email',
            url: 'mailto:kotsuki@crrashh.com'
        },
        {
            icon: 'coolapk',
            url: 'https://www.coolapk.com/u/21347742'
        },
        {
            icon: 'qq',
            url: 'https://wpa.qq.com/msgrd?uin=3247380086&site=qq&menu=yes'
        }
    ],


    // banner 横幅下的由组件组成的内容区，内容顺序分先后
    components: {

        // GitHub Charts
        ghChart: {
            // 贡献表的标题
            title: '今天咕咕咕了没！',
            // 此处填写 GitHub 用户名
            username: 'crrashh1542'
        },

        // 个人其他网站链接
        links: {

            // 链接组件的标题
            title: '咱的好东西',

            to: [
                // 此处的每一个对象（用大括号包起来的东西）对应一个内容区的灰色背景链接
                //     其中 “title” 为第一行显示的粗体标题，“description” 为显示在标题
                //     下的描述文字，“url” 为链接到的个人社交媒体网页地址
                // *你可以通过增加或减少对象的方式来调整显示的链接的个数*
                {
                    title: '云萧的咕咕屋',
                    description: '云萧的个人博客，都是有空随便写写的啊喂！（划掉',
                    href: 'https://blog.crrashh.com'
                },
                {
                    title: 'Windows Up-to-Date',
                    description: '一个反映 Windows 实时更新状态的站点',
                    href: 'https://wutd.crrashh.com'
                },
                {
                    title: '云萧的咕咕盘',
                    description: '基于 Alist 的公开网盘服务',
                    href: 'https://disk.crrashh.com'
                },
                {
                    title: '咕咕的开放文档',
                    description: '大家都可以用的 API 和 CDN',
                    href: 'https://docs.crrashh.com'
                }
            ]
        },

        // 个人属性
        properties: {

            // 属性组件的标题
            title: '咕咕属性值',

            content: [
                // 此处的每一个对象（用大括号包起来的东西）对应一个属性
                //     其中 “title” 为标题，“value” 为色块宽度（0 ~ 100），“tip” 为说明文本
                // *你可以通过增加或减少对象的方式来调整显示的属性的个数*
                {
                    title: '智力状况',
                    value: 40,
                    tip: '神经经常打结，并不聪明的样子( ´_ゝ`)'
                },
                {
                    title: '精神状态',
                    value: 80,
                    tip: '对大家都很感兴趣呢！'
                },
                {
                    title: '脑细胞活跃度',
                    value: 50,
                    tip: '不善于设计东西，不善于蹦出新点子，坏！'
                },
                {
                    title: '社交能力',
                    value: 90,
                    tip: '除了偶尔会说错话，咱还是很外向的说！'
                }
            ]
        }

    },


    // 页脚
    footer: {

        // 版权信息
        'copyright': '© Copyright 2022-2024 Kotsuki Crrashh. All Rights Reserved.',

        // 备案信息，如果不填则不在页脚显示相关内容
        'beian': {

            // 工信部备案号
            'miit': '蜀ICP备2022029657号-2',

            // gongan 备案号
            // 'gongan': null,

            // 非官方的 moe.gov.icp 号
            'moe': '萌ICP备20220551号'
        }
    }
}