(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t(41)},28:function(e,a,t){},29:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),i=t(5),m=(t(28),t(16)),u=t(17),o=t(21),s=t(18),h=t(8),d=t(22),E=t(6),f=function(){return fetch("http://hp-api.herokuapp.com/api/characters").then(function(e){return e.json()})},p=(t(29),function(e){var a=e.character,t=a.name,n=a.image,c=a.house;return r.a.createElement("div",{className:"card-link__container"},r.a.createElement("div",{className:"card__container"},r.a.createElement("div",{className:"card-image__container",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"card-title__container"},r.a.createElement("h1",{className:"card__title"},t)),r.a.createElement("div",{className:"card-house__container"},r.a.createElement("i",{className:"fas fa-dungeon"}),r.a.createElement("p",{className:"card-house"},c||"Homeless"))),r.a.createElement("div",{className:"link-container"},r.a.createElement(i.b,{className:"card__link",to:"character/".concat(t)},"More info")))}),v=(t(38),function(e){var a=e.characters;return r.a.createElement("ul",{className:"list__container"},a.map(function(e){return r.a.createElement("li",{className:"list__element",key:e.id},r.a.createElement(p,{character:e}))}))}),g=(t(39),function(e){var a=e.handleChange,t=e.value;return r.a.createElement("div",{className:"filter__container"},r.a.createElement("label",{htmlFor:"name"}),r.a.createElement("input",{type:"text",id:"name",value:t,name:"name",onChange:a,placeholder:"Look for a character",className:"filter__input"}))}),_=(t(40),function(e){var a=e.characters,t=e.match.params.name,c=a.findIndex(function(e){return e.name===t});if(console.log(c),-1===c)return r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"no hay"),r.a.createElement(i.b,{to:"/"},"Volver a la p\xe1gina principal"));var l=a[c],m=l.name,u=l.id,o=l.image,s=l.house,h=l.dob,d=l.patronus,E=l.alive?"alive":"dead";return r.a.createElement("div",{id:u},r.a.createElement("img",{src:o,alt:m}),r.a.createElement("h1",null,m),r.a.createElement("p",null,s),r.a.createElement("p",null,h),r.a.createElement("p",null,d),r.a.createElement("p",null,E),r.a.createElement(i.b,{to:"/"},"Volver"))}),b=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(o.a)(this,Object(s.a)(a).call(this,e))).state={characters:[],filter:"",isFetching:!0},t.handleChange=t.handleChange.bind(Object(h.a)(t)),t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getCharacters()}},{key:"getCharacters",value:function(){var e=this;f().then(function(a){return e.setState(function(){return{characters:a.map(function(e,a){return{id:a+1,name:e.name,image:e.image,house:e.house,dob:e.yearOfBirth,patronus:e.patronus,alive:e.alive}}),isFetching:!1}})})}},{key:"handleChange",value:function(e){this.setState({filter:e.target.value})}},{key:"render",value:function(){var e=this,a=this.state,t=a.characters,c=a.filter,l=a.isFetching,i=t.filter(function(e){return e.name.toUpperCase().includes(c.toUpperCase())});return l?r.a.createElement("p",null,"loading"):r.a.createElement(n.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",{className:"main__title"},"Harry Potter Characters")),r.a.createElement("main",null,r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",render:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(g,{handleChange:e.handleChange,value:c}),r.a.createElement(v,{characters:i}))}}),r.a.createElement(E.a,{path:"/character/:name",render:function(e){return r.a.createElement(_,{match:e.match,characters:t})}}))))}}]),a}(r.a.Component);l.a.render(r.a.createElement(i.a,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.ab8fd9c9.chunk.js.map