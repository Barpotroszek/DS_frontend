(this.webpackJsonpDS_frontend=this.webpackJsonpDS_frontend||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/zabity_za_prawde.4fcb4f47.jpg"},function(e,t,a){},,,function(e,t,a){},,function(e,t,a){e.exports=a(22)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(9),r=a.n(c),m=a(2),s=a(3);var i=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:c,getTTFB:r}=t;a(e),n(e),l(e),c(e),r(e)})};const o={ROOT:"/",DETAILS:"details",SUBMIT_ORDER:"submit-order",BASKET:"basket"},d={ROOT:"/seller",DASHBOARD:"dashboard",ORDERS:{MAIN:"orders",DETAILS:":id",CREATE:"create"}},E={ROOT:"items",DETAILS:":id"},u="login",p="logout",b=o,y=d;var g={CLIENT_MAIN:o.ROOT,CLIENT_DETAILS:o.ROOT+E.ROOT+"/"+E.ROOT,CLIENT_SUBMIT_ORDER:o.ROOT+o.SUBMIT_ORDER,CLIENT_BASKET:o.ROOT+o.BASKET,SELLER_DASHBOARD:d.ROOT+"/"+d.DASHBOARD,SELLER_ORDERS_MAIN:d.ROOT+"/"+d.ORDERS.MAIN,SELLER_ORDER_DETAILS:d.ROOT+"/"+d.ORDERS.MAIN+"/"+d.ORDERS.DETAILS,SELLER_ORDER_CREATE:d.ROOT+"/"+d.ORDERS.MAIN+"/"+d.ORDERS.CREATE,CLIENT_ITEMS:E.ROOT,CLIENT_ITEM_DETAILS:E.ROOT+"/"+E.DETAILS,SELLER_ITEMS:y.ROOT+"/"+E.ROOT,SELLER_ITEM_DETAILS:y.ROOT+"/"+E.ROOT+"/"+E.DETAILS,LOGIN:u,LOGOUT:p};const h=Object(n.createContext)(),N="user-credentials";function f(e){let{children:t}=e;const[a,c]=Object(n.useState)(null),r=Object(m.o)();Object(n.useEffect)(()=>{const e=sessionStorage.getItem(N);try{c(JSON.parse(e))}catch{}finally{var t,a;i(null===(t=r.state)||void 0===t||null===(a=t.from)||void 0===a?void 0:a.pathname)}},[]);const s=e=>{sessionStorage.setItem(N,JSON.stringify(e)),c(e)},i=Object(m.q)(),o={userData:a,handleLogin:async e=>{e&&e.preventDefault();const t=await new Promise(e=>{setTimeout(()=>e("23456789"),250)});s({name:"Bartek",token:t}),i(g.SELLER_DASHBOARD)},handleLogout:async e=>{e&&e.preventDefault(),s(null),i(g.CLIENT_MAIN)}};return l.a.createElement(h.Provider,{value:o},t)}const k=()=>Object(n.useContext)(h),O=e=>{let{children:t}=e;const{userData:a}=k(),n=Object(m.o)();return a?t:l.a.createElement(m.a,{to:g.CLIENT_MAIN,state:{from:n}})},S=Object(n.createContext)();function w(e){let{children:t}=e;const[a,c]=Object(n.useState)(0),r={basket:a,setBasket:c};try{Object(n.useState)(sessionStorage.getItem("basket").length)}catch{}return l.a.createElement(S.Provider,{value:r},t)}const z=()=>Object(n.useContext)(S);let R;function T(e){let{target:t}=e;const{userData:a}=k(),{basket:n}=z();console.log("TARGET: ",t),a?a&&(R=[{txt:"Panel sprzedawcy",id:"main-page",href:g.SELLER_DASHBOARD+"/",func:null},{txt:"Zam\xf3wienia",id:"orders",href:g.SELLER_ORDERS_MAIN+"/",basket:n},{txt:"Itemy",id:"items",href:g.SELLER_ITEMS},{txt:"Wyloguj si\u0119",id:"logout",href:g.LOGOUT}]):R=[{txt:"Strona g\u0142\xf3wna",id:"main-page",href:g.CLIENT_MAIN,func:null},{txt:"Itemki",id:"items",href:g.CLIENT_ITEMS},{txt:"Koszyk",id:"basket",href:g.CLIENT_BASKET,basket:n},{txt:"Zaloguj si\u0119",id:"login",href:g.LOGIN}];const c=R.map(e=>l.a.createElement(s.c,{className:"btn btn-primary",to:e.href,id:e.id,key:e.id,onClick:()=>{try{document.querySelector(".show").classList.remove("show")}catch{}}},l.a.createElement("div",{"items-amount":e.basket?1:0},e.txt)));return l.a.createElement("nav",{className:"navbar navbar-expand-md"},l.a.createElement("button",{className:"btn btn-primary navbar-btn  ",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarList"},l.a.createElement("span",null," Menu: "),l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarList"},l.a.createElement("div",{className:"navbar-nav"},c)))}function v(){const e=JSON.parse(sessionStorage.getItem("categories"));let t=null;return null===e?(t=[{id:0,name:"Formacja",href:""},{id:1,name:"Ciekawe",href:""},{id:2,name:"Nowo\u015bci",href:""},{id:3,name:"Bestsellery",href:""},{id:4,name:"ks. Blachnicki",href:""},{id:5,name:"Gad\u017cety",href:""}],sessionStorage.setItem("categories",JSON.stringify(t))):t=Array.from(e),l.a.createElement("aside",null,"Kategorie:",l.a.createElement("ul",null,t.map(e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{className:"link-underline link-underline-opacity-0",href:e.href},e.name)))))}function x(){return l.a.createElement("footer",null,"Stopka, buhahaha")}a(18);function A(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(T,{target:"customer"}),l.a.createElement("div",{className:"main-wrapper"},l.a.createElement(v,null),l.a.createElement("main",{id:"main-content"},l.a.createElement(m.b,{id:"main-content"}))),l.a.createElement(x,null))}a(19);function I(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(T,{target:"seller"}),l.a.createElement("div",{className:"main-wrapper seller"},l.a.createElement("main",{id:"main-content"},l.a.createElement(O,null,l.a.createElement(m.b,{id:"main-content"})))),l.a.createElement(x,null))}var L=function(){const{userData:e}=k();return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"topic border-bottom"},"Panel sprzedawcy"),l.a.createElement("div",{className:"Dashboard"},l.a.createElement("i",null,"Tutaj b\u0119dzie co\u015b ciekawego... kiedy\u015b...")))};function D(e){let{className:t}=e;return l.a.createElement("form",{role:"search",className:t},l.a.createElement("input",{type:"text",name:"search",placeholder:"Wyszukiwanie..."}),l.a.createElement("button",{className:"btn btn-secondary",type:"submit"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-search",viewBox:"0 0 16 16"},l.a.createElement("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"}))))}function j(e){let{key:t,img:a,href:n,title:c,dostepnosc:r,price:m}=e;const i=a?l.a.createElement("img",{src:a,className:"img",alt:"img"}):l.a.createElement("div",{className:"img"},"ksi\u0105\u017cka");return l.a.createElement(s.b,{to:n,key:t,className:"card"},i,l.a.createElement("div",{className:"wrapper "},l.a.createElement("h3",null,c),l.a.createElement("span",{className:"dostepnosc"},r),l.a.createElement("span",{className:"price"},m)))}function C(e){let{name:t,cards:a}=e;const n=a.map(e=>l.a.createElement(j,{key:e.id,href:e.href,title:e.title,dostepnosc:e.dostepnosc,price:e.price,img:e.img}));return l.a.createElement("div",{key:t,className:"books container-fluid d-flex justify-content-center"},n)}a(8);var _=a(4),B=a.n(_);const M=[{key:0,title:"Droga ku dojrza\u0142o\u015bci Chrze\u015bcija\u0144skiej",href:null,dostepnosc:"Nie dzia\u0142a",price:"25,26"},{key:1,title:"Zabity za prawd\u0119",href:"items/1234",dostepnosc:"DZIA\u0141A-kliknij",price:"35.22",img:B.a},{key:2,title:"Tytu\u0142 ksi\u0105\u017cki",href:null,dostepnosc:"Nie dzia\u0142a",price:"25,26"},{key:3,title:"ZAK\u0141ADKA MAGNETYCZNA: DARY ZOBOWI\u0104ZANIA DOMOWEGO KO\u015aCIO\u0141A",href:null,dostepnosc:"Nie dzia\u0142a",price:"25,26"},{key:4,title:"Tytu\u0142 ksi\u0105\u017cki",href:null,dostepnosc:"Nie dzia\u0142a",price:"25,26"},{key:5,title:"Tytu\u0142 ksi\u0105\u017cki",href:null,dostepnosc:"Nie dzia\u0142a",price:"25,26"}];var Z=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(D,null),l.a.createElement("h2",{className:"topic"},"Nowo\u015bci"),l.a.createElement(C,{cards:M,name:"newest"}),l.a.createElement("h2",{className:"topic"},"Popularne"),l.a.createElement(C,{cards:M,name:"topic"}))};function F(e){let{txt:t,onClick:a,disabled:n=!1}=e;return l.a.createElement("button",{className:"btn btn-primary",onClick:a,disabled:n},t)}function P(e){let{txt:t,onClick:a,disabled:n}=e;return l.a.createElement("button",{className:"btn btn-success",onClick:a,disabled:n},t)}function J(e){let{txt:t,href:a,disabled:n}=e;return a?l.a.createElement(s.b,{style:{color:"unset",textDecoration:"none"},to:a},l.a.createElement("button",{className:"btn btn-outline-primary",disabled:n},t)):l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{disabled:n,className:"btn btn-outline-primary"},t))}function K(e){let{onClick:t,txt:a}=e;return l.a.createElement("button",{type:"button",className:"close btn btn-outline-danger","aria-label":"Close",onClick:t},l.a.createElement("span",{"aria-hidden":"true"},a))}function W(e){let{i:t,txt:a,checked:n,action:c}=e;return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{name:"check-"+t,id:"check-"+t,onChange:e=>{c(t,e.target.checked)},checked:n,type:"checkbox",className:"btn-check"}),l.a.createElement("label",{htmlFor:"check-"+t,className:"btn btn-outline-primary"},a))}function q(e){let{txt:t,action:a,children:n}=e;return l.a.createElement("span",null,l.a.createElement("button",{title:"Przycisk testowy, na produkcji nie powinno go by\u0107","data-placement":"top",type:"button",className:"d-block btn btn-outline-info test-btn m-2","aria-label":"Close",onClick:a},t||n))}function U(){const{handleLogin:e}=k();return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"topic border-bottom"},"Strona logowania"),l.a.createElement("form",{onSubmit:e,className:"mx-2 my-3 w-50 ",style:{alignSelf:"center"}},l.a.createElement("div",{className:"form-floating mb-2"},l.a.createElement("input",{type:"text",className:"form-control",min:"1",name:"name",id:"name",placeholder:"0",required:!0}),l.a.createElement("label",{htmlFor:"name",className:"form-label"},"Login")),l.a.createElement("div",{className:"form-floating"},l.a.createElement("input",{type:"password",className:"form-control",step:"0.01",size:"2",min:"1",name:"passwd",id:"passwd",placeholder:"23",required:!0}),l.a.createElement("label",{htmlFor:"passwd",className:"form-label"},"Has\u0142o")),l.a.createElement("small",{style:{fontStyle:"italic"}},"Wpisz cokolwiek, tu wszystko zadzia\u0142a"),l.a.createElement("span",{className:"mw mt-4 ",style:{display:"grid",justifyContent:"end"}},l.a.createElement(F,{type:"submit",txt:"Zaloguj si\u0119"}))))}function G(){const{handleLogout:e}=k();e()}a(20);function H(e){return l.a.createElement("li",{className:"info "+e.cat_id,key:e.cat_id,"data-tag":e.name},e.val)}function Y(e){let{root:t}=e;const{setBasket:a}=z(),[n,c,r,m]=[1234,"Zabity za prawd\u0119",B.a,35.22];function s(){const e=[{id:n,title:c,price:m,amount:1}];let t=JSON.parse(sessionStorage.getItem("basket"));null===t&&(t=new Array([]));const l=t.findIndex(e=>e.id===n);l<0?t=t.concat(e):t[l].amount+=1,console.log(e),sessionStorage.setItem("basket",JSON.stringify(t)),a(!0),alert("Dodano!")}let i,o;return"seller"===t?i=l.a.createElement("button",{className:"my-btn",type:"button",disabled:!0},"Aktualizuj artyku\u0142"):(i=l.a.createElement("button",{className:"my-btn",type:"button",onClick:s},"Dodaj do koszyka"),o=l.a.createElement("button",{className:"my-btn pc",type:"button",onClick:s},"Dodaj do koszyka")),l.a.createElement("div",{className:"DetailsContainer "},l.a.createElement("h2",{className:"topic border-bottom"},c),l.a.createElement("img",{src:r,alt:""}),l.a.createElement("div",{className:"details"},l.a.createElement("ul",null,[{cat_id:"dostepnosc",name:"Dost\u0119pno\u015b\u0107: ",val:"Jest w magazynie"},{cat_id:"category",name:"Kategoria: ",val:"x. Blachnicki"},{cat_id:"publisher",name:"Wydawnictwo: ",val:"LWT"},{cat_id:"pages",name:"Stron: ",val:"Sporo..."}].map(H)),l.a.createElement("span",{className:"price"},m),o),i,l.a.createElement("div",{className:"description"},"Zacz\u0119\u0142o si\u0119 tak: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, assumenda earum facilis dolore id eligendi alias, rem officiis inventore sapiente ab quo nisi perferendis qui dolorem, labore repellat veniam dicta!"))}a(5);let Q=new Array(5).fill({id:1,title:"Zabity za prawd\u0119",price:35.25,amount:2,href:"/details/1234",img:B.a},0,10);function V(){let e=[];try{e=Array.from(JSON.parse(sessionStorage.getItem("basket")))}catch{}const[t,a]=Object(n.useState)(e),{setBasket:c}=z();Object(n.useEffect)(()=>{try{const n=t.filter(e=>e.id?e:null);e=n,sessionStorage.setItem("basket",JSON.stringify(n)),a(n)}catch{}},[]),Object(n.useEffect)(()=>{console.log("Updating storage"),sessionStorage.setItem("basket",JSON.stringify(t)),c(t.length>0)},[t]);const r=(e,n)=>{let l=t;l[e].amount=n,a([...l])};let m=0;if(null===e||0===e.length)return l.a.createElement("div",{className:"Basket"},l.a.createElement("h2",{className:"topic border-bottom mb-3"},"Koszyk"),l.a.createElement("span",{style:{textAlign:"center",width:"100%"}},"Tw\xf3j koszyk jest pusty..."),l.a.createElement(q,{action:()=>{a([...Q])}},"Nape\u0142nij koszyk"));function i(e){console.log("To delete: ",e);let n=t.filter((t,a)=>e-1!==a?t:null);a([...n])}return l.a.createElement("div",{className:"Basket"},l.a.createElement("h2",{className:"topic border-bottom mb-3"},"Koszyk"),l.a.createElement("table",{className:"table table-bordered table-striped table-hover"},l.a.createElement("thead",{className:"table-secondary"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Zdj\u0119cie"),l.a.createElement("th",{scope:"col"},"Tytu\u0142"),l.a.createElement("th",{scope:"col"},"Ilo\u015b\u0107"),l.a.createElement("th",{scope:"col"},"Cena"),l.a.createElement("th",{scope:"col"}))),l.a.createElement("tbody",null,t.map((e,t)=>(m+=e.price*e.amount,function(e,t,a,n){const c=e.amount,r=e=>{e<1&&(e=1),n(t-1,e)};if(!e.id)return;return l.a.createElement("tr",{key:t,id:t},l.a.createElement("td",{key:"nr"},t),l.a.createElement("td",{key:"img"},l.a.createElement("img",{className:"img",src:e.img,alt:"preview"})),l.a.createElement("td",{key:"title"},l.a.createElement(s.b,{to:"/items/"+e.id},e.title)),l.a.createElement("td",{className:"align-items-center",key:"amount"},l.a.createElement("button",{className:"amount-btn",onClick:()=>r(c-1)},"-"),l.a.createElement("input",{style:{padding:0,paddingRight:".5em",margin:"0 .3em",textAlignLast:"center"},type:"number",name:"id_amount",onChange:e=>r(Number(e.target.value)),id:"",min:0,max:20,value:c}),l.a.createElement("button",{className:"amount-btn",onClick:()=>r(c+1)},"+")),l.a.createElement("td",{key:"price",className:"price"},e.price),l.a.createElement("td",{className:"bin"},l.a.createElement(K,{onClick:()=>a(t),txt:"Usu\u0144 z koszyka"})))}(e,t+1,i,r))),l.a.createElement("tr",{className:"table-secondary"},l.a.createElement("td",{colSpan:"6",style:{textAlign:"end"}})))),l.a.createElement("span",{className:"mw",style:{display:"grid",justifyItems:"end",gap:".7em"}},l.a.createElement("span",{className:"price",style:{fontSize:"x-large",marginRight:".5em"}},(Math.round(100*m)/100).toFixed(2)),l.a.createElement(s.b,{to:g.CLIENT_SUBMIT_ORDER},l.a.createElement(F,{txt:"Z\u0142\xf3\u017c zam\xf3wienie"}))))}function X(){return l.a.createElement("form",{onSubmit:function(e){e.preventDefault();const t=e.target;new FormData(t).append("items",sessionStorage.getItem("basket")),alert("Formularz zosanie wys\u0142any. Info w konsoli")},className:"mx-2"},l.a.createElement("div",{className:"mb-2"},l.a.createElement("label",{htmlFor:"name",className:"form-label"},"Imi\u0119 i nazwisko zamawiaj\u0105cego:"),l.a.createElement("input",{type:"text",name:"name",id:"name",className:"form-control mx-1",minLength:"3",placeholder:"Przemek Krakowski",required:!0}),l.a.createElement("div",{className:"form-text px-2"},"Pole obowi\u0105zkowe")),l.a.createElement("div",{className:"mb-2"},l.a.createElement("label",{htmlFor:"email",className:"form-label"},"Adres email:"),l.a.createElement("input",{type:"email",name:"email",className:"form-control mx-1",minLength:"3",placeholder:"przyklad@poczta.pl",id:"",required:!0}),l.a.createElement("div",{className:"form-text px-2"},"Pole obowi\u0105zkowe")),l.a.createElement("div",{className:"mb-4"},l.a.createElement("label",{htmlFor:"authorized",className:"form-label"},"Osoby upowa\u017cnione do odbioru (oddzieli\u0107 po przecinku):"),l.a.createElement("input",{type:"text",name:"authorized",className:"form-control mx-1",minLength:"3",placeholder:"Grzegorz Majstersztyk"})),l.a.createElement("span",{className:"mw",style:{display:"grid",justifyContent:"end"}},l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Z\u0142\xf3\u017c zam\xf3wienie")))}function $(){return l.a.createElement("div",{className:"submitOrder"},l.a.createElement("h2",{className:"topic border-bottom mb-3"},"Sk\u0142adanie zam\xf3wienia"),l.a.createElement(X,null))}const ee=new Array([{id:1,title:"Zabity za prawd\u0119",price:35.25,amount:0,href:"/details/1234",img:null},{id:2,title:"Zabity za prawd\u0119",price:35.25,amount:0,href:"/details/1234",img:null},{id:3,title:"Zabity za prawd\u0119",price:35.25,amount:0,href:"/details/1234",img:null},{id:4,title:"Zabity za prawd\u0119",price:35.25,amount:0,href:"/details/1234",img:null}])[0];function te(){const[e,t]=Object(n.useState)(ee);console.log({list:e});const a=(a,n)=>{let l=e;console.log({i:a,v:n}),l[a].amount=n,console.log({temp:l}),console.log({temp:l,list:e}),t([...l]),sessionStorage.setItem("basket",JSON.stringify(l))};let c=0;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"topic border-bottom"},"Tworzenie zam\xf3wienia"),l.a.createElement("form",{className:"mx-2 my-2 w-100 d-flex flex-row justify-content-between",style:{alignSelf:"center"}},l.a.createElement("div",{className:"form-floating mx-3 col"},l.a.createElement("input",{type:"text",className:"form-control",min:"1",name:"name",id:"name",placeholder:"0",required:!0}),l.a.createElement("label",{htmlFor:"name",className:"form-label"},"Zamawiaj\u0105cy"),l.a.createElement("div",{className:"form-text px-2"},"*Pole obowi\u0105zkowe")),l.a.createElement("div",{className:"form-floating col mx-3"},l.a.createElement("input",{type:"text",className:"form-control",min:"1",name:"email",id:"email",placeholder:"0"}),l.a.createElement("label",{htmlFor:"email",className:"form-label"},"Adres email"))),l.a.createElement("table",{className:"Basket table table-bordered table-striped table-hover"},l.a.createElement("thead",{className:"table-secondary"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Zdj\u0119cie"),l.a.createElement("th",{scope:"col"},"Tytu\u0142"),l.a.createElement("th",{scope:"col"},"Ilo\u015b\u0107"),l.a.createElement("th",{scope:"col"},"Cena"))),l.a.createElement("tbody",null,e.map((e,t)=>(c+=e.price*e.amount,e.id=t,function(e,t,a,n){const c=e.amount;e.id=t;const r=e=>{e<0&&(e=0),n(t-1,e)};return l.a.createElement("tr",{key:t,id:t},l.a.createElement("td",{key:"nr"},t),l.a.createElement("td",{key:"img"},l.a.createElement("img",{className:"img",src:e.img})),l.a.createElement("td",{key:"title"},l.a.createElement("a",{href:"/details/"+e.id},e.title)),l.a.createElement("td",{className:"align-items-center",key:"amount"},l.a.createElement("button",{className:"amount-btn",onClick:()=>r(c-1)},"-"),l.a.createElement("input",{style:{padding:0,paddingRight:".5em",margin:"0 .3em",textAlignLast:"center"},type:"number",name:"id_amount",onChange:e=>{r(Number(e.target.value))},id:"",min:0,max:20,value:c}),l.a.createElement("button",{className:"amount-btn",onClick:e=>r(c+1)},"+")),l.a.createElement("td",{key:"price",className:"price"},e.price))}(e,t+1,0,a))),l.a.createElement("tr",{className:"table-secondary"},l.a.createElement("td",{colSpan:"6",style:{textAlign:"end"}})))),l.a.createElement("span",{className:"mw mt-4 ",style:{display:"grid",justifyContent:"end"}},l.a.createElement(F,{type:"submit",txt:"Z\u0142\xf3\u017c zam\xf3wienie"})))}const ae=new Array(5);ae.fill({id:"20240215_1234",person:"Przemys\u0142aw Zielent",email:"poczta@domena.pl",authorized:"Larynta",status:0},0,5);function ne(e){let{data:t}=e;return l.a.createElement("tr",null,l.a.createElement("td",{className:"order-id"},"#",t.id),l.a.createElement("td",{className:"order-status"},0===(a=t.status)?"Oczekuj\u0105ce":1===a?"W trakcie przygotowania":2===a?"Oczekuje na odbi\xf3r":3===a?"Wydane":void 0),l.a.createElement("td",{className:"order-person"},t.person),l.a.createElement("td",{className:"order-email"},t.email),l.a.createElement("td",{className:"order-actions"},l.a.createElement(J,{txt:"Poka\u017c",href:"./"+t.id})));var a}function le(){return console.log(ae.length),l.a.createElement("div",{className:"OrdersList"},l.a.createElement("h2",{className:"topic border-bottom mb-3"},"Lista zam\xf3wie\u0144"),l.a.createElement("table",{className:"table table-bordered table-striped table-hover"},l.a.createElement("thead",{className:"table-secondary"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Nr zam\xf3wienia"),l.a.createElement("th",{scope:"col"},"Status"),l.a.createElement("th",{scope:"col"},"Zamawiaj\u0105cy"),l.a.createElement("th",{scope:"col"},"Adres email"),l.a.createElement("th",{scope:"col"}))),l.a.createElement("tbody",null,ae.map((e,t)=>l.a.createElement(ne,{key:e.id+t,data:e})))))}const ce=new Array(15).fill({id:1,title:"Zabity za prawd\u0119; Ks. Blachnicki w obozach i wi\u0119zieniach",price:35.25,amount:12,dostepnosc:"Jest",href:"/items/1234",img:null},0,10);function re(e){let{seller:t}=e,a=ce;const[c,r]=Object(n.useState)(a);return l.a.createElement("div",{className:""},l.a.createElement("h2",{className:"topic border-bottom mb-3 w"},"Lista przedmiot\xf3w"),l.a.createElement("div",{className:"d-flex justify-content-center flex-column"},l.a.createElement("div",{className:"mx-2 "},l.a.createElement(D,{className:"mb-3"}),!t&&l.a.createElement(C,{cards:ce}),t&&l.a.createElement("table",{className:"table table-bordered table-striped table-hover"},l.a.createElement("thead",{className:"table-secondary"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Zdj\u0119cie"),l.a.createElement("th",{scope:"col"},"Tytu\u0142"),t&&l.a.createElement("th",{scope:"col"},"Ilo\u015b\u0107"),l.a.createElement("th",{scope:"col"},"Cena"),l.a.createElement("th",{scope:"col"}))),l.a.createElement("tbody",null,c.map((e,t)=>function(e,t){const a=e.amount;return l.a.createElement("tr",{key:t,id:t},l.a.createElement("td",{key:"nr"},t),l.a.createElement("td",{key:"img"},l.a.createElement("img",{className:"img",src:e.img,alt:"img"})),l.a.createElement("td",{key:"title"},e.title),l.a.createElement("td",{className:"align-items-center",key:"amount"},l.a.createElement("input",{style:{padding:0,paddingRight:".5em",margin:"0 .3em",textAlignLast:"center"},type:"number",name:"id_amount",id:"",min:0,max:20,value:a,disabled:!0})),l.a.createElement("td",{key:"price",className:"price"},e.price),l.a.createElement("td",{className:"bin"},l.a.createElement(J,{onClick:()=>{},txt:"Aktualizuj",disabled:!0})))}(e,t+1)),l.a.createElement("tr",{className:"table-secondary"},l.a.createElement("td",{colSpan:"6",style:{textAlign:"end"}})))))))}const me="20240215_1234",se="Przemys\u0142aw Zielent",ie="poczta@domena.pl",oe="Larynta",de=0;let Ee=new Array(3).fill({id:1234,title:"Zabity za prawd\u0119",price:35.22,amount:2,img:B.a},0,10);function ue(){const e=Ee,[t,a]=Object(n.useState)(Array(e.length).fill(!0)),[c,r]=Object(n.useState)(!1),[m,s]=Object(n.useState)(!1);let i=0;const o=(e,n)=>{let l=t;l=l.map((t,a)=>a===e?n:t),a([...l]),l.includes(!1)||r(!0),console.log(e,l,t)};return l.a.createElement("div",{className:"OrderDetails"},l.a.createElement("h2",{className:"topic border-bottom mg-3"},"Zam\xf3wienie #",me," - szczeg\xf3\u0142y"),l.a.createElement("ul",null,l.a.createElement("li",null,"Zamawiaj\u0105cy: ",l.a.createElement("strong",null,se)),l.a.createElement("li",null,"Adres email: ",l.a.createElement("strong",{id:"email"},ie)),l.a.createElement("li",null,"Upowa\u017cniony: ",l.a.createElement("strong",{id:"authorized"},oe)),l.a.createElement("li",null,"Status: ",l.a.createElement("strong",{id:"status"},0===(d=de)?"Oczekuj\u0105ce":1===d?"W trakcie przygotowania":2===d?"Oczekuje na odbi\xf3r":3===d?"Wydane":void 0))),l.a.createElement("table",{className:"table table-bordered table-striped table-hover"},l.a.createElement("thead",{className:"table-secondary"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Zdj\u0119cie"),l.a.createElement("th",{scope:"col"},"Tytu\u0142"),l.a.createElement("th",{scope:"col"},"Ilo\u015b\u0107"),l.a.createElement("th",{scope:"col"},"Cena"),l.a.createElement("th",{scope:"col"}))),l.a.createElement("tbody",null,e.map((e,a)=>(i+=e.price*e.amount,l.a.createElement("tr",{key:a,id:a},l.a.createElement("td",{key:"nr"},a+1),l.a.createElement("td",{key:"img"},l.a.createElement("img",{className:"img",src:e.img,alt:"img"})),l.a.createElement("td",{key:"title"},l.a.createElement("a",{href:"/details/"+e.id},e.title)),l.a.createElement("td",{className:"align-items-center",key:"amount"},l.a.createElement("input",{style:{padding:0,paddingRight:".5em",margin:"0 .3em",textAlignLast:"center"},type:"number",id:"",min:0,max:20,value:e.amount,readOnly:!0})),l.a.createElement("td",{key:"price",className:"price"},e.price),l.a.createElement("td",{className:"bin"},l.a.createElement(W,{i:a,txt:"Jest",name:"item_"+a,checked:t[a],action:o}))))),l.a.createElement("tr",{className:"table-secondary"},l.a.createElement("td",{colSpan:"6",style:{textAlign:"end"}})))),l.a.createElement("span",{className:"mw",style:{display:"grid",justifyItems:"end",gap:".7em"}},l.a.createElement("span",{className:"price",style:{fontSize:"x-large",marginRight:".5em"}},(Math.round(100*i)/100).toFixed(2)),l.a.createElement(F,{txt:"Powiadom odbiorc\u0119",disabled:!(c&&!m),onClick:()=>{s(!0)}}),l.a.createElement(P,{txt:"Wydaj zam\xf3wienie",disabled:!(c&&m)})));var d}a(21);function pe(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"notFound"},l.a.createElement("span",null,"Co\u015b posz\u0142o",l.a.createElement("br",null),"nie tak...")))}const be=()=>l.a.createElement(w,null,l.a.createElement(f,null,l.a.createElement(m.e,null,l.a.createElement(m.c,{element:l.a.createElement(A,null),path:b.ROOT},l.a.createElement(m.c,{index:!0,element:l.a.createElement(Z,null)}),l.a.createElement(m.c,{path:E.ROOT},l.a.createElement(m.c,{element:l.a.createElement(re,null),index:!0}),l.a.createElement(m.c,{element:l.a.createElement(Y,null),path:E.DETAILS})),l.a.createElement(m.c,{path:b.BASKET,element:l.a.createElement(V,null)}),l.a.createElement(m.c,{path:b.SUBMIT_ORDER,element:l.a.createElement($,null)}),l.a.createElement(m.c,{path:"login",element:l.a.createElement(U,null)}),l.a.createElement(m.c,{path:"logout",element:l.a.createElement(G,null)}),l.a.createElement(m.c,{path:"*",element:l.a.createElement(pe,null)})),l.a.createElement(m.c,{element:l.a.createElement(I,null),path:y.ROOT},l.a.createElement(m.c,{element:l.a.createElement(L,null),index:!0,path:y.DASHBOARD}),l.a.createElement(m.c,{path:E.ROOT},l.a.createElement(m.c,{index:!0,element:l.a.createElement(re,{seller:!0})}),l.a.createElement(m.c,{path:E.DETAILS,element:l.a.createElement(Y,{seller:!0})})),l.a.createElement(m.c,{path:y.ORDERS.MAIN},l.a.createElement(m.c,{index:!0,element:l.a.createElement(le,null)}),l.a.createElement(m.c,{path:y.ORDERS.CREATE,element:l.a.createElement(te,null)}),l.a.createElement(m.c,{path:y.ORDERS.DETAILS,element:l.a.createElement(ue,null)}))))));r.a.createRoot(document.getElementById("container")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s.a,null,l.a.createElement(be,null)))),i()}],[[10,1,2]]]);
//# sourceMappingURL=main.becb07c9.chunk.js.map