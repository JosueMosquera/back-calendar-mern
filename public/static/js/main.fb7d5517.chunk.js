(this["webpackJsonp09-calendar-app"]=this["webpackJsonp09-calendar-app"]||[]).push([[0],{121:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(10),c=n.n(r),o=n(9),s=n(66),i=n(8),u=n(12),l=n.n(u),j=n(21),d=n(13),b=n.n(d),m="https://mern-back-ja.herokuapp.com/api",f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(m,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(m,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},p="[ui] Open Modal",v="[ui] Close Modal",h="[event] Set Active",x="[event] Add new",g="[event]Clear Active",y="[event]Log out",E="[event]Event updated",N="[event]Event deleted",w="[auth] Finish checking state",k="[auth] Login",S="[auth] Start register",C="[auth] Logout",D="[event] Events loaded",T=n(5),I=n(18),P=n.n(I),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(T.a)(Object(T.a)({},e),{},{end:P()(e.end).toDate(),start:P()(e.start).toDate()})}))},_=function(e){return{type:x,payload:e}},q=function(){return{type:g}},L=function(e){return{type:E,payload:e}},R=function(){return{type:N}},G=function(e){return{type:D,payload:e}},M=function(){return{type:w}},F=function(e){return{type:k,payload:e}},V=function(){return function(e){localStorage.removeItem("token"),localStorage.removeItem("token-init-date"),e({type:y}),e(J())}},J=function(){return{type:C}},B=n(17),H=n(25),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(B.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(T.a)(Object(T.a)({},r),{},Object(H.a)({},t.name,t.value)))};return[r,s,o]},X=(n(88),n(2)),z=function(){var e=Object(o.b)(),t=U({lEmail:"",lPassword:""}),n=Object(B.a)(t,3),a=n[0],r=n[1],c=n[2],s=U({rName:"",rEmail:"",rPassword1:"",rPassword2:""}),i=Object(B.a)(s,3),u=i[0],d=i[1],m=i[2],O=a.lEmail,p=a.lPassword,v=u.rEmail,h=u.rPassword1,x=u.rName,g=u.rPassword2;return Object(X.jsx)("div",{className:"container login-container",children:Object(X.jsxs)("div",{className:"row",children:[Object(X.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(X.jsx)("h3",{children:"Ingreso"}),Object(X.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=O,a=p,function(){var e=Object(j.a)(l.a.mark((function e(t){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).uid?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(F({uid:c.uid,email:c.email,name:c.name}))):b.a.fire("Error",c.msg,"error"),c.errors&&b.a.fire("Error","correo o password incorrectos","error");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),c()},children:[Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:O,onChange:r,required:!0})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:p,onChange:r,required:!0})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(X.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(X.jsx)("h3",{children:"Registro"}),Object(X.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),h!==g)return b.a.fire("Error","Las contrase\xf1as deben ser iguales","error");var n,a,r;e((n=v,a=h,r=x,function(){var e=Object(j.a)(l.a.mark((function e(t){var c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("auth/new",{email:n,password:a,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).uid?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(F({uid:o.uid,email:o.email,name:o.name}))):b.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),m()},children:[Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:x,onChange:d,required:!0})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:v,onChange:d,required:!0})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:h,onChange:d,required:!0})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:g,onChange:d,required:!0})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},K=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(X.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(X.jsx)("span",{className:"navbar-brand",children:t}),Object(X.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){e(V())},children:[Object(X.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(X.jsx)("span",{children:"  Salir"})]})]})},Q=n(49),W={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},Y=(n(90),n(91),function(e){var t=e.event,n=t.title,a=t.user;return Object(X.jsxs)("div",{children:[Object(X.jsx)("strong",{children:n}),Object(X.jsxs)("span",{children:["- ",null===a||void 0===a?void 0:a.name]})]})}),Z=n(45),$=n.n(Z),ee=n(46),te=n.n(ee),ne=function(){return{type:p}},ae={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};$.a.setAppElement("#root");var re=P()().minutes(0).seconds(0).add(1,"hours"),ce=re.clone().add(1,"hours"),oe={title:"",notes:"",start:re.toDate(),end:ce.toDate()},se=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).modalOpen,n=Object(o.c)((function(e){return e.calendar})).activeEvent,r=Object(a.useState)(oe),c=Object(B.a)(r,2),s=c[0],i=c[1],u=Object(a.useState)(re.toDate()),d=Object(B.a)(u,2),m=d[0],f=d[1],p=Object(a.useState)(ce.toDate()),h=Object(B.a)(p,2),x=h[0],g=h[1],y=Object(a.useState)(!0),E=Object(B.a)(y,2),N=E[0],w=E[1],k=s.title,S=s.notes,C=s.start,D=s.end;Object(a.useEffect)((function(){i(n||oe)}),[n,i]);var I=function(e){var t=e.target;i(Object(T.a)(Object(T.a)({},s),{},Object(H.a)({},t.name,t.value)))},A=function(){e({type:v}),e(q()),i(oe)};return Object(X.jsxs)($.a,{isOpen:t,onRequestClose:A,style:ae,className:"modal",overlayClassName:"modal-fondo",closeTimeoutMS:200,children:[Object(X.jsxs)("h2",{children:[" ",n?"Editar Evento":"Nuevo Evento"," "]}),Object(X.jsx)("hr",{}),Object(X.jsxs)("form",{className:"container",onSubmit:function(t){t.preventDefault();var a,r=P()(C),c=P()(D);return r.isSameOrAfter(c)?b.a.fire("Error","La fecha fin debe ser mayor a la fecha de Inicio","error"):k.trim().length<2?w(!1):(e(n?(a=s,function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).evento?t(L(a)):b.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),b.a.fire("Error",e.t0,"error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(j.a)(l.a.mark((function t(n,a){var r,c,o,s,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,O("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).eventoDb&&(e.id=i.eventoDb.id,e.user={_id:c,name:o},n(_(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),b.a.fire("Error",t.t0,"error");case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(s)),w(!0),void A())},children:[Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Fecha y hora inicio"}),Object(X.jsx)(te.a,{onChange:function(e){f(e),i(Object(T.a)(Object(T.a)({},s),{},{start:e}))},value:m,className:"form-control"})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Fecha y hora fin"}),Object(X.jsx)(te.a,{onChange:function(e){g(e),i(Object(T.a)(Object(T.a)({},s),{},{end:e}))},value:x,className:"form-control",minDate:m})]}),Object(X.jsx)("hr",{}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Titulo y notas"}),Object(X.jsx)("input",{type:"text",className:"form-control ".concat(!N&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:k,onChange:I,required:!0}),Object(X.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"1",name:"notes",value:S,onChange:I})}),Object(X.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(X.jsx)("i",{className:"far fa-save"}),Object(X.jsx)("span",{children:" Guardar"})]})]})]})},ie=function(){var e=Object(o.b)(),t=function(){e(ne())};return Object(X.jsx)("button",{className:"btn btn-primary fab",onClick:t,children:Object(X.jsx)("i",{className:"fas fa-plus",onClick:t})})},ue=function(){var e=Object(o.b)();return Object(X.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(j.a)(l.a.mark((function e(t,n){var a,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,O("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).eventoBorrado?t(R()):b.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),b.a.fire("Error",e.t0,"error");case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(X.jsx)("i",{className:"fas fa-trash"}),Object(X.jsx)("span",{children:" Borrar Evento"})]})};P.a.locale("es");var le=Object(Q.b)(P.a),je=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,c=Object(o.c)((function(e){return e.auth})).uid,s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(B.a)(s,2),u=i[0],d=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=A(a.eventos),t(G(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),b.a.fire("Error",e.t0,"error");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(X.jsxs)("div",{className:"calendar-screen",children:[Object(X.jsx)(K,{}),Object(X.jsx)(Q.a,{localizer:le,events:n,startAccessor:"start",endAccessor:"end",messages:W,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#465660",boderRadius:"0px",opacitiy:.8,display:"block",color:"white"}}},components:{event:Y},onDoubleClickEvent:function(){e(ne())},onSelectEvent:function(t){e({type:h,payload:t})},onView:function(e){d(e),localStorage.setItem("lastView",e)},view:u,onSelectSlot:function(t){e(q())},selectable:!0}),Object(X.jsx)(ie,{}),r&&Object(X.jsx)(ue,{}),Object(X.jsx)(se,{})]})},de=n(35),be=["isAuthenticated","component"],me=function(e){var t=e.isAuthenticated,n=e.component,a=Object(de.a)(e,be);return localStorage.setItem("lastPath",a.location.pathname),Object(X.jsx)(i.b,Object(T.a)(Object(T.a)({},a),{},{component:function(e){return t?Object(X.jsx)(n,Object(T.a)({},e)):Object(X.jsx)(i.a,{to:"/login"})}}))},fe=["isAuthenticated","component"],Oe=function(e){var t=e.isAuthenticated,n=e.component,a=Object(de.a)(e,fe);return Object(X.jsx)(i.b,Object(T.a)(Object(T.a)({},a),{},{component:function(e){return t?Object(X.jsx)(i.a,{to:"/"}):Object(X.jsx)(n,Object(T.a)({},e))}}))},pe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).uid?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(F({uid:a.uid,email:a.email,name:a.name}))):t(M());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(X.jsx)("h5",{children:"Espere..."}):Object(X.jsx)(s.a,{children:Object(X.jsx)("div",{children:Object(X.jsxs)(i.d,{children:[Object(X.jsx)(Oe,{path:"/login",exact:!0,component:z,isAuthenticated:!!r}),Object(X.jsx)(me,{path:"/",exact:!0,component:je,isAuthenticated:!!r}),Object(X.jsx)(i.a,{to:"/"})]})})})},ve=n(26),he=n(67),xe={checking:!0},ge=n(50),ye={events:[],activeEvent:null},Ee={modalOpen:!1},Ne=Object(ve.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(T.a)(Object(T.a)({},e),{},{modalOpen:!0});case v:return Object(T.a)(Object(T.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(T.a)(Object(T.a)({},e),{},{activeEvent:t.payload});case x:return Object(T.a)(Object(T.a)({},e),{},{events:[].concat(Object(ge.a)(e.events),[t.payload])});case g:return Object(T.a)(Object(T.a)({},e),{},{activeEvent:null});case E:return Object(T.a)(Object(T.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case N:return Object(T.a)(Object(T.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case D:return Object(T.a)(Object(T.a)({},e),{},{events:Object(ge.a)(t.payload)});case y:return Object(T.a)({},ye);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:case S:return Object(T.a)(Object(T.a)({},e),{},{checking:!1},t.payload);case w:return Object(T.a)(Object(T.a)({},e),{},{checking:!1});case C:return{checking:!1};default:return e}}}),we="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ve.c,ke=Object(ve.d)(Ne,we(Object(ve.a)(he.a))),Se=function(){return Object(X.jsx)("div",{children:Object(X.jsx)(o.a,{store:ke,children:Object(X.jsx)(pe,{})})})};n(121);c.a.render(Object(X.jsx)(Se,{}),document.getElementById("root"))},88:function(e,t,n){}},[[123,1,2]]]);
//# sourceMappingURL=main.fb7d5517.chunk.js.map