const e=["Excited","Anxious","Overweight","Demonic","Jumpy","Misunderstood","Squashed","Gargantuan","Broad","Crooked","Curved","Deep","Even","Excited","Anxious","Overweight","Demonic","Jumpy","Misunderstood","Squashed","Gargantuan","Broad","Crooked","Curved","Deep","Even","Flat","Hilly","Jagged","Round","Shallow","Square","Steep","Straight","Thick","Thin","Cooing","Deafening","Faint","Harsh","High-pitched","Hissing","Hushed","Husky","Loud","Melodic","Moaning","Mute","Noisy","Purring","Quiet","Raspy","Screeching","Shrill","Silent","Soft","Squeaky","Squealing","Thundering","Voiceless","Whispering"],t=["Taco","Operating System","Sphere","Watermelon","Cheeseburger","Apple Pie","Spider","Dragon","Remote Control","Soda","Barbie Doll","Watch","Purple Pen","Dollar Bill","Stuffed Animal","Hair Clip","Sunglasses","T-shirt","Purse","Towel","Hat","Camera","Hand Sanitizer Bottle","Photo","Dog Bone","Hair Brush","Birthday Card"],r=()=>e[Math.floor(Math.random()*e.length)]+" "+t[Math.floor(Math.random()*t.length)],o=e=>{const t=document.createElement("div");return e&&(t.className=e),t},n=e=>{const t=o();return i(t,e),t},i=(e,t)=>Object.entries(t).forEach((t=>{e.style[t[0]]=t[1]})),a=(e,t,r)=>(e.addEventListener(t,r,{passive:!0}),r),s=e=>document.getElementById(e),l=(e,t,r,o)=>{const i=n({height:`${t}px`,width:`${o}px`}),a=n({height:`${t}px`,width:"100%",overflow:"auto",position:"absolute",top:"0",scrollbarWidth:"thin"}),s=n({height:`${r}px`,width:`${o}px`});return a.append(s),e.append(i,a),[i,a]},h=(e,t,r,n)=>{for(let i=0;i<n;i++){const n=new Array(r);e.push(n);const i=o("rw");for(let e=0;e<r;e++){const t=n[e]=o("cl");i.append(t)}t.append(i)}},u=(e,t,r,o)=>{let n=0;for(;o<r.r.length&&o<t.length&&n<e.length;o++,n++){const i=t[r.r[o]];e[n].forEach(((e,t)=>{e.textContent=i[t]}))}for(;n<e.length;n++)e[n].forEach((e=>{e.textContent=null}))},c=(e,t)=>{const r=n({height:`${t}px`});return e.append(r),r},d=(e,t,r)=>{for(let t=0;t<r;t++)e.push(o("nums-rw"));t.append(...e)},p=(e,t,r)=>{t++;let o=0;for(;t<=r&&o<e.length;t++,o++)e[o].textContent=""+t,e[o].style.display=null;for(;o<e.length;o++)e[o].style.display="none"},g={r:(e=>{const t=new Uint32Array(e);for(let r=0;r<e;r++)t[r]=r;return t})(1e6)},w=((e,t)=>{const o=new Array(e);for(let n=0;n<e;n++){const e=o[n]=new Array(t);e[0]=r();for(let r=1;r<t;r++)e[r]=Math.floor(1e4*Math.random())}return o})(500,20),S=((e,t,r,n,s,g,w,S,m)=>{let f=0,M=r.clientHeight;const x=w*n,v=Math.min(x,15e6),y=()=>(x-M)/(v-M);let C=y();const H=()=>Math.ceil(M/n)+1;let $=H();e.append(...g.map((e=>((e,t)=>{const r=o(t);return r.textContent=e,r})(e,"hdr"))));const[D,k]=l(r,M,v,s*g.length),B=c(t,M),A=[],T=[],b=e=>{h(A,D,g.length,e),d(T,B,e)};b($);const P=()=>{u(A,S,m,f),p(T,f,w)};P();let q=0,E=0,O=0;const R=()=>{D.style.transform=`translate(${E}px, ${O}px)`,B.style.transform=`translateY(${O}px)`};a(k,"scroll",(t=>{q=t.target.scrollTop*C,E=-t.target.scrollLeft,f=Math.trunc(q/n),O=-q%n,e.style.transform=`translateX(${E}px)`,R(),P()})),a(k,"click",(e=>{const t=Math.trunc((q+e.offsetY-k.scrollTop)/n);console.log(t)}));return{cellsFill:P,scrollTop:()=>{q=0,O=0,f=0,k.scrollTo({top:0}),R(),P()},resize:e=>{if(0===e)return;if((e=>{M+=e,C=y();const t={height:`${M}px`};i(D,t),i(k,t),i(B,t)})(e),e<0)return;const t=H();$>=t||(b(t-$),$=t,P())}}})(s("hdr"),s("nums"),s("tbl"),48,250,["Name","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"],1e6,w,g),m=new Worker(new URL("worker.js?v=20241122",import.meta.url),{type:"module"});a(m,"message",(e=>{switch(e.data[0]){case 1:g.r=e.data[1],S.cellsFill();break;case 0:t=w,e.data[1].forEach((e=>t.push(e)))}var t})),m.postMessage([0,w,999500,20]),a(s("serch"),"input",(e=>{m.postMessage([1,e.target.value.toLowerCase()]),S.scrollTop()}));let f=visualViewport.height;a(visualViewport,"resize",(e=>{const t=visualViewport.height;S.resize(t-f),f=t}));
