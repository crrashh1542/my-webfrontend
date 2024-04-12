// 导入依赖库
import { defineConfig } from 'astro/config'
import { fileURLToPath, URL } from 'node:url'
import tailwind from '@astrojs/tailwind'
import custConfig from './config/config'

// 导入预启动项目脚本
import prebuild from './scripts/prebuild.mjs'
prebuild()

// https://astro.build/config
export default defineConfig({
    // 整体配置项目
    site: custConfig.site.url,
    base: custConfig.site.base,
    integrations: [tailwind()],

    // 开发配置
    server: {
        port: 14724,
        host: true
    },
    devToolbar: {
        enabled: false
    },

    // 生产配置
    build: {
        assetsPrefix: custConfig.site.cdn
    },

    vite: {
        // 修改资源输出路径
        build: {
            rollupOptions: {
                output: {
                    assetFileNames: 'ch_assets/[name].[hash].[ext]'
                }
            }
        },

        // 引入@作为./src的alias
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            }
        }
    }
})