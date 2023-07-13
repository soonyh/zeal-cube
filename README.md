<h1 align="center">Zeal Cube</h1>

Fork antd@3.10.1 并集成了自定义样式以及pro-antd@2.0.0的部分组件. [API文档](https://ifed.gitee.io/zeal-cube/components/button-cn/)

## 安装

```bash
npm install zeal-cube --save   
```

## 示例

```jsx
import { DatePicker } from 'zeal-cube';
ReactDOM.render(<DatePicker />, mountNode);
```

引入样式：

```jsx
import 'zeal-cube/dist/zeal-cube.css';  // or 'zeal-cube/dist/zeal-cube.less'
```

你也可以 [按需加载组件](https://ant.design/docs/react/getting-started-cn#按需加载)。

## 发布NPM

```bash
npm run pub 
```
发布前需要更新package.json中的版本号，否则会报错

## 生成API文档

```bash
npm run predeploy 
```
命令执行结束，会生成`_site`目录，然后发布到线上服务器。如果只是本地预览可以执行 `npm run start`

## 关于组件封装

- 支持*.jsx，*.tsx和*.less
- 源码统一放在`components`文件夹，目录约定如下：

```javascript              
  |--- ellipsis                                 # 组件名。小写，以“-”连接。如: button、back-top                  
  |    |--- index.zh-CN.md                      # 必须要有，用于生成API文档 
  |    |--- demo                                # 必须要有，否则api文档无法生成对应的demo                  
  |    |    |--- line.md                        # demo1 
  |    |    |--- number.md                      # demo2
  |    |--- index.jsx                           # 组件源码                  
  |    |--- index.less                          # 样式
  |    |--- index.test.js                       # 测试   
```  
- 组件样式，应使用唯一的命名空间，格式如：`cube-组件名`。

```css
// 禁止使用css module
.cube-ellipsis{

}
```
- commit源码之前，内部会自动调用lint进行校验，保证代码的规范 

更多规范参考 _Airbnb React/JSX Style Guide_ [英文](https://github.com/airbnb/javascript/tree/master/react) | [中文](https://github.com/JasonBoy/javascript/tree/master/react)

## 国际化

参考 [国际化文档](http://soonyh.coding.me/zeal-cube/docs/react/i18n-cn)。

## 支持环境

* 现代浏览器和 IE9 及以上。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE9, IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## FAQs

commit之前，构建工具会自动通过lint-staged命令对*.less、*.jsx、*.tsx和*md进行校验，保证代码的规范。如下是常见报错以及对于的修改方案

- `Value must be omitted for boolean attributes`

表示 默认 属性是true 不需要设置 xxx={true} 

- `Trailing spaces not allowed`

后面的空格是不允许的

- .stylelintrc 配置`"selector-pseudo-class-no-unknown": null,`

允许less中使用:global

- `at-rule-empty-line-before`
@import、@media 符号必须上面要空一行,且左边顶格

```less
.cube-result {
  text-align: center;
  width: 72%;
  margin: 0 auto;

@media screen and (max-width: @screen-xs) {
    width: 100%;
}
}
```

- `error  Expected linebreaks to be 'LF' but found 'CRLF'  linebreak-style`

`.eslintrc.js` 添加"linebreak-style": 0

