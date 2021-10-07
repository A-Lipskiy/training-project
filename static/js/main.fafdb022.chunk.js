(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{300:function(e,t,n){},312:function(e,t){},313:function(e,t){},321:function(e,t){},327:function(e,t,n){},329:function(e,t,n){"use strict";n.r(t);var r=n(13),c=n.n(r),a=n(164),s=n.n(a),o=(n(300),n(60)),i=n(6),l=n(41),u=n(113),b=n(14);function d(e){var t=e.x,n=e.y;return Object(b.jsx)("div",{className:"ball",style:{top:"".concat(n,"%"),left:"".concat(t,"%")}})}var j=n(9),p=n.n(j),f=n(12),m=n(94),h=function(e){return"object"===typeof e&&null!==e&&"name"in e&&"height"in e&&"weight"in e&&"base_experience"in e};function O(){return(O=Object(f.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Fetching error");case 5:if(""!==n.text.toString()){e.next=7;break}throw new Error("Response is empty");case 7:return e.next=9,n.json();case 9:if(r=e.sent,!h(r)){e.next=12;break}return e.abrupt("return",{name:r.name,height:r.height,weight:r.weight,base_experience:r.base_experience,sprites:r.sprites});case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(e){return Object(m.useQuery)(["pokemon",e],(function(){if(!e)throw new Error("No pokemon name");return function(e){return O.apply(this,arguments)}(e)}),{enabled:!!e})},x=n(167);function y(e){var t=e.y,n=e.pokemonName,r=e.playerCardType,c=v(n),a=c.isLoading,s=c.data;return a||!s?Object(b.jsx)("div",{className:"".concat(r,"-card"),style:{top:"".concat(t,"%")},children:Object(b.jsx)(x.BallSpinner,{size:70,color:"#6c5b7b"})}):Object(b.jsx)("div",{className:"".concat(r,"-card"),style:{top:"".concat(t,"%")},children:Object(b.jsx)("img",{className:"player-card-image",src:s.sprites.other.dream_world.front_default})})}function k(e){var t=e.firstPlayer,n=e.secondPlayer,r=e.firstPlayerScore,c=e.secondPlayerScore;return Object(b.jsxs)("div",{className:"score",children:[Object(b.jsxs)("span",{className:"first-player-score",children:[M(t),": ",r]}),Object(b.jsxs)("span",{className:"second-player-score",children:[M(n),": ",c]})]})}function g(e){var t=e.winner;return""===t?Object(b.jsx)("div",{className:"modal",children:Object(b.jsxs)("div",{className:"modal_content",children:[Object(b.jsx)("h3",{className:"modal-headers",children:'Press "W" "S" buttons to move the left pokemon'}),Object(b.jsx)("h3",{className:"modal-headers",children:'And "O" "L" buttons to move the right pokemon'}),Object(b.jsx)("h3",{className:"modal-headers",children:"Or move your hands to control both pokemons :-)"})]})}):Object(b.jsx)("div",{className:"modal",children:Object(b.jsxs)("div",{className:"modal_content",children:[Object(b.jsx)("h1",{className:"modal-headers",children:"Game over"}),Object(b.jsxs)("h2",{className:"modal-headers",children:[M(t)," win"]}),Object(b.jsx)("p",{children:'Press "W" "S" buttons to move the left pokemon'}),Object(b.jsx)("p",{children:'And "O" "L" buttons to move the left pokemon'}),Object(b.jsx)("p",{children:"Or move your hands to move both pokemons :-)"})]})})}var S=n(175),N=(n(328),S.a.MoveNet),w={modelType:S.c.modelType.SINGLEPOSE_LIGHTNING};function P(e){var t=Math.floor((e-50)/300*(100-2*T));return t<T?T:t>100-T?100-T:t}function E(e){var t=e.onSetPlayer1Coord,n=e.onSetPlayer2Coord,c=Object(r.useState)(null),a=Object(i.a)(c,2),s=a[0],o=a[1],l=Object(r.useRef)(null),u=Object(r.useState)(null),d=Object(i.a)(u,2),j=d[0],m=d[1],h=Object(r.useState)(!0),O=Object(i.a)(h,2),v=O[0],x=O[1];return Object(r.useEffect)((function(){var e=l.current;if(s&&e){e.srcObject=s,e.play();var r=setInterval((function(){!function(e){c.apply(this,arguments)}(e)}),100);return function(){clearInterval(r)}}function c(){return(c=Object(f.a)(p.a.mark((function e(r){var c,a,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,j.estimatePoses(r,{maxPoses:1,flipHorizontal:!1});case 4:0!==(c=e.sent).length&&(a=c[0].keypoints[9].y,s=c[0].keypoints[10].y,t(P(a)),n(P(s)));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}),[j,t,n,s]),Object(r.useEffect)((function(){return function(){return null===j||void 0===j?void 0:j.dispose()}}),[j]),Object(r.useEffect)((function(){return function(){return null===s||void 0===s?void 0:s.getTracks().forEach((function(e){return e.stop()}))}}),[s]),Object(r.useEffect)((function(){function e(){return(e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=o,e.next=4,navigator.mediaDevices.getUserMedia({video:!0});case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.log(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function t(){return(t=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=m,e.next=4,S.b(N,w);case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.log(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[]),Object(b.jsxs)("div",{children:[Object(b.jsxs)("label",{className:"label-camera",children:["Show camera:",Object(b.jsx)("input",{type:"checkbox",checked:v,onChange:function(){return x(!v)}})]}),Object(b.jsx)("video",{muted:!0,autoPlay:!0,className:"camera ".concat(v?"":"display-none"),ref:l})]})}var C={ballX:50,ballY:50,ballStepX:F([-2,2]),ballStepY:F([-1,1])},I=50,L={firstPlayerScore:0,secondPlayerScore:0},T=12,_=T+4;function X(e){return e-T>0?e-2:e}function Y(e){return e+T<100?e+2:e}function F(e){return e[Math.floor(Math.random()*e.length)]}function M(e){return e.charAt(0).toUpperCase()+e.slice(1)}function G(e){var t=e.pokemonOne,n=e.pokemonTwo,c=Object(r.useState)(C),a=Object(i.a)(c,2),s=a[0],j=a[1],p=Object(r.useState)(L),f=Object(i.a)(p,2),m=f[0],h=f[1],O=Object(r.useState)(I),v=Object(i.a)(O,2),x=v[0],S=v[1],N=Object(r.useState)(I),w=Object(i.a)(N,2),P=w[0],T=w[1],M=Object(r.useState)(!1),G=Object(i.a)(M,2),B=G[0],W=G[1],A=Object(r.useState)(!1),Q=Object(i.a)(A,2),R=Q[0],z=Q[1],D=Object(r.useState)(),H=Object(i.a)(D,2),J=H[0],U=H[1],q=Object(r.useState)(!0),K=Object(i.a)(q,2),V=K[0],Z=K[1];return Object(r.useEffect)((function(){var e=null,t=null,n=function(n){n&&!["w","W","s","S","\u0426","\u0446","\u0456","\u0406","\u042b","\u044b"].includes(n.key)||(e&&clearInterval(e),e=null),n&&!["o","O","l","L","\u0449","\u0429","\u0434","\u0414"].includes(n.key)||(t&&clearInterval(t),t=null)},r=function(n){["w","W","\u0426","\u0446"].includes(n.key)?e=e||setInterval((function(){S(X)}),15):["s","S","\u042b","\u044b","\u0406","\u0456"].includes(n.key)?e=e||setInterval((function(){S(Y)}),15):["O","o","\u0429","\u0449"].includes(n.key)?t=t||setInterval((function(){T(X)}),15):["L","l","\u0414","\u0434"].includes(n.key)&&(t=t||setInterval((function(){T(Y)}),15))},c=function(e){" "===e.key&&(W(!0),z(!1),U(null))};return V?(document.addEventListener("keydown",c),function(){document.removeEventListener("keydown",c),n()}):(S(I),T(I),document.addEventListener("keydown",r),document.addEventListener("keyup",n),function(){document.removeEventListener("keydown",r),document.removeEventListener("keyup",n)})}),[B,V]),Object(r.useEffect)((function(){if(B&&!R){var e=setInterval((function(){j((function(e){var t=e.ballX,n=e.ballY,r=e.ballStepX,c=e.ballStepY;return{ballX:t+r,ballY:n+c,ballStepX:t+r>=100||t+r<=0?-r:r,ballStepY:n+c>=100||n+c<=0?-c:c}}))}),40);return function(){clearInterval(e)}}}),[R,B]),Object(r.useEffect)((function(){var e=s.ballX,t=s.ballY;0===e?(t+_<=x||t-_>=x)&&h((function(e){return Object(o.a)(Object(o.a)({},e),{},{secondPlayerScore:e.secondPlayerScore+1})})):100===e&&(t+_<=P||t-_>=P)&&h((function(e){return Object(o.a)(Object(o.a)({},e),{},{firstPlayerScore:e.firstPlayerScore+1})}))}),[s,x,P]),Object(r.useEffect)((function(){10===m.firstPlayerScore||10===m.secondPlayerScore?(h(L),S(I),T(I),U(m.firstPlayerScore>m.secondPlayerScore?t:n),j(Object(o.a)(Object(o.a)({},C),{},{ballStepX:F([-2,2]),ballStepY:F([-1,1])})),W(!1)):0===m.firstPlayerScore&&0===m.secondPlayerScore||(j(Object(o.a)(Object(o.a)({},C),{},{ballStepX:F([-2,2]),ballStepY:F([-1,1])})),z(!0),setTimeout((function(){return z(!1)}),1e3))}),[m,t,n]),""==t||""==n?Object(b.jsx)(l.a,{to:"/"}):Object(b.jsxs)("div",{className:"page-wrapper",children:[Object(b.jsxs)("label",{className:"label-enable-camera",children:["Enable camera:",Object(b.jsx)("input",{type:"checkbox",checked:V,onChange:function(){return Z(!V)}})]}),V&&Object(b.jsx)(E,{onSetPlayer1Coord:S,onSetPlayer2Coord:T}),!B&&Object(b.jsx)(g,{winner:J||""}),Object(b.jsx)(u.b,{to:"/",children:Object(b.jsx)("button",{className:"button-close-game",children:"Close game"})}),Object(b.jsx)("h1",{className:"header-text",children:"Pokemons ping-pong"}),Object(b.jsx)(k,{firstPlayer:t,secondPlayer:n,firstPlayerScore:m.firstPlayerScore,secondPlayerScore:m.secondPlayerScore}),Object(b.jsxs)("div",{className:"ui-field",children:[Object(b.jsx)("div",{className:"dotted-line"}),Object(b.jsx)("div",{className:"game-field",children:Object(b.jsx)(d,{x:s.ballX,y:s.ballY})}),Object(b.jsx)(y,{y:x,pokemonName:t,playerCardType:"left"}),Object(b.jsx)(y,{y:P,pokemonName:n,playerCardType:"right"})]}),Object(b.jsx)("button",{className:"button-start-game ".concat(B?"":"button-visible"),onClick:function(){W(!0),z(!1),U(null)},children:"Start Game"})]})}n(327);var B=n(16);function W(e){var t=e.name,n=e.onClick,r=e.isSelected,c=v(t),a=c.isLoading,s=c.data;return a||!s?Object(b.jsx)("div",{className:"card-wrapper",children:Object(b.jsx)(x.BallSpinner,{size:200,color:"#f8b195"})}):Object(b.jsxs)("div",{className:"card-wrapper ".concat(r?"selected":""),onClick:n,children:[Object(b.jsxs)("span",{className:"block-span",children:["Name: ",s.name]}),Object(b.jsxs)("span",{className:"block-span",children:["Height: ",s.height]}),Object(b.jsxs)("span",{className:"block-span",children:["Weight: ",s.weight]}),Object(b.jsxs)("span",{className:"block-span",children:["Base experience: ",s.base_experience]}),Object(b.jsx)("img",{className:"pokemon-image",src:s.sprites.other.dream_world.front_default})]})}var A=function(e){return"object"===typeof e&&null!==e&&"count"in e&&"results"in e};function Q(){return R.apply(this,arguments)}function R(){return(R=Object(f.a)(p.a.mark((function e(){var t,n,r,c=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon?offset=".concat(t*D,"&limit=").concat(D));case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("Fetching error");case 6:if(""!==n.text.toString()){e.next=8;break}throw new Error("Response is empty");case 8:return e.next=10,n.json();case 10:if(r=e.sent,!A(r)){e.next=13;break}return e.abrupt("return",{count:r.count,results:r.results,pageNumber:t});case 13:throw new Error("Fetched Invalid Data!");case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.pageParam,r=void 0===n?0:n,e.abrupt("return",Q(r));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=10;function H(e){var t=e.selectedPokemons,n=e.onChange,c=Object(r.useRef)(null),a=Object(m.useInfiniteQuery)(["pokemon-list"],z,{getNextPageParam:function(e){if((e.pageNumber+1)*D<e.count)return e.pageNumber+1}}),s=a.data,o=a.fetchNextPage,l=a.isFetchingNextPage,u=a.hasNextPage;!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;Object(r.useEffect)((function(){var r=null===e||void 0===e?void 0:e.current;if(r){var c=new IntersectionObserver((function(e){return Object(i.a)(e,1)[0].isIntersecting&&t()}),{threshold:n});return c.observe(r),function(){return c.disconnect()}}}),[e,n,t])}(c,(function(){return!l&&o()}),0);var d=null===s||void 0===s?void 0:s.pages.flatMap((function(e){return e.results})).map((function(e){var r=e.name;return Object(b.jsx)(W,{name:r,isSelected:t.includes(r),onClick:function(){return function(e){var r=t.indexOf(e),c=Object(B.a)(t);r>-1?c.splice(r,1):(c.push(e),c.length>2&&c.shift()),n(c)}(r)}},r)}));return u?Object(b.jsxs)("div",{className:"pokemon-list-wrapper",children:[d,Object(b.jsx)("div",{ref:c,className:"bottom-ref-element"})]}):Object(b.jsx)("div",{className:"pokemon-list-wrapper",children:d})}function J(e){var t=e.selectedPokemons,n=e.onChangePokemons;return Object(b.jsxs)("div",{className:"page-wrapper",children:[Object(b.jsx)("h1",{className:"header-text",children:"Choose two pokemons"}),Object(b.jsx)(H,{selectedPokemons:t,onChange:n}),Object(b.jsx)(u.b,{to:"/game/".concat(t[0],"/").concat(t[1]),children:Object(b.jsx)("button",{className:"button-start-game ".concat(2!==t.length||t.includes("")?"":"button-visible"),children:"Start Game"})})]})}var U=new m.QueryClient;function q(){var e=Object(r.useState)(["",""]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(b.jsx)(m.QueryClientProvider,{client:U,children:Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(u.a,{children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{exact:!0,path:"/game/:pokemonOne/:pokemonTwo",render:function(e){var t=e.match;return Object(b.jsx)(G,Object(o.a)({},t.params))}}),Object(b.jsx)(l.b,{path:"/",render:function(){return Object(b.jsx)(J,{selectedPokemons:n,onChangePokemons:c})}})]})})})})}var K=function(){var e=Object(f.a)(p.a.mark((function e(t){var r,c,a,s,o,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t&&t instanceof Function)){e.next=14;break}return e.next=3,n.e(3).then(n.bind(null,333));case 3:r=e.sent,c=r.getCLS,a=r.getFID,s=r.getFCP,o=r.getLCP,i=r.getTTFB,c(t),a(t),s(t),o(t),i(t);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(q,{})}),document.getElementById("root")),K()}},[[329,1,2]]]);
//# sourceMappingURL=main.fafdb022.chunk.js.map