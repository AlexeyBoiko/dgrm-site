const e=["Excited","Anxious","Overweight","Demonic","Jumpy","Misunderstood","Squashed","Gargantuan","Broad","Crooked","Curved","Deep","Even","Excited","Anxious","Overweight","Demonic","Jumpy","Misunderstood","Squashed","Gargantuan","Broad","Crooked","Curved","Deep","Even","Flat","Hilly","Jagged","Round","Shallow","Square","Steep","Straight","Thick","Thin","Cooing","Deafening","Faint","Harsh","High-pitched","Hissing","Hushed","Husky","Loud","Melodic","Moaning","Mute","Noisy","Purring","Quiet","Raspy","Screeching","Shrill","Silent","Soft","Squeaky","Squealing","Thundering","Voiceless","Whispering"],t=["Taco","Operating System","Sphere","Watermelon","Cheeseburger","Apple Pie","Spider","Dragon","Remote Control","Soda","Barbie Doll","Watch","Purple Pen","Dollar Bill","Stuffed Animal","Hair Clip","Sunglasses","T-shirt","Purse","Towel","Hat","Camera","Hand Sanitizer Bottle","Photo","Dog Bone","Hair Brush","Birthday Card"],a=()=>e[Math.floor(Math.random()*e.length)]+" "+t[Math.floor(Math.random()*t.length)],n=(e,t)=>t.forEach((t=>e.push(t))),r=[];onmessage=async function(e){switch(e.data[0]){case 1:await s(e.data[1]);break;case 0:o(e.data[1],e.data[2],e.data[3])}};const o=(e,t,o)=>{const i=1e4;n(r,e);const s=e=>{const t=((e,t)=>{const n=new Array(e);for(let r=0;r<e;r++){const e=n[r]=new Array(t);e[0]=a();for(let a=1;a<t;a++)e[a]=Math.floor(1e4*Math.random())}return n})(e,o);postMessage([0,t]),n(r,t)},l=Math.trunc(t/i);for(let e=0;e<l;e++)s(i);s(t-l*i)};let i=null;const s=async e=>{i=e;const t=e=>self.postMessage([1,e],[e.buffer]);if(0===e.length)return void t((e=>{const t=new Uint32Array(e);for(let a=0;a<e;a++)t[a]=a;return t})(r.length));const a=[],n=()=>t(new Uint32Array(a));let o=0;const s=(t,n)=>-1!==t[0]?.toLocaleLowerCase().indexOf(e)&&(a.push(n),!0);let l=(e,t)=>{s(e,t)?100===a.length&&(o=a.length,n(),l=s):5e3!==t&&t!==r.length-1||0!==a.length||(n(),l=s)};await(async(e,t,a,n)=>{let r=0;const o=async t=>{const o=r+t;for(;r<o;r++)a(e[r],r);return await n()},i=Math.trunc(e.length/t);for(let e=0;e<i;e++)if(!await o(t))return;await o(e.length-r)})(r,5e3,((e,t)=>l(e,t)),(async()=>{var t;return await new Promise((e=>setTimeout(e,t??0))),i===e&&(o!==a.length&&(o=a.length,n()),!0)}))};
