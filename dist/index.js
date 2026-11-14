"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var x=c(function(C,f){
var P=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-assert-is-positive-zero/dist');function d(e,r,i,s){var t,v,n,a,u,o;if(t=r.data,v=r.accessors[0],e===1||i===0)return v(t,s);for(a=s,n=v(t,a),o=1;o<e;o++){if(a+=i,u=v(t,a),P(u))return u;(u>n||u===n&&b(u))&&(n=u)}return n}f.exports=d
});var q=c(function(D,m){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-assert-is-positive-zero/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),k=x();function O(e,r,i,s){var t,v,n,a,u;if(e<=0)return NaN;if(n=j(r),n.accessorProtocol)return k(e,n,i,s);if(e===1||i===0)return r[s];for(v=s,t=r[v],u=1;u<e;u++){if(v+=i,a=r[v],Z(a))return a;(a>t||a===t&&g(a))&&(t=a)}return t}m.exports=O
});var p=c(function(E,y){
var R=require('@stdlib/strided-base-stride2offset/dist'),h=q();function w(e,r,i){return h(e,r,i,R(e,i))}y.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=p(),A=q();z(l,"ndarray",A);module.exports=l;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
