(this.webpackJsonpautomaticdapp=this.webpackJsonpautomaticdapp||[]).push([[13],{1010:function(e,t,a){"use strict";var n=a(7),o=a(1),r=a(5),c=a(0),i=(a(15),a(9)),l=a(210),s=a(207),d=a(417),u=a(12),b=a(6),p=a(142),j=a(211);function m(e){return Object(p.a)("MuiTableRow",e)}var O=Object(j.a)("MuiTableRow",["root","selected","hover","head","footer"]),v=a(2),h=["className","component","hover","selected"],f=Object(b.a)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},Object(n.a)(t,"&.".concat(O.hover,":hover"),{backgroundColor:a.palette.action.hover}),Object(n.a)(t,"&.".concat(O.selected),{backgroundColor:Object(s.a)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:Object(s.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),g=c.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiTableRow"}),n=a.className,s=a.component,b=void 0===s?"tr":s,p=a.hover,j=void 0!==p&&p,O=a.selected,g=void 0!==O&&O,x=Object(r.a)(a,h),y=c.useContext(d.a),w=Object(o.a)({},a,{component:b,hover:j,selected:g,head:y&&"head"===y.variant,footer:y&&"footer"===y.variant}),k=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return Object(l.a)(a,m,t)}(w);return Object(v.jsx)(f,Object(o.a)({as:b,ref:t,className:Object(i.a)(k.root,n),role:"tr"===b?null:"row",ownerState:w},x))}));t.a=g},1011:function(e,t,a){"use strict";var n=a(7),o=a(5),r=a(1),c=a(0),i=(a(15),a(9)),l=a(210),s=a(207),d=a(10),u=a(460),b=a(417),p=a(12),j=a(6),m=a(142),O=a(211);function v(e){return Object(m.a)("MuiTableCell",e)}var h=Object(O.a)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),f=a(2),g=["align","className","component","padding","scope","size","sortDirection","variant"],x=Object(j.a)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["size".concat(Object(d.a)(a.size))],"normal"!==a.padding&&t["padding".concat(Object(d.a)(a.padding))],"inherit"!==a.align&&t["align".concat(Object(d.a)(a.align))],a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return Object(r.a)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===t.palette.mode?Object(s.e)(Object(s.a)(t.palette.divider,1),.88):Object(s.b)(Object(s.a)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:t.palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:t.palette.text.primary},"footer"===a.variant&&{color:t.palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&Object(n.a)({padding:"6px 16px"},"&.".concat(h.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:t.palette.background.default})})),y=c.forwardRef((function(e,t){var a,n=Object(p.a)({props:e,name:"MuiTableCell"}),s=n.align,j=void 0===s?"inherit":s,m=n.className,O=n.component,h=n.padding,y=n.scope,w=n.size,k=n.sortDirection,C=n.variant,N=Object(o.a)(n,g),T=c.useContext(u.a),M=c.useContext(b.a),H=M&&"head"===M.variant;a=O||(H?"th":"td");var R=y;!R&&H&&(R="col");var S=C||M&&M.variant,A=Object(r.a)({},n,{align:j,component:a,padding:h||(T&&T.padding?T.padding:"normal"),size:w||(T&&T.size?T.size:"medium"),sortDirection:k,stickyHeader:"head"===S&&T&&T.stickyHeader,variant:S}),z=function(e){var t=e.classes,a=e.variant,n=e.align,o=e.padding,r=e.size,c={root:["root",a,e.stickyHeader&&"stickyHeader","inherit"!==n&&"align".concat(Object(d.a)(n)),"normal"!==o&&"padding".concat(Object(d.a)(o)),"size".concat(Object(d.a)(r))]};return Object(l.a)(c,v,t)}(A),D=null;return k&&(D="asc"===k?"ascending":"descending"),Object(f.jsx)(x,Object(r.a)({as:a,ref:t,className:Object(i.a)(z.root,m),"aria-sort":D,scope:R,ownerState:A},N))}));t.a=y},1012:function(e,t,a){"use strict";var n=a(1),o=a(5),r=a(0),c=(a(15),a(9)),i=a(210),l=a(12),s=a(6),d=a(142),u=a(211);function b(e){return Object(d.a)("MuiTableContainer",e)}Object(u.a)("MuiTableContainer",["root"]);var p=a(2),j=["className","component"],m=Object(s.a)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,t){return t.root}})({width:"100%",overflowX:"auto"}),O=r.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableContainer"}),r=a.className,s=a.component,d=void 0===s?"div":s,u=Object(o.a)(a,j),O=Object(n.a)({},a,{component:d}),v=function(e){var t=e.classes;return Object(i.a)({root:["root"]},b,t)}(O);return Object(p.jsx)(m,Object(n.a)({ref:t,as:d,className:Object(c.a)(v.root,r),ownerState:O},u))}));t.a=O},1013:function(e,t,a){"use strict";var n=a(5),o=a(1),r=a(0),c=(a(15),a(9)),i=a(210),l=a(460),s=a(12),d=a(6),u=a(142),b=a(211);function p(e){return Object(u.a)("MuiTable",e)}Object(b.a)("MuiTable",["root","stickyHeader"]);var j=a(2),m=["className","component","padding","size","stickyHeader"],O=Object(d.a)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return Object(o.a)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(o.a)({},t.typography.body2,{padding:t.spacing(2),color:t.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),v="table",h=r.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiTable"}),d=a.className,u=a.component,b=void 0===u?v:u,h=a.padding,f=void 0===h?"normal":h,g=a.size,x=void 0===g?"medium":g,y=a.stickyHeader,w=void 0!==y&&y,k=Object(n.a)(a,m),C=Object(o.a)({},a,{component:b,padding:f,size:x,stickyHeader:w}),N=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return Object(i.a)(a,p,t)}(C),T=r.useMemo((function(){return{padding:f,size:x,stickyHeader:w}}),[f,x,w]);return Object(j.jsx)(l.a.Provider,{value:T,children:Object(j.jsx)(O,Object(o.a)({as:b,role:b===v?null:"table",ref:t,className:Object(c.a)(N.root,d),ownerState:C},k))})}));t.a=h},1014:function(e,t,a){"use strict";var n=a(1),o=a(5),r=a(0),c=(a(15),a(9)),i=a(210),l=a(417),s=a(12),d=a(6),u=a(142),b=a(211);function p(e){return Object(u.a)("MuiTableHead",e)}Object(b.a)("MuiTableHead",["root"]);var j=a(2),m=["className","component"],O=Object(d.a)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),v={variant:"head"},h="thead",f=r.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiTableHead"}),r=a.className,d=a.component,u=void 0===d?h:d,b=Object(o.a)(a,m),f=Object(n.a)({},a,{component:u}),g=function(e){var t=e.classes;return Object(i.a)({root:["root"]},p,t)}(f);return Object(j.jsx)(l.a.Provider,{value:v,children:Object(j.jsx)(O,Object(n.a)({as:u,className:Object(c.a)(g.root,r),ref:t,role:u===h?null:"rowgroup",ownerState:f},b))})}));t.a=f},1015:function(e,t,a){"use strict";var n=a(1),o=a(5),r=a(0),c=(a(15),a(9)),i=a(210),l=a(417),s=a(12),d=a(6),u=a(142),b=a(211);function p(e){return Object(u.a)("MuiTableBody",e)}Object(b.a)("MuiTableBody",["root"]);var j=a(2),m=["className","component"],O=Object(d.a)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),v={variant:"body"},h="tbody",f=r.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiTableBody"}),r=a.className,d=a.component,u=void 0===d?h:d,b=Object(o.a)(a,m),f=Object(n.a)({},a,{component:u}),g=function(e){var t=e.classes;return Object(i.a)({root:["root"]},p,t)}(f);return Object(j.jsx)(l.a.Provider,{value:v,children:Object(j.jsx)(O,Object(n.a)({className:Object(c.a)(g.root,r),as:u,ref:t,role:u===h?null:"rowgroup",ownerState:f},b))})}));t.a=f},1040:function(e,t,a){"use strict";a.r(t);var n=a(4),o=a.n(n),r=a(79),c=a(18),i=a(0),l=a(46),s=a(388),d=a(1048),u=a(1049),b=a(403),p=a(1051),j=a(380),m=a(1012),O=a(214),v=a(1013),h=a(1014),f=a(1010),g=a(1011),x=a(1015),y=a(390),w=a(57),k=a(418),C=a(2);t.default=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),a=t[0],n=t[1],N=Object(l.c)(),T=N.account,M=N.connector,H=Object(i.useState)(""),R=Object(c.a)(H,2),S=R[0],A=R[1];Object(i.useEffect)((function(){M.getChainId().then((function(e){1===Number(e)&&A("Ethereum"),56===Number(e)&&A("Binance Smart Chain"),43114===Number(e)&&A("Avalanche")}))}),[M.getChainId()]),Object(i.useEffect)((function(){if(S){if(T){Object(k.j)(T,S).then((function(e){e.map((function(e){e.nextClaim="now available",Number(e.amount)>Number(e.claimedAmount)&&(Date.now()/1e3-e.lastUpdated<3600&&(e.nextClaim=new Date(1e3*e.lastUpdated+36e5).toUTCString()),e.availableAmount=BigInt(e.amount/e.lockHours*Math.floor((Date.now()/1e3-e.lockTimestamp)/3600)-e.claimedAmount).toString())})),n(e)}));var e=setInterval((function(){Object(k.j)(T,S).then((function(e){e.map((function(e){e.nextClaim="now available",Number(e.amount)>Number(e.claimedAmount)&&(Date.now()/1e3-e.lastUpdated<3600&&(e.nextClaim=new Date(1e3*e.lastUpdated+36e5).toUTCString()),e.availableAmount=BigInt(e.amount/e.lockHours*((Date.now()/1e3-e.lockTimestamp)/3600)-e.claimedAmount).toString())})),n(e)}))}),1e4);return function(){return clearInterval(e)}}n([])}}),[T,S]);var z=w.a.pools(),D=w.a.mobile(),B=Object(j.a)("(max-width:600px)"),I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;if(isNaN(Number(e)))return Number(0);var a=Number(Number(e).toFixed(t)),n=a.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,");return n},U=function(){var e=Object(r.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,M.getProvider();case 4:n=e.sent,Object(k.f)(n,a[t],T).then(function(){var e=Object(r.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Claimed"),console.log(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsx)(b.a,{className:z.root,maxWidth:"lg",children:Object(C.jsx)(s.a,{className:z.info,children:Object(C.jsx)(d.a,{container:!0,spacing:3,children:Object(C.jsx)(d.a,{className:B?"".concat(D.root," grid"):"grid",item:!0,xs:12,sm:12,md:12,children:Object(C.jsx)(u.a,{className:"card",children:Object(C.jsx)(p.a,{children:Object(C.jsx)(m.a,{component:O.a,children:Object(C.jsxs)(v.a,{"aria-label":"collapsible table",children:[Object(C.jsx)(h.a,{children:Object(C.jsxs)(f.a,{children:[Object(C.jsx)(g.a,{children:"Token"}),Object(C.jsx)(g.a,{children:"Allocation"}),Object(C.jsx)(g.a,{align:"right",children:"Time to next claim"}),Object(C.jsx)(g.a,{align:"right",children:"Available to claim"}),Object(C.jsx)(g.a,{align:"right",children:"Claimed so far"}),Object(C.jsx)(g.a,{align:"right",children:"Action"})]})}),Object(C.jsx)(x.a,{children:a.map((function(e,t){return Object(C.jsxs)(f.a,{children:[Object(C.jsx)(g.a,{children:e.token.symbol}),Object(C.jsx)(g.a,{children:I(e.amount/Math.pow(10,e.token.decimals),2)}),Object(C.jsx)(g.a,{align:"right",children:e.nextClaim}),Object(C.jsx)(g.a,{align:"right",children:I(e.availableAmount/Math.pow(10,e.token.decimals),2)}),Object(C.jsx)(g.a,{align:"right",children:I(e.claimedAmount/Math.pow(10,e.token.decimals),2)}),Object(C.jsx)(g.a,{align:"right",children:Object(C.jsx)(y.a,{variant:"contained",color:"secondary",style:{width:"100%"},onClick:function(){return U(t)},children:"Claim"})})]},"tokenList-".concat(t))}))})]})})})})})})})})}},417:function(e,t,a){"use strict";var n=a(0),o=n.createContext();t.a=o},460:function(e,t,a){"use strict";var n=a(0),o=n.createContext();t.a=o}}]);
//# sourceMappingURL=13.324df252.chunk.js.map