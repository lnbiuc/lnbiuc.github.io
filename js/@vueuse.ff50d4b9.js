import{r as b,w as g,g as L,b as R,u as W,d as j,e as B,n as $}from"./@vue.c9e32643.js";var S;const T=typeof window!="undefined",ne=e=>typeof e=="boolean",oe=e=>typeof e=="number",A=e=>typeof e=="string",y=()=>{};T&&((S=window==null?void 0:window.navigator)==null?void 0:S.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function v(e){return typeof e=="function"?e():W(e)}function Q(e,o){function n(...t){e(()=>o.apply(this,t),{fn:o,thisArg:this,args:t})}return n}function z(e,o={}){let n,t;return s=>{const u=v(e),i=v(o.maxWait);if(n&&clearTimeout(n),u<=0||i!==void 0&&i<=0)return t&&(clearTimeout(t),t=null),s();i&&!t&&(t=setTimeout(()=>{n&&clearTimeout(n),t=null,s()},i)),n=setTimeout(()=>{t&&clearTimeout(t),t=null,s()},u)}}function M(e,o=!0,n=!0){let t=0,r,s=!0;const u=()=>{r&&(clearTimeout(r),r=void 0)};return a=>{const c=v(e),p=Date.now()-t;if(u(),c<=0)return t=Date.now(),a();p>c&&(n||!s)?(t=Date.now(),a()):o&&(r=setTimeout(()=>{t=Date.now(),s=!0,u(),a()},c)),!n&&!r&&(r=setTimeout(()=>s=!0,c)),s=!1}}function U(e){return e}function P(e){return L()?(R(e),!0):!1}function G(e,o=200,n={}){return Q(z(o,n),e)}function re(e,o=200,n={}){if(o<=0)return e;const t=b(e.value),r=G(()=>{t.value=e.value},o,n);return g(e,()=>r()),t}function se(e,o=200,n=!1,t=!0){return Q(M(o,n,t),e)}function H(e,o=!0){j()?B(e):o?e():$(e)}function ue(e,o,n={}){const{immediate:t=!0}=n,r=b(!1);let s=null;function u(){s&&(clearTimeout(s),s=null)}function i(){r.value=!1,u()}function a(...c){u(),r.value=!0,s=setTimeout(()=>{r.value=!1,s=null,e(...c)},v(o))}return t&&(r.value=!0,T&&a()),P(i),{isPending:r,start:a,stop:i}}function d(e){var o;const n=v(e);return(o=n==null?void 0:n.$el)!=null?o:n}const E=T?window:void 0;function O(...e){let o,n,t,r;if(A(e[0])?([n,t,r]=e,o=E):[o,n,t,r]=e,!o)return y;let s=y;const u=g(()=>d(o),a=>{s(),a&&(a.addEventListener(n,t,r),s=()=>{a.removeEventListener(n,t,r),s=y})},{immediate:!0,flush:"post"}),i=()=>{u(),s()};return P(i),i}function ie(e,o,n={}){const{window:t=E,ignore:r,capture:s=!0,detectIframe:u=!1}=n;if(!t)return;const i=b(!0);let a;const c=l=>{t.clearTimeout(a);const f=d(e),m=l.composedPath();!f||f===l.target||m.includes(f)||!i.value||r&&r.length>0&&r.some(D=>{const _=d(D);return _&&(l.target===_||m.includes(_))})||o(l)},p=[O(t,"click",c,{passive:!0,capture:s}),O(t,"pointerdown",l=>{const f=d(e);i.value=!!f&&!l.composedPath().includes(f)},{passive:!0}),O(t,"pointerup",l=>{if(l.button===0){const f=l.composedPath();l.composedPath=()=>f,a=t.setTimeout(()=>c(l),50)}},{passive:!0}),u&&O(t,"blur",l=>{var f;const m=d(e);((f=document.activeElement)==null?void 0:f.tagName)==="IFRAME"&&!(m!=null&&m.contains(document.activeElement))&&o(l)})].filter(Boolean);return()=>p.forEach(l=>l())}function k(e,o=!1){const n=b(),t=()=>n.value=Boolean(e());return t(),H(t,o),n}const h=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},I="__vueuse_ssr_handlers__";h[I]=h[I]||{};h[I];var x=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,q=(e,o)=>{var n={};for(var t in e)K.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&x)for(var t of x(e))o.indexOf(t)<0&&V.call(e,t)&&(n[t]=e[t]);return n};function ae(e,o,n={}){const t=n,{window:r=E}=t,s=q(t,["window"]);let u;const i=k(()=>r&&"ResizeObserver"in r),a=()=>{u&&(u.disconnect(),u=void 0)},c=g(()=>d(e),w=>{a(),i.value&&r&&w&&(u=new ResizeObserver(o),u.observe(w,s))},{immediate:!0,flush:"post"}),p=()=>{a(),c()};return P(p),{isSupported:i,stop:p}}var C;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(C||(C={}));var J=Object.defineProperty,F=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,N=(e,o,n)=>o in e?J(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,Z=(e,o)=>{for(var n in o||(o={}))X.call(o,n)&&N(e,n,o[n]);if(F)for(var n of F(o))Y.call(o,n)&&N(e,n,o[n]);return e};const ee={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Z({linear:U},ee);export{T as a,ne as b,O as c,d,se as e,ue as f,oe as i,ie as o,re as r,P as t,ae as u};
