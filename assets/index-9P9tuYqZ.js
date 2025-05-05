(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const _u=!1;var yc=Array.isArray,Pp=Array.prototype.indexOf,Mc=Array.from,Lp=Object.defineProperty,xr=Object.getOwnPropertyDescriptor,If=Object.getOwnPropertyDescriptors,Dp=Object.prototype,Ip=Array.prototype,Sc=Object.getPrototypeOf;function Np(n){return n()}function pl(n){for(var e=0;e<n.length;e++)n[e]()}const Mn=2,Nf=4,Rs=8,Ec=16,In=32,Hr=64,La=128,Cn=256,Da=512,Ct=1024,ri=2048,Yi=4096,Zn=8192,Vr=16384,Up=32768,Tc=65536,Fp=1<<17,Op=1<<19,Uf=1<<20,ki=Symbol("$state"),Bp=Symbol("legacy props"),kp=Symbol("");function Ff(n){return n===this.v}function zp(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function bc(n){return!zp(n,this.v)}function Hp(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Vp(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Gp(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Wp(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Xp(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function qp(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Yp(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function jp(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Kp(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Gr=!1,$p=!1;function Zp(){Gr=!0}const Jp=1,Qp=2,em=16,tm=1,nm=2,im=4,rm=8,sm=16,am=2,kt=Symbol();function om(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let ct=null;function vu(n){ct=n}function io(n,e=!1,t){ct={p:ct,c:null,e:null,m:!1,s:n,x:null,l:null},Gr&&!e&&(ct.l={s:null,u:null,r1:[],r2:nn(!1)})}function ro(n){const e=ct;if(e!==null){const a=e.e;if(a!==null){var t=tt,i=rt;e.e=null;try{for(var r=0;r<a.length;r++){var s=a[r];Pn(s.effect),Si(s.reaction),Pc(s.fn)}}finally{Pn(t),Si(i)}}ct=e.p,e.m=!0}return{}}function so(){return!Gr||ct!==null&&ct.l===null}function nn(n,e){var t={f:0,v:n,reactions:null,equals:Ff,rv:0,wv:0};return t}function Ac(n,e=!1){var i;const t=nn(n);return e||(t.equals=bc),Gr&&ct!==null&&ct.l!==null&&((i=ct.l).s??(i.s=[])).push(t),t}function rn(n,e=!1){return lm(Ac(n,e))}function lm(n){return rt!==null&&!Jn&&rt.f&Mn&&(An===null?ym([n]):An.push(n)),n}function sn(n,e){return at(n,Vi(()=>ie(n))),e}function at(n,e){return rt!==null&&!Jn&&so()&&rt.f&(Mn|Ec)&&(An===null||!An.includes(n))&&Kp(),Of(n,e)}function Of(n,e){return n.equals(e)||(n.v,n.v=e,n.wv=ed(),Bf(n,ri),so()&&tt!==null&&tt.f&Ct&&!(tt.f&(In|Hr))&&(jn===null?Mm([n]):jn.push(n))),e}function Bf(n,e){var t=n.reactions;if(t!==null)for(var i=so(),r=t.length,s=0;s<r;s++){var a=t[s],o=a.f;o&ri||!i&&a===tt||(on(a,e),o&(Ct|Cn)&&(o&Mn?Bf(a,Yi):co(a)))}}let kf=!1;function mr(n,e=null,t){if(typeof n!="object"||n===null||ki in n)return n;const i=Sc(n);if(i!==Dp&&i!==Ip)return n;var r=new Map,s=yc(n),a=nn(0);s&&r.set("length",nn(n.length));var o;return new Proxy(n,{defineProperty(l,c,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&qp();var h=r.get(c);return h===void 0?(h=nn(u.value),r.set(c,h)):at(h,mr(u.value,o)),!0},deleteProperty(l,c){var u=r.get(c);if(u===void 0)c in l&&r.set(c,nn(kt));else{if(s&&typeof c=="string"){var h=r.get("length"),f=Number(c);Number.isInteger(f)&&f<h.v&&at(h,f)}at(u,kt),xu(a)}return!0},get(l,c,u){var m;if(c===ki)return n;var h=r.get(c),f=c in l;if(h===void 0&&(!f||(m=xr(l,c))!=null&&m.writable)&&(h=nn(mr(f?l[c]:kt,o)),r.set(c,h)),h!==void 0){var d=ie(h);return d===kt?void 0:d}return Reflect.get(l,c,u)},getOwnPropertyDescriptor(l,c){var u=Reflect.getOwnPropertyDescriptor(l,c);if(u&&"value"in u){var h=r.get(c);h&&(u.value=ie(h))}else if(u===void 0){var f=r.get(c),d=f==null?void 0:f.v;if(f!==void 0&&d!==kt)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return u},has(l,c){var d;if(c===ki)return!0;var u=r.get(c),h=u!==void 0&&u.v!==kt||Reflect.has(l,c);if(u!==void 0||tt!==null&&(!h||(d=xr(l,c))!=null&&d.writable)){u===void 0&&(u=nn(h?mr(l[c],o):kt),r.set(c,u));var f=ie(u);if(f===kt)return!1}return h},set(l,c,u,h){var E;var f=r.get(c),d=c in l;if(s&&c==="length")for(var m=u;m<f.v;m+=1){var _=r.get(m+"");_!==void 0?at(_,kt):m in l&&(_=nn(kt),r.set(m+"",_))}f===void 0?(!d||(E=xr(l,c))!=null&&E.writable)&&(f=nn(void 0),at(f,mr(u,o)),r.set(c,f)):(d=f.v!==kt,at(f,mr(u,o)));var g=Reflect.getOwnPropertyDescriptor(l,c);if(g!=null&&g.set&&g.set.call(h,u),!d){if(s&&typeof c=="string"){var p=r.get("length"),T=Number(c);Number.isInteger(T)&&T>=p.v&&at(p,T+1)}xu(a)}return!0},ownKeys(l){ie(a);var c=Reflect.ownKeys(l).filter(f=>{var d=r.get(f);return d===void 0||d.v!==kt});for(var[u,h]of r)h.v!==kt&&!(u in l)&&c.push(u);return c},setPrototypeOf(){Yp()}})}function xu(n,e=1){at(n,n.v+e)}var yu,zf,Hf;function cm(){if(yu===void 0){yu=window;var n=Element.prototype,e=Node.prototype;zf=xr(e,"firstChild").get,Hf=xr(e,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function Vf(n=""){return document.createTextNode(n)}function Gf(n){return zf.call(n)}function wc(n){return Hf.call(n)}function Rt(n,e){return Gf(n)}function bn(n,e=1,t=!1){let i=n;for(;e--;)i=wc(i);return i}function um(n){n.textContent=""}function _s(n){var e=Mn|ri,t=rt!==null&&rt.f&Mn?rt:null;return tt===null||t!==null&&t.f&Cn?e|=Cn:tt.f|=Uf,{ctx:ct,deps:null,effects:null,equals:Ff,f:e,fn:n,reactions:null,rv:0,v:null,wv:0,parent:t??tt}}function Rc(n){const e=_s(n);return e.equals=bc,e}function Cc(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)Mi(e[t])}}function hm(n){for(var e=n.parent;e!==null;){if(!(e.f&Mn))return e;e=e.parent}return null}function Wf(n){var e,t=tt;Pn(hm(n));try{Cc(n),e=nd(n)}finally{Pn(t)}return e}function Xf(n){var e=Wf(n),t=(Fi||n.f&Cn)&&n.deps!==null?Yi:Ct;on(n,t),n.equals(e)||(n.v=e,n.wv=ed())}function fm(n){Cc(n),xs(n,0),on(n,Vr),n.v=n.deps=n.ctx=n.reactions=null}function qf(n){tt===null&&rt===null&&Gp(),rt!==null&&rt.f&Cn&&tt===null&&Vp(),Ic&&Hp()}function dm(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function Wr(n,e,t,i=!0){var r=(n&Hr)!==0,s=tt,a={ctx:ct,deps:null,nodes_start:null,nodes_end:null,f:n|ri,first:null,fn:e,last:null,next:null,parent:r?null:s,prev:null,teardown:null,transitions:null,wv:0};if(t){var o=yr;try{Su(!0),lo(a),a.f|=Up}catch(u){throw Mi(a),u}finally{Su(o)}}else e!==null&&co(a);var l=t&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Uf|La))===0;if(!l&&!r&&i&&(s!==null&&dm(a,s),rt!==null&&rt.f&Mn)){var c=rt;(c.effects??(c.effects=[])).push(a)}return a}function pm(n){const e=Wr(Rs,null,!1);return on(e,Ct),e.teardown=n,e}function ml(n){qf();var e=tt!==null&&(tt.f&In)!==0&&ct!==null&&!ct.m;if(e){var t=ct;(t.e??(t.e=[])).push({fn:n,effect:tt,reaction:rt})}else{var i=Pc(n);return i}}function mm(n){return qf(),ao(n)}function gm(n){const e=Wr(Hr,n,!0);return(t={})=>new Promise(i=>{t.outro?Ia(e,()=>{Mi(e),i(void 0)}):(Mi(e),i(void 0))})}function Pc(n){return Wr(Nf,n,!1)}function Mu(n,e){var t=ct,i={effect:null,ran:!1};t.l.r1.push(i),i.effect=ao(()=>{n(),!i.ran&&(i.ran=!0,at(t.l.r2,!0),Vi(e))})}function _m(){var n=ct;ao(()=>{if(ie(n.l.r2)){for(var e of n.l.r1){var t=e.effect;t.f&Ct&&on(t,Yi),Xr(t)&&lo(t),e.ran=!1}n.l.r2.v=!1}})}function ao(n){return Wr(Rs,n,!0)}function _a(n,e=[],t=_s){const i=e.map(t);return Lc(()=>n(...i.map(ie)))}function Lc(n,e=0){return Wr(Rs|Ec|e,n,!0)}function vs(n,e=!0){return Wr(Rs|In,n,!0,e)}function Yf(n){var e=n.teardown;if(e!==null){const t=Ic,i=rt;Eu(!0),Si(null);try{e.call(null)}finally{Eu(t),Si(i)}}}function jf(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){var i=t.next;Mi(t,e),t=i}}function vm(n){for(var e=n.first;e!==null;){var t=e.next;e.f&In||Mi(e),e=t}}function Mi(n,e=!0){var t=!1;if((e||n.f&Op)&&n.nodes_start!==null){for(var i=n.nodes_start,r=n.nodes_end;i!==null;){var s=i===r?null:wc(i);i.remove(),i=s}t=!0}jf(n,e&&!t),xs(n,0),on(n,Vr);var a=n.transitions;if(a!==null)for(const l of a)l.stop();Yf(n);var o=n.parent;o!==null&&o.first!==null&&Kf(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Kf(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function Ia(n,e){var t=[];Dc(n,t,!0),$f(t,()=>{Mi(n),e&&e()})}function $f(n,e){var t=n.length;if(t>0){var i=()=>--t||e();for(var r of n)r.out(i)}else e()}function Dc(n,e,t){if(!(n.f&Zn)){if(n.f^=Zn,n.transitions!==null)for(const a of n.transitions)(a.is_global||t)&&e.push(a);for(var i=n.first;i!==null;){var r=i.next,s=(i.f&Tc)!==0||(i.f&In)!==0;Dc(i,e,s?t:!1),i=r}}}function Na(n){Zf(n,!0)}function Zf(n,e){if(n.f&Zn){n.f^=Zn,n.f&Ct||(n.f^=Ct),Xr(n)&&(on(n,ri),co(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&Tc)!==0||(t.f&In)!==0;Zf(t,r?e:!1),t=i}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||e)&&s.in()}}let gl=!1,_l=[];function xm(){gl=!1;const n=_l.slice();_l=[],pl(n)}function Jf(n){gl||(gl=!0,queueMicrotask(xm)),_l.push(n)}let va=!1,Ua=!1,Fa=null,yr=!1,Ic=!1;function Su(n){yr=n}function Eu(n){Ic=n}let vl=[],ds=0;let rt=null,Jn=!1;function Si(n){rt=n}let tt=null;function Pn(n){tt=n}let An=null;function ym(n){An=n}let Ht=null,Yt=0,jn=null;function Mm(n){jn=n}let Qf=1,Oa=0,Fi=!1;function ed(){return++Qf}function Xr(n){var c;var e=n.f;if(e&ri)return!0;if(e&Yi){var t=n.deps,i=(e&Cn)!==0;if(t!==null){var r,s,a=(e&Da)!==0,o=i&&tt!==null&&!Fi,l=t.length;if(a||o){for(r=0;r<l;r++)s=t[r],(a||!((c=s==null?void 0:s.reactions)!=null&&c.includes(n)))&&(s.reactions??(s.reactions=[])).push(n);a&&(n.f^=Da)}for(r=0;r<l;r++)if(s=t[r],Xr(s)&&Xf(s),s.wv>n.wv)return!0}(!i||tt!==null&&!Fi)&&on(n,Ct)}return!1}function Sm(n,e){for(var t=e;t!==null;){if(t.f&La)try{t.fn(n);return}catch{t.f^=La}t=t.parent}throw va=!1,n}function Em(n){return(n.f&Vr)===0&&(n.parent===null||(n.parent.f&La)===0)}function oo(n,e,t,i){if(va){if(t===null&&(va=!1),Em(e))throw n;return}t!==null&&(va=!0);{Sm(n,e);return}}function td(n,e,t=0){var i=n.reactions;if(i!==null)for(var r=0;r<i.length;r++){var s=i[r];s.f&Mn?td(s,e,t+1):e===s&&(t===0?on(s,ri):s.f&Ct&&on(s,Yi),co(s))}}function nd(n){var d;var e=Ht,t=Yt,i=jn,r=rt,s=Fi,a=An,o=ct,l=Jn,c=n.f;Ht=null,Yt=0,jn=null,rt=c&(In|Hr)?null:n,Fi=(c&Cn)!==0&&(!yr||(r===null||l)&&n.parent!==null),An=null,vu(n.ctx),Jn=!1,Oa++;try{var u=(0,n.fn)(),h=n.deps;if(Ht!==null){var f;if(xs(n,Yt),h!==null&&Yt>0)for(h.length=Yt+Ht.length,f=0;f<Ht.length;f++)h[Yt+f]=Ht[f];else n.deps=h=Ht;if(!Fi)for(f=Yt;f<h.length;f++)((d=h[f]).reactions??(d.reactions=[])).push(n)}else h!==null&&Yt<h.length&&(xs(n,Yt),h.length=Yt);if(so()&&jn!==null&&!(n.f&(Mn|Yi|ri)))for(f=0;f<jn.length;f++)td(jn[f],n);return r!==null&&Oa++,u}finally{Ht=e,Yt=t,jn=i,rt=r,Fi=s,An=a,vu(o),Jn=l}}function Tm(n,e){let t=e.reactions;if(t!==null){var i=Pp.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}t===null&&e.f&Mn&&(Ht===null||!Ht.includes(e))&&(on(e,Yi),e.f&(Cn|Da)||(e.f^=Da),Cc(e),xs(e,0))}function xs(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)Tm(n,t[i])}function lo(n){var e=n.f;if(!(e&Vr)){on(n,Ct);var t=tt,i=ct;tt=n;try{e&Ec?vm(n):jf(n),Yf(n);var r=nd(n);n.teardown=typeof r=="function"?r:null,n.wv=Qf;var s=n.deps,a;_u&&$p&&n.f&ri}catch(o){oo(o,n,t,i||n.ctx)}finally{tt=t}}}function bm(){if(ds>1e3){ds=0;try{Wp()}catch(n){if(Fa!==null)oo(n,Fa,null);else throw n}}ds++}function Am(n){var e=n.length;if(e!==0){bm();var t=yr;yr=!0;try{for(var i=0;i<e;i++){var r=n[i];r.f&Ct||(r.f^=Ct);var s=[];id(r,s),wm(s)}}finally{yr=t}}}function wm(n){var e=n.length;if(e!==0)for(var t=0;t<e;t++){var i=n[t];if(!(i.f&(Vr|Zn)))try{Xr(i)&&(lo(i),i.deps===null&&i.first===null&&i.nodes_start===null&&(i.teardown===null?Kf(i):i.fn=null))}catch(r){oo(r,i,null,i.ctx)}}}function Rm(){if(Ua=!1,ds>1001)return;const n=vl;vl=[],Am(n),Ua||(ds=0,Fa=null)}function co(n){Ua||(Ua=!0,queueMicrotask(Rm)),Fa=n;for(var e=n;e.parent!==null;){e=e.parent;var t=e.f;if(t&(Hr|In)){if(!(t&Ct))return;e.f^=Ct}}vl.push(e)}function id(n,e){var t=n.first,i=[];e:for(;t!==null;){var r=t.f,s=(r&In)!==0,a=s&&(r&Ct)!==0,o=t.next;if(!a&&!(r&Zn))if(r&Rs){if(s)t.f^=Ct;else{var l=rt;try{rt=t,Xr(t)&&lo(t)}catch(f){oo(f,t,null,t.ctx)}finally{rt=l}}var c=t.first;if(c!==null){t=c;continue}}else r&Nf&&i.push(t);if(o===null){let f=t.parent;for(;f!==null;){if(n===f)break e;var u=f.next;if(u!==null){t=u;continue e}f=f.parent}}t=o}for(var h=0;h<i.length;h++)c=i[h],e.push(c),id(c,e)}function ie(n){var e=n.f,t=(e&Mn)!==0;if(t&&e&Vr){var i=Wf(n);return fm(n),i}if(rt!==null&&!Jn){An!==null&&An.includes(n)&&jp();var r=rt.deps;n.rv<Oa&&(n.rv=Oa,Ht===null&&r!==null&&r[Yt]===n?Yt++:Ht===null?Ht=[n]:Ht.push(n))}else if(t&&n.deps===null&&n.effects===null){var s=n,a=s.parent;a!==null&&!(a.f&Cn)&&(s.f^=Cn)}return t&&(s=n,Xr(s)&&Xf(s)),n.v}function Vi(n){var e=Jn;try{return Jn=!0,n()}finally{Jn=e}}const Cm=-7169;function on(n,e){n.f=n.f&Cm|e}function xa(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(ki in n)xl(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&ki in t&&xl(t)}}}function xl(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let i in n)try{xl(n[i],e)}catch{}const t=Sc(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const i=If(t);for(let r in i){const s=i[r].get;if(s)try{s.call(n)}catch{}}}}}const Pm=["touchstart","touchmove"];function Lm(n){return Pm.includes(n)}function Dm(n){var e=rt,t=tt;Si(null),Pn(null);try{return n()}finally{Si(e),Pn(t)}}const Im=new Set,Tu=new Set;function Nm(n,e,t,i={}){function r(s){if(i.capture||os.call(e,s),!s.cancelBubble)return Dm(()=>t==null?void 0:t.call(this,s))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?Jf(()=>{e.addEventListener(n,r,i)}):e.addEventListener(n,r,i),r}function Mo(n,e,t,i,r){var s={capture:i,passive:r},a=Nm(n,e,t,s);(e===document.body||e===window||e===document)&&pm(()=>{e.removeEventListener(n,a,s)})}function os(n){var T;var e=this,t=e.ownerDocument,i=n.type,r=((T=n.composedPath)==null?void 0:T.call(n))||[],s=r[0]||n.target,a=0,o=n.__root;if(o){var l=r.indexOf(o);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(a=l)}if(s=r[a]||n.target,s!==e){Lp(n,"currentTarget",{configurable:!0,get(){return s||t}});var u=rt,h=tt;Si(null),Pn(null);try{for(var f,d=[];s!==null;){var m=s.assignedSlot||s.parentNode||s.host||null;try{var _=s["__"+i];if(_!==void 0&&!s.disabled)if(yc(_)){var[g,...p]=_;g.apply(s,[n,...p])}else _.call(s,n)}catch(E){f?d.push(E):f=E}if(n.cancelBubble||m===e||m===null)break;s=m}if(f){for(let E of d)queueMicrotask(()=>{throw E});throw f}}finally{n.__root=e,delete n.currentTarget,Si(u),Pn(h)}}}function Um(n){var e=document.createElement("template");return e.innerHTML=n,e.content}function Fm(n,e){var t=tt;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function ji(n,e){var t=(e&am)!==0,i,r=!n.startsWith("<!>");return()=>{i===void 0&&(i=Um(r?n:"<!>"+n),i=Gf(i));var s=t?document.importNode(i,!0):i.cloneNode(!0);return Fm(s,s),s}}function zi(n,e){n!==null&&n.before(e)}function So(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=t,n.nodeValue=t==null?"":t+"")}function Om(n,e){return Bm(n,e)}const Ji=new Map;function Bm(n,{target:e,anchor:t,props:i={},events:r,context:s,intro:a=!0}){cm();var o=new Set,l=h=>{for(var f=0;f<h.length;f++){var d=h[f];if(!o.has(d)){o.add(d);var m=Lm(d);e.addEventListener(d,os,{passive:m});var _=Ji.get(d);_===void 0?(document.addEventListener(d,os,{passive:m}),Ji.set(d,1)):Ji.set(d,_+1)}}};l(Mc(Im)),Tu.add(l);var c=void 0,u=gm(()=>{var h=t??e.appendChild(Vf());return vs(()=>{if(s){io({});var f=ct;f.c=s}r&&(i.$$events=r),c=n(h,i)||{},s&&ro()}),()=>{var m;for(var f of o){e.removeEventListener(f,os);var d=Ji.get(f);--d===0?(document.removeEventListener(f,os),Ji.delete(f)):Ji.set(f,d)}Tu.delete(l),h!==t&&((m=h.parentNode)==null||m.removeChild(h))}});return km.set(c,u),c}let km=new WeakMap;function zm(n,e,t=!1){var i=n,r=null,s=null,a=kt,o=t?Tc:0,l=!1;const c=(h,f=!0)=>{l=!0,u(f,h)},u=(h,f)=>{a!==(a=h)&&(a?(r?Na(r):f&&(r=vs(()=>f(i))),s&&Ia(s,()=>{s=null})):(s?Na(s):f&&(s=vs(()=>f(i))),r&&Ia(r,()=>{r=null})))};Lc(()=>{l=!1,e(c),l||u(null,null)},o)}function bu(n,e){return e}function Hm(n,e,t,i){for(var r=[],s=e.length,a=0;a<s;a++)Dc(e[a].e,r,!0);var o=s>0&&r.length===0&&t!==null;if(o){var l=t.parentNode;um(l),l.append(t),i.clear(),fi(n,e[0].prev,e[s-1].next)}$f(r,()=>{for(var c=0;c<s;c++){var u=e[c];o||(i.delete(u.k),fi(n,u.prev,u.next)),Mi(u.e,!o)}})}function Au(n,e,t,i,r,s=null){var a=n,o={items:new Map,first:null};{var l=n;a=l.appendChild(Vf())}var c=null,u=!1,h=Rc(()=>{var f=t();return yc(f)?f:f==null?[]:Mc(f)});Lc(()=>{var f=ie(h),d=f.length;u&&d===0||(u=d===0,Vm(f,o,a,r,e,i,t),s!==null&&(d===0?c?Na(c):c=vs(()=>s(a)):c!==null&&Ia(c,()=>{c=null})),ie(h))})}function Vm(n,e,t,i,r,s,a){var o=n.length,l=e.items,c=e.first,u=c,h,f=null,d=[],m=[],_,g,p,T;for(T=0;T<o;T+=1){if(_=n[T],g=s(_,T),p=l.get(g),p===void 0){var E=u?u.e.nodes_start:t;f=Wm(E,e,f,f===null?e.first:f.next,_,g,T,i,r,a),l.set(g,f),d=[],m=[],u=f.next;continue}if(Gm(p,_,T),p.e.f&Zn&&Na(p.e),p!==u){if(h!==void 0&&h.has(p)){if(d.length<m.length){var S=m[0],C;f=S.prev;var P=d[0],w=d[d.length-1];for(C=0;C<d.length;C+=1)wu(d[C],S,t);for(C=0;C<m.length;C+=1)h.delete(m[C]);fi(e,P.prev,w.next),fi(e,f,P),fi(e,w,S),u=S,f=w,T-=1,d=[],m=[]}else h.delete(p),wu(p,u,t),fi(e,p.prev,p.next),fi(e,p,f===null?e.first:f.next),fi(e,f,p),f=p;continue}for(d=[],m=[];u!==null&&u.k!==g;)u.e.f&Zn||(h??(h=new Set)).add(u),m.push(u),u=u.next;if(u===null)continue;p=u}d.push(p),f=p,u=p.next}if(u!==null||h!==void 0){for(var R=h===void 0?[]:Mc(h);u!==null;)u.e.f&Zn||R.push(u),u=u.next;var M=R.length;if(M>0){var v=o===0?t:null;Hm(e,R,v,l)}}tt.first=e.first&&e.first.e,tt.last=f&&f.e}function Gm(n,e,t,i){Of(n.v,e),n.i=t}function Wm(n,e,t,i,r,s,a,o,l,c){var u=(l&Jp)!==0,h=(l&em)===0,f=u?h?Ac(r):nn(r):r,d=l&Qp?nn(a):a,m={i:d,v:f,k:s,a:null,e:null,prev:t,next:i};try{return m.e=vs(()=>o(n,f,d,c),kf),m.e.prev=t&&t.e,m.e.next=i&&i.e,t===null?e.first=m:(t.next=m,t.e.next=m.e),i!==null&&(i.prev=m,i.e.prev=m.e),m}finally{}}function wu(n,e,t){for(var i=n.next?n.next.e.nodes_start:t,r=e?e.e.nodes_start:t,s=n.e.nodes_start;s!==i;){var a=wc(s);r.before(s),s=a}}function fi(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function Os(n,e,t,i){var r=n.__attributes??(n.__attributes={});r[e]!==(r[e]=t)&&(e==="style"&&"__styles"in n&&(n.__styles={}),e==="loading"&&(n[kp]=t),t==null?n.removeAttribute(e):typeof t!="string"&&Xm(n).includes(e)?n[e]=t:n.setAttribute(e,t))}var Ru=new Map;function Xm(n){var e=Ru.get(n.nodeName);if(e)return e;Ru.set(n.nodeName,e=[]);for(var t,i=n,r=Element.prototype;r!==i;){t=If(i);for(var s in t)t[s].set&&e.push(s);i=Sc(i)}return e}function Eo(n,e,t){var i=n.__className,r=qm(e);(i!==r||kf)&&(e==null?n.removeAttribute("class"):n.className=r,n.__className=r)}function qm(n,e){return(n??"")+""}function Cu(n,e){return n===e||(n==null?void 0:n[ki])===e}function Ba(n={},e,t,i){return Pc(()=>{var r,s;return ao(()=>{r=s,s=[],Vi(()=>{n!==t(...s)&&(e(n,...s),r&&Cu(t(...r),n)&&e(null,...r))})}),()=>{Jf(()=>{s&&Cu(t(...s),n)&&e(null,...s)})}}),n}function Nc(n=!1){const e=ct,t=e.l.u;if(!t)return;let i=()=>xa(e.s);if(n){let r=0,s={};const a=_s(()=>{let o=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],o=!0);return o&&r++,r});i=()=>ie(a)}t.b.length&&mm(()=>{Pu(e,i),pl(t.b)}),ml(()=>{const r=Vi(()=>t.m.map(Np));return()=>{for(const s of r)typeof s=="function"&&s()}}),t.a.length&&ml(()=>{Pu(e,i),pl(t.a)})}function Pu(n,e){if(n.l.s)for(const t of n.l.s)ie(t);e()}let Bs=!1;function Ym(n){var e=Bs;try{return Bs=!1,[n(),Bs]}finally{Bs=e}}function Lu(n){for(var e=tt,t=tt;e!==null&&!(e.f&(In|Hr));)e=e.parent;try{return Pn(e),n()}finally{Pn(t)}}function Nt(n,e,t,i){var w;var r=(t&tm)!==0,s=!Gr||(t&nm)!==0,a=(t&rm)!==0,o=(t&sm)!==0,l=!1,c;a?[c,l]=Ym(()=>n[e]):c=n[e];var u=ki in n||Bp in n,h=a&&(((w=xr(n,e))==null?void 0:w.set)??(u&&e in n&&(R=>n[e]=R)))||void 0,f=i,d=!0,m=!1,_=()=>(m=!0,d&&(d=!1,o?f=Vi(i):f=i),f);c===void 0&&i!==void 0&&(h&&s&&Xp(),c=_(),h&&h(c));var g;if(s)g=()=>{var R=n[e];return R===void 0?_():(d=!0,m=!1,R)};else{var p=Lu(()=>(r?_s:Rc)(()=>n[e]));p.f|=Fp,g=()=>{var R=ie(p);return R!==void 0&&(f=void 0),R===void 0?f:R}}if(!(t&im))return g;if(h){var T=n.$$legacy;return function(R,M){return arguments.length>0?((!s||!M||T||l)&&h(M?g():R),R):g()}}var E=!1,S=!1,C=Ac(c),P=Lu(()=>_s(()=>{var R=g(),M=ie(C);return E?(E=!1,S=!0,M):(S=!1,C.v=R)}));return r||(P.equals=bc),function(R,M){if(arguments.length>0){const v=M?ie(P):s&&a?mr(R):R;return P.equals(v)||(E=!0,at(C,v),m&&f!==void 0&&(f=v),Vi(()=>ie(P))),R}return ie(P)}}function Uc(n){ct===null&&om(),Gr&&ct.l!==null?jm(ct).m.push(n):ml(()=>{const e=Vi(n);if(typeof e=="function")return e})}function jm(n){var e=n.l;return e.u??(e.u={a:[],b:[],m:[]})}const Km="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Km);Zp();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fc="173",Mr={ROTATE:0,DOLLY:1,PAN:2},_r={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$m=1,rd=1,Zm=2,qn=3,ti=0,Gt=1,mn=2,xi=0,Sr=1,Du=2,Iu=3,Nu=4,Jm=5,Ni=100,Qm=101,eg=102,tg=103,ng=104,ig=200,rg=201,sg=202,ag=203,yl=204,Ml=205,og=206,lg=207,cg=208,ug=209,hg=210,fg=211,dg=212,pg=213,mg=214,Sl=0,El=1,Tl=2,wr=3,bl=4,Al=5,wl=6,Rl=7,sd=0,gg=1,_g=2,yi=0,vg=1,xg=2,yg=3,Mg=4,Sg=5,Eg=6,Tg=7,Uu="attached",bg="detached",ad=300,Rr=301,Cr=302,Cl=303,Pl=304,uo=306,Pr=1e3,mi=1001,ka=1002,Ft=1003,od=1004,ls=1005,jt=1006,ya=1007,Kn=1008,ni=1009,ld=1010,cd=1011,ys=1012,Oc=1013,Gi=1014,xn=1015,Cs=1016,Bc=1017,kc=1018,Lr=1020,ud=35902,hd=1021,fd=1022,an=1023,dd=1024,pd=1025,Er=1026,Dr=1027,zc=1028,Hc=1029,md=1030,Vc=1031,Gc=1033,Ma=33776,Sa=33777,Ea=33778,Ta=33779,Ll=35840,Dl=35841,Il=35842,Nl=35843,Ul=36196,Fl=37492,Ol=37496,Bl=37808,kl=37809,zl=37810,Hl=37811,Vl=37812,Gl=37813,Wl=37814,Xl=37815,ql=37816,Yl=37817,jl=37818,Kl=37819,$l=37820,Zl=37821,ba=36492,Jl=36494,Ql=36495,gd=36283,ec=36284,tc=36285,nc=36286,Ms=2300,Ss=2301,To=2302,Fu=2400,Ou=2401,Bu=2402,Ag=2500,wg=0,_d=1,ic=2,Rg=3200,Cg=3201,vd=0,Pg=1,pi="",_t="srgb",Pt="srgb-linear",za="linear",nt="srgb",Qi=7680,ku=519,Lg=512,Dg=513,Ig=514,xd=515,Ng=516,Ug=517,Fg=518,Og=519,rc=35044,zu="300 es",$n=2e3,Ha=2001;class Ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hu=1234567;const ps=Math.PI/180,Ir=180/Math.PI;function yn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function Be(n,e,t){return Math.max(e,Math.min(t,n))}function Wc(n,e){return(n%e+e)%e}function Bg(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function kg(n,e,t){return n!==e?(t-n)/(e-n):0}function ms(n,e,t){return(1-t)*n+t*e}function zg(n,e,t,i){return ms(n,e,1-Math.exp(-t*i))}function Hg(n,e=1){return e-Math.abs(Wc(n,e*2)-e)}function Vg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Gg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Wg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Xg(n,e){return n+Math.random()*(e-n)}function qg(n){return n*(.5-Math.random())}function Yg(n){n!==void 0&&(Hu=n);let e=Hu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jg(n){return n*ps}function Kg(n){return n*Ir}function $g(n){return(n&n-1)===0&&n!==0}function Zg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Jg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Qg(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),f=a((e-i)/2),d=s((i-e)/2),m=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*h,l*f,o*c);break;case"YZY":n.set(l*f,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*f,o*u,o*c);break;case"XZX":n.set(o*u,l*m,l*d,o*c);break;case"YXY":n.set(l*d,o*u,l*m,o*c);break;case"ZYZ":n.set(l*m,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qe(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const yd={DEG2RAD:ps,RAD2DEG:Ir,generateUUID:yn,clamp:Be,euclideanModulo:Wc,mapLinear:Bg,inverseLerp:kg,lerp:ms,damp:zg,pingpong:Hg,smoothstep:Vg,smootherstep:Gg,randInt:Wg,randFloat:Xg,randFloatSpread:qg,seededRandom:Yg,degToRad:jg,radToDeg:Kg,isPowerOfTwo:$g,ceilPowerOfTwo:Zg,floorPowerOfTwo:Jg,setQuaternionFromProperEuler:Qg,normalize:Qe,denormalize:gn};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Be(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,i,r,s,a,o,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],m=i[8],_=r[0],g=r[3],p=r[6],T=r[1],E=r[4],S=r[7],C=r[2],P=r[5],w=r[8];return s[0]=a*_+o*T+l*C,s[3]=a*g+o*E+l*P,s[6]=a*p+o*S+l*w,s[1]=c*_+u*T+h*C,s[4]=c*g+u*E+h*P,s[7]=c*p+u*S+h*w,s[2]=f*_+d*T+m*C,s[5]=f*g+d*E+m*P,s[8]=f*p+d*S+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,m=t*h+i*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(bo.makeScale(e,t)),this}rotate(e){return this.premultiply(bo.makeRotation(-e)),this}translate(e,t){return this.premultiply(bo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bo=new Ue;function Md(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Es(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function e_(){const n=Es("canvas");return n.style.display="block",n}const Vu={};function gr(n){n in Vu||(Vu[n]=!0,console.warn(n))}function t_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function n_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function i_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Gu=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wu=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function r_(){const n={enabled:!0,workingColorSpace:Pt,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=Qn(r.r),r.g=Qn(r.g),r.b=Qn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=Tr(r.r),r.g=Tr(r.g),r.b=Tr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pi?za:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Pt]:{primaries:e,whitePoint:i,transfer:za,toXYZ:Gu,fromXYZ:Wu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:Gu,fromXYZ:Wu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),n}const He=r_();function Qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let er;class s_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=Es("canvas")),er.width=e.width,er.height=e.height;const i=er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=er}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Es("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Qn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qn(t[i]/255)*255):t[i]=Qn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let a_=0;class Sd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ao(r[a].image)):s.push(Ao(r[a]))}else s=Ao(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?s_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let o_=0;class St extends Ki{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,i=mi,r=mi,s=jt,a=Kn,o=an,l=ni,c=St.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=yn(),this.name="",this.source=new Sd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pr:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pr:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=ad;St.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,i=0,r=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(d+1)/2,C=(p+1)/2,P=(u+f)/4,w=(h+_)/4,R=(m+g)/4;return E>S&&E>C?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=P/i,s=w/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=P/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=w/s,r=R/s),this.set(i,r,s,t),this}let T=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(g-m)/T,this.y=(h-_)/T,this.z=(f-u)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class l_ extends Ki{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new St(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Sd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends l_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ed extends St{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class c_ extends St{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ln{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[a+0],d=s[a+1],m=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==m){let g=1-o;const p=l*f+c*d+u*m+h*_,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const C=Math.sqrt(E),P=Math.atan2(C,p*T);g=Math.sin(g*P)/C,o=Math.sin(o*P)/C}const S=o*T;if(l=l*g+f*S,c=c*g+d*S,u=u*g+m*S,h=h*g+_*S,g===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],f=s[a+1],d=s[a+2],m=s[a+3];return e[t]=o*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-o*d,e[t+2]=c*m+u*d+o*f-l*h,e[t+3]=u*m-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),f=l(i/2),d=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wo.copy(this).projectOnVector(e),this.sub(wo)}reflect(e){return this.sub(wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Be(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wo=new D,Xu=new Ln;class ln{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(s,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ks.copy(i.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),zs.subVectors(this.max,$r),tr.subVectors(e.a,$r),nr.subVectors(e.b,$r),ir.subVectors(e.c,$r),si.subVectors(nr,tr),ai.subVectors(ir,nr),Ai.subVectors(tr,ir);let t=[0,-si.z,si.y,0,-ai.z,ai.y,0,-Ai.z,Ai.y,si.z,0,-si.x,ai.z,0,-ai.x,Ai.z,0,-Ai.x,-si.y,si.x,0,-ai.y,ai.x,0,-Ai.y,Ai.x,0];return!Ro(t,tr,nr,ir,zs)||(t=[1,0,0,0,1,0,0,0,1],!Ro(t,tr,nr,ir,zs))?!1:(Hs.crossVectors(si,ai),t=[Hs.x,Hs.y,Hs.z],Ro(t,tr,nr,ir,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kn=[new D,new D,new D,new D,new D,new D,new D,new D],hn=new D,ks=new ln,tr=new D,nr=new D,ir=new D,si=new D,ai=new D,Ai=new D,$r=new D,zs=new D,Hs=new D,wi=new D;function Ro(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){wi.fromArray(n,s);const o=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),u=i.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const u_=new ln,Zr=new D,Co=new D;class Nn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):u_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);const t=Zr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Zr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(Co)),this.expandByPoint(Zr.copy(e.center).sub(Co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new D,Po=new D,Vs=new D,oi=new D,Lo=new D,Gs=new D,Do=new D;class Ps{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Po.copy(e).add(t).multiplyScalar(.5),Vs.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(Po);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Vs),o=oi.dot(this.direction),l=-oi.dot(Vs),c=oi.lengthSq(),u=Math.abs(1-a*a);let h,f,d,m;if(u>0)if(h=a*l-o,f=a*o-l,m=s*u,h>=0)if(f>=-m)if(f<=m){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Po).addScaledVector(Vs,f),d}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,r,s){Lo.subVectors(t,e),Gs.subVectors(i,e),Do.crossVectors(Lo,Gs);let a=this.direction.dot(Do),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,e);const l=o*this.direction.dot(Gs.crossVectors(oi,Gs));if(l<0)return null;const c=o*this.direction.dot(Lo.cross(oi));if(c<0||l+c>a)return null;const u=-o*oi.dot(Do);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(e,t,i,r,s,a,o,l,c,u,h,f,d,m,_,g){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,f,d,m,_,g)}set(e,t,i,r,s,a,o,l,c,u,h,f,d,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/rr.setFromMatrixColumn(e,0).length(),s=1/rr.setFromMatrixColumn(e,1).length(),a=1/rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,m=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,m=c*u,_=c*h;t[0]=f+_*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,m=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,m=o*u,_=o*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=m*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,d=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h_,e,f_)}lookAt(e,t,i){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),li.crossVectors(i,Xt),li.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),li.crossVectors(i,Xt)),li.normalize(),Ws.crossVectors(Xt,li),r[0]=li.x,r[4]=Ws.x,r[8]=Xt.x,r[1]=li.y,r[5]=Ws.y,r[9]=Xt.y,r[2]=li.z,r[6]=Ws.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],m=i[2],_=i[6],g=i[10],p=i[14],T=i[3],E=i[7],S=i[11],C=i[15],P=r[0],w=r[4],R=r[8],M=r[12],v=r[1],A=r[5],z=r[9],F=r[13],X=r[2],q=r[6],W=r[10],j=r[14],H=r[3],te=r[7],de=r[11],ye=r[15];return s[0]=a*P+o*v+l*X+c*H,s[4]=a*w+o*A+l*q+c*te,s[8]=a*R+o*z+l*W+c*de,s[12]=a*M+o*F+l*j+c*ye,s[1]=u*P+h*v+f*X+d*H,s[5]=u*w+h*A+f*q+d*te,s[9]=u*R+h*z+f*W+d*de,s[13]=u*M+h*F+f*j+d*ye,s[2]=m*P+_*v+g*X+p*H,s[6]=m*w+_*A+g*q+p*te,s[10]=m*R+_*z+g*W+p*de,s[14]=m*M+_*F+g*j+p*ye,s[3]=T*P+E*v+S*X+C*H,s[7]=T*w+E*A+S*q+C*te,s[11]=T*R+E*z+S*W+C*de,s[15]=T*M+E*F+S*j+C*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*l*h-r*c*h-s*o*f+i*c*f+r*o*d-i*l*d)+_*(+t*l*d-t*c*f+s*a*f-r*a*d+r*c*u-s*l*u)+g*(+t*c*h-t*o*d-s*a*h+i*a*d+s*o*u-i*c*u)+p*(-r*o*u-t*l*h+t*o*f+r*a*h-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],_=e[13],g=e[14],p=e[15],T=h*g*c-_*f*c+_*l*d-o*g*d-h*l*p+o*f*p,E=m*f*c-u*g*c-m*l*d+a*g*d+u*l*p-a*f*p,S=u*_*c-m*h*c+m*o*d-a*_*d-u*o*p+a*h*p,C=m*h*l-u*_*l-m*o*f+a*_*f+u*o*g-a*h*g,P=t*T+i*E+r*S+s*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/P;return e[0]=T*w,e[1]=(_*f*s-h*g*s-_*r*d+i*g*d+h*r*p-i*f*p)*w,e[2]=(o*g*s-_*l*s+_*r*c-i*g*c-o*r*p+i*l*p)*w,e[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*d-i*l*d)*w,e[4]=E*w,e[5]=(u*g*s-m*f*s+m*r*d-t*g*d-u*r*p+t*f*p)*w,e[6]=(m*l*s-a*g*s-m*r*c+t*g*c+a*r*p-t*l*p)*w,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*d+t*l*d)*w,e[8]=S*w,e[9]=(m*h*s-u*_*s-m*i*d+t*_*d+u*i*p-t*h*p)*w,e[10]=(a*_*s-m*o*s+m*i*c-t*_*c-a*i*p+t*o*p)*w,e[11]=(u*o*s-a*h*s-u*i*c+t*h*c+a*i*d-t*o*d)*w,e[12]=C*w,e[13]=(u*_*r-m*h*r+m*i*f-t*_*f-u*i*g+t*h*g)*w,e[14]=(m*o*r-a*_*r-m*i*l+t*_*l+a*i*g-t*o*g)*w,e[15]=(a*h*r-u*o*r+u*i*l-t*h*l-a*i*f+t*o*f)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,m=s*h,_=a*u,g=a*h,p=o*h,T=l*c,E=l*u,S=l*h,C=i.x,P=i.y,w=i.z;return r[0]=(1-(_+p))*C,r[1]=(d+S)*C,r[2]=(m-E)*C,r[3]=0,r[4]=(d-S)*P,r[5]=(1-(f+p))*P,r[6]=(g+T)*P,r[7]=0,r[8]=(m+E)*w,r[9]=(g-T)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=rr.set(r[0],r[1],r[2]).length();const a=rr.set(r[4],r[5],r[6]).length(),o=rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],fn.copy(this);const c=1/s,u=1/a,h=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,t.setFromRotationMatrix(fn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=$n){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let d,m;if(o===$n)d=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===Ha)d=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=$n){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(a-s),f=(t+e)*c,d=(i+r)*u;let m,_;if(o===$n)m=(a+s)*h,_=-2*h;else if(o===Ha)m=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const rr=new D,fn=new Ie,h_=new D(0,0,0),f_=new D(1,1,1),li=new D,Ws=new D,Xt=new D,qu=new Ie,Yu=new Ln;class Dn{constructor(e=0,t=0,i=0,r=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yu.setFromEuler(this),this.setFromQuaternion(Yu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class Td{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let d_=0;const ju=new D,sr=new Ln,Hn=new Ie,Xs=new D,Jr=new D,p_=new D,m_=new Ln,Ku=new D(1,0,0),$u=new D(0,1,0),Zu=new D(0,0,1),Ju={type:"added"},g_={type:"removed"},ar={type:"childadded",child:null},Io={type:"childremoved",child:null};class ht extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new D,t=new Dn,i=new Ln,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Ue}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Td,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(Ku,e)}rotateY(e){return this.rotateOnAxis($u,e)}rotateZ(e){return this.rotateOnAxis(Zu,e)}translateOnAxis(e,t){return ju.copy(e).applyQuaternion(this.quaternion),this.position.add(ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ku,e)}translateY(e){return this.translateOnAxis($u,e)}translateZ(e){return this.translateOnAxis(Zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xs.copy(e):Xs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Jr,Xs,this.up):Hn.lookAt(Xs,Jr,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),sr.setFromRotationMatrix(Hn),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ju),ar.child=e,this.dispatchEvent(ar),ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(g_),Io.child=e,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ju),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,p_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,m_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ht.DEFAULT_UP=new D(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new D,Vn=new D,No=new D,Gn=new D,or=new D,lr=new D,Qu=new D,Uo=new D,Fo=new D,Oo=new D,Bo=new Ke,ko=new Ke,zo=new Ke;class _n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),dn.subVectors(e,t),r.cross(dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){dn.subVectors(r,t),Vn.subVectors(i,t),No.subVectors(e,t);const a=dn.dot(dn),o=dn.dot(Vn),l=dn.dot(No),c=Vn.dot(Vn),u=Vn.dot(No),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,m=(a*u-o*l)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gn.x),l.addScaledVector(a,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Bo.setScalar(0),ko.setScalar(0),zo.setScalar(0),Bo.fromBufferAttribute(e,t),ko.fromBufferAttribute(e,i),zo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Bo,s.x),a.addScaledVector(ko,s.y),a.addScaledVector(zo,s.z),a}static isFrontFacing(e,t,i,r){return dn.subVectors(i,t),Vn.subVectors(e,t),dn.cross(Vn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),dn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return _n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;or.subVectors(r,i),lr.subVectors(s,i),Uo.subVectors(e,i);const l=or.dot(Uo),c=lr.dot(Uo);if(l<=0&&c<=0)return t.copy(i);Fo.subVectors(e,r);const u=or.dot(Fo),h=lr.dot(Fo);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(or,a);Oo.subVectors(e,s);const d=or.dot(Oo),m=lr.dot(Oo);if(m>=0&&d<=m)return t.copy(s);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(lr,o);const g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return Qu.subVectors(s,r),o=(h-u)/(h-u+(d-m)),t.copy(r).addScaledVector(Qu,o);const p=1/(g+_+f);return a=_*p,o=f*p,t.copy(i).addScaledVector(or,a).addScaledVector(lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},qs={h:0,s:0,l:0};function Ho(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let Le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=He.workingColorSpace){return this.r=e,this.g=t,this.b=i,He.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=He.workingColorSpace){if(e=Wc(e,1),t=Be(t,0,1),i=Be(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ho(a,s,e+1/3),this.g=Ho(a,s,e),this.b=Ho(a,s,e-1/3)}return He.toWorkingColorSpace(this,r),this}setStyle(e,t=_t){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const i=bd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return He.fromWorkingColorSpace(wt.copy(this),e),Math.round(Be(wt.r*255,0,255))*65536+Math.round(Be(wt.g*255,0,255))*256+Math.round(Be(wt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.fromWorkingColorSpace(wt.copy(this),t);const i=wt.r,r=wt.g,s=wt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=He.workingColorSpace){return He.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=_t){He.fromWorkingColorSpace(wt.copy(this),e);const t=wt.r,i=wt.g,r=wt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(qs);const i=ms(ci.h,qs.h,t),r=ms(ci.s,qs.s,t),s=ms(ci.l,qs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const wt=new Le;Le.NAMES=bd;let __=0;class wn extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=Sr,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yl,this.blendDst=Ml,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(i.blending=this.blending),this.side!==ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ml&&(i.blendDst=this.blendDst),this.blendEquation!==Ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ku&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gi extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new D,Ys=new Re;let v_=0;class Tt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rc,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ys.fromBufferAttribute(this,t),Ys.applyMatrix3(e),this.setXY(t,Ys.x,Ys.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qe(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rc&&(e.usage=this.usage),e}}class Ad extends Tt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class wd extends Tt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ei extends Tt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let x_=0;const en=new Ie,Vo=new ht,cr=new D,qt=new ln,Qr=new ln,Mt=new D;class Sn extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Md(e)?wd:Ad)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,i){return en.makeTranslation(e,t,i),this.applyMatrix4(en),this}scale(e,t,i){return en.makeScale(e,t,i),this.applyMatrix4(en),this}lookAt(e){return Vo.lookAt(e),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ei(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Qr.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(qt.min,Qr.min),qt.expandByPoint(Mt),Mt.addVectors(qt.max,Qr.max),qt.expandByPoint(Mt)):(qt.expandByPoint(Qr.min),qt.expandByPoint(Qr.max))}qt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Mt.fromBufferAttribute(o,c),l&&(cr.fromBufferAttribute(e,c),Mt.add(cr)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new D,l[R]=new D;const c=new D,u=new D,h=new D,f=new Re,d=new Re,m=new Re,_=new D,g=new D;function p(R,M,v){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,v),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,M),m.fromBufferAttribute(s,v),u.sub(c),h.sub(c),d.sub(f),m.sub(f);const A=1/(d.x*m.y-m.x*d.y);isFinite(A)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(A),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(A),o[R].add(_),o[M].add(_),o[v].add(_),l[R].add(g),l[M].add(g),l[v].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let R=0,M=T.length;R<M;++R){const v=T[R],A=v.start,z=v.count;for(let F=A,X=A+z;F<X;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const E=new D,S=new D,C=new D,P=new D;function w(R){C.fromBufferAttribute(r,R),P.copy(C);const M=o[R];E.copy(M),E.sub(C.multiplyScalar(C.dot(M))).normalize(),S.crossVectors(P,M);const A=S.dot(l[R])<0?-1:1;a.setXYZW(R,E.x,E.y,E.z,A)}for(let R=0,M=T.length;R<M;++R){const v=T[R],A=v.start,z=v.count;for(let F=A,X=A+z;F<X;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new Tt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Sn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eh=new Ie,Ri=new Ps,js=new Nn,th=new D,Ks=new D,$s=new D,Zs=new D,Go=new D,Js=new D,nh=new D,Qs=new D;class Kt extends ht{constructor(e=new Sn,t=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Js.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Go.fromBufferAttribute(h,e),a?Js.addScaledVector(Go,u):Js.addScaledVector(Go.sub(t),u))}t.add(Js)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere),js.applyMatrix4(s),Ri.copy(e.ray).recast(e.near),!(js.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(js,th)===null||Ri.origin.distanceToSquared(th)>(e.far-e.near)**2))&&(eh.copy(s).invert(),Ri.copy(e.ray).applyMatrix4(eh),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=a[g.materialIndex],T=Math.max(g.start,d.start),E=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let S=T,C=E;S<C;S+=3){const P=o.getX(S),w=o.getX(S+1),R=o.getX(S+2);r=ea(this,p,e,i,c,u,h,P,w,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const T=o.getX(g),E=o.getX(g+1),S=o.getX(g+2);r=ea(this,a,e,i,c,u,h,T,E,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=a[g.materialIndex],T=Math.max(g.start,d.start),E=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let S=T,C=E;S<C;S+=3){const P=S,w=S+1,R=S+2;r=ea(this,p,e,i,c,u,h,P,w,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const T=g,E=g+1,S=g+2;r=ea(this,a,e,i,c,u,h,T,E,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function y_(n,e,t,i,r,s,a,o){let l;if(e.side===Gt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ti,o),l===null)return null;Qs.copy(o),Qs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Qs);return c<t.near||c>t.far?null:{distance:c,point:Qs.clone(),object:n}}function ea(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ks),n.getVertexPosition(l,$s),n.getVertexPosition(c,Zs);const u=y_(n,e,t,i,Ks,$s,Zs,nh);if(u){const h=new D;_n.getBarycoord(nh,Ks,$s,Zs,h),r&&(u.uv=_n.getInterpolatedAttribute(r,o,l,c,h,new Re)),s&&(u.uv1=_n.getInterpolatedAttribute(s,o,l,c,h,new Re)),a&&(u.normal=_n.getInterpolatedAttribute(a,o,l,c,h,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new D,materialIndex:0};_n.getNormal(Ks,$s,Zs,f.normal),u.face=f,u.barycoord=h}return u}class Ls extends Sn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,r,a,2),m("x","z","y",1,-1,e,i,-t,r,a,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ei(c,3)),this.setAttribute("normal",new ei(u,3)),this.setAttribute("uv",new ei(h,2));function m(_,g,p,T,E,S,C,P,w,R,M){const v=S/w,A=C/R,z=S/2,F=C/2,X=P/2,q=w+1,W=R+1;let j=0,H=0;const te=new D;for(let de=0;de<W;de++){const ye=de*A-F;for(let oe=0;oe<q;oe++){const re=oe*v-z;te[_]=re*T,te[g]=ye*E,te[p]=X,c.push(te.x,te.y,te.z),te[_]=0,te[g]=0,te[p]=P>0?1:-1,u.push(te.x,te.y,te.z),h.push(oe/w),h.push(1-de/R),j+=1}}for(let de=0;de<R;de++)for(let ye=0;ye<w;ye++){const oe=f+ye+q*de,re=f+ye+q*(de+1),V=f+(ye+1)+q*(de+1),Q=f+(ye+1)+q*de;l.push(oe,re,Q),l.push(re,V,Q),H+=6}o.addGroup(d,H,M),d+=H,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Nr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=Nr(n[t]);for(const r in i)e[r]=i[r]}return e}function M_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}const S_={clone:Nr,merge:It};var E_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E_,this.fragmentShader=T_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=M_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Cd extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new D,ih=new Re,rh=new Re;class Ut extends Cd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,ih,rh),t.subVectors(rh,ih)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ps*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ur=-90,hr=1;class b_ extends ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ut(ur,hr,e,t);r.layers=this.layers,this.add(r);const s=new Ut(ur,hr,e,t);s.layers=this.layers,this.add(s);const a=new Ut(ur,hr,e,t);a.layers=this.layers,this.add(a);const o=new Ut(ur,hr,e,t);o.layers=this.layers,this.add(o);const l=new Ut(ur,hr,e,t);l.layers=this.layers,this.add(l);const c=new Ut(ur,hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Pd extends St{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Rr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class A_ extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Pd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ls(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:Nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:xi});s.uniforms.tEquirect.value=t;const a=new Kt(r,s),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=jt),new b_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Oi extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w_={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(w_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Oi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}let R_=class extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class C_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rc,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dt=new D;class Xc{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qe(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const sh=new D,ah=new Ke,oh=new Ke,P_=new D,lh=new Ie,ta=new D,Xo=new Nn,ch=new Ie,qo=new Ps;class L_ extends Kt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uu,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ta),this.boundingBox.expandByPoint(ta)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ta),this.boundingSphere.expandByPoint(ta)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xo.copy(this.boundingSphere),Xo.applyMatrix4(r),e.ray.intersectsSphere(Xo)!==!1&&(ch.copy(r).invert(),qo.copy(e.ray).applyMatrix4(ch),!(this.boundingBox!==null&&qo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,qo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ke,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Uu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;ah.fromBufferAttribute(r.attributes.skinIndex,e),oh.fromBufferAttribute(r.attributes.skinWeight,e),sh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=oh.getComponent(s);if(a!==0){const o=ah.getComponent(s);lh.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(P_.copy(sh).applyMatrix4(lh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ld extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Dd extends St{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Ft,u=Ft,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uh=new Ie,D_=new Ie;class qc{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ie;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:D_;uh.multiplyMatrices(o,t[s]),uh.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new qc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Dd(t,e,e,an,xn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Ld),this.bones.push(a),this.boneInverses.push(new Ie().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class sc extends Tt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fr=new Ie,hh=new Ie,na=[],fh=new ln,I_=new Ie,es=new Kt,ts=new Nn;class N_ extends Kt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,I_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fr),fh.copy(e.boundingBox).applyMatrix4(fr),this.boundingBox.union(fh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fr),ts.copy(e.boundingSphere).applyMatrix4(fr),this.boundingSphere.union(ts)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ts.copy(this.boundingSphere),ts.applyMatrix4(i),e.ray.intersectsSphere(ts)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,fr),hh.multiplyMatrices(i,fr),es.matrixWorld=hh,es.raycast(e,na);for(let a=0,o=na.length;a<o;a++){const l=na[a];l.instanceId=s,l.object=this,t.push(l)}na.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Dd(new Float32Array(r*this.count),r,this.count,zc,xn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Yo=new D,U_=new D,F_=new Ue;class di{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Yo.subVectors(i,t).cross(U_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Yo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||F_.getNormalMatrix(e),r=this.coplanarPoint(Yo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Nn,ia=new D;class Yc{constructor(e=new di,t=new di,i=new di,r=new di,s=new di,a=new di){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$n){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],m=r[9],_=r[10],g=r[11],p=r[12],T=r[13],E=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,g-d,S-p).normalize(),i[1].setComponents(l+s,f+c,g+d,S+p).normalize(),i[2].setComponents(l+a,f+u,g+m,S+T).normalize(),i[3].setComponents(l-a,f-u,g-m,S-T).normalize(),i[4].setComponents(l-o,f-h,g-_,S-E).normalize(),t===$n)i[5].setComponents(l+o,f+h,g+_,S+E).normalize();else if(t===Ha)i[5].setComponents(o,h,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ia.x=r.normal.x>0?e.max.x:e.min.x,ia.y=r.normal.y>0?e.max.y:e.min.y,ia.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Id extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Va=new D,Ga=new D,dh=new Ie,ns=new Ps,ra=new Nn,jo=new D,ph=new D;class jc extends ht{constructor(e=new Sn,t=new Id){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Va.fromBufferAttribute(t,r-1),Ga.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Va.distanceTo(Ga);e.setAttribute("lineDistance",new ei(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(r),ra.radius+=s,e.ray.intersectsSphere(ra)===!1)return;dh.copy(r).invert(),ns.copy(e.ray).applyMatrix4(dh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=d,g=m-1;_<g;_+=c){const p=u.getX(_),T=u.getX(_+1),E=sa(this,e,ns,l,p,T,_);E&&t.push(E)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(d),p=sa(this,e,ns,l,_,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=d,g=m-1;_<g;_+=c){const p=sa(this,e,ns,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=sa(this,e,ns,l,m-1,d,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function sa(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Va.fromBufferAttribute(o,r),Ga.fromBufferAttribute(o,s),t.distanceSqToSegment(Va,Ga,jo,ph)>i)return;jo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(jo);if(!(c<e.near||c>e.far))return{distance:c,point:ph.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const mh=new D,gh=new D;class O_ extends jc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)mh.fromBufferAttribute(t,r),gh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+mh.distanceTo(gh);e.setAttribute("lineDistance",new ei(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class B_ extends jc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Nd extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _h=new Ie,ac=new Ps,aa=new Nn,oa=new D;class k_ extends ht{constructor(e=new Sn,t=new Nd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(r),aa.radius+=s,e.ray.intersectsSphere(aa)===!1)return;_h.copy(r).invert(),ac.copy(e.ray).applyMatrix4(_h);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=f,_=d;m<_;m++){const g=c.getX(m);oa.fromBufferAttribute(h,g),vh(oa,g,l,r,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let m=f,_=d;m<_;m++)oa.fromBufferAttribute(h,m),vh(oa,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function vh(n,e,t,i,r,s,a){const o=ac.distanceSqToPoint(n);if(o<t){const l=new D;ac.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ud extends St{constructor(e,t,i,r,s,a,o,l,c,u=Er){if(u!==Er&&u!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Er&&(i=Gi),i===void 0&&u===Dr&&(i=Lr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ho extends Sn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=t/l,d=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const T=p*f-a;for(let E=0;E<c;E++){const S=E*h-s;m.push(S,-T,0),_.push(0,0,1),g.push(E/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const E=T+c*p,S=T+c*(p+1),C=T+1+c*(p+1),P=T+1+c*p;d.push(E,S,P),d.push(S,C,P)}this.setIndex(d),this.setAttribute("position",new ei(m,3)),this.setAttribute("normal",new ei(_,3)),this.setAttribute("uv",new ei(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kc extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vd,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Un extends Kc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class z_ extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class H_ extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function la(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function V_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function G_(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function xh(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=n[o+l]}return r}function Fd(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=n[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=n[r++];while(s!==void 0)}class Ds{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class W_ extends Ds{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fu,endingEnd:Fu}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ou:s=e,o=2*t-i;break;case Bu:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ou:a=e,l=2*i-t;break;case Bu:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(i-t)/(r-t),_=m*m,g=_*m,p=-f*g+2*f*_-f*m,T=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,E=(-1-d)*g+(1.5+d)*_+.5*m,S=d*g-d*_;for(let C=0;C!==o;++C)s[C]=p*a[u+C]+T*a[c+C]+E*a[l+C]+S*a[h+C];return s}}class X_ extends Ds{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(r-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*h+a[l+f]*u;return s}}class q_ extends Ds{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=la(t,this.TimeBufferType),this.values=la(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:la(e.times,Array),values:la(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new q_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new X_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new W_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ms:t=this.InterpolantFactoryMethodDiscrete;break;case Ss:t=this.InterpolantFactoryMethodLinear;break;case To:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return Ss;case this.InterpolantFactoryMethodSmooth:return To}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&V_(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===To,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const h=o*i,f=h-i,d=h+i;for(let m=0;m!==i;++m){const _=t[h+m];if(_!==t[f+m]||_!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Ss;class qr extends Fn{constructor(e,t,i){super(e,t,i)}}qr.prototype.ValueTypeName="bool";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=Ms;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;class Od extends Fn{}Od.prototype.ValueTypeName="color";class Ur extends Fn{}Ur.prototype.ValueTypeName="number";class Y_ extends Ds{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Ln.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Fr extends Fn{InterpolantFactoryMethodLinear(e){return new Y_(this.times,this.values,this.getValueSize(),e)}}Fr.prototype.ValueTypeName="quaternion";Fr.prototype.InterpolantFactoryMethodSmooth=void 0;class Yr extends Fn{constructor(e,t,i){super(e,t,i)}}Yr.prototype.ValueTypeName="string";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=Ms;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;class Or extends Fn{}Or.prototype.ValueTypeName="vector";class j_{constructor(e="",t=-1,i=[],r=Ag){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=yn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push($_(i[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(Fn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=G_(l);l=xh(l,1,u),c=xh(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ur(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,m,_){if(d.length!==0){const g=[],p=[];Fd(d,g,p,m),g.length!==0&&_.push(new h(f,g,p))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let _=0;_<f[m].morphTargets.length;_++)d[f[m].morphTargets[_]]=-1;for(const _ in d){const g=[],p=[];for(let T=0;T!==f[m].morphTargets.length;++T){const E=f[m];g.push(E.time),p.push(E.morphTarget===_?1:0)}r.push(new Ur(".morphTargetInfluence["+_+"]",g,p))}l=d.length*a}else{const d=".bones["+t[h].name+"]";i(Or,d+".position",f,"pos",r),i(Fr,d+".quaternion",f,"rot",r),i(Or,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function K_(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ur;case"vector":case"vector2":case"vector3":case"vector4":return Or;case"color":return Od;case"quaternion":return Fr;case"bool":case"boolean":return qr;case"string":return Yr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function $_(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=K_(n.type);if(n.times===void 0){const t=[],i=[];Fd(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const _i={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Z_{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}}const J_=new Z_;class $i{constructor(e){this.manager=e!==void 0?e:J_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}$i.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class Q_ extends Error{constructor(e,t){super(e),this.response=t}}class Wa extends $i{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=_i.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:i,onError:r});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Wn[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let _=0;const g=new ReadableStream({start(p){T();function T(){h.read().then(({done:E,value:S})=>{if(E)p.close();else{_+=S.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let P=0,w=u.length;P<w;P++){const R=u[P];R.onProgress&&R.onProgress(C)}p.enqueue(S),T()}},E=>{p.error(E)})}}});return new Response(g)}else throw new Q_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{_i.add(e,c);const u=Wn[e];delete Wn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Wn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Wn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class e0 extends $i{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=_i.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Es("img");function l(){u(),_i.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class t0 extends $i{constructor(e){super(e)}load(e,t,i,r){const s=new St,a=new e0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class fo extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ko=new Ie,yh=new D,Mh=new D;class $c{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yc,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(yh),Mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mh),t.updateMatrixWorld(),Ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ko),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class n0 extends $c{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Ir*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class i0 extends fo{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new n0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Sh=new Ie,is=new D,$o=new D;class r0 extends $c{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),is.setFromMatrixPosition(e.matrixWorld),i.position.copy(is),$o.copy(i.position),$o.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt($o),i.updateMatrixWorld(),r.makeTranslation(-is.x,-is.y,-is.z),Sh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh)}}class s0 extends fo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new r0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Zc extends Cd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class a0 extends $c{constructor(){super(new Zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oc extends fo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new a0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class o0 extends fo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class l0 extends $i{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=_i.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return _i.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),_i.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});_i.add(e,l),s.manager.itemStart(e)}}class c0 extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Jc="\\[\\]\\.:\\/",u0=new RegExp("["+Jc+"]","g"),Qc="[^"+Jc+"]",h0="[^"+Jc.replace("\\.","")+"]",f0=/((?:WC+[\/:])*)/.source.replace("WC",Qc),d0=/(WCOD+)?/.source.replace("WCOD",h0),p0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),m0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),g0=new RegExp("^"+f0+d0+p0+m0+"$"),_0=["material","materials","bones","map"];class v0{constructor(e,t,i){const r=i||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class et{constructor(e,t,i){this.path=t,this.parsedPath=i||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,i):new et(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(u0,"")}static parseTrackName(e){const t=g0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);_0.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=v0;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Eh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Be(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class x0 extends Ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Th(n,e,t,i){const r=y0(i);switch(t){case hd:return n*e;case dd:return n*e;case pd:return n*e*2;case zc:return n*e/r.components*r.byteLength;case Hc:return n*e/r.components*r.byteLength;case md:return n*e*2/r.components*r.byteLength;case Vc:return n*e*2/r.components*r.byteLength;case fd:return n*e*3/r.components*r.byteLength;case an:return n*e*4/r.components*r.byteLength;case Gc:return n*e*4/r.components*r.byteLength;case Ma:case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ea:case Ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dl:case Nl:return Math.max(n,16)*Math.max(e,8)/4;case Ll:case Il:return Math.max(n,8)*Math.max(e,8)/2;case Ul:case Fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case zl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case jl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $l:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ba:case Jl:case Ql:return Math.ceil(n/4)*Math.ceil(e/4)*16;case gd:case ec:return Math.ceil(n/4)*Math.ceil(e/4)*8;case tc:case nc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function y0(n){switch(n){case ni:case ld:return{byteLength:1,components:1};case ys:case cd:case Cs:return{byteLength:2,components:1};case Bc:case kc:return{byteLength:2,components:4};case Gi:case Oc:case xn:return{byteLength:4,components:1};case ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function M0(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],_=h[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const _=h[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var S0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,w0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,C0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,L0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,U0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,X0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,q0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Y0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ev=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,av=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_v=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ev=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ov=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$v=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ax=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ox=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ux=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,px=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Px=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ux=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:S0,alphahash_pars_fragment:E0,alphamap_fragment:T0,alphamap_pars_fragment:b0,alphatest_fragment:A0,alphatest_pars_fragment:w0,aomap_fragment:R0,aomap_pars_fragment:C0,batching_pars_vertex:P0,batching_vertex:L0,begin_vertex:D0,beginnormal_vertex:I0,bsdfs:N0,iridescence_fragment:U0,bumpmap_pars_fragment:F0,clipping_planes_fragment:O0,clipping_planes_pars_fragment:B0,clipping_planes_pars_vertex:k0,clipping_planes_vertex:z0,color_fragment:H0,color_pars_fragment:V0,color_pars_vertex:G0,color_vertex:W0,common:X0,cube_uv_reflection_fragment:q0,defaultnormal_vertex:Y0,displacementmap_pars_vertex:j0,displacementmap_vertex:K0,emissivemap_fragment:$0,emissivemap_pars_fragment:Z0,colorspace_fragment:J0,colorspace_pars_fragment:Q0,envmap_fragment:ev,envmap_common_pars_fragment:tv,envmap_pars_fragment:nv,envmap_pars_vertex:iv,envmap_physical_pars_fragment:pv,envmap_vertex:rv,fog_vertex:sv,fog_pars_vertex:av,fog_fragment:ov,fog_pars_fragment:lv,gradientmap_pars_fragment:cv,lightmap_pars_fragment:uv,lights_lambert_fragment:hv,lights_lambert_pars_fragment:fv,lights_pars_begin:dv,lights_toon_fragment:mv,lights_toon_pars_fragment:gv,lights_phong_fragment:_v,lights_phong_pars_fragment:vv,lights_physical_fragment:xv,lights_physical_pars_fragment:yv,lights_fragment_begin:Mv,lights_fragment_maps:Sv,lights_fragment_end:Ev,logdepthbuf_fragment:Tv,logdepthbuf_pars_fragment:bv,logdepthbuf_pars_vertex:Av,logdepthbuf_vertex:wv,map_fragment:Rv,map_pars_fragment:Cv,map_particle_fragment:Pv,map_particle_pars_fragment:Lv,metalnessmap_fragment:Dv,metalnessmap_pars_fragment:Iv,morphinstance_vertex:Nv,morphcolor_vertex:Uv,morphnormal_vertex:Fv,morphtarget_pars_vertex:Ov,morphtarget_vertex:Bv,normal_fragment_begin:kv,normal_fragment_maps:zv,normal_pars_fragment:Hv,normal_pars_vertex:Vv,normal_vertex:Gv,normalmap_pars_fragment:Wv,clearcoat_normal_fragment_begin:Xv,clearcoat_normal_fragment_maps:qv,clearcoat_pars_fragment:Yv,iridescence_pars_fragment:jv,opaque_fragment:Kv,packing:$v,premultiplied_alpha_fragment:Zv,project_vertex:Jv,dithering_fragment:Qv,dithering_pars_fragment:ex,roughnessmap_fragment:tx,roughnessmap_pars_fragment:nx,shadowmap_pars_fragment:ix,shadowmap_pars_vertex:rx,shadowmap_vertex:sx,shadowmask_pars_fragment:ax,skinbase_vertex:ox,skinning_pars_vertex:lx,skinning_vertex:cx,skinnormal_vertex:ux,specularmap_fragment:hx,specularmap_pars_fragment:fx,tonemapping_fragment:dx,tonemapping_pars_fragment:px,transmission_fragment:mx,transmission_pars_fragment:gx,uv_pars_fragment:_x,uv_pars_vertex:vx,uv_vertex:xx,worldpos_vertex:yx,background_vert:Mx,background_frag:Sx,backgroundCube_vert:Ex,backgroundCube_frag:Tx,cube_vert:bx,cube_frag:Ax,depth_vert:wx,depth_frag:Rx,distanceRGBA_vert:Cx,distanceRGBA_frag:Px,equirect_vert:Lx,equirect_frag:Dx,linedashed_vert:Ix,linedashed_frag:Nx,meshbasic_vert:Ux,meshbasic_frag:Fx,meshlambert_vert:Ox,meshlambert_frag:Bx,meshmatcap_vert:kx,meshmatcap_frag:zx,meshnormal_vert:Hx,meshnormal_frag:Vx,meshphong_vert:Gx,meshphong_frag:Wx,meshphysical_vert:Xx,meshphysical_frag:qx,meshtoon_vert:Yx,meshtoon_frag:jx,points_vert:Kx,points_frag:$x,shadow_vert:Zx,shadow_frag:Jx,sprite_vert:Qx,sprite_frag:ey},ae={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Tn={basic:{uniforms:It([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:It([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Le(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:It([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:It([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:It([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Le(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:It([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:It([ae.points,ae.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:It([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:It([ae.common,ae.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:It([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:It([ae.sprite,ae.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:It([ae.common,ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:It([ae.lights,ae.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Tn.physical={uniforms:It([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const ca={r:0,b:0,g:0},Pi=new Dn,ty=new Ie;function ny(n,e,t,i,r,s,a){const o=new Le(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function m(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function _(E){let S=!1;const C=m(E);C===null?p(o,l):C&&C.isColor&&(p(C,1),S=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(E,S){const C=m(S);C&&(C.isCubeTexture||C.mapping===uo)?(u===void 0&&(u=new Kt(new Ls(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Nr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Pi.copy(S.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ty.makeRotationFromEuler(Pi)),u.material.toneMapped=He.getTransfer(C.colorSpace)!==nt,(h!==C||f!==C.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=C,f=C.version,d=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Kt(new ho(2,2),new Ei({name:"BackgroundMaterial",uniforms:Nr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=He.getTransfer(C.colorSpace)!==nt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||f!==C.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=C,f=C.version,d=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,S){E.getRGB(ca,Rd(n)),i.buffers.color.setClear(ca.r,ca.g,ca.b,S,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:_,addToRenderList:g,dispose:T}}function iy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(v,A,z,F,X){let q=!1;const W=h(F,z,A);s!==W&&(s=W,c(s.object)),q=d(v,F,z,X),q&&m(v,F,z,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(v,A,z,F),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function h(v,A,z){const F=z.wireframe===!0;let X=i[v.id];X===void 0&&(X={},i[v.id]=X);let q=X[A.id];q===void 0&&(q={},X[A.id]=q);let W=q[F];return W===void 0&&(W=f(l()),q[F]=W),W}function f(v){const A=[],z=[],F=[];for(let X=0;X<t;X++)A[X]=0,z[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:z,attributeDivisors:F,object:v,attributes:{},index:null}}function d(v,A,z,F){const X=s.attributes,q=A.attributes;let W=0;const j=z.getAttributes();for(const H in j)if(j[H].location>=0){const de=X[H];let ye=q[H];if(ye===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ye=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ye=v.instanceColor)),de===void 0||de.attribute!==ye||ye&&de.data!==ye.data)return!0;W++}return s.attributesNum!==W||s.index!==F}function m(v,A,z,F){const X={},q=A.attributes;let W=0;const j=z.getAttributes();for(const H in j)if(j[H].location>=0){let de=q[H];de===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(de=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(de=v.instanceColor));const ye={};ye.attribute=de,de&&de.data&&(ye.data=de.data),X[H]=ye,W++}s.attributes=X,s.attributesNum=W,s.index=F}function _(){const v=s.newAttributes;for(let A=0,z=v.length;A<z;A++)v[A]=0}function g(v){p(v,0)}function p(v,A){const z=s.newAttributes,F=s.enabledAttributes,X=s.attributeDivisors;z[v]=1,F[v]===0&&(n.enableVertexAttribArray(v),F[v]=1),X[v]!==A&&(n.vertexAttribDivisor(v,A),X[v]=A)}function T(){const v=s.newAttributes,A=s.enabledAttributes;for(let z=0,F=A.length;z<F;z++)A[z]!==v[z]&&(n.disableVertexAttribArray(z),A[z]=0)}function E(v,A,z,F,X,q,W){W===!0?n.vertexAttribIPointer(v,A,z,X,q):n.vertexAttribPointer(v,A,z,F,X,q)}function S(v,A,z,F){_();const X=F.attributes,q=z.getAttributes(),W=A.defaultAttributeValues;for(const j in q){const H=q[j];if(H.location>=0){let te=X[j];if(te===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(te=v.instanceColor)),te!==void 0){const de=te.normalized,ye=te.itemSize,oe=e.get(te);if(oe===void 0)continue;const re=oe.buffer,V=oe.type,Q=oe.bytesPerElement,se=V===n.INT||V===n.UNSIGNED_INT||te.gpuType===Oc;if(te.isInterleavedBufferAttribute){const ne=te.data,Ee=ne.stride,ze=te.offset;if(ne.isInstancedInterleavedBuffer){for(let be=0;be<H.locationSize;be++)p(H.location+be,ne.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let be=0;be<H.locationSize;be++)g(H.location+be);n.bindBuffer(n.ARRAY_BUFFER,re);for(let be=0;be<H.locationSize;be++)E(H.location+be,ye/H.locationSize,V,de,Ee*Q,(ze+ye/H.locationSize*be)*Q,se)}else{if(te.isInstancedBufferAttribute){for(let ne=0;ne<H.locationSize;ne++)p(H.location+ne,te.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ne=0;ne<H.locationSize;ne++)g(H.location+ne);n.bindBuffer(n.ARRAY_BUFFER,re);for(let ne=0;ne<H.locationSize;ne++)E(H.location+ne,ye/H.locationSize,V,de,ye*Q,ye/H.locationSize*ne*Q,se)}}else if(W!==void 0){const de=W[j];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(H.location,de);break;case 3:n.vertexAttrib3fv(H.location,de);break;case 4:n.vertexAttrib4fv(H.location,de);break;default:n.vertexAttrib1fv(H.location,de)}}}}T()}function C(){R();for(const v in i){const A=i[v];for(const z in A){const F=A[z];for(const X in F)u(F[X].object),delete F[X];delete A[z]}delete i[v]}}function P(v){if(i[v.id]===void 0)return;const A=i[v.id];for(const z in A){const F=A[z];for(const X in F)u(F[X].object),delete F[X];delete A[z]}delete i[v.id]}function w(v){for(const A in i){const z=i[A];if(z[v.id]===void 0)continue;const F=z[v.id];for(const X in F)u(F[X].object),delete F[X];delete z[v.id]}}function R(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:T}}function ry(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)a(c[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*f[_];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function sy(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==an&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===Cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ni&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==xn&&!R)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:C,maxSamples:P}}function ay(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new di,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const T=s?0:i,E=T*4;let S=p.clippingState||null;l.value=S,S=u(m,f,E,d);for(let C=0;C!==E;++C)S[C]=t[C];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,S=d;E!==_;++E,S+=4)a.copy(h[E]).applyMatrix4(T,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function oy(n){let e=new WeakMap;function t(a,o){return o===Cl?a.mapping=Rr:o===Pl&&(a.mapping=Cr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Cl||o===Pl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new A_(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const vr=4,bh=[.125,.215,.35,.446,.526,.582],Ui=20,Zo=new Zc,Ah=new Le;let Jo=null,Qo=0,el=0,tl=!1;const Ii=(1+Math.sqrt(5))/2,dr=1/Ii,wh=[new D(-Ii,dr,0),new D(Ii,dr,0),new D(-dr,0,Ii),new D(dr,0,Ii),new D(0,Ii,-dr),new D(0,Ii,dr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Rh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jo,Qo,el),this._renderer.xr.enabled=tl,e.scissorTest=!1,ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Cs,format:an,colorSpace:Pt,depthBuffer:!1},r=Ch(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ly(s)),this._blurMaterial=cy(s,e,t)}return r}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,Zo)}_sceneToCubeUV(e,t,i,r){const o=new Ut(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ah),u.toneMapping=yi,u.autoClear=!1;const d=new gi({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),m=new Kt(new Ls,d);let _=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,_=!0):(d.color.copy(Ah),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):T===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const E=this._cubeSize;ua(r,T*E,p>2?E:0,E,E),u.setRenderTarget(r),_&&u.render(m,o),u.render(e,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Rr||e.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Kt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ua(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Zo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=wh[(r-s-1)%wh.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Kt(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ui-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):Ui;g>Ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ui}`);const p=[];let T=0;for(let w=0;w<Ui;++w){const R=w/_,M=Math.exp(-R*R/2);p.push(M),w===0?T+=M:w<g&&(T+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/T;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=m,f.mipInt.value=E-i;const S=this._sizeLods[r],C=3*S*(r>E-vr?r-E+vr:0),P=4*(this._cubeSize-S);ua(t,C,P,3*S,2*S),l.setRenderTarget(t),l.render(h,Zo)}}function ly(n){const e=[],t=[],i=[];let r=n;const s=n-vr+1+bh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-vr?l=bh[a-n+vr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,_=3,g=2,p=1,T=new Float32Array(_*m*d),E=new Float32Array(g*m*d),S=new Float32Array(p*m*d);for(let P=0;P<d;P++){const w=P%3*2/3-1,R=P>2?0:-1,M=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];T.set(M,_*m*P),E.set(f,g*m*P);const v=[P,P,P,P,P,P];S.set(v,p*m*P)}const C=new Sn;C.setAttribute("position",new Tt(T,_)),C.setAttribute("uv",new Tt(E,g)),C.setAttribute("faceIndex",new Tt(S,p)),e.push(C),r>vr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ch(n,e,t){const i=new Wi(n,e,t);return i.texture.mapping=uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ua(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function cy(n,e,t){const i=new Float32Array(Ui),r=new D(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Ph(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Lh(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function eu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uy(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Cl||l===Pl,u=l===Rr||l===Cr;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Rh(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Rh(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function hy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&gr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fy(n,e,t,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,m=h.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let E=0,S=T.length;E<S;E+=3){const C=T[E+0],P=T[E+1],w=T[E+2];f.push(C,P,P,w,w,C)}}else if(m!==void 0){const T=m.array;_=m.version;for(let E=0,S=T.length/3-1;E<S;E+=3){const C=E+0,P=E+1,w=E+2;f.push(C,P,P,w,w,C)}}else return;const g=new(Md(f)?wd:Ad)(f,1);g.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function dy(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*a),t.update(d,i,1)}function c(f,d,m){m!==0&&(n.drawElementsInstanced(i,d,s,f*a,m),t.update(d,i,m))}function u(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,i,1)}function h(f,d,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,_,0,m);let p=0;for(let T=0;T<m;T++)p+=d[T]*_[T];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function py(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function my(n,e,t){const i=new WeakMap,r=new Ke;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let v=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let C=o.attributes.position.count*S,P=1;C>e.maxTextureSize&&(P=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*P*4*h),R=new Ed(w,C,P,h);R.type=xn,R.needsUpdate=!0;const M=S*4;for(let A=0;A<h;A++){const z=p[A],F=T[A],X=E[A],q=C*P*4*A;for(let W=0;W<z.count;W++){const j=W*M;m===!0&&(r.fromBufferAttribute(z,W),w[q+j+0]=r.x,w[q+j+1]=r.y,w[q+j+2]=r.z,w[q+j+3]=0),_===!0&&(r.fromBufferAttribute(F,W),w[q+j+4]=r.x,w[q+j+5]=r.y,w[q+j+6]=r.z,w[q+j+7]=0),g===!0&&(r.fromBufferAttribute(X,W),w[q+j+8]=r.x,w[q+j+9]=r.y,w[q+j+10]=r.z,w[q+j+11]=X.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new Re(C,P)},i.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function gy(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const kd=new St,Dh=new Ud(1,1),zd=new Ed,Hd=new c_,Vd=new Pd,Ih=[],Nh=[],Uh=new Float32Array(16),Fh=new Float32Array(9),Oh=new Float32Array(4);function jr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ih[r];if(s===void 0&&(s=new Float32Array(r),Ih[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function po(n,e){let t=Nh[e];t===void 0&&(t=new Int32Array(e),Nh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _y(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function My(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,i))return;Oh.set(i),n.uniformMatrix2fv(this.addr,!1,Oh),yt(t,i)}}function Sy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,i))return;Fh.set(i),n.uniformMatrix3fv(this.addr,!1,Fh),yt(t,i)}}function Ey(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,i))return;Uh.set(i),n.uniformMatrix4fv(this.addr,!1,Uh),yt(t,i)}}function Ty(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function by(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function Ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function wy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function Ry(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function Py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function Ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function Dy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Dh.compareFunction=xd,s=Dh):s=kd,t.setTexture2D(e||s,r)}function Iy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Hd,r)}function Ny(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Vd,r)}function Uy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zd,r)}function Fy(n){switch(n){case 5126:return _y;case 35664:return vy;case 35665:return xy;case 35666:return yy;case 35674:return My;case 35675:return Sy;case 35676:return Ey;case 5124:case 35670:return Ty;case 35667:case 35671:return by;case 35668:case 35672:return Ay;case 35669:case 35673:return wy;case 5125:return Ry;case 36294:return Cy;case 36295:return Py;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Dy;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Uy}}function Oy(n,e){n.uniform1fv(this.addr,e)}function By(n,e){const t=jr(e,this.size,2);n.uniform2fv(this.addr,t)}function ky(n,e){const t=jr(e,this.size,3);n.uniform3fv(this.addr,t)}function zy(n,e){const t=jr(e,this.size,4);n.uniform4fv(this.addr,t)}function Hy(n,e){const t=jr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vy(n,e){const t=jr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Gy(n,e){const t=jr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Wy(n,e){n.uniform1iv(this.addr,e)}function Xy(n,e){n.uniform2iv(this.addr,e)}function qy(n,e){n.uniform3iv(this.addr,e)}function Yy(n,e){n.uniform4iv(this.addr,e)}function jy(n,e){n.uniform1uiv(this.addr,e)}function Ky(n,e){n.uniform2uiv(this.addr,e)}function $y(n,e){n.uniform3uiv(this.addr,e)}function Zy(n,e){n.uniform4uiv(this.addr,e)}function Jy(n,e,t){const i=this.cache,r=e.length,s=po(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||kd,s[a])}function Qy(n,e,t){const i=this.cache,r=e.length,s=po(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Hd,s[a])}function eM(n,e,t){const i=this.cache,r=e.length,s=po(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Vd,s[a])}function tM(n,e,t){const i=this.cache,r=e.length,s=po(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||zd,s[a])}function nM(n){switch(n){case 5126:return Oy;case 35664:return By;case 35665:return ky;case 35666:return zy;case 35674:return Hy;case 35675:return Vy;case 35676:return Gy;case 5124:case 35670:return Wy;case 35667:case 35671:return Xy;case 35668:case 35672:return qy;case 35669:case 35673:return Yy;case 5125:return jy;case 36294:return Ky;case 36295:return $y;case 36296:return Zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Jy;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return eM;case 36289:case 36303:case 36311:case 36292:return tM}}class iM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Fy(t.type)}}class rM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nM(t.type)}}class sM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const nl=/(\w+)(\])?(\[|\.)?/g;function Bh(n,e){n.seq.push(e),n.map[e.id]=e}function aM(n,e,t){const i=n.name,r=i.length;for(nl.lastIndex=0;;){const s=nl.exec(i),a=nl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Bh(t,c===void 0?new iM(o,n,e):new rM(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new sM(o),Bh(t,h)),t=h}}}class Aa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);aM(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function kh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const oM=37297;let lM=0;function cM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const zh=new Ue;function uM(n){He._getMatrix(zh,He.workingColorSpace,n);const e=`mat3( ${zh.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(n)){case za:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Hh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+cM(n.getShaderSource(e),a)}else return r}function hM(n,e){const t=uM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fM(n,e){let t;switch(e){case vg:t="Linear";break;case xg:t="Reinhard";break;case yg:t="Cineon";break;case Mg:t="ACESFilmic";break;case Eg:t="AgX";break;case Tg:t="Neutral";break;case Sg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ha=new D;function dM(){He.getLuminanceCoefficients(ha);const n=ha.x.toFixed(4),e=ha.y.toFixed(4),t=ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function mM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function cs(n){return n!==""}function Vh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _M=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(n){return n.replace(_M,xM)}const vM=new Map;function xM(n,e){let t=Oe[e];if(t===void 0){const i=vM.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lc(t)}const yM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wh(n){return n.replace(yM,MM)}function MM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function EM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rr:case Cr:e="ENVMAP_TYPE_CUBE";break;case uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function bM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case sd:e="ENVMAP_BLENDING_MULTIPLY";break;case gg:e="ENVMAP_BLENDING_MIX";break;case _g:e="ENVMAP_BLENDING_ADD";break}return e}function AM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function wM(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=SM(t),c=EM(t),u=TM(t),h=bM(t),f=AM(t),d=pM(t),m=mM(s),_=r.createProgram();let g,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(cs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(cs).join(`
`),p.length>0&&(p+=`
`)):(g=[Xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),p=[Xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?Oe.tonemapping_pars_fragment:"",t.toneMapping!==yi?fM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,hM("linearToOutputTexel",t.outputColorSpace),dM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cs).join(`
`)),a=lc(a),a=Vh(a,t),a=Gh(a,t),o=lc(o),o=Vh(o,t),o=Gh(o,t),a=Wh(a),o=Wh(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+g+a,S=T+p+o,C=kh(r,r.VERTEX_SHADER,E),P=kh(r,r.FRAGMENT_SHADER,S);r.attachShader(_,C),r.attachShader(_,P),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(A){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(C).trim(),X=r.getShaderInfoLog(P).trim();let q=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,P);else{const j=Hh(r,C,"vertex"),H=Hh(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+j+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||X==="")&&(W=!1);W&&(A.diagnostics={runnable:q,programLog:z,vertexShader:{log:F,prefix:g},fragmentShader:{log:X,prefix:p}})}r.deleteShader(C),r.deleteShader(P),R=new Aa(r,_),M=gM(r,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,oM)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=P,this}let RM=0;class CM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new PM(e),t.set(e,i)),i}}class PM{constructor(e){this.id=RM++,this.code=e,this.usedTimes=0}}function LM(n,e,t,i,r,s,a){const o=new Td,l=new CM,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,v,A,z,F){const X=z.fog,q=F.geometry,W=M.isMeshStandardMaterial?z.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),H=j&&j.mapping===uo?j.image.height:null,te=m[M.type];M.precision!==null&&(d=r.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const de=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ye=de!==void 0?de.length:0;let oe=0;q.morphAttributes.position!==void 0&&(oe=1),q.morphAttributes.normal!==void 0&&(oe=2),q.morphAttributes.color!==void 0&&(oe=3);let re,V,Q,se;if(te){const Je=Tn[te];re=Je.vertexShader,V=Je.fragmentShader}else re=M.vertexShader,V=M.fragmentShader,l.update(M),Q=l.getVertexShaderID(M),se=l.getFragmentShaderID(M);const ne=n.getRenderTarget(),Ee=n.state.buffers.depth.getReversed(),ze=F.isInstancedMesh===!0,be=F.isBatchedMesh===!0,ot=!!M.map,ft=!!M.matcap,Ve=!!j,L=!!M.aoMap,Zt=!!M.lightMap,Ge=!!M.bumpMap,We=!!M.normalMap,Se=!!M.displacementMap,lt=!!M.emissiveMap,Me=!!M.metalnessMap,b=!!M.roughnessMap,x=M.anisotropy>0,O=M.clearcoat>0,K=M.dispersion>0,Z=M.iridescence>0,Y=M.sheen>0,xe=M.transmission>0,ue=x&&!!M.anisotropyMap,me=O&&!!M.clearcoatMap,qe=O&&!!M.clearcoatNormalMap,ee=O&&!!M.clearcoatRoughnessMap,ge=Z&&!!M.iridescenceMap,we=Z&&!!M.iridescenceThicknessMap,Ce=Y&&!!M.sheenColorMap,_e=Y&&!!M.sheenRoughnessMap,Xe=!!M.specularMap,Fe=!!M.specularColorMap,st=!!M.specularIntensityMap,I=xe&&!!M.transmissionMap,le=xe&&!!M.thicknessMap,G=!!M.gradientMap,$=!!M.alphaMap,fe=M.alphaTest>0,he=!!M.alphaHash,Ne=!!M.extensions;let dt=yi;M.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(dt=n.toneMapping);const bt={shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:re,fragmentShader:V,defines:M.defines,customVertexShaderID:Q,customFragmentShaderID:se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:be,batchingColor:be&&F._colorsTexture!==null,instancing:ze,instancingColor:ze&&F.instanceColor!==null,instancingMorph:ze&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Pt,alphaToCoverage:!!M.alphaToCoverage,map:ot,matcap:ft,envMap:Ve,envMapMode:Ve&&j.mapping,envMapCubeUVHeight:H,aoMap:L,lightMap:Zt,bumpMap:Ge,normalMap:We,displacementMap:f&&Se,emissiveMap:lt,normalMapObjectSpace:We&&M.normalMapType===Pg,normalMapTangentSpace:We&&M.normalMapType===vd,metalnessMap:Me,roughnessMap:b,anisotropy:x,anisotropyMap:ue,clearcoat:O,clearcoatMap:me,clearcoatNormalMap:qe,clearcoatRoughnessMap:ee,dispersion:K,iridescence:Z,iridescenceMap:ge,iridescenceThicknessMap:we,sheen:Y,sheenColorMap:Ce,sheenRoughnessMap:_e,specularMap:Xe,specularColorMap:Fe,specularIntensityMap:st,transmission:xe,transmissionMap:I,thicknessMap:le,gradientMap:G,opaque:M.transparent===!1&&M.blending===Sr&&M.alphaToCoverage===!1,alphaMap:$,alphaTest:fe,alphaHash:he,combine:M.combine,mapUv:ot&&_(M.map.channel),aoMapUv:L&&_(M.aoMap.channel),lightMapUv:Zt&&_(M.lightMap.channel),bumpMapUv:Ge&&_(M.bumpMap.channel),normalMapUv:We&&_(M.normalMap.channel),displacementMapUv:Se&&_(M.displacementMap.channel),emissiveMapUv:lt&&_(M.emissiveMap.channel),metalnessMapUv:Me&&_(M.metalnessMap.channel),roughnessMapUv:b&&_(M.roughnessMap.channel),anisotropyMapUv:ue&&_(M.anisotropyMap.channel),clearcoatMapUv:me&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:qe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:we&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(M.sheenRoughnessMap.channel),specularMapUv:Xe&&_(M.specularMap.channel),specularColorMapUv:Fe&&_(M.specularColorMap.channel),specularIntensityMapUv:st&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:le&&_(M.thicknessMap.channel),alphaMapUv:$&&_(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(We||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(ot||$),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ee,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:oe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,decodeVideoTexture:ot&&M.map.isVideoTexture===!0&&He.getTransfer(M.map.colorSpace)===nt,decodeVideoTextureEmissive:lt&&M.emissiveMap.isVideoTexture===!0&&He.getTransfer(M.emissiveMap.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===mn,flipSided:M.side===Gt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ne&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&M.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function p(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const A in M.defines)v.push(A),v.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(T(v,M),E(v,M),v.push(n.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function T(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function E(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){const v=m[M.type];let A;if(v){const z=Tn[v];A=S_.clone(z.uniforms)}else A=M.uniforms;return A}function C(M,v){let A;for(let z=0,F=u.length;z<F;z++){const X=u[z];if(X.cacheKey===v){A=X,++A.usedTimes;break}}return A===void 0&&(A=new wM(n,v,M,s),u.push(A)),A}function P(M){if(--M.usedTimes===0){const v=u.indexOf(M);u[v]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:C,releaseProgram:P,releaseShaderCache:w,programs:u,dispose:R}}function DM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function IM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function qh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,f,d,m,_,g){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function o(h,f,d,m,_,g){const p=a(h,f,d,m,_,g);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,m,_,g){const p=a(h,f,d,m,_,g);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||IM),i.length>1&&i.sort(f||qh),r.length>1&&r.sort(f||qh)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function NM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Yh,n.set(i,[a])):r>=s.length?(a=new Yh,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function UM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Le};break;case"SpotLight":t={position:new D,direction:new D,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function FM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let OM=0;function BM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kM(n){const e=new UM,t=FM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new Ie,a=new Ie;function o(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,T=0,E=0,S=0,C=0,P=0,w=0;c.sort(BM);for(let M=0,v=c.length;M<v;M++){const A=c[M],z=A.color,F=A.intensity,X=A.distance,q=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=z.r*F,h+=z.g*F,f+=z.b*F;else if(A.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(A.sh.coefficients[W],F);w++}else if(A.isDirectionalLight){const W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const j=A.shadow,H=t.get(A);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=q,i.directionalShadowMatrix[d]=A.shadow.matrix,T++}i.directional[d]=W,d++}else if(A.isSpotLight){const W=e.get(A);W.position.setFromMatrixPosition(A.matrixWorld),W.color.copy(z).multiplyScalar(F),W.distance=X,W.coneCos=Math.cos(A.angle),W.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),W.decay=A.decay,i.spot[_]=W;const j=A.shadow;if(A.map&&(i.spotLightMap[C]=A.map,C++,j.updateMatrices(A),A.castShadow&&P++),i.spotLightMatrix[_]=j.matrix,A.castShadow){const H=t.get(A);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=q,S++}_++}else if(A.isRectAreaLight){const W=e.get(A);W.color.copy(z).multiplyScalar(F),W.halfWidth.set(A.width*.5,0,0),W.halfHeight.set(0,A.height*.5,0),i.rectArea[g]=W,g++}else if(A.isPointLight){const W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),W.distance=A.distance,W.decay=A.decay,A.castShadow){const j=A.shadow,H=t.get(A);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,i.pointShadow[m]=H,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=A.shadow.matrix,E++}i.point[m]=W,m++}else if(A.isHemisphereLight){const W=e.get(A);W.skyColor.copy(A.color).multiplyScalar(F),W.groundColor.copy(A.groundColor).multiplyScalar(F),i.hemi[p]=W,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==d||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==T||R.numPointShadows!==E||R.numSpotShadows!==S||R.numSpotMaps!==C||R.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=S+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=w,R.directionalLength=d,R.pointLength=m,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=T,R.numPointShadows=E,R.numSpotShadows=S,R.numSpotMaps=C,R.numLightProbes=w,i.version=OM++)}function l(c,u){let h=0,f=0,d=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const E=c[p];if(E.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),h++}else if(E.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(E.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(E.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(E.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(g),f++}else if(E.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:i}}function jh(n){const e=new kM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function zM(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new jh(n),e.set(r,[o])):s>=a.length?(o=new jh(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const HM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GM(n,e,t){let i=new Yc;const r=new Re,s=new Re,a=new Ke,o=new z_({depthPacking:Cg}),l=new H_,c={},u=t.maxTextureSize,h={[ti]:Gt,[Gt]:ti,[mn]:mn},f=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:HM,fragmentShader:VM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Sn;m.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Kt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rd;let p=this.type;this.render=function(P,w,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;const M=n.getRenderTarget(),v=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),z=n.state;z.setBlending(xi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=p!==qn&&this.type===qn,X=p===qn&&this.type!==qn;for(let q=0,W=P.length;q<W;q++){const j=P[q],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const te=H.getFrameExtents();if(r.multiply(te),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,H.mapSize.y=s.y)),H.map===null||F===!0||X===!0){const ye=this.type!==qn?{minFilter:Ft,magFilter:Ft}:{};H.map!==null&&H.map.dispose(),H.map=new Wi(r.x,r.y,ye),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const de=H.getViewportCount();for(let ye=0;ye<de;ye++){const oe=H.getViewport(ye);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),z.viewport(a),H.updateMatrices(j,ye),i=H.getFrustum(),S(w,R,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===qn&&T(H,R),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(M,v,A)};function T(P,w){const R=e.update(_);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Wi(r.x,r.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(w,null,R,f,_,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(w,null,R,d,_,null)}function E(P,w,R,M){let v=null;const A=R.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(A!==void 0)v=A;else if(v=R.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=v.uuid,F=w.uuid;let X=c[z];X===void 0&&(X={},c[z]=X);let q=X[F];q===void 0&&(q=v.clone(),X[F]=q,w.addEventListener("dispose",C)),v=q}if(v.visible=w.visible,v.wireframe=w.wireframe,M===qn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:h[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const z=n.properties.get(v);z.light=R}return v}function S(P,w,R,M,v){if(P.visible===!1)return;if(P.layers.test(w.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&v===qn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,P.matrixWorld);const F=e.update(P),X=P.material;if(Array.isArray(X)){const q=F.groups;for(let W=0,j=q.length;W<j;W++){const H=q[W],te=X[H.materialIndex];if(te&&te.visible){const de=E(P,te,M,v);P.onBeforeShadow(n,P,w,R,F,de,H),n.renderBufferDirect(R,null,F,de,P,H),P.onAfterShadow(n,P,w,R,F,de,H)}}}else if(X.visible){const q=E(P,X,M,v);P.onBeforeShadow(n,P,w,R,F,q,null),n.renderBufferDirect(R,null,F,q,P,null),P.onAfterShadow(n,P,w,R,F,q,null)}}const z=P.children;for(let F=0,X=z.length;F<X;F++)S(z[F],w,R,M,v)}function C(P){P.target.removeEventListener("dispose",C);for(const R in c){const M=c[R],v=P.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}const WM={[Sl]:El,[Tl]:wl,[bl]:Rl,[wr]:Al,[El]:Sl,[wl]:Tl,[Rl]:bl,[Al]:wr};function XM(n,e){function t(){let I=!1;const le=new Ke;let G=null;const $=new Ke(0,0,0,0);return{setMask:function(fe){G!==fe&&!I&&(n.colorMask(fe,fe,fe,fe),G=fe)},setLocked:function(fe){I=fe},setClear:function(fe,he,Ne,dt,bt){bt===!0&&(fe*=dt,he*=dt,Ne*=dt),le.set(fe,he,Ne,dt),$.equals(le)===!1&&(n.clearColor(fe,he,Ne,dt),$.copy(le))},reset:function(){I=!1,G=null,$.set(-1,0,0,0)}}}function i(){let I=!1,le=!1,G=null,$=null,fe=null;return{setReversed:function(he){if(le!==he){const Ne=e.get("EXT_clip_control");le?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);const dt=fe;fe=null,this.setClear(dt)}le=he},getReversed:function(){return le},setTest:function(he){he?ne(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(he){G!==he&&!I&&(n.depthMask(he),G=he)},setFunc:function(he){if(le&&(he=WM[he]),$!==he){switch(he){case Sl:n.depthFunc(n.NEVER);break;case El:n.depthFunc(n.ALWAYS);break;case Tl:n.depthFunc(n.LESS);break;case wr:n.depthFunc(n.LEQUAL);break;case bl:n.depthFunc(n.EQUAL);break;case Al:n.depthFunc(n.GEQUAL);break;case wl:n.depthFunc(n.GREATER);break;case Rl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=he}},setLocked:function(he){I=he},setClear:function(he){fe!==he&&(le&&(he=1-he),n.clearDepth(he),fe=he)},reset:function(){I=!1,G=null,$=null,fe=null,le=!1}}}function r(){let I=!1,le=null,G=null,$=null,fe=null,he=null,Ne=null,dt=null,bt=null;return{setTest:function(Je){I||(Je?ne(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(Je){le!==Je&&!I&&(n.stencilMask(Je),le=Je)},setFunc:function(Je,cn,Bn){(G!==Je||$!==cn||fe!==Bn)&&(n.stencilFunc(Je,cn,Bn),G=Je,$=cn,fe=Bn)},setOp:function(Je,cn,Bn){(he!==Je||Ne!==cn||dt!==Bn)&&(n.stencilOp(Je,cn,Bn),he=Je,Ne=cn,dt=Bn)},setLocked:function(Je){I=Je},setClear:function(Je){bt!==Je&&(n.clearStencil(Je),bt=Je)},reset:function(){I=!1,le=null,G=null,$=null,fe=null,he=null,Ne=null,dt=null,bt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,T=null,E=null,S=null,C=null,P=null,w=new Le(0,0,0),R=0,M=!1,v=null,A=null,z=null,F=null,X=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=j>=2);let te=null,de={};const ye=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),re=new Ke().fromArray(ye),V=new Ke().fromArray(oe);function Q(I,le,G,$){const fe=new Uint8Array(4),he=n.createTexture();n.bindTexture(I,he),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<G;Ne++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(le+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return he}const se={};se[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),a.setFunc(wr),Ge(!1),We($m),ne(n.CULL_FACE),L(xi);function ne(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function Ee(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function ze(I,le){return h[I]!==le?(n.bindFramebuffer(I,le),h[I]=le,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=le),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=le),!0):!1}function be(I,le){let G=d,$=!1;if(I){G=f.get(le),G===void 0&&(G=[],f.set(le,G));const fe=I.textures;if(G.length!==fe.length||G[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Ne=fe.length;he<Ne;he++)G[he]=n.COLOR_ATTACHMENT0+he;G.length=fe.length,$=!0}}else G[0]!==n.BACK&&(G[0]=n.BACK,$=!0);$&&n.drawBuffers(G)}function ot(I){return m!==I?(n.useProgram(I),m=I,!0):!1}const ft={[Ni]:n.FUNC_ADD,[Qm]:n.FUNC_SUBTRACT,[eg]:n.FUNC_REVERSE_SUBTRACT};ft[tg]=n.MIN,ft[ng]=n.MAX;const Ve={[ig]:n.ZERO,[rg]:n.ONE,[sg]:n.SRC_COLOR,[yl]:n.SRC_ALPHA,[hg]:n.SRC_ALPHA_SATURATE,[cg]:n.DST_COLOR,[og]:n.DST_ALPHA,[ag]:n.ONE_MINUS_SRC_COLOR,[Ml]:n.ONE_MINUS_SRC_ALPHA,[ug]:n.ONE_MINUS_DST_COLOR,[lg]:n.ONE_MINUS_DST_ALPHA,[fg]:n.CONSTANT_COLOR,[dg]:n.ONE_MINUS_CONSTANT_COLOR,[pg]:n.CONSTANT_ALPHA,[mg]:n.ONE_MINUS_CONSTANT_ALPHA};function L(I,le,G,$,fe,he,Ne,dt,bt,Je){if(I===xi){_===!0&&(Ee(n.BLEND),_=!1);return}if(_===!1&&(ne(n.BLEND),_=!0),I!==Jm){if(I!==g||Je!==M){if((p!==Ni||S!==Ni)&&(n.blendEquation(n.FUNC_ADD),p=Ni,S=Ni),Je)switch(I){case Sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Du:n.blendFunc(n.ONE,n.ONE);break;case Iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Du:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,E=null,C=null,P=null,w.set(0,0,0),R=0,g=I,M=Je}return}fe=fe||le,he=he||G,Ne=Ne||$,(le!==p||fe!==S)&&(n.blendEquationSeparate(ft[le],ft[fe]),p=le,S=fe),(G!==T||$!==E||he!==C||Ne!==P)&&(n.blendFuncSeparate(Ve[G],Ve[$],Ve[he],Ve[Ne]),T=G,E=$,C=he,P=Ne),(dt.equals(w)===!1||bt!==R)&&(n.blendColor(dt.r,dt.g,dt.b,bt),w.copy(dt),R=bt),g=I,M=!1}function Zt(I,le){I.side===mn?Ee(n.CULL_FACE):ne(n.CULL_FACE);let G=I.side===Gt;le&&(G=!G),Ge(G),I.blending===Sr&&I.transparent===!1?L(xi):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const $=I.stencilWrite;o.setTest($),$&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),lt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(I){v!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),v=I)}function We(I){ne(n.CULL_FACE),I!==A&&n.cullFace(n.BACK),A=I}function Se(I){I!==z&&(W&&n.lineWidth(I),z=I)}function lt(I,le,G){I?(ne(n.POLYGON_OFFSET_FILL),(F!==le||X!==G)&&(n.polygonOffset(le,G),F=le,X=G)):Ee(n.POLYGON_OFFSET_FILL)}function Me(I){I?ne(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function b(I){I===void 0&&(I=n.TEXTURE0+q-1),te!==I&&(n.activeTexture(I),te=I)}function x(I,le,G){G===void 0&&(te===null?G=n.TEXTURE0+q-1:G=te);let $=de[G];$===void 0&&($={type:void 0,texture:void 0},de[G]=$),($.type!==I||$.texture!==le)&&(te!==G&&(n.activeTexture(G),te=G),n.bindTexture(I,le||se[I]),$.type=I,$.texture=le)}function O(){const I=de[te];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qe(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(I){re.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),re.copy(I))}function _e(I){V.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),V.copy(I))}function Xe(I,le){let G=c.get(le);G===void 0&&(G=new WeakMap,c.set(le,G));let $=G.get(I);$===void 0&&($=n.getUniformBlockIndex(le,I.name),G.set(I,$))}function Fe(I,le){const $=c.get(le).get(I);l.get(le)!==$&&(n.uniformBlockBinding(le,$,I.__bindingPointIndex),l.set(le,$))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},te=null,de={},h={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,T=null,E=null,S=null,C=null,P=null,w=new Le(0,0,0),R=0,M=!1,v=null,A=null,z=null,F=null,X=null,re.set(0,0,n.canvas.width,n.canvas.height),V.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:Ee,bindFramebuffer:ze,drawBuffers:be,useProgram:ot,setBlending:L,setMaterial:Zt,setFlipSided:Ge,setCullFace:We,setLineWidth:Se,setPolygonOffset:lt,setScissorTest:Me,activeTexture:b,bindTexture:x,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:ge,texImage3D:we,updateUBOMapping:Xe,uniformBlockBinding:Fe,texStorage2D:qe,texStorage3D:ee,texSubImage2D:Y,texSubImage3D:xe,compressedTexSubImage2D:ue,compressedTexSubImage3D:me,scissor:Ce,viewport:_e,reset:st}}function qM(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,x){return d?new OffscreenCanvas(b,x):Es("canvas")}function _(b,x,O){let K=1;const Z=Me(b);if((Z.width>O||Z.height>O)&&(K=O/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor(K*Z.width),xe=Math.floor(K*Z.height);h===void 0&&(h=m(Y,xe));const ue=x?m(Y,xe):h;return ue.width=Y,ue.height=xe,ue.getContext("2d").drawImage(b,0,0,Y,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+xe+")."),ue}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function g(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(b,x,O,K,Z=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=x;if(x===n.RED&&(O===n.FLOAT&&(Y=n.R32F),O===n.HALF_FLOAT&&(Y=n.R16F),O===n.UNSIGNED_BYTE&&(Y=n.R8)),x===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.R8UI),O===n.UNSIGNED_SHORT&&(Y=n.R16UI),O===n.UNSIGNED_INT&&(Y=n.R32UI),O===n.BYTE&&(Y=n.R8I),O===n.SHORT&&(Y=n.R16I),O===n.INT&&(Y=n.R32I)),x===n.RG&&(O===n.FLOAT&&(Y=n.RG32F),O===n.HALF_FLOAT&&(Y=n.RG16F),O===n.UNSIGNED_BYTE&&(Y=n.RG8)),x===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RG8UI),O===n.UNSIGNED_SHORT&&(Y=n.RG16UI),O===n.UNSIGNED_INT&&(Y=n.RG32UI),O===n.BYTE&&(Y=n.RG8I),O===n.SHORT&&(Y=n.RG16I),O===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),O===n.UNSIGNED_INT&&(Y=n.RGB32UI),O===n.BYTE&&(Y=n.RGB8I),O===n.SHORT&&(Y=n.RGB16I),O===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),O===n.UNSIGNED_INT&&(Y=n.RGBA32UI),O===n.BYTE&&(Y=n.RGBA8I),O===n.SHORT&&(Y=n.RGBA16I),O===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),x===n.RGBA){const xe=Z?za:He.getTransfer(K);O===n.FLOAT&&(Y=n.RGBA32F),O===n.HALF_FLOAT&&(Y=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Y=xe===nt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(b,x){let O;return b?x===null||x===Gi||x===Lr?O=n.DEPTH24_STENCIL8:x===xn?O=n.DEPTH32F_STENCIL8:x===ys&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gi||x===Lr?O=n.DEPTH_COMPONENT24:x===xn?O=n.DEPTH_COMPONENT32F:x===ys&&(O=n.DEPTH_COMPONENT16),O}function C(b,x){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ft&&b.minFilter!==jt?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function P(b){const x=b.target;x.removeEventListener("dispose",P),R(x),x.isVideoTexture&&u.delete(x)}function w(b){const x=b.target;x.removeEventListener("dispose",w),v(x)}function R(b){const x=i.get(b);if(x.__webglInit===void 0)return;const O=b.source,K=f.get(O);if(K){const Z=K[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(b),Object.keys(K).length===0&&f.delete(O)}i.remove(b)}function M(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const O=b.source,K=f.get(O);delete K[x.__cacheKey],a.memory.textures--}function v(b){const x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let Z=0;Z<x.__webglFramebuffer[K].length;Z++)n.deleteFramebuffer(x.__webglFramebuffer[K][Z]);else n.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)n.deleteFramebuffer(x.__webglFramebuffer[K]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=b.textures;for(let K=0,Z=O.length;K<Z;K++){const Y=i.get(O[K]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(O[K])}i.remove(b)}let A=0;function z(){A=0}function F(){const b=A;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),A+=1,b}function X(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function q(b,x){const O=i.get(b);if(b.isVideoTexture&&Se(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(O,b,x);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+x)}function W(b,x){const O=i.get(b);if(b.version>0&&O.__version!==b.version){V(O,b,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+x)}function j(b,x){const O=i.get(b);if(b.version>0&&O.__version!==b.version){V(O,b,x);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+x)}function H(b,x){const O=i.get(b);if(b.version>0&&O.__version!==b.version){Q(O,b,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+x)}const te={[Pr]:n.REPEAT,[mi]:n.CLAMP_TO_EDGE,[ka]:n.MIRRORED_REPEAT},de={[Ft]:n.NEAREST,[od]:n.NEAREST_MIPMAP_NEAREST,[ls]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[ya]:n.LINEAR_MIPMAP_NEAREST,[Kn]:n.LINEAR_MIPMAP_LINEAR},ye={[Lg]:n.NEVER,[Og]:n.ALWAYS,[Dg]:n.LESS,[xd]:n.LEQUAL,[Ig]:n.EQUAL,[Fg]:n.GEQUAL,[Ng]:n.GREATER,[Ug]:n.NOTEQUAL};function oe(b,x){if(x.type===xn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===jt||x.magFilter===ya||x.magFilter===ls||x.magFilter===Kn||x.minFilter===jt||x.minFilter===ya||x.minFilter===ls||x.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,te[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,te[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,te[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,de[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,de[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ye[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ft||x.minFilter!==ls&&x.minFilter!==Kn||x.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function re(b,x){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",P));const K=x.source;let Z=f.get(K);Z===void 0&&(Z={},f.set(K,Z));const Y=X(x);if(Y!==b.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[Y].usedTimes++;const xe=Z[b.__cacheKey];xe!==void 0&&(Z[b.__cacheKey].usedTimes--,xe.usedTimes===0&&M(x)),b.__cacheKey=Y,b.__webglTexture=Z[Y].texture}return O}function V(b,x,O){let K=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=n.TEXTURE_3D);const Z=re(b,x),Y=x.source;t.bindTexture(K,b.__webglTexture,n.TEXTURE0+O);const xe=i.get(Y);if(Y.version!==xe.__version||Z===!0){t.activeTexture(n.TEXTURE0+O);const ue=He.getPrimaries(He.workingColorSpace),me=x.colorSpace===pi?null:He.getPrimaries(x.colorSpace),qe=x.colorSpace===pi||ue===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ee=_(x.image,!1,r.maxTextureSize);ee=lt(x,ee);const ge=s.convert(x.format,x.colorSpace),we=s.convert(x.type);let Ce=E(x.internalFormat,ge,we,x.colorSpace,x.isVideoTexture);oe(K,x);let _e;const Xe=x.mipmaps,Fe=x.isVideoTexture!==!0,st=xe.__version===void 0||Z===!0,I=Y.dataReady,le=C(x,ee);if(x.isDepthTexture)Ce=S(x.format===Dr,x.type),st&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,Ce,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Ce,ee.width,ee.height,0,ge,we,null));else if(x.isDataTexture)if(Xe.length>0){Fe&&st&&t.texStorage2D(n.TEXTURE_2D,le,Ce,Xe[0].width,Xe[0].height);for(let G=0,$=Xe.length;G<$;G++)_e=Xe[G],Fe?I&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,_e.width,_e.height,ge,we,_e.data):t.texImage2D(n.TEXTURE_2D,G,Ce,_e.width,_e.height,0,ge,we,_e.data);x.generateMipmaps=!1}else Fe?(st&&t.texStorage2D(n.TEXTURE_2D,le,Ce,ee.width,ee.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,ge,we,ee.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,ee.width,ee.height,0,ge,we,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Fe&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Ce,Xe[0].width,Xe[0].height,ee.depth);for(let G=0,$=Xe.length;G<$;G++)if(_e=Xe[G],x.format!==an)if(ge!==null)if(Fe){if(I)if(x.layerUpdates.size>0){const fe=Th(_e.width,_e.height,x.format,x.type);for(const he of x.layerUpdates){const Ne=_e.data.subarray(he*fe/_e.data.BYTES_PER_ELEMENT,(he+1)*fe/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,he,_e.width,_e.height,1,ge,Ne)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,_e.width,_e.height,ee.depth,ge,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,Ce,_e.width,_e.height,ee.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,_e.width,_e.height,ee.depth,ge,we,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,G,Ce,_e.width,_e.height,ee.depth,0,ge,we,_e.data)}else{Fe&&st&&t.texStorage2D(n.TEXTURE_2D,le,Ce,Xe[0].width,Xe[0].height);for(let G=0,$=Xe.length;G<$;G++)_e=Xe[G],x.format!==an?ge!==null?Fe?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,G,Ce,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?I&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,_e.width,_e.height,ge,we,_e.data):t.texImage2D(n.TEXTURE_2D,G,Ce,_e.width,_e.height,0,ge,we,_e.data)}else if(x.isDataArrayTexture)if(Fe){if(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Ce,ee.width,ee.height,ee.depth),I)if(x.layerUpdates.size>0){const G=Th(ee.width,ee.height,x.format,x.type);for(const $ of x.layerUpdates){const fe=ee.data.subarray($*G/ee.data.BYTES_PER_ELEMENT,($+1)*G/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,ge,we,fe)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ge,we,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,ee.width,ee.height,ee.depth,0,ge,we,ee.data);else if(x.isData3DTexture)Fe?(st&&t.texStorage3D(n.TEXTURE_3D,le,Ce,ee.width,ee.height,ee.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ge,we,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,ee.width,ee.height,ee.depth,0,ge,we,ee.data);else if(x.isFramebufferTexture){if(st)if(Fe)t.texStorage2D(n.TEXTURE_2D,le,Ce,ee.width,ee.height);else{let G=ee.width,$=ee.height;for(let fe=0;fe<le;fe++)t.texImage2D(n.TEXTURE_2D,fe,Ce,G,$,0,ge,we,null),G>>=1,$>>=1}}else if(Xe.length>0){if(Fe&&st){const G=Me(Xe[0]);t.texStorage2D(n.TEXTURE_2D,le,Ce,G.width,G.height)}for(let G=0,$=Xe.length;G<$;G++)_e=Xe[G],Fe?I&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,ge,we,_e):t.texImage2D(n.TEXTURE_2D,G,Ce,ge,we,_e);x.generateMipmaps=!1}else if(Fe){if(st){const G=Me(ee);t.texStorage2D(n.TEXTURE_2D,le,Ce,G.width,G.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,we,ee)}else t.texImage2D(n.TEXTURE_2D,0,Ce,ge,we,ee);g(x)&&p(K),xe.__version=Y.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Q(b,x,O){if(x.image.length!==6)return;const K=re(b,x),Z=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+O);const Y=i.get(Z);if(Z.version!==Y.__version||K===!0){t.activeTexture(n.TEXTURE0+O);const xe=He.getPrimaries(He.workingColorSpace),ue=x.colorSpace===pi?null:He.getPrimaries(x.colorSpace),me=x.colorSpace===pi||xe===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const qe=x.isCompressedTexture||x.image[0].isCompressedTexture,ee=x.image[0]&&x.image[0].isDataTexture,ge=[];for(let $=0;$<6;$++)!qe&&!ee?ge[$]=_(x.image[$],!0,r.maxCubemapSize):ge[$]=ee?x.image[$].image:x.image[$],ge[$]=lt(x,ge[$]);const we=ge[0],Ce=s.convert(x.format,x.colorSpace),_e=s.convert(x.type),Xe=E(x.internalFormat,Ce,_e,x.colorSpace),Fe=x.isVideoTexture!==!0,st=Y.__version===void 0||K===!0,I=Z.dataReady;let le=C(x,we);oe(n.TEXTURE_CUBE_MAP,x);let G;if(qe){Fe&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Xe,we.width,we.height);for(let $=0;$<6;$++){G=ge[$].mipmaps;for(let fe=0;fe<G.length;fe++){const he=G[fe];x.format!==an?Ce!==null?Fe?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,0,0,he.width,he.height,Ce,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,Xe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,0,0,he.width,he.height,Ce,_e,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,Xe,he.width,he.height,0,Ce,_e,he.data)}}}else{if(G=x.mipmaps,Fe&&st){G.length>0&&le++;const $=Me(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Xe,$.width,$.height)}for(let $=0;$<6;$++)if(ee){Fe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ge[$].width,ge[$].height,Ce,_e,ge[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xe,ge[$].width,ge[$].height,0,Ce,_e,ge[$].data);for(let fe=0;fe<G.length;fe++){const Ne=G[fe].image[$].image;Fe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,0,0,Ne.width,Ne.height,Ce,_e,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,Xe,Ne.width,Ne.height,0,Ce,_e,Ne.data)}}else{Fe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ce,_e,ge[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xe,Ce,_e,ge[$]);for(let fe=0;fe<G.length;fe++){const he=G[fe];Fe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,0,0,Ce,_e,he.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,Xe,Ce,_e,he.image[$])}}}g(x)&&p(n.TEXTURE_CUBE_MAP),Y.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function se(b,x,O,K,Z,Y){const xe=s.convert(O.format,O.colorSpace),ue=s.convert(O.type),me=E(O.internalFormat,xe,ue,O.colorSpace),qe=i.get(x),ee=i.get(O);if(ee.__renderTarget=x,!qe.__hasExternalTextures){const ge=Math.max(1,x.width>>Y),we=Math.max(1,x.height>>Y);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,Y,me,ge,we,x.depth,0,xe,ue,null):t.texImage2D(Z,Y,me,ge,we,0,xe,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),We(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Z,ee.__webglTexture,0,Ge(x)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,Z,ee.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(b,x,O){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer){const K=x.depthTexture,Z=K&&K.isDepthTexture?K.type:null,Y=S(x.stencilBuffer,Z),xe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=Ge(x);We(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,Y,x.width,x.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,Y,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Y,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,b)}else{const K=x.textures;for(let Z=0;Z<K.length;Z++){const Y=K[Z],xe=s.convert(Y.format,Y.colorSpace),ue=s.convert(Y.type),me=E(Y.internalFormat,xe,ue,Y.colorSpace),qe=Ge(x);O&&We(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,me,x.width,x.height):We(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe,me,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,me,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);const Z=K.__webglTexture,Y=Ge(x);if(x.depthTexture.format===Er)We(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(x.depthTexture.format===Dr)We(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ze(b){const x=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=K}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ee(x.__webglFramebuffer,b)}else if(O){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=n.createRenderbuffer(),ne(x.__webglDepthbuffer[K],b,!1);else{const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ne(x.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,Z)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(b,x,O){const K=i.get(b);x!==void 0&&se(K.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&ze(b)}function ot(b){const x=b.texture,O=i.get(b),K=i.get(x);b.addEventListener("dispose",w);const Z=b.textures,Y=b.isWebGLCubeRenderTarget===!0,xe=Z.length>1;if(xe||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=x.version,a.memory.textures++),Y){O.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ue]=[];for(let me=0;me<x.mipmaps.length;me++)O.__webglFramebuffer[ue][me]=n.createFramebuffer()}else O.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ue=0;ue<x.mipmaps.length;ue++)O.__webglFramebuffer[ue]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(xe)for(let ue=0,me=Z.length;ue<me;ue++){const qe=i.get(Z[ue]);qe.__webglTexture===void 0&&(qe.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&We(b)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ue=0;ue<Z.length;ue++){const me=Z[ue];O.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ue]);const qe=s.convert(me.format,me.colorSpace),ee=s.convert(me.type),ge=E(me.internalFormat,qe,ee,me.colorSpace,b.isXRRenderTarget===!0),we=Ge(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,ge,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,O.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),oe(n.TEXTURE_CUBE_MAP,x);for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)se(O.__webglFramebuffer[ue][me],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else se(O.__webglFramebuffer[ue],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ue=0,me=Z.length;ue<me;ue++){const qe=Z[ue],ee=i.get(qe);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),oe(n.TEXTURE_2D,qe),se(O.__webglFramebuffer,b,qe,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),g(qe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,K.__webglTexture),oe(ue,x),x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)se(O.__webglFramebuffer[me],b,x,n.COLOR_ATTACHMENT0,ue,me);else se(O.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,ue,0);g(x)&&p(ue),t.unbindTexture()}b.depthBuffer&&ze(b)}function ft(b){const x=b.textures;for(let O=0,K=x.length;O<K;O++){const Z=x[O];if(g(Z)){const Y=T(b),xe=i.get(Z).__webglTexture;t.bindTexture(Y,xe),p(Y),t.unbindTexture()}}}const Ve=[],L=[];function Zt(b){if(b.samples>0){if(We(b)===!1){const x=b.textures,O=b.width,K=b.height;let Z=n.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(b),ue=x.length>1;if(ue)for(let me=0;me<x.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let me=0;me<x.length;me++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[me]);const qe=i.get(x[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qe,0)}n.blitFramebuffer(0,0,O,K,0,0,O,K,Z,n.NEAREST),l===!0&&(Ve.length=0,L.length=0,Ve.push(n.COLOR_ATTACHMENT0+me),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ve.push(Y),L.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let me=0;me<x.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,xe.__webglColorRenderbuffer[me]);const qe=i.get(x[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Ge(b){return Math.min(r.maxSamples,b.samples)}function We(b){const x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Se(b){const x=a.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function lt(b,x){const O=b.colorSpace,K=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Pt&&O!==pi&&(He.getTransfer(O)===nt?(K!==an||Z!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function Me(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=be,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=se,this.useMultisampledRTT=We}function YM(n,e){function t(i,r=pi){let s;const a=He.getTransfer(r);if(i===ni)return n.UNSIGNED_BYTE;if(i===Bc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===kc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ud)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ld)return n.BYTE;if(i===cd)return n.SHORT;if(i===ys)return n.UNSIGNED_SHORT;if(i===Oc)return n.INT;if(i===Gi)return n.UNSIGNED_INT;if(i===xn)return n.FLOAT;if(i===Cs)return n.HALF_FLOAT;if(i===hd)return n.ALPHA;if(i===fd)return n.RGB;if(i===an)return n.RGBA;if(i===dd)return n.LUMINANCE;if(i===pd)return n.LUMINANCE_ALPHA;if(i===Er)return n.DEPTH_COMPONENT;if(i===Dr)return n.DEPTH_STENCIL;if(i===zc)return n.RED;if(i===Hc)return n.RED_INTEGER;if(i===md)return n.RG;if(i===Vc)return n.RG_INTEGER;if(i===Gc)return n.RGBA_INTEGER;if(i===Ma||i===Sa||i===Ea||i===Ta)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ma)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ta)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ll||i===Dl||i===Il||i===Nl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ll)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Il)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ul||i===Fl||i===Ol)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ul||i===Fl)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ol)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bl||i===kl||i===zl||i===Hl||i===Vl||i===Gl||i===Wl||i===Xl||i===ql||i===Yl||i===jl||i===Kl||i===$l||i===Zl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ql)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$l)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ba||i===Jl||i===Ql)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ba)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ql)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gd||i===ec||i===tc||i===nc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ba)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ec)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const jM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $M{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new St,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ei({vertexShader:jM,fragmentShader:KM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new ho(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZM extends Ki{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null;const _=new $M,g=t.getContextAttributes();let p=null,T=null;const E=[],S=[],C=new Re;let P=null;const w=new Ut;w.viewport=new Ke;const R=new Ut;R.viewport=new Ke;const M=[w,R],v=new c0;let A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=E[V];return Q===void 0&&(Q=new Wo,E[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=E[V];return Q===void 0&&(Q=new Wo,E[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=E[V];return Q===void 0&&(Q=new Wo,E[V]=Q),Q.getHandSpace()};function F(V){const Q=S.indexOf(V.inputSource);if(Q===-1)return;const se=E[Q];se!==void 0&&(se.update(V.inputSource,V.frame,c||a),se.dispatchEvent({type:V.type,data:V.inputSource}))}function X(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",q);for(let V=0;V<E.length;V++){const Q=S[V];Q!==null&&(S[V]=null,E[V].disconnect(Q))}A=null,z=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,T=null,re.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",X),r.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,ne=null,Ee=null;g.depth&&(Ee=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=g.stencil?Dr:Er,ne=g.stencil?Lr:Gi);const ze={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(ze),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Wi(f.textureWidth,f.textureHeight,{format:an,type:ni,depthTexture:new Ud(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const se={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Wi(d.framebufferWidth,d.framebufferHeight,{format:an,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),re.setContext(r),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(V){for(let Q=0;Q<V.removed.length;Q++){const se=V.removed[Q],ne=S.indexOf(se);ne>=0&&(S[ne]=null,E[ne].disconnect(se))}for(let Q=0;Q<V.added.length;Q++){const se=V.added[Q];let ne=S.indexOf(se);if(ne===-1){for(let ze=0;ze<E.length;ze++)if(ze>=S.length){S.push(se),ne=ze;break}else if(S[ze]===null){S[ze]=se,ne=ze;break}if(ne===-1)break}const Ee=E[ne];Ee&&Ee.connect(se)}}const W=new D,j=new D;function H(V,Q,se){W.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(se.matrixWorld);const ne=W.distanceTo(j),Ee=Q.projectionMatrix.elements,ze=se.projectionMatrix.elements,be=Ee[14]/(Ee[10]-1),ot=Ee[14]/(Ee[10]+1),ft=(Ee[9]+1)/Ee[5],Ve=(Ee[9]-1)/Ee[5],L=(Ee[8]-1)/Ee[0],Zt=(ze[8]+1)/ze[0],Ge=be*L,We=be*Zt,Se=ne/(-L+Zt),lt=Se*-L;if(Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(lt),V.translateZ(Se),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ee[10]===-1)V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Me=be+Se,b=ot+Se,x=Ge-lt,O=We+(ne-lt),K=ft*ot/b*Me,Z=Ve*ot/b*Me;V.projectionMatrix.makePerspective(x,O,K,Z,Me,b),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function te(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let Q=V.near,se=V.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(se=_.depthFar)),v.near=R.near=w.near=Q,v.far=R.far=w.far=se,(A!==v.near||z!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,z=v.far),w.layers.mask=V.layers.mask|2,R.layers.mask=V.layers.mask|4,v.layers.mask=w.layers.mask|R.layers.mask;const ne=V.parent,Ee=v.cameras;te(v,ne);for(let ze=0;ze<Ee.length;ze++)te(Ee[ze],ne);Ee.length===2?H(v,w,R):v.projectionMatrix.copy(w.projectionMatrix),de(V,v,ne)};function de(V,Q,se){se===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(se.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ir*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ye=null;function oe(V,Q){if(u=Q.getViewerPose(c||a),m=Q,u!==null){const se=u.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let ne=!1;se.length!==v.cameras.length&&(v.cameras.length=0,ne=!0);for(let be=0;be<se.length;be++){const ot=se[be];let ft=null;if(d!==null)ft=d.getViewport(ot);else{const L=h.getViewSubImage(f,ot);ft=L.viewport,be===0&&(e.setRenderTargetTextures(T,L.colorTexture,f.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(T))}let Ve=M[be];Ve===void 0&&(Ve=new Ut,Ve.layers.enable(be),Ve.viewport=new Ke,M[be]=Ve),Ve.matrix.fromArray(ot.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(ot.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ft.x,ft.y,ft.width,ft.height),be===0&&(v.matrix.copy(Ve.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ne===!0&&v.cameras.push(Ve)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const be=h.getDepthInformation(se[0]);be&&be.isValid&&be.texture&&_.init(e,be,r.renderState)}}for(let se=0;se<E.length;se++){const ne=S[se],Ee=E[se];ne!==null&&Ee!==void 0&&Ee.update(ne,Q,c||a)}ye&&ye(V,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),m=null}const re=new Bd;re.setAnimationLoop(oe),this.setAnimationLoop=function(V){ye=V},this.dispose=function(){}}}const Li=new Dn,JM=new Ie;function QM(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Rd(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,T,E,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,S)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,T,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Gt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Gt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const T=e.get(p),E=T.envMap,S=T.envMapRotation;E&&(g.envMap.value=E,Li.copy(S),Li.x*=-1,Li.y*=-1,Li.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),g.envMapRotation.value.setFromMatrix4(JM.makeRotationFromEuler(Li)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,T,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=E*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,T){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const T=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eS(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const S=E.program;i.uniformBlockBinding(T,S)}function c(T,E){let S=r[T.id];S===void 0&&(m(T),S=u(T),r[T.id]=S,T.addEventListener("dispose",g));const C=E.program;i.updateUBOMapping(T,C);const P=e.render.frame;s[T.id]!==P&&(f(T),s[T.id]=P)}function u(T){const E=h();T.__bindingPointIndex=E;const S=n.createBuffer(),C=T.__size,P=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,S),S}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const E=r[T.id],S=T.uniforms,C=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let P=0,w=S.length;P<w;P++){const R=Array.isArray(S[P])?S[P]:[S[P]];for(let M=0,v=R.length;M<v;M++){const A=R[M];if(d(A,P,M,C)===!0){const z=A.__offset,F=Array.isArray(A.value)?A.value:[A.value];let X=0;for(let q=0;q<F.length;q++){const W=F[q],j=_(W);typeof W=="number"||typeof W=="boolean"?(A.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,z+X,A.__data)):W.isMatrix3?(A.__data[0]=W.elements[0],A.__data[1]=W.elements[1],A.__data[2]=W.elements[2],A.__data[3]=0,A.__data[4]=W.elements[3],A.__data[5]=W.elements[4],A.__data[6]=W.elements[5],A.__data[7]=0,A.__data[8]=W.elements[6],A.__data[9]=W.elements[7],A.__data[10]=W.elements[8],A.__data[11]=0):(W.toArray(A.__data,X),X+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,E,S,C){const P=T.value,w=E+"_"+S;if(C[w]===void 0)return typeof P=="number"||typeof P=="boolean"?C[w]=P:C[w]=P.clone(),!0;{const R=C[w];if(typeof P=="number"||typeof P=="boolean"){if(R!==P)return C[w]=P,!0}else if(R.equals(P)===!1)return R.copy(P),!0}return!1}function m(T){const E=T.uniforms;let S=0;const C=16;for(let w=0,R=E.length;w<R;w++){const M=Array.isArray(E[w])?E[w]:[E[w]];for(let v=0,A=M.length;v<A;v++){const z=M[v],F=Array.isArray(z.value)?z.value:[z.value];for(let X=0,q=F.length;X<q;X++){const W=F[X],j=_(W),H=S%C,te=H%j.boundary,de=H+te;S+=te,de!==0&&C-de<j.storage&&(S+=C-de),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=j.storage}}}const P=S%C;return P>0&&(S+=C-P),T.__size=S,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function g(T){const E=T.target;E.removeEventListener("dispose",g);const S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class tS{constructor(e={}){const{canvas:t=e_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this.toneMapping=yi,this.toneMappingExposure=1;const S=this;let C=!1,P=0,w=0,R=null,M=-1,v=null;const A=new Ke,z=new Ke;let F=null;const X=new Le(0);let q=0,W=t.width,j=t.height,H=1,te=null,de=null;const ye=new Ke(0,0,W,j),oe=new Ke(0,0,W,j);let re=!1;const V=new Yc;let Q=!1,se=!1;this.transmissionResolutionScale=1;const ne=new Ie,Ee=new Ie,ze=new D,be=new Ke,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Ve(){return R===null?H:1}let L=i;function Zt(y,N){return t.getContext(y,N)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fc}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",he,!1),L===null){const N="webgl2";if(L=Zt(N,y),L===null)throw Zt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ge,We,Se,lt,Me,b,x,O,K,Z,Y,xe,ue,me,qe,ee,ge,we,Ce,_e,Xe,Fe,st,I;function le(){Ge=new hy(L),Ge.init(),Fe=new YM(L,Ge),We=new sy(L,Ge,e,Fe),Se=new XM(L,Ge),We.reverseDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),lt=new py(L),Me=new DM,b=new qM(L,Ge,Se,Me,We,Fe,lt),x=new oy(S),O=new uy(S),K=new M0(L),st=new iy(L,K),Z=new fy(L,K,lt,st),Y=new gy(L,Z,K,lt),Ce=new my(L,We,b),ee=new ay(Me),xe=new LM(S,x,O,Ge,We,st,ee),ue=new QM(S,Me),me=new NM,qe=new zM(Ge),we=new ny(S,x,O,Se,Y,d,l),ge=new GM(S,Y,We),I=new eS(L,lt,We,Se),_e=new ry(L,Ge,lt),Xe=new dy(L,Ge,lt),lt.programs=xe.programs,S.capabilities=We,S.extensions=Ge,S.properties=Me,S.renderLists=me,S.shadowMap=ge,S.state=Se,S.info=lt}le();const G=new ZM(S,L);this.xr=G,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=Ge.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ge.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(W,j,!1))},this.getSize=function(y){return y.set(W,j)},this.setSize=function(y,N,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,j=N,t.width=Math.floor(y*H),t.height=Math.floor(N*H),B===!0&&(t.style.width=y+"px",t.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(W*H,j*H).floor()},this.setDrawingBufferSize=function(y,N,B){W=y,j=N,H=B,t.width=Math.floor(y*B),t.height=Math.floor(N*B),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(A)},this.getViewport=function(y){return y.copy(ye)},this.setViewport=function(y,N,B,k){y.isVector4?ye.set(y.x,y.y,y.z,y.w):ye.set(y,N,B,k),Se.viewport(A.copy(ye).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(oe)},this.setScissor=function(y,N,B,k){y.isVector4?oe.set(y.x,y.y,y.z,y.w):oe.set(y,N,B,k),Se.scissor(z.copy(oe).multiplyScalar(H).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(y){Se.setScissorTest(re=y)},this.setOpaqueSort=function(y){te=y},this.setTransparentSort=function(y){de=y},this.getClearColor=function(y){return y.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(y=!0,N=!0,B=!0){let k=0;if(y){let U=!1;if(R!==null){const J=R.texture.format;U=J===Gc||J===Vc||J===Hc}if(U){const J=R.texture.type,ce=J===ni||J===Gi||J===ys||J===Lr||J===Bc||J===kc,pe=we.getClearColor(),ve=we.getClearAlpha(),Pe=pe.r,De=pe.g,Te=pe.b;ce?(m[0]=Pe,m[1]=De,m[2]=Te,m[3]=ve,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=Pe,_[1]=De,_[2]=Te,_[3]=ve,L.clearBufferiv(L.COLOR,0,_))}else k|=L.COLOR_BUFFER_BIT}N&&(k|=L.DEPTH_BUFFER_BIT),B&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",he,!1),we.dispose(),me.dispose(),qe.dispose(),Me.dispose(),x.dispose(),O.dispose(),Y.dispose(),st.dispose(),I.dispose(),xe.dispose(),G.dispose(),G.removeEventListener("sessionstart",uu),G.removeEventListener("sessionend",hu),Ti.stop()};function $(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const y=lt.autoReset,N=ge.enabled,B=ge.autoUpdate,k=ge.needsUpdate,U=ge.type;le(),lt.autoReset=y,ge.enabled=N,ge.autoUpdate=B,ge.needsUpdate=k,ge.type=U}function he(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ne(y){const N=y.target;N.removeEventListener("dispose",Ne),dt(N)}function dt(y){bt(y),Me.remove(y)}function bt(y){const N=Me.get(y).programs;N!==void 0&&(N.forEach(function(B){xe.releaseProgram(B)}),y.isShaderMaterial&&xe.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,B,k,U,J){N===null&&(N=ot);const ce=U.isMesh&&U.matrixWorld.determinant()<0,pe=Tp(y,N,B,k,U);Se.setMaterial(k,ce);let ve=B.index,Pe=1;if(k.wireframe===!0){if(ve=Z.getWireframeAttribute(B),ve===void 0)return;Pe=2}const De=B.drawRange,Te=B.attributes.position;let Ye=De.start*Pe,$e=(De.start+De.count)*Pe;J!==null&&(Ye=Math.max(Ye,J.start*Pe),$e=Math.min($e,(J.start+J.count)*Pe)),ve!==null?(Ye=Math.max(Ye,0),$e=Math.min($e,ve.count)):Te!=null&&(Ye=Math.max(Ye,0),$e=Math.min($e,Te.count));const mt=$e-Ye;if(mt<0||mt===1/0)return;st.setup(U,k,pe,B,ve);let pt,je=_e;if(ve!==null&&(pt=K.get(ve),je=Xe,je.setIndex(pt)),U.isMesh)k.wireframe===!0?(Se.setLineWidth(k.wireframeLinewidth*Ve()),je.setMode(L.LINES)):je.setMode(L.TRIANGLES);else if(U.isLine){let Ae=k.linewidth;Ae===void 0&&(Ae=1),Se.setLineWidth(Ae*Ve()),U.isLineSegments?je.setMode(L.LINES):U.isLineLoop?je.setMode(L.LINE_LOOP):je.setMode(L.LINE_STRIP)}else U.isPoints?je.setMode(L.POINTS):U.isSprite&&je.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)je.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ae=U._multiDrawStarts,Et=U._multiDrawCounts,Ze=U._multiDrawCount,un=ve?K.get(ve).bytesPerElement:1,Zi=Me.get(k).currentProgram.getUniforms();for(let Wt=0;Wt<Ze;Wt++)Zi.setValue(L,"_gl_DrawID",Wt),je.render(Ae[Wt]/un,Et[Wt])}else if(U.isInstancedMesh)je.renderInstances(Ye,mt,U.count);else if(B.isInstancedBufferGeometry){const Ae=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Et=Math.min(B.instanceCount,Ae);je.renderInstances(Ye,mt,Et)}else je.render(Ye,mt)};function Je(y,N,B){y.transparent===!0&&y.side===mn&&y.forceSinglePass===!1?(y.side=Gt,y.needsUpdate=!0,Fs(y,N,B),y.side=ti,y.needsUpdate=!0,Fs(y,N,B),y.side=mn):Fs(y,N,B)}this.compile=function(y,N,B=null){B===null&&(B=y),p=qe.get(B),p.init(N),E.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),y!==B&&y.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const k=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const J=U.material;if(J)if(Array.isArray(J))for(let ce=0;ce<J.length;ce++){const pe=J[ce];Je(pe,B,U),k.add(pe)}else Je(J,B,U),k.add(J)}),E.pop(),p=null,k},this.compileAsync=function(y,N,B=null){const k=this.compile(y,N,B);return new Promise(U=>{function J(){if(k.forEach(function(ce){Me.get(ce).currentProgram.isReady()&&k.delete(ce)}),k.size===0){U(y);return}setTimeout(J,10)}Ge.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let cn=null;function Bn(y){cn&&cn(y)}function uu(){Ti.stop()}function hu(){Ti.start()}const Ti=new Bd;Ti.setAnimationLoop(Bn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(y){cn=y,G.setAnimationLoop(y),y===null?Ti.stop():Ti.start()},G.addEventListener("sessionstart",uu),G.addEventListener("sessionend",hu),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(N),N=G.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,N,R),p=qe.get(y,E.length),p.init(N),E.push(p),Ee.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),V.setFromProjectionMatrix(Ee),se=this.localClippingEnabled,Q=ee.init(this.clippingPlanes,se),g=me.get(y,T.length),g.init(),T.push(g),G.enabled===!0&&G.isPresenting===!0){const J=S.xr.getDepthSensingMesh();J!==null&&xo(J,N,-1/0,S.sortObjects)}xo(y,N,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(te,de),ft=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,ft&&we.addToRenderList(g,y),this.info.render.frame++,Q===!0&&ee.beginShadows();const B=p.state.shadowsArray;ge.render(B,y,N),Q===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=g.opaque,U=g.transmissive;if(p.setupLights(),N.isArrayCamera){const J=N.cameras;if(U.length>0)for(let ce=0,pe=J.length;ce<pe;ce++){const ve=J[ce];du(k,U,y,ve)}ft&&we.render(y);for(let ce=0,pe=J.length;ce<pe;ce++){const ve=J[ce];fu(g,y,ve,ve.viewport)}}else U.length>0&&du(k,U,y,N),ft&&we.render(y),fu(g,y,N);R!==null&&w===0&&(b.updateMultisampleRenderTarget(R),b.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(S,y,N),st.resetDefaultState(),M=-1,v=null,E.pop(),E.length>0?(p=E[E.length-1],Q===!0&&ee.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?g=T[T.length-1]:g=null};function xo(y,N,B,k){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||V.intersectsSprite(y)){k&&be.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ee);const ce=Y.update(y),pe=y.material;pe.visible&&g.push(y,ce,pe,B,be.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||V.intersectsObject(y))){const ce=Y.update(y),pe=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),be.copy(y.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),be.copy(ce.boundingSphere.center)),be.applyMatrix4(y.matrixWorld).applyMatrix4(Ee)),Array.isArray(pe)){const ve=ce.groups;for(let Pe=0,De=ve.length;Pe<De;Pe++){const Te=ve[Pe],Ye=pe[Te.materialIndex];Ye&&Ye.visible&&g.push(y,ce,Ye,B,be.z,Te)}}else pe.visible&&g.push(y,ce,pe,B,be.z,null)}}const J=y.children;for(let ce=0,pe=J.length;ce<pe;ce++)xo(J[ce],N,B,k)}function fu(y,N,B,k){const U=y.opaque,J=y.transmissive,ce=y.transparent;p.setupLightsView(B),Q===!0&&ee.setGlobalState(S.clippingPlanes,B),k&&Se.viewport(A.copy(k)),U.length>0&&Us(U,N,B),J.length>0&&Us(J,N,B),ce.length>0&&Us(ce,N,B),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function du(y,N,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Wi(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Cs:ni,minFilter:Kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace}));const J=p.state.transmissionRenderTarget[k.id],ce=k.viewport||A;J.setSize(ce.z*S.transmissionResolutionScale,ce.w*S.transmissionResolutionScale);const pe=S.getRenderTarget();S.setRenderTarget(J),S.getClearColor(X),q=S.getClearAlpha(),q<1&&S.setClearColor(16777215,.5),S.clear(),ft&&we.render(B);const ve=S.toneMapping;S.toneMapping=yi;const Pe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),Q===!0&&ee.setGlobalState(S.clippingPlanes,k),Us(y,B,k),b.updateMultisampleRenderTarget(J),b.updateRenderTargetMipmap(J),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Te=0,Ye=N.length;Te<Ye;Te++){const $e=N[Te],mt=$e.object,pt=$e.geometry,je=$e.material,Ae=$e.group;if(je.side===mn&&mt.layers.test(k.layers)){const Et=je.side;je.side=Gt,je.needsUpdate=!0,pu(mt,B,k,pt,je,Ae),je.side=Et,je.needsUpdate=!0,De=!0}}De===!0&&(b.updateMultisampleRenderTarget(J),b.updateRenderTargetMipmap(J))}S.setRenderTarget(pe),S.setClearColor(X,q),Pe!==void 0&&(k.viewport=Pe),S.toneMapping=ve}function Us(y,N,B){const k=N.isScene===!0?N.overrideMaterial:null;for(let U=0,J=y.length;U<J;U++){const ce=y[U],pe=ce.object,ve=ce.geometry,Pe=k===null?ce.material:k,De=ce.group;pe.layers.test(B.layers)&&pu(pe,N,B,ve,Pe,De)}}function pu(y,N,B,k,U,J){y.onBeforeRender(S,N,B,k,U,J),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(S,N,B,k,y,J),U.transparent===!0&&U.side===mn&&U.forceSinglePass===!1?(U.side=Gt,U.needsUpdate=!0,S.renderBufferDirect(B,N,k,U,y,J),U.side=ti,U.needsUpdate=!0,S.renderBufferDirect(B,N,k,U,y,J),U.side=mn):S.renderBufferDirect(B,N,k,U,y,J),y.onAfterRender(S,N,B,k,U,J)}function Fs(y,N,B){N.isScene!==!0&&(N=ot);const k=Me.get(y),U=p.state.lights,J=p.state.shadowsArray,ce=U.state.version,pe=xe.getParameters(y,U.state,J,N,B),ve=xe.getProgramCacheKey(pe);let Pe=k.programs;k.environment=y.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(y.isMeshStandardMaterial?O:x).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Pe===void 0&&(y.addEventListener("dispose",Ne),Pe=new Map,k.programs=Pe);let De=Pe.get(ve);if(De!==void 0){if(k.currentProgram===De&&k.lightsStateVersion===ce)return gu(y,pe),De}else pe.uniforms=xe.getUniforms(y),y.onBeforeCompile(pe,S),De=xe.acquireProgram(pe,ve),Pe.set(ve,De),k.uniforms=pe.uniforms;const Te=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Te.clippingPlanes=ee.uniform),gu(y,pe),k.needsLights=Ap(y),k.lightsStateVersion=ce,k.needsLights&&(Te.ambientLightColor.value=U.state.ambient,Te.lightProbe.value=U.state.probe,Te.directionalLights.value=U.state.directional,Te.directionalLightShadows.value=U.state.directionalShadow,Te.spotLights.value=U.state.spot,Te.spotLightShadows.value=U.state.spotShadow,Te.rectAreaLights.value=U.state.rectArea,Te.ltc_1.value=U.state.rectAreaLTC1,Te.ltc_2.value=U.state.rectAreaLTC2,Te.pointLights.value=U.state.point,Te.pointLightShadows.value=U.state.pointShadow,Te.hemisphereLights.value=U.state.hemi,Te.directionalShadowMap.value=U.state.directionalShadowMap,Te.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Te.spotShadowMap.value=U.state.spotShadowMap,Te.spotLightMatrix.value=U.state.spotLightMatrix,Te.spotLightMap.value=U.state.spotLightMap,Te.pointShadowMap.value=U.state.pointShadowMap,Te.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=De,k.uniformsList=null,De}function mu(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=Aa.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function gu(y,N){const B=Me.get(y);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Tp(y,N,B,k,U){N.isScene!==!0&&(N=ot),b.resetTextureUnits();const J=N.fog,ce=k.isMeshStandardMaterial?N.environment:null,pe=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Pt,ve=(k.isMeshStandardMaterial?O:x).get(k.envMap||ce),Pe=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,De=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Te=!!B.morphAttributes.position,Ye=!!B.morphAttributes.normal,$e=!!B.morphAttributes.color;let mt=yi;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(mt=S.toneMapping);const pt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,je=pt!==void 0?pt.length:0,Ae=Me.get(k),Et=p.state.lights;if(Q===!0&&(se===!0||y!==v)){const Lt=y===v&&k.id===M;ee.setState(k,y,Lt)}let Ze=!1;k.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Et.state.version||Ae.outputColorSpace!==pe||U.isBatchedMesh&&Ae.batching===!1||!U.isBatchedMesh&&Ae.batching===!0||U.isBatchedMesh&&Ae.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ae.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ae.instancing===!1||!U.isInstancedMesh&&Ae.instancing===!0||U.isSkinnedMesh&&Ae.skinning===!1||!U.isSkinnedMesh&&Ae.skinning===!0||U.isInstancedMesh&&Ae.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ae.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ae.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ae.instancingMorph===!1&&U.morphTexture!==null||Ae.envMap!==ve||k.fog===!0&&Ae.fog!==J||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ee.numPlanes||Ae.numIntersection!==ee.numIntersection)||Ae.vertexAlphas!==Pe||Ae.vertexTangents!==De||Ae.morphTargets!==Te||Ae.morphNormals!==Ye||Ae.morphColors!==$e||Ae.toneMapping!==mt||Ae.morphTargetsCount!==je)&&(Ze=!0):(Ze=!0,Ae.__version=k.version);let un=Ae.currentProgram;Ze===!0&&(un=Fs(k,N,U));let Zi=!1,Wt=!1,Kr=!1;const ut=un.getUniforms(),Jt=Ae.uniforms;if(Se.useProgram(un.program)&&(Zi=!0,Wt=!0,Kr=!0),k.id!==M&&(M=k.id,Wt=!0),Zi||v!==y){Se.buffers.depth.getReversed()?(ne.copy(y.projectionMatrix),n_(ne),i_(ne),ut.setValue(L,"projectionMatrix",ne)):ut.setValue(L,"projectionMatrix",y.projectionMatrix),ut.setValue(L,"viewMatrix",y.matrixWorldInverse);const Ot=ut.map.cameraPosition;Ot!==void 0&&Ot.setValue(L,ze.setFromMatrixPosition(y.matrixWorld)),We.logarithmicDepthBuffer&&ut.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ut.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,Wt=!0,Kr=!0)}if(U.isSkinnedMesh){ut.setOptional(L,U,"bindMatrix"),ut.setOptional(L,U,"bindMatrixInverse");const Lt=U.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),ut.setValue(L,"boneTexture",Lt.boneTexture,b))}U.isBatchedMesh&&(ut.setOptional(L,U,"batchingTexture"),ut.setValue(L,"batchingTexture",U._matricesTexture,b),ut.setOptional(L,U,"batchingIdTexture"),ut.setValue(L,"batchingIdTexture",U._indirectTexture,b),ut.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&ut.setValue(L,"batchingColorTexture",U._colorsTexture,b));const Qt=B.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&Ce.update(U,B,un),(Wt||Ae.receiveShadow!==U.receiveShadow)&&(Ae.receiveShadow=U.receiveShadow,ut.setValue(L,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Jt.envMap.value=ve,Jt.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(Jt.envMapIntensity.value=N.environmentIntensity),Wt&&(ut.setValue(L,"toneMappingExposure",S.toneMappingExposure),Ae.needsLights&&bp(Jt,Kr),J&&k.fog===!0&&ue.refreshFogUniforms(Jt,J),ue.refreshMaterialUniforms(Jt,k,H,j,p.state.transmissionRenderTarget[y.id]),Aa.upload(L,mu(Ae),Jt,b)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Aa.upload(L,mu(Ae),Jt,b),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ut.setValue(L,"center",U.center),ut.setValue(L,"modelViewMatrix",U.modelViewMatrix),ut.setValue(L,"normalMatrix",U.normalMatrix),ut.setValue(L,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Lt=k.uniformsGroups;for(let Ot=0,yo=Lt.length;Ot<yo;Ot++){const bi=Lt[Ot];I.update(bi,un),I.bind(bi,un)}}return un}function bp(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Ap(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,N,B){Me.get(y.texture).__webglTexture=N,Me.get(y.depthTexture).__webglTexture=B;const k=Me.get(y);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,N){const B=Me.get(y);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0};const wp=L.createFramebuffer();this.setRenderTarget=function(y,N=0,B=0){R=y,P=N,w=B;let k=!0,U=null,J=!1,ce=!1;if(y){const ve=Me.get(y);if(ve.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(L.FRAMEBUFFER,null),k=!1;else if(ve.__webglFramebuffer===void 0)b.setupRenderTarget(y);else if(ve.__hasExternalTextures)b.rebindTextures(y,Me.get(y.texture).__webglTexture,Me.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Te=y.depthTexture;if(ve.__boundDepthTexture!==Te){if(Te!==null&&Me.has(Te)&&(y.width!==Te.image.width||y.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(y)}}const Pe=y.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ce=!0);const De=Me.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(De[N])?U=De[N][B]:U=De[N],J=!0):y.samples>0&&b.useMultisampledRTT(y)===!1?U=Me.get(y).__webglMultisampledFramebuffer:Array.isArray(De)?U=De[B]:U=De,A.copy(y.viewport),z.copy(y.scissor),F=y.scissorTest}else A.copy(ye).multiplyScalar(H).floor(),z.copy(oe).multiplyScalar(H).floor(),F=re;if(B!==0&&(U=wp),Se.bindFramebuffer(L.FRAMEBUFFER,U)&&k&&Se.drawBuffers(y,U),Se.viewport(A),Se.scissor(z),Se.setScissorTest(F),J){const ve=Me.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,B)}else if(ce){const ve=Me.get(y.texture),Pe=N;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ve.__webglTexture,B,Pe)}else if(y!==null&&B!==0){const ve=Me.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ve.__webglTexture,B)}M=-1},this.readRenderTargetPixels=function(y,N,B,k,U,J,ce){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ce!==void 0&&(pe=pe[ce]),pe){Se.bindFramebuffer(L.FRAMEBUFFER,pe);try{const ve=y.texture,Pe=ve.format,De=ve.type;if(!We.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-k&&B>=0&&B<=y.height-U&&L.readPixels(N,B,k,U,Fe.convert(Pe),Fe.convert(De),J)}finally{const ve=R!==null?Me.get(R).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(y,N,B,k,U,J,ce){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ce!==void 0&&(pe=pe[ce]),pe){const ve=y.texture,Pe=ve.format,De=ve.type;if(!We.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=y.width-k&&B>=0&&B<=y.height-U){Se.bindFramebuffer(L.FRAMEBUFFER,pe);const Te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.bufferData(L.PIXEL_PACK_BUFFER,J.byteLength,L.STREAM_READ),L.readPixels(N,B,k,U,Fe.convert(Pe),Fe.convert(De),0);const Ye=R!==null?Me.get(R).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,Ye);const $e=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await t_(L,$e,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,J),L.deleteBuffer(Te),L.deleteSync($e),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,N=null,B=0){y.isTexture!==!0&&(gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,y=arguments[1]);const k=Math.pow(2,-B),U=Math.floor(y.image.width*k),J=Math.floor(y.image.height*k),ce=N!==null?N.x:0,pe=N!==null?N.y:0;b.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,ce,pe,U,J),Se.unbindTexture()};const Rp=L.createFramebuffer(),Cp=L.createFramebuffer();this.copyTextureToTexture=function(y,N,B=null,k=null,U=0,J=null){y.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1],N=arguments[2],J=arguments[3]||0,B=null),J===null&&(U!==0?(gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=U,U=0):J=0);let ce,pe,ve,Pe,De,Te,Ye,$e,mt;const pt=y.isCompressedTexture?y.mipmaps[J]:y.image;if(B!==null)ce=B.max.x-B.min.x,pe=B.max.y-B.min.y,ve=B.isBox3?B.max.z-B.min.z:1,Pe=B.min.x,De=B.min.y,Te=B.isBox3?B.min.z:0;else{const Qt=Math.pow(2,-U);ce=Math.floor(pt.width*Qt),pe=Math.floor(pt.height*Qt),y.isDataArrayTexture?ve=pt.depth:y.isData3DTexture?ve=Math.floor(pt.depth*Qt):ve=1,Pe=0,De=0,Te=0}k!==null?(Ye=k.x,$e=k.y,mt=k.z):(Ye=0,$e=0,mt=0);const je=Fe.convert(N.format),Ae=Fe.convert(N.type);let Et;N.isData3DTexture?(b.setTexture3D(N,0),Et=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(b.setTexture2DArray(N,0),Et=L.TEXTURE_2D_ARRAY):(b.setTexture2D(N,0),Et=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Ze=L.getParameter(L.UNPACK_ROW_LENGTH),un=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Zi=L.getParameter(L.UNPACK_SKIP_PIXELS),Wt=L.getParameter(L.UNPACK_SKIP_ROWS),Kr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pe),L.pixelStorei(L.UNPACK_SKIP_ROWS,De),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Te);const ut=y.isDataArrayTexture||y.isData3DTexture,Jt=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const Qt=Me.get(y),Lt=Me.get(N),Ot=Me.get(Qt.__renderTarget),yo=Me.get(Lt.__renderTarget);Se.bindFramebuffer(L.READ_FRAMEBUFFER,Ot.__webglFramebuffer),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,yo.__webglFramebuffer);for(let bi=0;bi<ve;bi++)ut&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.get(y).__webglTexture,U,Te+bi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.get(N).__webglTexture,J,mt+bi)),L.blitFramebuffer(Pe,De,ce,pe,Ye,$e,ce,pe,L.DEPTH_BUFFER_BIT,L.NEAREST);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||Me.has(y)){const Qt=Me.get(y),Lt=Me.get(N);Se.bindFramebuffer(L.READ_FRAMEBUFFER,Rp),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,Cp);for(let Ot=0;Ot<ve;Ot++)ut?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Qt.__webglTexture,U,Te+Ot):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Qt.__webglTexture,U),Jt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Lt.__webglTexture,J,mt+Ot):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Lt.__webglTexture,J),U!==0?L.blitFramebuffer(Pe,De,ce,pe,Ye,$e,ce,pe,L.COLOR_BUFFER_BIT,L.NEAREST):Jt?L.copyTexSubImage3D(Et,J,Ye,$e,mt+Ot,Pe,De,ce,pe):L.copyTexSubImage2D(Et,J,Ye,$e,Pe,De,ce,pe);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Jt?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(Et,J,Ye,$e,mt,ce,pe,ve,je,Ae,pt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Et,J,Ye,$e,mt,ce,pe,ve,je,pt.data):L.texSubImage3D(Et,J,Ye,$e,mt,ce,pe,ve,je,Ae,pt):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,J,Ye,$e,ce,pe,je,Ae,pt.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,J,Ye,$e,pt.width,pt.height,je,pt.data):L.texSubImage2D(L.TEXTURE_2D,J,Ye,$e,ce,pe,je,Ae,pt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ze),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,un),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Zi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Kr),J===0&&N.generateMipmaps&&L.generateMipmap(Et),Se.unbindTexture()},this.copyTextureToTexture3D=function(y,N,B=null,k=null,U=0){return y.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,y=arguments[2],N=arguments[3],U=arguments[4]||0),gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,N,B,k,U)},this.initRenderTarget=function(y){Me.get(y).__webglFramebuffer===void 0&&b.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),Se.unbindTexture()},this.resetState=function(){P=0,w=0,R=null,Se.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}}function wa(n,e){return n==null||e==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function nS(n,e){return n==null||e==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function Gd(n){let e,t,i;n.length!==2?(e=wa,t=(o,l)=>wa(n(o),l),i=(o,l)=>n(o)-l):(e=n===wa||n===nS?n:iS,t=n,i=n);function r(o,l,c=0,u=o.length){if(c<u){if(e(l,l)!==0)return u;do{const h=c+u>>>1;t(o[h],l)<0?c=h+1:u=h}while(c<u)}return c}function s(o,l,c=0,u=o.length){if(c<u){if(e(l,l)!==0)return u;do{const h=c+u>>>1;t(o[h],l)<=0?c=h+1:u=h}while(c<u)}return c}function a(o,l,c=0,u=o.length){const h=r(o,l,c,u-1);return h>c&&i(o[h-1],l)>-i(o[h],l)?h-1:h}return{left:r,center:a,right:s}}function iS(){return 0}function rS(n){return n===null?NaN:+n}const sS=Gd(wa),aS=sS.right;Gd(rS).center;const oS=Math.sqrt(50),lS=Math.sqrt(10),cS=Math.sqrt(2);function Xa(n,e,t){const i=(e-n)/Math.max(0,t),r=Math.floor(Math.log10(i)),s=i/Math.pow(10,r),a=s>=oS?10:s>=lS?5:s>=cS?2:1;let o,l,c;return r<0?(c=Math.pow(10,-r)/a,o=Math.round(n*c),l=Math.round(e*c),o/c<n&&++o,l/c>e&&--l,c=-c):(c=Math.pow(10,r)*a,o=Math.round(n/c),l=Math.round(e/c),o*c<n&&++o,l*c>e&&--l),l<o&&.5<=t&&t<2?Xa(n,e,t*2):[o,l,c]}function uS(n,e,t){if(e=+e,n=+n,t=+t,!(t>0))return[];if(n===e)return[n];const i=e<n,[r,s,a]=i?Xa(e,n,t):Xa(n,e,t);if(!(s>=r))return[];const o=s-r+1,l=new Array(o);if(i)if(a<0)for(let c=0;c<o;++c)l[c]=(s-c)/-a;else for(let c=0;c<o;++c)l[c]=(s-c)*a;else if(a<0)for(let c=0;c<o;++c)l[c]=(r+c)/-a;else for(let c=0;c<o;++c)l[c]=(r+c)*a;return l}function cc(n,e,t){return e=+e,n=+n,t=+t,Xa(n,e,t)[2]}function hS(n,e,t){e=+e,n=+n,t=+t;const i=e<n,r=i?cc(e,n,t):cc(n,e,t);return(i?-1:1)*(r<0?1/-r:r)}function fS(n){return n}var dS=3,Kh=1e-6;function pS(n){return"translate("+n+",0)"}function mS(n){return e=>+n(e)}function gS(n,e){return e=Math.max(0,n.bandwidth()-e*2)/2,n.round()&&(e=Math.round(e)),t=>+n(t)+e}function _S(){return!this.__axis}function vS(n,e){var t=[],i=null,r=null,s=6,a=6,o=3,l=typeof window<"u"&&window.devicePixelRatio>1?0:.5,c=1,u="y",h=pS;function f(d){var m=i??(e.ticks?e.ticks.apply(e,t):e.domain()),_=r??(e.tickFormat?e.tickFormat.apply(e,t):fS),g=Math.max(s,0)+o,p=e.range(),T=+p[0]+l,E=+p[p.length-1]+l,S=(e.bandwidth?gS:mS)(e.copy(),l),C=d.selection?d.selection():d,P=C.selectAll(".domain").data([null]),w=C.selectAll(".tick").data(m,e).order(),R=w.exit(),M=w.enter().append("g").attr("class","tick"),v=w.select("line"),A=w.select("text");P=P.merge(P.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),w=w.merge(M),v=v.merge(M.append("line").attr("stroke","currentColor").attr(u+"2",c*s)),A=A.merge(M.append("text").attr("fill","currentColor").attr(u,c*g).attr("dy","0.71em")),d!==C&&(P=P.transition(d),w=w.transition(d),v=v.transition(d),A=A.transition(d),R=R.transition(d).attr("opacity",Kh).attr("transform",function(z){return isFinite(z=S(z))?h(z+l):this.getAttribute("transform")}),M.attr("opacity",Kh).attr("transform",function(z){var F=this.parentNode.__axis;return h((F&&isFinite(F=F(z))?F:S(z))+l)})),R.remove(),P.attr("d",a?"M"+T+","+c*a+"V"+l+"H"+E+"V"+c*a:"M"+T+","+l+"H"+E),w.attr("opacity",1).attr("transform",function(z){return h(S(z)+l)}),v.attr(u+"2",c*s),A.attr(u,c*g).text(_),C.filter(_S).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor","middle"),C.each(function(){this.__axis=S})}return f.scale=function(d){return arguments.length?(e=d,f):e},f.ticks=function(){return t=Array.from(arguments),f},f.tickArguments=function(d){return arguments.length?(t=d==null?[]:Array.from(d),f):t.slice()},f.tickValues=function(d){return arguments.length?(i=d==null?null:Array.from(d),f):i&&i.slice()},f.tickFormat=function(d){return arguments.length?(r=d,f):r},f.tickSize=function(d){return arguments.length?(s=a=+d,f):s},f.tickSizeInner=function(d){return arguments.length?(s=+d,f):s},f.tickSizeOuter=function(d){return arguments.length?(a=+d,f):a},f.tickPadding=function(d){return arguments.length?(o=+d,f):o},f.offset=function(d){return arguments.length?(l=+d,f):l},f}function $h(n){return vS(dS,n)}var xS={value:()=>{}};function Wd(){for(var n=0,e=arguments.length,t={},i;n<e;++n){if(!(i=arguments[n]+"")||i in t||/[\s.]/.test(i))throw new Error("illegal type: "+i);t[i]=[]}return new Ra(t)}function Ra(n){this._=n}function yS(n,e){return n.trim().split(/^|\s+/).map(function(t){var i="",r=t.indexOf(".");if(r>=0&&(i=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:i}})}Ra.prototype=Wd.prototype={constructor:Ra,on:function(n,e){var t=this._,i=yS(n+"",t),r,s=-1,a=i.length;if(arguments.length<2){for(;++s<a;)if((r=(n=i[s]).type)&&(r=MS(t[r],n.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++s<a;)if(r=(n=i[s]).type)t[r]=Zh(t[r],n.name,e);else if(e==null)for(r in t)t[r]=Zh(t[r],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new Ra(n)},call:function(n,e){if((r=arguments.length-2)>0)for(var t=new Array(r),i=0,r,s;i<r;++i)t[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(s=this._[n],i=0,r=s.length;i<r;++i)s[i].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,s=i.length;r<s;++r)i[r].value.apply(e,t)}};function MS(n,e){for(var t=0,i=n.length,r;t<i;++t)if((r=n[t]).name===e)return r.value}function Zh(n,e,t){for(var i=0,r=n.length;i<r;++i)if(n[i].name===e){n[i]=xS,n=n.slice(0,i).concat(n.slice(i+1));break}return t!=null&&n.push({name:e,value:t}),n}var uc="http://www.w3.org/1999/xhtml";const Jh={svg:"http://www.w3.org/2000/svg",xhtml:uc,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function mo(n){var e=n+="",t=e.indexOf(":");return t>=0&&(e=n.slice(0,t))!=="xmlns"&&(n=n.slice(t+1)),Jh.hasOwnProperty(e)?{space:Jh[e],local:n}:n}function SS(n){return function(){var e=this.ownerDocument,t=this.namespaceURI;return t===uc&&e.documentElement.namespaceURI===uc?e.createElement(n):e.createElementNS(t,n)}}function ES(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function Xd(n){var e=mo(n);return(e.local?ES:SS)(e)}function TS(){}function tu(n){return n==null?TS:function(){return this.querySelector(n)}}function bS(n){typeof n!="function"&&(n=tu(n));for(var e=this._groups,t=e.length,i=new Array(t),r=0;r<t;++r)for(var s=e[r],a=s.length,o=i[r]=new Array(a),l,c,u=0;u<a;++u)(l=s[u])&&(c=n.call(l,l.__data__,u,s))&&("__data__"in l&&(c.__data__=l.__data__),o[u]=c);return new $t(i,this._parents)}function AS(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function wS(){return[]}function qd(n){return n==null?wS:function(){return this.querySelectorAll(n)}}function RS(n){return function(){return AS(n.apply(this,arguments))}}function CS(n){typeof n=="function"?n=RS(n):n=qd(n);for(var e=this._groups,t=e.length,i=[],r=[],s=0;s<t;++s)for(var a=e[s],o=a.length,l,c=0;c<o;++c)(l=a[c])&&(i.push(n.call(l,l.__data__,c,a)),r.push(l));return new $t(i,r)}function Yd(n){return function(){return this.matches(n)}}function jd(n){return function(e){return e.matches(n)}}var PS=Array.prototype.find;function LS(n){return function(){return PS.call(this.children,n)}}function DS(){return this.firstElementChild}function IS(n){return this.select(n==null?DS:LS(typeof n=="function"?n:jd(n)))}var NS=Array.prototype.filter;function US(){return Array.from(this.children)}function FS(n){return function(){return NS.call(this.children,n)}}function OS(n){return this.selectAll(n==null?US:FS(typeof n=="function"?n:jd(n)))}function BS(n){typeof n!="function"&&(n=Yd(n));for(var e=this._groups,t=e.length,i=new Array(t),r=0;r<t;++r)for(var s=e[r],a=s.length,o=i[r]=[],l,c=0;c<a;++c)(l=s[c])&&n.call(l,l.__data__,c,s)&&o.push(l);return new $t(i,this._parents)}function Kd(n){return new Array(n.length)}function kS(){return new $t(this._enter||this._groups.map(Kd),this._parents)}function qa(n,e){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=e}qa.prototype={constructor:qa,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,e){return this._parent.insertBefore(n,e)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function zS(n){return function(){return n}}function HS(n,e,t,i,r,s){for(var a=0,o,l=e.length,c=s.length;a<c;++a)(o=e[a])?(o.__data__=s[a],i[a]=o):t[a]=new qa(n,s[a]);for(;a<l;++a)(o=e[a])&&(r[a]=o)}function VS(n,e,t,i,r,s,a){var o,l,c=new Map,u=e.length,h=s.length,f=new Array(u),d;for(o=0;o<u;++o)(l=e[o])&&(f[o]=d=a.call(l,l.__data__,o,e)+"",c.has(d)?r[o]=l:c.set(d,l));for(o=0;o<h;++o)d=a.call(n,s[o],o,s)+"",(l=c.get(d))?(i[o]=l,l.__data__=s[o],c.delete(d)):t[o]=new qa(n,s[o]);for(o=0;o<u;++o)(l=e[o])&&c.get(f[o])===l&&(r[o]=l)}function GS(n){return n.__data__}function WS(n,e){if(!arguments.length)return Array.from(this,GS);var t=e?VS:HS,i=this._parents,r=this._groups;typeof n!="function"&&(n=zS(n));for(var s=r.length,a=new Array(s),o=new Array(s),l=new Array(s),c=0;c<s;++c){var u=i[c],h=r[c],f=h.length,d=XS(n.call(u,u&&u.__data__,c,i)),m=d.length,_=o[c]=new Array(m),g=a[c]=new Array(m),p=l[c]=new Array(f);t(u,h,_,g,p,d,e);for(var T=0,E=0,S,C;T<m;++T)if(S=_[T]){for(T>=E&&(E=T+1);!(C=g[E])&&++E<m;);S._next=C||null}}return a=new $t(a,i),a._enter=o,a._exit=l,a}function XS(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function qS(){return new $t(this._exit||this._groups.map(Kd),this._parents)}function YS(n,e,t){var i=this.enter(),r=this,s=this.exit();return typeof n=="function"?(i=n(i),i&&(i=i.selection())):i=i.append(n+""),e!=null&&(r=e(r),r&&(r=r.selection())),t==null?s.remove():t(s),i&&r?i.merge(r).order():r}function jS(n){for(var e=n.selection?n.selection():n,t=this._groups,i=e._groups,r=t.length,s=i.length,a=Math.min(r,s),o=new Array(r),l=0;l<a;++l)for(var c=t[l],u=i[l],h=c.length,f=o[l]=new Array(h),d,m=0;m<h;++m)(d=c[m]||u[m])&&(f[m]=d);for(;l<r;++l)o[l]=t[l];return new $t(o,this._parents)}function KS(){for(var n=this._groups,e=-1,t=n.length;++e<t;)for(var i=n[e],r=i.length-1,s=i[r],a;--r>=0;)(a=i[r])&&(s&&a.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(a,s),s=a);return this}function $S(n){n||(n=ZS);function e(h,f){return h&&f?n(h.__data__,f.__data__):!h-!f}for(var t=this._groups,i=t.length,r=new Array(i),s=0;s<i;++s){for(var a=t[s],o=a.length,l=r[s]=new Array(o),c,u=0;u<o;++u)(c=a[u])&&(l[u]=c);l.sort(e)}return new $t(r,this._parents).order()}function ZS(n,e){return n<e?-1:n>e?1:n>=e?0:NaN}function JS(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function QS(){return Array.from(this)}function eE(){for(var n=this._groups,e=0,t=n.length;e<t;++e)for(var i=n[e],r=0,s=i.length;r<s;++r){var a=i[r];if(a)return a}return null}function tE(){let n=0;for(const e of this)++n;return n}function nE(){return!this.node()}function iE(n){for(var e=this._groups,t=0,i=e.length;t<i;++t)for(var r=e[t],s=0,a=r.length,o;s<a;++s)(o=r[s])&&n.call(o,o.__data__,s,r);return this}function rE(n){return function(){this.removeAttribute(n)}}function sE(n){return function(){this.removeAttributeNS(n.space,n.local)}}function aE(n,e){return function(){this.setAttribute(n,e)}}function oE(n,e){return function(){this.setAttributeNS(n.space,n.local,e)}}function lE(n,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttribute(n):this.setAttribute(n,t)}}function cE(n,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,t)}}function uE(n,e){var t=mo(n);if(arguments.length<2){var i=this.node();return t.local?i.getAttributeNS(t.space,t.local):i.getAttribute(t)}return this.each((e==null?t.local?sE:rE:typeof e=="function"?t.local?cE:lE:t.local?oE:aE)(t,e))}function $d(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function hE(n){return function(){this.style.removeProperty(n)}}function fE(n,e,t){return function(){this.style.setProperty(n,e,t)}}function dE(n,e,t){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(n):this.style.setProperty(n,i,t)}}function pE(n,e,t){return arguments.length>1?this.each((e==null?hE:typeof e=="function"?dE:fE)(n,e,t??"")):Br(this.node(),n)}function Br(n,e){return n.style.getPropertyValue(e)||$d(n).getComputedStyle(n,null).getPropertyValue(e)}function mE(n){return function(){delete this[n]}}function gE(n,e){return function(){this[n]=e}}function _E(n,e){return function(){var t=e.apply(this,arguments);t==null?delete this[n]:this[n]=t}}function vE(n,e){return arguments.length>1?this.each((e==null?mE:typeof e=="function"?_E:gE)(n,e)):this.node()[n]}function Zd(n){return n.trim().split(/^|\s+/)}function nu(n){return n.classList||new Jd(n)}function Jd(n){this._node=n,this._names=Zd(n.getAttribute("class")||"")}Jd.prototype={add:function(n){var e=this._names.indexOf(n);e<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var e=this._names.indexOf(n);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function Qd(n,e){for(var t=nu(n),i=-1,r=e.length;++i<r;)t.add(e[i])}function ep(n,e){for(var t=nu(n),i=-1,r=e.length;++i<r;)t.remove(e[i])}function xE(n){return function(){Qd(this,n)}}function yE(n){return function(){ep(this,n)}}function ME(n,e){return function(){(e.apply(this,arguments)?Qd:ep)(this,n)}}function SE(n,e){var t=Zd(n+"");if(arguments.length<2){for(var i=nu(this.node()),r=-1,s=t.length;++r<s;)if(!i.contains(t[r]))return!1;return!0}return this.each((typeof e=="function"?ME:e?xE:yE)(t,e))}function EE(){this.textContent=""}function TE(n){return function(){this.textContent=n}}function bE(n){return function(){var e=n.apply(this,arguments);this.textContent=e??""}}function AE(n){return arguments.length?this.each(n==null?EE:(typeof n=="function"?bE:TE)(n)):this.node().textContent}function wE(){this.innerHTML=""}function RE(n){return function(){this.innerHTML=n}}function CE(n){return function(){var e=n.apply(this,arguments);this.innerHTML=e??""}}function PE(n){return arguments.length?this.each(n==null?wE:(typeof n=="function"?CE:RE)(n)):this.node().innerHTML}function LE(){this.nextSibling&&this.parentNode.appendChild(this)}function DE(){return this.each(LE)}function IE(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function NE(){return this.each(IE)}function UE(n){var e=typeof n=="function"?n:Xd(n);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function FE(){return null}function OE(n,e){var t=typeof n=="function"?n:Xd(n),i=e==null?FE:typeof e=="function"?e:tu(e);return this.select(function(){return this.insertBefore(t.apply(this,arguments),i.apply(this,arguments)||null)})}function BE(){var n=this.parentNode;n&&n.removeChild(this)}function kE(){return this.each(BE)}function zE(){var n=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(n,this.nextSibling):n}function HE(){var n=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(n,this.nextSibling):n}function VE(n){return this.select(n?HE:zE)}function GE(n){return arguments.length?this.property("__data__",n):this.node().__data__}function WE(n){return function(e){n.call(this,e,this.__data__)}}function XE(n){return n.trim().split(/^|\s+/).map(function(e){var t="",i=e.indexOf(".");return i>=0&&(t=e.slice(i+1),e=e.slice(0,i)),{type:e,name:t}})}function qE(n){return function(){var e=this.__on;if(e){for(var t=0,i=-1,r=e.length,s;t<r;++t)s=e[t],(!n.type||s.type===n.type)&&s.name===n.name?this.removeEventListener(s.type,s.listener,s.options):e[++i]=s;++i?e.length=i:delete this.__on}}}function YE(n,e,t){return function(){var i=this.__on,r,s=WE(e);if(i){for(var a=0,o=i.length;a<o;++a)if((r=i[a]).type===n.type&&r.name===n.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=t),r.value=e;return}}this.addEventListener(n.type,s,t),r={type:n.type,name:n.name,value:e,listener:s,options:t},i?i.push(r):this.__on=[r]}}function jE(n,e,t){var i=XE(n+""),r,s=i.length,a;if(arguments.length<2){var o=this.node().__on;if(o){for(var l=0,c=o.length,u;l<c;++l)for(r=0,u=o[l];r<s;++r)if((a=i[r]).type===u.type&&a.name===u.name)return u.value}return}for(o=e?YE:qE,r=0;r<s;++r)this.each(o(i[r],e,t));return this}function tp(n,e,t){var i=$d(n),r=i.CustomEvent;typeof r=="function"?r=new r(e,t):(r=i.document.createEvent("Event"),t?(r.initEvent(e,t.bubbles,t.cancelable),r.detail=t.detail):r.initEvent(e,!1,!1)),n.dispatchEvent(r)}function KE(n,e){return function(){return tp(this,n,e)}}function $E(n,e){return function(){return tp(this,n,e.apply(this,arguments))}}function ZE(n,e){return this.each((typeof e=="function"?$E:KE)(n,e))}function*JE(){for(var n=this._groups,e=0,t=n.length;e<t;++e)for(var i=n[e],r=0,s=i.length,a;r<s;++r)(a=i[r])&&(yield a)}var np=[null];function $t(n,e){this._groups=n,this._parents=e}function Is(){return new $t([[document.documentElement]],np)}function QE(){return this}$t.prototype=Is.prototype={constructor:$t,select:bS,selectAll:CS,selectChild:IS,selectChildren:OS,filter:BS,data:WS,enter:kS,exit:qS,join:YS,merge:jS,selection:QE,order:KS,sort:$S,call:JS,nodes:QS,node:eE,size:tE,empty:nE,each:iE,attr:uE,style:pE,property:vE,classed:SE,text:AE,html:PE,raise:DE,lower:NE,append:UE,insert:OE,remove:kE,clone:VE,datum:GE,on:jE,dispatch:ZE,[Symbol.iterator]:JE};function Qh(n){return typeof n=="string"?new $t([[document.querySelector(n)]],[document.documentElement]):new $t([[n]],np)}function iu(n,e,t){n.prototype=e.prototype=t,t.constructor=n}function ip(n,e){var t=Object.create(n.prototype);for(var i in e)t[i]=e[i];return t}function Ns(){}var Ts=.7,Ya=1/Ts,br="\\s*([+-]?\\d+)\\s*",bs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Rn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",eT=/^#([0-9a-f]{3,8})$/,tT=new RegExp(`^rgb\\(${br},${br},${br}\\)$`),nT=new RegExp(`^rgb\\(${Rn},${Rn},${Rn}\\)$`),iT=new RegExp(`^rgba\\(${br},${br},${br},${bs}\\)$`),rT=new RegExp(`^rgba\\(${Rn},${Rn},${Rn},${bs}\\)$`),sT=new RegExp(`^hsl\\(${bs},${Rn},${Rn}\\)$`),aT=new RegExp(`^hsla\\(${bs},${Rn},${Rn},${bs}\\)$`),ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};iu(Ns,Xi,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:tf,formatHex:tf,formatHex8:oT,formatHsl:lT,formatRgb:nf,toString:nf});function tf(){return this.rgb().formatHex()}function oT(){return this.rgb().formatHex8()}function lT(){return rp(this).formatHsl()}function nf(){return this.rgb().formatRgb()}function Xi(n){var e,t;return n=(n+"").trim().toLowerCase(),(e=eT.exec(n))?(t=e[1].length,e=parseInt(e[1],16),t===6?rf(e):t===3?new Vt(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?fa(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?fa(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=tT.exec(n))?new Vt(e[1],e[2],e[3],1):(e=nT.exec(n))?new Vt(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=iT.exec(n))?fa(e[1],e[2],e[3],e[4]):(e=rT.exec(n))?fa(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=sT.exec(n))?of(e[1],e[2]/100,e[3]/100,1):(e=aT.exec(n))?of(e[1],e[2]/100,e[3]/100,e[4]):ef.hasOwnProperty(n)?rf(ef[n]):n==="transparent"?new Vt(NaN,NaN,NaN,0):null}function rf(n){return new Vt(n>>16&255,n>>8&255,n&255,1)}function fa(n,e,t,i){return i<=0&&(n=e=t=NaN),new Vt(n,e,t,i)}function cT(n){return n instanceof Ns||(n=Xi(n)),n?(n=n.rgb(),new Vt(n.r,n.g,n.b,n.opacity)):new Vt}function ja(n,e,t,i){return arguments.length===1?cT(n):new Vt(n,e,t,i??1)}function Vt(n,e,t,i){this.r=+n,this.g=+e,this.b=+t,this.opacity=+i}iu(Vt,ja,ip(Ns,{brighter(n){return n=n==null?Ya:Math.pow(Ya,n),new Vt(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?Ts:Math.pow(Ts,n),new Vt(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new Vt(Hi(this.r),Hi(this.g),Hi(this.b),Ka(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:sf,formatHex:sf,formatHex8:uT,formatRgb:af,toString:af}));function sf(){return`#${Bi(this.r)}${Bi(this.g)}${Bi(this.b)}`}function uT(){return`#${Bi(this.r)}${Bi(this.g)}${Bi(this.b)}${Bi((isNaN(this.opacity)?1:this.opacity)*255)}`}function af(){const n=Ka(this.opacity);return`${n===1?"rgb(":"rgba("}${Hi(this.r)}, ${Hi(this.g)}, ${Hi(this.b)}${n===1?")":`, ${n})`}`}function Ka(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function Hi(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function Bi(n){return n=Hi(n),(n<16?"0":"")+n.toString(16)}function of(n,e,t,i){return i<=0?n=e=t=NaN:t<=0||t>=1?n=e=NaN:e<=0&&(n=NaN),new vn(n,e,t,i)}function rp(n){if(n instanceof vn)return new vn(n.h,n.s,n.l,n.opacity);if(n instanceof Ns||(n=Xi(n)),!n)return new vn;if(n instanceof vn)return n;n=n.rgb();var e=n.r/255,t=n.g/255,i=n.b/255,r=Math.min(e,t,i),s=Math.max(e,t,i),a=NaN,o=s-r,l=(s+r)/2;return o?(e===s?a=(t-i)/o+(t<i)*6:t===s?a=(i-e)/o+2:a=(e-t)/o+4,o/=l<.5?s+r:2-s-r,a*=60):o=l>0&&l<1?0:a,new vn(a,o,l,n.opacity)}function hT(n,e,t,i){return arguments.length===1?rp(n):new vn(n,e,t,i??1)}function vn(n,e,t,i){this.h=+n,this.s=+e,this.l=+t,this.opacity=+i}iu(vn,hT,ip(Ns,{brighter(n){return n=n==null?Ya:Math.pow(Ya,n),new vn(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?Ts:Math.pow(Ts,n),new vn(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,e=isNaN(n)||isNaN(this.s)?0:this.s,t=this.l,i=t+(t<.5?t:1-t)*e,r=2*t-i;return new Vt(il(n>=240?n-240:n+120,r,i),il(n,r,i),il(n<120?n+240:n-120,r,i),this.opacity)},clamp(){return new vn(lf(this.h),da(this.s),da(this.l),Ka(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=Ka(this.opacity);return`${n===1?"hsl(":"hsla("}${lf(this.h)}, ${da(this.s)*100}%, ${da(this.l)*100}%${n===1?")":`, ${n})`}`}}));function lf(n){return n=(n||0)%360,n<0?n+360:n}function da(n){return Math.max(0,Math.min(1,n||0))}function il(n,e,t){return(n<60?e+(t-e)*n/60:n<180?t:n<240?e+(t-e)*(240-n)/60:e)*255}function fT(n,e,t,i,r){var s=n*n,a=s*n;return((1-3*n+3*s-a)*e+(4-6*s+3*a)*t+(1+3*n+3*s-3*a)*i+a*r)/6}function dT(n){var e=n.length-1;return function(t){var i=t<=0?t=0:t>=1?(t=1,e-1):Math.floor(t*e),r=n[i],s=n[i+1],a=i>0?n[i-1]:2*r-s,o=i<e-1?n[i+2]:2*s-r;return fT((t-i/e)*e,a,r,s,o)}}const ru=n=>()=>n;function pT(n,e){return function(t){return n+t*e}}function mT(n,e,t){return n=Math.pow(n,t),e=Math.pow(e,t)-n,t=1/t,function(i){return Math.pow(n+i*e,t)}}function gT(n){return(n=+n)==1?sp:function(e,t){return t-e?mT(e,t,n):ru(isNaN(e)?t:e)}}function sp(n,e){var t=e-n;return t?pT(n,t):ru(isNaN(n)?e:n)}const As=function n(e){var t=gT(e);function i(r,s){var a=t((r=ja(r)).r,(s=ja(s)).r),o=t(r.g,s.g),l=t(r.b,s.b),c=sp(r.opacity,s.opacity);return function(u){return r.r=a(u),r.g=o(u),r.b=l(u),r.opacity=c(u),r+""}}return i.gamma=n,i}(1);function _T(n){return function(e){var t=e.length,i=new Array(t),r=new Array(t),s=new Array(t),a,o;for(a=0;a<t;++a)o=ja(e[a]),i[a]=o.r||0,r[a]=o.g||0,s[a]=o.b||0;return i=n(i),r=n(r),s=n(s),o.opacity=1,function(l){return o.r=i(l),o.g=r(l),o.b=s(l),o+""}}}var vT=_T(dT);function xT(n,e){e||(e=[]);var t=n?Math.min(e.length,n.length):0,i=e.slice(),r;return function(s){for(r=0;r<t;++r)i[r]=n[r]*(1-s)+e[r]*s;return i}}function yT(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function MT(n,e){var t=e?e.length:0,i=n?Math.min(t,n.length):0,r=new Array(i),s=new Array(t),a;for(a=0;a<i;++a)r[a]=go(n[a],e[a]);for(;a<t;++a)s[a]=e[a];return function(o){for(a=0;a<i;++a)s[a]=r[a](o);return s}}function ST(n,e){var t=new Date;return n=+n,e=+e,function(i){return t.setTime(n*(1-i)+e*i),t}}function pn(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}function ET(n,e){var t={},i={},r;(n===null||typeof n!="object")&&(n={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in n?t[r]=go(n[r],e[r]):i[r]=e[r];return function(s){for(r in t)i[r]=t[r](s);return i}}var hc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,rl=new RegExp(hc.source,"g");function TT(n){return function(){return n}}function bT(n){return function(e){return n(e)+""}}function ap(n,e){var t=hc.lastIndex=rl.lastIndex=0,i,r,s,a=-1,o=[],l=[];for(n=n+"",e=e+"";(i=hc.exec(n))&&(r=rl.exec(e));)(s=r.index)>t&&(s=e.slice(t,s),o[a]?o[a]+=s:o[++a]=s),(i=i[0])===(r=r[0])?o[a]?o[a]+=r:o[++a]=r:(o[++a]=null,l.push({i:a,x:pn(i,r)})),t=rl.lastIndex;return t<e.length&&(s=e.slice(t),o[a]?o[a]+=s:o[++a]=s),o.length<2?l[0]?bT(l[0].x):TT(e):(e=l.length,function(c){for(var u=0,h;u<e;++u)o[(h=l[u]).i]=h.x(c);return o.join("")})}function go(n,e){var t=typeof e,i;return e==null||t==="boolean"?ru(e):(t==="number"?pn:t==="string"?(i=Xi(e))?(e=i,As):ap:e instanceof Xi?As:e instanceof Date?ST:yT(e)?xT:Array.isArray(e)?MT:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?ET:pn)(n,e)}function op(n,e){return n=+n,e=+e,function(t){return Math.round(n*(1-t)+e*t)}}var cf=180/Math.PI,fc={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function lp(n,e,t,i,r,s){var a,o,l;return(a=Math.sqrt(n*n+e*e))&&(n/=a,e/=a),(l=n*t+e*i)&&(t-=n*l,i-=e*l),(o=Math.sqrt(t*t+i*i))&&(t/=o,i/=o,l/=o),n*i<e*t&&(n=-n,e=-e,l=-l,a=-a),{translateX:r,translateY:s,rotate:Math.atan2(e,n)*cf,skewX:Math.atan(l)*cf,scaleX:a,scaleY:o}}var pa;function AT(n){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return e.isIdentity?fc:lp(e.a,e.b,e.c,e.d,e.e,e.f)}function wT(n){return n==null||(pa||(pa=document.createElementNS("http://www.w3.org/2000/svg","g")),pa.setAttribute("transform",n),!(n=pa.transform.baseVal.consolidate()))?fc:(n=n.matrix,lp(n.a,n.b,n.c,n.d,n.e,n.f))}function cp(n,e,t,i){function r(c){return c.length?c.pop()+" ":""}function s(c,u,h,f,d,m){if(c!==h||u!==f){var _=d.push("translate(",null,e,null,t);m.push({i:_-4,x:pn(c,h)},{i:_-2,x:pn(u,f)})}else(h||f)&&d.push("translate("+h+e+f+t)}function a(c,u,h,f){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),f.push({i:h.push(r(h)+"rotate(",null,i)-2,x:pn(c,u)})):u&&h.push(r(h)+"rotate("+u+i)}function o(c,u,h,f){c!==u?f.push({i:h.push(r(h)+"skewX(",null,i)-2,x:pn(c,u)}):u&&h.push(r(h)+"skewX("+u+i)}function l(c,u,h,f,d,m){if(c!==h||u!==f){var _=d.push(r(d)+"scale(",null,",",null,")");m.push({i:_-4,x:pn(c,h)},{i:_-2,x:pn(u,f)})}else(h!==1||f!==1)&&d.push(r(d)+"scale("+h+","+f+")")}return function(c,u){var h=[],f=[];return c=n(c),u=n(u),s(c.translateX,c.translateY,u.translateX,u.translateY,h,f),a(c.rotate,u.rotate,h,f),o(c.skewX,u.skewX,h,f),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,h,f),c=u=null,function(d){for(var m=-1,_=f.length,g;++m<_;)h[(g=f[m]).i]=g.x(d);return h.join("")}}}var RT=cp(AT,"px, ","px)","deg)"),CT=cp(wT,", ",")",")"),kr=0,us=0,rs=0,up=1e3,$a,hs,Za=0,qi=0,_o=0,ws=typeof performance=="object"&&performance.now?performance:Date,hp=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function su(){return qi||(hp(PT),qi=ws.now()+_o)}function PT(){qi=0}function Ja(){this._call=this._time=this._next=null}Ja.prototype=fp.prototype={constructor:Ja,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?su():+t)+(e==null?0:+e),!this._next&&hs!==this&&(hs?hs._next=this:$a=this,hs=this),this._call=n,this._time=t,dc()},stop:function(){this._call&&(this._call=null,this._time=1/0,dc())}};function fp(n,e,t){var i=new Ja;return i.restart(n,e,t),i}function LT(){su(),++kr;for(var n=$a,e;n;)(e=qi-n._time)>=0&&n._call.call(void 0,e),n=n._next;--kr}function uf(){qi=(Za=ws.now())+_o,kr=us=0;try{LT()}finally{kr=0,IT(),qi=0}}function DT(){var n=ws.now(),e=n-Za;e>up&&(_o-=e,Za=n)}function IT(){for(var n,e=$a,t,i=1/0;e;)e._call?(i>e._time&&(i=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:$a=t);hs=n,dc(i)}function dc(n){if(!kr){us&&(us=clearTimeout(us));var e=n-qi;e>24?(n<1/0&&(us=setTimeout(uf,n-ws.now()-_o)),rs&&(rs=clearInterval(rs))):(rs||(Za=ws.now(),rs=setInterval(DT,up)),kr=1,hp(uf))}}function hf(n,e,t){var i=new Ja;return e=e==null?0:+e,i.restart(r=>{i.stop(),n(r+e)},e,t),i}var NT=Wd("start","end","cancel","interrupt"),UT=[],dp=0,ff=1,pc=2,Ca=3,df=4,mc=5,Pa=6;function vo(n,e,t,i,r,s){var a=n.__transition;if(!a)n.__transition={};else if(t in a)return;FT(n,t,{name:e,index:i,group:r,on:NT,tween:UT,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:dp})}function au(n,e){var t=En(n,e);if(t.state>dp)throw new Error("too late; already scheduled");return t}function On(n,e){var t=En(n,e);if(t.state>Ca)throw new Error("too late; already running");return t}function En(n,e){var t=n.__transition;if(!t||!(t=t[e]))throw new Error("transition not found");return t}function FT(n,e,t){var i=n.__transition,r;i[e]=t,t.timer=fp(s,0,t.time);function s(c){t.state=ff,t.timer.restart(a,t.delay,t.time),t.delay<=c&&a(c-t.delay)}function a(c){var u,h,f,d;if(t.state!==ff)return l();for(u in i)if(d=i[u],d.name===t.name){if(d.state===Ca)return hf(a);d.state===df?(d.state=Pa,d.timer.stop(),d.on.call("interrupt",n,n.__data__,d.index,d.group),delete i[u]):+u<e&&(d.state=Pa,d.timer.stop(),d.on.call("cancel",n,n.__data__,d.index,d.group),delete i[u])}if(hf(function(){t.state===Ca&&(t.state=df,t.timer.restart(o,t.delay,t.time),o(c))}),t.state=pc,t.on.call("start",n,n.__data__,t.index,t.group),t.state===pc){for(t.state=Ca,r=new Array(f=t.tween.length),u=0,h=-1;u<f;++u)(d=t.tween[u].value.call(n,n.__data__,t.index,t.group))&&(r[++h]=d);r.length=h+1}}function o(c){for(var u=c<t.duration?t.ease.call(null,c/t.duration):(t.timer.restart(l),t.state=mc,1),h=-1,f=r.length;++h<f;)r[h].call(n,u);t.state===mc&&(t.on.call("end",n,n.__data__,t.index,t.group),l())}function l(){t.state=Pa,t.timer.stop(),delete i[e];for(var c in i)return;delete n.__transition}}function OT(n,e){var t=n.__transition,i,r,s=!0,a;if(t){e=e==null?null:e+"";for(a in t){if((i=t[a]).name!==e){s=!1;continue}r=i.state>pc&&i.state<mc,i.state=Pa,i.timer.stop(),i.on.call(r?"interrupt":"cancel",n,n.__data__,i.index,i.group),delete t[a]}s&&delete n.__transition}}function BT(n){return this.each(function(){OT(this,n)})}function kT(n,e){var t,i;return function(){var r=On(this,n),s=r.tween;if(s!==t){i=t=s;for(var a=0,o=i.length;a<o;++a)if(i[a].name===e){i=i.slice(),i.splice(a,1);break}}r.tween=i}}function zT(n,e,t){var i,r;if(typeof t!="function")throw new Error;return function(){var s=On(this,n),a=s.tween;if(a!==i){r=(i=a).slice();for(var o={name:e,value:t},l=0,c=r.length;l<c;++l)if(r[l].name===e){r[l]=o;break}l===c&&r.push(o)}s.tween=r}}function HT(n,e){var t=this._id;if(n+="",arguments.length<2){for(var i=En(this.node(),t).tween,r=0,s=i.length,a;r<s;++r)if((a=i[r]).name===n)return a.value;return null}return this.each((e==null?kT:zT)(t,n,e))}function ou(n,e,t){var i=n._id;return n.each(function(){var r=On(this,i);(r.value||(r.value={}))[e]=t.apply(this,arguments)}),function(r){return En(r,i).value[e]}}function pp(n,e){var t;return(typeof e=="number"?pn:e instanceof Xi?As:(t=Xi(e))?(e=t,As):ap)(n,e)}function VT(n){return function(){this.removeAttribute(n)}}function GT(n){return function(){this.removeAttributeNS(n.space,n.local)}}function WT(n,e,t){var i,r=t+"",s;return function(){var a=this.getAttribute(n);return a===r?null:a===i?s:s=e(i=a,t)}}function XT(n,e,t){var i,r=t+"",s;return function(){var a=this.getAttributeNS(n.space,n.local);return a===r?null:a===i?s:s=e(i=a,t)}}function qT(n,e,t){var i,r,s;return function(){var a,o=t(this),l;return o==null?void this.removeAttribute(n):(a=this.getAttribute(n),l=o+"",a===l?null:a===i&&l===r?s:(r=l,s=e(i=a,o)))}}function YT(n,e,t){var i,r,s;return function(){var a,o=t(this),l;return o==null?void this.removeAttributeNS(n.space,n.local):(a=this.getAttributeNS(n.space,n.local),l=o+"",a===l?null:a===i&&l===r?s:(r=l,s=e(i=a,o)))}}function jT(n,e){var t=mo(n),i=t==="transform"?CT:pp;return this.attrTween(n,typeof e=="function"?(t.local?YT:qT)(t,i,ou(this,"attr."+n,e)):e==null?(t.local?GT:VT)(t):(t.local?XT:WT)(t,i,e))}function KT(n,e){return function(t){this.setAttribute(n,e.call(this,t))}}function $T(n,e){return function(t){this.setAttributeNS(n.space,n.local,e.call(this,t))}}function ZT(n,e){var t,i;function r(){var s=e.apply(this,arguments);return s!==i&&(t=(i=s)&&$T(n,s)),t}return r._value=e,r}function JT(n,e){var t,i;function r(){var s=e.apply(this,arguments);return s!==i&&(t=(i=s)&&KT(n,s)),t}return r._value=e,r}function QT(n,e){var t="attr."+n;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;var i=mo(n);return this.tween(t,(i.local?ZT:JT)(i,e))}function eb(n,e){return function(){au(this,n).delay=+e.apply(this,arguments)}}function tb(n,e){return e=+e,function(){au(this,n).delay=e}}function nb(n){var e=this._id;return arguments.length?this.each((typeof n=="function"?eb:tb)(e,n)):En(this.node(),e).delay}function ib(n,e){return function(){On(this,n).duration=+e.apply(this,arguments)}}function rb(n,e){return e=+e,function(){On(this,n).duration=e}}function sb(n){var e=this._id;return arguments.length?this.each((typeof n=="function"?ib:rb)(e,n)):En(this.node(),e).duration}function ab(n,e){if(typeof e!="function")throw new Error;return function(){On(this,n).ease=e}}function ob(n){var e=this._id;return arguments.length?this.each(ab(e,n)):En(this.node(),e).ease}function lb(n,e){return function(){var t=e.apply(this,arguments);if(typeof t!="function")throw new Error;On(this,n).ease=t}}function cb(n){if(typeof n!="function")throw new Error;return this.each(lb(this._id,n))}function ub(n){typeof n!="function"&&(n=Yd(n));for(var e=this._groups,t=e.length,i=new Array(t),r=0;r<t;++r)for(var s=e[r],a=s.length,o=i[r]=[],l,c=0;c<a;++c)(l=s[c])&&n.call(l,l.__data__,c,s)&&o.push(l);return new ii(i,this._parents,this._name,this._id)}function hb(n){if(n._id!==this._id)throw new Error;for(var e=this._groups,t=n._groups,i=e.length,r=t.length,s=Math.min(i,r),a=new Array(i),o=0;o<s;++o)for(var l=e[o],c=t[o],u=l.length,h=a[o]=new Array(u),f,d=0;d<u;++d)(f=l[d]||c[d])&&(h[d]=f);for(;o<i;++o)a[o]=e[o];return new ii(a,this._parents,this._name,this._id)}function fb(n){return(n+"").trim().split(/^|\s+/).every(function(e){var t=e.indexOf(".");return t>=0&&(e=e.slice(0,t)),!e||e==="start"})}function db(n,e,t){var i,r,s=fb(e)?au:On;return function(){var a=s(this,n),o=a.on;o!==i&&(r=(i=o).copy()).on(e,t),a.on=r}}function pb(n,e){var t=this._id;return arguments.length<2?En(this.node(),t).on.on(n):this.each(db(t,n,e))}function mb(n){return function(){var e=this.parentNode;for(var t in this.__transition)if(+t!==n)return;e&&e.removeChild(this)}}function gb(){return this.on("end.remove",mb(this._id))}function _b(n){var e=this._name,t=this._id;typeof n!="function"&&(n=tu(n));for(var i=this._groups,r=i.length,s=new Array(r),a=0;a<r;++a)for(var o=i[a],l=o.length,c=s[a]=new Array(l),u,h,f=0;f<l;++f)(u=o[f])&&(h=n.call(u,u.__data__,f,o))&&("__data__"in u&&(h.__data__=u.__data__),c[f]=h,vo(c[f],e,t,f,c,En(u,t)));return new ii(s,this._parents,e,t)}function vb(n){var e=this._name,t=this._id;typeof n!="function"&&(n=qd(n));for(var i=this._groups,r=i.length,s=[],a=[],o=0;o<r;++o)for(var l=i[o],c=l.length,u,h=0;h<c;++h)if(u=l[h]){for(var f=n.call(u,u.__data__,h,l),d,m=En(u,t),_=0,g=f.length;_<g;++_)(d=f[_])&&vo(d,e,t,_,f,m);s.push(f),a.push(u)}return new ii(s,a,e,t)}var xb=Is.prototype.constructor;function yb(){return new xb(this._groups,this._parents)}function Mb(n,e){var t,i,r;return function(){var s=Br(this,n),a=(this.style.removeProperty(n),Br(this,n));return s===a?null:s===t&&a===i?r:r=e(t=s,i=a)}}function mp(n){return function(){this.style.removeProperty(n)}}function Sb(n,e,t){var i,r=t+"",s;return function(){var a=Br(this,n);return a===r?null:a===i?s:s=e(i=a,t)}}function Eb(n,e,t){var i,r,s;return function(){var a=Br(this,n),o=t(this),l=o+"";return o==null&&(l=o=(this.style.removeProperty(n),Br(this,n))),a===l?null:a===i&&l===r?s:(r=l,s=e(i=a,o))}}function Tb(n,e){var t,i,r,s="style."+e,a="end."+s,o;return function(){var l=On(this,n),c=l.on,u=l.value[s]==null?o||(o=mp(e)):void 0;(c!==t||r!==u)&&(i=(t=c).copy()).on(a,r=u),l.on=i}}function bb(n,e,t){var i=(n+="")=="transform"?RT:pp;return e==null?this.styleTween(n,Mb(n,i)).on("end.style."+n,mp(n)):typeof e=="function"?this.styleTween(n,Eb(n,i,ou(this,"style."+n,e))).each(Tb(this._id,n)):this.styleTween(n,Sb(n,i,e),t).on("end.style."+n,null)}function Ab(n,e,t){return function(i){this.style.setProperty(n,e.call(this,i),t)}}function wb(n,e,t){var i,r;function s(){var a=e.apply(this,arguments);return a!==r&&(i=(r=a)&&Ab(n,a,t)),i}return s._value=e,s}function Rb(n,e,t){var i="style."+(n+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,wb(n,e,t??""))}function Cb(n){return function(){this.textContent=n}}function Pb(n){return function(){var e=n(this);this.textContent=e??""}}function Lb(n){return this.tween("text",typeof n=="function"?Pb(ou(this,"text",n)):Cb(n==null?"":n+""))}function Db(n){return function(e){this.textContent=n.call(this,e)}}function Ib(n){var e,t;function i(){var r=n.apply(this,arguments);return r!==t&&(e=(t=r)&&Db(r)),e}return i._value=n,i}function Nb(n){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(n==null)return this.tween(e,null);if(typeof n!="function")throw new Error;return this.tween(e,Ib(n))}function Ub(){for(var n=this._name,e=this._id,t=gp(),i=this._groups,r=i.length,s=0;s<r;++s)for(var a=i[s],o=a.length,l,c=0;c<o;++c)if(l=a[c]){var u=En(l,e);vo(l,n,t,c,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new ii(i,this._parents,n,t)}function Fb(){var n,e,t=this,i=t._id,r=t.size();return new Promise(function(s,a){var o={value:a},l={value:function(){--r===0&&s()}};t.each(function(){var c=On(this,i),u=c.on;u!==n&&(e=(n=u).copy(),e._.cancel.push(o),e._.interrupt.push(o),e._.end.push(l)),c.on=e}),r===0&&s()})}var Ob=0;function ii(n,e,t,i){this._groups=n,this._parents=e,this._name=t,this._id=i}function gp(){return++Ob}var Xn=Is.prototype;ii.prototype={constructor:ii,select:_b,selectAll:vb,selectChild:Xn.selectChild,selectChildren:Xn.selectChildren,filter:ub,merge:hb,selection:yb,transition:Ub,call:Xn.call,nodes:Xn.nodes,node:Xn.node,size:Xn.size,empty:Xn.empty,each:Xn.each,on:pb,attr:jT,attrTween:QT,style:bb,styleTween:Rb,text:Lb,textTween:Nb,remove:gb,tween:HT,delay:nb,duration:sb,ease:ob,easeVarying:cb,end:Fb,[Symbol.iterator]:Xn[Symbol.iterator]};function Bb(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var kb={time:null,delay:0,duration:250,ease:Bb};function zb(n,e){for(var t;!(t=n.__transition)||!(t=t[e]);)if(!(n=n.parentNode))throw new Error(`transition ${e} not found`);return t}function Hb(n){var e,t;n instanceof ii?(e=n._id,n=n._name):(e=gp(),(t=kb).time=su(),n=n==null?null:n+"");for(var i=this._groups,r=i.length,s=0;s<r;++s)for(var a=i[s],o=a.length,l,c=0;c<o;++c)(l=a[c])&&vo(l,n,e,c,a,t||zb(l,e));return new ii(i,this._parents,n,e)}Is.prototype.interrupt=BT;Is.prototype.transition=Hb;var pf={},sl={},al=34,ss=10,ol=13;function Vb(n){return new Function("d","return {"+n.map(function(e,t){return JSON.stringify(e)+": d["+t+'] || ""'}).join(",")+"}")}function mf(n){var e=Object.create(null),t=[];return n.forEach(function(i){for(var r in i)r in e||t.push(e[r]=r)}),t}function zt(n,e){var t=n+"",i=t.length;return i<e?new Array(e-i+1).join(0)+t:t}function Gb(n){return n<0?"-"+zt(-n,6):n>9999?"+"+zt(n,6):zt(n,4)}function Wb(n){var e=n.getUTCHours(),t=n.getUTCMinutes(),i=n.getUTCSeconds(),r=n.getUTCMilliseconds();return isNaN(n)?"Invalid Date":Gb(n.getUTCFullYear())+"-"+zt(n.getUTCMonth()+1,2)+"-"+zt(n.getUTCDate(),2)+(r?"T"+zt(e,2)+":"+zt(t,2)+":"+zt(i,2)+"."+zt(r,3)+"Z":i?"T"+zt(e,2)+":"+zt(t,2)+":"+zt(i,2)+"Z":t||e?"T"+zt(e,2)+":"+zt(t,2)+"Z":"")}function Xb(n){var e=new RegExp('["'+n+`
\r]`),t=n.charCodeAt(0);function i(h,f){var d,m,_=r(h,function(g,p){if(d)return d(g,p-1);m=g,d=Vb(g)});return _.columns=m||[],_}function r(h,f){var d=[],m=h.length,_=0,g=0,p,T=m<=0,E=!1;h.charCodeAt(m-1)===ss&&--m,h.charCodeAt(m-1)===ol&&--m;function S(){if(T)return sl;if(E)return E=!1,pf;var P,w=_,R;if(h.charCodeAt(w)===al){for(;_++<m&&h.charCodeAt(_)!==al||h.charCodeAt(++_)===al;);return(P=_)>=m?T=!0:(R=h.charCodeAt(_++))===ss?E=!0:R===ol&&(E=!0,h.charCodeAt(_)===ss&&++_),h.slice(w+1,P-1).replace(/""/g,'"')}for(;_<m;){if((R=h.charCodeAt(P=_++))===ss)E=!0;else if(R===ol)E=!0,h.charCodeAt(_)===ss&&++_;else if(R!==t)continue;return h.slice(w,P)}return T=!0,h.slice(w,m)}for(;(p=S())!==sl;){for(var C=[];p!==pf&&p!==sl;)C.push(p),p=S();f&&(C=f(C,g++))==null||d.push(C)}return d}function s(h,f){return h.map(function(d){return f.map(function(m){return u(d[m])}).join(n)})}function a(h,f){return f==null&&(f=mf(h)),[f.map(u).join(n)].concat(s(h,f)).join(`
`)}function o(h,f){return f==null&&(f=mf(h)),s(h,f).join(`
`)}function l(h){return h.map(c).join(`
`)}function c(h){return h.map(u).join(n)}function u(h){return h==null?"":h instanceof Date?Wb(h):e.test(h+="")?'"'+h.replace(/"/g,'""')+'"':h}return{parse:i,parseRows:r,format:a,formatBody:o,formatRows:l,formatRow:c,formatValue:u}}var qb=Xb(","),Yb=qb.parse;function jb(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function Qa(n,e){if((t=(n=e?n.toExponential(e-1):n.toExponential()).indexOf("e"))<0)return null;var t,i=n.slice(0,t);return[i.length>1?i[0]+i.slice(2):i,+n.slice(t+1)]}function zr(n){return n=Qa(Math.abs(n)),n?n[1]:NaN}function Kb(n,e){return function(t,i){for(var r=t.length,s=[],a=0,o=n[0],l=0;r>0&&o>0&&(l+o+1>i&&(o=Math.max(1,i-l)),s.push(t.substring(r-=o,r+o)),!((l+=o+1)>i));)o=n[a=(a+1)%n.length];return s.reverse().join(e)}}function $b(n){return function(e){return e.replace(/[0-9]/g,function(t){return n[+t]})}}var Zb=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function eo(n){if(!(e=Zb.exec(n)))throw new Error("invalid format: "+n);var e;return new lu({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}eo.prototype=lu.prototype;function lu(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}lu.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Jb(n){e:for(var e=n.length,t=1,i=-1,r;t<e;++t)switch(n[t]){case".":i=r=t;break;case"0":i===0&&(i=t),r=t;break;default:if(!+n[t])break e;i>0&&(i=0);break}return i>0?n.slice(0,i)+n.slice(r+1):n}var _p;function Qb(n,e){var t=Qa(n,e);if(!t)return n+"";var i=t[0],r=t[1],s=r-(_p=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,a=i.length;return s===a?i:s>a?i+new Array(s-a+1).join("0"):s>0?i.slice(0,s)+"."+i.slice(s):"0."+new Array(1-s).join("0")+Qa(n,Math.max(0,e+s-1))[0]}function gf(n,e){var t=Qa(n,e);if(!t)return n+"";var i=t[0],r=t[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}const _f={"%":(n,e)=>(n*100).toFixed(e),b:n=>Math.round(n).toString(2),c:n=>n+"",d:jb,e:(n,e)=>n.toExponential(e),f:(n,e)=>n.toFixed(e),g:(n,e)=>n.toPrecision(e),o:n=>Math.round(n).toString(8),p:(n,e)=>gf(n*100,e),r:gf,s:Qb,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function vf(n){return n}var xf=Array.prototype.map,yf=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function eA(n){var e=n.grouping===void 0||n.thousands===void 0?vf:Kb(xf.call(n.grouping,Number),n.thousands+""),t=n.currency===void 0?"":n.currency[0]+"",i=n.currency===void 0?"":n.currency[1]+"",r=n.decimal===void 0?".":n.decimal+"",s=n.numerals===void 0?vf:$b(xf.call(n.numerals,String)),a=n.percent===void 0?"%":n.percent+"",o=n.minus===void 0?"−":n.minus+"",l=n.nan===void 0?"NaN":n.nan+"";function c(h){h=eo(h);var f=h.fill,d=h.align,m=h.sign,_=h.symbol,g=h.zero,p=h.width,T=h.comma,E=h.precision,S=h.trim,C=h.type;C==="n"?(T=!0,C="g"):_f[C]||(E===void 0&&(E=12),S=!0,C="g"),(g||f==="0"&&d==="=")&&(g=!0,f="0",d="=");var P=_==="$"?t:_==="#"&&/[boxX]/.test(C)?"0"+C.toLowerCase():"",w=_==="$"?i:/[%p]/.test(C)?a:"",R=_f[C],M=/[defgprs%]/.test(C);E=E===void 0?6:/[gprs]/.test(C)?Math.max(1,Math.min(21,E)):Math.max(0,Math.min(20,E));function v(A){var z=P,F=w,X,q,W;if(C==="c")F=R(A)+F,A="";else{A=+A;var j=A<0||1/A<0;if(A=isNaN(A)?l:R(Math.abs(A),E),S&&(A=Jb(A)),j&&+A==0&&m!=="+"&&(j=!1),z=(j?m==="("?m:o:m==="-"||m==="("?"":m)+z,F=(C==="s"?yf[8+_p/3]:"")+F+(j&&m==="("?")":""),M){for(X=-1,q=A.length;++X<q;)if(W=A.charCodeAt(X),48>W||W>57){F=(W===46?r+A.slice(X+1):A.slice(X))+F,A=A.slice(0,X);break}}}T&&!g&&(A=e(A,1/0));var H=z.length+A.length+F.length,te=H<p?new Array(p-H+1).join(f):"";switch(T&&g&&(A=e(te+A,te.length?p-F.length:1/0),te=""),d){case"<":A=z+A+F+te;break;case"=":A=z+te+A+F;break;case"^":A=te.slice(0,H=te.length>>1)+z+A+F+te.slice(H);break;default:A=te+z+A+F;break}return s(A)}return v.toString=function(){return h+""},v}function u(h,f){var d=c((h=eo(h),h.type="f",h)),m=Math.max(-8,Math.min(8,Math.floor(zr(f)/3)))*3,_=Math.pow(10,-m),g=yf[8+m/3];return function(p){return d(_*p)+g}}return{format:c,formatPrefix:u}}var ma,to,vp;tA({thousands:",",grouping:[3],currency:["$",""]});function tA(n){return ma=eA(n),to=ma.format,vp=ma.formatPrefix,ma}function nA(n){return Math.max(0,-zr(Math.abs(n)))}function iA(n,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(zr(e)/3)))*3-zr(Math.abs(n)))}function rA(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,zr(e)-zr(n))+1}function sA(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}function aA(n,e){switch(arguments.length){case 0:break;case 1:{typeof n=="function"?this.interpolator(n):this.range(n);break}default:{this.domain(n),typeof e=="function"?this.interpolator(e):this.range(e);break}}return this}function oA(n){return function(){return n}}function lA(n){return+n}var Mf=[0,1];function vi(n){return n}function gc(n,e){return(e-=n=+n)?function(t){return(t-n)/e}:oA(isNaN(e)?NaN:.5)}function cA(n,e){var t;return n>e&&(t=n,n=e,e=t),function(i){return Math.max(n,Math.min(e,i))}}function uA(n,e,t){var i=n[0],r=n[1],s=e[0],a=e[1];return r<i?(i=gc(r,i),s=t(a,s)):(i=gc(i,r),s=t(s,a)),function(o){return s(i(o))}}function hA(n,e,t){var i=Math.min(n.length,e.length)-1,r=new Array(i),s=new Array(i),a=-1;for(n[i]<n[0]&&(n=n.slice().reverse(),e=e.slice().reverse());++a<i;)r[a]=gc(n[a],n[a+1]),s[a]=t(e[a],e[a+1]);return function(o){var l=aS(n,o,1,i)-1;return s[l](r[l](o))}}function fA(n,e){return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function dA(){var n=Mf,e=Mf,t=go,i,r,s,a=vi,o,l,c;function u(){var f=Math.min(n.length,e.length);return a!==vi&&(a=cA(n[0],n[f-1])),o=f>2?hA:uA,l=c=null,h}function h(f){return f==null||isNaN(f=+f)?s:(l||(l=o(n.map(i),e,t)))(i(a(f)))}return h.invert=function(f){return a(r((c||(c=o(e,n.map(i),pn)))(f)))},h.domain=function(f){return arguments.length?(n=Array.from(f,lA),u()):n.slice()},h.range=function(f){return arguments.length?(e=Array.from(f),u()):e.slice()},h.rangeRound=function(f){return e=Array.from(f),t=op,u()},h.clamp=function(f){return arguments.length?(a=f?!0:vi,u()):a!==vi},h.interpolate=function(f){return arguments.length?(t=f,u()):t},h.unknown=function(f){return arguments.length?(s=f,h):s},function(f,d){return i=f,r=d,u()}}function pA(){return dA()(vi,vi)}function mA(n,e,t,i){var r=hS(n,e,t),s;switch(i=eo(i??",f"),i.type){case"s":{var a=Math.max(Math.abs(n),Math.abs(e));return i.precision==null&&!isNaN(s=iA(r,a))&&(i.precision=s),vp(i,a)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(s=rA(r,Math.max(Math.abs(n),Math.abs(e))))&&(i.precision=s-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(s=nA(r))&&(i.precision=s-(i.type==="%")*2);break}}return to(i)}function xp(n){var e=n.domain;return n.ticks=function(t){var i=e();return uS(i[0],i[i.length-1],t??10)},n.tickFormat=function(t,i){var r=e();return mA(r[0],r[r.length-1],t??10,i)},n.nice=function(t){t==null&&(t=10);var i=e(),r=0,s=i.length-1,a=i[r],o=i[s],l,c,u=10;for(o<a&&(c=a,a=o,o=c,c=r,r=s,s=c);u-- >0;){if(c=cc(a,o,t),c===l)return i[r]=a,i[s]=o,e(i);if(c>0)a=Math.floor(a/c)*c,o=Math.ceil(o/c)*c;else if(c<0)a=Math.ceil(a*c)/c,o=Math.floor(o*c)/c;else break;l=c}return n},n}function _c(){var n=pA();return n.copy=function(){return fA(n,_c())},sA.apply(n,arguments),xp(n)}function gA(){var n=0,e=1,t,i,r,s,a=vi,o=!1,l;function c(h){return h==null||isNaN(h=+h)?l:a(r===0?.5:(h=(s(h)-t)*r,o?Math.max(0,Math.min(1,h)):h))}c.domain=function(h){return arguments.length?([n,e]=h,t=s(n=+n),i=s(e=+e),r=t===i?0:1/(i-t),c):[n,e]},c.clamp=function(h){return arguments.length?(o=!!h,c):o},c.interpolator=function(h){return arguments.length?(a=h,c):a};function u(h){return function(f){var d,m;return arguments.length?([d,m]=f,a=h(d,m),c):[a(0),a(1)]}}return c.range=u(go),c.rangeRound=u(op),c.unknown=function(h){return arguments.length?(l=h,c):l},function(h){return s=h,t=h(n),i=h(e),r=t===i?0:1/(i-t),c}}function _A(n,e){return e.domain(n.domain()).interpolator(n.interpolator()).clamp(n.clamp()).unknown(n.unknown())}function no(){var n=xp(gA()(vi));return n.copy=function(){return _A(n,no())},aA.apply(n,arguments)}function vA(n){for(var e=n.length/6|0,t=new Array(e),i=0;i<e;)t[i]="#"+n.slice(i*6,++i*6);return t}const xA=n=>vT(n[n.length-1]);var yA=new Array(3).concat("fc8d59ffffbf91bfdb","d7191cfdae61abd9e92c7bb6","d7191cfdae61ffffbfabd9e92c7bb6","d73027fc8d59fee090e0f3f891bfdb4575b4","d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4","d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4","d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4","a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695","a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(vA);const yp=xA(yA);function fs(n,e,t){this.k=n,this.x=e,this.y=t}fs.prototype={constructor:fs,scale:function(n){return n===1?this:new fs(this.k*n,this.x,this.y)},translate:function(n,e){return n===0&e===0?this:new fs(this.k,this.x+this.k*n,this.y+this.k*e)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};fs.prototype;function Sf(n,e){if(e===wg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===ic||e===_d){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===ic)for(let a=1;a<=i;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class MA extends $i{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new AA(t)}),this.register(function(t){return new wA(t)}),this.register(function(t){return new FA(t)}),this.register(function(t){return new OA(t)}),this.register(function(t){return new BA(t)}),this.register(function(t){return new CA(t)}),this.register(function(t){return new PA(t)}),this.register(function(t){return new LA(t)}),this.register(function(t){return new DA(t)}),this.register(function(t){return new bA(t)}),this.register(function(t){return new IA(t)}),this.register(function(t){return new RA(t)}),this.register(function(t){return new UA(t)}),this.register(function(t){return new NA(t)}),this.register(function(t){return new EA(t)}),this.register(function(t){return new kA(t)}),this.register(function(t){return new zA(t)})}load(e,t,i,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=gs.extractUrlBase(e);a=gs.resolveURL(c,this.path)}else a=gs.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Wa(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Mp){try{a[ke.KHR_BINARY_GLTF]=new HA(e)}catch(h){r&&r(h);return}s=JSON.parse(a[ke.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new ew(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case ke.KHR_MATERIALS_UNLIT:a[h]=new TA;break;case ke.KHR_DRACO_MESH_COMPRESSION:a[h]=new VA(s,this.dracoLoader);break;case ke.KHR_TEXTURE_TRANSFORM:a[h]=new GA;break;case ke.KHR_MESH_QUANTIZATION:a[h]=new WA;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function SA(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class EA{constructor(e){this.parser=e,this.name=ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Le(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Pt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new oc(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new s0(u),c.distance=h;break;case"spot":c=new i0(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Yn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class TA{constructor(){this.name=ke.KHR_MATERIALS_UNLIT}getMaterialType(){return gi}extendParams(e,t,i){const r=[];e.color=new Le(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Pt),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,_t))}return Promise.all(r)}}class bA{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class AA{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Re(o,o)}return Promise.all(s)}}class wA{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class RA{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class CA{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Pt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,_t)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class PA{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class LA{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(o[0],o[1],o[2],Pt),Promise.all(s)}}class DA{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class IA{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(o[0],o[1],o[2],Pt),a.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,_t)),Promise.all(s)}}class NA{constructor(e){this.parser=e,this.name=ke.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class UA{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class FA{constructor(e){this.parser=e,this.name=ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class OA{constructor(e){this.parser=e,this.name=ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class BA{constructor(e){this.parser=e,this.name=ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class kA{constructor(e){this.name=ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,r.mode,r.filter),d})})}else return null}}class zA{constructor(e){this.name=ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==tn.TRIANGLES&&c.mode!==tn.TRIANGLE_STRIP&&c.mode!==tn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const m of h){const _=new Ie,g=new D,p=new Ln,T=new D(1,1,1),E=new N_(m.geometry,m.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&T.fromBufferAttribute(l.SCALE,S),E.setMatrixAt(S,_.compose(g,p,T));for(const S in l)if(S==="_COLOR_0"){const C=l[S];E.instanceColor=new sc(C.array,C.itemSize,C.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&m.geometry.setAttribute(S,l[S]);ht.prototype.copy.call(E,m),this.parser.assignFinalMaterial(E),d.push(E)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Mp="glTF",as=12,Ef={JSON:1313821514,BIN:5130562};class HA{constructor(e){this.name=ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,as),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-as,s=new DataView(e,as);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Ef.JSON){const c=new Uint8Array(e,as+a,o);this.content=i.decode(c)}else if(l===Ef.BIN){const c=as+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class VA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=vc[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=vc[u]||u.toLowerCase();if(a[u]!==void 0){const f=i.accessors[e.attributes[u]],d=Ar[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(d){for(const m in d.attributes){const _=d.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}h(d)},o,c,Pt,f)})})}}class GA{constructor(){this.name=ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class WA{constructor(){this.name=ke.KHR_MESH_QUANTIZATION}}class Sp extends Ds{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=r-t,h=(i-t)/u,f=h*h,d=f*h,m=e*c,_=m-c,g=-2*d+3*f,p=d-f,T=1-g,E=p-f+h;for(let S=0;S!==o;S++){const C=a[_+S+o],P=a[_+S+l]*u,w=a[m+S+o],R=a[m+S]*u;s[S]=T*C+E*P+g*w+p*R}return s}}const XA=new Ln;class qA extends Sp{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return XA.fromArray(s).normalize().toArray(s),s}}const tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ar={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Tf={9728:Ft,9729:jt,9984:od,9985:ya,9986:ls,9987:Kn},bf={33071:mi,33648:ka,10497:Pr},ll={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},YA={CUBICSPLINE:void 0,LINEAR:Ss,STEP:Ms},cl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jA(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Kc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ti})),n.DefaultMaterial}function Di(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Yn(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function KA(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;a.push(f)}if(r){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;o.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function $A(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ZA(n){let e;const t=n.extensions&&n.extensions[ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ul(t.attributes):e=n.indices+":"+ul(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+ul(n.targets[i]);return e}function ul(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function xc(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function JA(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const QA=new Ie;class ew{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new SA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&a<98?this.textureLoader=new t0(this.options.manager):this.textureLoader=new l0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Wa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};return Di(s,o,r),Yn(o,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ke.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){i.load(gs.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=ll[r.type],o=Ar[r.componentType],l=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new Tt(c,a,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=ll[r.type],c=Ar[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=r.byteOffset||0,d=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0;let _,g;if(d&&d!==h){const p=Math.floor(f/d),T="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let E=t.cache.get(T);E||(_=new c(o,p*d,r.count*d/u),E=new C_(_,d/u),t.cache.add(T,E)),g=new Xc(E,l,f%d/u,m)}else o===null?_=new c(r.count*l):_=new c(o,f,r.count*l),g=new Tt(_,l,m);if(r.sparse!==void 0){const p=ll.SCALAR,T=Ar[r.sparse.indices.componentType],E=r.sparse.indices.byteOffset||0,S=r.sparse.values.byteOffset||0,C=new T(a[1],E,r.sparse.count*p),P=new c(a[2],S,r.sparse.count*l);o!==null&&(g=new Tt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,R=C.length;w<R;w++){const M=C[w];if(g.setX(M,P[w*l]),l>=2&&g.setY(M,P[w*l+1]),l>=3&&g.setZ(M,P[w*l+2]),l>=4&&g.setW(M,P[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(s.samplers||{})[a.sampler]||{};return u.magFilter=Tf[f.magFilter]||jt,u.minFilter=Tf[f.minFilter]||Kn,u.wrapS=bf[f.wrapS]||Pr,u.wrapT=bf[f.wrapT]||Pr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ft&&u.minFilter!==jt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(_){const g=new St(_);g.needsUpdate=!0,f(g)}),t.load(gs.resolveURL(h,s.path),m,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),Yn(h,a),h.userData.mimeType=a.mimeType||JA(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[ke.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Nd,wn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Id,wn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(r||s||a){let o="ClonedMaterial:"+i.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Kc}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[ke.KHR_MATERIALS_UNLIT]){const h=r[ke.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new Le(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Pt),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,_t)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=mn);const u=s.alphaMode||cl.OPAQUE;if(u===cl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===cl.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==gi&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Re(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==gi&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==gi){const h=s.emissiveFactor;o.emissive=new Le().setRGB(h[0],h[1],h[2],Pt)}return s.emissiveTexture!==void 0&&a!==gi&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,_t)),Promise.all(c).then(function(){const h=new a(o);return s.name&&(h.name=s.name),Yn(h,s),t.associations.set(h,{materials:e}),s.extensions&&Di(r,h,s),h})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(o){return i[ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Af(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=ZA(c),h=r[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[ke.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Af(new Sn,c,t),r[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?jA(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,m=u.length;d<m;d++){const _=u[d],g=a[d];let p;const T=c[d];if(g.mode===tn.TRIANGLES||g.mode===tn.TRIANGLE_STRIP||g.mode===tn.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new L_(_,T):new Kt(_,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===tn.TRIANGLE_STRIP?p.geometry=Sf(p.geometry,_d):g.mode===tn.TRIANGLE_FAN&&(p.geometry=Sf(p.geometry,ic));else if(g.mode===tn.LINES)p=new O_(_,T);else if(g.mode===tn.LINE_STRIP)p=new jc(_,T);else if(g.mode===tn.LINE_LOOP)p=new B_(_,T);else if(g.mode===tn.POINTS)p=new k_(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&$A(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Yn(p,s),g.extensions&&Di(r,p,g),t.assignFinalMaterial(p),h.push(p)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Di(r,h[0],s),h[0];const f=new Oi;s.extensions&&Di(r,f,s),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ut(yd.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Zc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Yn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),a=r,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const f=new Ie;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new qc(o,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){const d=r.channels[h],m=r.samplers[d.sampler],_=d.target,g=_.node,p=r.parameters!==void 0?r.parameters[m.input]:m.input,T=r.parameters!==void 0?r.parameters[m.output]:m.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",T)),c.push(m),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],m=h[2],_=h[3],g=h[4],p=[];for(let T=0,E=f.length;T<E;T++){const S=f[T],C=d[T],P=m[T],w=_[T],R=g[T];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const M=i._createAnimationTracks(S,C,P,w,R);if(M)for(let v=0;v<M.length;v++)p.push(M[v])}return new j_(s,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),a=[],o=r.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,QA)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new Ld:c.length>1?u=new Oi:c.length===1?u=c[0]:u=new ht,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),Yn(u,s),s.extensions&&Di(i,u,s),s.matrix!==void 0){const h=new Ie;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Oi;i.name&&(s.name=r.createUniqueName(i.name)),Yn(s,i),i.extensions&&Di(t,s,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of r.associations)(f instanceof wn||f instanceof St)&&h.set(f,d);return u.traverse(f=>{const d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const a=[],o=e.name?e.name:e.uuid,l=[];hi[s.path]===hi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(hi[s.path]){case hi.weights:c=Ur;break;case hi.rotation:c=Fr;break;case hi.position:case hi.scale:c=Or;break;default:switch(i.itemSize){case 1:c=Ur;break;case 2:case 3:default:c=Or;break}break}const u=r.interpolation!==void 0?YA[r.interpolation]:Ss,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){const m=new c(l[f]+"."+hi[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=xc(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Fr?qA:Sp;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function tw(n,e,t){const i=e.attributes,r=new ln;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){const u=xc(Ar[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new D,l=new D;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){const _=xc(Ar[f.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}n.boundingBox=r;const a=new Nn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=a}function Af(n,e,t){const i=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(const a in i){const o=vc[a]||a.toLowerCase();o in n.attributes||r.push(s(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});r.push(a)}return He.workingColorSpace!==Pt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${He.workingColorSpace}" not supported.`),Yn(n,e),tw(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?KA(n,e.targets,t):n})}const hl=new WeakMap;class nw extends $i{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,r){const s=new Wa(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,a=>{this.parse(a,t,r)},i,r)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,_t,i).catch(i)}decodeDracoFile(e,t,i,r,s=Pt,a=()=>{}){const o={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const i=JSON.stringify(t);if(hl.has(e)){const l=hl.get(e);if(l.key===i)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r;const s=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(s,a).then(l=>(r=l,new Promise((c,u)=>{r._callbacks[s]={resolve:c,reject:u},r.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{r&&s&&this._releaseTask(r,s)}),hl.set(e,{key:i,promise:o}),o}_createGeometry(e){const t=new Sn;e.index&&t.setIndex(new Tt(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const r=e.attributes[i],s=r.name,a=r.array,o=r.itemSize,l=new Tt(a,o);s==="color"&&(this._assignVertexColorSpace(l,r.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==_t)return;const i=new Le;for(let r=0,s=e.count;r<s;r++)i.fromBufferAttribute(e,r),He.toWorkingColorSpace(i,_t),e.setXYZ(r,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new Wa(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((r,s)=>{i.load(e,r,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const r=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const s=iw.toString(),a=["/* draco decoder */",r,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(s){const a=s.data;switch(a.type){case"decode":r._callbacks[a.id].resolve(a);break;case"error":r._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,s){return r._taskLoad>s._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function iw(){let n,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":n=o.decoderConfig,e=new Promise(function(u){n.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(n)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const d=t(h,f,new Int8Array(l),c),m=d.attributes.map(_=>_.array.buffer);d.index&&m.push(d.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:d},m)}catch(d){console.error(d),self.postMessage({type:"error",id:o.id,error:d.message})}finally{h.destroy(f)}});break}};function t(a,o,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,d;const m=o.GetEncodedGeometryType(l);if(m===a.TRIANGULAR_MESH)f=new a.Mesh,d=o.DecodeArrayToMesh(l,l.byteLength,f);else if(m===a.POINT_CLOUD)f=new a.PointCloud,d=o.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const _={index:null,attributes:[]};for(const g in u){const p=self[h[g]];let T,E;if(c.useUniqueIDs)E=u[g],T=o.GetAttributeByUniqueId(f,E);else{if(E=o.GetAttributeId(f,a[u[g]]),E===-1)continue;T=o.GetAttribute(f,E)}const S=r(a,o,f,g,p,T);g==="color"&&(S.vertexColorSpace=c.vertexColorSpace),_.attributes.push(S)}return m===a.TRIANGULAR_MESH&&(_.index=i(a,o,f)),a.destroy(f),_}function i(a,o,l){const u=l.num_faces()*3,h=u*4,f=a._malloc(h);o.GetTrianglesUInt32Array(l,h,f);const d=new Uint32Array(a.HEAPF32.buffer,f,u).slice();return a._free(f),{array:d,itemSize:1}}function r(a,o,l,c,u,h){const f=h.num_components(),m=l.num_points()*f,_=m*u.BYTES_PER_ELEMENT,g=s(a,u),p=a._malloc(_);o.GetAttributeDataArrayForAllPoints(l,h,g,_,p);const T=new u(a.HEAPF32.buffer,p,m).slice();return a._free(p),{name:c,array:T,itemSize:f}}function s(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}const wf={type:"change"},cu={type:"start"},Ep={type:"end"},ga=new Ps,Rf=new di,rw=Math.cos(70*yd.DEG2RAD),vt=new D,Bt=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fl=1e-6;class sw extends x0{constructor(e,t=null){super(e,t),this.state=it.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mr.ROTATE,MIDDLE:Mr.DOLLY,RIGHT:Mr.PAN},this.touches={ONE:_r.ROTATE,TWO:_r.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Ln,this._lastTargetPosition=new D,this._quat=new Ln().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Eh,this._sphericalDelta=new Eh,this._scale=1,this._panOffset=new D,this._rotateStart=new Re,this._rotateEnd=new Re,this._rotateDelta=new Re,this._panStart=new Re,this._panEnd=new Re,this._panDelta=new Re,this._dollyStart=new Re,this._dollyEnd=new Re,this._dollyDelta=new Re,this._dollyDirection=new D,this._mouse=new Re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ow.bind(this),this._onPointerDown=aw.bind(this),this._onPointerUp=lw.bind(this),this._onContextMenu=mw.bind(this),this._onMouseWheel=hw.bind(this),this._onKeyDown=fw.bind(this),this._onTouchStart=dw.bind(this),this._onTouchMove=pw.bind(this),this._onMouseDown=cw.bind(this),this._onMouseMove=uw.bind(this),this._interceptControlDown=gw.bind(this),this._interceptControlUp=_w.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wf),this.update(),this.state=it.NONE}update(e=null){const t=this.object.position;vt.copy(t).sub(this.target),vt.applyQuaternion(this._quat),this._spherical.setFromVector3(vt),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Bt:i>Math.PI&&(i-=Bt),r<-Math.PI?r+=Bt:r>Math.PI&&(r-=Bt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(vt.setFromSpherical(this._spherical),vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=vt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ga.origin.copy(this.object.position),ga.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ga.direction))<rw?this.object.lookAt(this.target):(Rf.setFromNormalAndCoplanarPoint(this.object.up,this.target),ga.intersectPlane(Rf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>fl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fl||this._lastTargetPosition.distanceToSquared(this.target)>fl?(this.dispatchEvent(wf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bt/60*this.autoRotateSpeed*e:Bt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){vt.setFromMatrixColumn(t,0),vt.multiplyScalar(-e),this._panOffset.add(vt)}_panUp(e,t){this.screenSpacePanning===!0?vt.setFromMatrixColumn(t,1):(vt.setFromMatrixColumn(t,0),vt.crossVectors(this.object.up,vt)),vt.multiplyScalar(e),this._panOffset.add(vt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;vt.copy(r).sub(this.target);let s=vt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function aw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function ow(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function lw(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ep),this.state=it.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function cw(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Mr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=it.DOLLY;break;case Mr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=it.ROTATE}break;case Mr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(cu)}function uw(n){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function hw(n){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(n.preventDefault(),this.dispatchEvent(cu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Ep))}function fw(n){this.enabled!==!1&&this._handleKeyDown(n)}function dw(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case _r.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=it.TOUCH_ROTATE;break;case _r.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case _r.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=it.TOUCH_DOLLY_PAN;break;case _r.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(cu)}function pw(n){switch(this._trackPointer(n),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=it.NONE}}function mw(n){this.enabled!==!1&&n.preventDefault()}function gw(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _w(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class vw extends ht{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Re(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const pr=new D,Cf=new Ie,Pf=new Ie,Lf=new D,Df=new D;class xw{constructor(e={}){const t=this;let i,r,s,a;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:r}},this.render=function(m,_){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Cf.copy(_.matrixWorldInverse),Pf.multiplyMatrices(_.projectionMatrix,Cf),u(m,m,_),d(m)},this.setSize=function(m,_){i=m,r=_,s=i/2,a=r/2,l.style.width=m+"px",l.style.height=_+"px"};function c(m){m.isCSS2DObject&&(m.element.style.display="none");for(let _=0,g=m.children.length;_<g;_++)c(m.children[_])}function u(m,_,g){if(m.visible===!1){c(m);return}if(m.isCSS2DObject){pr.setFromMatrixPosition(m.matrixWorld),pr.applyMatrix4(Pf);const p=pr.z>=-1&&pr.z<=1&&m.layers.test(g.layers)===!0,T=m.element;T.style.display=p===!0?"":"none",p===!0&&(m.onBeforeRender(t,_,g),T.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(pr.x*s+s)+"px,"+(-pr.y*a+a)+"px)",T.parentNode!==l&&l.appendChild(T),m.onAfterRender(t,_,g));const E={distanceToCameraSquared:h(g,m)};o.objects.set(m,E)}for(let p=0,T=m.children.length;p<T;p++)u(m.children[p],_,g)}function h(m,_){return Lf.setFromMatrixPosition(m.matrixWorld),Df.setFromMatrixPosition(_.matrixWorld),Lf.distanceToSquared(Df)}function f(m){const _=[];return m.traverseVisible(function(g){g.isCSS2DObject&&_.push(g)}),_}function d(m){const _=f(m).sort(function(p,T){if(p.renderOrder!==T.renderOrder)return T.renderOrder-p.renderOrder;const E=o.objects.get(p).distanceToCameraSquared,S=o.objects.get(T).distanceToCameraSquared;return E-S}),g=_.length;for(let p=0,T=_.length;p<T;p++)_[p].element.style.zIndex=g-p}}}const dl=(n,e)=>{if(!n)return;const t=new ln;let i=!1;if(n.traverse(r=>{if(r.isMesh&&r.name.includes(e)){i=!0;const s=new ln().setFromObject(r);t.union(s)}}),i){const r=new D;t.getCenter(r);const s=document.createElement("div");s.classList.add("label"),s.textContent=e.replace(/_/g," ");const a=new vw(s);a.position.set(r.x*10,r.y*10,r.z*10),n.add(a)}};var yw=ji("<button> </button>"),Mw=ji("<button> </button>"),Sw=ji('<div class="controls-container svelte-119y4h8"><div class="control-section svelte-119y4h8"><h2 class="svelte-119y4h8">Shoreline Years</h2> <div class="control-buttons svelte-119y4h8"></div></div> <div class="control-section svelte-119y4h8"><h2 class="svelte-119y4h8">Intervals</h2> <div class="control-buttons svelte-119y4h8"></div></div> <div class="control-section svelte-119y4h8"><h2 class="svelte-119y4h8">Bathymetry</h2> <div class="control-buttons svelte-119y4h8"><button> </button></div></div></div>');function Ew(n,e){io(e,!1);let t=Nt(e,"shorelines",8),i=Nt(e,"changeRatePolygons",12),r=Nt(e,"years",8);Nt(e,"chgRate",8);let s=Nt(e,"bathymetryObjects",8),a=rn({}),o=rn({}),l=rn(!0);function c(){r().forEach(R=>{t()&&t()[R]&&t()[R].length>0?sn(a,ie(a)[R]=t()[R][0].visible):sn(a,ie(a)[R]=!0)}),at(a,{...ie(a)})}function u(){Object.keys(i()).forEach(M=>{let v=!1;Object.keys(i()[M]).forEach(A=>{i()[M][A].object.visible&&(v=!0)}),sn(o,ie(o)[M]=v)}),at(o,{...ie(o)})}Uc(()=>{r()&&t()&&c(),i()&&u()});function h(R){!t()||!t()[R]||(sn(a,ie(a)[R]=!ie(a)[R]),t()[R].forEach(M=>{M.visible=ie(a)[R]}),at(a,{...ie(a)}))}function f(R){if(!i())return;Object.keys(ie(o)).forEach(v=>{sn(o,ie(o)[v]=!1),Object.keys(i()[v]).forEach(A=>{i(i()[v][A].object.visible=!1,!0)})}),sn(o,ie(o)[R]=!0),Object.keys(i()[R]).forEach(v=>{i(i()[R][v].object.visible=!0,!0)});const M=Object.keys(i()[R]||{});if(M.length>0){const v=i()[R][M[0]],A=v.startYear,z=v.endYear;r().forEach(F=>{sn(a,ie(a)[F]=F>=A&&F<=z),t()[F]&&t()[F].forEach(X=>{X.visible=ie(a)[F]})})}at(o,{...ie(o)}),at(a,{...ie(a)})}function d(){var R;at(l,!ie(l)),(R=s())==null||R.forEach(M=>{M.visible=ie(l)})}function m(R){const M=Object.keys(i()[R]||{});if(M.length>0){const v=i()[R][M[0]];return`${v.startYear}-${v.endYear}`}return`Interval ${R}`}Mu(()=>(xa(r()),xa(t())),()=>{r()&&t()&&c()}),Mu(()=>xa(i()),()=>{i()&&u()}),_m(),Nc();var _=Sw(),g=Rt(_),p=bn(Rt(g),2);Au(p,5,()=>r()||[],bu,(R,M)=>{var v=yw(),A=Rt(v);_a(()=>{Eo(v,`control-button ${(ie(a)[ie(M)]?"visible":"hidden")??""} svelte-119y4h8`),So(A,ie(M))}),Mo("click",v,()=>h(ie(M))),zi(R,v)});var T=bn(g,2),E=bn(Rt(T),2);Au(E,5,()=>Object.keys(ie(o)),bu,(R,M)=>{var v=Mw(),A=Rt(v);_a(z=>{Eo(v,`control-button ${(ie(o)[ie(M)]?"visible":"hidden")??""} svelte-119y4h8`),So(A,z)},[()=>m(ie(M))],Rc),Mo("click",v,()=>f(ie(M))),zi(R,v)});var S=bn(T,2),C=bn(Rt(S),2),P=Rt(C),w=Rt(P);_a(()=>{Eo(P,`control-button ${(ie(l)?"visible":"hidden")??""} svelte-119y4h8`),So(w,`${(ie(l)?"Hide":"Show")??""} Bathymetry`)}),Mo("click",P,d),zi(n,_),ro()}var Tw=ji('<div class="legend svelte-17n33t"><svg class="svelte-17n33t"></svg> <svg class="svelte-17n33t"></svg> <div class="no-data-legend svelte-17n33t"><div class="no-data-color svelte-17n33t"></div> <span>No Data</span></div></div>');function bw(n,e){io(e,!1);let t=Nt(e,"bathymetryMinValue",8,0),i=Nt(e,"bathymetryMaxValue",8,30),r=Nt(e,"bathymetryTitle",8,"Bathymetry (m)"),s=Nt(e,"bathymetryDescription",8,"Light Blue = Shallow, Dark Blue = Deep"),a=Nt(e,"changeRateMinValue",24,()=>-50),o=Nt(e,"changeRateMaxValue",8,10),l=Nt(e,"changeRateTitle",8,"Change Rate (m/yr)"),c=Nt(e,"changeRateDescription",8,"Red = Erosion, Blue = Accretion"),u=Nt(e,"width",8,240),h=Nt(e,"height",8,80),f=rn(),d=rn();Uc(()=>{const p=no(As("#c8daf7","#081a37")).domain([t(),i()]),T=Qh(ie(f));T.append("text").attr("x",0).attr("y",15).attr("font-weight","bold").text(r());const S=T.append("defs").append("linearGradient").attr("id","bathymetry-gradient").attr("x1","0%").attr("x2","100%").attr("y1","0%").attr("y2","0%");for(let q=0;q<=10;q++){const W=q/10,j=t()+W*(i()-t());S.append("stop").attr("offset",`${W*100}%`).attr("stop-color",p(j))}const C={left:10,right:10};T.append("rect").attr("x",C.left).attr("y",30).attr("width",u()-C.left-C.right).attr("height",15).style("fill","url(#bathymetry-gradient)");const P=_c().domain([t(),i()]).range([C.left,u()-C.right]),w=$h(P).ticks(5).tickFormat(to(".1f"));T.append("g").attr("transform","translate(0, 45)").call(w),T.append("text").attr("x",0).attr("y",h()).attr("font-size","12px").text(s());const R=no(yp).domain([a(),o()]),M=Qh(ie(d));M.append("text").attr("x",0).attr("y",15).attr("font-weight","bold").text(l());const A=M.append("defs").append("linearGradient").attr("id","change-rate-gradient").attr("x1","0%").attr("x2","100%").attr("y1","0%").attr("y2","0%");for(let q=0;q<=10;q++){const W=q/10,j=a()+W*(o()-a());A.append("stop").attr("offset",`${W*100}%`).attr("stop-color",R(j))}const z={left:10,right:10};M.append("rect").attr("x",z.left).attr("y",30).attr("width",u()-z.left-z.right).attr("height",15).style("fill","url(#change-rate-gradient)");const F=_c().domain([a(),o()]).range([z.left,u()-z.right]),X=$h(F).ticks(5).tickFormat(to(".1f"));M.append("g").attr("transform","translate(0, 45)").call(X),M.append("text").attr("x",0).attr("y",h()).attr("font-size","12px").text(c())}),Nc();var m=Tw(),_=Rt(m);Ba(_,p=>at(f,p),()=>ie(f));var g=bn(_,2);Ba(g,p=>at(d,p),()=>ie(d)),_a(()=>{Os(_,"width",u()),Os(_,"height",h()),Os(g,"width",u()),Os(g,"height",h())}),zi(n,m),ro()}var Aw=ji('<div class="loading-message svelte-1co210q">3D scene loading...</div>'),ww=ji('<div class="scene-container"><div class="scene3d svelte-1co210q"><!> <canvas class="scene-canvas svelte-1co210q"></canvas></div> <div class="control svelte-1co210q"><!></div> <div class="key"><!></div></div>');function Rw(n,e){io(e,!1);let t,i,r,s,a,o,l=rn(),c=rn();const u="/visCRLC/3d/GL.glb";let h=rn({});const f=[1870,1920,1950,2e3,2015];let d=rn({}),m=rn({}),_=rn([]);const g=no(yp).domain([-50,10]);let p=rn(!0);const T=()=>{t=new R_,i=new Ut(45,1,.1,8e3),r=new tS({antialias:!0,canvas:ie(l),alpha:!0}),r.setClearColor(0,0),window.addEventListener("resize",v),s=new sw(i,r.domElement),s.enableDamping=!0,s.dampingFactor=.05,s.maxPolarAngle=Math.PI/3,s.minDistance=1e3,s.maxDistance=5e3,s.zoomToCursor=!0,a=new xw,a.domElement.style.position="absolute",a.domElement.style.top="0",a.domElement.style.pointerEvents="none",ie(c).appendChild(a.domElement),R(),v()},E=()=>new Promise((oe,re)=>{const V=new MA,Q=new nw;Q.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.5/"),V.setDRACOLoader(Q),V.load(u,se=>{o=se.scene,o.scale.set(.1,.1,.1),o.position.set(0,0,0),t.add(o),C(o),M(),oe(o)},void 0,se=>{console.error("An error occurred while loading the model:",se),re(se)})}),S=async()=>{try{const re=await fetch("/visCRLC/GROUP_GL.csv");if(!re.ok)throw new Error(`Failed to fetch CSV file: ${re.status} ${re.statusText}`);const V=await re.text();return Yb(V).forEach(se=>{const ne=se.groupID,Ee=se.interval,ze=se.intervalStart,be=se.intervalEnd,ot=se.chgRate;ie(d)[ne]||sn(d,ie(d)[ne]={}),sn(d,ie(d)[ne][Ee]={startYear:ze,endYear:be,rate:ot})}),ie(d)}catch(oe){return console.error("Error loading change rate data:",oe),alert("Failed to load change rate data. Please check if the file exists and try again."),null}},C=oe=>{at(h,{}),at(_,[]),f.forEach(re=>{sn(h,ie(h)[re]=[])}),oe.traverse(re=>{(re.isMesh||re.isGroup||re.isLine)&&f.forEach(V=>{re.name.startsWith(V.toString())&&(ie(h)[V].push(re),re.visible=V===f[0])}),re.name.includes("_shoreline")&&(re.renderOrder=100,re.material&&(re.material.depthTest=!1)),re.name.includes("_bathy")&&ie(_).push(re)}),console.log("Bathymetry objects:",ie(_))},P=oe=>{at(m,{}),oe.traverse(re=>{if(re.isMesh||re.isGroup){const V=re.name.split("_");if(V.length>=4){const Q=V[0],se=V[1].match(/int(\d+)/);if(!se)return;const ne=se[1],Ee=V[2].match(/s(\d+)/);if(!Ee)return;const ze=Ee[1],be=V[3].match(/e(\d+)/);if(!be)return;const ot=be[1];ie(m)[ne]||sn(m,ie(m)[ne]={}),sn(m,ie(m)[ne][Q]={object:re,startYear:ze,endYear:ot}),re.visible=parseInt(ne)===2}}}),console.log("Found change rate polygons:",ie(m))},w=()=>{Object.keys(ie(m)).forEach(oe=>{Object.keys(ie(m)[oe]).forEach(re=>{const V=ie(m)[oe][re];if(ie(d)[re]&&ie(d)[re][oe]){const Q=ie(d)[re][oe].rate,se=g(Q),ne=new gi({color:new Le(se),transparent:!0,opacity:.7,side:mn});V.object.isMesh&&(V.object.material=ne,V.object.userData.changeRate=Q)}})})};function R(){const oe=new oc(16777215,5);oe.position.set(5,5,15),t.add(oe);const re=new oc(15921643,1);re.position.set(15,15,-10),t.add(re);const V=new o0(16643554,.5);t.add(V)}const M=()=>{const oe=new ln().setFromObject(o),re=new D;oe.getCenter(re),s.target.copy(re),i.position.set(re.x-2e3,re.y+3e3,re.z+3e3),i.lookAt(re),i.near=.1,i.far=1e3,console.log("Model center:",re)},v=()=>{if(!ie(c))return;const oe=ie(c).clientWidth,re=ie(c).clientHeight;r.setSize(oe,re),a.setSize(oe,re),i.aspect=oe/re,i.updateProjectionMatrix()},A=()=>{requestAnimationFrame(A),s&&s.update(),r.render(t,i),a.render(t,i)},z=async()=>{T();try{const oe=await E();await S(),C(oe),P(oe),w(),dl(o,"Tokeland"),dl(o,"Westport"),dl(o,"North_Cove"),at(p,!1),A()}catch(oe){console.error("Failed to initialize:",oe),at(p,!1)}};Uc(()=>(z(),()=>{window.removeEventListener("resize",v),s&&s.dispose(),r&&r.dispose()})),Nc();var F=ww(),X=Rt(F),q=Rt(X);{var W=oe=>{var re=Aw();zi(oe,re)};zm(q,oe=>{ie(p)&&oe(W)})}var j=bn(q,2);Ba(j,oe=>at(l,oe),()=>ie(l)),Ba(X,oe=>at(c,oe),()=>ie(c));var H=bn(X,2),te=Rt(H);Ew(te,{years:f,get shorelines(){return ie(h)},get changeRatePolygons(){return ie(m)},get chgRate(){return ie(d)},get bathymetryObjects(){return ie(_)}});var de=bn(H,2),ye=Rt(de);bw(ye,{}),zi(n,F),ro()}var Cw=ji('<main><header class="App-header"><h1>Historical evolution of the Grayland Plains shoreline</h1></header> <div class="content"><div class="scene"><!></div> <div class="description"><h2>About</h2> <p>This visualization explores coastal science communication, based on the study <a href="https://www.sciencedirect.com/science/article/pii/S002532271000068X" target="_blank">Historical evolution of the Columbia River littoral cell</a>.</p> <p>Special thanks to Washington Department of Ecology for providing the data of historic shorelines and change rates.</p> <h3>Other Resources</h3> <li><a href="https://figshare.com/articles/figure/North_Willapa_Bay_Shoreline_Erosion_and_Dune_Restoration_Graphics/28281572/1?file=52014599" target="_blank">North Willapa Bay Shoreline Erosion and Dune Restoration Graphics</a></li></div></div> <footer><p>- Xiao</p></footer></main>');function Pw(n){var e=Cw(),t=bn(Rt(e),2),i=Rt(t),r=Rt(i);Rw(r,{}),zi(n,e)}Om(Pw,{target:document.getElementById("app")});
