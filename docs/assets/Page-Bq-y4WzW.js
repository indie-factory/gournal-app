import{u as f}from"./vue-router-CsfSU5u_.js";import{g as x,c as y}from"./GournalApi-KsM-zadw.js";import{r as w,s as C,p as G,t as d,k as m,v as I}from"./vuetify-BAfO4iES.js";import{d as _,a as L,Q as s,R as p,S as e,V as h,Y as S,F as v,c as t,A as B,u as F}from"./@vue-D2tTWFBi.js";import{_ as $}from"./GithubSelectDialog.vuevuetypescriptsetuptruelang-DYbD10_c.js";import"./request-BDqhCdGj.js";import"./axios-Cm0UX6qg.js";const z=_({__name:"GournalList",setup(g){const c=f(),o=L([]);let a=0;async function r(){return await x(a)}async function l({done:n}){const u=await r();if(u.length===0){n("empty");return}a++,o.value.push(...u),n("ok")}function b(n){c.push("/edit/"+n.id)}return(n,u)=>(s(),p(w,{height:"600",width:"700",items:o.value,onLoad:l,class:"align-center"},{default:e(()=>[(s(!0),h(v,null,S(o.value,i=>(s(),p(C,{key:i.id},{default:e(({isHovering:k,props:V})=>[t(G,B({title:i.title,subtitle:i.dateTime,onClick:A=>b(i),width:"500",active:"","base-color":"info",color:k?"secondary":void 0},V,{class:"mb-2 pt-3 pb-3 rounded cursor-pointer align-end"}),{prepend:e(()=>[t(d,{color:"info",variant:"text"},{default:e(()=>[t(m,{icon:"mdi-github"})]),_:1})]),append:e(()=>[t(d,{color:"info",variant:"text"},{default:e(()=>[t(m,{icon:"mdi-dots-horizontal"})]),_:1})]),_:2},1040,["title","subtitle","onClick","color"])]),_:2},1024))),128))]),_:1},8,["items"]))}}),Y=_({__name:"Page",setup(g){const c=f();function o(a,r){y({repositoryId:a.id,commitSha:r.sha}).then(l=>{c.push("/edit/"+l.id)})}return(a,r)=>(s(),h(v,null,[t(F(I),{color:"info",icon:"",class:"mb-10 pr-10",location:"bottom",app:"",variant:"text"},{default:e(()=>[t(m,{size:"36",icon:"mdi-file-document-edit"}),t($,{onSelect:o})]),_:1}),t(z)],64))}});export{Y as default};
