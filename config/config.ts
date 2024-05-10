export default {
    configVersion: 1,
    site: {
        name: '云萧的咕咕客栈',
        url: 'https://www.crrashh.com',
        base: '/',
        suffix: ' / under building...',
        description: '以万象之不息，致不息之万象。',
        seoDescription: '基于Astro构建的咕咕的个人主页！云萧的咕咕客栈 / Creating makes miracles. / 以万象之不息，致不息之万象。'
    },
    nav: [
        {
            name: '博客',
            url: 'https://blog.crrashh.com'
        },
        {
            name: '关于',
            url: 'https://blog.crrashh.com/archives/5'
        }
    ],
    social: [
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
    components: {
        ghChart: {
            title: '今天咕咕咕了没！',
            username: 'crrashh1542'
        },
        links: {
            title: '咱的好东西',
            to: [
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
        properties: {
            title: '咕咕属性值',
            content: [
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
    footer: {
        'copyright': '© Copyright 2022-2024 Kotsuki Crrashh. All Rights Reserved.',
        'beian': {
            'miit': '蜀ICP备2022029657号-2',
            'moe': '萌ICP备20220551号'
        }
    }
}