(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},8:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(3),r=n(6),o=n(4),c=n(7),u=n(0),l=n.n(u),s=n(5),m=n.n(s),h=(n(14),function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(r.a)(this,Object(o.a)(t).call(this))).state={quote:"There's only one thing I hate more than lying: skim milk. Which is water that's lying about being milk."},e}return Object(c.a)(t,e),Object(i.a)(t,[{key:"getQuote",value:function(){var e=this;this.setState({quote:"Thinking purrr..."}),fetch("http://quotes.rest/quote/random",{headers:{Accept:"application/json","X-TheySaidSo-Api-Secret":"IbS_pi4yPKyL7suY6RADFAeF"}}).then(function(e){return e.json()}).then(function(t){var n=JSON.stringify(t.contents.quote).replace(/['"]+/g,"");e.setState({quote:n})})}},{key:"render",value:function(){var e=this,t=this.state.quote;return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("h1",null,"Philosophy Cat Says:")),l.a.createElement("main",null,l.a.createElement("section",{id:"cat-image"},l.a.createElement("img",{src:"https://t1.ea.ltmcdn.com/en/images/2/0/5/img_my_cat_is_depressed_1502_paso_0_600.jpg"})),l.a.createElement("section",{id:"cat-text"},l.a.createElement("div",{id:"quote-box"},l.a.createElement("p",{id:"quote-text"},t)),l.a.createElement("button",{id:"next-quote",onClick:function(){return e.getQuote()}},"Next Quote"))),l.a.createElement("footer",null,l.a.createElement("p",null,"Created by Brian Danger Flynn \u2014 2018")))}}]),t}(l.a.Component));m.a.render(l.a.createElement(h,null),document.getElementById("root"))}},[[8,2,1]]]);
//# sourceMappingURL=main.8cf7fab7.chunk.js.map