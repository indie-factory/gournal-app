import{d as L,N as m,Z as F,f as S,p as U,aa as M,ab as Q,g as Z,ac as E,K as G,h as v,Q as H,k as B,u as J,ad as W,a as l,R as X,e as $,ae as Y,af as ee,ag as I,U as ae,o as le,c as te,w as r,b as oe,a3 as x,a0 as ne,V as D,_ as ue}from"./index-f320d07b.js";import{c as re,d as se}from"./MemberApi-fa80c5dd.js";import{o as ie}from"./NumberValidation-958a7be6.js";import{e as de,m as ce,b as ve,u as pe,c as fe,a as me,V as ye}from"./VTextField-bdf6a346.js";import{_ as ge,V as P,a as y,e as be,b as Ve}from"./index-d59e3ac5.js";import{V as Ce}from"./VContainer-01e73695.js";/* empty css              */const he=L({methods:{onlyNumberValidation:ie},data:e=>({emailRules:de(e.t),approveCodeRules:[o=>o&&o.length>=5&&o.length<=5||e.t("$vuetify.approve.rules.approveCode")]}),setup(){const e=m(F.currentRoute.value.query.code??""),o=m(F.currentRoute.value.query.email),g=m(),{t:b}=S(),n=m(!1);return{approveCode:e,applyApproveCode:async()=>{const{valid:V}=await g.value.validate();if(!V)return;const k={email:o.value,approveCode:e.value};n.value=!0,re(k).then(u=>{u.success&&F.replace("/")}).finally(()=>{n.value=!1})},email:o,resendApproveCode:()=>{n.value=!0,se(o.value).then(V=>{V.success&&alert(b("$vuetify.approve.alertResend"))}).finally(()=>{n.value=!1})},t:b,formRefs:g,loading:n}}});const ke=U({autofocus:Boolean,divider:String,focusAll:Boolean,label:{type:String,default:"$vuetify.input.otp"},length:{type:[Number,String],default:6},modelValue:{type:[Number,String],default:void 0},placeholder:String,type:{type:String,default:"number"},...M(),...ce(),...Q(ve({variant:"outlined"}),["baseColor","bgColor","class","color","disabled","error","loading","rounded","style","theme","variant"])},"VOtpInput"),Ae=Z()({name:"VOtpInput",props:ke(),emits:{finish:e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:g,emit:b,slots:n}=o;const{dimensionStyles:h}=E(e),{isFocused:p,focus:V,blur:k}=pe(e),u=G(e,"modelValue","",a=>String(a).split(""),a=>a.join("")),{t:_}=S(),A=v(()=>Number(e.length)),N=v(()=>Array(A.value).fill(0)),c=m(-1),R=m(),f=m([]),w=v(()=>f.value[c.value]);function O(){if(e.type==="number"&&/[^0-9]/g.test(w.value.value)){w.value.value="";return}const a=u.value.slice(),t=w.value.value;a[c.value]=t;let s=null;c.value>u.value.length?s=u.value.length+1:c.value+1!==A.value&&(s="next"),u.value=a,s&&I(R.value,s)}function j(a){const t=u.value.slice(),s=c.value;let i=null;["ArrowLeft","ArrowRight","Backspace","Delete"].includes(a.key)&&(a.preventDefault(),a.key==="ArrowLeft"?i="prev":a.key==="ArrowRight"?i="next":["Backspace","Delete"].includes(a.key)&&(t[c.value]="",u.value=t,c.value>0&&a.key==="Backspace"?i="prev":requestAnimationFrame(()=>{var d;(d=f.value[s])==null||d.select()})),requestAnimationFrame(()=>{i!=null&&I(R.value,i)}))}function q(a,t){var s,i;t.preventDefault(),t.stopPropagation(),u.value=(((s=t==null?void 0:t.clipboardData)==null?void 0:s.getData("Text"))??"").split(""),(i=f.value)==null||i[a].blur()}function T(){u.value=[]}function z(a,t){V(),c.value=t}function K(){k(),c.value=-1}return H({VField:{color:v(()=>e.color),bgColor:v(()=>e.color),baseColor:v(()=>e.baseColor),disabled:v(()=>e.disabled),error:v(()=>e.error),variant:v(()=>e.variant)}},{scoped:!0}),B(u,a=>{a.length===A.value&&b("finish",a.join(""))},{deep:!0}),B(c,a=>{a<0||ae(()=>{var t;(t=f.value[a])==null||t.select()})}),J(()=>{var s;const[a,t]=W(g);return l("div",$({class:["v-otp-input",{"v-otp-input--divided":!!e.divider},e.class],style:[e.style]},a),[l("div",{ref:R,class:"v-otp-input__content",style:[h.value]},[N.value.map((i,d)=>l(X,null,[e.divider&&d!==0&&l("span",{class:"v-otp-input__divider"},[e.divider]),l(fe,{focused:p.value&&e.focusAll||c.value===d,key:d},{...n,default:()=>l("input",{ref:C=>f.value[d]=C,"aria-label":_(e.label,d+1),autofocus:d===0&&e.autofocus,autocomplete:"one-time-code",class:["v-otp-input__field"],inputmode:e.type==="number"?"numeric":"text",min:e.type==="number"?0:void 0,maxlength:"1",placeholder:e.placeholder,type:e.type==="number"?"text":e.type,value:u.value[d],onInput:O,onFocus:C=>z(C,d),onBlur:K,onKeydown:j,onPaste:C=>q(d,C)},null)})])),l("input",$({class:"v-otp-input-input",type:"hidden"},t,{value:u.value.join("")}),null),l(Y,{contained:!0,"content-class":"v-otp-input__loader","model-value":!!e.loading,persistent:!0},{default:()=>{var i;return[((i=n.loader)==null?void 0:i.call(n))??l(ee,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"24",width:"2"},null)]}}),(s=n.default)==null?void 0:s.call(n)])])}),{blur:()=>{var a;(a=f.value)==null||a.some(t=>t.blur())},focus:()=>{var a;(a=f.value)==null||a[0].focus()},reset:T,isFocused:p}}}),Re={class:"d-flex justify-center py-4"};function we(e,o,g,b,n,h){return le(),te(Ce,null,{default:r(()=>[l(ye,{ref:"formRefs",onSubmit:o[3]||(o[3]=ue(()=>{},["prevent"]))},{default:r(()=>[l(P,{class:"h-100vh d-flex justify-center align-center"},{default:r(()=>[l(y,{cols:"12",lg:"4",class:"d-flex align-center"},{default:r(()=>[l(be,{loading:e.loading,rounded:"md",elevation:"10",class:"px-sm-1 px-0 withbg mx-auto","max-width":"500"},{default:r(()=>[l(Ve,{class:"pa-sm-8"},{default:r(()=>[oe("div",Re,[l(P,{class:"d-flex mb-3"},{default:r(()=>[l(y,null,{default:r(()=>[x(ne(e.t("$vuetify.approve.description")),1)]),_:1}),l(y,{cols:"12"},{default:r(()=>[l(me,{variant:"outlined",color:"secondary",modelValue:e.email,"onUpdate:modelValue":o[0]||(o[0]=p=>e.email=p),rules:e.emailRules,type:"email",label:e.t("$vuetify.common.email")},null,8,["modelValue","rules","label"])]),_:1}),l(y,{cols:"12"},{default:r(()=>[l(Ae,{variant:"outlined",modelValue:e.approveCode,"onUpdate:modelValue":o[1]||(o[1]=p=>e.approveCode=p),rules:e.approveCodeRules,"focus-all":"",color:"secondary",onInput:o[2]||(o[2]=p=>e.approveCode=e.onlyNumberValidation(e.approveCode)),length:"5"},null,8,["modelValue","rules"])]),_:1}),l(y,{cols:"12"},{default:r(()=>[l(D,{type:"submit",color:"secondary",size:"large",block:"",flat:"",onClick:e.applyApproveCode},{default:r(()=>[x(" Approve ")]),_:1},8,["onClick"])]),_:1}),l(y,{cols:"12"},{default:r(()=>[l(D,{onClick:e.resendApproveCode,size:"large",block:"",loading:e.loading,flat:"",text:e.t("$vuetify.approve.resendButton")},null,8,["onClick","loading","text"])]),_:1})]),_:1})])]),_:1})]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},512)]),_:1})}const Se=ge(he,[["render",we]]);export{Se as default};
