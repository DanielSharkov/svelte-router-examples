var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var router = {exports: {}};

(function (module, exports) {
	!function(t,e){e(exports);}(commonjsGlobal,(function(t){function e(t,e,n,o){return new(n||(n=Promise))((function(r,i){function s(t){try{u(o.next(t));}catch(t){i(t);}}function a(t){try{u(o.throw(t));}catch(t){i(t);}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e);}))).then(s,a);}u((o=o.apply(t,e||[])).next());}))}function n(t,e,n,o){if("a"===n&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return "m"===n?o:"a"===n?o.call(t):o?o.value:e.get(t)}function o(){}function r(t,e){for(const n in e)t[n]=e[n];return t}function i(t){return t()}function s(){return Object.create(null)}function a(t){t.forEach(i);}function u(t){return "function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,...e){if(null==t)return o;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function h(t){let e;return c(t,(t=>e=t))(),e}function f(t,e,n,o){return t[1]&&o?r(n.ctx.slice(),t[1](o(e))):n.ctx}function p(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t,e,n){t.insertBefore(e,n||null);}function m(t){t.parentNode.removeChild(t);}function y(){return t="",document.createTextNode(t);var t;}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n);}function v(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:g(t,o,e[o]);}function w(t,e){return new t(e)}let $;function b(t){$=t;}function _(){if(!$)throw new Error("Function called outside component initialization");return $}function k(t){return _().$$.context.get(t)}const P=[],E=[],R=[],x=[],C=Promise.resolve();let L=!1;function S(){L||(L=!0,C.then(T));}function z(){return S(),C}function Q(t){R.push(t);}const O=new Set;let N=0;function T(){const t=$;do{for(;N<P.length;){const t=P[N];N++,b(t),A(t.$$);}for(b(null),P.length=0,N=0;E.length;)E.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];O.has(e)||(O.add(e),e());}R.length=0;}while(P.length);for(;x.length;)x.pop()();L=!1,O.clear(),b(t);}function A(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q);}}const U=new Set;let j;function D(){j={r:0,c:[],p:j};}function B(){j.r||a(j.c),j=j.p;}function I(t,e){t&&t.i&&(U.delete(t),t.i(e));}function H(t,e,n,o){if(t&&t.o){if(U.has(t))return;U.add(t),j.c.push((()=>{U.delete(t),o&&(n&&t.d(1),o());})),t.o(e);}else o&&o();}function M(t){t&&t.c();}function Z(t,e,n,o){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),o||Q((()=>{const e=t.$$.on_mount.map(i).filter(u);t.$$.on_destroy?t.$$.on_destroy.push(...e):a(e),t.$$.on_mount=[];})),s.forEach(Q);}function q(t,e){const n=t.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[]);}function F(t,e,n,r,i,u,l,c=[-1]){const h=$;b(t);const f=t.$$={fragment:null,ctx:[],props:u,update:o,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:s(),dirty:c,skip_bound:!1,root:e.target||h.$$.root};l&&l(f.root);let p=!1;if(f.ctx=n?n(t,e.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&i(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),p&&function(t,e){-1===t.$$.dirty[0]&&(P.push(t),S(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31;}(t,e)),n})):[],f.update(),p=!0,a(f.before_update),f.fragment=!!r&&r(f.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);f.fragment&&f.fragment.l(t),t.forEach(m);}else f.fragment&&f.fragment.c();e.intro&&I(t.$$.fragment),Z(t,e.target,e.anchor,e.customElement),T();}b(h);}class J{$destroy(){q(this,1),this.$destroy=o;}$on(t,e){if(!u(e))return o;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1);}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1);}}const V=[];function W(t,e=o){let n;const r=new Set;function i(e){if(l(t,e)&&(t=e,n)){const e=!V.length;for(const e of r)e[1](),V.push(e,t);if(e){for(let t=0;t<V.length;t+=2)V[t][0](V[t+1]);V.length=0;}}}return {set:i,update:function(e){i(e(t));},subscribe:function(s,a=o){const u=[s,a];return r.add(u),1===r.size&&(n=e(i)||o),s(t),()=>{r.delete(u),0===r.size&&(n(),n=null);}}}}function G(t){let e,n,o;var r=t[1].component;function i(t){return {props:{router:t[0],params:t[1].params,urlQuery:t[1].urlQuery,props:t[1].props}}}return r&&(e=w(r,i(t)),e.$on("hasOutro",t[3]),e.$on("outroDone",t[4])),{c(){e&&M(e.$$.fragment),n=y();},m(t,r){e&&Z(e,t,r),d(t,n,r),o=!0;},p(t,o){const s={};if(1&o&&(s.router=t[0]),2&o&&(s.params=t[1].params),2&o&&(s.urlQuery=t[1].urlQuery),2&o&&(s.props=t[1].props),r!==(r=t[1].component)){if(e){D();const t=e;H(t.$$.fragment,1,0,(()=>{q(t,1);})),B();}r?(e=w(r,i(t)),e.$on("hasOutro",t[3]),e.$on("outroDone",t[4]),M(e.$$.fragment),I(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null;}else r&&e.$set(s);},i(t){o||(e&&I(e.$$.fragment,t),o=!0);},o(t){e&&H(e.$$.fragment,t),o=!1;},d(t){t&&m(n),e&&q(e,t);}}}function K(t){let e,n,o=t[2]&&G(t);return {c(){o&&o.c(),e=y();},m(t,r){o&&o.m(t,r),d(t,e,r),n=!0;},p(t,[n]){t[2]?o?(o.p(t,n),4&n&&I(o,1)):(o=G(t),o.c(),I(o,1),o.m(e.parentNode,e)):o&&(D(),H(o,1,1,(()=>{o=null;})),B());},i(t){n||(I(o),n=!0);},o(t){H(o),n=!1;},d(t){o&&o.d(t),t&&m(e);}}}function X(t,e,n){let r,i,s=o,a=()=>(s(),s=c(u,(t=>n(6,i=t))),u);t.$$.on_destroy.push((()=>s()));let{router:u}=e;if(a(),!u||!u.subscribe)throw new Error("[SvelteRouter] <RouterViewport> is missing a router instance");var l,h;l="svelte_router",h=u,_().$$.context.set(l,h);let f=!1;let p={name:"",path:"",component:void 0,params:void 0,urlQuery:void 0,props:void 0};return t.$$set=t=>{"router"in t&&a(n(0,u=t.router));},t.$$.update=()=>{66&t.$$.dirty&&n(2,r=i.location.name===p.name&&i.location.component===p.component&&JSON.stringify(i.location.params||{})===JSON.stringify(p.params||{})&&i.location.urlQuery===p.urlQuery),36&t.$$.dirty&&(r||f||async function(){await z(),n(1,p={...i.location});}());},[u,p,r,function(){n(5,f=!0);},function(){r||n(5,f=!1);},f,i]}function Y(t){let e,n,o,i;const s=t[7].default,a=function(t,e,n,o){if(t){const r=f(t,e,n,o);return t[0](r)}}(s,t,t[6],null);let u=[{href:t[0]},t[1]],l={};for(let t=0;t<u.length;t+=1)l=r(l,u[t]);return {c(){var t;t="a",e=document.createElement(t),a&&a.c(),v(e,l);},m(r,s){var u,l,c,h,f;d(r,e,s),a&&a.m(e,null),n=!0,o||(u=e,l="click",c=function(t){return function(e){return e.stopPropagation(),t.call(this,e)}}((f=t[2],function(t){return t.preventDefault(),f.call(this,t)})),u.addEventListener(l,c,h),i=()=>u.removeEventListener(l,c,h),o=!0);},p(t,[o]){a&&a.p&&(!n||64&o)&&function(t,e,n,o,r,i){if(r){const s=f(e,n,o,i);t.p(s,r);}}(a,s,t,t[6],n?function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(s,t[6],o,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return -1}(t[6]),null),v(e,l=function(t,e){const n={},o={},r={$$scope:1};let i=t.length;for(;i--;){const s=t[i],a=e[i];if(a){for(const t in s)t in a||(o[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[i]=a;}else for(const t in s)r[t]=1;}for(const t in o)t in n||(n[t]=void 0);return n}(u,[(!n||1&o)&&{href:t[0]},t[1]]));},i(t){n||(I(a,t),n=!0);},o(t){H(a,t),n=!1;},d(t){t&&m(e),a&&a.d(t),o=!1,i();}}}function tt(t,e,n){let{$$slots:o={},$$scope:i}=e,{to:s}=e,{params:a}=e,{router:u}=e;if("string"!=typeof s||s.length<1)throw new Error('[SvelteRouter] <RouterLink> is missing the "to" prop');const l=u||k("svelte_router");if(!l)throw new Error("[SvelteRouter] <RouterLink> used outside a router instance <RouterViewport>");const c=Object.assign({},e);let h;try{h=l.nameToPath(s,a);}catch(t){throw new Error(`[SvelteRouter] <RouterLink> (to: "${s}"): `+t)}return delete c.to,delete c.params,delete c.$$slots,delete c.$$scope,t.$$set=t=>{n(10,e=r(r({},e),p(t))),"to"in t&&n(3,s=t.to),"params"in t&&n(4,a=t.params),"router"in t&&n(5,u=t.router),"$$scope"in t&&n(6,i=t.$$scope);},e=p(e),[h,c,function(){if(!l)throw new Error("[SvelteRouter] <RouterLink> missing Router instance");try{l.push(s,a);}catch(t){throw new Error(`[SvelteRouter] <RouterLink> (to: "${s}"): `+t)}},s,a,u,i,o]}var et,nt,ot;function rt(t){return new Error("[SvelteRouter] "+t)}!function(t){t.CapitalA="A",t.CapitalZ="Z",t.LowerA="a",t.LowerZ="z",t.ExclamationMark="!",t.Dollar="$",t.Ampersand="&",t.Apostrophe="'",t.LeftParenthesis="(",t.RightParenthesis=")",t.LeftBracket="[",t.RightBracket="]",t.Asterisk="*",t.Plus="+",t.Comma=",",t.Hyphen="-",t.Period=".",t.Semicolon=";",t.Colon=":",t.Equals="=",t.At="@",t.Underscore="_",t.Tilde="~",t.Slash="/",t.Backslash="\\",t.Space=" ",t.Hash="#",t.QuestionMark="?";}(ot||(ot={}));function it(t){return t>=ot.CapitalA&&t<=ot.CapitalZ||t>=ot.LowerA&&t<=ot.LowerZ}function st(t){return !Number.isNaN(parseInt(t))}function at(t){if(st(t)||it(t))return !0;switch(t){case ot.ExclamationMark:case ot.Dollar:case ot.Ampersand:case ot.Apostrophe:case ot.LeftParenthesis:case ot.RightParenthesis:case ot.Asterisk:case ot.Plus:case ot.Comma:case ot.Hyphen:case ot.Period:case ot.Semicolon:case ot.Equals:case ot.At:case ot.Underscore:case ot.Tilde:return !0}return !1}function ut(t){if(t.length<1)return rt("invalid route name (empty)");for(const e of t)if(!st(e)&&!it(e)){switch(e){case ot.Hyphen:case ot.Period:case ot.Underscore:continue}return rt(`unexpected character ${e} in route name "${t}"`)}return null}function lt(t){if("string"!=typeof t)throw `unexpected type of route path "${t}" (${typeof t})`;if(t.length<1)throw "invalid path (empty)";const e={tokens:[],params:[]};function n(n,o,r){const i=t.substring(o,r);if(n){if(i.length<1)return new Error(`missing parameter name at ${o}`);if(i in e.params)return new Error(`redeclared parameter '${i}' at ${o}`);n&&e.params.push(i);}return e.tokens.push(i),null}if(t.charAt(0)!==ot.Slash)throw "a path template must begin with a slash";let o=!0,r=!1,i=1;for(let e=0;e<t.length;e++){const s=t[e];if(o){if(s==ot.Slash)continue;if(o=!1,s==ot.Colon)r=!0,i=e+1;else {if(!at(s))throw `unexpected '${s}' at ${e}`;r=!1,i=e;}}else if(s==ot.Slash){o=!0;const t=n(r,i,e);if(null!=t)throw t;r=!1;}else if(!at(s))throw `unexpected '${s}' at ${e}`;if(e+1>=t.length){if(o)break;if(s==ot.Colon)throw `missing parameter name at ${e}`;const a=n(r,i,t.length);if(null!=a)throw a}}return e}function ct(t){if(t[0]!==ot.QuestionMark)return;const e={};for(let n of t.substring(1,t.length).split(ot.Ampersand)){if(!n)return;n=n.split(ot.Plus).join(ot.Space);const t=n.indexOf(ot.Equals),o=t>-1?n.substring(0,t):n,r=t>-1?decodeURIComponent(n.substring(t+1)):"";e[decodeURIComponent(o)]=r;}return e}et=new WeakMap,nt=new WeakMap,t.RouteLink=class extends J{constructor(t){super(),F(this,t,tt,Y,l,{to:3,params:4,router:5});}},t.SvelteRouter=class{constructor(t){var e,o,r,i;if(et.set(this,W({isLoading:!0,routes:{},location:{path:"",name:"",params:void 0,urlQuery:void 0,component:void 0,lazyComponent:void 0,props:void 0}})),this.subscribe=n(this,et,"f").subscribe,nt.set(this,W({routes:{},index:{name:"",token:"",param:void 0,component:void 0,routes:{}}})),this._beforePush={},this._beforePushOrder=[],this._routeUpdatedEventName="routeUpdated",!t.routes||Object.keys(t.routes).length<1)throw rt("missing routes");if(!((null===(e=t.window)||void 0===e?void 0:e.location)&&(null===(o=t.window)||void 0===o?void 0:o.history)&&(null===(r=t.window)||void 0===r?void 0:r.addEventListener)&&t.window.removeEventListener&&(null===(i=t.window)||void 0===i?void 0:i.dispatchEvent)))throw rt("the provided window isn't implementing the interface [location, history, addEventListener, removeEventListener dispatchEvent]");if(this._window=t.window,t.scrollingElement){if(!t.scrollingElement.scrollTo||Number.isNaN(t.scrollingElement.scrollTop)||Number.isNaN(t.scrollingElement.scrollLeft)||!t.scrollingElement.addEventListener||!t.scrollingElement.removeEventListener)throw rt("the provided scrollingElement isn't implementing the interface [scrollTo, scrollTop, scrollLeft, addEventListener, removeEventListener]");this._scrollingElement=t.scrollingElement;}if(t.beforePush&&(this._globalBeforePushHookID="__gloal_before_push_hook",this._beforePush[this._globalBeforePushHookID]=t.beforePush,this._beforePushOrder.push(this._globalBeforePushHookID)),t.fallback&&(this._fallback=t.fallback,"boolean"!=typeof this._fallback.replace&&(this._fallback.replace=!0)),t.basePath&&"/"!==t.basePath)try{this._basePath=lt(t.basePath);}catch(s){throw rt(`the base URL defines an invalid path template: ${s}`)}let s=null;if(n(this,nt,"f").update((e=>{var n,o,r;for(const i in t.routes){const a=t.routes[i],u=a.path;if(s=ut(i),null!==s)return e;if(i in e.routes)return s=rt(`redeclaration of route "${i}"`),e;let l;try{l=lt(u);}catch(t){return s=rt(`route "${i}" defines an invalid path template: ${t}`),e}if(i in e.routes)return s=rt(`duplicate of route "${i}"`),e;if(void 0===a.component&&void 0===a.lazyComponent)return s=rt(`missing route component (on route "${i}", "${a.path}")`),e;if(a.component&&a.lazyComponent)return s=rt(`cannot use component and lazyComponent (on route "${i}", "${a.path}")`),e;e.routes[i]={path:l,component:void 0!==a.component?a.component:void 0!==(null===(n=a.lazyComponent)||void 0===n?void 0:n.loading)?a.lazyComponent.loading:null,lazyComponent:void 0!==a.lazyComponent?{component:a.lazyComponent.component,loading:null===(o=a.lazyComponent)||void 0===o?void 0:o.loading,fallback:null===(r=a.lazyComponent)||void 0===r?void 0:r.fallback,fetched:!1}:void 0,props:a.props};let c=e.index;if(l.tokens.length<=0)c.name=i;else for(let t=0;t<l.tokens.length;t++){const e=l.tokens[t];if(l.params.includes(e))if(null!=c.param)c=c.param;else {const t={name:i,token:e,param:void 0,routes:{},props:a.props,component:void 0};c.param=t,c=t;}else {const t=c.routes[e];if(t)c=t;else {const t={name:i,token:e,param:void 0,routes:{},props:a.props,component:void 0};c.routes[e]=t,c=t;}}}c.component=null!==e.routes[i].component?e.routes[i].component:void 0,c.lazyComponent=e.routes[i].lazyComponent;}return e})),null!==s)throw s;n(this,et,"f").update((t=>{const e=h(n(this,nt,"f")).routes;for(const n in e)t.routes[n]=e[n];return t})),this._window.addEventListener("popstate",this._onPopState.bind(this),{passive:!0}),this._initRoute();}_initRoute(){return e(this,void 0,void 0,(function*(){const t=this._window.location.pathname+this._window.location.search;try{const e=this._window.history.state;if(!(null==e?void 0:e.name))throw 0;yield this._setCurrentRoute(t,e.name,e.params,e.urlQuery,!1,!0);}catch(e){try{const e=this.getRoute(t);yield this._setCurrentRoute(t,e.name,e.params,e.urlQuery,!0);}catch(t){if(!this._fallback)throw t;yield this._setRouteFallback();}}}))}_dispatchRouteUpdated(){this._window.dispatchEvent(new CustomEvent(this._routeUpdatedEventName,{detail:h(n(this,et,"f")).location}));}_setRouteFallback(){if(this._fallback)return this._setCurrentRoute(this._window.location.pathname+this._window.location.search,this._fallback.name,void 0,void 0,this._fallback.replace,!0);throw rt("unexpected: fallback not set")}_onPopState(t){return e(this,void 0,void 0,(function*(){if(t.state)try{return yield this._setCurrentRoute(t.state.path,t.state.name,t.state.params,t.state.urlQuery,!0,!0),void(this._scrollingElement&&t.state.scroll&&(yield z(),this._scrollingElement.scrollTo({left:t.state.scroll[0],top:t.state.scroll[1]})))}catch(t){if(!this._fallback)throw t}if(!this._fallback)throw rt(`unexpected history state: ${JSON.stringify(t.state)}`);yield this._setRouteFallback();}))}removeBeforePush(t){const e=this._beforePushOrder.indexOf(t);if(e<0||this._globalBeforePushHookID&&this._globalBeforePushHookID===t)throw rt(`hook by ID "${t}" not subscribed`);delete this._beforePush[t],this._beforePushOrder.splice(e,1);}addBeforePushHook(t,e){if("string"!=typeof t)throw rt(`provided before push hook ID not of type string (${typeof t})`);if(""===t)throw rt("invalid before push hook ID (empty)");if(this._beforePushOrder.includes(t))throw rt(`before push hook by ID "${t}" is already existing`);return this._beforePushOrder.push(t),this._beforePush[t]=e,()=>this.removeBeforePush(t)}verifyNameAndParams(t,e){if(!t)throw rt("missing parameter name");const o=h(n(this,nt,"f")).routes[t];if(!o)throw rt(`route "${t}" not found`);const r=o.path.params;if(r.length>0){if(!e)throw rt(`missing parameters [${r}] for route "${t}"`);for(const n of o.path.params)if(!(n in e))throw rt(`missing parameter "${n}" for route "${t}"`)}return o}getRoute(t){const{pathTokens:e,urlQuery:o}=function(t){if("string"!=typeof t)throw rt(`unexpected path type (${typeof t})`);if(t.length<1)throw rt("invalid path (empty)");const e=[];if(t[0]!==ot.Slash)throw rt("a path path must begin with a slash");let n,o=!0,r=1;for(let n=1;n<t.length;n++){const i=t[n];if(o){if(i===ot.Slash)continue;if(o=!1,!at(i))throw rt(`unexpected "${i}" at ${n}`);r=n;}else if(i==ot.Slash)o=!0,e.push(t.substring(r,n));else {if(i==ot.QuestionMark){e.push(t.substring(r,n));break}if(!at(i))throw rt(`unexpected "${i}" at ${n}`)}if(n+1>=t.length){if(o)break;e.push(t.substring(r,t.length));}}const i=t.indexOf(ot.QuestionMark);if(i>-1&&i!==t.length-1){const e=t.indexOf(ot.Hash);(i>-1&&e<0||e>=t.length-1)&&(n=ct(t.substring(i)));}return {pathTokens:e,urlQuery:n}}(t);let r=h(n(this,nt,"f")).index;const i={};if(0===e.length&&!this._basePath){if(!r.name)throw rt(`URL "${t}" doesn't resolve any route`);return {name:r.name}}for(let n=0;n<e.length;n++){const s=e[n];if(!(this._basePath&&this._basePath.tokens.includes(s)&&n<this._basePath.tokens.length))if(s in r.routes)r=r.routes[s];else {if(!r.param)throw rt(`URL "${t}" doesn't resolve any route`);r=r.param,i[r.token]=s;}if(n+1>=e.length){if(r.component||r.lazyComponent)return {name:r.name,params:i||void 0,urlQuery:o||void 0};throw rt(`URL "${t}" doesn't resolve any route`)}}throw rt("unexpected")}stringifyRouteToURL(t,e,n){let o="";if(this._basePath)for(const t of this._basePath.tokens)o+=`/${t}`;if(t.tokens.length<1)return ""===o?"/":o;for(const n of t.tokens){if(t.params.includes(n)){if(void 0===e)throw rt(`expected parameter '${n}' but got '${e}'`);o+=`/${e[n]}`;}else o+=`/${n}`;}if(n){const t=Object.keys(n).length;if(t>0){o+="?";let e=0;for(const r in n)o+=r+"="+n[r],e<t-1&&(o+="&"),e++;}}return o}nameToPath(t,e,o){const r=h(n(this,nt,"f")).routes;if("string"!=typeof t||""===t||!(t in r))throw rt(`invalid route name: '${t}'`);return this.stringifyRouteToURL(h(n(this,nt,"f")).routes[t].path,e,o)}_setCurrentRoute(t,o,r,i,s=!1,a=!1){return e(this,void 0,void 0,(function*(){let e=this.verifyNameAndParams(o,r);if(n(this,et,"f").update((t=>(t.isLoading=!0,t))),this._beforePushOrder.length>0){const s=h(n(this,et,"f")).location;for(const n of this._beforePushOrder)try{yield new Promise(((t,e)=>{this._beforePush[n]({pendingRoute:{name:o,params:r,urlQuery:i},location:s,resolve:()=>t(),reject:e});}));}catch(n){if(void 0===n){if(""===s.name)throw rt("unable to handle before push rejection, no current location is set to fall back to");return {name:s.name,path:this.nameToPath(s.name,s.params,s.urlQuery),params:s.params,urlQuery:s.urlQuery}}if(!(null==n?void 0:n.name))throw rt(`before-push hook must reject with a return of a new route; returned: ${JSON.stringify(n)}`);const a=n;console.log("just reject",a),o=a.name,r=a.params,i=a.urlQuery,t=this.nameToPath(o,r,i),e=this.verifyNameAndParams(o,r);break}}if(this._fallback&&o===this._fallback.name||(t=this.stringifyRouteToURL(e.path,r,i)),void 0===e.lazyComponent||e.lazyComponent.fetched||e.lazyComponent.component().then((t=>{n(this,nt,"f").update((n=>{const r=n.routes[o];return void 0!==r.lazyComponent?(r.component=t,r.lazyComponent.fetched=!0):e=rt("unexpected, component lazy loaded but route isn't internally existing."),function t(e,n,o){if(e.name===n)return e.component=o,!0;for(const r in e.routes)if(t(e.routes[r],n,o))return !0;return !1}(n.index,o,t),n}));let e=null;if(n(this,et,"f").update((n=>{const r=n.routes[o];return void 0!==r.lazyComponent?(r.component=t,r.lazyComponent.fetched=!0):e=rt("unexpected, component lazy loaded but route isn't internally existing."),n.location.name===o&&(n.location.component=t),n})),null!==e)throw e})).catch((t=>{n(this,et,"f").update((t=>{var e;const n=t.routes[o];return t.location.name===o&&void 0!==(null===(e=n.lazyComponent)||void 0===e?void 0:e.fallback)&&(t.location.component=n.lazyComponent.fallback),t})),console.error(`[SvelteRouter] failed to lazy load route "${o}": ${t}`);})),n(this,et,"f").update((n=>(n.isLoading=!1,n.location={name:o,path:t,params:r,urlQuery:i,component:null!==e.component?e.component:void 0,lazyComponent:e.lazyComponent,props:e.props},n))),!a){const e=this._window.history.state;s?this._window.history.replaceState({name:o,params:r,urlQuery:i},"",t):e&&e.name==o&&t==this._window.location.pathname+this._window.location.search||(e&&this._scrollingElement&&this._window.history.replaceState({name:e.name,params:e.params,urlQuery:e.urlQuery,scroll:[this._scrollingElement.scrollLeft,this._scrollingElement.scrollTop]},""),this._window.history.pushState({name:o,params:r,urlQuery:i},"",t)),this._scrollingElement&&this._scrollingElement.scrollTo({top:0,left:0});}return this._dispatchRouteUpdated(),{name:o,path:t,params:r,urlQuery:i}}))}push(t,e,n){let o;return o="string"==typeof n?ct(n):n,this._setCurrentRoute("",t,e,o)}pushPath(t){try{const e=this.getRoute(t);return this._setCurrentRoute(t,e.name,e.params,e.urlQuery)}catch(e){if(this._fallback)return this._setCurrentRoute(t,this._fallback.name,void 0,void 0);throw e}}back(){this._window.history.back();}forward(){this._window.history.forward();}destroy(){for(const t of this._beforePushOrder)delete this._beforePush[t];this._beforePushOrder=[],this._window.removeEventListener("popstate",this._onPopState.bind(this));}},t.Viewport=class extends J{constructor(t){super(),F(this,t,X,K,l,{router:0});}},t.link=function(t,e){if(!t||!t.tagName||"a"!=t.tagName.toLowerCase())throw rt('<RouterLink> The action "link" can only be used on <a> tags with a href attribute');const n=e||k("svelte_router");if(!n)throw rt("<RouterLink> invalid router instance. Either use this component inside a <RouterViewport/> or provide the router instance in the paramters.");const o=t.getAttribute("href");if(!o||o.length<1)throw rt(`invalid URL "${o}" as "href"`);const r=n.getRoute(o);function i(t){t.preventDefault(),n.push(r.name,r.params,r.urlQuery);}return t.addEventListener("click",i),{destroy(){t.removeEventListener("click",i);}}};}));
} (router, router.exports));

function noop() { }
const identity = x => x;
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function is_promise(value) {
    return value && typeof value === 'object' && typeof value.then === 'function';
}
function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
        loc: { file, line, column, char }
    };
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
let src_url_equal_anchor;
function src_url_equal(element_src, url) {
    if (!src_url_equal_anchor) {
        src_url_equal_anchor = document.createElement('a');
    }
    src_url_equal_anchor.href = url;
    return element_src === src_url_equal_anchor.href;
}
function is_empty(obj) {
    return Object.keys(obj).length === 0;
}
function validate_store(store, name) {
    if (store != null && typeof store.subscribe !== 'function') {
        throw new Error(`'${name}' is not a store with a 'subscribe' method`);
    }
}
function subscribe(store, ...callbacks) {
    if (store == null) {
        return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
    let value;
    subscribe(store, _ => value = _)();
    return value;
}
function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn
        ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
        : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if ($$scope.dirty === undefined) {
            return lets;
        }
        if (typeof lets === 'object') {
            const merged = [];
            const len = Math.max($$scope.dirty.length, lets.length);
            for (let i = 0; i < len; i += 1) {
                merged[i] = $$scope.dirty[i] | lets[i];
            }
            return merged;
        }
        return $$scope.dirty | lets;
    }
    return $$scope.dirty;
}
function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
        slot.p(slot_context, slot_changes);
    }
}
function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
        const dirty = [];
        const length = $$scope.ctx.length / 32;
        for (let i = 0; i < length; i++) {
            dirty[i] = -1;
        }
        return dirty;
    }
    return -1;
}
function exclude_internal_props(props) {
    const result = {};
    for (const k in props)
        if (k[0] !== '$')
            result[k] = props[k];
    return result;
}
function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

const is_client = typeof window !== 'undefined';
let now = is_client
    ? () => window.performance.now()
    : () => Date.now();
let raf = is_client ? cb => requestAnimationFrame(cb) : noop;

const tasks = new Set();
function run_tasks(now) {
    tasks.forEach(task => {
        if (!task.c(now)) {
            tasks.delete(task);
            task.f();
        }
    });
    if (tasks.size !== 0)
        raf(run_tasks);
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */
function loop(callback) {
    let task;
    if (tasks.size === 0)
        raf(run_tasks);
    return {
        promise: new Promise(fulfill => {
            tasks.add(task = { c: callback, f: fulfill });
        }),
        abort() {
            tasks.delete(task);
        }
    };
}
function append(target, node) {
    target.appendChild(node);
}
function get_root_for_style(node) {
    if (!node)
        return document;
    const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
    if (root && root.host) {
        return root;
    }
    return node.ownerDocument;
}
function append_empty_stylesheet(node) {
    const style_element = element('style');
    append_stylesheet(get_root_for_style(node), style_element);
    return style_element.sheet;
}
function append_stylesheet(node, style) {
    append(node.head || node, style);
    return style.sheet;
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function empty() {
    return text('');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function prevent_default(fn) {
    return function (event) {
        event.preventDefault();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function stop_propagation(fn) {
    return function (event) {
        event.stopPropagation();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function set_attributes(node, attributes) {
    // @ts-ignore
    const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
    for (const key in attributes) {
        if (attributes[key] == null) {
            node.removeAttribute(key);
        }
        else if (key === 'style') {
            node.style.cssText = attributes[key];
        }
        else if (key === '__value') {
            node.value = node[key] = attributes[key];
        }
        else if (descriptors[key] && descriptors[key].set) {
            node[key] = attributes[key];
        }
        else {
            attr(node, key, attributes[key]);
        }
    }
}
function children(element) {
    return Array.from(element.childNodes);
}
function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, bubbles, cancelable, detail);
    return e;
}

// we need to store the information for multiple documents because a Svelte application could also contain iframes
// https://github.com/sveltejs/svelte/issues/3624
const managed_styles = new Map();
let active = 0;
// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
    let hash = 5381;
    let i = str.length;
    while (i--)
        hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
    return hash >>> 0;
}
function create_style_information(doc, node) {
    const info = { stylesheet: append_empty_stylesheet(node), rules: {} };
    managed_styles.set(doc, info);
    return info;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = '{\n';
    for (let p = 0; p <= 1; p += step) {
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
    }
    const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
    const name = `__svelte_${hash(rule)}_${uid}`;
    const doc = get_root_for_style(node);
    const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
    if (!rules[name]) {
        rules[name] = true;
        stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || '';
    node.style.animation = `${animation ? `${animation}, ` : ''}${name} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name;
}
function delete_rule(node, name) {
    const previous = (node.style.animation || '').split(', ');
    const next = previous.filter(name
        ? anim => anim.indexOf(name) < 0 // remove specific animation
        : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
    );
    const deleted = previous.length - next.length;
    if (deleted) {
        node.style.animation = next.join(', ');
        active -= deleted;
        if (!active)
            clear_rules();
    }
}
function clear_rules() {
    raf(() => {
        if (active)
            return;
        managed_styles.forEach(info => {
            const { ownerNode } = info.stylesheet;
            // there is no ownerNode if it runs on jsdom.
            if (ownerNode)
                detach(ownerNode);
        });
        managed_styles.clear();
    });
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
/**
 * The `onMount` function schedules a callback to run as soon as the component has been mounted to the DOM.
 * It must be called during the component's initialisation (but doesn't need to live *inside* the component;
 * it can be called from an external module).
 *
 * `onMount` does not run inside a [server-side component](/docs#run-time-server-side-component-api).
 *
 * https://svelte.dev/docs#run-time-svelte-onmount
 */
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
/**
 * Creates an event dispatcher that can be used to dispatch [component events](/docs#template-syntax-component-directives-on-eventname).
 * Event dispatchers are functions that can take two arguments: `name` and `detail`.
 *
 * Component events created with `createEventDispatcher` create a
 * [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent).
 * These events do not [bubble](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture).
 * The `detail` argument corresponds to the [CustomEvent.detail](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail)
 * property and can contain any type of data.
 *
 * https://svelte.dev/docs#run-time-svelte-createeventdispatcher
 */
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail, { cancelable = false } = {}) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail, { cancelable });
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
            return !event.defaultPrevented;
        }
        return true;
    };
}
/**
 * Associates an arbitrary `context` object with the current component and the specified `key`
 * and returns that object. The context is then available to children of the component
 * (including slotted content) with `getContext`.
 *
 * Like lifecycle functions, this must be called during component initialisation.
 *
 * https://svelte.dev/docs#run-time-svelte-setcontext
 */
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
    return context;
}
/**
 * Retrieves the context that belongs to the closest parent component with the specified `key`.
 * Must be called during component initialisation.
 *
 * https://svelte.dev/docs#run-time-svelte-getcontext
 */
function getContext(key) {
    return get_current_component().$$.context.get(key);
}

const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function tick() {
    schedule_update();
    return resolved_promise;
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
// flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.
const seen_callbacks = new Set();
let flushidx = 0; // Do *not* move this inside the flush() function
function flush() {
    const saved_component = current_component;
    do {
        // first, call beforeUpdate functions
        // and update components
        while (flushidx < dirty_components.length) {
            const component = dirty_components[flushidx];
            flushidx++;
            set_current_component(component);
            update(component.$$);
        }
        set_current_component(null);
        dirty_components.length = 0;
        flushidx = 0;
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}

let promise;
function wait() {
    if (!promise) {
        promise = Promise.resolve();
        promise.then(() => {
            promise = null;
        });
    }
    return promise;
}
function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
    else if (callback) {
        callback();
    }
}
const null_transition = { duration: 0 };
function create_bidirectional_transition(node, fn, params, intro) {
    let config = fn(node, params);
    let t = intro ? 0 : 1;
    let running_program = null;
    let pending_program = null;
    let animation_name = null;
    function clear_animation() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function init(program, duration) {
        const d = (program.b - t);
        duration *= Math.abs(d);
        return {
            a: t,
            b: program.b,
            d,
            duration,
            start: program.start,
            end: program.start + duration,
            group: program.group
        };
    }
    function go(b) {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        const program = {
            start: now() + delay,
            b
        };
        if (!b) {
            // @ts-ignore todo: improve typings
            program.group = outros;
            outros.r += 1;
        }
        if (running_program || pending_program) {
            pending_program = program;
        }
        else {
            // if this is an intro, and there's a delay, we need to do
            // an initial tick and/or apply CSS animation immediately
            if (css) {
                clear_animation();
                animation_name = create_rule(node, t, b, duration, delay, easing, css);
            }
            if (b)
                tick(0, 1);
            running_program = init(program, duration);
            add_render_callback(() => dispatch(node, b, 'start'));
            loop(now => {
                if (pending_program && now > pending_program.start) {
                    running_program = init(pending_program, duration);
                    pending_program = null;
                    dispatch(node, running_program.b, 'start');
                    if (css) {
                        clear_animation();
                        animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                    }
                }
                if (running_program) {
                    if (now >= running_program.end) {
                        tick(t = running_program.b, 1 - t);
                        dispatch(node, running_program.b, 'end');
                        if (!pending_program) {
                            // we're done
                            if (running_program.b) {
                                // intro — we can tidy up immediately
                                clear_animation();
                            }
                            else {
                                // outro — needs to be coordinated
                                if (!--running_program.group.r)
                                    run_all(running_program.group.c);
                            }
                        }
                        running_program = null;
                    }
                    else if (now >= running_program.start) {
                        const p = now - running_program.start;
                        t = running_program.a + running_program.d * easing(p / running_program.duration);
                        tick(t, 1 - t);
                    }
                }
                return !!(running_program || pending_program);
            });
        }
    }
    return {
        run(b) {
            if (is_function(config)) {
                wait().then(() => {
                    // @ts-ignore
                    config = config();
                    go(b);
                });
            }
            else {
                go(b);
            }
        },
        end() {
            clear_animation();
            running_program = pending_program = null;
        }
    };
}

function handle_promise(promise, info) {
    const token = info.token = {};
    function update(type, index, key, value) {
        if (info.token !== token)
            return;
        info.resolved = value;
        let child_ctx = info.ctx;
        if (key !== undefined) {
            child_ctx = child_ctx.slice();
            child_ctx[key] = value;
        }
        const block = type && (info.current = type)(child_ctx);
        let needs_flush = false;
        if (info.block) {
            if (info.blocks) {
                info.blocks.forEach((block, i) => {
                    if (i !== index && block) {
                        group_outros();
                        transition_out(block, 1, 1, () => {
                            if (info.blocks[i] === block) {
                                info.blocks[i] = null;
                            }
                        });
                        check_outros();
                    }
                });
            }
            else {
                info.block.d(1);
            }
            block.c();
            transition_in(block, 1);
            block.m(info.mount(), info.anchor);
            needs_flush = true;
        }
        info.block = block;
        if (info.blocks)
            info.blocks[index] = block;
        if (needs_flush) {
            flush();
        }
    }
    if (is_promise(promise)) {
        const current_component = get_current_component();
        promise.then(value => {
            set_current_component(current_component);
            update(info.then, 1, info.value, value);
            set_current_component(null);
        }, error => {
            set_current_component(current_component);
            update(info.catch, 2, info.error, error);
            set_current_component(null);
            if (!info.hasCatch) {
                throw error;
            }
        });
        // if we previously had a then/catch block, destroy it
        if (info.current !== info.pending) {
            update(info.pending, 0);
            return true;
        }
    }
    else {
        if (info.current !== info.then) {
            update(info.then, 1, info.value, promise);
            return true;
        }
        info.resolved = promise;
    }
}
function update_await_block_branch(info, ctx, dirty) {
    const child_ctx = ctx.slice();
    const { resolved } = info;
    if (info.current === info.then) {
        child_ctx[info.value] = resolved;
    }
    if (info.current === info.catch) {
        child_ctx[info.error] = resolved;
    }
    info.block.p(child_ctx, dirty);
}

const globals = (typeof window !== 'undefined'
    ? window
    : typeof globalThis !== 'undefined'
        ? globalThis
        : global);

function get_spread_update(levels, updates) {
    const update = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
        const o = levels[i];
        const n = updates[i];
        if (n) {
            for (const key in o) {
                if (!(key in n))
                    to_null_out[key] = 1;
            }
            for (const key in n) {
                if (!accounted_for[key]) {
                    update[key] = n[key];
                    accounted_for[key] = 1;
                }
            }
            levels[i] = n;
        }
        else {
            for (const key in o) {
                accounted_for[key] = 1;
            }
        }
    }
    for (const key in to_null_out) {
        if (!(key in update))
            update[key] = undefined;
    }
    return update;
}
function create_component(block) {
    block && block.c();
}
function mount_component(component, target, anchor, customElement) {
    const { fragment, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
            // if the component was destroyed immediately
            // it will update the `$$.on_destroy` reference to `null`.
            // the destructured on_destroy may still reference to the old array
            if (component.$$.on_destroy) {
                component.$$.on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
    }
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
        fragment: null,
        ctx: [],
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
        // everything else
        callbacks: blank_object(),
        dirty,
        skip_bound: false,
        root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance
        ? instance(component, options.props || {}, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if (!$$.skip_bound && $$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            const nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor, options.customElement);
        flush();
    }
    set_current_component(parent_component);
}
/**
 * Base class for Svelte components. Used when dev=false.
 */
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        if (!is_function(callback)) {
            return noop;
        }
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set($$props) {
        if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
        }
    }
}

function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({ version: '3.52.0' }, detail), { bubbles: true }));
}
function append_dev(target, node) {
    dispatch_dev('SvelteDOMInsert', { target, node });
    append(target, node);
}
function insert_dev(target, node, anchor) {
    dispatch_dev('SvelteDOMInsert', { target, node, anchor });
    insert(target, node, anchor);
}
function detach_dev(node) {
    dispatch_dev('SvelteDOMRemove', { node });
    detach(node);
}
function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default)
        modifiers.push('preventDefault');
    if (has_stop_propagation)
        modifiers.push('stopPropagation');
    dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
    const dispose = listen(node, event, handler, options);
    return () => {
        dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
        dispose();
    };
}
function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null)
        dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
    else
        dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
}
function set_data_dev(text, data) {
    data = '' + data;
    if (text.wholeText === data)
        return;
    dispatch_dev('SvelteDOMSetData', { node: text, data });
    text.data = data;
}
function validate_each_argument(arg) {
    if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
        let msg = '{#each} only iterates over array-like objects.';
        if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
            msg += ' You can use a spread to convert this iterable into an array.';
        }
        throw new Error(msg);
    }
}
function validate_slots(name, slot, keys) {
    for (const slot_key of Object.keys(slot)) {
        if (!~keys.indexOf(slot_key)) {
            console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
        }
    }
}
function construct_svelte_component_dev(component, props) {
    const error_message = 'this={...} of <svelte:component> should specify a Svelte component.';
    try {
        const instance = new component(props);
        if (!instance.$$ || !instance.$set || !instance.$on || !instance.$destroy) {
            throw new Error(error_message);
        }
        return instance;
    }
    catch (err) {
        const { message } = err;
        if (typeof message === 'string' && message.indexOf('is not a constructor') !== -1) {
            throw new Error(error_message);
        }
        else {
            throw err;
        }
    }
}
/**
 * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
 */
class SvelteComponentDev extends SvelteComponent {
    constructor(options) {
        if (!options || (!options.target && !options.$$inline)) {
            throw new Error("'target' is a required option");
        }
        super();
    }
    $destroy() {
        super.$destroy();
        this.$destroy = () => {
            console.warn('Component was already destroyed'); // eslint-disable-line no-console
        };
    }
    $capture_state() { }
    $inject_state() { }
}

/* ../svelte-router/src/Viewport.svelte generated by Svelte v3.52.0 */

const { Error: Error_1 } = globals;

// (1:0) {#if isActualView}
function create_if_block$1(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;
	var switch_value = /*current*/ ctx[1].component;

	function switch_props(ctx) {
		return {
			props: {
				router: /*router*/ ctx[0],
				params: /*current*/ ctx[1].params,
				urlQuery: /*current*/ ctx[1].urlQuery,
				props: /*current*/ ctx[1].props
			},
			$$inline: true
		};
	}

	if (switch_value) {
		switch_instance = construct_svelte_component_dev(switch_value, switch_props(ctx));
		switch_instance.$on("hasOutro", /*hasOutro*/ ctx[3]);
		switch_instance.$on("outroDone", /*outroDone*/ ctx[4]);
	}

	const block = {
		c: function create() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (switch_instance) mount_component(switch_instance, target, anchor);
			insert_dev(target, switch_instance_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const switch_instance_changes = {};
			if (dirty & /*router*/ 1) switch_instance_changes.router = /*router*/ ctx[0];
			if (dirty & /*current*/ 2) switch_instance_changes.params = /*current*/ ctx[1].params;
			if (dirty & /*current*/ 2) switch_instance_changes.urlQuery = /*current*/ ctx[1].urlQuery;
			if (dirty & /*current*/ 2) switch_instance_changes.props = /*current*/ ctx[1].props;

			if (switch_value !== (switch_value = /*current*/ ctx[1].component)) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = construct_svelte_component_dev(switch_value, switch_props(ctx));
					switch_instance.$on("hasOutro", /*hasOutro*/ ctx[3]);
					switch_instance.$on("outroDone", /*outroDone*/ ctx[4]);
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i: function intro(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(switch_instance_anchor);
			if (switch_instance) destroy_component(switch_instance, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(1:0) {#if isActualView}",
		ctx
	});

	return block;
}

function create_fragment$5(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*isActualView*/ ctx[2] && create_if_block$1(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			throw new Error_1("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (/*isActualView*/ ctx[2]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*isActualView*/ 4) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block$1(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$5.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$5($$self, $$props, $$invalidate) {
	let isActualView;

	let $router,
		$$unsubscribe_router = noop,
		$$subscribe_router = () => ($$unsubscribe_router(), $$unsubscribe_router = subscribe(router, $$value => $$invalidate(6, $router = $$value)), router);

	$$self.$$.on_destroy.push(() => $$unsubscribe_router());
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Viewport', slots, []);
	let { router } = $$props;
	validate_store(router, 'router');
	$$subscribe_router();

	if (!router || !router.subscribe) {
		throw new Error('[SvelteRouter] <RouterViewport> is missing a router instance');
	}

	setContext('svelte_router', router);
	let viewHasOutro = false;

	function hasOutro() {
		$$invalidate(5, viewHasOutro = true);
	}

	function outroDone() {
		if (!isActualView) {
			$$invalidate(5, viewHasOutro = false);
		}
	}

	let current = {
		name: '',
		path: '',
		component: undefined,
		params: undefined,
		urlQuery: undefined,
		props: undefined
	};

	const compareParams = () => JSON.stringify($router.location.params || {}) === JSON.stringify(current.params || {});

	async function updateView() {
		await tick();
		$$invalidate(1, current = { ...$router.location });
	}

	$$self.$$.on_mount.push(function () {
		if (router === undefined && !('router' in $$props || $$self.$$.bound[$$self.$$.props['router']])) {
			console.warn("<Viewport> was created without expected prop 'router'");
		}
	});

	const writable_props = ['router'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Viewport> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('router' in $$props) $$subscribe_router($$invalidate(0, router = $$props.router));
	};

	$$self.$capture_state = () => ({
		setContext,
		tick,
		router,
		viewHasOutro,
		hasOutro,
		outroDone,
		current,
		compareParams,
		updateView,
		isActualView,
		$router
	});

	$$self.$inject_state = $$props => {
		if ('router' in $$props) $$subscribe_router($$invalidate(0, router = $$props.router));
		if ('viewHasOutro' in $$props) $$invalidate(5, viewHasOutro = $$props.viewHasOutro);
		if ('current' in $$props) $$invalidate(1, current = $$props.current);
		if ('isActualView' in $$props) $$invalidate(2, isActualView = $$props.isActualView);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$router, current*/ 66) {
			$$invalidate(2, isActualView = $router.location.name === current.name && $router.location.component === current.component && compareParams() && $router.location.urlQuery === current.urlQuery);
		}

		if ($$self.$$.dirty & /*isActualView, viewHasOutro*/ 36) {
			if (!isActualView && !viewHasOutro) {
				updateView();
			}
		}
	};

	return [router, current, isActualView, hasOutro, outroDone, viewHasOutro, $router];
}

class Viewport extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$5, create_fragment$5, safe_not_equal, { router: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Viewport",
			options,
			id: create_fragment$5.name
		});
	}

	get router() {
		throw new Error_1("<Viewport>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set router(value) {
		throw new Error_1("<Viewport>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

function cubicInOut(t) {
    return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
}

/* simple/App.svelte generated by Svelte v3.52.0 */

const { Object: Object_1 } = globals;
const file$4 = "simple/App.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (22:3) {#if $router.routes[routeName].props?.nav}
function create_if_block(ctx) {
	let a;
	let t0_value = /*$router*/ ctx[1].routes[/*routeName*/ ctx[3]].props.nav.label + "";
	let t0;
	let t1;
	let a_href_value;
	let link_action;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			a = element("a");
			t0 = text(t0_value);
			t1 = space();
			attr_dev(a, "href", a_href_value = /*router*/ ctx[0].nameToPath(/*routeName*/ ctx[3]));
			attr_dev(a, "class", "btn svelte-1pauzdm");
			toggle_class(a, "active", /*$router*/ ctx[1].location.name === /*routeName*/ ctx[3]);
			add_location(a, file$4, 22, 4, 605);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, t0);
			append_dev(a, t1);

			if (!mounted) {
				dispose = action_destroyer(link_action = router.exports.link.call(null, a, /*router*/ ctx[0]));
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$router*/ 2 && t0_value !== (t0_value = /*$router*/ ctx[1].routes[/*routeName*/ ctx[3]].props.nav.label + "")) set_data_dev(t0, t0_value);

			if (dirty & /*router, $router*/ 3 && a_href_value !== (a_href_value = /*router*/ ctx[0].nameToPath(/*routeName*/ ctx[3]))) {
				attr_dev(a, "href", a_href_value);
			}

			if (link_action && is_function(link_action.update) && dirty & /*router*/ 1) link_action.update.call(null, /*router*/ ctx[0]);

			if (dirty & /*$router, Object*/ 2) {
				toggle_class(a, "active", /*$router*/ ctx[1].location.name === /*routeName*/ ctx[3]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(22:3) {#if $router.routes[routeName].props?.nav}",
		ctx
	});

	return block;
}

// (21:2) {#each Object.keys($router.routes) as routeName}
function create_each_block(ctx) {
	let if_block_anchor;
	let if_block = /*$router*/ ctx[1].routes[/*routeName*/ ctx[3]].props?.nav && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (/*$router*/ ctx[1].routes[/*routeName*/ ctx[3]].props?.nav) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(21:2) {#each Object.keys($router.routes) as routeName}",
		ctx
	});

	return block;
}

function create_fragment$4(ctx) {
	let main;
	let nav;
	let nav_transition;
	let t;
	let viewport;
	let current;
	let each_value = Object.keys(/*$router*/ ctx[1].routes);
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	viewport = new Viewport({
			props: { router: /*router*/ ctx[0] },
			$$inline: true
		});

	const block = {
		c: function create() {
			main = element("main");
			nav = element("nav");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t = space();
			create_component(viewport.$$.fragment);
			attr_dev(nav, "class", "flex flex-center-y svelte-1pauzdm");
			add_location(nav, file$4, 19, 1, 449);
			add_location(main, file$4, 18, 0, 441);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, main, anchor);
			append_dev(main, nav);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(nav, null);
			}

			append_dev(main, t);
			mount_component(viewport, main, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*router, Object, $router*/ 3) {
				each_value = Object.keys(/*$router*/ ctx[1].routes);
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(nav, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			const viewport_changes = {};
			if (dirty & /*router*/ 1) viewport_changes.router = /*router*/ ctx[0];
			viewport.$set(viewport_changes);
		},
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!nav_transition) nav_transition = create_bidirectional_transition(nav, /*headerAnim*/ ctx[2], {}, true);
				nav_transition.run(1);
			});

			transition_in(viewport.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			if (!nav_transition) nav_transition = create_bidirectional_transition(nav, /*headerAnim*/ ctx[2], {}, false);
			nav_transition.run(0);
			transition_out(viewport.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(main);
			destroy_each(each_blocks, detaching);
			if (detaching && nav_transition) nav_transition.end();
			destroy_component(viewport);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$4.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

let routerInstance;

function instance$4($$self, $$props, $$invalidate) {
	let $router,
		$$unsubscribe_router = noop,
		$$subscribe_router = () => ($$unsubscribe_router(), $$unsubscribe_router = subscribe(router$1, $$value => $$invalidate(1, $router = $$value)), router$1);

	$$self.$$.on_destroy.push(() => $$unsubscribe_router());
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('App', slots, []);
	let { router: router$1 } = $$props;
	validate_store(router$1, 'router');
	$$subscribe_router();
	routerInstance = router$1;

	function headerAnim(node, o) {
		return {
			duration: 250,
			css: t => `transform: translateY(-${105 - 105 * cubicInOut(t)}%);`
		};
	}

	$$self.$$.on_mount.push(function () {
		if (router$1 === undefined && !('router' in $$props || $$self.$$.bound[$$self.$$.props['router']])) {
			console.warn("<App> was created without expected prop 'router'");
		}
	});

	const writable_props = ['router'];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('router' in $$props) $$subscribe_router($$invalidate(0, router$1 = $$props.router));
	};

	$$self.$capture_state = () => ({
		routerInstance,
		Viewport,
		link: router.exports.link,
		cubicInOut,
		router: router$1,
		headerAnim,
		$router
	});

	$$self.$inject_state = $$props => {
		if ('router' in $$props) $$subscribe_router($$invalidate(0, router$1 = $$props.router));
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [router$1, $router, headerAnim];
}

class App extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$4, create_fragment$4, safe_not_equal, { router: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "App",
			options,
			id: create_fragment$4.name
		});
	}

	get router() {
		throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set router(value) {
		throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

function defaultPageTransition(node, o) {
    return {
        duration: 150,
        css(t) {
            return `opacity: ${t}`;
        },
    };
}

/* simple/routes/NotFound.svelte generated by Svelte v3.52.0 */
const file$3 = "simple/routes/NotFound.svelte";

function create_fragment$3(ctx) {
	let div;
	let h1;
	let t1;
	let p;
	let t3;
	let button;
	let div_transition;
	let current;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div = element("div");
			h1 = element("h1");
			h1.textContent = "404";
			t1 = space();
			p = element("p");
			p.textContent = "Page not found.";
			t3 = space();
			button = element("button");
			button.textContent = "< Back to home page";
			attr_dev(h1, "class", "svelte-13kbmzy");
			add_location(h1, file$3, 10, 1, 337);
			add_location(p, file$3, 11, 1, 351);
			attr_dev(button, "class", "back svelte-13kbmzy");
			add_location(button, file$3, 12, 1, 375);
			attr_dev(div, "class", "page svelte-13kbmzy");
			add_location(div, file$3, 9, 0, 243);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h1);
			append_dev(div, t1);
			append_dev(div, p);
			append_dev(div, t3);
			append_dev(div, button);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(button, "click", /*click_handler*/ ctx[2], false, false, false),
					listen_dev(div, "outroend", /*outroend_handler*/ ctx[3], false, false, false)
				];

				mounted = true;
			}
		},
		p: noop,
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(div, defaultPageTransition, {}, true);
				div_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!div_transition) div_transition = create_bidirectional_transition(div, defaultPageTransition, {}, false);
			div_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (detaching && div_transition) div_transition.end();
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$3.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$3($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('NotFound', slots, []);
	const dispatch = createEventDispatcher();
	let { router } = $$props;

	onMount(() => {
		dispatch('hasOutro');
	});

	$$self.$$.on_mount.push(function () {
		if (router === undefined && !('router' in $$props || $$self.$$.bound[$$self.$$.props['router']])) {
			console.warn("<NotFound> was created without expected prop 'router'");
		}
	});

	const writable_props = ['router'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<NotFound> was created with unknown prop '${key}'`);
	});

	const click_handler = () => router.push('home');
	const outroend_handler = () => dispatch('outroDone');

	$$self.$$set = $$props => {
		if ('router' in $$props) $$invalidate(0, router = $$props.router);
	};

	$$self.$capture_state = () => ({
		onMount,
		createEventDispatcher,
		defaultPageTransition,
		dispatch,
		router
	});

	$$self.$inject_state = $$props => {
		if ('router' in $$props) $$invalidate(0, router = $$props.router);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [router, dispatch, click_handler, outroend_handler];
}

class NotFound extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, { router: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "NotFound",
			options,
			id: create_fragment$3.name
		});
	}

	get router() {
		throw new Error("<NotFound>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set router(value) {
		throw new Error("<NotFound>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* simple/routes/LazyError.svelte generated by Svelte v3.52.0 */
const file$2 = "simple/routes/LazyError.svelte";

function create_fragment$2(ctx) {
	let div;
	let h1;
	let t1;
	let button;
	let div_transition;
	let current;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div = element("div");
			h1 = element("h1");
			h1.textContent = "This route will fail forever, as it's fake canceled.";
			t1 = space();
			button = element("button");
			button.textContent = "Retry nevertheless";
			attr_dev(h1, "class", "svelte-10pobfn");
			add_location(h1, file$2, 12, 1, 326);
			add_location(button, file$2, 13, 1, 389);
			attr_dev(div, "class", "svelte-10pobfn");
			add_location(div, file$2, 11, 0, 245);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h1);
			append_dev(div, t1);
			append_dev(div, button);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(button, "click", /*click_handler*/ ctx[3], false, false, false),
					listen_dev(div, "outroend", /*outroend_handler*/ ctx[4], false, false, false)
				];

				mounted = true;
			}
		},
		p: noop,
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(div, defaultPageTransition, {}, true);
				div_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!div_transition) div_transition = create_bidirectional_transition(div, defaultPageTransition, {}, false);
			div_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (detaching && div_transition) div_transition.end();
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	let $router,
		$$unsubscribe_router = noop,
		$$subscribe_router = () => ($$unsubscribe_router(), $$unsubscribe_router = subscribe(router, $$value => $$invalidate(1, $router = $$value)), router);

	$$self.$$.on_destroy.push(() => $$unsubscribe_router());
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('LazyError', slots, []);
	const dispatch = createEventDispatcher();
	let { router } = $$props;
	validate_store(router, 'router');
	$$subscribe_router();

	onMount(() => {
		dispatch('hasOutro');
	});

	$$self.$$.on_mount.push(function () {
		if (router === undefined && !('router' in $$props || $$self.$$.bound[$$self.$$.props['router']])) {
			console.warn("<LazyError> was created without expected prop 'router'");
		}
	});

	const writable_props = ['router'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<LazyError> was created with unknown prop '${key}'`);
	});

	const click_handler = () => router.push($router.location.name);
	const outroend_handler = () => dispatch('outroDone');

	$$self.$$set = $$props => {
		if ('router' in $$props) $$subscribe_router($$invalidate(0, router = $$props.router));
	};

	$$self.$capture_state = () => ({
		onMount,
		createEventDispatcher,
		defaultPageTransition,
		dispatch,
		router,
		$router
	});

	$$self.$inject_state = $$props => {
		if ('router' in $$props) $$subscribe_router($$invalidate(0, router = $$props.router));
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [router, $router, dispatch, click_handler, outroend_handler];
}

class LazyError extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, { router: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "LazyError",
			options,
			id: create_fragment$2.name
		});
	}

	get router() {
		throw new Error("<LazyError>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set router(value) {
		throw new Error("<LazyError>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* gh_pages/LoadingRoute.svelte generated by Svelte v3.52.0 */
const file$1 = "gh_pages/LoadingRoute.svelte";

function create_fragment$1(ctx) {
	let div;
	let svg;
	let circle0;
	let animate0;
	let circle1;
	let animate1;
	let circle2;
	let animate2;
	let div_transition;
	let current;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div = element("div");
			svg = svg_element("svg");
			circle0 = svg_element("circle");
			animate0 = svg_element("animate");
			circle1 = svg_element("circle");
			animate1 = svg_element("animate");
			circle2 = svg_element("circle");
			animate2 = svg_element("animate");
			attr_dev(animate0, "attributeName", "opacity");
			attr_dev(animate0, "dur", "1s");
			attr_dev(animate0, "values", "0;1;0");
			attr_dev(animate0, "repeatCount", "indefinite");
			attr_dev(animate0, "begin", "0.1");
			add_location(animate0, file$1, 13, 3, 489);
			attr_dev(circle0, "fill", "var(--font-clr)");
			attr_dev(circle0, "stroke", "none");
			attr_dev(circle0, "cx", "6");
			attr_dev(circle0, "cy", "6");
			attr_dev(circle0, "r", "6");
			add_location(circle0, file$1, 12, 2, 420);
			attr_dev(animate1, "attributeName", "opacity");
			attr_dev(animate1, "dur", "1s");
			attr_dev(animate1, "values", "0;1;0");
			attr_dev(animate1, "repeatCount", "indefinite");
			attr_dev(animate1, "begin", "0.2");
			add_location(animate1, file$1, 16, 3, 669);
			attr_dev(circle1, "fill", "var(--font-clr)");
			attr_dev(circle1, "stroke", "none");
			attr_dev(circle1, "cx", "25");
			attr_dev(circle1, "cy", "6");
			attr_dev(circle1, "r", "6");
			add_location(circle1, file$1, 15, 2, 599);
			attr_dev(animate2, "attributeName", "opacity");
			attr_dev(animate2, "dur", "1s");
			attr_dev(animate2, "values", "0;1;0");
			attr_dev(animate2, "repeatCount", "indefinite");
			attr_dev(animate2, "begin", "0.3");
			add_location(animate2, file$1, 19, 3, 849);
			attr_dev(circle2, "fill", "var(--font-clr)");
			attr_dev(circle2, "stroke", "none");
			attr_dev(circle2, "cx", "44");
			attr_dev(circle2, "cy", "6");
			attr_dev(circle2, "r", "6");
			add_location(circle2, file$1, 18, 2, 779);
			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr_dev(svg, "xmlns:xlink", "http://www.w3.org/1999/xlink");
			attr_dev(svg, "viewBox", "0 0 50 12");
			attr_dev(svg, "class", "svelte-d6kj8p");
			add_location(svg, file$1, 11, 1, 314);
			attr_dev(div, "class", "svelte-d6kj8p");
			add_location(div, file$1, 10, 0, 233);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, svg);
			append_dev(svg, circle0);
			append_dev(circle0, animate0);
			append_dev(svg, circle1);
			append_dev(circle1, animate1);
			append_dev(svg, circle2);
			append_dev(circle2, animate2);
			current = true;

			if (!mounted) {
				dispose = listen_dev(div, "outroend", /*outroend_handler*/ ctx[1], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(div, defaultPageTransition, {}, true);
				div_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!div_transition) div_transition = create_bidirectional_transition(div, defaultPageTransition, {}, false);
			div_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (detaching && div_transition) div_transition.end();
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('LoadingRoute', slots, []);
	const dispatch = createEventDispatcher();

	onMount(() => {
		dispatch('hasOutro');
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<LoadingRoute> was created with unknown prop '${key}'`);
	});

	const outroend_handler = () => dispatch('outroDone');

	$$self.$capture_state = () => ({
		onMount,
		createEventDispatcher,
		defaultPageTransition,
		dispatch
	});

	return [dispatch, outroend_handler];
}

class LoadingRoute extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "LoadingRoute",
			options,
			id: create_fragment$1.name
		});
	}
}

/* gh_pages/LoadingRouteFailFallback.svelte generated by Svelte v3.52.0 */
const file = "gh_pages/LoadingRouteFailFallback.svelte";

function create_fragment(ctx) {
	let div;
	let h1;
	let t1;
	let button;
	let div_transition;
	let current;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div = element("div");
			h1 = element("h1");
			h1.textContent = "Failed to load route";
			t1 = space();
			button = element("button");
			button.textContent = "Retry";
			attr_dev(h1, "class", "svelte-10pobfn");
			add_location(h1, file, 12, 1, 333);
			add_location(button, file, 13, 1, 364);
			attr_dev(div, "class", "svelte-10pobfn");
			add_location(div, file, 11, 0, 252);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h1);
			append_dev(div, t1);
			append_dev(div, button);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(button, "click", /*click_handler*/ ctx[3], false, false, false),
					listen_dev(div, "outroend", /*outroend_handler*/ ctx[4], false, false, false)
				];

				mounted = true;
			}
		},
		p: noop,
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(div, defaultPageTransition, {}, true);
				div_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!div_transition) div_transition = create_bidirectional_transition(div, defaultPageTransition, {}, false);
			div_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (detaching && div_transition) div_transition.end();
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let $router,
		$$unsubscribe_router = noop,
		$$subscribe_router = () => ($$unsubscribe_router(), $$unsubscribe_router = subscribe(router, $$value => $$invalidate(1, $router = $$value)), router);

	$$self.$$.on_destroy.push(() => $$unsubscribe_router());
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('LoadingRouteFailFallback', slots, []);
	const dispatch = createEventDispatcher();
	let { router } = $$props;
	validate_store(router, 'router');
	$$subscribe_router();

	onMount(() => {
		dispatch('hasOutro');
	});

	$$self.$$.on_mount.push(function () {
		if (router === undefined && !('router' in $$props || $$self.$$.bound[$$self.$$.props['router']])) {
			console.warn("<LoadingRouteFailFallback> was created without expected prop 'router'");
		}
	});

	const writable_props = ['router'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<LoadingRouteFailFallback> was created with unknown prop '${key}'`);
	});

	const click_handler = () => router.push($router.location.name);
	const outroend_handler = () => dispatch('outroDone');

	$$self.$$set = $$props => {
		if ('router' in $$props) $$subscribe_router($$invalidate(0, router = $$props.router));
	};

	$$self.$capture_state = () => ({
		onMount,
		createEventDispatcher,
		defaultPageTransition,
		dispatch,
		router,
		$router
	});

	$$self.$inject_state = $$props => {
		if ('router' in $$props) $$subscribe_router($$invalidate(0, router = $$props.router));
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [router, $router, dispatch, click_handler, outroend_handler];
}

class LoadingRouteFailFallback extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { router: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "LoadingRouteFailFallback",
			options,
			id: create_fragment.name
		});
	}

	get router() {
		throw new Error("<LoadingRouteFailFallback>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set router(value) {
		throw new Error("<LoadingRouteFailFallback>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

const config = {
    window,
    scrollingElement: window.document.scrollingElement,
    routes: {
        'home': {
            path: '/',
            lazyComponent: {
                component: async () => (await import('./Home-fcbefffa.js')).default,
                loading: LoadingRoute,
                fallback: LoadingRouteFailFallback,
            },
            props: {
                name: 'Router',
                nav: { label: 'Home' },
            },
        },
        'about': {
            path: '/about',
            lazyComponent: {
                component: async () => (await import('./About-d486e3d6.js')).default,
                loading: LoadingRoute,
                fallback: LoadingRouteFailFallback,
            },
            props: {
                nav: { label: 'About' },
            },
        },
        'blogs': {
            path: '/blogs',
            lazyComponent: {
                component: async () => (await import('./Blogs-be51c0a7.js')).default,
                loading: LoadingRoute,
                fallback: LoadingRouteFailFallback,
            },
            props: {
                nav: { label: 'Blogs' }
            },
        },
        'blog': {
            path: '/blogs/:id',
            lazyComponent: {
                component: async () => (await import('./Blog-ad38c4af.js')).default,
                loading: LoadingRoute,
                fallback: LoadingRouteFailFallback,
            },
        },
        'router-struct': {
            path: '/_dev',
            lazyComponent: {
                component: async () => (await import('./RouterStruct-0dd17f1f.js')).default,
                loading: LoadingRoute,
                fallback: LoadingRouteFailFallback,
            },
            props: {
                nav: { label: '_dev' },
            },
        },
        'lazy-load': {
            path: '/lazy',
            lazyComponent: {
                component: async () => {
                    await new Promise((r) => setTimeout(r, 3e3));
                    return (await import('./Lazy-ee9a6c32.js')).default;
                },
                loading: LoadingRoute,
                fallback: LoadingRouteFailFallback,
            },
            props: {
                nav: { label: 'Lazy' },
            },
        },
        'lazy-load-err': {
            path: '/lazy-err',
            lazyComponent: {
                component: async () => {
                    await new Promise((r) => setTimeout(r, 2e3));
                    return Promise.reject();
                },
                loading: LoadingRoute,
                fallback: LazyError,
            },
            props: {
                nav: { label: 'Lazy error' },
            },
        },
        '404': {
            path: '/404',
            component: NotFound,
        },
    },
    fallback: { name: '404' },
};

const app = new App({
    target: document.body,
    props: {
        router: new router.exports.SvelteRouter(config),
    },
});

export { app as $, transition_out as A, validate_each_argument as B, noop as C, empty as D, group_outros as E, check_outros as F, destroy_each as G, create_component as H, mount_component as I, destroy_component as J, globals as K, create_slot as L, assign as M, getContext as N, exclude_internal_props as O, set_attributes as P, stop_propagation as Q, prevent_default as R, SvelteComponentDev as S, update_slot_base as T, get_all_dirty_from_scope as U, get_slot_changes as V, get_spread_update as W, validate_store as X, component_subscribe as Y, get_store_value as Z, subscribe as _, svg_element as a, space as b, add_location as c, dispatch_dev as d, element as e, attr_dev as f, toggle_class as g, src_url_equal as h, init as i, insert_dev as j, append_dev as k, listen_dev as l, set_data_dev as m, add_render_callback as n, create_bidirectional_transition as o, detach_dev as p, createEventDispatcher as q, run_all as r, safe_not_equal as s, text as t, onMount as u, validate_slots as v, defaultPageTransition as w, handle_promise as x, update_await_block_branch as y, transition_in as z };
//# sourceMappingURL=main-32573498.js.map
