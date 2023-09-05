(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{41101:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}}),n(2265);var r=n(95270),i=n(53794),o=n(53469);function a(){let e=(0,r.Z)(i.Z);return e[o.Z]||e}},5990:function(e,t,n){Promise.resolve().then(n.bind(n,40762))},40762:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r,i=n(57437),o=n(20791),a=n(13428),s=n(2265),l=n(57042),u=n(65425),c=n(43381),p=n(95600),f=n(35843),d=n(87927),m=n(41101);let g=s.createContext();var x=n(26520),h=n(25702);function v(e){return(0,h.Z)("MuiGrid",e)}let b=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],w=(0,x.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map(e=>`spacing-xs-${e}`),...["column-reverse","column","row-reverse","row"].map(e=>`direction-xs-${e}`),...["nowrap","wrap-reverse","wrap"].map(e=>`wrap-xs-${e}`),...b.map(e=>`grid-xs-${e}`),...b.map(e=>`grid-sm-${e}`),...b.map(e=>`grid-md-${e}`),...b.map(e=>`grid-lg-${e}`),...b.map(e=>`grid-xl-${e}`)]),$=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function y(e){let t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function k({breakpoints:e,values:t}){let n="";Object.keys(t).forEach(e=>{""===n&&0!==t[e]&&(n=e)});let r=Object.keys(e).sort((t,n)=>e[t]-e[n]);return r.slice(0,r.indexOf(n))}let S=(0,f.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e,{container:r,direction:i,item:o,spacing:a,wrap:s,zeroMinWidth:l,breakpoints:u}=n,c=[];r&&(c=function(e,t,n={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[n[`spacing-xs-${String(e)}`]];let r=[];return t.forEach(t=>{let i=e[t];Number(i)>0&&r.push(n[`spacing-${t}-${String(i)}`])}),r}(a,u,t));let p=[];return u.forEach(e=>{let r=n[e];r&&p.push(t[`grid-${e}-${String(r)}`])}),[t.root,r&&t.container,o&&t.item,l&&t.zeroMinWidth,...c,"row"!==i&&t[`direction-xs-${String(i)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...p]}})(({ownerState:e})=>(0,a.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap}),function({theme:e,ownerState:t}){let n=(0,u.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,u.k9)({theme:e},n,e=>{let t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${w.item}`]={maxWidth:"none"}),t})},function({theme:e,ownerState:t}){let{container:n,rowSpacing:r}=t,i={};if(n&&0!==r){let t;let n=(0,u.P$)({values:r,breakpoints:e.breakpoints.values});"object"==typeof n&&(t=k({breakpoints:e.breakpoints.values,values:n})),i=(0,u.k9)({theme:e},n,(n,r)=>{var i;let o=e.spacing(n);return"0px"!==o?{marginTop:`-${y(o)}`,[`& > .${w.item}`]:{paddingTop:y(o)}}:null!=(i=t)&&i.includes(r)?{}:{marginTop:0,[`& > .${w.item}`]:{paddingTop:0}}})}return i},function({theme:e,ownerState:t}){let{container:n,columnSpacing:r}=t,i={};if(n&&0!==r){let t;let n=(0,u.P$)({values:r,breakpoints:e.breakpoints.values});"object"==typeof n&&(t=k({breakpoints:e.breakpoints.values,values:n})),i=(0,u.k9)({theme:e},n,(n,r)=>{var i;let o=e.spacing(n);return"0px"!==o?{width:`calc(100% + ${y(o)})`,marginLeft:`-${y(o)}`,[`& > .${w.item}`]:{paddingLeft:y(o)}}:null!=(i=t)&&i.includes(r)?{}:{width:"100%",marginLeft:0,[`& > .${w.item}`]:{paddingLeft:0}}})}return i},function({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce((r,i)=>{let o={};if(t[i]&&(n=t[i]),!n)return r;if(!0===n)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{let s=(0,u.P$)({values:t.columns,breakpoints:e.breakpoints.values}),l="object"==typeof s?s[i]:s;if(null==l)return r;let c=`${Math.round(n/l*1e8)/1e6}%`,p={};if(t.container&&t.item&&0!==t.columnSpacing){let n=e.spacing(t.columnSpacing);if("0px"!==n){let e=`calc(${c} + ${y(n)})`;p={flexBasis:e,maxWidth:e}}}o=(0,a.Z)({flexBasis:c,flexGrow:0,maxWidth:c},p)}return 0===e.breakpoints.values[i]?Object.assign(r,o):r[e.breakpoints.up(i)]=o,r},{})}),j=e=>{let{classes:t,container:n,direction:r,item:i,spacing:o,wrap:a,zeroMinWidth:s,breakpoints:l}=e,u=[];n&&(u=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];let n=[];return t.forEach(t=>{let r=e[t];if(Number(r)>0){let e=`spacing-${t}-${String(r)}`;n.push(e)}}),n}(o,l));let c=[];l.forEach(t=>{let n=e[t];n&&c.push(`grid-${t}-${String(n)}`)});let f={root:["root",n&&"container",i&&"item",s&&"zeroMinWidth",...u,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==a&&`wrap-xs-${String(a)}`,...c]};return(0,p.Z)(f,v,t)},Z=s.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiGrid"}),{breakpoints:r}=(0,m.Z)(),u=(0,c.Z)(n),{className:p,columns:f,columnSpacing:x,component:h="div",container:v=!1,direction:b="row",item:w=!1,rowSpacing:y,spacing:k=0,wrap:Z="wrap",zeroMinWidth:N=!1}=u,_=(0,o.Z)(u,$),W=y||k,P=x||k,M=s.useContext(g),O=v?f||12:M,E={},z=(0,a.Z)({},_);r.keys.forEach(e=>{null!=_[e]&&(E[e]=_[e],delete z[e])});let C=(0,a.Z)({},u,{columns:O,container:v,direction:b,item:w,rowSpacing:W,columnSpacing:P,wrap:Z,zeroMinWidth:N,spacing:k},E,{breakpoints:r.keys}),G=j(C);return(0,i.jsx)(g.Provider,{value:O,children:(0,i.jsx)(S,(0,a.Z)({ownerState:C,className:(0,l.Z)(G.root,p),as:h,ref:t},z))})});var N=n(63955),_=n(43226),W=n(39227),P=n(35551),M=n(16691),O=n.n(M),E=n(61396),z=n.n(E),C=function(){return(0,i.jsxs)(Z,{container:!0,direction:"row",justifyContent:"space-evenly",alignItems:"stretch",sx:{height:function(e){return"calc(70vh - ".concat(null!==(r=e.mixins.toolbar.minHeight)&&void 0!==r?r:0,"px)")}},children:[(0,i.jsx)(Z,{item:!0,xs:12,md:6,justifyContent:"space-evenly",alignItems:"stretch",children:(0,i.jsx)(N.Z,{sx:{position:"relative",height:"100%"},children:(0,i.jsx)(O(),{src:"/assets/empower-with-solutions.svg",fill:!0,alt:"Empower with Solutions",style:{objectFit:"contain"}})})}),(0,i.jsxs)(Z,{container:!0,item:!0,direction:"column",xs:12,md:6,justifyContent:"space-evenly",alignItems:"stretch",children:[(0,i.jsx)(Z,{item:!0,xs:6,sx:{position:"relative"},children:(0,i.jsx)(_.Z,{sx:{position:"absolute",bottom:"1em",left:"1em"},children:"Empowering You through Intelligent Software Solutions"})}),(0,i.jsx)(Z,{item:!0,xs:6,sx:{position:"relative"},children:(0,i.jsx)(W.Z,{sx:{position:"absolute",top:"1em",left:"1em"},children:(0,i.jsx)(z(),{href:"/solutions",passHref:!0,children:(0,i.jsx)(P.Z,{variant:"contained",children:"View Solutions"})})})})]})]})}},1295:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(24670);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return c},unstable_getImgProps:function(){return u}});var i=n(21024),o=n(32301),a=n(27873),s=n(63222),l=i._(n(75033)),u=function(e){(0,a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");var t=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}}).props,n=!0,i=!1,s=void 0;try{for(var u,c=Object.entries(t)[Symbol.iterator]();!(n=(u=c.next()).done);n=!0){var p=r._(u.value,2),f=p[0],d=p[1];void 0===d&&delete t[f]}}catch(e){i=!0,s=e}finally{try{n||null==c.return||c.return()}finally{if(i)throw s}}return{props:t}},c=s.Image},16691:function(e,t,n){e.exports=n(1295)},61396:function(e,t,n){e.exports=n(46685)}},function(e){e.O(0,[951,843,734,685,382,29,971,596,744],function(){return e(e.s=5990)}),_N_E=e.O()}]);
//# sourceMappingURL=page-4c7ccfb625602177.js.map