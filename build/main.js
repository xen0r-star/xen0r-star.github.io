(()=>{var n={773:()=>{var n,e,t=document.getElementById("Bar"),r=document.getElementById("Progress");t.style.width=0,e=parseInt(t.style.width),n=setInterval((function(){e<100&&e<100?(e++,t.style.width=e+"%",r.innerText=t.style.width):e>=100?(clearInterval(n),setTimeout((function(){document.getElementById("Loading").style.animation="LoadingSlip 2s forwards"}),1e3)):clearInterval(n)}),20)},950:()=>{var n=new THREE.WebGLRenderer({canvas:document.getElementById("mainCanvas")});n.setClearColor(0);var e=new THREE.Scene,t=new THREE.PerspectiveCamera(45,4/3,1,1e3);t.position.set(0,0,5),t.lookAt(new THREE.Vector3(0,0,0)),e.add(t);var r=new THREE.MeshBasicMaterial({color:16777215}),o=new THREE.PlaneGeometry(1.5,1.5),i=new THREE.Mesh(o,r);i.position.x=1,e.add(i);var a=new THREE.Geometry;a.vertices=[new THREE.Vector3(0,-.8,0),new THREE.Vector3(-2,-.8,0),new THREE.Vector3(-1,.8,0)],a.faces.push(new THREE.Face3(0,2,1));var s=new THREE.Mesh(a,r);e.add(s),n.render(e,t)},917:()=>{var n=document.getElementById("Bulb"),e=document.documentElement.style,t=document.getElementById("BulbLight"),r=!0;n.addEventListener("click",(function(){r&&(r=!1,n.style.animation="BulbClicked 1s forwards",null!=t.getAttribute("fill")?(t.removeAttribute("fill"),e.setProperty("--Background","#000000"),e.setProperty("--Color","#ffffff"),e.setProperty("--Element","#ffffff"),e.setProperty("--ColorBulbDash","#00000000")):(t.setAttribute("fill","#F9B810"),e.setProperty("--Background","#ffffff"),e.setProperty("--Color","#000000"),e.setProperty("--Element","#000000"),e.setProperty("--ColorBulbDash","#000000")))})),n.addEventListener("animationend",(function(){r=!0,n.style.animation="none"}))},141:()=>{document.addEventListener("contextmenu",(function(n){n.preventDefault()}));var n=!1;!function e(){if(n){var t=0;document.getElementById("IconX").addEventListener("contextmenu",(function(){3==++t&&(console.log("click click click 2"),t=0)})),n=!n,e()}else{var r=function(){document.getElementById("AnimedTwitter").innerHTML=a?'<path fill-rule="evenodd" clip-rule="evenodd" d="M77.5064 116.049C67.1153 123.284 54.6579 127.637 40.254 127.637C25.98 127.656 12.007 122.609 -0.000999451 113.176C2.077 113.472 4.171 113.622 6.265 113.622C18.089 113.652 29.577 108.82 38.882 99.9019C41.8445 109.434 51.9138 115.661 63.9316 115.401C62.1783 112.275 61.3361 108.72 61.5005 105.14C64.7441 110.766 70.6085 114.571 77.5064 116.049ZM84.274 64.6233C62.4293 72.7459 52.5504 80.1869 38.882 99.9019C42.1193 74.7582 47.2731 61.5692 63.035 39.8319C60.352 25.6749 65.762 11.0749 76.234 4.21494C86.711 -2.64506 99.645 -0.0510654 107.781 10.5349C113.664 9.11393 119.305 6.47694 124.461 2.73394C122.504 10.1719 118.402 16.4879 112.922 20.5079C118.129 19.7499 123.21 18.0469 128 15.4449C124.477 21.8979 120.039 27.5309 114.898 32.0779C114.973 33.4569 114.973 34.8439 114.973 36.2339C114.973 54.0721 110.308 73.0603 101.313 89.0813C93.4752 82.3775 87.6044 74.0515 84.274 64.6233Z" fill="var(--Element)" /><path d="M93.5164 115.402L93.8664 115.302C91.1604 113.054 89.1282 110.287 87.9056 107.197C87.7735 106.863 87.6508 106.525 87.5378 106.184C87.8076 106.371 88.0811 106.553 88.3582 106.729C99.2447 113.647 115.581 111.943 126.134 102.64C116.601 99.6068 108.198 94.9699 101.313 89.0813C93.4752 82.3775 87.6044 74.0515 84.274 64.6233C62.4293 72.7459 52.5504 80.1869 38.882 99.9019C41.8445 109.434 51.9138 115.661 63.9316 115.401C62.1783 112.275 61.3361 108.72 61.5005 105.14C64.7441 110.766 70.6085 114.571 77.5064 116.049C82.5019 117.118 88.0395 116.967 93.5164 115.402Z" fill="var(--Element)" />':'<path d="M40.253 127.461C88.558 127.461 114.973 78.543 114.973 36.097C114.973 34.707 114.973 33.32 114.898 31.941C120.039 27.394 124.477 21.761 128 15.308C123.21 17.91 118.129 19.613 112.922 20.371C118.402 16.351 122.504 10.035 124.461 2.59697C119.305 6.33997 113.664 8.97697 107.781 10.398C99.645 -0.188028 86.711 -2.78203 76.234 4.07797C65.762 10.938 60.352 25.538 63.035 39.695C41.922 38.402 22.246 26.199 8.91499 6.13297C1.93299 20.803 5.48699 39.586 17.022 49.023C12.874 48.851 8.81499 47.468 5.18999 44.992V45.402C5.18999 60.675 13.976 73.84 26.21 76.894C22.3841 78.18 18.2744 78.3681 14.347 77.437C17.784 90.531 27.644 99.507 38.882 99.765C29.577 108.683 18.089 113.515 6.26499 113.485C4.17099 113.485 2.07699 113.335 -0.00100708 113.039C12.007 122.472 25.979 127.48 40.253 127.461Z" fill="var(--Element)" />',a=!a},o=0,i=document.getElementById("IconTwitter");i.addEventListener("contextmenu",(function(){3==++o&&(console.log("click click click"),o=0,intervalIDTwitter=setInterval(r,150),document.getElementById("IconTwitterLien").innerHTML='\n                    <div id="IconTwitterDiv">\n                        <svg id="AnimedTwitter" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <path d="M40.253 127.461C88.558 127.461 114.973 78.543 114.973 36.097C114.973 34.707 114.973 33.32 114.898 31.941C120.039 27.394 124.477 21.761 128 15.308C123.21 17.91 118.129 19.613 112.922 20.371C118.402 16.351 122.504 10.035 124.461 2.59697C119.305 6.33997 113.664 8.97697 107.781 10.398C99.645 -0.188028 86.711 -2.78203 76.234 4.07797C65.762 10.938 60.352 25.538 63.035 39.695C41.922 38.402 22.246 26.199 8.91499 6.13297C1.93299 20.803 5.48699 39.586 17.022 49.023C12.874 48.851 8.81499 47.468 5.18999 44.992V45.402C5.18999 60.675 13.976 73.84 26.21 76.894C22.3841 78.18 18.2744 78.3681 14.347 77.437C17.784 90.531 27.644 99.507 38.882 99.765C29.577 108.683 18.089 113.515 6.26499 113.485C4.17099 113.485 2.07699 113.335 -0.00100708 113.039C12.007 122.472 25.979 127.48 40.253 127.461Z" fill="var(--Element)" />\n                        </svg>\n                    </div>\n                ',document.getElementById("IconTwitterDiv").style.animation="TwitterToX "+s+"ms forwards",setTimeout((function(){clearInterval(intervalIDTwitter),document.getElementById("IconTwitterLien").innerHTML='<svg id="IconX" style="width: 2.5vw; height: 2.5vw; transform: translate(0, 150%);" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path style="transition: all ease-in-out .25s;" d="M0.312077 4L49.7314 70.0784L0 123.803H11.1926L54.7323 76.7663L89.9113 123.803H128L75.8001 54.0077L122.09 4H110.897L70.7992 47.3198L38.4008 4H0.312077ZM16.7716 12.2444H34.2696L111.538 115.557H94.0399L16.7716 12.2444Z" fill="var(--Element)"/></svg>',document.getElementById("IconX").style.animation="TwitterToX3 .5s forwards"}),s))})),i.addEventListener("mouseup",(function(){setTimeout((function(){o=0}),1e3)}));var a=!0,s=1500;n=!n,e()}}()},827:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,'#Loading {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  z-index: 100;\n  display: block;\n  background-color: var(--Background);\n  translate: all 1s ease-in-out;\n}\n\n@keyframes LoadingSlip {\n  0% {\n    transform: translateY(0%);\n  }\n\n  100% {\n    transform: translateY(-100%);\n  }\n}\n\n#ProgressBarContent {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#ProgressText::before {\n  font-family: \'Lilita One\';\n  color: var(--Color);\n  line-height: normal;\n  letter-spacing: 1vw;\n  font-size: 3vw;\n  animation: loading 1.5s infinite steps(3);\n  content: "Chargement";\n  white-space: nowrap;\n  display: block;\n  width: 30vw;\n  text-align: left;\n}\n\n@keyframes loading {\n  0% {\n    content: "Chargement";\n  }\n\n  33% {\n    content: "Chargement.";\n  }\n\n  66% {\n    content: "Chargement..";\n  }\n\n  100% {\n    content: "Chargement...";\n  }\n}\n\n#ProgressBar {\n  width: 50%;\n  height: 6vh;\n  border: solid var(--Element) 1vh;\n  border-radius: 100vw;\n  box-sizing: border-box;\n  padding: 0.5vw;\n  margin: 1%;\n}\n\n#Bar {\n  background: var(--Element);\n  height: 100%;\n  border-radius: 100vw;\n  transition: all linear .1s;\n}\n\n#Progress {\n  font-family: \'Lilita One\';\n  color: var(--Color);\n  line-height: normal;\n  letter-spacing: 1vw;\n  font-size: 3vw;\n  white-space: nowrap;\n  text-align: center;\n}\n',""]);const s=a},604:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"html {\n    height: 100%;\n    width: 100%;\n}\n\nbody { \n    margin: 0; \n    position: relative;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n}\n\n:root {\n    --Background: #ffffff;\n    --Color: #000000;\n    --Element: #000000; \n    --ColorBulbDash: #000000;\n}\n\ncanvas {\n    height: 100% !important;\n    width: 100% !important;\n}\n\n#Icon {\n    position: absolute;\n    height: 100%;\n    bottom: 0;\n    right: 0;\n    margin: 20px;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n    z-index: 100;\n}\n  \n#Icon > a {\n    width: 2.5vw;\n    height: 2.5vw;\n    margin: 0 10px;\n    cursor: pointer;\n}\n\n#IconGithub:hover {\n    transform: scaleX(-1);\n}\n\n#IconTwitter:hover {\n    transform: scaleX(-1);\n}\n\n#IconX:hover {\n    transform: scaleX(-1);\n}\n\n#IconInstagram:hover {\n    transform: scaleX(-1);\n}\n\n#IconTikTok:hover {\n    transform: scaleX(-1);\n}\n\n#IconTwitterDiv {\n    width: 2.5vw; \n    height: 2.5vw; \n    rotate: 15deg; \n    position: absolute;\n    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n@keyframes TwitterToX {\n    0% {\n        transform: translate(0, 0);\n    }\n  \n    100% {\n        transform: translate(260px, -280px);\n    }\n}\n\n@keyframes TwitterToX2 {\n    0% {\n        transform: translate(260px, -280px);\n    }\n  \n    100% {\n        transform: translate(-4000%, -600%);\n    }\n}\n\n@keyframes TwitterToX3 {\n    0% {\n        transform: translate(0, 150%)\n    }\n\n    100% {\n        transform: translate(0, 0)\n    }\n}\n\n\n\n\n#Bulb {\n    width: 5%;\n    right: 0;\n    position: absolute;\n    margin: 0 20px 0 0;\n    top: -5vw;\n    cursor: pointer;\n    z-index: 100;\n}\n\n@keyframes BulbClicked {\n    0% {\n        top: -5vw;\n    }\n\n    50% {\n        top: 0vw;\n    }\n\n    100% {\n        top: -5vw;\n    }\n}",""]);const s=a},348:(n,e,t)=>{"use strict";t.d(e,{Z:()=>f});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),s=t(667),l=t.n(s),c=new URL(t(205),t.b),d=a()(o()),u=l()(c);d.push([n.id,`@font-face {\n    font-family: 'Lilita One';\n    src: url(${u}) format('truetype');\n}\n  `,""]);const f=d},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var l=n[s],c=r.base?l[0]+r.base:l[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var f=t(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)e[f].references++,e[f].updater(m);else{var p=o(m,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:p,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var l=r(n,o),c=0;c<i.length;c++){var d=t(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=l}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},205:(n,e,t)=>{"use strict";n.exports=t.p+"e970d047065ed950bb8c.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";t(205),t(773),t(950),t(917),t(141);var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),l=t.n(s),c=t(216),d=t.n(c),u=t(589),f=t.n(u),m=t(604),p={};p.styleTagTransform=f(),p.setAttributes=l(),p.insert=a().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=d(),e()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals;var v=t(827),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;var g=t(348),w={};w.styleTagTransform=f(),w.setAttributes=l(),w.insert=a().bind(null,"head"),w.domAPI=o(),w.insertStyleElement=d(),e()(g.Z,w),g.Z&&g.Z.locals&&g.Z.locals})()})();