parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"krre":[function(require,module,exports) {

},{}],"SvwL":[function(require,module,exports) {
"use strict";function e(e){return fetch(`https://restcountries.com/v3.1/name/${e}`).then(e=>{if(!e.ok)throw Error(e.statusText);return e.json()})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.fetchUser=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./css/styles.css");var e=require("./fetchCountries");const t=300,i=document.querySelector(".country-list");console.log();let l=null;const n=document.querySelector("#search-box");n.addEventListener("input",t=>{l=t.currentTarget.value,(0,e.fetchUser)(l).then(function(e){if(console.log(e.length),1===e.length){const t=e.map(({name:e,flags:t,area:i})=>`<li style="display: flex;align-items: center;"><img src="${t.png}" alt="${e.official}" width='25px'>${e.official}</li>Area: ${i}<p></p>`).join("");i.innerHTML=t}else{const t=e.map(({name:e,flags:t})=>`<li style="display: flex;align-items: center;"><img src="${t.png}" alt="${e.official}" width='25px'>${e.official}</li>`).join("");i.innerHTML=t}})});
},{"./css/styles.css":"krre","./fetchCountries":"SvwL"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-10/src.019be47a.js.map