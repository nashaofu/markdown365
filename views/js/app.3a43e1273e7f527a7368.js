webpackJsonp([1],{"+2mN":function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,l=n("bOdI"),u=i(l),r=n("Gu7T"),o=i(r),d=n("Dd8w"),f=i(d),s=n("sTbe"),c=n("KgVm"),p=i(c),v=n("kIHq"),m={files:[],active:{}};t.default=(0,s.handleActions)((a={},(0,u.default)(a,v.OPEN_FILE,function(e,t){var n=t.payload,i=[];return n.forEach(function(t){-1===(0,p.default)(e.files,{filename:t.filename})&&i.push(t)}),(0,f.default)({},e,{files:[].concat((0,o.default)(e.files),i)})}),(0,u.default)(a,v.REMOVE_FILE,function(e,t){var n=t.payload,i=(0,p.default)(e.files,{filename:n.filename});return-1!==i&&e.files.splice(i,1),e}),(0,u.default)(a,v.EDIT_FILE,function(e,t){var n=t.payload;return(0,f.default)({},e,{active:n.file})}),a),m)},"/jck":function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var a=n("U7vG"),l=i(a),u=n("O27J"),r=i(u),o=n("RH2O"),d=n("IcnI"),f=i(d),s=n("y8U+"),c=i(s);r.default.render(l.default.createElement(o.Provider,{store:f.default},l.default.createElement(c.default,null)),document.querySelector("#app"))},"1v4d":function(e,t){e.exports=require("path")},"4/hK":function(e,t){},"4sPU":function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("U7vG"),l=i(a),u=n("HW6M"),r=i(u),o=n("fpoL");n("v+0d"),t.default=function(e){var t=(0,r.default)({"icons-window-restore":e.windowIsMaximize,"icons-window-maximize":!e.windowIsMaximize});return l.default.createElement("div",{className:"app-bar"},l.default.createElement("div",{className:"app-bar-title",title:e.title},e.title),l.default.createElement("div",{className:"app-bar-window"},l.default.createElement("button",{className:"app-bar-button",onClick:e.onWindowMinimize,title:o.lang.windowMinimize},l.default.createElement("i",{className:"icons-window-minimize"})),l.default.createElement("button",{className:"app-bar-button",onClick:e.onWindowMaximizeToggle,title:o.lang.windowMaximizeToggle},l.default.createElement("i",{className:t})),l.default.createElement("button",{className:"app-bar-button",onClick:e.onWindowClose,title:o.lang.windowClose},l.default.createElement("i",{className:"icons-window-close"}))))}},"7N6K":function(e,t){},"9xLI":function(e,t){},AmPm:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l,u=n("Zx67"),r=i(u),o=n("Zrlr"),d=i(o),f=n("wxAW"),s=i(f),c=n("zwoO"),p=i(c),v=n("Pf15"),m=i(v),w=n("U7vG"),_=i(w),E=n("RH2O"),h=n("G4Vi"),g=n("BCOr"),M=n("G/5Y"),b=i(M),O=function(e){return{files:e.files.files,active:e.files.active}},y=function(e){return{editFile:function(t){return e(g.files.editFile(t))}}},x=(a=(0,E.connect)(O,y))(l=function(e){function t(){var e,n,i,a;(0,d.default)(this,t);for(var l=arguments.length,u=Array(l),o=0;o<l;o++)u[o]=arguments[o];return n=i=(0,p.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(u))),i.onOpenFile=function(){h.ipcRenderer.send("open-file")},i.onSelect=function(e){e.filename!==i.props.active.filename&&i.props.editFile(e)},a=n,(0,p.default)(i,a)}return(0,m.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.files,n=e.active;return _.default.createElement(b.default,{files:t,active:n,onOpenFile:this.onOpenFile,onSelect:this.onSelect})}}]),t}(w.Component))||l;t.default=x},BCOr:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.editor=t.files=t.ui=void 0;var a=n("tzjR"),l=i(a),u=n("kIHq"),r=i(u),o=n("QYzy"),d=i(o);t.ui=l.default,t.files=r.default,t.editor=d.default},ChGC:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("2KeS"),l=n("F/tN"),u=i(l),r=n("+2mN"),o=i(r),d=n("g726"),f=i(d);t.default=(0,a.combineReducers)({ui:u.default,files:o.default,editor:f.default})},"F/tN":function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,l=n("bOdI"),u=i(l),r=n("Dd8w"),o=i(r),d=n("sTbe"),f=n("tzjR"),s={windowIsMaximize:!1,sideBarExpanding:!1,viewerShow:!0};t.default=(0,d.handleActions)((a={},(0,u.default)(a,f.WINDOW_MAXIMIZE,function(e,t){var n=t.payload;return(0,o.default)({},e,{windowIsMaximize:n})}),(0,u.default)(a,f.SIDEBAR_TOGGLE,function(e,t){var n=t.payload;return(0,o.default)({},e,{sideBarExpanding:n})}),(0,u.default)(a,f.VIEWER_TOGGLE,function(e,t){var n=t.payload;return(0,o.default)({},e,{viewerShow:n})}),a),s)},"G/5Y":function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("U7vG"),l=i(a),u=n("HW6M"),r=i(u);n("QfSk"),t.default=function(e){var t=l.default.createElement("li",{className:"files-open-file"},l.default.createElement("div",{className:"files-open-file-title"},"没有打开的文件"),l.default.createElement("button",{className:"files-open-file-button",onClick:e.onOpenFile},"打开文件"));return e.files.length&&(t=e.files.map(function(t,n){var i=(0,r.default)("files-item",{"files-item-active":t.filename===e.active.filename});return l.default.createElement("li",{className:i,key:n,title:t.filename,onClick:function(){return e.onSelect(t)}},l.default.createElement("div",{className:"files-item-filename"},t.basename))})),l.default.createElement("ul",{className:"files"},t)}},G4Vi:function(e,t){e.exports=require("electron")},GTkZ:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("U7vG"),l=i(a),u=n("HW6M"),r=i(u),o=n("AmPm"),d=i(o),f=n("fpoL");n("7N6K"),t.default=function(e){var t=(0,r.default)("side-bar-panel",{"side-bar-panel-expanding":e.sideBarExpanding}),n=(0,r.default)({"icons-visibility":e.viewerShow,"icons-visibility-off":!e.viewerShow});return l.default.createElement("div",{className:"side-bar"},l.default.createElement("div",{className:"side-bar-container"},l.default.createElement("div",{className:"side-bar-container-toggle"},l.default.createElement("button",{className:"side-bar-button",onClick:e.onSidebarToggle,title:f.lang.sidebarToggle},l.default.createElement("i",{className:"icons-menu"}))),l.default.createElement("div",{className:"side-bar-container-open-file"},l.default.createElement("button",{className:"side-bar-button",onClick:e.onOpenFile,title:f.lang.openFile},l.default.createElement("i",{className:"icons-open-file"}))),l.default.createElement("div",{className:"side-bar-container-viewer-toggle"},l.default.createElement("button",{className:"side-bar-button",onClick:e.onViewerToggle,title:f.lang.viewerToggle},l.default.createElement("i",{className:n}))),l.default.createElement("div",{className:"side-bar-container-settings"},l.default.createElement("button",{className:"side-bar-button",title:f.lang.settings},l.default.createElement("i",{className:"icons-settings"})))),l.default.createElement("div",{className:t},l.default.createElement(d.default,null)))}},HdN8:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l,u=n("Zx67"),r=i(u),o=n("Zrlr"),d=i(o),f=n("wxAW"),s=i(f),c=n("zwoO"),p=i(c),v=n("Pf15"),m=i(v),w=n("U7vG"),_=i(w),E=n("RH2O"),h=n("BCOr"),g=n("qEAH"),M=i(g),b=function(e){return{value:e.editor.value,viewerShow:e.ui.viewerShow}},O=function(e){return{editorOnChange:function(t){return e(h.editor.editorOnChange(t))}}},y=(a=(0,E.connect)(b,O))(l=function(e){function t(){var e,n,i,a;(0,d.default)(this,t);for(var l=arguments.length,u=Array(l),o=0;o<l;o++)u[o]=arguments[o];return n=i=(0,p.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(u))),i.onChange=function(e){i.props.editorOnChange(e)},a=n,(0,p.default)(i,a)}return(0,m.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.viewerShow;return _.default.createElement(M.default,{value:t,viewerShow:n,onChange:this.onChange})}}]),t}(w.Component))||l;t.default=y},IcnI:function(e,t,n){"use strict";e.exports=n("K8UX")},K8UX:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("2KeS"),l=n("po9w"),u=i(l),r=n("ChGC"),o=i(r);t.default=(0,a.createStore)(o.default,(0,a.applyMiddleware)(u.default))},N20r:function(e,t){},NyPT:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("U7vG"),l=i(a),u=n("HW6M"),r=i(u),o=n("zZCQ"),d=i(o),f=n("Wewj"),s=i(f),c=n("HdN8"),p=i(c),v=n("WPgo"),m=i(v);n("Rpho"),t.default=function(e){var t=(0,r.default)("app-container-view",{"app-container-view-side-bar-expanding":e.sideBarExpanding}),n=e.viewerShow&&l.default.createElement(m.default,null);return l.default.createElement("div",null,l.default.createElement(d.default,null),l.default.createElement("div",{className:"app-container"},l.default.createElement(s.default,null),l.default.createElement("div",{className:t},l.default.createElement(p.default,null),n)))}},OUfZ:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("Zx67"),l=i(a),u=n("Zrlr"),r=i(u),o=n("wxAW"),d=i(o),f=n("zwoO"),s=i(f),c=n("Pf15"),p=i(c),v=n("U7vG"),m=i(v),w=n("QjPZ"),_=i(w);n("jG57");var E=function(e){function t(){var e,n,i,a;(0,r.default)(this,t);for(var u=arguments.length,o=Array(u),d=0;d<u;d++)o[d]=arguments[d];return n=i=(0,s.default)(this,(e=t.__proto__||(0,l.default)(t)).call.apply(e,[this].concat(o))),i.viewer=null,i.value="",a=n,(0,s.default)(i,a)}return(0,p.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.value;this.viewer=new _.default({gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:null,xhtml:!1,$el:this.refs.viewer}),this.value=e,this.viewer.parse(e)}},{key:"componentDidUpdate",value:function(){var e=this.props.value;this.value!==e&&(this.value=e,this.viewer.parse(e))}},{key:"render",value:function(){return m.default.createElement("div",{className:"viewer"},m.default.createElement("div",{ref:"viewer"}))}}]),t}(v.Component);t.default=E},QYzy:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EDITOR_ON_CHANGE=void 0;var i=n("bOdI"),a=function(e){return e&&e.__esModule?e:{default:e}}(i),l=n("sTbe"),u=t.EDITOR_ON_CHANGE="EDITOR_ON_CHANGE";t.default=(0,l.createActions)((0,a.default)({},u,function(e){return e}))},QfSk:function(e,t){},Rpho:function(e,t){},WPgo:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l,u=n("Zx67"),r=i(u),o=n("Zrlr"),d=i(o),f=n("wxAW"),s=i(f),c=n("zwoO"),p=i(c),v=n("Pf15"),m=i(v),w=n("U7vG"),_=i(w),E=n("RH2O"),h=n("OUfZ"),g=i(h),M=function(e){return{value:e.editor.value}},b=(a=(0,E.connect)(M))(l=function(e){function t(){return(0,d.default)(this,t),(0,p.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props.value;return _.default.createElement(g.default,{value:e})}}]),t}(w.Component))||l;t.default=b},Wewj:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l,u=n("Zx67"),r=i(u),o=n("Zrlr"),d=i(o),f=n("wxAW"),s=i(f),c=n("zwoO"),p=i(c),v=n("Pf15"),m=i(v),w=n("1v4d"),_=i(w),E=n("U7vG"),h=i(E),g=n("RH2O"),M=n("G4Vi"),b=n("BCOr"),O=n("GTkZ"),y=i(O),x=function(e){return{sideBarExpanding:e.ui.sideBarExpanding,viewerShow:e.ui.viewerShow}},I=function(e){return{sidebarToggle:function(t){return e(b.ui.sidebarToggle(t))},viewerToggle:function(t){return e(b.ui.viewerToggle(t))},openFile:function(t){return e(b.files.openFile(t))},editFile:function(t){return e(b.files.editFile(t))}}},N=(a=(0,g.connect)(x,I))(l=function(e){function t(){var e,n,i,a;(0,d.default)(this,t);for(var l=arguments.length,u=Array(l),o=0;o<l;o++)u[o]=arguments[o];return n=i=(0,p.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(u))),i.onSidebarToggle=function(){i.props.sidebarToggle(!i.props.sideBarExpanding)},i.onOpenFile=function(){M.ipcRenderer.send("open-file")},i.openFile=function(e,t){if(t){t=t.map(function(e){return{filename:e,basename:_.default.basename(e)}}),i.props.openFile(t);var n=t[t.length-1];n&&i.props.editFile(n)}},i.onViewerToggle=function(){i.props.viewerToggle(!i.props.viewerShow)},a=n,(0,p.default)(i,a)}return(0,m.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){M.ipcRenderer.addListener("open-file",this.openFile)}},{key:"componentWillUnmount",value:function(){M.ipcRenderer.removeListener("open-file",this.openFile)}},{key:"render",value:function(){var e=this.props,t=e.sideBarExpanding,n=e.viewerShow;return h.default.createElement(y.default,{sideBarExpanding:t,viewerShow:n,onSidebarToggle:this.onSidebarToggle,onOpenFile:this.onOpenFile,onViewerToggle:this.onViewerToggle})}}]),t}(E.Component))||l;t.default=N},aDMf:function(e,t,n){"use strict";n("uMhA"),n("njuX"),n("N20r"),e.exports=n("/jck")},fpoL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.lang=void 0;var i=n("qJRp"),a=function(e){return e&&e.__esModule?e:{default:e}}(i);t.lang=a.default},g726:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,l=n("bOdI"),u=i(l),r=n("Dd8w"),o=i(r),d=n("sTbe"),f=n("QYzy"),s=n("kIHq"),c={value:""};t.default=(0,d.handleActions)((a={},(0,u.default)(a,f.EDITOR_ON_CHANGE,function(e,t){var n=t.payload;return(0,o.default)({},e,{value:n})}),(0,u.default)(a,s.EDIT_FILE,function(e,t){var n=t.payload;return(0,o.default)({},e,{value:n.value})}),a),c)},gSgD:function(e,t){},jG57:function(e,t){},kIHq:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.EDIT_FILE=t.REMOVE_FILE=t.OPEN_FILE=void 0;var a,l=n("bOdI"),u=i(l),r=n("Xxa5"),o=i(r),d=n("//Fk"),f=i(d),s=n("exGp"),c=i(s),p=n("sTbe"),v=n("1v4d"),m=i(v),w=n("vHs2"),_=i(w),E=t.OPEN_FILE="OPEN_FILE",h=t.REMOVE_FILE="REMOVE_FILE",g=t.EDIT_FILE="EDIT_FILE";t.default=(0,p.createActions)((a={},(0,u.default)(a,E,function(e){return e}),(0,u.default)(a,h,function(e){return e}),(0,u.default)(a,g,function(){var e=(0,c.default)(o.default.mark(function e(t){var n;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.default.normalize(t.filename),e.next=3,new f.default(function(e,i){_.default.stat(n,function(a,l){if(a)return i(a);_.default.readFile(n,function(n,a){if(n)return i(n);e({file:t,value:a.toString()})})})});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}()),a))},lVK7:function(e,t,n){"use strict";n("aDMf")},njuX:function(e,t){},owVd:function(e,t){},qEAH:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("Zx67"),l=i(a),u=n("Zrlr"),r=i(u),o=n("wxAW"),d=i(o),f=n("zwoO"),s=i(f),c=n("Pf15"),p=i(c),v=n("U7vG"),m=i(v),w=n("8U58"),_=i(w),E=n("HW6M"),h=i(E);n("f6fj"),n("hKnC"),n("afnM"),n("7Xsf"),n("4/hK"),n("gSgD"),n("9xLI"),n("owVd");var g=function(e){function t(){var e,n,i,a;(0,r.default)(this,t);for(var u=arguments.length,o=Array(u),d=0;d<u;d++)o[d]=arguments[d];return n=i=(0,s.default)(this,(e=t.__proto__||(0,l.default)(t)).call.apply(e,[this].concat(o))),i.editor=null,a=n,(0,s.default)(i,a)}return(0,p.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.value;this.editor=(0,_.default)(this.refs.editor,{value:t,mode:"text/x-markdown",theme:"xq-light",indentUnit:2,smartIndent:!0,tabSize:4,indentWithTabs:!0,keyMap:"sublime",lineWrapping:!0,scrollbarStyle:"overlay",inputStyle:"contenteditable",showCursorWhenSelecting:!0,placeholder:"输入markdown",lineWiseCopyCut:!0,autofocus:!0,resetSelectionOnContextMenu:!0}),this.editor.on("change",function(){e.props.onChange(e.editor.getValue())})}},{key:"componentDidUpdate",value:function(){var e=this.props.value;this.editor.getValue()!==e&&this.editor.setValue(e)}},{key:"render",value:function(){var e=this.props.viewerShow,t=(0,h.default)("editor",{"editor-viewer-hide":!e});return m.default.createElement("div",{className:t},m.default.createElement("div",{ref:"editor",className:"editor-container"}))}}]),t}(v.Component);t.default=g},qJRp:function(e,t){e.exports={windowClose:"关闭",windowMaximizeToggle:"最大化/还原",windowMinimize:"最小化",sidebarToggle:"展开/关闭",openFile:"打开文件",viewerToggle:"显示/隐藏预览",settings:"设置"}},tzjR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VIEWER_TOGGLE=t.SIDEBAR_TOGGLE=t.WINDOW_MAXIMIZE=void 0;var i,a=n("bOdI"),l=function(e){return e&&e.__esModule?e:{default:e}}(a),u=n("sTbe"),r=t.WINDOW_MAXIMIZE="WINDOW_MAXIMIZE",o=t.SIDEBAR_TOGGLE="SIDEBAR_TOGGLE",d=t.VIEWER_TOGGLE="VIEWER_TOGGLE";t.default=(0,u.createActions)((i={},(0,l.default)(i,r,function(e){return e}),(0,l.default)(i,o,function(e){return e}),(0,l.default)(i,d,function(e){return e}),i))},uMhA:function(e,t){},"v+0d":function(e,t){},vHs2:function(e,t){e.exports=require("fs")},"y8U+":function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l,u=n("Zx67"),r=i(u),o=n("Zrlr"),d=i(o),f=n("wxAW"),s=i(f),c=n("zwoO"),p=i(c),v=n("Pf15"),m=i(v),w=n("U7vG"),_=i(w),E=n("RH2O"),h=n("G4Vi"),g=n("NyPT"),M=i(g),b=function(e){return{sideBarExpanding:e.ui.sideBarExpanding,viewerShow:e.ui.viewerShow}},O=(a=(0,E.connect)(b))(l=function(e){function t(){return(0,d.default)(this,t),(0,p.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){h.ipcRenderer.send("app-mounted")}},{key:"render",value:function(){var e=this.props,t=e.sideBarExpanding,n=e.viewerShow;return _.default.createElement(M.default,{sideBarExpanding:t,viewerShow:n})}}]),t}(w.Component))||l;t.default=O},zZCQ:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l,u=n("Zx67"),r=i(u),o=n("Zrlr"),d=i(o),f=n("wxAW"),s=i(f),c=n("zwoO"),p=i(c),v=n("Pf15"),m=i(v),w=n("U7vG"),_=i(w),E=n("RH2O"),h=n("G4Vi"),g=n("BCOr"),M=n("4sPU"),b=i(M),O=function(e){return{windowIsMaximize:e.ui.windowIsMaximize,active:e.files.active}},y=function(e){return{windowMaximize:function(t){return e(g.ui.windowMaximize(t))}}},x=(a=(0,E.connect)(O,y))(l=function(e){function t(){var e,n,i,a;(0,d.default)(this,t);for(var l=arguments.length,u=Array(l),o=0;o<l;o++)u[o]=arguments[o];return n=i=(0,p.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(u))),i.toggleMaximize=function(e,t){i.props.windowMaximize(t)},i.onWindowClose=function(){h.ipcRenderer.send("window-close")},i.onWindowMaximizeToggle=function(){h.ipcRenderer.send("window-maximize",!i.props.windowIsMaximize)},i.onWindowMinimize=function(){h.ipcRenderer.send("window-minimize")},a=n,(0,p.default)(i,a)}return(0,m.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){h.ipcRenderer.addListener("window-maximize-change",this.toggleMaximize)}},{key:"componentWillUnmount",value:function(){h.ipcRenderer.removeListener("window-maximize-change",this.toggleMaximize)}},{key:"render",value:function(){var e=this.props,t=e.active,n=e.windowIsMaximize,i=t.basename||"Markdown365";return _.default.createElement(b.default,{title:i,windowIsMaximize:n,onWindowClose:this.onWindowClose,onWindowMaximizeToggle:this.onWindowMaximizeToggle,onWindowMinimize:this.onWindowMinimize})}}]),t}(w.Component))||l;t.default=x}},["lVK7"]);