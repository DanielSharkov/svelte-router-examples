import{S as t,i as s,s as n,q as a,e,C as o,b as r,c as l,f as c,D as i,g as u,l as p,u as m,v as d,j as f,k as $,m as g,w as h,n as b,E as k,o as x,p as w,t as v,x as j}from"./main-e9d5581a.js";import{R as y}from"./RouteLink-3af0d4b1.js";function C(t){let s;return{c(){s=v("< Back to all blog posts")},m(t,n){c(t,s,n)},d(t){t&&b(s)}}}function B(t){let s;return{c(){s=e("p"),s.textContent="Either something went is wrong or this blog post doesn't exist.",l(s,"class","error svelte-1v8ny8s")},m(t,n){c(t,s,n)},p:j,d(t){t&&b(s)}}}function D(t){let s,n,a,o,l,i=t[4].title+"",p=t[4].post+"";return{c(){s=e("h1"),n=v(i),a=r(),o=e("p"),l=v(p)},m(t,e){c(t,s,e),u(s,n),c(t,a,e),c(t,o,e),u(o,l)},p:j,d(t){t&&b(s),t&&b(a),t&&b(o)}}}function E(t){let s;return{c(){s=e("p"),s.textContent="Loading blog...",l(s,"class","placeholder svelte-1v8ny8s")},m(t,n){c(t,s,n)},p:j,d(t){t&&b(s)}}}function L(t){let s,n,x,w,v,j,L;n=new y({props:{to:"blogs",id:"BlogBack",$$slots:{default:[C]},$$scope:{ctx:t}}});let R={ctx:t,current:null,token:null,hasCatch:!0,pending:E,then:D,catch:B,value:4};return a(t[1](),R),{c(){s=e("div"),o(n.$$.fragment),x=r(),R.block.c(),l(s,"class","page")},m(a,e){c(a,s,e),i(n,s,null),u(s,x),R.block.m(s,R.anchor=null),R.mount=()=>s,R.anchor=null,v=!0,j||(L=p(s,"outroend",t[3]),j=!0)},p(s,[a]){t=s;const e={};32&a&&(e.$$scope={dirty:a,ctx:t}),n.$set(e),m(R,t,a)},i(t){v||(d(n.$$.fragment,t),f((()=>{w||(w=$(s,g,{},!0)),w.run(1)})),v=!0)},o(t){h(n.$$.fragment,t),w||(w=$(s,g,{},!1)),w.run(0),v=!1},d(t){t&&b(s),k(n),R.block.d(),R.token=null,R=null,t&&w&&w.end(),j=!1,L()}}}const R={};function q(t,s,n){const a=x();w((()=>{a("hasOutro")}));let{params:e}=s;return t.$$set=t=>{"params"in t&&n(2,e=t.params)},[a,async function(){if(e.id in R)return R[e.id];const t=await fetch(`blog/${e.id}.json`);await new Promise((t=>setTimeout(t,500)));const s=await t.json();return R[e.id]=s,s},e,()=>a("outroDone")]}class O extends t{constructor(t){super(),s(this,t,q,L,n,{params:2})}}export{O as default};
