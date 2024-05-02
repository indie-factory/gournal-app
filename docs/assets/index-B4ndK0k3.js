function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Landing-BO5Z4znP.js","assets/@vue-D0ThA3Gb.js","assets/jsonp-KpewqY_V.js","assets/copy-to-clipboard-gvHgSpPc.js","assets/toggle-selection-BHUZwh74.js","assets/debug-C-siL6uO.js","assets/ms-nT7xfLs5.js","assets/vuetify-D23KgkyU.js","assets/vuetify-CA1uVyXs.css","assets/plugin-vueexport-helper-DlAUqK2U.js","assets/404-DmYBuLJo.js","assets/PageLayout-Jlz_scWZ.js","assets/GithubSelectDialog.vuevuetypescriptsetuptruelang--1oNmjnr.js","assets/request-BDqhCdGj.js","assets/axios-Cm0UX6qg.js","assets/GournalApi-KsM-zadw.js","assets/vue-router-DNPgXL5n.js","assets/Page-CdDabi3k.js","assets/Setting-o2Vq4jV5.js","assets/dayjs-T8SworZD.js","assets/EmptyLayout-CTKfGa41.js","assets/OAuth2-C8oalEtX.js","assets/Editor-vqvV3_o4.js","assets/md-editor-v3-DUKtIKbl.js","assets/@vavt-B4fzJ49s.js","assets/@codemirror-BaDYR2vO.js","assets/@lezer-9ZEEcu4s.js","assets/style-mod-Bc2inJdb.js","assets/w3c-keyname-Vcq4gwWv.js","assets/medium-zoom-CHfgT04g.js","assets/markdown-it-DI8MEbma.js","assets/mdurl-k9Sl0PQj.js","assets/uc.micro-kMc2yuuw.js","assets/entities-C20TfXL6.js","assets/linkify-it-DmNjr4Kv.js","assets/punycode.js-Dj65hjkv.js","assets/markdown-it-image-figures-BD49Kf-b.js","assets/markdown-it-task-lists-DKHOi6r0.js","assets/markdown-it-xss-CzKvBubu.js","assets/xss-DnjGkJ2-.js","assets/cssfilter-BjxKUPhv.js","assets/lru-cache-DBLXwll_.js","assets/md-editor-v3-EOWkC2Js.css","assets/Editor-aome4vPR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
/* empty css             */import{D as _}from"./@date-io-B1xM1e2q.js";import{c as u,V as d,a as l}from"./vuetify-D23KgkyU.js";import{_ as r}from"./@codemirror-BaDYR2vO.js";import{c as f,a as h}from"./vue-router-DNPgXL5n.js";import{d as g,P as D,Q as E,R as y,S as p,c,U as A}from"./@vue-D0ThA3Gb.js";import"./dayjs-T8SworZD.js";import"./copy-to-clipboard-gvHgSpPc.js";import"./toggle-selection-BHUZwh74.js";import"./@lezer-9ZEEcu4s.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const v=u({date:{adapter:_},theme:{defaultTheme:"dark",themes:{dark:{colors:{background:"#344955",primary:"#344955",secondary:"#50727B",info:"#D6DAC8",warning:"#EFBC9B",landing:"#D6DAC8"}},light:{colors:{background:"#D6DAC8",primary:"#D6DAC8",secondary:"#FBF3D5",info:"#344955",warning:"#EFBC9B",landing:"#D6DAC8"}}}}});var P={};const O=f({history:h(P.BASE_URL),routes:[{path:"/",component:()=>r(()=>import("./Landing-BO5Z4znP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))},{path:"/:pathMatch(.*)*",component:()=>r(()=>import("./404-DmYBuLJo.js"),__vite__mapDeps([10,9,1]))},{path:"/",component:()=>r(()=>import("./PageLayout-Jlz_scWZ.js"),__vite__mapDeps([11,12,13,14,7,1,8,15,16])),children:[{name:"Pages",path:"/pages",component:()=>r(()=>import("./Page-CdDabi3k.js"),__vite__mapDeps([17,16,1,15,13,14,7,8,12]))},{name:"Setting",path:"/settings",component:()=>r(()=>import("./Setting-o2Vq4jV5.js"),__vite__mapDeps([18,7,1,8,13,14,19,3,4]))}]},{path:"/",component:()=>r(()=>import("./EmptyLayout-CTKfGa41.js"),__vite__mapDeps([20,9,1])),children:[{name:"OAuth2",path:"/oauth2/redirect",component:()=>r(()=>import("./OAuth2-C8oalEtX.js"),__vite__mapDeps([21,16,1,14]))},{name:"Edit",path:"/edit/:id",component:()=>r(()=>import("./Editor-vqvV3_o4.js"),__vite__mapDeps([22,23,24,1,25,26,27,28,29,3,4,30,31,32,33,34,35,36,37,38,39,40,41,42,16,15,13,14,7,8,9,43]))}]}]});function L(n){n.use(v).use(O)}const V=g({__name:"App",setup(n){return(o,s)=>{const i=D("router-view");return E(),y(l,null,{default:p(()=>[c(d,null,{default:p(()=>[c(i)]),_:1})]),_:1})}}}),m=A(V);L(m);m.mount("#app");
