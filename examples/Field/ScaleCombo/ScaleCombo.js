webpackJsonp([7],{23:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=o(24),a=function(e){var t,o=e||{};t=void 0!==o.attributions?o.attributions:[a.ATTRIBUTION];var r=void 0!==o.crossOrigin?o.crossOrigin:"anonymous",n=void 0!==o.url?o.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";i.a.call(this,{attributions:t,cacheSize:o.cacheSize,crossOrigin:r,opaque:void 0===o.opaque||o.opaque,maxZoom:void 0!==o.maxZoom?o.maxZoom:19,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileLoadFunction:o.tileLoadFunction,url:n,wrapX:o.wrapX})};r.a.inherits(a,i.a),a.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=a},24:function(e,t,o){"use strict";var r=o(0),i=o(38),a=o(35),n=function(e){var t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",r=void 0!==t.tileGrid?t.tileGrid:a.a.createXYZ({extent:a.a.extentFromProjection(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});i.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,logo:t.logo,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};r.a.inherits(n,i.a),t.a=n},957:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=o(1),a=r(i),n=o(9),l=o(25),c=r(l),u=o(37),s=r(u),d=o(34),p=r(d),m=o(23),f=r(m),h=o(16),v=r(h),g=o(22),w=new c.default({layers:[new p.default({name:"OSM",source:new f.default})],view:new s.default({center:v.default.fromLonLat([37.4057,8.81566]),zoom:4})});(0,n.render)(a.default.createElement("div",null,a.default.createElement("div",{className:"example-block"},a.default.createElement("label",null,"ScaleCombo:",a.default.createElement("br",null),a.default.createElement(g.ScaleCombo,{map:w,style:{margin:"5px",width:"300px"}}))),a.default.createElement("div",{id:"map",style:{height:"400px"}})),document.getElementById("exampleContainer"),function(){w.setTarget("map")})}},[957]);