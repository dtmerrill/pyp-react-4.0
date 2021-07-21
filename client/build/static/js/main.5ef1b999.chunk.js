(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{63:function(e,t,n){},64:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var s,c,i,r,a,l,d=n(2),o=n.n(d),j=n(47),b=n.n(j),h=(n(63),n(17)),u=(n(64),n(55)),m=n(86),x=n(87),O=n(84),p=n(54),g=n(10),f=n(7),k=n(88),v=n(0),N=function(e){var t=e.drinks,n=e.drinksTitle,s=e.showTitle,c=void 0===s||s,i=e.showUsername,r=void 0===i||i;return Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{children:[c&&Object(v.jsx)("h3",{children:n}),t&&t.map((function(e){return Object(v.jsxs)("div",{className:"card mb-3",children:[Object(v.jsx)("h4",{className:"card-header bg-primary text-light p-2 m-0",children:r?Object(v.jsxs)(g.b,{className:"text-light",to:"/SingleDrinkList/".concat(e.drinkImage),children:[e.drinkAuthor," ",Object(v.jsx)("br",{}),Object(v.jsxs)("span",{style:{fontSize:"1rem"},children:["had this drink on ",e.createdAt]})]}):Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("span",{style:{fontSize:"1rem"},children:["You had this drink on ",e.createdAt]})})}),Object(v.jsx)("div",{className:"card-body bg-light p-2",children:Object(v.jsx)("p",{children:e.drinksIngredients})}),Object(v.jsx)(g.b,{className:"btn btn-primary btn-block btn-squared",to:"/users/".concat(e._id),children:"Join the discussion on this thought."})]},e._id)}))]})})},w=n(21),y=n(85),S=Object(y.a)(s||(s=Object(w.a)(["\n  query user($username: String!) {\n    user(username: $username) {\n      _id\n      username\n      email\n      drinks {\n        _id\n        drinkImage\n        drinksTitle\n        drinksIngredients\n        drinkRecipes\n      }\n    }\n  }\n"]))),I=Object(y.a)(c||(c=Object(w.a)(["\n  query getDrinks {\n    drinks {\n      _id\n      drinkImage\n      drinksTitle\n      drinksIngredients\n      drinkRecipes\n    }\n  }\n"]))),T=(Object(y.a)(i||(i=Object(w.a)(["\nquery getSingleDrink($drinkId: ID!) {\n  drink(drinkId: $drinkId)  {\n    drinks {\n      _id\n      drinkImage\n      drinksTitle\n      drinksIngredients\n      drinkRecipes\n    }\n  }\n}\n"]))),Object(y.a)(r||(r=Object(w.a)(["\n  query me {\n    me {\n      _id\n      username\n      email\n      drinks {\n        _id\n        drinkImage\n        drinksTitle\n        drinksIngredients\n        drinkRecipes\n      }\n    }\n  }\n"])))),D=function(){var e=Object(k.a)(I),t=e.loading,n=e.data,s=(null===n||void 0===n?void 0:n.drinks)||[];return Object(v.jsx)("main",{children:Object(v.jsx)("div",{className:"flex-row justify-center",children:Object(v.jsx)("div",{className:"col-12 col-md-8 mb-3",children:t?Object(v.jsx)("div",{children:"Loading..."}):Object(v.jsx)(N,{drinks:s,drinkTitle:"nbxnx"})})})})},C=n(51),P=n(52),_=n(41),$=new(function(){function e(){Object(C.a)(this,e)}return Object(P.a)(e,[{key:"getProfile",value:function(){return Object(_.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!(!e||this.isTokenExpired(e))}},{key:"isTokenExpired",value:function(e){return Object(_.a)(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.reload()}}]),e}()),L=function(){var e=Object(f.g)().username,t=Object(k.a)(e?S:T,{variables:{username:e}}),n=t.loading,s=t.data,c=(null===s||void 0===s?void 0:s.me)||(null===s||void 0===s?void 0:s.user)||{};return $.loggedIn()&&$.getProfile().data.username===e?Object(v.jsx)(f.a,{to:"/me"}):n?Object(v.jsx)("div",{children:"Loading..."}):(null===c||void 0===c?void 0:c.username)?Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:"flex-row justify-center mb-3",children:[Object(v.jsxs)("h2",{className:"col-12 col-md-10 bg-dark text-light p-3 mb-5",children:["Viewing ",e?"".concat(c.username,"'s"):"your"," profile."]}),Object(v.jsx)("div",{className:"col-12 col-md-10 mb-5",children:Object(v.jsx)(N,{drinks:c.drinks,drinkTitle:"".concat(c.username,"'s drinks..."),showTitle:!1,showUsername:!1})})]})}):Object(v.jsx)("h4",{children:"You need to be logged in to see this. Use the navigation links above to sign up or log in!"})},U=n(26),Y=n.n(U),q=n(35),z=n(25),R=n(14),F=n(90),H=Object(y.a)(a||(a=Object(w.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),B=Object(y.a)(l||(l=Object(w.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),V=function(){var e=Object(d.useState)({username:"",email:"",password:""}),t=Object(R.a)(e,2),n=t[0],s=t[1],c=Object(F.a)(H),i=Object(R.a)(c,2),r=i[0],a=i[1],l=a.error,o=a.data,j=function(e){var t=e.target,c=t.name,i=t.value;s(Object(h.a)(Object(h.a)({},n),{},Object(z.a)({},c,i)))},b=function(){var e=Object(q.a)(Y.a.mark((function e(t){var s,c;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(n),e.prev=2,e.next=5,r({variables:Object(h.a)({},n)});case 5:s=e.sent,c=s.data,$.login(c.addUser.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("main",{className:"flex-row justify-center mb-4",children:Object(v.jsx)("div",{className:"",children:Object(v.jsxs)("div",{className:"",children:[Object(v.jsx)("h4",{className:"classloginsignup p-3",children:"Sign Up"}),Object(v.jsxs)("div",{className:" p-2",children:[o?Object(v.jsxs)("p",{children:["Success! You may now head"," ",Object(v.jsx)(g.b,{to:"/",children:"back to the homepage."})]}):Object(v.jsxs)("form",{onSubmit:b,children:[Object(v.jsx)("input",{className:"form-input mb-3",placeholder:"Your username",name:"username",type:"text",value:n.name,onChange:j}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"form-input mb-3",placeholder:"Your email",name:"email",type:"email",value:n.email,onChange:j}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"form-input mb-3",placeholder:"******",name:"password",type:"password",value:n.password,onChange:j}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{className:" is-rounded button is-primary is-outlined has-text-black  is-rounded city-button",style:{cursor:"pointer"},type:"submit",children:"Submit"})]}),l&&Object(v.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:l.message})]})]})})})},A=function(e){var t=Object(d.useState)({email:"",password:""}),n=Object(R.a)(t,2),s=n[0],c=n[1],i=Object(F.a)(B),r=Object(R.a)(i,2),a=r[0],l=r[1],o=l.error,j=l.data,b=function(e){var t=e.target,n=t.name,i=t.value;c(Object(h.a)(Object(h.a)({},s),{},Object(z.a)({},n,i)))},u=function(){var e=Object(q.a)(Y.a.mark((function e(t){var n,i;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(s),e.prev=2,e.next=5,a({variables:Object(h.a)({},s)});case 5:n=e.sent,i=n.data,$.login(i.login.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:c({email:"",password:""});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("main",{className:"flex-row justify-center mb-4",children:Object(v.jsx)("div",{className:"",children:Object(v.jsxs)("div",{className:"",children:[Object(v.jsx)("h4",{className:"classloginsignup bg-dark text-light p-2",children:"Login"}),Object(v.jsx)("p",{className:" p-2 pb-1",children:"Already have a account. Sign-In to view your recent searches and create your custom fit for every season!"}),Object(v.jsxs)("div",{className:"p-2",children:[j?Object(v.jsxs)("p",{children:["Success! You may now head"," ",Object(v.jsx)(g.b,{to:"/Users",children:"back to the homepage."})]}):Object(v.jsxs)("form",{onSubmit:u,children:[Object(v.jsx)("input",{className:"form-input mb-3",placeholder:"Your email",name:"email",type:"email",value:s.email,onChange:b}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"form-input mb-3",placeholder:"******",name:"password",type:"password",value:s.password,onChange:b}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{className:"is-rounded button is-primary is-outlined has-text-black  is-rounded city-button",style:{cursor:"pointer"},type:"submit",children:"Submit"})]}),o&&Object(v.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:o.message})]})]})})})},E=function(){return Object(v.jsxs)("main",{children:[Object(v.jsx)("div",{className:"flex-row justify-center",children:Object(v.jsx)("div",{className:" mb-3 p-3",children:Object(v.jsx)(A,{})})}),Object(v.jsx)("div",{className:"flex-row justify-center",children:Object(v.jsx)("div",{className:" mb-3 p-3",children:Object(v.jsx)(V,{})})})]})},J=function(){var e=Object(d.useState)(""),t=Object(R.a)(e,2),n=t[0],s=t[1],c=Object(d.useState)({}),i=Object(R.a)(c,2),r=i[0],a=i[1],l=Object(d.useState)({}),o=Object(R.a)(l,2),j=o[0],b=o[1];function h(){fetch("https://api.openweathermap.org/data/2.5/weather?q="+n+"&appid=f57cc3d88487e632b111d5d350ce8f21&units=imperial").then((function(e){return e.json()})).then((function(e){console.log("Here is the Weather data returned from the fetch call: ",e),b(e)}))}function u(){fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").then((function(e){return e.json()})).then((function(e){console.log("Here is the Drink data returned from the fetch call: ",e),a(e)}))}return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"dropdown is-mobile ",children:[Object(v.jsxs)("div",{className:"column is-fullwidth",children:[Object(v.jsx)("label",{className:"label",children:"Choose Weather"}),Object(v.jsx)("div",{className:"control is-fullwidth",children:Object(v.jsx)("div",{className:"select ",children:Object(v.jsxs)("select",{children:[Object(v.jsx)("option",{children:"Select dropdown"}),Object(v.jsx)("option",{children:"Sun"}),Object(v.jsx)("option",{children:"Clouds"}),Object(v.jsx)("option",{children:"Snow"}),Object(v.jsx)("option",{children:"Rain"}),Object(v.jsx)("option",{children:"Windy"})]})})})]}),Object(v.jsxs)("div",{className:"column",children:[Object(v.jsx)("label",{className:"label",children:"Choose Music"}),Object(v.jsx)("div",{className:"control is-fullwidth",children:Object(v.jsx)("div",{className:"select ",children:Object(v.jsxs)("select",{children:[Object(v.jsx)("option",{children:"Select dropdown"}),Object(v.jsx)("option",{children:"Jazz"}),Object(v.jsx)("option",{children:"Pop"}),Object(v.jsx)("option",{children:"Classic"}),Object(v.jsx)("option",{children:"Rap"})]})})})]}),Object(v.jsxs)("div",{className:"column is-mobile",children:[Object(v.jsx)("label",{className:"label",children:"Choose Liquor"}),Object(v.jsx)("div",{className:"control",children:Object(v.jsx)("div",{className:"select is-fu",children:Object(v.jsxs)("select",{children:[Object(v.jsx)("option",{children:"Select dropdown"}),Object(v.jsx)("option",{children:"Bourbon"}),Object(v.jsx)("option",{children:"whisky"}),Object(v.jsx)("option",{children:"Gin"}),Object(v.jsx)("option",{children:"Vodka"}),Object(v.jsx)("option",{children:"Brandy"}),Object(v.jsx)("option",{children:"Rum"}),Object(v.jsx)("option",{children:"Tequila"})]})})})]})]}),Object(v.jsxs)("div",{className:"column",children:[Object(v.jsxs)("div",{className:"pb-3",children:[Object(v.jsx)("label",{className:"label",children:"Enter a city name to see your recommended drink"}),Object(v.jsx)("input",{id:"userInput",className:"input is-info is-medium",type:"text",placeholder:"Please type your city name...",onChange:function(e){s(e.target.value)}})]}),Object(v.jsx)("button",{id:"weatherButton",className:"button is-info is-outlined has-text-black is-rounded city-button",onClick:function(){h(),u()},children:"Pick Your Poison"})]}),Object(v.jsx)("div",{class:"container",id:"issueContainer",children:Object(v.jsxs)("p",{class:"is-size-4 has-text-centered has-text-info has-background-info-light",children:[Object(v.jsx)("br",{}),j?"Here is the weather for: "+j.name:""]})}),Object(v.jsx)("div",{children:Object(v.jsxs)("p",{children:["Weather Condition: ",j.weather?j.weather[0].main:""," -"," ",j.weather?j.weather[0].description:"",Object(v.jsx)("br",{}),"Current Temperature: ",j.main?j.main.temp:""," "]})}),Object(v.jsx)("div",{class:"columns is-centered is-desktop",children:Object(v.jsx)("div",{class:"column is-6",children:Object(v.jsx)("div",{class:"tile is-parent has-text-centered p-5",children:Object(v.jsxs)("article",{class:"tile is-child box",children:[Object(v.jsx)("p",{id:"drink1Name",class:"drinkNames is-size-2 mb-5 has-text-info",children:r.drinks?"Drink Title: "+r.drinks[0].strDrink:""}),Object(v.jsxs)("figure",{class:"image is-4by3",children:[r.drinks?"Drink Title: "+r.drinks[0].strDrinkThumb:"",Object(v.jsx)("img",{id:"image",src:r.drinks?r.drinks[0].strDrinkThumb:"",alt:"Placeholder"})]}),Object(v.jsx)("button",{id:"btn",className:"button is-info is-outlined has-text-black is-rounded mt-4 recipe-button",children:Object(v.jsxs)(g.b,{to:{pathname:"/SingleDrink"},children:[" ","View Recipe"," "]})})]})})})})]})},M=function(){return Object(v.jsxs)("main",{children:[Object(v.jsx)("div",{className:"flex-row justify-center",children:Object(v.jsx)("div",{className:"mb-3 p-3",children:Object(v.jsx)(J,{})})}),Object(v.jsx)("div",{className:"flex-row justify-center",children:Object(v.jsx)("div",{className:"mb-3 p-3",children:Object(v.jsx)(N,{})})})]})},W=function(){var e=Object(d.useState)({}),t=Object(R.a)(e,2),n=t[0];t[1];return Object(v.jsx)("div",{children:Object(v.jsx)("div",{class:"columns is-centered is-desktop",children:Object(v.jsx)("div",{class:"column is-6",children:Object(v.jsx)("div",{class:"tile is-parent has-text-centered p-5",children:Object(v.jsxs)("article",{class:"tile is-child box",children:[Object(v.jsx)("p",{id:"drink1Name",class:"drinkNames is-size-2 mb-5 has-text-primary",children:n.drinks?"Drink Title: "+n.drinks[0].strDrink:""}),Object(v.jsx)("figure",{class:"image is-4by3",children:Object(v.jsx)("img",{id:"image",src:n.drinks?n.drinks[0].strDrinkThumb:"",alt:"Placeholder"})})]})})})})})},G=function(){return Object(v.jsx)("main",{children:Object(v.jsx)("div",{className:"flex-row justify-center",children:Object(v.jsx)("div",{className:" mb-3 p-3",children:Object(v.jsx)(W,{})})})})},K=function(){return Object(v.jsx)("header",{className:"hero is-info",children:Object(v.jsxs)("div",{className:"hero-body",children:[Object(v.jsxs)("div",{className:"container flex-row justify-space-between-lg justify-center align-center",children:[Object(v.jsx)(g.b,{className:"",to:"/",children:Object(v.jsx)("h1",{className:"title has-text-centered is-size-1 pb-3",children:"Pick Your Poison"})}),Object(v.jsx)("p",{className:"subtitle has-text-centered",children:"Let us pick your perfect cocktail."})]}),Object(v.jsx)("div",{className:"center",children:$.loggedIn()?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(g.b,{className:"btn btn-lg btn-info m-2",to:"/me",children:[$.getProfile().data.username,"'s profile"]}),Object(v.jsx)("button",{className:"btn btn-lg btn-light m-2",onClick:function(e){e.preventDefault(),$.logout()},children:"Logout"})]}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(g.b,{className:"button is-white is-outlined has-text-white  is-rounded city-button",to:"/Login-SignUp",children:"Login/Sign-Up"})})})]})})},Q=function(){return Object(v.jsx)("footer",{className:"w-100 mt-auto bg-secondary p-4",children:Object(v.jsxs)("div",{className:"container text-center mb-5",children:[Object(v.jsx)("strong",{children:"Pick Your Poison"})," by ",Object(v.jsx)("a",{href:"https://github.com/Hov92",children:"Dwayne Hovington"}),", ",Object(v.jsx)("a",{href:"https://github.com/dtmerrill",children:"Dana Merrill"}),", ",Object(v.jsx)("a",{href:"https://github.com/shatikka-mcknight",children:"Shatikka McKnight"}),", and ",Object(v.jsx)("a",{href:"https://github.com/HenryVernon",children:"Henry Vernon"}),"."]})})},X=Object(u.a)({uri:"/graphql"}),Z=Object(p.a)((function(e,t){var n=t.headers,s=localStorage.getItem("id_token");return{headers:Object(h.a)(Object(h.a)({},n),{},{authorization:s?"Bearer ".concat(s):""})}})),ee=new m.a({link:Z.concat(X),cache:new x.a});var te=function(){return Object(v.jsx)(O.a,{client:ee,children:Object(v.jsx)(g.a,{children:Object(v.jsx)(f.d,{children:Object(v.jsxs)("div",{className:"flex-column justify-flex-start min-100-vh",children:[Object(v.jsx)(K,{}),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(f.b,{exact:!0,path:"/",children:Object(v.jsx)(D,{})}),Object(v.jsx)(f.a,{to:"/"}),Object(v.jsx)(f.b,{exact:!0,path:"/",children:Object(v.jsx)(M,{})}),Object(v.jsx)(f.b,{exact:!0,path:"/Login-SignUp",children:Object(v.jsx)(E,{})}),Object(v.jsx)(f.b,{exact:!0,path:"/Users",children:Object(v.jsx)(L,{})}),Object(v.jsx)(f.b,{exact:!0,path:"/SingleDrink",children:Object(v.jsx)(G,{})})]}),Object(v.jsx)(Q,{})]})})})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),i(e),r(e)}))};b.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(te,{})}),document.getElementById("root")),ne()}},[[74,1,2]]]);
//# sourceMappingURL=main.5ef1b999.chunk.js.map