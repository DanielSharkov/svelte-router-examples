import{S as e,i as t,s as o,D as s,e as n,a as l,b as r,c as a,d as i,l as c,f as u,g as p,h as f,j as g,k as d,o as h,t as v,m}from"./main-81db1163.js";function x(e,t,o){const s=e.slice();return s[5]=t[o],s}function k(e){let t,o,s,u,p,g,d,h,m=e[5].name+"";function x(){return e[3](e[5])}return{c(){t=n("button"),o=n("div"),o.innerHTML='<svg class="icon stroke icon-1 svelte-1neoo7p" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><path d="M103 107V96c0-14-11-25-25-25H42c-14 0-25 11-25 25v11" stroke-width="4" stroke-linecap="round"></path><circle cx="60" cy="34" r="21" stroke-width="4" stroke-linecap="round"></circle></svg>',s=l(),u=n("span"),p=v(m),g=l(),r(o,"class","image flex flex-center svelte-1neoo7p"),r(u,"class","name"),r(t,"class","user flex flex-center-y gap-1 svelte-1neoo7p")},m(e,n){a(e,t,n),i(t,o),i(t,s),i(t,u),i(u,p),i(t,g),d||(h=c(t,"click",x),d=!0)},p(t,o){e=t},d(e){e&&f(t),d=!1,h()}}}function w(e){let t,o,d,h,v,w,L,T,b,y,j=s.usersToLoginTo(),C=[];for(let t=0;t<j.length;t+=1)C[t]=k(x(e,j,t));return{c(){t=n("div"),o=n("div"),d=n("h1"),d.textContent="Login",h=l(),v=n("p"),v.textContent="Pick a user you would like to login to:",w=l();for(let e=0;e<C.length;e+=1)C[e].c();r(d,"class","title svelte-1neoo7p"),r(v,"class","subtitle svelte-1neoo7p"),r(o,"class","modal svelte-1neoo7p"),r(t,"id","PageLogin"),r(t,"class","flex svelte-1neoo7p")},m(s,n){a(s,t,n),i(t,o),i(o,d),i(o,h),i(o,v),i(o,w);for(let e=0;e<C.length;e+=1)C[e].m(o,null);T=!0,b||(y=c(t,"outroend",e[4]),b=!0)},p(e,[t]){if(2&t){let n;for(j=s.usersToLoginTo(),n=0;n<j.length;n+=1){const s=x(e,j,n);C[n]?C[n].p(s,t):(C[n]=k(s),C[n].c(),C[n].m(o,null))}for(;n<C.length;n+=1)C[n].d(1);C.length=j.length}},i(e){T||(u((()=>{L||(L=p(t,m,{},!0)),L.run(1)})),T=!0)},o(e){L||(L=p(t,m,{},!1)),L.run(0),T=!1},d(e){e&&f(t),g(C,e),e&&L&&L.end(),b=!1,y()}}}function L(e,t,o){const n=d();let{router:l}=t;function r(e){s.loginUser(e),l.push("timeline")}h((()=>{n("hasOutro")}));return e.$$set=e=>{"router"in e&&o(2,l=e.router)},[n,r,l,e=>r(e.id),()=>n("outroDone")]}class T extends e{constructor(e){super(),t(this,e,L,w,o,{router:2})}}export{T as default};
