import{S as t,i as e,s,e as n,a as l,b as o,c as a,d as c,l as i,n as r,p as u,q as p,f,r as d,h as m,j as g,u as h,k as v,o as x,v as $,w as b,x as w,t as y,y as C,z as k,A as P,m as j,D as T,B,g as D,C as q,E as z,F as A}from"./main-81db1163.js";import{P as E}from"./Post-07c0269c.js";import"./Thread-e10f4825.js";function F(t,e,s){const n=t.slice();return n[16]=e[s],n}function H(t){let e,s,l,c,r;return{c(){e=n("button"),e.textContent="+ Create a new post",o(e,"class","start-drafting svelte-ci91df")},m(s,n){a(s,e,n),l=!0,c||(r=i(e,"click",t[14]),c=!0)},p:B,i(n){l||(f((()=>{s||(s=D(e,t[10],{},!0)),s.run(1)})),l=!0)},o(n){s||(s=D(e,t[10],{},!1)),s.run(0),l=!1},d(t){t&&m(e),t&&s&&s.end(),c=!1,r()}}}function L(t){let e,s,r,u,p,d,g,h,v,x,$,b,w;return{c(){e=n("div"),s=n("input"),r=l(),u=n("textarea"),p=l(),d=n("div"),g=n("button"),g.textContent="Close",h=l(),v=n("button"),v.textContent="Post to the timeline",o(s,"type","text"),o(s,"name","post-title"),o(s,"placeholder","Title..."),o(s,"class","svelte-ci91df"),o(u,"name","post-message"),o(u,"rows","6"),o(u,"placeholder","Message..."),o(u,"class","svelte-ci91df"),o(v,"class","flex-self-right"),o(d,"class","actions flex flex-center-y"),o(e,"class","new-post-form svelte-ci91df")},m(n,l){a(n,e,l),c(e,s),q(s,t[4]),c(e,r),c(e,u),q(u,t[5]),c(e,p),c(e,d),c(d,g),c(d,h),c(d,v),$=!0,b||(w=[i(s,"input",t[11]),i(u,"input",t[12]),i(g,"click",t[13]),i(v,"click",t[9])],b=!0)},p(t,e){16&e&&s.value!==t[4]&&q(s,t[4]),32&e&&q(u,t[5])},i(s){$||(f((()=>{x||(x=D(e,t[10],{},!0)),x.run(1)})),$=!0)},o(s){x||(x=D(e,t[10],{},!1)),x.run(0),$=!1},d(t){t&&m(e),t&&x&&x.end(),b=!1,z(w)}}}function M(t){let e,s;return e=new E({props:{post:t[16]}}),{c(){$(e.$$.fragment)},m(t,n){b(e,t,n),s=!0},p(t,s){const n={};4&s&&(n.post=t[16]),e.$set(n)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){r(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function N(t){let e,s,l,r,u,p,f=t[1].posts.length-t[0]+"";return{c(){e=n("button"),s=y("Load more posts ("),l=y(f),r=y(" available)"),o(e,"class","load-more svelte-ci91df")},m(n,o){a(n,e,o),c(e,s),c(e,l),c(e,r),u||(p=i(e,"click",t[8]),u=!0)},p(t,e){3&e&&f!==(f=t[1].posts.length-t[0]+"")&&C(l,f)},d(t){t&&m(e),u=!1,p()}}}function O(t){let e,s,h,v,x,$,b,w,y,C,T;const B=[L,H],D=[];function q(t,e){return t[3]?0:1}h=q(t),v=D[h]=B[h](t);let z=t[2],A=[];for(let e=0;e<z.length;e+=1)A[e]=M(F(t,z,e));const E=t=>r(A[t],1,1,(()=>{A[t]=null}));let O=t[6]&&N(t);return{c(){e=n("div"),s=n("div"),v.c(),x=l();for(let t=0;t<A.length;t+=1)A[t].c();$=l(),O&&O.c(),o(s,"class","new-post svelte-ci91df"),o(e,"id","PageTimeline"),o(e,"class","page")},m(n,l){a(n,e,l),c(e,s),D[h].m(s,null),c(e,x);for(let t=0;t<A.length;t+=1)A[t].m(e,null);c(e,$),O&&O.m(e,null),y=!0,C||(T=i(e,"outroend",t[15]),C=!0)},p(t,[n]){let l=h;if(h=q(t),h===l?D[h].p(t,n):(k(),r(D[l],1,1,(()=>{D[l]=null})),u(),v=D[h],v?v.p(t,n):(v=D[h]=B[h](t),v.c()),p(v,1),v.m(s,null)),4&n){let s;for(z=t[2],s=0;s<z.length;s+=1){const l=F(t,z,s);A[s]?(A[s].p(l,n),p(A[s],1)):(A[s]=M(l),A[s].c(),p(A[s],1),A[s].m(e,$))}for(k(),s=z.length;s<A.length;s+=1)E(s);u()}t[6]?O?O.p(t,n):(O=N(t),O.c(),O.m(e,null)):O&&(O.d(1),O=null)},i(t){if(!y){p(v);for(let t=0;t<z.length;t+=1)p(A[t]);f((()=>{w&&w.end(1),b=P(e,j,{}),b.start()})),y=!0}},o(t){r(v),A=A.filter(Boolean);for(let t=0;t<A.length;t+=1)r(A[t]);b&&b.invalidate(),w=d(e,j,{delay:450}),y=!1},d(t){t&&m(e),D[h].d(),g(A,t),O&&O.d(),t&&w&&w.end(),C=!1,T()}}}function S(t,e,s){let n,l;h(t,T,(t=>s(1,l=t)));const o=v();x((()=>{o("hasOutro")}));let a=[],c=0;function i(){const t=l.posts.length<c+10?l.posts.length:c+10;s(2,a=a.concat(l.posts.slice(c,t))),s(0,c=t),s(2,a)}i();let r=!1,u="",p="";return t.$$.update=()=>{3&t.$$.dirty&&s(6,n=l.posts.length>c)},[c,l,a,r,u,p,n,o,i,function(){""!==u&&""!==p&&(a.splice(0,0,T.submitNewPost(u,p)),s(4,u=""),s(5,p=""),s(3,r=!1),s(2,a))},function(t,e){const s=t.offsetHeight;return{duration:600,css:t=>(t=A(t),`height: ${s*t}px;padding: ${20*t}px 20px;opacity: ${t};`)}},function(){u=this.value,s(4,u)},function(){p=this.value,s(5,p)},()=>s(3,r=!1),()=>s(3,r=!0),()=>o("outroDone")]}class G extends t{constructor(t){super(),e(this,t,S,O,s,{})}}export{G as default};
