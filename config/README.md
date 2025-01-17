# 咕咕主页配置说明

快速导航：[config.js](#config.js) | [config.less](#config.less)

## config.js

config.ts 是咕咕主页的内容配置文件，按照下边对对象属性的解释，试着改改看吧！(=ﾟωﾟ)=  
注意，带 \* 标记的属性为可选项！

### `configVersion`：config 配置文件版本。

### `site`：网站基础信息。

-   `name`：页面的名称 & 标题。
-   `site`：页面运行的网址。
-   `base`：页面的运行目录，一般设定为根目录（即`/`）即可。
-   \*`cdn`：资源文件 CDN，设置后需要将 ch_assets 文件夹下的资源传输到该 CDN 目录下。
-   `suffix`：浏览器标题后缀。
-   `description`：个人/站点描述，用于副标题。
-   `seoDescription`：指定 `<meta name="description">` 的 content 属性，用于展示给搜索引擎。

### `nav`：顶栏导航

此处的每一个对象（用大括号包起来的东西）对应一个页面右上角的链接，你可以通过增加或减少对象来调整显示的链接的个数。

-   `name`：链接显示的文字。
-   `url`：链接指向的地址。

### `social`：横幅偏下侧的社交媒体栏

这里的每个对象对应一个社交媒体栏的方块形链接，你可以通过增加或减少对象来调整显示的链接的个数。

-   `icon`：方框内显示的图标，本项目的图标库均来自 [iconfont](https://www.iconfont.cn)，当前仅支持以下值：`bilibili`、`blog`、`coolapk`、`discord`、`douyin`、`email`、`github`、`qq`、`twitter`、`weibo`，如果需要新增请[发起新 issue](https://github.com/crrashh1542/crash-homepage/issues/new)，咱会很快回复的说ᕕ( ᐛ )ᕗ
-   `url`：链接指向的地址。

### `components`：横幅下的由各种组件构成的内容区，分先后顺序

#### `ghChart`：GitHub Chart 贡献统计表

-   \*`isEnabled`：是否启用该组件，不写则默认启用。
-   `title`：贡献表组件的小标题。
-   `api`：使用的 API 地址。理论上本项目支持所有基于 [githubchart-api](https://github.com/2016rshah/githubchart-api) 的 API 站点，此处使用了一个公益加速的站点，也可以换回原开发者提供的 API：<https://ghchart.rshah.org/>。_注意需要加上 URL Scheme（就是 `https://` 那坨），且末尾不要多带一个 / 号。_
-   `username`：要统计的 GitHub 用户名。

#### `links`：外部网站链接

-   `isEnabled`：是否启用该组件，不写则默认启用。
-   `title`：链接组件的小标题。
-   `to`：链接卡片的内容。_这里的每个对象对应一个内容区的灰色背景卡片链接，你可以通过增加或减少对象来调整显示的链接的个数。_
    -   `title`：卡片第一行显示的粗体标题。
    -   `description`：显示在标题下方的描述文字。
    -   `href`：链接指向的地址。

#### `properties`：个人属性

-   `isEnabled`：是否启用该组件，不写则默认启用。
-   `title`：属性组件的小标题。
-   \*`isEnablePercent`：是否显示组件右上角的百分数，不写则默认启用。
-   `content`：属性卡片的内容。_这里的每个对象对应一个属性卡片，你可以通过增加或减少对象来调整显示的属性的个数。_
    -   `title`：卡片的属性标题。
    -   `value`：属性的值，对应为色块的宽度，范围为 0 ~ 100。
    -   `tip`：对属性附加的说明文本，不写则不显示。

### `footer`：页脚

-   `copyright`：页面的版权信息。
-   \*`beian`：网站的备案信息。
    -   \*`miit`：工信部备案号
    -   \*`gongan`：gongan 备案号
    -   \*`moe`：非官方的萌国备案号

## config.less

config.less 是咕咕主页的主题和样式配置文件，按照下边对变量的解释，开始定制你的样式吧！(`ヮ´ )

#### 颜色相关

-   `ch-color-theme`：主题色
-   `ch-color-theme-offset`：偏移的主题色，用于标题渐变等

#### 背景相关

-   `ch-bg`：主页背景，支持 [CSS 的 `background` 属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background)所支持的所有类型的值。
-   `ch-bg-opacity`：主页背景的透明度，从 0 到 1。
-   `ch-bg-filter`：主页背景的滤镜（如模糊处理等），支持 [CSS 的 `backdrop-filter` 属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/backdrop-filter)所支持的所有类型的值。

#### 字体相关

-   `ch-font-family`：页面使用的字体，如果需要引用其它字体请自行 import。
