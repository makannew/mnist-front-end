(this["webpackJsonpmnist-front-end"]=this["webpackJsonpmnist-front-end"]||[]).push([[0],{101:function(e,n){},102:function(e,n){},103:function(e,n,t){"use strict";t.r(n);var a=t(21),o=t.n(a),c=t(53),r=t.n(c),i=(t(81),t(5)),s=t.n(i),u=t(12),l=(t(83),t(8)),f=t(49),m=t.n(f),d=t(39);function v(e){var n,t,c,r,i,s,u,f=e.xPixels,v=e.yPixels,h=e.pixelsGateway,p=e.color,w=Object(a.useRef)(),b=!1,g=Object(d.a)(h),E=Object(l.a)(g,2),x=(E[0],E[1]),k=function(e){e.preventDefault(),b=!1,x(i.getImageData(0,0,c,r).data)},O=function(e,n){s=Math.round(e*f/c),u=Math.round(n*v/r)},j=function(){var e=w.current.getBoundingClientRect();n=e.left,t=e.top,c=e.width,r=e.height};return Object(a.useEffect)((function(){i=w.current.getContext("2d"),j()})),Object(a.useEffect)((function(){return window.addEventListener("resize",j),j(),function(){window.removeEventListener("resize",j)}}),[]),o.a.createElement("div",{className:m.a.container},o.a.createElement("canvas",{ref:w,className:m.a.canvas,width:f,height:v,onMouseDown:function(e){e.preventDefault(),O(e.clientX-n,e.clientY-t),b=!0},onMouseMove:function(e){e.preventDefault(),b&&(i.beginPath(),i.moveTo(s,u),O(e.clientX-n,e.clientY-t),i.lineTo(s,u),i.strokeStyle=p,i.lineWidth=1,i.stroke(),i.closePath())},onMouseUp:k,onMouseOut:k}),o.a.createElement("button",{onClick:function(){i.clearRect(0,0,c,r),x(i.getImageData(0,0,c,r).data)}},"Clear"))}var h=t(54),p=t.n(h);function w(){return o.a.createElement("div",{className:p.a.container},"Here is for links to github and portfolio")}var b=t(55),g=t.n(b);function E(){return o.a.createElement("div",{className:g.a.container},"Detected handwriting shown here")}function x(e){var n=e.pixelsGateway,t=Object(d.a)(n),a=Object(l.a)(t,2),c=a[0];a[1];return o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){console.log(c)}},"change"))}var k=t(74);var O=function(){var e=Object(d.b)(null),n=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a("https://github.com/makannew/mnist-front-end/tree/master/public/model.json");case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){n()}),[]),o.a.createElement("div",{className:"App"},o.a.createElement(v,{xPixels:112,yPixels:112,color:"#ff0000",pixelsGateway:e}),o.a.createElement(x,{pixelsGateway:e}),o.a.createElement(E,null),o.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},49:function(e,n,t){e.exports={container:"canvas_container__1-ssq"}},54:function(e,n,t){e.exports={container:"links_container__bOZ1p"}},55:function(e,n,t){e.exports={container:"result_container__xvnRt"}},76:function(e,n,t){e.exports=t(103)},81:function(e,n,t){},83:function(e,n,t){},86:function(e,n){},87:function(e,n){},95:function(e,n){}},[[76,1,2]]]);
//# sourceMappingURL=main.0e8dc9af.chunk.js.map