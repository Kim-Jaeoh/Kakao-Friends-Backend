"use strict";(self.webpackChunkkakaofriends=self.webpackChunkkakaofriends||[]).push([[916],{2916:function(n,e,t){t.r(e);var i,o,r,s,l,d,a,c,p,f,u,x,h,g,v,m,b,Z,j,y,w,k=t(168),C=t(4165),P=t(5861),z=t(9439),E=t(2791),S=t(4193),T=t(1044),_=t(5694),A=t(1087),L=t(9434),M=t(9062),N=t(516),I=t(4614),U=t(184),Y=(0,E.lazy)((function(){return t.e(132).then(t.bind(t,4132))}));e.default=function(n){n.isLoggedIn;var e=(0,E.useState)([]),t=(0,z.Z)(e,2),i=t[0],o=t[1],r=(0,E.useState)([]),s=(0,z.Z)(r,2),l=s[0],d=s[1],a=(0,E.useState)(""),c=(0,z.Z)(a,2),p=c[0],f=c[1],u=(0,L.v9)((function(n){return n.user.currentUser})),x=(0,I.p)().PriceComma,h=(0,_.k)().timeToString,g={SUCCESS_PAYMENT:"\uacb0\uc81c \uc644\ub8cc",PART_CANCEL_PAYMENT:"\ubd80\ubd84 \ucde8\uc18c",CANCEL_PAYMENT:"\ubaa8\ub450 \ucde8\uc18c",QUIT_PAYMENT:"\uacb0\uc81c \uc911\ub2e8",FAIL_PAYMENT:"\uacb0\uc81c \uc2b9\uc778 \uc2e4\ud328"};return(0,E.useEffect)((function(){var n=(0,M.JU)(N.wO,"userInfo",u.uid.toString());n&&(0,M.cf)(n,(function(n){d(n.data())}))}),[u.uid]),(0,E.useEffect)((function(){var n;null===l||void 0===l||null===(n=l.orderList)||void 0===n||n.map(function(){var n=(0,P.Z)((0,C.Z)().mark((function n(e){return(0,C.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,T.ZP)({method:"GET",url:"https://kapi.kakao.com/v1/payment/order",params:{cid:"TC0ONETIME",tid:e.tid},headers:{Authorization:"KakaoAK ".concat("a504facbb8a0f6556ecf8e3cbba4d606"),"Content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then((function(n){var e;e=n.data.status,f(g[e])}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[null===l||void 0===l?void 0:l.orderList]),(0,E.useEffect)((function(){var n;o(null===l||void 0===l||null===(n=l.orderList)||void 0===n?void 0:n.map((function(n){return n})).sort((function(n,e){return new Date(e.created_at)-new Date(n.created_at)})))}),[null===l||void 0===l?void 0:l.orderList]),(0,U.jsx)(D,{children:0!==(null===i||void 0===i?void 0:i.length)?(0,U.jsx)(U.Fragment,{children:p&&(null===i||void 0===i?void 0:i.map((function(n){var e,t=n.orderInfo;return(0,U.jsxs)(F,{children:[(0,U.jsxs)(B,{children:[(0,U.jsxs)("span",{children:["\uc8fc\ubb38\ubc88\ud638 ",n.tid]}),(0,U.jsx)("p",{children:h(n)})]}),(0,U.jsx)(K,{children:null===t||void 0===t?void 0:t.map((function(e,t){return(0,U.jsx)(O,{children:(0,U.jsxs)(W,{children:[(0,U.jsx)(X,{to:"/detail/".concat(e.product),children:(0,U.jsx)($,{children:(0,U.jsx)("img",{src:e.image,alt:e.title,loading:"lazy"})})}),(0,U.jsxs)(nn,{children:[(0,U.jsxs)(en,{to:"/detail/".concat(e.product),children:[(0,U.jsx)(tn,{children:e.title}),(0,U.jsxs)(on,{children:[(0,U.jsx)("span",{children:e.price}),"\uc6d0\xa0/\xa0",(0,U.jsx)("span",{children:e.quanity}),"\uac1c"]})]}),(0,U.jsxs)(rn,{children:[p,"\xa0|\xa0",n.type]})]})]})},t)}))}),(0,U.jsxs)(R,{children:[(0,U.jsx)(q,{children:"\uacb0\uc81c \uc815\ubcf4"}),(0,U.jsxs)(H,{children:[(0,U.jsxs)(J,{children:[(0,U.jsx)(Q,{children:"\ucd1d \uc0c1\ud488\uae08\uc561"}),"\xa0",(0,U.jsxs)(V,{children:[x(n.totalPrice),(0,U.jsx)("span",{children:"\uc6d0"})]})]}),(0,U.jsxs)(J,{children:[(0,U.jsx)(Q,{children:"\ubc30\uc1a1\ube44"}),"\xa0",(0,U.jsxs)(V,{children:[x(n.deliveryPrice),null!==(e="\ubb34\ub8cc"===!(null!==n&&void 0!==n&&n.deliveryPrice))&&void 0!==e?e:(0,U.jsx)("span",{children:"\uc6d0"})]})]}),(0,U.jsxs)(J,{children:[(0,U.jsx)(Q,{children:"\ud3ec\uc778\ud2b8 \uc0ac\uc6a9"}),"\xa0",(0,U.jsxs)(V,{children:["-\xa0",x(n.usePoint),(0,U.jsx)("span",{children:"\uc6d0"})]})]})]})]}),(0,U.jsx)(R,{children:(0,U.jsxs)(G,{children:[(0,U.jsx)(Q,{children:"\ucd5c\uc885 \uacb0\uc81c\uae08\uc561"}),(0,U.jsxs)(V,{children:[x(n.totalPrice-n.usePoint),(0,U.jsx)("span",{children:"\uc6d0"})]})]})})]},n.tid)})))}):(0,U.jsx)(Y,{url:"https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20221109/181135/assets/images/m960/ico_empty_ryan.png",text:"\uc544\uc9c1 \uc8fc\ubb38 \ub0b4\uc5ed\uc774 \uc5c6\uc5b4\uc694."})})};var D=S.Z.div(i||(i=(0,k.Z)(["\n  padding: 20px;\n  /* margin-bottom: -100px; */\n  background-color: #f2f2f2;\n"]))),F=S.Z.div(o||(o=(0,k.Z)(["\n  position: relative;\n  background-color: #fff;\n\n  :not(:last-of-type) {\n    margin-bottom: 20px;\n  }\n"]))),B=S.Z.div(r||(r=(0,k.Z)(["\n  padding: 15px 20px;\n  border-bottom: 1px solid #f2f2f2;\n\n  > a {\n    display: flex;\n    align-items: center;\n    margin-bottom: 1.5px;\n    font-weight: 500;\n\n    span {\n      display: flex;\n      align-items: center;\n    }\n\n    svg {\n      font-weight: bold;\n      font-size: 14px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 0.5px;\n      margin-left: 2px;\n    }\n  }\n\n  > p {\n    font-size: 13px;\n    color: #747475;\n  }\n"]))),K=(S.Z.div(s||(s=(0,k.Z)(["\n  display: flex;\n  margin-left: auto;\n  /* justify-content: flex-end; */\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n\n  div {\n    :first-of-type {\n      margin-right: 15px;\n      color: #747475;\n      font-weight: 500;\n      font-size: 16px;\n    }\n    font-weight: 700;\n    font-size: 16px;\n  }\n"]))),S.Z.ul(l||(l=(0,k.Z)(["\n  overflow: hidden;\n  border-bottom: 1px solid #f2f2f2;\n"])))),O=S.Z.li(d||(d=(0,k.Z)(["\n  position: relative;\n  margin: 20px 20px 0;\n  padding: 0 28px 20px 0;\n\n  :not(:last-of-type) {\n    border-bottom: 1px solid #f2f2f2;\n  }\n"]))),R=S.Z.div(a||(a=(0,k.Z)(["\n  background-color: #fff;\n  padding: 20px;\n  /* margin-bottom: 25px; */\n  :not(:last-of-type) {\n    border-bottom: 1px solid #f2f2f2;\n  }\n"]))),q=S.Z.strong(c||(c=(0,k.Z)(["\n  display: block;\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: bold;\n  color: #747475;\n"]))),G=S.Z.strong(p||(p=(0,k.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 16px;\n  font-weight: bold;\n\n  :last-of-type {\n    span {\n      font-size: 16px;\n    }\n\n    strong {\n      font-size: 20px;\n    }\n  }\n"]))),H=S.Z.div(f||(f=(0,k.Z)(["\n  /* padding: 0 20px; */\n"]))),J=S.Z.div(u||(u=(0,k.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  :not(:last-of-type) {\n    margin-bottom: 8px;\n  }\n\n  :nth-of-type(3) {\n    color: #e95555;\n    /* padding-bottom: 18px; */\n    /* border-bottom: 1px solid #f2f2f2; */\n  }\n\n  :nth-of-type(4) {\n    padding-top: 10px;\n  }\n"]))),Q=S.Z.span(x||(x=(0,k.Z)(["\n  /* display: inline-block; */\n  /* width: 100px; */\n  /* margin: 0 8px 0 0; */\n"]))),V=S.Z.strong(h||(h=(0,k.Z)(["\n  span {\n    font-size: 14px;\n    margin-left: 1.6px;\n  }\n"]))),W=S.Z.div(g||(g=(0,k.Z)(["\n  overflow: hidden;\n  height: 100px;\n"]))),X=(0,S.Z)(A.rU)(v||(v=(0,k.Z)(['\n  float: left;\n  position: relative;\n  width: 100px;\n  height: 100px;\n  border-radius: 6px;\n\n  ::before {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 6px;\n    background-color: rgba(0, 0, 0, 0.02);\n    content: "";\n  }\n']))),$=S.Z.div(m||(m=(0,k.Z)(["\n  display: block;\n  overflow: hidden;\n  border-radius: 6px;\n\n  img {\n    display: block;\n    width: 100%;\n  }\n"]))),nn=S.Z.div(b||(b=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n  padding: 4px 0 0 16px;\n  box-sizing: border-box;\n"]))),en=(0,S.Z)(A.rU)(Z||(Z=(0,k.Z)(["\n  display: block;\n"]))),tn=S.Z.strong(j||(j=(0,k.Z)(["\n  display: block;\n  display: -webkit-box;\n  overflow: hidden;\n  line-height: 20px;\n  font-size: 16px;\n  font-weight: 500;\n  max-height: 40px;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  word-break: break-all;\n"]))),on=S.Z.div(y||(y=(0,k.Z)(["\n  padding-top: 4px;\n  font-size: 15px;\n  line-height: 24px;\n  vertical-align: top;\n\n  /* span {\n    font-size: 15px;\n  } */\n"]))),rn=S.Z.p(w||(w=(0,k.Z)(["\n  color: #747475;\n  user-select: none;\n"])))},4614:function(n,e,t){t.d(e,{p:function(){return o}});var i=t(2791),o=function(){return{PriceReComma:(0,i.useCallback)((function(n){return null===n||void 0===n?void 0:n.split(",").join("").toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),[]),PriceDeleteComma:(0,i.useCallback)((function(n){return null===n||void 0===n?void 0:n.split(",").join("")}),[]),PriceComma:(0,i.useCallback)((function(n){return null===n||void 0===n?void 0:n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),[])}}},5694:function(n,e,t){t.d(e,{k:function(){return i}});var i=function(){return{timeToString:function(n){var e=new Date(null===n||void 0===n?void 0:n.created_at),t=e.getFullYear(),i=("0"+(e.getMonth()+1)).slice(-2),o=("0"+e.getDate()).slice(-2),r=("0"+e.getHours()).slice(-2);return t+"-"+i+"-"+o+" "+r+":"+("0"+e.getMinutes()).slice(-2)+":"+("0"+e.getSeconds()).slice(-2)+" "+(r<12?"am":"pm")}}}}}]);
//# sourceMappingURL=916.3d3b0422.chunk.js.map