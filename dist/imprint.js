!function(n){var r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)e.d(t,o,function(r){return n[r]}.bind(null,o));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=24)}({0:function(n,r,e){var t=e(1),o=e(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},1:function(n,r,e){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),a=[];function c(n){for(var r=-1,e=0;e<a.length;e++)if(a[e].identifier===n){r=e;break}return r}function s(n,r){for(var e={},t=[],o=0;o<n.length;o++){var i=n[o],s=r.base?i[0]+r.base:i[0],l=e[s]||0,u="".concat(s," ").concat(l);e[s]=l+1;var f=c(u),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:u,updater:g(d,r),references:1}),t.push(u)}return t}function l(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var u,f=(u=[],function(n,r){return u[n]=r,u.filter(Boolean).join("\n")});function d(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=f(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function p(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var b=null,m=0;function g(n,r){var e,t,o;if(r.singleton){var i=m++;e=b||(b=l(r)),t=d.bind(null,e,i,!1),o=d.bind(null,e,i,!0)}else e=l(r),t=p.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var e=s(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=c(e[t]);a[o].references--}for(var i=s(n,r),l=0;l<e.length;l++){var u=c(e[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}e=i}}}},2:function(n,r,e){(r=e(3)(!1)).push([n.i,'/* reset */\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: none;\r\n\tbox-sizing: border-box;\r\n\tfont: inherit;\r\n\ttext: inherit;\r\n\tcolor: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: inherit;\r\n}\r\nhtml {\r\n\tbox-sizing: border-box;\r\n}\r\nheader, main, footer, section, figure {\r\n\tdisplay: block;\r\n}\r\na, img {\r\n\tdisplay: inline-block;\r\n}\r\np a {\r\n\tdisplay: inline;\r\n}\r\nhtml {\r\n\tfont-weight: normal;\r\n\tfont-style: normal;\r\n\tfont-size: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-ms-text-size-adjust: 100%;\r\n}\r\nbody {\r\n\ttext-rendering: optimizeLegibility;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n\tline-height: 1;\r\n}\r\nfigure, img {\r\n\tmax-width: 100%;\r\n}\r\nimg {\r\n\t-ms-interpolation-mode: bicubic;\r\n}\r\n\r\n/* basics */\r\nhtml {\r\n\tfont-size: 1.2rem;\r\n}\r\n\r\n/* typography */\r\nhtml {\r\n\tfont-weight: bold;\r\n\tfont-family: "Helvetica", Arial, sans-serif;\r\n}\r\n\r\n/* colors */\r\nsection.color-beige,\r\nsection.color-beige .color {\r\n\tbackground-color: #e7dbcb;\r\n}\r\nsection.color-red,\r\nsection.color-red .color {\r\n\tbackground-color: #dda29b;\r\n}\r\nsection.color-blue,\r\nsection.color-blue .color {\r\n\tbackground-color: #8ad0f2;\r\n}\r\n\r\nsection .color {\r\n\tdisplay: none;\r\n}\r\n\r\n/* images */\r\nimg {\r\n\twidth: 100%;\r\n\theight: auto;\r\n\tvertical-align: bottom;\r\n}\r\n\r\n/* layout */\r\n\r\n/* index page */\r\n\r\nheader,\r\nsection .text {\r\n\tpadding: 1rem;\r\n}\r\n\r\nfooter {\r\n\tpadding: 1rem;\r\n\tbackground-color: #e7dbcb;\r\n}\r\n\r\n/* footer */\r\nfooter {\r\n}\r\nfooter address {\r\n\tcolor: #fff;\r\n}\r\nfooter address a.email {\r\n\tcolor: #000;\r\n}\r\n\r\n/* imprint page */\r\n',""]),n.exports=r},24:function(n,r,e){"use strict";e.r(r);e(0)},3:function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var o=(a=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var a,c,s;return[e].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),r.push(s))}},r}}});