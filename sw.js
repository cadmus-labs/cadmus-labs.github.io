if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Z3rNnjekbZHPd0H1zBJB_/_buildManifest.js",revision:"38a0f428515565be71e733106e43c86a"},{url:"/_next/static/Z3rNnjekbZHPd0H1zBJB_/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/232-69616ac0d63ed2f3.js",revision:"69616ac0d63ed2f3"},{url:"/_next/static/chunks/232-69616ac0d63ed2f3.js.map",revision:"9ca548cfd44f729a67988a75bac73a19"},{url:"/_next/static/chunks/532-81ceb4e7187a1c7c.js",revision:"81ceb4e7187a1c7c"},{url:"/_next/static/chunks/532-81ceb4e7187a1c7c.js.map",revision:"92145cf1db958052240975f5567e93a9"},{url:"/_next/static/chunks/886-5cd87670fff2541d.js",revision:"5cd87670fff2541d"},{url:"/_next/static/chunks/886-5cd87670fff2541d.js.map",revision:"b39a1eea83e65b3db45f7877ba8f75f6"},{url:"/_next/static/chunks/framework-0c1eb49b79cb9a7a.js",revision:"0c1eb49b79cb9a7a"},{url:"/_next/static/chunks/framework-0c1eb49b79cb9a7a.js.map",revision:"a3baab24dbabdd5f826dc2682437d3d1"},{url:"/_next/static/chunks/main-00da5eeacb4753a7.js",revision:"00da5eeacb4753a7"},{url:"/_next/static/chunks/main-00da5eeacb4753a7.js.map",revision:"4373fd8543703b6eeb25764d13b8794c"},{url:"/_next/static/chunks/pages/404-ae0a30d65763869e.js",revision:"ae0a30d65763869e"},{url:"/_next/static/chunks/pages/404-ae0a30d65763869e.js.map",revision:"3fb0a7ee0e4ab76632cb134353c15681"},{url:"/_next/static/chunks/pages/_app-efa23038091a2210.js",revision:"efa23038091a2210"},{url:"/_next/static/chunks/pages/_app-efa23038091a2210.js.map",revision:"8656c5745acf696d6c991959734dc88f"},{url:"/_next/static/chunks/pages/_error-80427d174effb2ef.js",revision:"80427d174effb2ef"},{url:"/_next/static/chunks/pages/_error-80427d174effb2ef.js.map",revision:"5330c0d3c9648cc1193bb86eb099ef1d"},{url:"/_next/static/chunks/pages/index-609f2972e64c09b5.js",revision:"609f2972e64c09b5"},{url:"/_next/static/chunks/pages/index-609f2972e64c09b5.js.map",revision:"16d00aa508f9638b3abd0ff6211e6a04"},{url:"/_next/static/chunks/pages/solutions-47780b42554fca75.js",revision:"47780b42554fca75"},{url:"/_next/static/chunks/pages/solutions-47780b42554fca75.js.map",revision:"ab3abf304360b1b4cb15b74943359033"},{url:"/_next/static/chunks/pages/solutions/website-oracle-4325dd2288d887bb.js",revision:"4325dd2288d887bb"},{url:"/_next/static/chunks/pages/solutions/website-oracle-4325dd2288d887bb.js.map",revision:"7da661cd1652b1c047bf380d507040cb"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-6f60cb26ba168dc7.js",revision:"6f60cb26ba168dc7"},{url:"/_next/static/chunks/webpack-6f60cb26ba168dc7.js.map",revision:"027d573c252f204c66bac6f6a68002fe"},{url:"/_next/static/css/a14993490a674a88.css",revision:"a14993490a674a88"},{url:"/_next/static/css/a14993490a674a88.css.map",revision:"c1d9408442a742c44aedcbc9b8316fb7"},{url:"/_next/static/media/1c57ca6f5208a29b-s.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/3dbd163d3bb09d47-s.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/5647e4c23315a2d2-s.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/7be645d133f3ee22-s.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b-s.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/934c4b7cb736f2a3-s.p.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/cff529cd86cc0276-s.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"},{url:"/android-chrome-192x192.png",revision:"a98e37716bb48a5a0d2ea41c633f1f01"},{url:"/android-chrome-512x512.png",revision:"ba962f3392cb2599ecf7811f9e0cfaf0"},{url:"/apple-touch-icon.png",revision:"54b975cd4cd0726b41727993caee294b"},{url:"/assets/analyze-photo.svg",revision:"70cf32a785e2c6e8fc0e1131f72fb471"},{url:"/assets/empower-with-solutions.svg",revision:"256acd316714854463940411c2c16dc0"},{url:"/assets/logo.png",revision:"bdd79e200318a71b6dda1f66298b3654"},{url:"/assets/website-oracle-logo.jpg",revision:"0c4f03463f2bdf4a370f1c779c093897"},{url:"/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/favicon-16x16.png",revision:"288828d04c1384d6da57b0debcbc7cd9"},{url:"/favicon-32x32.png",revision:"a28f81ad6a011c35b32b186b8ad28dfe"},{url:"/favicon.ico",revision:"4a75c3608ac6b9b791deeba230cbd569"},{url:"/icon-maskable-x512.png",revision:"a79d1fa321df10d2fa0faba541e63d6b"},{url:"/manifest.json",revision:"b9aa277fcfc34c31db6c7a7ea3469b8c"},{url:"/mstile-150x150.png",revision:"e61b5e203c3d152e83256f04009bb9ea"},{url:"/robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"/safari-pinned-tab.svg",revision:"e9b54d4580439bdd9e46c2bc92601e33"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
//# sourceMappingURL=sw.js.map
