const entryConfig = require('./entry_config');
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir);
}

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                // 需要全局导入的less路径，自己修改，我这里引入了两个less文件
                path.resolve(__dirname, './src/assets/style/index.less'),
            ],
        })
}

const {
    // moduleName
    pages, outputDir
} = entryConfig;

module.exports = {
    outputDir,
    publicPath: './',
    pages,
    runtimeCompiler: true, //关键点在这  原来的 Compiler 换成了 runtimeCompiler
    chainWebpack: (config) => {
        // ["babel-polyfill", "./src/main.js"]
        config.resolve.alias.set(
            '@', resolve('src')
        )
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    },
    configureWebpack: {
        module: {
            rules: [

            ]
        }
    },
}