(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,clicked:!1,src:"./images/Bulbasaur.png"},{id:2,clicked:!1,src:"./images/Charmander.png"},{id:3,clicked:!1,src:"./images/Chespin.png"},{id:4,clicked:!1,src:"./images/Chikorita.png"},{id:5,clicked:!1,src:"./images/Chimchar.png"},{id:6,clicked:!1,src:"./images/Cyndaquil.png"},{id:7,clicked:!1,src:"./images/Fennekin.png"},{id:8,clicked:!1,src:"./images/Froakie.png"},{id:9,clicked:!1,src:"./images/Grookey.png"},{id:10,clicked:!1,src:"./images/Litten.png"},{id:11,clicked:!1,src:"./images/Mudkip.png"},{id:12,clicked:!1,src:"./images/Oshawott.png"},{id:13,clicked:!1,src:"./images/Piplup.png"},{id:14,clicked:!1,src:"./images/Popplio.png"},{id:15,clicked:!1,src:"./images/Rowlet.png"},{id:16,clicked:!1,src:"./images/Scorbunny.png"},{id:17,clicked:!1,src:"./images/Snivy.png"},{id:18,clicked:!1,src:"./images/Sobble.png"},{id:19,clicked:!1,src:"./images/Squirtle.png"},{id:20,clicked:!1,src:"./images/Tepig.png"},{id:21,clicked:!1,src:"./images/Torchic.png"},{id:22,clicked:!1,src:"./images/Totodile.png"},{id:23,clicked:!1,src:"./images/Treecko.png"},{id:24,clicked:!1,src:"./images/Turtwig.png"}]},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(8),r=a.n(l),i=(a(15),a(2)),o=a(3),s=a(5),m=a(4),d=a(6),u=(a(16),{width:"15%",height:"auto",margin:"3px"}),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={clicked:!1,src:a.props.src},a.handleClick=function(e){console.log("click"),e.preventDefault(),a.state.clicked?a.props.endGame():(a.setState({clicked:!0}),a.props.shuffle(),a.props.incrementScore())},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("img",{src:this.props.src,id:this.props.id,alt:this.props.src,onClick:this.props.handleClick,style:u})}}]),t}(n.Component);function h(e){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-danger d-flex"},c.a.createElement("a",{className:"navbar-brand",href:"/"},"Pokemon Memory Game"),c.a.createElement("span",{className:"text-light"},c.a.createElement("span",{className:"m-2"},"Level: ",e.currentLevel),c.a.createElement("span",{className:"m-2"},"Score: ",e.currentPoints," "),c.a.createElement("span",{className:"m-2"},"High Score: ",e.highScore)),c.a.createElement("span",{className:"ml-auto mr-2"},c.a.createElement("button",{className:"btn btn-outline-light mr-2",onClick:function(){return e.toggleModal("about")}},"About")))}var p=function(e){return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement(h,{currentLevel:e.currentLevel,currentPoints:e.currentPoints,highScore:e.highScore,toggleModal:e.toggleModal}))),c.a.createElement("div",{className:"row container mx-auto mt-5"},c.a.createElement("div",{className:"col-12 text-center bg-white p-3"},e.pokemon.map(function(t){return c.a.createElement(g,{key:t.id,id:t.id,src:t.src,handleClick:e.handleClick,endGame:e.endGame,shuffle:e.shuffle,incrementScore:e.incrementScore,reset:e.reset})}))))},k="modal fade show d-block",f="d-none";var v=function(e){var t=e.name+"Modal",a=e.name+"Label";return c.a.createElement("div",{className:e.modalOpen?k:f,id:t,tabIndex:"-1",role:"dialog","aria-labelledby":a,"aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h4",{className:"modal-title",id:a},e.title),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:function(){return e.toggleModal(e.name)}},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),c.a.createElement("div",{className:"modal-body"},e.children),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.toggleModal(e.name)}},"Let's play!")))))},b=a(1),E={background:'url("./images/blu_stripes.png") repeat'},S=!0,y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={currentScore:0,currentPoints:0,highScore:0,level:1,pokemon:b,aboutOpen:S,levelOpen:!1},a.componentDidMount=function(){var e=a.shuffle(b);a.setState({pokemon:e.slice(0,4),modalOpen:a.state.aboutOpen||a.state.levelOpen})},a.endGame=function(){alert("game over"),a.state.currentPoints>a.state.highScore&&a.setState({highScore:a.state.currentPoints}),a.setState({currentScore:0,currentPoints:0,level:1});var e=a.clearClicks(b);a.setState({pokemon:a.shuffle(e).slice(0,4)})},a.clearClicks=function(e){return e.forEach(function(e){return e.clicked=!1}),e},a.shuffle=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e},a.incrementScore=function(){switch(a.setState({currentScore:a.state.currentScore+1,currentPoints:a.state.currentPoints+25}),a.state.currentScore){case 3:a.nextLevel(2,9);break;case 12:a.nextLevel(3,12);break;case 36:a.nextLevel(4,24);break;case 48:a.bigWin();break;default:return}},a.toggleModal=function(e){var t;switch(e){case"about":t=!a.state.aboutOpen,a.setState({aboutOpen:t});break;case"level":t=!a.state.levelOpen,a.setState({levelOpen:t});break;default:return}},a.handleClick=function(e){e.preventDefault();var t=a.state.pokemon,n=e.target.getAttribute("id"),c=t.find(function(e){return e.id===parseInt(n)});c.clicked?a.endGame():(c.clicked=!0,a.setState({pokemon:a.shuffle(t)}),a.incrementScore())},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"nextLevel",value:function(e,t){this.toggleModal("level"),this.setState({level:e,pokemon:this.clearClicks(this.shuffle(b).slice(0,t))})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{style:E,className:"h-100"},c.a.createElement(p,{currentLevel:this.state.level,currentPoints:this.state.currentPoints,highScore:this.state.highScore,toggleModal:this.toggleModal,pokemon:this.state.pokemon,handleClick:this.handleClick,endGame:this.endGame,shuffle:this.stuffle,incrementScore:this.incrementScore,reset:this.reset}),c.a.createElement(v,{name:"about",title:"About",modalOpen:this.state.aboutOpen,toggleModal:this.toggleModal},c.a.createElement("h5",{className:"modal-title"},"How to Play"),c.a.createElement("ul",null,c.a.createElement("li",null,"The goal of the game is to click each pokemon ",c.a.createElement("strong",null,"one time"),". "),c.a.createElement("li",null,"Every time you click a pokemon they all get shuffled, so make sure to keep track of who you've already clicked!"),c.a.createElement("li",null,"Once you click the same pokemon twice it's game over.")),c.a.createElement("h5",{className:"modal-title"},"About the Game"),c.a.createElement("p",null,"This game was created using React and Bootstrap. View the code or fork the repo on ",c.a.createElement("a",{href:"https://github.com/kiriwilliams/pokemon-memory-game/tree/master"},"github.com/kiriwilliams"))),c.a.createElement(v,{name:"level",title:"Level Up!",modalOpen:this.state.levelOpen,toggleModal:this.toggleModal},"Ready for level ",this.state.level,"?"),c.a.createElement("div",{className:this.state.aboutOpen||this.state.levelOpen?"modal-backdrop":"d-none",onClick:function(){return e.toggleModal(e.state.aboutOpen?"about":"level")}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.a27e57ef.chunk.js.map