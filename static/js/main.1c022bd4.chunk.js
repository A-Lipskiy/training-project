(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(25),s=n.n(a),o=(n(37),n(10)),i=n(4),l=n(3),u=n(15),b=n(1);function j(e){var t=e.x,n=e.y;return Object(b.jsx)("div",{className:"ball",style:{top:"".concat(n,"%"),left:"".concat(t,"%")}})}var p=n(7),d=n.n(p),f=n(11);function m(){return(m=Object(f.a)(d.a.mark((function e(t,n){var c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,function(e){return"object"===typeof e&&null!==e&&"name"in e&&"height"in e&&"weight"in e&&"base_experience"in e}(r)&&n({name:r.name,height:r.height,weight:r.weight,base_experience:r.base_experience,sprites:r.sprites}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var O=function(e){var t=Object(c.useState)(!0),n=Object(i.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(),o=Object(i.a)(s,2),l=o[0],u=o[1];return Object(c.useEffect)((function(){var t=!1;return e&&(a(!0),function(e,t){m.apply(this,arguments)}(e,(function(e){t||(u(e),a(!1))}))),function(){t=!0}}),[e]),{isLoading:r,pokemon:l}},h=n(18);function v(e){var t=e.y,n=e.pokemonName,c=e.playerCardType,r=O(n),a=r.isLoading,s=r.pokemon;return a||!s?Object(b.jsx)("div",{className:"".concat(c,"-card"),style:{top:"".concat(t,"%")},children:Object(b.jsx)(h.BallSpinner,{size:70,color:"#6c5b7b"})}):Object(b.jsx)("div",{className:"".concat(c,"-card"),style:{top:"".concat(t,"%")},children:Object(b.jsx)("img",{className:"player-card-image",src:s.sprites.other.dream_world.front_default})})}function x(e){var t=e.firstPlayer,n=e.secondPlayer,c=e.firstPlayerScore,r=e.secondPlayerScore;return Object(b.jsxs)("div",{className:"score",children:[Object(b.jsxs)("span",{className:"first-player-score",children:[P(t),": ",c]}),Object(b.jsxs)("span",{className:"second-player-score",children:[P(n),": ",r]})]})}function y(e){var t=e.winner;return Object(b.jsx)("div",{className:"modal",children:Object(b.jsxs)("div",{className:"modal_content",children:[Object(b.jsx)("h1",{className:"modal-text",children:"Game over"}),Object(b.jsxs)("h2",{className:"modal-text",children:[P(t)," win"]})]})})}var k={ballX:50,ballY:50,ballStepX:N([-2,2]),ballStepY:N([-1,1])},g={firstPlayerScore:0,secondPlayerScore:0};function S(e){return e>0?e-5:e}function w(e){return e<100?e+5:e}function N(e){return e[Math.floor(Math.random()*e.length)]}function P(e){return e.charAt(0).toUpperCase()+e.slice(1)}function C(e){var t=e.pokemonOne,n=e.pokemonTwo,r=Object(c.useState)(k),a=Object(i.a)(r,2),s=a[0],p=a[1],d=Object(c.useState)(g),f=Object(i.a)(d,2),m=f[0],O=f[1],h=Object(c.useState)(50),P=Object(i.a)(h,2),C=P[0],E=P[1],I=Object(c.useState)(50),L=Object(i.a)(I,2),X=L[0],Y=L[1],_=Object(c.useState)(!1),T=Object(i.a)(_,2),M=T[0],B=T[1],F=Object(c.useState)(),A=Object(i.a)(F,2),G=A[0],W=A[1];return Object(c.useEffect)((function(){var e=null,t=null,n=function(n){n&&!["w","W","s","S","\u0426","\u0446","\u0456","\u0406","\u042b","\u044b"].includes(n.key)||(e&&clearInterval(e),e=null),n&&!["o","O","l","L","\u0449","\u0429","\u0434","\u0414"].includes(n.key)||(t&&clearInterval(t),t=null)},c=function(n){["w","W","\u0426","\u0446"].includes(n.key)?e=e||setInterval((function(){E(S)}),20):["s","S","\u042b","\u044b","\u0406","\u0456"].includes(n.key)?e=e||setInterval((function(){E(w)}),20):["O","o","\u0429","\u0449"].includes(n.key)?t=t||setInterval((function(){Y(S)}),20):["L","l","\u0414","\u0434"].includes(n.key)&&(t=t||setInterval((function(){Y(w)}),20))},r=function(e){" "===e.key&&(B(!0),W(null))};return M?M?(document.addEventListener("keydown",c),document.addEventListener("keyup",n),function(){document.removeEventListener("keydown",c),document.removeEventListener("keyup",n),n()}):void 0:(document.addEventListener("keydown",r),function(){return document.removeEventListener("keydown",r)})}),[M]),Object(c.useEffect)((function(){if(M){var e=setInterval((function(){p((function(e){var t=e.ballX,n=e.ballY,c=e.ballStepX,r=e.ballStepY;return{ballX:t+c,ballY:n+r,ballStepX:t+c>=100||t+c<=0?-c:c,ballStepY:n+r>=100||n+r<=0?-r:r}}))}),30);return function(){clearInterval(e)}}}),[M]),Object(c.useEffect)((function(){var e=s.ballX,t=s.ballY;0===e?(t>=50&&(t+22<=C||t-11>=C)||t<=50&&(t+11<=C||t-22>=C))&&(O((function(e){return Object(o.a)(Object(o.a)({},e),{},{secondPlayerScore:e.secondPlayerScore+1})})),B(!1)):100===e&&(t>=50&&(t+22<=X||t-11>=X)||t<=50&&(t+11<=X||t-22>=X))&&(O((function(e){return Object(o.a)(Object(o.a)({},e),{},{firstPlayerScore:e.firstPlayerScore+1})})),B(!1))}),[s,C,X]),Object(c.useEffect)((function(){5!==m.firstPlayerScore&&5!==m.secondPlayerScore||(p(k),O(g),E(50),Y(50),W(m.firstPlayerScore>m.secondPlayerScore?t:n),p((function(e){return Object(o.a)(Object(o.a)({},e),{},{ballStepX:N([-2,2]),ballStepY:N([-1,1])})})))}),[m,t,n]),""==t||""==n?Object(b.jsx)(l.a,{to:"/"}):Object(b.jsxs)("div",{className:"page-wrapper",children:[G&&Object(b.jsx)(y,{winner:G}),Object(b.jsx)(u.b,{to:"/",children:Object(b.jsx)("button",{className:"button-close-game",children:"Close game"})}),Object(b.jsx)("h1",{className:"header-text",children:"Pokemons ping-pong"}),Object(b.jsx)(x,{firstPlayer:t,secondPlayer:n,firstPlayerScore:m.firstPlayerScore,secondPlayerScore:m.secondPlayerScore}),Object(b.jsxs)("div",{className:"ui-field",children:[Object(b.jsx)("div",{className:"dotted-line"}),Object(b.jsx)("div",{className:"game-field",children:Object(b.jsx)(j,{x:s.ballX,y:s.ballY})}),Object(b.jsxs)("div",{className:"cards-wrapper",children:[Object(b.jsx)(v,{y:C,pokemonName:t,playerCardType:"left"}),Object(b.jsx)(v,{y:X,pokemonName:n,playerCardType:"right"})]})]}),Object(b.jsx)("button",{className:"button-start-game ".concat(M?"":"button-visible"),onClick:function(){B(!0),W(null)},children:"Start Game"})]})}n(52);var E=n(19);function I(e){var t=e.name,n=e.onClick,c=e.isSelected,r=O(t),a=r.isLoading,s=r.pokemon;return a||!s?Object(b.jsx)("div",{className:"card-wrapper",children:Object(b.jsx)(h.BallSpinner,{size:200,color:"#f8b195"})}):Object(b.jsxs)("div",{className:"card-wrapper ".concat(c?"selected":""),onClick:n,children:[Object(b.jsxs)("span",{className:"block-span",children:["Name: ",s.name]}),Object(b.jsxs)("span",{className:"block-span",children:["Height: ",s.height]}),Object(b.jsxs)("span",{className:"block-span",children:["Weight: ",s.weight]}),Object(b.jsxs)("span",{className:"block-span",children:["Base experience: ",s.base_experience]}),Object(b.jsx)("img",{className:"pokemon-image",src:s.sprites.other.dream_world.front_default})]})}var L=n(30);function X(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(f.a)(d.a.mark((function e(t){var n,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon?offset=".concat(t*T,"&limit=").concat(T));case 3:return n=e.sent,e.next=6,n.json();case 6:if(c=e.sent,!function(e){return"object"===typeof e&&null!==e&&"count"in e&&"results"in e}(c)){e.next=11;break}return r={count:c.count,results:c.results},e.abrupt("return",r);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:throw new Error("Can't fetch page ".concat(t));case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}var _=function(){var e=Object(f.a)(d.a.mark((function e(t,n,r,a,s){var o,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(c.useEffect)((function(){var e=new Array(r-a.length).fill(a.length).map((function(e,t){return e+t}));s(e)}),[r,a,s]),e.prev=1,o=t.map(function(){var e=Object(f.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X(t);case 2:return n=e.sent,e.abrupt("return",{pageNumber:t,pokemons:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=5,Promise.all(o);case 5:if(i=e.sent,0!==t.length){e.next=8;break}return e.abrupt("return");case 8:n((function(e){var t,n=Object(E.a)(e),c=Object(L.a)(i);try{for(c.s();!(t=c.n()).done;){var r=t.value,a=r.pokemons,s=r.pageNumber;n[s]?n[s]=a:n.push(a)}}catch(o){c.e(o)}finally{c.f()}return n})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log({e:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n,c,r,a){return e.apply(this,arguments)}}(),T=10,M=Math.floor((Math.round(window.innerHeight/300)+1)/T)+1;function B(e){var t,n=e.selectedPokemons,r=e.onChange,a=Object(c.useState)(M),s=Object(i.a)(a,2),o=s[0],l=s[1],u=Object(c.useState)([]),j=Object(i.a)(u,2),p=j[0],d=j[1],f=Object(c.useState)([]),m=Object(i.a)(f,2),O=m[0],h=m[1],v=Object(c.useRef)(null);!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=Object(c.useState)(),a=Object(i.a)(r,2),s=a[0],o=a[1];Object(c.useEffect)((function(){var t=null===e||void 0===e?void 0:e.current;if(t){var c=new IntersectionObserver((function(e){var t=Object(i.a)(e,1)[0];return o(t)}),{threshold:n});return c.observe(t),function(){return c.disconnect()}}}),[e,n]),Object(c.useEffect)((function(){(null===s||void 0===s?void 0:s.isIntersecting)&&t()}),[null===s||void 0===s?void 0:s.isIntersecting,t])}(v,Object(c.useCallback)((function(){l((function(e){return e+1}))}),[]),0),_(p,h,o,O,d);var x=O.flatMap((function(e){return e.results})).map((function(e){var t=e.name;return Object(b.jsx)(I,{name:t,isSelected:n.includes(t),onClick:function(){return function(e){var t=n.indexOf(e),c=Object(E.a)(n);t>-1?c.splice(t,1):(c.push(e),c.length>2&&c.shift()),r(c)}(t)}},t)}));return O.length*T<(null===(t=O[0])||void 0===t?void 0:t.count)||void 0===O[0]?Object(b.jsxs)("div",{className:"pokemon-list-wrapper",children:[x,Object(b.jsx)("div",{ref:v,className:"bottom-ref-element"})]}):Object(b.jsx)("div",{className:"pokemon-list-wrapper",children:x})}function F(e){var t=e.selectedPokemons,n=e.onChangePokemons;return Object(b.jsxs)("div",{className:"page-wrapper",children:[Object(b.jsx)("h1",{className:"header-text",children:"Choose two pokemons"}),Object(b.jsx)(B,{selectedPokemons:t,onChange:n}),Object(b.jsx)(u.b,{to:"/game/".concat(t[0],"/").concat(t[1]),children:Object(b.jsx)("button",{className:"button-start-game ".concat(2!==t.length||t.includes("")?"":"button-visible"),children:"Start Game"})})]})}function A(){var e=Object(c.useState)(["",""]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(u.a,{children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{exact:!0,path:"/game/:pokemonOne/:pokemonTwo",render:function(e){var t=e.match;return Object(b.jsx)(C,Object(o.a)({},t.params))}}),Object(b.jsx)(l.b,{path:"/",render:function(){return Object(b.jsx)(F,{selectedPokemons:n,onChangePokemons:r})}})]})})})}var G=function(){var e=Object(f.a)(d.a.mark((function e(t){var c,r,a,s,o,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t&&t instanceof Function)){e.next=14;break}return e.next=3,n.e(3).then(n.bind(null,54));case 3:c=e.sent,r=c.getCLS,a=c.getFID,s=c.getFCP,o=c.getLCP,i=c.getTTFB,r(t),a(t),s(t),o(t),i(t);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(A,{})}),document.getElementById("root")),G()}},[[53,1,2]]]);
//# sourceMappingURL=main.1c022bd4.chunk.js.map