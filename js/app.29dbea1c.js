(function(e){function t(t){for(var n,l,u=t[0],i=t[1],o=t[2],p=0,f=[];p<u.length;p++)l=u[p],s[l]&&f.push(s[l][0]),s[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);c&&c(t);while(f.length)f.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,u=1;u<a.length;u++){var i=a[u];0!==s[i]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},s={app:0},r=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/flash-exposure-calculator/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var o=0;o<u.length;o++)t(u[o]);var c=i;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"27e2":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=a("bb71");a("da64");n["a"].use(s["a"],{iconfont:"md"});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-content",[a("Calculator")],1)],1)},l=[],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Calculator"},[a("h1",{staticClass:"headline"},[e._v("Flash Exposure Calculator")]),a("v-slider",{attrs:{label:"ISO",ticks:"always","tick-size":"4","thumb-label":"always","always-dirty":"","thumb-size":"32","tick-labels":e.isoRange,value:0,max:e.isoRange.length-1},scopedSlots:e._u([{key:"thumb-label",fn:function(t){return[a("span",[e._v(e._s(e.isoRange[t.value]))])]}}]),model:{value:e.isoIndex,callback:function(t){e.isoIndex=t},expression:"isoIndex"}}),a("v-slider",{attrs:{label:"Flash Coverage(mm)",ticks:"always","tick-size":"4","thumb-label":"always","always-dirty":"","thumb-size":"32","tick-labels":e.flashCoverageRange,value:0,max:e.flashCoverageRange.length-1},scopedSlots:e._u([{key:"thumb-label",fn:function(t){return[a("span",[e._v(e._s(e.flashCoverageRange[t.value]))])]}}]),model:{value:e.flashCoverageIndex,callback:function(t){e.flashCoverageIndex=t},expression:"flashCoverageIndex"}}),a("v-slider",{attrs:{label:"Flash Output",ticks:"always","tick-size":"4","thumb-label":"always","always-dirty":"","thumb-size":"32","tick-labels":e.flashOutputRange.map(function(e){return"1/"+1/e}),value:0,max:e.flashOutputRange.length-1},scopedSlots:e._u([{key:"thumb-label",fn:function(t){return[a("span",[e._v(e._s("1/"+Math.pow(2,t.value)))])]}}]),model:{value:e.flashOutputIndex,callback:function(t){e.flashOutputIndex=t},expression:"flashOutputIndex"}}),a("v-slider",{attrs:{label:"Aperture",ticks:"always","tick-size":"4","thumb-label":"always","always-dirty":"","thumb-size":"32","tick-labels":e.apertureRange,value:0,max:e.apertureRange.length-1},scopedSlots:e._u([{key:"thumb-label",fn:function(t){return[a("span",[e._v(e._s(e.apertureRange[t.value]))])]}}]),model:{value:e.apertureIndex,callback:function(t){e.apertureIndex=t},expression:"apertureIndex"}}),a("h2",{staticClass:"body-1"},[e._v("\n    ISO "),a("span",{staticClass:"title"},[e._v(e._s(e.iso))])]),a("h2",{staticClass:"body-1"},[e._v("\n    Flash Coverage "),a("span",{staticClass:"title"},[e._v(e._s(e.flashCoverage+"mm"))])]),a("h2",{staticClass:"body-1"},[e._v("\n    Flash Output "),a("span",{staticClass:"title"},[e._v(e._s("1/"+1/e.flashOutput))])]),a("h2",{staticClass:"body-1"},[e._v("\n    Guide Number "),a("span",{staticClass:"title"},[e._v(e._s(e.guideNumber.toFixed(2)))])]),a("h2",{staticClass:"body-1"},[e._v("\n    Aperture "),a("span",{staticClass:"title"},[e._v(e._s("1/"+e.aperture))])]),a("h2",{staticClass:"body-1",staticStyle:{color:"red"}},[e._v("\n    Distance "),a("span",{staticClass:"title"},[e._v(e._s(e.distance.toFixed(2)+"m"))])])],1)},i=[],o={data:function(){return{isoIndex:0,flashCoverageIndex:0,flashOutputIndex:0,apertureIndex:0,isoFactors:{100:1,200:1.4,400:2,800:2.8,1600:4,3200:5.6,6400:8},isoRange:[100,200,400,800,1600,3200,6400],flashOutputRange:[1,.5,.25,1/8,1/16,1/32,1/64,1/128],flashCoverageRange:[24,28,35,50,70,80,105],guideNumberRange:[28,30,39,42,50,53,58],apertureRange:[3.5,4,4.5,5,5.6,6.3,7.1,8,9,10,11,13,14,16,18,20,22,25,29,32,36,40,45]}},computed:{iso:function(){return this.isoRange[this.isoIndex]},flashCoverage:function(){return this.flashCoverageRange[this.flashCoverageIndex]},flashOutput:function(){return this.flashOutputRange[this.flashOutputIndex]},guideNumber:function(){return this.guideNumberRange[this.flashCoverageRange.indexOf(this.flashCoverage)]*Math.sqrt(this.flashOutput)*this.isoFactors[this.iso]},aperture:function(){return this.apertureRange[this.apertureIndex]},distance:function(){return this.guideNumber/this.aperture}}},c=o,p=(a("9041"),a("2877")),f=a("6544"),h=a.n(f),d=a("ba0d"),v=Object(p["a"])(c,u,i,!1,null,null,null),b=v.exports;h()(v,{VSlider:d["a"]});var g={name:"App",components:{Calculator:b},data:function(){return{}}},m=g,y=a("7496"),x=a("549c"),_=Object(p["a"])(m,r,l,!1,null,null,null),C=_.exports;h()(_,{VApp:y["a"],VContent:x["a"]}),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(C)}}).$mount("#app")},9041:function(e,t,a){"use strict";var n=a("27e2"),s=a.n(n);s.a}});
//# sourceMappingURL=app.29dbea1c.js.map