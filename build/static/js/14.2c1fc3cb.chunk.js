(this.webpackJsonpautomaticdapp=this.webpackJsonpautomaticdapp||[]).push([[14],{1039:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n.n(c),r=n(79),s=n(18),i=n(7),o=n(0),l=n(72),d=n(46),j=n(6),m=n(388),b=n(1048),u=n(1049),x=n(403),p=n(392),h=n(1051),O=n(380),f=n(390),g=n(401),y=n(55),k=n(47),w=n(372),v=n(192),N=n(418),S=n(2),D=Object(j.a)(w.a)((function(e){var t,n=e.theme;return t={height:10,borderRadius:5},Object(i.a)(t,"&.".concat(v.a.colorPrimary),{backgroundColor:n.palette.grey["light"===n.palette.mode?200:800]}),Object(i.a)(t,"& .".concat(v.a.bar),{borderRadius:5,backgroundColor:"light"===n.palette.mode?"#1a90ff":"#308fe8"}),t}));t.default=Object(l.b)((function(e){return{statistics:e.statistics,walletAddress:e.walletAddress}}))((function(e){var t=e.match.params,n=t.wallet,c=t.token,i=Object(d.c)(),j=i.account,w=i.connector,v=Object(o.useState)(Math.round(Date.now()/1e3)),L=Object(s.a)(v,2),I=L[0],W=L[1],A=Object(l.c)(),C=Object(l.d)((function(e){return e.tokenLists})),E=C.findIndex((function(e){return e.token.address===c.toLowerCase()})),M=void 0;-1!==E&&(M=C[E]),Object(o.useEffect)((function(){if(n){Object(N.l)(n).then((function(e){A({type:k.e,payload:e})}));var e=setInterval((function(){Object(N.l)(n).then((function(e){A({type:k.e,payload:e})}))}),5e3);return function(){return clearInterval(e)}}}),[n]),Object(o.useEffect)((function(){var e=setInterval((function(){W(Math.round(Date.now()/1e3))}),1e3);return function(){return clearInterval(e)}}));var T=y.a.pools(),H=y.a.mobile(),q=Object(O.a)("(max-width:600px)"),J=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;if(isNaN(Number(e)))return Number(0);var n=Number(Number(e).toFixed(t)),c=n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,");return c},R=function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,w.getProvider();case 4:n=e.sent,Object(N.q)(n,t,j).then(function(){var e=Object(r.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&console.log("withdrawed"),JSON.parse(JSON.stringify(C)).map((function(e){e.data.map((function(e){e.id===t&&(e.isWithdrawn=!0)}))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(e){e.index;var t=e.event,n=new Date(1e3*t.timestamp),c=t.timestamp<I,a=t.isWithdrawn,r=t.amount/Math.pow(10,t.decimals),s=t.symbol,i=t.owner,o=new Date(1e3*t.depositEvent.timestamp),l=t.timestamp>I?Math.ceil((t.timestamp-I)/(t.timestamp-t.depositEvent.timestamp)*100):0;return Object(S.jsxs)(b.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",style:{borderBottom:"2px solid #e55370",fontSize:"13px"},children:[Object(S.jsx)(b.a,{item:!0,xs:2,sm:2,md:1,style:{textAlign:"center"},children:Object(S.jsx)("img",{src:"/lock.png",style:{width:40},alt:"token image"})}),Object(S.jsxs)(b.a,{item:!0,xs:10,sm:10,md:5,children:[Object(S.jsxs)("p",{children:["Lock Tokens - ",J(r,2)," ",s]}),c?a?Object(S.jsxs)("p",{children:[Object(S.jsx)("span",{children:Object(S.jsx)("button",{children:"Withdrawn"})})," Locked ",o.toDateString()," - unlocks ",n.toDateString()]}):Object(S.jsxs)("p",{children:[Object(S.jsx)("span",{children:Object(S.jsx)("button",{children:"Withdrawable"})})," Locked ",o.toDateString()," - unlocks ",n.toDateString()]}):Object(S.jsxs)("p",{children:[Object(S.jsx)("span",{children:Object(S.jsx)("button",{children:"Locked"})})," Locked ",o.toDateString()," - unlocks ",n.toDateString()]}),Object(S.jsxs)("p",{children:["Owner: ",i]})]}),Object(S.jsxs)(b.a,{item:!0,xs:12,sm:8,md:3,style:{textAlign:"center"},children:[Object(S.jsx)("p",{children:"UNLOCK COUNTDOWN"}),Object(S.jsx)(D,{variant:"determinate",value:l}),Object(S.jsx)("p",{children:t.timestamp<I?"00D-00H-00M-00S":"".concat(Math.floor((t.timestamp-I)/86400),"D-").concat(Math.floor((t.timestamp-I)%86400/3600),"H-").concat(Math.floor((t.timestamp-I)%3600/60),"M-").concat((t.timestamp-I)%60,"S")})]}),Object(S.jsx)(b.a,{item:!0,xs:12,sm:4,md:3,style:{textAlign:"center"},children:c?a?Object(S.jsx)(g.a,{style:{textDecoration:"none"},href:"".concat(N.j,"/tx/").concat(t.withdrawEvent.transactionHash),target:"_blank",rel:"noreferrer",children:"VIEW TX"}):j&&j.toLowerCase()===i.toLowerCase()?Object(S.jsx)(f.a,{onClick:function(){return R(t.id)},children:"WITHDRAW"}):Object(S.jsx)(g.a,{style:{textDecoration:"none"},href:"".concat(N.j,"/tx/").concat(t.depositEvent.transactionHash),target:"_blank",rel:"noreferrer",children:"VIEW TX"}):Object(S.jsx)(g.a,{style:{textDecoration:"none"},href:"".concat(N.j,"/tx/").concat(t.depositEvent.transactionHash),target:"_blank",rel:"noreferrer",children:"VIEW TX"})})]})},V=0,X=[];return M&&M.data.map((function(e){(e.isWithdrawn||e.isLiquidity||(V+=e.amount/Math.pow(10,e.decimals)),!e.isWithdrawn&&e.isLiquidity)&&(-1!==X.findIndex((function(t){return t.token0.address===e.token0.address&&t.token1.address===e.token1.address}))?X.locked+=100*e.amount/e.totalSupply:X.push({token0:e.token0,token1:e.token1,locked:100*e.amount/e.totalSupply}))})),Object(S.jsx)(x.a,{className:T.root,maxWidth:"lg",children:Object(S.jsx)(m.a,{className:T.info,children:Object(S.jsxs)(b.a,{container:!0,spacing:3,children:[Object(S.jsx)(b.a,{className:q?"".concat(H.root," grid"):"grid",item:!0,xs:12,sm:12,md:12,children:Object(S.jsx)(u.a,{className:"card",children:Object(S.jsxs)(h.a,{children:[Object(S.jsx)(p.a,{className:"title",color:"textSecondary",children:"LockUp Overview"}),Object(S.jsxs)(b.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(S.jsx)(b.a,{item:!0,xs:6,sm:6,md:6,style:{textAlign:"center"},children:Object(S.jsx)("span",{children:"Liquidity Locked"})}),Object(S.jsx)(b.a,{item:!0,xs:6,sm:6,md:6,style:{textAlign:"center"},children:X.length?X.map((function(e,t){return Object(S.jsx)("span",{className:"value big",color:"textSecondary",style:{padding:10},children:"".concat(J(e.locked,2),"% ").concat(e.token0.symbol,"/").concat(e.token1.symbol)},"liquidity-".concat(t))})):Object(S.jsx)("span",{className:"value big",color:"textSecondary",style:{padding:10},children:"0"})})]}),Object(S.jsxs)(b.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(S.jsx)(b.a,{item:!0,xs:6,sm:6,md:6,style:{textAlign:"center"},children:Object(S.jsx)("span",{children:"Token Locked"})}),Object(S.jsx)(b.a,{item:!0,xs:6,sm:6,md:6,style:{textAlign:"center"},children:0!==V?Object(S.jsx)("span",{className:"value big",color:"textSecondary",style:q?{padding:10}:{padding:20},children:"".concat(J(V,2)," ").concat(M.token.symbol)}):Object(S.jsx)("span",{className:"value big",color:"textSecondary",style:{padding:10},children:"0"})})]}),Object(S.jsxs)(b.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(S.jsx)(b.a,{item:!0,xs:6,sm:6,md:6,style:{textAlign:"center"},children:Object(S.jsx)("span",{children:"Total Supply"})}),Object(S.jsx)(b.a,{item:!0,xs:6,sm:6,md:6,style:{textAlign:"center"},children:void 0!==M?Object(S.jsx)("span",{className:"value big",color:"textSecondary",style:q?{padding:10}:{padding:20},children:"".concat(J(M.token.totalSupply/Math.pow(10,M.token.decimals),2)," ").concat(M.token.symbol)}):Object(S.jsx)("span",{className:"value big",color:"textSecondary",style:{padding:10},children:"0"})})]})]})})}),Object(S.jsx)(b.a,{className:q?"".concat(H.root," grid"):"grid",item:!0,xs:12,sm:12,md:12,children:Object(S.jsx)(u.a,{className:"card",children:Object(S.jsxs)(h.a,{children:[Object(S.jsx)(p.a,{className:"title",color:"textSecondary",children:"Lock Events"}),M&&M.data.map((function(e,t){return Object(S.jsx)(U,{index:t,event:e},"event-".concat(t))}))]})})})]})})})}))}}]);
//# sourceMappingURL=14.2c1fc3cb.chunk.js.map