import{n as d,s as k}from"./scheduler.C55nVr2J.js";const u=[];function p(e,t=d){let s;const o=new Set;function a(n){if(k(e,n)&&(e=n,s)){const c=!u.length;for(const l of o)l[1](),u.push(l,e);if(c){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function i(n){a(n(e))}function r(n,c=d){const l=[n,c];return o.add(l),o.size===1&&(s=t(a,i)||d),n(e),()=>{o.delete(l),o.size===0&&s&&(s(),s=null)}}return{set:a,update:i,subscribe:r}}const E=globalThis.__sveltekit_de4w1l?.base??"",m=globalThis.__sveltekit_de4w1l?.assets??E,A="1713803583937",S="sveltekit:snapshot",I="sveltekit:scroll",y="sveltekit:states",N="sveltekit:pageurl",U="sveltekit:history",L="sveltekit:navigation",_={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},g=location.origin;function O(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const s=document.getElementsByTagName("base");t=s.length?s[0].href:document.URL}return new URL(e,t)}function Y(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const b={..._,"":_.hover};function v(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function x(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function P(e,t){let s;try{s=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,a=!s||!!o||T(s,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=s?.origin===g&&e.hasAttribute("download");return{url:s,external:a,target:o,download:i}}function V(e){let t=null,s=null,o=null,a=null,i=null,r=null,n=e;for(;n&&n!==document.documentElement;)o===null&&(o=f(n,"preload-code")),a===null&&(a=f(n,"preload-data")),t===null&&(t=f(n,"keepfocus")),s===null&&(s=f(n,"noscroll")),i===null&&(i=f(n,"reload")),r===null&&(r=f(n,"replacestate")),n=v(n);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:b[o??"off"],preload_data:b[a??"off"],keepfocus:c(t),noscroll:c(s),reload:c(i),replace_state:c(r)}}function h(e){const t=p(e);let s=!0;function o(){s=!0,t.update(r=>r)}function a(r){s=!1,t.set(r)}function i(r){let n;return t.subscribe(c=>{(n===void 0||s&&c!==n)&&r(n=c)})}return{notify:o,set:a,subscribe:i}}function R(){const{set:e,subscribe:t}=p(!1);let s;async function o(){clearTimeout(s);try{const a=await fetch(`${m}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const r=(await a.json()).version!==A;return r&&(e(!0),clearTimeout(s)),r}catch{return!1}}return{subscribe:t,check:o}}function T(e,t){return e.origin!==g||!e.pathname.startsWith(t)}function G(e){}const K={url:h({}),page:h({}),navigating:p(null),updated:R()};export{U as H,L as N,N as P,I as S,y as a,S as b,V as c,K as d,E as e,x as f,P as g,_ as h,T as i,G as j,g as o,O as r,Y as s};
