## markdown365

> a powerfull markdown editor

## 开发说明
1. 项目调试需要chrome浏览器安装react、redux扩展，否则不能够在electron中调用扩展

## TODO
- [ ] 管理浏览器插件
- [ ] 编写统一接口的桌面API
- [ ] 文件支持一个与多个同时操作如：openFile openFiles

## img url
```javascript
let src = img.getAttribute('src');
if (url.parse(src).protocol === null) {
    if (!path.isAbsolute(src)) src = path.resolve(w.directory, src);
    src = url.resolve('file://', src);
}
```
