(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{13362:function(e,t,n){"use strict";var r=n(26314);t.Z=void 0;var o=r(n(80984)),i=n(57437),a=(0,o.default)((0,i.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");t.Z=a},80984:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(61780)},64898:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(13428),o=n(20791),i=n(2265);n(68185);var a=n(57042),u=n(95600),c=n(11156),l=n(35843),s=n(87927),d=n(43226),f=n(89975),p=n(59782),m=n(57437),v=(0,p.Z)((0,m.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),h=n(45295);let g=["slots","slotProps"],y=(0,l.ZP)(h.Z)(({theme:e})=>(0,r.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,r.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,r.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,f._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,f._4)(e.palette.grey[600],.12)})})),b=(0,l.ZP)(v)({width:24,height:16});var S=function(e){let{slots:t={},slotProps:n={}}=e,i=(0,o.Z)(e,g);return(0,m.jsx)("li",{children:(0,m.jsx)(y,(0,r.Z)({focusRipple:!0},i,{ownerState:e,children:(0,m.jsx)(b,(0,r.Z)({as:t.CollapsedIcon,ownerState:e},n.collapsedIcon))}))})},Z=n(26520),_=n(25702);function E(e){return(0,_.Z)("MuiBreadcrumbs",e)}let C=(0,Z.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),w=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],x=e=>{let{classes:t}=e;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},E,t)},M=(0,l.ZP)(d.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${C.li}`]:t.li},t.root]})({}),I=(0,l.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),T=(0,l.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8}),L=i.forwardRef(function(e,t){var n,u;let l=(0,s.Z)({props:e,name:"MuiBreadcrumbs"}),{children:d,className:f,component:p="nav",slots:v={},slotProps:h={},expandText:g="Show path",itemsAfterCollapse:y=1,itemsBeforeCollapse:b=1,maxItems:Z=8,separator:_="/"}=l,E=(0,o.Z)(l,w),[C,L]=i.useState(!1),P=(0,r.Z)({},l,{component:p,expanded:C,expandText:g,itemsAfterCollapse:y,itemsBeforeCollapse:b,maxItems:Z,separator:_}),j=x(P),A=(0,c.y)({elementType:v.CollapsedIcon,externalSlotProps:h.collapsedIcon,ownerState:P}),k=i.useRef(null),O=i.Children.toArray(d).filter(e=>i.isValidElement(e)).map((e,t)=>(0,m.jsx)("li",{className:j.li,children:e},`child-${t}`));return(0,m.jsx)(M,(0,r.Z)({ref:t,component:p,color:"text.secondary",className:(0,a.Z)(j.root,f),ownerState:P},E,{children:(0,m.jsx)(I,{className:j.ol,ref:k,ownerState:P,children:(n=C||Z&&O.length<=Z?O:b+y>=O.length?O:[...O.slice(0,b),(0,m.jsx)(S,{"aria-label":g,slots:{CollapsedIcon:v.CollapsedIcon},slotProps:{collapsedIcon:A},onClick:()=>{L(!0);let e=k.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...O.slice(O.length-y,O.length)],u=j.separator,n.reduce((e,t,r)=>(r<n.length-1?e=e.concat(t,(0,m.jsx)(T,{"aria-hidden":!0,className:u,ownerState:P,children:_},`separator-${r}`)):e.push(t),e),[]))})}))});var P=L},64956:function(e,t,n){"use strict";n.d(t,{ZP:function(){return m}});var r=n(13428),o=n(2265),i=n(87927),a=n(65474),u=n(53794),c=n(53469),l=n(57437),s=function(e){return(0,l.jsx)(a.Z,(0,r.Z)({},e,{defaultTheme:u.Z,themeId:c.Z}))};let d=(e,t)=>(0,r.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),f=e=>(0,r.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),p=(e,t=!1)=>{var n;let o={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([t,n])=>{var r;o[e.getColorSchemeSelector(t).replace(/\s*&/,"")]={colorScheme:null==(r=n.palette)?void 0:r.mode}});let i=(0,r.Z)({html:d(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,r.Z)({margin:0},f(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},o),a=null==(n=e.components)||null==(n=n.MuiCssBaseline)?void 0:n.styleOverrides;return a&&(i=[i,a]),i};var m=function(e){let t=(0,i.Z)({props:e,name:"MuiCssBaseline"}),{children:n,enableColorScheme:r=!1}=t;return(0,l.jsxs)(o.Fragment,{children:[(0,l.jsx)(s,{styles:e=>p(e,r)}),n]})}},19411:function(e,t){"use strict";t.Z={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea"}},69987:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(13428),o=n(20791);n(2265);var i=n(65059),a=n(53469),u=n(57437);let c=["theme"];function l(e){let{theme:t}=e,n=(0,o.Z)(e,c),l=t[a.Z];return(0,u.jsx)(i.Z,(0,r.Z)({},n,{themeId:l?a.Z:void 0,theme:l||t}))}},22135:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r,o=n(2265),i=n(44809),a=n(51529),u=n(88519);let c=(r||(r=n.t(o,2))).useSyncExternalStore;function l(e,t={}){let n=(0,i.Z)(),r="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:l=!1,matchMedia:s=r?window.matchMedia:null,ssrMatchMedia:d=null,noSsr:f=!1}=(0,a.Z)({name:"MuiUseMediaQuery",props:t,theme:n}),p="function"==typeof e?e(n):e;p=p.replace(/^@media( ?)/m,"");let m=(void 0!==c?function(e,t,n,r,i){let a=o.useCallback(()=>t,[t]),u=o.useMemo(()=>{if(i&&n)return()=>n(e).matches;if(null!==r){let{matches:t}=r(e);return()=>t}return a},[a,e,r,i,n]),[l,s]=o.useMemo(()=>{if(null===n)return[a,()=>()=>{}];let t=n(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]},[a,n,e]),d=c(s,l,u);return d}:function(e,t,n,r,i){let[a,c]=o.useState(()=>i&&n?n(e).matches:r?r(e).matches:t);return(0,u.Z)(()=>{let t=!0;if(!n)return;let r=n(e),o=()=>{t&&c(r.matches)};return o(),r.addListener(o),()=>{t=!1,r.removeListener(o)}},[e,n]),a})(p,l,s,d,f);return m}},59782:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(13428),o=n(2265),i=n(20791),a=n(57042),u=n(95600),c=n(28702),l=n(87927),s=n(35843),d=n(26520),f=n(25702);function p(e){return(0,f.Z)("MuiSvgIcon",e)}(0,d.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var m=n(57437);let v=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],h=e=>{let{color:t,fontSize:n,classes:r}=e,o={root:["root","inherit"!==t&&`color${(0,c.Z)(t)}`,`fontSize${(0,c.Z)(n)}`]};return(0,u.Z)(o,p,r)},g=(0,s.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t[`color${(0,c.Z)(n.color)}`],t[`fontSize${(0,c.Z)(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,o,i,a,u,c,l,s,d,f,p,m;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(n=e.transitions)||null==(r=n.create)?void 0:r.call(n,"fill",{duration:null==(o=e.transitions)||null==(o=o.duration)?void 0:o.shorter}),fontSize:({inherit:"inherit",small:(null==(i=e.typography)||null==(a=i.pxToRem)?void 0:a.call(i,20))||"1.25rem",medium:(null==(u=e.typography)||null==(c=u.pxToRem)?void 0:c.call(u,24))||"1.5rem",large:(null==(l=e.typography)||null==(s=l.pxToRem)?void 0:s.call(l,35))||"2.1875rem"})[t.fontSize],color:null!=(d=null==(f=(e.vars||e).palette)||null==(f=f[t.color])?void 0:f.main)?d:({action:null==(p=(e.vars||e).palette)||null==(p=p.action)?void 0:p.active,disabled:null==(m=(e.vars||e).palette)||null==(m=m.action)?void 0:m.disabled,inherit:void 0})[t.color]}}),y=o.forwardRef(function(e,t){let n=(0,l.Z)({props:e,name:"MuiSvgIcon"}),{children:u,className:c,color:s="inherit",component:d="svg",fontSize:f="medium",htmlColor:p,inheritViewBox:y=!1,titleAccess:b,viewBox:S="0 0 24 24"}=n,Z=(0,i.Z)(n,v),_=o.isValidElement(u)&&"svg"===u.type,E=(0,r.Z)({},n,{color:s,component:d,fontSize:f,instanceFontSize:e.fontSize,inheritViewBox:y,viewBox:S,hasSvgAsChild:_}),C={};y||(C.viewBox=S);let w=h(E);return(0,m.jsxs)(g,(0,r.Z)({as:d,className:(0,a.Z)(w.root,c),focusable:"false",color:p,"aria-hidden":!b||void 0,role:b?"img":void 0,ref:t},C,Z,_&&u.props,{ownerState:E,children:[_?u.props.children:u,b?(0,m.jsx)("title",{children:b}):null]}))});function b(e,t){function n(n,o){return(0,m.jsx)(y,(0,r.Z)({"data-testid":`${t}Icon`,ref:o},n,{children:e}))}return n.muiName=y.muiName,o.memo(o.forwardRef(n))}y.muiName="SvgIcon"},80494:function(e,t,n){"use strict";var r=n(78078);t.Z=r.Z},61780:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return a.Z},debounce:function(){return u.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return l},ownerDocument:function(){return s.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return p},unstable_ClassNameGenerator:function(){return Z},unstable_useEnhancedEffect:function(){return m.Z},unstable_useId:function(){return v},unsupportedProp:function(){return h},useControlled:function(){return g},useEventCallback:function(){return y.Z},useForkRef:function(){return b.Z},useIsFocusVisible:function(){return S.Z}});var r=n(25097),o=n(28702),i=n(62940).Z,a=n(59782),u=n(80494),c=n(17381).Z,l=n(8051).Z,s=n(53931),d=n(26649),f=n(73034).Z,p=n(13840).Z,m=n(88519),v=n(33449).Z,h=n(76537).Z,g=n(34625).Z,y=n(96),b=n(37663),S=n(12143);let Z={configure:e=>{r.Z.configure(e)}}},53931:function(e,t,n){"use strict";var r=n(96278);t.Z=r.Z},26649:function(e,t,n){"use strict";var r=n(88221);t.Z=r.Z},88519:function(e,t,n){"use strict";var r=n(1091);t.Z=r.Z},3453:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return i},default:function(){return a}});var n,r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){var t=e.type,n=e.props,o=document.createElement(t);for(var i in n)if(n.hasOwnProperty(i)&&"children"!==i&&"dangerouslySetInnerHTML"!==i&&void 0!==n[i]){var a=r[i]||i.toLowerCase();"script"===t&&("async"===a||"defer"===a||"noModule"===a)?o[a]=!!n[i]:o.setAttribute(a,n[i])}var u=n.children,c=n.dangerouslySetInnerHTML;return c?o.innerHTML=c.__html||"":u&&(o.textContent="string"==typeof u?u:Array.isArray(u)?u.join(""):""),o}function i(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){var n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){var r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:function(e){var t={};e.forEach(function(e){if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}var n=t[e.type]||[];n.push(e),t[e.type]=n});var r=t.title?t.title[0]:null,o="";if(r){var i=r.props.children;o="string"==typeof i?i:Array.isArray(i)?i.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(function(e){n(e,t[e]||[])})}}}n=function(e,t){for(var n,r=document.getElementsByTagName("head")[0],a=r.querySelector("meta[name=next-head-count]"),u=Number(a.content),c=[],l=0,s=a.previousElementSibling;l<u;l++,s=(null==s?void 0:s.previousElementSibling)||null)(null==s?void 0:null==(n=s.tagName)?void 0:n.toLowerCase())===e&&c.push(s);var d=t.map(o).filter(function(e){for(var t=0,n=c.length;t<n;t++)if(i(c[t],e))return c.splice(t,1),!1;return!0});c.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),d.forEach(function(e){return r.insertBefore(e,a)}),a.content=(u-c.length+d.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},83015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(35029),o=n(8001),i=n(24670),a=n(1801);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return b},initScriptLoader:function(){return S},default:function(){return _}});var u=n(21024),c=n(68533),l=u._(n(54887)),s=c._(n(2265)),d=n(41330),f=n(3453),p=n(98043),m=new Map,v=new Set,h=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],g=function(e){if(l.default.preinit){e.forEach(function(e){l.default.preinit(e,{as:"style"})});return}var t=document.head;e.forEach(function(e){var n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})},y=function(e){var t=e.src,n=e.id,r=e.onLoad,o=void 0===r?function(){}:r,a=e.onReady,u=void 0===a?null:a,c=e.dangerouslySetInnerHTML,l=e.children,s=void 0===l?"":l,d=e.strategy,p=void 0===d?"afterInteractive":d,y=e.onError,b=e.stylesheets,S=n||t;if(!(S&&v.has(S))){if(m.has(t)){v.add(S),m.get(t).then(o,y);return}var Z=function(){u&&u(),v.add(S)},_=document.createElement("script"),E=new Promise(function(e,t){_.addEventListener("load",function(t){e(),o&&o.call(this,t),Z()}),_.addEventListener("error",function(e){t(e)})}).catch(function(e){y&&y(e)});c?(_.innerHTML=c.__html||"",Z()):s?(_.textContent="string"==typeof s?s:Array.isArray(s)?s.join(""):"",Z()):t&&(_.src=t,m.set(t,E));var C=!0,w=!1,x=void 0;try{for(var M,I=Object.entries(e)[Symbol.iterator]();!(C=(M=I.next()).done);C=!0){var T=i._(M.value,2),L=T[0],P=T[1];if(!(void 0===P||h.includes(L))){var j=f.DOMAttributeNames[L]||L.toLowerCase();_.setAttribute(j,P)}}}catch(e){w=!0,x=e}finally{try{C||null==I.return||I.return()}finally{if(w)throw x}}"worker"===p&&_.setAttribute("type","text/partytown"),_.setAttribute("data-nscript",p),b&&g(b),document.body.appendChild(_)}};function b(e){var t=e.strategy;"lazyOnload"===(void 0===t?"afterInteractive":t)?window.addEventListener("load",function(){(0,p.requestIdleCallback)(function(){return y(e)})}):y(e)}function S(e){e.forEach(b),a._(document.querySelectorAll('[data-nscript="beforeInteractive"]')).concat(a._(document.querySelectorAll('[data-nscript="beforePageRender"]'))).forEach(function(e){var t=e.id||e.getAttribute("src");v.add(t)})}function Z(e){var t=e.id,n=e.src,i=void 0===n?"":n,a=e.onLoad,u=e.onReady,c=void 0===u?null:u,f=e.strategy,m=void 0===f?"afterInteractive":f,h=e.onError,g=e.stylesheets,b=o._(e,["id","src","onLoad","onReady","strategy","onError","stylesheets"]),S=(0,s.useContext)(d.HeadManagerContext),Z=S.updateScripts,_=S.scripts,E=S.getIsSsr,C=S.appDir,w=S.nonce,x=(0,s.useRef)(!1);(0,s.useEffect)(function(){var e=t||i;x.current||(c&&e&&v.has(e)&&c(),x.current=!0)},[c,t,i]);var M=(0,s.useRef)(!1);if((0,s.useEffect)(function(){!M.current&&("afterInteractive"===m?y(e):"lazyOnload"===m&&("complete"===document.readyState?(0,p.requestIdleCallback)(function(){return y(e)}):window.addEventListener("load",function(){(0,p.requestIdleCallback)(function(){return y(e)})})),M.current=!0)},[e,m]),("beforeInteractive"===m||"worker"===m)&&(Z?(_[m]=(_[m]||[]).concat([r._({id:t,src:i,onLoad:void 0===a?function(){}:a,onReady:c,onError:h},b)]),Z(_)):E&&E()?v.add(t||i):E&&!E()&&y(e)),C){if(g&&g.forEach(function(e){l.default.preinit(e,{as:"style"})}),"beforeInteractive"===m)return i?(l.default.preload(i,b.integrity?{as:"script",integrity:b.integrity}:{as:"script"}),s.default.createElement("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([i])+")"}})):(b.dangerouslySetInnerHTML&&(b.children=b.dangerouslySetInnerHTML.__html,delete b.dangerouslySetInnerHTML),s.default.createElement("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,r._({},b)])+")"}}));"afterInteractive"===m&&i&&l.default.preload(i,b.integrity?{as:"script",integrity:b.integrity}:{as:"script"})}return null}Object.defineProperty(Z,"__nextScript",{value:!0});var _=Z;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},22334:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useReportWebVitals",{enumerable:!0,get:function(){return i}});var r=n(2265),o=n(91952);function i(e){(0,r.useEffect)(function(){(0,o.onCLS)(e),(0,o.onFID)(e),(0,o.onLCP)(e),(0,o.onINP)(e),(0,o.onFCP)(e),(0,o.onTTFB)(e)},[e])}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},52007:function(e){e.exports={style:{fontFamily:"'__Roboto_a789c4', '__Roboto_Fallback_a789c4'",fontWeight:400,fontStyle:"normal"},className:"__className_a789c4"}},91952:function(e){var t,n,r,o,i,a,u,c,l,s,d,f,p,m,v,h,g,y,b,S,Z,_,E,C,w,x,M,I,T,L,P,j,A,k,O,R,N,F,z,B,H,q,D,$,W,V;(t={}).d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},void 0!==t&&(t.ab="//"),n={},t.r(n),t.d(n,{getCLS:function(){return E},getFCP:function(){return S},getFID:function(){return L},getINP:function(){return q},getLCP:function(){return $},getTTFB:function(){return V},onCLS:function(){return E},onFCP:function(){return S},onFID:function(){return L},onINP:function(){return q},onLCP:function(){return $},onTTFB:function(){return V}}),c=-1,l=function(e){addEventListener("pageshow",function(t){t.persisted&&(c=t.timeStamp,e(t))},!0)},s=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},d=function(){var e=s();return e&&e.activationStart||0},f=function(e,t){var n=s(),r="navigate";return c>=0?r="back-forward-cache":n&&(r=document.prerendering||d()>0?"prerender":n.type.replace(/_/g,"-")),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},p=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver(function(e){t(e.getEntries())});return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},m=function(e,t){var n=function n(r){"pagehide"!==r.type&&"hidden"!==document.visibilityState||(e(r),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},v=function(e,t,n,r){var o,i;return function(a){var u;t.value>=0&&(a||r)&&((i=t.value-(o||0))||void 0===o)&&(o=t.value,t.delta=i,t.rating=(u=t.value)>n[1]?"poor":u>n[0]?"needs-improvement":"good",e(t))}},h=-1,g=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},y=function(){m(function(e){h=e.timeStamp},!0)},b=function(){return h<0&&(h=g(),y(),l(function(){setTimeout(function(){h=g(),y()},0)})),{get firstHiddenTime(){return h}}},S=function(e,t){t=t||{};var n,r=[1800,3e3],o=b(),i=f("FCP"),a=function(e){e.forEach(function(e){"first-contentful-paint"===e.name&&(c&&c.disconnect(),e.startTime<o.firstHiddenTime&&(i.value=e.startTime-d(),i.entries.push(e),n(!0)))})},u=window.performance&&window.performance.getEntriesByName&&window.performance.getEntriesByName("first-contentful-paint")[0],c=u?null:p("paint",a);(u||c)&&(n=v(e,i,r,t.reportAllChanges),u&&a([u]),l(function(o){n=v(e,i=f("FCP"),r,t.reportAllChanges),requestAnimationFrame(function(){requestAnimationFrame(function(){i.value=performance.now()-o.timeStamp,n(!0)})})}))},Z=!1,_=-1,E=function(e,t){t=t||{};var n=[.1,.25];Z||(S(function(e){_=e.value}),Z=!0);var r,o=function(t){_>-1&&e(t)},i=f("CLS",0),a=0,u=[],c=function(e){e.forEach(function(e){if(!e.hadRecentInput){var t=u[0],n=u[u.length-1];a&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(a+=e.value,u.push(e)):(a=e.value,u=[e]),a>i.value&&(i.value=a,i.entries=u,r())}})},s=p("layout-shift",c);s&&(r=v(o,i,n,t.reportAllChanges),m(function(){c(s.takeRecords()),r(!0)}),l(function(){a=0,_=-1,r=v(o,i=f("CLS",0),n,t.reportAllChanges)}))},C={passive:!0,capture:!0},w=new Date,x=function(e,t){r||(r=t,o=e,i=new Date,T(removeEventListener),M())},M=function(){if(o>=0&&o<i-w){var e={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+o};a.forEach(function(t){t(e)}),a=[]}},I=function(e){if(e.cancelable){var t,n,r,o=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?(t=function(){x(o,e),r()},n=function(){r()},r=function(){removeEventListener("pointerup",t,C),removeEventListener("pointercancel",n,C)},addEventListener("pointerup",t,C),addEventListener("pointercancel",n,C)):x(o,e)}},T=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach(function(t){return e(t,I,C)})},L=function(e,t){t=t||{};var n,i=[100,300],u=b(),c=f("FID"),s=function(e){e.startTime<u.firstHiddenTime&&(c.value=e.processingStart-e.startTime,c.entries.push(e),n(!0))},d=function(e){e.forEach(s)},h=p("first-input",d);n=v(e,c,i,t.reportAllChanges),h&&m(function(){d(h.takeRecords()),h.disconnect()},!0),h&&l(function(){n=v(e,c=f("FID"),i,t.reportAllChanges),a=[],o=-1,r=null,T(addEventListener),a.push(s),M()})},P=0,j=1/0,A=0,k=function(e){e.forEach(function(e){e.interactionId&&(j=Math.min(j,e.interactionId),P=(A=Math.max(A,e.interactionId))?(A-j)/7+1:0)})},O=function(){return u?P:performance.interactionCount||0},R=function(){"interactionCount"in performance||u||(u=p("event",k,{type:"event",buffered:!0,durationThreshold:0}))},N=0,F=function(){return O()-N},z=[],B={},H=function(e){var t=z[z.length-1],n=B[e.interactionId];if(n||z.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};B[r.id]=r,z.push(r)}z.sort(function(e,t){return t.latency-e.latency}),z.splice(10).forEach(function(e){delete B[e.id]})}},q=function(e,t){t=t||{};var n=[200,500];R();var r,o=f("INP"),i=function(e){e.forEach(function(e){e.interactionId&&H(e),"first-input"!==e.entryType||z.some(function(t){return t.entries.some(function(t){return e.duration===t.duration&&e.startTime===t.startTime})})||H(e)});var t,n=(t=Math.min(z.length-1,Math.floor(F()/50)),z[t]);n&&n.latency!==o.value&&(o.value=n.latency,o.entries=n.entries,r())},a=p("event",i,{durationThreshold:t.durationThreshold||40});r=v(e,o,n,t.reportAllChanges),a&&(a.observe({type:"first-input",buffered:!0}),m(function(){i(a.takeRecords()),o.value<0&&F()>0&&(o.value=0,o.entries=[]),r(!0)}),l(function(){z=[],N=O(),r=v(e,o=f("INP"),n,t.reportAllChanges)}))},D={},$=function(e,t){t=t||{};var n,r=[2500,4e3],o=b(),i=f("LCP"),a=function(e){var t=e[e.length-1];if(t){var r=t.startTime-d();r<o.firstHiddenTime&&(i.value=r,i.entries=[t],n())}},u=p("largest-contentful-paint",a);if(u){n=v(e,i,r,t.reportAllChanges);var c=function(){D[i.id]||(a(u.takeRecords()),u.disconnect(),D[i.id]=!0,n(!0))};["keydown","click"].forEach(function(e){addEventListener(e,c,{once:!0,capture:!0})}),m(c,!0),l(function(o){n=v(e,i=f("LCP"),r,t.reportAllChanges),requestAnimationFrame(function(){requestAnimationFrame(function(){i.value=performance.now()-o.timeStamp,D[i.id]=!0,n(!0)})})})}},W=function e(t){document.prerendering?addEventListener("prerenderingchange",function(){return e(t)},!0):"complete"!==document.readyState?addEventListener("load",function(){return e(t)},!0):setTimeout(t,0)},V=function(e,t){t=t||{};var n=[800,1800],r=f("TTFB"),o=v(e,r,n,t.reportAllChanges);W(function(){var i=s();if(i){if(r.value=Math.max(i.responseStart-d(),0),r.value<0||r.value>performance.now())return;r.entries=[i],o(!0),l(function(){(o=v(e,r=f("TTFB",0),n,t.reportAllChanges))(!0)})}})},e.exports=n},61396:function(e,t,n){e.exports=n(46685)},24033:function(e,t,n){e.exports=n(68165)},95509:function(e,t,n){e.exports=n(22334)}}]);
//# sourceMappingURL=61-a63b6c34d5c112ce.js.map