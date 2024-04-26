"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9574],{5961:(B,A,f)=>{f.d(A,{GW:()=>g,dk:()=>O,oK:()=>l});var l=function(c){return c.Prompt="PROMPT",c.Camera="CAMERA",c.Photos="PHOTOS",c}(l||{}),g=function(c){return c.Rear="REAR",c.Front="FRONT",c}(g||{}),O=function(c){return c.Uri="uri",c.Base64="base64",c.DataUrl="dataUrl",c}(O||{})},8162:(B,A,f)=>{f.d(A,{V1:()=>O,dk:()=>g.dk,oK:()=>g.oK});var l=f(2726),g=f(5961);const O=(0,l.fo)("Camera",{web:()=>f.e(6468).then(f.bind(f,6468)).then(c=>new c.CameraWeb)})},2726:(B,A,f)=>{f.d(A,{Uw:()=>S,fo:()=>C,xz:()=>s});var l=f(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var D=function(r){return r.Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE",r}(D||{});class s extends Error{constructor(e,t,o){super(e),this.message=e,this.code=t,this.data=o}}const u=r=>{var e,t,o,a,n;const d=r.CapacitorCustomPlatform||null,i=r.Capacitor||{},P=i.Plugins=i.Plugins||{},v=r.CapacitorPlatforms,$=(null===(e=null==v?void 0:v.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==d?d.name:(r=>{var e,t;return null!=r&&r.androidBridge?"android":null!==(t=null===(e=null==r?void 0:r.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(r)),ae=(null===(t=null==v?void 0:v.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==$()),ce=(null===(o=null==v?void 0:v.currentPlatform)||void 0===o?void 0:o.isPluginAvailable)||(m=>{const p=J.get(m);return!!(null!=p&&p.platforms.has($())||q(m))}),q=(null===(a=null==v?void 0:v.currentPlatform)||void 0===a?void 0:a.getPluginHeader)||(m=>{var p;return null===(p=i.PluginHeaders)||void 0===p?void 0:p.find(F=>F.name===m)}),J=new Map,he=(null===(n=null==v?void 0:v.currentPlatform)||void 0===n?void 0:n.registerPlugin)||((m,p={})=>{const F=J.get(m);if(F)return console.warn(`Capacitor plugin "${m}" already registered. Cannot register plugins twice.`),F.proxy;const k=$(),I=q(m);let x;const ve=function(){var _=(0,l.Z)(function*(){return!x&&k in p?x=x="function"==typeof p[k]?yield p[k]():p[k]:null!==d&&!x&&"web"in p&&(x=x="function"==typeof p.web?yield p.web():p.web),x});return function(){return _.apply(this,arguments)}}(),V=_=>{let b;const U=(...R)=>{const j=ve().then(L=>{const T=((_,b)=>{var U,R;if(!I){if(_)return null===(R=_[b])||void 0===R?void 0:R.bind(_);throw new s(`"${m}" plugin is not implemented on ${k}`,D.Unimplemented)}{const j=null==I?void 0:I.methods.find(L=>b===L.name);if(j)return"promise"===j.rtype?L=>i.nativePromise(m,b.toString(),L):(L,T)=>i.nativeCallback(m,b.toString(),L,T);if(_)return null===(U=_[b])||void 0===U?void 0:U.bind(_)}})(L,_);if(T){const H=T(...R);return b=null==H?void 0:H.remove,H}throw new s(`"${m}.${_}()" is not implemented on ${k}`,D.Unimplemented)});return"addListener"===_&&(j.remove=(0,l.Z)(function*(){return b()})),j};return U.toString=()=>`${_.toString()}() { [capacitor code] }`,Object.defineProperty(U,"name",{value:_,writable:!1,configurable:!1}),U},X=V("addListener"),ee=V("removeListener"),pe=(_,b)=>{const U=X({eventName:_},b),R=function(){var L=(0,l.Z)(function*(){const T=yield U;ee({eventName:_,callbackId:T},b)});return function(){return L.apply(this,arguments)}}(),j=new Promise(L=>U.then(()=>L({remove:R})));return j.remove=(0,l.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield R()}),j},Y=new Proxy({},{get(_,b){switch(b){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return I?pe:X;case"removeListener":return ee;default:return V(b)}}});return P[m]=Y,J.set(m,{name:m,proxy:Y,platforms:new Set([...Object.keys(p),...I?[k]:[]])}),Y});return i.convertFileSrc||(i.convertFileSrc=m=>m),i.getPlatform=$,i.handleError=m=>r.console.error(m),i.isNativePlatform=ae,i.isPluginAvailable=ce,i.pluginMethodNoop=(m,p,F)=>Promise.reject(`${F} does not have an implementation of "${p}".`),i.registerPlugin=he,i.Exception=s,i.DEBUG=!!i.DEBUG,i.isLoggingEnabled=!!i.isLoggingEnabled,i.platform=i.getPlatform(),i.isNative=i.isNativePlatform(),i},w=(r=>r.Capacitor=u(r))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),C=w.registerPlugin;class S{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var o=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const n=this.windowListeners[e];n&&!n.registered&&this.addWindowListener(n);const d=function(){var P=(0,l.Z)(function*(){return o.removeListener(e,t)});return function(){return P.apply(this,arguments)}}(),i=Promise.resolve({remove:d});return Object.defineProperty(i,"remove",{value:(P=(0,l.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield d()}),function(){return P.apply(this,arguments)})}),i;var P}removeAllListeners(){var e=this;return(0,l.Z)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const o=this.listeners[e];o&&o.forEach(a=>a(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:o=>{this.notifyListeners(t,o)}}}unimplemented(e="not implemented"){return new w.Exception(e,D.Unimplemented)}unavailable(e="not available"){return new w.Exception(e,D.Unavailable)}removeListener(e,t){var o=this;return(0,l.Z)(function*(){const a=o.listeners[e];if(!a)return;const n=a.indexOf(t);o.listeners[e].splice(n,1),o.listeners[e].length||o.removeWindowListener(o.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const N=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Q=r=>r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class te extends S{getCookies(){return(0,l.Z)(function*(){const e=document.cookie,t={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[a,n]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");a=Q(a).trim(),n=Q(n).trim(),t[a]=n}),t})()}setCookie(e){return(0,l.Z)(function*(){try{const t=N(e.key),o=N(e.value),a=`; expires=${(e.expires||"").replace("expires=","")}`,n=(e.path||"/").replace("path=",""),d=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${o||""}${a}; path=${n}; ${d};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,l.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,l.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,l.Z)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}C("CapacitorCookies",{web:()=>new te});const re=function(){var r=(0,l.Z)(function*(e){return new Promise((t,o)=>{const a=new FileReader;a.onload=()=>{const n=a.result;t(n.indexOf(",")>=0?n.split(",")[1]:n)},a.onerror=n=>o(n),a.readAsDataURL(e)})});return function(t){return r.apply(this,arguments)}}();class se extends S{request(e){return(0,l.Z)(function*(){const t=((r,e={})=>{const t=Object.assign({method:r.method||"GET",headers:r.headers},e),a=((r={})=>{const e=Object.keys(r);return Object.keys(r).map(a=>a.toLocaleLowerCase()).reduce((a,n,d)=>(a[n]=r[e[d]],a),{})})(r.headers)["content-type"]||"";if("string"==typeof r.data)t.body=r.data;else if(a.includes("application/x-www-form-urlencoded")){const n=new URLSearchParams;for(const[d,i]of Object.entries(r.data||{}))n.set(d,i);t.body=n.toString()}else if(a.includes("multipart/form-data")){const n=new FormData;if(r.data instanceof FormData)r.data.forEach((i,P)=>{n.append(P,i)});else for(const i of Object.keys(r.data))n.append(i,r.data[i]);t.body=n;const d=new Headers(t.headers);d.delete("content-type"),t.headers=d}else(a.includes("application/json")||"object"==typeof r.data)&&(t.body=JSON.stringify(r.data));return t})(e,e.webFetchExtra),o=((r,e=!0)=>r?Object.entries(r).reduce((o,a)=>{const[n,d]=a;let i,P;return Array.isArray(d)?(P="",d.forEach(v=>{i=e?encodeURIComponent(v):v,P+=`${n}=${i}&`}),P.slice(0,-1)):(i=e?encodeURIComponent(d):d,P=`${n}=${i}`),`${o}&${P}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),a=o?`${e.url}?${o}`:e.url,n=yield fetch(a,t),d=n.headers.get("content-type")||"";let P,v,{responseType:i="text"}=n.ok?e:{};switch(d.includes("application/json")&&(i="json"),i){case"arraybuffer":case"blob":v=yield n.blob(),P=yield re(v);break;case"json":P=yield n.json();break;default:P=yield n.text()}const G={};return n.headers.forEach(($,z)=>{G[z]=$}),{data:P,headers:G,status:n.status,url:n.url}})()}get(e){var t=this;return(0,l.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,l.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,l.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,l.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,l.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}C("CapacitorHttp",{web:()=>new se})},8969:(B,A,f)=>{f.d(A,{j:()=>K});var l=f(5861),g=f(9212),O=f(7213),c=f(7104);let K=(()=>{var y;class W{constructor(s,h){this.ngFireAuth=s,this.firestore=h}registerUser(s,h,u,E){var w=this;return(0,l.Z)(function*(){try{var C,Z;const M=yield w.ngFireAuth.createUserWithEmailAndPassword(s,h);return yield null===(C=M.user)||void 0===C?void 0:C.updateProfile({displayName:u}),yield w.firestore.collection("users").doc(null===(Z=M.user)||void 0===Z?void 0:Z.uid).set({phoneNumber:E}),M}catch(M){throw M}})()}getUserCode(){var s=this;return(0,l.Z)(function*(){try{const h=yield s.ngFireAuth.currentUser;if(h){const E=(yield s.firestore.collection("users").doc(h.uid).get().toPromise()).data();if(E&&"object"==typeof E&&"phoneNumber"in E)return E.phoneNumber}}catch(h){return console.error("Error getting user phone number:",h),null}})()}loginUser(s,h){var u=this;return(0,l.Z)(function*(){return yield u.ngFireAuth.signInWithEmailAndPassword(s,h)})()}resetPassword(s){var h=this;return(0,l.Z)(function*(){return yield h.ngFireAuth.sendPasswordResetEmail(s)})()}signOut(){var s=this;return(0,l.Z)(function*(){return yield s.ngFireAuth.signOut()})()}getProlfile(){var s=this;return(0,l.Z)(function*(){return yield s.ngFireAuth.currentUser})()}getCurrentUser(){var s=this;return(0,l.Z)(function*(){return s.ngFireAuth.user})()}}return(y=W).\u0275fac=function(s){return new(s||y)(g.LFG(O.zQ),g.LFG(c.ST))},y.\u0275prov=g.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),W})()},1960:(B,A,f)=>{f.d(A,{O:()=>K});var l=f(5861),g=f(3960),O=f(5017),c=f(9212);let K=(()=>{var y;class W{constructor(s,h){this.firestore=s,this.storage=h}uploadRegistro(s,h){var u=this;return(0,l.Z)(function*(){if(yield u.verificarExistenciaClave(s.clavex))return void console.log("Clave ya existe, no se puede guardar el registro.");const w=(0,g.hJ)(u.firestore,"registros");if("object"==typeof s&&null!==s)try{const C=yield(0,g.ET)(w,s);u.uploadPhoto(C.id,h,s)}catch{}})()}verificarExistenciaClave(s){var h=this;return(0,l.Z)(function*(){try{const u=(0,g.hJ)(h.firestore,"registros"),E=(0,g.IO)(u,(0,g.ar)("clavex","==",s));return!(yield(0,g.PL)(E)).empty}catch{return!1}})()}getDataUsers(){const s=(0,g.hJ)(this.firestore,"registros");return(0,g.BS)(s,{idField:"id"})}uploadPhoto(s,h,u){var E=this;return(0,l.Z)(function*(){try{const C=(0,O.iH)(E.storage,`dataUser/${s}/img.png`);yield(0,O.sf)(C,h,"base64");const Z=yield(0,O.Jt)(C),M=(0,g.JU)(E.firestore,`registros/${s}`),S={latitude:u.latitude,longitude:u.longitude,code:u.code,nombre:u.nombre,query:u.query,colonia:u.colonia,telefono:u.telefono,clavex:u.clavex,curp:u.curp,municipio:u.municipio,imageUrl:Z};return yield(0,g.pl)(M,S),!0}catch{return null}})()}}return(y=W).\u0275fac=function(s){return new(s||y)(c.LFG(g.gg),c.LFG(O.Ke))},y.\u0275prov=c.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),W})()}}]);