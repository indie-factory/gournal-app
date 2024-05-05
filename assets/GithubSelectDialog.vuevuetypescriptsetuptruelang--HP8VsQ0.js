import{i as G}from"./index-Dx2PjJFd.js";import{C as N,x as T,d as V,y as z,z as E,f as H,g as J,r as w,A as O,B as Q,s as x,p as $,t as R,v as B}from"./vuetify-D23KgkyU.js";import{d as Z,a as C,Q as l,R as c,S as e,J as K,c as t,Z as M,V as f,$ as P,F as D,A as L}from"./@vue-D0ThA3Gb.js";const U=(u,o)=>{const r=o?`&keyword=${o}`:"";return G.get(`/github/repositories?page=${u}${r}`)},W=(u,o,r)=>{const a=r?`&keyword=${r}`:"";return G.get(`/github/repositories/${u}/commits?page=${o}${a}`)},X={class:"text-h5 text-medium-emphasis ps-2"},Y={key:0},ee={key:1},ie=Z({__name:"GithubSelectDialog",emits:["select"],setup(u,{emit:o}){const r=o,a=C(null),d=C([]),m=C([]);let v=0,g=0,h=!1,_=!1;async function I(){return await U(v)}async function S(){return await W(a.value.name,g)}async function j({done:s}){if(h){s("empty");return}const n=await I();if(h=n.last,n.items.length===0){s("empty");return}v++,d.value.push(...n.items),s("ok")}async function q({done:s}){if(_){s("empty");return}const n=await S();if(_=n.last,n.items.length===0){s("empty");return}g++,m.value.push(...n.items),s("ok")}function A(s){r("select",a.value,s),p()}function p(){a.value=null,d.value=[],m.value=[],v=0,g=0,h=!1,_=!1}return(s,n)=>(l(),c(Q,{activator:"parent","max-width":"500","max-height":"500"},{default:e(({isActive:y})=>[K((l(),c(T,{rounded:"lg",color:"primary"},{default:e(()=>[t(z,{class:"d-flex justify-space-between align-center"},{default:e(()=>[t(V,{icon:a.value!=null?"mdi-arrow-left":"",disabled:a.value==null,variant:"text",onClick:p},null,8,["icon","disabled"]),M("div",X,[a.value==null?(l(),f("span",Y,"Repositories")):(l(),f("span",ee,"Commits"))]),t(V,{icon:"mdi-close",variant:"text",onClick:i=>{y.value=!1,p()}},null,8,["onClick"])]),_:2},1024),t(E,{class:"mb-4"}),t(O,null,{default:e(()=>[t(H,{class:"d-flex align-center justify-center"},{default:e(()=>[t(J,null,{default:e(()=>[a.value==null?(l(),c(w,{key:0,height:"350",items:d.value,onLoad:j,class:"align-center w-100"},{default:e(()=>[(l(!0),f(D,null,P(d.value,i=>(l(),c(x,{key:i.id},{default:e(({isHovering:b,props:k})=>[t($,L({title:i.name,subtitle:i.description,onClick:F=>{a.value=i},active:"","base-color":"info",color:b?"secondary":void 0},k,{class:"mb-2 pt-3 pb-3 rounded cursor-pointer align-end w-100"}),{prepend:e(()=>[t(R,{color:"info",variant:"text"},{default:e(()=>[t(B,{icon:"mdi-github"})]),_:1})]),_:2},1040,["title","subtitle","onClick","color"])]),_:2},1024))),128))]),_:1},8,["items"])):(l(),c(w,{key:1,height:"350",items:m.value,onLoad:q,class:"align-center w-100"},{default:e(()=>[(l(!0),f(D,null,P(m.value,i=>(l(),c(x,{key:i.sha},{default:e(({isHovering:b,props:k})=>[t($,L({title:i.message,subtitle:i.author,onClick:F=>{A(i),y.value=!1},active:"","base-color":"info",color:b?"secondary":void 0},k,{class:"mb-2 pt-3 pb-3 rounded cursor-pointer align-end w-100"}),{prepend:e(()=>[t(R,{color:"info",variant:"text"},{default:e(()=>[t(B,{icon:"mdi-github"})]),_:1})]),_:2},1040,["title","subtitle","onClick","color"])]),_:2},1024))),128))]),_:2},1032,["items"]))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[N,{handler:p()}]])]),_:1}))}});export{ie as _};
