(function(t){function e(e){for(var a,s,l=e[0],o=e[1],c=e[2],d=0,p=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,l=1;l<n.length;l++){var o=n[l];0!==i[o]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},4631:function(t,e,n){},"482e":function(t,e,n){"use strict";var a=n("fba7"),i=n.n(a);i.a},"564a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("b9b6");var a=n("4749"),i=n.n(a),r=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("IndexRu")},l=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("HoverButton"),n("el-row",[n("el-col",{attrs:{span:24}},[n("HeaderWrapper",{attrs:{src:"http://www.tidiy.com.cn/templates/default/v2/img/top.jpg"}})],1)],1),n("el-row",[n("NavMenu")],1),n("el-row",[n("CarouselRun")],1),n("el-row",[n("el-col",{attrs:{span:24}},[n("div",[n("h3",{staticClass:"invisible"},[n("p",{staticClass:"met-p-title"},[t._v("BRAND NEWS")]),n("a",{attrs:{title:"品牌资讯",target:"_self"}},[t._v("品牌资讯")])])])])],1),n("el-row",[n("el-col",{attrs:{span:24}},[n("p",{staticClass:"desc invisible",attrs:{"data-plugin":"appear","data-animate":"fade","data-repeat":"false"}},[t._v("特地为你，量身定制！ "),n("br"),t._v("来到品牌资讯你能快速了解到特地的最新动态，本期看点有哪些，欢迎走进我们，透过我的双眼告诉你。")])])],1),n("el-row",[n("HeaderWrapper",{attrs:{src:"http://www.tidiy.com.cn/uploads/image/20180306/1520328289.jpg"}})],1),n("el-row",[n("el-col",{attrs:{span:24}},[n("div",[n("h3",{staticClass:"invisible"},[n("p",{staticClass:"met-p-title"},[t._v("PRODUCT SHOW")]),n("a",{attrs:{title:"品牌资讯",target:"_self"}},[t._v("产品推荐")])])])])],1),n("el-row",[n("el-col",{attrs:{span:24}},[n("p",{staticClass:"desc invisible",attrs:{"data-plugin":"appear","data-animate":"fade","data-repeat":"false"}},[t._v("特地为你，量身定制！ "),n("br"),t._v("来到品牌资讯你能快速了解到特地的最新动态，本期看点有哪些，欢迎走进我们，透过我的双眼告诉你。")])])],1),n("el-row",[n("el-col",{attrs:{span:8}},[n("ImgList")],1),n("el-col",{attrs:{span:8}},[n("ImgList")],1),n("el-col",{attrs:{span:8}},[n("ImgList")],1)],1),n("el-row",[n("el-col",{attrs:{span:8}},[n("ImgList")],1),n("el-col",{attrs:{span:8}},[n("ImgList")],1),n("el-col",{attrs:{span:8}},[n("ImgList")],1)],1),n("el-row",[n("el-col",{attrs:{span:24}},[n("FooterWrapper")],1)],1)],1)},c=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-image__placeholder"},[n("div",{staticClass:"block"},[n("el-image",{attrs:{src:t.src}},[n("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(" 加载中"),n("span",{staticClass:"dot"},[t._v("...")])])])],1)])},d=[],p={name:"HeaderWrapper",props:{src:{type:String,default:"http://www.tidiy.com.cn/uploads/image/20180306/1520328289.jpg"}},data:function(){return{}}},m=p,f=n("2877"),v=Object(f["a"])(m,u,d,!1,null,"57cd7de5",null),h=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex2,mode:"horizontal","background-color":"#B3C0D1","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"1"}},[t._v("首页")]),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[t._v("淘砖产品")]),n("el-menu-item",{attrs:{index:"2-1"}},[n("router-link",{attrs:{to:"/detali"}},[t._v("梦见系列")])],1),n("el-menu-item",{attrs:{index:"2-2"}},[t._v("商石系列")]),n("el-menu-item",{attrs:{index:"2-3"}},[t._v("贝加尔系列")]),n("el-submenu",{attrs:{index:"2-4"}},[n("template",{slot:"title"},[t._v("空间效果图")]),n("el-menu-item",{attrs:{index:"2-4-1"}},[t._v("厨房")]),n("el-menu-item",{attrs:{index:"2-4-2"}},[t._v("客厅")]),n("el-menu-item",{attrs:{index:"2-4-3"}},[t._v("餐厅")])],2)],2),n("el-menu-item",{attrs:{index:"3"}},[t._v("关于陶砖")]),n("el-menu-item",{attrs:{index:"4"}},[n("a",{attrs:{href:"#"}},[t._v("其他产品")])]),n("el-menu-item",{attrs:{index:"5"}},[n("a",{attrs:{href:"#"}},[t._v("招商加盟")])])],1)],1)},g=[],_={name:"NavMenu",data:function(){return{activeIndex:"1",activeIndex2:"1"}},methods:{handleSelect:function(t,e){console.log(t,e)}}},w=_,y=(n("a01c"),Object(f["a"])(w,b,g,!1,null,null,null)),x=y.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-carousel",{attrs:{interval:4e3,type:"card",height:"200px"}},t._l(t.urls,(function(t,e){return n("el-carousel-item",{key:e},[n("img",{staticClass:"imgHeight",attrs:{src:t,alt:""}})])})),1)},C=[],E={name:"CarouselRun",data:function(){return{urls:["http://www.tidiy.com.cn/uploads/image/20200318/1584521161.jpg","http://www.tidiy.com.cn/uploads/image/20200103/1578018125.jpg","http://www.tidiy.com.cn/uploads/image/20190415/1555320533.jpg","http://www.tidiy.com.cn/uploads/image/20190925/1569423867.jpg"]}}},T=E,O=(n("c4bd"),Object(f["a"])(T,j,C,!1,null,"d1e1e9d0",null)),S=O.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-image__preview"},[n("el-image",{staticStyle:{width:"90%",height:"100%","border-radius":"8px"},attrs:{src:t.url,"preview-src-list":t.srcList}})],1)},L=[],W={name:"ImgList",data:function(){return{url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",srcList:["https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg","https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"]}}},$=W,k=Object(f["a"])($,I,L,!1,null,"3c101bae",null),H=k.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"div",staticClass:"hover",style:{left:t.left+"px",top:t.top+"px"},attrs:{draggable:!0},on:{click:t.doThis}},[n("i",{staticClass:"el-icon-star-off"}),t._v(" 微信联系 ")]),n("img",{directives:[{name:"show",rawName:"v-show",value:t.visibility,expression:"visibility"}],staticClass:"code",style:{left:t.left-125+"px",top:t.top-200+"px"},attrs:{src:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1588957877&di=763388f776cd37a0609ba2220632a9d4&src=http://cms.an.m.liebao.cn/images/logos/201704/523_1493015466.jpg",alt:""}}),n("a",{staticClass:"Jump",style:{left:t.left+"px",top:t.top+90+"px"},attrs:{target:"_blank",href:"http://wpa.qq.com/msgrd?v=3&uin=2890276601&site=qq&menu=yes"}},[n("img",{attrs:{border:"0",src:"http://wpa.qq.com/pa?p=2:2890276601:51",alt:"点击这里给我发消息",title:"点击这里给我发消息"}})])])},R=[],q={name:"HoverButton",created:function(){this.left=document.documentElement.clientWidth-75,this.top=.75*document.documentElement.clientHeight},data:function(){return{left:0,top:0,timer:null,currentTop:0,visibility:!1}},mounted:function(){var t=this;window.addEventListener("scroll",this.handleScrollStart),this.$nextTick((function(){var e=t.$refs.div;e.addEventListener("touchstart",(function(){e.style.transition="none"})),e.addEventListener("touchmove",(function(e){if(1===e.targetTouches.length){var n=event.targetTouches[0];t.left=n.clientX,t.top=n.clientY}})),e.addEventListener("touchend",(function(){t.left>document.documentElement.clientWidth/2?t.left=document.documentElement.clientWidth-75:t.left=0}))}))},methods:{handleScrollStart:function(){var t=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){t.handleScrollEnd()}),300),this.currentTop=document.documentElement.scrollTop||document.body.scrollTop,this.visibility&&(this.visibility=!this.visibility),this.left=document.documentElement.clientWidth},handleScrollEnd:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;t===this.currentTop&&(this.left=document.documentElement.clientWidth-75,clearTimeout(this.timer))},doThis:function(){this.visibility=!this.visibility}},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScrollStart)}},M=q,N=(n("bdc1"),Object(f["a"])(M,P,R,!1,null,"2c6e5892",null)),B=N.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ecofootbt"},[n("div",{staticClass:"footer-cp"},[n("ul",[n("li",[t._v("福建晋江淘砖有限公司")]),n("li",{staticStyle:{margin:"20px 0","font-weight":"inherit"}},[t._v("福建省晋江市禅城区季华三路青柯路138号特地·负离子瓷砖总部")]),n("li",[n("span"),n("i",{staticClass:"el-icon-phone"}),t._v("0757-6663 0905 "),n("br"),n("i",{staticClass:"el-icon-phone"}),t._v(" 0757-8226 0809-188 ")])])]),n("div",{staticClass:"footer-logo"},[t._v(" 版权所有 广东特地陶瓷有限公司 "),n("a",{attrs:{href:"http://www.miitbeian.gov.cn"}},[t._v("粤ICP备12037101号")])])])}],J={name:"FooterWrapper"},F=J,z=(n("482e"),Object(f["a"])(F,D,A,!1,null,"c222a1a8",null)),U=z.exports,G={name:"IndexRu",components:{HeaderWrapper:h,NavMenu:x,CarouselRun:S,ImgList:H,HoverButton:B,FooterWrapper:U}},K=G,X=(n("cdb9"),Object(f["a"])(K,o,c,!1,null,"f56cb180",null)),Y=X.exports,Q={name:"App",components:{IndexRu:Y}},V=Q,Z=(n("034f"),Object(f["a"])(V,s,l,!1,null,null,null)),tt=Z.exports,et=n("31ae"),nt=n.n(et),at=n("1bee");r["default"].use(at["a"]);var it=new at["a"]({mode:"history",routes:[{path:"/foo",component:h},{path:"/bar",component:h}]}),rt=it;r["default"].config.productionTip=!1,r["default"].use(i.a,nt.a,at["a"]),r["default"].config.productionTip=!1,new r["default"]({router:rt,render:function(t){return t(tt)}}).$mount("#app")},"7f80":function(t,e,n){},"85ec":function(t,e,n){},a01c:function(t,e,n){"use strict";var a=n("d968"),i=n.n(a);i.a},bdc1:function(t,e,n){"use strict";var a=n("564a"),i=n.n(a);i.a},c4bd:function(t,e,n){"use strict";var a=n("4631"),i=n.n(a);i.a},cdb9:function(t,e,n){"use strict";var a=n("7f80"),i=n.n(a);i.a},d968:function(t,e,n){},fba7:function(t,e,n){}});
//# sourceMappingURL=app.b864735a.js.map