webpackJsonp([2],{"5nYN":function(t,e){},EXP3:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={name:"calculate",data:function(){return{leftval:"",rightval:"",operator:"",input:"0",keyboard:[[{title:"C",value:"clear",type:"operator"},{title:"DEL",value:"del",type:"operator"},{title:"%",value:"perc",type:"operator"},{title:"/",value:"divide",type:"operator"}],[{title:"7",value:"7",type:"num"},{title:"8",value:"8",type:"num"},{title:"9",value:"9",type:"num"},{title:"*",value:"multi",type:"operator"}],[{title:"4",value:"4",type:"num"},{title:"5",value:"5",type:"num"},{title:"6",value:"6",type:"num"},{title:"-",value:"minus",type:"operator"}],[{title:"1",value:"1",type:"num"},{title:"2",value:"2",type:"num"},{title:"3",value:"3",type:"num"},{title:"+",value:"plus",type:"operator"}],[{title:"00",value:"00",type:"num"},{title:"0",value:"0",type:"num"},{title:".",value:"point",type:"operator"},{title:"=",value:"equal",type:"operator"}]]}},computed:{top:function(){return(this.leftval.indexOf(".")<0?this.leftval:parseFloat((1*this.leftval).toFixed(6)).toString())+this.operator+this.rightval},bottom:function(){return this.input.indexOf(".")<0?this.input:this.input.indexOf(".")==this.input.length-1?this.input:parseFloat((1*this.input).toFixed(6)).toString()},fontSize:function(){var t=this.bottom.length-7;return t>0?50-3*t:50}},methods:{cellClick:function(t,e,i){switch(t){case"operator":this.dooperator(e,i);break;case"num":this.addnum(e)}},addnum:function(t){return 10!=this.input.length&&(("0"!=this.input[0]||0!=t)&&(""!=this.rightval?(this.dooperator("clear"),this.input=t,!1):void(this.input=("0"===this.input?"":this.input)+t)))},dooperator:function dooperator(op,title){switch(op){case"clear":this.leftval="",this.rightval="",this.operator="",this.input="0";break;case"del":if(""!=this.rightval)return!1;var val=this.input.slice(0,this.input.length-1);this.input=val||"0";break;case"plus":case"minus":case"multi":case"divide":this.cal(title);break;case"perc":this.leftval=this.input,this.operator="",this.rightval="% =",this.input=(this.input/100).toString();break;case"point":this.input.indexOf(".")<0&&(this.input+=".");break;case"equal":var result="";""==this.leftval?(this.leftval=this.input,this.rightval="=",result=this.input):""==this.rightval?(result=eval(1*this.leftval+this.operator+1*this.input),this.rightval=this.input+"="):(this.leftval=this.input,result=eval(1*this.input+this.operator+this.rightval.replace("=",""))),this.input=result.toString()}},cal:function cal(title){if(""!=this.leftval&&""!=this.operator&&""!=this.input&&""==this.rightval)return this.leftval=eval(1*this.leftval+this.operator+1*this.input),this.operator=title,this.rightval="",this.input="",!1;this.operator=title,this.leftval=this.input,this.input="",this.rightval=""}}}},pHF0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("EXP3"),l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"wrap"}},[i("div",{attrs:{id:"header"}},[i("div",{attrs:{id:"shower"}},[t._v("\n            "+t._s(t.top)+"\n        ")]),t._v(" "),i("div",{style:{fontSize:t.fontSize+"px"},attrs:{id:"calvalue"}},[t._v("\n            "+t._s(t.bottom)+"\n        ")])]),t._v(" "),i("div",{attrs:{id:"body"}},t._l(t.keyboard,function(e){return i("div",t._l(e,function(e){return i("div",[i("div",{class:{equal:""+e.value=="equal"},on:{click:function(i){return t.cellClick(e.type,e.value,e.title)}}},[i("span",[t._v(t._s(e.title))])])])}),0)}),0)])},staticRenderFns:[]};var r=function(t){i("5nYN")},n=i("VU/8")(a.a,l,!1,r,"data-v-3ed4bc12",null);e.default=n.exports}});
//# sourceMappingURL=2.41bbf60d39c8a0fcbcfe.js.map