(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{219:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),s=n(85),i=n.n(s),o=(n(93),n(94),n(34)),l=n(2),u=n(19),j=n.n(u),b=n(33),d=n(10),p=n(86);function O(){var e=Object(a.useState)(),t=Object(d.a)(e,2),n=t[0],r=t[1],s=function(){var e=Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/images");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"title",children:"Your Images"}),Object(c.jsx)("div",{className:"gallery",children:n&&n.map((function(e,t){return Object(c.jsx)(p.Image,{cloudName:"soms",publicId:e,width:"300",crop:"scale"},t)}))})]})}function h(e){var t=e.msg,n=e.type,r=Object(a.useState)(!1),s=Object(d.a)(r,2),i=s[0],o=s[1];return Object(a.useEffect)((function(){t&&(o(!0),setInterval((function(){o(!1)}),2e3))}),[t]),Object(c.jsx)(c.Fragment,{children:i&&Object(c.jsx)("div",{className:"alert alert-".concat(n),children:t})})}function f(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),i=Object(d.a)(s,2),o=i[0],l=i[1],u=Object(a.useState)(""),p=Object(d.a)(u,2),O=p[0],f=p[1],m=Object(a.useState)(""),x=Object(d.a)(m,2),v=x[0],g=x[1],y=Object(a.useState)(""),S=Object(d.a)(y,2),N=S[0],w=S[1],F=function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){l(t.result)}},I=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/upload",{method:"POST",body:JSON.stringify({data:t}),headers:{"Content-Type":"application/json"}});case 3:r(""),l(""),g("View image in the gallery"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),w("Upload issues");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"title",children:"Upload an Image"}),Object(c.jsx)(h,{msg:N,type:"danger"}),Object(c.jsx)(h,{msg:v,type:"success"}),Object(c.jsxs)("form",{className:"form",onSubmit:function(e){if(e.preventDefault(),O){var t=new FileReader;t.readAsDataURL(O),t.onloadend=function(){I(t.result)},t.onerror=function(){console.error("file read error"),w("FILE READ ERROR")}}},children:[Object(c.jsx)("input",{type:"file",placeholder:"Select an image",value:n,onChange:function(e){var t=e.target.files[0];F(t),f(t),r(e.target.value)}}),Object(c.jsx)("button",{className:"btn",type:"submit",children:"Submit"})]}),o&&Object(c.jsx)("img",{src:o,alt:"chosen",style:{height:"300px"}})]})}var m=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)("nav",{className:"nav",children:Object(c.jsxs)("ul",{className:"nav-items",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(o.b,{to:"/upload",children:"Upload"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(o.b,{to:"/",children:"Gallery"})})]})}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/",exact:!0,component:O}),Object(c.jsx)(l.a,{path:"/upload",component:f})]})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,220)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),x()},93:function(e,t,n){},94:function(e,t,n){}},[[219,1,2]]]);
//# sourceMappingURL=main.44fd41bc.chunk.js.map