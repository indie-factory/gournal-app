import{v as _,h as n,x,y as h,A as p,g as r,d as f,f as b}from"./vuetify-D23KgkyU.js";import{d as v,Q as i,V,Z as u,R as g,S as t,O as c,_ as s,X as y,F as C,a as S,N as k,c as e,u as B}from"./@vue-D0ThA3Gb.js";import{g as w}from"./index-Dx2PjJFd.js";import{d as D}from"./dayjs-T8SworZD.js";/* empty css             */import"./@date-io-B1xM1e2q.js";import"./@codemirror-CRBqiWim.js";import"./@lezer-CEkmkKm7.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./vue-router-nylzzL6n.js";import"./axios-Cm0UX6qg.js";import"./copy-to-clipboard-gvHgSpPc.js";import"./toggle-selection-BHUZwh74.js";const N={class:"mb-2"},I={class:"text-subtitle-1 bold text-grey ml-1"},M={class:"text-sm-h6 ml-1"},T=v({__name:"FormText",props:{prependIcon:{default:"",type:String},title:{default:"",type:String},value:{default:"",type:String}},setup(l){return(a,d)=>(i(),V(C,null,[u("div",N,[l.prependIcon?(i(),g(_,{key:0,class:"mb-1",color:"info"},{default:t(()=>[c(s(l.prependIcon),1)]),_:1})):y("",!0),u("span",I,s(l.title),1)]),u("div",M,s(l.value),1)],64))}}),q=v({__name:"Setting",setup(l){const a=S({});k(()=>{w().then(m=>{a.value=m})});function d(){window.open(`https://github.com/${a.value.username}`,"_blank")}return(m,Y)=>{const o=T;return i(),g(b,null,{default:t(()=>[e(r,null,{default:t(()=>[e(n,null,{default:t(()=>[e(x,{class:"pa-3 rounded-lg",variant:"elevated",color:"secondary"},{default:t(()=>[e(h,{class:"mb-3"},{default:t(()=>[e(_,{color:"info",class:"mb-1"},{default:t(()=>[c("mdi-account")]),_:1}),c(" Profile ")]),_:1}),e(p,null,{default:t(()=>[e(r,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{title:"Username",value:a.value.username,"prepend-icon":"mdi-calendar-range"},null,8,["value"])]),_:1}),e(n,null,{default:t(()=>[e(o,{title:"Email",value:a.value.email,"prepend-icon":"mdi-email"},null,8,["value"])]),_:1}),e(n,null,{default:t(()=>[e(o,{title:"Signup Date",value:B(D)(a.value.createdAt).format("YYYY-MM-DD"),"prepend-icon":"mdi-calendar-range"},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(p,null,{default:t(()=>[e(f,{text:"GitHub","prepend-icon":"mdi-github",class:"text-none mr-2",onClick:d,color:"info"})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(n,null,{default:t(()=>[e(f,{text:"Delete Account","prepend-icon":"mdi-trash-can-outline",class:"text-none",color:"warning"})]),_:1})]),_:1})]),_:1})}}});export{q as default};
