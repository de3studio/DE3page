import{a as C}from"./axios-a900fd7e.js";import{_ as V,r as b,o as _,c as w,g as B,w as m,f as D,a as t,b as u,h as a,v,t as k,i as I,F as S,e as F,j as f,p as M,k as T}from"./index-ae17eef4.js";/*! js-cookie v3.0.1 | MIT */function h(n){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var p in c)n[p]=c[p]}return n}var j={read:function(n){return n[0]==='"'&&(n=n.slice(1,-1)),n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(n){return encodeURIComponent(n).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function y(n,s){function c(e,d,i){if(!(typeof document>"u")){i=h({},s,i),typeof i.expires=="number"&&(i.expires=new Date(Date.now()+i.expires*864e5)),i.expires&&(i.expires=i.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var o in i)i[o]&&(l+="; "+o,i[o]!==!0&&(l+="="+i[o].split(";")[0]));return document.cookie=e+"="+n.write(d,e)+l}}function p(e){if(!(typeof document>"u"||arguments.length&&!e)){for(var d=document.cookie?document.cookie.split("; "):[],i={},l=0;l<d.length;l++){var o=d[l].split("="),U=o.slice(1).join("=");try{var g=decodeURIComponent(o[0]);if(i[g]=n.read(U,g),e===g)break}catch{}}return e?i[e]:i}}return Object.create({set:c,get:p,remove:function(e,d){c(e,"",h({},d,{expires:-1}))},withAttributes:function(e){return y(this.converter,h({},this.attributes,e))},withConverter:function(e){return y(h({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(s)},converter:{value:Object.freeze(n)}})}var x=y(j,{path:"/"});const R={data(){return{selected:[],name:"",email:"",message:"",d:!0}},mounted(){x.get("formSubmitted")&&(this.d=!1)},methods:{submitForm(){x.set("formSubmitted","true",{expires:.02});const n={name:this.name,email:this.email,message:this.message,selected:this.selected};C.post("https://loquacious-crepe-a6721d.netlify.app/.netlify/functions/api/sendEmail",n).then(s=>{alert("we have received your email please wait 1 hour if you want to send another email"),this.name="",this.email="",this.message="",this.d=!1}).catch(s=>{alert("error")})}},computed:{isValid(){return this.name.length>0&&this.email.length>0&&this.selected.length>0&&this.message.length<=255&&/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)&&!x.get("formSubmitted")}}},r=n=>(M("data-v-9e756467"),n=n(),T(),n),E={key:1,style:{"margin-top":"100px"}},W={class:"flex1"},z={class:"BUTgrd"},G=r(()=>t("p",{style:{"margin-left":"-20px"}},"3D",-1)),A=r(()=>t("label",{for:"3D"},null,-1)),O={class:"BUTgrd"},P=r(()=>t("p",{style:{"margin-left":"-20px"}},"Motion Design",-1)),H=r(()=>t("label",{for:"Motion Design"},null,-1)),N={class:"flex1"},q={class:"BUTgrd1"},J=r(()=>t("p",{style:{"margin-left":"-20px"}},"Graphic design",-1)),L=r(()=>t("label",{style:{border:"1px solid #ffffff"},for:"Graphic design"},null,-1)),Q={class:"BUTgrd1"},X=r(()=>t("p",{style:{"margin-left":"-20px"}},"Web Design",-1)),Y=r(()=>t("label",{style:{border:"1px solid #ffffff"},for:"Web Design"},null,-1)),Z={style:{"max-width":"60%"}},K=r(()=>t("p",{style:{"margin-bottom":"-15px"},for:"name"},"Name",-1)),$=r(()=>t("p",{style:{"margin-bottom":"-15px"},for:"email"},"Email",-1)),ee=r(()=>t("p",{style:{"margin-bottom":"-15px"},for:"message"},"Message",-1)),te={style:{"margin-top":"-30px","margin-left":"10px","font-size":"10px"}},se=["disabled"];function oe(n,s,c,p,e,d){const i=b("H1"),l=b("dev");return _(),w(S,null,[e.d==!1?(_(),B(i,{key:0,style:{"margin-top":"200px"}},{default:m(()=>[F("We have received your email please wait 1 hour if you want to send another email!")]),_:1})):D("",!0),e.d?(_(),w("div",E,[t("form",null,[t("div",null,[t("div",W,[t("div",z,[u(l,{class:"round"},{default:m(()=>[G,a(t("input",{type:"checkbox",id:"3D",value:"3D","onUpdate:modelValue":s[0]||(s[0]=o=>e.selected=o)},null,512),[[f,e.selected]]),A]),_:1})]),t("div",O,[u(l,{class:"round"},{default:m(()=>[P,a(t("input",{type:"checkbox",id:"Motion Design",value:"Motion Design","onUpdate:modelValue":s[1]||(s[1]=o=>e.selected=o)},null,512),[[f,e.selected]]),H]),_:1})])]),t("div",N,[t("div",q,[u(l,{class:"round"},{default:m(()=>[J,a(t("input",{type:"checkbox",id:"Graphic design",value:"Graphic design","onUpdate:modelValue":s[2]||(s[2]=o=>e.selected=o),style:{border:"1px solid #ffffff"}},null,512),[[f,e.selected]]),L]),_:1})]),t("div",Q,[u(l,{class:"round"},{default:m(()=>[X,a(t("input",{type:"checkbox",id:"Web Design",value:"Web Design","onUpdate:modelValue":s[3]||(s[3]=o=>e.selected=o),style:{border:"1px solid #ffffff"}},null,512),[[f,e.selected]]),Y]),_:1})])])]),t("div",Z,[K,t("div",null,[a(t("input",{maxlength:"90",class:"input",id:"name",type:"text","onUpdate:modelValue":s[4]||(s[4]=o=>e.name=o),placeholder:`\r
Please enter your full name here`},null,512),[[v,e.name]])]),$,t("div",null,[a(t("input",{maxlength:"90",class:"input",id:"email",type:"email",placeholder:"Please enter your email here","onUpdate:modelValue":s[5]||(s[5]=o=>e.email=o)},null,512),[[v,e.email]])]),ee,t("div",null,[a(t("textarea",{placeholder:"Please enter your message here",style:{resize:"none",height:"200px"},class:"input",id:"message","onUpdate:modelValue":s[6]||(s[6]=o=>e.message=o),maxlength:"300"},null,512),[[v,e.message]]),t("div",te,k(e.message.length)+" / 300 ",1)])]),t("button",{class:"bus1",type:"submit",onClick:s[7]||(s[7]=I((...o)=>d.submitForm&&d.submitForm(...o),["prevent"])),disabled:!d.isValid}," Send ",8,se)])])):D("",!0)],64)}const re=V(R,[["render",oe],["__scopeId","data-v-9e756467"]]);export{re as default};
