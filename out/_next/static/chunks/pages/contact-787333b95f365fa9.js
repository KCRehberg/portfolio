(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{6405:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return s(1480)}])},6103:function(e,t,s){"use strict";var a=s(5893);let n=()=>(0,a.jsx)("div",{className:"w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10",children:(0,a.jsx)("img",{src:"https://kcrehberg.dev/circles.png",width:260,height:200,alt:"circles",className:"w-full h-full"})});t.Z=n},1480:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return _}});var a=s(5893),n=s(7294),i=s(3750),r=s(2023),l=s(6356),o=s(2962),c=s(6103);let d=()=>(0,a.jsx)(r.E.div,{variants:(0,l.J)("down",.4),initial:"hidden",animate:"show",exit:"hidden",className:"absolute top-12 left-2/4 !-translate-x-2/4 flex justify-center mt-2",children:(0,a.jsxs)("div",{className:"flex items-center w-full px-6 py-4 text-green-700 bg-green-300 rounded",children:[(0,a.jsx)("span",{children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 ",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})})}),(0,a.jsx)("p",{className:"ml-2 text-black text-medium whitespace-nowrap",children:"Success! I'll get to your message as soon as possible!"})]})}),u={_origin:"https://api.emailjs.com"},p=(e,t="https://api.emailjs.com")=>{u._userID=e,u._origin=t},m=(e,t,s)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class h{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}let x=(e,t,s={})=>new Promise((a,n)=>{let i=new XMLHttpRequest;i.addEventListener("load",({target:e})=>{let t=new h(e);200===t.status||"OK"===t.text?a(t):n(t)}),i.addEventListener("error",({target:e})=>{n(new h(e))}),i.open("POST",u._origin+e,!0),Object.keys(s).forEach(e=>{i.setRequestHeader(e,s[e])}),i.send(t)}),f=(e,t,s,a)=>{let n=a||u._userID;return m(n,e,t),x("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:n,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"})},w=e=>{let t;if(!(t="string"==typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},v=(e,t,s,a)=>{let n=a||u._userID,i=w(s);m(n,e,t);let r=new FormData(i);return r.append("lib_version","3.11.0"),r.append("service_id",e),r.append("template_id",t),r.append("user_id",n),x("/api/v1.0/email/send-form",r)};var g={init:p,send:f,sendForm:v};let j={to_name:"Kevin",from_name:"",subject:"",message:"",reply_to:""},y=()=>{let[e,t]=(0,n.useState)(!1),[s,u]=(0,n.useState)(j),p=e=>{e.preventDefault(),g.send("service_0dikgne","template_bcauu4l",s,"72p0_8CiQnf2ipNnD"),u(j),t(!0),setTimeout(()=>{t(!1)},1e4)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.PB,{title:"KCRehberg | Contact",description:"Let's connect to discuss how I could help solve the techincal problems and challenges you or your company are facing."}),(0,a.jsxs)("div",{className:"h-full bg-primary/30",children:[(0,a.jsx)(c.Z,{}),(0,a.jsx)("div",{className:"container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full",children:(0,a.jsxs)("div",{className:"flex flex-col w-full max-w-[700px]",children:[(0,a.jsxs)(r.E.h2,{variants:(0,l.J)("up",.2),initial:"hidden",animate:"show",exit:"hidden",className:"h2 text-center mb-12",onSubmit:p,children:["Let's ",(0,a.jsx)("span",{className:"text-accent",children:"connect."})]}),(0,a.jsxs)(r.E.form,{variants:(0,l.J)("up",.4),initial:"hidden",animate:"show",exit:"hidden",className:"flex-1 flex flex-col gap-6 w-full mx-auto",onSubmit:p,onChange:e=>u({...s,[e.target.name]:e.target.value}),children:[(0,a.jsxs)("div",{className:"flex gap-x-6 w-full",children:[(0,a.jsx)("input",{value:s.from_name,type:"text",placeholder:"name",name:"from_name",className:"input"}),(0,a.jsx)("input",{value:s.reply_to,type:"email",placeholder:"email",name:"reply_to",className:"input"})]}),(0,a.jsx)("input",{value:s.subject,type:"text",placeholder:"subject",name:"subject",className:"input"}),(0,a.jsx)("textarea",{value:s.message,placeholder:"message",name:"message",className:"textarea"}),(0,a.jsxs)("button",{type:"submit",className:"btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group",children:[(0,a.jsx)("span",{className:"group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500",children:"Let's talk"}),(0,a.jsx)(i.lzl,{className:"-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"})]})]})]})}),e&&(0,a.jsx)(d,{})]})]})};var _=y},6356:function(e,t,s){"use strict";s.d(t,{J:function(){return a}});let a=(e,t)=>({hidden:{y:"up"===e?80:"down"===e?-80:0,opacity:0,x:"left"===e?80:"right"===e?-80:0,transition:{type:"tween",duration:1.5,delay:t,ease:[.25,.6,.3,.8]}},show:{y:0,x:0,opacity:1,transition:{type:"tween",duration:1.4,delay:t,ease:[.25,.25,.25,.75]}}})}},function(e){e.O(0,[13,962,774,888,179],function(){return e(e.s=6405)}),_N_E=e.O()}]);