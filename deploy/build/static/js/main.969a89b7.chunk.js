(this["webpackJsonpmap-app"]=this["webpackJsonpmap-app"]||[]).push([[0],{27:function(e,t,n){e.exports=n(59)},32:function(e,t,n){},51:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),c=n.n(o),i=(n(32),n(2)),l=n.n(i),u=n(4),s=n(5),p=n(6),m=n(7),f=n(3),d=n.n(f),g=(n(34),n(8)),v=n.n(g),h={getAll:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/api/points");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getById:function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat("/api/points","/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),submitPoint:function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/api/points",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};n(51);function b(){var e=Object(p.a)(["\n\twidth: ",";\n\theight: ",";\n"]);return b=function(){return e},e}var y=m.a.div(b(),(function(e){return e.width}),(function(e){return e.height})),E=function(e){var t=e.points,o=Object(a.useState)([]),c=Object(s.a)(o,2),i=c[0],p=c[1],m=Object(a.useState)(""),f=Object(s.a)(m,2),g=f[0],v=f[1],b=Object(a.useState)(""),E=Object(s.a)(b,2),O=E[0],j=E[1],w=Object(a.useRef)(null);Object(a.useEffect)((function(){delete d.a.Icon.Default.prototype._getIconUrl,d.a.Icon.Default.mergeOptions({iconRetinaUrl:n(56),iconUrl:n(57),shadowUrl:n(58)}),w.current=d.a.map("map",{center:[43.657998,-79.378355],zoom:17,zoomControl:!1}),d.a.tileLayer("https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png",{detectRetina:!0,maxZoom:20,maxNativeZoom:17}).addTo(w.current);var e=d.a.marker();w.current.on("click",(function(t){e.setLatLng(t.latlng).addTo(w.current),console.log(e.getLatLng());var n=e.getLatLng();p([n.lat,n.lng]),console.log("state",n)}))}),[]),Object(a.useEffect)((function(){t.map((function(e){if("danger"===e.type)d.a.circle([e.latitude,e.longitude],{color:"red",fillColor:"#f03",fillOpacity:.5,radius:17}).addTo(w.current).bindPopup(e.content);else if("interference"===e.type){d.a.circle([e.latitude,e.longitude],{color:"#ff8c00",fillColor:"#ffa500",fillOpacity:.5,radius:17}).addTo(w.current).bindPopup(e.content)}else{d.a.circle([e.latitude,e.longitude],{color:"green",fillColor:"#90ee90",fillOpacity:.5,radius:17}).addTo(w.current).bindPopup(e.content)}}))}),[]);var x=function(){var e=Object(u.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.submitPoint({type:g,content:O,latitude:i[0],longitude:i[1]});case 3:a=e.sent,t.concat(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error",e.t0);case 10:j(""),v(""),p([]);case 13:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"block",width:"100%"}},r.a.createElement(y,{style:{display:"block",marginBottom:"15px"},width:"100%",height:"450px",id:"map"}),r.a.createElement("h2",null,"See something - say something"),i.length>0&&g&&O?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{opacity:0}},"Please")):r.a.createElement("p",null,"Please ",0===i.length?"pin a point on the map":""," ",g?"":", select the type of an event"," ",O?"":", provide a short description"),r.a.createElement("div",{className:"formContainer"},r.a.createElement("form",{className:"formElem myForm",onSubmit:x},r.a.createElement("div",{className:"selectContainer formElem"},r.a.createElement("select",{className:"selector",onChange:function(e){return function(e){v(e.target.value)}(e)}},r.a.createElement("option",{value:""},"Select type"),r.a.createElement("option",{value:"danger"},"Danger"),r.a.createElement("option",{value:"interference"},"Interference"),r.a.createElement("option",{value:"event"},"Event"))),r.a.createElement("div",{className:"inputContainer formElem"},r.a.createElement("input",{className:"inText",type:"text",placeholder:"Short description",onChange:function(e){return function(e){j(e.target.value)}(e)}})),r.a.createElement("div",{className:"buttonContainer formElem"},r.a.createElement("button",{className:"submitButton",disabled:!g||0===i.length||!O,type:"submit"},"submit"))))))};function O(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  margin: auto auto;\n  padding-top: 40px;\n  padding-bottom: 40px;\n"]);return O=function(){return e},e}function j(){var e=Object(p.a)(["\n  display: table-cell;\n  vertical-align: middle;\n"]);return j=function(){return e},e}function w(){var e=Object(p.a)(["\n  display: table; \n  position: absolute;\n  height: 80%;\n  width: 100%;\n"]);return w=function(){return e},e}var x=m.a.div(w()),k=m.a.div(j()),C=m.a.div(O()),N=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!0),i=Object(s.a)(c,2),p=i[0],m=i[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getAll();case 2:t=e.sent,o(t),m(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log("Points from db",n),p?r.a.createElement("p",null,"loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null,r.a.createElement(k,null,r.a.createElement(C,null,r.a.createElement(E,{points:n})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.969a89b7.chunk.js.map