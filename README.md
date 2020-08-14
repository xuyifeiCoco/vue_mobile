# vue的web模板，以element_ui为基础

------
### 1. 初始化

```js
  yarn install
  npm run dev
```
## rem适配
    postcss-pxtorem是一款 postcss 插件，用于将单位转化为 rem
    lib-flexible用于设置 rem 基准值
    **在写页面时可以直接按照375的尺寸写px会自动转化**
    
## 引入全局scss
```js
npm install sass-resources-loader
```
  
  
## package.json修改
```html
 可以在这里配置多个运行和打包入口，实现一个一个工程包含多个项目
```