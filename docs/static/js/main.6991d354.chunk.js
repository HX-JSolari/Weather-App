(this["webpackJsonp09-react-routing"]=this["webpackJsonp09-react-routing"]||[]).push([[0],{24:function(e,c,t){},25:function(e,c,t){},27:function(e,c,t){},36:function(e,c,t){},37:function(e,c,t){},38:function(e,c,t){},39:function(e,c,t){"use strict";t.r(c);var n=t(1),i=t(17),a=t.n(i),s=t(19),r=t(12),d=t(2),j=(t(24),t.p+"static/media/heart.cc3106f7.gif"),l=(t(25),t(0));function h(e){var c=e.onSearch,t=Object(n.useState)(""),i=Object(r.a)(t,2),a=i[0],s=i[1];return Object(l.jsx)("div",{class:"main-search-input-wrap",children:Object(l.jsx)("div",{class:"main-search-input fl-wrap",children:Object(l.jsx)("div",{class:"main-search-input-item",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(a)},children:[Object(l.jsx)("input",{type:"text",value:a,placeholder:"Search your city...",onChange:function(e){return s(e.target.value)}}),Object(l.jsx)("button",{class:"main-search-button",children:"Search"})]})})})})}t(27);var o=t(7);var b=function(e){var c=e.onSearch;return Object(l.jsxs)("nav",{className:"navbar navbar-dark bg-dark",children:[Object(l.jsx)(o.b,{to:"/Weather-App/",children:Object(l.jsx)("span",{className:"navbar-brand",children:Object(l.jsx)("img",{id:"heart",src:j,width:"64",height:"64",className:"d-inline-block align-top",alt:""})})}),Object(l.jsx)(h,{onSearch:c})]})};t(36),t(37);function u(e){var c=e.min,t=e.max,n=e.name,i=e.img,a=e.onClose,s=e.id,r=e.temp;return Object(l.jsx)("div",{className:"body",children:Object(l.jsx)("div",{class:"container d-flex justify-content-center",children:Object(l.jsx)("div",{class:"weather",children:Object(l.jsx)("div",{class:"row",children:Object(l.jsx)("div",{class:" col-md-6",children:Object(l.jsxs)("div",{class:"card",children:[" ",Object(l.jsx)("span",{class:"icon",children:Object(l.jsx)("img",{class:"img-fluid",src:"http://openweathermap.org/img/wn/"+i+"@2x.png"})}),Object(l.jsx)("div",{class:"title",children:Object(l.jsx)(o.b,{to:"/Weather-App/ciudad/".concat(s),children:Object(l.jsx)("p",{children:n})})}),Object(l.jsxs)("div",{class:"temp",children:["".concat(parseInt(r),"\xb0C"),Object(l.jsx)("sup",{children:"\xb0"})]}),Object(l.jsxs)("div",{class:"row",children:[Object(l.jsxs)("div",{class:"col-4",children:[Object(l.jsx)("div",{class:"header",children:"Min"}),Object(l.jsx)("div",{class:"value",children:Object(l.jsx)("p",{children:"".concat(parseInt(c),"C")})})]}),Object(l.jsxs)("div",{class:"col-4",children:[Object(l.jsx)("div",{class:"header",children:"Max"}),Object(l.jsx)("div",{class:"value",children:"".concat(parseInt(t),"C")})]}),Object(l.jsx)("div",{class:"col-4",children:Object(l.jsx)("div",{id:"closeIcon",className:"row",children:Object(l.jsx)("button",{onClick:a,className:"btn btn-sm btn-danger",children:"X"})})})]})]})})})})})})}var x=t.p+"static/media/search.68d18bd0.gif";function m(e){var c=e.cities,t=e.onClose;return Object(l.jsx)("div",{children:c<=0?Object(l.jsxs)("div",{className:"h2",children:[Object(l.jsx)("div",{children:Object(l.jsx)("strong",{children:Object(l.jsx)("h2",{children:"Search For Your Favourite City & Check the Weather"})})}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:x,width:"200",height:"200",alt:"No fig"})})]}):Object(l.jsx)("div",{className:"cards",children:c.map((function(e){return Object(l.jsx)(u,{temp:e.temp,max:e.max,min:e.min,name:e.name,img:e.img,id:e.id,onClose:function(){return t(e.id)}},e.id)}))})})}t(38);function O(e){var c=e.city;return Object(l.jsx)("div",{className:"ciudad",children:Object(l.jsxs)("div",{className:"containerR",children:[Object(l.jsx)("h2",{children:c.name}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsxs)("div",{children:["Temperatura: ",c.temp," \xbaC"]}),Object(l.jsxs)("div",{children:["Clima: ",c.weather]}),Object(l.jsxs)("div",{children:["Viento: ",c.wind," km/h"]}),Object(l.jsxs)("div",{children:["Cantidad de nubes: ",c.clouds]}),Object(l.jsxs)("div",{children:["Latitud: ",c.latitud,"\xba"]}),Object(l.jsxs)("div",{children:["Longitud: ",c.longitud,"\xba"]})]})]})})}var p=function(){var e=Object(n.useState)([]),c=Object(r.a)(e,2),t=c[0],i=c[1];function a(e){var c=t.filter((function(c){return c.id===parseInt(e)}));return c.length>0?c[0]:null}return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d.a,{path:"/Weather-App/",children:Object(l.jsx)(b,{onSearch:function(e){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("4ae2636d8dfbdc3044bede63951a019b","&units=metric")).then((function(e){return e.json()})).then((function(e){if(void 0!==e.main){var c={min:Math.round(e.main.temp_min),max:Math.round(e.main.temp_max),img:e.weather[0].icon,id:e.id,wind:e.wind.speed,temp:e.main.temp,name:e.name,weather:e.weather[0].main,clouds:e.clouds.all,latitud:e.coord.lat,longitud:e.coord.lon};i((function(e){return[].concat(Object(s.a)(e),[c])}))}else alert("Ciudad no encontrada")}))}})}),Object(l.jsx)(d.a,{exact:!0,path:"/Weather-App/",children:Object(l.jsx)(m,{cities:t,onClose:function(e){i((function(c){return c.filter((function(c){return c.id!==e}))}))}})}),Object(l.jsx)(d.a,{exact:!0,path:"/Weather-App/ciudad/:ciudadId",render:function(e){var c=e.match;return Object(l.jsx)(O,{city:a(c.params.ciudadId)})}})]})};a.a.render(Object(l.jsx)(o.a,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.6991d354.chunk.js.map