(this["webpackJsonpreact-fetch"]=this["webpackJsonpreact-fetch"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),s=(n(14),n(15),n(1)),l=n.n(s),u=n(4),i=n(5),h=n(7),m=n(6),f=n(8);function p(e){var t=e.source,n=t.id,a=t.author,o=t.author_url,c=t.post_url,s="https://picsum.photos/800/600?image="+n;return console.log("RENDER IMAGE"),r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{alt:"This is an API",src:s}),r.a.createElement("p",null,r.a.createElement("a",{target:"_blank",href:o,rel:"noopener noreferrer"},a)," | ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:c},"Photo")))}function E(e){return r.a.createElement("h2",null,"Oh my! ",e.message)}var g=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).fetchAsync=function(){var e,t,a;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("NOW FETCH DATA"),r.prev=1,r.next=4,l.a.awrap(fetch(n.state.url));case 4:return e=r.sent,r.next=7,l.a.awrap(e.json());case 7:t=r.sent,a=Math.floor(Math.random()*Object.keys(t).length),console.log("STATE CHANGED"),n.setState({fetch:!0,source:t[a]}),r.next=18;break;case 13:r.prev=13,r.t0=r.catch(1),console.log(r.t0),n.setState({error:!0,message:"something happend"}),console.error(r.t0);case 18:case"end":return r.stop()}}),null,null,[[1,13]])},n.handleSubmit=function(e){e.preventDefault(),console.log("You clicked!"),n.fetchAsync()},n.state={url:"https://picsum.photos/list",fetch:!1},console.log("CONSTRUCTOR"),n}return Object(f.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("COMPONENT DID MOUNT"),this.fetchAsync()}},{key:"componentDidUpdate",value:function(){console.log("COMPONENT UPDATED")}},{key:"render",value:function(){return console.log("RENDER PICSUM"),r.a.createElement("div",null,this.state.error&&r.a.createElement(E,{message:this.state.message}),this.state.fetch&&r.a.createElement(p,{source:this.state.source}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("button",null,"Random Picture")))}}]),t}(a.Component);function d(e){return r.a.createElement("h1",null,e.text)}var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(d,{text:"Picsum API"}),r.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.d19d998e.chunk.js.map