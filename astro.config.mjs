import { defineConfig } from 'astro/config'
import { fileURLToPath, URL } from 'node:url'
import tailwind from '@astrojs/tailwind'
import custConfig from './config/config'

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
        assets: 'c_assets',
        assetsPrefix: custConfig.site.cdn
    },

    // 引入@作为./src的alias
    vite: {
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            }
        }
    }
})