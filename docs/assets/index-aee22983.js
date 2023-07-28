var e0=Object.defineProperty;var t0=(t,e,n)=>e in t?e0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Na=(t,e,n)=>(t0(t,typeof e!="symbol"?e+"":e,n),n);function n0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function r0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var am={exports:{}},Kl={},um={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Js=Symbol.for("react.element"),i0=Symbol.for("react.portal"),s0=Symbol.for("react.fragment"),o0=Symbol.for("react.strict_mode"),l0=Symbol.for("react.profiler"),a0=Symbol.for("react.provider"),u0=Symbol.for("react.context"),c0=Symbol.for("react.forward_ref"),d0=Symbol.for("react.suspense"),h0=Symbol.for("react.memo"),f0=Symbol.for("react.lazy"),Nh=Symbol.iterator;function p0(t){return t===null||typeof t!="object"?null:(t=Nh&&t[Nh]||t["@@iterator"],typeof t=="function"?t:null)}var cm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dm=Object.assign,hm={};function Ci(t,e,n){this.props=t,this.context=e,this.refs=hm,this.updater=n||cm}Ci.prototype.isReactComponent={};Ci.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ci.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fm(){}fm.prototype=Ci.prototype;function jc(t,e,n){this.props=t,this.context=e,this.refs=hm,this.updater=n||cm}var zc=jc.prototype=new fm;zc.constructor=jc;dm(zc,Ci.prototype);zc.isPureReactComponent=!0;var Ph=Array.isArray,pm=Object.prototype.hasOwnProperty,Bc={current:null},mm={key:!0,ref:!0,__self:!0,__source:!0};function gm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)pm.call(e,r)&&!mm.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Js,type:t,key:s,ref:o,props:i,_owner:Bc.current}}function m0(t,e){return{$$typeof:Js,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Js}function g0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xh=/\/+/g;function Pa(t,e){return typeof t=="object"&&t!==null&&t.key!=null?g0(""+t.key):e.toString(36)}function zo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Js:case i0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Pa(o,0):r,Ph(i)?(n="",t!=null&&(n=t.replace(xh,"$&/")+"/"),zo(i,e,n,"",function(u){return u})):i!=null&&(Wc(i)&&(i=m0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ph(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Pa(s,l);o+=zo(s,e,n,a,i)}else if(a=p0(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Pa(s,l++),o+=zo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function yo(t,e,n){if(t==null)return t;var r=[],i=0;return zo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ye={current:null},Bo={transition:null},v0={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:Bo,ReactCurrentOwner:Bc};K.Children={map:yo,forEach:function(t,e,n){yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yo(t,function(){e++}),e},toArray:function(t){return yo(t,function(e){return e})||[]},only:function(t){if(!Wc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=Ci;K.Fragment=s0;K.Profiler=l0;K.PureComponent=jc;K.StrictMode=o0;K.Suspense=d0;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v0;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=dm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)pm.call(e,a)&&!mm.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Js,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:u0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:a0,_context:t},t.Consumer=t};K.createElement=gm;K.createFactory=function(t){var e=gm.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:c0,render:t}};K.isValidElement=Wc;K.lazy=function(t){return{$$typeof:f0,_payload:{_status:-1,_result:t},_init:_0}};K.memo=function(t,e){return{$$typeof:h0,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=Bo.transition;Bo.transition={};try{t()}finally{Bo.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return Ye.current.useCallback(t,e)};K.useContext=function(t){return Ye.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return Ye.current.useDeferredValue(t)};K.useEffect=function(t,e){return Ye.current.useEffect(t,e)};K.useId=function(){return Ye.current.useId()};K.useImperativeHandle=function(t,e,n){return Ye.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return Ye.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return Ye.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return Ye.current.useMemo(t,e)};K.useReducer=function(t,e,n){return Ye.current.useReducer(t,e,n)};K.useRef=function(t){return Ye.current.useRef(t)};K.useState=function(t){return Ye.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return Ye.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return Ye.current.useTransition()};K.version="18.2.0";um.exports=K;var P=um.exports;const _m=r0(P),y0=n0({__proto__:null,default:_m},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0=P,E0=Symbol.for("react.element"),S0=Symbol.for("react.fragment"),C0=Object.prototype.hasOwnProperty,I0=w0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T0={key:!0,ref:!0,__self:!0,__source:!0};function vm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)C0.call(e,r)&&!T0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:E0,type:t,key:s,ref:o,props:i,_owner:I0.current}}Kl.Fragment=S0;Kl.jsx=vm;Kl.jsxs=vm;am.exports=Kl;var R=am.exports,yu={},ym={exports:{}},ct={},wm={exports:{}},Em={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,F){var H=A.length;A.push(F);e:for(;0<H;){var pe=H-1>>>1,Ee=A[pe];if(0<i(Ee,F))A[pe]=F,A[H]=Ee,H=pe;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var F=A[0],H=A.pop();if(H!==F){A[0]=H;e:for(var pe=0,Ee=A.length,Ar=Ee>>>1;pe<Ar;){var ie=2*(pe+1)-1,Gt=A[ie],Ft=ie+1,Dr=A[Ft];if(0>i(Gt,H))Ft<Ee&&0>i(Dr,Gt)?(A[pe]=Dr,A[Ft]=H,pe=Ft):(A[pe]=Gt,A[ie]=H,pe=ie);else if(Ft<Ee&&0>i(Dr,H))A[pe]=Dr,A[Ft]=H,pe=Ft;else break e}}return F}function i(A,F){var H=A.sortIndex-F.sortIndex;return H!==0?H:A.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,v=!1,_=!1,y=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=A)r(u),F.sortIndex=F.expirationTime,e(a,F);else break;F=n(u)}}function p(A){if(y=!1,g(A),!_)if(n(a)!==null)_=!0,it(C);else{var F=n(u);F!==null&&bt(p,F.startTime-A)}}function C(A,F){_=!1,y&&(y=!1,m(D),D=-1),v=!0;var H=h;try{for(g(F),d=n(a);d!==null&&(!(d.expirationTime>F)||A&&!Ne());){var pe=d.callback;if(typeof pe=="function"){d.callback=null,h=d.priorityLevel;var Ee=pe(d.expirationTime<=F);F=t.unstable_now(),typeof Ee=="function"?d.callback=Ee:d===n(a)&&r(a),g(F)}else r(a);d=n(a)}if(d!==null)var Ar=!0;else{var ie=n(u);ie!==null&&bt(p,ie.startTime-F),Ar=!1}return Ar}finally{d=null,h=H,v=!1}}var N=!1,k=null,D=-1,$=5,U=-1;function Ne(){return!(t.unstable_now()-U<$)}function re(){if(k!==null){var A=t.unstable_now();U=A;var F=!0;try{F=k(!0,A)}finally{F?Mt():(N=!1,k=null)}}else N=!1}var Mt;if(typeof f=="function")Mt=function(){f(re)};else if(typeof MessageChannel<"u"){var gn=new MessageChannel,_n=gn.port2;gn.port1.onmessage=re,Mt=function(){_n.postMessage(null)}}else Mt=function(){T(re,0)};function it(A){k=A,N||(N=!0,Mt())}function bt(A,F){D=T(function(){A(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){_||v||(_=!0,it(C))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(A){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var H=h;h=F;try{return A()}finally{h=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,F){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var H=h;h=A;try{return F()}finally{h=H}},t.unstable_scheduleCallback=function(A,F,H){var pe=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?pe+H:pe):H=pe,A){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=H+Ee,A={id:c++,callback:F,priorityLevel:A,startTime:H,expirationTime:Ee,sortIndex:-1},H>pe?(A.sortIndex=H,e(u,A),n(a)===null&&A===n(u)&&(y?(m(D),D=-1):y=!0,bt(p,H-pe))):(A.sortIndex=Ee,e(a,A),_||v||(_=!0,it(C))),A},t.unstable_shouldYield=Ne,t.unstable_wrapCallback=function(A){var F=h;return function(){var H=h;h=F;try{return A.apply(this,arguments)}finally{h=H}}}})(Em);wm.exports=Em;var k0=wm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm=P,ut=k0;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cm=new Set,Is={};function Rr(t,e){hi(t,e),hi(t+"Capture",e)}function hi(t,e){for(Is[t]=e,t=0;t<e.length;t++)Cm.add(e[t])}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wu=Object.prototype.hasOwnProperty,R0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ah={},Dh={};function N0(t){return wu.call(Dh,t)?!0:wu.call(Ah,t)?!1:R0.test(t)?Dh[t]=!0:(Ah[t]=!0,!1)}function P0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function x0(t,e,n,r){if(e===null||typeof e>"u"||P0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ue[t]=new Xe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ue[e]=new Xe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ue[t]=new Xe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ue[t]=new Xe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ue[t]=new Xe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ue[t]=new Xe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ue[t]=new Xe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ue[t]=new Xe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ue[t]=new Xe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hc=/[\-:]([a-z])/g;function $c(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hc,$c);Ue[e]=new Xe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hc,$c);Ue[e]=new Xe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hc,$c);Ue[e]=new Xe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ue[t]=new Xe(t,1,!1,t.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ue[t]=new Xe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vc(t,e,n,r){var i=Ue.hasOwnProperty(e)?Ue[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(x0(e,n,i,r)&&(n=null),r||i===null?N0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fn=Sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wo=Symbol.for("react.element"),Fr=Symbol.for("react.portal"),Ur=Symbol.for("react.fragment"),Kc=Symbol.for("react.strict_mode"),Eu=Symbol.for("react.profiler"),Im=Symbol.for("react.provider"),Tm=Symbol.for("react.context"),Gc=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),Cu=Symbol.for("react.suspense_list"),qc=Symbol.for("react.memo"),Cn=Symbol.for("react.lazy"),km=Symbol.for("react.offscreen"),Oh=Symbol.iterator;function Wi(t){return t===null||typeof t!="object"?null:(t=Oh&&t[Oh]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Object.assign,xa;function is(t){if(xa===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xa=e&&e[1]||""}return`
`+xa+t}var Aa=!1;function Da(t,e){if(!t||Aa)return"";Aa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Aa=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?is(t):""}function A0(t){switch(t.tag){case 5:return is(t.type);case 16:return is("Lazy");case 13:return is("Suspense");case 19:return is("SuspenseList");case 0:case 2:case 15:return t=Da(t.type,!1),t;case 11:return t=Da(t.type.render,!1),t;case 1:return t=Da(t.type,!0),t;default:return""}}function Iu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ur:return"Fragment";case Fr:return"Portal";case Eu:return"Profiler";case Kc:return"StrictMode";case Su:return"Suspense";case Cu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Tm:return(t.displayName||"Context")+".Consumer";case Im:return(t._context.displayName||"Context")+".Provider";case Gc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qc:return e=t.displayName||null,e!==null?e:Iu(t.type)||"Memo";case Cn:e=t._payload,t=t._init;try{return Iu(t(e))}catch{}}return null}function D0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Iu(e);case 8:return e===Kc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function O0(t){var e=Rm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Eo(t){t._valueTracker||(t._valueTracker=O0(t))}function Nm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Rm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tu(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Vn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pm(t,e){e=e.checked,e!=null&&Vc(t,"checked",e,!1)}function ku(t,e){Pm(t,e);var n=Vn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ru(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ru(t,e.type,Vn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ru(t,e,n){(e!=="number"||nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ss=Array.isArray;function ei(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Vn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Nu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(ss(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vn(n)}}function xm(t,e){var n=Vn(e.value),r=Vn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Am(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Am(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var So,Dm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(So=So||document.createElement("div"),So.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=So.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ts(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L0=["Webkit","ms","Moz","O"];Object.keys(cs).forEach(function(t){L0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),cs[e]=cs[t]})});function Om(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||cs.hasOwnProperty(t)&&cs[t]?(""+e).trim():e+"px"}function Lm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Om(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var M0=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xu(t,e){if(e){if(M0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Au(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Du=null;function Qc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ou=null,ti=null,ni=null;function Uh(t){if(t=to(t)){if(typeof Ou!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Xl(e),Ou(t.stateNode,t.type,e))}}function Mm(t){ti?ni?ni.push(t):ni=[t]:ti=t}function bm(){if(ti){var t=ti,e=ni;if(ni=ti=null,Uh(t),e)for(t=0;t<e.length;t++)Uh(e[t])}}function Fm(t,e){return t(e)}function Um(){}var Oa=!1;function jm(t,e,n){if(Oa)return t(e,n);Oa=!0;try{return Fm(t,e,n)}finally{Oa=!1,(ti!==null||ni!==null)&&(Um(),bm())}}function ks(t,e){var n=t.stateNode;if(n===null)return null;var r=Xl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Lu=!1;if(ln)try{var Hi={};Object.defineProperty(Hi,"passive",{get:function(){Lu=!0}}),window.addEventListener("test",Hi,Hi),window.removeEventListener("test",Hi,Hi)}catch{Lu=!1}function b0(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ds=!1,rl=null,il=!1,Mu=null,F0={onError:function(t){ds=!0,rl=t}};function U0(t,e,n,r,i,s,o,l,a){ds=!1,rl=null,b0.apply(F0,arguments)}function j0(t,e,n,r,i,s,o,l,a){if(U0.apply(this,arguments),ds){if(ds){var u=rl;ds=!1,rl=null}else throw Error(I(198));il||(il=!0,Mu=u)}}function Nr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jh(t){if(Nr(t)!==t)throw Error(I(188))}function z0(t){var e=t.alternate;if(!e){if(e=Nr(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return jh(i),t;if(s===r)return jh(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function Bm(t){return t=z0(t),t!==null?Wm(t):null}function Wm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Wm(t);if(e!==null)return e;t=t.sibling}return null}var Hm=ut.unstable_scheduleCallback,zh=ut.unstable_cancelCallback,B0=ut.unstable_shouldYield,W0=ut.unstable_requestPaint,we=ut.unstable_now,H0=ut.unstable_getCurrentPriorityLevel,Yc=ut.unstable_ImmediatePriority,$m=ut.unstable_UserBlockingPriority,sl=ut.unstable_NormalPriority,$0=ut.unstable_LowPriority,Vm=ut.unstable_IdlePriority,Gl=null,Wt=null;function V0(t){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Gl,t,void 0,(t.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:q0,K0=Math.log,G0=Math.LN2;function q0(t){return t>>>=0,t===0?32:31-(K0(t)/G0|0)|0}var Co=64,Io=4194304;function os(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ol(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=os(l):(s&=o,s!==0&&(r=os(s)))}else o=n&~i,o!==0?r=os(o):s!==0&&(r=os(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Pt(e),i=1<<n,r|=t[n],e&=~i;return r}function Q0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Pt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Q0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function bu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Km(){var t=Co;return Co<<=1,!(Co&4194240)&&(Co=64),t}function La(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Zs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Pt(e),t[e]=n}function X0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Pt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Xc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Pt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function Gm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var qm,Jc,Qm,Ym,Xm,Fu=!1,To=[],On=null,Ln=null,Mn=null,Rs=new Map,Ns=new Map,Tn=[],J0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bh(t,e){switch(t){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Rs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ns.delete(e.pointerId)}}function $i(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=to(e),e!==null&&Jc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Z0(t,e,n,r,i){switch(e){case"focusin":return On=$i(On,t,e,n,r,i),!0;case"dragenter":return Ln=$i(Ln,t,e,n,r,i),!0;case"mouseover":return Mn=$i(Mn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Rs.set(s,$i(Rs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ns.set(s,$i(Ns.get(s)||null,t,e,n,r,i)),!0}return!1}function Jm(t){var e=ir(t.target);if(e!==null){var n=Nr(e);if(n!==null){if(e=n.tag,e===13){if(e=zm(n),e!==null){t.blockedOn=e,Xm(t.priority,function(){Qm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Du=r,n.target.dispatchEvent(r),Du=null}else return e=to(n),e!==null&&Jc(e),t.blockedOn=n,!1;e.shift()}return!0}function Wh(t,e,n){Wo(t)&&n.delete(e)}function ew(){Fu=!1,On!==null&&Wo(On)&&(On=null),Ln!==null&&Wo(Ln)&&(Ln=null),Mn!==null&&Wo(Mn)&&(Mn=null),Rs.forEach(Wh),Ns.forEach(Wh)}function Vi(t,e){t.blockedOn===e&&(t.blockedOn=null,Fu||(Fu=!0,ut.unstable_scheduleCallback(ut.unstable_NormalPriority,ew)))}function Ps(t){function e(i){return Vi(i,t)}if(0<To.length){Vi(To[0],t);for(var n=1;n<To.length;n++){var r=To[n];r.blockedOn===t&&(r.blockedOn=null)}}for(On!==null&&Vi(On,t),Ln!==null&&Vi(Ln,t),Mn!==null&&Vi(Mn,t),Rs.forEach(e),Ns.forEach(e),n=0;n<Tn.length;n++)r=Tn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Tn.length&&(n=Tn[0],n.blockedOn===null);)Jm(n),n.blockedOn===null&&Tn.shift()}var ri=fn.ReactCurrentBatchConfig,ll=!0;function tw(t,e,n,r){var i=J,s=ri.transition;ri.transition=null;try{J=1,Zc(t,e,n,r)}finally{J=i,ri.transition=s}}function nw(t,e,n,r){var i=J,s=ri.transition;ri.transition=null;try{J=4,Zc(t,e,n,r)}finally{J=i,ri.transition=s}}function Zc(t,e,n,r){if(ll){var i=Uu(t,e,n,r);if(i===null)$a(t,e,r,al,n),Bh(t,r);else if(Z0(i,t,e,n,r))r.stopPropagation();else if(Bh(t,r),e&4&&-1<J0.indexOf(t)){for(;i!==null;){var s=to(i);if(s!==null&&qm(s),s=Uu(t,e,n,r),s===null&&$a(t,e,r,al,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $a(t,e,r,null,n)}}var al=null;function Uu(t,e,n,r){if(al=null,t=Qc(r),t=ir(t),t!==null)if(e=Nr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return al=t,null}function Zm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(H0()){case Yc:return 1;case $m:return 4;case sl:case $0:return 16;case Vm:return 536870912;default:return 16}default:return 16}}var An=null,ed=null,Ho=null;function eg(){if(Ho)return Ho;var t,e=ed,n=e.length,r,i="value"in An?An.value:An.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ho=i.slice(t,1<r?1-r:void 0)}function $o(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ko(){return!0}function Hh(){return!1}function dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ko:Hh,this.isPropagationStopped=Hh,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),e}var Ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=dt(Ii),eo=_e({},Ii,{view:0,detail:0}),rw=dt(eo),Ma,ba,Ki,ql=_e({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ki&&(Ki&&t.type==="mousemove"?(Ma=t.screenX-Ki.screenX,ba=t.screenY-Ki.screenY):ba=Ma=0,Ki=t),Ma)},movementY:function(t){return"movementY"in t?t.movementY:ba}}),$h=dt(ql),iw=_e({},ql,{dataTransfer:0}),sw=dt(iw),ow=_e({},eo,{relatedTarget:0}),Fa=dt(ow),lw=_e({},Ii,{animationName:0,elapsedTime:0,pseudoElement:0}),aw=dt(lw),uw=_e({},Ii,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cw=dt(uw),dw=_e({},Ii,{data:0}),Vh=dt(dw),hw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pw[t])?!!e[t]:!1}function nd(){return mw}var gw=_e({},eo,{key:function(t){if(t.key){var e=hw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nd,charCode:function(t){return t.type==="keypress"?$o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_w=dt(gw),vw=_e({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kh=dt(vw),yw=_e({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nd}),ww=dt(yw),Ew=_e({},Ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sw=dt(Ew),Cw=_e({},ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Iw=dt(Cw),Tw=[9,13,27,32],rd=ln&&"CompositionEvent"in window,hs=null;ln&&"documentMode"in document&&(hs=document.documentMode);var kw=ln&&"TextEvent"in window&&!hs,tg=ln&&(!rd||hs&&8<hs&&11>=hs),Gh=String.fromCharCode(32),qh=!1;function ng(t,e){switch(t){case"keyup":return Tw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jr=!1;function Rw(t,e){switch(t){case"compositionend":return rg(e);case"keypress":return e.which!==32?null:(qh=!0,Gh);case"textInput":return t=e.data,t===Gh&&qh?null:t;default:return null}}function Nw(t,e){if(jr)return t==="compositionend"||!rd&&ng(t,e)?(t=eg(),Ho=ed=An=null,jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tg&&e.locale!=="ko"?null:e.data;default:return null}}var Pw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Pw[t.type]:e==="textarea"}function ig(t,e,n,r){Mm(r),e=ul(e,"onChange"),0<e.length&&(n=new td("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fs=null,xs=null;function xw(t){mg(t,0)}function Ql(t){var e=Wr(t);if(Nm(e))return t}function Aw(t,e){if(t==="change")return e}var sg=!1;if(ln){var Ua;if(ln){var ja="oninput"in document;if(!ja){var Yh=document.createElement("div");Yh.setAttribute("oninput","return;"),ja=typeof Yh.oninput=="function"}Ua=ja}else Ua=!1;sg=Ua&&(!document.documentMode||9<document.documentMode)}function Xh(){fs&&(fs.detachEvent("onpropertychange",og),xs=fs=null)}function og(t){if(t.propertyName==="value"&&Ql(xs)){var e=[];ig(e,xs,t,Qc(t)),jm(xw,e)}}function Dw(t,e,n){t==="focusin"?(Xh(),fs=e,xs=n,fs.attachEvent("onpropertychange",og)):t==="focusout"&&Xh()}function Ow(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ql(xs)}function Lw(t,e){if(t==="click")return Ql(e)}function Mw(t,e){if(t==="input"||t==="change")return Ql(e)}function bw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Dt=typeof Object.is=="function"?Object.is:bw;function As(t,e){if(Dt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wu.call(e,i)||!Dt(t[i],e[i]))return!1}return!0}function Jh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zh(t,e){var n=Jh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jh(n)}}function lg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ag(){for(var t=window,e=nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nl(t.document)}return e}function id(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Fw(t){var e=ag(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&lg(n.ownerDocument.documentElement,n)){if(r!==null&&id(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Zh(n,s);var o=Zh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Uw=ln&&"documentMode"in document&&11>=document.documentMode,zr=null,ju=null,ps=null,zu=!1;function ef(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zu||zr==null||zr!==nl(r)||(r=zr,"selectionStart"in r&&id(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ps&&As(ps,r)||(ps=r,r=ul(ju,"onSelect"),0<r.length&&(e=new td("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zr)))}function Ro(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Br={animationend:Ro("Animation","AnimationEnd"),animationiteration:Ro("Animation","AnimationIteration"),animationstart:Ro("Animation","AnimationStart"),transitionend:Ro("Transition","TransitionEnd")},za={},ug={};ln&&(ug=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function Yl(t){if(za[t])return za[t];if(!Br[t])return t;var e=Br[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ug)return za[t]=e[n];return t}var cg=Yl("animationend"),dg=Yl("animationiteration"),hg=Yl("animationstart"),fg=Yl("transitionend"),pg=new Map,tf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qn(t,e){pg.set(t,e),Rr(e,[t])}for(var Ba=0;Ba<tf.length;Ba++){var Wa=tf[Ba],jw=Wa.toLowerCase(),zw=Wa[0].toUpperCase()+Wa.slice(1);qn(jw,"on"+zw)}qn(cg,"onAnimationEnd");qn(dg,"onAnimationIteration");qn(hg,"onAnimationStart");qn("dblclick","onDoubleClick");qn("focusin","onFocus");qn("focusout","onBlur");qn(fg,"onTransitionEnd");hi("onMouseEnter",["mouseout","mouseover"]);hi("onMouseLeave",["mouseout","mouseover"]);hi("onPointerEnter",["pointerout","pointerover"]);hi("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));function nf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,j0(r,e,void 0,t),t.currentTarget=null}function mg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;nf(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;nf(i,l,u),s=a}}}if(il)throw t=Mu,il=!1,Mu=null,t}function le(t,e){var n=e[Vu];n===void 0&&(n=e[Vu]=new Set);var r=t+"__bubble";n.has(r)||(gg(e,t,2,!1),n.add(r))}function Ha(t,e,n){var r=0;e&&(r|=4),gg(n,t,r,e)}var No="_reactListening"+Math.random().toString(36).slice(2);function Ds(t){if(!t[No]){t[No]=!0,Cm.forEach(function(n){n!=="selectionchange"&&(Bw.has(n)||Ha(n,!1,t),Ha(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[No]||(e[No]=!0,Ha("selectionchange",!1,e))}}function gg(t,e,n,r){switch(Zm(e)){case 1:var i=tw;break;case 4:i=nw;break;default:i=Zc}n=i.bind(null,e,n,t),i=void 0,!Lu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $a(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ir(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}jm(function(){var u=s,c=Qc(n),d=[];e:{var h=pg.get(t);if(h!==void 0){var v=td,_=t;switch(t){case"keypress":if($o(n)===0)break e;case"keydown":case"keyup":v=_w;break;case"focusin":_="focus",v=Fa;break;case"focusout":_="blur",v=Fa;break;case"beforeblur":case"afterblur":v=Fa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=$h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=sw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ww;break;case cg:case dg:case hg:v=aw;break;case fg:v=Sw;break;case"scroll":v=rw;break;case"wheel":v=Iw;break;case"copy":case"cut":case"paste":v=cw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Kh}var y=(e&4)!==0,T=!y&&t==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,g;f!==null;){g=f;var p=g.stateNode;if(g.tag===5&&p!==null&&(g=p,m!==null&&(p=ks(f,m),p!=null&&y.push(Os(f,p,g)))),T)break;f=f.return}0<y.length&&(h=new v(h,_,null,n,c),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",h&&n!==Du&&(_=n.relatedTarget||n.fromElement)&&(ir(_)||_[an]))break e;if((v||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=u,_=_?ir(_):null,_!==null&&(T=Nr(_),_!==T||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=u),v!==_)){if(y=$h,p="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Kh,p="onPointerLeave",m="onPointerEnter",f="pointer"),T=v==null?h:Wr(v),g=_==null?h:Wr(_),h=new y(p,f+"leave",v,n,c),h.target=T,h.relatedTarget=g,p=null,ir(c)===u&&(y=new y(m,f+"enter",_,n,c),y.target=g,y.relatedTarget=T,p=y),T=p,v&&_)t:{for(y=v,m=_,f=0,g=y;g;g=Or(g))f++;for(g=0,p=m;p;p=Or(p))g++;for(;0<f-g;)y=Or(y),f--;for(;0<g-f;)m=Or(m),g--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=Or(y),m=Or(m)}y=null}else y=null;v!==null&&rf(d,h,v,y,!1),_!==null&&T!==null&&rf(d,T,_,y,!0)}}e:{if(h=u?Wr(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var C=Aw;else if(Qh(h))if(sg)C=Mw;else{C=Ow;var N=Dw}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Lw);if(C&&(C=C(t,u))){ig(d,C,n,c);break e}N&&N(t,h,u),t==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Ru(h,"number",h.value)}switch(N=u?Wr(u):window,t){case"focusin":(Qh(N)||N.contentEditable==="true")&&(zr=N,ju=u,ps=null);break;case"focusout":ps=ju=zr=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,ef(d,n,c);break;case"selectionchange":if(Uw)break;case"keydown":case"keyup":ef(d,n,c)}var k;if(rd)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else jr?ng(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(tg&&n.locale!=="ko"&&(jr||D!=="onCompositionStart"?D==="onCompositionEnd"&&jr&&(k=eg()):(An=c,ed="value"in An?An.value:An.textContent,jr=!0)),N=ul(u,D),0<N.length&&(D=new Vh(D,t,null,n,c),d.push({event:D,listeners:N}),k?D.data=k:(k=rg(n),k!==null&&(D.data=k)))),(k=kw?Rw(t,n):Nw(t,n))&&(u=ul(u,"onBeforeInput"),0<u.length&&(c=new Vh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=k))}mg(d,e)})}function Os(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ul(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ks(t,n),s!=null&&r.unshift(Os(t,s,i)),s=ks(t,e),s!=null&&r.push(Os(t,s,i))),t=t.return}return r}function Or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=ks(n,s),a!=null&&o.unshift(Os(n,a,l))):i||(a=ks(n,s),a!=null&&o.push(Os(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ww=/\r\n?/g,Hw=/\u0000|\uFFFD/g;function sf(t){return(typeof t=="string"?t:""+t).replace(Ww,`
`).replace(Hw,"")}function Po(t,e,n){if(e=sf(e),sf(t)!==e&&n)throw Error(I(425))}function cl(){}var Bu=null,Wu=null;function Hu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $u=typeof setTimeout=="function"?setTimeout:void 0,$w=typeof clearTimeout=="function"?clearTimeout:void 0,of=typeof Promise=="function"?Promise:void 0,Vw=typeof queueMicrotask=="function"?queueMicrotask:typeof of<"u"?function(t){return of.resolve(null).then(t).catch(Kw)}:$u;function Kw(t){setTimeout(function(){throw t})}function Va(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ps(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ps(e)}function bn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ti=Math.random().toString(36).slice(2),zt="__reactFiber$"+Ti,Ls="__reactProps$"+Ti,an="__reactContainer$"+Ti,Vu="__reactEvents$"+Ti,Gw="__reactListeners$"+Ti,qw="__reactHandles$"+Ti;function ir(t){var e=t[zt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[an]||n[zt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lf(t);t!==null;){if(n=t[zt])return n;t=lf(t)}return e}t=n,n=t.parentNode}return null}function to(t){return t=t[zt]||t[an],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Xl(t){return t[Ls]||null}var Ku=[],Hr=-1;function Qn(t){return{current:t}}function de(t){0>Hr||(t.current=Ku[Hr],Ku[Hr]=null,Hr--)}function oe(t,e){Hr++,Ku[Hr]=t.current,t.current=e}var Kn={},Ke=Qn(Kn),tt=Qn(!1),fr=Kn;function fi(t,e){var n=t.type.contextTypes;if(!n)return Kn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function nt(t){return t=t.childContextTypes,t!=null}function dl(){de(tt),de(Ke)}function af(t,e,n){if(Ke.current!==Kn)throw Error(I(168));oe(Ke,e),oe(tt,n)}function _g(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,D0(t)||"Unknown",i));return _e({},n,r)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kn,fr=Ke.current,oe(Ke,t),oe(tt,tt.current),!0}function uf(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=_g(t,e,fr),r.__reactInternalMemoizedMergedChildContext=t,de(tt),de(Ke),oe(Ke,t)):de(tt),oe(tt,n)}var Xt=null,Jl=!1,Ka=!1;function vg(t){Xt===null?Xt=[t]:Xt.push(t)}function Qw(t){Jl=!0,vg(t)}function Yn(){if(!Ka&&Xt!==null){Ka=!0;var t=0,e=J;try{var n=Xt;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Xt=null,Jl=!1}catch(i){throw Xt!==null&&(Xt=Xt.slice(t+1)),Hm(Yc,Yn),i}finally{J=e,Ka=!1}}return null}var $r=[],Vr=0,fl=null,pl=0,ft=[],pt=0,pr=null,Jt=1,Zt="";function er(t,e){$r[Vr++]=pl,$r[Vr++]=fl,fl=t,pl=e}function yg(t,e,n){ft[pt++]=Jt,ft[pt++]=Zt,ft[pt++]=pr,pr=t;var r=Jt;t=Zt;var i=32-Pt(r)-1;r&=~(1<<i),n+=1;var s=32-Pt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Jt=1<<32-Pt(e)+i|n<<i|r,Zt=s+t}else Jt=1<<s|n<<i|r,Zt=t}function sd(t){t.return!==null&&(er(t,1),yg(t,1,0))}function od(t){for(;t===fl;)fl=$r[--Vr],$r[Vr]=null,pl=$r[--Vr],$r[Vr]=null;for(;t===pr;)pr=ft[--pt],ft[pt]=null,Zt=ft[--pt],ft[pt]=null,Jt=ft[--pt],ft[pt]=null}var lt=null,ot=null,fe=!1,kt=null;function wg(t,e){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,lt=t,ot=bn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,lt=t,ot=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=pr!==null?{id:Jt,overflow:Zt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,lt=t,ot=null,!0):!1;default:return!1}}function Gu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qu(t){if(fe){var e=ot;if(e){var n=e;if(!cf(t,e)){if(Gu(t))throw Error(I(418));e=bn(n.nextSibling);var r=lt;e&&cf(t,e)?wg(r,n):(t.flags=t.flags&-4097|2,fe=!1,lt=t)}}else{if(Gu(t))throw Error(I(418));t.flags=t.flags&-4097|2,fe=!1,lt=t}}}function df(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;lt=t}function xo(t){if(t!==lt)return!1;if(!fe)return df(t),fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hu(t.type,t.memoizedProps)),e&&(e=ot)){if(Gu(t))throw Eg(),Error(I(418));for(;e;)wg(t,e),e=bn(e.nextSibling)}if(df(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ot=bn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ot=null}}else ot=lt?bn(t.stateNode.nextSibling):null;return!0}function Eg(){for(var t=ot;t;)t=bn(t.nextSibling)}function pi(){ot=lt=null,fe=!1}function ld(t){kt===null?kt=[t]:kt.push(t)}var Yw=fn.ReactCurrentBatchConfig;function Ct(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ml=Qn(null),gl=null,Kr=null,ad=null;function ud(){ad=Kr=gl=null}function cd(t){var e=ml.current;de(ml),t._currentValue=e}function Qu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ii(t,e){gl=t,ad=Kr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ze=!0),t.firstContext=null)}function vt(t){var e=t._currentValue;if(ad!==t)if(t={context:t,memoizedValue:e,next:null},Kr===null){if(gl===null)throw Error(I(308));Kr=t,gl.dependencies={lanes:0,firstContext:t}}else Kr=Kr.next=t;return e}var sr=null;function dd(t){sr===null?sr=[t]:sr.push(t)}function Sg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,dd(e)):(n.next=i.next,i.next=n),e.interleaved=n,un(t,r)}function un(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var In=!1;function hd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function rn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,un(t,n)}return i=r.interleaved,i===null?(e.next=e,dd(r)):(e.next=i.next,i.next=e),r.interleaved=e,un(t,n)}function Vo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xc(t,n)}}function hf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _l(t,e,n,r){var i=t.updateQueue;In=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,v=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,y=l;switch(h=e,v=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(v,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(v,d,h):_,h==null)break e;d=_e({},d,h);break e;case 2:In=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=v,a=d):c=c.next=v,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);gr|=o,t.lanes=o,t.memoizedState=d}}function ff(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Ig=new Sm.Component().refs;function Yu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zl={isMounted:function(t){return(t=t._reactInternals)?Nr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=jn(t),s=rn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Fn(t,s,i),e!==null&&(xt(e,t,i,r),Vo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=jn(t),s=rn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fn(t,s,i),e!==null&&(xt(e,t,i,r),Vo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qe(),r=jn(t),i=rn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Fn(t,i,r),e!==null&&(xt(e,t,r,n),Vo(e,t,r))}};function pf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!As(n,r)||!As(i,s):!0}function Tg(t,e,n){var r=!1,i=Kn,s=e.contextType;return typeof s=="object"&&s!==null?s=vt(s):(i=nt(e)?fr:Ke.current,r=e.contextTypes,s=(r=r!=null)?fi(t,i):Kn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function mf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zl.enqueueReplaceState(e,e.state,null)}function Xu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Ig,hd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=vt(s):(s=nt(e)?fr:Ke.current,i.context=fi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zl.enqueueReplaceState(i,i.state,null),_l(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Gi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===Ig&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function Ao(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gf(t){var e=t._init;return e(t._payload)}function kg(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=zn(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,f,g,p){return f===null||f.tag!==6?(f=Za(g,m.mode,p),f.return=m,f):(f=i(f,g),f.return=m,f)}function a(m,f,g,p){var C=g.type;return C===Ur?c(m,f,g.props.children,p,g.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Cn&&gf(C)===f.type)?(p=i(f,g.props),p.ref=Gi(m,f,g),p.return=m,p):(p=Xo(g.type,g.key,g.props,null,m.mode,p),p.ref=Gi(m,f,g),p.return=m,p)}function u(m,f,g,p){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=eu(g,m.mode,p),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,p,C){return f===null||f.tag!==7?(f=cr(g,m.mode,p,C),f.return=m,f):(f=i(f,g),f.return=m,f)}function d(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Za(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case wo:return g=Xo(f.type,f.key,f.props,null,m.mode,g),g.ref=Gi(m,null,f),g.return=m,g;case Fr:return f=eu(f,m.mode,g),f.return=m,f;case Cn:var p=f._init;return d(m,p(f._payload),g)}if(ss(f)||Wi(f))return f=cr(f,m.mode,g,null),f.return=m,f;Ao(m,f)}return null}function h(m,f,g,p){var C=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:l(m,f,""+g,p);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case wo:return g.key===C?a(m,f,g,p):null;case Fr:return g.key===C?u(m,f,g,p):null;case Cn:return C=g._init,h(m,f,C(g._payload),p)}if(ss(g)||Wi(g))return C!==null?null:c(m,f,g,p,null);Ao(m,g)}return null}function v(m,f,g,p,C){if(typeof p=="string"&&p!==""||typeof p=="number")return m=m.get(g)||null,l(f,m,""+p,C);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case wo:return m=m.get(p.key===null?g:p.key)||null,a(f,m,p,C);case Fr:return m=m.get(p.key===null?g:p.key)||null,u(f,m,p,C);case Cn:var N=p._init;return v(m,f,g,N(p._payload),C)}if(ss(p)||Wi(p))return m=m.get(g)||null,c(f,m,p,C,null);Ao(f,p)}return null}function _(m,f,g,p){for(var C=null,N=null,k=f,D=f=0,$=null;k!==null&&D<g.length;D++){k.index>D?($=k,k=null):$=k.sibling;var U=h(m,k,g[D],p);if(U===null){k===null&&(k=$);break}t&&k&&U.alternate===null&&e(m,k),f=s(U,f,D),N===null?C=U:N.sibling=U,N=U,k=$}if(D===g.length)return n(m,k),fe&&er(m,D),C;if(k===null){for(;D<g.length;D++)k=d(m,g[D],p),k!==null&&(f=s(k,f,D),N===null?C=k:N.sibling=k,N=k);return fe&&er(m,D),C}for(k=r(m,k);D<g.length;D++)$=v(k,m,D,g[D],p),$!==null&&(t&&$.alternate!==null&&k.delete($.key===null?D:$.key),f=s($,f,D),N===null?C=$:N.sibling=$,N=$);return t&&k.forEach(function(Ne){return e(m,Ne)}),fe&&er(m,D),C}function y(m,f,g,p){var C=Wi(g);if(typeof C!="function")throw Error(I(150));if(g=C.call(g),g==null)throw Error(I(151));for(var N=C=null,k=f,D=f=0,$=null,U=g.next();k!==null&&!U.done;D++,U=g.next()){k.index>D?($=k,k=null):$=k.sibling;var Ne=h(m,k,U.value,p);if(Ne===null){k===null&&(k=$);break}t&&k&&Ne.alternate===null&&e(m,k),f=s(Ne,f,D),N===null?C=Ne:N.sibling=Ne,N=Ne,k=$}if(U.done)return n(m,k),fe&&er(m,D),C;if(k===null){for(;!U.done;D++,U=g.next())U=d(m,U.value,p),U!==null&&(f=s(U,f,D),N===null?C=U:N.sibling=U,N=U);return fe&&er(m,D),C}for(k=r(m,k);!U.done;D++,U=g.next())U=v(k,m,D,U.value,p),U!==null&&(t&&U.alternate!==null&&k.delete(U.key===null?D:U.key),f=s(U,f,D),N===null?C=U:N.sibling=U,N=U);return t&&k.forEach(function(re){return e(m,re)}),fe&&er(m,D),C}function T(m,f,g,p){if(typeof g=="object"&&g!==null&&g.type===Ur&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case wo:e:{for(var C=g.key,N=f;N!==null;){if(N.key===C){if(C=g.type,C===Ur){if(N.tag===7){n(m,N.sibling),f=i(N,g.props.children),f.return=m,m=f;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Cn&&gf(C)===N.type){n(m,N.sibling),f=i(N,g.props),f.ref=Gi(m,N,g),f.return=m,m=f;break e}n(m,N);break}else e(m,N);N=N.sibling}g.type===Ur?(f=cr(g.props.children,m.mode,p,g.key),f.return=m,m=f):(p=Xo(g.type,g.key,g.props,null,m.mode,p),p.ref=Gi(m,f,g),p.return=m,m=p)}return o(m);case Fr:e:{for(N=g.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=eu(g,m.mode,p),f.return=m,m=f}return o(m);case Cn:return N=g._init,T(m,f,N(g._payload),p)}if(ss(g))return _(m,f,g,p);if(Wi(g))return y(m,f,g,p);Ao(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=Za(g,m.mode,p),f.return=m,m=f),o(m)):n(m,f)}return T}var mi=kg(!0),Rg=kg(!1),no={},Ht=Qn(no),Ms=Qn(no),bs=Qn(no);function or(t){if(t===no)throw Error(I(174));return t}function fd(t,e){switch(oe(bs,e),oe(Ms,t),oe(Ht,no),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pu(e,t)}de(Ht),oe(Ht,e)}function gi(){de(Ht),de(Ms),de(bs)}function Ng(t){or(bs.current);var e=or(Ht.current),n=Pu(e,t.type);e!==n&&(oe(Ms,t),oe(Ht,n))}function pd(t){Ms.current===t&&(de(Ht),de(Ms))}var me=Qn(0);function vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ga=[];function md(){for(var t=0;t<Ga.length;t++)Ga[t]._workInProgressVersionPrimary=null;Ga.length=0}var Ko=fn.ReactCurrentDispatcher,qa=fn.ReactCurrentBatchConfig,mr=0,ge=null,ke=null,Ae=null,yl=!1,ms=!1,Fs=0,Xw=0;function ze(){throw Error(I(321))}function gd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Dt(t[n],e[n]))return!1;return!0}function _d(t,e,n,r,i,s){if(mr=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ko.current=t===null||t.memoizedState===null?tE:nE,t=n(r,i),ms){s=0;do{if(ms=!1,Fs=0,25<=s)throw Error(I(301));s+=1,Ae=ke=null,e.updateQueue=null,Ko.current=rE,t=n(r,i)}while(ms)}if(Ko.current=wl,e=ke!==null&&ke.next!==null,mr=0,Ae=ke=ge=null,yl=!1,e)throw Error(I(300));return t}function vd(){var t=Fs!==0;return Fs=0,t}function jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?ge.memoizedState=Ae=t:Ae=Ae.next=t,Ae}function yt(){if(ke===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=Ae===null?ge.memoizedState:Ae.next;if(e!==null)Ae=e,ke=t;else{if(t===null)throw Error(I(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Ae===null?ge.memoizedState=Ae=t:Ae=Ae.next=t}return Ae}function Us(t,e){return typeof e=="function"?e(t):e}function Qa(t){var e=yt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((mr&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,ge.lanes|=c,gr|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Dt(r,e.memoizedState)||(Ze=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,gr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ya(t){var e=yt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Dt(s,e.memoizedState)||(Ze=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Pg(){}function xg(t,e){var n=ge,r=yt(),i=e(),s=!Dt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ze=!0),r=r.queue,yd(Og.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,js(9,Dg.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(I(349));mr&30||Ag(n,e,i)}return i}function Ag(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Dg(t,e,n,r){e.value=n,e.getSnapshot=r,Lg(e)&&Mg(t)}function Og(t,e,n){return n(function(){Lg(e)&&Mg(t)})}function Lg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Dt(t,n)}catch{return!0}}function Mg(t){var e=un(t,1);e!==null&&xt(e,t,1,-1)}function _f(t){var e=jt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Us,lastRenderedState:t},e.queue=t,t=t.dispatch=eE.bind(null,ge,t),[e.memoizedState,t]}function js(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function bg(){return yt().memoizedState}function Go(t,e,n,r){var i=jt();ge.flags|=t,i.memoizedState=js(1|e,n,void 0,r===void 0?null:r)}function ea(t,e,n,r){var i=yt();r=r===void 0?null:r;var s=void 0;if(ke!==null){var o=ke.memoizedState;if(s=o.destroy,r!==null&&gd(r,o.deps)){i.memoizedState=js(e,n,s,r);return}}ge.flags|=t,i.memoizedState=js(1|e,n,s,r)}function vf(t,e){return Go(8390656,8,t,e)}function yd(t,e){return ea(2048,8,t,e)}function Fg(t,e){return ea(4,2,t,e)}function Ug(t,e){return ea(4,4,t,e)}function jg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zg(t,e,n){return n=n!=null?n.concat([t]):null,ea(4,4,jg.bind(null,e,t),n)}function wd(){}function Bg(t,e){var n=yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Wg(t,e){var n=yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Hg(t,e,n){return mr&21?(Dt(n,e)||(n=Km(),ge.lanes|=n,gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ze=!0),t.memoizedState=n)}function Jw(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=qa.transition;qa.transition={};try{t(!1),e()}finally{J=n,qa.transition=r}}function $g(){return yt().memoizedState}function Zw(t,e,n){var r=jn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vg(t))Kg(e,n);else if(n=Sg(t,e,n,r),n!==null){var i=Qe();xt(n,t,r,i),Gg(n,e,r)}}function eE(t,e,n){var r=jn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vg(t))Kg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Dt(l,o)){var a=e.interleaved;a===null?(i.next=i,dd(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Sg(t,e,i,r),n!==null&&(i=Qe(),xt(n,t,r,i),Gg(n,e,r))}}function Vg(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function Kg(t,e){ms=yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Gg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xc(t,n)}}var wl={readContext:vt,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},tE={readContext:vt,useCallback:function(t,e){return jt().memoizedState=[t,e===void 0?null:e],t},useContext:vt,useEffect:vf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Go(4194308,4,jg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Go(4194308,4,t,e)},useInsertionEffect:function(t,e){return Go(4,2,t,e)},useMemo:function(t,e){var n=jt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=jt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Zw.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=jt();return t={current:t},e.memoizedState=t},useState:_f,useDebugValue:wd,useDeferredValue:function(t){return jt().memoizedState=t},useTransition:function(){var t=_f(!1),e=t[0];return t=Jw.bind(null,t[1]),jt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=jt();if(fe){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Le===null)throw Error(I(349));mr&30||Ag(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,vf(Og.bind(null,r,s,t),[t]),r.flags|=2048,js(9,Dg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=jt(),e=Le.identifierPrefix;if(fe){var n=Zt,r=Jt;n=(r&~(1<<32-Pt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Xw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nE={readContext:vt,useCallback:Bg,useContext:vt,useEffect:yd,useImperativeHandle:zg,useInsertionEffect:Fg,useLayoutEffect:Ug,useMemo:Wg,useReducer:Qa,useRef:bg,useState:function(){return Qa(Us)},useDebugValue:wd,useDeferredValue:function(t){var e=yt();return Hg(e,ke.memoizedState,t)},useTransition:function(){var t=Qa(Us)[0],e=yt().memoizedState;return[t,e]},useMutableSource:Pg,useSyncExternalStore:xg,useId:$g,unstable_isNewReconciler:!1},rE={readContext:vt,useCallback:Bg,useContext:vt,useEffect:yd,useImperativeHandle:zg,useInsertionEffect:Fg,useLayoutEffect:Ug,useMemo:Wg,useReducer:Ya,useRef:bg,useState:function(){return Ya(Us)},useDebugValue:wd,useDeferredValue:function(t){var e=yt();return ke===null?e.memoizedState=t:Hg(e,ke.memoizedState,t)},useTransition:function(){var t=Ya(Us)[0],e=yt().memoizedState;return[t,e]},useMutableSource:Pg,useSyncExternalStore:xg,useId:$g,unstable_isNewReconciler:!1};function _i(t,e){try{var n="",r=e;do n+=A0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Xa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ju(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iE=typeof WeakMap=="function"?WeakMap:Map;function qg(t,e,n){n=rn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Sl||(Sl=!0,ac=r),Ju(t,e)},n}function Qg(t,e,n){n=rn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ju(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ju(t,e),typeof r!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function yf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=vE.bind(null,t,e,n),e.then(t,t))}function wf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ef(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=rn(-1,1),e.tag=2,Fn(n,e,1))),n.lanes|=1),t)}var sE=fn.ReactCurrentOwner,Ze=!1;function qe(t,e,n,r){e.child=t===null?Rg(e,null,n,r):mi(e,t.child,n,r)}function Sf(t,e,n,r,i){n=n.render;var s=e.ref;return ii(e,i),r=_d(t,e,n,r,s,i),n=vd(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cn(t,e,i)):(fe&&n&&sd(e),e.flags|=1,qe(t,e,r,i),e.child)}function Cf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Nd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Yg(t,e,s,r,i)):(t=Xo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:As,n(o,r)&&t.ref===e.ref)return cn(t,e,i)}return e.flags|=1,t=zn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Yg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(As(s,r)&&t.ref===e.ref)if(Ze=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ze=!0);else return e.lanes=t.lanes,cn(t,e,i)}return Zu(t,e,n,r,i)}function Xg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(qr,st),st|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,oe(qr,st),st|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,oe(qr,st),st|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,oe(qr,st),st|=r;return qe(t,e,i,n),e.child}function Jg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zu(t,e,n,r,i){var s=nt(n)?fr:Ke.current;return s=fi(e,s),ii(e,i),n=_d(t,e,n,r,s,i),r=vd(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cn(t,e,i)):(fe&&r&&sd(e),e.flags|=1,qe(t,e,n,i),e.child)}function If(t,e,n,r,i){if(nt(n)){var s=!0;hl(e)}else s=!1;if(ii(e,i),e.stateNode===null)qo(t,e),Tg(e,n,r),Xu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=nt(n)?fr:Ke.current,u=fi(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&mf(e,o,r,u),In=!1;var h=e.memoizedState;o.state=h,_l(e,r,o,i),a=e.memoizedState,l!==r||h!==a||tt.current||In?(typeof c=="function"&&(Yu(e,n,c,r),a=e.memoizedState),(l=In||pf(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Cg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Ct(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=vt(a):(a=nt(n)?fr:Ke.current,a=fi(e,a));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&mf(e,o,r,a),In=!1,h=e.memoizedState,o.state=h,_l(e,r,o,i);var _=e.memoizedState;l!==d||h!==_||tt.current||In?(typeof v=="function"&&(Yu(e,n,v,r),_=e.memoizedState),(u=In||pf(e,n,u,r,h,_,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return ec(t,e,n,r,s,i)}function ec(t,e,n,r,i,s){Jg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&uf(e,n,!1),cn(t,e,s);r=e.stateNode,sE.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=mi(e,t.child,null,s),e.child=mi(e,null,l,s)):qe(t,e,l,s),e.memoizedState=r.state,i&&uf(e,n,!0),e.child}function Zg(t){var e=t.stateNode;e.pendingContext?af(t,e.pendingContext,e.pendingContext!==e.context):e.context&&af(t,e.context,!1),fd(t,e.containerInfo)}function Tf(t,e,n,r,i){return pi(),ld(i),e.flags|=256,qe(t,e,n,r),e.child}var tc={dehydrated:null,treeContext:null,retryLane:0};function nc(t){return{baseLanes:t,cachePool:null,transitions:null}}function e_(t,e,n){var r=e.pendingProps,i=me.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),oe(me,i&1),t===null)return qu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ra(o,r,0,null),t=cr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=nc(n),e.memoizedState=tc,t):Ed(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return oE(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=zn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=zn(l,s):(s=cr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?nc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=tc,r}return s=t.child,t=s.sibling,r=zn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ed(t,e){return e=ra({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Do(t,e,n,r){return r!==null&&ld(r),mi(e,t.child,null,n),t=Ed(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Xa(Error(I(422))),Do(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ra({mode:"visible",children:r.children},i,0,null),s=cr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&mi(e,t.child,null,o),e.child.memoizedState=nc(o),e.memoizedState=tc,s);if(!(e.mode&1))return Do(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(I(419)),r=Xa(s,r,void 0),Do(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ze||l){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,un(t,i),xt(r,t,i,-1))}return Rd(),r=Xa(Error(I(421))),Do(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=yE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ot=bn(i.nextSibling),lt=e,fe=!0,kt=null,t!==null&&(ft[pt++]=Jt,ft[pt++]=Zt,ft[pt++]=pr,Jt=t.id,Zt=t.overflow,pr=e),e=Ed(e,r.children),e.flags|=4096,e)}function kf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qu(t.return,e,n)}function Ja(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function t_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(qe(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kf(t,n,e);else if(t.tag===19)kf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(oe(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&vl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ja(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&vl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ja(e,!0,n,null,s);break;case"together":Ja(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=zn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lE(t,e,n){switch(e.tag){case 3:Zg(e),pi();break;case 5:Ng(e);break;case 1:nt(e.type)&&hl(e);break;case 4:fd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;oe(ml,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(oe(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?e_(t,e,n):(oe(me,me.current&1),t=cn(t,e,n),t!==null?t.sibling:null);oe(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return t_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,Xg(t,e,n)}return cn(t,e,n)}var n_,rc,r_,i_;n_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rc=function(){};r_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,or(Ht.current);var s=null;switch(n){case"input":i=Tu(t,i),r=Tu(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=Nu(t,i),r=Nu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=cl)}xu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Is.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Is.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&le("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};i_=function(t,e,n,r){n!==r&&(e.flags|=4)};function qi(t,e){if(!fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Be(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function aE(t,e,n){var r=e.pendingProps;switch(od(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(e),null;case 1:return nt(e.type)&&dl(),Be(e),null;case 3:return r=e.stateNode,gi(),de(tt),de(Ke),md(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kt!==null&&(dc(kt),kt=null))),rc(t,e),Be(e),null;case 5:pd(e);var i=or(bs.current);if(n=e.type,t!==null&&e.stateNode!=null)r_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return Be(e),null}if(t=or(Ht.current),xo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[zt]=e,r[Ls]=s,t=(e.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<ls.length;i++)le(ls[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Lh(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":bh(r,s),le("invalid",r)}xu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Po(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Po(r.textContent,l,t),i=["children",""+l]):Is.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":Eo(r),Mh(r,s,!0);break;case"textarea":Eo(r),Fh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=cl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Am(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[zt]=e,t[Ls]=r,n_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Au(n,r),n){case"dialog":le("cancel",t),le("close",t),i=r;break;case"iframe":case"object":case"embed":le("load",t),i=r;break;case"video":case"audio":for(i=0;i<ls.length;i++)le(ls[i],t);i=r;break;case"source":le("error",t),i=r;break;case"img":case"image":case"link":le("error",t),le("load",t),i=r;break;case"details":le("toggle",t),i=r;break;case"input":Lh(t,r),i=Tu(t,r),le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),le("invalid",t);break;case"textarea":bh(t,r),i=Nu(t,r),le("invalid",t);break;default:i=r}xu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Lm(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Dm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ts(t,a):typeof a=="number"&&Ts(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Is.hasOwnProperty(s)?a!=null&&s==="onScroll"&&le("scroll",t):a!=null&&Vc(t,s,a,o))}switch(n){case"input":Eo(t),Mh(t,r,!1);break;case"textarea":Eo(t),Fh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Vn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ei(t,!!r.multiple,s,!1):r.defaultValue!=null&&ei(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Be(e),null;case 6:if(t&&e.stateNode!=null)i_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=or(bs.current),or(Ht.current),xo(e)){if(r=e.stateNode,n=e.memoizedProps,r[zt]=e,(s=r.nodeValue!==n)&&(t=lt,t!==null))switch(t.tag){case 3:Po(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Po(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=e,e.stateNode=r}return Be(e),null;case 13:if(de(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(fe&&ot!==null&&e.mode&1&&!(e.flags&128))Eg(),pi(),e.flags|=98560,s=!1;else if(s=xo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[zt]=e}else pi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Be(e),s=!1}else kt!==null&&(dc(kt),kt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?Re===0&&(Re=3):Rd())),e.updateQueue!==null&&(e.flags|=4),Be(e),null);case 4:return gi(),rc(t,e),t===null&&Ds(e.stateNode.containerInfo),Be(e),null;case 10:return cd(e.type._context),Be(e),null;case 17:return nt(e.type)&&dl(),Be(e),null;case 19:if(de(me),s=e.memoizedState,s===null)return Be(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)qi(s,!1);else{if(Re!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vl(t),o!==null){for(e.flags|=128,qi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return oe(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&we()>vi&&(e.flags|=128,r=!0,qi(s,!1),e.lanes=4194304)}else{if(!r)if(t=vl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!fe)return Be(e),null}else 2*we()-s.renderingStartTime>vi&&n!==1073741824&&(e.flags|=128,r=!0,qi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=we(),e.sibling=null,n=me.current,oe(me,r?n&1|2:n&1),e):(Be(e),null);case 22:case 23:return kd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?st&1073741824&&(Be(e),e.subtreeFlags&6&&(e.flags|=8192)):Be(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function uE(t,e){switch(od(e),e.tag){case 1:return nt(e.type)&&dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return gi(),de(tt),de(Ke),md(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pd(e),null;case 13:if(de(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));pi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(me),null;case 4:return gi(),null;case 10:return cd(e.type._context),null;case 22:case 23:return kd(),null;case 24:return null;default:return null}}var Oo=!1,We=!1,cE=typeof WeakSet=="function"?WeakSet:Set,O=null;function Gr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(t,e,r)}else n.current=null}function ic(t,e,n){try{n()}catch(r){ve(t,e,r)}}var Rf=!1;function dE(t,e){if(Bu=ll,t=ag(),id(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)h=d,d=v;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(v=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=v}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wu={focusedElem:t,selectionRange:n},ll=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,T=_.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:Ct(e.type,y),T);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(p){ve(e,e.return,p)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return _=Rf,Rf=!1,_}function gs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ic(e,n,s)}i=i.next}while(i!==r)}}function ta(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function sc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function s_(t){var e=t.alternate;e!==null&&(t.alternate=null,s_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[zt],delete e[Ls],delete e[Vu],delete e[Gw],delete e[qw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function o_(t){return t.tag===5||t.tag===3||t.tag===4}function Nf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||o_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function oc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cl));else if(r!==4&&(t=t.child,t!==null))for(oc(t,e,n),t=t.sibling;t!==null;)oc(t,e,n),t=t.sibling}function lc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(lc(t,e,n),t=t.sibling;t!==null;)lc(t,e,n),t=t.sibling}var Me=null,It=!1;function En(t,e,n){for(n=n.child;n!==null;)l_(t,e,n),n=n.sibling}function l_(t,e,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Gl,n)}catch{}switch(n.tag){case 5:We||Gr(n,e);case 6:var r=Me,i=It;Me=null,En(t,e,n),Me=r,It=i,Me!==null&&(It?(t=Me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(It?(t=Me,n=n.stateNode,t.nodeType===8?Va(t.parentNode,n):t.nodeType===1&&Va(t,n),Ps(t)):Va(Me,n.stateNode));break;case 4:r=Me,i=It,Me=n.stateNode.containerInfo,It=!0,En(t,e,n),Me=r,It=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ic(n,e,o),i=i.next}while(i!==r)}En(t,e,n);break;case 1:if(!We&&(Gr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ve(n,e,l)}En(t,e,n);break;case 21:En(t,e,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,En(t,e,n),We=r):En(t,e,n);break;default:En(t,e,n)}}function Pf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cE),e.forEach(function(r){var i=wE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function St(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Me=l.stateNode,It=!1;break e;case 3:Me=l.stateNode.containerInfo,It=!0;break e;case 4:Me=l.stateNode.containerInfo,It=!0;break e}l=l.return}if(Me===null)throw Error(I(160));l_(s,o,i),Me=null,It=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)a_(e,t),e=e.sibling}function a_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(St(e,t),Ut(t),r&4){try{gs(3,t,t.return),ta(3,t)}catch(y){ve(t,t.return,y)}try{gs(5,t,t.return)}catch(y){ve(t,t.return,y)}}break;case 1:St(e,t),Ut(t),r&512&&n!==null&&Gr(n,n.return);break;case 5:if(St(e,t),Ut(t),r&512&&n!==null&&Gr(n,n.return),t.flags&32){var i=t.stateNode;try{Ts(i,"")}catch(y){ve(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Pm(i,s),Au(l,o);var u=Au(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?Lm(i,d):c==="dangerouslySetInnerHTML"?Dm(i,d):c==="children"?Ts(i,d):Vc(i,c,d,u)}switch(l){case"input":ku(i,s);break;case"textarea":xm(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?ei(i,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?ei(i,!!s.multiple,s.defaultValue,!0):ei(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ls]=s}catch(y){ve(t,t.return,y)}}break;case 6:if(St(e,t),Ut(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ve(t,t.return,y)}}break;case 3:if(St(e,t),Ut(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ps(e.containerInfo)}catch(y){ve(t,t.return,y)}break;case 4:St(e,t),Ut(t);break;case 13:St(e,t),Ut(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Id=we())),r&4&&Pf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(We=(u=We)||c,St(e,t),We=u):St(e,t),Ut(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(O=t,c=t.child;c!==null;){for(d=O=c;O!==null;){switch(h=O,v=h.child,h.tag){case 0:case 11:case 14:case 15:gs(4,h,h.return);break;case 1:Gr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){ve(r,n,y)}}break;case 5:Gr(h,h.return);break;case 22:if(h.memoizedState!==null){Af(d);continue}}v!==null?(v.return=h,O=v):Af(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Om("display",o))}catch(y){ve(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){ve(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:St(e,t),Ut(t),r&4&&Pf(t);break;case 21:break;default:St(e,t),Ut(t)}}function Ut(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(o_(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ts(i,""),r.flags&=-33);var s=Nf(t);lc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Nf(t);oc(t,l,o);break;default:throw Error(I(161))}}catch(a){ve(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hE(t,e,n){O=t,u_(t)}function u_(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Oo;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||We;l=Oo;var u=We;if(Oo=o,(We=a)&&!u)for(O=i;O!==null;)o=O,a=o.child,o.tag===22&&o.memoizedState!==null?Df(i):a!==null?(a.return=o,O=a):Df(i);for(;s!==null;)O=s,u_(s),s=s.sibling;O=i,Oo=l,We=u}xf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):xf(t)}}function xf(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:We||ta(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ct(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ff(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ff(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ps(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}We||e.flags&512&&sc(e)}catch(h){ve(e,e.return,h)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function Af(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function Df(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ta(4,e)}catch(a){ve(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ve(e,i,a)}}var s=e.return;try{sc(e)}catch(a){ve(e,s,a)}break;case 5:var o=e.return;try{sc(e)}catch(a){ve(e,o,a)}}}catch(a){ve(e,e.return,a)}if(e===t){O=null;break}var l=e.sibling;if(l!==null){l.return=e.return,O=l;break}O=e.return}}var fE=Math.ceil,El=fn.ReactCurrentDispatcher,Sd=fn.ReactCurrentOwner,_t=fn.ReactCurrentBatchConfig,Y=0,Le=null,Ce=null,Fe=0,st=0,qr=Qn(0),Re=0,zs=null,gr=0,na=0,Cd=0,_s=null,Je=null,Id=0,vi=1/0,Yt=null,Sl=!1,ac=null,Un=null,Lo=!1,Dn=null,Cl=0,vs=0,uc=null,Qo=-1,Yo=0;function Qe(){return Y&6?we():Qo!==-1?Qo:Qo=we()}function jn(t){return t.mode&1?Y&2&&Fe!==0?Fe&-Fe:Yw.transition!==null?(Yo===0&&(Yo=Km()),Yo):(t=J,t!==0||(t=window.event,t=t===void 0?16:Zm(t.type)),t):1}function xt(t,e,n,r){if(50<vs)throw vs=0,uc=null,Error(I(185));Zs(t,n,r),(!(Y&2)||t!==Le)&&(t===Le&&(!(Y&2)&&(na|=n),Re===4&&kn(t,Fe)),rt(t,r),n===1&&Y===0&&!(e.mode&1)&&(vi=we()+500,Jl&&Yn()))}function rt(t,e){var n=t.callbackNode;Y0(t,e);var r=ol(t,t===Le?Fe:0);if(r===0)n!==null&&zh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&zh(n),e===1)t.tag===0?Qw(Of.bind(null,t)):vg(Of.bind(null,t)),Vw(function(){!(Y&6)&&Yn()}),n=null;else{switch(Gm(r)){case 1:n=Yc;break;case 4:n=$m;break;case 16:n=sl;break;case 536870912:n=Vm;break;default:n=sl}n=__(n,c_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function c_(t,e){if(Qo=-1,Yo=0,Y&6)throw Error(I(327));var n=t.callbackNode;if(si()&&t.callbackNode!==n)return null;var r=ol(t,t===Le?Fe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Il(t,r);else{e=r;var i=Y;Y|=2;var s=h_();(Le!==t||Fe!==e)&&(Yt=null,vi=we()+500,ur(t,e));do try{gE();break}catch(l){d_(t,l)}while(1);ud(),El.current=s,Y=i,Ce!==null?e=0:(Le=null,Fe=0,e=Re)}if(e!==0){if(e===2&&(i=bu(t),i!==0&&(r=i,e=cc(t,i))),e===1)throw n=zs,ur(t,0),kn(t,r),rt(t,we()),n;if(e===6)kn(t,r);else{if(i=t.current.alternate,!(r&30)&&!pE(i)&&(e=Il(t,r),e===2&&(s=bu(t),s!==0&&(r=s,e=cc(t,s))),e===1))throw n=zs,ur(t,0),kn(t,r),rt(t,we()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:tr(t,Je,Yt);break;case 3:if(kn(t,r),(r&130023424)===r&&(e=Id+500-we(),10<e)){if(ol(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$u(tr.bind(null,t,Je,Yt),e);break}tr(t,Je,Yt);break;case 4:if(kn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Pt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fE(r/1960))-r,10<r){t.timeoutHandle=$u(tr.bind(null,t,Je,Yt),r);break}tr(t,Je,Yt);break;case 5:tr(t,Je,Yt);break;default:throw Error(I(329))}}}return rt(t,we()),t.callbackNode===n?c_.bind(null,t):null}function cc(t,e){var n=_s;return t.current.memoizedState.isDehydrated&&(ur(t,e).flags|=256),t=Il(t,e),t!==2&&(e=Je,Je=n,e!==null&&dc(e)),t}function dc(t){Je===null?Je=t:Je.push.apply(Je,t)}function pE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Dt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kn(t,e){for(e&=~Cd,e&=~na,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Pt(e),r=1<<n;t[n]=-1,e&=~r}}function Of(t){if(Y&6)throw Error(I(327));si();var e=ol(t,0);if(!(e&1))return rt(t,we()),null;var n=Il(t,e);if(t.tag!==0&&n===2){var r=bu(t);r!==0&&(e=r,n=cc(t,r))}if(n===1)throw n=zs,ur(t,0),kn(t,e),rt(t,we()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,tr(t,Je,Yt),rt(t,we()),null}function Td(t,e){var n=Y;Y|=1;try{return t(e)}finally{Y=n,Y===0&&(vi=we()+500,Jl&&Yn())}}function _r(t){Dn!==null&&Dn.tag===0&&!(Y&6)&&si();var e=Y;Y|=1;var n=_t.transition,r=J;try{if(_t.transition=null,J=1,t)return t()}finally{J=r,_t.transition=n,Y=e,!(Y&6)&&Yn()}}function kd(){st=qr.current,de(qr)}function ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$w(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(od(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:gi(),de(tt),de(Ke),md();break;case 5:pd(r);break;case 4:gi();break;case 13:de(me);break;case 19:de(me);break;case 10:cd(r.type._context);break;case 22:case 23:kd()}n=n.return}if(Le=t,Ce=t=zn(t.current,null),Fe=st=e,Re=0,zs=null,Cd=na=gr=0,Je=_s=null,sr!==null){for(e=0;e<sr.length;e++)if(n=sr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}sr=null}return t}function d_(t,e){do{var n=Ce;try{if(ud(),Ko.current=wl,yl){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}yl=!1}if(mr=0,Ae=ke=ge=null,ms=!1,Fs=0,Sd.current=null,n===null||n.return===null){Re=1,zs=e,Ce=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Fe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=wf(o);if(v!==null){v.flags&=-257,Ef(v,o,l,s,e),v.mode&1&&yf(s,u,e),e=v,a=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(a),e.updateQueue=y}else _.add(a);break e}else{if(!(e&1)){yf(s,u,e),Rd();break e}a=Error(I(426))}}else if(fe&&l.mode&1){var T=wf(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Ef(T,o,l,s,e),ld(_i(a,l));break e}}s=a=_i(a,l),Re!==4&&(Re=2),_s===null?_s=[s]:_s.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=qg(s,a,e);hf(s,m);break e;case 1:l=a;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Un===null||!Un.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var p=Qg(s,l,e);hf(s,p);break e}}s=s.return}while(s!==null)}p_(n)}catch(C){e=C,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(1)}function h_(){var t=El.current;return El.current=wl,t===null?wl:t}function Rd(){(Re===0||Re===3||Re===2)&&(Re=4),Le===null||!(gr&268435455)&&!(na&268435455)||kn(Le,Fe)}function Il(t,e){var n=Y;Y|=2;var r=h_();(Le!==t||Fe!==e)&&(Yt=null,ur(t,e));do try{mE();break}catch(i){d_(t,i)}while(1);if(ud(),Y=n,El.current=r,Ce!==null)throw Error(I(261));return Le=null,Fe=0,Re}function mE(){for(;Ce!==null;)f_(Ce)}function gE(){for(;Ce!==null&&!B0();)f_(Ce)}function f_(t){var e=g_(t.alternate,t,st);t.memoizedProps=t.pendingProps,e===null?p_(t):Ce=e,Sd.current=null}function p_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uE(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Re=6,Ce=null;return}}else if(n=aE(n,e,st),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);Re===0&&(Re=5)}function tr(t,e,n){var r=J,i=_t.transition;try{_t.transition=null,J=1,_E(t,e,n,r)}finally{_t.transition=i,J=r}return null}function _E(t,e,n,r){do si();while(Dn!==null);if(Y&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(X0(t,s),t===Le&&(Ce=Le=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lo||(Lo=!0,__(sl,function(){return si(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=_t.transition,_t.transition=null;var o=J;J=1;var l=Y;Y|=4,Sd.current=null,dE(t,n),a_(n,t),Fw(Wu),ll=!!Bu,Wu=Bu=null,t.current=n,hE(n),W0(),Y=l,J=o,_t.transition=s}else t.current=n;if(Lo&&(Lo=!1,Dn=t,Cl=i),s=t.pendingLanes,s===0&&(Un=null),V0(n.stateNode),rt(t,we()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sl)throw Sl=!1,t=ac,ac=null,t;return Cl&1&&t.tag!==0&&si(),s=t.pendingLanes,s&1?t===uc?vs++:(vs=0,uc=t):vs=0,Yn(),null}function si(){if(Dn!==null){var t=Gm(Cl),e=_t.transition,n=J;try{if(_t.transition=null,J=16>t?16:t,Dn===null)var r=!1;else{if(t=Dn,Dn=null,Cl=0,Y&6)throw Error(I(331));var i=Y;for(Y|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:gs(8,c,s)}var d=c.child;if(d!==null)d.return=c,O=d;else for(;O!==null;){c=O;var h=c.sibling,v=c.return;if(s_(c),c===u){O=null;break}if(h!==null){h.return=v,O=h;break}O=v}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var T=y.sibling;y.sibling=null,y=T}while(y!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:gs(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,O=m;break e}O=s.return}}var f=t.current;for(O=f;O!==null;){o=O;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,O=g;else e:for(o=f;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ta(9,l)}}catch(C){ve(l,l.return,C)}if(l===o){O=null;break e}var p=l.sibling;if(p!==null){p.return=l.return,O=p;break e}O=l.return}}if(Y=i,Yn(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Gl,t)}catch{}r=!0}return r}finally{J=n,_t.transition=e}}return!1}function Lf(t,e,n){e=_i(n,e),e=qg(t,e,1),t=Fn(t,e,1),e=Qe(),t!==null&&(Zs(t,1,e),rt(t,e))}function ve(t,e,n){if(t.tag===3)Lf(t,t,n);else for(;e!==null;){if(e.tag===3){Lf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Un===null||!Un.has(r))){t=_i(n,t),t=Qg(e,t,1),e=Fn(e,t,1),t=Qe(),e!==null&&(Zs(e,1,t),rt(e,t));break}}e=e.return}}function vE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Qe(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(Fe&n)===n&&(Re===4||Re===3&&(Fe&130023424)===Fe&&500>we()-Id?ur(t,0):Cd|=n),rt(t,e)}function m_(t,e){e===0&&(t.mode&1?(e=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):e=1);var n=Qe();t=un(t,e),t!==null&&(Zs(t,e,n),rt(t,n))}function yE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),m_(t,n)}function wE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),m_(t,n)}var g_;g_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tt.current)Ze=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ze=!1,lE(t,e,n);Ze=!!(t.flags&131072)}else Ze=!1,fe&&e.flags&1048576&&yg(e,pl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;qo(t,e),t=e.pendingProps;var i=fi(e,Ke.current);ii(e,n),i=_d(null,e,r,t,i,n);var s=vd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nt(r)?(s=!0,hl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hd(e),i.updater=Zl,e.stateNode=i,i._reactInternals=e,Xu(e,r,t,n),e=ec(null,e,r,!0,s,n)):(e.tag=0,fe&&s&&sd(e),qe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(qo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=SE(r),t=Ct(r,t),i){case 0:e=Zu(null,e,r,t,n);break e;case 1:e=If(null,e,r,t,n);break e;case 11:e=Sf(null,e,r,t,n);break e;case 14:e=Cf(null,e,r,Ct(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ct(r,i),Zu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ct(r,i),If(t,e,r,i,n);case 3:e:{if(Zg(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Cg(t,e),_l(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=_i(Error(I(423)),e),e=Tf(t,e,r,n,i);break e}else if(r!==i){i=_i(Error(I(424)),e),e=Tf(t,e,r,n,i);break e}else for(ot=bn(e.stateNode.containerInfo.firstChild),lt=e,fe=!0,kt=null,n=Rg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pi(),r===i){e=cn(t,e,n);break e}qe(t,e,r,n)}e=e.child}return e;case 5:return Ng(e),t===null&&qu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Hu(r,i)?o=null:s!==null&&Hu(r,s)&&(e.flags|=32),Jg(t,e),qe(t,e,o,n),e.child;case 6:return t===null&&qu(e),null;case 13:return e_(t,e,n);case 4:return fd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=mi(e,null,r,n):qe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ct(r,i),Sf(t,e,r,i,n);case 7:return qe(t,e,e.pendingProps,n),e.child;case 8:return qe(t,e,e.pendingProps.children,n),e.child;case 12:return qe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,oe(ml,r._currentValue),r._currentValue=o,s!==null)if(Dt(s.value,o)){if(s.children===i.children&&!tt.current){e=cn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=rn(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Qu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Qu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ii(e,n),i=vt(i),r=r(i),e.flags|=1,qe(t,e,r,n),e.child;case 14:return r=e.type,i=Ct(r,e.pendingProps),i=Ct(r.type,i),Cf(t,e,r,i,n);case 15:return Yg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ct(r,i),qo(t,e),e.tag=1,nt(r)?(t=!0,hl(e)):t=!1,ii(e,n),Tg(e,r,i),Xu(e,r,i,n),ec(null,e,r,!0,t,n);case 19:return t_(t,e,n);case 22:return Xg(t,e,n)}throw Error(I(156,e.tag))};function __(t,e){return Hm(t,e)}function EE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(t,e,n,r){return new EE(t,e,n,r)}function Nd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SE(t){if(typeof t=="function")return Nd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gc)return 11;if(t===qc)return 14}return 2}function zn(t,e){var n=t.alternate;return n===null?(n=mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Nd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ur:return cr(n.children,i,s,e);case Kc:o=8,i|=8;break;case Eu:return t=mt(12,n,e,i|2),t.elementType=Eu,t.lanes=s,t;case Su:return t=mt(13,n,e,i),t.elementType=Su,t.lanes=s,t;case Cu:return t=mt(19,n,e,i),t.elementType=Cu,t.lanes=s,t;case km:return ra(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Im:o=10;break e;case Tm:o=9;break e;case Gc:o=11;break e;case qc:o=14;break e;case Cn:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=mt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function cr(t,e,n,r){return t=mt(7,t,r,e),t.lanes=n,t}function ra(t,e,n,r){return t=mt(22,t,r,e),t.elementType=km,t.lanes=n,t.stateNode={isHidden:!1},t}function Za(t,e,n){return t=mt(6,t,null,e),t.lanes=n,t}function eu(t,e,n){return e=mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function CE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=La(0),this.expirationTimes=La(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=La(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pd(t,e,n,r,i,s,o,l,a){return t=new CE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hd(s),t}function IE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function v_(t){if(!t)return Kn;t=t._reactInternals;e:{if(Nr(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(nt(n))return _g(t,n,e)}return e}function y_(t,e,n,r,i,s,o,l,a){return t=Pd(n,r,!0,t,i,s,o,l,a),t.context=v_(null),n=t.current,r=Qe(),i=jn(n),s=rn(r,i),s.callback=e??null,Fn(n,s,i),t.current.lanes=i,Zs(t,i,r),rt(t,r),t}function ia(t,e,n,r){var i=e.current,s=Qe(),o=jn(i);return n=v_(n),e.context===null?e.context=n:e.pendingContext=n,e=rn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Fn(i,e,o),t!==null&&(xt(t,i,o,s),Vo(t,i,o)),o}function Tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xd(t,e){Mf(t,e),(t=t.alternate)&&Mf(t,e)}function TE(){return null}var w_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ad(t){this._internalRoot=t}sa.prototype.render=Ad.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));ia(t,e,null,null)};sa.prototype.unmount=Ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_r(function(){ia(null,t,null,null)}),e[an]=null}};function sa(t){this._internalRoot=t}sa.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ym();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Tn.length&&e!==0&&e<Tn[n].priority;n++);Tn.splice(n,0,t),n===0&&Jm(t)}};function Dd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function oa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bf(){}function kE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Tl(o);s.call(u)}}var o=y_(e,r,t,0,null,!1,!1,"",bf);return t._reactRootContainer=o,t[an]=o.current,Ds(t.nodeType===8?t.parentNode:t),_r(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Tl(a);l.call(u)}}var a=Pd(t,0,!1,null,null,!1,!1,"",bf);return t._reactRootContainer=a,t[an]=a.current,Ds(t.nodeType===8?t.parentNode:t),_r(function(){ia(e,a,n,r)}),a}function la(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Tl(o);l.call(a)}}ia(e,o,t,i)}else o=kE(n,e,t,i,r);return Tl(o)}qm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=os(e.pendingLanes);n!==0&&(Xc(e,n|1),rt(e,we()),!(Y&6)&&(vi=we()+500,Yn()))}break;case 13:_r(function(){var r=un(t,1);if(r!==null){var i=Qe();xt(r,t,1,i)}}),xd(t,1)}};Jc=function(t){if(t.tag===13){var e=un(t,134217728);if(e!==null){var n=Qe();xt(e,t,134217728,n)}xd(t,134217728)}};Qm=function(t){if(t.tag===13){var e=jn(t),n=un(t,e);if(n!==null){var r=Qe();xt(n,t,e,r)}xd(t,e)}};Ym=function(){return J};Xm=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};Ou=function(t,e,n){switch(e){case"input":if(ku(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Xl(r);if(!i)throw Error(I(90));Nm(r),ku(r,i)}}}break;case"textarea":xm(t,n);break;case"select":e=n.value,e!=null&&ei(t,!!n.multiple,e,!1)}};Fm=Td;Um=_r;var RE={usingClientEntryPoint:!1,Events:[to,Wr,Xl,Mm,bm,Td]},Qi={findFiberByHostInstance:ir,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},NE={bundleType:Qi.bundleType,version:Qi.version,rendererPackageName:Qi.rendererPackageName,rendererConfig:Qi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Bm(t),t===null?null:t.stateNode},findFiberByHostInstance:Qi.findFiberByHostInstance||TE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{Gl=Mo.inject(NE),Wt=Mo}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RE;ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dd(e))throw Error(I(200));return IE(t,e,null,n)};ct.createRoot=function(t,e){if(!Dd(t))throw Error(I(299));var n=!1,r="",i=w_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pd(t,1,!1,null,null,n,!1,r,i),t[an]=e.current,Ds(t.nodeType===8?t.parentNode:t),new Ad(e)};ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=Bm(e),t=t===null?null:t.stateNode,t};ct.flushSync=function(t){return _r(t)};ct.hydrate=function(t,e,n){if(!oa(e))throw Error(I(200));return la(null,t,e,!0,n)};ct.hydrateRoot=function(t,e,n){if(!Dd(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=w_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=y_(e,null,t,1,n??null,i,!1,s,o),t[an]=e.current,Ds(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new sa(e)};ct.render=function(t,e,n){if(!oa(e))throw Error(I(200));return la(null,t,e,!1,n)};ct.unmountComponentAtNode=function(t){if(!oa(t))throw Error(I(40));return t._reactRootContainer?(_r(function(){la(null,null,t,!1,function(){t._reactRootContainer=null,t[an]=null})}),!0):!1};ct.unstable_batchedUpdates=Td;ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!oa(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return la(t,e,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";function E_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E_)}catch(t){console.error(t)}}E_(),ym.exports=ct;var PE=ym.exports,Ff=PE;yu.createRoot=Ff.createRoot,yu.hydrateRoot=Ff.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ue(){return ue=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ue.apply(this,arguments)}var Se;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Se||(Se={}));const Uf="popstate";function xE(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:a=""}=Kt(i.location.hash.substr(1));return Bs("",{pathname:o,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let a=i.location.href,u=a.indexOf("#");l=u===-1?a:a.slice(0,u)}return l+"#"+(typeof s=="string"?s:yr(s))}function r(i,s){vr(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return DE(e,n,r,t)}function V(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function vr(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function AE(){return Math.random().toString(36).substr(2,8)}function jf(t,e){return{usr:t.state,key:t.key,idx:e}}function Bs(t,e,n,r){return n===void 0&&(n=null),ue({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Kt(e):e,{state:n,key:e&&e.key||r||AE()})}function yr(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Kt(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function DE(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Se.Pop,a=null,u=c();u==null&&(u=0,o.replaceState(ue({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){l=Se.Pop;let T=c(),m=T==null?null:T-u;u=T,a&&a({action:l,location:y.location,delta:m})}function h(T,m){l=Se.Push;let f=Bs(y.location,T,m);n&&n(f,T),u=c()+1;let g=jf(f,u),p=y.createHref(f);try{o.pushState(g,"",p)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(p)}s&&a&&a({action:l,location:y.location,delta:1})}function v(T,m){l=Se.Replace;let f=Bs(y.location,T,m);n&&n(f,T),u=c();let g=jf(f,u),p=y.createHref(f);o.replaceState(g,"",p),s&&a&&a({action:l,location:y.location,delta:0})}function _(T){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof T=="string"?T:yr(T);return V(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let y={get action(){return l},get location(){return t(i,o)},listen(T){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Uf,d),a=T,()=>{i.removeEventListener(Uf,d),a=null}},createHref(T){return e(i,T)},createURL:_,encodeLocation(T){let m=_(T);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:v,go(T){return o.go(T)}};return y}var Te;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Te||(Te={}));const OE=new Set(["lazy","caseSensitive","path","id","index","children"]);function LE(t){return t.index===!0}function hc(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],l=typeof i.id=="string"?i.id:o.join("-");if(V(i.index!==!0||!i.children,"Cannot specify children on an index route"),V(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),LE(i)){let a=ue({},i,e(i),{id:l});return r[l]=a,a}else{let a=ue({},i,e(i),{id:l,children:void 0});return r[l]=a,i.children&&(a.children=hc(i.children,e,o,r)),a}})}function Qr(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Kt(e):e,i=ki(r.pathname||"/",n);if(i==null)return null;let s=S_(t);ME(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=$E(s[l],GE(i));return o}function S_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(V(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=sn([r,a.relativePath]),c=n.concat(a);s.children&&s.children.length>0&&(V(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),S_(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:WE(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of C_(s.path))i(s,o,a)}),e}function C_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=C_(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function ME(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:HE(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bE=/^:\w+$/,FE=3,UE=2,jE=1,zE=10,BE=-2,zf=t=>t==="*";function WE(t,e){let n=t.split("/"),r=n.length;return n.some(zf)&&(r+=BE),e&&(r+=UE),n.filter(i=>!zf(i)).reduce((i,s)=>i+(bE.test(s)?FE:s===""?jE:zE),r)}function HE(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function $E(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=VE({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;s.push({params:r,pathname:sn([i,c.pathname]),pathnameBase:XE(sn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=sn([i,c.pathnameBase]))}return s}function VE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=KE(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=l[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=qE(l[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function KE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),vr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function GE(t){try{return decodeURI(t)}catch(e){return vr(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function qE(t,e){try{return decodeURIComponent(t)}catch(n){return vr(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ki(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function QE(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Kt(t):t;return{pathname:n?n.startsWith("/")?n:YE(n,e):e,search:JE(r),hash:ZE(i)}}function YE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function tu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ro(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function aa(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Kt(t):(i=ue({},t),V(!i.pathname||!i.pathname.includes("?"),tu("?","pathname","search",i)),V(!i.pathname||!i.pathname.includes("#"),tu("#","pathname","hash",i)),V(!i.search||!i.search.includes("#"),tu("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?e[d]:"/"}let a=QE(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const sn=t=>t.join("/").replace(/\/\/+/g,"/"),XE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),JE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ZE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,fc=function(e,n){n===void 0&&(n=302);let r=n;typeof r=="number"?r={status:r}:typeof r.status>"u"&&(r.status=302);let i=new Headers(r.headers);return i.set("Location",e),new Response(null,ue({},r,{headers:i}))};class Od{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function I_(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const T_=["post","put","patch","delete"],eS=new Set(T_),tS=["get",...T_],nS=new Set(tS),rS=new Set([301,302,303,307,308]),iS=new Set([307,308]),nu={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},sS={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Yi={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},k_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oS=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function lS(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;V(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let w=t.detectErrorBoundary;i=E=>({hasErrorBoundary:w(E)})}else i=oS;let s={},o=hc(t.routes,i,void 0,s),l,a=t.basename||"/",u=ue({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,h=null,v=null,_=null,y=t.hydrationData!=null,T=Qr(o,t.history.location,a),m=null;if(T==null){let w=ht(404,{pathname:t.history.location.pathname}),{matches:E,route:S}=qf(o);T=E,m={[S.id]:w}}let f=!T.some(w=>w.route.lazy)&&(!T.some(w=>w.route.loader)||t.hydrationData!=null),g,p={historyAction:t.history.action,location:t.history.location,matches:T,initialized:f,navigation:nu,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||m,fetchers:new Map,blockers:new Map},C=Se.Pop,N=!1,k,D=!1,$=!1,U=[],Ne=[],re=new Map,Mt=0,gn=-1,_n=new Map,it=new Set,bt=new Map,A=new Map,F=new Map,H=!1;function pe(){return c=t.history.listen(w=>{let{action:E,location:S,delta:L}=w;if(H){H=!1;return}vr(F.size===0||L!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let W=Ih({currentLocation:p.location,nextLocation:S,historyAction:E});if(W&&L!=null){H=!0,t.history.go(L*-1),_o(W,{state:"blocked",location:S,proceed(){_o(W,{state:"proceeding",proceed:void 0,reset:void 0,location:S}),t.history.go(L)},reset(){let z=new Map(p.blockers);z.set(W,Yi),ie({blockers:z})}});return}return vn(E,S)}),p.initialized||vn(Se.Pop,p.location),g}function Ee(){c&&c(),d.clear(),k&&k.abort(),p.fetchers.forEach((w,E)=>Ea(E)),p.blockers.forEach((w,E)=>Ch(E))}function Ar(w){return d.add(w),()=>d.delete(w)}function ie(w){p=ue({},p,w),d.forEach(E=>E(p))}function Gt(w,E){var S,L;let W=p.actionData!=null&&p.navigation.formMethod!=null&&Tt(p.navigation.formMethod)&&p.navigation.state==="loading"&&((S=w.state)==null?void 0:S._isRedirect)!==!0,z;E.actionData?Object.keys(E.actionData).length>0?z=E.actionData:z=null:W?z=p.actionData:z=null;let B=E.loaderData?Gf(p.loaderData,E.loaderData,E.matches||[],E.errors):p.loaderData,b=p.blockers;b.size>0&&(b=new Map(b),b.forEach((se,je)=>b.set(je,Yi)));let M=N===!0||p.navigation.formMethod!=null&&Tt(p.navigation.formMethod)&&((L=w.state)==null?void 0:L._isRedirect)!==!0;l&&(o=l,l=void 0),D||C===Se.Pop||(C===Se.Push?t.history.push(w,w.state):C===Se.Replace&&t.history.replace(w,w.state)),ie(ue({},E,{actionData:z,loaderData:B,historyAction:C,location:w,initialized:!0,navigation:nu,revalidation:"idle",restoreScrollPosition:kh(w,E.matches||p.matches),preventScrollReset:M,blockers:b})),C=Se.Pop,N=!1,D=!1,$=!1,U=[],Ne=[]}async function Ft(w,E){if(typeof w=="number"){t.history.go(w);return}let S=pc(p.location,p.matches,a,u.v7_prependBasename,w,E==null?void 0:E.fromRouteId,E==null?void 0:E.relative),{path:L,submission:W,error:z}=Bf(u.v7_normalizeFormMethod,!1,S,E),B=p.location,b=Bs(p.location,L,E&&E.state);b=ue({},b,t.history.encodeLocation(b));let M=E&&E.replace!=null?E.replace:void 0,se=Se.Push;M===!0?se=Se.Replace:M===!1||W!=null&&Tt(W.formMethod)&&W.formAction===p.location.pathname+p.location.search&&(se=Se.Replace);let je=E&&"preventScrollReset"in E?E.preventScrollReset===!0:void 0,Z=Ih({currentLocation:B,nextLocation:b,historyAction:se});if(Z){_o(Z,{state:"blocked",location:b,proceed(){_o(Z,{state:"proceeding",proceed:void 0,reset:void 0,location:b}),Ft(w,E)},reset(){let ye=new Map(p.blockers);ye.set(Z,Yi),ie({blockers:ye})}});return}return await vn(se,b,{submission:W,pendingError:z,preventScrollReset:je,replace:E&&E.replace})}function Dr(){if(wa(),ie({revalidation:"loading"}),p.navigation.state!=="submitting"){if(p.navigation.state==="idle"){vn(p.historyAction,p.location,{startUninterruptedRevalidation:!0});return}vn(C||p.historyAction,p.navigation.location,{overrideNavigation:p.navigation})}}async function vn(w,E,S){k&&k.abort(),k=null,C=w,D=(S&&S.startUninterruptedRevalidation)===!0,Xy(p.location,p.matches),N=(S&&S.preventScrollReset)===!0;let L=l||o,W=S&&S.overrideNavigation,z=Qr(L,E,a);if(!z){let ye=ht(404,{pathname:E.pathname}),{matches:Pe,route:Jn}=qf(L);Sa(),Gt(E,{matches:Pe,loaderData:{},errors:{[Jn.id]:ye}});return}if(p.initialized&&!$&&hS(p.location,E)&&!(S&&S.submission&&Tt(S.submission.formMethod))){Gt(E,{matches:z});return}k=new AbortController;let B=Ji(t.history,E,k.signal,S&&S.submission),b,M;if(S&&S.pendingError)M={[Yr(z).route.id]:S.pendingError};else if(S&&S.submission&&Tt(S.submission.formMethod)){let ye=await $y(B,E,S.submission,z,{replace:S.replace});if(ye.shortCircuited)return;b=ye.pendingActionData,M=ye.pendingActionError,W=bo(E,S.submission),B=new Request(B.url,{signal:B.signal})}let{shortCircuited:se,loaderData:je,errors:Z}=await Vy(B,E,z,W,S&&S.submission,S&&S.fetcherSubmission,S&&S.replace,b,M);se||(k=null,Gt(E,ue({matches:z},b?{actionData:b}:{},{loaderData:je,errors:Z})))}async function $y(w,E,S,L,W){W===void 0&&(W={}),wa();let z=_S(E,S);ie({navigation:z});let B,b=gc(L,E);if(!b.route.action&&!b.route.lazy)B={type:Te.error,error:ht(405,{method:w.method,pathname:E.pathname,routeId:b.route.id})};else if(B=await Xi("action",w,b,L,s,i,a),w.signal.aborted)return{shortCircuited:!0};if(oi(B)){let M;return W&&W.replace!=null?M=W.replace:M=B.location===p.location.pathname+p.location.search,await ji(p,B,{submission:S,replace:M}),{shortCircuited:!0}}if(ys(B)){let M=Yr(L,b.route.id);return(W&&W.replace)!==!0&&(C=Se.Push),{pendingActionData:{},pendingActionError:{[M.route.id]:B.error}}}if(lr(B))throw ht(400,{type:"defer-action"});return{pendingActionData:{[b.route.id]:B.data}}}async function Vy(w,E,S,L,W,z,B,b,M){let se=L||bo(E,W),je=W||z||Xf(se),Z=l||o,[ye,Pe]=Wf(t.history,p,S,je,E,$,U,Ne,bt,it,Z,a,b,M);if(Sa(ee=>!(S&&S.some(Et=>Et.route.id===ee))||ye&&ye.some(Et=>Et.route.id===ee)),gn=++Mt,ye.length===0&&Pe.length===0){let ee=Eh();return Gt(E,ue({matches:S,loaderData:{},errors:M||null},b?{actionData:b}:{},ee?{fetchers:new Map(p.fetchers)}:{})),{shortCircuited:!0}}if(!D){Pe.forEach(Et=>{let wn=p.fetchers.get(Et.key),Ra=Zi(void 0,wn?wn.data:void 0);p.fetchers.set(Et.key,Ra)});let ee=b||p.actionData;ie(ue({navigation:se},ee?Object.keys(ee).length===0?{actionData:null}:{actionData:ee}:{},Pe.length>0?{fetchers:new Map(p.fetchers)}:{}))}Pe.forEach(ee=>{re.has(ee.key)&&yn(ee.key),ee.controller&&re.set(ee.key,ee.controller)});let Jn=()=>Pe.forEach(ee=>yn(ee.key));k&&k.signal.addEventListener("abort",Jn);let{results:Zn,loaderResults:zi,fetcherResults:Ca}=await yh(p.matches,S,ye,Pe,w);if(w.signal.aborted)return{shortCircuited:!0};k&&k.signal.removeEventListener("abort",Jn),Pe.forEach(ee=>re.delete(ee.key));let qt=Qf(Zn);if(qt){if(qt.idx>=ye.length){let ee=Pe[qt.idx-ye.length].key;it.add(ee)}return await ji(p,qt.result,{replace:B}),{shortCircuited:!0}}let{loaderData:Qt,errors:vo}=Kf(p,S,ye,zi,M,Pe,Ca,A);A.forEach((ee,Et)=>{ee.subscribe(wn=>{(wn||ee.done)&&A.delete(Et)})});let Ia=Eh(),Ta=Sh(gn),ka=Ia||Ta||Pe.length>0;return ue({loaderData:Qt,errors:vo},ka?{fetchers:new Map(p.fetchers)}:{})}function vh(w){return p.fetchers.get(w)||sS}function Ky(w,E,S,L){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");re.has(w)&&yn(w);let W=l||o,z=pc(p.location,p.matches,a,u.v7_prependBasename,S,E,L==null?void 0:L.relative),B=Qr(W,z,a);if(!B){go(w,E,ht(404,{pathname:z}));return}let{path:b,submission:M,error:se}=Bf(u.v7_normalizeFormMethod,!0,z,L);if(se){go(w,E,se);return}let je=gc(B,b);if(N=(L&&L.preventScrollReset)===!0,M&&Tt(M.formMethod)){Gy(w,E,b,je,B,M);return}bt.set(w,{routeId:E,path:b}),qy(w,E,b,je,B,M)}async function Gy(w,E,S,L,W,z){if(wa(),bt.delete(w),!L.route.action&&!L.route.lazy){let Ie=ht(405,{method:z.formMethod,pathname:S,routeId:E});go(w,E,Ie);return}let B=p.fetchers.get(w),b=vS(z,B);p.fetchers.set(w,b),ie({fetchers:new Map(p.fetchers)});let M=new AbortController,se=Ji(t.history,S,M.signal,z);re.set(w,M);let je=Mt,Z=await Xi("action",se,L,W,s,i,a);if(se.signal.aborted){re.get(w)===M&&re.delete(w);return}if(oi(Z))if(re.delete(w),gn>je){let Ie=br(void 0);p.fetchers.set(w,Ie),ie({fetchers:new Map(p.fetchers)});return}else{it.add(w);let Ie=Zi(z);return p.fetchers.set(w,Ie),ie({fetchers:new Map(p.fetchers)}),ji(p,Z,{submission:z,isFetchActionRedirect:!0})}if(ys(Z)){go(w,E,Z.error);return}if(lr(Z))throw ht(400,{type:"defer-action"});let ye=p.navigation.location||p.location,Pe=Ji(t.history,ye,M.signal),Jn=l||o,Zn=p.navigation.state!=="idle"?Qr(Jn,p.navigation.location,a):p.matches;V(Zn,"Didn't find any matches after fetcher action");let zi=++Mt;_n.set(w,zi);let Ca=Zi(z,Z.data);p.fetchers.set(w,Ca);let[qt,Qt]=Wf(t.history,p,Zn,z,ye,$,U,Ne,bt,it,Jn,a,{[L.route.id]:Z.data},void 0);Qt.filter(Ie=>Ie.key!==w).forEach(Ie=>{let Bi=Ie.key,Rh=p.fetchers.get(Bi),Zy=Zi(void 0,Rh?Rh.data:void 0);p.fetchers.set(Bi,Zy),re.has(Bi)&&yn(Bi),Ie.controller&&re.set(Bi,Ie.controller)}),ie({fetchers:new Map(p.fetchers)});let vo=()=>Qt.forEach(Ie=>yn(Ie.key));M.signal.addEventListener("abort",vo);let{results:Ia,loaderResults:Ta,fetcherResults:ka}=await yh(p.matches,Zn,qt,Qt,Pe);if(M.signal.aborted)return;M.signal.removeEventListener("abort",vo),_n.delete(w),re.delete(w),Qt.forEach(Ie=>re.delete(Ie.key));let ee=Qf(Ia);if(ee){if(ee.idx>=qt.length){let Ie=Qt[ee.idx-qt.length].key;it.add(Ie)}return ji(p,ee.result)}let{loaderData:Et,errors:wn}=Kf(p,p.matches,qt,Ta,void 0,Qt,ka,A);if(p.fetchers.has(w)){let Ie=br(Z.data);p.fetchers.set(w,Ie)}let Ra=Sh(zi);p.navigation.state==="loading"&&zi>gn?(V(C,"Expected pending action"),k&&k.abort(),Gt(p.navigation.location,{matches:Zn,loaderData:Et,errors:wn,fetchers:new Map(p.fetchers)})):(ie(ue({errors:wn,loaderData:Gf(p.loaderData,Et,Zn,wn)},Ra||Qt.length>0?{fetchers:new Map(p.fetchers)}:{})),$=!1)}async function qy(w,E,S,L,W,z){let B=p.fetchers.get(w),b=Zi(z,B?B.data:void 0);p.fetchers.set(w,b),ie({fetchers:new Map(p.fetchers)});let M=new AbortController,se=Ji(t.history,S,M.signal);re.set(w,M);let je=Mt,Z=await Xi("loader",se,L,W,s,i,a);if(lr(Z)&&(Z=await P_(Z,se.signal,!0)||Z),re.get(w)===M&&re.delete(w),se.signal.aborted)return;if(oi(Z))if(gn>je){let Pe=br(void 0);p.fetchers.set(w,Pe),ie({fetchers:new Map(p.fetchers)});return}else{it.add(w),await ji(p,Z);return}if(ys(Z)){let Pe=Yr(p.matches,E);p.fetchers.delete(w),ie({fetchers:new Map(p.fetchers),errors:{[Pe.route.id]:Z.error}});return}V(!lr(Z),"Unhandled fetcher deferred data");let ye=br(Z.data);p.fetchers.set(w,ye),ie({fetchers:new Map(p.fetchers)})}async function ji(w,E,S){let{submission:L,replace:W,isFetchActionRedirect:z}=S===void 0?{}:S;E.revalidate&&($=!0);let B=Bs(w.location,E.location,ue({_isRedirect:!0},z?{_isFetchActionRedirect:!0}:{}));if(V(B,"Expected a location on the redirect navigation"),k_.test(E.location)&&n){let se=t.history.createURL(E.location),je=ki(se.pathname,a)==null;if(e.location.origin!==se.origin||je){W?e.location.replace(E.location):e.location.assign(E.location);return}}k=null;let b=W===!0?Se.Replace:Se.Push,M=L||Xf(w.navigation);if(iS.has(E.status)&&M&&Tt(M.formMethod))await vn(b,B,{submission:ue({},M,{formAction:E.location}),preventScrollReset:N});else if(z)await vn(b,B,{overrideNavigation:bo(B),fetcherSubmission:M,preventScrollReset:N});else{let se=bo(B,M);await vn(b,B,{overrideNavigation:se,preventScrollReset:N})}}async function yh(w,E,S,L,W){let z=await Promise.all([...S.map(M=>Xi("loader",W,M,E,s,i,a)),...L.map(M=>M.matches&&M.match&&M.controller?Xi("loader",Ji(t.history,M.path,M.controller.signal),M.match,M.matches,s,i,a):{type:Te.error,error:ht(404,{pathname:M.path})})]),B=z.slice(0,S.length),b=z.slice(S.length);return await Promise.all([Yf(w,S,B,B.map(()=>W.signal),!1,p.loaderData),Yf(w,L.map(M=>M.match),b,L.map(M=>M.controller?M.controller.signal:null),!0)]),{results:z,loaderResults:B,fetcherResults:b}}function wa(){$=!0,U.push(...Sa()),bt.forEach((w,E)=>{re.has(E)&&(Ne.push(E),yn(E))})}function go(w,E,S){let L=Yr(p.matches,E);Ea(w),ie({errors:{[L.route.id]:S},fetchers:new Map(p.fetchers)})}function Ea(w){let E=p.fetchers.get(w);re.has(w)&&!(E&&E.state==="loading"&&_n.has(w))&&yn(w),bt.delete(w),_n.delete(w),it.delete(w),p.fetchers.delete(w)}function yn(w){let E=re.get(w);V(E,"Expected fetch controller: "+w),E.abort(),re.delete(w)}function wh(w){for(let E of w){let S=vh(E),L=br(S.data);p.fetchers.set(E,L)}}function Eh(){let w=[],E=!1;for(let S of it){let L=p.fetchers.get(S);V(L,"Expected fetcher: "+S),L.state==="loading"&&(it.delete(S),w.push(S),E=!0)}return wh(w),E}function Sh(w){let E=[];for(let[S,L]of _n)if(L<w){let W=p.fetchers.get(S);V(W,"Expected fetcher: "+S),W.state==="loading"&&(yn(S),_n.delete(S),E.push(S))}return wh(E),E.length>0}function Qy(w,E){let S=p.blockers.get(w)||Yi;return F.get(w)!==E&&F.set(w,E),S}function Ch(w){p.blockers.delete(w),F.delete(w)}function _o(w,E){let S=p.blockers.get(w)||Yi;V(S.state==="unblocked"&&E.state==="blocked"||S.state==="blocked"&&E.state==="blocked"||S.state==="blocked"&&E.state==="proceeding"||S.state==="blocked"&&E.state==="unblocked"||S.state==="proceeding"&&E.state==="unblocked","Invalid blocker state transition: "+S.state+" -> "+E.state);let L=new Map(p.blockers);L.set(w,E),ie({blockers:L})}function Ih(w){let{currentLocation:E,nextLocation:S,historyAction:L}=w;if(F.size===0)return;F.size>1&&vr(!1,"A router only supports one blocker at a time");let W=Array.from(F.entries()),[z,B]=W[W.length-1],b=p.blockers.get(z);if(!(b&&b.state==="proceeding")&&B({currentLocation:E,nextLocation:S,historyAction:L}))return z}function Sa(w){let E=[];return A.forEach((S,L)=>{(!w||w(L))&&(S.cancel(),E.push(L),A.delete(L))}),E}function Yy(w,E,S){if(h=w,_=E,v=S||null,!y&&p.navigation===nu){y=!0;let L=kh(p.location,p.matches);L!=null&&ie({restoreScrollPosition:L})}return()=>{h=null,_=null,v=null}}function Th(w,E){return v&&v(w,E.map(L=>gS(L,p.loaderData)))||w.key}function Xy(w,E){if(h&&_){let S=Th(w,E);h[S]=_()}}function kh(w,E){if(h){let S=Th(w,E),L=h[S];if(typeof L=="number")return L}return null}function Jy(w){s={},l=hc(w,i,void 0,s)}return g={get basename(){return a},get state(){return p},get routes(){return o},initialize:pe,subscribe:Ar,enableScrollRestoration:Yy,navigate:Ft,fetch:Ky,revalidate:Dr,createHref:w=>t.history.createHref(w),encodeLocation:w=>t.history.encodeLocation(w),getFetcher:vh,deleteFetcher:Ea,dispose:Ee,getBlocker:Qy,deleteBlocker:Ch,_internalFetchControllers:re,_internalActiveDeferreds:A,_internalSetRoutes:Jy},g}function aS(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function pc(t,e,n,r,i,s,o){let l,a;if(s!=null&&o!=="path"){l=[];for(let c of e)if(l.push(c),c.route.id===s){a=c;break}}else l=e,a=e[e.length-1];let u=aa(i||".",ro(l).map(c=>c.pathnameBase),ki(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&a&&a.route.index&&!Ld(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:sn([n,u.pathname])),yr(u)}function Bf(t,e,n,r){if(!r||!aS(r))return{path:n};if(r.formMethod&&!mS(r.formMethod))return{path:n,error:ht(405,{method:r.formMethod})};let i=()=>({path:n,error:ht(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),l=N_(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Tt(o))return i();let h=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((v,_)=>{let[y,T]=_;return""+v+y+"="+T+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:h}}}else if(r.formEncType==="application/json"){if(!Tt(o))return i();try{let h=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:h,text:void 0}}}catch{return i()}}}V(typeof FormData=="function","FormData is not available in this environment");let a,u;if(r.formData)a=mc(r.formData),u=r.formData;else if(r.body instanceof FormData)a=mc(r.body),u=r.body;else if(r.body instanceof URLSearchParams)a=r.body,u=Vf(a);else if(r.body==null)a=new URLSearchParams,u=new FormData;else try{a=new URLSearchParams(r.body),u=Vf(a)}catch{return i()}let c={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Tt(c.formMethod))return{path:n,submission:c};let d=Kt(n);return e&&d.search&&Ld(d.search)&&a.append("index",""),d.search="?"+a,{path:yr(d),submission:c}}function uS(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Wf(t,e,n,r,i,s,o,l,a,u,c,d,h,v){let _=v?Object.values(v)[0]:h?Object.values(h)[0]:void 0,y=t.createURL(e.location),T=t.createURL(i),m=v?Object.keys(v)[0]:void 0,g=uS(n,m).filter((C,N)=>{if(C.route.lazy)return!0;if(C.route.loader==null)return!1;if(cS(e.loaderData,e.matches[N],C)||o.some($=>$===C.route.id))return!0;let k=e.matches[N],D=C;return Hf(C,ue({currentUrl:y,currentParams:k.params,nextUrl:T,nextParams:D.params},r,{actionResult:_,defaultShouldRevalidate:s||y.pathname+y.search===T.pathname+T.search||y.search!==T.search||R_(k,D)}))}),p=[];return a.forEach((C,N)=>{if(!n.some(Ne=>Ne.route.id===C.routeId))return;let k=Qr(c,C.path,d);if(!k){p.push({key:N,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let D=e.fetchers.get(N),$=gc(k,C.path),U=!1;u.has(N)?U=!1:l.includes(N)?U=!0:D&&D.state!=="idle"&&D.data===void 0?U=s:U=Hf($,ue({currentUrl:y,currentParams:e.matches[e.matches.length-1].params,nextUrl:T,nextParams:n[n.length-1].params},r,{actionResult:_,defaultShouldRevalidate:s})),U&&p.push({key:N,routeId:C.routeId,path:C.path,matches:k,match:$,controller:new AbortController})}),[g,p]}function cS(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function R_(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Hf(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function $f(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];V(i,"No route found in manifest");let s={};for(let o in r){let a=i[o]!==void 0&&o!=="hasErrorBoundary";vr(!a,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!a&&!OE.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,ue({},e(i),{lazy:void 0}))}async function Xi(t,e,n,r,i,s,o,l){l===void 0&&(l={});let a,u,c,d=_=>{let y,T=new Promise((m,f)=>y=f);return c=()=>y(),e.signal.addEventListener("abort",c),Promise.race([_({request:e,params:n.params,context:l.requestContext}),T])};try{let _=n.route[t];if(n.route.lazy)if(_)u=(await Promise.all([d(_),$f(n.route,s,i)]))[0];else if(await $f(n.route,s,i),_=n.route[t],_)u=await d(_);else if(t==="action"){let y=new URL(e.url),T=y.pathname+y.search;throw ht(405,{method:e.method,pathname:T,routeId:n.route.id})}else return{type:Te.data,data:void 0};else if(_)u=await d(_);else{let y=new URL(e.url),T=y.pathname+y.search;throw ht(404,{pathname:T})}V(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(_){a=Te.error,u=_}finally{c&&e.signal.removeEventListener("abort",c)}if(pS(u)){let _=u.status;if(rS.has(_)){let m=u.headers.get("Location");if(V(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!k_.test(m))m=pc(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,m);else if(!l.isStaticRequest){let f=new URL(e.url),g=m.startsWith("//")?new URL(f.protocol+m):new URL(m),p=ki(g.pathname,o)!=null;g.origin===f.origin&&p&&(m=g.pathname+g.search+g.hash)}if(l.isStaticRequest)throw u.headers.set("Location",m),u;return{type:Te.redirect,status:_,location:m,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(l.isRouteRequest)throw{type:a||Te.data,response:u};let y,T=u.headers.get("Content-Type");return T&&/\bapplication\/json\b/.test(T)?y=await u.json():y=await u.text(),a===Te.error?{type:a,error:new Od(_,u.statusText,y),headers:u.headers}:{type:Te.data,data:y,statusCode:u.status,headers:u.headers}}if(a===Te.error)return{type:a,error:u};if(fS(u)){var h,v;return{type:Te.deferred,deferredData:u,statusCode:(h=u.init)==null?void 0:h.status,headers:((v=u.init)==null?void 0:v.headers)&&new Headers(u.init.headers)}}return{type:Te.data,data:u}}function Ji(t,e,n,r){let i=t.createURL(N_(e)).toString(),s={signal:n};if(r&&Tt(r.formMethod)){let{formMethod:o,formEncType:l}=r;s.method=o.toUpperCase(),l==="application/json"?(s.headers=new Headers({"Content-Type":l}),s.body=JSON.stringify(r.json)):l==="text/plain"?s.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?s.body=mc(r.formData):s.body=r.formData}return new Request(i,s)}function mc(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Vf(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function dS(t,e,n,r,i){let s={},o=null,l,a=!1,u={};return n.forEach((c,d)=>{let h=e[d].route.id;if(V(!oi(c),"Cannot handle redirect results in processLoaderData"),ys(c)){let v=Yr(t,h),_=c.error;r&&(_=Object.values(r)[0],r=void 0),o=o||{},o[v.route.id]==null&&(o[v.route.id]=_),s[h]=void 0,a||(a=!0,l=I_(c.error)?c.error.status:500),c.headers&&(u[h]=c.headers)}else lr(c)?(i.set(h,c.deferredData),s[h]=c.deferredData.data):s[h]=c.data,c.statusCode!=null&&c.statusCode!==200&&!a&&(l=c.statusCode),c.headers&&(u[h]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:l||200,loaderHeaders:u}}function Kf(t,e,n,r,i,s,o,l){let{loaderData:a,errors:u}=dS(e,n,r,i,l);for(let c=0;c<s.length;c++){let{key:d,match:h,controller:v}=s[c];V(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let _=o[c];if(!(v&&v.signal.aborted))if(ys(_)){let y=Yr(t.matches,h==null?void 0:h.route.id);u&&u[y.route.id]||(u=ue({},u,{[y.route.id]:_.error})),t.fetchers.delete(d)}else if(oi(_))V(!1,"Unhandled fetcher revalidation redirect");else if(lr(_))V(!1,"Unhandled fetcher deferred data");else{let y=br(_.data);t.fetchers.set(d,y)}}return{loaderData:a,errors:u}}function Gf(t,e,n,r){let i=ue({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Yr(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function qf(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function ht(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",l="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?l="defer() is not supported in actions":s==="invalid-body"&&(l="Unable to encode submission body")):t===403?(o="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",l='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new Od(t||500,o,new Error(l),!0)}function Qf(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(oi(n))return{result:n,idx:e}}}function N_(t){let e=typeof t=="string"?Kt(t):t;return yr(ue({},e,{hash:""}))}function hS(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function lr(t){return t.type===Te.deferred}function ys(t){return t.type===Te.error}function oi(t){return(t&&t.type)===Te.redirect}function fS(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function pS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function mS(t){return nS.has(t.toLowerCase())}function Tt(t){return eS.has(t.toLowerCase())}async function Yf(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let l=n[o],a=e[o];if(!a)continue;let u=t.find(d=>d.route.id===a.route.id),c=u!=null&&!R_(u,a)&&(s&&s[a.route.id])!==void 0;if(lr(l)&&(i||c)){let d=r[o];V(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await P_(l,d,i).then(h=>{h&&(n[o]=h||n[o])})}}}async function P_(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Te.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Te.error,error:i}}return{type:Te.data,data:t.deferredData.data}}}function Ld(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function gS(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function gc(t,e){let n=typeof e=="string"?Kt(e).search:e.search;if(t[t.length-1].route.index&&Ld(n||""))return t[t.length-1];let r=ro(t);return r[r.length-1]}function Xf(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function bo(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function _S(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Zi(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function vS(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function br(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kl(){return kl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},kl.apply(this,arguments)}const ua=P.createContext(null),x_=P.createContext(null),Ri=P.createContext(null),ca=P.createContext(null),pn=P.createContext({outlet:null,matches:[],isDataRoute:!1}),A_=P.createContext(null);function yS(t,e){let{relative:n}=e===void 0?{}:e;Ni()||V(!1);let{basename:r,navigator:i}=P.useContext(Ri),{hash:s,pathname:o,search:l}=L_(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:sn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Ni(){return P.useContext(ca)!=null}function io(){return Ni()||V(!1),P.useContext(ca).location}function D_(t){P.useContext(Ri).static||P.useLayoutEffect(t)}function O_(){let{isDataRoute:t}=P.useContext(pn);return t?OS():wS()}function wS(){Ni()||V(!1);let t=P.useContext(ua),{basename:e,navigator:n}=P.useContext(Ri),{matches:r}=P.useContext(pn),{pathname:i}=io(),s=JSON.stringify(ro(r).map(a=>a.pathnameBase)),o=P.useRef(!1);return D_(()=>{o.current=!0}),P.useCallback(function(a,u){if(u===void 0&&(u={}),!o.current)return;if(typeof a=="number"){n.go(a);return}let c=aa(a,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:sn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const ES=P.createContext(null);function SS(t){let e=P.useContext(pn).outlet;return e&&P.createElement(ES.Provider,{value:t},e)}function L_(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=P.useContext(pn),{pathname:i}=io(),s=JSON.stringify(ro(r).map(o=>o.pathnameBase));return P.useMemo(()=>aa(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function CS(t,e,n){Ni()||V(!1);let{navigator:r}=P.useContext(Ri),{matches:i}=P.useContext(pn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=io(),u;if(e){var c;let y=typeof e=="string"?Kt(e):e;l==="/"||(c=y.pathname)!=null&&c.startsWith(l)||V(!1),u=y}else u=a;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",v=Qr(t,{pathname:h}),_=NS(v&&v.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:sn([l,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:sn([l,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&_?P.createElement(ca.Provider,{value:{location:kl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Se.Pop}},_):_}function IS(){let t=DS(),e=I_(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:i},n):null,s)}const TS=P.createElement(IS,null);class kS extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?P.createElement(pn.Provider,{value:this.props.routeContext},P.createElement(A_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function RS(t){let{routeContext:e,match:n,children:r}=t,i=P.useContext(ua);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(pn.Provider,{value:e},r)}function NS(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=s.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));l>=0||V(!1),s=s.slice(0,Math.min(s.length,l+1))}return s.reduceRight((l,a,u)=>{let c=a.route.id?o==null?void 0:o[a.route.id]:null,d=null;n&&(d=a.route.errorElement||TS);let h=e.concat(s.slice(0,u+1)),v=()=>{let _;return c?_=d:a.route.Component?_=P.createElement(a.route.Component,null):a.route.element?_=a.route.element:_=l,P.createElement(RS,{match:a,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:_})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?P.createElement(kS,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:v(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):v()},null)}var _c;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(_c||(_c={}));var Ws;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Ws||(Ws={}));function PS(t){let e=P.useContext(ua);return e||V(!1),e}function xS(t){let e=P.useContext(x_);return e||V(!1),e}function AS(t){let e=P.useContext(pn);return e||V(!1),e}function M_(t){let e=AS(),n=e.matches[e.matches.length-1];return n.route.id||V(!1),n.route.id}function DS(){var t;let e=P.useContext(A_),n=xS(Ws.UseRouteError),r=M_(Ws.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function OS(){let{router:t}=PS(_c.UseNavigateStable),e=M_(Ws.UseNavigateStable),n=P.useRef(!1);return D_(()=>{n.current=!0}),P.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,kl({fromRouteId:e},s)))},[t,e])}const LS="startTransition",Jf=y0[LS];function MS(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=P.useState(n.state),{v7_startTransition:o}=r||{},l=P.useCallback(d=>{o&&Jf?Jf(()=>s(d)):s(d)},[s,o]);P.useLayoutEffect(()=>n.subscribe(l),[n,l]);let a=P.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,h,v)=>n.navigate(d,{state:h,preventScrollReset:v==null?void 0:v.preventScrollReset}),replace:(d,h,v)=>n.navigate(d,{replace:!0,state:h,preventScrollReset:v==null?void 0:v.preventScrollReset})}),[n]),u=n.basename||"/",c=P.useMemo(()=>({router:n,navigator:a,static:!1,basename:u}),[n,a,u]);return P.createElement(P.Fragment,null,P.createElement(ua.Provider,{value:c},P.createElement(x_.Provider,{value:i},P.createElement(jS,{basename:u,location:i.location,navigationType:i.historyAction,navigator:a},i.initialized?P.createElement(bS,{routes:n.routes,state:i}):e))),null)}function bS(t){let{routes:e,state:n}=t;return CS(e,void 0,n)}function FS(t){let{to:e,replace:n,state:r,relative:i}=t;Ni()||V(!1);let{matches:s}=P.useContext(pn),{pathname:o}=io(),l=O_(),a=aa(e,ro(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(a);return P.useEffect(()=>l(JSON.parse(u),{replace:n,state:r,relative:i}),[l,u,i,n,r]),null}function US(t){return SS(t.context)}function jS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Se.Pop,navigator:s,static:o=!1}=t;Ni()&&V(!1);let l=e.replace(/^\/*/,"/"),a=P.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Kt(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:v="default"}=r,_=P.useMemo(()=>{let y=ki(u,l);return y==null?null:{location:{pathname:y,search:c,hash:d,state:h,key:v},navigationType:i}},[l,u,c,d,h,v,i]);return _==null?null:P.createElement(Ri.Provider,{value:a},P.createElement(ca.Provider,{children:n,value:_}))}var Zf;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Zf||(Zf={}));new Promise(()=>{});function zS(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:P.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:P.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hs(){return Hs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hs.apply(this,arguments)}function BS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function WS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function HS(t,e){return t.button===0&&(!e||e==="_self")&&!WS(t)}const $S=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function VS(t,e){return lS({basename:e==null?void 0:e.basename,future:Hs({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:xE({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||KS(),routes:t,mapRouteProperties:zS}).initialize()}function KS(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Hs({},e,{errors:GS(e.errors)})),e}function GS(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Od(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const qS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",QS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lr=P.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:c}=e,d=BS(e,$S),{basename:h}=P.useContext(Ri),v,_=!1;if(typeof u=="string"&&QS.test(u)&&(v=u,qS))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),p=ki(g.pathname,h);g.origin===f.origin&&p!=null?u=p+g.search+g.hash:_=!0}catch{}let y=yS(u,{relative:i}),T=YS(u,{replace:o,state:l,target:a,preventScrollReset:c,relative:i});function m(f){r&&r(f),f.defaultPrevented||T(f)}return P.createElement("a",Hs({},d,{href:v||y,onClick:_||s?r:m,ref:n,target:a}))});var ep;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(ep||(ep={}));var tp;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(tp||(tp={}));function YS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,l=O_(),a=io(),u=L_(t,{relative:o});return P.useCallback(c=>{if(HS(c,n)){c.preventDefault();let d=r!==void 0?r:yr(a)===yr(u);l(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,t,s,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(t,e){if(!t)throw Pi(e)},Pi=function(t){return new Error("Firebase Database ("+b_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},XS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Md={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,v=u&63;a||(v=64,o||(h=64)),r.push(n[c],n[d],n[h],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(F_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new JS;const h=s<<2|l>>4;if(r.push(h),u!==64){const v=l<<4&240|u>>2;if(r.push(v),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class JS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const U_=function(t){const e=F_(t);return Md.encodeByteArray(e,!0)},Rl=function(t){return U_(t).replace(/\./g,"")},Nl=function(t){try{return Md.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t){return j_(void 0,t)}function j_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!eC(n)||(t[n]=j_(t[n],e[n]));return t}function eC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=()=>tC().__FIREBASE_DEFAULTS__,rC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nl(t[1]);return e&&JSON.parse(e)},bd=()=>{try{return nC()||rC()||iC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},z_=t=>{var e,n;return(n=(e=bd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sC=t=>{const e=z_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},B_=()=>{var t;return(t=bd())===null||t===void 0?void 0:t.config},W_=t=>{var e;return(e=bd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Rl(JSON.stringify(n)),Rl(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ud(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function lC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function H_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aC(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $_(){return b_.NODE_ADMIN===!0}function uC(){try{return typeof indexedDB=="object"}catch{return!1}}function cC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC="FirebaseError";class Xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dC,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Xn(i,l,r)}}function hC(t,e){return t.replace(fC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t){return JSON.parse(t)}function be(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=$s(Nl(s[0])||""),n=$s(Nl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},pC=function(t){const e=V_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},mC=function(t){const e=V_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function yi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function vc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function xl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(np(s)&&np(o)){if(!xl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function np(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function as(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function us(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function _C(t,e){const n=new vC(t,e);return n.subscribe.bind(n)}class vC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ru),i.error===void 0&&(i.error=ru),i.complete===void 0&&(i.complete=ru);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ru(){}function wC(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},da=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){return t&&t._delegate?t._delegate:t}class wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Fd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IC(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CC(t){return t===nr?void 0:t}function IC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new SC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const kC={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},RC=te.INFO,NC={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},PC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=NC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jd{constructor(e){this.name=e,this._logLevel=RC,this._logHandler=PC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const xC=(t,e)=>e.some(n=>t instanceof n);let rp,ip;function AC(){return rp||(rp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DC(){return ip||(ip=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const K_=new WeakMap,yc=new WeakMap,G_=new WeakMap,iu=new WeakMap,zd=new WeakMap;function OC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Bn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&K_.set(n,t)}).catch(()=>{}),zd.set(e,t),e}function LC(t){if(yc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});yc.set(t,e)}let wc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||G_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MC(t){wc=t(wc)}function bC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(su(this),e,...n);return G_.set(r,e.sort?e.sort():[e]),Bn(r)}:DC().includes(t)?function(...e){return t.apply(su(this),e),Bn(K_.get(this))}:function(...e){return Bn(t.apply(su(this),e))}}function FC(t){return typeof t=="function"?bC(t):(t instanceof IDBTransaction&&LC(t),xC(t,AC())?new Proxy(t,wc):t)}function Bn(t){if(t instanceof IDBRequest)return OC(t);if(iu.has(t))return iu.get(t);const e=FC(t);return e!==t&&(iu.set(t,e),zd.set(e,t)),e}const su=t=>zd.get(t);function UC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Bn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Bn(o.result),a.oldVersion,a.newVersion,Bn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const jC=["get","getKey","getAll","getAllKeys","count"],zC=["put","add","delete","clear"],ou=new Map;function sp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ou.get(e))return ou.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=zC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jC.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ou.set(e,s),s}MC(t=>({...t,get:(e,n,r)=>sp(e,n)||t.get(e,n,r),has:(e,n)=>!!sp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ec="@firebase/app",op="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new jd("@firebase/app"),HC="@firebase/app-compat",$C="@firebase/analytics-compat",VC="@firebase/analytics",KC="@firebase/app-check-compat",GC="@firebase/app-check",qC="@firebase/auth",QC="@firebase/auth-compat",YC="@firebase/database",XC="@firebase/database-compat",JC="@firebase/functions",ZC="@firebase/functions-compat",eI="@firebase/installations",tI="@firebase/installations-compat",nI="@firebase/messaging",rI="@firebase/messaging-compat",iI="@firebase/performance",sI="@firebase/performance-compat",oI="@firebase/remote-config",lI="@firebase/remote-config-compat",aI="@firebase/storage",uI="@firebase/storage-compat",cI="@firebase/firestore",dI="@firebase/firestore-compat",hI="firebase",fI="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="[DEFAULT]",pI={[Ec]:"fire-core",[HC]:"fire-core-compat",[VC]:"fire-analytics",[$C]:"fire-analytics-compat",[GC]:"fire-app-check",[KC]:"fire-app-check-compat",[qC]:"fire-auth",[QC]:"fire-auth-compat",[YC]:"fire-rtdb",[XC]:"fire-rtdb-compat",[JC]:"fire-fn",[ZC]:"fire-fn-compat",[eI]:"fire-iid",[tI]:"fire-iid-compat",[nI]:"fire-fcm",[rI]:"fire-fcm-compat",[iI]:"fire-perf",[sI]:"fire-perf-compat",[oI]:"fire-rc",[lI]:"fire-rc-compat",[aI]:"fire-gcs",[uI]:"fire-gcs-compat",[cI]:"fire-fst",[dI]:"fire-fst-compat","fire-js":"fire-js",[hI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=new Map,Cc=new Map;function mI(t,e){try{t.container.addComponent(e)}catch(n){Er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wi(t){const e=t.name;if(Cc.has(e))return Er.debug(`There were multiple attempts to register component ${e}.`),!1;Cc.set(e,t);for(const n of Al.values())mI(n,t);return!0}function Bd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wn=new so("app","Firebase",gI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=fI;function q_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Sc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Wn.create("bad-app-name",{appName:String(i)});if(n||(n=B_()),!n)throw Wn.create("no-options");const s=Al.get(i);if(s){if(xl(n,s.options)&&xl(r,s.config))return s;throw Wn.create("duplicate-app",{appName:i})}const o=new TC(i);for(const a of Cc.values())o.addComponent(a);const l=new _I(n,r,o);return Al.set(i,l),l}function Q_(t=Sc){const e=Al.get(t);if(!e&&t===Sc&&B_())return q_();if(!e)throw Wn.create("no-app",{appName:t});return e}function Hn(t,e,n){var r;let i=(r=pI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Er.warn(l.join(" "));return}wi(new wr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="firebase-heartbeat-database",yI=1,Vs="firebase-heartbeat-store";let lu=null;function Y_(){return lu||(lu=UC(vI,yI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vs)}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),lu}async function wI(t){try{return await(await Y_()).transaction(Vs).objectStore(Vs).get(X_(t))}catch(e){if(e instanceof Xn)Er.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Er.warn(n.message)}}}async function lp(t,e){try{const r=(await Y_()).transaction(Vs,"readwrite");await r.objectStore(Vs).put(e,X_(t)),await r.done}catch(n){if(n instanceof Xn)Er.warn(n.message);else{const r=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Er.warn(r.message)}}}function X_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=1024,SI=30*24*60*60*1e3;class CI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ap();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=SI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ap(),{heartbeatsToSend:n,unsentEntries:r}=II(this._heartbeatsCache.heartbeats),i=Rl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ap(){return new Date().toISOString().substring(0,10)}function II(t,e=EI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),up(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),up(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uC()?cC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await wI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function up(t){return Rl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t){wi(new wr("platform-logger",e=>new BC(e),"PRIVATE")),wi(new wr("heartbeat",e=>new CI(e),"PRIVATE")),Hn(Ec,op,t),Hn(Ec,op,"esm2017"),Hn("fire-js","")}kI("");function Wd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function J_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RI=J_,Z_=new so("auth","Firebase",J_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new jd("@firebase/auth");function NI(t,...e){Dl.logLevel<=te.WARN&&Dl.warn(`Auth (${Ai}): ${t}`,...e)}function Jo(t,...e){Dl.logLevel<=te.ERROR&&Dl.error(`Auth (${Ai}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,...e){throw Hd(t,...e)}function $t(t,...e){return Hd(t,...e)}function PI(t,e,n){const r=Object.assign(Object.assign({},RI()),{[e]:n});return new so("auth","Firebase",r).create(e,{appName:t.name})}function Hd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Z_.create(t,...e)}function j(t,e,...n){if(!t)throw Hd(e,...n)}function en(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Jo(e),new Error(e)}function dn(t,e){t||en(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xI(){return cp()==="http:"||cp()==="https:"}function cp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xI()||lC()||"connection"in navigator)?navigator.onLine:!0}function DI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ud()||H_()}get(){return AI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=new oo(3e4,6e4);function Di(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Oi(t,e,n,r,i={}){return tv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=xi(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),ev.fetch()(nv(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function tv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},OI),e);try{const i=new MI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Fo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Fo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Fo(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw PI(t,c,u);Ot(t,c)}}catch(i){if(i instanceof Xn)throw i;Ot(t,"network-request-failed",{message:String(i)})}}async function lo(t,e,n,r,i={}){const s=await Oi(t,e,n,r,i);return"mfaPendingCredential"in s&&Ot(t,"multi-factor-auth-required",{_serverResponse:s}),s}function nv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?$d(t.config,i):`${t.config.apiScheme}://${i}`}class MI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($t(this.auth,"network-request-failed")),LI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$t(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(t,e){return Oi(t,"POST","/v1/accounts:delete",e)}async function FI(t,e){return Oi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UI(t,e=!1){const n=Lt(t),r=await n.getIdToken(e),i=Vd(r);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ws(au(i.auth_time)),issuedAtTime:ws(au(i.iat)),expirationTime:ws(au(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function au(t){return Number(t)*1e3}function Vd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Jo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Nl(n);return i?JSON.parse(i):(Jo("Failed to decode base64 JWT payload"),null)}catch(i){return Jo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jI(t){const e=Vd(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ks(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xn&&zI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ws(this.lastLoginAt),this.creationTime=ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ol(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ks(t,FI(n,{idToken:r}));j(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$I(s.providerUserInfo):[],l=HI(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new rv(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function WI(t){const e=Lt(t);await Ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $I(t){return t.map(e=>{var{providerId:n}=e,r=Wd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VI(t,e){const n=await tv(t,{},async()=>{const r=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=nv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ev.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await VI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Gs;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gs,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Wd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ks(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UI(this,e)}reload(){return WI(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ol(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ks(this,bI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,T=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:p,isAnonymous:C,providerData:N,stsTokenManager:k}=n;j(g&&k,e,"internal-error");const D=Gs.fromJSON(this.name,k);j(typeof g=="string",e,"internal-error"),Sn(d,e.name),Sn(h,e.name),j(typeof p=="boolean",e,"internal-error"),j(typeof C=="boolean",e,"internal-error"),Sn(v,e.name),Sn(_,e.name),Sn(y,e.name),Sn(T,e.name),Sn(m,e.name),Sn(f,e.name);const $=new dr({uid:g,auth:e,email:h,emailVerified:p,displayName:d,isAnonymous:C,photoURL:_,phoneNumber:v,tenantId:y,stsTokenManager:D,createdAt:m,lastLoginAt:f});return N&&Array.isArray(N)&&($.providerData=N.map(U=>Object.assign({},U))),T&&($._redirectEventId=T),$}static async _fromIdTokenResponse(e,n,r=!1){const i=new Gs;i.updateFromServerResponse(n);const s=new dr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ol(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=new Map;function tn(t){dn(t instanceof Function,"Expected a class definition");let e=dp.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iv.type="NONE";const hp=iv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t,e,n){return`firebase:${t}:${e}:${n}`}class li{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Zo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Zo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new li(tn(hp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||tn(hp);const o=Zo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=dr._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new li(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new li(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uv(e))return"Blackberry";if(cv(e))return"Webos";if(Kd(e))return"Safari";if((e.includes("chrome/")||ov(e))&&!e.includes("edge/"))return"Chrome";if(av(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sv(t=Ge()){return/firefox\//i.test(t)}function Kd(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ov(t=Ge()){return/crios\//i.test(t)}function lv(t=Ge()){return/iemobile/i.test(t)}function av(t=Ge()){return/android/i.test(t)}function uv(t=Ge()){return/blackberry/i.test(t)}function cv(t=Ge()){return/webos/i.test(t)}function ha(t=Ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KI(t=Ge()){var e;return ha(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function GI(){return aC()&&document.documentMode===10}function dv(t=Ge()){return ha(t)||av(t)||cv(t)||uv(t)||/windows phone/i.test(t)||lv(t)}function qI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t,e=[]){let n;switch(t){case"Browser":n=fp(Ge());break;case"Worker":n=`${fp(Ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ai}/${r}`}async function fv(t,e){return Oi(t,"GET","/v2/recaptchaConfig",Di(t,e))}function pp(t){return t!==void 0&&t.enterprise!==void 0}class pv{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function mv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=$t("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",QI().appendChild(r)})}function YI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const XI="https://www.google.com/recaptcha/enterprise.js?render=",JI="recaptcha-enterprise",ZI="NO_RECAPTCHA";class gv{constructor(e){this.type=JI,this.auth=Li(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{fv(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new pv(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;pp(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(ZI)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&pp(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}mv(XI+l).then(()=>{i(l,s,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}async function Ll(t,e,n,r=!1){const i=new gv(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mp(this),this.idTokenSubscription=new mp(this),this.beforeStateQueue=new eT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Z_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await li.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ol(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Lt(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(e))})}async initializeRecaptchaConfig(){const e=await fv(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new pv(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new gv(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new so("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tn(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await li.create(this,[tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&NI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Li(t){return Lt(t)}class mp{constructor(e){this.auth=e,this.observer=null,this.addObserver=_C(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t,e){const n=Bd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(xl(s,e??{}))return i;Ot(i,"already-initialized")}return n.initialize({options:e})}function rT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function iT(t,e,n){const r=Li(t);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=_v(e),{host:o,port:l}=sT(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||oT()}function _v(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sT(t){const e=_v(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:gp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:gp(o)}}}function gp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return en("not implemented")}_getIdTokenResponse(e){return en("not implemented")}_linkToIdToken(e,n){return en("not implemented")}_getReauthenticationResolver(e){return en("not implemented")}}async function lT(t,e){return Oi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uu(t,e){return lo(t,"POST","/v1/accounts:signInWithPassword",Di(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aT(t,e){return lo(t,"POST","/v1/accounts:signInWithEmailLink",Di(t,e))}async function uT(t,e){return lo(t,"POST","/v1/accounts:signInWithEmailLink",Di(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs extends Gd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new qs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new qs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Ll(e,r,"signInWithPassword");return uu(e,i)}else return uu(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Ll(e,r,"signInWithPassword");return uu(e,s)}else return Promise.reject(i)});case"emailLink":return aT(e,{email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return lT(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return uT(e,{idToken:n,email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(t,e){return lo(t,"POST","/v1/accounts:signInWithIdp",Di(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT="http://localhost";class Sr extends Gd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Wd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Sr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ai(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ai(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ai(e,n)}buildRequest(){const e={requestUri:cT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hT(t){const e=as(us(t)).link,n=e?as(us(e)).deep_link_id:null,r=as(us(t)).deep_link_id;return(r?as(us(r)).link:null)||r||n||e||t}class qd{constructor(e){var n,r,i,s,o,l;const a=as(us(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,c=(r=a.oobCode)!==null&&r!==void 0?r:null,d=dT((i=a.mode)!==null&&i!==void 0?i:null);j(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=hT(e);try{return new qd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.providerId=Mi.PROVIDER_ID}static credential(e,n){return qs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qd.parseLink(n);return j(r,"argument-error"),qs._fromEmailAndCode(e,r.code,r.tenantId)}}Mi.PROVIDER_ID="password";Mi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends vv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends ao{constructor(){super("facebook.com")}static credential(e){return Sr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends ao{constructor(){super("github.com")}static credential(e){return Sr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com";Pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends ao{constructor(){super("twitter.com")}static credential(e,n){return Sr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cu(t,e){return lo(t,"POST","/v1/accounts:signUp",Di(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await dr._fromIdTokenResponse(e,r,i),o=_p(r);return new Cr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=_p(r);return new Cr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function _p(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml extends Xn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ml.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ml(e,n,r,i)}}function yv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ml._fromErrorAndOperation(t,s,e,r):s})}async function fT(t,e,n=!1){const r=await Ks(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pT(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ks(t,yv(r,i,e,t),n);j(s.idToken,r,"internal-error");const o=Vd(s.idToken);j(o,r,"internal-error");const{sub:l}=o;return j(t.uid===l,r,"user-mismatch"),Cr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ot(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wv(t,e,n=!1){const r="signIn",i=await yv(t,r,e),s=await Cr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function mT(t,e){return wv(Li(t),e)}async function gT(t,e,n){var r;const i=Li(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Ll(i,s,"signUpPassword");o=cu(i,u)}else o=cu(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Ll(i,s,"signUpPassword");return cu(i,c)}else return Promise.reject(u)});const l=await o.catch(u=>Promise.reject(u)),a=await Cr._fromIdTokenResponse(i,"signIn",l);return await i._updateCurrentUser(a.user),a}function _T(t,e,n){return mT(Lt(t),Mi.credential(e,n))}function vT(t,e,n,r){return Lt(t).onIdTokenChanged(e,n,r)}function yT(t,e,n){return Lt(t).beforeAuthStateChanged(e,n)}function wT(t,e,n,r){return Lt(t).onAuthStateChanged(e,n,r)}function ET(t){return Lt(t).signOut()}const bl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bl,"1"),this.storage.removeItem(bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(){const t=Ge();return Kd(t)||ha(t)}const CT=1e3,IT=10;class Sv extends Ev{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ST()&&qI(),this.fallbackToPolling=dv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);GI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,IT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},CT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sv.type="LOCAL";const TT=Sv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv extends Ev{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Cv.type="SESSION";const Iv=Cv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await kT(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Qd("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return window}function NT(t){Vt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function PT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AT(){return Tv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv="firebaseLocalStorageDb",DT=1,Fl="firebaseLocalStorage",Rv="fbase_key";class uo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pa(t,e){return t.transaction([Fl],e?"readwrite":"readonly").objectStore(Fl)}function OT(){const t=indexedDB.deleteDatabase(kv);return new uo(t).toPromise()}function Tc(){const t=indexedDB.open(kv,DT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fl,{keyPath:Rv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fl)?e(r):(r.close(),await OT(),e(await Tc()))})})}async function vp(t,e,n){const r=pa(t,!0).put({[Rv]:e,value:n});return new uo(r).toPromise()}async function LT(t,e){const n=pa(t,!1).get(e),r=await new uo(n).toPromise();return r===void 0?null:r.value}function yp(t,e){const n=pa(t,!0).delete(e);return new uo(n).toPromise()}const MT=800,bT=3;class Nv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fa._getInstance(AT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PT(),!this.activeServiceWorker)return;this.sender=new RT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tc();return await vp(e,bl,"1"),await yp(e,bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>LT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=pa(i,!1).getAll();return new uo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nv.type="LOCAL";const FT=Nv;new oo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(t,e){return e?tn(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd extends Gd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jT(t){return wv(t.auth,new Yd(t),t.bypassAuthState)}function zT(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),pT(n,new Yd(t),t.bypassAuthState)}async function BT(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),fT(n,new Yd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jT;case"linkViaPopup":case"linkViaRedirect":return BT;case"reauthViaPopup":case"reauthViaRedirect":return zT;default:Ot(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=new oo(2e3,1e4);class Xr extends Pv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Xr.currentPopupAction&&Xr.currentPopupAction.cancel(),Xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=Qd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WT.get())};e()}}Xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT="pendingRedirect",el=new Map;class $T extends Pv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=el.get(this.auth._key());if(!e){try{const r=await VT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}el.set(this.auth._key(),e)}return this.bypassAuthState||el.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VT(t,e){const n=qT(e),r=GT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function KT(t,e){el.set(t._key(),e)}function GT(t){return tn(t._redirectPersistence)}function qT(t){return Zo(HT,t.config.apiKey,t.name)}async function QT(t,e,n=!1){const r=Li(t),i=UT(r,e),o=await new $T(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=10*60*1e3;class XT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($t(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YT&&this.cachedEventUids.clear(),this.cachedEventUids.has(wp(e))}saveEventToCache(e){this.cachedEventUids.add(wp(e)),this.lastProcessedEventTime=Date.now()}}function wp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZT(t,e={}){return Oi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,t1=/^https?/;async function n1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZT(t);for(const n of e)try{if(r1(n))return}catch{}Ot(t,"unauthorized-domain")}function r1(t){const e=Ic(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!t1.test(n))return!1;if(e1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=new oo(3e4,6e4);function Ep(){const t=Vt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function s1(t){return new Promise((e,n)=>{var r,i,s;function o(){Ep(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ep(),n($t(t,"network-request-failed"))},timeout:i1.get()})}if(!((i=(r=Vt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Vt().gapi)===null||s===void 0)&&s.load)o();else{const l=YI("iframefcb");return Vt()[l]=()=>{gapi.load?o():n($t(t,"network-request-failed"))},mv(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw tl=null,e})}let tl=null;function o1(t){return tl=tl||s1(t),tl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=new oo(5e3,15e3),a1="__/auth/iframe",u1="emulator/auth/iframe",c1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},d1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function h1(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$d(e,u1):`https://${t.config.authDomain}/${a1}`,r={apiKey:e.apiKey,appName:t.name,v:Ai},i=d1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xi(r).slice(1)}`}async function f1(t){const e=await o1(t),n=Vt().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:h1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:c1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=$t(t,"network-request-failed"),l=Vt().setTimeout(()=>{s(o)},l1.get());function a(){Vt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},m1=500,g1=600,_1="_blank",v1="http://localhost";class Sp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function y1(t,e,n,r=m1,i=g1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},p1),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ge().toLowerCase();n&&(l=ov(u)?_1:n),sv(u)&&(e=e||v1,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[v,_])=>`${h}${v}=${_},`,"");if(KI(u)&&l!=="_self")return w1(e||"",l),new Sp(null);const d=window.open(e||"",l,c);j(d,t,"popup-blocked");try{d.focus()}catch{}return new Sp(d)}function w1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1="__/auth/handler",S1="emulator/auth/handler",C1=encodeURIComponent("fac");async function Cp(t,e,n,r,i,s){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ai,eventId:i};if(e instanceof vv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof ao){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await t._getAppCheckToken(),u=a?`#${C1}=${encodeURIComponent(a)}`:"";return`${I1(t)}?${xi(l).slice(1)}${u}`}function I1({config:t}){return t.emulator?$d(t,S1):`https://${t.authDomain}/${E1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="webStorageSupport";class T1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Iv,this._completeRedirectFn=QT,this._overrideRedirectResult=KT}async _openPopup(e,n,r,i){var s;dn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Cp(e,n,r,Ic(),i);return y1(e,o,Qd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Cp(e,n,r,Ic(),i);return NT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await f1(e),r=new XT(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(du,{type:du},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[du];o!==void 0&&n(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=n1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dv()||Kd()||ha()}}const k1=T1;var Ip="@firebase/auth",Tp="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function P1(t){wi(new wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hv(t)},u=new tT(r,i,s,a);return rT(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wi(new wr("auth-internal",e=>{const n=Li(e.getProvider("auth").getImmediate());return(r=>new R1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(Ip,Tp,N1(t)),Hn(Ip,Tp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=5*60,A1=W_("authIdTokenMaxAge")||x1;let kp=null;const D1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>A1)return;const i=n==null?void 0:n.token;kp!==i&&(kp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function O1(t=Q_()){const e=Bd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nT(t,{popupRedirectResolver:k1,persistence:[FT,TT,Iv]}),r=W_("authTokenSyncURL");if(r){const s=D1(r);yT(n,s,()=>s(n.currentUser)),vT(n,o=>s(o))}const i=z_("auth");return i&&iT(n,`http://${i}`),n}P1("Browser");var L1="firebase",M1="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn(L1,M1,"app");const Rp="@firebase/database",Np="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Av="";function b1(t){Av=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:$s(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return mn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new F1(e)}}catch{}return new U1},ar=Dv("localStorage"),kc=Dv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new jd("@firebase/database"),j1=function(){let t=1;return function(){return t++}}(),Ov=function(t){const e=EC(t),n=new gC;n.update(e);const r=n.digest();return Md.encodeByteArray(r)},co=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=co.apply(null,r):typeof r=="object"?e+=be(r):e+=r,e+=" "}return e};let hr=null,Pp=!0;const z1=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ui.logLevel=te.VERBOSE,hr=ui.log.bind(ui),e&&kc.set("logging_enabled",!0)):typeof t=="function"?hr=t:(hr=null,kc.remove("logging_enabled"))},He=function(...t){if(Pp===!0&&(Pp=!1,hr===null&&kc.get("logging_enabled")===!0&&z1(!0)),hr){const e=co.apply(null,t);hr(e)}},ho=function(t){return function(...e){He(t,...e)}},Rc=function(...t){const e="FIREBASE INTERNAL ERROR: "+co(...t);ui.error(e)},hn=function(...t){const e=`FIREBASE FATAL ERROR: ${co(...t)}`;throw ui.error(e),new Error(e)},at=function(...t){const e="FIREBASE WARNING: "+co(...t);ui.warn(e)},B1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&at("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Lv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},W1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ei="[MIN_NAME]",Ir="[MAX_NAME]",bi=function(t,e){if(t===e)return 0;if(t===Ei||e===Ir)return-1;if(e===Ei||t===Ir)return 1;{const n=xp(t),r=xp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},H1=function(t,e){return t===e?0:t<e?-1:1},es=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+be(e))},Xd=function(t){if(typeof t!="object"||t===null)return be(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=be(e[r]),n+=":",n+=Xd(t[e[r]]);return n+="}",n},Mv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function wt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const bv=function(t){x(!Lv(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},$1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},V1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},K1=new RegExp("^-?(0*)\\d{1,10}$"),G1=-2147483648,q1=2147483647,xp=function(t){if(K1.test(t)){const e=Number(t);if(e>=G1&&e<=q1)return e}return null},fo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw at("Exception was thrown by user callback.",n),e},Math.floor(0))}},Q1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Es=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){at(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(He("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',at(e)}}class ci{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ci.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="5",Fv="v",Uv="s",jv="r",zv="f",Bv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Wv="ls",Hv="p",Nc="ac",$v="websocket",Vv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ar.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ar.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function J1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Gv(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(e===$v)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Vv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);J1(t)&&(n.ns=t.namespace);const i=[];return wt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(){this.counters_={}}incrementCounter(e,n=1){mn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ZS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu={},fu={};function Zd(t){const e=t.toString();return hu[e]||(hu[e]=new Z1),hu[e]}function ek(t,e){const n=t.toString();return fu[n]||(fu[n]=e()),fu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&fo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap="start",nk="close",rk="pLPCommand",ik="pRTLPCB",qv="id",Qv="pw",Yv="ser",sk="cb",ok="seg",lk="ts",ak="d",uk="dframe",Xv=1870,Jv=30,ck=Xv-Jv,dk=25e3,hk=3e4;class Jr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ho(e),this.stats_=Zd(n),this.urlFn=a=>(this.appCheckToken&&(a[Nc]=this.appCheckToken),Gv(n,Vv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new tk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hk)),W1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new eh((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ap)this.id=l,this.password=a;else if(o===nk)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ap]="t",r[Yv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[sk]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Fv]=Jd,this.transportSessionId&&(r[Uv]=this.transportSessionId),this.lastSessionId&&(r[Wv]=this.lastSessionId),this.applicationId&&(r[Hv]=this.applicationId),this.appCheckToken&&(r[Nc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Bv.test(location.hostname)&&(r[jv]=zv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jr.forceAllow_=!0}static forceDisallow(){Jr.forceDisallow_=!0}static isAvailable(){return Jr.forceAllow_?!0:!Jr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$1()&&!V1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=U_(n),i=Mv(r,ck);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[uk]="t",r[qv]=e,r[Qv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class eh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=j1(),window[rk+this.uniqueCallbackIdentifier]=e,window[ik+this.uniqueCallbackIdentifier]=n,this.myIFrame=eh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){He("frame writing exception"),l.stack&&He(l.stack),He(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||He("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[qv]=this.myID,e[Qv]=this.myPW,e[Yv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Jv+r.length<=Xv;){const o=this.pendingSegs.shift();r=r+"&"+ok+i+"="+o.seg+"&"+lk+i+"="+o.ts+"&"+ak+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(dk)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{He("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=16384,pk=45e3;let Ul=null;typeof MozWebSocket<"u"?Ul=MozWebSocket:typeof WebSocket<"u"&&(Ul=WebSocket);class Rt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ho(this.connId),this.stats_=Zd(n),this.connURL=Rt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Fv]=Jd,typeof location<"u"&&location.hostname&&Bv.test(location.hostname)&&(o[jv]=zv),n&&(o[Uv]=n),r&&(o[Wv]=r),i&&(o[Nc]=i),s&&(o[Hv]=s),Gv(e,$v,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ar.set("previous_websocket_failure",!0);try{let r;$_(),this.mySock=new Ul(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ul!==null&&!Rt.forceDisallow_}static previouslyFailed(){return ar.isInMemoryStorage||ar.get("previous_websocket_failure")===!0}markConnectionHealthy(){ar.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=$s(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Mv(n,fk);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Rt.responsesRequiredToBeHealthy=2;Rt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Jr,Rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Rt&&Rt.isAvailable();let r=n&&!Rt.previouslyFailed();if(e.webSocketOnly&&(n||at("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Rt];else{const i=this.transports_=[];for(const s of Qs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Qs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=6e4,gk=5e3,_k=10*1024,vk=100*1024,pu="t",Dp="d",yk="s",Op="r",wk="e",Lp="o",Mp="a",bp="n",Fp="p",Ek="h";class Sk{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ho("c:"+this.id+":"),this.transportManager_=new Qs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Es(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>vk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_k?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pu in e){const n=e[pu];n===Mp?this.upgradeIfSecondaryHealthy_():n===Op?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Lp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=es("t",e),r=es("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:bp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=es("t",e),r=es("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=es(pu,e);if(Dp in e){const r=e[Dp];if(n===Ek){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===bp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===yk?this.onConnectionShutdown_(r):n===Op?this.onReset_(r):n===wk?Rc("Server Error: "+r):n===Lp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Rc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Jd!==r&&at("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Es(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Es(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ar.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends ey{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ud()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new jl}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=32,jp=768;class he{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ne(){return new he("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Gn(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new he(t.pieces_,e)}function ty(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ck(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ny(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ry(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new he(e,0)}function Oe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof he)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new he(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function gt(t,e){const n=q(t),r=q(e);if(n===null)return e;if(n===r)return gt(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function iy(t,e){if(Gn(t)!==Gn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Nt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Gn(t)>Gn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Ik{constructor(e,n){this.errorPrefix_=n,this.parts_=ny(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=da(this.parts_[r]);sy(this)}}function Tk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=da(e),sy(t)}function kk(t){const e=t.parts_.pop();t.byteLength_-=da(e),t.parts_.length>0&&(t.byteLength_-=1)}function sy(t){if(t.byteLength_>jp)throw new Error(t.errorPrefix_+"has a key path longer than "+jp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Up)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Up+") or object contains a cycle "+rr(t))}function rr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th extends ey{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new th}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=1e3,Rk=60*5*1e3,zp=30*1e3,Nk=1.3,Pk=3e4,xk="server_kill",Bp=3;class on extends Zv{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=on.nextPersistentConnectionId_++,this.log_=ho("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ts,this.maxReconnectDelay_=Rk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!$_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");th.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&jl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(be(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Fd,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;on.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&mn(e,"w")){const r=yi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();at(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||mC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=pC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+be(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Rc("Unrecognized action received from server: "+be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ts,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ts,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Pk&&(this.reconnectDelay_=ts),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Nk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+on.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){x(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?He("getToken() completed but was canceled"):(He("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new Sk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{at(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(xk)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&at(d),a())}}}interrupt(e){He("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){He("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vc(this.interruptReasons_)&&(this.reconnectDelay_=ts,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Xd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new he(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){He("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Bp&&(this.reconnectDelay_=zp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){He("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Bp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Av.replace(/\./g,"-")]=1,Ud()?e["framework.cordova"]=1:H_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=jl.getInstance().currentlyOnline();return vc(this.interruptReasons_)&&e}}on.nextPersistentConnectionId_=0;on.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Q(Ei,e),i=new Q(Ei,n);return this.compare(r,i)!==0}minPost(){return Q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo;class oy extends ma{static get __EMPTY_NODE(){return Uo}static set __EMPTY_NODE(e){Uo=e}compare(e,n){return bi(e.name,n.name)}isDefinedOn(e){throw Pi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Q.MIN}maxPost(){return new Q(Ir,Uo)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,Uo)}toString(){return".key"}}const di=new oy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class De{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??De.RED,this.left=i??et.EMPTY_NODE,this.right=s??et.EMPTY_NODE}copy(e,n,r,i,s){return new De(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return et.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return et.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}De.RED=!0;De.BLACK=!1;class Ak{copy(e,n,r,i,s){return this}insert(e,n,r){return new De(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class et{constructor(e,n=et.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new et(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,De.BLACK,null,null))}remove(e){return new et(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,De.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new jo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new jo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new jo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new jo(this.root_,null,this.comparator_,!0,e)}}et.EMPTY_NODE=new Ak;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(t,e){return bi(t.name,e.name)}function nh(t,e){return bi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pc;function Ok(t){Pc=t}const ly=function(t){return typeof t=="number"?"number:"+bv(t):"string:"+t},ay=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mn(e,".sv"),"Priority must be a string or number.")}else x(t===Pc||t.isEmpty(),"priority of unexpected type.");x(t===Pc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wp;class xe{constructor(e,n=xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ay(this.priorityNode_)}static set __childrenNodeConstructor(e){Wp=e}static get __childrenNodeConstructor(){return Wp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:q(e)===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||Gn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ly(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=bv(this.value_):e+=this.value_,this.lazyHash_=Ov(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xe.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=xe.VALUE_TYPE_ORDER.indexOf(n),s=xe.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uy,cy;function Lk(t){uy=t}function Mk(t){cy=t}class bk extends ma{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?bi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(Ir,new xe("[PRIORITY-POST]",cy))}makePost(e,n){const r=uy(e);return new Q(n,new xe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ve=new bk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=Math.log(2);class Uk{constructor(e){const n=s=>parseInt(Math.log(s)/Fk,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zl=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new De(h,d.node,De.BLACK,null,null);{const v=parseInt(c/2,10)+a,_=i(a,v),y=i(v+1,u);return d=t[v],h=n?n(d):d,new De(h,d.node,De.BLACK,_,y)}},s=function(a){let u=null,c=null,d=t.length;const h=function(_,y){const T=d-_,m=d;d-=_;const f=i(T+1,m),g=t[T],p=n?n(g):g;v(new De(p,g.node,y,null,f))},v=function(_){u?(u.left=_,u=_):(c=_,u=_)};for(let _=0;_<a.count;++_){const y=a.nextBitIsOne(),T=Math.pow(2,a.count-(_+1));y?h(T,De.BLACK):(h(T,De.BLACK),h(T,De.RED))}return c},o=new Uk(t.length),l=s(o);return new et(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mu;const Mr={};class nn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(Mr&&Ve,"ChildrenNode.ts has not been loaded"),mu=mu||new nn({".priority":Mr},{".priority":Ve}),mu}get(e){const n=yi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof et?n:null}hasIndex(e){return mn(this.indexSet_,e.toString())}addIndex(e,n){x(e!==di,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Q.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=zl(r,e.getCompare()):l=Mr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new nn(c,u)}addToIndexes(e,n){const r=Pl(this.indexes_,(i,s)=>{const o=yi(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===Mr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(Q.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),zl(l,o.getCompare())}else return Mr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new Q(e.name,l))),a.insert(e,e.node)}});return new nn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Pl(this.indexes_,i=>{if(i===Mr)return i;{const s=n.get(e.name);return s?i.remove(new Q(e.name,s)):i}});return new nn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns;class X{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ay(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ns||(ns=new X(new et(nh),null,nn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ns}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ns:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Q(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ns:this.priorityNode_;return new X(i,o,s)}}updateChild(e,n){const r=q(e);if(r===null)return n;{x(q(e)!==".priority"||Gn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ce(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ve,(o,l)=>{n[o]=l.val(e),r++,s&&X.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ly(this.getPriority().val())+":"),this.forEachChild(Ve,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ov(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Q(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Q(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===po?-1:0}withIndex(e){if(e===di||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===di||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ve),i=n.getIterator(Ve);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===di?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class jk extends X{constructor(){super(new et(nh),X.EMPTY_NODE,nn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const po=new jk;Object.defineProperties(Q,{MIN:{value:new Q(Ei,X.EMPTY_NODE)},MAX:{value:new Q(Ir,po)}});oy.__EMPTY_NODE=X.EMPTY_NODE;xe.__childrenNodeConstructor=X;Ok(po);Mk(po);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=!0;function $e(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new xe(n,$e(e))}if(!(t instanceof Array)&&zk){const n=[];let r=!1;if(wt(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=$e(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new Q(o,a)))}}),n.length===0)return X.EMPTY_NODE;const s=zl(n,Dk,o=>o.name,nh);if(r){const o=zl(n,Ve.getCompare());return new X(s,$e(e),new nn({".priority":o},{".priority":Ve}))}else return new X(s,$e(e),nn.Default)}else{let n=X.EMPTY_NODE;return wt(t,(r,i)=>{if(mn(t,r)&&r.substring(0,1)!=="."){const s=$e(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority($e(e))}}Lk($e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk extends ma{constructor(e){super(),this.indexPath_=e,x(!G(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?bi(e.name,n.name):s}makePost(e,n){const r=$e(e),i=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new Q(n,i)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,po);return new Q(Ir,e)}toString(){return ny(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk extends ma{compare(e,n){const r=e.node.compareTo(n.node);return r===0?bi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,n){const r=$e(e);return new Q(n,r)}toString(){return".value"}}const Hk=new Wk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(t){return{type:"value",snapshotNode:t}}function Vk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Kk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Hp(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Gk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ei}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ir}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ve}copy(){const e=new rh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $p(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ve?n="$priority":t.index_===Hk?n="$value":t.index_===di?n="$key":(x(t.index_ instanceof Bk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=be(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=be(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+be(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=be(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Vp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ve&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends Zv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ho("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Bl.getListenId_(e,r),l={};this.listens_[o]=l;const a=$p(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),yi(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Bl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=$p(e._queryParams),r=e._path.toString(),i=new Fd;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=$s(l.responseText)}catch{at("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&at("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(){return{value:null,children:new Map}}function dy(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=q(e);t.children.has(r)||t.children.set(r,Wl());const i=t.children.get(r);e=ce(e),dy(i,e,n)}}function xc(t,e,n){t.value!==null?n(e,t.value):Qk(t,(r,i)=>{const s=new he(e.toString()+"/"+r);xc(i,s,n)})}function Qk(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&wt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=10*1e3,Xk=30*1e3,Jk=5*60*1e3;class Zk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Yk(e);const r=Kp+(Xk-Kp)*Math.random();Es(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;wt(e,(i,s)=>{s>0&&mn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Es(this.reportStats_.bind(this),Math.floor(Math.random()*2*Jk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Bt||(Bt={}));function hy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function py(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Bt.ACK_USER_WRITE,this.source=hy()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new he(e));return new Hl(ne(),n,this.revert)}}else return x(q(this.path)===e,"operationForChild called for unrelated child."),new Hl(ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Bt.OVERWRITE}operationForChild(e){return G(this.path)?new Tr(this.source,ne(),this.snap.getImmediateChild(e)):new Tr(this.source,ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Bt.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new he(e));return n.isEmpty()?null:n.value?new Tr(this.source,ne(),n.value):new Ys(this.source,ne(),n)}else return x(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ys(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function eR(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Gk(o.childName,o.snapshotNode))}),rs(t,i,"child_removed",e,r,n),rs(t,i,"child_added",e,r,n),rs(t,i,"child_moved",s,r,n),rs(t,i,"child_changed",e,r,n),rs(t,i,"value",e,r,n),i}function rs(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>nR(t,l,a)),o.forEach(l=>{const a=tR(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function tR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function nR(t,e,n){if(e.childName==null||n.childName==null)throw Pi("Should only compare child_ events.");const r=new Q(e.childName,e.snapshotNode),i=new Q(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(t,e){return{eventCache:t,serverCache:e}}function Ss(t,e,n,r){return my(new ih(e,n,r),t.serverCache)}function gy(t,e,n,r){return my(t.eventCache,new ih(e,n,r))}function Ac(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function kr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gu;const rR=()=>(gu||(gu=new et(H1)),gu);class ae{constructor(e,n=rR()){this.value=e,this.children=n}static fromObject(e){let n=new ae(null);return wt(e,(r,i)=>{n=n.set(new he(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ne(),value:this.value};if(G(e))return null;{const r=q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ce(e),n);return s!=null?{path:Oe(new he(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=q(e),r=this.children.get(n);return r!==null?r.subtree(ce(e)):new ae(null)}}set(e,n){if(G(e))return new ae(n,this.children);{const r=q(e),s=(this.children.get(r)||new ae(null)).set(ce(e),n),o=this.children.insert(r,s);return new ae(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new ae(null):new ae(null,this.children);{const n=q(e),r=this.children.get(n);if(r){const i=r.remove(ce(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ae(null):new ae(this.value,s)}else return this}}get(e){if(G(e))return this.value;{const n=q(e),r=this.children.get(n);return r?r.get(ce(e)):null}}setTree(e,n){if(G(e))return n;{const r=q(e),s=(this.children.get(r)||new ae(null)).setTree(ce(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ae(this.value,o)}}fold(e){return this.fold_(ne(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Oe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ne(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(e))return null;{const s=q(e),o=this.children.get(s);return o?o.findOnPath_(ce(e),Oe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ne(),n)}foreachOnPath_(e,n,r){if(G(e))return this;{this.value&&r(n,this.value);const i=q(e),s=this.children.get(i);return s?s.foreachOnPath_(ce(e),Oe(n,i),r):new ae(null)}}foreach(e){this.foreach_(ne(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Oe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.writeTree_=e}static empty(){return new At(new ae(null))}}function Cs(t,e,n){if(G(e))return new At(new ae(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=gt(i,e);return s=s.updateChild(o,n),new At(t.writeTree_.set(i,s))}else{const i=new ae(n),s=t.writeTree_.setTree(e,i);return new At(s)}}}function Gp(t,e,n){let r=t;return wt(n,(i,s)=>{r=Cs(r,Oe(e,i),s)}),r}function qp(t,e){if(G(e))return At.empty();{const n=t.writeTree_.setTree(e,new ae(null));return new At(n)}}function Dc(t,e){return Pr(t,e)!=null}function Pr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(gt(n.path,e)):null}function Qp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ve,(r,i)=>{e.push(new Q(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Q(r,i.value))}),e}function $n(t,e){if(G(e))return t;{const n=Pr(t,e);return n!=null?new At(new ae(n)):new At(t.writeTree_.subtree(e))}}function Oc(t){return t.writeTree_.isEmpty()}function Si(t,e){return _y(ne(),t.writeTree_,e)}function _y(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=_y(Oe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Oe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(t,e){return Cy(e,t)}function iR(t,e,n,r,i){x(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Cs(t.visibleWrites,e,n)),t.lastWriteId=r}function sR(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function oR(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&lR(l,r.path)?i=!1:Nt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return aR(t),!0;if(r.snap)t.visibleWrites=qp(t.visibleWrites,r.path);else{const l=r.children;wt(l,a=>{t.visibleWrites=qp(t.visibleWrites,Oe(r.path,a))})}return!0}else return!1}function lR(t,e){if(t.snap)return Nt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Nt(Oe(t.path,n),e))return!0;return!1}function aR(t){t.visibleWrites=yy(t.allWrites,uR,ne()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function uR(t){return t.visible}function yy(t,e,n){let r=At.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Nt(n,o)?(l=gt(n,o),r=Cs(r,l,s.snap)):Nt(o,n)&&(l=gt(o,n),r=Cs(r,ne(),s.snap.getChild(l)));else if(s.children){if(Nt(n,o))l=gt(n,o),r=Gp(r,l,s.children);else if(Nt(o,n))if(l=gt(o,n),G(l))r=Gp(r,ne(),s.children);else{const a=yi(s.children,q(l));if(a){const u=a.getChild(ce(l));r=Cs(r,ne(),u)}}}else throw Pi("WriteRecord should have .snap or .children")}}return r}function wy(t,e,n,r,i){if(!r&&!i){const s=Pr(t.visibleWrites,e);if(s!=null)return s;{const o=$n(t.visibleWrites,e);if(Oc(o))return n;if(n==null&&!Dc(o,ne()))return null;{const l=n||X.EMPTY_NODE;return Si(o,l)}}}else{const s=$n(t.visibleWrites,e);if(!i&&Oc(s))return n;if(!i&&n==null&&!Dc(s,ne()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Nt(u.path,e)||Nt(e,u.path))},l=yy(t.allWrites,o,e),a=n||X.EMPTY_NODE;return Si(l,a)}}}function cR(t,e,n){let r=X.EMPTY_NODE;const i=Pr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ve,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=$n(t.visibleWrites,e);return n.forEachChild(Ve,(o,l)=>{const a=Si($n(s,new he(o)),l);r=r.updateImmediateChild(o,a)}),Qp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=$n(t.visibleWrites,e);return Qp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function dR(t,e,n,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Oe(e,n);if(Dc(t.visibleWrites,s))return null;{const o=$n(t.visibleWrites,s);return Oc(o)?i.getChild(n):Si(o,i.getChild(n))}}function hR(t,e,n,r){const i=Oe(e,n),s=Pr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=$n(t.visibleWrites,i);return Si(o,r.getNode().getImmediateChild(n))}else return null}function fR(t,e){return Pr(t.visibleWrites,e)}function pR(t,e,n,r,i,s,o){let l;const a=$n(t.visibleWrites,e),u=Pr(a,ne());if(u!=null)l=u;else if(n!=null)l=Si(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let v=h.getNext();for(;v&&c.length<i;)d(v,r)!==0&&c.push(v),v=h.getNext();return c}else return[]}function mR(){return{visibleWrites:At.empty(),allWrites:[],lastWriteId:-1}}function Lc(t,e,n,r){return wy(t.writeTree,t.treePath,e,n,r)}function Ey(t,e){return cR(t.writeTree,t.treePath,e)}function Yp(t,e,n,r){return dR(t.writeTree,t.treePath,e,n,r)}function $l(t,e){return fR(t.writeTree,Oe(t.treePath,e))}function gR(t,e,n,r,i,s){return pR(t.writeTree,t.treePath,e,n,r,i,s)}function sh(t,e,n){return hR(t.writeTree,t.treePath,e,n)}function Sy(t,e){return Cy(Oe(t.treePath,e),t.writeTree)}function Cy(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Hp(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Kk(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Vk(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Hp(r,e.snapshotNode,i.oldSnap));else throw Pi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Iy=new vR;class oh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ih(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return sh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kr(this.viewCache_),s=gR(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function yR(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function wR(t,e,n,r,i){const s=new _R;let o,l;if(n.type===Bt.OVERWRITE){const u=n;u.source.fromUser?o=Mc(t,e,u.path,u.snap,r,i,s):(x(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!G(u.path),o=Vl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===Bt.MERGE){const u=n;u.source.fromUser?o=SR(t,e,u.path,u.children,r,i,s):(x(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=bc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===Bt.ACK_USER_WRITE){const u=n;u.revert?o=TR(t,e,u.path,r,i,s):o=CR(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Bt.LISTEN_COMPLETE)o=IR(t,e,n.path,r,s);else throw Pi("Unknown operation type: "+n.type);const a=s.getChanges();return ER(e,o,a),{viewCache:o,changes:a}}function ER(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ac(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push($k(Ac(e)))}}function Ty(t,e,n,r,i,s){const o=e.eventCache;if($l(r,n)!=null)return e;{let l,a;if(G(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=kr(e),c=u instanceof X?u:X.EMPTY_NODE,d=Ey(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Lc(r,kr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=q(n);if(u===".priority"){x(Gn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=Yp(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=ce(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Yp(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=sh(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return Ss(e,l,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function Vl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(G(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const v=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),v,null)}else{const v=q(n);if(!a.isCompleteForPath(n)&&Gn(n)>1)return e;const _=ce(n),T=a.getNode().getImmediateChild(v).updateChild(_,r);v===".priority"?u=c.updatePriority(a.getNode(),T):u=c.updateChild(a.getNode(),v,T,_,Iy,null)}const d=gy(e,u,a.isFullyInitialized()||G(n),c.filtersNodes()),h=new oh(i,d,s);return Ty(t,d,n,i,h,l)}function Mc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new oh(i,e,s);if(G(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ss(e,u,!0,t.filter.filtersNodes());else{const d=q(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ss(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=ce(n),v=l.getNode().getImmediateChild(d);let _;if(G(h))_=r;else{const y=c.getCompleteChild(d);y!=null?ty(h)===".priority"&&y.getChild(ry(h)).isEmpty()?_=y:_=y.updateChild(h,r):_=X.EMPTY_NODE}if(v.equals(_))a=e;else{const y=t.filter.updateChild(l.getNode(),d,_,h,c,o);a=Ss(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Xp(t,e){return t.eventCache.isCompleteForChild(e)}function SR(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=Oe(n,a);Xp(e,q(c))&&(l=Mc(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=Oe(n,a);Xp(e,q(c))||(l=Mc(t,l,c,u,i,s,o))}),l}function Jp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function bc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;G(n)?u=r:u=new ae(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const v=e.serverCache.getNode().getImmediateChild(d),_=Jp(t,v,h);a=Vl(t,a,new he(d),_,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const v=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!v){const _=e.serverCache.getNode().getImmediateChild(d),y=Jp(t,_,h);a=Vl(t,a,new he(d),y,i,s,o,l)}}),a}function CR(t,e,n,r,i,s,o){if($l(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(G(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Vl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(G(n)){let u=new ae(null);return a.getNode().forEachChild(di,(c,d)=>{u=u.set(new he(c),d)}),bc(t,e,n,u,i,s,l,o)}else return e}else{let u=new ae(null);return r.foreach((c,d)=>{const h=Oe(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),bc(t,e,n,u,i,s,l,o)}}function IR(t,e,n,r,i){const s=e.serverCache,o=gy(e,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return Ty(t,o,n,r,Iy,i)}function TR(t,e,n,r,i,s){let o;if($l(r,n)!=null)return e;{const l=new oh(r,e,i),a=e.eventCache.getNode();let u;if(G(n)||q(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Lc(r,kr(e));else{const d=e.serverCache.getNode();x(d instanceof X,"serverChildren would be complete if leaf node"),c=Ey(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=q(n);let d=sh(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,ce(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,X.EMPTY_NODE,ce(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Lc(r,kr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||$l(r,ne())!=null,Ss(e,u,o,t.filter.filtersNodes())}}function kR(t,e){const n=kr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function Zp(t,e,n,r){e.type===Bt.MERGE&&e.source.queryId!==null&&(x(kr(t.viewCache_),"We should always have a full cache before handling merges"),x(Ac(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=wR(t.processor_,i,e,n,r);return yR(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,RR(t,s.changes,s.viewCache.eventCache.getNode(),null)}function RR(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return eR(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let em;function NR(t){x(!em,"__referenceConstructor has already been defined"),em=t}function lh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),Zp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Zp(o,e,n,r));return s}}function ah(t,e){let n=null;for(const r of t.views.values())n=n||kR(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tm;function PR(t){x(!tm,"__referenceConstructor has already been defined"),tm=t}class nm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ae(null),this.pendingWriteTree_=mR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function xR(t,e,n,r,i){return iR(t.pendingWriteTree_,e,n,r,i),i?_a(t,new Tr(hy(),e,n)):[]}function Zr(t,e,n=!1){const r=sR(t.pendingWriteTree_,e);if(oR(t.pendingWriteTree_,e)){let s=new ae(null);return r.snap!=null?s=s.set(ne(),!0):wt(r.children,o=>{s=s.set(new he(o),!0)}),_a(t,new Hl(r.path,s,n))}else return[]}function ga(t,e,n){return _a(t,new Tr(fy(),e,n))}function AR(t,e,n){const r=ae.fromObject(n);return _a(t,new Ys(fy(),e,r))}function DR(t,e,n,r){const i=Py(t,r);if(i!=null){const s=xy(i),o=s.path,l=s.queryId,a=gt(o,e),u=new Tr(py(l),a,n);return Ay(t,o,u)}else return[]}function OR(t,e,n,r){const i=Py(t,r);if(i){const s=xy(i),o=s.path,l=s.queryId,a=gt(o,e),u=ae.fromObject(n),c=new Ys(py(l),a,u);return Ay(t,o,c)}else return[]}function ky(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=gt(o,e),u=ah(l,a);if(u)return u});return wy(i,e,s,n,!0)}function _a(t,e){return Ry(e,t.syncPointTree_,null,vy(t.pendingWriteTree_,ne()))}function Ry(t,e,n,r){if(G(t.path))return Ny(t,e,n,r);{const i=e.get(ne());n==null&&i!=null&&(n=ah(i,ne()));let s=[];const o=q(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=Sy(r,o);s=s.concat(Ry(l,a,u,c))}return i&&(s=s.concat(lh(i,t,r,n))),s}}function Ny(t,e,n,r){const i=e.get(ne());n==null&&i!=null&&(n=ah(i,ne()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Sy(r,o),c=t.operationForChild(o);c&&(s=s.concat(Ny(c,l,a,u)))}),i&&(s=s.concat(lh(i,t,r,n))),s}function Py(t,e){return t.tagToQueryMap.get(e)}function xy(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new he(t.substr(0,e))}}function Ay(t,e,n){const r=t.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const i=vy(t.pendingWriteTree_,e);return lh(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new uh(n)}node(){return this.node_}}class ch{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Oe(this.path_,e);return new ch(this.syncTree_,n)}node(){return ky(this.syncTree_,this.path_)}}const LR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},rm=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return MR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return bR(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},MR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},bR=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},FR=function(t,e,n,r){return dh(e,new ch(n,t),r)},UR=function(t,e,n){return dh(t,new uh(e),n)};function dh(t,e,n){const r=t.getPriority().val(),i=rm(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=rm(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new xe(l,$e(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new xe(i))),o.forEachChild(Ve,(l,a)=>{const u=dh(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function fh(t,e){let n=e instanceof he?e:new he(e),r=t,i=q(n);for(;i!==null;){const s=yi(r.node.children,i)||{children:{},childCount:0};r=new hh(i,r,s),n=ce(n),i=q(n)}return r}function Fi(t){return t.node.value}function Dy(t,e){t.node.value=e,Fc(t)}function Oy(t){return t.node.childCount>0}function jR(t){return Fi(t)===void 0&&!Oy(t)}function va(t,e){wt(t.node.children,(n,r)=>{e(new hh(n,t,r))})}function Ly(t,e,n,r){n&&!r&&e(t),va(t,i=>{Ly(i,e,!0,r)}),n&&r&&e(t)}function zR(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function mo(t){return new he(t.parent===null?t.name:mo(t.parent)+"/"+t.name)}function Fc(t){t.parent!==null&&BR(t.parent,t.name,t)}function BR(t,e,n){const r=jR(n),i=mn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Fc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Fc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR=/[\[\].#$\/\u0000-\u001F\u007F]/,HR=/[\[\].#$\u0000-\u001F\u007F]/,_u=10*1024*1024,My=function(t){return typeof t=="string"&&t.length!==0&&!WR.test(t)},$R=function(t){return typeof t=="string"&&t.length!==0&&!HR.test(t)},VR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$R(t)},by=function(t,e,n){const r=n instanceof he?new Ik(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+rr(r));if(typeof e=="function")throw new Error(t+"contains a function "+rr(r)+" with contents = "+e.toString());if(Lv(e))throw new Error(t+"contains "+e.toString()+" "+rr(r));if(typeof e=="string"&&e.length>_u/3&&da(e)>_u)throw new Error(t+"contains a string greater than "+_u+" utf8 bytes "+rr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(wt(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!My(o)))throw new Error(t+" contains an invalid key ("+o+") "+rr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Tk(r,o),by(t,l,r),kk(r)}),i&&s)throw new Error(t+' contains ".value" child '+rr(r)+" in addition to actual children.")}},KR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!My(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!VR(n))throw new Error(wC(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qR(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!iy(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function xr(t,e,n){qR(t,n),QR(t,r=>Nt(r,e)||Nt(e,r))}function QR(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(YR(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function YR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();hr&&He("event: "+n.toString()),fo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR="repo_interrupt",JR=25;class ZR{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new GR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Wl(),this.transactionQueueTree_=new hh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function eN(t,e,n){if(t.stats_=Zd(t.repoInfo_),t.forceRestClient_||Q1())t.server_=new Bl(t.repoInfo_,(r,i,s,o)=>{im(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>sm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new on(t.repoInfo_,e,(r,i,s,o)=>{im(t,r,i,s,o)},r=>{sm(t,r)},r=>{nN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=ek(t.repoInfo_,()=>new Zk(t.stats_,t.server_)),t.infoData_=new qk,t.infoSyncTree_=new nm({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=ga(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ph(t,"connected",!1),t.serverSyncTree_=new nm({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);xr(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function tN(t){const n=t.infoData_.getNode(new he(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Fy(t){return LR({timestamp:tN(t)})}function im(t,e,n,r,i){t.dataUpdateCount++;const s=new he(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Pl(n,u=>$e(u));o=OR(t.serverSyncTree_,s,a,i)}else{const a=$e(n);o=DR(t.serverSyncTree_,s,a,i)}else if(r){const a=Pl(n,u=>$e(u));o=AR(t.serverSyncTree_,s,a)}else{const a=$e(n);o=ga(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=gh(t,s)),xr(t.eventQueue_,l,o)}function sm(t,e){ph(t,"connected",e),e===!1&&iN(t)}function nN(t,e){wt(e,(n,r)=>{ph(t,n,r)})}function ph(t,e,n){const r=new he("/.info/"+e),i=$e(n);t.infoData_.updateSnapshot(r,i);const s=ga(t.infoSyncTree_,r,i);xr(t.eventQueue_,r,s)}function rN(t){return t.nextWriteId_++}function iN(t){Uy(t,"onDisconnectEvents");const e=Fy(t),n=Wl();xc(t.onDisconnect_,ne(),(i,s)=>{const o=FR(i,s,t.serverSyncTree_,e);dy(n,i,o)});let r=[];xc(n,ne(),(i,s)=>{r=r.concat(ga(t.serverSyncTree_,i,s));const o=aN(t,i);gh(t,o)}),t.onDisconnect_=Wl(),xr(t.eventQueue_,ne(),r)}function sN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(XR)}function Uy(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),He(n,...e)}function jy(t,e,n){return ky(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function mh(t,e=t.transactionQueueTree_){if(e||ya(t,e),Fi(e)){const n=By(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&oN(t,mo(e),n)}else Oy(e)&&va(e,n=>{mh(t,n)})}function oN(t,e,n){const r=n.map(u=>u.currentWriteId),i=jy(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];x(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=gt(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Uy(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(Zr(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ya(t,fh(t.transactionQueueTree_,e)),mh(t,t.transactionQueueTree_),xr(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)fo(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{at("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}gh(t,e)}},o)}function gh(t,e){const n=zy(t,e),r=mo(n),i=By(t,n);return lN(t,i,r),r}function lN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=gt(n,a.path);let c=!1,d;if(x(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(Zr(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=JR)c=!0,d="maxretry",i=i.concat(Zr(t.serverSyncTree_,a.currentWriteId,!0));else{const h=jy(t,a.path,o);a.currentInputSnapshot=h;const v=e[l].update(h.val());if(v!==void 0){by("transaction failed: Data returned ",v,a.path);let _=$e(v);typeof v=="object"&&v!=null&&mn(v,".priority")||(_=_.updatePriority(h.getPriority()));const T=a.currentWriteId,m=Fy(t),f=UR(_,h,m);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=rN(t),o.splice(o.indexOf(T),1),i=i.concat(xR(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Zr(t.serverSyncTree_,T,!0))}else c=!0,d="nodata",i=i.concat(Zr(t.serverSyncTree_,a.currentWriteId,!0))}xr(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}ya(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)fo(r[l]);mh(t,t.transactionQueueTree_)}function zy(t,e){let n,r=t.transactionQueueTree_;for(n=q(e);n!==null&&Fi(r)===void 0;)r=fh(r,n),e=ce(e),n=q(e);return r}function By(t,e){const n=[];return Wy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Wy(t,e,n){const r=Fi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);va(e,i=>{Wy(t,i,n)})}function ya(t,e){const n=Fi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Dy(e,n.length>0?n:void 0)}va(e,r=>{ya(t,r)})}function aN(t,e){const n=mo(zy(t,e)),r=fh(t.transactionQueueTree_,e);return zR(r,i=>{vu(t,i)}),vu(t,r),Ly(r,i=>{vu(t,i)}),n}function vu(t,e){const n=Fi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Zr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Dy(e,void 0):n.length=s+1,xr(t.eventQueue_,mo(e),i);for(let o=0;o<r.length;o++)fo(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function cN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):at(`Invalid query segment '${n}' in query '${t}'`)}return e}const om=function(t,e){const n=dN(t),r=n.namespace;n.domain==="firebase.com"&&hn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||B1();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Kv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new he(n.pathString)}},dN=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=uN(t.substring(c,d)));const h=cN(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const v=e.slice(0,u);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:ty(this._path)}get ref(){return new Ui(this._repo,this._path)}get _queryIdentifier(){const e=Vp(this._queryParams),n=Xd(e);return n==="{}"?"default":n}get _queryObject(){return Vp(this._queryParams)}isEqual(e){if(e=Lt(e),!(e instanceof _h))return!1;const n=this._repo===e._repo,r=iy(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ck(this._path)}}class Ui extends _h{constructor(e,n){super(e,n,new rh,!1)}get parent(){const e=ry(this._path);return e===null?null:new Ui(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}NR(Ui);PR(Ui);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN="FIREBASE_DATABASE_EMULATOR_HOST",Uc={};let fN=!1;function pN(t,e,n,r){t.repoInfo_=new Kv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function mN(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),He("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=om(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[hN]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=om(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new ci(ci.OWNER):new X1(t.name,t.options,e);KR("Invalid Firebase Database URL",o),G(o.path)||hn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=_N(l,t,c,new Y1(t.name,n));return new vN(d,t)}function gN(t,e){const n=Uc[e];(!n||n[t.key]!==t)&&hn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),sN(t),delete n[t.key]}function _N(t,e,n,r){let i=Uc[e.name];i||(i={},Uc[e.name]=i);let s=i[t.toURLString()];return s&&hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ZR(t,fN,n,r),i[t.toURLString()]=s,s}class vN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(eN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ui(this._repo,ne())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hn("Cannot call "+e+" on a deleted database.")}}function yN(t=Q_(),e){const n=Bd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=sC("database");r&&wN(n,...r)}return n}function wN(t,e,n,r={}){t=Lt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&hn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&hn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ci(ci.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:oC(r.mockUserToken,t.app.options.projectId);s=new ci(o)}pN(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(t){b1(Ai),wi(new wr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return mN(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Hn(Rp,Np,t),Hn(Rp,Np,"esm2017")}on.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};on.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};EN();const SN={apiKey:"AIzaSyBrBQ4zKStV-GVcFC_dcyUirItdtttx15Q",authDomain:"travelbike-1cf5a.firebaseapp.com",databaseURL:"https://travelbike-1cf5a-default-rtdb.firebaseio.com",projectId:"travelbike-1cf5a",storageBucket:"travelbike-1cf5a.appspot.com",messagingSenderId:"187215920627",appId:"1:187215920627:web:a521e95015663a8b376686"};class Hy{static getDatabase(){return yN(this.app)}static getAuth(){return O1(this.app)}}Na(Hy,"app",q_(SN));class Xs{static async isLogged(){let e=!1;return await wT(this.auth,n=>{n&&(e=!0)}),e}static async createUser(e,n){return gT(this.auth,e,n)}static async logIn(e,n){return _T(this.auth,e,n)}static async logOut(){ET(this.auth)}}Na(Xs,"auth",Hy.getAuth());function CN(){let t=R.jsx(Lr,{to:"login",children:"login"});return R.jsxs("header",{className:"absolute top-0 w-full flex justify-end text-white px-10 py-8",children:[R.jsxs("ul",{className:"flex justify-between",children:[R.jsx("li",{className:"mx-3.5",children:R.jsx(Lr,{to:"inicio",children:"Inicio"})}),R.jsx("li",{className:"mx-3.5",children:R.jsx(Lr,{to:"servicos",children:"Serviços"})}),R.jsx("li",{className:"mx-3.5",children:R.jsx(Lr,{to:"sobre",children:"Sobre"})}),R.jsx("li",{className:"mx-3.5",children:R.jsx(Lr,{to:"contato",children:"Contato"})}),R.jsx("li",{className:"mx-3.5",children:t}),R.jsx("li",{className:"mx-3.5",children:R.jsx(Lr,{to:"teste",children:"Teste"})})]}),R.jsx("button",{onClick:()=>{Xs.logOut()},children:"LogOut"})]})}const IN=""+new URL("twitter-logo-f0de14fe.svg",import.meta.url).href,TN=""+new URL("instagram-logo-6b9c0dd3.svg",import.meta.url).href,kN=""+new URL("whatsapp-logo-87601c1a.svg",import.meta.url).href,RN=""+new URL("facebook-logo-ee622ed7.svg",import.meta.url).href;function NN(){return R.jsxs("footer",{className:"text-white shadow-inner",children:[R.jsxs("div",{className:"bg-amber-600 grid grid-cols-4 h-64 p-8",children:[R.jsx("div",{children:R.jsxs("div",{className:"text-center ",children:[R.jsx("h5",{className:"underline underline-thickness underline-offset-8",children:"TRAVEL BIKE"}),R.jsx("p",{children:"VIVA AVENTURA"})]})}),R.jsxs("div",{children:[R.jsx("p",{className:"subtitle",children:"Serviços"}),R.jsxs("ul",{children:[R.jsx("li",{children:"login"}),R.jsx("li",{children:"cadastrar"}),R.jsx("li",{children:"inventario"})]})]}),R.jsxs("div",{children:[R.jsx("p",{className:"subtitle",children:"Sobre"}),R.jsxs("ul",{children:[R.jsx("li",{}),R.jsx("li",{})]})]}),R.jsxs("div",{children:[R.jsx("p",{className:"subtitle",children:"Contato"}),R.jsxs("ul",{children:[R.jsx("li",{}),R.jsx("li",{}),R.jsx("li",{})]})]})]}),R.jsxs("div",{className:"bg-black flex justify-between px-20 py-10 items-center",children:[R.jsx("p",{children:"2023© TravelBike Alguns Direitos Reservados"}),R.jsxs("div",{className:"flex",children:[R.jsx("a",{children:R.jsx("img",{className:"h-12 mx-4",src:IN,alt:"twitter"})}),R.jsx("a",{children:R.jsx("img",{className:"h-12 mx-4",src:TN,alt:"instagram"})}),R.jsx("a",{children:R.jsx("img",{className:"h-12 mx-4",src:kN,alt:"whatsapp"})}),R.jsx("a",{children:R.jsx("img",{className:"h-12 mx-4",src:RN,alt:"facebook"})})]})]})]})}function PN(){return R.jsxs(R.Fragment,{children:[R.jsx(CN,{}),R.jsx("div",{id:"conteudo",children:R.jsx(US,{})}),R.jsx(NN,{})]})}function xN(){return console.log("Entrei no componente servicos"),R.jsx("p",{children:"Pagina de serviços"})}function AN(){return R.jsx("p",{children:"Pagina sobre o TravelBike"})}function DN(){const[t,e]=P.useState(""),[n,r]=P.useState(""),[i,s]=P.useState(!1);async function o(l){l.preventDefault(),i?Xs.createUser(t,n).then(a=>{a&&(alert("usuario cadastrado"),fc(""))}):Xs.logIn(t,n).then(a=>{a&&(alert("usuario logado"),fc(""))}).catch(()=>{alert("erro ao fazer o login")})}return R.jsxs("form",{className:"",onSubmit:o,children:[R.jsx("input",{onChange:l=>{e(l.target.value)},type:"text",name:"formLogin",id:"emailCredential",placeholder:"email"}),R.jsx("input",{onChange:l=>{r(l.target.value)},type:"password",name:"formLogin",id:"email",placeholder:"senha"}),R.jsx("label",{htmlFor:"Cadastrar",children:"É cadastro?"}),R.jsx("input",{onChange:l=>{s(l.target.checked)},type:"checkbox",name:"formLogin",id:"Cadastrar"}),R.jsx("input",{type:"submit",value:"cadastrar"})]})}function ON(){return R.jsx("h1",{children:"OPS!!! Não foi possivel encontrar a página"})}function LN(){return R.jsx(R.Fragment,{children:R.jsx("section",{className:"w-full h-screen imagem",children:R.jsxs("div",{className:"absolute bottom-2/4 right-2/4 translate-x-2/4 translate-y-1/4 text-center text-white",children:[R.jsx("h1",{className:"underline underline-thickness underline-offset-20",children:"TRAVEL BIKE"}),R.jsx("h4",{children:"VIVA AVENTURA"})]})})})}function MN(){const t=VS([{element:R.jsx(PN,{}),children:[{path:"/",element:R.jsx(FS,{to:"inicio"})},{path:"inicio",element:R.jsx(LN,{})},{path:"servicos",element:R.jsx(xN,{}),loader:lm},{path:"sobre",element:R.jsx(AN,{}),loader:lm},{path:"contato",element:R.jsx("p",{children:"Pagina de contatos"})},{path:"login",element:R.jsx(DN,{})}]},{path:"*",element:R.jsx(ON,{})}]);return R.jsx(MS,{router:t})}async function lm(){return await Xs.isLogged()?null:(alert("usuario não logado"),fc("/login"))}function bN(){return R.jsx(MN,{})}yu.createRoot(document.getElementById("root")).render(R.jsx(_m.StrictMode,{children:R.jsx(bN,{})}));
