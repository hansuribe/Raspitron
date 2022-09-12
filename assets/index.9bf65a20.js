(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function b(){}function lt(e){return e()}function nt(){return Object.create(null)}function D(e){e.forEach(lt)}function ct(e){return typeof e=="function"}function U(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let B;function ut(e,t){return B||(B=document.createElement("a")),B.href=t,e===B.href}function ft(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function _(e,t,n){e.insertBefore(t,n||null)}function g(e){e.parentNode.removeChild(e)}function f(e){return document.createElement(e)}function E(e){return document.createTextNode(e)}function x(){return E(" ")}function mt(){return E("")}function F(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function dt(e){return function(t){return t.preventDefault(),e.call(this,t)}}function u(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function pt(e){return Array.from(e.childNodes)}function it(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function O(e,t){e.value=t==null?"":t}let tt;function T(e){tt=e}const M=[],rt=[],J=[],st=[],ht=Promise.resolve();let G=!1;function gt(){G||(G=!0,ht.then(at))}function Y(e){J.push(e)}const R=new Set;let I=0;function at(){const e=tt;do{for(;I<M.length;){const t=M[I];I++,T(t),_t(t.$$)}for(T(null),M.length=0,I=0;rt.length;)rt.pop()();for(let t=0;t<J.length;t+=1){const n=J[t];R.has(n)||(R.add(n),n())}J.length=0}while(M.length);for(;st.length;)st.pop()();G=!1,R.clear(),T(e)}function _t(e){if(e.fragment!==null){e.update(),D(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Y)}}const P=new Set;let vt;function z(e,t){e&&e.i&&(P.delete(e),e.i(t))}function X(e,t,n,r){if(e&&e.o){if(P.has(e))return;P.add(e),vt.c.push(()=>{P.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function Z(e){e&&e.c()}function V(e,t,n,r){const{fragment:s,on_mount:l,on_destroy:i,after_update:m}=e.$$;s&&s.m(t,n),r||Y(()=>{const h=l.map(lt).filter(ct);i?i.push(...h):D(h),e.$$.on_mount=[]}),m.forEach(Y)}function Q(e,t){const n=e.$$;n.fragment!==null&&(D(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(e,t){e.$$.dirty[0]===-1&&(M.push(e),gt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(e,t,n,r,s,l,i,m=[-1]){const h=tt;T(e);const o=e.$$={fragment:null,ctx:null,props:l,update:b,not_equal:s,bound:nt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:nt(),dirty:m,skip_bound:!1,root:t.target||h.$$.root};i&&i(o.root);let q=!1;if(o.ctx=n?n(e,t.props||{},(p,v,...y)=>{const w=y.length?y[0]:v;return o.ctx&&s(o.ctx[p],o.ctx[p]=w)&&(!o.skip_bound&&o.bound[p]&&o.bound[p](w),q&&yt(e,p)),v}):[],o.update(),q=!0,D(o.before_update),o.fragment=r?r(o.ctx):!1,t.target){if(t.hydrate){const p=pt(t.target);o.fragment&&o.fragment.l(p),p.forEach(g)}else o.fragment&&o.fragment.c();t.intro&&z(e.$$.fragment),V(e,t.target,t.anchor,t.customElement),at()}T(h)}class K{$destroy(){Q(this,1),this.$destroy=b}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!ft(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const bt="/Raspitron/assets/svelte.a39f39b7.svg";function xt(e){let t,n,r,s,l;return{c(){t=f("button"),n=E("count is "),r=E(e[0])},m(i,m){_(i,t,m),c(t,n),c(t,r),s||(l=F(t,"click",e[1]),s=!0)},p(i,[m]){m&1&&it(r,i[0])},i:b,o:b,d(i){i&&g(t),s=!1,l()}}}function $t(e,t,n){let r=0;return[r,()=>{n(0,r+=1)}]}class wt extends K{constructor(t){super(),W(this,t,$t,xt,U,{})}}function kt(e){let t,n,r;return{c(){t=f("form"),t.innerHTML=`<div class="svelte-1z0xy9u"><label for="">Name
        <input type="text" name="name"/></label></div> 
    <div class="svelte-1z0xy9u"><label for="">Email
        <input type="email" name="email"/></label></div> 
    <div class="svelte-1z0xy9u"><input type="submit"/></div>`},m(s,l){_(s,t,l),n||(r=F(t,"submit",dt(e[1])),n=!0)},p:b,d(s){s&&g(t),n=!1,r()}}}function qt(e){let t;return{c(){t=f("p"),t.textContent="Form submission successful"},m(n,r){_(n,t,r)},p:b,d(n){n&&g(t)}}}function jt(e){let t;return{c(){t=f("p"),t.textContent="Form submission failed"},m(n,r){_(n,t,r)},p:b,d(n){n&&g(t)}}}function Et(e){let t;return{c(){t=f("p"),t.textContent="Submitting..."},m(n,r){_(n,t,r)},p:b,d(n){n&&g(t)}}}function Ct(e){let t;function n(l,i){return l[0]=="submitting"?Et:l[0]=="failed"?jt:l[0]=="success"?qt:kt}let r=n(e),s=r(e);return{c(){s.c(),t=mt()},m(l,i){s.m(l,i),_(l,t,i)},p(l,[i]){r===(r=n(l))&&s?s.p(l,i):(s.d(1),s=r(l),s&&(s.c(),s.m(t.parentNode,t)))},i:b,o:b,d(l){s.d(l),l&&g(t)}}}function St(e,t,n){let r;return[r,async l=>{n(0,r="submitting");const i=new FormData(l.currentTarget),m=await fetch("../services/contact.json",{method:"POST",body:i}),{message:h}=await m.json();n(0,r=h)}]}class Lt extends K{constructor(t){super(),W(this,t,St,Ct,U,{})}}function Ot(e){let t,n,r,s,l,i,m,h,o,q,p,v,y,w,C,k,S,j,A;return{c(){t=f("label"),n=E(`Name\r
  	`),r=f("input"),s=x(),l=f("label"),i=E(`Email\r
  	`),m=f("input"),h=x(),o=f("label"),q=E(`Message\r
  	`),p=f("textarea"),v=x(),y=f("a"),w=f("button"),w.textContent="Submit",C=x(),k=f("pre"),S=E(e[3]),u(r,"type","name"),u(r,"placeholder","Ashok Patel"),u(r,"class","svelte-1sh5yqq"),u(t,"class","svelte-1sh5yqq"),u(m,"type","email"),u(m,"placeholder","name@email.com"),u(m,"class","svelte-1sh5yqq"),u(l,"class","svelte-1sh5yqq"),u(p,"placeholder","Hi, I'm..."),u(p,"class","svelte-1sh5yqq"),u(o,"class","svelte-1sh5yqq"),u(y,"href",e[3]),u(y,"target","_blank"),u(k,"class","svelte-1sh5yqq")},m(a,d){_(a,t,d),c(t,n),c(t,r),O(r,e[0]),_(a,s,d),_(a,l,d),c(l,i),c(l,m),O(m,e[1]),_(a,h,d),_(a,o,d),c(o,q),c(o,p),O(p,e[2]),_(a,v,d),_(a,y,d),c(y,w),_(a,C,d),_(a,k,d),c(k,S),j||(A=[F(r,"input",e[4]),F(m,"input",e[5]),F(p,"input",e[6])],j=!0)},p(a,[d]){d&1&&O(r,a[0]),d&2&&m.value!==a[1]&&O(m,a[1]),d&4&&O(p,a[2]),d&8&&u(y,"href",a[3]),d&8&&it(S,a[3])},i:b,o:b,d(a){a&&g(t),a&&g(s),a&&g(l),a&&g(h),a&&g(o),a&&g(v),a&&g(y),a&&g(C),a&&g(k),j=!1,D(A)}}}let At="1FAIpQLSfUZ4d-IkdcnJzCSChVrz12_sRpgdriXPATkV5bUFE_14XoKg";function Mt(e,t,n){let r,s="",l="",i="";function m(){s=this.value,n(0,s)}function h(){l=this.value,n(1,l)}function o(){i=this.value,n(2,i)}return e.$$.update=()=>{e.$$.dirty&3&&n(3,r=`https://docs.google.com/forms/d/e/${At}/formResponse?usp=pp_url&entry.340751015=${s}&entry.1667817365=${l}`)},[s,l,i,r,m,h,o]}class Ft extends K{constructor(t){super(),W(this,t,Mt,Ot,U,{})}}function Tt(e){let t,n,r,s,l,i,m,h,o,q,p,v,y,w,C,k,S,j,A,a,d,et,H,L,N;return v=new wt({}),d=new Lt({}),L=new Ft({}),{c(){t=f("main"),n=f("div"),r=f("a"),r.innerHTML='<img src="/vite.svg" class="logo svelte-c9fbf7" alt="Vite Logo"/>',s=x(),l=f("a"),i=f("img"),h=x(),o=f("h1"),o.textContent="Vite + Svelte",q=x(),p=f("div"),Z(v.$$.fragment),y=x(),w=f("p"),w.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank">SvelteKit</a>, the official Svelte app framework powered by Vite!',C=x(),k=f("p"),k.textContent="Click on the Vite and Svelte logos to learn more",S=x(),j=f("section"),j.innerHTML=`<div class="container px-6 py-8 mx-auto"><h2 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our Team</h2> 

          <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"><div class="w-full max-w-xs text-center"><img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=739&amp;q=80" alt="avatar"/> 

                  <div class="mt-2"><h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Ahmed Omer</h3> 
                      <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">CEO</span></div></div> 

              <div class="w-full max-w-xs text-center"><img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt="avatar"/> 

                  <div class="mt-2"><h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Jane Doe</h3> 
                      <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Co-founder</span></div></div> 

              <div class="w-full max-w-xs text-center"><img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80" alt="avatar"/> 

                  <div class="mt-2"><h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Steve Ben</h3> 
                      <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">UI/UX</span></div></div> 

              <div class="w-full max-w-xs text-center"><img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt="avatar"/> 

                  <div class="mt-2"><h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Patterson Johnson</h3> 
                      <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Software Engineer</span></div></div></div></div>`,A=x(),a=f("div"),Z(d.$$.fragment),et=x(),H=f("div"),Z(L.$$.fragment),u(r,"href","https://vitejs.dev"),u(r,"target","_blank"),ut(i.src,m=bt)||u(i,"src",m),u(i,"class","logo svelte svelte-c9fbf7"),u(i,"alt","Svelte Logo"),u(l,"href","https://svelte.dev"),u(l,"target","_blank"),u(p,"class","card"),u(k,"class","read-the-docs svelte-c9fbf7"),u(j,"class","bg-white dark:bg-gray-900"),u(a,"class","card"),u(H,"class","card")},m($,ot){_($,t,ot),c(t,n),c(n,r),c(n,s),c(n,l),c(l,i),c(t,h),c(t,o),c(t,q),c(t,p),V(v,p,null),c(t,y),c(t,w),c(t,C),c(t,k),c(t,S),c(t,j),c(t,A),c(t,a),V(d,a,null),c(t,et),c(t,H),V(L,H,null),N=!0},p:b,i($){N||(z(v.$$.fragment,$),z(d.$$.fragment,$),z(L.$$.fragment,$),N=!0)},o($){X(v.$$.fragment,$),X(d.$$.fragment,$),X(L.$$.fragment,$),N=!1},d($){$&&g(t),Q(v),Q(d),Q(L)}}}class Dt extends K{constructor(t){super(),W(this,t,null,Tt,U,{})}}new Dt({target:document.getElementById("app")});
