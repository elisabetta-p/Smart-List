(this["webpackJsonpsmart-list"]=this["webpackJsonpsmart-list"]||[]).push([[0],{258:function(e,t,a){e.exports=a(635)},263:function(e,t,a){},483:function(e,t,a){},635:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(18),s=a.n(i),l=(a(263),a(9)),o=a(35),r=a(10),u=a(244),m=a.n(u),d=a(7),b=a(8),p=function(){return{type:"LOAD_LISTS",payload:[].concat([{id:0,name:"Cibo da comprare",items:[{id:0,name:"zucchine",description:"molto buone",isFav:!0,category:0,isChecked:!0},{id:1,name:"scalogno",description:"rubatissimo",isFav:!0,category:0,isChecked:!1},{id:2,name:"scalogno",description:"rubatissimo",isFav:!1,category:0,isChecked:!1},{id:3,name:"scalogno",description:"rubatissimo",isFav:!1,category:0,isChecked:!1},{id:4,name:"scalogno",description:"rubatissimo",isFav:!1,category:0,isChecked:!1},{id:5,name:"giacca",description:"rubatissimo",isFav:!1,category:1,isChecked:!1},{id:6,name:"cose 1",description:"rubatissimo",isFav:!1,category:2,isChecked:!1},{id:7,name:"cose 2",description:"rubatissimo",isFav:!0,category:2,isChecked:!1}],categories:[{id:0,label:"Food"},{id:1,label:"Clothes"},{id:2,label:"Stuff"}]},{id:1,name:"Seconda lista",items:[],categories:[{id:0,label:"Food"}]},{id:2,name:"AAA",categories:[{id:0,label:"Food"},{id:1,label:"Clothes"},{id:2,label:"Stuff"}],items:[{id:0,name:"zucchine",description:"molto buone",isFav:!0,category:0,isChecked:!1},{id:1,name:"scalogno",description:"rubatissimo",isFav:!0,category:0,isChecked:!1},{id:2,name:"scalogno",description:"rubatissimo",isFav:!0,category:0,isChecked:!1},{id:3,name:"scalogno",description:"rubatissimo",isFav:!0,category:0,isChecked:!1},{id:4,name:"scalogno",description:"rubatissimo",isFav:!0,category:0,isChecked:!1},{id:5,name:"giacca",description:"rubatissimo",isFav:!0,category:1,isChecked:!1},{id:6,name:"cose 1",description:"rubatissimo",isFav:!0,category:2,isChecked:!1},{id:7,name:"cose 2",description:"rubatissimo",isFav:!0,category:2,isChecked:!1}]},{id:3,name:"BBB",categories:[{id:0,label:"Food"}],items:[{id:0,name:"zucchine",description:"molto buone",isFav:!0,category:0,isChecked:!1},{id:1,name:"scalogno",description:"rubatissimo",isFav:!0,category:0,isChecked:!1},{id:2,name:"scalogno",description:"rubatissimo",isFav:!0,category:0,isChecked:!1},{id:3,name:"scalogno",description:"rubatissimo",isFav:!0,category:0,isChecked:!1},{id:4,name:"scalogno",description:"rubatissimo",isFav:!0,category:0,isChecked:!1}]},{id:4,name:"CCC",categories:[{id:0,label:"Food"}],items:[{id:0,name:"zucchine",description:"molto buone",isFav:!0,category:0,isChecked:!1},{id:1,name:"scalogno",description:"rubatissimo",isFav:!0,category:0,isChecked:!1},{id:2,name:"scalogno",description:"rubatissimo",isFav:!0,category:0,isChecked:!1},{id:3,name:"scalogno",description:"rubatissimo",isFav:!0,category:0,isChecked:!1}]},{id:5,name:"DDD",categories:[{id:0,label:"Food"},{id:1,label:"Clothes"},{id:2,label:"Stuff"}],items:[{id:0,name:"zucchine",description:"molto buone",isFav:!0,category:0,isChecked:!1},{id:1,name:"scalogno",description:"rubatissimo",isFav:!0,category:0,isChecked:!1},{id:2,name:"scalogno",description:"rubatissimo",isFav:!0,category:0,isChecked:!1},{id:3,name:"scalogno",description:"rubatissimo",isFav:!0,category:0,isChecked:!1},{id:4,name:"scalogno",description:"rubatissimo",isFav:!0,category:0,isChecked:!1}]}])}},g=function(){return{type:"GET_TODOS",payload:[].concat([{id:0,name:"todo list 1",items:[],categories:[]},{id:1,name:"todo list 2",items:[],categories:[]}])}},f=function(e,t,a,n){return function(c,i){if("shopping"===t)c(function(e,t,a,n){var c={id:e.length,name:t,categories:Object(b.a)(a),sharingWith:Object(b.a)(n),items:[]};return e.push(c),{type:"CREATE_SHOPPING_LIST",payload:Object(b.a)(e)}}(Object(b.a)(i().lists.shoppingLists),e,a,n));else if("todo"===t){c(function(e,t,a,n){var c={id:e.length,name:t,categories:Object(b.a)(a),sharingWith:Object(b.a)(n),items:[]};return e.push(c),{type:"ADD_TODOLIST",payload:Object(b.a)(e)}}(Object(b.a)(i().lists.todoLists),e,a,n))}}},h=function(e,t){return function(a,n){var c=Object(d.a)({},n().lists.listDisplayed);if(0!==Object.keys(c).length&&c.constructor===Object&&a(O()),"shopping"===t){var i=Object(b.a)(n().lists.shoppingLists);a(function(e,t){var a=t.find((function(t){return t.id===e}));if(a.type="shopping",console.log(a),a)return{type:"LOAD_SHOPPING_LIST_IN_HOMEPAGE",payload:Object(d.a)({},a)}}(e,i))}if("todo"===t){var s=Object(b.a)(n().lists.todoLists);a(function(e,t){var a=t.find((function(t){return t.id===e}));if(a.type="todo",console.log(a),a)return{type:"LOAD_TODO_LIST_IN_HOMEPAGE",payload:Object(d.a)({},a)}}(e,s))}}},O=function(){return{type:"CLEAR_DISPLAYED_LIST"}},E=function(e,t,a,n,c){var i={name:t,description:a,isFav:n,category:c};return function(t,a){var n=Object(b.a)(a().lists.shoppingLists),c=Object(d.a)({},a().lists.listDisplayed);c.items=[].concat(Object(b.a)(c.items),[i]),n.forEach((function(t){t.id===e&&(t.items=[].concat(Object(b.a)(t.items),[i]))})),t({type:"ADD_ITEM_TO_SHOPPING_LIST",newShoppingList:Object(b.a)(n),newListDisplayed:Object(d.a)({},c)})}},y=function(e){return function(t,a){var n=Object(d.a)({},a().lists.listDisplayed);a().lists.listDisplayed.categories?n.categories=[].concat(Object(b.a)(a().lists.listDisplayed.categories),[{id:a().user.categories.length,label:e}]):n.categories=[{id:a().user.categories.length,label:e}],t({type:"ADD_NEW_CATEGORY_TO_LIST_DISPLAYED",newListDisplayed:Object(d.a)({},n)})}},j=function(){return{type:"GET_CATEGORIES",payload:[].concat([{id:0,name:"Food"},{id:1,name:"Clothes"},{id:2,name:"Stuff"},{id:3,name:"AAA"}])}},v=function(e){return function(t,a){var n=[].concat(Object(b.a)(a().user.categories),[{id:a().user.categories.length,name:e}]);t({type:"ADD_CATEGORY",payload:Object(b.a)(n)})}},S=a(74),C=a.n(S),N=a(19),w=a(111),I=function(e){var t=Object(o.a)().handleSubmit,a=Object(r.b)(),i=Object(N.f)(),s=Object(n.useState)(null),u=Object(l.a)(s,2),d=u[0],b=u[1],p=Object(n.useState)(null),g=Object(l.a)(p,2),f=g[0],h=g[1],O=Object(n.useRef)(null),E=Object(n.useState)(null),y=Object(l.a)(E,2),j=y[0],v=y[1];Object(n.useEffect)((function(){O.current.focus()}),[]),Object(n.useEffect)((function(){d&&f&&v(null)}),[d,f]);return c.a.createElement("div",{className:"login-container"},c.a.createElement(C.a,{width:"".concat(window.innerWidth,"px"),height:"".concat(window.innerHeight,"px"),params:{particles:{number:{value:160,density:{enable:!1}},size:{value:3,random:!0,anim:{speed:5,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}},interactivity:{events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"}},modes:{bubble:{distance:250,duration:2,size:0,opacity:0},repulse:{distance:400,duration:4}}}}}),c.a.createElement("div",{className:"form-login-container"},c.a.createElement("h1",{className:"hello"},"Hello",d?", ".concat(d):null),c.a.createElement("form",{onSubmit:t((function(){localStorage.setItem("username",d),d&&f&&!j?(a(function(e,t){return localStorage.setItem("username",e),function(a){var n={username:e,password:t};return m.a.post("".concat("http://localhost:9487","/users/login"),n).then((function(e){e&&(localStorage.setItem("username",e.data.username),localStorage.setItem("userId",e.data.userId))})).catch((function(e){console.log(e.message)})),{type:"LOGIN",payload:e}}}(d,f)),i.push("/profile/".concat(localStorage.getItem("username").toLocaleLowerCase()))):v("Please insert username and password")})),className:"form"},c.a.createElement("input",{name:"username",placeholder:"Insert your username",type:"text",ref:O,className:"input",onChange:function(e){b(e.target.value)}}),c.a.createElement("input",{name:"password",placeholder:"Insert your password",type:"password",className:"input",onChange:function(e){h(e.target.value)}}),c.a.createElement("p",{className:"error-message"},j),c.a.createElement("input",{type:"submit",value:"Login",className:"button",style:{width:"5.5rem"}}),c.a.createElement(w.b,{to:"/signup"},c.a.createElement("button",{className:"button",style:{width:"5.5rem"}},"Sign up")))))},L=(a(482),a(483),function(e){var t=Object(o.a)().handleSubmit,a=Object(r.b)(),i=Object(n.useState)(null),s=Object(l.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(null),b=Object(l.a)(d,2),p=b[0],g=b[1],f=Object(n.useState)(null),h=Object(l.a)(f,2),O=h[0],E=h[1],y=Object(n.useState)(null),j=Object(l.a)(y,2),v=j[0],S=j[1],w=Object(n.useState)(null),I=Object(l.a)(w,2),L=I[0],_=I[1],D=Object(n.useState)(null),T=Object(l.a)(D,2),x=T[0],k=T[1],A=Object(n.useRef)();Object(n.useEffect)((function(){localStorage.clear(),A.current.focus()}),[]),Object(n.useEffect)((function(){if(O){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(O).toLowerCase())?S(null):S("Email format not valid")}}),[O]),Object(n.useEffect)((function(){u&&(u.length<3&&g("The chosen username is too short"),u.length>32&&g("The chosen username is too long"),u.length>=3&&u.length<=32&&g(null))}),[u]),Object(n.useEffect)((function(){L&&(L.length<3&&k("The chosen password is too short"),L.length>32&&k("The chosen password is too long"),L.length>=3&&L.length<=32&&k(null))}),[L]);var P=Object(N.f)();return c.a.createElement("div",{className:"login-container"},c.a.createElement(C.a,{width:"".concat(window.innerWidth,"px"),height:"".concat(window.innerHeight,"px"),params:{particles:{number:{value:160,density:{enable:!1}},size:{value:3,random:!0,anim:{speed:5,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}},interactivity:{events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"}},modes:{bubble:{distance:250,duration:2,size:0,opacity:0},repulse:{distance:400,duration:4}}}}}),c.a.createElement("div",{className:"form-login-container"},c.a.createElement("h1",{className:"hello"},"Welcome",u?", ".concat(u):null),c.a.createElement("form",{onSubmit:!p&&!v&&!x&&u&&L&&O?t((function(){localStorage.setItem("username",u),a(function(e,t,a,n){return localStorage.setItem("username",a),{type:"SIGNUP"}}(0,0,L)),P.push("/profile/".concat(localStorage.getItem("username").toLocaleLowerCase()))})):null,className:"form"},c.a.createElement("input",{name:"username",placeholder:"Insert your username",type:"text",ref:A,className:"input",onChange:function(e){return m(e.target.value)}}),c.a.createElement("p",{className:"error-message"},p),c.a.createElement("input",{name:"email",placeholder:"Insert your email",type:"email",onChange:function(e){E(e.target.value)},className:"input"}),c.a.createElement("p",{className:"error-message"},v),c.a.createElement("input",{name:"password",placeholder:"Insert your password",type:"password",onChange:function(e){_(e.target.value),console.log(L)},className:"input"}),c.a.createElement("p",{className:"error-message"},x),c.a.createElement("input",{type:"submit",value:"Confirm",className:"button",style:{width:"5.5rem"}}),c.a.createElement("button",{onClick:function(e){e.preventDefault(),P.goBack()},className:"button",style:{width:"5.5rem"}},"Go back"))))}),_=a(662),D=a(59),T=a(58),x=a(660),k=a(664),A=a(659),P=a(79),F=a(245),G=function(e){var t=Object(r.b)();Object(n.useEffect)((function(){t({type:"GET_USERS",payload:[].concat(["boba","banana","prokkius"])})}),[t]);var a=Object(r.c)((function(e){return e.lists.users})),i=[188,13],s=Object(n.useState)([]),o=Object(l.a)(s,2),u=o[0],m=o[1],d=Object(n.useState)(null),p=Object(l.a)(d,2),g=p[0],f=p[1],h=e.users;Object(n.useEffect)((function(){h(u),f(null)}),[u,h]);return c.a.createElement("div",null,c.a.createElement("p",{className:"text-modal"},"Share with"),c.a.createElement("span",null,c.a.createElement(F.WithContext,{tags:u,handleDelete:function(e){var t=u.filter((function(t,a){return a!==e}));m(Object(b.a)(t))},handleAddition:function(e){a.includes(e.text)?m((function(t){return[].concat(Object(b.a)(t),[e])})):f("The user ".concat(e.text," does not exist"))},delimiters:i,allowUnique:!0,classNames:{tagInputField:"input input-new-list",tag:"tag",tagInput:"tagInput",tags:"tags",remove:"removeTag",selected:"selected"},allowDragDrop:!1,inputFieldPosition:"bottom",placeholder:"Write the usernames",autofocus:!1})),g?c.a.createElement("p",{className:"error-message"},g):null)},z=function(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),i=a[0],s=a[1],o=e.type;return Object(n.useEffect)((function(){o(i)}),[i,o]),c.a.createElement("div",null,c.a.createElement("p",{className:"text-modal"},"What kind of list is this?"),c.a.createElement(P.a,{options:[{value:"shopping",label:"Shopping list"},{value:"todo",label:"Todo list"}],onChange:function(e){e&&s(e.value)},styles:{menuPortal:function(e){return Object(d.a)(Object(d.a)({},e),{},{zIndex:9999})}},isSearchable:!0,menuPortalTarget:document.body,className:"select-add-list",isClearable:!0}))},H=function(e){var t=Object(r.c)((function(e){return e.user.categories})),a=Object(n.useState)([]),i=Object(l.a)(a,2),s=i[0],o=i[1],u=t.map((function(e){return{value:e.id,label:e.name}})),m=e.categories;return Object(n.useEffect)((function(){m(s)}),[s,m]),c.a.createElement("div",null,c.a.createElement("p",{className:"text-modal"},"Select all the categories"),c.a.createElement(P.a,{options:u,isMulti:!0,onChange:function(e){e&&0!==e.length&&o((function(t){return[].concat(Object(b.a)(t),[{id:e[e.length-1].value,label:e[e.length-1].label}])}))},styles:{menuPortal:function(e){return Object(d.a)(Object(d.a)({},e),{},{zIndex:9999})}},isSearchable:!0,menuPortalTarget:document.body,className:"select-add-list",isClearable:!0})," ")},B=function(e){e.createShoppingList;var t=e.onClose,a=Object(T.a)(e,["createShoppingList","onClose"]),i=Object(o.a)().handleSubmit,s=Object(r.b)(),u=Object(r.c)((function(e){return e.lists.shoppingLists.map((function(e){return e.name}))})),m=Object(r.c)((function(e){return e.lists.todoLists.map((function(e){return e.name}))})),d=Object(n.useState)(null),b=Object(l.a)(d,2),p=b[0],g=b[1],h=Object(n.useState)(null),O=Object(l.a)(h,2),E=O[0],y=O[1],j=Object(n.useState)([]),v=Object(l.a)(j,2),S=v[0],C=v[1],N=Object(n.useState)([]),w=Object(l.a)(N,2),I=w[0],L=w[1],_=Object(n.useState)(null),D=Object(l.a)(_,2),P=D[0],F=D[1],B=Object(n.useState)(null),R=Object(l.a)(B,2),M=R[0],W=R[1],Y=Object(n.useState)(null),K=Object(l.a)(Y,2),U=K[0],q=K[1],J=Object(n.useCallback)((function(e){null!==e&&e.focus()}),[]);Object(n.useEffect)((function(){S||q("Select at least one category")}),[S,E]),Object(n.useEffect)((function(){""===p?F("Please write a name"):p&&(p.length<3&&W("List name is too short"),p.length>32&&W("List name is too long"),p.length<=32&&p.length>=3&&W(null))}),[p]);return c.a.createElement(x.a,Object.assign({},a,{onClose:t}),c.a.createElement("div",{className:"colorfulBg"},c.a.createElement("form",{onSubmit:P||U||M?null:i((function(e,t){t.preventDefault(),s(f(p,E,S,I))}))},c.a.createElement(k.a,{className:"modal-title"},c.a.createElement("strong",null,"Create a new list")),c.a.createElement(A.a,null,c.a.createElement("input",{id:"name",type:"text",name:"name",placeholder:"Insert the name of the new todo list",ref:J,className:"input input-new-list",onChange:function(e){return g(e.target.value)}}),c.a.createElement("p",{className:"error-message",style:{marginBottom:"1rem"}},P),c.a.createElement("p",{className:"error-message",style:{marginBottom:"1rem"}},M),c.a.createElement(z,{type:y}),c.a.createElement("p",{className:"error-message",style:{marginBottom:"1rem"}},U),c.a.createElement(H,{categories:C,style:{position:"relative",Index:"5000"}}),c.a.createElement(G,{users:L}),c.a.createElement("span",{style:{display:"flex",justifyContent:"center"}},c.a.createElement("input",{type:"submit",className:"button",value:"Add the new list",onClick:function(e){(function(){var e=!1;if(E||(q("Select a type of list to add"),e=!0),"shopping"===E){var t=u.includes(document.getElementById("name").value);t?(F("A shopping list with this name already exists"),e=!0):t||(F(null),e=!1)}return"todo"===E&&(m.includes(document.getElementById("name").value)?(F("A todo list with this name already exists"),e=!0):(F(null),e=!1)),e})()||M||P?e.preventDefault():t()},style:{display:"flex",justifyContent:"center"}}))))))},R=a(62),M=function(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),i=a[0],s=a[1],o=Object(n.useState)(null),u=Object(l.a)(o,2),m=u[0],p=u[1],g=Object(r.c)((function(e){return Object(b.a)(e.user.categories)})),f=Object(r.c)((function(e){return e.user.categories.map((function(e){return e.name}))})),h=Object(n.useState)(null),O=Object(l.a)(h,2),E=O[0],y=O[1],j=g.map((function(e){return{value:e.id,label:e.name}})),v=e.category,S=e.editedCategoryName,C=e.idToEdit,N=e.errorModifiedCategory;return Object(n.useEffect)((function(){v(i),S(m),N(E)}),[i,v,S,C,m,N,E]),c.a.createElement("div",{className:"select-manage-categories"},c.a.createElement(P.a,{options:j,onChange:function(e){e&&s(e.value)},styles:{menuPortal:function(e){return Object(d.a)(Object(d.a)({},e),{},{zIndex:9999})}},isSearchable:!0,isClearable:!0,menuPortalTarget:document.body,className:"select-add-list ",placeholder:"Select the category you want to edit"}),c.a.createElement("input",{id:"newName",type:"text",name:"newName",placeholder:"Insert the new name",className:"input input-new-item",style:{margin:"0"},onChange:function(e){f.includes(e.target.value)?y("A category with that name already exists"):(y(null),p(e.target.value))}}),c.a.createElement("p",{className:"error-message"},E))},W=function(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),i=a[0],s=a[1],o=Object(r.c)((function(e){return Object(b.a)(e.user.categories)})).map((function(e){return{value:e.id,label:e.name}})),u=e.category;return Object(n.useEffect)((function(){u(i)}),[i,u]),c.a.createElement(P.a,{options:o,onChange:function(e){e&&s(e.value)},styles:{menuPortal:function(e){return Object(d.a)(Object(d.a)({},e),{},{zIndex:9999})}},isSearchable:!0,isClearable:!0,menuPortalTarget:document.body,className:"select-add-list",placeholder:"Select the category you want to delete"})},Y=function(e){e.createShoppingList;var t=e.onClose,a=Object(T.a)(e,["createShoppingList","onClose"]),i=Object(o.a)().handleSubmit,s=Object(n.useState)(null),u=Object(l.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)(null),g=Object(l.a)(p,2),f=g[0],h=g[1],O=Object(n.useState)(null),E=Object(l.a)(O,2),y=E[0],j=E[1],S=Object(n.useState)(null),C=Object(l.a)(S,2),N=C[0],w=C[1],I=Object(n.useState)(null),L=Object(l.a)(I,2),_=L[0],D=L[1],P=Object(n.useState)(null),F=Object(l.a)(P,2),G=F[0],z=F[1],H=Object(r.b)(),B=Object(r.c)((function(e){return e.user.categories.map((function(e){return e.name}))}));return c.a.createElement(x.a,Object.assign({},a,{onClose:t}),c.a.createElement("div",{className:"colorfulBg"},c.a.createElement("form",{onSubmit:f||_?null:i((function(e,t){var a,n;t.preventDefault(),m&&H(v(m)),N&&H((a=N,n=y,function(e,t){var c=Object(b.a)(t().user.categories);c.forEach((function(e){e.id===a&&(e.name=n)})),e({type:"EDIT_CATEGORY",payload:Object(b.a)(c)})})),G&&H(function(e){return function(t,a){var n=Object(b.a)(a().user.categories).filter((function(t){return t.id!==e}));t({type:"DELETE_CATEGORY",payload:Object(b.a)(n)})}}(G))}))},c.a.createElement(k.a,{className:"modal-title"},c.a.createElement("strong",null,"Manage the categories")),c.a.createElement(A.a,null,c.a.createElement(R.a,{style:{display:"flex",flexDirection:"column",height:"100%"}},c.a.createElement(R.a.Toggle,{eventKey:"0",className:"button header-button "},"Add a new category"),c.a.createElement(R.a.Collapse,{eventKey:"0"},c.a.createElement("div",{className:"select-manage-categories"},c.a.createElement("input",{id:"name",type:"text",name:"name",placeholder:"Insert the name of the new category",className:"input input-new-item",style:{margin:"0"},onChange:function(e){B.includes(e.target.value)?h("A category with that name already exists!"):(h(null),d(e.target.value))}}),c.a.createElement("p",{className:"error-message"},f))),c.a.createElement(R.a.Toggle,{eventKey:"1",className:"button header-button "},"Edit an existing category"),c.a.createElement(R.a.Collapse,{eventKey:"1"},c.a.createElement("div",null,c.a.createElement(M,{category:w,editedCategoryName:j,errorModifiedCategory:D}))),c.a.createElement(R.a.Toggle,{eventKey:"2",className:"button header-button "},"Delete an existing category"),c.a.createElement(R.a.Collapse,{eventKey:"2"},c.a.createElement("div",{className:"select-manage-categories"},c.a.createElement(W,{category:z})))),c.a.createElement("span",{style:{display:"flex",justifyContent:"center"}},c.a.createElement("input",{type:"submit",className:"button",value:"Confirm",onClick:function(e){f||_?e.preventDefault():t()},style:{display:"flex",justifyContent:"center"}}))))))},K=function(){var e=Object(N.f)(),t=Object(D.b)((function(e){var t=e.in,a=e.onExited;return c.a.createElement(B,{open:t,onExited:a,onClose:i})})),a=Object(l.a)(t,2),n=a[0],i=a[1],s=Object(D.b)((function(e){var t=e.in,a=e.onExited;return c.a.createElement(Y,{open:t,onExited:a,onClose:u})})),o=Object(l.a)(s,2),r=o[0],u=o[1];return c.a.createElement("div",{className:"header-container"},c.a.createElement(C.a,{width:"".concat(window.innerWidth,"px"),height:"10vh",params:{particles:{number:{value:60,density:{enable:!1}},size:{value:3,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}},interactivity:{events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"}},modes:{bubble:{distance:250,duration:2,size:0,opacity:0},repulse:{distance:400,duration:4}}}}}),c.a.createElement("div",{className:"content-header-container"},c.a.createElement("header",null,c.a.createElement("span",null,c.a.createElement("h1",{className:"hello-profile"},"Hello, ",localStorage.getItem("username"))),c.a.createElement("span",{className:"header-right"},c.a.createElement("button",{className:"button header-button",onClick:r},"Manage the categories"),c.a.createElement("button",{className:"button header-button",onClick:n},"Create a new list"),c.a.createElement(_.a,{className:"header-icon",onClick:function(){localStorage.clear(),e.push("/")}}))))," ")},U=a(52),q=function(){var e=Object(r.c)((function(e){return e.lists.shoppingLists})),t=Object(n.useState)(!0),a=Object(l.a)(t,2),i=a[0],s=a[1],o=Object(r.b)();return c.a.createElement("div",null,c.a.createElement("h3",{className:"category-name-in-list",style:{cursor:"pointer"},onClick:function(){s(!i)}},"Shopping lists"),c.a.createElement(U.a,null,i&&c.a.createElement(U.c.ul,{layout:!0,initial:{opacity:0,height:"0px"},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:"0px"},transition:{duration:.35}},c.a.createElement(U.c.ul,{animate:{opacity:i?1:0},transition:{duration:.15}},c.a.createElement("ul",{className:"scroll-items menu-items"},e.map((function(e,t){return c.a.createElement("li",{key:t,className:"menu-list-name",onClick:function(){o(h(e.id,"shopping"))}},e.name)})))))))},J=function(){var e=Object(r.c)((function(e){return e.lists.todoLists})),t=Object(n.useState)(!0),a=Object(l.a)(t,2),i=a[0],s=a[1],o=Object(r.b)();return c.a.createElement("div",null,c.a.createElement("h3",{className:"category-name-in-list",style:{cursor:"pointer"},onClick:function(){s(!i)}},"To do lists"),c.a.createElement(U.a,null,i&&c.a.createElement(U.c.ul,{layout:!0,initial:{opacity:0,height:"0px"},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:"0px"},transition:{duration:.35}},c.a.createElement(U.c.ul,{animate:{opacity:i?1:0},transition:{duration:.15}},c.a.createElement("ul",{className:"scroll-items menu-items"},e.map((function(e,t){return c.a.createElement("li",{key:t,className:"menu-list-name",onClick:function(){o(h(e.id,"todo"))}},e.name)})))))))},X=function(){return c.a.createElement("div",{className:"menu-lists"},c.a.createElement("div",{className:"menu-lists-container"},c.a.createElement(U.b,null,c.a.createElement(U.c.ul,{layout:!0,initial:{height:"auto"}},c.a.createElement(q,null),c.a.createElement(J,null)))))},Z=a(663),$=function(e){var t=Object(r.c)((function(e){return e.user.categories})),a=Object(r.b)(),n=Object(r.c)((function(e){return Object(b.a)(e.lists.listDisplayed.items)})),i=function(e){return n.map((function(t,n){return t.category===e?c.a.createElement("tr",{key:n,className:"single-item-in-list"},c.a.createElement("td",{style:{width:"1rem"}},c.a.createElement("input",{type:"checkbox",className:"inside-td",checked:t.isChecked,onChange:function(){var e;a((e=t.id,function(t,a){var n=Object(d.a)({},a().lists.listDisplayed);n.items.forEach((function(t){t.id===e&&(t.isChecked=!t.isChecked)})),t({type:"CHECK_ITEM",payload:Object(d.a)({},n)})}))}})),c.a.createElement("td",null," ",c.a.createElement("span",{className:"inside-td"},t.name)),c.a.createElement("td",null,t.isFav?c.a.createElement(Z.a,{twoToneColor:"#faaca8"}):null),c.a.createElement("td",{style:{width:"4rem"}},c.a.createElement("button",{className:"button button-list button-inside-td"},"Edit item")),c.a.createElement("td",{style:{width:"4rem"}},c.a.createElement("button",{className:"button button-list button-inside-td delete-button"},"Delete item"))):null}))},s=function(){var t=e.list.items.map((function(e){return e.category})),a=new Set(t);return Object(b.a)(a)}(e.list),l=Object(b.a)(function(e){var a=[];return e.forEach((function(e){t.map((function(t){t.id===e&&(a=[].concat(Object(b.a)(a),[{name:t.name,id:t.id}]))}))})),a}(s));return c.a.createElement("div",{id:"display-list"},c.a.createElement("table",null,l.map((function(e,t){return c.a.createElement(c.a.Fragment,{key:t},c.a.createElement("thead",{className:"list-name-homepage category-name-display"},e.name),c.a.createElement("tbody",null,i(e.id)))}))))},V=a(117),Q=function(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),i=a[0],s=a[1],o=Object(n.useState)(null),u=Object(l.a)(o,2),m=u[0],p=u[1],g=Object(r.b)(),f=Object(r.c)((function(e){return e.user.categories.length})),h=Object(r.c)((function(e){return Object(b.a)(e.user.categories.map((function(e){return e.name})))})),O=Object(r.c)((function(e){return Object(b.a)(e.lists.listDisplayed.categories)})).map((function(e){return{value:e.id,label:e.label}})),E=e.categories;return Object(n.useEffect)((function(){E(i)}),[i,E,h]),c.a.createElement("div",null,c.a.createElement("p",{className:"text-modal"},"Select all the categories"),c.a.createElement(V.a,{options:O,onChange:function(e){e&&(e.__isNew__?h.includes(e.label)?p("A category with that name already exists! Please link it to this list, if needed."):(p(null),g(v(e.label)),g(y(e.label)),s(f)):s(e.value))},styles:{menuPortal:function(e){return Object(d.a)(Object(d.a)({},e),{},{zIndex:9999})}},isSearchable:!0,isClearable:!0,menuPortalTarget:document.body,className:"select-add-list"}),c.a.createElement("p",{className:"error-message"},m))},ee=function(e){e.createShoppingList;var t=e.onClose,a=Object(T.a)(e,["createShoppingList","onClose"]),i=Object(o.a)(),s=i.register,u=i.handleSubmit,m=Object(n.useState)(null),d=Object(l.a)(m,2),b=d[0],p=d[1],g=Object(n.useState)(null),f=Object(l.a)(g,2),h=f[0],O=f[1],y=Object(n.useState)(null),j=Object(l.a)(y,2),v=j[0],S=j[1],C=Object(n.useState)(null),N=Object(l.a)(C,2),w=N[0],I=N[1],L=Object(n.useState)(!1),_=Object(l.a)(L,2),D=_[0],P=_[1],F=Object(r.c)((function(e){return e.lists.listDisplayed.id})),G=Object(n.useCallback)((function(e){null!==e&&e.focus()}),[]);Object(n.useEffect)((function(){b&&(b.length<3&&I("The item name is too short"),b.length>32&&I("The item name is too long"),b.length>=3&&b.length<=32&&I(null))}),[b]);var z=Object(r.b)();return c.a.createElement(x.a,Object.assign({},a,{onClose:t}),c.a.createElement("div",{className:"colorfulBg"},c.a.createElement("form",{onSubmit:u((function(e,t){t.preventDefault(),z(E(F,b,e.description,D,h))}))},c.a.createElement(k.a,{className:"modal-title"},c.a.createElement("strong",null,"Add a shopping item")),c.a.createElement(A.a,null,c.a.createElement("div",{style:{display:"flex",alignItems:"center"}},c.a.createElement("input",{id:"name",type:"text",name:"name",placeholder:"Insert the name of the new todo list",ref:G,className:"input input-new-item",style:{margin:"0"},onChange:function(e){p(e.target.value)}}),c.a.createElement(Z.a,{twoToneColor:D?"#faaca8":"#fff",onClick:function(){P(!D)},style:{marginLeft:"1rem",fontSize:"1.5em"}})),c.a.createElement("p",{className:"error-message",style:{marginBottom:"1rem"}},v),c.a.createElement("p",{className:"error-message",style:{marginBottom:"1rem"}},w),c.a.createElement("textarea",{id:"description",name:"description",placeholder:"Insert a description",ref:s({required:{value:!1}}),className:"input input-new-item input-description scroll-items"}),c.a.createElement(Q,{categories:O,style:{position:"relative",Index:"5000"}}),c.a.createElement("span",{style:{display:"flex",justifyContent:"center"}},c.a.createElement("input",{type:"submit",className:"button",value:"Add the new item",onClick:function(e){(function(){var e=!1;return""===document.getElementById("name").value&&(S("Please write a name"),e=!0),e})()&&!w?e.preventDefault():t()},style:{display:"flex",justifyContent:"center"}}))))))},te=a(251),ae=a.n(te),ne=(a(578),a(579),function(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),i=a[0],s=a[1],o=Object(n.useState)(null),u=Object(l.a)(o,2),m=u[0],p=u[1],g=Object(r.c)((function(e){return Object(b.a)(e.user.categories.map((function(e){return e.name})))})),f=Object(r.b)(),h=Object(r.c)((function(e){return e.user.categories.length})),O=Object(r.c)((function(e){return e.lists.listDisplayed.categories?Object(b.a)(e.lists.listDisplayed.categories):[]})).map((function(e){return{value:e.id,label:e.label}})),E=e.categories;return Object(n.useEffect)((function(){E(i)}),[i,E]),c.a.createElement("div",null,c.a.createElement("p",{className:"text-modal"},"Select all the categories"),c.a.createElement(V.a,{options:O,onChange:function(e){e&&(e.__isNew__?g.includes(e.label)?p("A category with that name already exists! Please link it to this list, if needed."):(p(null),f(v(e.label)),f(y(e.label)),s(h)):s(e.value))},styles:{menuPortal:function(e){return Object(d.a)(Object(d.a)({},e),{},{zIndex:9999})}},isSearchable:!0,isClearable:!0,menuPortalTarget:document.body,className:"select-add-list"}),c.a.createElement("p",{className:"error-message"},m))}),ce=function(e){e.createShoppingList;var t=e.onClose,a=Object(T.a)(e,["createShoppingList","onClose"]),i=Object(o.a)(),s=i.register,u=i.handleSubmit,m=Object(n.useState)(null),d=Object(l.a)(m,2),b=d[0],p=d[1],g=Object(n.useState)(null),f=Object(l.a)(g,2),h=f[0],O=f[1],y=Object(n.useState)(!1),j=Object(l.a)(y,2),v=j[0],S=j[1],C=Object(r.c)((function(e){return e.lists.listDisplayed.id})),N=Object(n.useState)(null),w=Object(l.a)(N,2),I=w[0],L=w[1],_=Object(r.b)();return c.a.createElement(x.a,Object.assign({},a,{onClose:t}),c.a.createElement("div",{className:"colorfulBg"},c.a.createElement("form",{onSubmit:u((function(e,t){t.preventDefault(),_(E(C,e.name,e.description,v,b))}))},c.a.createElement(k.a,{className:"modal-title"},c.a.createElement("strong",null,"Add a new task")),c.a.createElement(A.a,null,c.a.createElement("div",{style:{display:"flex",alignItems:"center"}},c.a.createElement("input",{id:"name",type:"text",name:"name",placeholder:"Insert the name of the new task",ref:s({required:{value:!0,message:"Please insert a name"},minLength:{value:3,message:"Name too short"},maxLength:{value:32,message:"Name too long"}}),className:"input input-new-item",style:{margin:"0"}}),c.a.createElement(Z.a,{twoToneColor:v?"#faaca8":"#fff",onClick:function(){S(!v)},style:{marginLeft:"1rem",fontSize:"1.5em"}})),c.a.createElement("p",{className:"error-message",style:{marginBottom:"1rem"}},h),c.a.createElement("textarea",{id:"description",name:"description",placeholder:"Insert a description",ref:s({required:{value:!1}}),className:"input input-new-item input-description scroll-items"}),c.a.createElement(ne,{categories:p,style:{position:"relative",Index:"5000"}}),c.a.createElement(ae.a,{selected:I,onChange:function(e){return L(e)},showTimeSelect:!0,dateFormat:"MMMM d, yyyy h:mm aa",style:{position:"relative",zIndex:"9999"},withPortal:!0}),c.a.createElement("span",{style:{display:"flex",justifyContent:"center"}},c.a.createElement("input",{type:"submit",className:"button",value:"Add the new task",onClick:function(e){(function(){var e=!1;return""===document.getElementById("name").value&&(O("Please write a name"),e=!0),e})()?e.preventDefault():t()},style:{display:"flex",justifyContent:"center"}}))))))},ie=function(e){var t=Object(D.b)((function(e){var t=e.in,a=e.onExited;return c.a.createElement(ee,{open:t,onExited:a,onClose:i})})),a=Object(l.a)(t,2),n=a[0],i=a[1],s=Object(D.b)((function(e){var t=e.in,a=e.onExited;return c.a.createElement(ce,{open:t,onExited:a,onClose:u})})),o=Object(l.a)(s,2),r=o[0],u=o[1];return c.a.createElement("div",{className:"category-name-in-list category-name-in-homepage",style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},c.a.createElement("h2",{className:"list-name-homepage"},e.listName),c.a.createElement("button",{className:"button",onClick:"shopping"===e.listType?n:r},"shopping"===e.listType?c.a.createElement("span",null,"Add item"):c.a.createElement("span",null,"Add task")))},se=function(){var e=Object(r.c)((function(e){return e.lists.listDisplayed}));return c.a.createElement("div",{style:{margin:"1.5rem"}},c.a.createElement(ie,{listName:e.name,listType:e.type,categories:e.categories}),c.a.createElement($,{list:e}))},le=function(e){return c.a.createElement("span",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",flexDirection:"column"}},c.a.createElement("div",{className:"lds-heart"},c.a.createElement("div",null,"")),0===e.shoppingLists.length&&0===e.todoLists.length?c.a.createElement("h1",{style:{color:"#ddd6f3",textShadow:" 0 0 20px #ddd6f3"}},"Create a list to start"):c.a.createElement("h1",{className:"select-list-text"},"Select a list to start"))},oe=function(){var e=Object(r.b)();Object(n.useEffect)((function(){return e(j()),e(p()),e(g()),function(){e({type:"CLEAN_LISTS"})}}),[e]);var t=Object(r.c)((function(e){return e.lists.shoppingLists})),a=Object(r.c)((function(e){return e.lists.todoLists})),i=Object(r.c)((function(e){return e.lists.listDisplayed}));return c.a.createElement("div",{style:{width:"75vw"}},0===t.length||0===a.length||0===Object.keys(i).length?c.a.createElement(le,{shoppingLists:t,todoLists:a}):c.a.createElement(se,null))},re=function(e){var t=Object(r.b)();return Object(n.useEffect)((function(){return t(j()),t(p()),t(g()),function(){t({type:"CLEAN_LISTS"})}}),[t]),c.a.createElement("div",{className:"profile-container"},c.a.createElement(K,null),c.a.createElement("div",{style:{display:"flex",flexDirection:"row",width:"100vw",maxHeight:"100vh"}},c.a.createElement("div",{style:{width:"25vw",maxWidth:"25vw"}},c.a.createElement(X,null)),c.a.createElement(oe,null)))};var ue=function(){return c.a.createElement(w.a,{basename:"/Smart-List"},c.a.createElement(N.c,null,c.a.createElement(N.a,{exact:!0,path:"/"},c.a.createElement(I,null)),c.a.createElement(N.a,{path:"/signup"},c.a.createElement(L,null)),c.a.createElement(N.a,{path:"/profile/:username"},c.a.createElement(re,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=a(661),de=a(51),be={username:null},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(d.a)(Object(d.a)({},e),{},{username:t.payload});default:return e}},ge={},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNUP":return Object(d.a)({},e);default:return e}},he={shoppingLists:[],todoLists:[],users:[],listDisplayed:{}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_LISTS":return Object(d.a)(Object(d.a)({},e),{},{shoppingLists:Object(b.a)(t.payload)});case"GET_TODOS":case"ADD_TODOLIST":return Object(d.a)(Object(d.a)({},e),{},{todoLists:Object(b.a)(t.payload)});case"CREATE_SHOPPING_LIST":return Object(d.a)(Object(d.a)({},e),{},{shoppingLists:Object(b.a)(t.payload)});case"CLEAN_LISTS":return Object(d.a)(Object(d.a)({},e),{},{categories:[],todoLists:[],shoppingLists:[],listDisplayed:{}});case"CHANGE_CHECK_SHOPPING":return Object(d.a)(Object(d.a)({},e),{},{shoppingLists:Object(b.a)(t.payload)});case"CHANGE_CHECK_TODO":return Object(d.a)(Object(d.a)({},e),{},{todoLists:Object(b.a)(t.payload)});case"GET_USERS":return Object(d.a)(Object(d.a)({},e),{},{users:Object(b.a)(t.payload)});case"LOAD_SHOPPING_LIST_IN_HOMEPAGE":case"LOAD_TODO_LIST_IN_HOMEPAGE":return Object(d.a)(Object(d.a)({},e),{},{listDisplayed:Object(d.a)({},t.payload)});case"CLEAR_DISPLAYED_LIST":return Object(d.a)(Object(d.a)({},e),{},{listDisplayed:{}});case"ADD_ITEM_TO_SHOPPING_LIST":return Object(d.a)(Object(d.a)({},e),{},{shoppingLists:Object(b.a)(t.newShoppingList),listDisplayed:Object(d.a)({},t.newListDisplayed)});case"ADD_NEW_CATEGORY_TO_LIST_DISPLAYED":return Object(d.a)(Object(d.a)({},e),{},{listDisplayed:Object(d.a)({},t.newListDisplayed)});case"CHECK_ITEM":return Object(d.a)(Object(d.a)({},e),{},{listDisplayed:Object(d.a)({},t.payload)});default:return e}},Ee={categories:[]},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CATEGORIES":return Object(d.a)(Object(d.a)({},e),{},{categories:Object(b.a)(t.payload)});case"ADD_CATEGORY":case"EDIT_CATEGORY":case"DELETE_CATEGORY":return Object(d.a)(Object(d.a)({},e),{},{categories:t.payload});default:return e}},je=Object(de.combineReducers)({login:pe,signup:fe,lists:Oe,user:ye}),ve=a(254),Se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.compose,Ce=Object(de.createStore)(je,Se(Object(de.applyMiddleware)(ve.a)));s.a.render(c.a.createElement(r.a,{store:Ce},c.a.createElement(D.a,{rootComponent:me.a},c.a.createElement(ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[258,1,2]]]);
//# sourceMappingURL=main.ebee98b4.chunk.js.map