import{g as Se,r as V,c as v}from"./index-BTN0l4zt.js";function Ee(t,n){for(var a=0;a<n.length;a++){const i=n[a];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in t)){const g=Object.getOwnPropertyDescriptor(i,o);g&&Object.defineProperty(t,o,g.get?g:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var Z={},q={},H={},G={};(function t(n,a,i,o){var g=!!(n.Worker&&n.Blob&&n.Promise&&n.OffscreenCanvas&&n.OffscreenCanvasRenderingContext2D&&n.HTMLCanvasElement&&n.HTMLCanvasElement.prototype.transferControlToOffscreen&&n.URL&&n.URL.createObjectURL),w=typeof Path2D=="function"&&typeof DOMMatrix=="function",P=function(){if(!n.OffscreenCanvas)return!1;var r=new OffscreenCanvas(1,1),e=r.getContext("2d");e.fillRect(0,0,1,1);var l=r.transferToImageBitmap();try{e.createPattern(l,"no-repeat")}catch{return!1}return!0}();function x(){}function T(r){var e=a.exports.Promise,l=e!==void 0?e:n.Promise;return typeof l=="function"?new l(r):(r(x,x),null)}var D=function(r,e){return{transform:function(l){if(r)return l;if(e.has(l))return e.get(l);var c=new OffscreenCanvas(l.width,l.height),s=c.getContext("2d");return s.drawImage(l,0,0),e.set(l,c),c},clear:function(){e.clear()}}}(P,new Map),E=function(){var r=Math.floor(16.666666666666668),e,l,c={},s=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(f){var d=Math.random();return c[d]=requestAnimationFrame(function u(h){s===h||s+r-1<h?(s=h,delete c[d],f()):c[d]=requestAnimationFrame(u)}),d},l=function(f){c[f]&&cancelAnimationFrame(c[f])}):(e=function(f){return setTimeout(f,r)},l=function(f){return clearTimeout(f)}),{frame:e,cancel:l}}(),L=function(){var r,e,l={};function c(s){function f(d,u){s.postMessage({options:d||{},callback:u})}s.init=function(u){var h=u.transferControlToOffscreen();s.postMessage({canvas:h},[h])},s.fire=function(u,h,y){if(e)return f(u,null),e;var b=Math.random().toString(36).slice(2);return e=T(function(m){function _(O){O.data.callback===b&&(delete l[b],s.removeEventListener("message",_),e=null,D.clear(),y(),m())}s.addEventListener("message",_),f(u,b),l[b]=_.bind(null,{data:{callback:b}})}),e},s.reset=function(){s.postMessage({reset:!0});for(var u in l)l[u](),delete l[u]}}return function(){if(r)return r;if(!i&&g){var s=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([s])))}catch(f){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",f),null}c(r)}return r}}(),ae={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function oe(r,e){return e?e(r):r}function ie(r){return r!=null}function M(r,e,l){return oe(r&&ie(r[e])?r[e]:ae[e],l)}function le(r){return r<0?0:Math.floor(r)}function ue(r,e){return Math.floor(Math.random()*(e-r))+r}function $(r){return parseInt(r,16)}function ce(r){return r.map(se)}function se(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:$(e.substring(0,2)),g:$(e.substring(2,4)),b:$(e.substring(4,6))}}function fe(r){var e=M(r,"origin",Object);return e.x=M(e,"x",Number),e.y=M(e,"y",Number),e}function de(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function he(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function ve(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function pe(r,e,l,c,s,f,d,u,h){r.save(),r.translate(e,l),r.rotate(f),r.scale(c,s),r.arc(0,0,1,d,u,h),r.restore()}function ge(r){var e=r.angle*(Math.PI/180),l=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*l-Math.random()*l),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar,flat:r.flat}}function ye(r,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var l=e.tick++/e.totalTicks,c=e.x+e.random*e.tiltCos,s=e.y+e.random*e.tiltSin,f=e.wobbleX+e.random*e.tiltCos,d=e.wobbleY+e.random*e.tiltSin;if(r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-l)+")",r.beginPath(),w&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))r.fill(be(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(f-c)*.1,Math.abs(d-s)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var u=Math.PI/10*e.wobble,h=Math.abs(f-c)*.1,y=Math.abs(d-s)*.1,b=e.shape.bitmap.width*e.scalar,m=e.shape.bitmap.height*e.scalar,_=new DOMMatrix([Math.cos(u)*h,Math.sin(u)*h,-Math.sin(u)*y,Math.cos(u)*y,e.x,e.y]);_.multiplySelf(new DOMMatrix(e.shape.matrix));var O=r.createPattern(D.transform(e.shape.bitmap),"no-repeat");O.setTransform(_),r.globalAlpha=1-l,r.fillStyle=O,r.fillRect(e.x-b/2,e.y-m/2,b,m),r.globalAlpha=1}else if(e.shape==="circle")r.ellipse?r.ellipse(e.x,e.y,Math.abs(f-c)*e.ovalScalar,Math.abs(d-s)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):pe(r,e.x,e.y,Math.abs(f-c)*e.ovalScalar,Math.abs(d-s)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var p=Math.PI/2*3,C=4*e.scalar,I=8*e.scalar,j=e.x,F=e.y,A=5,S=Math.PI/A;A--;)j=e.x+Math.cos(p)*I,F=e.y+Math.sin(p)*I,r.lineTo(j,F),p+=S,j=e.x+Math.cos(p)*C,F=e.y+Math.sin(p)*C,r.lineTo(j,F),p+=S;else r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(s)),r.lineTo(Math.floor(f),Math.floor(d)),r.lineTo(Math.floor(c),Math.floor(e.wobbleY));return r.closePath(),r.fill(),e.tick<e.totalTicks}function me(r,e,l,c,s){var f=e.slice(),d=r.getContext("2d"),u,h,y=T(function(b){function m(){u=h=null,d.clearRect(0,0,c.width,c.height),D.clear(),s(),b()}function _(){i&&!(c.width===o.width&&c.height===o.height)&&(c.width=r.width=o.width,c.height=r.height=o.height),!c.width&&!c.height&&(l(r),c.width=r.width,c.height=r.height),d.clearRect(0,0,c.width,c.height),f=f.filter(function(O){return ye(d,O)}),f.length?u=E.frame(_):m()}u=E.frame(_),h=m});return{addFettis:function(b){return f=f.concat(b),y},canvas:r,promise:y,reset:function(){u&&E.cancel(u),h&&h()}}}function Y(r,e){var l=!r,c=!!M(e||{},"resize"),s=!1,f=M(e,"disableForReducedMotion",Boolean),d=g&&!!M(e||{},"useWorker"),u=d?L():null,h=l?de:he,y=r&&u?!!r.__confetti_initialized:!1,b=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,m;function _(p,C,I){for(var j=M(p,"particleCount",le),F=M(p,"angle",Number),A=M(p,"spread",Number),S=M(p,"startVelocity",Number),we=M(p,"decay",Number),Oe=M(p,"gravity",Number),Pe=M(p,"drift",Number),ee=M(p,"colors",ce),Ce=M(p,"ticks",Number),re=M(p,"shapes"),xe=M(p,"scalar"),Te=!!M(p,"flat"),te=fe(p),ne=j,z=[],Ie=r.width*te.x,je=r.height*te.y;ne--;)z.push(ge({x:Ie,y:je,angle:F,spread:A,startVelocity:S,color:ee[ne%ee.length],shape:re[ue(0,re.length)],ticks:Ce,decay:we,gravity:Oe,drift:Pe,scalar:xe,flat:Te}));return m?m.addFettis(z):(m=me(r,z,h,C,I),m.promise)}function O(p){var C=f||M(p,"disableForReducedMotion",Boolean),I=M(p,"zIndex",Number);if(C&&b)return T(function(S){S()});l&&m?r=m.canvas:l&&!r&&(r=ve(I),document.body.appendChild(r)),c&&!y&&h(r);var j={width:r.width,height:r.height};u&&!y&&u.init(r),y=!0,u&&(r.__confetti_initialized=!0);function F(){if(u){var S={getBoundingClientRect:function(){if(!l)return r.getBoundingClientRect()}};h(S),u.postMessage({resize:{width:S.width,height:S.height}});return}j.width=j.height=null}function A(){m=null,c&&(s=!1,n.removeEventListener("resize",F)),l&&r&&(document.body.contains(r)&&document.body.removeChild(r),r=null,y=!1)}return c&&!s&&(s=!0,n.addEventListener("resize",F,!1)),u?u.fire(p,j,A):_(p,j,A)}return O.reset=function(){u&&u.reset(),m&&m.reset()},O}var U;function X(){return U||(U=Y(null,{useWorker:!0,resize:!0})),U}function be(r,e,l,c,s,f,d){var u=new Path2D(r),h=new Path2D;h.addPath(u,new DOMMatrix(e));var y=new Path2D;return y.addPath(h,new DOMMatrix([Math.cos(d)*s,Math.sin(d)*s,-Math.sin(d)*f,Math.cos(d)*f,l,c])),y}function _e(r){if(!w)throw new Error("path confetti are not supported in this browser");var e,l;typeof r=="string"?e=r:(e=r.path,l=r.matrix);var c=new Path2D(e),s=document.createElement("canvas"),f=s.getContext("2d");if(!l){for(var d=1e3,u=d,h=d,y=0,b=0,m,_,O=0;O<d;O+=2)for(var p=0;p<d;p+=2)f.isPointInPath(c,O,p,"nonzero")&&(u=Math.min(u,O),h=Math.min(h,p),y=Math.max(y,O),b=Math.max(b,p));m=y-u,_=b-h;var C=10,I=Math.min(C/m,C/_);l=[I,0,0,I,-Math.round(m/2+u)*I,-Math.round(_/2+h)*I]}return{type:"path",path:e,matrix:l}}function Me(r){var e,l=1,c="#000000",s='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof r=="string"?e=r:(e=r.text,l="scalar"in r?r.scalar:l,s="fontFamily"in r?r.fontFamily:s,c="color"in r?r.color:c);var f=10*l,d=""+f+"px "+s,u=new OffscreenCanvas(f,f),h=u.getContext("2d");h.font=d;var y=h.measureText(e),b=Math.ceil(y.actualBoundingBoxRight+y.actualBoundingBoxLeft),m=Math.ceil(y.actualBoundingBoxAscent+y.actualBoundingBoxDescent),_=2,O=y.actualBoundingBoxLeft+_,p=y.actualBoundingBoxAscent+_;b+=_+_,m+=_+_,u=new OffscreenCanvas(b,m),h=u.getContext("2d"),h.font=d,h.fillStyle=c,h.fillText(e,O,p);var C=1/l;return{type:"bitmap",bitmap:u.transferToImageBitmap(),matrix:[C,0,0,C,-b*C/2,-m*C/2]}}a.exports=function(){return X().apply(this,arguments)},a.exports.reset=function(){X().reset()},a.exports.create=Y,a.exports.shapeFromPath=_e,a.exports.shapeFromText=Me})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),G,!1);const Fe=G.exports;var Ae=G.exports.create;const De=Object.freeze(Object.defineProperty({__proto__:null,create:Ae,default:Fe},Symbol.toStringTag,{value:"Module"})),Re=Se(De);var N=v&&v.__assign||function(){return N=Object.assign||function(t){for(var n,a=1,i=arguments.length;a<i;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},N.apply(this,arguments)},Be=v&&v.__createBinding||(Object.create?function(t,n,a,i){i===void 0&&(i=a);var o=Object.getOwnPropertyDescriptor(n,a);(!o||("get"in o?!n.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return n[a]}}),Object.defineProperty(t,i,o)}:function(t,n,a,i){i===void 0&&(i=a),t[i]=n[a]}),Ne=v&&v.__setModuleDefault||(Object.create?function(t,n){Object.defineProperty(t,"default",{enumerable:!0,value:n})}:function(t,n){t.default=n}),Le=v&&v.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(t!=null)for(var a in t)a!=="default"&&Object.prototype.hasOwnProperty.call(t,a)&&Be(n,t,a);return Ne(n,t),n},$e=v&&v.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(H,"__esModule",{value:!0});var R=Le(V),Ue=$e(Re),ze={resize:!0,useWorker:!1},We={position:"fixed",pointerEvents:"none",width:"100%",height:"100%",top:0,left:0};function ke(t,n){return!t&&!n?We:t}function Ve(t){var n=t.style,a=t.className,i=t.width,o=t.height,g=t.globalOptions,w=t.onInit,P=(0,R.useRef)(null),x=(0,R.useRef)(null);return(0,R.useEffect)(function(){if(P.current)return x.current=Ue.default.create(P.current,N(N({},ze),g)),w==null||w({confetti:x.current}),function(){var T;(T=x.current)===null||T===void 0||T.reset()}},[]),R.default.createElement("canvas",{ref:P,style:ke(n,a),className:a,width:i,height:o})}H.default=Ve;var W=v&&v.__assign||function(){return W=Object.assign||function(t){for(var n,a=1,i=arguments.length;a<i;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},W.apply(this,arguments)},Ze=v&&v.__createBinding||(Object.create?function(t,n,a,i){i===void 0&&(i=a);var o=Object.getOwnPropertyDescriptor(n,a);(!o||("get"in o?!n.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return n[a]}}),Object.defineProperty(t,i,o)}:function(t,n,a,i){i===void 0&&(i=a),t[i]=n[a]}),qe=v&&v.__setModuleDefault||(Object.create?function(t,n){Object.defineProperty(t,"default",{enumerable:!0,value:n})}:function(t,n){t.default=n}),He=v&&v.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(t!=null)for(var a in t)a!=="default"&&Object.prototype.hasOwnProperty.call(t,a)&&Ze(n,t,a);return qe(n,t),n},Ge=v&&v.__rest||function(t,n){var a={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(a[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(t);o<i.length;o++)n.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(a[i[o]]=t[i[o]]);return a},Je=v&&v.__read||function(t,n){var a=typeof Symbol=="function"&&t[Symbol.iterator];if(!a)return t;var i=a.call(t),o,g=[],w;try{for(;(n===void 0||n-- >0)&&!(o=i.next()).done;)g.push(o.value)}catch(P){w={error:P}}finally{try{o&&!o.done&&(a=i.return)&&a.call(i)}finally{if(w)throw w.error}}return g},Ke=v&&v.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(q,"__esModule",{value:!0});var B=He(V),Qe=Ke(H),Ye=function(t){return t};function Xe(t){var n=t.decorateOptions,a=n===void 0?Ye:n,i=t.Conductor,o=t.autorun,g=t.onInit,w=Ge(t,["decorateOptions","Conductor","autorun","onInit"]),P=Je((0,B.useState)(),2),x=P[0],T=P[1],D=(0,B.useCallback)(function(E){var L=E.confetti;T(function(){return L})},[]);return(0,B.useEffect)(function(){if(x){var E=new i({confetti:x,decorateOptions:a});return o&&E.run(o),g==null||g({confetti:x,conductor:E}),E.stop}},[x]),B.default.createElement(Qe.default,W({onInit:D},w))}q.default=Xe;var J={},K={};Object.defineProperty(K,"__esModule",{value:!0});var er=function(){function t(n){var a=n.confetti,i=n.decorateOptions,o=this;this.interval=null,this.shoot=function(){return o.tickAnimation()},this.run=function(g){var w=g.speed,P=g.delay,x=P===void 0?0:P,T=g.duration;o.interval||setTimeout(function(){o.shoot(),o.interval=setInterval(o.shoot,1e3/Math.min(w,1e3)),T&&setTimeout(o.pause,T)},x)},this.pause=function(){clearInterval(o.interval),o.interval=null},this.stop=function(){o.pause(),o.confetti.reset()},this.confetti=a,this.decorateOptions=i}return t}();K.default=er;var rr=v&&v.__extends||function(){var t=function(n,a){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,o){i.__proto__=o}||function(i,o){for(var g in o)Object.prototype.hasOwnProperty.call(o,g)&&(i[g]=o[g])},t(n,a)};return function(n,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");t(n,a);function i(){this.constructor=n}n.prototype=a===null?Object.create(a):(i.prototype=a.prototype,new i)}}(),tr=v&&v.__read||function(t,n){var a=typeof Symbol=="function"&&t[Symbol.iterator];if(!a)return t;var i=a.call(t),o,g=[],w;try{for(;(n===void 0||n-- >0)&&!(o=i.next()).done;)g.push(o.value)}catch(P){w={error:P}}finally{try{o&&!o.done&&(a=i.return)&&a.call(i)}finally{if(w)throw w.error}}return g},nr=v&&v.__spreadArray||function(t,n,a){if(a||arguments.length===2)for(var i=0,o=n.length,g;i<o;i++)(g||!(i in n))&&(g||(g=Array.prototype.slice.call(n,0,i)),g[i]=n[i]);return t.concat(g||Array.prototype.slice.call(n))},ar=v&&v.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(J,"__esModule",{value:!0});var or=ar(K),ir=function(t){rr(n,t);function n(){var a=t.apply(this,nr([],tr(arguments),!1))||this;return a.tickAnimation=function(){a.confetti(a.decorateOptions({particleCount:3,angle:60,spread:55,origin:{x:0},colors:["#bb0000","#ffffff"]})),a.confetti(a.decorateOptions({particleCount:3,angle:120,spread:55,origin:{x:1},colors:["#bb0000","#ffffff"]}))},a}return n}(or.default);J.default=ir;var k=v&&v.__assign||function(){return k=Object.assign||function(t){for(var n,a=1,i=arguments.length;a<i;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},k.apply(this,arguments)},Q=v&&v.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Z,"__esModule",{value:!0});var lr=Q(V),ur=Q(q),cr=Q(J);function sr(t){return lr.default.createElement(ur.default,k({Conductor:cr.default},t))}var fr=Z.default=sr;const hr=Ee({__proto__:null,default:fr},[Z]);export{hr as i};
