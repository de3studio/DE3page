import{a as D}from"./axios-a900fd7e.js";import{_ as V,r as y,o as _,c as w,g as B,w as m,f as U,a as t,b as u,h as d,v,t as k,i as I,F as S,e as F,j as f,p as T,k as j}from"./index-30c998ce.js";/*! js-cookie v3.0.1 | MIT */function h(n){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var p in c)n[p]=c[p]}return n}var R={read:function(n){return n[0]==='"'&&(n=n.slice(1,-1)),n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(n){return encodeURIComponent(n).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function b(n,s){function c(e,a,l){if(!(typeof document>"u")){l=h({},s,l),typeof l.expires=="number"&&(l.expires=new Date(Date.now()+l.expires*864e5)),l.expires&&(l.expires=l.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var o in l)l[o]&&(i+="; "+o,l[o]!==!0&&(i+="="+l[o].split(";")[0]));return document.cookie=e+"="+n.write(a,e)+i}}function p(e){if(!(typeof document>"u"||arguments.length&&!e)){for(var a=document.cookie?document.cookie.split("; "):[],l={},i=0;i<a.length;i++){var o=a[i].split("="),C=o.slice(1).join("=");try{var g=decodeURIComponent(o[0]);if(l[g]=n.read(C,g),e===g)break}catch{}}return e?l[e]:l}}return Object.create({set:c,get:p,remove:function(e,a){c(e,"",h({},a,{expires:-1}))},withAttributes:function(e){return b(this.converter,h({},this.attributes,e))},withConverter:function(e){return b(h({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(s)},converter:{value:Object.freeze(n)}})}var x=b(R,{path:"/"});const E={data(){return{selected:[],name:"",email:"",message:"",d:!0}},mounted(){x.get("formSubmitted")&&(this.d=!1)},methods:{submitForm(){x.set("formSubmitted","true",{expires:.02});const n={name:this.name,email:this.email,message:this.message,selected:this.selected};D.post("https://loquacious-crepe-a6721d.netlify.app/.netlify/functions/api/sendEmail",n).then(s=>{alert("we have received your email please wait 1 hour if you want to send another email"),this.name="",this.email="",this.message="",this.d=!1}).catch(s=>{alert("error")})}},computed:{isValid(){return this.name.length>0&&this.email.length>0&&this.selected.length>0&&this.message.length<=255&&/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)&&!x.get("formSubmitted")}}},r=n=>(T("data-v-7bab729e"),n=n(),j(),n),M={key:1,style:{"margin-top":"100px"}},z={class:"flex1"},A={class:"BUTgrd"},O=r(()=>t("p",{style:{"margin-left":"-20px"}},"3D",-1)),P=r(()=>t("label",{for:"3D"},null,-1)),H={class:"BUTgrd"},N=r(()=>t("p",{style:{"margin-left":"-20px"}},"Motion Design",-1)),W=r(()=>t("label",{for:"2D"},null,-1)),q={class:"flex1"},G={class:"BUTgrd1"},J=r(()=>t("p",{style:{"margin-left":"-20px"}},"Graphic design",-1)),L=r(()=>t("label",{style:{border:"1px solid #ffffff"},for:"banana"},null,-1)),Q={class:"BUTgrd1"},X=r(()=>t("p",{style:{"margin-left":"-20px"}},"Web Design",-1)),Y=r(()=>t("label",{style:{border:"1px solid #ffffff"},for:"orange"},null,-1)),Z={style:{"max-width":"60%"}},K=r(()=>t("p",{style:{"margin-bottom":"-15px"},for:"name"},"Name",-1)),$=r(()=>t("p",{style:{"margin-bottom":"-15px"},for:"email"},"Email",-1)),ee=r(()=>t("p",{style:{"margin-bottom":"-15px"},for:"message"},"Message",-1)),te={style:{"margin-top":"-30px","margin-left":"10px","font-size":"10px"}},se=["disabled"];function oe(n,s,c,p,e,a){const l=y("H1"),i=y("dev");return _(),w(S,null,[e.d==!1?(_(),B(l,{key:0,style:{"margin-top":"200px"}},{default:m(()=>[F("We have received your email please wait 1 hour if you want to send another email!")]),_:1})):U("",!0),e.d?(_(),w("div",M,[t("form",null,[t("div",null,[t("div",z,[t("div",A,[u(i,{class:"round"},{default:m(()=>[O,d(t("input",{type:"checkbox",id:"3D",value:"3D","onUpdate:modelValue":s[0]||(s[0]=o=>e.selected=o)},null,512),[[f,e.selected]]),P]),_:1})]),t("div",H,[u(i,{class:"round"},{default:m(()=>[N,d(t("input",{type:"checkbox",id:"2D",value:"2D","onUpdate:modelValue":s[1]||(s[1]=o=>e.selected=o)},null,512),[[f,e.selected]]),W]),_:1})])]),t("div",q,[t("div",G,[u(i,{class:"round"},{default:m(()=>[J,d(t("input",{type:"checkbox",id:"banana",value:"banana","onUpdate:modelValue":s[2]||(s[2]=o=>e.selected=o),style:{border:"1px solid #ffffff"}},null,512),[[f,e.selected]]),L]),_:1})]),t("div",Q,[u(i,{class:"round"},{default:m(()=>[X,d(t("input",{type:"checkbox",id:"orange",value:"orange","onUpdate:modelValue":s[3]||(s[3]=o=>e.selected=o),style:{border:"1px solid #ffffff"}},null,512),[[f,e.selected]]),Y]),_:1})])])]),t("div",Z,[K,t("div",null,[d(t("input",{maxlength:"90",class:"input",id:"name",type:"text","onUpdate:modelValue":s[4]||(s[4]=o=>e.name=o),placeholder:`\r
Please enter your full name here`},null,512),[[v,e.name]])]),$,t("div",null,[d(t("input",{maxlength:"90",class:"input",id:"email",type:"email",placeholder:"Please enter your email here","onUpdate:modelValue":s[5]||(s[5]=o=>e.email=o)},null,512),[[v,e.email]])]),ee,t("div",null,[d(t("textarea",{placeholder:"Please enter your message here",style:{resize:"none",height:"200px"},class:"input",id:"message","onUpdate:modelValue":s[6]||(s[6]=o=>e.message=o),maxlength:"300"},null,512),[[v,e.message]]),t("div",te,k(e.message.length)+" / 300 ",1)])]),t("button",{class:"bus1",type:"submit",onClick:s[7]||(s[7]=I((...o)=>a.submitForm&&a.submitForm(...o),["prevent"])),disabled:!a.isValid}," Send ",8,se)])])):U("",!0)],64)}const re=V(E,[["render",oe],["__scopeId","data-v-7bab729e"]]);export{re as default};
