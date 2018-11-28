<h1 align="center">zeal-cube</h1>

<div align="center">



</div>
Fork antd@3.10.1 并集成了自定义样式以及pro-antd@2.0.0的部分组件.

## 🖥 支持环境

* 现代浏览器和 IE9 及以上。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE9, IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## 📦 命令

```bash
npm install zeal-cube --save   //安装

npm rub pub  //发布npm，发布前需要更新package.json中的版本号，否则会报错

npm run start  //生成api文档

antd-tools run clean // 清除_site和_data
```

## ✨ 组件封装规范

- 支持*.jsx，*.tsx和less
- 组件源码统一放在`components`文件夹，组件源码目录约定如下：

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
- css命名格式：cube-组件名，禁止使用css module

```css
.cube-ellipsis{

}
```
 
## 🔨 示例

```jsx
import { DatePicker } from 'zeal-cube';
ReactDOM.render(<DatePicker />, mountNode);
```

引入样式：

```jsx
import 'zeal-cube/dist/zeal-cube.css';  // or 'zeal-cube/dist/zeal-cube.less'
```

你也可以 [按需加载组件](https://ant.design/docs/react/getting-started-cn#按需加载)。

### TypeScript

参考 [在 TypeScript 中使用](https://ant.design/docs/react/use-in-typescript-cn)

## 🌍 国际化

参考 [国际化文档](http://ant.design/docs/react/i18n-cn)。

## 🔗 链接

`Value must be omitted for boolean attributes`

表示 默认 属性是true 不需要设置 xxx={true} 

`Trailing spaces not allowed`

后面的空格是不允许的

.stylelintrc 配置`"selector-pseudo-class-no-unknown": null,`

允许less中使用:global