import{u as f}from"./vue-router-DIzyD7XU.js";import{g as x,c as w}from"./GournalApi-KsM-zadw.js";import{r as y,s as C,p as G,t as d,v as m,w as I}from"./vuetify-D23KgkyU.js";import{d as _,a as L,Q as s,R as p,S as e,V as h,$ as S,F as v,c as t,A as $,u as B}from"./@vue-D0ThA3Gb.js";import{_ as F}from"./GithubSelectDialog.vuevuetypescriptsetuptruelang--1oNmjnr.js";import"./request-BDqhCdGj.js";import"./axios-Cm0UX6qg.js";const z=_({__name:"GournalList",setup(g){const c=f(),o=L([]);let a=0;async function r(){return await x(a)}async function l({done:n}){const u=await r();if(u.length===0){n("empty");return}a++,o.value.push(...u),n("ok")}function b(n){c.push("/edit/"+n.id)}return(n,u)=>(s(),p(y,{height:"600",width:"700",items:o.value,onLoad:l,class:"align-center"},{default:e(()=>[(s(!0),h(v,null,S(o.value,i=>(s(),p(C,{key:i.id},{default:e(({isHovering:V,props:k})=>[t(G,$({title:i.title,subtitle:i.dateTime,onClick:A=>b(i),width:"500",active:"","base-color":"info",color:V?"secondary":void 0},k,{class:"mb-2 pt-3 pb-3 rounded cursor-pointer align-end"}),{prepend:e(()=>[t(d,{color:"info",variant:"text"},{default:e(()=>[t(m,{icon:"mdi-github"})]),_:1})]),append:e(()=>[t(d,{color:"info",variant:"text"},{default:e(()=>[t(m,{icon:"mdi-dots-horizontal"})]),_:1})]),_:2},1040,["title","subtitle","onClick","color"])]),_:2},1024))),128))]),_:1},8,["items"]))}}),j=_({__name:"Page",setup(g){const c=f();function o(a,r){w({repositoryId:a.id,commitSha:r.sha}).then(l=>{c.push("/edit/"+l.id)})}return(a,r)=>(s(),h(v,null,[t(B(I),{color:"info",icon:"",class:"mb-10 pr-10",location:"bottom",app:"",variant:"text"},{default:e(()=>[t(m,{size:"36",icon:"mdi-file-document-edit"}),t(F,{onSelect:o})]),_:1}),t(z)],64))}});export{j as default};
