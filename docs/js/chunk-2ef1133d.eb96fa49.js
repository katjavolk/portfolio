(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ef1133d"],{"320c":function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function u(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(i){return!1}}e.exports=u()?Object.assign:function(e,t){for(var n,u,c=a(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]),n)o.call(n,s)&&(c[s]=n[s]);if(r){u=r(n);for(var f=0;f<u.length;f++)i.call(n,u[f])&&(c[u[f]]=n[u[f]])}}return c}},"46d3":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("vueVimeoPlayer",{ref:"player",attrs:{"video-id":e.video,options:e.options},on:{ready:e.onReady}})],1)},o=[],i=(n("a9e3"),n("84c9")),a=n("320c"),u=n.n(a),c=0;function l(e){var t=this;this.player.on(e,(function(n){t.$emit(e,n,t.player)}))}var s=["play","playing","pause","ended","timeupdate","progress","seeking","seeked","texttrackchange","chapterchange","cuechange","cuepoint","volumechange","playbackratechange","bufferstart","bufferend","error","loaded","durationchange","fullscreenchange","qualitychange","camerachange","resize"],f={props:{playerHeight:{default:320},playerWidth:{default:640},options:{type:Object,default:function(){return{}}},videoId:{type:String,default:""},videoUrl:{type:String,default:""},loop:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!1},controls:{type:Boolean,default:!0},eventsToEmit:{type:Array,default:function(){return s}}},data:function(){return{elementId:"vimeo-player-"+(c+=1),player:null}},computed:{getOptions:function(){var e={width:this.playerWidth,height:this.playerHeight,loop:this.loop,autoplay:this.autoplay,controls:this.controls};return this.videoUrl&&(e.url=this.videoUrl),this.videoId&&(e.id=this.videoId),u()(e,this.options)}},watch:{videoId:"update",videoUrl:"update",controls:"update"},mounted:function(){this.videoUrl||this.videoId||console.warn("[VueVimeoPlayer]: You must provide at least a videoUrl or videoId"),this.player=new i["a"](this.elementId,this.getOptions),this.setEvents()},beforeDestroy:function(){this.player.unload()},methods:{update:function(){return this.player.loadVideo(this.getOptions)},play:function(){return this.player.play()},pause:function(){return this.player.pause()},mute:function(){return this.player.setVolume(0)},unmute:function(e){return void 0===e&&(e=.5),this.player.setVolume(e)},setEvents:function(){var e=this;this.player.ready().then((function(){e.$emit("ready",e.player)})).catch((function(t){e.$emit("error",t,e.player)})),this.eventsToEmit.forEach((function(t){return l.call(e,t)}))}},render:function(e){return e("div",{attrs:{id:this.elementId}})}};function d(e,t){e.component("vimeo-player",f)}d.version="0.2.2","undefined"!=typeof window&&window.Vue&&window.Vue.use(d);var h={name:"VimeoVideoPlayer",components:{vueVimeoPlayer:f},props:{video:Number},data:function(){return{options:{muted:!1,autoplay:!1,controls:!1,title:!1,portrait:!1,byline:!1,responsive:!0},playerReady:!1}},methods:{onReady:function(){this.playerReady=!0},play:function(){this.$refs.player.play()},pause:function(){this.$refs.player.pause()}}},p=h,v=n("2877"),y=Object(v["a"])(p,r,o,!1,null,null,null);t["a"]=y.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),o=n("5899"),i="["+o+"]",a=RegExp("^"+i+i+"*"),u=RegExp(i+i+"*$"),c=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(a,"")),2&e&&(n=n.replace(u,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},"5b8f":function(e,t,n){"use strict";n("f5cf")},7156:function(e,t,n){var r=n("861d"),o=n("d2bb");e.exports=function(e,t,n){var i,a;return o&&"function"==typeof(i=t.constructor)&&i!==n&&r(a=i.prototype)&&a!==n.prototype&&o(e,a),e}},"84c9":function(e,t,n){"use strict";(function(e){/*! @vimeo/player v2.15.0 | (c) 2021 Vimeo | MIT License | https://github.com/vimeo/player.js */
function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var i="undefined"!==typeof e&&"[object global]"==={}.toString.call(e);function a(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function u(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}function c(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function l(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(c(r))return"https://vimeo.com/".concat(r);if(l(r))return r.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(r,"” is not a vimeo.com url."))}var f="undefined"!==typeof Array.prototype.indexOf,d="undefined"!==typeof window&&"undefined"!==typeof window.postMessage;if(!i&&(!f||!d))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var h="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{};function p(e,t){return t={exports:{}},e(t,t.exports),t.exports
/*!
 * weakmap-polyfill v2.0.1 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2020 Polygon Planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */}(function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=function(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(n(this,"_id",i("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function o(e,n){if(!r(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function i(e){return e+"_"+a()+"."+a()}function a(){return Math.random().toString().substring(2)}return n(e.prototype,"delete",(function(e){if(o(this,"delete"),!r(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),n(e.prototype,"get",(function(e){if(o(this,"get"),r(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),n(e.prototype,"has",(function(e){if(o(this,"has"),!r(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),n(e.prototype,"set",(function(e,t){if(o(this,"set"),!r(e))throw new TypeError("Invalid value used as weak map key");var i=e[this._id];return i&&i[0]===e?(i[1]=t,this):(n(e,this._id,[e,t]),this)})),n(e,"_polyfill",!0),e}()}function r(e){return Object(e)===e}})("undefined"!==typeof self?self:"undefined"!==typeof window?window:h);var v=p((function(e){
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
(function(t,n,r){n[t]=n[t]||r(),e.exports&&(e.exports=n[t])})("Promise",h,(function(){var e,t,n,r=Object.prototype.toString,o="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(y){e=function(e,t,n){return e[t]=n,e}}function i(e,r){n.add(e,r),t||(t=o(n.drain))}function a(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function u(){for(var e=0;e<this.chain.length;e++)c(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function c(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg),r===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=a(r))?o.call(r,n.resolve,n.reject):n.resolve(r))}catch(y){n.reject(y)}}function l(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=a(e))?i((function(){var r=new d(n);try{t.call(e,(function(){l.apply(r,arguments)}),(function(){s.apply(r,arguments)}))}catch(y){s.call(r,y)}})):(n.msg=e,n.state=1,n.chain.length>0&&i(u,n))}catch(y){s.call(new d(n),y)}}}function s(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&i(u,t))}function f(e,t,n,r){for(var o=0;o<t.length;o++)(function(o){e.resolve(t[o]).then((function(e){n(o,e)}),r)})(o)}function d(e){this.def=e,this.triggered=!1}function h(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function p(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new h(this);this["then"]=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t})),t.chain.push(r),0!==t.state&&i(u,t),r.promise},this["catch"]=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){l.call(t,e)}),(function(e){s.call(t,e)}))}catch(y){s.call(t,y)}}n=function(){var e,n,r;function o(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,i){r=new o(t,i),n?n.next=r:e=r,n=r,r=void 0},drain:function(){var r=e;e=n=t=void 0;while(r)r.fn.call(r.self),r=r.next}}}();var v=e({},"constructor",p,!1);return p.prototype=v,e(v,"__NPO__",0,!1),e(p,"resolve",(function(e){var t=this;return e&&"object"==typeof e&&1===e.__NPO__?e:new t((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(p,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(p,"all",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;f(t,e,(function(e,t){i[e]=t,++a===o&&n(i)}),r)}))})),e(p,"race",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");f(t,e,(function(e,t){n(t)}),r)}))})),p}))})),y=new WeakMap;function m(e,t,n){var r=y.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),y.set(e.element,r)}function g(e,t){var n=y.get(e.element)||{};return n[t]||[]}function w(e,t,n){var r=y.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],y.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),y.set(e.element,r),r[t]&&0===r[t].length}function b(e,t){var n=g(e,t);if(n.length<1)return!1;var r=n.shift();return w(e,t,r),r}function k(e,t){var n=y.get(e);y.set(t,n),y.delete(e)}var E=["autopause","autoplay","background","byline","color","controls","dnt","height","id","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return E.reduce((function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t}),t)}function P(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,o){if(!l(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(i+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var u="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;u.open("GET",i,!0),u.onload=function(){if(404!==u.status)if(403!==u.status)try{var t=JSON.parse(u.responseText);if(403===t.domain_status_code)return P(t,n),void o(new Error("“".concat(e,"” is not embeddable.")));r(t)}catch(i){o(i)}else o(new Error("“".concat(e,"” is not embeddable.")));else o(new Error("“".concat(e,"” was not found.")))},u.onerror=function(){var e=u.status?" (".concat(u.status,")"):"";o(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},u.send()}))}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=T(e),r=s(t);_(r,t,e).then((function(t){return P(t,e)})).catch(n)}catch(o){n(o)}}))}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(l(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){var o=n[r].parentElement;o.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener("message",t)}}function I(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){return console.warn(t),{}}return e}function F(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function x(e,t){t=I(t);var n,r=[];if(t.event){if("error"===t.event){var o=g(e,t.data.method);o.forEach((function(n){var r=new Error(t.data.message);r.name=t.data.name,n.reject(r),w(e,t.data.method,n)}))}r=g(e,"event:".concat(t.event)),n=t.data}else if(t.method){var i=b(e,t.method);i&&(r.push(i),n=t.value)}r.forEach((function(t){try{if("function"===typeof t)return void t.call(e,n);t.resolve(n)}catch(r){}}))}function M(){var e=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if(e=t[n],e&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror},n={request:function(t){return new Promise((function(r,o){var i=function e(){n.off("fullscreenchange",e),r()};n.on("fullscreenchange",i),t=t||document.documentElement;var a=t[e.requestFullscreen]();a instanceof Promise&&a.then(i).catch(o)}))},exit:function(){return new Promise((function(t,r){if(n.isFullscreen){var o=function e(){n.off("fullscreenchange",e),t()};n.on("fullscreenchange",o);var i=document[e.exitFullscreen]();i instanceof Promise&&i.then(o).catch(r)}else t()}))},on:function(e,n){var r=t[e];r&&document.addEventListener(r,n)},off:function(e,n){var r=t[e];r&&document.removeEventListener(r,n)}};return Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(document[e.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[e.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[e.fullscreenEnabled])}}}),n}var O=new WeakMap,C=new WeakMap,A={},S=function(){function e(t){var r=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!==typeof document&&"string"===typeof t&&(t=document.getElementById(t)),!u(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){var i=t.querySelector("iframe");i&&(t=i)}if("IFRAME"===t.nodeName&&!l(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(O.has(t))return O.get(t);this._window=t.ownerDocument.defaultView,this.element=t,this.origin="*";var a=new v((function(e,n){if(r._onMessage=function(t){if(l(t.origin)&&r.element.contentWindow===t.source){"*"===r.origin&&(r.origin=t.origin);var o=I(t.data),i=o&&"error"===o.event,a=i&&o.data&&"ready"===o.data.method;if(a){var u=new Error(o.data.message);return u.name=o.data.name,void n(u)}var c=o&&"ready"===o.event,s=o&&"ping"===o.method;if(c||s)return r.element.setAttribute("data-ready","true"),void e();x(r,o)}},r._window.addEventListener("message",r._onMessage),"IFRAME"!==r.element.nodeName){var i=T(t,o),a=s(i);_(a,i,t).then((function(e){var n=P(e,t);return r.element=n,r._originalElement=t,k(t,n),O.set(r.element,r),e})).catch(n)}}));if(C.set(this,a),O.set(this.element,this),"IFRAME"===this.element.nodeName&&F(this,"ping"),A.isEnabled){var c=function(){return A.exit()};A.on("fullscreenchange",(function(){A.isFullscreen?m(r,"event:exitFullscreen",c):w(r,"event:exitFullscreen",c),r.ready().then((function(){F(r,"fullscreenchange",A.isFullscreen)}))}))}return this}return o(e,[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new v((function(r,o){return t.ready().then((function(){m(t,e,{resolve:r,reject:o}),F(t,e,n)})).catch(o)}))}},{key:"get",value:function(e){var t=this;return new v((function(n,r){return e=a(e,"get"),t.ready().then((function(){m(t,e,{resolve:n,reject:r}),F(t,e)})).catch(r)}))}},{key:"set",value:function(e,t){var n=this;return new v((function(r,o){if(e=a(e,"set"),void 0===t||null===t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){m(n,e,{resolve:r,reject:o}),F(n,e,t)})).catch(o)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!==typeof t)throw new TypeError("The callback must be a function.");var n=g(this,"event:".concat(e));0===n.length&&this.callMethod("addEventListener",e).catch((function(){})),m(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!==typeof t)throw new TypeError("The callback must be a function.");var n=w(this,"event:".concat(e),t);n&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=C.get(this)||new v((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return v.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return A.isEnabled?A.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return A.isEnabled?A.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return A.isEnabled?v.resolve(A.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new v((function(t){if(C.delete(e),O.delete(e.element),e._originalElement&&(O.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&e.element.parentNode.removeChild(e.element),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var n=e.element.querySelector("iframe");n&&n.parentNode&&n.parentNode.removeChild(n)}e._window.removeEventListener("message",e._onMessage),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}]),e}();i||(A=M(),N(),j()),t["a"]=S}).call(this,n("c8ba"))},a9e3:function(e,t,n){"use strict";var r=n("83ab"),o=n("da84"),i=n("94ca"),a=n("6eeb"),u=n("5135"),c=n("c6b6"),l=n("7156"),s=n("c04e"),f=n("d039"),d=n("7c73"),h=n("241c").f,p=n("06cf").f,v=n("9bf2").f,y=n("58a8").trim,m="Number",g=o[m],w=g.prototype,b=c(d(w))==m,k=function(e){var t,n,r,o,i,a,u,c,l=s(e,!1);if("string"==typeof l&&l.length>2)if(l=y(l),t=l.charCodeAt(0),43===t||45===t){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+l}for(i=l.slice(2),a=i.length,u=0;u<a;u++)if(c=i.charCodeAt(u),c<48||c>o)return NaN;return parseInt(i,r)}return+l};if(i(m,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var E,T=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof T&&(b?f((function(){w.valueOf.call(n)})):c(n)!=m)?l(new g(k(t)),n,T):k(t)},P=r?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;P.length>_;_++)u(g,E=P[_])&&!u(T,E)&&v(T,E,p(g,E));T.prototype=w,w.constructor=T,a(o,m,T)}},f5cf:function(e,t,n){},fbd7:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"h1size"},[e._t("title")],2),n("h2",{staticClass:"h2size"},[e._t("subtitle")],2)])},o=[],i={props:{headline:String,subheadline:String}},a=i,u=(n("5b8f"),n("2877")),c=Object(u["a"])(a,r,o,!1,null,null,null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-2ef1133d.eb96fa49.js.map