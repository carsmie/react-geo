!function(e){function t(t){for(var r,o,u=t[0],c=t[1],f=t[2],p=0,d=[];p<u.length;p++)o=u[p],a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(i&&i(t);d.length;)d.shift()();return l.push.apply(l,f||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={17:0},l=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var i=c;l.push([456,1,0]),n()}({456:function(e,t,n){"use strict";var r=p(n(2)),a=n(17),l=p(n(45)),o=p(n(62)),u=p(n(59)),c=p(n(73)),f=p(n(21)),i=n(42);function p(e){return e&&e.__esModule?e:{default:e}}var d=new l.default({layers:[new u.default({name:"OSM",source:new c.default})],view:new o.default({center:f.default.fromLonLat([37.4057,8.81566]),zoom:4})});(0,a.render)(r.default.createElement("div",null,r.default.createElement("div",{className:"example-block"},r.default.createElement("label",null,"ScaleCombo:",r.default.createElement("br",null),r.default.createElement(i.ScaleCombo,{map:d,style:{margin:"5px",width:"300px"}}))),r.default.createElement("div",{id:"map",style:{height:"400px"}})),document.getElementById("exampleContainer"),function(){d.setTarget("map")})}});