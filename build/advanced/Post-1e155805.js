import{S as s,i as t,s as a,e as n,b as e,c as o,l as r,q as p,f as c,n as m,g as u,h as i,k as d,D as f,o as l,m as $,B as g,v as x,w as h,x as D}from"./main-81db1163.js";import{P as j}from"./Post-07c0269c.js";import"./Thread-e10f4825.js";function y(s){let t;return{c(){t=n("p"),t.textContent="The post you're trying to access doesn't exist.",e(t,"class","text-center")},m(s,a){o(s,t,a)},p:g,i:g,o:g,d(s){s&&i(t)}}}function P(s){let t,a;return t=new j({props:{isPage:!0,loadComments:!0,post:s[1]}}),{c(){x(t.$$.fragment)},m(s,n){h(t,s,n),a=!0},p:g,i(s){a||(p(t.$$.fragment,s),a=!0)},o(s){m(t.$$.fragment,s),a=!1},d(s){D(t,s)}}}function v(s){let t,a,d,f,l,g,x;const h=[P,y],D=[];return a=function(s,t){return s[1]?0:1}(s),d=D[a]=h[a](s),{c(){t=n("div"),d.c(),e(t,"class","page")},m(n,e){o(n,t,e),D[a].m(t,null),l=!0,g||(x=r(t,"outroend",s[3]),g=!0)},p(s,[t]){d.p(s,t)},i(s){l||(p(d),c((()=>{f||(f=u(t,$,{},!0)),f.run(1)})),l=!0)},o(s){m(d),f||(f=u(t,$,{},!1)),f.run(0),l=!1},d(s){s&&i(t),D[a].d(),s&&f&&f.end(),g=!1,x()}}}function w(s,t,a){let{params:n}=t;const e=d(),o=f.postByID(n.postID);l((()=>{e("hasOutro")}));return s.$$set=s=>{"params"in s&&a(2,n=s.params)},[e,o,n,()=>e("outroDone")]}class B extends s{constructor(s){super(),t(this,s,w,v,a,{params:2})}}export{B as default};
