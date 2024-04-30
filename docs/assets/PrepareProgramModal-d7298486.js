import{W as C,j as T,H as P,I as R,J as q,K as V}from"./ProgramStatusCombobox-b7c7027e.js";import{h as $,g as M,a as w,V as I}from"./VTextField-bdf6a346.js";import{d as k,N as t,f as B,r as W,o as c,c as v,w as l,a,V as y,a2 as N,a3 as f,a0 as d,W as D,b as h,_ as U}from"./index-f320d07b.js";import{_ as F,e as G,b as K,V as L,a as i}from"./index-d59e3ac5.js";import{b as j,c as S}from"./VToolbar-d997f552.js";import{b as H,h as J,c as O}from"./VTable-effef9c8.js";const z=k({name:"PrepareProgramModal",data:e=>({nameRules:$(e.t),descriptionRules:M(e.t),WeightType:C}),components:{ProgramModal:T},props:{dialog:{type:Boolean,default:!1,required:!0},client:{type:Object,default:null,required:!0}},emits:["close"],setup(e,o){const u=t(P(e.client.id)),n=t(!1),s=t(),m=t(),{t:p}=B(),r=t(!1);return{request:u,saveProgram:async()=>{const{valid:b}=await m.value.validate();b&&(r.value=!0,R(u.value).then(g=>{g.success&&(s.value=g.result.id,s.value&&s.value>0&&(n.value=!0))}).finally(()=>{r.value=!1}))},closeModal:()=>{n.value=!1,o.emit("close")},programDialog:n,formRefs:m,programId:s,t:p,loading:r}}}),A={class:"text-body-1 text-muted"};function E(e,o,u,n,s,m){const p=W("program-modal");return c(),v(O,{modelValue:e.dialog,"onUpdate:modelValue":o[5]||(o[5]=r=>e.dialog=r),persistent:"",scrollable:"",width:"800"},{default:l(()=>[a(I,{ref:"formRefs",onSubmit:o[4]||(o[4]=U(()=>{},["prevent"]))},{default:l(()=>[a(G,{loading:e.loading,elevation:"10"},{default:l(()=>[a(j,{color:"secondary",density:"compact"},{default:l(()=>[a(y,{loading:e.loading,icon:"",onClick:o[0]||(o[0]=r=>e.$emit("close"))},{default:l(()=>[a(N,null,{default:l(()=>[f("mdi-close")]),_:1})]),_:1},8,["loading"]),a(S,null,{default:l(()=>[f(d(e.t("$vuetify.prepareProgramModal.title")),1)]),_:1}),a(H,null,{default:l(()=>[a(y,{loading:e.loading,type:"submit",variant:"text",onClick:e.saveProgram},{default:l(()=>[f(d(e.t("$vuetify.prepareProgramModal.prepare")),1)]),_:1},8,["loading","onClick"])]),_:1})]),_:1}),e.programDialog?(c(),v(p,{key:0,dialog:e.programDialog,"program-id":e.programId,onClose:e.closeModal},null,8,["dialog","program-id","onClose"])):D("",!0),a(K,{class:"pr-10 pl-10 pb-10 pt-7"},{default:l(()=>[a(L,{class:"d-flex pt-3"},{default:l(()=>[a(i,{cols:"12"},{default:l(()=>[h("h6",A,d(e.client.nickName)+" ("+d(e.client.email)+") ",1)]),_:1}),a(i,{cols:"12"},{default:l(()=>[a(q,{inline:"",modelValue:e.request.weightType,"onUpdate:modelValue":o[1]||(o[1]=r=>e.request.weightType=r)},{default:l(()=>[a(V,{label:e.WeightType.KG,value:e.WeightType.KG,class:"pr-8",color:"secondary"},null,8,["label","value"]),a(V,{label:e.WeightType.LB,value:e.WeightType.LB,color:"secondary"},null,8,["label","value"])]),_:1},8,["modelValue"])]),_:1}),a(i,{cols:"12"},{default:l(()=>[a(w,{variant:"outlined",type:"text",label:e.t("$vuetify.common.name"),rules:e.nameRules,modelValue:e.request.name,"onUpdate:modelValue":o[2]||(o[2]=r=>e.request.name=r),color:"secondary"},null,8,["label","rules","modelValue"])]),_:1}),a(i,{cols:"12"},{default:l(()=>[a(J,{variant:"outlined",label:e.t("$vuetify.common.description"),modelValue:e.request.description,"onUpdate:modelValue":o[3]||(o[3]=r=>e.request.description=r),rules:e.descriptionRules,color:"secondary"},null,8,["label","modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1},8,["loading"])]),_:1},512)]),_:1},8,["modelValue"])}const le=F(z,[["render",E]]);export{le as P};
