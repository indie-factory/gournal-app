import{d as f,a0 as _,a as x,o as s,c as p,w as e,b as h,A as w,F as g,e as t,D as y,a3 as C}from"./index-DcKouh14.js";import{g as G,c as I}from"./GournalApi-CpLUaPEo.js";import{f as L,g as B,d as F,_ as S}from"./GithubSelectDialog.vue_vue_type_script_setup_true_lang-8dtUtld-.js";import{V as d}from"./VCard-Cxt_JAhb.js";import{o as u}from"./VImg-DKSikDoR.js";import{V as $}from"./VFab-kGE6xv6Y.js";import"./easing-DY7PVvcf.js";import"./VContainer-DYXNfh_1.js";import"./VTextField-D_k9oZ-U.js";import"./axios-Cm0UX6qg.js";const z=f({__name:"GournalList",setup(v){const c=_(),o=x([]);let a=0;async function i(){return await G(a)}async function l({done:r}){const m=await i();if(m.length===0){r("empty");return}a++,o.value.push(...m),r("ok")}function b(r){c.push("/edit/"+r.id)}return(r,m)=>(s(),p(L,{height:"600",width:"700",items:o.value,onLoad:l,class:"align-center"},{default:e(()=>[(s(!0),h(g,null,w(o.value,n=>(s(),p(B,{key:n.id},{default:e(({isHovering:V,props:k})=>[t(F,y({title:n.title,subtitle:n.dateTime,onClick:A=>b(n),width:"500",active:"","base-color":"info",color:V?"secondary":void 0},k,{class:"mb-2 pt-3 pb-3 rounded cursor-pointer align-end"}),{prepend:e(()=>[t(d,{color:"info",variant:"text"},{default:e(()=>[t(u,{icon:"mdi-github"})]),_:1})]),append:e(()=>[t(d,{color:"info",variant:"text"},{default:e(()=>[t(u,{icon:"mdi-dots-horizontal"})]),_:1})]),_:2},1040,["title","subtitle","onClick","color"])]),_:2},1024))),128))]),_:1},8,["items"]))}}),K=f({__name:"Page",setup(v){const c=_();function o(a,i){I({repositoryId:a.id,commitSha:i.sha}).then(l=>{c.push("/edit/"+l.id)})}return(a,i)=>(s(),h(g,null,[t(C($),{color:"info",icon:"",class:"mb-10 pr-10",location:"bottom",app:"",variant:"text"},{default:e(()=>[t(u,{size:"36",icon:"mdi-file-document-edit"}),t(S,{onSelect:o})]),_:1}),t(z)],64))}});export{K as default};
