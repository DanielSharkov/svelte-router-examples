import{S as t,i as e,s as r,F as o,G as s,e as n,H as a,f as u,l as i,I as l,J as c,K as p,L as $,M as h,N as f,v as m,w as R,n as w,O as d,P as v}from"./main-610ee0ee.js";function g(t){let e,r,d,v;const g=t[7].default,k=o(g,t,t[6],null);let L=[{href:t[0]},t[1]],S={};for(let t=0;t<L.length;t+=1)S=s(S,L[t]);return{c(){e=n("a"),k&&k.c(),a(e,S)},m(o,s){u(o,e,s),k&&k.m(e,null),r=!0,d||(v=i(e,"click",l(c(t[2]))),d=!0)},p(t,[o]){k&&k.p&&(!r||64&o)&&p(k,g,t,t[6],r?h(g,t[6],o,null):$(t[6]),null),a(e,S=f(L,[(!r||1&o)&&{href:t[0]},t[1]]))},i(t){r||(m(k,t),r=!0)},o(t){R(k,t),r=!1},d(t){t&&w(e),k&&k.d(t),d=!1,v()}}}function k(t,e,r){let{$$slots:o={},$$scope:n}=e,{to:a}=e,{params:u}=e,{router:i}=e;if("string"!=typeof a||a.length<1)throw new Error('[SvelteRouter] <RouterLink> is missing the "to" prop');const l=i||d("svelte_router");if(!l)throw new Error("[SvelteRouter] <RouterLink> used outside a router instance <RouterViewport>");const c=Object.assign({},e);let p;try{p=l.nameToPath(a,u)}catch(t){throw new Error(`[SvelteRouter] <RouterLink> (to: "${a}"): `+t)}return delete c.to,delete c.params,delete c.$$slots,delete c.$$scope,t.$$set=t=>{r(10,e=s(s({},e),v(t))),"to"in t&&r(3,a=t.to),"params"in t&&r(4,u=t.params),"router"in t&&r(5,i=t.router),"$$scope"in t&&r(6,n=t.$$scope)},e=v(e),[p,c,function(){if(!l)throw new Error("[SvelteRouter] <RouterLink> missing Router instance");try{l.push(a,u)}catch(t){throw new Error(`[SvelteRouter] <RouterLink> (to: "${a}"): `+t)}},a,u,i,n,o]}class L extends t{constructor(t){super(),e(this,t,k,g,r,{to:3,params:4,router:5})}}export{L as R};
