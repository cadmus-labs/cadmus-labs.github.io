(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{3991:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return u},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return s}});var r,n,o="refresh",i="navigate",a="restore",l="server-patch",u="prefetch",c="fast-refresh",s="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8872:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(567),o=r(4932),i=r(7702),a=r(1309),l=r(4586);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});var u=r(8754),c=r(1757)._(r(7294)),s=u._(r(2636)),f=r(5471),d=r(3735),p=r(3341);r(4210);var v=u._(r(7746)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,i,a,l){var u=null==e?void 0:e.src;e&&e["data-loaded-src"]!==u&&(e["data-loaded-src"]=u,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentElement&&e.isConnected){if("blur"===t&&a(!0),null==r?void 0:r.current){var l=new Event("load");Object.defineProperty(l,"target",{writable:!1,value:e});var u=!1,c=!1;r.current(o._(n._({},l),{nativeEvent:l,currentTarget:e,target:e,isDefaultPrevented:function(){return u},isPropagationStopped:function(){return c},persist:function(){},preventDefault:function(){u=!0,l.preventDefault()},stopPropagation:function(){c=!0,l.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}}))}function m(e){var t=a._(c.version.split("."),2),r=t[0],n=t[1],o=parseInt(r,10),i=parseInt(n,10);return o>18||18===o&&i>=3?{fetchPriority:e}:{fetchpriority:e}}var y=(0,c.forwardRef)(function(e,t){var r=e.src,a=e.srcSet,l=e.sizes,u=e.height,s=e.width,f=e.decoding,d=e.className,p=e.style,v=e.fetchPriority,g=e.placeholder,y=e.loading,b=e.unoptimized,_=e.fill,w=e.onLoadRef,C=e.onLoadingCompleteRef,P=e.setBlurComplete,j=e.setShowAltText,S=(e.onLoad,e.onError),E=i._(e,["src","srcSet","sizes","height","width","decoding","className","style","fetchPriority","placeholder","loading","unoptimized","fill","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return c.default.createElement("img",o._(n._({},E,m(v)),{loading:y,width:s,height:u,decoding:f,"data-nimg":_?"fill":"1",className:d,style:p,sizes:l,srcSet:a,src:r,ref:(0,c.useCallback)(function(e){t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&h(e,g,w,C,P,b))},[r,g,w,C,P,S,b,t]),onLoad:function(e){h(e.currentTarget,g,w,C,P,b)},onError:function(e){j(!0),"blur"===g&&P(!0),S&&S(e)}}))}),b=(0,c.forwardRef)(function(e,t){var r=(0,c.useContext)(p.ImageConfigContext),i=(0,c.useMemo)(function(){var e=g||r||d.imageConfigDefault,t=l._(e.deviceSizes).concat(l._(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return o._(n._({},e),{allSizes:t,deviceSizes:i})},[r]),u=e.onLoad,h=e.onLoadingComplete,b=(0,c.useRef)(u);(0,c.useEffect)(function(){b.current=u},[u]);var _=(0,c.useRef)(h);(0,c.useEffect)(function(){_.current=h},[h]);var w=a._((0,c.useState)(!1),2),C=w[0],P=w[1],j=a._((0,c.useState)(!1),2),S=j[0],E=j[1],O=(0,f.getImgProps)(e,{defaultLoader:v.default,imgConf:i,blurComplete:C,showAltText:S}),z=O.props,R=O.meta;return c.default.createElement(c.default.Fragment,null,c.default.createElement(y,o._(n._({},z),{unoptimized:R.unoptimized,placeholder:R.placeholder,fill:R.fill,onLoadRef:b,onLoadingCompleteRef:_,setBlurComplete:P,setShowAltText:E,ref:t})),R.priority?c.default.createElement(s.default,null,c.default.createElement("link",n._({key:"__nimg-"+z.src+z.srcSet+z.sizes,rel:"preload",as:"image",href:z.srcSet?void 0:z.src,imageSrcSet:z.srcSet,imageSizes:z.sizes,crossOrigin:z.crossOrigin,referrerPolicy:z.referrerPolicy},m(z.fetchPriority)))):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(567),o=r(7702),i=r(1309);r(8421),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return w}});var a=r(8754)._(r(7294)),l=r(4532),u=r(3353),c=r(1410),s=r(9064),f=r(370),d=r(9955),p=r(4224),v=r(508),g=r(1516),h=r(4266),m=r(3991),y=new Set;function b(e,t,r,n,o,i){if(i||(0,u.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){var a=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(y.has(a))return;y.add(a)}Promise.resolve(i?e.prefetch(t,o):e.prefetch(t,r,n)).catch(function(e){})}}function _(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}var w=a.default.forwardRef(function(e,t){var r,c,y=e.href,w=e.as,C=e.children,P=e.prefetch,j=void 0===P?null:P,S=e.passHref,E=e.replace,O=e.shallow,z=e.scroll,R=e.locale,M=e.onClick,x=e.onMouseEnter,I=e.onTouchStart,L=e.legacyBehavior,A=void 0!==L&&L,k=o._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=C,A&&("string"==typeof r||"number"==typeof r)&&(r=a.default.createElement("a",null,r));var T=a.default.useContext(d.RouterContext),N=a.default.useContext(p.AppRouterContext),F=null!=T?T:N,U=!T,D=!1!==j,B=null===j?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,H=a.default.useMemo(function(){if(!T){var e=_(y);return{href:e,as:w?_(w):e}}var t=i._((0,l.resolveHref)(T,y,!0),2),r=t[0],n=t[1];return{href:r,as:w?(0,l.resolveHref)(T,w):n||r}},[T,y,w]),q=H.href,W=H.as,K=a.default.useRef(q),V=a.default.useRef(W);A&&(c=a.default.Children.only(r));var G=A?c&&"object"==typeof c&&c.ref:t,Y=i._((0,v.useIntersection)({rootMargin:"200px"}),3),J=Y[0],$=Y[1],Q=Y[2],X=a.default.useCallback(function(e){(V.current!==W||K.current!==q)&&(Q(),V.current=W,K.current=q),J(e),G&&("function"==typeof G?G(e):"object"==typeof G&&(G.current=e))},[W,G,q,Q,J]);a.default.useEffect(function(){F&&$&&D&&b(F,q,W,{locale:R},{kind:B},U)},[W,q,$,R,D,null==T?void 0:T.locale,F,U,B]);var Z={ref:X,onClick:function(e){A||"function"!=typeof M||M(e),A&&c.props&&"function"==typeof c.props.onClick&&c.props.onClick(e),F&&!e.defaultPrevented&&function(e,t,r,n,o,i,l,c,s,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(d=e.currentTarget.getAttribute("target"))||"_self"===d)&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&(!e.nativeEvent||2!==e.nativeEvent.which)&&(s||(0,u.isLocalURL)(r))){e.preventDefault();var d,p=function(){var e=null==l||l;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:c,scroll:e}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!f,scroll:e})};s?a.default.startTransition(p):p()}}(e,F,q,W,E,O,z,R,U,D)},onMouseEnter:function(e){A||"function"!=typeof x||x(e),A&&c.props&&"function"==typeof c.props.onMouseEnter&&c.props.onMouseEnter(e),F&&(D||!U)&&b(F,q,W,{locale:R,priority:!0,bypassPrefetchedCheck:!0},{kind:B},U)},onTouchStart:function(e){A||"function"!=typeof I||I(e),A&&c.props&&"function"==typeof c.props.onTouchStart&&c.props.onTouchStart(e),F&&(D||!U)&&b(F,q,W,{locale:R,priority:!0,bypassPrefetchedCheck:!0},{kind:B},U)}};if((0,s.isAbsoluteUrl)(W))Z.href=W;else if(!A||S||"a"===c.type&&!("href"in c.props)){var ee=void 0!==R?R:null==T?void 0:T.locale,et=(null==T?void 0:T.isLocaleDomain)&&(0,g.getDomainLocale)(W,ee,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);Z.href=et||(0,h.addBasePath)((0,f.addLocale)(W,ee,null==T?void 0:T.defaultLocale))}return A?a.default.cloneElement(c,Z):a.default.createElement("a",n._({},k,Z),r)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1309);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});var o=r(7294),i=r(29),a="function"==typeof IntersectionObserver,l=new Map,u=[];function c(e){var t=e.rootRef,r=e.rootMargin,c=e.disabled||!a,s=n._((0,o.useState)(!1),2),f=s[0],d=s[1],p=(0,o.useRef)(null),v=(0,o.useCallback)(function(e){p.current=e},[]);return(0,o.useEffect)(function(){if(a){if(!c&&!f){var e,n,o,s,v=p.current;if(v&&v.tagName)return n=(e=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=u.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=l.get(n)))return t;var o=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},u.push(r),l.set(r,t),t}({root:null==t?void 0:t.current,rootMargin:r})).id,o=e.observer,(s=e.elements).set(v,function(e){return e&&d(e)}),o.observe(v),function(){if(s.delete(v),o.unobserve(v),0===s.size){o.disconnect(),l.delete(n);var e=u.findIndex(function(e){return e.root===n.root&&e.margin===n.margin});e>-1&&u.splice(e,1)}}}}else if(!f){var g=(0,i.requestIdleCallback)(function(){return d(!0)});return function(){return(0,i.cancelIdleCallback)(g)}}},[c,r,t,f,p.current]),[v,f,(0,o.useCallback)(function(){d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5471:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(567),o=r(4932),i=r(7702);r(1309);var a=r(4586);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return f}}),r(4210);var l=r(7757),u=r(3735);function c(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function f(e,t){var r,f,d,p=e.src,v=e.sizes,g=e.unoptimized,h=void 0!==g&&g,m=e.priority,y=void 0!==m&&m,b=e.loading,_=e.className,w=e.quality,C=e.width,P=e.height,j=e.fill,S=void 0!==j&&j,E=e.style,O=(e.onLoad,e.onLoadingComplete,e.placeholder),z=void 0===O?"empty":O,R=e.blurDataURL,M=e.fetchPriority,x=e.layout,I=e.objectFit,L=e.objectPosition,A=(e.lazyBoundary,e.lazyRoot,i._(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"])),k=t.imgConf,T=t.showAltText,N=t.blurComplete,F=t.defaultLoader,U=k||u.imageConfigDefault;if("allSizes"in U)W=U;else{var D=a._(U.deviceSizes).concat(a._(U.imageSizes)).sort(function(e,t){return e-t}),B=U.deviceSizes.sort(function(e,t){return e-t});W=o._(n._({},U),{allSizes:D,deviceSizes:B})}var H=A.loader||F;delete A.loader,delete A.srcSet;var q="__next_img_default"in H;if(q){if("custom"===W.loader)throw Error('Image with src "'+p+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{var W,K=H;H=function(e){return e.config,K(i._(e,["config"]))}}if(x){"fill"===x&&(S=!0);var V={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[x];V&&(E=n._({},E,V));var G={responsive:"100vw",fill:"100vw"}[x];G&&!v&&(v=G)}var Y="",J=s(C),$=s(P);if("object"==typeof(r=p)&&(c(r)||void 0!==r.src)){var Q=c(p)?p.default:p;if(!Q.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(Q));if(!Q.height||!Q.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(Q));if(f=Q.blurWidth,d=Q.blurHeight,R=R||Q.blurDataURL,Y=Q.src,!S){if(J||$){if(J&&!$){var X=J/Q.width;$=Math.round(Q.height*X)}else if(!J&&$){var Z=$/Q.height;J=Math.round(Q.width*Z)}}else J=Q.width,$=Q.height}}var ee=!y&&("lazy"===b||void 0===b);(!(p="string"==typeof p?p:Y)||p.startsWith("data:")||p.startsWith("blob:"))&&(h=!0,ee=!1),W.unoptimized&&(h=!0),q&&p.endsWith(".svg")&&!W.dangerouslyAllowSVG&&(h=!0),y&&(M="high");var et=s(w),er=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:L}:{},T?{}:{color:"transparent"},E),en="blur"===z&&R&&!N?{backgroundSize:er.objectFit||"cover",backgroundPosition:er.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,l.getImageBlurSvg)({widthInt:J,heightInt:$,blurWidth:f,blurHeight:d,blurDataURL:R,objectFit:er.objectFit})+'")'}:{},eo=function(e){var t=e.config,r=e.src,n=e.unoptimized,o=e.width,i=e.quality,l=e.sizes,u=e.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var c=function(e,t,r){var n=e.deviceSizes,o=e.allSizes;if(r){for(var i=/(^|\s)(1?\d?\d)vw/g,l=[];u=i.exec(r);u)l.push(parseInt(u[2]));if(l.length){var u,c,s=.01*(c=Math).min.apply(c,a._(l));return{widths:o.filter(function(e){return e>=n[0]*s}),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:a._(new Set([t,2*t].map(function(e){return o.find(function(t){return t>=e})||o[o.length-1]}))),kind:"x"}}(t,o,l),s=c.widths,f=c.kind,d=s.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:s.map(function(e,n){return u({config:t,src:r,quality:i,width:e})+" "+("w"===f?e:n+1)+f}).join(", "),src:u({config:t,src:r,quality:i,width:s[d]})}}({config:W,src:p,unoptimized:h,width:J,quality:et,sizes:v,loader:H});return{props:o._(n._({},A),{loading:ee?"lazy":b,fetchPriority:M,width:J,height:$,decoding:"async",className:_,style:n._({},er,en),sizes:eo.sizes,srcSet:eo.srcSet,src:eo.src}),meta:{unoptimized:h,priority:y,placeholder:z,fill:S}}}},7757:function(e,t){"use strict";function r(e){var t=e.widthInt,r=e.heightInt,n=e.blurWidth,o=e.blurHeight,i=e.blurDataURL,a=e.objectFit,l=n||t,u=o||r,c=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&u?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+l+" "+u+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&o?"1":"20")+"'/%3E"+c+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1309);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},unstable_getImgProps:function(){return c}});var o=r(8754),i=r(5471),a=r(4210),l=r(8872),u=o._(r(7746)),c=function(e){(0,a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");var t=(0,i.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}}).props,r=!0,o=!1,l=void 0;try{for(var c,s=Object.entries(t)[Symbol.iterator]();!(r=(c=s.next()).done);r=!0){var f=n._(c.value,2),d=f[0],p=f[1];void 0===p&&delete t[d]}}catch(e){o=!0,l=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw l}}return{props:t}},s=l.Image},7746:function(e,t){"use strict";function r(e){var t=e.config,r=e.src,n=e.width,o=e.quality;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;var n=r},5675:function(e,t,r){e.exports=r(2555)},1664:function(e,t,r){e.exports=r(5569)}}]);
//# sourceMappingURL=61-bd7d0fdb812c145b.js.map