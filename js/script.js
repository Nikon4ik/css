function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector("body").classList.add("webp");
    } else {
        document.querySelector("body").classList.add("no-webp");
    }
});
;
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);;
/**
 * jQuery Masonry v2.1.07
 * A dynamic layout plugin for jQuery
 * The flip-side of CSS Floats
 * http://masonry.desandro.com
 *
 * Licensed under the MIT license.
 * Copyright 2012 David DeSandro
 */
(function(a,b,c){"use strict";var d=b.event,e=b.event.handle?"handle":"dispatch",f;d.special.smartresize={setup:function(){b(this).bind("resize",d.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",d.special.smartresize.handler)},handler:function(a,b){var c=this,g=arguments;a.type="smartresize",f&&clearTimeout(f),f=setTimeout(function(){d[e].apply(c,g)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Mason=function(a,c){this.element=b(c),this._create(a),this._init()},b.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1,containerStyle:{position:"relative"}},b.Mason.prototype={_filterFindBricks:function(a){var b=this.options.itemSelector;return b?a.filter(b).add(a.find(b)):a},_getBricks:function(a){var b=this._filterFindBricks(a).css({position:"absolute"}).addClass("masonry-brick");return b},_create:function(c){this.options=b.extend(!0,{},b.Mason.settings,c),this.styleQueue=[];var d=this.element[0].style;this.originalStyle={height:d.height||""};var e=this.options.containerStyle;for(var f in e)this.originalStyle[f]=d[f]||"";this.element.css(e),this.horizontalDirection=this.options.isRTL?"right":"left";var g=this.element.css("padding-"+this.horizontalDirection),h=this.element.css("padding-top");this.offset={x:g?parseInt(g,10):0,y:h?parseInt(h,10):0},this.isFluid=this.options.columnWidth&&typeof this.options.columnWidth=="function";var i=this;setTimeout(function(){i.element.addClass("masonry")},0),this.options.isResizable&&b(a).bind("smartresize.masonry",function(){i.resize()}),this.reloadItems()},_init:function(a){this._getColumns(),this._reLayout(a)},option:function(a,c){b.isPlainObject(a)&&(this.options=b.extend(!0,this.options,a))},layout:function(a,b){for(var c=0,d=a.length;c<d;c++)this._placeBrick(a[c]);var e={};e.height=Math.max.apply(Math,this.colYs);if(this.options.isFitWidth){var f=0;c=this.cols;while(--c){if(this.colYs[c]!==0)break;f++}e.width=(this.cols-f)*this.columnWidth-this.options.gutterWidth}this.styleQueue.push({$el:this.element,style:e});var g=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",h=this.options.animationOptions,i;for(c=0,d=this.styleQueue.length;c<d;c++)i=this.styleQueue[c],i.$el[g](i.style,h);this.styleQueue=[],b&&b.call(a),this.isLaidOut=!0},_getColumns:function(){var a=this.options.isFitWidth?this.element.parent():this.element,b=a.width();this.columnWidth=this.isFluid?this.options.columnWidth(b):this.options.columnWidth||this.$bricks.outerWidth(!0)||b,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((b+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)},_placeBrick:function(a){var c=b(a),d,e,f,g,h;d=Math.ceil(c.outerWidth(!0)/this.columnWidth),d=Math.min(d,this.cols);if(d===1)f=this.colYs;else{e=this.cols+1-d,f=[];for(h=0;h<e;h++)g=this.colYs.slice(h,h+d),f[h]=Math.max.apply(Math,g)}var i=Math.min.apply(Math,f),j=0;for(var k=0,l=f.length;k<l;k++)if(f[k]===i){j=k;break}var m={top:i+this.offset.y};m[this.horizontalDirection]=this.columnWidth*j+this.offset.x,this.styleQueue.push({$el:c,style:m});var n=i+c.outerHeight(!0),o=this.cols+1-l;for(k=0;k<o;k++)this.colYs[j+k]=n},resize:function(){var a=this.cols;this._getColumns(),(this.isFluid||this.cols!==a)&&this._reLayout()},_reLayout:function(a){var b=this.cols;this.colYs=[];while(b--)this.colYs.push(0);this.layout(this.$bricks,a)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(a){this.reloadItems(),this._init(a)},appended:function(a,b,c){if(b){this._filterFindBricks(a).css({top:this.element.height()});var d=this;setTimeout(function(){d._appended(a,c)},1)}else this._appended(a,c)},_appended:function(a,b){var c=this._getBricks(a);this.$bricks=this.$bricks.add(c),this.layout(c,b)},remove:function(a){this.$bricks=this.$bricks.not(a),a.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),b(a).unbind(".masonry")}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var g=function(b){a.console&&a.console.error(b)};b.fn.masonry=function(a){if(typeof a=="string"){var c=Array.prototype.slice.call(arguments,1);this.each(function(){var d=b.data(this,"masonry");if(!d){g("cannot call methods on masonry prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(d[a])||a.charAt(0)==="_"){g("no such method '"+a+"' for masonry instance");return}d[a].apply(d,c)})}else this.each(function(){var c=b.data(this,"masonry");c?(c.option(a||{}),c._init()):b.data(this,"masonry",new b.Mason(a,this))});return this}})(window,jQuery);;
(function($){$.flexslider=function(el,options,instanceId){var slider=$(el);slider.vars=$.extend({},$.flexslider.defaults,options);var namespace=slider.vars.namespace,msGesture=window.navigator&&(window.navigator.msPointerEnabled&&window.MSGesture),touch=("ontouchstart"in window||(msGesture||window.DocumentTouch&&document instanceof DocumentTouch))&&slider.vars.touch,eventType="click touchend MSPointerUp",watchedEvent="",watchedEventClearTimer,vertical=slider.vars.direction==="vertical",reverse=slider.vars.reverse,
carousel=slider.vars.itemWidth>0,fade=slider.vars.animation==="fade",asNav=slider.vars.asNavFor!=="",methods={},focused=true;var instanceId=typeof instanceId!=="undefined"?instanceId++:0;$.data(el,"flexslider",slider);methods={init:function(){slider.id=instanceId;slider.animating=false;slider.currentSlide=parseInt(slider.vars.startAt?slider.vars.startAt:0);if(isNaN(slider.currentSlide))slider.currentSlide=0;slider.animatingTo=slider.currentSlide;slider.atEnd=slider.currentSlide===0||slider.currentSlide===
slider.last;slider.containerSelector=slider.vars.selector.substr(0,slider.vars.selector.search(" "));slider.slides=$(slider.vars.selector,slider);slider.container=$(slider.containerSelector,slider);slider.count=slider.slides.length;slider.syncExists=$(slider.vars.sync).length>0;if(slider.vars.animation==="slide")slider.vars.animation="swing";slider.prop=vertical?"top":"marginLeft";slider.args={};slider.manualPause=false;slider.stopped=false;slider.started=false;slider.startTimeout=null;slider.transitions=
!slider.vars.video&&(!fade&&(slider.vars.useCSS&&function(){var obj=document.createElement("div"),props=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in props)if(obj.style[props[i]]!==undefined){slider.pfx=props[i].replace("Perspective","").toLowerCase();slider.prop="-"+slider.pfx+"-transform";return true}return false}()));if(slider.vars.controlsContainer!=="")slider.controlsContainer=$(slider.vars.controlsContainer).length>0&&$(slider.vars.controlsContainer);
if(slider.vars.manualControls!=="")slider.manualControls=$(slider.vars.manualControls).length>0&&$(slider.vars.manualControls);if(slider.vars.randomize){slider.slides.sort(function(){return Math.round(Math.random())-0.5});slider.container.empty().append(slider.slides)}slider.doMath();slider.setup("init");if(slider.vars.controlNav)methods.controlNav.setup();if(slider.vars.directionNav)methods.directionNav.setup();if(slider.vars.keyboard&&($(slider.containerSelector).length===1||slider.vars.multipleKeyboard))$(document).bind("keyup"+
slider.vars.eventNamespace+"-"+slider.id,function(event){var keycode=event.keyCode;if(!slider.animating&&(keycode===39||keycode===37)){var target=keycode===39?slider.getTarget("next"):keycode===37?slider.getTarget("prev"):false;slider.flexAnimate(target,slider.vars.pauseOnAction)}});if(slider.vars.mousewheel)slider.bind("mousewheel"+slider.vars.eventNamespace,function(event,delta,deltaX,deltaY){event.preventDefault();var target=delta<0?slider.getTarget("next"):slider.getTarget("prev");slider.flexAnimate(target,
slider.vars.pauseOnAction)});if(slider.vars.pausePlay)methods.pausePlay.setup();if(slider.vars.slideshow&&slider.vars.pauseInvisible)methods.pauseInvisible.init();if(slider.vars.slideshow){if(slider.vars.pauseOnHover)slider.hover(function(){if(!slider.manualPlay&&!slider.manualPause)slider.pause()},function(){if(!slider.manualPause&&(!slider.manualPlay&&!slider.stopped))slider.play()});if(!slider.vars.pauseInvisible||!methods.pauseInvisible.isHidden())slider.vars.initDelay>0?slider.startTimeout=setTimeout(slider.play,
slider.vars.initDelay):slider.play()}if(asNav)methods.asNav.setup();if(touch&&slider.vars.touch)methods.touch();if(!fade||fade&&slider.vars.smoothHeight)$(window).bind("resize"+slider.vars.eventNamespace+"-"+slider.id+" orientationchange"+slider.vars.eventNamespace+"-"+slider.id+" focus"+slider.vars.eventNamespace+"-"+slider.id,methods.resize);slider.find("img").attr("draggable","false");setTimeout(function(){slider.vars.start(slider)},200)},asNav:{setup:function(){slider.asNav=true;slider.animatingTo=
Math.floor(slider.currentSlide/slider.move);slider.currentItem=slider.currentSlide;slider.slides.removeClass(namespace+"active-slide").eq(slider.currentItem).addClass(namespace+"active-slide");if(!msGesture)slider.slides.on("click"+slider.vars.eventNamespace,function(e){e.preventDefault();var $slide=$(this),target=$slide.index();var posFromLeft=$slide.offset().left-$(slider).scrollLeft();if(posFromLeft<=0&&$slide.hasClass(namespace+"active-slide"))slider.flexAnimate(slider.getTarget("prev"),true);
else if(!$(slider.vars.asNavFor).data("flexslider").animating&&!$slide.hasClass(namespace+"active-slide")){slider.direction=slider.currentItem<target?"next":"prev";slider.flexAnimate(target,slider.vars.pauseOnAction,false,true,true)}});else{el._slider=slider;slider.slides.each(function(){var that=this;that._gesture=new MSGesture;that._gesture.target=that;that.addEventListener("MSPointerDown",function(e){e.preventDefault();if(e.currentTarget._gesture)e.currentTarget._gesture.addPointer(e.pointerId)},
false);that.addEventListener("MSGestureTap",function(e){e.preventDefault();var $slide=$(this),target=$slide.index();if(!$(slider.vars.asNavFor).data("flexslider").animating&&!$slide.hasClass("active")){slider.direction=slider.currentItem<target?"next":"prev";slider.flexAnimate(target,slider.vars.pauseOnAction,false,true,true)}})})}}},controlNav:{setup:function(){if(!slider.manualControls)methods.controlNav.setupPaging();else methods.controlNav.setupManual()},setupPaging:function(){var type=slider.vars.controlNav===
"thumbnails"?"control-thumbs":"control-paging",j=1,item,slide;slider.controlNavScaffold=$('<ol class="'+namespace+"control-nav "+namespace+type+'"></ol>');if(slider.pagingCount>1)for(var i=0;i<slider.pagingCount;i++){slide=slider.slides.eq(i);item=slider.vars.controlNav==="thumbnails"?'<img src="'+slide.attr("data-thumb")+'"/>':"<a>"+j+"</a>";if("thumbnails"===slider.vars.controlNav&&true===slider.vars.thumbCaptions){var captn=slide.attr("data-thumbcaption");if(""!=captn&&undefined!=captn)item+='<span class="'+
namespace+'caption">'+captn+"</span>"}slider.controlNavScaffold.append("<li>"+item+"</li>");j++}slider.controlsContainer?$(slider.controlsContainer).append(slider.controlNavScaffold):slider.append(slider.controlNavScaffold);methods.controlNav.set();methods.controlNav.active();slider.controlNavScaffold.delegate("a, img",eventType,function(event){event.preventDefault();if(watchedEvent===""||watchedEvent===event.type){var $this=$(this),target=slider.controlNav.index($this);if(!$this.hasClass(namespace+
"active")){slider.direction=target>slider.currentSlide?"next":"prev";slider.flexAnimate(target,slider.vars.pauseOnAction)}}if(watchedEvent==="")watchedEvent=event.type;methods.setToClearWatchedEvent()})},setupManual:function(){slider.controlNav=slider.manualControls;methods.controlNav.active();slider.controlNav.bind(eventType,function(event){event.preventDefault();if(watchedEvent===""||watchedEvent===event.type){var $this=$(this),target=slider.controlNav.index($this);if(!$this.hasClass(namespace+
"active")){target>slider.currentSlide?slider.direction="next":slider.direction="prev";slider.flexAnimate(target,slider.vars.pauseOnAction)}}if(watchedEvent==="")watchedEvent=event.type;methods.setToClearWatchedEvent()})},set:function(){var selector=slider.vars.controlNav==="thumbnails"?"img":"a";slider.controlNav=$("."+namespace+"control-nav li "+selector,slider.controlsContainer?slider.controlsContainer:slider)},active:function(){slider.controlNav.removeClass(namespace+"active").eq(slider.animatingTo).addClass(namespace+
"active")},update:function(action,pos){if(slider.pagingCount>1&&action==="add")slider.controlNavScaffold.append($("<li><a>"+slider.count+"</a></li>"));else if(slider.pagingCount===1)slider.controlNavScaffold.find("li").remove();else slider.controlNav.eq(pos).closest("li").remove();methods.controlNav.set();slider.pagingCount>1&&slider.pagingCount!==slider.controlNav.length?slider.update(pos,action):methods.controlNav.active()}},directionNav:{setup:function(){var directionNavScaffold=$('<ul class="'+
namespace+'direction-nav"><li><a class="'+namespace+'prev" href="#">'+slider.vars.prevText+'</a></li><li><a class="'+namespace+'next" href="#">'+slider.vars.nextText+"</a></li></ul>");if(slider.controlsContainer){$(slider.controlsContainer).append(directionNavScaffold);slider.directionNav=$("."+namespace+"direction-nav li a",slider.controlsContainer)}else{slider.append(directionNavScaffold);slider.directionNav=$("."+namespace+"direction-nav li a",slider)}methods.directionNav.update();slider.directionNav.bind(eventType,
function(event){event.preventDefault();var target;if(watchedEvent===""||watchedEvent===event.type){target=$(this).hasClass(namespace+"next")?slider.getTarget("next"):slider.getTarget("prev");slider.flexAnimate(target,slider.vars.pauseOnAction)}if(watchedEvent==="")watchedEvent=event.type;methods.setToClearWatchedEvent()})},update:function(){var disabledClass=namespace+"disabled";if(slider.pagingCount===1)slider.directionNav.addClass(disabledClass).attr("tabindex","-1");else if(!slider.vars.animationLoop)if(slider.animatingTo===
0)slider.directionNav.removeClass(disabledClass).filter("."+namespace+"prev").addClass(disabledClass).attr("tabindex","-1");else if(slider.animatingTo===slider.last)slider.directionNav.removeClass(disabledClass).filter("."+namespace+"next").addClass(disabledClass).attr("tabindex","-1");else slider.directionNav.removeClass(disabledClass).removeAttr("tabindex");else slider.directionNav.removeClass(disabledClass).removeAttr("tabindex")}},pausePlay:{setup:function(){var pausePlayScaffold=$('<div class="'+
namespace+'pauseplay"><a></a></div>');if(slider.controlsContainer){slider.controlsContainer.append(pausePlayScaffold);slider.pausePlay=$("."+namespace+"pauseplay a",slider.controlsContainer)}else{slider.append(pausePlayScaffold);slider.pausePlay=$("."+namespace+"pauseplay a",slider)}methods.pausePlay.update(slider.vars.slideshow?namespace+"pause":namespace+"play");slider.pausePlay.bind(eventType,function(event){event.preventDefault();if(watchedEvent===""||watchedEvent===event.type)if($(this).hasClass(namespace+
"pause")){slider.manualPause=true;slider.manualPlay=false;slider.pause()}else{slider.manualPause=false;slider.manualPlay=true;slider.play()}if(watchedEvent==="")watchedEvent=event.type;methods.setToClearWatchedEvent()})},update:function(state){state==="play"?slider.pausePlay.removeClass(namespace+"pause").addClass(namespace+"play").html(slider.vars.playText):slider.pausePlay.removeClass(namespace+"play").addClass(namespace+"pause").html(slider.vars.pauseText)}},touch:function(){var startX,startY,
offset,cwidth,dx,startT,scrolling=false,localX=0,localY=0,accDx=0;if(!msGesture){el.addEventListener("touchstart",onTouchStart,false);function onTouchStart(e){if(slider.animating)e.preventDefault();else if(window.navigator.msPointerEnabled||e.touches.length===1){slider.pause();cwidth=vertical?slider.h:slider.w;startT=Number(new Date);localX=e.touches[0].pageX;localY=e.touches[0].pageY;offset=carousel&&(reverse&&slider.animatingTo===slider.last)?0:carousel&&reverse?slider.limit-(slider.itemW+slider.vars.itemMargin)*
slider.move*slider.animatingTo:carousel&&slider.currentSlide===slider.last?slider.limit:carousel?(slider.itemW+slider.vars.itemMargin)*slider.move*slider.currentSlide:reverse?(slider.last-slider.currentSlide+slider.cloneOffset)*cwidth:(slider.currentSlide+slider.cloneOffset)*cwidth;startX=vertical?localY:localX;startY=vertical?localX:localY;el.addEventListener("touchmove",onTouchMove,false);el.addEventListener("touchend",onTouchEnd,false)}}function onTouchMove(e){localX=e.touches[0].pageX;localY=
e.touches[0].pageY;dx=vertical?startX-localY:startX-localX;scrolling=vertical?Math.abs(dx)<Math.abs(localX-startY):Math.abs(dx)<Math.abs(localY-startY);var fxms=500;if(!scrolling||Number(new Date)-startT>fxms){e.preventDefault();if(!fade&&slider.transitions){if(!slider.vars.animationLoop)dx=dx/(slider.currentSlide===0&&dx<0||slider.currentSlide===slider.last&&dx>0?Math.abs(dx)/cwidth+2:1);slider.setProps(offset+dx,"setTouch")}}}function onTouchEnd(e){el.removeEventListener("touchmove",onTouchMove,
false);if(slider.animatingTo===slider.currentSlide&&(!scrolling&&!(dx===null))){var updateDx=reverse?-dx:dx,target=updateDx>0?slider.getTarget("next"):slider.getTarget("prev");if(slider.canAdvance(target)&&(Number(new Date)-startT<550&&Math.abs(updateDx)>50||Math.abs(updateDx)>cwidth/2))slider.flexAnimate(target,slider.vars.pauseOnAction);else if(!fade)slider.flexAnimate(slider.currentSlide,slider.vars.pauseOnAction,true)}el.removeEventListener("touchend",onTouchEnd,false);startX=null;startY=null;
dx=null;offset=null}}else{el.style.msTouchAction="none";el._gesture=new MSGesture;el._gesture.target=el;el.addEventListener("MSPointerDown",onMSPointerDown,false);el._slider=slider;el.addEventListener("MSGestureChange",onMSGestureChange,false);el.addEventListener("MSGestureEnd",onMSGestureEnd,false);function onMSPointerDown(e){e.stopPropagation();if(slider.animating)e.preventDefault();else{slider.pause();el._gesture.addPointer(e.pointerId);accDx=0;cwidth=vertical?slider.h:slider.w;startT=Number(new Date);
offset=carousel&&(reverse&&slider.animatingTo===slider.last)?0:carousel&&reverse?slider.limit-(slider.itemW+slider.vars.itemMargin)*slider.move*slider.animatingTo:carousel&&slider.currentSlide===slider.last?slider.limit:carousel?(slider.itemW+slider.vars.itemMargin)*slider.move*slider.currentSlide:reverse?(slider.last-slider.currentSlide+slider.cloneOffset)*cwidth:(slider.currentSlide+slider.cloneOffset)*cwidth}}function onMSGestureChange(e){e.stopPropagation();var slider=e.target._slider;if(!slider)return;
var transX=-e.translationX,transY=-e.translationY;accDx=accDx+(vertical?transY:transX);dx=accDx;scrolling=vertical?Math.abs(accDx)<Math.abs(-transX):Math.abs(accDx)<Math.abs(-transY);if(e.detail===e.MSGESTURE_FLAG_INERTIA){setImmediate(function(){el._gesture.stop()});return}if(!scrolling||Number(new Date)-startT>500){e.preventDefault();if(!fade&&slider.transitions){if(!slider.vars.animationLoop)dx=accDx/(slider.currentSlide===0&&accDx<0||slider.currentSlide===slider.last&&accDx>0?Math.abs(accDx)/
cwidth+2:1);slider.setProps(offset+dx,"setTouch")}}}function onMSGestureEnd(e){e.stopPropagation();var slider=e.target._slider;if(!slider)return;if(slider.animatingTo===slider.currentSlide&&(!scrolling&&!(dx===null))){var updateDx=reverse?-dx:dx,target=updateDx>0?slider.getTarget("next"):slider.getTarget("prev");if(slider.canAdvance(target)&&(Number(new Date)-startT<550&&Math.abs(updateDx)>50||Math.abs(updateDx)>cwidth/2))slider.flexAnimate(target,slider.vars.pauseOnAction);else if(!fade)slider.flexAnimate(slider.currentSlide,
slider.vars.pauseOnAction,true)}startX=null;startY=null;dx=null;offset=null;accDx=0}}},resize:function(){if(!slider.animating&&slider.is(":visible")){if(!carousel)slider.doMath();if(fade)methods.smoothHeight();else if(carousel){slider.slides.width(slider.computedW);slider.update(slider.pagingCount);slider.setProps()}else if(vertical){slider.viewport.height(slider.h);slider.setProps(slider.h,"setTotal")}else{if(slider.vars.smoothHeight)methods.smoothHeight();slider.newSlides.width(slider.computedW);
slider.setProps(slider.computedW,"setTotal")}}},smoothHeight:function(dur){if(!vertical||fade){var $obj=fade?slider:slider.viewport;dur?$obj.animate({"height":slider.slides.eq(slider.animatingTo).height()},dur):$obj.height(slider.slides.eq(slider.animatingTo).height())}},sync:function(action){var $obj=$(slider.vars.sync).data("flexslider"),target=slider.animatingTo;switch(action){case "animate":$obj.flexAnimate(target,slider.vars.pauseOnAction,false,true);break;case "play":if(!$obj.playing&&!$obj.asNav)$obj.play();
break;case "pause":$obj.pause();break}},pauseInvisible:{visProp:null,init:function(){var prefixes=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var i=0;i<prefixes.length;i++)if(prefixes[i]+"Hidden"in document)methods.pauseInvisible.visProp=prefixes[i]+"Hidden";if(methods.pauseInvisible.visProp){var evtname=methods.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(evtname,function(){if(methods.pauseInvisible.isHidden())if(slider.startTimeout)clearTimeout(slider.startTimeout);
else slider.pause();else if(slider.started)slider.play();else slider.vars.initDelay>0?setTimeout(slider.play,slider.vars.initDelay):slider.play()})}},isHidden:function(){return document[methods.pauseInvisible.visProp]||false}},setToClearWatchedEvent:function(){clearTimeout(watchedEventClearTimer);watchedEventClearTimer=setTimeout(function(){watchedEvent=""},3E3)}};slider.flexAnimate=function(target,pause,override,withSync,fromNav){if(!slider.vars.animationLoop&&target!==slider.currentSlide)slider.direction=
target>slider.currentSlide?"next":"prev";if(asNav&&slider.pagingCount===1)slider.direction=slider.currentItem<target?"next":"prev";if(!slider.animating&&((slider.canAdvance(target,fromNav)||override)&&slider.is(":visible"))){if(asNav&&withSync){var master=$(slider.vars.asNavFor).data("flexslider");slider.atEnd=target===0||target===slider.count-1;master.flexAnimate(target,true,false,true,fromNav);slider.direction=slider.currentItem<target?"next":"prev";master.direction=slider.direction;if(Math.ceil((target+
1)/slider.visible)-1!==slider.currentSlide&&target!==0){slider.currentItem=target;slider.slides.removeClass(namespace+"active-slide").eq(target).addClass(namespace+"active-slide");target=Math.floor(target/slider.visible)}else{slider.currentItem=target;slider.slides.removeClass(namespace+"active-slide").eq(target).addClass(namespace+"active-slide");return false}}slider.animating=true;slider.animatingTo=target;slider.vars.before(slider);if(pause)slider.pause();if(slider.syncExists&&!fromNav)methods.sync("animate");
if(slider.vars.controlNav)methods.controlNav.active();if(!carousel)slider.slides.removeClass(namespace+"active-slide").eq(target).addClass(namespace+"active-slide");slider.atEnd=target===0||target===slider.last;if(slider.vars.directionNav)methods.directionNav.update();if(target===slider.last){slider.vars.end(slider);if(!slider.vars.animationLoop)slider.pause()}if(!fade){var dimension=vertical?slider.slides.filter(":first").height():slider.computedW,margin,slideString,calcNext;if(carousel){margin=
slider.vars.itemMargin;calcNext=(slider.itemW+margin)*slider.move*slider.animatingTo;slideString=calcNext>slider.limit&&slider.visible!==1?slider.limit:calcNext}else if(slider.currentSlide===0&&(target===slider.count-1&&(slider.vars.animationLoop&&slider.direction!=="next")))slideString=reverse?(slider.count+slider.cloneOffset)*dimension:0;else if(slider.currentSlide===slider.last&&(target===0&&(slider.vars.animationLoop&&slider.direction!=="prev")))slideString=reverse?0:(slider.count+1)*dimension;
else slideString=reverse?(slider.count-1-target+slider.cloneOffset)*dimension:(target+slider.cloneOffset)*dimension;slider.setProps(slideString,"",slider.vars.animationSpeed);if(slider.transitions){if(!slider.vars.animationLoop||!slider.atEnd){slider.animating=false;slider.currentSlide=slider.animatingTo}slider.container.unbind("webkitTransitionEnd"+slider.vars.eventNamespace+" transitionend"+slider.vars.eventNamespace);+slider.container.bind("webkitTransitionEnd"+slider.vars.eventNamespace+" transitionend"+
slider.vars.eventNamespace,function(){slider.wrapup(dimension)})}else slider.container.animate(slider.args,slider.vars.animationSpeed,slider.vars.easing,function(){slider.wrapup(dimension)})}else if(!touch){slider.slides.eq(slider.currentSlide).css({"zIndex":1}).animate({"opacity":0},slider.vars.animationSpeed,slider.vars.easing);slider.slides.eq(target).css({"zIndex":2}).animate({"opacity":1},slider.vars.animationSpeed,slider.vars.easing,slider.wrapup)}else{slider.slides.eq(slider.currentSlide).css({"opacity":0,
"zIndex":1});slider.slides.eq(target).css({"opacity":1,"zIndex":2});slider.wrapup(dimension)}if(slider.vars.smoothHeight)methods.smoothHeight(slider.vars.animationSpeed)}};slider.wrapup=function(dimension){if(!fade&&!carousel)if(slider.currentSlide===0&&(slider.animatingTo===slider.last&&slider.vars.animationLoop))slider.setProps(dimension,"jumpEnd");else if(slider.currentSlide===slider.last&&(slider.animatingTo===0&&slider.vars.animationLoop))slider.setProps(dimension,"jumpStart");slider.animating=
false;slider.currentSlide=slider.animatingTo;slider.vars.after(slider)};slider.animateSlides=function(){if(!slider.animating&&focused)slider.flexAnimate(slider.getTarget("next"))};slider.pause=function(){clearInterval(slider.animatedSlides);slider.animatedSlides=null;slider.playing=false;if(slider.vars.pausePlay)methods.pausePlay.update("play");if(slider.syncExists)methods.sync("pause")};slider.play=function(){if(slider.playing)clearInterval(slider.animatedSlides);slider.animatedSlides=slider.animatedSlides||
setInterval(slider.animateSlides,slider.vars.slideshowSpeed);slider.started=slider.playing=true;if(slider.vars.pausePlay)methods.pausePlay.update("pause");if(slider.syncExists)methods.sync("play")};slider.stop=function(){slider.pause();slider.stopped=true};slider.canAdvance=function(target,fromNav){var last=asNav?slider.pagingCount-1:slider.last;return fromNav?true:asNav&&(slider.currentItem===slider.count-1&&(target===0&&slider.direction==="prev"))?true:asNav&&(slider.currentItem===0&&(target===
slider.pagingCount-1&&slider.direction!=="next"))?false:target===slider.currentSlide&&!asNav?false:slider.vars.animationLoop?true:slider.atEnd&&(slider.currentSlide===0&&(target===last&&slider.direction!=="next"))?false:slider.atEnd&&(slider.currentSlide===last&&(target===0&&slider.direction==="next"))?false:true};slider.getTarget=function(dir){slider.direction=dir;if(dir==="next")return slider.currentSlide===slider.last?0:slider.currentSlide+1;else return slider.currentSlide===0?slider.last:slider.currentSlide-
1};slider.setProps=function(pos,special,dur){var target=function(){var posCheck=pos?pos:(slider.itemW+slider.vars.itemMargin)*slider.move*slider.animatingTo,posCalc=function(){if(carousel)return special==="setTouch"?pos:reverse&&slider.animatingTo===slider.last?0:reverse?slider.limit-(slider.itemW+slider.vars.itemMargin)*slider.move*slider.animatingTo:slider.animatingTo===slider.last?slider.limit:posCheck;else switch(special){case "setTotal":return reverse?(slider.count-1-slider.currentSlide+slider.cloneOffset)*
pos:(slider.currentSlide+slider.cloneOffset)*pos;case "setTouch":return reverse?pos:pos;case "jumpEnd":return reverse?pos:slider.count*pos;case "jumpStart":return reverse?slider.count*pos:pos;default:return pos}}();return posCalc*-1+"px"}();if(slider.transitions){target=vertical?"translate3d(0,"+target+",0)":"translate3d("+target+",0,0)";dur=dur!==undefined?dur/1E3+"s":"0s";slider.container.css("-"+slider.pfx+"-transition-duration",dur)}slider.args[slider.prop]=target;if(slider.transitions||dur===
undefined)slider.container.css(slider.args)};slider.setup=function(type){if(!fade){var sliderOffset,arr;if(type==="init"){slider.viewport=$('<div class="'+namespace+'viewport"></div>').css({"overflow":"hidden","position":"relative"}).appendTo(slider).append(slider.container);slider.cloneCount=0;slider.cloneOffset=0;if(reverse){arr=$.makeArray(slider.slides).reverse();slider.slides=$(arr);slider.container.empty().append(slider.slides)}}if(slider.vars.animationLoop&&!carousel){slider.cloneCount=2;slider.cloneOffset=
1;if(type!=="init")slider.container.find(".clone").remove();slider.container.append(slider.slides.first().clone().addClass("clone").attr("aria-hidden","true")).prepend(slider.slides.last().clone().addClass("clone").attr("aria-hidden","true"))}slider.newSlides=$(slider.vars.selector,slider);sliderOffset=reverse?slider.count-1-slider.currentSlide+slider.cloneOffset:slider.currentSlide+slider.cloneOffset;if(vertical&&!carousel){slider.container.height((slider.count+slider.cloneCount)*200+"%").css("position",
"absolute").width("100%");setTimeout(function(){slider.newSlides.css({"display":"block"});slider.doMath();slider.viewport.height(slider.h);slider.setProps(sliderOffset*slider.h,"init")},type==="init"?100:0)}else{slider.container.width((slider.count+slider.cloneCount)*200+"%");slider.setProps(sliderOffset*slider.computedW,"init");setTimeout(function(){slider.doMath();slider.newSlides.css({"width":slider.computedW,"float":"left","display":"block"});if(slider.vars.smoothHeight)methods.smoothHeight()},
type==="init"?100:0)}}else{slider.slides.css({"width":"100%","float":"left","marginRight":"-100%","position":"relative"});if(type==="init")if(!touch)slider.slides.css({"opacity":0,"display":"block","zIndex":1}).eq(slider.currentSlide).css({"zIndex":2}).animate({"opacity":1},slider.vars.animationSpeed,slider.vars.easing);else slider.slides.css({"opacity":0,"display":"block","webkitTransition":"opacity "+slider.vars.animationSpeed/1E3+"s ease","zIndex":1}).eq(slider.currentSlide).css({"opacity":1,"zIndex":2});
if(slider.vars.smoothHeight)methods.smoothHeight()}if(!carousel)slider.slides.removeClass(namespace+"active-slide").eq(slider.currentSlide).addClass(namespace+"active-slide")};slider.doMath=function(){var slide=slider.slides.first(),slideMargin=slider.vars.itemMargin,minItems=slider.vars.minItems,maxItems=slider.vars.maxItems;slider.w=slider.viewport===undefined?slider.width():slider.viewport.width();slider.h=slide.height();slider.boxPadding=slide.outerWidth()-slide.width();if(carousel){slider.itemT=
slider.vars.itemWidth+slideMargin;slider.minW=minItems?minItems*slider.itemT:slider.w;slider.maxW=maxItems?maxItems*slider.itemT-slideMargin:slider.w;slider.itemW=slider.minW>slider.w?(slider.w-slideMargin*(minItems-1))/minItems:slider.maxW<slider.w?(slider.w-slideMargin*(maxItems-1))/maxItems:slider.vars.itemWidth>slider.w?slider.w:slider.vars.itemWidth;slider.visible=Math.floor(slider.w/slider.itemW);slider.move=slider.vars.move>0&&slider.vars.move<slider.visible?slider.vars.move:slider.visible;
slider.pagingCount=Math.ceil((slider.count-slider.visible)/slider.move+1);slider.last=slider.pagingCount-1;slider.limit=slider.pagingCount===1?0:slider.vars.itemWidth>slider.w?slider.itemW*(slider.count-1)+slideMargin*(slider.count-1):(slider.itemW+slideMargin)*slider.count-slider.w-slideMargin}else{slider.itemW=slider.w;slider.pagingCount=slider.count;slider.last=slider.count-1}slider.computedW=slider.itemW-slider.boxPadding};slider.update=function(pos,action){slider.doMath();if(!carousel){if(pos<
slider.currentSlide)slider.currentSlide+=1;else if(pos<=slider.currentSlide&&pos!==0)slider.currentSlide-=1;slider.animatingTo=slider.currentSlide}if(slider.vars.controlNav&&!slider.manualControls)if(action==="add"&&!carousel||slider.pagingCount>slider.controlNav.length)methods.controlNav.update("add");else if(action==="remove"&&!carousel||slider.pagingCount<slider.controlNav.length){if(carousel&&slider.currentSlide>slider.last){slider.currentSlide-=1;slider.animatingTo-=1}methods.controlNav.update("remove",
slider.last)}if(slider.vars.directionNav)methods.directionNav.update()};slider.addSlide=function(obj,pos){var $obj=$(obj);slider.count+=1;slider.last=slider.count-1;if(vertical&&reverse)pos!==undefined?slider.slides.eq(slider.count-pos).after($obj):slider.container.prepend($obj);else pos!==undefined?slider.slides.eq(pos).before($obj):slider.container.append($obj);slider.update(pos,"add");slider.slides=$(slider.vars.selector+":not(.clone)",slider);slider.setup();slider.vars.added(slider)};slider.removeSlide=
function(obj){var pos=isNaN(obj)?slider.slides.index($(obj)):obj;slider.count-=1;slider.last=slider.count-1;if(isNaN(obj))$(obj,slider.slides).remove();else vertical&&reverse?slider.slides.eq(slider.last).remove():slider.slides.eq(obj).remove();slider.doMath();slider.update(pos,"remove");slider.slides=$(slider.vars.selector+":not(.clone)",slider);slider.setup();slider.vars.removed(slider)};slider.destroy=function(){var classNamespace="."+slider.vars.namespace;if(slider.vars.controlNav)slider.controlNav.closest(classNamespace+
"control-nav").remove();if(slider.vars.directionNav)slider.directionNav.closest(classNamespace+"direction-nav").remove();if(slider.vars.pausePlay)slider.pausePlay.closest(classNamespace+"pauseplay").remove();slider.find(".clone").remove();slider.unbind(slider.vars.eventNamespace);if(slider.vars.animation=="slide")slider.container.unwrap();slider.container.removeAttr("style");slider.container.unbind(slider.vars.eventNamespace);slider.slides.removeAttr("style");slider.slides.filter(classNamespace+"active-slide").removeClass(slider.vars.namespace+
"active-slide");slider.slides.unbind(slider.vars.eventNamespace);$(document).unbind(slider.vars.eventNamespace+"-"+slider.id);$(window).unbind(slider.vars.eventNamespace+"-"+slider.id);slider.stop();slider.removeData("flexslider")};methods.init()};$(window).blur(function(e){focused=false}).focus(function(e){focused=true});$.flexslider.defaults={namespace:"flex-",eventNamespace:".flexslider",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:false,animationLoop:true,
smoothHeight:false,startAt:0,slideshow:true,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:false,thumbCaptions:false,pauseOnAction:true,pauseOnHover:false,pauseInvisible:true,useCSS:true,touch:true,video:false,controlNav:true,directionNav:true,prevText:"Previous",nextText:"Next",keyboard:true,multipleKeyboard:false,mousewheel:false,pausePlay:false,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,
move:0,allowOneSlide:true,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};var instanceId=0;$.fn.flexslider=function(options){if(options===undefined)options={};if(typeof options==="object")return this.each(function(){var $this=$(this),selector=options.selector?options.selector:".slides > li",$slides=$this.find(selector);if($slides.length===1&&options.allowOneSlide===true||$slides.length===0){$slides.fadeIn(400);if(options.start)options.start($this)}else if($this.data("flexslider")===
undefined)new $.flexslider(this,options,instanceId++)});else{var $slider=$(this).data("flexslider");switch(options){case "play":$slider.play();break;case "pause":$slider.pause();break;case "stop":$slider.stop();break;case "next":$slider.flexAnimate($slider.getTarget("next"),true);break;case "prev":case "previous":$slider.flexAnimate($slider.getTarget("prev"),true);break;case "destroy":$slider.destroy();break;default:if(typeof options==="number")$slider.flexAnimate(options,true)}}}})(jQuery);
;
$(document).ready(function() {
	$('#contact-form').submit(function() {
		
		var buttonCopy = $('#contact-form button').html(),
			errorMessage = $('#contact-form button').data('error-message'),
			sendingMessage = $('#contact-form button').data('sending-message'),
			okMessage = $('#contact-form button').data('ok-message'),
			hasError = false;
		
		$('#contact-form .error-message').remove();
		
		$('.requiredField').each(function() {
			if($.trim($(this).val()) == '') {
				var errorText = $(this).data('error-empty');
				$(this).parent().append('<span class="error-message" style="display:none;">'+errorText+'.</span>').find('.error-message').fadeIn('fast');
				$(this).addClass('inputError');
				hasError = true;
			} else if($(this).is("input[type='email']") || $(this).attr('name')==='email') {
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				if(!emailReg.test($.trim($(this).val()))) {
					var invalidEmail = $(this).data('error-invalid');
					$(this).parent().append('<span class="error-message" style="display:none;">'+invalidEmail+'.</span>').find('.error-message').fadeIn('fast');
					$(this).addClass('inputError');
					hasError = true;
				}
			}
		});
		
		if(hasError) {
			$('#contact-form button').html('<i class="fa fa-times"></i>'+errorMessage);
			setTimeout(function(){
				$('#contact-form button').html(buttonCopy);
			},2000);
		}
		else {
			$('#contact-form button').html('<i class="fa fa-spinner fa-spin"></i>'+sendingMessage);
			
			var formInput = $(this).serialize();
			$.post($(this).attr('action'),formInput, function(data){
				$('#contact-form button').html('<i class="fa fa-check"></i>'+okMessage);
				
				$('#contact-form')[0].reset();
				
				setTimeout(function(){
					$('#contact-form button').html(buttonCopy);
				},2000);
				
			});
		}
		
		return false;	
	});
});;
$(document).ready(function() {
	
	
	$('.grid .card').css('height', ($('.grid .card').width() / 1.5));
	$('.small-grid .card').css('height', ($('.small-grid .card').width() / 1.5)); 
	$(window).resize(function() {
		$('.grid .card').css('height', ($('.grid .card').width() / 1.5));
		$('.small-grid .card').css('height', ($('.small-grid .card').width() / 1.5));
	});
    
    
    
	/*============================================
	Page Preloader
	==============================================*/
	
	$(window).load(function(){
		$('#page-loader').fadeOut(500,function(){
			loadGmap();
		});
		
	})	
	
	/*============================================
	Header
	==============================================*/

	
	/*============================================
	Navigation Functions
	==============================================*/

	$(window).scroll(function(){
		if ($(window).scrollTop() > 50){
			$('#main-nav').addClass('scrolled');    
		}
		else{
			$('#main-nav').removeClass('scrolled');
		}
	});
	
	/*============================================
	ScrollTo Links
	==============================================*/


	/*============================================
	Skills
	==============================================*/
	$('.skills-item').each(function(){
		var perc = $(this).find('.percent').data('percent');

		$(this).data('height',perc);
	})
	
	$('.touch .skills-item').each(function(){
		$(this).css({'height':$(this).data('height')+'%'});
	})
	
	$('.touch .skills-bars').css({'opacity':1});
		
	/*============================================
	Project thumbs - Masonry
	==============================================*/
	$(window).load(function(){

		$('.gallery1 #projects-container').css({visibility:'visible'});
        $('.gallery2 #projects-container').css({visibility:'visible'});

		$('.gallery1 #projects-container').masonry({
			itemSelector: '.gallery1 .project-item:not(.filtered)',
			//columnWidth:370,
			isFitWidth: true,
			isResizable: true,
			isAnimated: !Modernizr.csstransitions,
			gutterWidth: 25
		});
        $('.gallery2 #projects-container').masonry({
			itemSelector: '.gallery2 .project-item:not(.filtered)',
			//columnWidth:370,
			isFitWidth: true,
			isResizable: true,
			isAnimated: !Modernizr.csstransitions,
			gutterWidth: 25
		});

		waypointsRefresh();
		
	});
	
	/*============================================
	Filter Projects
	==============================================*/
	$('.gallery1 #filter-works a').click(function(e){
		e.preventDefault();
		
		if($('#project-preview').hasClass('open')){
			closeProject();
		}
		
		$('.gallery1 #filter-works li').removeClass('active');
		$(this).parent('li').addClass('active');

		var category = $(this).attr('data-filter');

		$('.gallery1 .project-item').each(function(){
			if($(this).is(category)){
				$(this).removeClass('filtered');
			}
			else{
				$(this).addClass('filtered');
			}

			$('.gallery1 #projects-container').masonry('reload');
		});

		waypointsRefresh();
	});
    $('.gallery2 #filter-works a').click(function(e){
		e.preventDefault();
		
		if($('.gallery2 #project-preview').hasClass('open')){
			closeProject();
		}
		
		$('.gallery2 #filter-works li').removeClass('active');
		$(this).parent('li').addClass('active');

		var category = $(this).attr('data-filter');

		$('.gallery2 .project-item').each(function(){
			if($(this).is(category)){
				$(this).removeClass('filtered');
			}
			else{
				$(this).addClass('filtered');
			}

			$('.gallery2 #projects-container').masonry('reload');
		});

		waypointsRefresh();
	});
	
	/*============================================
	Project Preview
	==============================================*/
	$('.gallery1 .project-item').click(function(e){
		e.preventDefault();

		var elem = $(this),
			title = elem.find('.project-title').text(),
			descr = elem.find('.project-description').html(),
			slidesHtml = '<ul class="slides">',
			elemDataCont = elem.find('.project-description');

			slides = elem.find('.project-description').data('images').split(',');

		for (var i = 0; i < slides.length; ++i) {
			slidesHtml = slidesHtml + '<li><img src='+slides[i]+' alt=""></li>';
		}
		
		slidesHtml = slidesHtml + '</ul>';
		
		$('.gallery1 #project-title').text(title);
		$('.gallery1 #project-content').html(descr);
		$('.gallery1 #project-slider').html(slidesHtml);
		
		openProject('.gallery1');
		
	});
    $('.gallery2 .project-item').click(function(e){
		e.preventDefault();

		var elem = $(this),
			title = elem.find('.project-title').text(),
			descr = elem.find('.project-description').html(),
			slidesHtml = '<ul class="slides">',
			elemDataCont = elem.find('.project-description');

			slides = elem.find('.project-description').data('images').split(',');

		for (var i = 0; i < slides.length; ++i) {
			slidesHtml = slidesHtml + '<li><img src='+slides[i]+' alt=""></li>';
		}
		
		slidesHtml = slidesHtml + '</ul>';
		
		$('.gallery2 #project-title').text(title);
		$('.gallery2 #project-content').html(descr);
		$('.gallery2 #project-slider').html(slidesHtml);
		
		openProject('.gallery2');
		
	});

	function openProject(target){
		
		$(target + ' #project-preview').addClass('open');
		$(target + ' .masonry-wrapper').animate({'opacity':0},300);
		
		setTimeout(function(){
			$(target + ' #project-preview').slideDown();
			$(target + ' .masonry-wrapper').slideUp();
			
			$(target + ' #project-slider').flexslider({
				prevText: '<i class="fa fa-angle-left"></i>',
				nextText: '<i class="fa fa-angle-right"></i>',
				animation: 'slide',
				slideshowSpeed: 3000,
				useCSS: true,
				controlNav: true, 
				pauseOnAction: false, 
				pauseOnHover: true,
				smoothHeight: false,
				start: function(){
					$(window).trigger('resize');
					$(target + ' #project-preview').animate({'opacity':1},300);
				}
			});
			
		},300);
		
	}
	
	function closeProject(target){
	
		$(target + ' #project-preview').removeClass('open');
		$(target + ' #project-preview').animate({'opacity':0},300);
		
		setTimeout(function(){
			$(target + ' .masonry-wrapper').slideDown();
			$(target + ' #project-preview').slideUp();
				
			$(target + ' #project-slider').flexslider('destroy');
			$(target + ' .masonry-wrapper').animate({'opacity':1},300);
			
			
		},300);
		
		setTimeout(function(){
			$(target + ' #projects-container').masonry('reload');
		},500)
	}
	
	$('.gallery1 .close-preview').click(function(){
		closeProject('.gallery1');
	})
    $('.gallery2 .close-preview').click(function(){
		closeProject('.gallery2');
	})
	
	
	/*============================================
	Contact Map
	==============================================*/
	function loadGmap(){
	
	if($('#gmap').length){
	
		var map;
		var mapstyles = [ { "stylers": [ { "saturation": -100 } ] } ];
		
		var infoWindow = new google.maps.InfoWindow;
		
		var pointLatLng = new google.maps.LatLng(mapPoint.lat, mapPoint.lng);

		var mapOptions = {
			zoom: mapPoint.zoom,
			center: pointLatLng,
			zoomControl : true,
			panControl : false,
			streetViewControl : false,
			mapTypeControl: false,
			overviewMapControl: false,
			scrollwheel: false,
			styles: mapstyles
		}
		
		map = new google.maps.Map(document.getElementById("gmap"), mapOptions);
		
		var marker = new google.maps.Marker({
			position: pointLatLng, 
			map: map, 
			title:mapPoint.linkText,
			icon: mapPoint.icon
		});
		
		var mapLink = 'https://www.google.com/maps/preview?ll='+mapPoint.lat+','+mapPoint.lng+'&z=14&q='+mapPoint.mapAddress;
		
		var html = '<div class="infowin">'
				+ mapPoint.infoText
				+ '<a href="'+mapLink+'" target="_blank">'+mapPoint.linkText+'</a>'
				+ '</div>';

		google.maps.event.addListener(marker, 'mouseover', function() {
			infoWindow.setContent(html);
			infoWindow.open(map, marker);
		});

		google.maps.event.addListener(marker, 'click', function() {
			window.open(mapLink,'_blank');
		});
		
	}
	}
	/*============================================
	Waypoints Animations
	==============================================*/
	$('#skills').waypoint(function(){
	
		$('.skills-item').each(function(){
			$(this).css({'height':$(this).data('height')+'%'});
		})
		
		$('.skills-bars').css({'opacity':1});
		
	},{offset:'40%'});
	
	$('.scrollimation').waypoint(function(){
		$(this).addClass('in');
	},{offset:'90%'});
	
	/*============================================
	Resize Functions
	==============================================*/
	var thumbSize = $('.project-item').width();
	
	$(window).resize(function(){
		//$('#home').height($(window).height()+50);
		
		if($('.project-item').width() != thumbSize){
		
			$('#projects-container').masonry('reload');
			thumbSize = $('.project-item').width();
		}
		
		waypointsRefresh();
	});
	
	
	/*============================================
	Refresh waypoints function
	==============================================*/
	function waypointsRefresh(){
		setTimeout(function(){
			$.waypoints('refresh');
		},1000);
	}
});
	/*============================================
	test
	==============================================*/

$("#main-nav .navbar-toggle").on("click", function (event) {
	$("#site-nav").toggleClass("in");
	$("#site-nav .navbar-nav").toggleClass("in");

});

$(window).scroll(function(){
	var $sections = $('.smooth');
	$sections.each(function(i, el){
		var top  = $(el).offset().top-100;
		var scroll = $(window).scrollTop();
		var id = $(el).attr('id');
		if( scroll > top ){
			$('.navbar-nav > li').removeClass('active');
			$('a[href="#'+id+'"]').parent().addClass('active');
		}
		if( scroll < $('#about').offset().top-100 ) {
			$('.navbar-nav > li').removeClass('active');
		}
	})
});

$(".navbar-nav").on("click","a", function (event) {
    // исключаем стандартную реакцию браузера
    event.preventDefault();

    // получем идентификатор блока из атрибута href
    var id  = $(this).attr('href'),

    // находим высоту, на которой расположен блок
	top = $(id).offset().top;
	
    // анимируем переход к блоку, время: 800 мс
    $('body,html').animate({scrollTop: top - 75}, 800);
	$("#site-nav").removeClass("in");
	$("#site-nav .navbar-nav").removeClass("in");
});

;