(this.webpackJsonpautomaticdapp=this.webpackJsonpautomaticdapp||[]).push([[3],{417:function(e,t,n){"use strict";n.d(t,"o",(function(){return m})),n.d(t,"q",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"j",(function(){return v})),n.d(t,"i",(function(){return h})),n.d(t,"r",(function(){return M})),n.d(t,"d",(function(){return x})),n.d(t,"e",(function(){return k})),n.d(t,"c",(function(){return g})),n.d(t,"n",(function(){return _})),n.d(t,"l",(function(){return A})),n.d(t,"f",(function(){return C})),n.d(t,"m",(function(){return O})),n.d(t,"h",(function(){return I})),n.d(t,"p",(function(){return B})),n.d(t,"k",(function(){return S})),n.d(t,"g",(function(){return D})),n.d(t,"a",(function(){return L}));var a=n(18),i=n(4),s=n.n(i),u=n(79),r=n(466),p=n.n(r),o=n(498),y=n(426),l=n(427),d=(n(428),n(145)),c=n.n(d),m="0x8ba74905c9Ab0aa185e04498E2F83F8CDEc20561",f="0x74818F8D9C0666ab332Af6B8DCBc448e1F10A133",b="0xa155DF21209A845dbf894070b51Cc44466F23d6e",T="https://api.avax.network/ext/bc/C/rpc",w="https://app.snowprotocol.io/api",v="https://snowtrace.io",h=function(){var e=Object(u.a)(s.a.mark((function e(t,n,a,i,u){var r,o,l,d,c,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Date(i),o=Math.round(r.getTime()/1e3),l=new p.a(t),d=new l.eth.Contract(y,m),e.next=6,d.methods.feesInETH().call();case 6:return c=e.sent,e.next=9,d.methods.lockTokens(n.address,u,BigInt(a),o).send({from:u,value:BigInt(c*Math.pow(10,18)).toString()});case 9:return f=e.sent,e.abrupt("return",f.status);case 11:case"end":return e.stop()}}),e)})));return function(t,n,a,i,s){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(s.a.mark((function e(t,n,a){var i,u,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new p.a(t),u=new i.eth.Contract(y,m),e.next=4,u.methods.withdrawTokens(n).send({from:a});case 4:return r=e.sent,e.abrupt("return",r.status);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(s.a.mark((function e(t,n,a){var i,u,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new p.a(t),u=new i.eth.Contract(l,n.address),e.next=4,u.methods.approve(m,i.utils.toBN("115792089237316195423570985008687907853269984665640564039457584007913129639935")).send({from:a});case 4:return r=e.sent,e.abrupt("return",r.status);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(s.a.mark((function e(t,n,a,i){var u,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=new p.a(t),r=new u.eth.Contract(l,n),e.next=4,r.methods.approve(i,u.utils.toBN("115792089237316195423570985008687907853269984665640564039457584007913129639935")).send({from:a});case 4:return o=e.sent,e.abrupt("return",o.status);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,i){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(s.a.mark((function e(t,n){var a,i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new p.a(T),i=new a.eth.Contract(l,t.address),e.next=4,i.methods.allowance(n,m).call();case 4:return u=e.sent,e.abrupt("return",u);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(s.a.mark((function e(t,n){var a,i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new p.a(T),i=new a.eth.Contract(l,t.address),e.next=4,i.methods.balanceOf(n).call();case 4:return u=e.sent,e.abrupt("return",u);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("".concat(w,"/locker/lockedtokens/").concat(t));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(e){return new p.a(T).utils.isAddress(e)},O=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("".concat(w,"/vesting/lastDeployed/").concat(t));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(s.a.mark((function e(t,n,a){var i,u,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new p.a(t),u=[{inputs:[{internalType:"address",name:"token",type:"address"}],name:"createTokenLocker",outputs:[{internalType:"address",name:"locker",type:"address"}],stateMutability:"payable",type:"function"}],r=new i.eth.Contract(u,f),o=r.methods.createTokenLocker(a).send({from:n}),e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(s.a.mark((function e(t,n,a,i,u){var r,o,y,l,d,c,m,f,b,T;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],o=[],y=[],l=BigInt(0),d=new p.a(t),c=[{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"}],m=new d.eth.Contract(c,i),e.next=6,m.methods.decimals().call();case 6:return f=e.sent,a.map((function(e){switch(r.push(e.address),o.push(BigInt(e.amount*Math.pow(10,f)).toString()),e.period[e.period.length-1]){case"M":y.push(30*e.period.slice(0,e.period.length-1)*24);break;case"W":y.push(7*e.period.slice(0,e.period.length-1)*24);break;case"D":y.push(24*e.period.slice(0,e.period.length-1));break;case"h":y.push(e.period.slice(0,e.period.length-1))}l+=BigInt(e.amount*Math.pow(10,f))})),l=l.toString(),c=[{inputs:[{internalType:"address[]",name:"_users",type:"address[]"},{internalType:"uint128[]",name:"_amounts",type:"uint128[]"},{internalType:"uint32[]",name:"_lockHours",type:"uint32[]"},{internalType:"uint256",name:"_sendAmount",type:"uint256"}],name:"sendLockTokenMany",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"feesInETH",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],m=new d.eth.Contract(c,n),e.next=13,m.methods.feesInETH().call();case 13:return b=e.sent,console.log(r,o,y,l,u),e.next=17,m.methods.sendLockTokenMany(r,o,y,l).send({from:u,value:BigInt(b*Math.pow(10,18)).toString()});case 17:return T=e.sent,e.abrupt("return",T);case 19:case"end":return e.stop()}}),e)})));return function(t,n,a,i,s){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,i,u,r,y,l,d,c,m,b,w,v,h,M,x,k,g,_,A,C,O,I,B,S,D,L,j,R,N;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new p.a(T),u=[{inputs:[],name:"getAllContracts",outputs:[{internalType:"address[]",name:"",type:"address[]"}],stateMutability:"view",type:"function"}],i=new n.eth.Contract(u,f),e.next=5,i.methods.getAllContracts().call();case 5:return y=e.sent,d=new o.a({web3Instance:n,tryAggregate:!0}),u=[{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"getLockData",outputs:[{internalType:"uint128",name:"",type:"uint128"},{internalType:"uint128",name:"",type:"uint128"},{internalType:"uint64",name:"",type:"uint64"},{internalType:"uint64",name:"",type:"uint64"},{internalType:"uint32",name:"",type:"uint32"}],stateMutability:"view",type:"function"},{inputs:[],name:"getToken",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"}],r=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"}],c=y.map((function(e,n){return{reference:n,contractAddress:e,abi:u,calls:[{reference:"getLockDataCall",methodName:"getLockData",methodParameters:[t]},{reference:"getTokenCall",methodName:"getToken"}]}})),e.next=12,d.call(c);case 12:for(l=e.sent,m=[],c=[],b=0,w=Object.entries(l.results);b<w.length;b++)v=Object(a.a)(w[b],2),h=v[0],M=v[1],x=BigInt(M.callsReturnContext[0].returnValues[0].hex).toString(),k=BigInt(M.callsReturnContext[0].returnValues[1].hex).toString(),g=BigInt(M.callsReturnContext[0].returnValues[2].hex).toString(),_=BigInt(M.callsReturnContext[0].returnValues[3].hex).toString(),A=M.callsReturnContext[0].returnValues[4],C=y[h],O=M.callsReturnContext[1].returnValues[0],"0"!==x&&(c.push({reference:m.length,contractAddress:O,abi:r,calls:[{reference:"nameCall",methodName:"name"},{reference:"decimalsCall",methodName:"decimals"},{reference:"symbolCall",methodName:"symbol"}]}),m.push({amount:x,claimedAmount:k,lockTimestamp:g,lastUpdated:_,lockHours:A,contract:C,token:{address:O}}));return e.next=18,d.call(c);case 18:for(l=e.sent,I=0,B=Object.entries(l.results);I<B.length;I++)S=Object(a.a)(B[I],2),D=S[0],L=S[1],j=L.callsReturnContext[0].returnValues[0],R=L.callsReturnContext[2].returnValues[0],N=L.callsReturnContext[1].returnValues[0],m[D].token.name=j,m[D].token.symbol=R,m[D].token.decimals=N;return e.abrupt("return",m);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(s.a.mark((function e(t,n,a){var i,u,r,o,y,l,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=Math.floor(Date.now()/1e3))-n.lastUpdated<3600)){e.next=3;break}return e.abrupt("return",{state:!1,reason:"Wait to next claim available"});case 3:return u=Math.floor((i-n.lockTimestamp)/3600),r=BigInt(Math.floor(n.amount*u/n.lockHours)-n.claimedAmount).toString(),o=new p.a(t),y=[{inputs:[{internalType:"uint128",name:"_amount",type:"uint128"}],name:"claimToken",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"}],l=new o.eth.Contract(y,n.contract),e.next=10,l.methods.claimToken(r).send({from:a});case 10:d=e.sent,console.log(d);case 12:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(s.a.mark((function e(t,n,a,i){var u,r,o,y,l,d,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=[],r=[],o=new p.a(t),y=[{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"}],console.log(a),l=new o.eth.Contract(y,a),e.next=7,l.methods.decimals().call();case 7:return d=e.sent,n.map((function(e){u.push(e.address),r.push(BigInt(e.amount*Math.pow(10,d)).toString())})),y=[{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address[]",name:"_users",type:"address[]"},{internalType:"uint128[]",name:"_amounts",type:"uint128[]"}],name:"airdrop",outputs:[],stateMutability:"payable",type:"function"}],l=new o.eth.Contract(y,b),e.next=13,l.methods.airdrop(a,u,r).send({from:i});case 13:return c=e.sent,e.abrupt("return",c);case 15:case"end":return e.stop()}}),e)})));return function(t,n,a,i){return e.apply(this,arguments)}}()},426:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_withdrawalAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"_unlockTimes","type":"uint256[]"}],"name":"createMultipleLocks","outputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_unlockTime","type":"uint256"}],"name":"extendLockDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fees","type":"uint256"}],"name":"FeesChanged","type":"event"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_withdrawalAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_unlockTime","type":"uint256"}],"name":"lockTokens","outputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"address","name":"SentToAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"AmountLocked","type":"uint256"}],"name":"LogLocking","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"address","name":"SentToAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"AmountTransferred","type":"uint256"}],"name":"LogWithdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_companyWallet","type":"address"}],"name":"setCompanyWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_feesInETH","type":"uint256"}],"name":"setFeesInETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_receiverAddress","type":"address"}],"name":"transferLocks","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allDepositIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"companyWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"depositId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"depositsByWithdrawalAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feesInETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllDepositIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getDepositDetails","outputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_withdrawalAddress","type":"address"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"},{"internalType":"uint256","name":"_unlockTime","type":"uint256"},{"internalType":"bool","name":"_withdrawn","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_withdrawalAddress","type":"address"}],"name":"getDepositsByWithdrawalAddress","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_walletAddress","type":"address"}],"name":"getTokenBalanceByAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"getTotalTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lockedToken","outputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"withdrawalAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint256","name":"unlockTime","type":"uint256"},{"internalType":"bool","name":"withdrawn","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"walletTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')},427:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')},428:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sync","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},468:function(e,t){},470:function(e,t){},471:function(e,t){},474:function(e,t){},475:function(e,t){},477:function(e,t){},478:function(e,t){},480:function(e,t){},481:function(e,t){},489:function(e,t){},490:function(e,t){},491:function(e,t){},492:function(e,t){}}]);
//# sourceMappingURL=3.7c52f937.chunk.js.map