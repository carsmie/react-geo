webpackJsonp([0],{132:function(t,e,n){"use strict";var i=n(98),o=n(14),r=n(16),a=function(){this.defaultDataProjection=null,this.defaultFeatureProjection=null};a.prototype.getReadOptions=function(t,e){var n;return e&&(n={dataProjection:e.dataProjection?e.dataProjection:this.readProjection(t),featureProjection:e.featureProjection}),this.adaptOptions(n)},a.prototype.adaptOptions=function(t){return o.a.assign({dataProjection:this.defaultDataProjection,featureProjection:this.defaultFeatureProjection},t)},a.prototype.getLastExtent=function(){return null},a.prototype.getType=function(){},a.prototype.readFeature=function(t,e){},a.prototype.readFeatures=function(t,e){},a.prototype.readGeometry=function(t,e){},a.prototype.readProjection=function(t){},a.prototype.writeFeature=function(t,e){},a.prototype.writeFeatures=function(t,e){},a.prototype.writeGeometry=function(t,e){},a.transformWithOptions=function(t,e,n){var o,a=n?r.default.get(n.featureProjection):null,s=n?r.default.get(n.dataProjection):null;if(o=a&&s&&!r.default.equivalent(a,s)?t instanceof i.default?(e?t.clone():t).transform(e?a:s,e?s:a):r.default.transformExtent(t,s,a):t,e&&n&&void 0!==n.decimals){var c=Math.pow(10,n.decimals),u=function(t){for(var e=0,n=t.length;e<n;++e)t[e]=Math.round(t[e]*c)/c;return t};o===t&&(o=o.clone()),o.applyTransform(u)}return o},e.a=a},171:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t){if(d)return void t(d);u.default.newInstance({prefixCls:m,transitionName:"move-up",style:{top:h},getContainer:y},function(e){if(d)return void t(d);d=e,t(e)})}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,n=arguments[2],i=arguments[3],r={info:"info-circle",success:"check-circle",error:"cross-circle",warning:"exclamation-circle",loading:"loading"}[n];"function"==typeof e&&(i=e,e=p);var a=g++;return o(function(o){o.notice({key:a,duration:e,style:{},content:s.createElement("div",{className:m+"-custom-content "+m+"-"+n},s.createElement(f.default,{type:r}),s.createElement("span",null,t)),onClose:i})}),function(){d&&d.removeNotice(a)}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(a),c=n(173),u=i(c),l=n(46),f=i(l),p=3,h=void 0,d=void 0,g=1,m="ant-message",y=void 0;e.default={info:function(t,e,n){return r(t,e,"info",n)},success:function(t,e,n){return r(t,e,"success",n)},error:function(t,e,n){return r(t,e,"error",n)},warn:function(t,e,n){return r(t,e,"warning",n)},warning:function(t,e,n){return r(t,e,"warning",n)},loading:function(t,e,n){return r(t,e,"loading",n)},config:function(t){void 0!==t.top&&(h=t.top,d=null),void 0!==t.duration&&(p=t.duration),void 0!==t.prefixCls&&(m=t.prefixCls),void 0!==t.getContainer&&(y=t.getContainer)},destroy:function(){d&&(d.destroy(),d=null)}},t.exports=e.default},173:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(174);e.default=i.a},174:function(t,e,n){"use strict";function i(){return"rcNotification_"+I+"_"+F++}var o=n(52),r=n.n(o),a=n(21),s=n.n(a),c=n(5),u=n.n(c),l=n(4),f=n.n(l),p=n(10),h=n.n(p),d=n(6),g=n.n(d),m=n(7),y=n.n(m),_=n(1),v=n.n(_),O=n(3),w=n.n(O),T=n(9),b=n.n(T),S=n(62),C=n(191),A=n(11),E=n.n(A),P=n(192),F=0,I=Date.now(),j=function(t){function e(){var t,n,o,r;f()(this,e);for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];return n=o=g()(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),o.state={notices:[]},o.add=function(t){var e=t.key=t.key||i();o.setState(function(n){var i=n.notices;if(!i.filter(function(t){return t.key===e}).length)return{notices:i.concat(t)}})},o.remove=function(t){o.setState(function(e){return{notices:e.notices.filter(function(e){return e.key!==t})}})},r=n,g()(o,r)}return y()(e,t),h()(e,[{key:"getTransitionName",value:function(){var t=this.props,e=t.transitionName;return!e&&t.animation&&(e=t.prefixCls+"-"+t.animation),e}},{key:"render",value:function(){var t,e=this,n=this.props,i=this.state.notices.map(function(t){var i=Object(C.a)(e.remove.bind(e,t.key),t.onClose);return v.a.createElement(P.a,u()({prefixCls:n.prefixCls},t,{onClose:i}),t.content)}),o=(t={},s()(t,n.prefixCls,1),s()(t,n.className,!!n.className),t);return v.a.createElement("div",{className:E()(o),style:n.style},v.a.createElement(S.default,{transitionName:this.getTransitionName()},i))}}]),e}(_.Component);j.propTypes={prefixCls:w.a.string,transitionName:w.a.string,animation:w.a.oneOfType([w.a.string,w.a.object]),style:w.a.object},j.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},j.newInstance=function(t,e){function n(t){c||(c=!0,e({notice:function(e){t.add(e)},removeNotice:function(e){t.remove(e)},component:t,destroy:function(){b.a.unmountComponentAtNode(s),s.parentNode.removeChild(s)}}))}var i=t||{},o=i.getContainer,a=r()(i,["getContainer"]),s=document.createElement("div");if(o){o().appendChild(s)}else document.body.appendChild(s);var c=!1;b.a.render(v.a.createElement(j,u()({},a,{ref:n})),s)},e.a=j},192:function(t,e,n){"use strict";var i=n(21),o=n.n(i),r=n(4),a=n.n(r),s=n(10),c=n.n(s),u=n(6),l=n.n(u),f=n(7),p=n.n(f),h=n(1),d=n.n(h),g=n(11),m=n.n(g),y=n(3),_=n.n(y),v=function(t){function e(){var t,n,i,o;a()(this,e);for(var r=arguments.length,s=Array(r),c=0;c<r;c++)s[c]=arguments[c];return n=i=l()(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),i.close=function(){i.clearCloseTimer(),i.props.onClose()},i.startCloseTimer=function(){i.props.duration&&(i.closeTimer=setTimeout(function(){i.close()},1e3*i.props.duration))},i.clearCloseTimer=function(){i.closeTimer&&(clearTimeout(i.closeTimer),i.closeTimer=null)},o=n,l()(i,o)}return p()(e,t),c()(e,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"render",value:function(){var t,e=this.props,n=e.prefixCls+"-notice",i=(t={},o()(t,""+n,1),o()(t,n+"-closable",e.closable),o()(t,e.className,!!e.className),t);return d.a.createElement("div",{className:m()(i),style:e.style,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer},d.a.createElement("div",{className:n+"-content"},e.children),e.closable?d.a.createElement("a",{tabIndex:"0",onClick:this.close,className:n+"-close"},d.a.createElement("span",{className:n+"-close-x"})):null)}}]),e}(h.Component);v.propTypes={duration:_.a.number,onClose:_.a.func,children:_.a.any},v.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}},e.a=v},193:function(t,e,n){"use strict";n(33),n(194)},194:function(t,e,n){var i=n(195);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0;n(13)(i,o);i.locals&&(t.exports=i.locals)},195:function(t,e,n){e=t.exports=n(12)(!1),e.push([t.i,'/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-message {\n  font-family: "Monospaced Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: fixed;\n  z-index: 1010;\n  width: 100%;\n  top: 16px;\n  left: 0;\n  pointer-events: none;\n}\n.ant-message-notice {\n  padding: 8px;\n  text-align: center;\n}\n.ant-message-notice:first-child {\n  margin-top: -8px;\n}\n.ant-message-notice-content {\n  padding: 10px 16px;\n  border-radius: 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  background: #fff;\n  display: inline-block;\n  pointer-events: all;\n}\n.ant-message-success .anticon {\n  color: #52c41a;\n}\n.ant-message-error .anticon {\n  color: #f5222d;\n}\n.ant-message-warning .anticon {\n  color: #faad14;\n}\n.ant-message-info .anticon,\n.ant-message-loading .anticon {\n  color: #1890ff;\n}\n.ant-message .anticon {\n  margin-right: 8px;\n  font-size: 16px;\n  top: 1px;\n  position: relative;\n}\n.ant-message-notice.move-up-leave.move-up-leave-active {\n  animation-name: MessageMoveOut;\n  overflow: hidden;\n  animation-duration: .3s;\n}\n@keyframes MessageMoveOut {\n  0% {\n    opacity: 1;\n    max-height: 150px;\n    padding: 8px;\n  }\n  100% {\n    opacity: 0;\n    max-height: 0;\n    padding: 0;\n  }\n}\n',""])},23:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=n(24),r=function(t){var e,n=t||{};e=void 0!==n.attributions?n.attributions:[r.ATTRIBUTION];var i=void 0!==n.crossOrigin?n.crossOrigin:"anonymous",a=void 0!==n.url?n.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";o.a.call(this,{attributions:e,cacheSize:n.cacheSize,crossOrigin:i,opaque:void 0===n.opaque||n.opaque,maxZoom:void 0!==n.maxZoom?n.maxZoom:19,reprojectionErrorThreshold:n.reprojectionErrorThreshold,tileLoadFunction:n.tileLoadFunction,url:a,wrapX:n.wrapX})};i.a.inherits(r,o.a),r.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',e.default=r},239:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=n(27),r=n(71),a=n(132),s=n(240),c=n(232),u=n(127),l=n(219),f=n(157),p=n(220),h=n(56),d=n(97),g=n(14),m=n(16),y=function(t){var e=t||{};s.a.call(this),this.defaultDataProjection=m.default.get(e.defaultDataProjection?e.defaultDataProjection:"EPSG:4326"),e.featureProjection&&(this.defaultFeatureProjection=m.default.get(e.featureProjection)),this.geometryName_=e.geometryName,this.extractGeometryName_=e.extractGeometryName};i.a.inherits(y,s.a),y.readGeometry_=function(t,e){if(!t)return null;var n=y.GEOMETRY_READERS_[t.type];return a.a.transformWithOptions(n(t),!1,e)},y.readGeometryCollectionGeometry_=function(t,e){var n=t.geometries.map(function(t){return y.readGeometry_(t,e)});return new c.default(n)},y.readPointGeometry_=function(t){return new h.default(t.coordinates)},y.readLineStringGeometry_=function(t){return new u.default(t.coordinates)},y.readMultiLineStringGeometry_=function(t){return new l.a(t.coordinates)},y.readMultiPointGeometry_=function(t){return new f.a(t.coordinates)},y.readMultiPolygonGeometry_=function(t){return new p.a(t.coordinates)},y.readPolygonGeometry_=function(t){return new d.a(t.coordinates)},y.writeGeometry_=function(t,e){return(0,y.GEOMETRY_WRITERS_[t.getType()])(a.a.transformWithOptions(t,!0,e),e)},y.writeEmptyGeometryCollectionGeometry_=function(t){return{type:"GeometryCollection",geometries:[]}},y.writeGeometryCollectionGeometry_=function(t,e){return{type:"GeometryCollection",geometries:t.getGeometriesArray().map(function(t){var n=g.a.assign({},e);return delete n.featureProjection,y.writeGeometry_(t,n)})}},y.writeLineStringGeometry_=function(t,e){return{type:"LineString",coordinates:t.getCoordinates()}},y.writeMultiLineStringGeometry_=function(t,e){return{type:"MultiLineString",coordinates:t.getCoordinates()}},y.writeMultiPointGeometry_=function(t,e){return{type:"MultiPoint",coordinates:t.getCoordinates()}},y.writeMultiPolygonGeometry_=function(t,e){var n;return e&&(n=e.rightHanded),{type:"MultiPolygon",coordinates:t.getCoordinates(n)}},y.writePointGeometry_=function(t,e){return{type:"Point",coordinates:t.getCoordinates()}},y.writePolygonGeometry_=function(t,e){var n;return e&&(n=e.rightHanded),{type:"Polygon",coordinates:t.getCoordinates(n)}},y.GEOMETRY_READERS_={Point:y.readPointGeometry_,LineString:y.readLineStringGeometry_,Polygon:y.readPolygonGeometry_,MultiPoint:y.readMultiPointGeometry_,MultiLineString:y.readMultiLineStringGeometry_,MultiPolygon:y.readMultiPolygonGeometry_,GeometryCollection:y.readGeometryCollectionGeometry_},y.GEOMETRY_WRITERS_={Point:y.writePointGeometry_,LineString:y.writeLineStringGeometry_,Polygon:y.writePolygonGeometry_,MultiPoint:y.writeMultiPointGeometry_,MultiLineString:y.writeMultiLineStringGeometry_,MultiPolygon:y.writeMultiPolygonGeometry_,GeometryCollection:y.writeGeometryCollectionGeometry_,Circle:y.writeEmptyGeometryCollectionGeometry_},y.prototype.readFeature,y.prototype.readFeatures,y.prototype.readFeatureFromObject=function(t,e){var n=null;n="Feature"===t.type?t:{type:"Feature",geometry:t};var i=y.readGeometry_(n.geometry,e),o=new r.default;return this.geometryName_?o.setGeometryName(this.geometryName_):this.extractGeometryName_&&void 0!==n.geometry_name&&o.setGeometryName(n.geometry_name),o.setGeometry(i),void 0!==n.id&&o.setId(n.id),n.properties&&o.setProperties(n.properties),o},y.prototype.readFeaturesFromObject=function(t,e){var n=t,i=null;if("FeatureCollection"===n.type){var o=t;i=[];var r,a,s=o.features;for(r=0,a=s.length;r<a;++r)i.push(this.readFeatureFromObject(s[r],e))}else i=[this.readFeatureFromObject(t,e)];return i},y.prototype.readGeometry,y.prototype.readGeometryFromObject=function(t,e){return y.readGeometry_(t,e)},y.prototype.readProjection,y.prototype.readProjectionFromObject=function(t){var e,n=t,i=n.crs;return i?"name"==i.type?e=m.default.get(i.properties.name):o.a.assert(!1,36):e=this.defaultDataProjection,e},y.prototype.writeFeature,y.prototype.writeFeatureObject=function(t,e){e=this.adaptOptions(e);var n={type:"Feature"},i=t.getId();void 0!==i&&(n.id=i);var o=t.getGeometry();n.geometry=o?y.writeGeometry_(o,e):null;var r=t.getProperties();return delete r[t.getGeometryName()],g.a.isEmpty(r)?n.properties=null:n.properties=r,n},y.prototype.writeFeatures,y.prototype.writeFeaturesObject=function(t,e){e=this.adaptOptions(e);var n,i,o=[];for(n=0,i=t.length;n<i;++n)o.push(this.writeFeatureObject(t[n],e));return{type:"FeatureCollection",features:o}},y.prototype.writeGeometry,y.prototype.writeGeometryObject=function(t,e){return y.writeGeometry_(t,this.adaptOptions(e))},e.default=y},24:function(t,e,n){"use strict";var i=n(0),o=n(38),r=n(35),a=function(t){var e=t||{},n=void 0!==e.projection?e.projection:"EPSG:3857",i=void 0!==e.tileGrid?e.tileGrid:r.a.createXYZ({extent:r.a.extentFromProjection(n),maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});o.a.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,logo:e.logo,opaque:e.opaque,projection:n,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition})};i.a.inherits(a,o.a),e.a=a},240:function(t,e,n){"use strict";var i=n(0),o=n(132),r=n(217),a=function(){o.a.call(this)};i.a.inherits(a,o.a),a.prototype.getObject_=function(t){if("string"==typeof t){var e=JSON.parse(t);return e||null}return null!==t?t:null},a.prototype.getType=function(){return r.a.JSON},a.prototype.readFeature=function(t,e){return this.readFeatureFromObject(this.getObject_(t),this.getReadOptions(t,e))},a.prototype.readFeatures=function(t,e){return this.readFeaturesFromObject(this.getObject_(t),this.getReadOptions(t,e))},a.prototype.readFeatureFromObject=function(t,e){},a.prototype.readFeaturesFromObject=function(t,e){},a.prototype.readGeometry=function(t,e){return this.readGeometryFromObject(this.getObject_(t),this.getReadOptions(t,e))},a.prototype.readGeometryFromObject=function(t,e){},a.prototype.readProjection=function(t){return this.readProjectionFromObject(this.getObject_(t))},a.prototype.readProjectionFromObject=function(t){},a.prototype.writeFeature=function(t,e){return JSON.stringify(this.writeFeatureObject(t,e))},a.prototype.writeFeatureObject=function(t,e){},a.prototype.writeFeatures=function(t,e){return JSON.stringify(this.writeFeaturesObject(t,e))},a.prototype.writeFeaturesObject=function(t,e){},a.prototype.writeGeometry=function(t,e){return JSON.stringify(this.writeGeometryObject(t,e))},a.prototype.writeGeometryObject=function(t,e){},e.a=a},960:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=n(224),c=i(s),u=n(171),l=i(u),f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},p=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();n(161),n(193);var h=n(1),d=i(h),g=n(3),m=i(g),y=n(9),_=n(25),v=i(_),O=n(37),w=i(O),T=n(34),b=i(T),S=n(23),C=i(S),A=n(16),E=i(A),P=n(239),F=i(P),I=n(51),j=i(I),G=n(961),x=i(G),R=n(320),N=i(R),M=n(84),z=i(M),D=n(104),L=i(D),U=n(22),H=n(965),B=i(H),Y=function(t){function e(t){o(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.fetchData=function(){var t=n.props.url,e=n.state,i=e.pagination,o=e.sorter,r=e.nameFilterText,a=new F.default;n.setState({loading:!0});var s={SERVICE:"WFS",VERSION:"1.1.0",REQUEST:"GetFeature",TYPENAME:"osm:osm-busstops",MAXFEATURES:i.pageSize,STARTINDEX:(i.current-1)*i.pageSize,OUTPUTFORMAT:"application/json",CQL_FILTER:"BBOX(geometry, 814276,6697003,846762,6727578)"},c="ascend"===o.order?" A":" D";o.field&&(s.SORTBY=""+o.field+c),r&&(s.CQL_FILTER+=" AND name like '%"+r+"%'");var u=U.UrlUtil.objectToRequestString(s);fetch(t+"?"+u).then(function(t){return t.json()}).then(function(t){n.setState({loading:!1});var e=a.readFeatures(t);if(0===e.length)return l.default.warning("No matches found!"),void n.setState({nameFilterText:""});n.setState({features:e,pagination:f({},i,{total:t.totalFeatures})})}).catch(function(){n.setState({loading:!1}),l.default.error("Could not fetch data from remote source!")})},n.onTableChange=function(t,e,i){n.setState({sorter:f({},n.state.sorter,i),pagination:f({},n.state.pagination,{current:t.current})},function(){return n.fetchData()})},n.onNameFilterTextChange=function(t){n.setState({nameFilterText:t.target.value})},n.onNameFilterSearch=function(){n.setState({pagination:f({},n.state.pagination,{current:1}),filterDropdownVisible:!1},function(){return n.fetchData()})},n.getFeatureStyle=function(t,e){return new j.default({image:new x.default({anchor:[.5,1.1],anchorXUnits:"fraction",anchorYUnits:"fraction",src:B.default,color:e}),text:new N.default({text:t.get("name"),fill:new z.default({color:"rgb(0, 0, 0)"}),stroke:new L.default({color:"rgb(255, 255, 255)",width:2})})})},n.state={loading:!1,features:[],pagination:{pageSize:10,current:1},sorter:{field:"name",order:"ascend"},nameFilterText:"",filterDropdownVisible:!1},n}return a(e,t),p(e,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var t=this,e=this.props.map,n=this.state,i=n.loading,o=n.features,r=n.pagination,a=n.nameFilterText,s=n.filterDropdownVisible,u=this.getFeatureStyle;return d.default.createElement(U.FeatureGrid,{features:o,map:e,loading:i,zoomToExtent:!0,selectable:!0,pagination:r,featureStyle:function(){return u(this)},highlightStyle:function(){return u(this,"rgb(230, 247, 255)")},selectStyle:function(){return u(this,"rgb(24, 144, 255)")},onChange:this.onTableChange,columnDefs:{name:{sorter:!0,filterDropdown:d.default.createElement("div",{style:{padding:"8px",borderRadius:"6px",background:"#fff",boxShadow:"0 1px 6px rgba(0, 0, 0, .2)"}},d.default.createElement(c.default,{ref:function(e){return t.searchInput=e},placeholder:"Search name",value:a,onChange:this.onNameFilterTextChange,onPressEnter:this.onNameFilterSearch})),filterDropdownVisible:s,onFilterDropdownVisibleChange:function(e){t.setState({filterDropdownVisible:e},function(){t.searchInput.focus()})}}}})}}]),e}(d.default.Component);Y.propTypes={map:m.default.instanceOf(v.default),url:m.default.string};var k=new v.default({layers:[new b.default({name:"OSM",source:new C.default})],view:new w.default({center:E.default.fromLonLat([37.4057,8.81566]),zoom:4})});(0,y.render)(d.default.createElement("div",null,d.default.createElement("div",{className:"example-block"},d.default.createElement(Y,{map:k,url:"https://ows.terrestris.de/geoserver/osm/wfs"})),d.default.createElement("div",{id:"map",style:{height:"400px"}})),document.getElementById("exampleContainer"),function(){k.setTarget("map")})},961:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=n(58),r=n(27),a=n(70),s=n(15),c=n(18),u=n(962),l=n(963),f=n(964),p=n(299),h=function(t){var e=t||{};this.anchor_=void 0!==e.anchor?e.anchor:[.5,.5],this.normalizedAnchor_=null,this.anchorOrigin_=void 0!==e.anchorOrigin?e.anchorOrigin:f.a.TOP_LEFT,this.anchorXUnits_=void 0!==e.anchorXUnits?e.anchorXUnits:u.a.FRACTION,this.anchorYUnits_=void 0!==e.anchorYUnits?e.anchorYUnits:u.a.FRACTION,this.crossOrigin_=void 0!==e.crossOrigin?e.crossOrigin:null;var n=void 0!==e.img?e.img:null,s=void 0!==e.imgSize?e.imgSize:null,c=e.src;r.a.assert(!(void 0!==c&&n),4),r.a.assert(!n||n&&s,5),void 0!==c&&0!==c.length||!n||(c=n.src||i.a.getUid(n).toString()),r.a.assert(void 0!==c&&c.length>0,6);var h=void 0!==e.src?o.a.IDLE:o.a.LOADED;this.color_=void 0!==e.color?a.a.asArray(e.color):null,this.iconImage_=l.a.get(n,c,s,this.crossOrigin_,h,this.color_),this.offset_=void 0!==e.offset?e.offset:[0,0],this.offsetOrigin_=void 0!==e.offsetOrigin?e.offsetOrigin:f.a.TOP_LEFT,this.origin_=null,this.size_=void 0!==e.size?e.size:null;var d=void 0!==e.opacity?e.opacity:1,g=void 0!==e.rotateWithView&&e.rotateWithView,m=void 0!==e.rotation?e.rotation:0,y=void 0!==e.scale?e.scale:1,_=void 0===e.snapToPixel||e.snapToPixel;p.a.call(this,{opacity:d,rotation:m,scale:y,snapToPixel:_,rotateWithView:g})};i.a.inherits(h,p.a),h.prototype.clone=function(){return new h({anchor:this.anchor_.slice(),anchorOrigin:this.anchorOrigin_,anchorXUnits:this.anchorXUnits_,anchorYUnits:this.anchorYUnits_,crossOrigin:this.crossOrigin_,color:this.color_&&this.color_.slice?this.color_.slice():this.color_||void 0,src:this.getSrc(),offset:this.offset_.slice(),offsetOrigin:this.offsetOrigin_,size:null!==this.size_?this.size_.slice():void 0,opacity:this.getOpacity(),scale:this.getScale(),snapToPixel:this.getSnapToPixel(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView()})},h.prototype.getAnchor=function(){if(this.normalizedAnchor_)return this.normalizedAnchor_;var t=this.anchor_,e=this.getSize();if(this.anchorXUnits_==u.a.FRACTION||this.anchorYUnits_==u.a.FRACTION){if(!e)return null;t=this.anchor_.slice(),this.anchorXUnits_==u.a.FRACTION&&(t[0]*=e[0]),this.anchorYUnits_==u.a.FRACTION&&(t[1]*=e[1])}if(this.anchorOrigin_!=f.a.TOP_LEFT){if(!e)return null;t===this.anchor_&&(t=this.anchor_.slice()),this.anchorOrigin_!=f.a.TOP_RIGHT&&this.anchorOrigin_!=f.a.BOTTOM_RIGHT||(t[0]=-t[0]+e[0]),this.anchorOrigin_!=f.a.BOTTOM_LEFT&&this.anchorOrigin_!=f.a.BOTTOM_RIGHT||(t[1]=-t[1]+e[1])}return this.normalizedAnchor_=t,this.normalizedAnchor_},h.prototype.getColor=function(){return this.color_},h.prototype.getImage=function(t){return this.iconImage_.getImage(t)},h.prototype.getImageSize=function(){return this.iconImage_.getSize()},h.prototype.getHitDetectionImageSize=function(){return this.getImageSize()},h.prototype.getImageState=function(){return this.iconImage_.getImageState()},h.prototype.getHitDetectionImage=function(t){return this.iconImage_.getHitDetectionImage(t)},h.prototype.getOrigin=function(){if(this.origin_)return this.origin_;var t=this.offset_;if(this.offsetOrigin_!=f.a.TOP_LEFT){var e=this.getSize(),n=this.iconImage_.getSize();if(!e||!n)return null;t=t.slice(),this.offsetOrigin_!=f.a.TOP_RIGHT&&this.offsetOrigin_!=f.a.BOTTOM_RIGHT||(t[0]=n[0]-e[0]-t[0]),this.offsetOrigin_!=f.a.BOTTOM_LEFT&&this.offsetOrigin_!=f.a.BOTTOM_RIGHT||(t[1]=n[1]-e[1]-t[1])}return this.origin_=t,this.origin_},h.prototype.getSrc=function(){return this.iconImage_.getSrc()},h.prototype.getSize=function(){return this.size_?this.size_:this.iconImage_.getSize()},h.prototype.listenImageChange=function(t,e){return s.a.listen(this.iconImage_,c.a.CHANGE,t,e)},h.prototype.load=function(){this.iconImage_.load()},h.prototype.unlistenImageChange=function(t,e){s.a.unlisten(this.iconImage_,c.a.CHANGE,t,e)},e.default=h},962:function(t,e,n){"use strict";var i={FRACTION:"fraction",PIXELS:"pixels"};e.a=i},963:function(t,e,n){"use strict";var i=n(0),o=n(29),r=n(15),a=n(77),s=n(18),c=n(58),u=n(279),l=function(t,e,n,i,o,r){a.a.call(this),this.hitDetectionImage_=null,this.image_=t||new Image,null!==i&&(this.image_.crossOrigin=i),this.canvas_=r?document.createElement("CANVAS"):null,this.color_=r,this.imageListenerKeys_=null,this.imageState_=o,this.size_=n,this.src_=e,this.tainting_=!1,this.imageState_==c.a.LOADED&&this.determineTainting_()};i.a.inherits(l,a.a),l.get=function(t,e,n,i,o,r){var a=u.a.iconImageCache,s=a.get(e,i,r);return s||(s=new l(t,e,n,i,o,r),a.set(e,i,r,s)),s},l.prototype.determineTainting_=function(){var t=o.a.createCanvasContext2D(1,1);try{t.drawImage(this.image_,0,0),t.getImageData(0,0,1,1)}catch(t){this.tainting_=!0}},l.prototype.dispatchChangeEvent_=function(){this.dispatchEvent(s.a.CHANGE)},l.prototype.handleImageError_=function(){this.imageState_=c.a.ERROR,this.unlistenImage_(),this.dispatchChangeEvent_()},l.prototype.handleImageLoad_=function(){this.imageState_=c.a.LOADED,this.size_&&(this.image_.width=this.size_[0],this.image_.height=this.size_[1]),this.size_=[this.image_.width,this.image_.height],this.unlistenImage_(),this.determineTainting_(),this.replaceColor_(),this.dispatchChangeEvent_()},l.prototype.getImage=function(t){return this.canvas_?this.canvas_:this.image_},l.prototype.getImageState=function(){return this.imageState_},l.prototype.getHitDetectionImage=function(t){if(!this.hitDetectionImage_)if(this.tainting_){var e=this.size_[0],n=this.size_[1],i=o.a.createCanvasContext2D(e,n);i.fillRect(0,0,e,n),this.hitDetectionImage_=i.canvas}else this.hitDetectionImage_=this.image_;return this.hitDetectionImage_},l.prototype.getSize=function(){return this.size_},l.prototype.getSrc=function(){return this.src_},l.prototype.load=function(){if(this.imageState_==c.a.IDLE){this.imageState_=c.a.LOADING,this.imageListenerKeys_=[r.a.listenOnce(this.image_,s.a.ERROR,this.handleImageError_,this),r.a.listenOnce(this.image_,s.a.LOAD,this.handleImageLoad_,this)];try{this.image_.src=this.src_}catch(t){this.handleImageError_()}}},l.prototype.replaceColor_=function(){if(!this.tainting_&&null!==this.color_){this.canvas_.width=this.image_.width,this.canvas_.height=this.image_.height;var t=this.canvas_.getContext("2d");t.drawImage(this.image_,0,0);for(var e=t.getImageData(0,0,this.image_.width,this.image_.height),n=e.data,i=this.color_[0]/255,o=this.color_[1]/255,r=this.color_[2]/255,a=0,s=n.length;a<s;a+=4)n[a]*=i,n[a+1]*=o,n[a+2]*=r;t.putImageData(e,0,0)}},l.prototype.unlistenImage_=function(){this.imageListenerKeys_.forEach(r.a.unlistenByKey),this.imageListenerKeys_=null},e.a=l},964:function(t,e,n){"use strict";var i={BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"};e.a=i},965:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAlCAYAAAAjt+tHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADTUlEQVRYhdWXW0gUURjHfzO7rMtqdjGzK5QPPa1dkAxdQUQNqreKniKC8ikKk8QKRKOILlbSU1APET5V9FJRtN1hEwzpwj5FBIVlYUqJLcsye6YHz1ln11mdgZHqg4+zs+dw/r/zne+cmU8zTROApqYmP6ADAdn68dYMQAApQESjUQNAM01TiQeAoPSABNA9EhcSIAUkpaei0aihNTY2KvEQUCzbILMTgSSQAMZkm1KrDErxRf3hSJ/HwllWFY9Vy58CMKyhD/WHI31Xdm1j3fIlrC4r9VT4/fdh3gwO0dxLX1U8VoHcBmviBYFZEQdy51R5pqtsVz4r4jYQGU2V5V5luxvTFYkrM9Jp9ly/xcfhUUZ+JwAoKQxRXrqAa7t34Pf5XM3nCCD+9RsDn75w8MYdAB637EPXNIS8xHRNmwA5fAKACzu2snHVCsJLF3sDEDl3Oeu5oefqtONbb90D4NfFLm8AlI10d+D3+RBC2Pbruo6RTmci4cRcAaj91fX8Oes2B/5G9v9bAK62IGUYmYz/KwClbSc9FYf/bQvaN9Vx6elLDCH40d2R1bdIRqe1sZazD194D9C+qY5jm+tZNq+YjjtR5h7qyurXNI3z27ewN7IBIUzOPHzuHYBP1+l5EqOsuIhTD55hpMWUW25p+ynabt9H1zR6nsQo8Dtbm6NR6t5XVywwJQLKWm7edSzuGKBzawPH7z0GoHzhAlaWzLcd93n0Jx+GRygsCNDaUOsdwIH6GjrvPgLg1ZH9ea9b9R4wTZMD9TWOABwfQ6cX0JyCAqdTApMRsH+9WSz32NlO5vMxePqoU20BExEwLM7778NOJ3BtlrkzmjqT5VIS4M3g0KxAqM9yaUmpKfwW8URVPFbd3IttYXJl1zZ2Vq5xJHZj4B3Nvbdt+2RhksBSFwj5MCYHVJBdmukAzb3EgBkhlHhVPBaRf6n8yi3NkoBwUpxmvuH7w5GB6SJhEa8kO7fyF6czlOeqtZZvr+0gLOLrrSHOAbAvz6czCRYEiqSH+sORt1YIi/haKT4uPamE8tmMAHkgilQkAOvKx3Eh7hjABqJYQgwAas/HmUgux+KuAHIgQtIDsivFROgTbsRdA1ggVFKqo6qOWMqNOMAfQZdwFeBX+gQAAAAASUVORK5CYII="}},[960]);