import{S as e,i as t,s,e as o,a as n,b as a,t as r,c as l,d as u,f as i,g as c,l as d,h,j as f,k as p,m as v,n as k,r as g,Q as j,R as y,o as m,p as x,x as b,T as w,U as $}from"./main-610ee0ee.js";function C(e){let t;return{c(){t=r("Add before push hook")},m(e,s){i(e,t,s)},d(e){e&&k(t)}}}function H(e){let t;return{c(){t=r("Remove before push hook")},m(e,s){i(e,t,s)},d(e){e&&k(t)}}}function J(e){let t,s,j,y,m,x,b,w,$,J,R,O,S,A,M,Y,B,D,I,U,_,P,T,V,Q,W,q,z,E,F,G,K,L,X,Z,ee,te=JSON.stringify(e[3].routes,null,4)+"",se=JSON.stringify(e[3].location,null,4)+"";function oe(e,t){return e[1]?H:C}let ne=oe(e),ae=ne(e);return{c(){t=o("div"),s=o("div"),j=o("button"),y=n("svg"),m=n("path"),x=a(),b=o("span"),ae.c(),w=a(),$=o("div"),J=o("label"),J.textContent="Am I a real developer?",R=a(),O=o("input"),S=a(),A=o("span"),A.textContent=""+(N?"Yes":"Nope"),M=a(),Y=o("p"),Y.textContent="This example before push hook will block you from visiting this site when you're not a developer. What are you waiting? Add that hook by the button and uncheck the checkbox! 🙂",B=a(),D=o("h2"),D.textContent="Registered routes",I=a(),U=o("pre"),_=o("code"),P=r("\n\t\t"),T=r(te),V=r("\n\t"),Q=a(),W=o("h2"),W.textContent="Current location",q=a(),z=o("pre"),E=o("code"),F=r("\n\t\t"),G=r(se),K=r("\n\t"),l(m,"d","M20 58H60M100 58H60M60 58V21M60 58V100"),l(m,"stroke-width","6"),l(m,"stroke-linecap","round"),l(m,"class","svelte-5j7f2j"),l(y,"class","icon stroke icon-1 svelte-5j7f2j"),l(y,"viewBox","0 0 120 120"),l(y,"fill","none"),l(y,"xmlns","http://www.w3.org/2000/svg"),l(b,"class","label"),l(j,"class","add-hook-btn flex flex-center gap-05 svelte-5j7f2j"),u(j,"hook-added",e[1]),l(J,"for","IsUserRealDev"),l(O,"type","checkbox"),l(O,"id","IsUserRealDev"),l(O,"class","svelte-5j7f2j"),l($,"class","dev-user svelte-5j7f2j"),l(s,"class","misc svelte-5j7f2j"),l(_,"class","svelte-5j7f2j"),l(U,"class","svelte-5j7f2j"),l(E,"class","svelte-5j7f2j"),l(z,"class","svelte-5j7f2j"),l(t,"class","page")},m(o,n){i(o,t,n),c(t,s),c(s,j),c(j,y),c(y,m),c(j,x),c(j,b),ae.m(b,null),c(s,w),c(s,$),c($,J),c($,R),c($,O),O.checked=e[2],c($,S),c($,A),c(s,M),c(s,Y),c(t,B),c(t,D),c(t,I),c(t,U),c(U,_),c(_,P),c(_,T),c(_,V),c(t,Q),c(t,W),c(t,q),c(t,z),c(z,E),c(E,F),c(E,G),c(E,K),X=!0,Z||(ee=[d(j,"click",e[5]),d(O,"change",e[6]),d(t,"outroend",e[7])],Z=!0)},p(e,[t]){ne!==(ne=oe(e))&&(ae.d(1),ae=ne(e),ae&&(ae.c(),ae.m(b,null))),(!X||2&t)&&u(j,"hook-added",e[1]),4&t&&(O.checked=e[2]),(!X||8&t)&&te!==(te=JSON.stringify(e[3].routes,null,4)+"")&&h(T,te),(!X||8&t)&&se!==(se=JSON.stringify(e[3].location,null,4)+"")&&h(G,se)},i(e){X||(f((()=>{L||(L=p(t,v,{},!0)),L.run(1)})),X=!0)},o(e){L||(L=p(t,v,{},!1)),L.run(0),X=!1},d(e){e&&k(t),ae.d(),e&&L&&L.end(),Z=!1,g(ee)}}}let R=0,N=j(!0),O=j(null);function S({pendingRoute:e,resolve:t,reject:s}){if("router-struct"===e.name){if(!$(N)&&R<2)return 0===R?alert("Haha! You're not a real developer, you won't get in here. 😈 You dead-locked yourself out of this page and now you never gonna.... no, just kidding. Just retry and you'll get there. 🙂"):1===R&&alert("Ha ha ha haa!! You still won't get in here! 😈 Alright, enough fun. Just retry, this time you really will get back in. 😄"),R++,2===R&&N.set(!0),s();R=0}t()}function A(e,t,s){let o,n,a,r=b,l=()=>(r(),r=w(i,(e=>s(3,a=e))),i);y(e,N,(e=>s(2,o=e))),y(e,O,(e=>s(8,n=e))),e.$$.on_destroy.push((()=>r()));const u=m();x((()=>{u("hasOutro")}));let{router:i}=t;l();let c=function(){try{i.addBeforePushHook("app.svelte_hook",(()=>{}))()}catch(e){return!0}return!1}();return e.$$set=e=>{"router"in e&&l(s(0,i=e.router))},e.$$.update=()=>{7&e.$$.dirty&&!o&&c&&i.push("home")},[i,c,o,a,u,function(){c?c&&(n(),O.set(null),R=0,s(1,c=!c)):c||(O.set(i.addBeforePushHook("app.svelte_hook",S)),R=0,s(1,c=!c))},function(){o=this.checked,N.set(o)},()=>u("outroDone")]}class M extends e{constructor(e){super(),t(this,e,A,J,s,{router:0})}}export{M as default};
