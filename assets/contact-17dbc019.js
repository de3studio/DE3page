import{a as C}from"./axios-a900fd7e.js";import{_ as V,r as b,o as _,c as w,g as B,w as m,f as D,a as e,b as u,h as a,v,t as k,i as I,F as S,e as F,j as f,p as M,k as T}from"./index-f7e551ab.js";/*! js-cookie v3.0.1 | MIT */function h(n){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var p in c)n[p]=c[p]}return n}var j={read:function(n){return n[0]==='"'&&(n=n.slice(1,-1)),n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(n){return encodeURIComponent(n).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function y(n,s){function c(t,d,i){if(!(typeof document>"u")){i=h({},s,i),typeof i.expires=="number"&&(i.expires=new Date(Date.now()+i.expires*864e5)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var o in i)i[o]&&(l+="; "+o,i[o]!==!0&&(l+="="+i[o].split(";")[0]));return document.cookie=t+"="+n.write(d,t)+l}}function p(t){if(!(typeof document>"u"||arguments.length&&!t)){for(var d=document.cookie?document.cookie.split("; "):[],i={},l=0;l<d.length;l++){var o=d[l].split("="),U=o.slice(1).join("=");try{var g=decodeURIComponent(o[0]);if(i[g]=n.read(U,g),t===g)break}catch{}}return t?i[t]:i}}return Object.create({set:c,get:p,remove:function(t,d){c(t,"",h({},d,{expires:-1}))},withAttributes:function(t){return y(this.converter,h({},this.attributes,t))},withConverter:function(t){return y(h({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(s)},converter:{value:Object.freeze(n)}})}var x=y(j,{path:"/"});const R={data(){return{selected:[],name:"",email:"",message:"",d:!0}},mounted(){x.get("formSubmitted")&&(this.d=!1)},methods:{submitForm(){x.set("formSubmitted","true",{expires:.02});const n={name:this.name,email:this.email,message:this.message,selected:this.seleced};C.post("https://loquacious-crepe-a6721d.netlify.app/.netlify/functions/api/sendEmail",n).then(s=>{alert("we have received your email please wait 1 hour if you want to send another email"),this.name="",this.email="",this.message="",this.d=!1}).catch(s=>{alert("error")})}},computed:{isValid(){return this.name.length>0&&this.email.length>0&&this.selected.length>0&&this.message.length<=300&&/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)&&!x.get("formSubmitted")}}},r=n=>(M("data-v-65c427e8"),n=n(),T(),n),E=r(()=>e("div",null,[e("div",{class:"fram1"})],-1)),W={key:1,style:{"margin-top":"100px"}},z={class:"flex1"},G={class:"BUTgrd"},A=r(()=>e("p",{style:{"margin-left":"-20px"}},"3D",-1)),O=r(()=>e("label",{for:"3D"},null,-1)),P={class:"BUTgrd"},H=r(()=>e("p",{style:{"margin-left":"-20px"}},"Motion Design",-1)),N=r(()=>e("label",{for:"Motion Design"},null,-1)),q={class:"flex1"},J={class:"BUTgrd1"},L=r(()=>e("p",{style:{"margin-left":"-20px"}},"Graphic design",-1)),Q=r(()=>e("label",{style:{border:"1px solid #ffffff"},for:"Graphic design"},null,-1)),X={class:"BUTgrd1"},Y=r(()=>e("p",{style:{"margin-left":"-20px"}},"Web Design",-1)),Z=r(()=>e("label",{style:{border:"1px solid #ffffff"},for:"Web Design"},null,-1)),K={style:{"max-width":"60%"}},$=r(()=>e("p",{style:{"margin-bottom":"-15px"},for:"name"},"Name",-1)),ee=r(()=>e("p",{style:{"margin-bottom":"-15px"},for:"email"},"Email",-1)),te=r(()=>e("p",{style:{"margin-bottom":"-15px"},for:"message"},"Message",-1)),se={style:{"margin-top":"-30px","margin-left":"10px","font-size":"10px"}},oe=["disabled"];function ne(n,s,c,p,t,d){const i=b("H1"),l=b("dev");return _(),w(S,null,[t.d==!1?(_(),B(i,{key:0,style:{"margin-top":"200px"}},{default:m(()=>[F("We have received your email please wait 1 hour if you want to send another email!")]),_:1})):D("",!0),E,t.d?(_(),w("div",W,[e("form",null,[e("div",null,[e("div",z,[e("div",G,[u(l,{class:"round"},{default:m(()=>[A,a(e("input",{type:"checkbox",id:"3D",value:"3D","onUpdate:modelValue":s[0]||(s[0]=o=>t.selected=o)},null,512),[[f,t.selected]]),O]),_:1})]),e("div",P,[u(l,{class:"round"},{default:m(()=>[H,a(e("input",{type:"checkbox",id:"Motion Design",value:"Motion Design","onUpdate:modelValue":s[1]||(s[1]=o=>t.selected=o)},null,512),[[f,t.selected]]),N]),_:1})])]),e("div",q,[e("div",J,[u(l,{class:"round"},{default:m(()=>[L,a(e("input",{type:"checkbox",id:"Graphic design",value:"Graphic design","onUpdate:modelValue":s[2]||(s[2]=o=>t.selected=o),style:{border:"1px solid #ffffff"}},null,512),[[f,t.selected]]),Q]),_:1})]),e("div",X,[u(l,{class:"round"},{default:m(()=>[Y,a(e("input",{type:"checkbox",id:"Web Design",value:"Web Design","onUpdate:modelValue":s[3]||(s[3]=o=>t.selected=o),style:{border:"1px solid #ffffff"}},null,512),[[f,t.selected]]),Z]),_:1})])])]),e("div",K,[$,e("div",null,[a(e("input",{maxlength:"90",class:"input",id:"name",type:"text","onUpdate:modelValue":s[4]||(s[4]=o=>t.name=o),placeholder:`\r
Please enter your full name here`},null,512),[[v,t.name]])]),ee,e("div",null,[a(e("input",{maxlength:"90",class:"input",id:"email",type:"email",placeholder:"Please enter your email here","onUpdate:modelValue":s[5]||(s[5]=o=>t.email=o)},null,512),[[v,t.email]])]),te,e("div",null,[a(e("textarea",{placeholder:"Please enter your message here",style:{resize:"none",height:"200px"},class:"input",id:"message","onUpdate:modelValue":s[6]||(s[6]=o=>t.message=o),maxlength:"300"},null,512),[[v,t.message]]),e("div",se,k(t.message.length)+" / 300 ",1)])]),e("button",{class:"bus1",type:"submit",onClick:s[7]||(s[7]=I((...o)=>d.submitForm&&d.submitForm(...o),["prevent"])),disabled:!d.isValid}," Send ",8,oe)])])):D("",!0)],64)}const de=V(R,[["render",ne],["__scopeId","data-v-65c427e8"]]);export{de as default};
