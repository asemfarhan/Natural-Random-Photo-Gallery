(this.webpackJsonpNaturalGallery=this.webpackJsonpNaturalGallery||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(7),l=a.n(c),o=(a(13),a(14),a(1)),i=a(2),s=a(4),h=a(3),u=a(5),m=function(e){e.arr;throw new Error("Hiiii   throw new Error")},p=function(e){e.searchField;var t=e.searchChange;return n.a.createElement("div",{className:" center tc pa2  br3 "},n.a.createElement("input",{className:" tc pa2 ba br-pill bg-washed-blue",type:"search",placeholder:"Search",onChange:t}))},d=function(e){return n.a.createElement("div",{style:{overflow:"scroll",border:"3px solid black",height:"500px"}},e.children)},f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.hasError?n.a.createElement("h1",null,"Error somthing wrong"):this.props.children}}]),t}(n.a.Component),b=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={arr:[],searchField:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({arr:t})}))}},{key:"render",value:function(){var e=this.state,t=e.arr,a=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t.length?n.a.createElement("div",null,n.a.createElement("p",{className:" tc pa2 ma4 h11"},"live the moment ",n.a.createElement("b",null,"happy... ")," "),n.a.createElement(p,{searchChange:this.onSearchChange}),n.a.createElement(d,null,n.a.createElement(f,null,n.a.createElement(m,{arr:r})))):n.a.createElement("h1",{className:"tc h11"}," Loodaing ...")}}]),t}(n.a.Component);l.a.render(n.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.4d413e2d.chunk.js.map