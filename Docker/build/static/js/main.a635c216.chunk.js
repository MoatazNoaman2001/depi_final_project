(this["webpackJsonpmyreads-app"]=this["webpackJsonpmyreads-app"]||[]).push([[0],{26:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(19),c=a.n(r),s=a(6),l=a(7),i=a(9),u=a(8),h=a(1),d=a(13),m="https://reactnd-books-api.udacity.com",f=localStorage.token;f||(f=localStorage.token=Math.random().toString(36).substr(-8));var b={Accept:"application/json",Authorization:f},k=function(e,t){return fetch("".concat(m,"/books/").concat(e.id),{method:"PUT",headers:Object(d.a)(Object(d.a)({},b),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()}))},p=function(e){return fetch("".concat(m,"/search"),{method:"POST",headers:Object(d.a)(Object(d.a)({},b),{},{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then((function(e){return e.json()})).then((function(e){return e.books}))},v=(a(26),a(21)),y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).ShelfUpdate=function(t){return e.props.changeShelfs(e.props.book,t.target.value)},e}return Object(l.a)(a,[{key:"render",value:function(){var e,t=this.props,a=t.book,n=t.books,r="none",c=Object(v.a)(n);try{for(c.s();!(e=c.n()).done;){var s=e.value;if(s.id===a.id){r=s.shelf;break}}}catch(l){c.e(l)}finally{c.f()}return o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{onChange:this.ShelfUpdate,defaultValue:r},o.a.createElement("option",{disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))}}]),a}(n.Component),E=function(e){var t=e.book,a=e.books,n=e.changeShelfs,r=t.title?t.title:"No title",c=t.imageLinks&&t.imageLinks.thumbnail?t.imageLinks.thumbnail:"No Cover Found";return o.a.createElement("li",null,o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top book-cover",style:{backgroundImage:"url(".concat(c,")")}},o.a.createElement(y,{book:t,books:a,changeShelfs:n})),o.a.createElement("div",{className:"book-title"},r),t.authors&&t.authors.map((function(e,t){return o.a.createElement("div",{className:"book-authors",key:t},e)}))))},g=a(10),S=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={addBooks:[],query:[],notFound:!1},e.findBooks=function(t){var a=t.target.value;e.setState({query:a}),a?p(a.trim()).then((function(t){t.length>0?e.setState({addBooks:t,notFound:!1}):e.setState({addBooks:[],notFound:!0})})):e.setState({addBooks:[],notFound:!1})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.addBooks,a=e.query,n=e.notFound,r=this.props,c=r.books,s=r.changeShelfs;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(g.b,{to:"/",className:"close-search"},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:a,onChange:this.findBooks}))),o.a.createElement("div",{className:"search-books-results"},t.length>0&&o.a.createElement("div",null,o.a.createElement("p",null,"Number Of Books Found ",t.length," Book"),o.a.createElement("ol",{className:"books-grid"},t.map((function(e){return o.a.createElement(E,{key:e.id,books:c,book:e,changeShelfs:s})})))),n&&o.a.createElement("p",null,"Please check what you wrote and try again.")))}}]),a}(n.Component),j=function(e){var t=e.books,a=e.changeShelfs;return o.a.createElement("ol",{className:"books-grid"},t.map((function(e){return o.a.createElement(E,{key:e.id,book:e,books:t,changeShelfs:a})})))},N=function(e){var t=e.books,a=e.changeShelfs;return o.a.createElement("div",{className:"list-books-content"},[{key:"currentlyReading",title:"Currently Reading"},{key:"wantToRead",title:"Want To Read"},{key:"read",title:"Read"}].map((function(e,n){var r=t.filter((function(t){return t.shelf===e.key}));return o.a.createElement("div",{className:"bookshelf",key:n},o.a.createElement("h2",{className:"bookshelf-title"},e.title),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement(j,{books:r,changeShelfs:a})))})))},O=function(){return o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads"))},C=function(){return o.a.createElement(g.b,{to:"/search",className:"open-search"},"Add a book")},R=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.books,a=e.changeShelfs;return o.a.createElement("div",{className:"list-books"},o.a.createElement(O,null),o.a.createElement(N,{books:t,changeShelfs:a}),o.a.createElement(C,null))}}]),a}(n.Component),w=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={books:[]},e.changeShelfs=function(t,a){k(t,a).then((function(n){t.shelf=a,e.setState((function(e){return{books:e.books.filter((function(e){return e.id!==t.id})).concat(t)}}))}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(m,"/books"),{headers:b}).then((function(e){return e.json()})).then((function(e){return e.books})).then((function(t){return e.setState({books:t})}))}},{key:"render",value:function(){var e=this,t=this.state.books;return o.a.createElement("div",{className:"app"},o.a.createElement(h.a,{exact:!0,path:"/search",render:function(){return o.a.createElement(S,{books:t,changeShelfs:e.changeShelfs})}}),o.a.createElement(h.a,{exact:!0,path:"/",render:function(){return o.a.createElement(R,{books:t,changeShelfs:e.changeShelfs})}}))}}]),a}(n.Component);a(32);c.a.render(o.a.createElement(g.a,null,o.a.createElement(w,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.a635c216.chunk.js.map