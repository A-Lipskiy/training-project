(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{269:function(e,t,n){},281:function(e,t){},282:function(e,t){},290:function(e,t){},296:function(e,t,n){},298:function(e,t,n){"use strict";n.r(t);var c=n(13),r=n.n(c),a=n(224),s=n.n(a),o=(n(269),n(69)),i=n(6),l=n(37),u=n(104),b=n(15);function f(e){var t=e.x,n=e.y;return Object(b.jsx)("div",{className:"ball",style:{top:"".concat(n,"%"),left:"".concat(t,"%")}})}var p=n(9),j=n.n(p),d=n(12);function m(){return(m=Object(d.a)(j.a.mark((function e(t,n){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,function(e){return"object"===typeof e&&null!==e&&"name"in e&&"height"in e&&"weight"in e&&"base_experience"in e}(r)&&n({name:r.name,height:r.height,weight:r.weight,base_experience:r.base_experience,sprites:r.sprites}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var v=function(e){var t=Object(c.useState)(!0),n=Object(i.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(),o=Object(i.a)(s,2),l=o[0],u=o[1];return Object(c.useEffect)((function(){var t=!1;return e&&(a(!0),function(e,t){m.apply(this,arguments)}(e,(function(e){t||(u(e),a(!1))}))),function(){t=!0}}),[e]),{isLoading:r,pokemon:l}},O=n(150);function h(e){var t=e.y,n=e.pokemonName,c=e.playerCardType,r=v(n),a=r.isLoading,s=r.pokemon;return a||!s?Object(b.jsx)("div",{className:"".concat(c,"-card"),style:{top:"".concat(t,"%")},children:Object(b.jsx)(O.BallSpinner,{size:70,color:"#6c5b7b"})}):Object(b.jsx)("div",{className:"".concat(c,"-card"),style:{top:"".concat(t,"%")},children:Object(b.jsx)("img",{className:"player-card-image",src:s.sprites.other.dream_world.front_default})})}function x(e){var t=e.firstPlayer,n=e.secondPlayer,c=e.firstPlayerScore,r=e.secondPlayerScore;return Object(b.jsxs)("div",{className:"score",children:[Object(b.jsxs)("span",{className:"first-player-score",children:[M(t),": ",c]}),Object(b.jsxs)("span",{className:"second-player-score",children:[M(n),": ",r]})]})}function y(e){var t=e.winner;return Object(b.jsx)("div",{className:"modal",children:Object(b.jsxs)("div",{className:"modal_content",children:[Object(b.jsx)("h1",{className:"modal-text",children:"Game over"}),Object(b.jsxs)("h2",{className:"modal-text",children:[M(t)," win"]})]})})}var k=n(157),g=(n(297),k.a.MoveNet),S={modelType:k.c.modelType.SINGLEPOSE_LIGHTNING};function w(e){var t=Math.floor((e-50)/300*(100-2*E));return t<E?E:t>100-E?100-E:t}function N(e){var t=e.onSetPlayer1Coord,n=e.onSetPlayer2Coord,r=Object(c.useState)(null),a=Object(i.a)(r,2),s=a[0],o=a[1],l=Object(c.useRef)(null),u=Object(c.useState)(null),f=Object(i.a)(u,2),p=f[0],m=f[1];return Object(c.useEffect)((function(){var e=l.current;if(s&&e){e.srcObject=s,e.play();var c=setInterval((function(){!function(e){r.apply(this,arguments)}(e)}),100);return function(){clearInterval(c)}}function r(){return(r=Object(d.a)(j.a.mark((function e(c){var r,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,p.estimatePoses(c,{maxPoses:1,flipHorizontal:!1});case 4:0!==(r=e.sent).length&&(a=r[0].keypoints[9].y,s=r[0].keypoints[10].y,t(w(a)),n(w(s)));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}),[p,t,n,s]),Object(c.useEffect)((function(){return function(){return null===p||void 0===p?void 0:p.dispose()}}),[p]),Object(c.useEffect)((function(){return function(){return null===s||void 0===s?void 0:s.getTracks().forEach((function(e){return e.stop()}))}}),[s]),Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=o,e.next=4,navigator.mediaDevices.getUserMedia({video:!0});case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.log(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function t(){return(t=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=m,e.next=4,k.b(g,S);case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.log(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[]),Object(b.jsx)("video",{muted:!0,autoPlay:!0,className:"camera",ref:l})}var P={ballX:50,ballY:50,ballStepX:_([-2,2]),ballStepY:_([-1,1])},C={firstPlayerScore:0,secondPlayerScore:0},E=12,I=E+4;function L(e){return e-E>0?e-2:e}function T(e){return e+E<100?e+2:e}function _(e){return e[Math.floor(Math.random()*e.length)]}function M(e){return e.charAt(0).toUpperCase()+e.slice(1)}function X(e){var t=e.pokemonOne,n=e.pokemonTwo,r=Object(c.useState)(P),a=Object(i.a)(r,2),s=a[0],p=a[1],j=Object(c.useState)(C),d=Object(i.a)(j,2),m=d[0],v=d[1],O=Object(c.useState)(50),k=Object(i.a)(O,2),g=k[0],S=k[1],w=Object(c.useState)(50),E=Object(i.a)(w,2),M=E[0],X=E[1],Y=Object(c.useState)(!1),G=Object(i.a)(Y,2),B=G[0],F=G[1],H=Object(c.useState)(),z=Object(i.a)(H,2),A=z[0],W=z[1];return Object(c.useEffect)((function(){var e=null,t=null,n=function(n){n&&!["w","W","s","S","\u0426","\u0446","\u0456","\u0406","\u042b","\u044b"].includes(n.key)||(e&&clearInterval(e),e=null),n&&!["o","O","l","L","\u0449","\u0429","\u0434","\u0414"].includes(n.key)||(t&&clearInterval(t),t=null)},c=function(n){["w","W","\u0426","\u0446"].includes(n.key)?e=e||setInterval((function(){S(L)}),15):["s","S","\u042b","\u044b","\u0406","\u0456"].includes(n.key)?e=e||setInterval((function(){S(T)}),15):["O","o","\u0429","\u0449"].includes(n.key)?t=t||setInterval((function(){X(L)}),15):["L","l","\u0414","\u0434"].includes(n.key)&&(t=t||setInterval((function(){X(T)}),15))},r=function(e){" "===e.key&&(F(!0),W(null))};return B?(document.addEventListener("keydown",c),document.addEventListener("keyup",n),function(){document.removeEventListener("keydown",c),document.removeEventListener("keyup",n),n()}):(document.addEventListener("keydown",r),function(){return document.removeEventListener("keydown",r)})}),[B]),Object(c.useEffect)((function(){if(B){var e=setInterval((function(){p((function(e){var t=e.ballX,n=e.ballY,c=e.ballStepX,r=e.ballStepY;return{ballX:t+c,ballY:n+r,ballStepX:t+c>=100||t+c<=0?-c:c,ballStepY:n+r>=100||n+r<=0?-r:r}}))}),40);return function(){clearInterval(e)}}}),[B]),Object(c.useEffect)((function(){var e=s.ballX,t=s.ballY;0===e?(t+I<=g||t-I>=g)&&v((function(e){return Object(o.a)(Object(o.a)({},e),{},{secondPlayerScore:e.secondPlayerScore+1})})):100===e&&(t+I<=M||t-I>=M)&&v((function(e){return Object(o.a)(Object(o.a)({},e),{},{firstPlayerScore:e.firstPlayerScore+1})}))}),[s,g,M]),Object(c.useEffect)((function(){5!==m.firstPlayerScore&&5!==m.secondPlayerScore||(v(C),S(50),X(50),W(m.firstPlayerScore>m.secondPlayerScore?t:n),p(Object(o.a)(Object(o.a)({},P),{},{ballStepX:_([-2,2]),ballStepY:_([-1,1])})),F(!1))}),[m,t,n]),""==t||""==n?Object(b.jsx)(l.a,{to:"/"}):Object(b.jsxs)("div",{className:"page-wrapper",children:[B&&Object(b.jsx)(N,{onSetPlayer1Coord:S,onSetPlayer2Coord:X}),A&&Object(b.jsx)(y,{winner:A}),Object(b.jsx)(u.b,{to:"/",children:Object(b.jsx)("button",{className:"button-close-game",children:"Close game"})}),Object(b.jsx)("h1",{className:"header-text",children:"Pokemons ping-pong"}),Object(b.jsx)(x,{firstPlayer:t,secondPlayer:n,firstPlayerScore:m.firstPlayerScore,secondPlayerScore:m.secondPlayerScore}),Object(b.jsxs)("div",{className:"ui-field",children:[Object(b.jsx)("div",{className:"dotted-line"}),Object(b.jsx)("div",{className:"game-field",children:Object(b.jsx)(f,{x:s.ballX,y:s.ballY})}),Object(b.jsx)(h,{y:g,pokemonName:t,playerCardType:"left"}),Object(b.jsx)(h,{y:M,pokemonName:n,playerCardType:"right"})]}),Object(b.jsx)("button",{className:"button-start-game ".concat(B?"":"button-visible"),onClick:function(){F(!0),W(null)},children:"Start Game"})]})}n(296);var Y=n(14);function G(e){var t=e.name,n=e.onClick,c=e.isSelected,r=v(t),a=r.isLoading,s=r.pokemon;return a||!s?Object(b.jsx)("div",{className:"card-wrapper",children:Object(b.jsx)(O.BallSpinner,{size:200,color:"#f8b195"})}):Object(b.jsxs)("div",{className:"card-wrapper ".concat(c?"selected":""),onClick:n,children:[Object(b.jsxs)("span",{className:"block-span",children:["Name: ",s.name]}),Object(b.jsxs)("span",{className:"block-span",children:["Height: ",s.height]}),Object(b.jsxs)("span",{className:"block-span",children:["Weight: ",s.weight]}),Object(b.jsxs)("span",{className:"block-span",children:["Base experience: ",s.base_experience]}),Object(b.jsx)("img",{className:"pokemon-image",src:s.sprites.other.dream_world.front_default})]})}var B=n(33);function F(e){return H.apply(this,arguments)}function H(){return(H=Object(d.a)(j.a.mark((function e(t){var n,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon?offset=".concat(t*A,"&limit=").concat(A));case 3:return n=e.sent,e.next=6,n.json();case 6:if(c=e.sent,!function(e){return"object"===typeof e&&null!==e&&"count"in e&&"results"in e}(c)){e.next=11;break}return r={count:c.count,results:c.results},e.abrupt("return",r);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:throw new Error("Can't fetch page ".concat(t));case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}var z=function(){var e=Object(d.a)(j.a.mark((function e(t,n,r,a,s){var o,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(c.useEffect)((function(){var e=new Array(r-a.length).fill(a.length).map((function(e,t){return e+t}));s(e)}),[r,a,s]),e.prev=1,o=t.map(function(){var e=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(t);case 2:return n=e.sent,e.abrupt("return",{pageNumber:t,pokemons:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=5,Promise.all(o);case 5:if(i=e.sent,0!==t.length){e.next=8;break}return e.abrupt("return");case 8:n((function(e){var t,n=Object(Y.a)(e),c=Object(B.a)(i);try{for(c.s();!(t=c.n()).done;){var r=t.value,a=r.pokemons,s=r.pageNumber;n[s]?n[s]=a:n.push(a)}}catch(o){c.e(o)}finally{c.f()}return n})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log({e:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n,c,r,a){return e.apply(this,arguments)}}(),A=10,W=Math.floor((Math.round(window.innerHeight/300)+1)/A)+1;function D(e){var t,n=e.selectedPokemons,r=e.onChange,a=Object(c.useState)(W),s=Object(i.a)(a,2),o=s[0],l=s[1],u=Object(c.useState)([]),f=Object(i.a)(u,2),p=f[0],j=f[1],d=Object(c.useState)([]),m=Object(i.a)(d,2),v=m[0],O=m[1],h=Object(c.useRef)(null);!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=Object(c.useState)(),a=Object(i.a)(r,2),s=a[0],o=a[1];Object(c.useEffect)((function(){var t=null===e||void 0===e?void 0:e.current;if(t){var c=new IntersectionObserver((function(e){var t=Object(i.a)(e,1)[0];return o(t)}),{threshold:n});return c.observe(t),function(){return c.disconnect()}}}),[e,n]),Object(c.useEffect)((function(){(null===s||void 0===s?void 0:s.isIntersecting)&&t()}),[null===s||void 0===s?void 0:s.isIntersecting,t])}(h,Object(c.useCallback)((function(){l((function(e){return e+1}))}),[]),0),z(p,O,o,v,j);var x=v.flatMap((function(e){return e.results})).map((function(e){var t=e.name;return Object(b.jsx)(G,{name:t,isSelected:n.includes(t),onClick:function(){return function(e){var t=n.indexOf(e),c=Object(Y.a)(n);t>-1?c.splice(t,1):(c.push(e),c.length>2&&c.shift()),r(c)}(t)}},t)}));return v.length*A<(null===(t=v[0])||void 0===t?void 0:t.count)||void 0===v[0]?Object(b.jsxs)("div",{className:"pokemon-list-wrapper",children:[x,Object(b.jsx)("div",{ref:h,className:"bottom-ref-element"})]}):Object(b.jsx)("div",{className:"pokemon-list-wrapper",children:x})}function J(e){var t=e.selectedPokemons,n=e.onChangePokemons;return Object(b.jsxs)("div",{className:"page-wrapper",children:[Object(b.jsx)("h1",{className:"header-text",children:"Choose two pokemons"}),Object(b.jsx)(D,{selectedPokemons:t,onChange:n}),Object(b.jsx)(u.b,{to:"/game/".concat(t[0],"/").concat(t[1]),children:Object(b.jsx)("button",{className:"button-start-game ".concat(2!==t.length||t.includes("")?"":"button-visible"),children:"Start Game"})})]})}function R(){var e=Object(c.useState)(["",""]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(u.a,{children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{exact:!0,path:"/game/:pokemonOne/:pokemonTwo",render:function(e){var t=e.match;return Object(b.jsx)(X,Object(o.a)({},t.params))}}),Object(b.jsx)(l.b,{path:"/",render:function(){return Object(b.jsx)(J,{selectedPokemons:n,onChangePokemons:r})}})]})})})}var U=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,r,a,s,o,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t&&t instanceof Function)){e.next=14;break}return e.next=3,n.e(3).then(n.bind(null,300));case 3:c=e.sent,r=c.getCLS,a=c.getFID,s=c.getFCP,o=c.getLCP,i=c.getTTFB,r(t),a(t),s(t),o(t),i(t);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(R,{})}),document.getElementById("root")),U()}},[[298,1,2]]]);
//# sourceMappingURL=main.57779955.chunk.js.map