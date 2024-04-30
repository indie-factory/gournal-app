import{d as h,M as w,N as r,X as N,f as E,a7 as R,Z as b,a8 as B,r as v,o as g,$ as S,a as l,w as a,_ as q,c as A,W as L,V,a3 as M,a0 as C}from"./index-f320d07b.js";import{e as P,u as U,w as I}from"./MemberApi-fa80c5dd.js";import{n as z,V as F,a as T}from"./VTextField-bdf6a346.js";import{L as j}from"./Logo2-1754ce9b.js";import{_ as D,V as c,a as n,e as H,b as O}from"./index-d59e3ac5.js";import{V as k}from"./VCheckbox-70418c38.js";import{V as W}from"./VContainer-01e73695.js";/* empty css              */import"./VCheckboxBtn-a402a366.js";const X=h({name:"Profile",components:{Logo2:j},data:e=>({MemberType:w,nicknameRules:z(e.t)}),setup(){const e=r(N()),o=r(P(e.value)),u=r(e.value.types),m=r(""),f=r(),{t:i}=E(),t=r(!1);return{formRefs:f,request:o,update:async()=>{const{valid:p}=await f.value.validate();if(p){if(u.value.length===0){m.value=i("$vuetify.profile.rules.memberTypeErrorMessage");return}t.value=!0,o.value.types=u.value,U(o.value).then(d=>{if(d.success){const $=d.result;R($),b.replace("/")}}).finally(()=>{t.value=!1})}},deleteAccount:()=>{const p=confirm(i("$vuetify.profile.deleteMessage"));t.value=!0,p&&I().then(d=>{d.success&&(B(),b.replace("/"))}).finally(()=>{t.value=!1})},selectedMemberTypes:u,onSelectMemberType:()=>{u.value.length>0?m.value="":m.value=i("$vuetify.profile.rules.memberTypeErrorMessage")},memberTypeErrorMessage:m,member:e,t:i,loading:t}}}),Z={class:"authentication"};function G(e,o,u,m,f,i){const t=v("logo2"),y=v("error-message");return g(),S("div",Z,[l(W,{fluid:"",class:"pa-3"},{default:a(()=>[l(c,{class:"h-100vh d-flex justify-center align-center"},{default:a(()=>[l(n,{cols:"12",lg:"4",xl:"3",class:"d-flex align-center"},{default:a(()=>[l(H,{loading:e.loading,rounded:"md",elevation:"10",class:"px-sm-1 px-0 withbg mx-auto","max-width":"500"},{default:a(()=>[l(O,{class:"pa-sm-8"},{default:a(()=>[l(t,{class:"text-body-1 text-muted text-center mb-3"}),l(F,{ref:"formRefs",onSubmit:o[4]||(o[4]=q(()=>{},["prevent"]))},{default:a(()=>[l(c,{class:"d-flex mb-3"},{default:a(()=>[l(n,{cols:"12"},{default:a(()=>[l(T,{variant:"outlined",type:"email",color:"secondary",class:"pt-10",label:e.t("$vuetify.common.email"),readonly:"",modelValue:e.member.email,"onUpdate:modelValue":o[0]||(o[0]=s=>e.member.email=s)},null,8,["label","modelValue"])]),_:1}),l(n,{cols:"12"},{default:a(()=>[l(T,{variant:"outlined",color:"secondary",label:e.t("$vuetify.profile.nickName"),rules:e.nicknameRules,modelValue:e.request.nickName,"onUpdate:modelValue":o[1]||(o[1]=s=>e.request.nickName=s)},null,8,["label","rules","modelValue"])]),_:1}),l(n,{cols:"12"},{default:a(()=>[l(c,null,{default:a(()=>[l(n,{cols:"5"},{default:a(()=>[l(k,{label:e.t("$vuetify.profile.coach"),modelValue:e.selectedMemberTypes,"onUpdate:modelValue":o[2]||(o[2]=s=>e.selectedMemberTypes=s),value:e.MemberType.COACH,onChange:e.onSelectMemberType,color:"secondary"},null,8,["label","modelValue","value","onChange"])]),_:1}),l(n,{cols:"5"},{default:a(()=>[l(k,{label:e.t("$vuetify.profile.client"),modelValue:e.selectedMemberTypes,"onUpdate:modelValue":o[3]||(o[3]=s=>e.selectedMemberTypes=s),value:e.MemberType.CLIENT,onChange:e.onSelectMemberType,color:"secondary"},null,8,["label","modelValue","value","onChange"])]),_:1})]),_:1}),e.memberTypeErrorMessage?(g(),A(y,{key:0,class:"pl-3 pb-3","error-message":e.memberTypeErrorMessage},null,8,["error-message"])):L("",!0)]),_:1}),l(V,{loading:e.loading,type:"submit",color:"secondary",size:"large",onClick:e.update,block:"",flat:""},{default:a(()=>[M(C(e.t("$vuetify.profile.updateButton")),1)]),_:1},8,["loading","onClick"])]),_:1})]),_:1},512),l(V,{loading:e.loading,color:"secondary",size:"large",onClick:e.deleteAccount,block:"",flat:""},{default:a(()=>[M(C(e.t("$vuetify.profile.deleteButton")),1)]),_:1},8,["loading","onClick"])]),_:1})]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})])}const se=D(X,[["render",G]]);export{se as default};
