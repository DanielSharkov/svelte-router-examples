import{S as e,i as s,s as t,e as r,c as n,f as a,l,j as o,k as u,W as c,n as i,B as h,R as f,o as d,p as g,b as p,t as v,d as m,g as x,h as w,V as k}from"./main-e9d5581a.js";function b(e,s,t){const r=e.slice();return r[5]=s[t],r}function j(e){let s,t,o,u,c,h,f,d,g=e[5].name+"";function k(){return e[3](e[5])}return{c(){s=r("button"),t=r("div"),t.innerHTML='<svg class="icon stroke svelte-1heuaar" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><path d="M103 107V96c0-14-11-25-25-25H42c-14 0-25 11-25 25v11" stroke-width="2" class="svelte-1heuaar"></path><circle cx="60" cy="34" r="21" stroke-width="2" class="svelte-1heuaar"></circle></svg>',o=p(),u=r("span"),c=v(g),h=p(),n(t,"class","image flex flex-center svelte-1heuaar"),n(u,"class","name"),n(s,"class","user flex flex-center svelte-1heuaar"),m(s,"session-user",e[1].session===e[5].id)},m(e,r){a(e,s,r),x(s,t),x(s,o),x(s,u),x(u,c),x(s,h),f||(d=l(s,"click",k),f=!0)},p(t,r){e=t,2&r&&g!==(g=e[5].name+"")&&w(c,g),2&r&&m(s,"session-user",e[1].session===e[5].id)},d(e){e&&i(s),f=!1,d()}}}function B(e){let s,t,f,d,g,p=e[1].users,v=[];for(let s=0;s<p.length;s+=1)v[s]=j(b(e,p,s));return{c(){s=r("div");for(let e=0;e<v.length;e+=1)v[e].c();n(s,"class","page svelte-1heuaar")},m(t,r){a(t,s,r);for(let e=0;e<v.length;e+=1)v[e].m(s,null);f=!0,d||(g=l(s,"outroend",e[4]),d=!0)},p(e,[t]){if(3&t){let r;for(p=e[1].users,r=0;r<p.length;r+=1){const n=b(e,p,r);v[r]?v[r].p(n,t):(v[r]=j(n),v[r].c(),v[r].m(s,null))}for(;r<v.length;r+=1)v[r].d(1);v.length=p.length}},i(e){f||(o((()=>{t||(t=u(s,c,{},!0)),t.run(1)})),f=!0)},o(e){t||(t=u(s,c,{},!1)),t.run(0),f=!1},d(e){e&&i(s),h(v,e),e&&t&&t.end(),d=!1,g()}}}function D(e,s,t){let r;f(e,k,(e=>t(1,r=e)));let{router:n}=s;const a=d();g((()=>{a("hasOutro")}));return e.$$set=e=>{"router"in e&&t(0,n=e.router)},[n,r,a,e=>n.push("profile",{userID:e.id}),()=>a("outroDone")]}class H extends e{constructor(e){super(),s(this,e,D,B,t,{router:0})}}export{H as default};