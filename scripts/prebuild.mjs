'use strict'
/**
 * 此脚本用于在开始打包前处理配置信息
 * @author crrashh1542
 * @version 1.0
 */

// STEP1 -------- 导入依赖和数据
import fs from 'node:fs'
import childProcess from 'node:child_process'
import packageData from '../package.json'

// STEP2 -------- 获取项目版本

const getVer = () => {
    // 首先判断 git 环境是否存在
    let version
    const isGitExists = fs.existsSync('.git')
    if (isGitExists) {
        // 若存在，则使用从 git 获取的版本
        console.log('[prebuild] 检测到 git 环境')
        version = childProcess
            .execSync('git describe --tags', { encoding: 'utf8' })
            .split('\n')[0]
    } else {
        // 若不存在，则设定为 package.json 中的值
        console.log('[prebuild] 未检测到 git 环境')
        version = 'v' + packageData.version
    }
    console.log('[prebuild] 已获取当前项目版本：' + version)
    return version
}

// STEP3 -------- 组装并输出到文件
const writeData = () => {
    // 组装要输出的内容
    const content =
        `   {
      "version": "` +
        getVer() +
        `"
   }`
    // 将 data 内容写入文件
    // 由于执行者是 /astro.config.mjs，所以执行目录在项目的根目录，故此处使用 ./scripts/ 来导引路径
    fs.writeFile('./scripts/temp/data.json', content, (err) => {
        if (err === null) {
            console.log('[prebuild] 构建信息写入成功！')
        } else {
            console.log('[prebuild] 构建信息写入失败，详情请参阅：\n' + err)
        }
    })
}

// STEP4 -------- 导出函数
export default writeData
