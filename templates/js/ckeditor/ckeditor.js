/* Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved. For licensing, see LICENSE.md or http://ckeditor.com/license */ 
(function(){if(window.CKEDITOR&&window.CKEDITOR.dom)return; window.CKEDITOR||(window.CKEDITOR=function(){var a=/(^|.*[\\\/])ckeditor\.js(?:\?.*|; 
.*)?$/i,e={timestamp:"EAPE",version:"4.4.6",revision:"08188c4",rnd:Math.floor(900*Math.random())+100,_:{pending:[],basePathSrcPattern:a},status:"unloaded",basePath:function(){var 
f=window.CKEDITOR_BASEPATH||""; if(!f)for(var d=document.getElementsByTagName("script"),c=0; c<d.length; c++){var b=d[c].src.match(a); if(b){f=b[1]; 
break}}-1==f.indexOf(":/")&&"//"!=f.slice(0,2)&&(f=0===f.indexOf("/")?location.href.match(/^.*?:\/\/[^\/]*/)[0]+ f:location.href.match(/^[^\?]*\/(?:)/)[0]+f); 
if(!f)throw'The CKEditor installation path could not be automatically detected. Please set the global variable "CKEDITOR_BASEPATH" before creating editor 
instances.'; return f}(),getUrl:function(a){-1==a.indexOf(":/")&&0!==a.indexOf("/")&&(a=this.basePath+a); 
this.timestamp&&("/"!=a.charAt(a.length-1)&&!/[&?]t=/.test(a))&&(a+=(0<=a.indexOf("?")?"&":"?")+"t="+this.timestamp); return a},domReady:function(){function 
a(){try{document.addEventListener?(document.removeEventListener("DOMContentLoaded", 
a,!1),d()):document.attachEvent&&"complete"===document.readyState&&(document.detachEvent("onreadystatechange",a),d())}catch(c){}}function d(){for(var a; 
a=c.shift(); )a()}var c=[]; return function(d){function b(){try{document.documentElement.doScroll("left")}catch(m){setTimeout(b,1); return}a()}c.push(d); 
"complete"===document.readyState&&setTimeout(a,1); 
if(1==c.length)if(document.addEventListener)document.addEventListener("DOMContentLoaded",a,!1),window.addEventListener("load",a,!1); else 
if(document.attachEvent){document.attachEvent("onreadystatechange", a); window.attachEvent("onload",a); d=!1; 
try{d=!window.frameElement}catch(e){}document.documentElement.doScroll&&d&&b()}}}()},b=window.CKEDITOR_GETURL; if(b){var c=e.getUrl; e.getUrl=function(a){return 
b.call(e,a)||c.call(e,a)}}return e}());

CKEDITOR.event||(CKEDITOR.event=function(){},CKEDITOR.event.implementOn=function(a){var e=CKEDITOR.event.prototype,b; for(b in 
e)a[b]==null&&(a[b]=e[b])},CKEDITOR.event.prototype=function(){function a(a){var f=e(this); return f[a]||(f[a]=new b(a))}var 
e=function(a){a=a.getPrivate&&a.getPrivate()||a._||(a._={}); return a.events||(a.events={})},b=function(a){this.name=a; this.listeners=[]}; 
b.prototype={getListenerIndex:function(a){for(var f=0,d=this.listeners; f<d.length; f++)if(d[f].fn==a)return f; return-1}};

return{define:function(b,f){var d=a.call(this,b); CKEDITOR.tools.extend(d,f,true)},on:function(b,f,d,e,l){function 
i(a,m,t,j){a={name:b,sender:this,editor:a,data:m,listenerData:e,stop:t,cancel:j,removeListener:g}; return f.call(d,a)===false?false:a.data}function 
g(){t.removeListener(b,f)}var m=a.call(this,b); if(m.getListenerIndex(f)<0){m=m.listeners; d||(d=this); isNaN(l)&&(l=10); var t=this; i.fn=f; i.priority=l; 
for(var s=m.length-1; s>=0; s--)if(m[s].priority<=l){m.splice(s+1,0,i); return{removeListener:g}}m.unshift(i)}return{removeListener:g}}, once:function(){var 
a=Array.prototype.slice.call(arguments),f=a[1]; a[1]=function(a){a.removeListener(); return f.apply(this,arguments)}; return 
this.on.apply(this,a)},capture:function(){CKEDITOR.event.useCapture=1; var a=this.on.apply(this,arguments); CKEDITOR.event.useCapture=0; return 
a},fire:function(){var a=0,f=function(){a=1},d=0,b=function(){d=1}; return function(l,i,g){var m=e(this)[l],l=a,t=d; a=d=0; if(m){var s=m.listeners; 
if(s.length)for(var s=s.slice(0),y,p=0; p<s.length; p++){if(m.errorProof)try{y= s[p].call(this,g,i,f,b)}catch(q){}else y=s[p].call(this,g,i,f,b); 
y===false?d=1:typeof y!="undefined"&&(i=y); if(a||d)break}}i=d?false:typeof i=="undefined"?true:i; a=l; d=t; return 
i}}(),fireOnce:function(a,f,d){f=this.fire(a,f,d); delete e(this)[a]; return f},removeListener:function(a,f){var d=e(this)[a]; if(d){var 
b=d.getListenerIndex(f); b>=0&&d.listeners.splice(b,1)}},removeAllListeners:function(){var a=e(this),f; for(f in a)delete 
a[f]},hasListeners:function(a){return(a=e(this)[a])&&a.listeners.length> 0}}}()); 
CKEDITOR.editor||(CKEDITOR.editor=function(){CKEDITOR._.pending.push([this,arguments]); 
CKEDITOR.event.call(this)},CKEDITOR.editor.prototype.fire=function(a,e){a in{instanceReady:1,loaded:1}&&(this[a]=true); return 
CKEDITOR.event.prototype.fire.call(this,a,e,this)},CKEDITOR.editor.prototype.fireOnce=function(a,e){a in{instanceReady:1,loaded:1}&&(this[a]=true); return 
CKEDITOR.event.prototype.fireOnce.call(this,a,e,this)},CKEDITOR.event.implementOn(CKEDITOR.editor.prototype));

CKEDITOR.env||(CKEDITOR.env=function(){var a=navigator.userAgent.toLowerCase(),e={ie:a.indexOf("trident/")>-1,webkit:a.indexOf(" 
applewebkit/")>-1,air:a.indexOf(" 
adobeair/")>-1,mac:a.indexOf("macintosh")>-1,quirks:document.compatMode=="BackCompat"&&(!document.documentMode||document.documentMode<10),mobile:a.indexOf("mobile")>-1,iOS:/(ipad|iphone|ipod)/.test(a),isCustomDomain:function(){if(!this.ie)return 
false; var a=document.domain,d=window.location.hostname; return a!=d&&a!="["+d+"]"},secure:location.protocol== "https:"}; 
e.gecko=navigator.product=="Gecko"&&!e.webkit&&!e.ie; if(e.webkit)a.indexOf("chrome")>-1?e.chrome=true:e.safari=true; var b=0; 
if(e.ie){b=e.quirks||!document.documentMode?parseFloat(a.match(/msie (\d+)/)[1]):document.documentMode; e.ie9Compat=b==9; e.ie8Compat=b==8; e.ie7Compat=b==7; 
e.ie6Compat=b<7||e.quirks}if(e.gecko){var c=a.match(/rv:([\d\.]+)/); if(c){c=c[1].split("."); 
b=c[0]*1E4+(c[1]||0)*100+(c[2]||0)*1}}e.air&&(b=parseFloat(a.match(/ adobeair\/(\d+)/)[1])); e.webkit&&(b=parseFloat(a.match(/ applewebkit\/(\d+)/)[1]));

e.version=b; e.isCompatible=e.iOS&&b>=534||!e.mobile&&(e.ie&&b>6||e.gecko&&b>=2E4||e.air&&b>=1||e.webkit&&b>=522||false); e.hidpi=window.devicePixelRatio>=2; 
e.needsBrFiller=e.gecko||e.webkit||e.ie&&b>10; e.needsNbspFiller=e.ie&&b<11; e.cssClass="cke_browser_"+(e.ie?"ie":e.gecko?"gecko":e.webkit?"webkit":"unknown"); 
if(e.quirks)e.cssClass=e.cssClass+" cke_browser_quirks"; if(e.ie)e.cssClass=e.cssClass+(" cke_browser_ie"+(e.quirks?"6 cke_browser_iequirks":e.version)); 
if(e.air)e.cssClass=e.cssClass+" cke_browser_air";

if(e.iOS)e.cssClass=e.cssClass+" cke_browser_ios"; if(e.hidpi)e.cssClass=e.cssClass+" cke_hidpi"; return e}());

"unloaded"==CKEDITOR.status&&function(){CKEDITOR.event.implementOn(CKEDITOR); 
CKEDITOR.loadFullCore=function(){if(CKEDITOR.status!="basic_ready")CKEDITOR.loadFullCore._load=1; else{delete CKEDITOR.loadFullCore; var 
a=document.createElement("script"); a.type="text/javascript"; a.src=CKEDITOR.basePath+"ckeditor.js"; document.getElementsByTagName("head")[0].appendChild(a)}}; 
CKEDITOR.loadFullCoreTimeout=0; CKEDITOR.add=function(a){(this._.pending||(this._.pending=[])).push(a)}; (function(){CKEDITOR.domReady(function(){var a= 
CKEDITOR.loadFullCore,e=CKEDITOR.loadFullCoreTimeout; if(a){CKEDITOR.status="basic_ready"; 
a&&a._load?a():e&&setTimeout(function(){CKEDITOR.loadFullCore&&CKEDITOR.loadFullCore()},e*1E3)}})})(); CKEDITOR.status="basic_loaded"}(); CKEDITOR.dom={};

(function() {var a=[],e=CKEDITOR.env.gecko?"-moz-":CKEDITOR.env.webkit?"-webkit-":CKEDITOR.env.ie?"-ms-":"",b=/ç/g,c=/ç/g,f=/ç/g,d=/ç/g,h=/& /g,l=/> /g,i=/< 
/g,g=/' /g; CKEDITOR.on("reset",function(){a=[]}); CKEDITOR.tools={arrayCompare:function(a,f){if(!a&&!f)return true; if(!a||!f||a.length!=f.length)return false; 
for(var d=0; d<a.length; d++)if(a[d]!=f[d])return false; return true},clone:function(a){var f; if(a&&a instanceof Array){f=[]; for(var d=0; d<a.length; 
d++)f[d]=CKEDITOR.tools.clone(a[d]);

return f}if(a===null||typeof a!="object"||a instanceof String||a instanceof Number||a instanceof Boolean||a instanceof Date||a instanceof 
RegExp||a.nodeType||a.window===a)return a; f=new a.constructor; for(d in a)f[d]=CKEDITOR.tools.clone(a[d]); return f},capitalize:function(a,f){return 
a.charAt(0).toUpperCase()+(f?a.slice(1):a.slice(1).toLowerCase())},extend:function(a){var f=arguments.length,d,b; if(typeof(d=arguments[f-1])=="boolean")f--; 
else if(typeof(d=arguments[f-2])=="boolean"){b=arguments[f-1];

f=f-2}for(var c=1; c<f; c++){var e=arguments[c],j; for(j in e)if(d===true||a[j]==null)if(!b||j in b)a[j]=e[j]}return a},prototypedCopy:function(a){var 
f=function(){}; f.prototype=a; return new f},copy:function(a){var f={},d; for(d in a)f[d]=a[d]; return f},isArray:function(a){return 
Object.prototype.toString.call(a)=="[object Array]"},isEmpty:function(a){for(var f in a)if(a.hasOwnProperty(f))return false; return 
true},cssVendorPrefix:function(a,f,d){if(d)return e+a+":"+f+"; "+a+":"+f; d={}; d[a]=f; d[e+a]=f;

return d},cssStyleToDomStyle:function(){var a=document.createElement("div").style,f=typeof a.cssFloat!="undefined"?"cssFloat":typeof 
a.styleFloat!="undefined"?"styleFloat":"float"; return function(a){return a=="float"?f:a.replace(/-./g,function(a){return 
a.substr(1).toUpperCase()})}}(),buildStyleHtml:function(a){for(var a=[].concat(a),f,d=[],b=0; b<a.length; 
b++)if(f=a[b])/@import|[{}]/.test(f)?d.push("<style>"+f+"</style>"):d.push('<link type="text/css" rel=stylesheet href="'+f+'">'); return d.join("")}, 
htmlEncode:function(a){return(""+a).replace(b,"& ").replace(c,"> ")},htmlDecode:function(a){return 
a.replace(h,"&").replace(l,">").replace(i,"<")},htmlEncodeAttr:function(a){return a.replace(d,"' ").replace(c,"> ")},htmlDecodeAttr:function(a){return 
a.replace(g,'"').replace(i,"<").replace(l,">")},getNextNumber:function(){var a=0; return 
function(){return++a}}(),getNextId:function(){return"cke_"+this.getNextNumber()},override:function(a,f){var d=f(a); d.prototype= a.prototype; return 
d},setTimeout:function(a,f,d,b,c){c||(c=window); d||(d=c); return c.setTimeout(function(){b?a.apply(d,[].concat(b)):a.apply(d)},f||0)},trim:function(){var 
a=/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g; return function(f){return f.replace(a,"")}}(),ltrim:function(){var a=/^[ \t\n\r]+/g; return function(f){return 
f.replace(a,"")}}(),rtrim:function(){var a=/[ \t\n\r]+$/g; return function(f){return f.replace(a,"")}}(),indexOf:function(a,f){if(typeof f=="function")for(var 
d=0,b=a.length; d<b; d++){if(f(a[d]))return d}else{if(a.indexOf)return a.indexOf(f);

d=0; for(b=a.length; d<b; d++)if(a[d]===f)return d}return-1},search:function(a,f){var d=CKEDITOR.tools.indexOf(a,f); return 
d>=0?a[d]:null},bind:function(a,f){return function(){return a.apply(f,arguments)}},createClass:function(a){var 
f=a.$,d=a.base,b=a.privates||a._,c=a.proto,a=a.statics; !f&&(f=function(){d&&this.base.apply(this,arguments)}); if(b)var e=f,f=function(){var 
a=this._||(this._={}),f; for(f in b){var d=b[f]; a[f]=typeof d=="function"?CKEDITOR.tools.bind(d,this):d}e.apply(this,arguments)}; if(d){f.prototype= 
this.prototypedCopy(d.prototype); f.prototype.constructor=f; f.base=d; f.baseProto=d.prototype; f.prototype.base=function(){this.base=d.prototype.base; 
d.apply(this,arguments); this.base=arguments.callee}}c&&this.extend(f.prototype,c,true); a&&this.extend(f,a,true); return f},addFunction:function(f,d){return 
a.push(function(){return f.apply(d||this,arguments)})-1},removeFunction:function(f){a[f]=null},callFunction:function(f){var d=a[f]; return 
d&&d.apply(window,Array.prototype.slice.call(arguments,1))},cssLength:function(){var a= /^-?\d+\.?\d*px$/,f; return 
function(d){f=CKEDITOR.tools.trim(d+"")+"px"; return a.test(f)?f:d||""}}(),convertToPx:function(){var a; return 
function(f){if(!a){a=CKEDITOR.dom.element.createFromHtml('<div style="position:absolute; left:-9999px; top:-9999px; margin:0px; padding:0px; border:0px; 
"></div>',CKEDITOR.document); CKEDITOR.document.getBody().append(a)}if(!/%$/.test(f)){a.setStyle("width",f); return a.$.clientWidth}return 
f}}(),repeat:function(a,f){return Array(f+1).join(a)},tryThese:function(){for(var a, f=0,d=arguments.length; f<d; f++){var b=arguments[f]; try{a=b(); 
break}catch(c){}}return a},genKey:function(){return Array.prototype.slice.call(arguments).join("-")},defer:function(a){return function(){var f=arguments,d=this; 
window.setTimeout(function(){a.apply(d,f)},0)}},normalizeCssText:function(a,f){var d=[],b,c=CKEDITOR.tools.parseCssText(a,true,f); for(b in 
c)d.push(b+":"+c[b]); d.sort(); return d.length?d.join("; ")+"; ":""},convertRgbToHex:function(a){return 
a.replace(/(?:rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\))/gi, function(a,f,d,b){a=[f,d,b]; for(f=0; f<3; 
f++)a[f]=("0"+parseInt(a[f],10).toString(16)).slice(-2); return"#"+a.join("")})},parseCssText:function(a,f,d){var b={}; if(d){d=new 
CKEDITOR.dom.element("span"); d.setAttribute("style",a); a=CKEDITOR.tools.convertRgbToHex(d.getAttribute("style")||"")}if(!a||a=="; ")return b; a.replace(/' 
/g,'"').replace(/\s*([^:; \s]+)\s*:\s*([^; ]+)\s*(?=;
|$)/g,function(a,d,m){if(f){d=d.toLowerCase();
d=="font-family"&&(m=m.toLowerCase().replace(/["']/g,"").replace(/\s*,\s*/g,","));

m=CKEDITOR.tools.trim(m)}b[d]=m}); return b},writeCssText:function(a,f){var d,b=[]; for(d in a)b.push(d+":"+a[d]); f&&b.sort(); return b.join(";
 ")},objectCompare:function(a,f,d){var b; if(!a&&!f)return true; if(!a||!f)return false; for(b in a)if(a[b]!=f[b])return false; if(!d)for(b in 
f)if(a[b]!=f[b])return false; return true},objectKeys:function(a){var f=[],d; for(d in a)f.push(d); return f},convertArrayToObject:function(a,f){var d={}; 
arguments.length==1&&(f=true); for(var b=0,c=a.length; b<c; ++b)d[a[b]]=f;

return d},fixDomain:function(){for(var a; ; )try{a=window.parent.document.domain; break}catch(f){a=a?a.replace(/.+?(?:\.|$)/,""):document.domain; if(!a)break; 
document.domain=a}return!!a},eventsBuffer:function(a,f){function d(){c=(new Date).getTime(); b=false; f()}var b,c=0; return{input:function(){if(!b){var f=(new 
Date).getTime()-c; f<a?b=setTimeout(d,a-f):d()}},reset:function(){b&&clearTimeout(b); b=c=0}}},enableHtml5Elements:function(a,f){for(var 
d=["abbr","article","aside","audio","bdi","canvas","data", 
"datalist","details","figcaption","figure","footer","header","hgroup","mark","meter","nav","output","progress","section","summary","time","video"],b=d.length,c; 
b--; ){c=a.createElement(d[b]); f&&a.appendChild(c)}},checkIfAnyArrayItemMatches:function(a,f){for(var d=0,b=a.length; d<b; ++d)if(a[d].match(f))return true; 
return false},checkIfAnyObjectPropertyMatches:function(a,f){for(var d in a)if(d.match(f))return true; return false},transparentImageData:"data:image/gif; 
base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="}})();

CKEDITOR.dtd=function(){var a=CKEDITOR.tools.extend,e=function(a,f){for(var d=CKEDITOR.tools.clone(a),b=1; b<arguments.length; b++){var f=arguments[b],c; for(c 
in f)delete d[c]}return 
d},b={},c={},f={address:1,article:1,aside:1,blockquote:1,details:1,div:1,dl:1,fieldset:1,figure:1,footer:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,header:1,hgroup:1,hr:1,main:1,menu:1,nav:1,ol:1,p:1,pre:1,section:1,table:1,ul:1},d={command:1,link:1,meta:1,noscript:1,script:1,style:1},h={},l={"#":1},i={center:1,dir:1,noframes:1};

a(b,{a:1,abbr:1,area:1,audio:1,b:1,bdi:1,bdo:1,br:1,button:1,canvas:1,cite:1,code:1,command:1,datalist:1,del:1,dfn:1,em:1,embed:1,i:1,iframe:1,img:1,input:1,ins:1,kbd:1,keygen:1,label:1,map:1,mark:1,meter:1,noscript:1,object:1,output:1,progress:1,q:1,ruby:1,s:1,samp:1,script:1,select:1,small:1,span:1,strong:1,sub:1,sup:1,textarea:1,time:1,u:1,"var":1,video:1,wbr:1},l,{acronym:1,applet:1,basefont:1,big:1,font:1,isindex:1,strike:1,style:1,tt:1}); 
a(c,f,b,i); e={a:e(b,{a:1,button:1}),abbr:b,address:c, 
area:h,article:c,aside:c,audio:a({source:1,track:1},c),b:b,base:h,bdi:b,bdo:b,blockquote:c,body:c,br:h,button:e(b,{a:1,button:1}),canvas:b,caption:c,cite:b,code:b,col:h,colgroup:{col:1},command:h,datalist:a({option:1},b),dd:c,del:b,details:a({summary:1},c),dfn:b,div:c,dl:{dt:1,dd:1},dt:c,em:b,embed:h,fieldset:a({legend:1},c),figcaption:c,figure:a({figcaption:1},c),footer:c,form:c,h1:b,h2:b,h3:b,h4:b,h5:b,h6:b,head:a({title:1,base:1},d),header:c,hgroup:{h1:1,h2:1,h3:1,h4:1,h5:1,h6:1},hr:h,html:a({head:1, 
body:1},c,d),i:b,iframe:l,img:h,input:h,ins:b,kbd:b,keygen:h,label:b,legend:b,li:c,link:h,main:c,map:c,mark:b,menu:a({li:1},c),meta:h,meter:e(b,{meter:1}),nav:c,noscript:a({link:1,meta:1,style:1},b),object:a({param:1},b),ol:{li:1},optgroup:{option:1},option:l,output:b,p:b,param:h,pre:b,progress:e(b,{progress:1}),q:b,rp:b,rt:b,ruby:a({rp:1,rt:1},b),s:b,samp:b,script:l,section:c,select:{optgroup:1,option:1},small:b,source:h,span:b,strong:b,style:l,sub:b,summary:b,sup:b,table:{caption:1,colgroup:1,thead:1, 
tfoot:1,tbody:1,tr:1},tbody:{tr:1},td:c,textarea:l,tfoot:{tr:1},th:c,thead:{tr:1},time:e(b,{time:1}),title:l,tr:{th:1,td:1},track:h,u:b,ul:{li:1},"var":b,video:a({source:1,track:1},c),wbr:h,acronym:b,applet:a({param:1},c),basefont:h,big:b,center:c,dialog:h,dir:{li:1},font:b,isindex:h,noframes:c,strike:b,tt:b}; 
a(e,{$block:a({audio:1,dd:1,dt:1,figcaption:1,li:1,video:1},f,i),$blockLimit:{article:1,aside:1,audio:1,body:1,caption:1,details:1,dir:1,div:1,dl:1,fieldset:1,figcaption:1,figure:1,footer:1, 
form:1,header:1,hgroup:1,main:1,menu:1,nav:1,ol:1,section:1,table:1,td:1,th:1,tr:1,ul:1,video:1},$cdata:{script:1,style:1},$editable:{address:1,article:1,aside:1,blockquote:1,body:1,details:1,div:1,fieldset:1,figcaption:1,footer:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,header:1,hgroup:1,main:1,nav:1,p:1,pre:1,section:1},$empty:{area:1,base:1,basefont:1,br:1,col:1,command:1,dialog:1,embed:1,hr:1,img:1,input:1,isindex:1,keygen:1,link:1,meta:1,param:1,source:1,track:1,wbr:1},$inline:b,$list:{dl:1,ol:1, 
ul:1},$listItem:{dd:1,dt:1,li:1},$nonBodyContent:a({body:1,head:1,html:1},e.head),$nonEditable:{applet:1,audio:1,button:1,embed:1,iframe:1,map:1,object:1,option:1,param:1,script:1,textarea:1,video:1},$object:{applet:1,audio:1,button:1,hr:1,iframe:1,img:1,input:1,object:1,select:1,table:1,textarea:1,video:1},$removeEmpty:{abbr:1,acronym:1,b:1,bdi:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,mark:1,meter:1,output:1,q:1,ruby:1,s:1,samp:1,small:1,span:1,strike:1,strong:1, 
sub:1,sup:1,time:1,tt:1,u:1,"var":1},$tabIndex:{a:1,area:1,button:1,input:1,object:1,select:1,textarea:1},$tableContent:{caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1},$transparent:{a:1,audio:1,canvas:1,del:1,ins:1,map:1,noscript:1,object:1,video:1},$intermediate:{caption:1,colgroup:1,dd:1,dt:1,figcaption:1,legend:1,li:1,optgroup:1,option:1,rp:1,rt:1,summary:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1}}); 
return e}(); CKEDITOR.dom.event=function(a){this.$=a};

CKEDITOR.dom.event.prototype={getKey:function(){return this.$.keyCode||this.$.which},getKeystroke:function(){var a=this.getKey(); 
if(this.$.ctrlKey||this.$.metaKey)a=a+CKEDITOR.CTRL; this.$.shiftKey&&(a=a+CKEDITOR.SHIFT); this.$.altKey&&(a=a+CKEDITOR.ALT); return 
a},preventDefault:function(a){var e=this.$; e.preventDefault?e.preventDefault():e.returnValue=false; a&&this.stopPropagation()},stopPropagation:function(){var 
a=this.$; a.stopPropagation?a.stopPropagation():a.cancelBubble=true},getTarget:function(){var a= this.$.target||this.$.srcElement; return a?new 
CKEDITOR.dom.node(a):null},getPhase:function(){return this.$.eventPhase||2},getPageOffset:function(){var a=this.getTarget().getDocument().$; 
return{x:this.$.pageX||this.$.clientX+(a.documentElement.scrollLeft||a.body.scrollLeft),y:this.$.pageY||this.$.clientY+(a.documentElement.scrollTop||a.body.scrollTop)}}}; 
CKEDITOR.CTRL=1114112; CKEDITOR.SHIFT=2228224; CKEDITOR.ALT=4456448; CKEDITOR.EVENT_PHASE_CAPTURING=1; CKEDITOR.EVENT_PHASE_AT_TARGET=2;

CKEDITOR.EVENT_PHASE_BUBBLING=3; CKEDITOR.dom.domObject=function(a){if(a)this.$=a};

CKEDITOR.dom.domObject.prototype=function(){var a=function(a,b){return function(c){typeof CKEDITOR!="undefined"&&a.fire(b,new CKEDITOR.dom.event(c))}}; 
return{getPrivate:function(){var a; if(!(a=this.getCustomData("_")))this.setCustomData("_",a={}); return a},on:function(e){var 
b=this.getCustomData("_cke_nativeListeners"); if(!b){b={}; this.setCustomData("_cke_nativeListeners",b)}if(!b[e]){b=b[e]=a(this,e); 
this.$.addEventListener?this.$.addEventListener(e,b,!!CKEDITOR.event.useCapture):this.$.attachEvent&& this.$.attachEvent("on"+e,b)}return 
CKEDITOR.event.prototype.on.apply(this,arguments)},removeListener:function(a){CKEDITOR.event.prototype.removeListener.apply(this,arguments); 
if(!this.hasListeners(a)){var b=this.getCustomData("_cke_nativeListeners"),c=b&&b[a]; 
if(c){this.$.removeEventListener?this.$.removeEventListener(a,c,false):this.$.detachEvent&&this.$.detachEvent("on"+a,c); delete 
b[a]}}},removeAllListeners:function(){var a=this.getCustomData("_cke_nativeListeners"),b; for(b in a){var c=a[b]; this.$.detachEvent? 
this.$.detachEvent("on"+b,c):this.$.removeEventListener&&this.$.removeEventListener(b,c,false); delete 
a[b]}CKEDITOR.event.prototype.removeAllListeners.call(this)}}}();

(function(a){var e={}; CKEDITOR.on("reset",function(){e={}}); a.equals=function(a){try{return a&&a.$===this.$}catch(c){return false}}; 
a.setCustomData=function(a,c){var f=this.getUniqueId(); (e[f]||(e[f]={}))[a]=c; return this}; a.getCustomData=function(a){var c=this.$["data-cke-expando"]; 
return(c=c&&e[c])&&a in c?c[a]:null}; a.removeCustomData=function(a){var c=this.$["data-cke-expando"],c=c&&e[c],f,d; if(c){f=c[a]; d=a in c; delete c[a]}return 
d?f:null}; a.clearCustomData=function(){this.removeAllListeners();

var a=this.$["data-cke-expando"]; a&&delete e[a]}; a.getUniqueId=function(){return 
this.$["data-cke-expando"]||(this.$["data-cke-expando"]=CKEDITOR.tools.getNextNumber())}; CKEDITOR.event.implementOn(a)})(CKEDITOR.dom.domObject.prototype);

CKEDITOR.dom.node=function(a){return a?new 
CKEDITOR.dom[a.nodeType==CKEDITOR.NODE_DOCUMENT?"document":a.nodeType==CKEDITOR.NODE_ELEMENT?"element":a.nodeType==CKEDITOR.NODE_TEXT?"text":a.nodeType==CKEDITOR.NODE_COMMENT?"comment":a.nodeType==CKEDITOR.NODE_DOCUMENT_FRAGMENT?"documentFragment":"domObject"](a):this}; 
CKEDITOR.dom.node.prototype=new CKEDITOR.dom.domObject; CKEDITOR.NODE_ELEMENT=1; CKEDITOR.NODE_DOCUMENT=9; CKEDITOR.NODE_TEXT=3; CKEDITOR.NODE_COMMENT=8; 
CKEDITOR.NODE_DOCUMENT_FRAGMENT=11;

CKEDITOR.POSITION_IDENTICAL=0; CKEDITOR.POSITION_DISCONNECTED=1; CKEDITOR.POSITION_FOLLOWING=2; CKEDITOR.POSITION_PRECEDING=4; CKEDITOR.POSITION_IS_CONTAINED=8; 
CKEDITOR.POSITION_CONTAINS=16;

CKEDITOR.tools.extend(CKEDITOR.dom.node.prototype,{appendTo:function(a,e){a.append(this,e); return a},clone:function(a,e){var 
b=this.$.cloneNode(a),c=function(f){f["data-cke-expando"]&&(f["data-cke-expando"]=false); 
if(f.nodeType==CKEDITOR.NODE_ELEMENT){e||f.removeAttribute("id",false); if(a)for(var f=f.childNodes,d=0; d<f.length; d++)c(f[d])}}; c(b); return new 
CKEDITOR.dom.node(b)},hasPrevious:function(){return!!this.$.previousSibling},hasNext:function(){return!!this.$.nextSibling},insertAfter:function(a){a.$.parentNode.insertBefore(this.$, 
a.$.nextSibling); return a},insertBefore:function(a){a.$.parentNode.insertBefore(this.$,a.$); return 
a},insertBeforeMe:function(a){this.$.parentNode.insertBefore(a.$,this.$); return a},getAddress:function(a){for(var 
e=[],b=this.getDocument().$.documentElement,c=this.$; c&&c!=b; ){var f=c.parentNode; f&&e.unshift(this.getIndex.call({$:c},a)); c=f}return 
e},getDocument:function(){return new CKEDITOR.dom.document(this.$.ownerDocument||this.$.parentNode.ownerDocument)},getIndex:function(a){function e(a,f){var b= 
f?a.nextSibling:a.previousSibling; return!b||b.nodeType!=CKEDITOR.NODE_TEXT?null:b.nodeValue?b:e(b,f)}var b=this.$,c=-1,f; 
if(!this.$.parentNode||a&&b.nodeType==CKEDITOR.NODE_TEXT&&!b.nodeValue&&!e(b)&&!e(b,true))return-1; do 
if(!a||!(b!=this.$&&b.nodeType==CKEDITOR.NODE_TEXT&&(f||!b.nodeValue))){c++; f=b.nodeType==CKEDITOR.NODE_TEXT}while(b=b.previousSibling); return 
c},getNextSourceNode:function(a,e,b){if(b&&!b.call)var c=b,b=function(a){return!a.equals(c)}; var a=!a&&this.getFirst&&this.getFirst(),f;

if(!a){if(this.type==CKEDITOR.NODE_ELEMENT&&b&&b(this,true)===false)return null; a=this.getNext()}for(; !a&&(f=(f||this).getParent()); 
){if(b&&b(f,true)===false)return null; 
a=f.getNext()}return!a||b&&b(a)===false?null:e&&e!=a.type?a.getNextSourceNode(false,e,b):a},getPreviousSourceNode:function(a,e,b){if(b&&!b.call)var 
c=b,b=function(a){return!a.equals(c)}; var a=!a&&this.getLast&&this.getLast(),f; if(!a){if(this.type==CKEDITOR.NODE_ELEMENT&&b&&b(this,true)===false)return 
null; a=this.getPrevious()}for(; !a&& (f=(f||this).getParent()); ){if(b&&b(f,true)===false)return null; 
a=f.getPrevious()}return!a||b&&b(a)===false?null:e&&a.type!=e?a.getPreviousSourceNode(false,e,b):a},getPrevious:function(a){var e=this.$,b; do 
b=(e=e.previousSibling)&&e.nodeType!=10&&new CKEDITOR.dom.node(e); while(b&&a&&!a(b)); return b},getNext:function(a){var e=this.$,b; do b=(e=e.nextSibling)&&new 
CKEDITOR.dom.node(e); while(b&&a&&!a(b)); return b},getParent:function(a){var e=this.$.parentNode; return e&&(e.nodeType==CKEDITOR.NODE_ELEMENT|| 
a&&e.nodeType==CKEDITOR.NODE_DOCUMENT_FRAGMENT)?new CKEDITOR.dom.node(e):null},getParents:function(a){var e=this,b=[]; do b[a?"push":"unshift"](e); 
while(e=e.getParent()); return b},getCommonAncestor:function(a){if(a.equals(this))return this; if(a.contains&&a.contains(this))return a; var 
e=this.contains?this:this.getParent(); do if(e.contains(a))return e; while(e=e.getParent()); return null},getPosition:function(a){var e=this.$,b=a.$; 
if(e.compareDocumentPosition)return e.compareDocumentPosition(b); if(e== b)return CKEDITOR.POSITION_IDENTICAL; 
if(this.type==CKEDITOR.NODE_ELEMENT&&a.type==CKEDITOR.NODE_ELEMENT){if(e.contains){if(e.contains(b))return 
CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_PRECEDING; if(b.contains(e))return CKEDITOR.POSITION_IS_CONTAINED+CKEDITOR.POSITION_FOLLOWING}if("sourceIndex"in 
e)return 
e.sourceIndex<0||b.sourceIndex<0?CKEDITOR.POSITION_DISCONNECTED:e.sourceIndex<b.sourceIndex?CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_FOLLOWING}for(var 
e=this.getAddress(),a=a.getAddress(), b=Math.min(e.length,a.length),c=0; c<=b-1; c++)if(e[c]!=a[c]){if(c<b)return 
e[c]<a[c]?CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_FOLLOWING; break}return 
e.length<a.length?CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_IS_CONTAINED+CKEDITOR.POSITION_FOLLOWING},getAscendant:function(a,e){var 
b=this.$,c,f; if(!e)b=b.parentNode; if(typeof a=="function"){f=true; c=a}else{f=false; c=function(f){f=typeof f.nodeName=="string"?f.nodeName.toLowerCase():""; 
return typeof a=="string"?f== a:f in a}}for(; b; ){if(c(f?new CKEDITOR.dom.node(b):b))return new CKEDITOR.dom.node(b); 
try{b=b.parentNode}catch(d){b=null}}return null},hasAscendant:function(a,e){var b=this.$; if(!e)b=b.parentNode; for(; b; 
){if(b.nodeName&&b.nodeName.toLowerCase()==a)return true; b=b.parentNode}return false},move:function(a,e){a.append(this.remove(),e)},remove:function(a){var 
e=this.$,b=e.parentNode; if(b){if(a)for(; a=e.firstChild; )b.insertBefore(e.removeChild(a),e); b.removeChild(e)}return 
this},replace:function(a){this.insertBefore(a);

a.remove()},trim:function(){this.ltrim(); this.rtrim()},ltrim:function(){for(var a; this.getFirst&&(a=this.getFirst()); ){if(a.type==CKEDITOR.NODE_TEXT){var 
e=CKEDITOR.tools.ltrim(a.getText()),b=a.getLength(); if(e){if(e.length<b){a.split(b-e.length); this.$.removeChild(this.$.firstChild)}}else{a.remove(); 
continue}}break}},rtrim:function(){for(var a; this.getLast&&(a=this.getLast()); ){if(a.type==CKEDITOR.NODE_TEXT){var 
e=CKEDITOR.tools.rtrim(a.getText()),b=a.getLength(); if(e){if(e.length<b){a.split(e.length);

this.$.lastChild.parentNode.removeChild(this.$.lastChild)}}else{a.remove(); 
continue}}break}if(CKEDITOR.env.needsBrFiller)(a=this.$.lastChild)&&(a.type==1&&a.nodeName.toLowerCase()=="br")&&a.parentNode.removeChild(a)},isReadOnly:function(){var 
a=this; this.type!=CKEDITOR.NODE_ELEMENT&&(a=this.getParent()); if(a&&typeof 
a.$.isContentEditable!="undefined")return!(a.$.isContentEditable||a.data("cke-editable")); for(; a; ){if(a.data("cke-editable"))break; 
if(a.getAttribute("contentEditable")=="false")return true;

if(a.getAttribute("contentEditable")=="true")break; a=a.getParent()}return!a}}); CKEDITOR.dom.window=function(a){CKEDITOR.dom.domObject.call(this,a)}; 
CKEDITOR.dom.window.prototype=new CKEDITOR.dom.domObject;

CKEDITOR.tools.extend(CKEDITOR.dom.window.prototype,{focus:function(){this.$.focus()},getViewPaneSize:function(){var 
a=this.$.document,e=a.compatMode=="CSS1Compat"; 
return{width:(e?a.documentElement.clientWidth:a.body.clientWidth)||0,height:(e?a.documentElement.clientHeight:a.body.clientHeight)||0}},getScrollPosition:function(){var 
a=this.$; if("pageXOffset"in a)return{x:a.pageXOffset||0,y:a.pageYOffset||0}; a=a.document; 
return{x:a.documentElement.scrollLeft||a.body.scrollLeft||0,y:a.documentElement.scrollTop|| a.body.scrollTop||0}},getFrame:function(){var a=this.$.frameElement; 
return a?new CKEDITOR.dom.element.get(a):null}}); CKEDITOR.dom.document=function(a){CKEDITOR.dom.domObject.call(this,a)}; CKEDITOR.dom.document.prototype=new 
CKEDITOR.dom.domObject;

CKEDITOR.tools.extend(CKEDITOR.dom.document.prototype,{type:CKEDITOR.NODE_DOCUMENT,appendStyleSheet:function(a){if(this.$.createStyleSheet)this.$.createStyleSheet(a); 
else{var e=new CKEDITOR.dom.element("link"); e.setAttributes({rel:"stylesheet",type:"text/css",href:a}); 
this.getHead().append(e)}},appendStyleText:function(a){if(this.$.createStyleSheet){var e=this.$.createStyleSheet(""); e.cssText=a}else{var b=new 
CKEDITOR.dom.element("style",this); b.append(new CKEDITOR.dom.text(a,this)); this.getHead().append(b)}return e|| b.$.sheet},createElement:function(a,e){var 
b=new CKEDITOR.dom.element(a,this); if(e){e.attributes&&b.setAttributes(e.attributes); e.styles&&b.setStyles(e.styles)}return b},createText:function(a){return 
new CKEDITOR.dom.text(a,this)},focus:function(){this.getWindow().focus()},getActive:function(){var a; try{a=this.$.activeElement}catch(e){return null}return new 
CKEDITOR.dom.element(a)},getById:function(a){return(a=this.$.getElementById(a))?new CKEDITOR.dom.element(a):null},getByAddress:function(a,e){for(var b= 
this.$.documentElement,c=0; b&&c<a.length; c++){var f=a[c]; if(e)for(var d=-1,h=0; h<b.childNodes.length; h++){var l=b.childNodes[h]; 
if(!(e===true&&l.nodeType==3&&l.previousSibling&&l.previousSibling.nodeType==3)){d++; if(d==f){b=l; break}}}else b=b.childNodes[f]}return b?new 
CKEDITOR.dom.node(b):null},getElementsByTag:function(a,e){!(CKEDITOR.env.ie&&document.documentMode<=8)&&e&&(a=e+":"+a); return new 
CKEDITOR.dom.nodeList(this.$.getElementsByTagName(a))},getHead:function(){var a=this.$.getElementsByTagName("head")[0];

return a=a?new CKEDITOR.dom.element(a):this.getDocumentElement().append(new CKEDITOR.dom.element("head"),true)},getBody:function(){return new 
CKEDITOR.dom.element(this.$.body)},getDocumentElement:function(){return new CKEDITOR.dom.element(this.$.documentElement)},getWindow:function(){return new 
CKEDITOR.dom.window(this.$.parentWindow||this.$.defaultView)},write:function(a){this.$.open("text/html","replace"); 
CKEDITOR.env.ie&&(a=a.replace(/(?:^\s*<!DOCTYPE[^>]*?>)|^/i,'$&\n<script data-cke-temp="1">('+ CKEDITOR.tools.fixDomain+")(); <\/script>")); this.$.write(a); 
this.$.close()},find:function(a){return new CKEDITOR.dom.nodeList(this.$.querySelectorAll(a))},findOne:function(a){return(a=this.$.querySelector(a))?new 
CKEDITOR.dom.element(a):null},_getHtml5ShivFrag:function(){var a=this.getCustomData("html5ShivFrag"); if(!a){a=this.$.createDocumentFragment(); 
CKEDITOR.tools.enableHtml5Elements(a,true); this.setCustomData("html5ShivFrag",a)}return a}}); CKEDITOR.dom.nodeList=function(a){this.$=a};

CKEDITOR.dom.nodeList.prototype={count:function(){return this.$.length},getItem:function(a){if(a<0||a>=this.$.length)return null; return(a=this.$[a])?new 
CKEDITOR.dom.node(a):null}}; CKEDITOR.dom.element=function(a,e){typeof a=="string"&&(a=(e?e.$:document).createElement(a)); CKEDITOR.dom.domObject.call(this,a)}; 
CKEDITOR.dom.element.get=function(a){return(a=typeof a=="string"?document.getElementById(a)||document.getElementsByName(a)[0]:a)&&(a.$?a:new 
CKEDITOR.dom.element(a))};

CKEDITOR.dom.element.prototype=new CKEDITOR.dom.node; CKEDITOR.dom.element.createFromHtml=function(a,e){var b=new CKEDITOR.dom.element("div",e); b.setHtml(a); 
return b.getFirst().remove()};

CKEDITOR.dom.element.setMarker=function(a,e,b,c){var 
f=e.getCustomData("list_marker_id")||e.setCustomData("list_marker_id",CKEDITOR.tools.getNextNumber()).getCustomData("list_marker_id"),d=e.getCustomData("list_marker_names")||e.setCustomData("list_marker_names",{}).getCustomData("list_marker_names"); 
a[f]=e; d[b]=1; return e.setCustomData(b,c)}; CKEDITOR.dom.element.clearAllMarkers=function(a){for(var e in a)CKEDITOR.dom.element.clearMarkers(a,a[e],1)};

CKEDITOR.dom.element.clearMarkers=function(a,e,b){var c=e.getCustomData("list_marker_names"),f=e.getCustomData("list_marker_id"),d; for(d in 
c)e.removeCustomData(d); e.removeCustomData("list_marker_names"); if(b){e.removeCustomData("list_marker_id"); delete a[f]}};

(function(){function a(a){var d=true; if(!a.$.id){a.$.id="cke_tmp_"+CKEDITOR.tools.getNextNumber(); d=false}return 
function(){d||a.removeAttribute("id")}}function e(a,d){return"#"+a.$.id+" "+d.split(/,\s*/).join(", #"+a.$.id+" ")}function b(a){for(var d=0,b=0,e=c[a].length; 
b<e; b++)d=d+(parseInt(this.getComputedStyle(c[a][b])||0,10)||0); return 
d}CKEDITOR.tools.extend(CKEDITOR.dom.element.prototype,{type:CKEDITOR.NODE_ELEMENT,addClass:function(a){var d=this.$.className; 
d&&(RegExp("(?:^|\\s)"+a+"(?:\\s|$)", "").test(d)||(d=d+(" "+a))); this.$.className=d||a; return this},removeClass:function(a){var d=this.getAttribute("class"); 
if(d){a=RegExp("(?:^|\\s+)"+a+"(?=\\s|$)","i"); 
if(a.test(d))(d=d.replace(a,"").replace(/^\s+/,""))?this.setAttribute("class",d):this.removeAttribute("class")}return this},hasClass:function(a){return 
RegExp("(?:^|\\s+)"+a+"(?=\\s|$)","").test(this.getAttribute("class"))},append:function(a,d){typeof a=="string"&&(a=this.getDocument().createElement(a)); 
d?this.$.insertBefore(a.$,this.$.firstChild): this.$.appendChild(a.$); return a},appendHtml:function(a){if(this.$.childNodes.length){var d=new 
CKEDITOR.dom.element("div",this.getDocument()); d.setHtml(a); d.moveChildren(this)}else 
this.setHtml(a)},appendText:function(a){this.$.text!=null?this.$.text=this.$.text+a:this.append(new 
CKEDITOR.dom.text(a))},appendBogus:function(a){if(a||CKEDITOR.env.needsBrFiller){for(a=this.getLast(); 
a&&a.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.rtrim(a.getText()); )a=a.getPrevious(); if(!a||!a.is||!a.is("br")){a=this.getDocument().createElement("br");

CKEDITOR.env.gecko&&a.setAttribute("type","_moz"); this.append(a)}}},breakParent:function(a){var d=new CKEDITOR.dom.range(this.getDocument()); 
d.setStartAfter(this); d.setEndAfter(a); a=d.extractContents(); d.insertNode(this.remove()); 
a.insertAfterNode(this)},contains:CKEDITOR.env.ie||CKEDITOR.env.webkit?function(a){var d=this.$; return 
a.type!=CKEDITOR.NODE_ELEMENT?d.contains(a.getParent().$):d!=a.$&&d.contains(a.$)}:function(a){return!!(this.$.compareDocumentPosition(a.$)&16)},focus:function(){function 
a(){try{this.$.focus()}catch(f){}} return function(d){d?CKEDITOR.tools.setTimeout(a,100,this):a.call(this)}}(),getHtml:function(){var a=this.$.innerHTML; return 
CKEDITOR.env.ie?a.replace(/<\?[^>]*>/g,""):a},getOuterHtml:function(){if(this.$.outerHTML)return this.$.outerHTML.replace(/<\?[^>]*>/,""); var 
a=this.$.ownerDocument.createElement("div"); a.appendChild(this.$.cloneNode(true)); return a.innerHTML},getClientRect:function(){var 
a=CKEDITOR.tools.extend({},this.$.getBoundingClientRect()); !a.width&&(a.width=a.right-a.left); !a.height&& (a.height=a.bottom-a.top); return 
a},setHtml:CKEDITOR.env.ie&&CKEDITOR.env.version<9?function(a){try{var d=this.$; if(this.getParent())return d.innerHTML=a; var 
b=this.getDocument()._getHtml5ShivFrag(); b.appendChild(d); d.innerHTML=a; b.removeChild(d); return a}catch(c){this.$.innerHTML=""; d=new 
CKEDITOR.dom.element("body",this.getDocument()); d.$.innerHTML=a; for(d=d.getChildren(); d.count(); )this.append(d.getItem(0)); return a}}:function(a){return 
this.$.innerHTML=a},setText:function(){var a=document.createElement("p");

a.innerHTML="x"; a=a.textContent; return function(d){this.$[a?"textContent":"innerText"]=d}}(),getAttribute:function(){var a=function(a){return 
this.$.getAttribute(a,2)}; return CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(a){switch(a){case "class":a="className"; break; case 
"http-equiv":a="httpEquiv"; break; case "name":return this.$.name; case "tabindex":a=this.$.getAttribute(a,2); a!==0&&this.$.tabIndex===0&&(a=null); return a; 
case "checked":a=this.$.attributes.getNamedItem(a);

return(a.specified?a.nodeValue:this.$.checked)?"checked":null; case "hspace":case "value":return this.$[a]; case "style":return this.$.style.cssText; case 
"contenteditable":case "contentEditable":return this.$.attributes.getNamedItem("contentEditable").specified?this.$.getAttribute("contentEditable"):null}return 
this.$.getAttribute(a,2)}:a}(),getChildren:function(){return new CKEDITOR.dom.nodeList(this.$.childNodes)},getComputedStyle:CKEDITOR.env.ie?function(a){return 
this.$.currentStyle[CKEDITOR.tools.cssStyleToDomStyle(a)]}: function(a){var d=this.getWindow().$.getComputedStyle(this.$,null); return 
d?d.getPropertyValue(a):""},getDtd:function(){var a=CKEDITOR.dtd[this.getName()]; this.getDtd=function(){return a}; return 
a},getElementsByTag:CKEDITOR.dom.document.prototype.getElementsByTag,getTabIndex:CKEDITOR.env.ie?function(){var a=this.$.tabIndex; 
a===0&&(!CKEDITOR.dtd.$tabIndex[this.getName()]&&parseInt(this.getAttribute("tabindex"),10)!==0)&&(a=-1); return a}:CKEDITOR.env.webkit?function(){var 
a=this.$.tabIndex; if(a===void 0){a= parseInt(this.getAttribute("tabindex"),10); isNaN(a)&&(a=-1)}return a}:function(){return 
this.$.tabIndex},getText:function(){return this.$.textContent||this.$.innerText||""},getWindow:function(){return 
this.getDocument().getWindow()},getId:function(){return this.$.id||null},getNameAtt:function(){return this.$.name||null},getName:function(){var 
a=this.$.nodeName.toLowerCase(); if(CKEDITOR.env.ie&&document.documentMode<=8){var d=this.$.scopeName; 
d!="HTML"&&(a=d.toLowerCase()+":"+a)}this.getName=function(){return a};

return this.getName()},getValue:function(){return this.$.value},getFirst:function(a){var d=this.$.firstChild; (d=d&&new 
CKEDITOR.dom.node(d))&&(a&&!a(d))&&(d=d.getNext(a)); return d},getLast:function(a){var d=this.$.lastChild; (d=d&&new 
CKEDITOR.dom.node(d))&&(a&&!a(d))&&(d=d.getPrevious(a)); return d},getStyle:function(a){return 
this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)]},is:function(){var a=this.getName(); if(typeof arguments[0]=="object")return!!arguments[0][a]; for(var d=0; 
d<arguments.length; d++)if(arguments[d]== a)return true; return false},isEditable:function(a){var d=this.getName(); 
if(this.isReadOnly()||this.getComputedStyle("display")=="none"||this.getComputedStyle("visibility")=="hidden"||CKEDITOR.dtd.$nonEditable[d]||CKEDITOR.dtd.$empty[d]||this.is("a")&&(this.data("cke-saved-name")||this.hasAttribute("name"))&&!this.getChildCount())return 
false; if(a!==false){a=CKEDITOR.dtd[d]||CKEDITOR.dtd.span; return!(!a||!a["#"])}return true},isIdentical:function(a){var d=this.clone(0,1),a=a.clone(0,1); 
d.removeAttributes(["_moz_dirty", "data-cke-expando","data-cke-saved-href","data-cke-saved-name"]); 
a.removeAttributes(["_moz_dirty","data-cke-expando","data-cke-saved-href","data-cke-saved-name"]); 
if(d.$.isEqualNode){d.$.style.cssText=CKEDITOR.tools.normalizeCssText(d.$.style.cssText); a.$.style.cssText=CKEDITOR.tools.normalizeCssText(a.$.style.cssText); 
return d.$.isEqualNode(a.$)}d=d.getOuterHtml(); a=a.getOuterHtml(); if(CKEDITOR.env.ie&&CKEDITOR.env.version<9&&this.is("a")){var b=this.getParent(); 
if(b.type==CKEDITOR.NODE_ELEMENT){b= b.clone(); b.setHtml(d); d=b.getHtml(); b.setHtml(a); a=b.getHtml()}}return d==a},isVisible:function(){var 
a=(this.$.offsetHeight||this.$.offsetWidth)&&this.getComputedStyle("visibility")!="hidden",d,b; if(a&&CKEDITOR.env.webkit){d=this.getWindow(); 
if(!d.equals(CKEDITOR.document.getWindow())&&(b=d.$.frameElement))a=(new 
CKEDITOR.dom.element(b)).isVisible()}return!!a},isEmptyInlineRemoveable:function(){if(!CKEDITOR.dtd.$removeEmpty[this.getName()])return false; for(var 
a=this.getChildren(),d=0,b=a.count(); d< b; d++){var c=a.getItem(d); 
if(!(c.type==CKEDITOR.NODE_ELEMENT&&c.data("cke-bookmark"))&&(c.type==CKEDITOR.NODE_ELEMENT&&!c.isEmptyInlineRemoveable()||c.type==CKEDITOR.NODE_TEXT&&CKEDITOR.tools.trim(c.getText())))return 
false}return true},hasAttributes:CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(){for(var a=this.$.attributes,d=0; d<a.length; d++){var 
b=a[d]; switch(b.nodeName){case "class":if(this.getAttribute("class"))return true; case "data-cke-expando":continue; default:if(b.specified)return true}}return 
false}: function(){var a=this.$.attributes,d=a.length,b={"data-cke-expando":1,_moz_dirty:1}; return 
d>0&&(d>2||!b[a[0].nodeName]||d==2&&!b[a[1].nodeName])},hasAttribute:function(){function a(d){var f=this.$.attributes.getNamedItem(d); 
if(this.getName()=="input")switch(d){case "class":return this.$.className.length>0; case "checked":return!!this.$.checked; case 
"value":d=this.getAttribute("type"); return d=="checkbox"||d=="radio"?this.$.value!="on":!!this.$.value}return!f?false:f.specified}return CKEDITOR.env.ie? 
CKEDITOR.env.version<8?function(d){return 
d=="name"?!!this.$.name:a.call(this,d)}:a:function(a){return!!this.$.attributes.getNamedItem(a)}}(),hide:function(){this.setStyle("display","none")},moveChildren:function(a,d){var 
b=this.$,a=a.$; if(b!=a){var c; if(d)for(; c=b.lastChild; )a.insertBefore(b.removeChild(c),a.firstChild); else for(; c=b.firstChild; 
)a.appendChild(b.removeChild(c))}},mergeSiblings:function(){function a(d,b,f){if(b&&b.type==CKEDITOR.NODE_ELEMENT){for(var c=[]; 
b.data("cke-bookmark")||b.isEmptyInlineRemoveable(); ){c.push(b);

b=f?b.getNext():b.getPrevious(); if(!b||b.type!=CKEDITOR.NODE_ELEMENT)return}if(d.isIdentical(b)){for(var e=f?d.getLast():d.getFirst(); c.length; 
)c.shift().move(d,!f); b.moveChildren(d,!f); b.remove(); e&&e.type==CKEDITOR.NODE_ELEMENT&&e.mergeSiblings()}}}return 
function(d){if(d===false||CKEDITOR.dtd.$removeEmpty[this.getName()]||this.is("a")){a(this,this.getNext(),true); 
a(this,this.getPrevious())}}}(),show:function(){this.setStyles({display:"",visibility:""})},setAttribute:function(){var a=function(a, 
b){this.$.setAttribute(a,b); return this}; return 
CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(d,b){d=="class"?this.$.className=b:d=="style"?this.$.style.cssText=b:d=="tabindex"?this.$.tabIndex=b:d=="checked"?this.$.checked=b:d=="contenteditable"?a.call(this,"contentEditable",b):a.apply(this,arguments); 
return this}:CKEDITOR.env.ie8Compat&&CKEDITOR.env.secure?function(d,b){if(d=="src"&&b.match(/^http:\/\//))try{a.apply(this,arguments)}catch(c){}else 
a.apply(this,arguments);

return this}:a}(),setAttributes:function(a){for(var d in a)this.setAttribute(d,a[d]); return this},setValue:function(a){this.$.value=a; return 
this},removeAttribute:function(){var a=function(a){this.$.removeAttribute(a)}; return 
CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(a){a=="class"?a="className":a=="tabindex"?a="tabIndex":a=="contenteditable"&&(a="contentEditable"); 
this.$.removeAttribute(a)}:a}(),removeAttributes:function(a){if(CKEDITOR.tools.isArray(a))for(var b=0; b< a.length; b++)this.removeAttribute(a[b]); else for(b 
in a)a.hasOwnProperty(b)&&this.removeAttribute(b)},removeStyle:function(a){var b=this.$.style; 
if(!b.removeProperty&&(a=="border"||a=="margin"||a=="padding")){var c=["top","left","right","bottom"],e; a=="border"&&(e=["color","style","width"]); for(var 
b=[],i=0; i<c.length; i++)if(e)for(var g=0; g<e.length; g++)b.push([a,c[i],e[g]].join("-")); else b.push([a,c[i]].join("-")); for(a=0; a<b.length; 
a++)this.removeStyle(b[a])}else{b.removeProperty?b.removeProperty(a): b.removeAttribute(CKEDITOR.tools.cssStyleToDomStyle(a)); 
this.$.style.cssText||this.removeAttribute("style")}},setStyle:function(a,b){this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)]=b; return 
this},setStyles:function(a){for(var b in a)this.setStyle(b,a[b]); return 
this},setOpacity:function(a){if(CKEDITOR.env.ie&&CKEDITOR.env.version<9){a=Math.round(a*100); 
this.setStyle("filter",a>=100?"":"progid:DXImageTransform.Microsoft.Alpha(opacity="+a+")")}else 
this.setStyle("opacity",a)},unselectable:function(){this.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select", "none")); 
if(CKEDITOR.env.ie){this.setAttribute("unselectable","on"); for(var a,b=this.getElementsByTag("*"),c=0,e=b.count(); c<e; c++){a=b.getItem(c); 
a.setAttribute("unselectable","on")}}},getPositionedAncestor:function(){for(var a=this; a.getName()!="html"; 
){if(a.getComputedStyle("position")!="static")return a; a=a.getParent()}return null},getDocumentPosition:function(a){var 
b=0,c=0,e=this.getDocument(),i=e.getBody(),g=e.$.compatMode=="BackCompat"; if(document.documentElement.getBoundingClientRect){var m= 
this.$.getBoundingClientRect(),t=e.$.documentElement,s=t.clientTop||i.$.clientTop||0,y=t.clientLeft||i.$.clientLeft||0,p=true; 
if(CKEDITOR.env.ie){p=e.getDocumentElement().contains(this); e=e.getBody().contains(this); p=g&&e||!g&&p}if(p){b=m.left+(!g&&t.scrollLeft||i.$.scrollLeft); 
b=b-y; c=m.top+(!g&&t.scrollTop||i.$.scrollTop); c=c-s}}else{i=this; for(e=null; i&&!(i.getName()=="body"||i.getName()=="html"); 
){b=b+(i.$.offsetLeft-i.$.scrollLeft); c=c+(i.$.offsetTop-i.$.scrollTop); if(!i.equals(this)){b=b+(i.$.clientLeft|| 0); c=c+(i.$.clientTop||0)}for(; 
e&&!e.equals(i); ){b=b-e.$.scrollLeft; c=c-e.$.scrollTop; e=e.getParent()}e=i; i=(m=i.$.offsetParent)?new 
CKEDITOR.dom.element(m):null}}if(a){i=this.getWindow(); e=a.getWindow(); if(!i.equals(e)&&i.$.frameElement){a=(new 
CKEDITOR.dom.element(i.$.frameElement)).getDocumentPosition(a); b=b+a.x; 
c=c+a.y}}if(!document.documentElement.getBoundingClientRect&&CKEDITOR.env.gecko&&!g){b=b+(this.$.clientLeft?1:0); 
c=c+(this.$.clientTop?1:0)}return{x:b,y:c}},scrollIntoView:function(a){var b= this.getParent(); 
if(b){do{(b.$.clientWidth&&b.$.clientWidth<b.$.scrollWidth||b.$.clientHeight&&b.$.clientHeight<b.$.scrollHeight)&&!b.is("body")&&this.scrollIntoParent(b,a,1); 
if(b.is("html")){var c=b.getWindow(); try{var e=c.$.frameElement; e&&(b=new 
CKEDITOR.dom.element(e))}catch(i){}}}while(b=b.getParent())}},scrollIntoParent:function(a,b,c){var e,i,g,m; function 
t(b,d){if(/body|html/.test(a.getName()))a.getWindow().$.scrollBy(b,d); else{a.$.scrollLeft=a.$.scrollLeft+b; a.$.scrollTop=a.$.scrollTop+d}} function s(a,b){var 
d={x:0,y:0}; if(!a.is(p?"body":"html")){var c=a.$.getBoundingClientRect(); d.x=c.left; d.y=c.top}c=a.getWindow(); 
if(!c.equals(b)){c=s(CKEDITOR.dom.element.get(c.$.frameElement),b); d.x=d.x+c.x; d.y=d.y+c.y}return d}function y(a,b){return 
parseInt(a.getComputedStyle("margin-"+b)||0,10)||0}!a&&(a=this.getWindow()); g=a.getDocument(); var p=g.$.compatMode=="BackCompat"; a instanceof 
CKEDITOR.dom.window&&(a=p?g.getBody():g.getDocumentElement()); g=a.getWindow(); i=s(this,g); var q=s(a,g),j=this.$.offsetHeight;

e=this.$.offsetWidth; var u=a.$.clientHeight,v=a.$.clientWidth; g=i.x-y(this,"left")-q.x||0; m=i.y-y(this,"top")-q.y||0; e=i.x+e+y(this,"right")-(q.x+v)||0; 
i=i.y+j+y(this,"bottom")-(q.y+u)||0; if(m<0||i>0)t(0,b===true?m:b===false?i:m<0?m:i); if(c&&(g<0||e>0))t(g<0?g:e,0)},setState:function(a,b,c){b=b||"cke"; 
switch(a){case CKEDITOR.TRISTATE_ON:this.addClass(b+"_on"); this.removeClass(b+"_off"); this.removeClass(b+"_disabled"); 
c&&this.setAttribute("aria-pressed",true); c&&this.removeAttribute("aria-disabled");

break; case CKEDITOR.TRISTATE_DISABLED:this.addClass(b+"_disabled"); this.removeClass(b+"_off"); this.removeClass(b+"_on"); 
c&&this.setAttribute("aria-disabled",true); c&&this.removeAttribute("aria-pressed"); break; default:this.addClass(b+"_off"); this.removeClass(b+"_on"); 
this.removeClass(b+"_disabled"); c&&this.removeAttribute("aria-pressed"); c&&this.removeAttribute("aria-disabled")}},getFrameDocument:function(){var a=this.$; 
try{a.contentWindow.document}catch(b){a.src=a.src}return a&&new CKEDITOR.dom.document(a.contentWindow.document)}, copyAttributes:function(a,b){for(var 
c=this.$.attributes,b=b||{},e=0; e<c.length; e++){var i=c[e],g=i.nodeName.toLowerCase(),m; if(!(g in 
b))if(g=="checked"&&(m=this.getAttribute(g)))a.setAttribute(g,m); else if(!CKEDITOR.env.ie||this.hasAttribute(g)){m=this.getAttribute(g); 
if(m===null)m=i.nodeValue; 
a.setAttribute(g,m)}}if(this.$.style.cssText!=="")a.$.style.cssText=this.$.style.cssText},renameNode:function(a){if(this.getName()!=a){var 
b=this.getDocument(),a=new CKEDITOR.dom.element(a,b); this.copyAttributes(a);

this.moveChildren(a); this.getParent()&&this.$.parentNode.replaceChild(a.$,this.$); a.$["data-cke-expando"]=this.$["data-cke-expando"]; this.$=a.$; delete 
this.getName}},getChild:function(){function a(b,c){var f=b.childNodes; if(c>=0&&c<f.length)return f[c]}return function(b){var c=this.$; if(b.slice)for(; 
b.length>0&&c; )c=a(c,b.shift()); else c=a(c,b); return c?new CKEDITOR.dom.node(c):null}}(),getChildCount:function(){return 
this.$.childNodes.length},disableContextMenu:function(){this.on("contextmenu",function(a){a.data.getTarget().hasClass("cke_enable_context_menu")|| 
a.data.preventDefault()})},getDirection:function(a){return 
a?this.getComputedStyle("direction")||this.getDirection()||this.getParent()&&this.getParent().getDirection(1)||this.getDocument().$.dir||"ltr":this.getStyle("direction")||this.getAttribute("dir")},data:function(a,b){a="data-"+a; 
if(b===void 0)return this.getAttribute(a); b===false?this.removeAttribute(a):this.setAttribute(a,b); return null},getEditor:function(){var 
a=CKEDITOR.instances,b,c; for(b in a){c=a[b]; if(c.element.equals(this)&&c.elementMode!= CKEDITOR.ELEMENT_MODE_APPENDTO)return c}return 
null},find:function(b){var c=a(this),b=new CKEDITOR.dom.nodeList(this.$.querySelectorAll(e(this,b))); c(); return b},findOne:function(b){var 
c=a(this),b=this.$.querySelector(e(this,b)); c(); return b?new CKEDITOR.dom.element(b):null},forEach:function(a,b,c){if(!c&&(!b||this.type==b))var e=a(this); 
if(e!==false)for(var c=this.getChildren(),i=0; i<c.count(); i++){e=c.getItem(i); e.type==CKEDITOR.NODE_ELEMENT?e.forEach(a,b):(!b||e.type==b)&&a(e)}}}); var 
c={width:["border-left-width", 
"border-right-width","padding-left","padding-right"],height:["border-top-width","border-bottom-width","padding-top","padding-bottom"]}; 
CKEDITOR.dom.element.prototype.setSize=function(a,c,e){if(typeof c=="number"){if(e&&(!CKEDITOR.env.ie||!CKEDITOR.env.quirks))c=c-b.call(this,a); 
this.setStyle(a,c+"px")}}; CKEDITOR.dom.element.prototype.getSize=function(a,c){var 
e=Math.max(this.$["offset"+CKEDITOR.tools.capitalize(a)],this.$["client"+CKEDITOR.tools.capitalize(a)])||0; c&&(e=e-b.call(this,a)); return e}})();

CKEDITOR.dom.documentFragment=function(a){a=a||CKEDITOR.document; this.$=a.type==CKEDITOR.NODE_DOCUMENT?a.$.createDocumentFragment():a};

CKEDITOR.tools.extend(CKEDITOR.dom.documentFragment.prototype,CKEDITOR.dom.element.prototype,{type:CKEDITOR.NODE_DOCUMENT_FRAGMENT,insertAfterNode:function(a){a=a.$; 
a.parentNode.insertBefore(this.$,a.nextSibling)}},!0,{append:1,appendBogus:1,getFirst:1,getLast:1,getParent:1,getNext:1,getPrevious:1,appendTo:1,moveChildren:1,insertBefore:1,insertAfterNode:1,replace:1,trim:1,type:1,ltrim:1,rtrim:1,getDocument:1,getChildCount:1,getChild:1,getChildren:1});

(function(){function a(a,b){var c=this.range; if(this._.end)return null; if(!this._.start){this._.start=1; if(c.collapsed){this.end(); return 
null}c.optimize()}var d,f=c.startContainer; d=c.endContainer; var 
m=c.startOffset,e=c.endOffset,h,E=this.guard,k=this.type,n=a?"getPreviousSourceNode":"getNextSourceNode"; if(!a&&!this._.guardLTR){var 
r=d.type==CKEDITOR.NODE_ELEMENT?d:d.getParent(),o=d.type==CKEDITOR.NODE_ELEMENT?d.getChild(e):d.getNext(); 
this._.guardLTR=function(a,b){return(!b||!r.equals(a))&&(!o|| !a.equals(o))&&(a.type!=CKEDITOR.NODE_ELEMENT||!b||!a.equals(c.root))}}if(a&&!this._.guardRTL){var 
g=f.type==CKEDITOR.NODE_ELEMENT?f:f.getParent(),D=f.type==CKEDITOR.NODE_ELEMENT?m?f.getChild(m-1):null:f.getPrevious(); 
this._.guardRTL=function(a,b){return(!b||!g.equals(a))&&(!D||!a.equals(D))&&(a.type!=CKEDITOR.NODE_ELEMENT||!b||!a.equals(c.root))}}var 
i=a?this._.guardRTL:this._.guardLTR; h=E?function(a,b){return i(a,b)===false?false:E(a,b)}:i; if(this.current)d=this.current[n](false,k,h); else{if(a)d.type== 
CKEDITOR.NODE_ELEMENT&&(d=e>0?d.getChild(e-1):h(d,true)===false?null:d.getPreviousSourceNode(true,k,h)); else{d=f; 
if(d.type==CKEDITOR.NODE_ELEMENT&&!(d=d.getChild(m)))d=h(f,true)===false?null:f.getNextSourceNode(true,k,h)}d&&h(d)===false&&(d=null)}for(; d&&!this._.end; 
){this.current=d; if(!this.evaluator||this.evaluator(d)!==false){if(!b)return d}else if(b&&this.evaluator)return false; d=d[n](false,k,h)}this.end(); return 
this.current=null}function e(b){for(var c,d=null; c=a.call(this,b); )d=c; return d} function b(a){if(g(a))return false; if(a.type==CKEDITOR.NODE_TEXT)return 
true; if(a.type==CKEDITOR.NODE_ELEMENT){if(a.is(CKEDITOR.dtd.$inline)||a.is("hr")||a.getAttribute("contenteditable")=="false")return true; var b; 
if(b=!CKEDITOR.env.needsBrFiller)if(b=a.is(m))a:{b=0; for(var c=a.getChildCount(); b<c; ++b)if(!g(a.getChild(b))){b=false; break a}b=true}if(b)return 
true}return false}CKEDITOR.dom.walker=CKEDITOR.tools.createClass({$:function(a){this.range=a; this._={}},proto:{end:function(){this._.end=1}, 
next:function(){return a.call(this)},previous:function(){return a.call(this,1)},checkForward:function(){return 
a.call(this,0,1)!==false},checkBackward:function(){return a.call(this,1,1)!==false},lastForward:function(){return e.call(this)},lastBackward:function(){return 
e.call(this,1)},reset:function(){delete this.current; this._={}}}}); var 
c={block:1,"list-item":1,table:1,"table-row-group":1,"table-header-group":1,"table-footer-group":1,"table-row":1,"table-column-group":1,"table-column":1,"table-cell":1, 
"table-caption":1},f={absolute:1,fixed:1}; CKEDITOR.dom.element.prototype.isBlockBoundary=function(a){return 
this.getComputedStyle("float")=="none"&&!(this.getComputedStyle("position")in 
f)&&c[this.getComputedStyle("display")]?true:!!(this.is(CKEDITOR.dtd.$block)||a&&this.is(a))}; CKEDITOR.dom.walker.blockBoundary=function(a){return 
function(b){return!(b.type==CKEDITOR.NODE_ELEMENT&&b.isBlockBoundary(a))}}; CKEDITOR.dom.walker.listItemBoundary=function(){return this.blockBoundary({br:1})}; 
CKEDITOR.dom.walker.bookmark= function(a,b){function c(a){return a&&a.getName&&a.getName()=="span"&&a.data("cke-bookmark")}return function(d){var f,m; 
f=d&&d.type!=CKEDITOR.NODE_ELEMENT&&(m=d.getParent())&&c(m); f=a?f:f||c(d); return!!(b^f)}}; CKEDITOR.dom.walker.whitespaces=function(a){return function(b){var 
c; b&&b.type==CKEDITOR.NODE_TEXT&&(c=!CKEDITOR.tools.trim(b.getText())||CKEDITOR.env.webkit&&b.getText()=="​"); return!!(a^c)}}; 
CKEDITOR.dom.walker.invisible=function(a){var b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.env.webkit? 1:0; return function(d){if(b(d))d=1; 
else{d.type==CKEDITOR.NODE_TEXT&&(d=d.getParent()); d=d.$.offsetWidth<=c}return!!(a^d)}}; CKEDITOR.dom.walker.nodeType=function(a,b){return 
function(c){return!!(b^c.type==a)}}; CKEDITOR.dom.walker.bogus=function(a){function b(a){return!h(a)&&!l(a)}return function(c){var 
f=CKEDITOR.env.needsBrFiller?c.is&&c.is("br"):c.getText&&d.test(c.getText()); if(f){f=c.getParent(); c=c.getNext(b); 
f=f.isBlockBoundary()&&(!c||c.type==CKEDITOR.NODE_ELEMENT&&c.isBlockBoundary())}return!!(a^ f)}}; CKEDITOR.dom.walker.temp=function(a){return 
function(b){b.type!=CKEDITOR.NODE_ELEMENT&&(b=b.getParent()); b=b&&b.hasAttribute("data-cke-temp"); return!!(a^b)}}; var d=/^[\t\r\n ]*(?:&nbsp;
|\xa0)$/,h=CKEDITOR.dom.walker.whitespaces(),l=CKEDITOR.dom.walker.bookmark(),i=CKEDITOR.dom.walker.temp();
CKEDITOR.dom.walker.ignored=function(a){return function(b){b=h(b)||l(b)||i(b); return!!(a^b)}}; var g=CKEDITOR.dom.walker.ignored(),m=function(a){var b={},c; 
for(c in a)CKEDITOR.dtd[c]["#"]&&(b[c]=1); return b}(CKEDITOR.dtd.$block);

CKEDITOR.dom.walker.editable=function(a){return function(c){return!!(a^b(c))}}; CKEDITOR.dom.element.prototype.getBogus=function(){var a=this; do 
a=a.getPreviousSourceNode(); while(l(a)||h(a)||a.type==CKEDITOR.NODE_ELEMENT&&a.is(CKEDITOR.dtd.$inline)&&!a.is(CKEDITOR.dtd.$empty)); return 
a&&(CKEDITOR.env.needsBrFiller?a.is&&a.is("br"):a.getText&&d.test(a.getText()))?a:false}})();

CKEDITOR.dom.range=function(a){this.endOffset=this.endContainer=this.startOffset=this.startContainer=null; this.collapsed=true; var e=a instanceof 
CKEDITOR.dom.document; this.document=e?a:a.getDocument(); this.root=e?a.getBody():a};

(function(){function a(){var a=false,b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.dom.walker.bookmark(true),f=CKEDITOR.dom.walker.bogus(); return 
function(e){if(c(e)||b(e))return true; if(f(e)&&!a)return a=true; return 
e.type==CKEDITOR.NODE_TEXT&&(e.hasAscendant("pre")||CKEDITOR.tools.trim(e.getText()).length)||e.type==CKEDITOR.NODE_ELEMENT&&!e.is(d)?false:true}}function 
e(a){var b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.dom.walker.bookmark(1); return function(d){return c(d)||b(d)?true:!a&&h(d)|| 
d.type==CKEDITOR.NODE_ELEMENT&&d.is(CKEDITOR.dtd.$removeEmpty)}}function b(a){return function(){var b; return 
this[a?"getPreviousNode":"getNextNode"](function(a){!b&&g(a)&&(b=a); return i(a)&&!(h(a)&&a.equals(b))})}}var 
c=function(a){a.collapsed=a.startContainer&&a.endContainer&&a.startContainer.equals(a.endContainer)&&a.startOffset==a.endOffset},f=function(a,b,c,d){a.optimizeBookmark(); 
var f=a.startContainer,e=a.endContainer,j=a.startOffset,u=a.endOffset,h,g; if(e.type==CKEDITOR.NODE_TEXT)e=e.split(u);

else if(e.getChildCount()>0)if(u>=e.getChildCount()){e=e.append(a.document.createText("")); g=true}else e=e.getChild(u); 
if(f.type==CKEDITOR.NODE_TEXT){f.split(j); f.equals(e)&&(e=f.getNext())}else if(j)if(j>=f.getChildCount()){f=f.append(a.document.createText("")); h=true}else 
f=f.getChild(j).getPrevious(); else{f=f.append(a.document.createText(""),1); h=true}var j=f.getParents(),u=e.getParents(),k,n,r; for(k=0; k<j.length; 
k++){n=j[k]; r=u[k]; if(!n.equals(r))break}for(var o=c,i,D,l,z=k; z<j.length; z++){i= j[z]; o&&!i.equals(f)&&(D=o.append(i.clone())); for(i=i.getNext(); i; 
){if(i.equals(u[z])||i.equals(e))break; l=i.getNext(); if(b==2)o.append(i.clone(true)); else{i.remove(); b==1&&o.append(i)}i=l}o&&(o=D)}o=c; for(c=k; 
c<u.length; c++){i=u[c]; b>0&&!i.equals(e)&&(D=o.append(i.clone())); if(!j[c]||i.$.parentNode!=j[c].$.parentNode)for(i=i.getPrevious(); i; 
){if(i.equals(j[c])||i.equals(f))break; l=i.getPrevious(); if(b==2)o.$.insertBefore(i.$.cloneNode(true),o.$.firstChild); else{i.remove(); 
b==1&&o.$.insertBefore(i.$, o.$.firstChild)}i=l}o&&(o=D)}if(b==2){n=a.startContainer; if(n.type==CKEDITOR.NODE_TEXT){n.$.data=n.$.data+n.$.nextSibling.data; 
n.$.parentNode.removeChild(n.$.nextSibling)}a=a.endContainer; if(a.type==CKEDITOR.NODE_TEXT&&a.$.nextSibling){a.$.data=a.$.data+a.$.nextSibling.data; 
a.$.parentNode.removeChild(a.$.nextSibling)}}else{if(n&&r&&(f.$.parentNode!=n.$.parentNode||e.$.parentNode!=r.$.parentNode)){b=r.getIndex(); 
h&&r.$.parentNode==f.$.parentNode&&b--; if(d&&n.type==CKEDITOR.NODE_ELEMENT){d=CKEDITOR.dom.element.createFromHtml('<span data-cke-bookmark="1" 
style="display:none">&nbsp; </span>', a.document); d.insertAfter(n); n.mergeSiblings(false); a.moveToBookmark({startNode:d})}else 
a.setStart(r.getParent(),b)}a.collapse(true)}h&&f.remove(); 
g&&e.$.parentNode&&e.remove()},d={abbr:1,acronym:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,"var":1},h=CKEDITOR.dom.walker.bogus(),l=/^[\t\r\n 
]*(?:&nbsp;
|\xa0)$/,i=CKEDITOR.dom.walker.editable(),g=CKEDITOR.dom.walker.ignored(true);
CKEDITOR.dom.range.prototype= {clone:function(){var a=new CKEDITOR.dom.range(this.root); a._setStartContainer(this.startContainer); 
a.startOffset=this.startOffset; a._setEndContainer(this.endContainer); a.endOffset=this.endOffset; a.collapsed=this.collapsed; return 
a},collapse:function(a){if(a){this._setEndContainer(this.startContainer); this.endOffset=this.startOffset}else{this._setStartContainer(this.endContainer); 
this.startOffset=this.endOffset}this.collapsed=true},cloneContents:function(){var a=new CKEDITOR.dom.documentFragment(this.document);

this.collapsed||f(this,2,a); return a},deleteContents:function(a){this.collapsed||f(this,0,null,a)},extractContents:function(a){var b=new 
CKEDITOR.dom.documentFragment(this.document); this.collapsed||f(this,1,b,a); return b},createBookmark:function(a){var b,c,d,f,e=this.collapsed; 
b=this.document.createElement("span"); b.data("cke-bookmark",1); b.setStyle("display","none"); b.setHtml("&nbsp; "); 
if(a){d="cke_bm_"+CKEDITOR.tools.getNextNumber(); b.setAttribute("id",d+(e?"C":"S"))}if(!e){c=b.clone(); c.setHtml("&nbsp; ");

a&&c.setAttribute("id",d+"E"); f=this.clone(); f.collapse(); f.insertNode(c)}f=this.clone(); f.collapse(true); f.insertNode(b); if(c){this.setStartAfter(b); 
this.setEndBefore(c)}else this.moveToPosition(b,CKEDITOR.POSITION_AFTER_END); 
return{startNode:a?d+(e?"C":"S"):b,endNode:a?d+"E":c,serializable:a,collapsed:e}},createBookmark2:function(){function a(c){var d=c.container,f=c.offset,e; e=d; 
var m=f; e=e.type!=CKEDITOR.NODE_ELEMENT||m===0||m==e.getChildCount()?0:e.getChild(m-1).type==CKEDITOR.NODE_TEXT&&e.getChild(m).type== CKEDITOR.NODE_TEXT; 
if(e){d=d.getChild(f-1); f=d.getLength()}d.type==CKEDITOR.NODE_ELEMENT&&f>1&&(f=d.getChild(f-1).getIndex(true)+1); if(d.type==CKEDITOR.NODE_TEXT){e=d; for(m=0; 
(e=e.getPrevious())&&e.type==CKEDITOR.NODE_TEXT; )m=m+e.getLength(); e=m; if(d.getText())f=f+e; else{m=d.getPrevious(b); if(e){f=e; 
d=m?m.getNext():d.getParent().getFirst()}else{d=d.getParent(); f=m?m.getIndex(true)+1:0}}}c.container=d; c.offset=f}var 
b=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_TEXT,true); return function(b){var c=this.collapsed, 
d={container:this.startContainer,offset:this.startOffset},f={container:this.endContainer,offset:this.endOffset}; if(b){a(d); 
c||a(f)}return{start:d.container.getAddress(b),end:c?null:f.container.getAddress(b),startOffset:d.offset,endOffset:f.offset,normalized:b,collapsed:c,is2:true}}}(),moveToBookmark:function(a){if(a.is2){var 
b=this.document.getByAddress(a.start,a.normalized),c=a.startOffset,d=a.end&&this.document.getByAddress(a.end,a.normalized),a=a.endOffset; this.setStart(b,c); 
d?this.setEnd(d,a): this.collapse(true)}else{b=(c=a.serializable)?this.document.getById(a.startNode):a.startNode; 
a=c?this.document.getById(a.endNode):a.endNode; this.setStartBefore(b); b.remove(); if(a){this.setEndBefore(a); a.remove()}else 
this.collapse(true)}},getBoundaryNodes:function(){var a=this.startContainer,b=this.endContainer,c=this.startOffset,d=this.endOffset,f; 
if(a.type==CKEDITOR.NODE_ELEMENT){f=a.getChildCount(); if(f>c)a=a.getChild(c); else if(f<1)a=a.getPreviousSourceNode(); else{for(a=a.$; a.lastChild; 
)a=a.lastChild;

a=new CKEDITOR.dom.node(a); a=a.getNextSourceNode()||a}}if(b.type==CKEDITOR.NODE_ELEMENT){f=b.getChildCount(); 
if(f>d)b=b.getChild(d).getPreviousSourceNode(true); else if(f<1)b=b.getPreviousSourceNode(); else{for(b=b.$; b.lastChild; )b=b.lastChild; b=new 
CKEDITOR.dom.node(b)}}a.getPosition(b)&CKEDITOR.POSITION_FOLLOWING&&(a=b); return{startNode:a,endNode:b}},getCommonAncestor:function(a,b){var 
c=this.startContainer,d=this.endContainer,c=c.equals(d)?a&&c.type==CKEDITOR.NODE_ELEMENT&&this.startOffset==this.endOffset- 
1?c.getChild(this.startOffset):c:c.getCommonAncestor(d); return b&&!c.is?c.getParent():c},optimize:function(){var a=this.startContainer,b=this.startOffset; 
a.type!=CKEDITOR.NODE_ELEMENT&&(b?b>=a.getLength()&&this.setStartAfter(a):this.setStartBefore(a)); a=this.endContainer; b=this.endOffset; 
a.type!=CKEDITOR.NODE_ELEMENT&&(b?b>=a.getLength()&&this.setEndAfter(a):this.setEndBefore(a))},optimizeBookmark:function(){var 
a=this.startContainer,b=this.endContainer; a.is&&(a.is("span")&&a.data("cke-bookmark"))&& this.setStartAt(a,CKEDITOR.POSITION_BEFORE_START); 
b&&(b.is&&b.is("span")&&b.data("cke-bookmark"))&&this.setEndAt(b,CKEDITOR.POSITION_AFTER_END)},trim:function(a,b){var 
c=this.startContainer,d=this.startOffset,f=this.collapsed; if((!a||f)&&c&&c.type==CKEDITOR.NODE_TEXT){if(d)if(d>=c.getLength()){d=c.getIndex()+1; 
c=c.getParent()}else{var e=c.split(d),d=c.getIndex()+1,c=c.getParent(); 
if(this.startContainer.equals(this.endContainer))this.setEnd(e,this.endOffset-this.startOffset); else if(c.equals(this.endContainer))this.endOffset= 
this.endOffset+1}else{d=c.getIndex(); c=c.getParent()}this.setStart(c,d); if(f){this.collapse(true); return}}c=this.endContainer; d=this.endOffset; 
if(!b&&!f&&c&&c.type==CKEDITOR.NODE_TEXT){if(d){d>=c.getLength()||c.split(d); d=c.getIndex()+1}else d=c.getIndex(); c=c.getParent(); 
this.setEnd(c,d)}},enlarge:function(a,b){function c(a){return a&&a.type==CKEDITOR.NODE_ELEMENT&&a.hasAttribute("contenteditable")?null:a}var 
d=RegExp(/[^\s\ufeff]/); switch(a){case CKEDITOR.ENLARGE_INLINE:var f=1; case CKEDITOR.ENLARGE_ELEMENT:if(this.collapsed)break;

var e=this.getCommonAncestor(),j=this.root,h,i,g,k,n,r=false,o,l; o=this.startContainer; var D=this.startOffset; 
if(o.type==CKEDITOR.NODE_TEXT){if(D){o=!CKEDITOR.tools.trim(o.substring(0,D)).length&&o; 
r=!!o}if(o&&!(k=o.getPrevious()))g=o.getParent()}else{D&&(k=o.getChild(D-1)||o.getLast()); k||(g=o)}for(g=c(g); g||k; ){if(g&&!k){!n&&g.equals(e)&&(n=true); 
if(f?g.isBlockBoundary():!j.contains(g))break; if(!r||g.getComputedStyle("display")!="inline"){r=false; n?h=g:this.setStartBefore(g)}k=g.getPrevious()}for(; k; 
){o= false; if(k.type==CKEDITOR.NODE_COMMENT)k=k.getPrevious(); else{if(k.type==CKEDITOR.NODE_TEXT){l=k.getText(); d.test(l)&&(k=null); 
o=/[\s\ufeff]$/.test(l)}else 
if((k.$.offsetWidth>(CKEDITOR.env.webkit?1:0)||b&&k.is("br"))&&!k.data("cke-bookmark"))if(r&&CKEDITOR.dtd.$removeEmpty[k.getName()]){l=k.getText(); 
if(d.test(l))k=null; else for(var D=k.$.getElementsByTagName("*"),J=0,z; z=D[J++]; )if(!CKEDITOR.dtd.$removeEmpty[z.nodeName.toLowerCase()]){k=null; 
break}k&&(o=!!l.length)}else k=null; o&&(r?n?h=g:g&&this.setStartBefore(g): r=true); if(k){o=k.getPrevious(); if(!g&&!o){g=k; k=null; break}k=o}else 
g=null}}g&&(g=c(g.getParent()))}o=this.endContainer; D=this.endOffset; g=k=null; n=r=false; var L=function(a,b){var c=new CKEDITOR.dom.range(j); 
c.setStart(a,b); c.setEndAt(j,CKEDITOR.POSITION_BEFORE_END); var c=new CKEDITOR.dom.walker(c),f; 
for(c.guard=function(a){return!(a.type==CKEDITOR.NODE_ELEMENT&&a.isBlockBoundary())}; f=c.next(); ){if(f.type!=CKEDITOR.NODE_TEXT)return false; 
l=f!=a?f.getText():f.substring(b); if(d.test(l))return false}return true};

if(o.type==CKEDITOR.NODE_TEXT)if(CKEDITOR.tools.trim(o.substring(D)).length)r=true; else{r=!o.getLength(); 
if(D==o.getLength()){if(!(k=o.getNext()))g=o.getParent()}else L(o,D)&&(g=o.getParent())}else(k=o.getChild(D))||(g=o); for(; g||k; 
){if(g&&!k){!n&&g.equals(e)&&(n=true); if(f?g.isBlockBoundary():!j.contains(g))break; if(!r||g.getComputedStyle("display")!="inline"){r=false; 
n?i=g:g&&this.setEndAfter(g)}k=g.getNext()}for(; k; ){o=false; if(k.type==CKEDITOR.NODE_TEXT){l=k.getText(); L(k,0)||(k=null); o=/^[\s\ufeff]/.test(l)}else 
if(k.type== CKEDITOR.NODE_ELEMENT){if((k.$.offsetWidth>0||b&&k.is("br"))&&!k.data("cke-bookmark"))if(r&&CKEDITOR.dtd.$removeEmpty[k.getName()]){l=k.getText(); 
if(d.test(l))k=null; else{D=k.$.getElementsByTagName("*"); for(J=0; z=D[J++]; )if(!CKEDITOR.dtd.$removeEmpty[z.nodeName.toLowerCase()]){k=null; 
break}}k&&(o=!!l.length)}else k=null}else o=1; o&&r&&(n?i=g:this.setEndAfter(g)); if(k){o=k.getNext(); if(!g&&!o){g=k; k=null; break}k=o}else 
g=null}g&&(g=c(g.getParent()))}if(h&&i){e=h.contains(i)?i:h; this.setStartBefore(e);

this.setEndAfter(e)}break; case CKEDITOR.ENLARGE_BLOCK_CONTENTS:case CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS:g=new CKEDITOR.dom.range(this.root); j=this.root; 
g.setStartAt(j,CKEDITOR.POSITION_AFTER_START); g.setEnd(this.startContainer,this.startOffset); g=new CKEDITOR.dom.walker(g); var 
B,w,H=CKEDITOR.dom.walker.blockBoundary(a==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS?{br:1}:null),C=null,A=function(a){if(a.type==CKEDITOR.NODE_ELEMENT&&a.getAttribute("contenteditable")=="false")if(C){if(C.equals(a)){C=null; 
return}}else C= a; else if(C)return; var b=H(a); b||(B=a); return b},f=function(a){var b=A(a); !b&&(a.is&&a.is("br"))&&(w=a); return b}; g.guard=A; 
g=g.lastBackward(); B=B||j; 
this.setStartAt(B,!B.is("br")&&(!g&&this.checkStartOfBlock()||g&&B.contains(g))?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_AFTER_END); 
if(a==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS){g=this.clone(); g=new CKEDITOR.dom.walker(g); var 
x=CKEDITOR.dom.walker.whitespaces(),F=CKEDITOR.dom.walker.bookmark(); g.evaluator=function(a){return!x(a)&&!F(a)}; if((g=g.previous())&& 
g.type==CKEDITOR.NODE_ELEMENT&&g.is("br"))break}g=this.clone(); g.collapse(); g.setEndAt(j,CKEDITOR.POSITION_BEFORE_END); g=new CKEDITOR.dom.walker(g); 
g.guard=a==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS?f:A; B=C=w=null; g=g.lastForward(); B=B||j; 
this.setEndAt(B,!g&&this.checkEndOfBlock()||g&&B.contains(g)?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_BEFORE_START); 
w&&this.setEndAfter(w)}},shrink:function(a,b,c){if(!this.collapsed){var a=a||CKEDITOR.SHRINK_TEXT,d=this.clone(),f=this.startContainer,e=this.endContainer, 
j=this.startOffset,g=this.endOffset,h=1,i=1; if(f&&f.type==CKEDITOR.NODE_TEXT)if(j)if(j>=f.getLength())d.setStartAfter(f); else{d.setStartBefore(f); h=0}else 
d.setStartBefore(f); if(e&&e.type==CKEDITOR.NODE_TEXT)if(g)if(g>=e.getLength())d.setEndAfter(e); else{d.setEndAfter(e); i=0}else d.setEndBefore(e); var d=new 
CKEDITOR.dom.walker(d),k=CKEDITOR.dom.walker.bookmark(); d.evaluator=function(b){return 
b.type==(a==CKEDITOR.SHRINK_ELEMENT?CKEDITOR.NODE_ELEMENT:CKEDITOR.NODE_TEXT)}; var n; d.guard=function(b,d){if(k(b))return true;

if(a==CKEDITOR.SHRINK_ELEMENT&&b.type==CKEDITOR.NODE_TEXT||d&&b.equals(n)||c===false&&b.type==CKEDITOR.NODE_ELEMENT&&b.isBlockBoundary()||b.type==CKEDITOR.NODE_ELEMENT&&b.hasAttribute("contenteditable"))return 
false; !d&&b.type==CKEDITOR.NODE_ELEMENT&&(n=b); return true}; 
if(h)(f=d[a==CKEDITOR.SHRINK_ELEMENT?"lastForward":"next"]())&&this.setStartAt(f,b?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_START); 
if(i){d.reset(); (d=d[a==CKEDITOR.SHRINK_ELEMENT?"lastBackward":"previous"]())&&this.setEndAt(d, 
b?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_AFTER_END)}return!(!h&&!i)}},insertNode:function(a){this.optimizeBookmark(); this.trim(false,true); var 
b=this.startContainer,c=b.getChild(this.startOffset); c?a.insertBefore(c):b.append(a); a.getParent()&&a.getParent().equals(this.endContainer)&&this.endOffset++; 
this.setStartBefore(a)},moveToPosition:function(a,b){this.setStartAt(a,b); 
this.collapse(true)},moveToRange:function(a){this.setStart(a.startContainer,a.startOffset); this.setEnd(a.endContainer, 
a.endOffset)},selectNodeContents:function(a){this.setStart(a,0); 
this.setEnd(a,a.type==CKEDITOR.NODE_TEXT?a.getLength():a.getChildCount())},setStart:function(a,b){if(a.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$empty[a.getName()]){b=a.getIndex(); 
a=a.getParent()}this._setStartContainer(a); this.startOffset=b; if(!this.endContainer){this._setEndContainer(a); 
this.endOffset=b}c(this)},setEnd:function(a,b){if(a.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$empty[a.getName()]){b=a.getIndex()+1; 
a=a.getParent()}this._setEndContainer(a);

this.endOffset=b; if(!this.startContainer){this._setStartContainer(a); 
this.startOffset=b}c(this)},setStartAfter:function(a){this.setStart(a.getParent(),a.getIndex()+1)},setStartBefore:function(a){this.setStart(a.getParent(),a.getIndex())},setEndAfter:function(a){this.setEnd(a.getParent(),a.getIndex()+1)},setEndBefore:function(a){this.setEnd(a.getParent(),a.getIndex())},setStartAt:function(a,b){switch(b){case 
CKEDITOR.POSITION_AFTER_START:this.setStart(a,0); break; case CKEDITOR.POSITION_BEFORE_END:a.type== 
CKEDITOR.NODE_TEXT?this.setStart(a,a.getLength()):this.setStart(a,a.getChildCount()); break; case CKEDITOR.POSITION_BEFORE_START:this.setStartBefore(a); break; 
case CKEDITOR.POSITION_AFTER_END:this.setStartAfter(a)}c(this)},setEndAt:function(a,b){switch(b){case CKEDITOR.POSITION_AFTER_START:this.setEnd(a,0); break; 
case CKEDITOR.POSITION_BEFORE_END:a.type==CKEDITOR.NODE_TEXT?this.setEnd(a,a.getLength()):this.setEnd(a,a.getChildCount()); break; case 
CKEDITOR.POSITION_BEFORE_START:this.setEndBefore(a); break;

case CKEDITOR.POSITION_AFTER_END:this.setEndAfter(a)}c(this)},fixBlock:function(a,b){var c=this.createBookmark(),d=this.document.createElement(b); 
this.collapse(a); this.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS); this.extractContents().appendTo(d); d.trim(); d.appendBogus(); this.insertNode(d); 
this.moveToBookmark(c); return d},splitBlock:function(a){var b=new CKEDITOR.dom.elementPath(this.startContainer,this.root),c=new 
CKEDITOR.dom.elementPath(this.endContainer,this.root),d=b.block,f=c.block,e=null; if(!b.blockLimit.equals(c.blockLimit))return null;

if(a!="br"){if(!d){d=this.fixBlock(true,a); f=(new 
CKEDITOR.dom.elementPath(this.endContainer,this.root)).block}f||(f=this.fixBlock(false,a))}a=d&&this.checkStartOfBlock(); b=f&&this.checkEndOfBlock(); 
this.deleteContents(); if(d&&d.equals(f))if(b){e=new CKEDITOR.dom.elementPath(this.startContainer,this.root); 
this.moveToPosition(f,CKEDITOR.POSITION_AFTER_END); f=null}else if(a){e=new CKEDITOR.dom.elementPath(this.startContainer,this.root); 
this.moveToPosition(d,CKEDITOR.POSITION_BEFORE_START); d=null}else{f= this.splitElement(d); 
d.is("ul","ol")||d.appendBogus()}return{previousBlock:d,nextBlock:f,wasStartOfBlock:a,wasEndOfBlock:b,elementPath:e}},splitElement:function(a){if(!this.collapsed)return 
null; this.setEndAt(a,CKEDITOR.POSITION_BEFORE_END); var b=this.extractContents(),c=a.clone(false); b.appendTo(c); c.insertAfter(a); 
this.moveToPosition(a,CKEDITOR.POSITION_AFTER_END); return c},removeEmptyBlocksAtEnd:function(){function a(d){return function(a){return 
b(a)||(c(a)||a.type==CKEDITOR.NODE_ELEMENT&&a.isEmptyInlineRemoveable())|| d.is("table")&&a.is("caption")?false:true}}var 
b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.dom.walker.bookmark(false); return function(b){for(var 
c=this.createBookmark(),d=this[b?"endPath":"startPath"](),f=d.block||d.blockLimit,e; f&&!f.equals(d.root)&&!f.getFirst(a(f)); ){e=f.getParent(); 
this[b?"setEndAt":"setStartAt"](f,CKEDITOR.POSITION_AFTER_END); f.remove(1); f=e}this.moveToBookmark(c)}}(),startPath:function(){return new 
CKEDITOR.dom.elementPath(this.startContainer,this.root)},endPath:function(){return new CKEDITOR.dom.elementPath(this.endContainer, 
this.root)},checkBoundaryOfElement:function(a,b){var c=b==CKEDITOR.START,d=this.clone(); d.collapse(c); 
d[c?"setStartAt":"setEndAt"](a,c?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_END); d=new CKEDITOR.dom.walker(d); d.evaluator=e(c); return 
d[c?"checkBackward":"checkForward"]()},checkStartOfBlock:function(){var b=this.startContainer,c=this.startOffset; 
if(CKEDITOR.env.ie&&c&&b.type==CKEDITOR.NODE_TEXT){b=CKEDITOR.tools.ltrim(b.substring(0,c)); l.test(b)&&this.trim(0,1)}this.trim(); b=new 
CKEDITOR.dom.elementPath(this.startContainer, this.root); c=this.clone(); c.collapse(true); c.setStartAt(b.block||b.blockLimit,CKEDITOR.POSITION_AFTER_START); 
b=new CKEDITOR.dom.walker(c); b.evaluator=a(); return b.checkBackward()},checkEndOfBlock:function(){var b=this.endContainer,c=this.endOffset; 
if(CKEDITOR.env.ie&&b.type==CKEDITOR.NODE_TEXT){b=CKEDITOR.tools.rtrim(b.substring(c)); l.test(b)&&this.trim(1,0)}this.trim(); b=new 
CKEDITOR.dom.elementPath(this.endContainer,this.root); c=this.clone(); c.collapse(false); c.setEndAt(b.block||b.blockLimit,CKEDITOR.POSITION_BEFORE_END);

b=new CKEDITOR.dom.walker(c); b.evaluator=a(); return b.checkForward()},getPreviousNode:function(a,b,c){var d=this.clone(); d.collapse(1); 
d.setStartAt(c||this.root,CKEDITOR.POSITION_AFTER_START); c=new CKEDITOR.dom.walker(d); c.evaluator=a; c.guard=b; return 
c.previous()},getNextNode:function(a,b,c){var d=this.clone(); d.collapse(); d.setEndAt(c||this.root,CKEDITOR.POSITION_BEFORE_END); c=new CKEDITOR.dom.walker(d); 
c.evaluator=a; c.guard=b; return c.next()},checkReadOnly:function(){function a(b,c){for(; b; ){if(b.type== 
CKEDITOR.NODE_ELEMENT){if(b.getAttribute("contentEditable")=="false"&&!b.data("cke-editable"))return 0; 
if(b.is("html")||b.getAttribute("contentEditable")=="true"&&(b.contains(c)||b.equals(c)))break}b=b.getParent()}return 1}return function(){var 
b=this.startContainer,c=this.endContainer; 
return!(a(b,c)&&a(c,b))}}(),moveToElementEditablePosition:function(a,b){if(a.type==CKEDITOR.NODE_ELEMENT&&!a.isEditable(false)){this.moveToPosition(a,b?CKEDITOR.POSITION_AFTER_END:CKEDITOR.POSITION_BEFORE_START); 
return true}for(var c= 0; a; 
){if(a.type==CKEDITOR.NODE_TEXT){b&&this.endContainer&&this.checkEndOfBlock()&&l.test(a.getText())?this.moveToPosition(a,CKEDITOR.POSITION_BEFORE_START):this.moveToPosition(a,b?CKEDITOR.POSITION_AFTER_END:CKEDITOR.POSITION_BEFORE_START); 
c=1; break}if(a.type==CKEDITOR.NODE_ELEMENT)if(a.isEditable()){this.moveToPosition(a,b?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_AFTER_START); c=1}else 
if(b&&a.is("br")&&this.endContainer&&this.checkEndOfBlock())this.moveToPosition(a,CKEDITOR.POSITION_BEFORE_START);

else if(a.getAttribute("contenteditable")=="false"&&a.is(CKEDITOR.dtd.$block)){this.setStartBefore(a); this.setEndAfter(a); return true}var d=a,f=c,e=void 0; 
d.type==CKEDITOR.NODE_ELEMENT&&d.isEditable(false)&&(e=d[b?"getLast":"getFirst"](g)); !f&&!e&&(e=d[b?"getPrevious":"getNext"](g)); 
a=e}return!!c},moveToClosestEditablePosition:function(a,b){var c=new 
CKEDITOR.dom.range(this.root),d=0,f,e=[CKEDITOR.POSITION_AFTER_END,CKEDITOR.POSITION_BEFORE_START]; c.moveToPosition(a,e[b?0:1]); 
if(a.is(CKEDITOR.dtd.$block)){if(f= c[b?"getNextEditableNode":"getPreviousEditableNode"]()){d=1; 
if(f.type==CKEDITOR.NODE_ELEMENT&&f.is(CKEDITOR.dtd.$block)&&f.getAttribute("contenteditable")=="false"){c.setStartAt(f,CKEDITOR.POSITION_BEFORE_START); 
c.setEndAt(f,CKEDITOR.POSITION_AFTER_END)}else c.moveToPosition(f,e[b?1:0])}}else d=1; d&&this.moveToRange(c); 
return!!d},moveToElementEditStart:function(a){return this.moveToElementEditablePosition(a)},moveToElementEditEnd:function(a){return 
this.moveToElementEditablePosition(a,true)},getEnclosedNode:function(){var a= this.clone(); a.optimize(); 
if(a.startContainer.type!=CKEDITOR.NODE_ELEMENT||a.endContainer.type!=CKEDITOR.NODE_ELEMENT)return null; var a=new 
CKEDITOR.dom.walker(a),b=CKEDITOR.dom.walker.bookmark(false,true),c=CKEDITOR.dom.walker.whitespaces(true); a.evaluator=function(a){return c(a)&&b(a)}; var 
d=a.next(); a.reset(); return d&&d.equals(a.previous())?d:null},getTouchedStartNode:function(){var a=this.startContainer; return 
this.collapsed||a.type!=CKEDITOR.NODE_ELEMENT?a:a.getChild(this.startOffset)||a},getTouchedEndNode:function(){var a= this.endContainer; return 
this.collapsed||a.type!=CKEDITOR.NODE_ELEMENT?a:a.getChild(this.endOffset-1)||a},getNextEditableNode:b(),getPreviousEditableNode:b(1),scrollIntoView:function(){var 
a=new CKEDITOR.dom.element.createFromHtml("<span>&nbsp; </span>",this.document),b,c,d,f=this.clone(); f.optimize(); 
if(d=f.startContainer.type==CKEDITOR.NODE_TEXT){c=f.startContainer.getText(); b=f.startContainer.split(f.startOffset); a.insertAfter(f.startContainer)}else 
f.insertNode(a); a.scrollIntoView(); if(d){f.startContainer.setText(c);

b.remove()}a.remove()},_setStartContainer:function(a){this.startContainer=a},_setEndContainer:function(a){this.endContainer=a}}})(); 
CKEDITOR.POSITION_AFTER_START=1; CKEDITOR.POSITION_BEFORE_END=2; CKEDITOR.POSITION_BEFORE_START=3; CKEDITOR.POSITION_AFTER_END=4; CKEDITOR.ENLARGE_ELEMENT=1; 
CKEDITOR.ENLARGE_BLOCK_CONTENTS=2; CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS=3; CKEDITOR.ENLARGE_INLINE=4; CKEDITOR.START=1; CKEDITOR.END=2; 
CKEDITOR.SHRINK_ELEMENT=1; CKEDITOR.SHRINK_TEXT=2; "use strict";

(function(){function a(a){if(!(arguments.length<1)){this.range=a; this.forceBrBreak=0; this.enlargeBr=1; this.enforceRealBlocks=0; this._||(this._={})}}function 
e(a){var b=[]; a.forEach(function(a){if(a.getAttribute("contenteditable")=="true"){b.push(a); return false}},CKEDITOR.NODE_ELEMENT,true); return b}function 
b(a,c,d,f){a:{f==null&&(f=e(d)); for(var h; h=f.shift(); )if(h.getDtd().p){f={element:h,remaining:f}; break a}f=null}if(!f)return 0; 
if((h=CKEDITOR.filter.instances[f.element.data("cke-filter")])&& !h.check(c))return b(a,c,d,f.remaining); c=new CKEDITOR.dom.range(f.element); 
c.selectNodeContents(f.element); c=c.createIterator(); c.enlargeBr=a.enlargeBr; c.enforceRealBlocks=a.enforceRealBlocks; c.activeFilter=c.filter=h; 
a._.nestedEditable={element:f.element,container:d,remaining:f.remaining,iterator:c}; return 1}function c(a,b,c){if(!b)return false; a=a.clone(); a.collapse(!c); 
return a.checkBoundaryOfElement(b,c?CKEDITOR.START:CKEDITOR.END)}var f=/^[\r\n\t ]+$/,d=CKEDITOR.dom.walker.bookmark(false,true), 
h=CKEDITOR.dom.walker.whitespaces(true),l=function(a){return d(a)&&h(a)},i={dd:1,dt:1,li:1}; a.prototype={getNextParagraph:function(a){var e,h,s,y,p,a=a||"p"; 
if(this._.nestedEditable){if(e=this._.nestedEditable.iterator.getNextParagraph(a)){this.activeFilter=this._.nestedEditable.iterator.activeFilter; return 
e}this.activeFilter=this.filter; 
if(b(this,a,this._.nestedEditable.container,this._.nestedEditable.remaining)){this.activeFilter=this._.nestedEditable.iterator.activeFilter; return 
this._.nestedEditable.iterator.getNextParagraph(a)}this._.nestedEditable= null}if(!this.range.root.getDtd()[a])return null; if(!this._.started){var 
q=this.range.clone(); h=q.startPath(); var j=q.endPath(),u=!q.collapsed&&c(q,h.block),v=!q.collapsed&&c(q,j.block,1); q.shrink(CKEDITOR.SHRINK_ELEMENT,true); 
u&&q.setStartAt(h.block,CKEDITOR.POSITION_BEFORE_END); v&&q.setEndAt(j.block,CKEDITOR.POSITION_AFTER_START); 
h=q.endContainer.hasAscendant("pre",true)||q.startContainer.hasAscendant("pre",true); 
q.enlarge(this.forceBrBreak&&!h||!this.enlargeBr?CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS: CKEDITOR.ENLARGE_BLOCK_CONTENTS); if(!q.collapsed){h=new 
CKEDITOR.dom.walker(q.clone()); j=CKEDITOR.dom.walker.bookmark(true,true); h.evaluator=j; this._.nextNode=h.next(); h=new CKEDITOR.dom.walker(q.clone()); 
h.evaluator=j; h=h.previous(); this._.lastNode=h.getNextSourceNode(true,null,q.root); 
if(this._.lastNode&&this._.lastNode.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.trim(this._.lastNode.getText())&&this._.lastNode.getParent().isBlockBoundary()){j=this.range.clone(); 
j.moveToPosition(this._.lastNode,CKEDITOR.POSITION_AFTER_END);

if(j.checkEndOfBlock()){j=new CKEDITOR.dom.elementPath(j.endContainer,j.root); 
this._.lastNode=(j.block||j.blockLimit).getNextSourceNode(true)}}if(!this._.lastNode||!q.root.contains(this._.lastNode)){this._.lastNode=this._.docEndMarker=q.document.createText(""); 
this._.lastNode.insertAfter(h)}q=null}this._.started=1; h=q}j=this._.nextNode; q=this._.lastNode; for(this._.nextNode=null; j; ){var 
u=0,v=j.hasAscendant("pre"),E=j.type!=CKEDITOR.NODE_ELEMENT,k=0; if(E)j.type==CKEDITOR.NODE_TEXT&&f.test(j.getText())&& (E=0); else{var n=j.getName(); 
if(CKEDITOR.dtd.$block[n]&&j.getAttribute("contenteditable")=="false"){e=j; b(this,a,e); break}else 
if(j.isBlockBoundary(this.forceBrBreak&&!v&&{br:1})){if(n=="br")E=1; else if(!h&&!j.getChildCount()&&n!="hr"){e=j; s=j.equals(q); 
break}if(h){h.setEndAt(j,CKEDITOR.POSITION_BEFORE_START); if(n!="br")this._.nextNode=j}u=1}else{if(j.getFirst()){if(!h){h=this.range.clone(); 
h.setStartAt(j,CKEDITOR.POSITION_BEFORE_START)}j=j.getFirst(); continue}E=1}}if(E&&!h){h=this.range.clone();

h.setStartAt(j,CKEDITOR.POSITION_BEFORE_START)}s=(!u||E)&&j.equals(q); if(h&&!u)for(; !j.getNext(l)&&!s; ){n=j.getParent(); 
if(n.isBlockBoundary(this.forceBrBreak&&!v&&{br:1})){u=1; E=0; s||n.equals(q); h.setEndAt(n,CKEDITOR.POSITION_BEFORE_END); break}j=n; E=1; s=j.equals(q); 
k=1}E&&h.setEndAt(j,CKEDITOR.POSITION_AFTER_END); j=this._getNextSourceNode(j,k,q); 
if((s=!j)||u&&h)break}if(!e){if(!h){this._.docEndMarker&&this._.docEndMarker.remove(); return this._.nextNode=null}e=new 
CKEDITOR.dom.elementPath(h.startContainer, h.root); j=e.blockLimit; u={div:1,th:1,td:1}; e=e.block; 
if(!e&&j&&!this.enforceRealBlocks&&u[j.getName()]&&h.checkStartOfBlock()&&h.checkEndOfBlock()&&!j.equals(h.root))e=j; else 
if(!e||this.enforceRealBlocks&&e.is(i)){e=this.range.document.createElement(a); h.extractContents().appendTo(e); e.trim(); h.insertNode(e); y=p=true}else 
if(e.getName()!="li"){if(!h.checkStartOfBlock()||!h.checkEndOfBlock()){e=e.clone(false); h.extractContents().appendTo(e); e.trim(); p=h.splitBlock(); 
y=!p.wasStartOfBlock; p=!p.wasEndOfBlock;

h.insertNode(e)}}else 
if(!s)this._.nextNode=e.equals(q)?null:this._getNextSourceNode(h.getBoundaryNodes().endNode,1,q)}if(y)(y=e.getPrevious())&&y.type==CKEDITOR.NODE_ELEMENT&&(y.getName()=="br"?y.remove():y.getLast()&&y.getLast().$.nodeName.toLowerCase()=="br"&&y.getLast().remove()); 
if(p)(y=e.getLast())&&y.type==CKEDITOR.NODE_ELEMENT&&y.getName()=="br"&&(!CKEDITOR.env.needsBrFiller||y.getPrevious(d)||y.getNext(d))&&y.remove(); 
if(!this._.nextNode)this._.nextNode=s||e.equals(q)||!q?null:this._getNextSourceNode(e, 1,q); return e},_getNextSourceNode:function(a,b,c){function 
f(a){return!(a.equals(c)||a.equals(e))}for(var e=this.range.root,a=a.getNextSourceNode(b,null,f); !d(a); )a=a.getNextSourceNode(b,null,f); return a}}; 
CKEDITOR.dom.range.prototype.createIterator=function(){return new a(this)}})();

CKEDITOR.command=function(a,e){this.uiItems=[]; this.exec=function(b){if(this.state==CKEDITOR.TRISTATE_DISABLED||!this.checkAllowed())return false; 
this.editorFocus&&a.focus(); return this.fire("exec")===false?true:e.exec.call(this,a,b)!==false}; 
this.refresh=function(a,b){if(!this.readOnly&&a.readOnly)return true; if(this.context&&!b.isContextFor(this.context)){this.disable(); return 
true}if(!this.checkAllowed(true)){this.disable(); return true}this.startDisabled||this.enable(); this.modes&&!this.modes[a.mode]&& this.disable(); return 
this.fire("refresh",{editor:a,path:b})===false?true:e.refresh&&e.refresh.apply(this,arguments)!==false}; var b; this.checkAllowed=function(c){return!c&&typeof 
b=="boolean"?b:b=a.activeFilter.checkFeature(this)}; 
CKEDITOR.tools.extend(this,e,{modes:{wysiwyg:1},editorFocus:1,contextSensitive:!!e.context,state:CKEDITOR.TRISTATE_DISABLED}); CKEDITOR.event.call(this)};

CKEDITOR.command.prototype={enable:function(){this.state==CKEDITOR.TRISTATE_DISABLED&&this.checkAllowed()&&this.setState(!this.preserveState||typeof 
this.previousState=="undefined"?CKEDITOR.TRISTATE_OFF:this.previousState)},disable:function(){this.setState(CKEDITOR.TRISTATE_DISABLED)},setState:function(a){if(this.state==a||a!=CKEDITOR.TRISTATE_DISABLED&&!this.checkAllowed())return 
false; this.previousState=this.state; this.state=a; this.fire("state"); return true},toggleState:function(){this.state==CKEDITOR.TRISTATE_OFF? 
this.setState(CKEDITOR.TRISTATE_ON):this.state==CKEDITOR.TRISTATE_ON&&this.setState(CKEDITOR.TRISTATE_OFF)}}; 
CKEDITOR.event.implementOn(CKEDITOR.command.prototype); CKEDITOR.ENTER_P=1; CKEDITOR.ENTER_BR=2; CKEDITOR.ENTER_DIV=3;

CKEDITOR.config={customConfig:"config.js",autoUpdateElement:!0,language:"",defaultLanguage:"en",contentsLangDirection:"",enterMode:CKEDITOR.ENTER_P,forceEnterMode:!1,shiftEnterMode:CKEDITOR.ENTER_BR,docType:"<!DOCTYPE 
html>",bodyId:"",bodyClass:"",fullPage:!1,height:200,extraPlugins:"",removePlugins:"",protectedSource:[],tabIndex:0,width:"",baseFloatZIndex:1E4,blockedKeystrokes:[CKEDITOR.CTRL+66,CKEDITOR.CTRL+73,CKEDITOR.CTRL+85]};

(function(){function a(a,b,c,d,f){var e,n,a=[]; for(e in b){n=b[e]; n=typeof n=="boolean"?{}:typeof n=="function"?{match:n}:L(n); 
if(e.charAt(0)!="$")n.elements=e; if(c)n.featureName=c.toLowerCase(); var j=n; j.elements=h(j.elements,/\s+/)||null; 
j.propertiesOnly=j.propertiesOnly||j.elements===true; var k=/\s*,\s*/,r=void 0; for(r in C){j[r]=h(j[r],k)||null; var 
x=j,o=A[r],w=h(j[A[r]],k),p=j[r],g=[],i=true,F=void 0; w?i=false:w={}; for(F in p)if(F.charAt(0)=="!"){F=F.slice(1); g.push(F); w[F]=true; i=false}for(; F= 
g.pop(); ){p[F]=p["!"+F]; delete p["!"+F]}x[o]=(i?false:w)||null}j.match=j.match||null; d.push(n); a.push(n)}for(var b=f.elements,f=f.generic,D,c=0,d=a.length; 
c<d; ++c){e=L(a[c]); n=e.classes===true||e.styles===true||e.attributes===true; j=e; r=o=k=void 0; for(k in C)j[k]=u(j[k]); x=true; for(r in A){k=A[r]; o=j[k]; 
w=[]; p=void 0; for(p in o)p.indexOf("*")>-1?w.push(RegExp("^"+p.replace(/\*/g,".*")+"$")):w.push(p); o=w; if(o.length){j[k]=o; x=false}}j.nothingRequired=x; 
j.noProperties=!(j.attributes||j.classes||j.styles);

if(e.elements===true||e.elements===null)f[n?"unshift":"push"](e); else{j=e.elements; delete e.elements; for(D in j)if(b[D])b[D][n?"unshift":"push"](e); else 
b[D]=[e]}}}function e(a,c,d,f){if(!a.match||a.match(c))if(f||l(a,c)){if(!a.propertiesOnly)d.valid=true; 
if(!d.allAttributes)d.allAttributes=b(a.attributes,c.attributes,d.validAttributes); if(!d.allStyles)d.allStyles=b(a.styles,c.styles,d.validStyles); 
if(!d.allClasses){a=a.classes; c=c.classes; f=d.validClasses; if(a)if(a===true)a=true; else{for(var e=0, n=c.length,j; e<n; ++e){j=c[e]; 
f[j]||(f[j]=a(j))}a=false}else a=false; d.allClasses=a}}}function b(a,b,c){if(!a)return false; if(a===true)return true; for(var d in b)c[d]||(c[d]=a(d)); return 
false}function c(a,b,c){if(!a.match||a.match(b)){if(a.noProperties)return false; c.hadInvalidAttribute=f(a.attributes,b.attributes)||c.hadInvalidAttribute; 
c.hadInvalidStyle=f(a.styles,b.styles)||c.hadInvalidStyle; a=a.classes; b=b.classes; if(a){for(var d=false,e=a===true,n=b.length; n--; 
)if(e||a(b[n])){b.splice(n,1); d= true}a=d}else a=false; c.hadInvalidClass=a||c.hadInvalidClass}}function f(a,b){if(!a)return false; var c=false,d=a===true,f; 
for(f in b)if(d||a(f)){delete b[f]; c=true}return c}function d(a,b,c){if(a.disabled||a.customConfig&&!c||!b)return false; a._.cachedChecks={}; return 
true}function h(a,b){if(!a)return false; if(a===true)return a; if(typeof a=="string"){a=B(a); return 
a=="*"?true:CKEDITOR.tools.convertArrayToObject(a.split(b))}if(CKEDITOR.tools.isArray(a))return a.length?CKEDITOR.tools.convertArrayToObject(a): false; var 
c={},d=0,f; for(f in a){c[f]=a[f]; d++}return d?c:false}function l(a,b){if(a.nothingRequired)return true; var c,d,f,e; if(f=a.requiredClasses){e=b.classes; 
for(c=0; c<f.length; ++c){d=f[c]; if(typeof d=="string"){if(CKEDITOR.tools.indexOf(e,d)==-1)return false}else 
if(!CKEDITOR.tools.checkIfAnyArrayItemMatches(e,d))return false}}return i(b.styles,a.requiredStyles)&&i(b.attributes,a.requiredAttributes)}function 
i(a,b){if(!b)return true; for(var c=0,d; c<b.length; ++c){d=b[c]; if(typeof d=="string"){if(!(d in a))return false}else 
if(!CKEDITOR.tools.checkIfAnyObjectPropertyMatches(a,d))return false}return true}function g(a){if(!a)return{}; for(var a=a.split(/\s*,\s*/).sort(),b={}; 
a.length; )b[a.shift()]=w; return b}function m(a){for(var b,c,d,f,e={},n=1,a=B(a); b=a.match(x); ){if(c=b[2]){d=t(c,"styles"); f=t(c,"attrs"); 
c=t(c,"classes")}else d=f=c=null; e["$"+n++]={elements:b[1],classes:c,styles:d,attributes:f}; a=a.slice(b[0].length)}return e}function t(a,b){var 
c=a.match(F[b]); return c?B(c[1]):null}function s(a){var b= a.styleBackup=a.attributes.style,c=a.classBackup=a.attributes["class"]; 
if(!a.styles)a.styles=CKEDITOR.tools.parseCssText(b||"",1); if(!a.classes)a.classes=c?c.split(/\s+/):[]}function y(a,b,d,f){var k=0,r; 
if(f.toHtml)b.name=b.name.replace(G,"$1"); if(f.doCallbacks&&a.elementCallbacks){a:for(var x=a.elementCallbacks,h=0,o=x.length,w; h<o; ++h)if(w=x[h](b)){r=w; 
break a}if(r)return r}if(f.doTransform)if(r=a._.transformations[b.name]){s(b); for(x=0; x<r.length; ++x)n(a,b,r[x]); q(b)}if(f.doFilter){a:{x=b.name;

h=a._; a=h.allowedRules.elements[x]; r=h.allowedRules.generic; x=h.disallowedRules.elements[x]; h=h.disallowedRules.generic; o=f.skipRequired; 
w={valid:false,validAttributes:{},validClasses:{},validStyles:{},allAttributes:false,allClasses:false,allStyles:false,hadInvalidAttribute:false,hadInvalidClass:false,hadInvalidStyle:false}; 
var p,g; if(!a&&!r)a=null; else{s(b); if(x){p=0; for(g=x.length; p<g; ++p)if(c(x[p],b,w)===false){a=null; break a}}if(h){p=0; for(g=h.length; p<g; 
++p)c(h[p],b,w)}if(a){p=0; for(g=a.length; p< g; ++p)e(a[p],b,w,o)}if(r){p=0; for(g=r.length; p<g; ++p)e(r[p],b,w,o)}a=w}}if(!a){d.push(b); return 
z}if(!a.valid){d.push(b); return z}g=a.validAttributes; var i=a.validStyles; r=a.validClasses; var 
x=b.attributes,F=b.styles,h=b.classes,o=b.classBackup,C=b.styleBackup,u,A,D=[]; w=[]; var v=/^data-cke-/; p=false; delete x.style; delete x["class"]; delete 
b.classBackup; delete b.styleBackup; if(!a.allAttributes)for(u in x)if(!g[u])if(v.test(u)){if(u!=(A=u.replace(/^data-cke-saved-/,""))&&!g[A]){delete x[u]; 
p=true}}else{delete x[u];

p=true}if(!a.allStyles||a.hadInvalidStyle){for(u in F)a.allStyles||i[u]?D.push(u+":"+F[u]):p=true; if(D.length)x.style=D.sort().join(";
 ")}else if(C)x.style=C; if(!a.allClasses||a.hadInvalidClass){for(u=0; u<h.length; ++u)(a.allClasses||r[h[u]])&&w.push(h[u]); 
w.length&&(x["class"]=w.sort().join(" ")); o&&w.length<o.split(/\s+/).length&&(p=true)}else o&&(x["class"]=o); p&&(k=z); 
if(!f.skipFinalValidation&&!j(b)){d.push(b); return z}}if(f.toHtml)b.name=b.name.replace($,"cke:$1"); return k}function p(a){var b= [],c; for(c in 
a)c.indexOf("*")>-1&&b.push(c.replace(/\*/g,".*")); return b.length?RegExp("^(?:"+b.join("|")+")$"):null}function q(a){var b=a.attributes,c; delete b.style; 
delete b["class"]; if(c=CKEDITOR.tools.writeCssText(a.styles,true))b.style=c; a.classes.length&&(b["class"]=a.classes.sort().join(" "))}function 
j(a){switch(a.name){case "a":if(!a.children.length&&!a.attributes.name)return false; break; case "img":if(!a.attributes.src)return false}return true}function 
u(a){if(!a)return false; if(a===true)return true;

var b=p(a); return function(c){return c in a||b&&c.match(b)}}function v(){return new CKEDITOR.htmlParser.element("br")}function E(a){return 
a.type==CKEDITOR.NODE_ELEMENT&&(a.name=="br"||J.$block[a.name])}function k(a,b,c){var d=a.name; 
if(J.$empty[d]||!a.children.length)if(d=="hr"&&b=="br")a.replaceWith(v()); else{a.parent&&c.push({check:"it",el:a.parent}); a.remove()}else 
if(J.$block[d]||d=="tr")if(b=="br"){if(a.previous&&!E(a.previous)){b=v(); b.insertBefore(a)}if(a.next&&!E(a.next)){b=v(); 
b.insertAfter(a)}a.replaceWithChildren()}else{var d= a.children,f; b:{f=J[b]; for(var e=0,n=d.length,j; e<n; ++e){j=d[e]; 
if(j.type==CKEDITOR.NODE_ELEMENT&&!f[j.name]){f=false; break b}}f=true}if(f){a.name=b; a.attributes={}; c.push({check:"parent-down",el:a})}else{f=a.parent; 
for(var e=f.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT||f.name=="body",k,r,n=d.length; n>0; ){j=d[--n]; 
if(e&&(j.type==CKEDITOR.NODE_TEXT||j.type==CKEDITOR.NODE_ELEMENT&&J.$inline[j.name])){if(!k){k=new CKEDITOR.htmlParser.element(b); k.insertAfter(a); 
c.push({check:"parent-down",el:k})}k.add(j, 0)}else{k=null; r=J[f.name]||J.span; j.insertAfter(a); 
f.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT&&(j.type==CKEDITOR.NODE_ELEMENT&&!r[j.name])&&c.push({check:"el-up",el:j})}}a.remove()}}else if(d=="style")a.remove(); 
else{a.parent&&c.push({check:"it",el:a.parent}); a.replaceWithChildren()}}function n(a,b,c){var d,f; for(d=0; d<c.length; ++d){f=c[d]; 
if((!f.check||a.check(f.check,false))&&(!f.left||f.left(b))){f.right(b,aa); break}}}function r(a,b){var c=b.getDefinition(),d=c.attributes,f=c.styles,e,n,j,k; 
if(a.name!= c.element)return false; for(e in d)if(e=="class"){c=d[e].split(/\s+/); for(j=a.classes.join("|"); k=c.pop(); )if(j.indexOf(k)==-1)return false}else 
if(a.attributes[e]!=d[e])return false; for(n in f)if(a.styles[n]!=f[n])return false; return true}function o(a,b){var c,d; if(typeof a=="string")c=a; else if(a 
instanceof CKEDITOR.style)d=a; else{c=a[0]; d=a[1]}return[{element:c,left:d,right:function(a,c){c.transform(a,b)}}]}function M(a){return function(b){return 
r(b,a)}}function D(a){return function(b,c){c[a](b)}} var J=CKEDITOR.dtd,z=1,L=CKEDITOR.tools.copy,B=CKEDITOR.tools.trim,w="cke-test",H=["","p","br","div"]; 
CKEDITOR.FILTER_SKIP_TREE=2; CKEDITOR.filter=function(a){this.allowedContent=[]; this.disallowedContent=[]; this.elementCallbacks=null; this.disabled=false; 
this.editor=null; this.id=CKEDITOR.tools.getNextNumber(); 
this._={allowedRules:{elements:{},generic:[]},disallowedRules:{elements:{},generic:[]},transformations:{},cachedTests:{}}; 
CKEDITOR.filter.instances[this.id]=this; if(a instanceof CKEDITOR.editor){a= this.editor=a; this.customConfig=true; var b=a.config.allowedContent; 
if(b===true)this.disabled=true; else{if(!b)this.customConfig=false; this.allow(b,"config",1); this.allow(a.config.extraAllowedContent,"extra",1); 
this.allow(H[a.enterMode]+" "+H[a.shiftEnterMode],"default",1); this.disallow(a.config.disallowedContent)}}else{this.customConfig=false; 
this.allow(a,"default",1)}}; CKEDITOR.filter.instances={}; CKEDITOR.filter.prototype={allow:function(b,c,f){if(!d(this,b,f))return false; var e,n; if(typeof 
b=="string")b= m(b); else if(b instanceof CKEDITOR.style){if(b.toAllowedContentRules)return this.allow(b.toAllowedContentRules(this.editor),c,f); 
e=b.getDefinition(); b={}; f=e.attributes; b[e.element]=e={styles:e.styles,requiredStyles:e.styles&&CKEDITOR.tools.objectKeys(e.styles)}; if(f){f=L(f); 
e.classes=f["class"]?f["class"].split(/\s+/):null; e.requiredClasses=e.classes; delete f["class"]; e.attributes=f; 
e.requiredAttributes=f&&CKEDITOR.tools.objectKeys(f)}}else if(CKEDITOR.tools.isArray(b)){for(e=0; e<b.length; ++e)n= this.allow(b[e],c,f); return 
n}a(this,b,c,this.allowedContent,this._.allowedRules); return true},applyTo:function(a,b,c,d){if(this.disabled)return false; var 
f=this,e=[],n=this.editor&&this.editor.config.protectedSource,r,x=false,h={doFilter:!c,doTransform:true,doCallbacks:true,toHtml:b}; 
a.forEach(function(a){if(a.type==CKEDITOR.NODE_ELEMENT){if(a.attributes["data-cke-filter"]=="off")return false; 
if(!b||!(a.name=="span"&&~CKEDITOR.tools.objectKeys(a.attributes).join("|").indexOf("data-cke-"))){r=y(f, a,e,h); if(r&z)x=true; else if(r&2)return false}}else 
if(a.type==CKEDITOR.NODE_COMMENT&&a.value.match(/^\{cke_protected\}(?!\{C\})/)){var c; a:{var d=decodeURIComponent(a.value.replace(/^\{cke_protected\}/,"")); 
c=[]; var j,k,o; if(n)for(k=0; k<n.length; ++k)if((o=d.match(n[k]))&&o[0].length==d.length){c=true; break a}d=CKEDITOR.htmlParser.fragment.fromHtml(d); 
d.children.length==1&&(j=d.children[0]).type==CKEDITOR.NODE_ELEMENT&&y(f,j,c,h); c=!c.length}c||e.push(a)}},null,true); e.length&&(x=true); for(var o, 
a=[],d=H[d||(this.editor?this.editor.enterMode:CKEDITOR.ENTER_P)],p; c=e.pop(); )c.type==CKEDITOR.NODE_ELEMENT?k(c,d,a):c.remove(); for(; o=a.pop(); ){c=o.el; 
if(c.parent){p=J[c.parent.name]||J.span; switch(o.check){case "it":J.$removeEmpty[c.name]&&!c.children.length?k(c,d,a):j(c)||k(c,d,a); break; case 
"el-up":c.parent.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT&&!p[c.name]&&k(c,d,a); break; case 
"parent-down":c.parent.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT&&!p[c.name]&&k(c.parent,d,a)}}}return x},checkFeature:function(a){if(this.disabled|| !a)return 
true; a.toFeature&&(a=a.toFeature(this.editor)); 
return!a.requiredContent||this.check(a.requiredContent)},disable:function(){this.disabled=true},disallow:function(b){if(!d(this,b,true))return false; typeof 
b=="string"&&(b=m(b)); a(this,b,null,this.disallowedContent,this._.disallowedRules); return true},addContentForms:function(a){if(!this.disabled&&a){var 
b,c,d=[],f; for(b=0; b<a.length&&!f; ++b){c=a[b]; if((typeof c=="string"||c instanceof CKEDITOR.style)&&this.check(c))f=c}if(f){for(b=0; b<a.length; 
++b)d.push(o(a[b], f)); this.addTransformations(d)}}},addElementCallback:function(a){if(!this.elementCallbacks)this.elementCallbacks=[]; 
this.elementCallbacks.push(a)},addFeature:function(a){if(this.disabled||!a)return true; a.toFeature&&(a=a.toFeature(this.editor)); 
this.allow(a.allowedContent,a.name); this.addTransformations(a.contentTransformations); this.addContentForms(a.contentForms); return 
a.requiredContent&&(this.customConfig||this.disallowedContent.length)?this.check(a.requiredContent):true},addTransformations:function(a){var b, c; 
if(!this.disabled&&a){var d=this._.transformations,f; for(f=0; f<a.length; ++f){b=a[f]; var e=void 0,n=void 0,j=void 0,k=void 0,r=void 0,x=void 0; c=[]; 
for(n=0; n<b.length; ++n){j=b[n]; if(typeof j=="string"){j=j.split(/\s*:\s*/); k=j[0]; r=null; x=j[1]}else{k=j.check; r=j.left; x=j.right}if(!e){e=j; 
e=e.element?e.element:k?k.match(/^([a-z0-9]+)/i)[0]:e.left.getDefinition().element}r instanceof CKEDITOR.style&&(r=M(r)); 
c.push({check:k==e?null:k,left:r,right:typeof x=="string"?D(x):x})}b=e; d[b]||(d[b]=[]); d[b].push(c)}}}, check:function(a,b,c){if(this.disabled)return true; 
if(CKEDITOR.tools.isArray(a)){for(var d=a.length; d--; )if(this.check(a[d],b,c))return true; return false}var f,e; if(typeof 
a=="string"){e=a+"<"+(b===false?"0":"1")+(c?"1":"0")+">"; if(e in this._.cachedChecks)return this._.cachedChecks[e]; d=m(a).$1; f=d.styles; var j=d.classes; 
d.name=d.elements; d.classes=j=j?j.split(/\s*,\s*/):[]; d.styles=g(f); d.attributes=g(d.attributes); d.children=[]; j.length&&(d.attributes["class"]=j.join(" 
")); if(f)d.attributes.style= CKEDITOR.tools.writeCssText(d.styles); f=d}else{d=a.getDefinition(); f=d.styles; j=d.attributes||{}; if(f){f=L(f); 
j.style=CKEDITOR.tools.writeCssText(f,true)}else f={}; f={name:d.element,attributes:j,classes:j["class"]?j["class"].split(/\s+/):[],styles:f,children:[]}}var 
j=CKEDITOR.tools.clone(f),k=[],r; if(b!==false&&(r=this._.transformations[f.name])){for(d=0; d<r.length; ++d)n(this,f,r[d]); 
q(f)}y(this,j,k,{doFilter:true,doTransform:b!==false,skipRequired:!c,skipFinalValidation:!c}); b=k.length>0?false: 
CKEDITOR.tools.objectCompare(f.attributes,j.attributes,true)?true:false; typeof a=="string"&&(this._.cachedChecks[e]=b); return 
b},getAllowedEnterMode:function(){var a=["p","div","br"],b={p:CKEDITOR.ENTER_P,div:CKEDITOR.ENTER_DIV,br:CKEDITOR.ENTER_BR}; return function(c,d){var 
f=a.slice(),e; if(this.check(H[c]))return c; for(d||(f=f.reverse()); e=f.pop(); )if(this.check(e))return b[e]; return 
CKEDITOR.ENTER_BR}}(),destroy:function(){delete CKEDITOR.filter.instances[this.id]; delete this._; delete this.allowedContent;

delete this.disallowedContent}}; var 
C={styles:1,attributes:1,classes:1},A={styles:"requiredStyles",attributes:"requiredAttributes",classes:"requiredClasses"},x=/^([a-z0-9\-*\s]+)((?:\s*\{[!\w\-,\s\*]+\}\s*|\s*\[[!\w\-,\s\*]+\]\s*|\s*\([!\w\-,\s\*]+\)\s*){0,3})(?:; 
\s*|$)/i,F={styles:/{([^}]+)}/,attrs:/\[([^\]]+)\]/,classes:/\(([^\)]+)\)/},G=/^cke:(object|embed|param)$/,$=/^(object|embed|param)$/,aa=CKEDITOR.filter.transformationsTools={sizeToStyle:function(a){this.lengthToStyle(a,"width"); 
this.lengthToStyle(a, "height")},sizeToAttribute:function(a){this.lengthToAttribute(a,"width"); 
this.lengthToAttribute(a,"height")},lengthToStyle:function(a,b,c){c=c||b; if(!(c in a.styles)){var d=a.attributes[b]; if(d){/^\d+$/.test(d)&&(d=d+"px"); 
a.styles[c]=d}}delete a.attributes[b]},lengthToAttribute:function(a,b,c){c=c||b; if(!(c in a.attributes)){var d=a.styles[b],f=d&&d.match(/^(\d+)(?:\.\d*)?px$/); 
f?a.attributes[c]=f[1]:d==w&&(a.attributes[c]=w)}delete a.styles[b]},alignmentToStyle:function(a){if(!("float"in a.styles)){var b= a.attributes.align; 
if(b=="left"||b=="right")a.styles["float"]=b}delete a.attributes.align},alignmentToAttribute:function(a){if(!("align"in a.attributes)){var b=a.styles["float"]; 
if(b=="left"||b=="right")a.attributes.align=b}delete a.styles["float"]},matchesStyle:r,transform:function(a,b){if(typeof b=="string")a.name=b; else{var 
c=b.getDefinition(),d=c.styles,f=c.attributes,e,j,n,k; a.name=c.element; for(e in f)if(e=="class"){c=a.classes.join("|"); for(n=f[e].split(/\s+/); k=n.pop(); 
)c.indexOf(k)==-1&& a.classes.push(k)}else a.attributes[e]=f[e]; for(j in d)a.styles[j]=d[j]}}}})();

(function(){CKEDITOR.focusManager=function(a){if(a.focusManager)return a.focusManager; this.hasFocus=false; this.currentActive=null; this._={editor:a}; return 
this}; CKEDITOR.focusManager._={blurDelay:200}; CKEDITOR.focusManager.prototype={focus:function(a){this._.timer&&clearTimeout(this._.timer); 
if(a)this.currentActive=a; if(!this.hasFocus&&!this._.locked){(a=CKEDITOR.currentInstance)&&a.focusManager.blur(1); this.hasFocus=true; 
(a=this._.editor.container)&&a.addClass("cke_focus"); this._.editor.fire("focus")}}, lock:function(){this._.locked=1},unlock:function(){delete 
this._.locked},blur:function(a){function e(){if(this.hasFocus){this.hasFocus=false; var a=this._.editor.container; a&&a.removeClass("cke_focus"); 
this._.editor.fire("blur")}}if(!this._.locked){this._.timer&&clearTimeout(this._.timer); var b=CKEDITOR.focusManager._.blurDelay; 
a||!b?e.call(this):this._.timer=CKEDITOR.tools.setTimeout(function(){delete this._.timer; e.call(this)},b,this)}},add:function(a,e){var 
b=a.getCustomData("focusmanager"); if(!b|| b!=this){b&&b.remove(a); var b="focus",c="blur"; if(e)if(CKEDITOR.env.ie){b="focusin"; c="focusout"}else 
CKEDITOR.event.useCapture=1; var f={blur:function(){a.equals(this.currentActive)&&this.blur()},focus:function(){this.focus(a)}}; a.on(b,f.focus,this); 
a.on(c,f.blur,this); if(e)CKEDITOR.event.useCapture=0; a.setCustomData("focusmanager",this); 
a.setCustomData("focusmanager_handlers",f)}},remove:function(a){a.removeCustomData("focusmanager"); var e=a.removeCustomData("focusmanager_handlers"); 
a.removeListener("blur", e.blur); a.removeListener("focus",e.focus)}}})(); CKEDITOR.keystrokeHandler=function(a){if(a.keystrokeHandler)return 
a.keystrokeHandler; this.keystrokes={}; this.blockedKeystrokes={}; this._={editor:a}; return this};

(function(){var a,e=function(b){var b=b.data,f=b.getKeystroke(),d=this.keystrokes[f],e=this._.editor; a=e.fire("key",{keyCode:f,domEvent:b})===false; 
if(!a){d&&(a=e.execCommand(d,{from:"keystrokeHandler"})!==false); a||(a=!!this.blockedKeystrokes[f])}a&&b.preventDefault(true); 
return!a},b=function(b){if(a){a=false; b.data.preventDefault(true)}}; CKEDITOR.keystrokeHandler.prototype={attach:function(a){a.on("keydown",e,this); 
if(CKEDITOR.env.gecko&&CKEDITOR.env.mac)a.on("keypress",b,this)}}})();

(function(){CKEDITOR.lang={languages:{af:1,ar:1,bg:1,bn:1,bs:1,ca:1,cs:1,cy:1,da:1,de:1,el:1,"en-au":1,"en-ca":1,"en-gb":1,en:1,eo:1,es:1,et:1,eu:1,fa:1,fi:1,fo:1,"fr-ca":1,fr:1,gl:1,gu:1,he:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,ja:1,ka:1,km:1,ko:1,ku:1,lt:1,lv:1,mk:1,mn:1,ms:1,nb:1,nl:1,no:1,pl:1,"pt-br":1,pt:1,ro:1,ru:1,si:1,sk:1,sl:1,sq:1,"sr-latn":1,sr:1,sv:1,th:1,tr:1,tt:1,ug:1,uk:1,vi:1,"zh-cn":1,zh:1},rtl:{ar:1,fa:1,he:1,ku:1,ug:1},load:function(a,e,b){if(!a||!CKEDITOR.lang.languages[a])a=this.detect(e, 
a); var c=this,e=function(){c[a].dir=c.rtl[a]?"rtl":"ltr"; b(a,c[a])}; 
this[a]?e():CKEDITOR.scriptLoader.load(CKEDITOR.getUrl("lang/"+a+".js"),e,this)},detect:function(a,e){var 
b=this.languages,e=e||navigator.userLanguage||navigator.language||a,c=e.toLowerCase().match(/([a-z]+)(?:-([a-z]+))?/),f=c[1],c=c[2]; 
b[f+"-"+c]?f=f+"-"+c:b[f]||(f=null); CKEDITOR.lang.detect=f?function(){return f}:function(a){return a}; return f||a}}})();

CKEDITOR.scriptLoader=function(){var a={},e={}; return{load:function(b,c,f,d){var h=typeof b=="string"; h&&(b=[b]); f||(f=CKEDITOR); var 
l=b.length,i=[],g=[],m=function(a){c&&(h?c.call(f,a):c.call(f,i,g))}; if(l===0)m(true); else{var t=function(a,b){(b?i:g).push(a); 
if(--l<=0){d&&CKEDITOR.document.getDocumentElement().removeStyle("cursor"); m(b)}},s=function(b,c){a[b]=1; var d=e[b]; delete e[b]; for(var f=0; f<d.length; 
f++)d[f](b,c)},y=function(b){if(a[b])t(b,true); else{var d=e[b]||(e[b]=[]); d.push(t); if(!(d.length> 1)){var f=new CKEDITOR.dom.element("script"); 
f.setAttributes({type:"text/javascript",src:b}); 
if(c)if(CKEDITOR.env.ie&&CKEDITOR.env.version<11)f.$.onreadystatechange=function(){if(f.$.readyState=="loaded"||f.$.readyState=="complete"){f.$.onreadystatechange=null; 
s(b,true)}}; else{f.$.onload=function(){setTimeout(function(){s(b,true)},0)}; f.$.onerror=function(){s(b,false)}}f.appendTo(CKEDITOR.document.getHead())}}}; 
d&&CKEDITOR.document.getDocumentElement().setStyle("cursor","wait"); for(var p=0; p<l; p++)y(b[p])}}, queue:function(){function a(){var b; 
(b=c[0])&&this.load(b.scriptUrl,b.callback,CKEDITOR,0)}var c=[]; return function(f,d){var e=this; 
c.push({scriptUrl:f,callback:function(){d&&d.apply(this,arguments); c.shift(); a.call(e)}}); c.length==1&&a.call(this)}}()}}(); 
CKEDITOR.resourceManager=function(a,e){this.basePath=a; this.fileName=e; this.registered={}; this.loaded={}; this.externals={}; this._={waitingList:{}}};

CKEDITOR.resourceManager.prototype={add:function(a,e){if(this.registered[a])throw'[CKEDITOR.resourceManager.add] The resource name "'+a+'" is already 
registered.'; var b=this.registered[a]=e||{}; b.name=a; b.path=this.getPath(a); CKEDITOR.fire(a+CKEDITOR.tools.capitalize(this.fileName)+"Ready",b); return 
this.get(a)},get:function(a){return this.registered[a]||null},getPath:function(a){var e=this.externals[a]; return 
CKEDITOR.getUrl(e&&e.dir||this.basePath+a+"/")},getFilePath:function(a){var e=this.externals[a];

return CKEDITOR.getUrl(this.getPath(a)+(e?e.file:this.fileName+".js"))},addExternal:function(a,e,b){for(var a=a.split(","),c=0; c<a.length; c++){var f=a[c]; 
b||(e=e.replace(/[^\/]+$/,function(a){b=a; return""})); 
this.externals[f]={dir:e,file:b||this.fileName+".js"}}},load:function(a,e,b){CKEDITOR.tools.isArray(a)||(a=a?[a]:[]); for(var 
c=this.loaded,f=this.registered,d=[],h={},l={},i=0; i<a.length; i++){var g=a[i]; if(g)if(!c[g]&&!f[g]){var m=this.getFilePath(g); d.push(m); m in h||(h[m]=[]); 
h[m].push(g)}else l[g]= this.get(g)}CKEDITOR.scriptLoader.load(d,function(a,d){if(d.length)throw'[CKEDITOR.resourceManager.load] Resource name 
"'+h[d[0]].join(",")+'" was not found at "'+d[0]+'".'; for(var f=0; f<a.length; f++)for(var p=h[a[f]],g=0; g<p.length; g++){var j=p[g]; l[j]=this.get(j); 
c[j]=1}e.call(b,l)},this)}}; CKEDITOR.plugins=new CKEDITOR.resourceManager("plugins/","plugin");

CKEDITOR.plugins.load=CKEDITOR.tools.override(CKEDITOR.plugins.load,function(a){var e={}; return function(b,c,f){var 
d={},h=function(b){a.call(this,b,function(a){CKEDITOR.tools.extend(d,a); var b=[],m; for(m in a){var l=a[m],s=l&&l.requires; if(!e[m]){if(l.icons)for(var 
y=l.icons.split(","),p=y.length; p--; )CKEDITOR.skin.addIcon(y[p],l.path+"icons/"+(CKEDITOR.env.hidpi&&l.hidpi?"hidpi/":"")+y[p]+".png"); 
e[m]=1}if(s){s.split&&(s=s.split(",")); for(l=0; l<s.length; l++)d[s[l]]||b.push(s[l])}}if(b.length)h.call(this, b); else{for(m in d){l=d[m]; 
if(l.onLoad&&!l.onLoad._called){l.onLoad()===false&&delete d[m]; l.onLoad._called=1}}c&&c.call(f||window,d)}},this)}; h.call(this,b)}}); 
CKEDITOR.plugins.setLang=function(a,e,b){var c=this.get(a),a=c.langEntries||(c.langEntries={}),c=c.lang||(c.lang=[]); c.split&&(c=c.split(",")); 
CKEDITOR.tools.indexOf(c,e)==-1&&c.push(e); a[e]=b}; CKEDITOR.ui=function(a){if(a.ui)return a.ui; this.items={}; this.instances={}; this.editor=a; 
this._={handlers:{}}; return this};

CKEDITOR.ui.prototype={add:function(a,e,b){b.name=a.toLowerCase(); var 
c=this.items[a]={type:e,command:b.command||null,args:Array.prototype.slice.call(arguments,2)}; CKEDITOR.tools.extend(c,b)},get:function(a){return 
this.instances[a]},create:function(a){var 
e=this.items[a],b=e&&this._.handlers[e.type],c=e&&e.command&&this.editor.getCommand(e.command),b=b&&b.create.apply(this,e.args); this.instances[a]=b; 
c&&c.uiItems.push(b); if(b&&!b.type)b.type=e.type; return b},addHandler:function(a,e){this._.handlers[a]= e},space:function(a){return 
CKEDITOR.document.getById(this.spaceId(a))},spaceId:function(a){return this.editor.id+"_"+a}}; CKEDITOR.event.implementOn(CKEDITOR.ui);

(function(){function a(a,c,d){CKEDITOR.event.call(this); a=a&&CKEDITOR.tools.clone(a); if(c!==void 0){if(c instanceof CKEDITOR.dom.element){if(!d)throw 
Error("One of the element modes must be specified.");
}else throw Error("Expect element of type CKEDITOR.dom.element.");
if(CKEDITOR.env.ie&&CKEDITOR.env.quirks&&d==CKEDITOR.ELEMENT_MODE_INLINE)throw Error("Inline element mode is not supported on IE quirks."); 
if(!(d==CKEDITOR.ELEMENT_MODE_INLINE?c.is(CKEDITOR.dtd.$editable)||c.is("textarea"):d==CKEDITOR.ELEMENT_MODE_REPLACE? 
!c.is(CKEDITOR.dtd.$nonBodyContent):1))throw Error('The specified element mode is not supported on element: "'+c.getName()+'".'); this.element=c; 
this.elementMode=d; this.name=this.elementMode!=CKEDITOR.ELEMENT_MODE_APPENDTO&&(c.getId()||c.getNameAtt())}else this.elementMode=CKEDITOR.ELEMENT_MODE_NONE; 
this._={}; this.commands={}; this.templates={}; this.name=this.name||e(); this.id=CKEDITOR.tools.getNextId(); this.status="unloaded"; 
this.config=CKEDITOR.tools.prototypedCopy(CKEDITOR.config); this.ui=new CKEDITOR.ui(this);

this.focusManager=new CKEDITOR.focusManager(this); this.keystrokeHandler=new CKEDITOR.keystrokeHandler(this); this.on("readOnly",b); 
this.on("selectionChange",function(a){f(this,a.data.path)}); this.on("activeFilterChange",function(){f(this,this.elementPath(),true)}); this.on("mode",b); 
this.on("instanceReady",function(){this.config.startupFocus&&this.focus()}); CKEDITOR.fire("instanceCreated",null,this); CKEDITOR.add(this); 
CKEDITOR.tools.setTimeout(function(){h(this,a)},0,this)}function e(){do var a="editor"+ ++s; while(CKEDITOR.instances[a]); return a}function b(){var 
a=this.commands,b; for(b in a)c(this,a[b])}function 
c(a,b){b[b.startDisabled?"disable":a.readOnly&&!b.readOnly?"disable":b.modes[a.mode]?"enable":"disable"]()}function f(a,b,c){if(b){var d,f,e=a.commands; for(f 
in e){d=e[f]; (c||d.contextSensitive)&&d.refresh(a,b)}}}function d(a){var b=a.config.customConfig; if(!b)return false; var 
b=CKEDITOR.getUrl(b),c=y[b]||(y[b]={}); if(c.fn){c.fn.call(a,a.config); (CKEDITOR.getUrl(a.config.customConfig)==b|| 
!d(a))&&a.fireOnce("customConfigLoaded")}else CKEDITOR.scriptLoader.queue(b,function(){c.fn=CKEDITOR.editorConfig?CKEDITOR.editorConfig:function(){}; d(a)}); 
return true}function h(a,b){a.on("customConfigLoaded",function(){if(b){if(b.on)for(var c in b.on)a.on(c,b.on[c]); CKEDITOR.tools.extend(a.config,b,true); delete 
a.config.on}c=a.config; 
a.readOnly=!(!c.readOnly&&!(a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?a.element.is("textarea")?a.element.hasAttribute("disabled"):a.element.isReadOnly():a.elementMode== 
CKEDITOR.ELEMENT_MODE_REPLACE&&a.element.hasAttribute("disabled"))); 
a.blockless=a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?!(a.element.is("textarea")||CKEDITOR.dtd[a.element.getName()].p):false; 
a.tabIndex=c.tabIndex||a.element&&a.element.getAttribute("tabindex")||0; a.activeEnterMode=a.enterMode=a.blockless?CKEDITOR.ENTER_BR:c.enterMode; 
a.activeShiftEnterMode=a.shiftEnterMode=a.blockless?CKEDITOR.ENTER_BR:c.shiftEnterMode; if(c.skin)CKEDITOR.skinName=c.skin; a.fireOnce("configLoaded"); 
a.dataProcessor= new CKEDITOR.htmlDataProcessor(a); a.filter=a.activeFilter=new CKEDITOR.filter(a); l(a)}); 
if(b&&b.customConfig!=null)a.config.customConfig=b.customConfig; d(a)||a.fireOnce("customConfigLoaded")}function 
l(a){CKEDITOR.skin.loadPart("editor",function(){i(a)})}function i(a){CKEDITOR.lang.load(a.config.language,a.config.defaultLanguage,function(b,c){var 
d=a.config.title; a.langCode=b; a.lang=CKEDITOR.tools.prototypedCopy(c); a.title=typeof d=="string"||d===false?d:[a.lang.editor,a.name].join(", "); 
if(!a.config.contentsLangDirection)a.config.contentsLangDirection= a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?a.element.getDirection(1):a.lang.dir; 
a.fire("langLoaded"); g(a)})}function g(a){a.getStylesSet(function(b){a.once("loaded",function(){a.fire("stylesSet",{styles:b})},null,null,1); m(a)})}function 
m(a){var b=a.config,c=b.plugins,d=b.extraPlugins,f=b.removePlugins; if(d)var 
e=RegExp("(?:^|,)(?:"+d.replace(/\s*,\s*/g,"|")+")(?=,|$)","g"),c=c.replace(e,""),c=c+(","+d); if(f)var 
k=RegExp("(?:^|,)(?:"+f.replace(/\s*,\s*/g,"|")+")(?=,|$)","g"),c=c.replace(k,""); CKEDITOR.env.air&& (c=c+",adobeair"); 
CKEDITOR.plugins.load(c.split(","),function(c){var d=[],f=[],e=[]; a.plugins=c; for(var j in c){var h=c[j],g=h.lang,i=null,u=h.requires,w; 
CKEDITOR.tools.isArray(u)&&(u=u.join(",")); if(u&&(w=u.match(k)))for(; u=w.pop(); )CKEDITOR.tools.setTimeout(function(a,b){throw Error('Plugin 
"'+a.replace(",","")+'" cannot be removed from the plugins list, because it\'s required by "'+b+'" plugin.');
},0,null,[u,j]);
if(g&&!a.lang[j]){g.split&&(g=g.split(",")); if(CKEDITOR.tools.indexOf(g,a.langCode)>= 0)i=a.langCode; else{i=a.langCode.replace(/-.*/,""); 
i=i!=a.langCode&&CKEDITOR.tools.indexOf(g,i)>=0?i:CKEDITOR.tools.indexOf(g,"en")>=0?"en":g[0]}if(!h.langEntries||!h.langEntries[i])e.push(CKEDITOR.getUrl(h.path+"lang/"+i+".js")); 
else{a.lang[j]=h.langEntries[i]; i=null}}f.push(i); d.push(h)}CKEDITOR.scriptLoader.load(e,function(){for(var c=["beforeInit","init","afterInit"],e=0; 
e<c.length; e++)for(var n=0; n<d.length; n++){var j=d[n]; e===0&&(f[n]&&j.lang&&j.langEntries)&&(a.lang[j.name]=j.langEntries[f[n]]);

if(j[c[e]])j[c[e]](a)}a.fireOnce("pluginsLoaded"); b.keystrokes&&a.setKeystroke(a.config.keystrokes); for(n=0; n<a.config.blockedKeystrokes.length; 
n++)a.keystrokeHandler.blockedKeystrokes[a.config.blockedKeystrokes[n]]=1; a.status="loaded"; a.fireOnce("loaded"); 
CKEDITOR.fire("instanceLoaded",null,a)})})}function t(){var a=this.element; if(a&&this.elementMode!=CKEDITOR.ELEMENT_MODE_APPENDTO){var b=this.getData(); 
this.config.htmlEncodeOutput&&(b=CKEDITOR.tools.htmlEncode(b)); a.is("textarea")?a.setValue(b): a.setHtml(b); return true}return 
false}a.prototype=CKEDITOR.editor.prototype; CKEDITOR.editor=a; var s=0,y={}; 
CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{addCommand:function(a,b){b.name=a.toLowerCase(); var d=new CKEDITOR.command(this,b); this.mode&&c(this,d); 
return this.commands[a]=d},_attachToForm:function(){function a(d){b.updateElement(); 
b._.required&&(!c.getValue()&&b.fire("required")===false)&&d.data.preventDefault()}var b=this,c=b.element,d=new CKEDITOR.dom.element(c.$.form); 
if(c.is("textarea")&& d){d.on("submit",a); if(d.$.submit&&d.$.submit.call&&d.$.submit.apply)d.$.submit=CKEDITOR.tools.override(d.$.submit,function(b){return 
function(){a(); b.apply?b.apply(this):b()}}); b.on("destroy",function(){d.removeListener("submit",a)})}},destroy:function(a){this.fire("beforeDestroy"); 
!a&&t.call(this); this.editable(null); this.filter.destroy(); delete this.filter; delete this.activeFilter; this.status="destroyed"; this.fire("destroy"); 
this.removeAllListeners(); CKEDITOR.remove(this); CKEDITOR.fire("instanceDestroyed", null,this)},elementPath:function(a){if(!a){a=this.getSelection(); 
if(!a)return null; a=a.getStartElement()}return a?new CKEDITOR.dom.elementPath(a,this.editable()):null},createRange:function(){var a=this.editable(); return 
a?new CKEDITOR.dom.range(a):null},execCommand:function(a,b){var c=this.getCommand(a),d={name:a,commandData:b,command:c}; 
if(c&&c.state!=CKEDITOR.TRISTATE_DISABLED&&this.fire("beforeCommandExec",d)!==false){d.returnValue=c.exec(d.commandData); 
if(!c.async&&this.fire("afterCommandExec", d)!==false)return d.returnValue}return false},getCommand:function(a){return 
this.commands[a]},getData:function(a){!a&&this.fire("beforeGetData"); var b=this._.data; if(typeof 
b!="string")b=(b=this.element)&&this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE?b.is("textarea")?b.getValue():b.getHtml():""; b={dataValue:b}; 
!a&&this.fire("getData",b); return b.dataValue},getSnapshot:function(){var a=this.fire("getSnapshot"); if(typeof a!="string"){var b=this.element; 
b&&this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE&& (a=b.is("textarea")?b.getValue():b.getHtml())}return 
a},loadSnapshot:function(a){this.fire("loadSnapshot",a)},setData:function(a,b,c){var d=true,f=b; if(b&&typeof b=="object"){c=b.internal; f=b.callback; 
d=!b.noSnapshot}!c&&d&&this.fire("saveSnapshot"); if(f||!c)this.once("dataReady",function(a){!c&&d&&this.fire("saveSnapshot"); f&&f.call(a.editor)}); 
a={dataValue:a}; !c&&this.fire("setData",a); this._.data=a.dataValue; !c&&this.fire("afterSetData",a)},setReadOnly:function(a){a=a==null||a; if(this.readOnly!= 
a){this.readOnly=a; this.keystrokeHandler.blockedKeystrokes[8]=+a; this.editable().setReadOnly(a); 
this.fire("readOnly")}},insertHtml:function(a,b){this.fire("insertHtml",{dataValue:a,mode:b})},insertText:function(a){this.fire("insertText",a)},insertElement:function(a){this.fire("insertElement",a)},focus:function(){this.fire("beforeFocus")},checkDirty:function(){return 
this.status=="ready"&&this._.previousValue!==this.getSnapshot()},resetDirty:function(){this._.previousValue=this.getSnapshot()},updateElement:function(){return 
t.call(this)}, setKeystroke:function(){for(var 
a=this.keystrokeHandler.keystrokes,b=CKEDITOR.tools.isArray(arguments[0])?arguments[0]:[[].slice.call(arguments,0)],c,d,f=b.length; f--; ){c=b[f]; d=0; 
if(CKEDITOR.tools.isArray(c)){d=c[1]; c=c[0]}d?a[c]=d:delete a[c]}},addFeature:function(a){return 
this.filter.addFeature(a)},setActiveFilter:function(a){if(!a)a=this.filter; if(this.activeFilter!==a){this.activeFilter=a; this.fire("activeFilterChange"); 
a===this.filter?this.setActiveEnterMode(null,null):this.setActiveEnterMode(a.getAllowedEnterMode(this.enterMode), 
a.getAllowedEnterMode(this.shiftEnterMode,true))}},setActiveEnterMode:function(a,b){a=a?this.blockless?CKEDITOR.ENTER_BR:a:this.enterMode; 
b=b?this.blockless?CKEDITOR.ENTER_BR:b:this.shiftEnterMode; if(this.activeEnterMode!=a||this.activeShiftEnterMode!=b){this.activeEnterMode=a; 
this.activeShiftEnterMode=b; this.fire("activeEnterModeChange")}}})})(); CKEDITOR.ELEMENT_MODE_NONE=0; CKEDITOR.ELEMENT_MODE_REPLACE=1; 
CKEDITOR.ELEMENT_MODE_APPENDTO=2; CKEDITOR.ELEMENT_MODE_INLINE=3;

CKEDITOR.htmlParser=function(){this._={htmlPartsRegex:/<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)--\>)|(?:([^\/\s>]+)((?:\s+[\w\-:.]+(?:\s*=\s*?(?:(?:"[^"]*")|(?:'[^']*')|[^\s"'\/>]+))?)*)[\S\s]*?(\/?)>))/g}};

(function(){var 
a=/([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,e={checked:1,compact:1,declare:1,defer:1,disabled:1,ismap:1,multiple:1,nohref:1,noresize:1,noshade:1,nowrap:1,readonly:1,selected:1}; 
CKEDITOR.htmlParser.prototype={onTagOpen:function(){},onTagClose:function(){},onText:function(){},onCDATA:function(){},onComment:function(){},parse:function(b){for(var 
c,f,d=0,h; c=this._.htmlPartsRegex.exec(b); ){f=c.index; if(f>d){d=b.substring(d,f); if(h)h.push(d); else this.onText(d)}d= this._.htmlPartsRegex.lastIndex; 
if(f=c[1]){f=f.toLowerCase(); if(h&&CKEDITOR.dtd.$cdata[f]){this.onCDATA(h.join("")); h=null}if(!h){this.onTagClose(f); continue}}if(h)h.push(c[0]); else 
if(f=c[3]){f=f.toLowerCase(); if(!/="/.test(f)){var l={},i,g=c[4]; c=!!c[5]; if(g)for(; i=a.exec(g); ){var m=i[1].toLowerCase(); i=i[2]||i[3]||i[4]||""; 
l[m]=!i&&e[m]?m:CKEDITOR.tools.htmlDecodeAttr(i)}this.onTagOpen(f,l,c); !h&&CKEDITOR.dtd.$cdata[f]&&(h=[])}}else 
if(f=c[2])this.onComment(f)}if(b.length>d)this.onText(b.substring(d, b.length))}}})();

CKEDITOR.htmlParser.basicWriter=CKEDITOR.tools.createClass({$:function(){this._={output:[]}},proto:{openTag:function(a){this._.output.push("<",a)},openTagClose:function(a,e){e?this._.output.push(" 
/>"):this._.output.push(">")},attribute:function(a,e){typeof e=="string"&&(e=CKEDITOR.tools.htmlEncodeAttr(e)); this._.output.push(" 
",a,'="',e,'"')},closeTag:function(a){this._.output.push("</",a,">")},text:function(a){this._.output.push(a)},comment:function(a){this._.output.push("<\!--",a,"--\>")},write:function(a){this._.output.push(a)}, 
reset:function(){this._.output=[]; this._.indent=false},getHtml:function(a){var e=this._.output.join(""); a&&this.reset(); return e}}}); "use strict";

(function(){CKEDITOR.htmlParser.node=function(){}; CKEDITOR.htmlParser.node.prototype={remove:function(){var 
a=this.parent.children,e=CKEDITOR.tools.indexOf(a,this),b=this.previous,c=this.next; b&&(b.next=c); c&&(c.previous=b); a.splice(e,1); 
this.parent=null},replaceWith:function(a){var e=this.parent.children,b=CKEDITOR.tools.indexOf(e,this),c=a.previous=this.previous,f=a.next=this.next; 
c&&(c.next=a); f&&(f.previous=a); e[b]=a; a.parent=this.parent; this.parent=null},insertAfter:function(a){var e=a.parent.children, 
b=CKEDITOR.tools.indexOf(e,a),c=a.next; e.splice(b+1,0,this); this.next=a.next; this.previous=a; a.next=this; c&&(c.previous=this); 
this.parent=a.parent},insertBefore:function(a){var e=a.parent.children,b=CKEDITOR.tools.indexOf(e,a); e.splice(b,0,this); this.next=a; 
(this.previous=a.previous)&&(a.previous.next=this); a.previous=this; this.parent=a.parent},getAscendant:function(a){var e=typeof a=="function"?a:typeof 
a=="string"?function(b){return b.name==a}:function(b){return b.name in a},b=this.parent; for(; b&& b.type==CKEDITOR.NODE_ELEMENT; ){if(e(b))return b; 
b=b.parent}return null},wrapWith:function(a){this.replaceWith(a); a.add(this); return a},getIndex:function(){return 
CKEDITOR.tools.indexOf(this.parent.children,this)},getFilterContext:function(a){return a||{}}}})(); "use strict"; 
CKEDITOR.htmlParser.comment=function(a){this.value=a; this._={isBlockLike:false}};

CKEDITOR.htmlParser.comment.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_COMMENT,filter:function(a,e){var b=this.value; 
if(!(b=a.onComment(e,b,this))){this.remove(); return false}if(typeof b!="string"){this.replaceWith(b); return false}this.value=b; return 
true},writeHtml:function(a,e){e&&this.filter(e); a.comment(this.value)}}); "use strict";

(function(){CKEDITOR.htmlParser.text=function(a){this.value=a; this._={isBlockLike:false}}; CKEDITOR.htmlParser.text.prototype=CKEDITOR.tools.extend(new 
CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_TEXT,filter:function(a,e){if(!(this.value=a.onText(e,this.value,this))){this.remove(); return 
false}},writeHtml:function(a,e){e&&this.filter(e); a.text(this.value)}})})(); "use strict";

(function(){CKEDITOR.htmlParser.cdata=function(a){this.value=a}; CKEDITOR.htmlParser.cdata.prototype=CKEDITOR.tools.extend(new 
CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_TEXT,filter:function(){},writeHtml:function(a){a.write(this.value)}})})(); "use strict"; 
CKEDITOR.htmlParser.fragment=function(){this.children=[]; this.parent=null; this._={isBlockLike:true,hasInlineStarted:false}};

(function(){function a(a){return a.attributes["data-cke-survive"]?false:a.name=="a"&&a.attributes.href||CKEDITOR.dtd.$removeEmpty[a.name]}var 
e=CKEDITOR.tools.extend({table:1,ul:1,ol:1,dl:1},CKEDITOR.dtd.table,CKEDITOR.dtd.ul,CKEDITOR.dtd.ol,CKEDITOR.dtd.dl),b={ol:1,ul:1},c=CKEDITOR.tools.extend({},{html:1},CKEDITOR.dtd.html,CKEDITOR.dtd.body,CKEDITOR.dtd.head,{style:1,script:1}),f={ul:"li",ol:"li",dl:"dd",table:"tbody",tbody:"tr",thead:"tr",tfoot:"tr",tr:"td"}; 
CKEDITOR.htmlParser.fragment.fromHtml= function(d,h,l){function i(a){var b; if(j.length>0)for(var c=0; c<j.length; c++){var 
d=j[c],f=d.name,e=CKEDITOR.dtd[f],k=v.name&&CKEDITOR.dtd[v.name]; if((!k||k[f])&&(!a||!e||e[a]||!CKEDITOR.dtd[a])){if(!b){g(); b=1}d=d.clone(); d.parent=v; v=d; 
j.splice(c,1); c--}else if(f==v.name){t(v,v.parent,1); c--}}}function g(){for(; u.length; )t(u.shift(),v)}function 
m(a){if(a._.isBlockLike&&a.name!="pre"&&a.name!="textarea"){var b=a.children.length,c=a.children[b-1],d; 
if(c&&c.type==CKEDITOR.NODE_TEXT)(d=CKEDITOR.tools.rtrim(c.value))? c.value=d:a.children.length=b-1}}function t(b,c,d){var c=c||v||q,f=v; if(b.previous===void 
0){if(s(c,b)){v=c; p.onTagOpen(l,{}); b.returnPoint=c=v}m(b); (!a(b)||b.children.length)&&c.add(b); b.name=="pre"&&(k=false); 
b.name=="textarea"&&(E=false)}if(b.returnPoint){v=b.returnPoint; delete b.returnPoint}else v=d?c:f}function 
s(a,b){if((a==q||a.name=="body")&&l&&(!a.name||CKEDITOR.dtd[a.name][l])){var c,d; 
return(c=b.attributes&&(d=b.attributes["data-cke-real-element-type"])?d:b.name)&&c in CKEDITOR.dtd.$inline&& !(c in 
CKEDITOR.dtd.head)&&!b.isOrphan||b.type==CKEDITOR.NODE_TEXT}}function y(a,b){return a in CKEDITOR.dtd.$listItem||a in 
CKEDITOR.dtd.$tableContent?a==b||a=="dt"&&b=="dd"||a=="dd"&&b=="dt":false}var p=new CKEDITOR.htmlParser,q=h instanceof CKEDITOR.htmlParser.element?h:typeof 
h=="string"?new CKEDITOR.htmlParser.element(h):new CKEDITOR.htmlParser.fragment,j=[],u=[],v=q,E=q.name=="textarea",k=q.name=="pre"; 
p.onTagOpen=function(d,f,h,l){f=new CKEDITOR.htmlParser.element(d,f); if(f.isUnknown&&h)f.isEmpty= true; f.isOptionalClose=l; if(a(f))j.push(f); 
else{if(d=="pre")k=true; else{if(d=="br"&&k){v.add(new CKEDITOR.htmlParser.text("\n")); return}d=="textarea"&&(E=true)}if(d=="br")u.push(f); else{for(; ; 
){l=(h=v.name)?CKEDITOR.dtd[h]||(v._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span):c; 
if(!f.isUnknown&&!v.isUnknown&&!l[d])if(v.isOptionalClose)p.onTagClose(h); else if(d in b&&h in b){h=v.children; (h=h[h.length-1])&&h.name=="li"||t(h=new 
CKEDITOR.htmlParser.element("li"),v); !f.returnPoint&&(f.returnPoint=v);

v=h}else if(d in CKEDITOR.dtd.$listItem&&!y(d,h))p.onTagOpen(d=="li"?"ul":"dl",{},0,1); else if(h in e&&!y(d,h)){!f.returnPoint&&(f.returnPoint=v); 
v=v.parent}else{h in CKEDITOR.dtd.$inline&&j.unshift(v); if(v.parent)t(v,v.parent,1); else{f.isOrphan=1; break}}else break}i(d); g(); f.parent=v; 
f.isEmpty?t(f):v=f}}}; p.onTagClose=function(a){for(var b=j.length-1; b>=0; b--)if(a==j[b].name){j.splice(b,1); return}for(var c=[],d=[],f=v; f!=q&&f.name!=a; 
){f._.isBlockLike||d.unshift(f); c.push(f); f=f.returnPoint||f.parent}if(f!= q){for(b=0; b<c.length; b++){var e=c[b]; t(e,e.parent)}v=f; f._.isBlockLike&&g(); 
t(f,f.parent); if(f==v)v=v.parent; j=j.concat(d)}a=="body"&&(l=false)}; 
p.onText=function(a){if((!v._.hasInlineStarted||u.length)&&!k&&!E){a=CKEDITOR.tools.ltrim(a); if(a.length===0)return}var 
b=v.name,d=b?CKEDITOR.dtd[b]||(v._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span):c; if(!E&&!d["#"]&&b in e){p.onTagOpen(f[b]||""); p.onText(a)}else{g(); i(); 
!k&&!E&&(a=a.replace(/[\t\r\n ]{2,}|[\t\r\n]/g," ")); a=new CKEDITOR.htmlParser.text(a);

if(s(v,a))this.onTagOpen(l,{},0,1); v.add(a)}}; p.onCDATA=function(a){v.add(new CKEDITOR.htmlParser.cdata(a))}; p.onComment=function(a){g(); i(); v.add(new 
CKEDITOR.htmlParser.comment(a))}; p.parse(d); for(g(); v!=q; )t(v,v.parent,1); m(q); return q}; 
CKEDITOR.htmlParser.fragment.prototype={type:CKEDITOR.NODE_DOCUMENT_FRAGMENT,add:function(a,b){isNaN(b)&&(b=this.children.length); var 
c=b>0?this.children[b-1]:null; if(c){if(a._.isBlockLike&&c.type==CKEDITOR.NODE_TEXT){c.value=CKEDITOR.tools.rtrim(c.value); if(c.value.length=== 
0){this.children.pop(); this.add(a); return}}c.next=a}a.previous=c; a.parent=this; this.children.splice(b,0,a); 
if(!this._.hasInlineStarted)this._.hasInlineStarted=a.type==CKEDITOR.NODE_TEXT||a.type==CKEDITOR.NODE_ELEMENT&&!a._.isBlockLike},filter:function(a,b){b=this.getFilterContext(b); 
a.onRoot(b,this); this.filterChildren(a,false,b)},filterChildren:function(a,b,c){if(this.childrenFilteredBy!=a.id){c=this.getFilterContext(c); 
if(b&&!this.parent)a.onRoot(c,this); this.childrenFilteredBy=a.id; for(b=0; b<this.children.length; b++)this.children[b].filter(a, 
c)===false&&b--}},writeHtml:function(a,b){b&&this.filter(b); this.writeChildrenHtml(a)},writeChildrenHtml:function(a,b,c){var f=this.getFilterContext(); 
if(c&&!this.parent&&b)b.onRoot(f,this); b&&this.filterChildren(b,false,f); b=0; c=this.children; for(f=c.length; b<f; 
b++)c[b].writeHtml(a)},forEach:function(a,b,c){if(!c&&(!b||this.type==b))var f=a(this); if(f!==false)for(var c=this.children,e=0; e<c.length; e++){f=c[e]; 
f.type==CKEDITOR.NODE_ELEMENT?f.forEach(a,b):(!b||f.type==b)&&a(f)}},getFilterContext:function(a){return a|| {}}}})(); "use strict";

(function(){function a(){this.rules=[]}function e(b,c,f,d){var e,l; for(e in c){(l=b[e])||(l=b[e]=new a); 
l.add(c[e],f,d)}}CKEDITOR.htmlParser.filter=CKEDITOR.tools.createClass({$:function(b){this.id=CKEDITOR.tools.getNextNumber(); this.elementNameRules=new a; 
this.attributeNameRules=new a; this.elementsRules={}; this.attributesRules={}; this.textRules=new a; this.commentRules=new a; this.rootRules=new a; 
b&&this.addRules(b,10)},proto:{addRules:function(a,c){var f; if(typeof c=="number")f=c; else if(c&&"priority"in c)f=c.priority; typeof f!="number"&&(f=10); 
typeof c!="object"&&(c={}); a.elementNames&&this.elementNameRules.addMany(a.elementNames,f,c); 
a.attributeNames&&this.attributeNameRules.addMany(a.attributeNames,f,c); a.elements&&e(this.elementsRules,a.elements,f,c); 
a.attributes&&e(this.attributesRules,a.attributes,f,c); a.text&&this.textRules.add(a.text,f,c); a.comment&&this.commentRules.add(a.comment,f,c); 
a.root&&this.rootRules.add(a.root,f,c)},applyTo:function(a){a.filter(this)},onElementName:function(a,c){return this.elementNameRules.execOnName(a, 
c)},onAttributeName:function(a,c){return this.attributeNameRules.execOnName(a,c)},onText:function(a,c,f){return 
this.textRules.exec(a,c,f)},onComment:function(a,c,f){return this.commentRules.exec(a,c,f)},onRoot:function(a,c){return 
this.rootRules.exec(a,c)},onElement:function(a,c){for(var f=[this.elementsRules["^"],this.elementsRules[c.name],this.elementsRules.$],d,e=0; e<3; 
e++)if(d=f[e]){d=d.exec(a,c,this); if(d===false)return null; if(d&&d!=c)return this.onNode(a,d); if(c.parent&&!c.name)break}return c}, onNode:function(a,c){var 
f=c.type; return f==CKEDITOR.NODE_ELEMENT?this.onElement(a,c):f==CKEDITOR.NODE_TEXT?new 
CKEDITOR.htmlParser.text(this.onText(a,c.value)):f==CKEDITOR.NODE_COMMENT?new 
CKEDITOR.htmlParser.comment(this.onComment(a,c.value)):null},onAttribute:function(a,c,f,d){return(f=this.attributesRules[f])?f.exec(a,d,c,this):d}}}); 
CKEDITOR.htmlParser.filterRulesGroup=a; 
a.prototype={add:function(a,c,f){this.rules.splice(this.findIndex(c),0,{value:a,priority:c,options:f})},addMany:function(a, c,f){for(var 
d=[this.findIndex(c),0],e=0,l=a.length; e<l; e++)d.push({value:a[e],priority:c,options:f}); this.rules.splice.apply(this.rules,d)},findIndex:function(a){for(var 
c=this.rules,f=c.length-1; f>=0&&a<c[f].priority; )f--; return f+1},exec:function(a,c){var f=c instanceof CKEDITOR.htmlParser.node||c instanceof 
CKEDITOR.htmlParser.fragment,d=Array.prototype.slice.call(arguments,1),e=this.rules,l=e.length,i,g,m,t; for(t=0; t<l; t++){if(f){i=c.type; g=c.name}m=e[t]; 
if(!(a.nonEditable&&!m.options.applyToAll|| a.nestedEditable&&m.options.excludeNestedEditable)){m=m.value.apply(null,d); 
if(m===false||f&&m&&(m.name!=g||m.type!=i))return m; m!=null&&(d[0]=c=m)}}return c},execOnName:function(a,c){for(var f=0,d=this.rules,e=d.length,l; c&&f<e; 
f++){l=d[f]; !(a.nonEditable&&!l.options.applyToAll||a.nestedEditable&&l.options.excludeNestedEditable)&&(c=c.replace(l.value[0],l.value[1]))}return c}}})();

(function(){function a(a,e){function n(a){return a||CKEDITOR.env.needsNbspFiller?new CKEDITOR.htmlParser.text(" "):new 
CKEDITOR.htmlParser.element("br",{"data-cke-bogus":1})}function r(a,f){return function(e){if(e.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT){var j=[],k=b(e),x,r; 
if(k)for(w(k,1)&&j.push(k); k; ){if(d(k)&&(x=c(k))&&w(x))if((r=c(x))&&!d(r))j.push(x); else{n(o).insertAfter(x); x.remove()}k=k.previous}for(k=0; k<j.length; 
k++)j[k].remove(); if(j=(typeof f=="function"?f(e):f)!==false)if(!o&&!CKEDITOR.env.needsBrFiller&& e.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT)j=false; else 
if(!o&&!CKEDITOR.env.needsBrFiller&&(document.documentMode>7||e.name in CKEDITOR.dtd.tr||e.name in CKEDITOR.dtd.$listItem))j=false; else{j=b(e); 
j=!j||e.name=="form"&&j.name=="input"}j&&e.add(n(a))}}}function 
w(a,b){if((!o||CKEDITOR.env.needsBrFiller)&&a.type==CKEDITOR.NODE_ELEMENT&&a.name=="br"&&!a.attributes["data-cke-eol"])return true; var c; 
if(a.type==CKEDITOR.NODE_TEXT&&(c=a.value.match(j))){if(c.index){(new CKEDITOR.htmlParser.text(a.value.substring(0, c.index))).insertBefore(a); 
a.value=c[0]}if(!CKEDITOR.env.needsBrFiller&&o&&(!b||a.parent.name in i))return true; if(!o)if((c=a.previous)&&c.name=="br"||!c||d(c))return true}return 
false}var g={elements:{}},o=e=="html",i=CKEDITOR.tools.extend({},k),C; for(C in i)"#"in v[C]||delete i[C]; for(C in 
i)g.elements[C]=r(o,a.config.fillEmptyBlocks); g.root=r(o,false); g.elements.br=function(a){return 
function(b){if(b.parent.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT){var e=b.attributes; if("data-cke-bogus"in e||"data-cke-eol"in e)delete e["data-cke-bogus"]; 
else{for(e=b.next; e&&f(e); )e=e.next; var j=c(b); !e&&d(b.parent)?h(b.parent,n(a)):d(e)&&(j&&!d(j))&&n(a).insertBefore(e)}}}}(o); return g}function 
e(a,b){return a!=CKEDITOR.ENTER_BR&&b!==false?a==CKEDITOR.ENTER_DIV?"div":"p":false}function b(a){for(a=a.children[a.children.length-1]; a&&f(a); )a=a.previous; 
return a}function c(a){for(a=a.previous; a&&f(a); )a=a.previous; return a}function f(a){return 
a.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.trim(a.value)||a.type==CKEDITOR.NODE_ELEMENT&& a.attributes["data-cke-bookmark"]}function d(a){return 
a&&(a.type==CKEDITOR.NODE_ELEMENT&&a.name in k||a.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT)}function h(a,b){var c=a.children[a.children.length-1]; 
a.children.push(b); b.parent=a; if(c){c.next=b; b.previous=c}}function l(a){a=a.attributes; 
a.contenteditable!="false"&&(a["data-cke-editable"]=a.contenteditable?"true":1); a.contenteditable="false"}function i(a){a=a.attributes; 
switch(a["data-cke-editable"]){case "true":a.contenteditable="true"; break; case "1":delete a.contenteditable}} function g(a){return 
a.replace(D,function(a,b,c){return"<"+b+c.replace(J,function(a,b){return z.test(b)&&c.indexOf("data-cke-saved-"+b)==-1?" data-cke-saved-"+a+" 
data-cke-"+CKEDITOR.rnd+"-"+a:a})+">"})}function m(a,b){return a.replace(b,function(a,b,c){a.indexOf("<textarea")===0&&(a=b+y(c).replace(/>/g,"> 
")+"</textarea>"); return"<cke:encoded>"+encodeURIComponent(a)+"</cke:encoded>"})}function t(a){return a.replace(w,function(a,b){return 
decodeURIComponent(b)})}function s(a){return a.replace(/<\!--(?!{cke_protected})[\s\S]+?--\>/g, 
function(a){return"<\!--"+u+"{C}"+encodeURIComponent(a).replace(/--/g,"%2D%2D")+"--\>"})}function y(a){return 
a.replace(/<\!--\{cke_protected\}\{C\}([\s\S]+?)--\>/g,function(a,b){return decodeURIComponent(b)})}function p(a,b){var c=b._.dataStore; return 
a.replace(/<\!--\{cke_protected\}([\s\S]+?)--\>/g,function(a,b){return decodeURIComponent(b)}).replace(/\{cke_protected_(\d+)\}/g,function(a,b){return 
c&&c[b]||""})}function q(a,b){for(var c=[],d=b.config.protectedSource,f=b._.dataStore||(b._.dataStore= 
{id:1}),e=/<\!--\{cke_temp(comment)?\}(\d*?)--\>/g,d=[/<script[\s\S]*?<\/script>/gi,/<noscript[\s\S]*?<\/noscript>/gi,/<meta[\s\S]*?\/?>/gi].concat(d),a=a.replace(/<\!--[\s\S]*?--\>/g,function(a){return"<\!--{cke_tempcomment}"+(c.push(a)-1)+"--\>"}),j=0; 
j<d.length; j++)a=a.replace(d[j],function(a){a=a.replace(e,function(a,b,d){return c[d]}); 
return/cke_temp(comment)?/.test(a)?a:"<\!--{cke_temp}"+(c.push(a)-1)+"--\>"}); 
a=a.replace(e,function(a,b,d){return"<\!--"+u+(b?"{C}":"")+encodeURIComponent(c[d]).replace(/--/g, "%2D%2D")+"--\>"}); 
a=a.replace(/<\w+(?:\s+(?:(?:[^\s=>]+\s*=\s*(?:[^'"\s>]+|'[^']*'|"[^"]*"))|[^\s=>]+))+\s*>/g,function(a){return 
a.replace(/<\!--\{cke_protected\}([^>]*)--\>/g,function(a,b){f[f.id]=decodeURIComponent(b); return"{cke_protected_"+f.id++ +"}"})}); return 
a=a.replace(/<(title|iframe|textarea)([^>]*)>([\s\S]*?)<\/\1>/g,function(a,c,d,f){return"<"+c+d+">"+p(y(f),b)+"</"+c+">"})}CKEDITOR.htmlDataProcessor=function(b){var 
c,d,f=this; this.editor=b; this.dataFilter=c=new CKEDITOR.htmlParser.filter;

this.htmlFilter=d=new CKEDITOR.htmlParser.filter; this.writer=new CKEDITOR.htmlParser.basicWriter; c.addRules(n); c.addRules(r,{applyToAll:true}); 
c.addRules(a(b,"data"),{applyToAll:true}); d.addRules(o); d.addRules(M,{applyToAll:true}); d.addRules(a(b,"html"),{applyToAll:true}); 
b.on("toHtml",function(a){var 
a=a.data,c=a.dataValue,d,c=q(c,b),c=m(c,B),c=g(c),c=m(c,L),c=c.replace(H,"$1cke:$2"),c=c.replace(A,"<cke:$1$2></cke:$1>"),c=c.replace(/(<pre\b[^>]*>)(\r\n|\n)/g,"$1$2$2"),c=c.replace(/([^a-z0-9<\-])(on\w{3,})(?!>)/gi, 
"$1data-cke-"+CKEDITOR.rnd+"-$2"); d=a.context||b.editable().getName(); var f; if(CKEDITOR.env.ie&&CKEDITOR.env.version<9&&d=="pre"){d="div"; 
c="<pre>"+c+"</pre>"; f=1}d=b.document.createElement(d); d.setHtml("a"+c); c=d.getHtml().substr(1); c=c.replace(RegExp("data-cke-"+CKEDITOR.rnd+"-","ig"),""); 
f&&(c=c.replace(/^<pre>|<\/pre>$/gi,"")); c=c.replace(C,"$1$2"); c=t(c); c=y(c); d=a.fixForBody===false?false:e(a.enterMode,b.config.autoParagraph); 
c=CKEDITOR.htmlParser.fragment.fromHtml(c,a.context,d); if(d){f=c;

if(!f.children.length&&CKEDITOR.dtd[f.name][d]){d=new CKEDITOR.htmlParser.element(d); f.add(d)}}a.dataValue=c},null,null,5); 
b.on("toHtml",function(a){a.data.filter.applyTo(a.data.dataValue,true,a.data.dontFilter,a.data.enterMode)&&b.fire("dataFiltered")},null,null,6); 
b.on("toHtml",function(a){a.data.dataValue.filterChildren(f.dataFilter,true)},null,null,10); b.on("toHtml",function(a){var a=a.data,b=a.dataValue,c=new 
CKEDITOR.htmlParser.basicWriter; b.writeChildrenHtml(c); b=c.getHtml(true); a.dataValue= s(b)},null,null,15); b.on("toDataFormat",function(a){var 
c=a.data.dataValue; a.data.enterMode!=CKEDITOR.ENTER_BR&&(c=c.replace(/^<br *\/?>/i,"")); 
a.data.dataValue=CKEDITOR.htmlParser.fragment.fromHtml(c,a.data.context,e(a.data.enterMode,b.config.autoParagraph))},null,null,5); 
b.on("toDataFormat",function(a){a.data.dataValue.filterChildren(f.htmlFilter,true)},null,null,10); 
b.on("toDataFormat",function(a){a.data.filter.applyTo(a.data.dataValue,false,true)},null,null,11); b.on("toDataFormat",function(a){var c= 
a.data.dataValue,d=f.writer; d.reset(); c.writeChildrenHtml(d); c=d.getHtml(true); c=y(c); c=p(c,b); a.data.dataValue=c},null,null,15)}; 
CKEDITOR.htmlDataProcessor.prototype={toHtml:function(a,b,c,d){var f=this.editor,e,j,k; if(b&&typeof b=="object"){e=b.context; c=b.fixForBody; d=b.dontFilter; 
j=b.filter; k=b.enterMode}else e=b; !e&&e!==null&&(e=f.editable().getName()); return 
f.fire("toHtml",{dataValue:a,context:e,fixForBody:c,dontFilter:d,filter:j||f.filter,enterMode:k||f.enterMode}).dataValue},toDataFormat:function(a, b){var c,d,f; 
if(b){c=b.context; d=b.filter; f=b.enterMode}!c&&c!==null&&(c=this.editor.editable().getName()); return 
this.editor.fire("toDataFormat",{dataValue:a,filter:d||this.editor.filter,context:c,enterMode:f||this.editor.enterMode}).dataValue}}; var j=/(?:&nbsp;
|\xa0)$/,u="{cke_protected}",v=CKEDITOR.dtd,E=["caption","colgroup","col","thead","tfoot","tbody"],k=CKEDITOR.tools.extend({},v.$blockLimit,v.$block),n={elements:{input:l,textarea:l}},r={attributeNames:[[/^on/,"data-cke-pa-on"],[/^data-cke-expando$/,
""]]},o={elements:{embed:function(a){var b=a.parent; if(b&&b.name=="object"){var c=b.attributes.width,b=b.attributes.height; if(c)a.attributes.width=c; 
if(b)a.attributes.height=b}},a:function(a){if(!a.children.length&&!a.attributes.name&&!a.attributes["data-cke-saved-name"])return 
false}}},M={elementNames:[[/^cke:/,""],[/^\?xml:namespace$/,""]],attributeNames:[[/^data-cke-(saved|pa)-/,""],[/^data-cke-.*/,""],["hidefocus",""]],elements:{$:function(a){var 
b=a.attributes; if(b){if(b["data-cke-temp"])return false;

for(var c=["name","href","src"],d,f=0; f<c.length; f++){d="data-cke-saved-"+c[f]; d in b&&delete b[c[f]]}}return 
a},table:function(a){a.children.slice(0).sort(function(a,b){var c,d; if(a.type==CKEDITOR.NODE_ELEMENT&&b.type==a.type){c=CKEDITOR.tools.indexOf(E,a.name); 
d=CKEDITOR.tools.indexOf(E,b.name)}if(!(c>-1&&d>-1&&c!=d)){c=a.parent?a.getIndex():-1; d=b.parent?b.getIndex():-1}return 
c>d?1:-1})},param:function(a){a.children=[]; a.isEmpty=true; return a},span:function(a){a.attributes["class"]=="Apple-style-span"&& delete 
a.name},html:function(a){delete a.attributes.contenteditable; delete a.attributes["class"]},body:function(a){delete a.attributes.spellcheck; delete 
a.attributes.contenteditable},style:function(a){var b=a.children[0]; if(b&&b.value)b.value=CKEDITOR.tools.trim(b.value); 
if(!a.attributes.type)a.attributes.type="text/css"},title:function(a){var b=a.children[0]; !b&&h(a,b=new CKEDITOR.htmlParser.text); 
b.value=a.attributes["data-cke-title"]||""},input:i,textarea:i},attributes:{"class":function(a){return CKEDITOR.tools.ltrim(a.replace(/(?:^|\s+)cke_[^\s]*/g, 
""))||false}}}; if(CKEDITOR.env.ie)M.attributes.style=function(a){return a.replace(/(^|; )([^\:]+)/g,function(a){return a.toLowerCase()})}; var 
D=/<(a|area|img|input|source)\b([^>]*)>/gi,J=/([\w-]+)\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|(?:[^ "'>]+))/gi,z=/^(href|src|name)$/i,L=/(?:<style(?=[ 
>])[^>]*>[\s\S]*?<\/style>)|(?:<(:?link|meta|base)[^>]*>)/gi,B=/(<textarea(?=[ 
>])[^>]*>)([\s\S]*?)(?:<\/textarea>)/gi,w=/<cke:encoded>([^<]*)<\/cke:encoded>/gi,H=/(<\/?)((?:object|embed|param|html|body|head|title)[^>]*>)/gi, 
C=/(<\/?)cke:((?:html|body|head|title)[^>]*>)/gi,A=/<cke:(param|embed)([^>]*?)\/?>(?!\s*<\/cke:\1)/gi})(); "use strict";

CKEDITOR.htmlParser.element=function(a,e){this.name=a; this.attributes=e||{}; this.children=[]; var b=a||"",c=b.match(/^cke:(.*)/); c&&(b=c[1]); 
b=!(!CKEDITOR.dtd.$nonBodyContent[b]&&!CKEDITOR.dtd.$block[b]&&!CKEDITOR.dtd.$listItem[b]&&!CKEDITOR.dtd.$tableContent[b]&&!(CKEDITOR.dtd.$nonEditable[b]||b=="br")); 
this.isEmpty=!!CKEDITOR.dtd.$empty[a]; this.isUnknown=!CKEDITOR.dtd[a]; this._={isBlockLike:b,hasInlineStarted:this.isEmpty||!b}};

CKEDITOR.htmlParser.cssStyle=function(a){var e={}; ((a instanceof CKEDITOR.htmlParser.element?a.attributes.style:a)||"").replace(/' /g,'"').replace(/\s*([^ :; 
]+)\s*:\s*([^; ]+)\s*(?=;
|$)/g,function(a,c,f){c=="font-family"&&(f=f.replace(/["']/g,""));
e[c.toLowerCase()]=f}); return{rules:e,populate:function(a){var c=this.toString(); if(c)a instanceof CKEDITOR.dom.element?a.setAttribute("style",c):a instanceof 
CKEDITOR.htmlParser.element?a.attributes.style=c:a.style=c},toString:function(){var a=[],c;

for(c in e)e[c]&&a.push(c,":",e[c],"; "); return a.join("")}}};

(function(){function a(a){return function(b){return b.type==CKEDITOR.NODE_ELEMENT&&(typeof a=="string"?b.name==a:b.name in a)}}var e=function(a,b){a=a[0]; 
b=b[0]; return a<b?-1:a>b?1:0},b=CKEDITOR.htmlParser.fragment.prototype; CKEDITOR.htmlParser.element.prototype=CKEDITOR.tools.extend(new 
CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_ELEMENT,add:b.add,clone:function(){return new 
CKEDITOR.htmlParser.element(this.name,this.attributes)},filter:function(a,b){var d=this,e,l,b=d.getFilterContext(b); if(b.off)return true;

if(!d.parent)a.onRoot(b,d); for(; ; ){e=d.name; if(!(l=a.onElementName(b,e))){this.remove(); return false}d.name=l; if(!(d=a.onElement(b,d))){this.remove(); 
return false}if(d!==this){this.replaceWith(d); return false}if(d.name==e)break; if(d.type!=CKEDITOR.NODE_ELEMENT){this.replaceWith(d); return 
false}if(!d.name){this.replaceWithChildren(); return false}}e=d.attributes; var i,g; for(i in e){g=i; for(l=e[i]; ; )if(g=a.onAttributeName(b,i))if(g!=i){delete 
e[i]; i=g}else break; else{delete e[i]; break}g&&((l=a.onAttribute(b, d,g,l))===false?delete e[g]:e[g]=l)}d.isEmpty||this.filterChildren(a,false,b); return 
true},filterChildren:b.filterChildren,writeHtml:function(a,b){b&&this.filter(b); var d=this.name,h=[],l=this.attributes,i,g; a.openTag(d,l); for(i in 
l)h.push([i,l[i]]); a.sortAttributes&&h.sort(e); i=0; for(g=h.length; i<g; i++){l=h[i]; a.attribute(l[0],l[1])}a.openTagClose(d,this.isEmpty); 
this.writeChildrenHtml(a); this.isEmpty||a.closeTag(d)},writeChildrenHtml:b.writeChildrenHtml,replaceWithChildren:function(){for(var a= 
this.children,b=a.length; b; )a[--b].insertAfter(this); this.remove()},forEach:b.forEach,getFirst:function(b){if(!b)return 
this.children.length?this.children[0]:null; typeof b!="function"&&(b=a(b)); for(var f=0,d=this.children.length; f<d; ++f)if(b(this.children[f]))return 
this.children[f]; return null},getHtml:function(){var a=new CKEDITOR.htmlParser.basicWriter; this.writeChildrenHtml(a); return 
a.getHtml()},setHtml:function(a){for(var a=this.children=CKEDITOR.htmlParser.fragment.fromHtml(a).children,b=0, d=a.length; b<d; 
++b)a[b].parent=this},getOuterHtml:function(){var a=new CKEDITOR.htmlParser.basicWriter; this.writeHtml(a); return a.getHtml()},split:function(a){for(var 
b=this.children.splice(a,this.children.length-a),d=this.clone(),e=0; e<b.length; ++e)b[e].parent=d; d.children=b; if(b[0])b[0].previous=null; 
if(a>0)this.children[a-1].next=null; this.parent.add(d,this.getIndex()+1); return d},addClass:function(a){if(!this.hasClass(a)){var 
b=this.attributes["class"]||""; this.attributes["class"]=b+(b?" ":"")+ a}},removeClass:function(a){var b=this.attributes["class"]; 
if(b)(b=CKEDITOR.tools.trim(b.replace(RegExp("(?:\\s+|^)"+a+"(?:\\s+|$)")," ")))?this.attributes["class"]=b:delete 
this.attributes["class"]},hasClass:function(a){var b=this.attributes["class"]; 
return!b?false:RegExp("(?:^|\\s)"+a+"(?=\\s|$)").test(b)},getFilterContext:function(a){var b=[]; a||(a={off:false,nonEditable:false,nestedEditable:false}); 
!a.off&&this.attributes["data-cke-processor"]=="off"&&b.push("off",true); !a.nonEditable&&this.attributes.contenteditable== 
"false"?b.push("nonEditable",true):a.nonEditable&&(!a.nestedEditable&&this.attributes.contenteditable=="true")&&b.push("nestedEditable",true); 
if(b.length)for(var a=CKEDITOR.tools.copy(a),d=0; d<b.length; d=d+2)a[b[d]]=b[d+1]; return a}},true)})();

(function(){var a={},e=/{([^}]+)}/g,b=/([\\'])/g,c=/\n/g,f=/\r/g; CKEDITOR.template=function(d){if(a[d])this.output=a[d]; else{var 
h=d.replace(b,"\\$1").replace(c,"\\n").replace(f,"\\r").replace(e,function(a,b){return"',data['"+b+"']==undefined?'{"+b+"}':data['"+b+"'],'"}); 
this.output=a[d]=Function("data","buffer","return buffer?buffer.push('"+h+"'):['"+h+"'].join(''); ")}}})(); delete CKEDITOR.loadFullCore; CKEDITOR.instances={}; 
CKEDITOR.document=new CKEDITOR.dom.document(document);

CKEDITOR.add=function(a){CKEDITOR.instances[a.name]=a; a.on("focus",function(){if(CKEDITOR.currentInstance!=a){CKEDITOR.currentInstance=a; 
CKEDITOR.fire("currentInstance")}}); a.on("blur",function(){if(CKEDITOR.currentInstance==a){CKEDITOR.currentInstance=null; CKEDITOR.fire("currentInstance")}}); 
CKEDITOR.fire("instance",null,a)}; CKEDITOR.remove=function(a){delete CKEDITOR.instances[a.name]};

(function(){var a={}; CKEDITOR.addTemplate=function(e,b){var c=a[e]; if(c)return c; c={name:e,source:b}; CKEDITOR.fire("template",c); return a[e]=new 
CKEDITOR.template(c.source)}; CKEDITOR.getTemplate=function(e){return a[e]}})(); (function(){var a=[]; CKEDITOR.addCss=function(e){a.push(e)}; 
CKEDITOR.getCss=function(){return a.join("\n")}})(); 
CKEDITOR.on("instanceDestroyed",function(){CKEDITOR.tools.isEmpty(this.instances)&&CKEDITOR.fire("reset")}); CKEDITOR.TRISTATE_ON=1; CKEDITOR.TRISTATE_OFF=2;

CKEDITOR.TRISTATE_DISABLED=0;

(function(){CKEDITOR.inline=function(a,e){if(!CKEDITOR.env.isCompatible)return null; a=CKEDITOR.dom.element.get(a); if(a.getEditor())throw'The editor instance 
"'+a.getEditor().name+'" is already attached to the provided element.'; var b=new CKEDITOR.editor(e,a,CKEDITOR.ELEMENT_MODE_INLINE),c=a.is("textarea")?a:null; 
if(c){b.setData(c.getValue(),null,true); a=CKEDITOR.dom.element.createFromHtml('<div contenteditable="'+!!b.readOnly+'" 
class="cke_textarea_inline">'+c.getValue()+"</div>",CKEDITOR.document);

a.insertAfter(c); c.hide(); c.$.form&&b._attachToForm()}else b.setData(a.getHtml(),null,true); b.on("loaded",function(){b.fire("uiReady"); b.editable(a); 
b.container=a; b.setData(b.getData(1)); b.resetDirty(); b.fire("contentDom"); b.mode="wysiwyg"; b.fire("mode"); b.status="ready"; b.fireOnce("instanceReady"); 
CKEDITOR.fire("instanceReady",null,b)},null,null,1E4); b.on("destroy",function(){if(c){b.container.clearCustomData(); b.container.remove(); 
c.show()}b.element.clearCustomData(); delete b.element}); return b};

CKEDITOR.inlineAll=function(){var a,e,b; for(b in CKEDITOR.dtd.$editable)for(var c=CKEDITOR.document.getElementsByTag(b),f=0,d=c.count(); f<d; 
f++){a=c.getItem(f); if(a.getAttribute("contenteditable")=="true"){e={element:a,config:{}}; CKEDITOR.fire("inline",e)!==false&&CKEDITOR.inline(a,e.config)}}}; 
CKEDITOR.domReady(function(){!CKEDITOR.disableAutoInline&&CKEDITOR.inlineAll()})})(); CKEDITOR.replaceClass="ckeditor";

(function(){function a(a,f,d,h){if(!CKEDITOR.env.isCompatible)return null; a=CKEDITOR.dom.element.get(a); if(a.getEditor())throw'The editor instance 
"'+a.getEditor().name+'" is already attached to the provided element.'; var l=new CKEDITOR.editor(f,a,h); 
if(h==CKEDITOR.ELEMENT_MODE_REPLACE){a.setStyle("visibility","hidden"); l._.required=a.hasAttribute("required"); 
a.removeAttribute("required")}d&&l.setData(d,null,true); l.on("loaded",function(){b(l); h==CKEDITOR.ELEMENT_MODE_REPLACE&&(l.config.autoUpdateElement&& 
a.$.form)&&l._attachToForm(); l.setMode(l.config.startupMode,function(){l.resetDirty(); l.status="ready"; l.fireOnce("instanceReady"); 
CKEDITOR.fire("instanceReady",null,l)})}); l.on("destroy",e); return l}function e(){var a=this.container,b=this.element; if(a){a.clearCustomData(); 
a.remove()}if(b){b.clearCustomData(); if(this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE){b.show(); 
this._.required&&b.setAttribute("required","required")}delete this.element}}function b(a){var b=a.name,d=a.element,e=a.elementMode, 
l=a.fire("uiSpace",{space:"top",html:""}).html,i=a.fire("uiSpace",{space:"bottom",html:""}).html,g=new CKEDITOR.template('<{outerEl} id="cke_{name}" class="{id} 
cke cke_reset cke_chrome cke_editor_{name} cke_{langDir} '+CKEDITOR.env.cssClass+'" dir="{langDir}" lang="{langCode}" role="application"'+(a.title?' 
aria-labelledby="cke_{name}_arialbl"':"")+">"+(a.title?'<span id="cke_{name}_arialbl" class="cke_voice_label">{voiceLabel}</span>':"")+'<{outerEl} 
class="cke_inner cke_reset" role="presentation">{topHtml}<{outerEl} id="{contentId}" class="cke_contents cke_reset" 
role="presentation"></{outerEl}>{bottomHtml}</{outerEl}></{outerEl}>'), 
b=CKEDITOR.dom.element.createFromHtml(g.output({id:a.id,name:b,langDir:a.lang.dir,langCode:a.langCode,voiceLabel:a.title,topHtml:l?'<span 
id="'+a.ui.spaceId("top")+'" class="cke_top cke_reset_all" role="presentation" 
style="height:auto">'+l+"</span>":"",contentId:a.ui.spaceId("contents"),bottomHtml:i?'<span id="'+a.ui.spaceId("bottom")+'" class="cke_bottom cke_reset_all" 
role="presentation">'+i+"</span>":"",outerEl:CKEDITOR.env.ie?"span":"div"})); if(e==CKEDITOR.ELEMENT_MODE_REPLACE){d.hide(); b.insertAfter(d)}else d.append(b);

a.container=b; l&&a.ui.space("top").unselectable(); i&&a.ui.space("bottom").unselectable(); d=a.config.width; e=a.config.height; 
d&&b.setStyle("width",CKEDITOR.tools.cssLength(d)); e&&a.ui.space("contents").setStyle("height",CKEDITOR.tools.cssLength(e)); b.disableContextMenu(); 
CKEDITOR.env.webkit&&b.on("focus",function(){a.focus()});
a.fireOnce("uiReady")}


CKEDITOR.replace=function(b,f){return a(b,f,null,CKEDITOR.ELEMENT_MODE_REPLACE)}; CKEDITOR.appendTo=function(b,f,d){return 
a(b,f,d,CKEDITOR.ELEMENT_MODE_APPENDTO)};

CKEDITOR.replaceAll=function(){for(var a=document.getElementsByTagName("textarea"),b=0; b<a.length; b++){var d=null,e=a[b]; if(e.name||e.id){if(typeof 
arguments[0]=="string"){if(!RegExp("(?:^|\\s)"+arguments[0]+"(?:$|\\s)").test(e.className))continue}else if(typeof arguments[0]=="function"){d={}; 
if(arguments[0](e,d)===false)continue}this.replace(e,d)}}}; CKEDITOR.editor.prototype.addMode=function(a,b){(this._.modes||(this._.modes={}))[a]=b}; 
CKEDITOR.editor.prototype.setMode=function(a,b){var d=this,e= this._.modes; if(!(a==d.mode||!e||!e[a])){d.fire("beforeSetMode",a); if(d.mode){var 
l=d.checkDirty(),e=d._.previousModeData,i,g=0; d.fire("beforeModeUnload"); d.editable(0); d._.previousMode=d.mode; d._.previousModeData=i=d.getData(1); 
if(d.mode=="source"&&e==i){d.fire("lockSnapshot",{forceUpdate:true}); g=1}d.ui.space("contents").setHtml(""); d.mode=""}else d._.previousModeData=d.getData(1); 
this._.modes[a](function(){d.mode=a; l!==void 0&&!l&&d.resetDirty(); g?d.fire("unlockSnapshot"):a=="wysiwyg"&&d.fire("saveSnapshot");

setTimeout(function(){d.fire("mode"); b&&b.call(d)},0)})}}; CKEDITOR.editor.prototype.resize=function(a,b,d,e){var 
l=this.container,i=this.ui.space("contents"),g=CKEDITOR.env.webkit&&this.document&&this.document.getWindow().$.frameElement,e=e?this.container.getFirst(function(a){return 
a.type==CKEDITOR.NODE_ELEMENT&&a.hasClass("cke_inner")}):l; e.setSize("width",a,true); g&&(g.style.width="1%"); 
i.setStyle("height",Math.max(b-(d?0:(e.$.offsetHeight||0)-(i.$.clientHeight||0)),0)+"px"); g&&(g.style.width= "100%"); this.fire("resize")}; 
CKEDITOR.editor.prototype.getResizable=function(a){return a?this.ui.space("contents"):this.container}; 
CKEDITOR.domReady(function(){CKEDITOR.replaceClass&&CKEDITOR.replaceAll(CKEDITOR.replaceClass)})})(); CKEDITOR.config.startupMode="wysiwyg";

(function(){function a(a){var b=a.editor,d=a.data.path,f=d.blockLimit,k=a.data.selection,n=k.getRanges()[0],r; 
if(CKEDITOR.env.gecko||CKEDITOR.env.ie&&CKEDITOR.env.needsBrFiller)if(k=e(k,d)){k.appendBogus(); 
r=CKEDITOR.env.ie}if(h(b,d.block,f)&&n.collapsed&&!n.getCommonAncestor().isReadOnly()){d=n.clone(); d.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS); f=new 
CKEDITOR.dom.walker(d); f.guard=function(a){return!c(a)||a.type==CKEDITOR.NODE_COMMENT||a.isReadOnly()}; if(!f.checkForward()||d.checkStartOfBlock()&& 
d.checkEndOfBlock()){b=n.fixBlock(true,b.activeEnterMode==CKEDITOR.ENTER_DIV?"div":"p"); 
if(!CKEDITOR.env.needsBrFiller)(b=b.getFirst(c))&&(b.type==CKEDITOR.NODE_TEXT&&CKEDITOR.tools.trim(b.getText()).match(/^(?:&nbsp;
|\xa0)$/))&&b.remove();
r=1; a.cancel()}}r&&n.select()}function e(a,b){if(a.isFake)return 0; var d=b.block||b.blockLimit,e=d&&d.getLast(c); 
if(d&&d.isBlockBoundary()&&(!e||!(e.type==CKEDITOR.NODE_ELEMENT&&e.isBlockBoundary()))&&!d.is("pre")&&!d.getBogus())return d}function b(a){var 
b=a.data.getTarget();

if(b.is("input")){b=b.getAttribute("type"); (b=="submit"||b=="reset")&&a.data.preventDefault()}}function c(a){return s(a)&&y(a)}function f(a,b){return 
function(c){var d=CKEDITOR.dom.element.get(c.data.$.toElement||c.data.$.fromElement||c.data.$.relatedTarget); 
(!d||!b.equals(d)&&!b.contains(d))&&a.call(this,c)}}function d(a){function b(a){return function(b,e){e&&(b.type==CKEDITOR.NODE_ELEMENT&&b.is(f))&&(d=b); 
if(!e&&c(b)&&(!a||!m(b)))return false}}var d,e=a.getRanges()[0],a=a.root,f={table:1,ul:1,ol:1, dl:1}; if(e.startPath().contains(f)){var n=e.clone(); 
n.collapse(1); n.setStartAt(a,CKEDITOR.POSITION_AFTER_START); a=new CKEDITOR.dom.walker(n); a.guard=b(); a.checkBackward(); if(d){n=e.clone(); n.collapse(); 
n.setEndAt(d,CKEDITOR.POSITION_AFTER_END); a=new CKEDITOR.dom.walker(n); a.guard=b(true); d=false; a.checkForward(); return d}}return null}function 
h(a,b,c){return a.config.autoParagraph!==false&&a.activeEnterMode!=CKEDITOR.ENTER_BR&&a.editable().equals(c)&&!b||b&&b.getAttribute("contenteditable")=="true"} 
function l(a){a.editor.focus(); a.editor.fire("saveSnapshot")}function i(a){var b=a.editor; b.getSelection().scrollIntoView(); 
setTimeout(function(){b.fire("saveSnapshot")},0)}function g(a,b,c){for(var d=a.getCommonAncestor(b),b=a=c?b:a; 
(a=a.getParent())&&!d.equals(a)&&a.getChildCount()==1; )b=a; 
b.remove()}CKEDITOR.editable=CKEDITOR.tools.createClass({base:CKEDITOR.dom.element,$:function(a,b){this.base(b.$||b); this.editor=a; this.status="unloaded"; 
this.hasFocus=false; this.setup()},proto:{focus:function(){var a;

if(CKEDITOR.env.webkit&&!this.hasFocus){a=this.editor._.previousActive||this.getDocument().getActive(); if(this.contains(a)){a.focus(); 
return}}try{this.$[CKEDITOR.env.ie&&this.getDocument().equals(CKEDITOR.document)?"setActive":"focus"]()}catch(b){if(!CKEDITOR.env.ie)throw b;
}if(CKEDITOR.env.safari&&!this.isInline()){a=CKEDITOR.document.getActive();
a.equals(this.getWindow().getFrame())||this.getWindow().focus()}},on:function(a,b){var c=Array.prototype.slice.call(arguments,0); 
if(CKEDITOR.env.ie&&/^focus|blur$/.exec(a)){a= a=="focus"?"focusin":"focusout"; b=f(b,this); c[0]=a; c[1]=b}return 
CKEDITOR.dom.element.prototype.on.apply(this,c)},attachListener:function(a){!this._.listeners&&(this._.listeners=[]); var 
b=Array.prototype.slice.call(arguments,1),b=a.on.apply(a,b); this._.listeners.push(b); return b},clearListeners:function(){var a=this._.listeners; try{for(; 
a.length; )a.pop().removeListener()}catch(b){}},restoreAttrs:function(){var a=this._.attrChanges,b,c; for(c in a)if(a.hasOwnProperty(c)){b=a[c]; 
b!==null?this.setAttribute(c, b):this.removeAttribute(c)}},attachClass:function(a){var b=this.getCustomData("classes"); if(!this.hasClass(a)){!b&&(b=[]); 
b.push(a); this.setCustomData("classes",b); this.addClass(a)}},changeAttr:function(a,b){var c=this.getAttribute(a); 
if(b!==c){!this._.attrChanges&&(this._.attrChanges={}); a in this._.attrChanges||(this._.attrChanges[a]=c); 
this.setAttribute(a,b)}},insertHtml:function(a,b){l(this); p(this,b||"html",a)},insertText:function(a){l(this); var 
b=this.editor,c=b.getSelection().getStartElement().hasAscendant("pre", 
true)?CKEDITOR.ENTER_BR:b.activeEnterMode,b=c==CKEDITOR.ENTER_BR,d=CKEDITOR.tools,a=d.htmlEncode(a.replace(/\r\n/g,"\n")),a=a.replace(/\t/g,"&nbsp; &nbsp;
 &nbsp; "),c=c==CKEDITOR.ENTER_P?"p":"div"; if(!b){var e=/\n{2}/g; if(e.test(a))var f="<"+c+">",r="</"+c+">",a=f+a.replace(e,function(){return 
r+f})+r}a=a.replace(/\n/g,"<br>"); b||(a=a.replace(RegExp("<br>(?=</"+c+">)"),function(a){return d.repeat(a,2)})); a=a.replace(/^ | $/g,"&nbsp; "); 
a=a.replace(/(>|\s) /g,function(a,b){return b+"&nbsp; "}).replace(/ (?=<)/g, "&nbsp; "); 
p(this,"text",a)},insertElement:function(a,b){b?this.insertElementIntoRange(a,b):this.insertElementIntoSelection(a)},insertElementIntoRange:function(a,b){var 
c=this.editor,d=c.config.enterMode,e=a.getName(),f=CKEDITOR.dtd.$block[e]; if(b.checkReadOnly())return false; b.deleteContents(1); 
b.startContainer.type==CKEDITOR.NODE_ELEMENT&&b.startContainer.is({tr:1,table:1,tbody:1,thead:1,tfoot:1})&&q(b); var r,g; if(f)for(; 
(r=b.getCommonAncestor(0,1))&&(g=CKEDITOR.dtd[r.getName()])&&(!g||!g[e]); )if(r.getName()in CKEDITOR.dtd.span)b.splitElement(r); else 
if(b.checkStartOfBlock()&&b.checkEndOfBlock()){b.setStartBefore(r); b.collapse(true); r.remove()}else 
b.splitBlock(d==CKEDITOR.ENTER_DIV?"div":"p",c.editable()); b.insertNode(a); return true},insertElementIntoSelection:function(a){l(this); var 
b=this.editor,d=b.activeEnterMode,b=b.getSelection(),e=b.getRanges()[0],f=a.getName(),f=CKEDITOR.dtd.$block[f]; 
if(this.insertElementIntoRange(a,e)){e.moveToPosition(a,CKEDITOR.POSITION_AFTER_END); if(f)if((f=a.getNext(function(a){return c(a)&& 
!m(a)}))&&f.type==CKEDITOR.NODE_ELEMENT&&f.is(CKEDITOR.dtd.$block))f.getDtd()["#"]?e.moveToElementEditStart(f):e.moveToElementEditEnd(a); else 
if(!f&&d!=CKEDITOR.ENTER_BR){f=e.fixBlock(true,d==CKEDITOR.ENTER_DIV?"div":"p"); e.moveToElementEditStart(f)}}b.selectRanges([e]); 
i(this)},setData:function(a,b){b||(a=this.editor.dataProcessor.toHtml(a)); this.setHtml(a); this.fixInitialSelection(); 
if(this.status=="unloaded")this.status="ready"; this.editor.fire("dataReady")},getData:function(a){var b=this.getHtml();

a||(b=this.editor.dataProcessor.toDataFormat(b)); return 
b},setReadOnly:function(a){this.setAttribute("contenteditable",!a)},detach:function(){this.removeClass("cke_editable"); this.status="detached"; var 
a=this.editor; this._.detach(); delete a.document; delete a.window},isInline:function(){return 
this.getDocument().equals(CKEDITOR.document)},fixInitialSelection:function(){function a(){var b=c.getDocument().$,d=b.getSelection(),e; 
if(d.anchorNode&&d.anchorNode==c.$)e=true; else if(CKEDITOR.env.webkit){var f= c.getDocument().getActive(); 
f&&(f.equals(c)&&!d.anchorNode)&&(e=true)}if(e){e=new CKEDITOR.dom.range(c); e.moveToElementEditStart(c); b=b.createRange(); 
b.setStart(e.startContainer.$,e.startOffset); b.collapse(true); d.removeAllRanges(); d.addRange(b)}}function b(){var 
a=c.getDocument().$,d=a.selection,e=c.getDocument().getActive(); if(d.type=="None"&&e.equals(c)){d=new CKEDITOR.dom.range(c); a=a.body.createTextRange(); 
d.moveToElementEditStart(c); d=d.startContainer; d.type!=CKEDITOR.NODE_ELEMENT&&(d=d.getParent());

a.moveToElementText(d.$); a.collapse(true); a.select()}}var c=this; if(CKEDITOR.env.ie&&CKEDITOR.env.version<9){if(this.hasFocus){this.focus(); b()}}else 
if(this.hasFocus){this.focus(); a()}else this.once("focus",function(){a()},null,null,-999)},setup:function(){var a=this.editor; 
this.attachListener(a,"beforeGetData",function(){var b=this.getData(); 
this.is("textarea")||a.config.ignoreEmptyParagraph!==false&&(b=b.replace(t,function(a,b){return b})); a.setData(b,null,1)},this); 
this.attachListener(a,"getSnapshot", function(a){a.data=this.getData(1)},this); 
this.attachListener(a,"afterSetData",function(){this.setData(a.getData(1))},this); 
this.attachListener(a,"loadSnapshot",function(a){this.setData(a.data,1)},this); this.attachListener(a,"beforeFocus",function(){var b=a.getSelection(); 
(b=b&&b.getNative())&&b.type=="Control"||this.focus()},this); 
this.attachListener(a,"insertHtml",function(a){this.insertHtml(a.data.dataValue,a.data.mode)},this); 
this.attachListener(a,"insertElement",function(a){this.insertElement(a.data)}, this); 
this.attachListener(a,"insertText",function(a){this.insertText(a.data)},this); this.setReadOnly(a.readOnly); this.attachClass("cke_editable"); 
this.attachClass(a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?"cke_editable_inline":a.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE||a.elementMode==CKEDITOR.ELEMENT_MODE_APPENDTO?"cke_editable_themed":""); 
this.attachClass("cke_contents_"+a.config.contentsLangDirection); a.keystrokeHandler.blockedKeystrokes[8]=+a.readOnly; a.keystrokeHandler.attach(this); 
this.on("blur", function(){this.hasFocus=false},null,null,-1); this.on("focus",function(){this.hasFocus=true},null,null,-1); a.focusManager.add(this); 
if(this.equals(CKEDITOR.document.getActive())){this.hasFocus=true; 
a.once("contentDom",function(){a.focusManager.focus(this)},this)}this.isInline()&&this.changeAttr("tabindex",a.tabIndex); 
if(!this.is("textarea")){a.document=this.getDocument(); a.window=this.getWindow(); var e=a.document; 
this.changeAttr("spellcheck",!a.config.disableNativeSpellChecker); var f=a.config.contentsLangDirection;

this.getDirection(1)!=f&&this.changeAttr("dir",f); var h=CKEDITOR.getCss(); if(h){f=e.getHead(); if(!f.getCustomData("stylesheet")){h=e.appendStyleText(h); 
h=new CKEDITOR.dom.element(h.ownerNode||h.owningElement); f.setCustomData("stylesheet",h); h.data("cke-temp",1)}}f=e.getCustomData("stylesheet_ref")||0; 
e.setCustomData("stylesheet_ref",f+1); this.setCustomData("cke_includeReadonly",!a.config.disableReadonlyStyling); 
this.attachListener(this,"click",function(a){var a=a.data,b=(new CKEDITOR.dom.elementPath(a.getTarget(), this)).contains("a"); 
b&&(a.$.button!=2&&b.isReadOnly())&&a.preventDefault()}); var k={8:1,46:1}; this.attachListener(a,"key",function(b){if(a.readOnly)return true; var 
c=b.data.domEvent.getKey(),e; if(c in k){var b=a.getSelection(),f,g=b.getRanges()[0],h=g.startPath(),i,m,l,c=c==8; 
if(CKEDITOR.env.ie&&CKEDITOR.env.version<11&&(f=b.getSelectedElement())||(f=d(b))){a.fire("saveSnapshot"); g.moveToPosition(f,CKEDITOR.POSITION_BEFORE_START); 
f.remove(); g.select(); a.fire("saveSnapshot"); e=1}else if(g.collapsed)if((i= 
h.block)&&(l=i[c?"getPrevious":"getNext"](s))&&l.type==CKEDITOR.NODE_ELEMENT&&l.is("table")&&g[c?"checkStartOfBlock":"checkEndOfBlock"]()){a.fire("saveSnapshot"); 
g[c?"checkEndOfBlock":"checkStartOfBlock"]()&&i.remove(); g["moveToElementEdit"+(c?"End":"Start")](l); g.select(); a.fire("saveSnapshot"); e=1}else 
if(h.blockLimit&&h.blockLimit.is("td")&&(m=h.blockLimit.getAscendant("table"))&&g.checkBoundaryOfElement(m,c?CKEDITOR.START:CKEDITOR.END)&&(l=m[c?"getPrevious":"getNext"](s))){a.fire("saveSnapshot");

g["moveToElementEdit"+(c?"End":"Start")](l); g.checkStartOfBlock()&&g.checkEndOfBlock()?l.remove():g.select(); a.fire("saveSnapshot"); e=1}else 
if((m=h.contains(["td","th","caption"]))&&g.checkBoundaryOfElement(m,c?CKEDITOR.START:CKEDITOR.END))e=1}return!e}); 
a.blockless&&(CKEDITOR.env.ie&&CKEDITOR.env.needsBrFiller)&&this.attachListener(this,"keyup",function(b){if(b.data.getKeystroke()in 
k&&!this.getFirst(c)){this.appendBogus(); b=a.createRange(); b.moveToPosition(this,CKEDITOR.POSITION_AFTER_START); b.select()}});

this.attachListener(this,"dblclick",function(b){if(a.readOnly)return false; b={element:b.data.getTarget()}; a.fire("doubleclick",b)}); 
CKEDITOR.env.ie&&this.attachListener(this,"click",b); CKEDITOR.env.ie||this.attachListener(this,"mousedown",function(b){var c=b.data.getTarget(); 
if(c.is("img","hr","input","textarea","select")&&!c.isReadOnly()){a.getSelection().selectElement(c); 
c.is("input","textarea","select")&&b.data.preventDefault()}}); CKEDITOR.env.gecko&&this.attachListener(this,"mouseup",function(b){if(b.data.$.button== 
2){b=b.data.getTarget(); if(!b.getOuterHtml().replace(t,"")){var c=a.createRange(); c.moveToElementEditStart(b); c.select(true)}}}); 
if(CKEDITOR.env.webkit){this.attachListener(this,"click",function(a){a.data.getTarget().is("input","select")&&a.data.preventDefault()}); 
this.attachListener(this,"mouseup",function(a){a.data.getTarget().is("input","textarea")&&a.data.preventDefault()})}CKEDITOR.env.webkit&&this.attachListener(a,"key",function(b){b=b.data.domEvent.getKey(); 
if(b in k){var c=b==8,d=a.getSelection().getRanges()[0], b=d.startPath(); if(d.collapsed){var e; a:{var f=b.block; 
if(f)if(d[c?"checkStartOfBlock":"checkEndOfBlock"]())if(!d.moveToClosestEditablePosition(f,!c)||!d.collapsed)e=false; 
else{if(d.startContainer.type==CKEDITOR.NODE_ELEMENT){var h=d.startContainer.getChild(d.startOffset-(c?1:0)); 
if(h&&h.type==CKEDITOR.NODE_ELEMENT&&h.is("hr")){a.fire("saveSnapshot"); h.remove(); e=true; break 
a}}if((d=d.startPath().block)&&(!d||!d.contains(f))){a.fire("saveSnapshot"); var i; (i=(c?d:f).getBogus())&&i.remove(); e=a.getSelection();

i=e.createBookmarks(); (c?f:d).moveChildren(c?d:f,false); b.lastElement.mergeSiblings(); g(f,d,!c); e.selectBookmarks(i); e=true}}else e=false; else 
e=false}if(!e)return}else{c=d; e=b.block; i=c.endPath().block; if(!e||!i||e.equals(i))b=false; else{a.fire("saveSnapshot"); (f=e.getBogus())&&f.remove(); 
c.deleteContents(); if(i.getParent()){i.moveChildren(e,false); b.lastElement.mergeSiblings(); g(e,i,true)}c=a.getSelection().getRanges()[0]; c.collapse(1); 
c.select(); b=true}if(!b)return}a.getSelection().scrollIntoView();

a.fire("saveSnapshot"); return false}},this,null,100)}}},_:{detach:function(){this.editor.setData(this.editor.getData(),0,1); this.clearListeners(); 
this.restoreAttrs(); var a; if(a=this.removeCustomData("classes"))for(; a.length; )this.removeClass(a.pop()); if(!this.is("textarea")){a=this.getDocument(); var 
b=a.getHead(); if(b.getCustomData("stylesheet")){var c=a.getCustomData("stylesheet_ref"); if(--c)a.setCustomData("stylesheet_ref",c); 
else{a.removeCustomData("stylesheet_ref"); b.removeCustomData("stylesheet").remove()}}}this.editor.fire("contentDomUnload");

delete this.editor}}}); CKEDITOR.editor.prototype.editable=function(a){var b=this._.editable; if(b&&a)return 0; if(arguments.length)b=this._.editable=a?a 
instanceof CKEDITOR.editable?a:new CKEDITOR.editable(this,a):(b&&b.detach(),null); return b}; var 
m=CKEDITOR.dom.walker.bogus(),t=/(^|<body\b[^>]*>)\s*<(p|div|address|h\d|center|pre)[^>]*>\s*(?:<br[^>]*>|&nbsp;
|\u00A0|&#160;
)?\s*(:?<\/\2>)?\s*(?=$|<\/body>)/gi,s=CKEDITOR.dom.walker.whitespaces(true),y=CKEDITOR.dom.walker.bookmark(false,true); CKEDITOR.on("instanceLoaded", 
function(b){var c=b.editor; c.on("insertElement",function(a){a=a.data; 
if(a.type==CKEDITOR.NODE_ELEMENT&&(a.is("input")||a.is("textarea"))){a.getAttribute("contentEditable")!="false"&&a.data("cke-editable",a.hasAttribute("contenteditable")?"true":"1"); 
a.setAttribute("contentEditable",false)}}); c.on("selectionChange",function(b){if(!c.readOnly){var d=c.getSelection(); if(d&&!d.isLocked){d=c.checkDirty(); 
c.fire("lockSnapshot"); a(b); c.fire("unlockSnapshot"); !d&&c.resetDirty()}}})}); CKEDITOR.on("instanceCreated", function(a){var b=a.editor; 
b.on("mode",function(){var a=b.editable(); if(a&&a.isInline()){var c=b.title; a.changeAttr("role","textbox"); a.changeAttr("aria-label",c); 
c&&a.changeAttr("title",c); var d=b.fire("ariaEditorHelpLabel",{}).label; 
if(d)if(c=this.ui.space(this.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?"top":"contents")){var 
e=CKEDITOR.tools.getNextId(),d=CKEDITOR.dom.element.createFromHtml('<span id="'+e+'" class="cke_voice_label">'+d+"</span>"); c.append(d); 
a.changeAttr("aria-describedby",e)}}})});

CKEDITOR.addCss(".cke_editable{cursor:text}.cke_editable img,.cke_editable input,.cke_editable textarea{cursor:default}"); var p=function(){function a(b){return 
b.type==CKEDITOR.NODE_ELEMENT}function b(c,d){var e,f,k,n,h=[],i=d.range.startContainer; e=d.range.startPath(); for(var 
i=g[i.getName()],o=0,l=c.getChildren(),m=l.count(),D=-1,p=-1,M=0,s=e.contains(g.$list); o<m; ++o){e=l.getItem(o); if(a(e)){k=e.getName(); if(s&&k in 
CKEDITOR.dtd.$list)h=h.concat(b(e,d)); else{n=!!i[k]; if(k=="br"&&e.data("cke-eol")&& (!o||o==m-1)){M=(f=o?h[o-1].node:l.getItem(o+1))&&(!a(f)||!f.is("br")); 
f=f&&a(f)&&g.$block[f.getName()]}D==-1&&!n&&(D=o); n||(p=o); 
h.push({isElement:1,isLineBreak:M,isBlock:e.isBlockBoundary(),hasBlockSibling:f,node:e,name:k,allowed:n}); f=M=0}}else 
h.push({isElement:0,node:e,allowed:1})}if(D>-1)h[D].firstNotAllowed=1; if(p>-1)h[p].lastNotAllowed=1; return h}function d(b,c){var 
e=[],f=b.getChildren(),k=f.count(),n,h=0,i=g[c],o=!b.is(g.$inline)||b.is("br"); for(o&&e.push(" "); h<k; h++){n=f.getItem(h); a(n)&& 
!n.is(i)?e=e.concat(d(n,c)):e.push(n)}o&&e.push(" "); return e}function e(b){return b&&a(b)&&(b.is(g.$removeEmpty)||b.is("a")&&!b.isBlockBoundary())}function 
f(b,c,d,e){var n=b.clone(),g,h; n.setEndAt(c,CKEDITOR.POSITION_BEFORE_END); if((g=(new 
CKEDITOR.dom.walker(n)).next())&&a(g)&&o[g.getName()]&&(h=g.getPrevious())&&a(h)&&!h.getParent().equals(b.startContainer)&&d.contains(h)&&e.contains(g)&&g.isIdentical(h)){g.moveChildren(h); 
g.remove(); f(b,c,d,e)}}function n(b,c){function d(b,c){if(c.isBlock&&c.isElement&& !c.node.is("br")&&a(b)&&b.is("br")){b.remove(); return 1}}var 
e=c.endContainer.getChild(c.endOffset),f=c.endContainer.getChild(c.endOffset-1); e&&d(e,b[b.length-1]); if(f&&d(f,b[0])){c.setEnd(c.endContainer,c.endOffset-1); 
c.collapse()}}var 
g=CKEDITOR.dtd,o={p:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,ul:1,ol:1,li:1,pre:1,dl:1,blockquote:1},l={p:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1},m=CKEDITOR.tools.extend({},g.$inline); 
delete m.br; return function(o,z,p){var B=o.editor,w=B.getSelection().getRanges()[0], H=false; if(z=="unfiltered_html"){z="html"; 
H=true}if(!w.checkReadOnly()){var C=(new 
CKEDITOR.dom.elementPath(w.startContainer,w.root)).blockLimit||w.root,z={type:z,dontFilter:H,editable:o,editor:B,range:w,blockLimit:C,mergeCandidates:[],zombies:[]},B=z.range,H=z.mergeCandidates,A,x,F,G; 
if(z.type=="text"&&B.shrink(CKEDITOR.SHRINK_ELEMENT,true,false)){A=CKEDITOR.dom.element.createFromHtml("<span>&nbsp; </span>",B.document); B.insertNode(A); 
B.setStartAfter(A)}x=new CKEDITOR.dom.elementPath(B.startContainer);

z.endPath=F=new CKEDITOR.dom.elementPath(B.endContainer); if(!B.collapsed){var C=F.block||F.blockLimit,s=B.getCommonAncestor(); 
C&&(!C.equals(s)&&!C.contains(s)&&B.checkEndOfBlock())&&z.zombies.push(C); B.deleteContents()}for(; 
(G=a(B.startContainer)&&B.startContainer.getChild(B.startOffset-1))&&a(G)&&G.isBlockBoundary()&&x.contains(G); 
)B.moveToPosition(G,CKEDITOR.POSITION_BEFORE_END); f(B,z.blockLimit,x,F); if(A){B.setEndBefore(A); B.collapse(); A.remove()}A=B.startPath(); 
if(C=A.contains(e,false,1)){B.splitElement(C);

z.inlineStylesRoot=C; z.inlineStylesPeak=A.lastElement}A=B.createBookmark(); (C=A.startNode.getPrevious(c))&&a(C)&&e(C)&&H.push(C); 
(C=A.startNode.getNext(c))&&a(C)&&e(C)&&H.push(C); for(C=A.startNode; (C=C.getParent())&&e(C); )H.push(C); B.moveToBookmark(A); if(A=p){A=z.range; 
if(z.type=="text"&&z.inlineStylesRoot){G=z.inlineStylesPeak; B=G.getDocument().createText("{cke-peak}"); for(H=z.inlineStylesRoot.getParent(); !G.equals(H); 
){B=B.appendTo(G.clone()); G=G.getParent()}p=B.getOuterHtml().split("{cke-peak}").join(p)}G= z.blockLimit.getName(); if(/^\s+|\s+$/.test(p)&&"span"in 
CKEDITOR.dtd[G])var y='<span data-cke-marker="1">&nbsp; </span>',p=y+p+y; 
p=z.editor.dataProcessor.toHtml(p,{context:null,fixForBody:false,dontFilter:z.dontFilter,filter:z.editor.activeFilter,enterMode:z.editor.activeEnterMode}); 
G=A.document.createElement("body"); G.setHtml(p); if(y){G.getFirst().remove(); 
G.getLast().remove()}if((y=A.startPath().block)&&!(y.getChildCount()==1&&y.getBogus()))a:{var t; if(G.getChildCount()==1&&a(t=G.getFirst())&&t.is(l)){y= 
t.getElementsByTag("*"); A=0; for(H=y.count(); A<H; A++){B=y.getItem(A); if(!B.is(m))break a}t.moveChildren(t.getParent(1)); t.remove()}}z.dataWrapper=G; 
A=p}if(A){t=z.range; var y=t.document,q,p=z.blockLimit; A=0; var K; G=[]; var I,Q,H=B=0,N,S; x=t.startContainer; var C=z.endPath.elements[0],T; 
F=C.getPosition(x); s=!!C.getCommonAncestor(x)&&F!=CKEDITOR.POSITION_IDENTICAL&&!(F&CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_IS_CONTAINED); 
x=b(z.dataWrapper,z); for(n(x,t); A<x.length; A++){F=x[A]; if(q=F.isLineBreak){q= t; N=p; var P=void 0,V=void 0; if(F.hasBlockSibling)q=1; 
else{P=q.startContainer.getAscendant(g.$block,1); if(!P||!P.is({div:1,p:1}))q=0; else{V=P.getPosition(N); 
if(V==CKEDITOR.POSITION_IDENTICAL||V==CKEDITOR.POSITION_CONTAINS)q=0; else{N=q.splitElement(P); q.moveToPosition(N,CKEDITOR.POSITION_AFTER_START); 
q=1}}}}if(q)H=A>0; else{q=t.startPath(); 
if(!F.isBlock&&h(z.editor,q.block,q.blockLimit)&&(Q=z.editor.activeEnterMode!=CKEDITOR.ENTER_BR&&z.editor.config.autoParagraph!==false?z.editor.activeEnterMode==CKEDITOR.ENTER_DIV? 
"div":"p":false)){Q=y.createElement(Q); Q.appendBogus(); t.insertNode(Q); CKEDITOR.env.needsBrFiller&&(K=Q.getBogus())&&K.remove(); 
t.moveToPosition(Q,CKEDITOR.POSITION_BEFORE_END)}if((q=t.startPath().block)&&!q.equals(I)){if(K=q.getBogus()){K.remove(); 
G.push(q)}I=q}F.firstNotAllowed&&(B=1); if(B&&F.isElement){q=t.startContainer; for(N=null; q&&!g[q.getName()][F.name]; ){if(q.equals(p)){q=null; break}N=q; 
q=q.getParent()}if(q){if(N){S=t.splitElement(N); z.zombies.push(S); z.zombies.push(N)}}else{N=p.getName();

T=!A; q=A==x.length-1; N=d(F.node,N); for(var P=[],V=N.length,W=0,Y=void 0,Z=0,U=-1; W<V; W++){Y=N[W]; if(Y==" "){if(!Z&&(!T||W)){P.push(new CKEDITOR.dom.text(" 
")); U=P.length}Z=1}else{P.push(Y); Z=0}}q&&U==P.length&&P.pop(); T=P}}if(T){for(; q=T.pop(); )t.insertNode(q); T=0}else t.insertNode(F.node); 
if(F.lastNotAllowed&&A<x.length-1){(S=s?C:S)&&t.setEndAt(S,CKEDITOR.POSITION_AFTER_START); B=0}t.collapse()}}z.dontMoveCaret=H; z.bogusNeededBlocks=G}K=z.range; 
var O; S=z.bogusNeededBlocks; for(T=K.createBookmark(); I= z.zombies.pop(); )if(I.getParent()){Q=K.clone(); Q.moveToElementEditStart(I); 
Q.removeEmptyBlocksAtEnd()}if(S)for(; I=S.pop(); )CKEDITOR.env.needsBrFiller?I.appendBogus():I.append(K.document.createText(" ")); for(; 
I=z.mergeCandidates.pop(); )I.mergeSiblings(); K.moveToBookmark(T); if(!z.dontMoveCaret){for(I=a(K.startContainer)&&K.startContainer.getChild(K.startOffset-1); 
I&&a(I)&&!I.is(g.$empty); ){if(I.isBlockBoundary())K.moveToPosition(I,CKEDITOR.POSITION_BEFORE_END); else{if(e(I)&&I.getHtml().match(/(\s|&nbsp; )$/g)){O= null; 
break}O=K.clone(); O.moveToPosition(I,CKEDITOR.POSITION_BEFORE_END)}I=I.getLast(c)}O&&K.moveToRange(O)}w.select(); i(o)}}}(),q=function(){function a(b){b=new 
CKEDITOR.dom.walker(b); b.guard=function(a,b){if(b)return false; if(a.type==CKEDITOR.NODE_ELEMENT)return a.is(CKEDITOR.dtd.$tableContent)}; 
b.evaluator=function(a){return a.type==CKEDITOR.NODE_ELEMENT}; return b}function b(a,c,d){c=a.getDocument().createElement(c); a.append(c,d); return c}function 
c(a){var b=a.count(),d; for(b; b-- >0; ){d=a.getItem(b);

if(!CKEDITOR.tools.trim(d.getHtml())){d.appendBogus(); CKEDITOR.env.ie&&(CKEDITOR.env.version<9&&d.getChildCount())&&d.getFirst().remove()}}}return 
function(d){var e=d.startContainer,f=e.getAscendant("table",1),g=false; c(f.getElementsByTag("td")); c(f.getElementsByTag("th")); f=d.clone(); f.setStart(e,0); 
f=a(f).lastBackward(); if(!f){f=d.clone(); f.setEndAt(e,CKEDITOR.POSITION_BEFORE_END); f=a(f).lastForward(); g=true}f||(f=e); 
if(f.is("table")){d.setStartAt(f,CKEDITOR.POSITION_BEFORE_START); d.collapse(true);

f.remove()}else{f.is({tbody:1,thead:1,tfoot:1})&&(f=b(f,"tr",g)); f.is("tr")&&(f=b(f,f.getParent().is("thead")?"th":"td",g)); (e=f.getBogus())&&e.remove(); 
d.moveToPosition(f,g?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_END)}}}()})();

(function(){function a(){var a=this._.fakeSelection,b; if(a){b=this.getSelection(1); if(!b||!b.isHidden()){a.reset(); a=0}}if(!a){a=b||this.getSelection(1); 
if(!a||a.getType()==CKEDITOR.SELECTION_NONE)return}this.fire("selectionCheck",a); b=this.elementPath(); 
if(!b.compare(this._.selectionPreviousPath)){if(CKEDITOR.env.webkit)this._.previousActive=this.document.getActive(); this._.selectionPreviousPath=b; 
this.fire("selectionChange",{selection:a,path:b})}}function e(){p=true; if(!y){b.call(this); y=CKEDITOR.tools.setTimeout(b, 200,this)}}function b(){y=null; 
if(p){CKEDITOR.tools.setTimeout(a,0,this); p=false}}function c(a){return q(a)||a.type==CKEDITOR.NODE_ELEMENT&&!a.is(CKEDITOR.dtd.$empty)?true:false}function 
f(a){function b(c,d){return!c||c.type==CKEDITOR.NODE_TEXT?false:a.clone()["moveToElementEdit"+(d?"End":"Start")](c)}if(!(a.root instanceof 
CKEDITOR.editable))return false; var d=a.startContainer,e=a.getPreviousNode(c,null,d),f=a.getNextNode(c,null,d); return 
b(e)||b(f,1)||!e&&!f&&!(d.type==CKEDITOR.NODE_ELEMENT&&d.isBlockBoundary()&& d.getBogus())?true:false}function d(a){return 
a.getCustomData("cke-fillingChar")}function h(a,b){var c=a&&a.removeCustomData("cke-fillingChar"); if(c){if(b!==false){var 
d,e=a.getDocument().getSelection().getNative(),f=e&&e.type!="None"&&e.getRangeAt(0); if(c.getLength()>1&&f&&f.intersectsNode(c.$)){d=i(e); 
f=e.focusNode==c.$&&e.focusOffset>0; e.anchorNode==c.$&&e.anchorOffset>0&&d[0].offset--; f&&d[1].offset--}}c.setText(l(c.getText())); 
d&&g(a.getDocument().$,d)}}function l(a){return a.replace(/\u200B( )?/g, function(a){return a[1]?" ":""})}function 
i(a){return[{node:a.anchorNode,offset:a.anchorOffset},{node:a.focusNode,offset:a.focusOffset}]}function g(a,b){var c=a.getSelection(),d=a.createRange(); 
d.setStart(b[0].node,b[0].offset); d.collapse(true); c.removeAllRanges(); c.addRange(d); c.extend(b[1].node,b[1].offset)}function m(a){var 
b=CKEDITOR.dom.element.createFromHtml('<div data-cke-hidden-sel="1" data-cke-temp="1" style="'+(CKEDITOR.env.ie?"display:none":"position:fixed; top:0; 
left:-1000px")+'">&nbsp; </div>', a.document); a.fire("lockSnapshot"); a.editable().append(b); var 
c=a.getSelection(1),d=a.createRange(),e=c.root.on("selectionchange",function(a){a.cancel()},null,null,0); d.setStartAt(b,CKEDITOR.POSITION_AFTER_START); 
d.setEndAt(b,CKEDITOR.POSITION_BEFORE_END); c.selectRanges([d]); e.removeListener(); a.fire("unlockSnapshot"); a._.hiddenSelectionContainer=b}function t(a){var 
b={37:1,39:1,8:1,46:1}; return function(c){var d=c.data.getKeystroke(); if(b[d]){var e=a.getSelection().getRanges(),f=e[0]; if(e.length== 
1&&f.collapsed)if((d=f[d<38?"getPreviousEditableNode":"getNextEditableNode"]())&&d.type==CKEDITOR.NODE_ELEMENT&&d.getAttribute("contenteditable")=="false"){a.getSelection().fake(d); 
c.data.preventDefault(); c.cancel()}}}}function s(a){for(var b=0; b<a.length; b++){var c=a[b]; c.getCommonAncestor().isReadOnly()&&a.splice(b,1); 
if(!c.collapsed){if(c.startContainer.isReadOnly())for(var d=c.startContainer,e; d; ){if((e=d.type==CKEDITOR.NODE_ELEMENT)&&d.is("body")||!d.isReadOnly())break; 
e&&d.getAttribute("contentEditable")== "false"&&c.setStartAfter(d); d=d.getParent()}d=c.startContainer; e=c.endContainer; var 
f=c.startOffset,g=c.endOffset,h=c.clone(); d&&d.type==CKEDITOR.NODE_TEXT&&(f>=d.getLength()?h.setStartAfter(d):h.setStartBefore(d)); 
e&&e.type==CKEDITOR.NODE_TEXT&&(g?h.setEndAfter(e):h.setEndBefore(e)); d=new CKEDITOR.dom.walker(h); 
d.evaluator=function(d){if(d.type==CKEDITOR.NODE_ELEMENT&&d.isReadOnly()){var e=c.clone(); c.setEndBefore(d); c.collapsed&&a.splice(b--,1); 
if(!(d.getPosition(h.endContainer)&CKEDITOR.POSITION_CONTAINS)){e.setStartAfter(d);

e.collapsed||a.splice(b+1,0,e)}return true}return false}; d.next()}}return a}var y,p,q=CKEDITOR.dom.walker.invisible(1),j=function(){function a(b){return 
function(a){var c=a.editor.createRange(); c.moveToClosestEditablePosition(a.selected,b)&&a.editor.getSelection().selectRanges([c]); return false}}function 
b(a){return function(b){var c=b.editor,d=c.createRange(),e; 
if(!(e=d.moveToClosestEditablePosition(b.selected,a)))e=d.moveToClosestEditablePosition(b.selected,!a); e&&c.getSelection().selectRanges([d]);

c.fire("saveSnapshot"); b.selected.remove(); if(!e){d.moveToElementEditablePosition(c.editable()); c.getSelection().selectRanges([d])}c.fire("saveSnapshot"); 
return false}}var c=a(),d=a(1); return{37:c,38:c,39:d,40:d,8:b(),46:b(1)}}(); CKEDITOR.on("instanceCreated",function(b){function c(){var a=d.getSelection(); 
a&&a.removeAllRanges()}var d=b.editor; d.on("contentDom",function(){function b(){C=new CKEDITOR.dom.selection(d.getSelection()); C.lock()}function 
c(){g.removeListener("mouseup",c); n.removeListener("mouseup", c); var a=CKEDITOR.document.$.selection,b=a.createRange(); 
a.type!="None"&&b.parentElement().ownerDocument==f.$&&b.select()}var 
f=d.document,g=CKEDITOR.document,k=d.editable(),i=f.getBody(),n=f.getDocumentElement(),w=k.isInline(),j,C; 
CKEDITOR.env.gecko&&k.attachListener(k,"focus",function(a){a.removeListener(); 
if(j!==0)if((a=d.getSelection().getNative())&&a.isCollapsed&&a.anchorNode==k.$){a=d.createRange(); a.moveToElementEditStart(k); a.select()}},null,null,-2); 
k.attachListener(k,CKEDITOR.env.webkit? 
"DOMFocusIn":"focus",function(){j&&CKEDITOR.env.webkit&&(j=d._.previousActive&&d._.previousActive.equals(f.getActive())); d.unlockSelection(j); 
j=0},null,null,-1); k.attachListener(k,"mousedown",function(){j=0}); 
if(CKEDITOR.env.ie||w){u?k.attachListener(k,"beforedeactivate",b,null,null,-1):k.attachListener(d,"selectionCheck",b,null,null,-1); 
k.attachListener(k,CKEDITOR.env.webkit?"DOMFocusOut":"blur",function(){d.lockSelection(C); j=1},null,null,-1); 
k.attachListener(k,"mousedown",function(){j=0})}if(CKEDITOR.env.ie&& !w){var A; 
k.attachListener(k,"mousedown",function(a){if(a.data.$.button==2){a=d.document.getSelection(); 
if(!a||a.getType()==CKEDITOR.SELECTION_NONE)A=d.window.getScrollPosition()}}); 
k.attachListener(k,"mouseup",function(a){if(a.data.$.button==2&&A){d.document.$.documentElement.scrollLeft=A.x; 
d.document.$.documentElement.scrollTop=A.y}A=null}); 
if(f.$.compatMode!="BackCompat"){if(CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)n.on("mousedown",function(a){function b(a){a=a.data.$; if(d){var 
c=i.$.createTextRange();

try{c.moveToPoint(a.clientX,a.clientY)}catch(e){}d.setEndPoint(f.compareEndPoints("StartToStart",c)<0?"EndToEnd":"StartToStart",c); d.select()}}function 
c(){n.removeListener("mousemove",b); g.removeListener("mouseup",c); n.removeListener("mouseup",c); d.select()}a=a.data; 
if(a.getTarget().is("html")&&a.$.y<n.$.clientHeight&&a.$.x<n.$.clientWidth){var d=i.$.createTextRange(); 
try{d.moveToPoint(a.$.clientX,a.$.clientY)}catch(e){}var f=d.duplicate(); n.on("mousemove",b); g.on("mouseup",c); n.on("mouseup",c)}});

if(CKEDITOR.env.version>7&&CKEDITOR.env.version<11)n.on("mousedown",function(a){if(a.data.getTarget().is("html")){g.on("mouseup",c); 
n.on("mouseup",c)}})}}k.attachListener(k,"selectionchange",a,d); k.attachListener(k,"keyup",e,d); 
k.attachListener(k,CKEDITOR.env.webkit?"DOMFocusIn":"focus",function(){d.forceNextSelectionCheck(); d.selectionChange(1)}); 
if(w&&(CKEDITOR.env.webkit||CKEDITOR.env.gecko)){var x; k.attachListener(k,"mousedown",function(){x=1}); k.attachListener(f.getDocumentElement(),"mouseup", 
function(){x&&e.call(d); x=0})}else k.attachListener(CKEDITOR.env.ie?k:f.getDocumentElement(),"mouseup",e,d); 
CKEDITOR.env.webkit&&k.attachListener(f,"keydown",function(a){switch(a.data.getKey()){case 13:case 33:case 34:case 35:case 36:case 37:case 39:case 8:case 
45:case 46:h(k)}},null,null,-1); k.attachListener(k,"keydown",t(d),null,null,-1)}); d.on("setData",function(){d.unlockSelection(); CKEDITOR.env.webkit&&c()}); 
d.on("contentDomUnload",function(){d.unlockSelection()}); if(CKEDITOR.env.ie9Compat)d.on("beforeDestroy", c,null,null,9); d.on("dataReady",function(){delete 
d._.fakeSelection; delete d._.hiddenSelectionContainer; d.selectionChange(1)}); d.on("loadSnapshot",function(){var 
a=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT),b=d.editable().getLast(a); if(b&&b.hasAttribute("data-cke-hidden-sel")){b.remove(); 
if(CKEDITOR.env.gecko)(a=d.editable().getFirst(a))&&(a.is("br")&&a.getAttribute("_moz_editor_bogus_node"))&&a.remove()}},null,null,100); 
d.on("key",function(a){if(d.mode=="wysiwyg"){var b=d.getSelection();

if(b.isFake){var c=j[a.data.keyCode]; if(c)return c({editor:d,selected:b.getSelectedElement(),selection:b,keyEvent:a})}}})}); 
CKEDITOR.on("instanceReady",function(a){function b(){var a=e.editable(); if(a)if(a=d(a)){var c=e.document.$.getSelection(); 
if(c.type!="None"&&(c.anchorNode==a.$||c.focusNode==a.$))j=i(c); f=a.getText(); a.setText(l(f))}}function c(){var a=e.editable(); if(a)if(a=d(a)){a.setText(f); 
if(j){g(e.document.$,j); j=null}}}var e=a.editor,f,j; if(CKEDITOR.env.webkit){e.on("selectionChange", function(){var a=e.editable(),b=d(a); 
b&&(b.getCustomData("ready")?h(a):b.setCustomData("ready",1))},null,null,-1); e.on("beforeSetMode",function(){h(e.editable())},null,null,-1); 
e.on("beforeUndoImage",b); e.on("afterUndoImage",c); e.on("beforeGetData",b,null,null,0); e.on("getData",c)}}); 
CKEDITOR.editor.prototype.selectionChange=function(b){(b?a:e).call(this)}; 
CKEDITOR.editor.prototype.getSelection=function(a){if((this._.savedSelection||this._.fakeSelection)&&!a)return this._.savedSelection||this._.fakeSelection;

return(a=this.editable())&&this.mode=="wysiwyg"?new CKEDITOR.dom.selection(a):null}; 
CKEDITOR.editor.prototype.lockSelection=function(a){a=a||this.getSelection(1); if(a.getType()!=CKEDITOR.SELECTION_NONE){!a.isLocked&&a.lock(); 
this._.savedSelection=a; return true}return false}; CKEDITOR.editor.prototype.unlockSelection=function(a){var b=this._.savedSelection; if(b){b.unlock(a); delete 
this._.savedSelection; return true}return false}; CKEDITOR.editor.prototype.forceNextSelectionCheck=function(){delete this._.selectionPreviousPath};

CKEDITOR.dom.document.prototype.getSelection=function(){return new CKEDITOR.dom.selection(this)}; CKEDITOR.dom.range.prototype.select=function(){var a=this.root 
instanceof CKEDITOR.editable?this.root.editor.getSelection():new CKEDITOR.dom.selection(this.root); a.selectRanges([this]); return a}; 
CKEDITOR.SELECTION_NONE=1; CKEDITOR.SELECTION_TEXT=2; CKEDITOR.SELECTION_ELEMENT=3; var u=typeof window.getSelection!="function",v=1; 
CKEDITOR.dom.selection=function(a){if(a instanceof CKEDITOR.dom.selection)var b= a,a=a.root; var c=a instanceof CKEDITOR.dom.element; this.rev=b?b.rev:v++; 
this.document=a instanceof CKEDITOR.dom.document?a:a.getDocument(); this.root=c?a:this.document.getBody(); this.isLocked=0; this._={cache:{}}; 
if(b){CKEDITOR.tools.extend(this._.cache,b._.cache); this.isFake=b.isFake; this.isLocked=b.isLocked; return this}var a=this.getNative(),d,e; 
if(a)if(a.getRangeAt)d=(e=a.rangeCount&&a.getRangeAt(0))&&new CKEDITOR.dom.node(e.commonAncestorContainer); 
else{try{e=a.createRange()}catch(f){}d=e&&CKEDITOR.dom.element.get(e.item&& 
e.item(0)||e.parentElement())}if(!d||!(d.type==CKEDITOR.NODE_ELEMENT||d.type==CKEDITOR.NODE_TEXT)||!this.root.equals(d)&&!this.root.contains(d)){this._.cache.type=CKEDITOR.SELECTION_NONE; 
this._.cache.startElement=null; this._.cache.selectedElement=null; this._.cache.selectedText=""; this._.cache.ranges=new CKEDITOR.dom.rangeList}return this}; 
var E={img:1,hr:1,li:1,table:1,tr:1,td:1,th:1,embed:1,object:1,ol:1,ul:1,a:1,input:1,form:1,select:1,textarea:1,button:1,fieldset:1,thead:1,tfoot:1}; 
CKEDITOR.dom.selection.prototype= {getNative:function(){return this._.cache.nativeSel!==void 
0?this._.cache.nativeSel:this._.cache.nativeSel=u?this.document.$.selection:this.document.getWindow().$.getSelection()},getType:u?function(){var a=this._.cache; 
if(a.type)return a.type; var b=CKEDITOR.SELECTION_NONE; try{var c=this.getNative(),d=c.type; if(d=="Text")b=CKEDITOR.SELECTION_TEXT; 
if(d=="Control")b=CKEDITOR.SELECTION_ELEMENT; if(c.createRange().parentElement())b=CKEDITOR.SELECTION_TEXT}catch(e){}return a.type=b}:function(){var 
a=this._.cache;

if(a.type)return a.type; var b=CKEDITOR.SELECTION_TEXT,c=this.getNative(); if(!c||!c.rangeCount)b=CKEDITOR.SELECTION_NONE; else if(c.rangeCount==1){var 
c=c.getRangeAt(0),d=c.startContainer; 
if(d==c.endContainer&&d.nodeType==1&&c.endOffset-c.startOffset==1&&E[d.childNodes[c.startOffset].nodeName.toLowerCase()])b=CKEDITOR.SELECTION_ELEMENT}return 
a.type=b},getRanges:function(){var a=u?function(){function a(b){return(new CKEDITOR.dom.node(b)).getIndex()}var b=function(b,c){b=b.duplicate(); b.collapse(c);

var d=b.parentElement(); if(!d.hasChildNodes())return{container:d,offset:0}; for(var e=d.children,f,g,h=b.duplicate(),k=0,i=e.length-1,j=-1,A,x; k<=i; 
){j=Math.floor((k+i)/2); f=e[j]; h.moveToElementText(f); A=h.compareEndPoints("StartToStart",b); if(A>0)i=j-1; else if(A<0)k=j+1; else 
return{container:d,offset:a(f)}}if(j==-1||j==e.length-1&&A<0){h.moveToElementText(d); h.setEndPoint("StartToStart",b); 
h=h.text.replace(/(\r\n|\r)/g,"\n").length; e=d.childNodes; if(!h){f=e[e.length-1]; return f.nodeType!=CKEDITOR.NODE_TEXT? 
{container:d,offset:e.length}:{container:f,offset:f.nodeValue.length}}for(d=e.length; h>0&&d>0; ){g=e[--d]; if(g.nodeType==CKEDITOR.NODE_TEXT){x=g; 
h=h-g.nodeValue.length}}return{container:x,offset:-h}}h.collapse(A>0?true:false); h.setEndPoint(A>0?"StartToStart":"EndToStart",b); 
h=h.text.replace(/(\r\n|\r)/g,"\n").length; if(!h)return{container:d,offset:a(f)+(A>0?0:1)}; for(; h>0; )try{g=f[A>0?"previousSibling":"nextSibling"]; 
if(g.nodeType==CKEDITOR.NODE_TEXT){h=h-g.nodeValue.length; x=g}f=g}catch(l){return{container:d, 
offset:a(f)}}return{container:x,offset:A>0?-h:x.nodeValue.length+h}}; return function(){var a=this.getNative(),c=a&&a.createRange(),d=this.getType(); 
if(!a)return[]; if(d==CKEDITOR.SELECTION_TEXT){a=new CKEDITOR.dom.range(this.root); d=b(c,true); a.setStart(new CKEDITOR.dom.node(d.container),d.offset); 
d=b(c); a.setEnd(new CKEDITOR.dom.node(d.container),d.offset); 
a.endContainer.getPosition(a.startContainer)&CKEDITOR.POSITION_PRECEDING&&a.endOffset<=a.startContainer.getIndex()&&a.collapse(); return[a]}if(d== 
CKEDITOR.SELECTION_ELEMENT){for(var d=[],e=0; e<c.length; e++){for(var f=c.item(e),g=f.parentNode,h=0,a=new CKEDITOR.dom.range(this.root); 
h<g.childNodes.length&&g.childNodes[h]!=f; h++); a.setStart(new CKEDITOR.dom.node(g),h); a.setEnd(new CKEDITOR.dom.node(g),h+1); d.push(a)}return 
d}return[]}}():function(){var a=[],b,c=this.getNative(); if(!c)return a; for(var d=0; d<c.rangeCount; d++){var e=c.getRangeAt(d); b=new 
CKEDITOR.dom.range(this.root); b.setStart(new CKEDITOR.dom.node(e.startContainer),e.startOffset);

b.setEnd(new CKEDITOR.dom.node(e.endContainer),e.endOffset); a.push(b)}return a}; return function(b){var c=this._.cache,d=c.ranges; if(!d)c.ranges=d=new 
CKEDITOR.dom.rangeList(a.call(this)); return!b?d:s(new CKEDITOR.dom.rangeList(d.slice()))}}(),getStartElement:function(){var a=this._.cache; 
if(a.startElement!==void 0)return a.startElement; var b; switch(this.getType()){case CKEDITOR.SELECTION_ELEMENT:return this.getSelectedElement(); case 
CKEDITOR.SELECTION_TEXT:var c=this.getRanges()[0]; if(c){if(c.collapsed){b= c.startContainer; 
b.type!=CKEDITOR.NODE_ELEMENT&&(b=b.getParent())}else{for(c.optimize(); ; ){b=c.startContainer; 
if(c.startOffset==(b.getChildCount?b.getChildCount():b.getLength())&&!b.isBlockBoundary())c.setStartAfter(b); else break}b=c.startContainer; 
if(b.type!=CKEDITOR.NODE_ELEMENT)return b.getParent(); b=b.getChild(c.startOffset); if(!b||b.type!=CKEDITOR.NODE_ELEMENT)b=c.startContainer; else 
for(c=b.getFirst(); c&&c.type==CKEDITOR.NODE_ELEMENT; ){b=c; c=c.getFirst()}}b=b.$}}return a.startElement=b?new CKEDITOR.dom.element(b): 
null},getSelectedElement:function(){var a=this._.cache; if(a.selectedElement!==void 0)return a.selectedElement; var 
b=this,c=CKEDITOR.tools.tryThese(function(){return b.getNative().createRange().item(0)},function(){for(var a=b.getRanges()[0].clone(),c,d,e=2; 
e&&(!(c=a.getEnclosedNode())||!(c.type==CKEDITOR.NODE_ELEMENT&&E[c.getName()]&&(d=c))); e--)a.shrink(CKEDITOR.SHRINK_ELEMENT); return d&&d.$}); return 
a.selectedElement=c?new CKEDITOR.dom.element(c):null},getSelectedText:function(){var a=this._.cache;

if(a.selectedText!==void 0)return a.selectedText; var b=this.getNative(),b=u?b.type=="Control"?"":b.createRange().text:b.toString(); return 
a.selectedText=b},lock:function(){this.getRanges(); this.getStartElement(); this.getSelectedElement(); this.getSelectedText(); this._.cache.nativeSel=null; 
this.isLocked=1},unlock:function(a){if(this.isLocked){if(a)var b=this.getSelectedElement(),c=!b&&this.getRanges(),d=this.isFake; this.isLocked=0; this.reset(); 
if(a)(a=b||c[0]&&c[0].getCommonAncestor())&&a.getAscendant("body", 
1)&&(d?this.fake(b):b?this.selectElement(b):this.selectRanges(c))}},reset:function(){this._.cache={}; this.isFake=0; var a=this.root.editor; 
if(a&&a._.fakeSelection&&this.rev==a._.fakeSelection.rev){delete a._.fakeSelection; var b=a._.hiddenSelectionContainer; if(b){var c=a.checkDirty(); 
a.fire("lockSnapshot"); b.remove(); a.fire("unlockSnapshot"); !c&&a.resetDirty()}delete a._.hiddenSelectionContainer}this.rev=v++},selectElement:function(a){var 
b=new CKEDITOR.dom.range(this.root); b.setStartBefore(a); b.setEndAfter(a);

this.selectRanges([b])},selectRanges:function(a){var b=this.root.editor,b=b&&b._.hiddenSelectionContainer; this.reset(); if(b)for(var b=this.root,c,d=0; 
d<a.length; ++d){c=a[d]; if(c.endContainer.equals(b))c.endOffset=Math.min(c.endOffset,b.getChildCount())}if(a.length)if(this.isLocked){var 
e=CKEDITOR.document.getActive(); this.unlock(); this.selectRanges(a); this.lock(); e&&!e.equals(this.root)&&e.focus()}else{var g; a:{var i,j; 
if(a.length==1&&!(j=a[0]).collapsed&&(g=j.getEnclosedNode())&&g.type==CKEDITOR.NODE_ELEMENT){j= j.clone(); j.shrink(CKEDITOR.SHRINK_ELEMENT,true); 
if((i=j.getEnclosedNode())&&i.type==CKEDITOR.NODE_ELEMENT)g=i; if(g.getAttribute("contenteditable")=="false")break a}g=void 0}if(g)this.fake(g); 
else{if(u){j=CKEDITOR.dom.walker.whitespaces(true); i=/\ufeff|\u00a0/; b={table:1,tbody:1,tr:1}; if(a.length>1){g=a[a.length-1]; 
a[0].setEnd(g.endContainer,g.endOffset)}g=a[0]; var a=g.collapsed,l,m,w; if((c=g.getEnclosedNode())&&c.type==CKEDITOR.NODE_ELEMENT&&c.getName()in 
E&&(!c.is("a")||!c.getText()))try{w=c.$.createControlRange();

w.addElement(c.$); w.select(); return}catch(H){}if(g.startContainer.type==CKEDITOR.NODE_ELEMENT&&g.startContainer.getName()in 
b||g.endContainer.type==CKEDITOR.NODE_ELEMENT&&g.endContainer.getName()in b){g.shrink(CKEDITOR.NODE_ELEMENT,true); a=g.collapsed}w=g.createBookmark(); 
b=w.startNode; if(!a)e=w.endNode; w=g.document.$.body.createTextRange(); w.moveToElementText(b.$); w.moveStart("character",1); 
if(e){i=g.document.$.body.createTextRange(); i.moveToElementText(e.$); w.setEndPoint("EndToEnd",i); w.moveEnd("character", -1)}else{l=b.getNext(j); 
m=b.hasAscendant("pre"); l=!(l&&l.getText&&l.getText().match(i))&&(m||!b.hasPrevious()||b.getPrevious().is&&b.getPrevious().is("br")); 
m=g.document.createElement("span"); m.setHtml("&#65279; "); m.insertBefore(b); l&&g.document.createText("﻿").insertBefore(b)}g.setStartBefore(b); b.remove(); 
if(a){if(l){w.moveStart("character",-1); w.select(); g.document.$.selection.clear()}else w.select(); g.moveToPosition(m,CKEDITOR.POSITION_BEFORE_START); 
m.remove()}else{g.setEndBefore(e); e.remove();

w.select()}}else{e=this.getNative(); if(!e)return; this.removeAllRanges(); for(w=0; w<a.length; w++){if(w<a.length-1){l=a[w]; m=a[w+1]; i=l.clone(); 
i.setStart(l.endContainer,l.endOffset); i.setEnd(m.startContainer,m.startOffset); if(!i.collapsed){i.shrink(CKEDITOR.NODE_ELEMENT,true); 
g=i.getCommonAncestor(); i=i.getEnclosedNode(); if(g.isReadOnly()||i&&i.isReadOnly()){m.setStart(l.startContainer,l.startOffset); a.splice(w--,1); 
continue}}}g=a[w]; m=this.document.$.createRange(); if(g.collapsed&&CKEDITOR.env.webkit&& f(g)){l=this.root; h(l,false); i=l.getDocument().createText("​"); 
l.setCustomData("cke-fillingChar",i); g.insertNode(i); if((l=i.getNext())&&!i.getPrevious()&&l.type==CKEDITOR.NODE_ELEMENT&&l.getName()=="br"){h(this.root); 
g.moveToPosition(l,CKEDITOR.POSITION_BEFORE_START)}else g.moveToPosition(i,CKEDITOR.POSITION_AFTER_END)}m.setStart(g.startContainer.$,g.startOffset); 
try{m.setEnd(g.endContainer.$,g.endOffset)}catch(C){if(C.toString().indexOf("NS_ERROR_ILLEGAL_VALUE")>=0){g.collapse(1); m.setEnd(g.endContainer.$, 
g.endOffset)}else throw C;
}e.addRange(m)}}this.reset();
this.root.fire("selectionchange")}}},fake:function(a){var b=this.root.editor; this.reset(); m(b); var c=this._.cache,d=new CKEDITOR.dom.range(this.root); 
d.setStartBefore(a); d.setEndAfter(a); c.ranges=new CKEDITOR.dom.rangeList(d); c.selectedElement=c.startElement=a; c.type=CKEDITOR.SELECTION_ELEMENT; 
c.selectedText=c.nativeSel=null; this.isFake=1; this.rev=v++; b._.fakeSelection=this; this.root.fire("selectionchange")},isHidden:function(){var 
a=this.getCommonAncestor();

a&&a.type==CKEDITOR.NODE_TEXT&&(a=a.getParent()); return!(!a||!a.data("cke-hidden-sel"))},createBookmarks:function(a){a=this.getRanges().createBookmarks(a); 
this.isFake&&(a.isFake=1); return a},createBookmarks2:function(a){a=this.getRanges().createBookmarks2(a); this.isFake&&(a.isFake=1); return 
a},selectBookmarks:function(a){for(var b=[],c=0; c<a.length; c++){var d=new CKEDITOR.dom.range(this.root); d.moveToBookmark(a[c]); 
b.push(d)}a.isFake?this.fake(b[0].getEnclosedNode()):this.selectRanges(b); return this}, getCommonAncestor:function(){var a=this.getRanges(); 
return!a.length?null:a[0].startContainer.getCommonAncestor(a[a.length-1].endContainer)},scrollIntoView:function(){this.type!=CKEDITOR.SELECTION_NONE&&this.getRanges()[0].scrollIntoView()},removeAllRanges:function(){if(this.getType()!=CKEDITOR.SELECTION_NONE){var 
a=this.getNative(); try{a&&a[u?"empty":"removeAllRanges"]()}catch(b){}this.reset()}}}})(); "use strict"; CKEDITOR.STYLE_BLOCK=1; CKEDITOR.STYLE_INLINE=2; 
CKEDITOR.STYLE_OBJECT=3;

(function(){function a(a,b){for(var c,d; a=a.getParent(); ){if(a.equals(b))break; if(a.getAttribute("data-nostyle"))c=a; else if(!d){var 
e=a.getAttribute("contentEditable"); e=="false"?c=a:e=="true"&&(d=1)}}return c}function e(b){var d=b.document; if(b.collapsed){d=j(this,d); b.insertNode(d); 
b.moveToPosition(d,CKEDITOR.POSITION_BEFORE_END)}else{var f=this.element,g=this._.definition,h,i=g.ignoreReadonly,k=i||g.includeReadonly; 
k==null&&(k=b.root.getCustomData("cke_includeReadonly")); var l=CKEDITOR.dtd[f];

if(!l){h=true; l=CKEDITOR.dtd.span}b.enlarge(CKEDITOR.ENLARGE_INLINE,1); b.trim(); var m=b.createBookmark(),n=m.startNode,p=m.endNode,o=n,q; if(!i){var 
t=b.getCommonAncestor(),i=a(n,t),t=a(p,t); i&&(o=i.getNextSourceNode(true)); t&&(p=t)}for(o.getPosition(p)==CKEDITOR.POSITION_FOLLOWING&&(o=0); o; ){i=false; 
if(o.equals(p)){o=null; i=true}else{var 
s=o.type==CKEDITOR.NODE_ELEMENT?o.getName():null,t=s&&o.getAttribute("contentEditable")=="false",r=s&&o.getAttribute("data-nostyle"); 
if(s&&o.data("cke-bookmark")){o= o.getNextSourceNode(true); continue}if(t&&k&&CKEDITOR.dtd.$block[s])for(var v=o,u=c(v),z=void 0,D=u.length,E=0,v=D&&new 
CKEDITOR.dom.range(v.getDocument()); E<D; ++E){var z=u[E],M=CKEDITOR.filter.instances[z.data("cke-filter")]; if(M?M.check(this):1){v.selectNodeContents(z); 
e.call(this,v)}}u=s?!l[s]||r?0:t&&!k?0:(o.getPosition(p)|L)==L&&(!g.childRule||g.childRule(o)):1; 
if(u)if((u=o.getParent())&&((u.getDtd()||CKEDITOR.dtd.span)[f]||h)&&(!g.parentRule||g.parentRule(u))){if(!q&&(!s||!CKEDITOR.dtd.$removeEmpty[s]|| 
(o.getPosition(p)|L)==L)){q=b.clone(); q.setStartBefore(o)}s=o.type; if(s==CKEDITOR.NODE_TEXT||t||s==CKEDITOR.NODE_ELEMENT&&!o.getChildCount()){for(var s=o,U; 
(i=!s.getNext(J))&&(U=s.getParent(),l[U.getName()])&&(U.getPosition(n)|B)==B&&(!g.childRule||g.childRule(U)); )s=U; q.setEndAfter(s)}}else i=true; else i=true; 
o=o.getNextSourceNode(r||t)}if(i&&q&&!q.collapsed){for(var i=j(this,d),t=i.hasAttributes(),r=q.getCommonAncestor(),s={},u={},z={},D={},O,R,X; i&&r; 
){if(r.getName()==f){for(O in g.attributes)if(!D[O]&& (X=r.getAttribute(R)))i.getAttribute(O)==X?u[O]=1:D[O]=1; for(R in 
g.styles)if(!z[R]&&(X=r.getStyle(R)))i.getStyle(R)==X?s[R]=1:z[R]=1}r=r.getParent()}for(O in u)i.removeAttribute(O); for(R in s)i.removeStyle(R); 
t&&!i.hasAttributes()&&(i=null); if(i){q.extractContents().appendTo(i); q.insertNode(i); y.call(this,i); i.mergeSiblings(); 
CKEDITOR.env.ie||i.$.normalize()}else{i=new CKEDITOR.dom.element("span"); q.extractContents().appendTo(i); q.insertNode(i); y.call(this,i); 
i.remove(true)}q=null}}b.moveToBookmark(m);

b.shrink(CKEDITOR.SHRINK_TEXT); b.shrink(CKEDITOR.NODE_ELEMENT,true)}}function b(a){function b(){for(var a=new CKEDITOR.dom.elementPath(d.getParent()),c=new 
CKEDITOR.dom.elementPath(j.getParent()),e=null,f=null,g=0; g<a.elements.length; g++){var h=a.elements[g]; if(h==a.block||h==a.blockLimit)break; 
k.checkElementRemovable(h,true)&&(e=h)}for(g=0; g<c.elements.length; g++){h=c.elements[g]; if(h==c.block||h==c.blockLimit)break; 
k.checkElementRemovable(h,true)&&(f=h)}f&&j.breakParent(f); e&&d.breakParent(e)}a.enlarge(CKEDITOR.ENLARGE_INLINE, 1); var c=a.createBookmark(),d=c.startNode; 
if(a.collapsed){for(var e=new CKEDITOR.dom.elementPath(d.getParent(),a.root),f,g=0,h; g<e.elements.length&&(h=e.elements[g]); 
g++){if(h==e.block||h==e.blockLimit)break; if(this.checkElementRemovable(h)){var i; 
if(a.collapsed&&(a.checkBoundaryOfElement(h,CKEDITOR.END)||(i=a.checkBoundaryOfElement(h,CKEDITOR.START)))){f=h; f.match=i?"start":"end"}else{h.mergeSiblings(); 
h.is(this.element)?s.call(this,h):p(h,E(this)[h.getName()])}}}if(f){h=d; for(g=0; ; g++){i=e.elements[g];

if(i.equals(f))break; else if(i.match)continue; else i=i.clone(); i.append(h); h=i}h[f.match=="start"?"insertBefore":"insertAfter"](f)}}else{var 
j=c.endNode,k=this; b(); for(e=d; !e.equals(j); ){f=e.getNextSourceNode(); 
if(e.type==CKEDITOR.NODE_ELEMENT&&this.checkElementRemovable(e)){e.getName()==this.element?s.call(this,e):p(e,E(this)[e.getName()]); 
if(f.type==CKEDITOR.NODE_ELEMENT&&f.contains(d)){b(); f=d.getNext()}}e=f}}a.moveToBookmark(c); a.shrink(CKEDITOR.NODE_ELEMENT,true)}function c(a){var b=[]; 
a.forEach(function(a){if(a.getAttribute("contenteditable")== "true"){b.push(a); return false}},CKEDITOR.NODE_ELEMENT,true); return b}function f(a){var 
b=a.getEnclosedNode()||a.getCommonAncestor(false,true); (a=(new 
CKEDITOR.dom.elementPath(b,a.root)).contains(this.element,1))&&!a.isReadOnly()&&u(a,this)}function d(a){var b=a.getCommonAncestor(true,true); if(a=(new 
CKEDITOR.dom.elementPath(b,a.root)).contains(this.element,1)){var b=this._.definition,c=b.attributes; if(c)for(var d in c)a.removeAttribute(d,c[d]); 
if(b.styles)for(var e in b.styles)b.styles.hasOwnProperty(e)&& a.removeStyle(e)}}function h(a){var b=a.createBookmark(true),c=a.createIterator(); 
c.enforceRealBlocks=true; if(this._.enterMode)c.enlargeBr=this._.enterMode!=CKEDITOR.ENTER_BR; for(var d,e=a.document,f; d=c.getNextParagraph(); 
)if(!d.isReadOnly()&&(c.activeFilter?c.activeFilter.check(this):1)){f=j(this,e,d); i(d,f)}a.moveToBookmark(b)}function l(a){var 
b=a.createBookmark(1),c=a.createIterator(); c.enforceRealBlocks=true; c.enlargeBr=this._.enterMode!=CKEDITOR.ENTER_BR; for(var d,e; d=c.getNextParagraph(); 
)if(this.checkElementRemovable(d))if(d.is("pre")){(e= 
this._.enterMode==CKEDITOR.ENTER_BR?null:a.document.createElement(this._.enterMode==CKEDITOR.ENTER_P?"p":"div"))&&d.copyAttributes(e); i(d,e)}else 
s.call(this,d); a.moveToBookmark(b)}function i(a,b){var c=!b; if(c){b=a.getDocument().createElement("div"); a.copyAttributes(b)}var 
d=b&&b.is("pre"),e=a.is("pre"),f=!d&&e; if(d&&!e){e=b; (f=a.getBogus())&&f.remove(); f=a.getHtml(); f=m(f,/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g,""); f=f.replace(/[ 
\t\r\n]*(<br[^>]*>)[ \t\r\n]*/gi,"$1"); f=f.replace(/([ \t\n\r]+|&nbsp; )/g, " "); f=f.replace(/<br\b[^>]*>/gi,"\n"); if(CKEDITOR.env.ie){var 
h=a.getDocument().createElement("div"); h.append(e); e.$.outerHTML="<pre>"+f+"</pre>"; e.copyAttributes(h.getFirst()); e=h.getFirst().remove()}else 
e.setHtml(f); b=e}else f?b=t(c?[a.getHtml()]:g(a),b):a.moveChildren(b); b.replace(a); if(d){var c=b,i; 
if((i=c.getPrevious(z))&&i.type==CKEDITOR.NODE_ELEMENT&&i.is("pre")){d=m(i.getHtml(),/\n$/,"")+"\n\n"+m(c.getHtml(),/^\n/,""); 
CKEDITOR.env.ie?c.$.outerHTML="<pre>"+d+"</pre>":c.setHtml(d); i.remove()}}else c&& q(b)}function g(a){var b=[]; 
m(a.getOuterHtml(),/(\S\s*)\n(?:\s|(<span[^>]+data-cke-bookmark.*?\/span>))*\n(?!$)/gi,function(a,b,c){return 
b+"</pre>"+c+"<pre>"}).replace(/<pre\b.*?>([\s\S]*?)<\/pre>/gi,function(a,c){b.push(c)}); return b}function m(a,b,c){var 
d="",e="",a=a.replace(/(^<span[^>]+data-cke-bookmark.*?\/span>)|(<span[^>]+data-cke-bookmark.*?\/span>$)/gi,function(a,b,c){b&&(d=b); c&&(e=c); return""}); 
return d+a.replace(b,c)+e}function t(a,b){var c; a.length>1&&(c=new CKEDITOR.dom.documentFragment(b.getDocument()));

for(var d=0; d<a.length; d++){var e=a[d],e=e.replace(/(\r\n|\r)/g,"\n"),e=m(e,/^[ \t]*\n/,""),e=m(e,/\n$/,""),e=m(e,/^[ \t]+|[ \t]+$/g,function(a,b){return 
a.length==1?"&nbsp; ":b?" "+CKEDITOR.tools.repeat("&nbsp; ",a.length-1):CKEDITOR.tools.repeat("&nbsp; ",a.length-1)+" 
"}),e=e.replace(/\n/g,"<br>"),e=e.replace(/[ \t]{2,}/g,function(a){return CKEDITOR.tools.repeat("&nbsp; ",a.length-1)+" "}); if(c){var f=b.clone(); 
f.setHtml(e); c.append(f)}else b.setHtml(e)}return c||b}function s(a,b){var c=this._.definition, 
d=c.attributes,c=c.styles,e=E(this)[a.getName()],f=CKEDITOR.tools.isEmpty(d)&&CKEDITOR.tools.isEmpty(c),g; for(g in 
d)if(!((g=="class"||this._.definition.fullMatch)&&a.getAttribute(g)!=k(g,d[g]))&&!(b&&g.slice(0,5)=="data-")){f=a.hasAttribute(g); a.removeAttribute(g)}for(var 
h in c)if(!(this._.definition.fullMatch&&a.getStyle(h)!=k(h,c[h],true))){f=f||!!a.getStyle(h); a.removeStyle(h)}p(a,e,r[a.getName()]); 
f&&(this._.definition.alwaysRemoveElement?q(a,1):!CKEDITOR.dtd.$block[a.getName()]||this._.enterMode== 
CKEDITOR.ENTER_BR&&!a.hasAttributes()?q(a):a.renameNode(this._.enterMode==CKEDITOR.ENTER_P?"p":"div"))}function y(a){for(var 
b=E(this),c=a.getElementsByTag(this.element),d,e=c.count(); --e>=0; ){d=c.getItem(e); d.isReadOnly()||s.call(this,d,true)}for(var f in 
b)if(f!=this.element){c=a.getElementsByTag(f); for(e=c.count()-1; e>=0; e--){d=c.getItem(e); d.isReadOnly()||p(d,b[f])}}}function 
p(a,b,c){if(b=b&&b.attributes)for(var d=0; d<b.length; d++){var e=b[d][0],f; if(f=a.getAttribute(e)){var g=b[d][1]; (g===null|| g.test&&g.test(f)||typeof 
g=="string"&&f==g)&&a.removeAttribute(e)}}c||q(a)}function q(a,b){if(!a.hasAttributes()||b)if(CKEDITOR.dtd.$block[a.getName()]){var 
c=a.getPrevious(z),d=a.getNext(z); c&&(c.type==CKEDITOR.NODE_TEXT||!c.isBlockBoundary({br:1}))&&a.append("br",1); 
d&&(d.type==CKEDITOR.NODE_TEXT||!d.isBlockBoundary({br:1}))&&a.append("br"); a.remove(true)}else{c=a.getFirst(); d=a.getLast(); a.remove(true); 
if(c){c.type==CKEDITOR.NODE_ELEMENT&&c.mergeSiblings(); d&&(!c.equals(d)&&d.type==CKEDITOR.NODE_ELEMENT)&& d.mergeSiblings()}}}function j(a,b,c){var d; 
d=a.element; d=="*"&&(d="span"); d=new CKEDITOR.dom.element(d,b); c&&c.copyAttributes(d); d=u(d,a); 
b.getCustomData("doc_processing_style")&&d.hasAttribute("id")?d.removeAttribute("id"):b.setCustomData("doc_processing_style",1); return d}function u(a,b){var 
c=b._.definition,d=c.attributes,c=CKEDITOR.style.getStyleText(c); if(d)for(var e in d)a.setAttribute(e,d[e]); c&&a.setAttribute("style",c); return a}function 
v(a,b){for(var c in a)a[c]=a[c].replace(D,function(a, c){return b[c]})}function E(a){if(a._.overrides)return a._.overrides; var 
b=a._.overrides={},c=a._.definition.overrides; if(c){CKEDITOR.tools.isArray(c)||(c=[c]); for(var d=0; d<c.length; d++){var e=c[d],f,g; if(typeof 
e=="string")f=e.toLowerCase(); else{f=e.element?e.element.toLowerCase():a.element; g=e.attributes}e=b[f]||(b[f]={}); if(g){var 
e=e.attributes=e.attributes||[],h; for(h in g)e.push([h.toLowerCase(),g[h]])}}}return b}function k(a,b,c){var d=new CKEDITOR.dom.element("span"); 
d[c?"setStyle":"setAttribute"](a, b); return d[c?"getStyle":"getAttribute"](a)}function n(a,b,c){for(var 
d=a.document,e=a.getRanges(),b=b?this.removeFromRange:this.applyToRange,f,g=e.createIterator(); f=g.getNextRange(); )b.call(this,f,c); a.selectRanges(e); 
d.removeCustomData("doc_processing_style")}var 
r={address:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,p:1,pre:1,section:1,header:1,footer:1,nav:1,article:1,aside:1,figure:1,dialog:1,hgroup:1,time:1,meter:1,menu:1,command:1,keygen:1,output:1,progress:1,details:1,datagrid:1,datalist:1},o= 
{a:1,blockquote:1,embed:1,hr:1,img:1,li:1,object:1,ol:1,table:1,td:1,tr:1,th:1,ul:1,dl:1,dt:1,dd:1,form:1,audio:1,video:1},M=/\s*(?:; 
\s*|$)/,D=/#\((.+?)\)/g,J=CKEDITOR.dom.walker.bookmark(0,1),z=CKEDITOR.dom.walker.whitespaces(1); CKEDITOR.style=function(a,b){if(typeof a.type=="string")return 
new CKEDITOR.style.customHandlers[a.type](a); var c=a.attributes; 
if(c&&c.style){a.styles=CKEDITOR.tools.extend({},a.styles,CKEDITOR.tools.parseCssText(c.style)); delete c.style}if(b){a=CKEDITOR.tools.clone(a); v(a.attributes, 
b); v(a.styles,b)}c=this.element=a.element?typeof a.element=="string"?a.element.toLowerCase():a.element:"*"; 
this.type=a.type||(r[c]?CKEDITOR.STYLE_BLOCK:o[c]?CKEDITOR.STYLE_OBJECT:CKEDITOR.STYLE_INLINE); if(typeof 
this.element=="object")this.type=CKEDITOR.STYLE_OBJECT; this._={definition:a}}; CKEDITOR.style.prototype={apply:function(a){if(a instanceof 
CKEDITOR.dom.document)return n.call(this,a.getSelection()); if(this.checkApplicable(a.elementPath(),a)){var b=this._.enterMode; 
if(!b)this._.enterMode=a.activeEnterMode;

n.call(this,a.getSelection(),0,a); this._.enterMode=b}},remove:function(a){if(a instanceof CKEDITOR.dom.document)return n.call(this,a.getSelection(),1); 
if(this.checkApplicable(a.elementPath(),a)){var b=this._.enterMode; if(!b)this._.enterMode=a.activeEnterMode; n.call(this,a.getSelection(),1,a); 
this._.enterMode=b}},applyToRange:function(a){this.applyToRange=this.type==CKEDITOR.STYLE_INLINE?e:this.type==CKEDITOR.STYLE_BLOCK?h:this.type==CKEDITOR.STYLE_OBJECT?f:null; 
return this.applyToRange(a)},removeFromRange:function(a){this.removeFromRange= 
this.type==CKEDITOR.STYLE_INLINE?b:this.type==CKEDITOR.STYLE_BLOCK?l:this.type==CKEDITOR.STYLE_OBJECT?d:null; return 
this.removeFromRange(a)},applyToObject:function(a){u(a,this)},checkActive:function(a,b){switch(this.type){case CKEDITOR.STYLE_BLOCK:return 
this.checkElementRemovable(a.block||a.blockLimit,true,b); case CKEDITOR.STYLE_OBJECT:case CKEDITOR.STYLE_INLINE:for(var c=a.elements,d=0,e; d<c.length; 
d++){e=c[d]; if(!(this.type==CKEDITOR.STYLE_INLINE&&(e==a.block||e==a.blockLimit))){if(this.type== CKEDITOR.STYLE_OBJECT){var f=e.getName(); if(!(typeof 
this.element=="string"?f==this.element:f in this.element))continue}if(this.checkElementRemovable(e,true,b))return true}}}return 
false},checkApplicable:function(a,b,c){b&&b instanceof CKEDITOR.filter&&(c=b); if(c&&!c.check(this))return false; switch(this.type){case 
CKEDITOR.STYLE_OBJECT:return!!a.contains(this.element); case CKEDITOR.STYLE_BLOCK:return!!a.blockLimit.getDtd()[this.element]}return 
true},checkElementMatch:function(a,b){var c=this._.definition;

if(!a||!c.ignoreReadonly&&a.isReadOnly())return false; var d=a.getName(); if(typeof this.element=="string"?d==this.element:d in 
this.element){if(!b&&!a.hasAttributes())return true; if(d=c._AC)c=d; else{var d={},e=0,f=c.attributes; if(f)for(var g in f){e++; 
d[g]=f[g]}if(g=CKEDITOR.style.getStyleText(c)){d.style||e++; d.style=g}d._length=e; c=c._AC=d}if(c._length){for(var h in 
c)if(h!="_length"){e=a.getAttribute(h)||""; if(h=="style")a:{d=c[h]; typeof d=="string"&&(d=CKEDITOR.tools.parseCssText(d)); typeof e== 
"string"&&(e=CKEDITOR.tools.parseCssText(e,true)); g=void 0; for(g in d)if(!(g in e&&(e[g]==d[g]||d[g]=="inherit"||e[g]=="inherit"))){d=false; break 
a}d=true}else d=c[h]==e; if(d){if(!b)return true}else if(b)return false}if(b)return true}else return true}return 
false},checkElementRemovable:function(a,b,c){if(this.checkElementMatch(a,b,c))return true; if(b=E(this)[a.getName()]){var d; if(!(b=b.attributes))return true; 
for(c=0; c<b.length; c++){d=b[c][0]; if(d=a.getAttribute(d)){var e=b[c][1]; if(e===null)return true;

if(typeof e=="string"){if(d==e)return true}else if(e.test(d))return true}}}return false},buildPreview:function(a){var b=this._.definition,c=[],d=b.element; 
d=="bdo"&&(d="span"); var c=["<",d],e=b.attributes; if(e)for(var f in e)c.push(" ",f,'="',e[f],'"'); (e=CKEDITOR.style.getStyleText(b))&&c.push(' 
style="',e,'"'); c.push(">",a||b.name,"</",d,">"); return c.join("")},getDefinition:function(){return this._.definition}}; 
CKEDITOR.style.getStyleText=function(a){var b=a._ST; if(b)return b; var b=a.styles,c= a.attributes&&a.attributes.style||"",d=""; c.length&&(c=c.replace(M,"; 
")); for(var e in b){var f=b[e],g=(e+":"+f).replace(M,"; "); f=="inherit"?d=d+g:c=c+g}c.length&&(c=CKEDITOR.tools.normalizeCssText(c,true)); return a._ST=c+d}; 
CKEDITOR.style.customHandlers={}; CKEDITOR.style.addCustomHandler=function(a){var b=function(a){this._={definition:a}; this.setup&&this.setup(a)}; 
b.prototype=CKEDITOR.tools.extend(CKEDITOR.tools.prototypedCopy(CKEDITOR.style.prototype),{assignedTo:CKEDITOR.STYLE_OBJECT},a,true);

return this.customHandlers[a.type]=b}; var 
L=CKEDITOR.POSITION_PRECEDING|CKEDITOR.POSITION_IDENTICAL|CKEDITOR.POSITION_IS_CONTAINED,B=CKEDITOR.POSITION_FOLLOWING|CKEDITOR.POSITION_IDENTICAL|CKEDITOR.POSITION_IS_CONTAINED})(); 
CKEDITOR.styleCommand=function(a,e){this.requiredContent=this.allowedContent=this.style=a; CKEDITOR.tools.extend(this,e,true)};

CKEDITOR.styleCommand.prototype.exec=function(a){a.focus(); 
this.state==CKEDITOR.TRISTATE_OFF?a.applyStyle(this.style):this.state==CKEDITOR.TRISTATE_ON&&a.removeStyle(this.style)}; CKEDITOR.stylesSet=new 
CKEDITOR.resourceManager("","stylesSet"); CKEDITOR.addStylesSet=CKEDITOR.tools.bind(CKEDITOR.stylesSet.add,CKEDITOR.stylesSet); 
CKEDITOR.loadStylesSet=function(a,e,b){CKEDITOR.stylesSet.addExternal(a,e,""); CKEDITOR.stylesSet.load(a,b)};

CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{attachStyleStateChange:function(a,e){var b=this._.styleStateChangeCallbacks; 
if(!b){b=this._.styleStateChangeCallbacks=[]; this.on("selectionChange",function(a){for(var e=0; e<b.length; e++){var 
d=b[e],h=d.style.checkActive(a.data.path,this)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF; 
d.fn.call(this,h)}})}b.push({style:a,fn:e})},applyStyle:function(a){a.apply(this)},removeStyle:function(a){a.remove(this)},getStylesSet:function(a){if(this._.stylesDefinitions)a(this._.stylesDefinitions);

else{var e=this,b=e.config.stylesCombo_stylesSet||e.config.stylesSet; if(b===false)a(null); else if(b instanceof Array){e._.stylesDefinitions=b; 
a(b)}else{b||(b="default"); var b=b.split(":"),c=b[0]; CKEDITOR.stylesSet.addExternal(c,b[1]?b.slice(1).join(":"):CKEDITOR.getUrl("styles.js"),""); 
CKEDITOR.stylesSet.load(c,function(b){e._.stylesDefinitions=b[c]; a(e._.stylesDefinitions)})}}}});

CKEDITOR.dom.comment=function(a,e){typeof a=="string"&&(a=(e?e.$:document).createComment(a)); CKEDITOR.dom.domObject.call(this,a)}; 
CKEDITOR.dom.comment.prototype=new CKEDITOR.dom.node; 
CKEDITOR.tools.extend(CKEDITOR.dom.comment.prototype,{type:CKEDITOR.NODE_COMMENT,getOuterHtml:function(){return"<\!--"+this.$.nodeValue+"--\>"}}); "use strict";

(function(){var a={},e={},b; for(b in CKEDITOR.dtd.$blockLimit)b in CKEDITOR.dtd.$list||(a[b]=1); for(b in CKEDITOR.dtd.$block)b in CKEDITOR.dtd.$blockLimit||b 
in CKEDITOR.dtd.$empty||(e[b]=1); CKEDITOR.dom.elementPath=function(b,f){var d=null,h=null,l=[],i=b,g,f=f||b.getDocument().getBody(); do 
if(i.type==CKEDITOR.NODE_ELEMENT){l.push(i); if(!this.lastElement){this.lastElement=i; 
if(i.is(CKEDITOR.dtd.$object)||i.getAttribute("contenteditable")=="false")continue}if(i.equals(f))break; if(!h){g=i.getName();

i.getAttribute("contenteditable")=="true"?h=i:!d&&e[g]&&(d=i); if(a[g]){var m; if(m=!d){if(g=g=="div"){a:{g=i.getChildren(); m=0; for(var t=g.count(); m<t; 
m++){var s=g.getItem(m); if(s.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$block[s.getName()]){g=true; break 
a}}g=false}g=!g}m=g}m?d=i:h=i}}}while(i=i.getParent()); h||(h=f); this.block=d; this.blockLimit=h; this.root=f; this.elements=l}})();

CKEDITOR.dom.elementPath.prototype={compare:function(a){var e=this.elements,a=a&&a.elements; if(!a||e.length!=a.length)return false; for(var b=0; b<e.length; 
b++)if(!e[b].equals(a[b]))return false; return true},contains:function(a,e,b){var c; typeof a=="string"&&(c=function(b){return b.getName()==a}); a instanceof 
CKEDITOR.dom.element?c=function(b){return b.equals(a)}:CKEDITOR.tools.isArray(a)?c=function(b){return CKEDITOR.tools.indexOf(a,b.getName())>-1}:typeof 
a=="function"?c=a:typeof a=="object"&&(c= function(b){return b.getName()in a}); var f=this.elements,d=f.length; e&&d--; if(b){f=Array.prototype.slice.call(f,0); 
f.reverse()}for(e=0; e<d; e++)if(c(f[e]))return f[e]; return null},isContextFor:function(a){var e; if(a in 
CKEDITOR.dtd.$block){e=this.contains(CKEDITOR.dtd.$intermediate)||this.root.equals(this.block)&&this.block||this.blockLimit; return!!e.getDtd()[a]}return 
true},direction:function(){return(this.block||this.blockLimit||this.root).getDirection(1)}};

CKEDITOR.dom.text=function(a,e){typeof a=="string"&&(a=(e?e.$:document).createTextNode(a)); this.$=a}; CKEDITOR.dom.text.prototype=new CKEDITOR.dom.node;

CKEDITOR.tools.extend(CKEDITOR.dom.text.prototype,{type:CKEDITOR.NODE_TEXT,getLength:function(){return this.$.nodeValue.length},getText:function(){return 
this.$.nodeValue},setText:function(a){this.$.nodeValue=a},split:function(a){var 
e=this.$.parentNode,b=e.childNodes.length,c=this.getLength(),f=this.getDocument(),d=new CKEDITOR.dom.text(this.$.splitText(a),f); 
if(e.childNodes.length==b)if(a>=c){d=f.createText(""); d.insertAfter(this)}else{a=f.createText(""); a.insertAfter(d); a.remove()}return d},substring:function(a, 
e){return typeof e!="number"?this.$.nodeValue.substr(a):this.$.nodeValue.substring(a,e)}});

(function(){function a(a,c,e){var 
d=a.serializable,h=c[e?"endContainer":"startContainer"],l=e?"endOffset":"startOffset",i=d?c.document.getById(a.startNode):a.startNode,a=d?c.document.getById(a.endNode):a.endNode; 
if(h.equals(i.getPrevious())){c.startOffset=c.startOffset-h.getLength()-a.getPrevious().getLength(); h=a.getNext()}else 
if(h.equals(a.getPrevious())){c.startOffset=c.startOffset-h.getLength(); h=a.getNext()}h.equals(i.getParent())&&c[l]++; h.equals(a.getParent())&&c[l]++; 
c[e?"endContainer":"startContainer"]= h; return c}CKEDITOR.dom.rangeList=function(a){if(a instanceof CKEDITOR.dom.rangeList)return a; a?a instanceof 
CKEDITOR.dom.range&&(a=[a]):a=[]; return CKEDITOR.tools.extend(a,e)}; var e={createIterator:function(){var a=this,c=CKEDITOR.dom.walker.bookmark(),e=[],d; 
return{getNextRange:function(h){d=d===void 0?0:d+1; var l=a[d]; if(l&&a.length>1){if(!d)for(var i=a.length-1; i>=0; i--)e.unshift(a[i].createBookmark(true)); 
if(h)for(var g=0; a[d+g+1]; ){for(var m=l.document,h=0,i=m.getById(e[g].endNode),m=m.getById(e[g+ 1].startNode); ; ){i=i.getNextSourceNode(false); 
if(m.equals(i))h=1; else if(c(i)||i.type==CKEDITOR.NODE_ELEMENT&&i.isBlockBoundary())continue; break}if(!h)break; g++}for(l.moveToBookmark(e.shift()); g--; 
){i=a[++d]; i.moveToBookmark(e.shift()); l.setEnd(i.endContainer,i.endOffset)}}return l}}},createBookmarks:function(b){for(var c=[],e,d=0; d<this.length; 
d++){c.push(e=this[d].createBookmark(b,true)); for(var h=d+1; h<this.length; h++){this[h]=a(e,this[h]); this[h]=a(e,this[h],true)}}return 
c},createBookmarks2:function(a){for(var c= [],e=0; e<this.length; e++)c.push(this[e].createBookmark2(a)); return c},moveToBookmarks:function(a){for(var c=0; 
c<this.length; c++)this[c].moveToBookmark(a[c])}}})();

(function(){function a(){return CKEDITOR.getUrl(CKEDITOR.skinName.split(",")[1]||"skins/"+CKEDITOR.skinName.split(",")[0]+"/")}function e(b){var 
c=CKEDITOR.skin["ua_"+b],d=CKEDITOR.env; if(c)for(var c=c.split(",").sort(function(a,b){return a>b?-1:1}),e=0,f; e<c.length; e++){f=c[e]; 
if(d.ie&&(f.replace(/^ie/,"")==d.version||d.quirks&&f=="iequirks"))f="ie"; if(d[f]){b=b+("_"+c[e]); break}}return CKEDITOR.getUrl(a()+b+".css")}function 
b(a,b){if(!d[a]){CKEDITOR.document.appendStyleSheet(e(a)); d[a]=1}b&&b()} function c(a){var b=a.getById(h); if(!b){b=a.getHead().append("style"); 
b.setAttribute("id",h); b.setAttribute("type","text/css")}return b}function f(a,b,c){var d,e,f; if(CKEDITOR.env.webkit){b=b.split("}").slice(0,-1); for(e=0; 
e<b.length; e++)b[e]=b[e].split("{")}for(var h=0; h<a.length; h++)if(CKEDITOR.env.webkit)for(e=0; e<b.length; e++){f=b[e][1]; for(d=0; d<c.length; 
d++)f=f.replace(c[d][0],c[d][1]); a[h].$.sheet.addRule(b[e][0],f)}else{f=b; for(d=0; d<c.length; d++)f=f.replace(c[d][0],c[d][1]); CKEDITOR.env.ie&& 
CKEDITOR.env.version<11?a[h].$.styleSheet.cssText=a[h].$.styleSheet.cssText+f:a[h].$.innerHTML=a[h].$.innerHTML+f}}var d={}; 
CKEDITOR.skin={path:a,loadPart:function(c,d){CKEDITOR.skin.name!=CKEDITOR.skinName.split(",")[0]?CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(a()+"skin.js"),function(){b(c,d)}):b(c,d)},getPath:function(a){return 
CKEDITOR.getUrl(e(a))},icons:{},addIcon:function(a,b,c,d){a=a.toLowerCase(); 
this.icons[a]||(this.icons[a]={path:b,offset:c||0,bgsize:d||"16px"})},getIconStyle:function(a, b,c,d,e){var f; if(a){a=a.toLowerCase(); 
b&&(f=this.icons[a+"-rtl"]); f||(f=this.icons[a])}a=c||f&&f.path||""; d=d||f&&f.offset; e=e||f&&f.bgsize||"16px"; return 
a&&"background-image:url("+CKEDITOR.getUrl(a)+"); background-position:0 "+d+"px; background-size:"+e+"; "}}; 
CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{getUiColor:function(){return this.uiColor},setUiColor:function(a){var b=c(CKEDITOR.document); 
return(this.setUiColor=function(a){var c=CKEDITOR.skin.chameleon,d=[[i,a]]; this.uiColor=a; f([b],c(this, "editor"),d); 
f(l,c(this,"panel"),d)}).call(this,a)}}); var h="cke_ui_color",l=[],i=/\$color/g; 
CKEDITOR.on("instanceLoaded",function(a){if(!CKEDITOR.env.ie||!CKEDITOR.env.quirks){var 
b=a.editor,a=function(a){a=(a.data[0]||a.data).element.getElementsByTag("iframe").getItem(0).getFrameDocument(); if(!a.getById("cke_ui_color")){a=c(a); 
l.push(a); var d=b.getUiColor(); d&&f([a],CKEDITOR.skin.chameleon(b,"panel"),[[i,d]])}}; b.on("panelShow",a); b.on("menuShow",a); 
b.config.uiColor&&b.setUiColor(b.config.uiColor)}})})();

(function(){if(CKEDITOR.env.webkit)CKEDITOR.env.hc=false; else{var a=CKEDITOR.dom.element.createFromHtml('<div style="width:0; height:0; position:absolute; 
left:-10000px; border:1px solid; border-color:red blue"></div>',CKEDITOR.document); a.appendTo(CKEDITOR.document.getHead()); try{var 
e=a.getComputedStyle("border-top-color"),b=a.getComputedStyle("border-right-color"); 
CKEDITOR.env.hc=!!(e&&e==b)}catch(c){CKEDITOR.env.hc=false}a.remove()}if(CKEDITOR.env.hc)CKEDITOR.env.cssClass=CKEDITOR.env.cssClass+" cke_hc";

CKEDITOR.document.appendStyleText(".cke{visibility:hidden;
}");
CKEDITOR.status="loaded"; CKEDITOR.fireOnce("loaded"); if(a=CKEDITOR._.pending){delete CKEDITOR._.pending; for(e=0; e<a.length; 
e++){CKEDITOR.editor.prototype.constructor.apply(a[e][0],a[e][1]); CKEDITOR.add(a[e][0])}}})();
/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license */ CKEDITOR.skin.name="moono"; CKEDITOR.skin.ua_editor="ie,iequirks,ie7,ie8,gecko"; 
CKEDITOR.skin.ua_dialog="ie,iequirks,ie7,ie8";

CKEDITOR.skin.chameleon=function(){var b=function(){return function(b,e){for(var a=b.match(/[^#]./g),c=0; 3>c; c++){var f=a,h=c,d; d=parseInt(a[c],16); 
d=("0"+(0>e?0|d*(1+e):0|d+(255-d)*e).toString(16)).slice(-2); f[h]=d}return"#"+a.join("")}}(),c=function(){var b=new CKEDITOR.template("background:#{to}; 
background-image:-webkit-gradient(linear,lefttop,leftbottom,from({from}),to({to})); background-image:-moz-linear-gradient(top,{from},{to}); 
background-image:-webkit-linear-gradient(top,{from},{to}); background-image:-o-linear-gradient(top,{from},{to}); 
background-image:-ms-linear-gradient(top,{from},{to}); background-image:linear-gradient(top,{from},{to}); 
filter:progid:DXImageTransform.Microsoft.gradient(gradientType=0,startColorstr='{from}',endColorstr='{to}'); "); return function(c, a){return 
b.output({from:c,to:a})}}(),f={editor:new CKEDITOR.template("{id}.cke_chrome [border-color:{defaultBorder}; ] {id} .cke_top [ 
{defaultGradient}border-bottom-color:{defaultBorder}; ] {id} .cke_bottom [{defaultGradient}border-top-color:{defaultBorder}; ] {id} .cke_resizer 
[border-right-color:{ckeResizer}] {id} .cke_dialog_title [{defaultGradient}border-bottom-color:{defaultBorder}; ] {id} .cke_dialog_footer 
[{defaultGradient}outline-color:{defaultBorder}; border-top-color:{defaultBorder}; ] {id} .cke_dialog_tab [{lightGradient}border-color:{defaultBorder}; ] {id} 
.cke_dialog_tab:hover [{mediumGradient}] {id} .cke_dialog_contents [border-top-color:{defaultBorder}; ] {id} .cke_dialog_tab_selected, {id} 
.cke_dialog_tab_selected:hover [background:{dialogTabSelected}; border-bottom-color:{dialogTabSelectedBorder}; ] {id} .cke_dialog_body [background:{dialogBody}; 
border-color:{defaultBorder}; ] {id} .cke_toolgroup [{lightGradient}border-color:{defaultBorder}; ] {id} a.cke_button_off:hover, {id} a.cke_button_off:focus, 
{id} a.cke_button_off:active [{mediumGradient}] {id} .cke_button_on [{ckeButtonOn}] {id} .cke_toolbar_separator [background-color: {ckeToolbarSeparator}; ] {id} 
.cke_combo_button [border-color:{defaultBorder}; {lightGradient}] {id} a.cke_combo_button:hover, {id} a.cke_combo_button:focus, {id} .cke_combo_on 
a.cke_combo_button [border-color:{defaultBorder}; {mediumGradient}] {id} .cke_path_item [color:{elementsPathColor}; ] {id} a.cke_path_item:hover, {id} 
a.cke_path_item:focus, {id} a.cke_path_item:active [background-color:{elementsPathBg}; ] {id}.cke_panel [border-color:{defaultBorder}; ] "), panel:new 
CKEDITOR.template(".cke_panel_grouptitle [{lightGradient}border-color:{defaultBorder}; ] .cke_menubutton_icon [background-color:{menubuttonIcon}; ] 
.cke_menubutton:hover .cke_menubutton_icon, .cke_menubutton:focus .cke_menubutton_icon, .cke_menubutton:active .cke_menubutton_icon 
[background-color:{menubuttonIconHover}; ] .cke_menuseparator [background-color:{menubuttonIcon}; ] a:hover.cke_colorbox, a:focus.cke_colorbox, 
a:active.cke_colorbox [border-color:{defaultBorder}; ] a:hover.cke_colorauto, a:hover.cke_colormore, a:focus.cke_colorauto, a:focus.cke_colormore, 
a:active.cke_colorauto, a:active.cke_colormore [background-color:{ckeColorauto}; border-color:{defaultBorder}; ] ")};

return function(g,e){var 
a=g.uiColor,a={id:"."+g.id,defaultBorder:b(a,-0.1),defaultGradient:c(b(a,0.9),a),lightGradient:c(b(a,1),b(a,0.7)),mediumGradient:c(b(a,0.8),b(a,0.5)),ckeButtonOn:c(b(a,0.6),b(a,0.7)),ckeResizer:b(a,-0.4),ckeToolbarSeparator:b(a,0.5),ckeColorauto:b(a,0.8),dialogBody:b(a,0.7),dialogTabSelected:c("#FFFFFF","#FFFFFF"),dialogTabSelectedBorder:"#FFF",elementsPathColor:b(a,-0.6),elementsPathBg:a,menubuttonIcon:b(a,0.5),menubuttonIconHover:b(a,0.3)}; 
return f[e].output(a).replace(/\[/g, "{").replace(/\]/g,"}")}}(); CKEDITOR.plugins.add("dialogui",{onLoad:function(){var h=function(b){this._||(this._={}); 
this._["default"]=this._.initValue=b["default"]||""; this._.required=b.required||!1; for(var a=[this._],d=1; d<arguments.length; d++)a.push(arguments[d]); 
a.push(!0); CKEDITOR.tools.extend.apply(CKEDITOR.tools,a); return this._},r={build:function(b,a,d){return new 
CKEDITOR.ui.dialog.textInput(b,a,d)}},l={build:function(b,a,d){return new CKEDITOR.ui.dialog[a.type](b,a,d)}},n={isChanged:function(){return this.getValue()!= 
this.getInitValue()},reset:function(b){this.setValue(this.getInitValue(),b)},setInitValue:function(){this._.initValue=this.getValue()},resetInitValue:function(){this._.initValue=this._["default"]},getInitValue:function(){return 
this._.initValue}},o=CKEDITOR.tools.extend({},CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors,{onChange:function(b,a){this._.domOnChangeRegistered||(b.on("load",function(){this.getInputElement().on("change",function(){b.parts.dialog.isVisible()&&this.fire("change",{value:this.getValue()})}, 
this)},this),this._.domOnChangeRegistered=!0); this.on("change",a)}},!0),s=/^on([A-Z]\w+)/,p=function(b){for(var a in 
b)(s.test(a)||"title"==a||"type"==a)&&delete b[a]; return b}; 
CKEDITOR.tools.extend(CKEDITOR.ui.dialog,{labeledElement:function(b,a,d,f){if(!(4>arguments.length)){var c=h.call(this,a); 
c.labelId=CKEDITOR.tools.getNextId()+"_label"; this._.children=[]; var e={role:a.role||"presentation"}; a.includeLabel&&(e["aria-labelledby"]=c.labelId); 
CKEDITOR.ui.dialog.uiElement.call(this,b,a,d,"div",null, e,function(){var e=[],g=a.required?" cke_required":""; if(a.labelLayout!="horizontal")e.push('<label 
class="cke_dialog_ui_labeled_label'+g+'" ',' id="'+c.labelId+'"',c.inputId?' for="'+c.inputId+'"':"",(a.labelStyle?' 
style="'+a.labelStyle+'"':"")+">",a.label,"</label>",'<div class="cke_dialog_ui_labeled_content"',a.controlStyle?' style="'+a.controlStyle+'"':"",' 
role="presentation">',f.call(this,b,a),"</div>"); else{g={type:"hbox",widths:a.widths,padding:0,children:[{type:"html",html:'<label 
class="cke_dialog_ui_labeled_label'+ g+'" id="'+c.labelId+'" for="'+c.inputId+'"'+(a.labelStyle?' 
style="'+a.labelStyle+'"':"")+">"+CKEDITOR.tools.htmlEncode(a.label)+"</span>"},{type:"html",html:'<span 
class="cke_dialog_ui_labeled_content"'+(a.controlStyle?' style="'+a.controlStyle+'"':"")+">"+f.call(this,b,a)+"</span>"}]}; 
CKEDITOR.dialog._.uiElementBuilders.hbox.build(b,g,e)}return e.join("")})}},textInput:function(b,a,d){if(!(3>arguments.length)){h.call(this,a); var 
f=this._.inputId=CKEDITOR.tools.getNextId()+"_textInput",c={"class":"cke_dialog_ui_input_"+ a.type,id:f,type:a.type}; a.validate&&(this.validate=a.validate); 
a.maxLength&&(c.maxlength=a.maxLength); a.size&&(c.size=a.size); a.inputStyle&&(c.style=a.inputStyle); var e=this,k=!1; 
b.on("load",function(){e.getInputElement().on("keydown",function(a){a.data.getKeystroke()==13&&(k=true)}); 
e.getInputElement().on("keyup",function(a){if(a.data.getKeystroke()==13&&k){b.getButton("ok")&&setTimeout(function(){b.getButton("ok").click()},0); 
k=false}},null,null,1E3)}); CKEDITOR.ui.dialog.labeledElement.call(this, b,a,d,function(){var b=['<div class="cke_dialog_ui_input_',a.type,'" 
role="presentation"']; a.width&&b.push('style="width:'+a.width+'" '); b.push("><input "); c["aria-labelledby"]=this._.labelId; 
this._.required&&(c["aria-required"]=this._.required); for(var e in c)b.push(e+'="'+c[e]+'" '); b.push(" /></div>"); return 
b.join("")})}},textarea:function(b,a,d){if(!(3>arguments.length)){h.call(this,a); var f=this,c=this._.inputId=CKEDITOR.tools.getNextId()+"_textarea",e={}; 
a.validate&&(this.validate=a.validate);

e.rows=a.rows||5; e.cols=a.cols||20; e["class"]="cke_dialog_ui_input_textarea "+(a["class"]||""); "undefined"!=typeof a.inputStyle&&(e.style=a.inputStyle); 
a.dir&&(e.dir=a.dir); CKEDITOR.ui.dialog.labeledElement.call(this,b,a,d,function(){e["aria-labelledby"]=this._.labelId; 
this._.required&&(e["aria-required"]=this._.required); var a=['<div class="cke_dialog_ui_input_textarea" role="presentation"><textarea id="',c,'" '],b; for(b in 
e)a.push(b+'="'+CKEDITOR.tools.htmlEncode(e[b])+'" '); a.push(">",CKEDITOR.tools.htmlEncode(f._["default"]), "</textarea></div>"); return 
a.join("")})}},checkbox:function(b,a,d){if(!(3>arguments.length)){var f=h.call(this,a,{"default":!!a["default"]}); a.validate&&(this.validate=a.validate); 
CKEDITOR.ui.dialog.uiElement.call(this,b,a,d,"span",null,null,function(){var 
c=CKEDITOR.tools.extend({},a,{id:a.id?a.id+"_checkbox":CKEDITOR.tools.getNextId()+"_checkbox"},true),e=[],d=CKEDITOR.tools.getNextId()+"_label",g={"class":"cke_dialog_ui_checkbox_input",type:"checkbox","aria-labelledby":d}; 
p(c); if(a["default"])g.checked= "checked"; if(typeof c.inputStyle!="undefined")c.style=c.inputStyle; f.checkbox=new 
CKEDITOR.ui.dialog.uiElement(b,c,e,"input",null,g); e.push(' <label id="',d,'" for="',g.id,'"'+(a.labelStyle?' 
style="'+a.labelStyle+'"':"")+">",CKEDITOR.tools.htmlEncode(a.label),"</label>"); return 
e.join("")})}},radio:function(b,a,d){if(!(3>arguments.length)){h.call(this,a); this._["default"]||(this._["default"]=this._.initValue=a.items[0][1]); 
a.validate&&(this.validate=a.valdiate); var f=[],c=this; a.role="radiogroup";

a.includeLabel=!0; CKEDITOR.ui.dialog.labeledElement.call(this,b,a,d,function(){for(var e=[],d=[],g=(a.id?a.id:CKEDITOR.tools.getNextId())+"_radio",i=0; 
i<a.items.length; i++){var j=a.items[i],h=j[2]!==void 0?j[2]:j[0],l=j[1]!==void 
0?j[1]:j[0],m=CKEDITOR.tools.getNextId()+"_radio_input",n=m+"_label",m=CKEDITOR.tools.extend({},a,{id:m,title:null,type:null},true),h=CKEDITOR.tools.extend({},m,{title:h},true),o={type:"radio","class":"cke_dialog_ui_radio_input",name:g,value:l,"aria-labelledby":n},q=[]; 
if(c._["default"]== l)o.checked="checked"; p(m); p(h); if(typeof m.inputStyle!="undefined")m.style=m.inputStyle; m.keyboardFocusable=true; f.push(new 
CKEDITOR.ui.dialog.uiElement(b,m,q,"input",null,o)); q.push(" "); new CKEDITOR.ui.dialog.uiElement(b,h,q,"label",null,{id:n,"for":o.id},j[0]); 
e.push(q.join(""))}new CKEDITOR.ui.dialog.hbox(b,f,e,d); return d.join("")}); this._.children=f}},button:function(b,a,d){if(arguments.length){"function"==typeof 
a&&(a=a(b.getParentEditor())); h.call(this,a,{disabled:a.disabled||!1}); CKEDITOR.event.implementOn(this);

var f=this; b.on("load",function(){var a=this.getElement(); (function(){a.on("click",function(a){f.click(); a.data.preventDefault()}); 
a.on("keydown",function(a){a.data.getKeystroke()in{32:1}&&(f.click(),a.data.preventDefault())})})(); a.unselectable()},this); var c=CKEDITOR.tools.extend({},a); 
delete c.style; var e=CKEDITOR.tools.getNextId()+"_label"; 
CKEDITOR.ui.dialog.uiElement.call(this,b,c,d,"a",null,{style:a.style,href:"javascript:void(0)",title:a.label,hidefocus:"true","class":a["class"],role:"button", 
"aria-labelledby":e},'<span id="'+e+'" 
class="cke_dialog_ui_button">'+CKEDITOR.tools.htmlEncode(a.label)+"</span>")}},select:function(b,a,d){if(!(3>arguments.length)){var f=h.call(this,a); 
a.validate&&(this.validate=a.validate); f.inputId=CKEDITOR.tools.getNextId()+"_select"; CKEDITOR.ui.dialog.labeledElement.call(this,b,a,d,function(){var 
c=CKEDITOR.tools.extend({},a,{id:a.id?a.id+"_select":CKEDITOR.tools.getNextId()+"_select"},true),e=[],d=[],g={id:f.inputId,"class":"cke_dialog_ui_input_select","aria-labelledby":this._.labelId};

e.push('<div class="cke_dialog_ui_input_',a.type,'" role="presentation"'); a.width&&e.push('style="width:'+a.width+'" '); e.push(">"); if(a.size!=void 
0)g.size=a.size; if(a.multiple!=void 0)g.multiple=a.multiple; p(c); for(var i=0,j; i<a.items.length&&(j=a.items[i]); i++)d.push('<option 
value="',CKEDITOR.tools.htmlEncode(j[1]!==void 0?j[1]:j[0]).replace(/"/g,"' "),'" /> ',CKEDITOR.tools.htmlEncode(j[0])); if(typeof 
c.inputStyle!="undefined")c.style=c.inputStyle; f.select=new CKEDITOR.ui.dialog.uiElement(b, c,e,"select",null,g,d.join("")); e.push("</div>"); return 
e.join("")})}},file:function(b,a,d){if(!(3>arguments.length)){void 0===a["default"]&&(a["default"]=""); var 
f=CKEDITOR.tools.extend(h.call(this,a),{definition:a,buttons:[]}); a.validate&&(this.validate=a.validate); 
b.on("load",function(){CKEDITOR.document.getById(f.frameId).getParent().addClass("cke_dialog_ui_input_file")}); 
CKEDITOR.ui.dialog.labeledElement.call(this,b,a,d,function(){f.frameId=CKEDITOR.tools.getNextId()+"_fileInput"; var b=['<iframe frameborder="0" 
allowtransparency="0" class="cke_dialog_ui_input_file" role="presentation" id="', f.frameId,'" title="',a.label,'" src="javascript:void(']; 
b.push(CKEDITOR.env.ie?"(function(){"+encodeURIComponent("document.open(); ("+CKEDITOR.tools.fixDomain+")(); document.close(); ")+"})()":"0"); 
b.push(')"></iframe>'); return b.join("")})}},fileButton:function(b,a,d){if(!(3>arguments.length)){h.call(this,a); var f=this; 
a.validate&&(this.validate=a.validate); var c=CKEDITOR.tools.extend({},a),e=c.onClick; c.className=(c.className?c.className+" ":"")+"cke_dialog_ui_button"; 
c.onClick=function(c){var d= a["for"]; if(!e||e.call(this,c)!==false){b.getContentElement(d[0],d[1]).submit(); this.disable()}}; 
b.on("load",function(){b.getContentElement(a["for"][0],a["for"][1])._.buttons.push(f)}); CKEDITOR.ui.dialog.button.call(this,b,c,d)}},html:function(){var 
b=/^\s*<[\w:]+\s+([^>]*)?>/,a=/^(\s*<[\w:]+(?:\s+[^>]*)?)((?:.|\r|\n)+)$/,d=/\/$/; return function(f,c,e){if(!(3>arguments.length)){var k=[],g=c.html; 
"<"!=g.charAt(0)&&(g="<span>"+g+"</span>"); var i=c.focus; if(i){var j=this.focus; this.focus=function(){("function"== typeof i?i:j).call(this); 
this.fire("focus")}; c.isFocusable&&(this.isFocusable=this.isFocusable); 
this.keyboardFocusable=!0}CKEDITOR.ui.dialog.uiElement.call(this,f,c,k,"span",null,null,""); k=k.join("").match(b); g=g.match(a)||["","",""]; 
d.test(g[1])&&(g[1]=g[1].slice(0,-1),g[2]="/"+g[2]); e.push([g[1]," ",k[1]||"",g[2]].join(""))}}}(),fieldset:function(b,a,d,f,c){var e=c.label; 
this._={children:a}; CKEDITOR.ui.dialog.uiElement.call(this,b,c,f,"fieldset",null,null,function(){var a=[]; e&&a.push("<legend"+ (c.labelStyle?' 
style="'+c.labelStyle+'"':"")+">"+e+"</legend>"); for(var b=0; b<d.length; b++)a.push(d[b]); return a.join("")})}},!0); CKEDITOR.ui.dialog.html.prototype=new 
CKEDITOR.ui.dialog.uiElement; CKEDITOR.ui.dialog.labeledElement.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{setLabel:function(b){var 
a=CKEDITOR.document.getById(this._.labelId); 1>a.getChildCount()?(new CKEDITOR.dom.text(b,CKEDITOR.document)).appendTo(a):a.getChild(0).$.nodeValue=b; return 
this},getLabel:function(){var b= CKEDITOR.document.getById(this._.labelId); return!b||1>b.getChildCount()?"":b.getChild(0).getText()},eventProcessors:o},!0); 
CKEDITOR.ui.dialog.button.prototype=CKEDITOR.tools.extend(new 
CKEDITOR.ui.dialog.uiElement,{click:function(){return!this._.disabled?this.fire("click",{dialog:this._.dialog}):!1},enable:function(){this._.disabled=!1; var 
b=this.getElement(); b&&b.removeClass("cke_disabled")},disable:function(){this._.disabled=!0; 
this.getElement().addClass("cke_disabled")},isVisible:function(){return this.getElement().getFirst().isVisible()}, 
isEnabled:function(){return!this._.disabled},eventProcessors:CKEDITOR.tools.extend({},CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors,{onClick:function(b,a){this.on("click",function(){a.apply(this,arguments)})}},!0),accessKeyUp:function(){this.click()},accessKeyDown:function(){this.focus()},keyboardFocusable:!0},!0); 
CKEDITOR.ui.dialog.textInput.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement,{getInputElement:function(){return 
CKEDITOR.document.getById(this._.inputId)}, focus:function(){var b=this.selectParentTab(); setTimeout(function(){var a=b.getInputElement(); 
a&&a.$.focus()},0)},select:function(){var b=this.selectParentTab(); setTimeout(function(){var a=b.getInputElement(); 
a&&(a.$.focus(),a.$.select())},0)},accessKeyUp:function(){this.select()},setValue:function(b){!b&&(b=""); return 
CKEDITOR.ui.dialog.uiElement.prototype.setValue.apply(this,arguments)},keyboardFocusable:!0},n,!0); CKEDITOR.ui.dialog.textarea.prototype=new 
CKEDITOR.ui.dialog.textInput; CKEDITOR.ui.dialog.select.prototype= CKEDITOR.tools.extend(new 
CKEDITOR.ui.dialog.labeledElement,{getInputElement:function(){return this._.select.getElement()},add:function(b,a,d){var f=new 
CKEDITOR.dom.element("option",this.getDialog().getParentEditor().document),c=this.getInputElement().$; f.$.text=b; f.$.value=void 0===a||null===a?b:a; void 
0===d||null===d?CKEDITOR.env.ie?c.add(f.$):c.add(f.$,null):c.add(f.$,d); return this},remove:function(b){this.getInputElement().$.remove(b); return 
this},clear:function(){for(var b=this.getInputElement().$; 0< b.length; )b.remove(0); return this},keyboardFocusable:!0},n,!0); 
CKEDITOR.ui.dialog.checkbox.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{getInputElement:function(){return 
this._.checkbox.getElement()},setValue:function(b,a){this.getInputElement().$.checked=b; !a&&this.fire("change",{value:b})},getValue:function(){return 
this.getInputElement().$.checked},accessKeyUp:function(){this.setValue(!this.getValue())},eventProcessors:{onChange:function(b,a){if(!CKEDITOR.env.ie||8<CKEDITOR.env.version)return 
o.onChange.apply(this, arguments); b.on("load",function(){var a=this._.checkbox.getElement(); a.on("propertychange",function(b){b=b.data.$; 
"checked"==b.propertyName&&this.fire("change",{value:a.$.checked})},this)},this); this.on("change",a); return null}},keyboardFocusable:!0},n,!0); 
CKEDITOR.ui.dialog.radio.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{setValue:function(b,a){for(var d=this._.children,f,c=0; 
c<d.length&&(f=d[c]); c++)f.getElement().$.checked=f.getValue()==b; !a&&this.fire("change",{value:b})}, getValue:function(){for(var b=this._.children,a=0; 
a<b.length; a++)if(b[a].getElement().$.checked)return b[a].getValue(); return null},accessKeyUp:function(){var b=this._.children,a; for(a=0; a<b.length; 
a++)if(b[a].getElement().$.checked){b[a].getElement().focus(); 
return}b[0].getElement().focus()},eventProcessors:{onChange:function(b,a){if(CKEDITOR.env.ie)b.on("load",function(){for(var a=this._.children,b=this,c=0; 
c<a.length; c++)a[c].getElement().on("propertychange",function(a){a=a.data.$; "checked"==a.propertyName&& 
this.$.checked&&b.fire("change",{value:this.getAttribute("value")})})},this),this.on("change",a); else return o.onChange.apply(this,arguments); return 
null}}},n,!0); CKEDITOR.ui.dialog.file.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement,n,{getInputElement:function(){var 
b=CKEDITOR.document.getById(this._.frameId).getFrameDocument(); return 0<b.$.forms.length?new 
CKEDITOR.dom.element(b.$.forms[0].elements[0]):this.getElement()},submit:function(){this.getInputElement().getParent().$.submit();

return this},getAction:function(){return this.getInputElement().getParent().$.action},registerEvents:function(b){var 
a=/^on([A-Z]\w+)/,d,f=function(a,b,c,d){a.on("formLoaded",function(){a.getInputElement().on(c,d,a)})},c; for(c in 
b)if(d=c.match(a))this.eventProcessors[c]?this.eventProcessors[c].call(this,this._.dialog,b[c]):f(this,this._.dialog,d[1].toLowerCase(),b[c]); return 
this},reset:function(){function b(){d.$.open(); var b=""; f.size&&(b=f.size-(CKEDITOR.env.ie?7:0)); var h=a.frameId+"_input";

d.$.write(['<html dir="'+g+'" lang="'+i+'"><head><title></title></head><body style="margin: 0;
 overflow: hidden;
 background: transparent; ">','<form enctype="multipart/form-data" method="POST" dir="'+g+'" lang="'+i+'" 
action="',CKEDITOR.tools.htmlEncode(f.action),'"><label id="',a.labelId,'" for="',h,'" style="display:none">',CKEDITOR.tools.htmlEncode(f.label),'</label><input 
style="width:100%" id="',h,'" aria-labelledby="',a.labelId,'" type="file" name="',CKEDITOR.tools.htmlEncode(f.id||"cke_upload"), '" 
size="',CKEDITOR.tools.htmlEncode(0<b?b:""),'" /></form></body></html><script>',CKEDITOR.env.ie?"("+CKEDITOR.tools.fixDomain+")(); 
":"","window.parent.CKEDITOR.tools.callFunction("+e+"); ","window.onbeforeunload = function() 
{window.parent.CKEDITOR.tools.callFunction("+k+")}","<\/script>"].join("")); d.$.close(); for(b=0; b<c.length; b++)c[b].enable()}var 
a=this._,d=CKEDITOR.document.getById(a.frameId).getFrameDocument(),f=a.definition,c=a.buttons,e=this.formLoadedNumber,k=this.formUnloadNumber,g=a.dialog._.editor.lang.dir, 
i=a.dialog._.editor.langCode; 
e||(e=this.formLoadedNumber=CKEDITOR.tools.addFunction(function(){this.fire("formLoaded")},this),k=this.formUnloadNumber=CKEDITOR.tools.addFunction(function(){this.getInputElement().clearCustomData()},this),this.getDialog()._.editor.on("destroy",function(){CKEDITOR.tools.removeFunction(e); 
CKEDITOR.tools.removeFunction(k)})); CKEDITOR.env.gecko?setTimeout(b,500):b()},getValue:function(){return 
this.getInputElement().$.value||""},setInitValue:function(){this._.initValue= 
""},eventProcessors:{onChange:function(b,a){this._.domOnChangeRegistered||(this.on("formLoaded",function(){this.getInputElement().on("change",function(){this.fire("change",{value:this.getValue()})},this)},this),this._.domOnChangeRegistered=!0); 
this.on("change",a)}},keyboardFocusable:!0},!0); CKEDITOR.ui.dialog.fileButton.prototype=new CKEDITOR.ui.dialog.button; 
CKEDITOR.ui.dialog.fieldset.prototype=CKEDITOR.tools.clone(CKEDITOR.ui.dialog.hbox.prototype); CKEDITOR.dialog.addUIElement("text",r); 
CKEDITOR.dialog.addUIElement("password", r); CKEDITOR.dialog.addUIElement("textarea",l); CKEDITOR.dialog.addUIElement("checkbox",l); 
CKEDITOR.dialog.addUIElement("radio",l); CKEDITOR.dialog.addUIElement("button",l); CKEDITOR.dialog.addUIElement("select",l); 
CKEDITOR.dialog.addUIElement("file",l); CKEDITOR.dialog.addUIElement("fileButton",l); CKEDITOR.dialog.addUIElement("html",l); 
CKEDITOR.dialog.addUIElement("fieldset",{build:function(b,a,d){for(var f=a.children,c,e=[],h=[],g=0; g<f.length&&(c=f[g]); g++){var i=[]; e.push(i); 
h.push(CKEDITOR.dialog._.uiElementBuilders[c.type].build(b, c,i))}return new CKEDITOR.ui.dialog[a.type](b,h,e,d,a)}})}}); CKEDITOR.DIALOG_RESIZE_NONE=0; 
CKEDITOR.DIALOG_RESIZE_WIDTH=1; CKEDITOR.DIALOG_RESIZE_HEIGHT=2; CKEDITOR.DIALOG_RESIZE_BOTH=3;

(function(){function t(){for(var a=this._.tabIdList.length,b=CKEDITOR.tools.indexOf(this._.tabIdList,this._.currentTabId)+a,c=b-1; c>b-a; 
c--)if(this._.tabs[this._.tabIdList[c%a]][0].$.offsetHeight)return this._.tabIdList[c%a]; return null}function u(){for(var 
a=this._.tabIdList.length,b=CKEDITOR.tools.indexOf(this._.tabIdList,this._.currentTabId),c=b+1; c<b+a; 
c++)if(this._.tabs[this._.tabIdList[c%a]][0].$.offsetHeight)return this._.tabIdList[c%a]; return null}function G(a,b){for(var 
c=a.$.getElementsByTagName("input"), e=0,d=c.length; e<d; e++){var g=new CKEDITOR.dom.element(c[e]); 
"text"==g.getAttribute("type").toLowerCase()&&(b?(g.setAttribute("value",g.getCustomData("fake_value")||""),g.removeCustomData("fake_value")):(g.setCustomData("fake_value",g.getAttribute("value")),g.setAttribute("value","")))}}function 
P(a,b){var c=this.getInputElement(); c&&(a?c.removeAttribute("aria-invalid"):c.setAttribute("aria-invalid",!0)); a||(this.select?this.select():this.focus()); 
b&&alert(b); this.fire("validated",{valid:a,msg:b})} function Q(){var a=this.getInputElement(); a&&a.removeAttribute("aria-invalid")}function R(a){var 
a=CKEDITOR.dom.element.createFromHtml(CKEDITOR.addTemplate("dialog",S).output({id:CKEDITOR.tools.getNextNumber(),editorId:a.id,langDir:a.lang.dir,langCode:a.langCode,editorDialogClass:"cke_editor_"+a.name.replace(/\./g,"\\.")+"_dialog",closeTitle:a.lang.common.close,hidpi:CKEDITOR.env.hidpi?"cke_hidpi":""})),b=a.getChild([0,0,0,0,0]),c=b.getChild(0),e=b.getChild(1); 
if(CKEDITOR.env.ie&&!CKEDITOR.env.quirks){var d= "javascript:void(function(){"+encodeURIComponent("document.open(); ("+CKEDITOR.tools.fixDomain+")(); 
document.close(); ")+"}())"; CKEDITOR.dom.element.createFromHtml('<iframe frameBorder="0" class="cke_iframe_shim" src="'+d+'" 
tabIndex="-1"></iframe>').appendTo(b.getParent())}c.unselectable(); e.unselectable(); 
return{element:a,parts:{dialog:a.getChild(0),title:c,close:e,tabs:b.getChild(2),contents:b.getChild([3,0,0,0]),footer:b.getChild([3,0,1,0])}}}function 
H(a,b,c){this.element=b; this.focusIndex=c; this.tabIndex= 0; this.isFocusable=function(){return!b.getAttribute("disabled")&&b.isVisible()}; 
this.focus=function(){a._.currentFocusIndex=this.focusIndex; this.element.focus()}; 
b.on("keydown",function(a){a.data.getKeystroke()in{32:1,13:1}&&this.fire("click")}); b.on("focus",function(){this.fire("mouseover")}); 
b.on("blur",function(){this.fire("mouseout")})}function T(a){function b(){a.layout()}var c=CKEDITOR.document.getWindow(); c.on("resize",b); 
a.on("hide",function(){c.removeListener("resize",b)})}function I(a,b){this._= {dialog:a}; CKEDITOR.tools.extend(this,b)}function U(a){function b(b){var 
c=a.getSize(),i=CKEDITOR.document.getWindow().getViewPaneSize(),o=b.data.$.screenX,j=b.data.$.screenY,n=o-e.x,l=j-e.y; e={x:o,y:j}; d.x+=n; d.y+=l; 
a.move(d.x+h[3]<f?-h[3]:d.x-h[1]>i.width-c.width-f?i.width-c.width+("rtl"==g.lang.dir?0:h[1]):d.x,d.y+h[0]<f?-h[0]:d.y-h[2]>i.height-c.height-f?i.height-c.height+h[2]:d.y,1); 
b.data.preventDefault()}function c(){CKEDITOR.document.removeListener("mousemove",b); CKEDITOR.document.removeListener("mouseup", c); 
if(CKEDITOR.env.ie6Compat){var a=q.getChild(0).getFrameDocument(); a.removeListener("mousemove",b); a.removeListener("mouseup",c)}}var e=null,d=null; 
a.getElement().getFirst(); var g=a.getParentEditor(),f=g.config.dialog_magnetDistance,h=CKEDITOR.skin.margins||[0,0,0,0]; "undefined"==typeof f&&(f=20); 
a.parts.title.on("mousedown",function(f){e={x:f.data.$.screenX,y:f.data.$.screenY}; CKEDITOR.document.on("mousemove",b); CKEDITOR.document.on("mouseup",c); 
d=a.getPosition(); if(CKEDITOR.env.ie6Compat){var h= q.getChild(0).getFrameDocument(); h.on("mousemove",b); 
h.on("mouseup",c)}f.data.preventDefault()},a)}function V(a){var b,c; function e(d){var 
e="rtl"==h.lang.dir,j=o.width,C=o.height,D=j+(d.data.$.screenX-b)*(e?-1:1)*(a._.moved?1:2),n=C+(d.data.$.screenY-c)*(a._.moved?1:2),x=a._.element.getFirst(),x=e&&x.getComputedStyle("right"),y=a.getPosition(); 
y.y+n>i.height&&(n=i.height-y.y); if((e?x:y.x)+D>i.width)D=i.width-(e?x:y.x); 
if(f==CKEDITOR.DIALOG_RESIZE_WIDTH||f==CKEDITOR.DIALOG_RESIZE_BOTH)j=Math.max(g.minWidth|| 0,D-m); 
if(f==CKEDITOR.DIALOG_RESIZE_HEIGHT||f==CKEDITOR.DIALOG_RESIZE_BOTH)C=Math.max(g.minHeight||0,n-k); a.resize(j,C); a._.moved||a.layout(); 
d.data.preventDefault()}function d(){CKEDITOR.document.removeListener("mouseup",d); CKEDITOR.document.removeListener("mousemove",e); j&&(j.remove(),j=null); 
if(CKEDITOR.env.ie6Compat){var a=q.getChild(0).getFrameDocument(); a.removeListener("mouseup",d); a.removeListener("mousemove",e)}}var 
g=a.definition,f=g.resizable; if(f!=CKEDITOR.DIALOG_RESIZE_NONE){var h=a.getParentEditor(), m,k,i,o,j,n=CKEDITOR.tools.addFunction(function(f){o=a.getSize(); 
var h=a.parts.contents; h.$.getElementsByTagName("iframe").length&&(j=CKEDITOR.dom.element.createFromHtml('<div class="cke_dialog_resize_cover" style="height: 
100%;
 position: absolute;
 width: 100%; "></div>'),h.append(j)); k=o.height-a.parts.contents.getSize("height",!(CKEDITOR.env.gecko||CKEDITOR.env.ie&&CKEDITOR.env.quirks)); 
m=o.width-a.parts.contents.getSize("width",1); b=f.screenX; c=f.screenY; i=CKEDITOR.document.getWindow().getViewPaneSize();

CKEDITOR.document.on("mousemove",e); CKEDITOR.document.on("mouseup",d); 
CKEDITOR.env.ie6Compat&&(h=q.getChild(0).getFrameDocument(),h.on("mousemove",e),h.on("mouseup",d)); f.preventDefault&&f.preventDefault()}); 
a.on("load",function(){var b=""; f==CKEDITOR.DIALOG_RESIZE_WIDTH?b=" cke_resizer_horizontal":f==CKEDITOR.DIALOG_RESIZE_HEIGHT&&(b=" cke_resizer_vertical"); 
b=CKEDITOR.dom.element.createFromHtml('<div class="cke_resizer'+b+" cke_resizer_"+h.lang.dir+'" title="'+CKEDITOR.tools.htmlEncode(h.lang.common.resize)+ '" 
onmousedown="CKEDITOR.tools.callFunction('+n+', event )">'+("ltr"==h.lang.dir?"◢":"◣")+"</div>"); a.parts.footer.append(b,1)}); 
h.on("destroy",function(){CKEDITOR.tools.removeFunction(n)})}}function E(a){a.data.preventDefault(1)}function J(a){var 
b=CKEDITOR.document.getWindow(),c=a.config,e=c.dialog_backgroundCoverColor||"white",d=c.dialog_backgroundCoverOpacity,g=c.baseFloatZIndex,c=CKEDITOR.tools.genKey(e,d,g),f=w[c]; 
f?f.show():(g=['<div tabIndex="-1" style="position: ',CKEDITOR.env.ie6Compat? "absolute":"fixed",";
 z-index: ",g,";
 top: 0px;
 left: 0px;
 ",!CKEDITOR.env.ie6Compat?"background-color: "+e:"",'" class="cke_dialog_background_cover">'],CKEDITOR.env.ie6Compat&&(e="<html><body 
style=\\'background-color:"+e+"; \\'></body></html>",g.push('<iframe hidefocus="true" frameborder="0" id="cke_dialog_background_iframe" 
src="javascript:'),g.push("void((function(){"+encodeURIComponent("document.open(); ("+CKEDITOR.tools.fixDomain+")(); document.write( '"+e+"' ); 
document.close(); ")+"})())"),g.push('" style="position:absolute; left:0; top:0; width:100%; height: 100%; filter: 
progid:DXImageTransform.Microsoft.Alpha(opacity=0)"></iframe>')), g.push("</div>"),f=CKEDITOR.dom.element.createFromHtml(g.join("")),f.setOpacity(void 
0!=d?d:0.5),f.on("keydown",E),f.on("keypress",E),f.on("keyup",E),f.appendTo(CKEDITOR.document.getBody()),w[c]=f); a.focusManager.add(f); q=f; var 
a=function(){var a=b.getViewPaneSize(); f.setStyles({width:a.width+"px",height:a.height+"px"})},h=function(){var 
a=b.getScrollPosition(),c=CKEDITOR.dialog._.currentTop; f.setStyles({left:a.x+"px",top:a.y+"px"}); if(c){do{a=c.getPosition();
c.move(a.x,a.y)}while(c=c._.parentDialog)
}};
F=a; b.on("resize",a); a(); (!CKEDITOR.env.mac||!CKEDITOR.env.webkit)&&f.focus(); if(CKEDITOR.env.ie6Compat){var m=function(){h(); 
arguments.callee.prevScrollHandler.apply(this,arguments)}; b.$.setTimeout(function(){m.prevScrollHandler=window.onscroll||function(){}; window.onscroll=m},0); 
h()}}function 
K(a){q&&(a.focusManager.remove(q),a=CKEDITOR.document.getWindow(),q.hide(),a.removeListener("resize",F),CKEDITOR.env.ie6Compat&&a.$.setTimeout(function(){window.onscroll=window.onscroll&&window.onscroll.prevScrollHandler|| 
null},0),F=null)}var r=CKEDITOR.tools.cssLength,S='<div class="cke_reset_all {editorId} {editorDialogClass} {hidpi}" dir="{langDir}" lang="{langCode}" 
role="dialog" aria-labelledby="cke_dialog_title_{id}"><table class="cke_dialog '+CKEDITOR.env.cssClass+' cke_{langDir}" style="position:absolute" 
role="presentation"><tr><td role="presentation"><div class="cke_dialog_body" role="presentation"><div id="cke_dialog_title_{id}" class="cke_dialog_title" 
role="presentation"></div><a id="cke_dialog_close_button_{id}" class="cke_dialog_close_button" href="javascript:void(0)" title="{closeTitle}" 
role="button"><span class="cke_label">X</span></a><div id="cke_dialog_tabs_{id}" class="cke_dialog_tabs" role="tablist"></div><table class="cke_dialog_contents" 
role="presentation"><tr><td id="cke_dialog_contents_{id}" class="cke_dialog_contents_body" role="presentation"></td></tr><tr><td id="cke_dialog_footer_{id}" 
class="cke_dialog_footer" role="presentation"></td></tr></table></div></td></tr></table></div>';

CKEDITOR.dialog=function(a,b){function c(){var a=l._.focusList; a.sort(function(a,b){return 
a.tabIndex!=b.tabIndex?b.tabIndex-a.tabIndex:a.focusIndex-b.focusIndex}); for(var b=a.length,c=0; c<b; c++)a[c].focusIndex=c}function e(a){var 
b=l._.focusList,a=a||0; if(!(1>b.length)){var c=l._.currentFocusIndex; try{b[c].getInputElement().$.blur()}catch(f){}for(var d=c=(c+a+b.length)%b.length; 
a&&!b[d].isFocusable()&&!(d=(d+a+b.length)%b.length,d==c); ); b[d].focus(); "text"==b[d].type&&b[d].select()}}function d(b){if(l== 
CKEDITOR.dialog._.currentTop){var c=b.data.getKeystroke(),d="rtl"==a.lang.dir; o=j=0; 
if(9==c||c==CKEDITOR.SHIFT+9)c=c==CKEDITOR.SHIFT+9,l._.tabBarMode?(c=c?t.call(l):u.call(l),l.selectPage(c),l._.tabs[c][0].focus()):e(c?-1:1),o=1; else 
if(c==CKEDITOR.ALT+121&&!l._.tabBarMode&&1<l.getPageCount())l._.tabBarMode=!0,l._.tabs[l._.currentTabId][0].focus(),o=1; else 
if((37==c||39==c)&&l._.tabBarMode)c=c==(d?39:37)?t.call(l):u.call(l),l.selectPage(c),l._.tabs[c][0].focus(),o=1; else 
if((13==c||32==c)&&l._.tabBarMode)this.selectPage(this._.currentTabId), this._.tabBarMode=!1,this._.currentFocusIndex=-1,e(1),o=1; else 
if(13==c){c=b.data.getTarget(); 
if(!c.is("a","button","select","textarea")&&(!c.is("input")||"button"!=c.$.type))(c=this.getButton("ok"))&&CKEDITOR.tools.setTimeout(c.click,0,c),o=1; j=1}else 
if(27==c)(c=this.getButton("cancel"))?CKEDITOR.tools.setTimeout(c.click,0,c):!1!==this.fire("cancel",{hide:!0}).hide&&this.hide(),j=1; else return; 
g(b)}}function g(a){o?a.data.preventDefault(1):j&&a.data.stopPropagation()}var f=CKEDITOR.dialog._.dialogDefinitions[b], 
h=CKEDITOR.tools.clone(W),m=a.config.dialog_buttonsOrder||"OS",k=a.lang.dir,i={},o,j; 
("OS"==m&&CKEDITOR.env.mac||"rtl"==m&&"ltr"==k||"ltr"==m&&"rtl"==k)&&h.buttons.reverse(); f=CKEDITOR.tools.extend(f(a),h); f=CKEDITOR.tools.clone(f); f=new 
L(this,f); h=R(a); 
this._={editor:a,element:h.element,name:b,contentSize:{width:0,height:0},size:{width:0,height:0},contents:{},buttons:{},accessKeyMap:{},tabs:{},tabIdList:[],currentTabId:null,currentTabIndex:null,pageCount:0,lastTab:null,tabBarMode:!1,focusList:[], 
currentFocusIndex:0,hasFocus:!1}; this.parts=h.parts; CKEDITOR.tools.setTimeout(function(){a.fire("ariaWidget",this.parts.contents)},0,this); 
h={position:CKEDITOR.env.ie6Compat?"absolute":"fixed",top:0,visibility:"hidden"}; h["rtl"==k?"right":"left"]=0; this.parts.dialog.setStyles(h); 
CKEDITOR.event.call(this); this.definition=f=CKEDITOR.fire("dialogDefinition",{name:b,definition:f},a).definition; if(!("removeDialogTabs"in 
a._)&&a.config.removeDialogTabs){h=a.config.removeDialogTabs.split("; "); for(k=0; k< h.length; k++)if(m=h[k].split(":"),2==m.length){var n=m[0]; 
i[n]||(i[n]=[]); i[n].push(m[1])}a._.removeDialogTabs=i}if(a._.removeDialogTabs&&(i=a._.removeDialogTabs[b]))for(k=0; k<i.length; k++)f.removeContents(i[k]); 
if(f.onLoad)this.on("load",f.onLoad); if(f.onShow)this.on("show",f.onShow); if(f.onHide)this.on("hide",f.onHide); 
if(f.onOk)this.on("ok",function(b){a.fire("saveSnapshot"); setTimeout(function(){a.fire("saveSnapshot")},0); !1===f.onOk.call(this,b)&&(b.data.hide=!1)}); 
if(f.onCancel)this.on("cancel", function(a){!1===f.onCancel.call(this,a)&&(a.data.hide=!1)}); var l=this,p=function(a){var b=l._.contents,c=!1,d; for(d in 
b)for(var f in b[d])if(c=a.call(this,b[d][f]))return}; this.on("ok",function(a){p(function(b){if(b.validate){var c=b.validate(this),d="string"==typeof 
c||!1===c; d&&(a.data.hide=!1,a.stop()); P.call(b,!d,"string"==typeof c?c:void 0); return d}})},this,null,0); 
this.on("cancel",function(b){p(function(c){if(c.isChanged())return!a.config.dialog_noConfirmCancel&&!confirm(a.lang.common.confirmCancel)&& 
(b.data.hide=!1),!0})},this,null,0); this.parts.close.on("click",function(a){!1!==this.fire("cancel",{hide:!0}).hide&&this.hide(); 
a.data.preventDefault()},this); this.changeFocus=e; var v=this._.element; a.focusManager.add(v,1); this.on("show",function(){v.on("keydown",d,this); 
if(CKEDITOR.env.gecko)v.on("keypress",g,this)}); this.on("hide",function(){v.removeListener("keydown",d); CKEDITOR.env.gecko&&v.removeListener("keypress",g); 
p(function(a){Q.apply(a)})}); this.on("iframeAdded",function(a){(new CKEDITOR.dom.document(a.data.iframe.$.contentWindow.document)).on("keydown", 
d,this,null,0)}); this.on("show",function(){c(); if(a.config.dialog_startupFocusTab&&1<l._.pageCount)l._.tabBarMode=!0,l._.tabs[l._.currentTabId][0].focus(); 
else if(!this._.hasFocus)if(this._.currentFocusIndex=-1,f.onFocus){var b=f.onFocus.call(this); b&&b.focus()}else e(1)},this,null,4294967295); 
if(CKEDITOR.env.ie6Compat)this.on("load",function(){var a=this.getElement(),b=a.getFirst(); b.remove(); b.appendTo(a)},this); U(this); V(this); (new 
CKEDITOR.dom.text(f.title,CKEDITOR.document)).appendTo(this.parts.title);

for(k=0; k<f.contents.length; k++)(i=f.contents[k])&&this.addPage(i); this.parts.tabs.on("click",function(a){var b=a.data.getTarget(); 
b.hasClass("cke_dialog_tab")&&(b=b.$.id,this.selectPage(b.substring(4,b.lastIndexOf("_"))),this._.tabBarMode&&(this._.tabBarMode=!1,this._.currentFocusIndex=-1,e(1)),a.data.preventDefault())},this); 
k=[]; i=CKEDITOR.dialog._.uiElementBuilders.hbox.build(this,{type:"hbox",className:"cke_dialog_footer_buttons",widths:[],children:f.buttons},k).getChild(); 
this.parts.footer.setHtml(k.join(""));

for(k=0; k<i.length; k++)this._.buttons[i[k].id]=i[k]}; CKEDITOR.dialog.prototype={destroy:function(){this.hide(); 
this._.element.remove()},resize:function(){return 
function(a,b){if(!this._.contentSize||!(this._.contentSize.width==a&&this._.contentSize.height==b))CKEDITOR.dialog.fire("resize",{dialog:this,width:a,height:b},this._.editor),this.fire("resize",{width:a,height:b},this._.editor),this.parts.contents.setStyles({width:a+"px",height:b+"px"}),"rtl"==this._.editor.lang.dir&&this._.position&&(this._.position.x= 
CKEDITOR.document.getWindow().getViewPaneSize().width-this._.contentSize.width-parseInt(this._.element.getFirst().getStyle("right"),10)),this._.contentSize={width:a,height:b}}}(),getSize:function(){var 
a=this._.element.getFirst(); return{width:a.$.offsetWidth||0,height:a.$.offsetHeight||0}},move:function(a,b,c){var 
e=this._.element.getFirst(),d="rtl"==this._.editor.lang.dir,g="fixed"==e.getComputedStyle("position"); CKEDITOR.env.ie&&e.setStyle("zoom","100%"); 
if(!g||!this._.position||!(this._.position.x== 
a&&this._.position.y==b))this._.position={x:a,y:b},g||(g=CKEDITOR.document.getWindow().getScrollPosition(),a+=g.x,b+=g.y),d&&(g=this.getSize(),a=CKEDITOR.document.getWindow().getViewPaneSize().width-g.width-a),b={top:(0<b?b:0)+"px"},b[d?"right":"left"]=(0<a?a:0)+"px",e.setStyles(b),c&&(this._.moved=1)},getPosition:function(){return 
CKEDITOR.tools.extend({},this._.position)},show:function(){var a=this._.element,b=this.definition; 
!a.getParent()||!a.getParent().equals(CKEDITOR.document.getBody())?a.appendTo(CKEDITOR.document.getBody()): a.setStyle("display","block"); 
this.resize(this._.contentSize&&this._.contentSize.width||b.width||b.minWidth,this._.contentSize&&this._.contentSize.height||b.height||b.minHeight); 
this.reset(); this.selectPage(this.definition.contents[0].id); 
null===CKEDITOR.dialog._.currentZIndex&&(CKEDITOR.dialog._.currentZIndex=this._.editor.config.baseFloatZIndex); 
this._.element.getFirst().setStyle("z-index",CKEDITOR.dialog._.currentZIndex+=10); null===CKEDITOR.dialog._.currentTop?(CKEDITOR.dialog._.currentTop=this, 
this._.parentDialog=null,J(this._.editor)):(this._.parentDialog=CKEDITOR.dialog._.currentTop,this._.parentDialog.getElement().getFirst().$.style.zIndex-=Math.floor(this._.editor.config.baseFloatZIndex/2),CKEDITOR.dialog._.currentTop=this); 
a.on("keydown",M); a.on("keyup",N); this._.hasFocus=!1; for(var c in b.contents)if(b.contents[c]){var 
a=b.contents[c],e=this._.tabs[a.id],d=a.requiredContent,g=0; if(e){for(var f in this._.contents[a.id]){var h=this._.contents[a.id][f]; 
"hbox"==h.type||("vbox"==h.type|| 
!h.getInputElement())||(h.requiredContent&&!this._.editor.activeFilter.check(h.requiredContent)?h.disable():(h.enable(),g++))}!g||d&&!this._.editor.activeFilter.check(d)?e[0].addClass("cke_dialog_tab_disabled"):e[0].removeClass("cke_dialog_tab_disabled")}}CKEDITOR.tools.setTimeout(function(){this.layout(); 
T(this); this.parts.dialog.setStyle("visibility",""); this.fireOnce("load",{}); CKEDITOR.ui.fire("ready",this); this.fire("show",{}); 
this._.editor.fire("dialogShow",this); this._.parentDialog||this._.editor.focusManager.lock();

this.foreach(function(a){a.setInitValue&&a.setInitValue()})},100,this)},layout:function(){var 
a=this.parts.dialog,b=this.getSize(),c=CKEDITOR.document.getWindow().getViewPaneSize(),e=(c.width-b.width)/2,d=(c.height-b.height)/2; 
CKEDITOR.env.ie6Compat||(b.height+(0<d?d:0)>c.height||b.width+(0<e?e:0)>c.width?a.setStyle("position","absolute"):a.setStyle("position","fixed")); 
this.move(this._.moved?this._.position.x:e,this._.moved?this._.position.y:d)},foreach:function(a){for(var b in this._.contents)for(var c in 
this._.contents[b])a.call(this, this._.contents[b][c]); return this},reset:function(){var a=function(a){a.reset&&a.reset(1)}; return function(){this.foreach(a); 
return this}}(),setupContent:function(){var a=arguments; this.foreach(function(b){b.setup&&b.setup.apply(b,a)})},commitContent:function(){var a=arguments; 
this.foreach(function(b){CKEDITOR.env.ie&&this._.currentFocusIndex==b.focusIndex&&b.getInputElement().$.blur(); 
b.commit&&b.commit.apply(b,a)})},hide:function(){if(this.parts.dialog.isVisible()){this.fire("hide",{}); this._.editor.fire("dialogHide", this); 
this.selectPage(this._.tabIdList[0]); var a=this._.element; a.setStyle("display","none"); this.parts.dialog.setStyle("visibility","hidden"); for(X(this); 
CKEDITOR.dialog._.currentTop!=this; )CKEDITOR.dialog._.currentTop.hide(); if(this._.parentDialog){var b=this._.parentDialog.getElement().getFirst(); 
b.setStyle("z-index",parseInt(b.$.style.zIndex,10)+Math.floor(this._.editor.config.baseFloatZIndex/2))}else K(this._.editor); 
if(CKEDITOR.dialog._.currentTop=this._.parentDialog)CKEDITOR.dialog._.currentZIndex-= 10; else{CKEDITOR.dialog._.currentZIndex=null; 
a.removeListener("keydown",M); a.removeListener("keyup",N); var c=this._.editor; c.focus(); setTimeout(function(){c.focusManager.unlock(); 
CKEDITOR.env.iOS&&c.window.focus()},0)}delete this._.parentDialog; 
this.foreach(function(a){a.resetInitValue&&a.resetInitValue()})}},addPage:function(a){if(!a.requiredContent||this._.editor.filter.check(a.requiredContent)){for(var 
b=[],c=a.label?' title="'+CKEDITOR.tools.htmlEncode(a.label)+'"':"",e=CKEDITOR.dialog._.uiElementBuilders.vbox.build(this, 
{type:"vbox",className:"cke_dialog_page_contents",children:a.elements,expand:!!a.expand,padding:a.padding,style:a.style||"width: 100%; 
"},b),d=this._.contents[a.id]={},g=e.getChild(),f=0; e=g.shift(); )!e.notAllowed&&("hbox"!=e.type&&"vbox"!=e.type)&&f++,d[e.id]=e,"function"==typeof 
e.getChild&&g.push.apply(g,e.getChild()); f||(a.hidden=!0); b=CKEDITOR.dom.element.createFromHtml(b.join("")); b.setAttribute("role","tabpanel"); 
e=CKEDITOR.env; d="cke_"+a.id+"_"+CKEDITOR.tools.getNextNumber(); c=CKEDITOR.dom.element.createFromHtml(['<a class="cke_dialog_tab"', 0<this._.pageCount?" 
cke_last":"cke_first",c,a.hidden?' style="display:none"':"",' id="',d,'"',e.gecko&&!e.hc?"":' href="javascript:void(0)"',' tabIndex="-1" hidefocus="true" 
role="tab">',a.label,"</a>"].join("")); b.setAttribute("aria-labelledby",d); this._.tabs[a.id]=[c,b]; this._.tabIdList.push(a.id); 
!a.hidden&&this._.pageCount++; this._.lastTab=c; this.updateStyle(); b.setAttribute("name",a.id); b.appendTo(this.parts.contents); c.unselectable(); 
this.parts.tabs.append(c); a.accessKey&&(O(this,this,"CTRL+"+ 
a.accessKey,Y,Z),this._.accessKeyMap["CTRL+"+a.accessKey]=a.id)}},selectPage:function(a){if(this._.currentTabId!=a&&!this._.tabs[a][0].hasClass("cke_dialog_tab_disabled")&&!1!==this.fire("selectPage",{page:a,currentPage:this._.currentTabId})){for(var 
b in this._.tabs){var c=this._.tabs[b][0],e=this._.tabs[b][1]; b!=a&&(c.removeClass("cke_dialog_tab_selected"),e.hide()); e.setAttribute("aria-hidden",b!=a)}var 
d=this._.tabs[a]; d[0].addClass("cke_dialog_tab_selected"); CKEDITOR.env.ie6Compat||CKEDITOR.env.ie7Compat? 
(G(d[1]),d[1].show(),setTimeout(function(){G(d[1],1)},0)):d[1].show(); this._.currentTabId=a; 
this._.currentTabIndex=CKEDITOR.tools.indexOf(this._.tabIdList,a)}},updateStyle:function(){this.parts.dialog[(1===this._.pageCount?"add":"remove")+"Class"]("cke_single_page")},hidePage:function(a){var 
b=this._.tabs[a]&&this._.tabs[a][0]; 
b&&(1!=this._.pageCount&&b.isVisible())&&(a==this._.currentTabId&&this.selectPage(t.call(this)),b.hide(),this._.pageCount--,this.updateStyle())},showPage:function(a){if(a=this._.tabs[a]&& 
this._.tabs[a][0])a.show(),this._.pageCount++,this.updateStyle()},getElement:function(){return this._.element},getName:function(){return 
this._.name},getContentElement:function(a,b){var c=this._.contents[a]; return c&&c[b]},getValueOf:function(a,b){return 
this.getContentElement(a,b).getValue()},setValueOf:function(a,b,c){return this.getContentElement(a,b).setValue(c)},getButton:function(a){return 
this._.buttons[a]},click:function(a){return this._.buttons[a].click()},disableButton:function(a){return this._.buttons[a].disable()}, 
enableButton:function(a){return this._.buttons[a].enable()},getPageCount:function(){return this._.pageCount},getParentEditor:function(){return 
this._.editor},getSelectedElement:function(){return 
this.getParentEditor().getSelection().getSelectedElement()},addFocusable:function(a,b){if("undefined"==typeof 
b)b=this._.focusList.length,this._.focusList.push(new H(this,a,b)); else{this._.focusList.splice(b,0,new H(this,a,b)); for(var c=b+1; c<this._.focusList.length; 
c++)this._.focusList[c].focusIndex++}}};

CKEDITOR.tools.extend(CKEDITOR.dialog,{add:function(a,b){if(!this._.dialogDefinitions[a]||"function"==typeof 
b)this._.dialogDefinitions[a]=b},exists:function(a){return!!this._.dialogDefinitions[a]},getCurrent:function(){return 
CKEDITOR.dialog._.currentTop},isTabEnabled:function(a,b,c){a=a.config.removeDialogTabs; return!(a&&a.match(RegExp("(?:^|; )"+b+":"+c+"(?:$|; 
)","i")))},okButton:function(){var a=function(a,c){c=c||{}; return 
CKEDITOR.tools.extend({id:"ok",type:"button",label:a.lang.common.ok,"class":"cke_dialog_ui_button_ok", onClick:function(a){a=a.data.dialog; 
!1!==a.fire("ok",{hide:!0}).hide&&a.hide()}},c,!0)}; a.type="button"; a.override=function(b){return CKEDITOR.tools.extend(function(c){return 
a(c,b)},{type:"button"},!0)}; return a}(),cancelButton:function(){var a=function(a,c){c=c||{}; return 
CKEDITOR.tools.extend({id:"cancel",type:"button",label:a.lang.common.cancel,"class":"cke_dialog_ui_button_cancel",onClick:function(a){a=a.data.dialog; 
!1!==a.fire("cancel",{hide:!0}).hide&&a.hide()}},c,!0)}; a.type="button"; a.override= function(b){return CKEDITOR.tools.extend(function(c){return 
a(c,b)},{type:"button"},!0)}; return a}(),addUIElement:function(a,b){this._.uiElementBuilders[a]=b}}); 
CKEDITOR.dialog._={uiElementBuilders:{},dialogDefinitions:{},currentTop:null,currentZIndex:null}; CKEDITOR.event.implementOn(CKEDITOR.dialog); 
CKEDITOR.event.implementOn(CKEDITOR.dialog.prototype); var 
W={resizable:CKEDITOR.DIALOG_RESIZE_BOTH,minWidth:600,minHeight:400,buttons:[CKEDITOR.dialog.okButton,CKEDITOR.dialog.cancelButton]},z=function(a, b,c){for(var 
e=0,d; d=a[e]; e++)if(d.id==b||c&&d[c]&&(d=z(d[c],b,c)))return d; return null},A=function(a,b,c,e,d){if(c){for(var g=0,f; f=a[g]; g++){if(f.id==c)return 
a.splice(g,0,b),b; if(e&&f[e]&&(f=A(f[e],b,c,e,!0)))return f}if(d)return null}a.push(b); return b},B=function(a,b,c){for(var e=0,d; d=a[e]; 
e++){if(d.id==b)return a.splice(e,1); if(c&&d[c]&&(d=B(d[c],b,c)))return d}return null},L=function(a,b){this.dialog=a; for(var c=b.contents,e=0,d; d=c[e]; 
e++)c[e]=d&&new I(a,d); CKEDITOR.tools.extend(this,b)};

L.prototype={getContents:function(a){return z(this.contents,a)},getButton:function(a){return z(this.buttons,a)},addContents:function(a,b){return 
A(this.contents,a,b)},addButton:function(a,b){return 
A(this.buttons,a,b)},removeContents:function(a){B(this.contents,a)},removeButton:function(a){B(this.buttons,a)}}; I.prototype={get:function(a){return 
z(this.elements,a,"children")},add:function(a,b){return A(this.elements,a,b,"children")},remove:function(a){B(this.elements,a,"children")}}; var F,w={},q,s= 
{},M=function(a){var b=a.data.$.ctrlKey||a.data.$.metaKey,c=a.data.$.altKey,e=a.data.$.shiftKey,d=String.fromCharCode(a.data.$.keyCode); 
if((b=s[(b?"CTRL+":"")+(c?"ALT+":"")+(e?"SHIFT+":"")+d])&&b.length)b=b[b.length-1],b.keydown&&b.keydown.call(b.uiElement,b.dialog,b.key),a.data.preventDefault()},N=function(a){var 
b=a.data.$.ctrlKey||a.data.$.metaKey,c=a.data.$.altKey,e=a.data.$.shiftKey,d=String.fromCharCode(a.data.$.keyCode); 
if((b=s[(b?"CTRL+":"")+(c?"ALT+":"")+(e?"SHIFT+":"")+d])&&b.length)b=b[b.length- 
1],b.keyup&&(b.keyup.call(b.uiElement,b.dialog,b.key),a.data.preventDefault())},O=function(a,b,c,e,d){(s[c]||(s[c]=[])).push({uiElement:a,dialog:b,key:c,keyup:d||a.accessKeyUp,keydown:e||a.accessKeyDown})},X=function(a){for(var 
b in s){for(var c=s[b],e=c.length-1; 0<=e; e--)(c[e].dialog==a||c[e].uiElement==a)&&c.splice(e,1); 0===c.length&&delete 
s[b]}},Z=function(a,b){a._.accessKeyMap[b]&&a.selectPage(a._.accessKeyMap[b])},Y=function(){}; (function(){CKEDITOR.ui.dialog={uiElement:function(a,b,c,e,d,g, 
f){if(!(4>arguments.length)){var h=(e.call?e(b):e)||"div",m=["<",h," 
"],k=(d&&d.call?d(b):d)||{},i=(g&&g.call?g(b):g)||{},o=(f&&f.call?f.call(this,a,b):f)||"",j=this.domId=i.id||CKEDITOR.tools.getNextId()+"_uiElement"; 
this.id=b.id; b.requiredContent&&!a.getParentEditor().filter.check(b.requiredContent)&&(k.display="none",this.notAllowed=!0); i.id=j; var n={}; 
b.type&&(n["cke_dialog_ui_"+b.type]=1); b.className&&(n[b.className]=1); b.disabled&&(n.cke_disabled=1); for(var 
l=i["class"]&&i["class"].split?i["class"].split(" "): [],j=0; j<l.length; j++)l[j]&&(n[l[j]]=1); l=[]; for(j in n)l.push(j); i["class"]=l.join(" "); 
b.title&&(i.title=b.title); n=(b.style||"").split("; "); b.align&&(l=b.align,k["margin-left"]="left"==l?0:"auto",k["margin-right"]="right"==l?0:"auto"); for(j 
in k)n.push(j+":"+k[j]); b.hidden&&n.push("display:none"); for(j=n.length-1; 0<=j; j--)""===n[j]&&n.splice(j,1); 0<n.length&&(i.style=(i.style?i.style+";
 ":"")+n.join(";
 ")); for(j in i)m.push(j+'="'+CKEDITOR.tools.htmlEncode(i[j])+'" '); m.push(">",o,"</",h,">");

c.push(m.join("")); (this._||(this._={})).dialog=a; "boolean"==typeof b.isChanged&&(this.isChanged=function(){return b.isChanged}); "function"==typeof 
b.isChanged&&(this.isChanged=b.isChanged); "function"==typeof b.setValue&&(this.setValue=CKEDITOR.tools.override(this.setValue,function(a){return 
function(c){a.call(this,b.setValue.call(this,c))}})); "function"==typeof b.getValue&&(this.getValue=CKEDITOR.tools.override(this.getValue,function(a){return 
function(){return b.getValue.call(this,a.call(this))}}));

CKEDITOR.event.implementOn(this); this.registerEvents(b); this.accessKeyUp&&(this.accessKeyDown&&b.accessKey)&&O(this,a,"CTRL+"+b.accessKey); var p=this; 
a.on("load",function(){var b=p.getInputElement(); if(b){var c=p.type in{checkbox:1,ratio:1}&&CKEDITOR.env.ie&&CKEDITOR.env.version<8?"cke_dialog_ui_focused":""; 
b.on("focus",function(){a._.tabBarMode=false; a._.hasFocus=true; p.fire("focus"); c&&this.addClass(c)}); b.on("blur",function(){p.fire("blur"); 
c&&this.removeClass(c)})}}); CKEDITOR.tools.extend(this, b); 
this.keyboardFocusable&&(this.tabIndex=b.tabIndex||0,this.focusIndex=a._.focusList.push(this)-1,this.on("focus",function(){a._.currentFocusIndex=p.focusIndex}))}},hbox:function(a,b,c,e,d){if(!(4>arguments.length)){this._||(this._={}); 
var g=this._.children=b,f=d&&d.widths||null,h=d&&d.height||null,m,k={role:"presentation"}; d&&d.align&&(k.align=d.align); 
CKEDITOR.ui.dialog.uiElement.call(this,a,d||{type:"hbox"},e,"table",{},k,function(){var a=['<tbody><tr class="cke_dialog_ui_hbox">']; for(m=0; m<c.length; 
m++){var b= "cke_dialog_ui_hbox_child",e=[]; 0===m&&(b="cke_dialog_ui_hbox_first"); m==c.length-1&&(b="cke_dialog_ui_hbox_last"); a.push('<td class="',b,'" 
role="presentation" '); f?f[m]&&e.push("width:"+r(f[m])):e.push("width:"+Math.floor(100/c.length)+"%"); h&&e.push("height:"+r(h)); d&&void 
0!=d.padding&&e.push("padding:"+r(d.padding)); CKEDITOR.env.ie&&(CKEDITOR.env.quirks&&g[m].align)&&e.push("text-align:"+g[m].align); 
0<e.length&&a.push('style="'+e.join(";
 ")+'" '); a.push(">",c[m],"</td>")}a.push("</tr></tbody>");

return a.join("")})}},vbox:function(a,b,c,e,d){if(!(3>arguments.length)){this._||(this._={}); var g=this._.children=b,f=d&&d.width||null,h=d&&d.heights||null; 
CKEDITOR.ui.dialog.uiElement.call(this,a,d||{type:"vbox"},e,"div",null,{role:"presentation"},function(){var b=['<table role="presentation" cellspacing="0" 
border="0" ']; b.push('style="'); d&&d.expand&&b.push("height:100%; "); b.push("width:"+r(f||"100%"),"; "); CKEDITOR.env.webkit&&b.push("float:none; "); 
b.push('"'); b.push('align="',CKEDITOR.tools.htmlEncode(d&& d.align||("ltr"==a.getParentEditor().lang.dir?"left":"right")),'" '); b.push("><tbody>"); for(var 
e=0; e<c.length; e++){var i=[]; b.push('<tr><td role="presentation" '); f&&i.push("width:"+r(f||"100%")); 
h?i.push("height:"+r(h[e])):d&&d.expand&&i.push("height:"+Math.floor(100/c.length)+"%"); d&&void 0!=d.padding&&i.push("padding:"+r(d.padding)); 
CKEDITOR.env.ie&&(CKEDITOR.env.quirks&&g[e].align)&&i.push("text-align:"+g[e].align); 0<i.length&&b.push('style="',i.join(";
 "),'" '); b.push(' class="cke_dialog_ui_vbox_child">', c[e],"</td></tr>")}b.push("</tbody></table>"); return b.join("")})}}}})(); 
CKEDITOR.ui.dialog.uiElement.prototype={getElement:function(){return CKEDITOR.document.getById(this.domId)},getInputElement:function(){return 
this.getElement()},getDialog:function(){return this._.dialog},setValue:function(a,b){this.getInputElement().setValue(a); !b&&this.fire("change",{value:a}); 
return this},getValue:function(){return this.getInputElement().getValue()},isChanged:function(){return!1},selectParentTab:function(){for(var a= 
this.getInputElement(); (a=a.getParent())&&-1==a.$.className.search("cke_dialog_page_contents"); ); if(!a)return this; a=a.getAttribute("name"); 
this._.dialog._.currentTabId!=a&&this._.dialog.selectPage(a); return this},focus:function(){this.selectParentTab().getInputElement().focus(); return 
this},registerEvents:function(a){var b=/^on([A-Z]\w+)/,c,e=function(a,b,c,d){b.on("load",function(){a.getInputElement().on(c,d,a)})},d; for(d in 
a)if(c=d.match(b))this.eventProcessors[d]?this.eventProcessors[d].call(this, this._.dialog,a[d]):e(this,this._.dialog,c[1].toLowerCase(),a[d]); return 
this},eventProcessors:{onLoad:function(a,b){a.on("load",b,this)},onShow:function(a,b){a.on("show",b,this)},onHide:function(a,b){a.on("hide",b,this)}},accessKeyDown:function(){this.focus()},accessKeyUp:function(){},disable:function(){var 
a=this.getElement(); this.getInputElement().setAttribute("disabled","true"); a.addClass("cke_disabled")},enable:function(){var a=this.getElement(); 
this.getInputElement().removeAttribute("disabled");

a.removeClass("cke_disabled")},isEnabled:function(){return!this.getElement().hasClass("cke_disabled")},isVisible:function(){return 
this.getInputElement().isVisible()},isFocusable:function(){return!this.isEnabled()||!this.isVisible()?!1:!0}}; 
CKEDITOR.ui.dialog.hbox.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{getChild:function(a){if(1>arguments.length)return 
this._.children.concat(); a.splice||(a=[a]); return 2>a.length?this._.children[a[0]]:this._.children[a[0]]&&this._.children[a[0]].getChild? 
this._.children[a[0]].getChild(a.slice(1,a.length)):null}},!0); CKEDITOR.ui.dialog.vbox.prototype=new CKEDITOR.ui.dialog.hbox; (function(){var 
a={build:function(a,c,e){for(var d=c.children,g,f=[],h=[],m=0; m<d.length&&(g=d[m]); m++){var k=[]; f.push(k); 
h.push(CKEDITOR.dialog._.uiElementBuilders[g.type].build(a,g,k))}return new CKEDITOR.ui.dialog[c.type](a,h,f,e,c)}}; CKEDITOR.dialog.addUIElement("hbox",a); 
CKEDITOR.dialog.addUIElement("vbox",a)})(); CKEDITOR.dialogCommand=function(a,b){this.dialogName=a;

CKEDITOR.tools.extend(this,b,!0)}; CKEDITOR.dialogCommand.prototype={exec:function(a){a.openDialog(this.dialogName)},canUndo:!1,editorFocus:1}; (function(){var 
a=/^([a]|[^a])+$/,b=/^\d*$/,c=/^\d*(?:\.\d+)?$/,e=/^(((\d*(\.\d+))|(\d*))(px|\%)?)?$/,d=/^(((\d*(\.\d+))|(\d*))(px|em|ex|in|cm|mm|pt|pc|\%)?)?$/i,g=/^(\s*[\w-]+\s*:\s*[^:; 
]+(?:;
|$))*$/;
CKEDITOR.VALIDATE_OR=1; CKEDITOR.VALIDATE_AND=2; CKEDITOR.dialog.validate={functions:function(){var a=arguments; return function(){var 
b=this&&this.getValue?this.getValue(): a[0],c=void 0,d=CKEDITOR.VALIDATE_AND,e=[],g; for(g=0; g<a.length; g++)if("function"==typeof a[g])e.push(a[g]); else 
break; g<a.length&&"string"==typeof a[g]&&(c=a[g],g++); g<a.length&&"number"==typeof a[g]&&(d=a[g]); var j=d==CKEDITOR.VALIDATE_AND?!0:!1; for(g=0; g<e.length; 
g++)j=d==CKEDITOR.VALIDATE_AND?j&&e[g](b):j||e[g](b); return!j?c:!0}},regex:function(a,b){return function(c){c=this&&this.getValue?this.getValue():c; 
return!a.test(c)?b:!0}},notEmpty:function(b){return this.regex(a,b)},integer:function(a){return this.regex(b, a)},number:function(a){return 
this.regex(c,a)},cssLength:function(a){return this.functions(function(a){return d.test(CKEDITOR.tools.trim(a))},a)},htmlLength:function(a){return 
this.functions(function(a){return e.test(CKEDITOR.tools.trim(a))},a)},inlineStyle:function(a){return this.functions(function(a){return 
g.test(CKEDITOR.tools.trim(a))},a)},equals:function(a,b){return this.functions(function(b){return b==a},b)},notEqual:function(a,b){return 
this.functions(function(b){return b!=a},b)}}; CKEDITOR.on("instanceDestroyed", function(a){if(CKEDITOR.tools.isEmpty(CKEDITOR.instances)){for(var b; 
b=CKEDITOR.dialog._.currentTop; )b.hide(); for(var c in w)w[c].remove(); w={}}var a=a.editor._.storedDialogs,d; for(d in a)a[d].destroy()})})(); 
CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{openDialog:function(a,b){var c=null,e=CKEDITOR.dialog._.dialogDefinitions[a]; 
null===CKEDITOR.dialog._.currentTop&&J(this); if("function"==typeof e)c=this._.storedDialogs||(this._.storedDialogs={}),c=c[a]||(c[a]=new 
CKEDITOR.dialog(this,a)),b&&b.call(c, c),c.show(); else{if("failed"==e)throw K(this),Error('[CKEDITOR.dialog.openDialog] Dialog "'+a+'" failed when loading 
definition.'); "string"==typeof e&&CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(e),function(){"function"!=typeof 
CKEDITOR.dialog._.dialogDefinitions[a]&&(CKEDITOR.dialog._.dialogDefinitions[a]="failed"); this.openDialog(a,b)},this,0,1)}CKEDITOR.skin.loadPart("dialog"); 
return c}})})();

CKEDITOR.plugins.add("dialog",{requires:"dialogui",init:function(t){t.on("doubleclick",function(u){u.data.dialog&&t.openDialog(u.data.dialog)},null,null,999)}}); 
CKEDITOR.plugins.add("about",{requires:"dialog",init:function(a){var b=a.addCommand("about",new CKEDITOR.dialogCommand("about")); b.modes={wysiwyg:1,source:1}; 
b.canUndo=!1; b.readOnly=1; a.ui.addButton&&a.ui.addButton("About",{label:a.lang.about.title,command:"about",toolbar:"about"}); 
CKEDITOR.dialog.add("about",this.path+"dialogs/about.js")}}); CKEDITOR.plugins.add("basicstyles",{init:function(c){var e=0,d=function(g,d,b,a){if(a){var a=new 
CKEDITOR.style(a),f=h[b]; f.unshift(a); c.attachStyleStateChange(a,function(a){!c.readOnly&&c.getCommand(b).setState(a)}); c.addCommand(b,new 
CKEDITOR.styleCommand(a,{contentForms:f})); 
c.ui.addButton&&c.ui.addButton(g,{label:d,command:b,toolbar:"basicstyles,"+(e+=10)})}},h={bold:["strong","b",["span",function(a){a=a.styles["font-weight"]; 
return"bold"==a||700<=+a}]],italic:["em","i",["span",function(a){return"italic"== 
a.styles["font-style"]}]],underline:["u",["span",function(a){return"underline"==a.styles["text-decoration"]}]],strike:["s","strike",["span",function(a){return"line-through"==a.styles["text-decoration"]}]],subscript:["sub"],superscript:["sup"]},b=c.config,a=c.lang.basicstyles; 
d("Bold",a.bold,"bold",b.coreStyles_bold); d("Italic",a.italic,"italic",b.coreStyles_italic); d("Underline",a.underline,"underline",b.coreStyles_underline); 
d("Strike",a.strike,"strike",b.coreStyles_strike); d("Subscript",a.subscript, "subscript",b.coreStyles_subscript); 
d("Superscript",a.superscript,"superscript",b.coreStyles_superscript); 
c.setKeystroke([[CKEDITOR.CTRL+66,"bold"],[CKEDITOR.CTRL+73,"italic"],[CKEDITOR.CTRL+85,"underline"]])}}); 
CKEDITOR.config.coreStyles_bold={element:"strong",overrides:"b"}; CKEDITOR.config.coreStyles_italic={element:"em",overrides:"i"}; 
CKEDITOR.config.coreStyles_underline={element:"u"}; CKEDITOR.config.coreStyles_strike={element:"s",overrides:"strike"}; 
CKEDITOR.config.coreStyles_subscript={element:"sub"};

CKEDITOR.config.coreStyles_superscript={element:"sup"}; (function(){function v(b){function a(){var e=b.editable(); 
e.on(p,function(b){(!CKEDITOR.env.ie||!n)&&u(b)}); 
CKEDITOR.env.ie&&e.on("paste",function(e){q||(g(),e.data.preventDefault(),u(e),h("paste")||b.openDialog("paste"))}); 
CKEDITOR.env.ie&&(e.on("contextmenu",i,null,null,0),e.on("beforepaste",function(b){b.data&&(!b.data.$.ctrlKey&&!b.data.$.shiftKey)&&i()},null,null,0)); 
e.on("beforecut",function(){!n&&j(b)}); var a; e.attachListener(CKEDITOR.env.ie?e:b.document.getDocumentElement(),"mouseup",function(){a= 
setTimeout(function(){r()},0)}); b.on("destroy",function(){clearTimeout(a)}); e.on("keyup",r)}function 
c(e){return{type:e,canUndo:"cut"==e,startDisabled:!0,exec:function(){"cut"==this.type&&j(); var e; var a=this.type; if(CKEDITOR.env.ie)e=h(a); else 
try{e=b.document.$.execCommand(a,!1,null)}catch(d){e=!1}e||alert(b.lang.clipboard[this.type+"Error"]); return e}}}function 
d(){return{canUndo:!1,async:!0,exec:function(b,a){var d=function(a,d){a&&f(a.type,a.dataValue,!!d); b.fire("afterCommandExec",{name:"paste", 
command:c,returnValue:!!a})},c=this; "string"==typeof a?d({type:"auto",dataValue:a},1):b.getClipboardData(d)}}}function g(){q=1; 
setTimeout(function(){q=0},100)}function i(){n=1; setTimeout(function(){n=0},10)}function h(e){var a=b.document,d=a.getBody(),c=!1,j=function(){c=!0}; 
d.on(e,j); (7<CKEDITOR.env.version?a.$:a.$.selection.createRange()).execCommand(e); d.removeListener(e,j); return c}function f(e,a,d){e={type:e}; 
if(d&&!1===b.fire("beforePaste",e)||!a)return!1; e.dataValue=a; return b.fire("paste", e)}function j(){if(CKEDITOR.env.ie&&!CKEDITOR.env.quirks){var 
e=b.getSelection(),a,d,c; 
if(e.getType()==CKEDITOR.SELECTION_ELEMENT&&(a=e.getSelectedElement()))d=e.getRanges()[0],c=b.document.createText(""),c.insertBefore(a),d.setStartBefore(c),d.setEndAfter(a),e.selectRanges([d]),setTimeout(function(){a.getParent()&&(c.remove(),e.selectElement(a))},0)}}function 
l(a,d){var c=b.document,j=b.editable(),l=function(b){b.cancel()},g; if(!c.getById("cke_pastebin")){var i=b.getSelection(),s=i.createBookmarks();

CKEDITOR.env.ie&&i.root.fire("selectionchange"); var k=new CKEDITOR.dom.element((CKEDITOR.env.webkit||j.is("body"))&&!CKEDITOR.env.ie?"body":"div",c); 
k.setAttributes({id:"cke_pastebin","data-cke-temp":"1"}); var f=0,c=c.getWindow(); 
CKEDITOR.env.webkit?(j.append(k),k.addClass("cke_editable"),j.is("body")||(f="static"!=j.getComputedStyle("position")?j:CKEDITOR.dom.element.get(j.$.offsetParent),f=f.getDocumentPosition().y)):j.getAscendant(CKEDITOR.env.ie?"body":"html",1).append(k); 
k.setStyles({position:"absolute", 
top:c.getScrollPosition().y-f+10+"px",width:"1px",height:Math.max(1,c.getViewPaneSize().height-20)+"px",overflow:"hidden",margin:0,padding:0}); 
CKEDITOR.env.safari&&k.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select","text")); 
(f=k.getParent().isReadOnly())?(k.setOpacity(0),k.setAttribute("contenteditable",!0)):k.setStyle("ltr"==b.config.contentsLangDirection?"left":"right","-1000px"); 
b.on("selectionChange",l,null,null,0); if(CKEDITOR.env.webkit||CKEDITOR.env.gecko)g=j.once("blur",l,null,null,-100);

f&&k.focus(); f=new CKEDITOR.dom.range(k); f.selectNodeContents(k); var h=f.select(); CKEDITOR.env.ie&&(g=j.once("blur",function(){b.lockSelection(h)})); var 
m=CKEDITOR.document.getWindow().getScrollPosition().y; setTimeout(function(){if(CKEDITOR.env.webkit)CKEDITOR.document.getBody().$.scrollTop=m; 
g&&g.removeListener(); CKEDITOR.env.ie&&j.focus(); i.selectBookmarks(s); k.remove(); var a; 
if(CKEDITOR.env.webkit&&(a=k.getFirst())&&a.is&&a.hasClass("Apple-style-span"))k=a; b.removeListener("selectionChange",l);

d(k.getHtml())},0)}}function s(){if(CKEDITOR.env.ie){b.focus(); g(); var a=b.focusManager; a.lock(); if(b.editable().fire(p)&&!h("paste"))return a.unlock(),!1; 
a.unlock()}else try{if(b.editable().fire(p)&&!b.document.$.execCommand("Paste",!1,null))throw 0;
}catch(d){return!1}return!0}function o(a){if("wysiwyg"==b.mode)switch(a.data.keyCode){case CKEDITOR.CTRL+86:case CKEDITOR.SHIFT+45:a=b.editable();
g(); !CKEDITOR.env.ie&&a.fire("beforepaste"); break; case CKEDITOR.CTRL+88:case CKEDITOR.SHIFT+46:b.fire("saveSnapshot"), 
setTimeout(function(){b.fire("saveSnapshot")},50)}}function u(a){var d={type:"auto"},c=b.fire("beforePaste",d); 
l(a,function(b){b=b.replace(/<span[^>]+data-cke-bookmark[^<]*?<\/span>/ig,""); c&&f(d.type,b,0,1)})}function r(){if("wysiwyg"==b.mode){var a=m("paste"); 
b.getCommand("cut").setState(m("cut")); b.getCommand("copy").setState(m("copy")); b.getCommand("paste").setState(a); b.fire("pasteState",a)}}function 
m(a){if(t&&a in{paste:1,cut:1})return CKEDITOR.TRISTATE_DISABLED; if("paste"==a)return CKEDITOR.TRISTATE_OFF;

var a=b.getSelection(),d=a.getRanges(); return 
a.getType()==CKEDITOR.SELECTION_NONE||1==d.length&&d[0].collapsed?CKEDITOR.TRISTATE_DISABLED:CKEDITOR.TRISTATE_OFF}var 
n=0,q=0,t=0,p=CKEDITOR.env.ie?"beforepaste":"paste"; (function(){b.on("key",o); b.on("contentDom",a); 
b.on("selectionChange",function(b){t=b.data.selection.getRanges()[0].checkReadOnly(); r()}); 
b.contextMenu&&b.contextMenu.addListener(function(b,a){t=a.getRanges()[0].checkReadOnly(); return{cut:m("cut"),copy:m("copy"),paste:m("paste")}})})();

(function(){function a(d,c,j,e,l){var g=b.lang.clipboard[c]; b.addCommand(c,j); b.ui.addButton&&b.ui.addButton(d,{label:g,command:c,toolbar:"clipboard,"+e}); 
b.addMenuItems&&b.addMenuItem(c,{label:g,command:c,group:"clipboard",order:l})}a("Cut","cut",c("cut"),10,1); a("Copy","copy",c("copy"),20,4); 
a("Paste","paste",d(),30,8)})(); b.getClipboardData=function(a,d){function c(a){a.removeListener(); a.cancel(); d(a.data)}function j(a){a.removeListener(); 
a.cancel(); i=!0; d({type:f,dataValue:a.data})}function l(){this.customTitle= a&&a.title}var g=!1,f="auto",i=!1; d||(d=a,a=null); b.on("paste",c,null,null,0); 
b.on("beforePaste",function(a){a.removeListener(); g=true; f=a.data.type},null,null,1E3); 
!1===s()&&(b.removeListener("paste",c),g&&b.fire("pasteDialog",l)?(b.on("pasteDialogCommit",j),b.on("dialogHide",function(a){a.removeListener(); 
a.data.removeListener("pasteDialogCommit",j); setTimeout(function(){i||d(null)},10)})):d(null))}}function 
w(b){if(CKEDITOR.env.webkit){if(!b.match(/^[^<]*$/g)&&!b.match(/^(<div><br( ?\/)?><\/div>|<div>[^<]*<\/div>)*$/gi))return"html"}else 
if(CKEDITOR.env.ie){if(!b.match(/^([^<]|<br( ?\/)?>)*$/gi)&& !b.match(/^(<p>([^<]|<br( ?\/)?>)*<\/p>|(\r\n))*$/gi))return"html"}else 
if(CKEDITOR.env.gecko){if(!b.match(/^([^<]|<br( ?\/)?>)*$/gi))return"html"}else return"html"; return"htmlifiedtext"}function x(b,a){function c(a){return 
CKEDITOR.tools.repeat("</p><p>",~~(a/2))+(1==a%2?"<br>":"")}a=a.replace(/\s+/g," ").replace(/> +</g,"><").replace(/<br ?\/>/gi,"<br>"); 
a=a.replace(/<\/?[A-Z]+>/g,function(a){return a.toLowerCase()}); if(a.match(/^[^<]$/))return a; 
CKEDITOR.env.webkit&&-1<a.indexOf("<div>")&&(a=a.replace(/^(<div>(<br>|)<\/div>)(?!$|(<div>(<br>|)<\/div>))/g, 
"<br>").replace(/^(<div>(<br>|)<\/div>){2}(?!$)/g,"<div></div>"),a.match(/<div>(<br>|)<\/div>/)&&(a="<p>"+a.replace(/(<div>(<br>|)<\/div>)+/g,function(a){return 
c(a.split("</div><div>").length+1)})+"</p>"),a=a.replace(/<\/div><div>/g,"<br>"),a=a.replace(/<\/?div>/g,"")); 
CKEDITOR.env.gecko&&b.enterMode!=CKEDITOR.ENTER_BR&&(CKEDITOR.env.gecko&&(a=a.replace(/^<br><br>$/,"<br>")),-1<a.indexOf("<br><br>")&&(a="<p>"+a.replace(/(<br>){2,}/g,function(a){return 
c(a.length/4)})+"</p>")); return o(b,a)}function y(){var b= new 
CKEDITOR.htmlParser.filter,a={blockquote:1,dl:1,fieldset:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,ol:1,p:1,table:1,ul:1},c=CKEDITOR.tools.extend({br:0},CKEDITOR.dtd.$inline),d={p:1,br:1,"cke:br":1},g=CKEDITOR.dtd,i=CKEDITOR.tools.extend({area:1,basefont:1,embed:1,iframe:1,map:1,object:1,param:1},CKEDITOR.dtd.$nonBodyContent,CKEDITOR.dtd.$cdata),h=function(a){delete 
a.name; a.add(new CKEDITOR.htmlParser.text(" "))},f=function(a){for(var b=a,c; (b=b.next)&&b.name&&b.name.match(/^h\d$/); ){c=new 
CKEDITOR.htmlParser.element("cke:br");

c.isEmpty=!0; for(a.add(c); c=b.children.shift(); )a.add(c)}}; b.addRules({elements:{h1:f,h2:f,h3:f,h4:f,h5:f,h6:f,img:function(a){var 
a=CKEDITOR.tools.trim(a.attributes.alt||""),b=" "; a&&!a.match(/(^http|\.(jpe?g|gif|png))/i)&&(b=" ["+a+"] "); return new 
CKEDITOR.htmlParser.text(b)},td:h,th:h,$:function(b){var f=b.name,h; if(i[f])return!1; b.attributes={}; if("br"==f)return b; if(a[f])b.name="p"; else 
if(c[f])delete b.name; else if(g[f]){h=new CKEDITOR.htmlParser.element("cke:br"); h.isEmpty=!0; if(CKEDITOR.dtd.$empty[f])return h;

b.add(h,0); h=h.clone(); h.isEmpty=!0; b.add(h); delete b.name}d[b.name]||delete b.name; return b}}},{applyToAll:!0}); return b}function z(b,a,c){var a=new 
CKEDITOR.htmlParser.fragment.fromHtml(a),d=new CKEDITOR.htmlParser.basicWriter; a.writeHtml(d,c); var a=d.getHtml(),a=a.replace(/\s*(<\/?[a-z:]+ 
?\/?>)\s*/g,"$1").replace(/(<cke:br \/>){2,}/g,"<cke:br />").replace(/(<cke:br \/>)(<\/?p>|<br \/>)/g,"$2").replace(/(<\/?p>|<br \/>)(<cke:br 
\/>)/g,"$1").replace(/<(cke:)?br( \/)?>/g,"<br>").replace(/<p><\/p>/g, ""),g=0,a=a.replace(/<\/?p>/g,function(a){if("<p>"==a){if(1<++g)return"</p><p>"}else 
if(0<--g)return"</p><p>"; return a}).replace(/<p><\/p>/g,""); return o(b,a)}function 
o(b,a){b.enterMode==CKEDITOR.ENTER_BR?a=a.replace(/(<\/p><p>)+/g,function(a){return 
CKEDITOR.tools.repeat("<br>",2*(a.length/7))}).replace(/<\/?p>/g,""):b.enterMode==CKEDITOR.ENTER_DIV&&(a=a.replace(/<(\/)?p>/g,"<$1div>")); return 
a}CKEDITOR.plugins.add("clipboard",{requires:"dialog",init:function(b){var a; v(b); CKEDITOR.dialog.add("paste", CKEDITOR.getUrl(this.path+"dialogs/paste.js")); 
b.on("paste",function(a){var b=a.data.dataValue,g=CKEDITOR.dtd.$block; -1<b.indexOf("Apple-")&&(b=b.replace(/<span class="Apple-converted-space">&nbsp; 
<\/span>/gi," "),"html"!=a.data.type&&(b=b.replace(/<span class="Apple-tab-span"[^>]*>([^<]*)<\/span>/gi,function(a,b){return b.replace(/\t/g,"&nbsp; &nbsp;
 &nbsp; ")})),-1<b.indexOf('<br class="Apple-interchange-newline">')&&(a.data.startsWithEOL=1,a.data.preSniffing="html",b=b.replace(/<br 
class="Apple-interchange-newline">/, "")),b=b.replace(/(<[^>]+) class="Apple-[^"]*"/gi,"$1")); if(b.match(/^<[^<]+cke_(editable|contents)/i)){var i,h,f=new 
CKEDITOR.dom.element("div"); for(f.setHtml(b); 
1==f.getChildCount()&&(i=f.getFirst())&&i.type==CKEDITOR.NODE_ELEMENT&&(i.hasClass("cke_editable")||i.hasClass("cke_contents")); )f=h=i; 
h&&(b=h.getHtml().replace(/<br>$/i,""))}CKEDITOR.env.ie?b=b.replace(/^&nbsp; (?: |\r\n)?<(\w+)/g,function(b,d){if(d.toLowerCase()in 
g){a.data.preSniffing="html"; return"<"+d}return b}):CKEDITOR.env.webkit? b=b.replace(/<\/(\w+)><div><br><\/div>$/,function(b,d){if(d in 
g){a.data.endsWithEOL=1; return"</"+d+">"}return b}):CKEDITOR.env.gecko&&(b=b.replace(/(\s)<br>$/,"$1")); a.data.dataValue=b},null,null,3); 
b.on("paste",function(c){var c=c.data,d=c.type,g=c.dataValue,i,h=b.config.clipboard_defaultContentType||"html"; i="html"==d||"html"==c.preSniffing?"html":w(g); 
"htmlifiedtext"==i?g=x(b.config,g):"text"==d&&"html"==i&&(g=z(b.config,g,a||(a=y(b)))); c.startsWithEOL&&(g='<br data-cke-eol="1">'+g); c.endsWithEOL&& (g+='<br 
data-cke-eol="1">'); "auto"==d&&(d="html"==i||"html"==h?"html":"text"); c.type=d; c.dataValue=g; delete c.preSniffing; delete c.startsWithEOL; delete 
c.endsWithEOL},null,null,6); b.on("paste",function(a){a=a.data; b.insertHtml(a.dataValue,a.type); 
setTimeout(function(){b.fire("afterPaste")},0)},null,null,1E3); b.on("pasteDialog",function(a){setTimeout(function(){b.openDialog("paste",a.data)},0)})}})})(); 
(function(){var c='<a id="{id}" class="cke_button cke_button__{name} cke_button_{state} {cls}"'+(CKEDITOR.env.gecko&&!CKEDITOR.env.hc?"":" 
href=\"javascript:void('{titleJs}')\"")+' title="{title}" tabindex="-1" hidefocus="true" role="button" aria-labelledby="{id}_label" aria-haspopup="{hasArrow}" 
aria-disabled="{ariaDisabled}"'; CKEDITOR.env.gecko&&CKEDITOR.env.mac&&(c+=' onkeypress="return false; "'); CKEDITOR.env.gecko&&(c+=' onblur="this.style.cssText 
= this.style.cssText; "'); var c=c+(' onkeydown="return CKEDITOR.tools.callFunction({keydownFn},event); " onfocus="return 
CKEDITOR.tools.callFunction({focusFn},event); " '+ (CKEDITOR.env.ie?'onclick="return false; " 
onmouseup':"onclick")+'="CKEDITOR.tools.callFunction({clickFn},this); return false; "><span class="cke_button_icon cke_button__{iconName}_icon" 
style="{style}"'),c=c+'>&nbsp; </span><span id="{id}_label" class="cke_button_label cke_button__{name}_label" 
aria-hidden="false">{label}</span>{arrowHtml}</a>',m=CKEDITOR.addTemplate("buttonArrow",'<span class="cke_button_arrow">'+(CKEDITOR.env.hc?"&#9660; 
":"")+"</span>"),n=CKEDITOR.addTemplate("button",c); CKEDITOR.plugins.add("button", 
{beforeInit:function(a){a.ui.addHandler(CKEDITOR.UI_BUTTON,CKEDITOR.ui.button.handler)}}); CKEDITOR.UI_BUTTON="button"; 
CKEDITOR.ui.button=function(a){CKEDITOR.tools.extend(this,a,{title:a.label,click:a.click||function(b){b.execCommand(a.command)}}); this._={}}; 
CKEDITOR.ui.button.handler={create:function(a){return new CKEDITOR.ui.button(a)}}; CKEDITOR.ui.button.prototype={render:function(a,b){var 
c=CKEDITOR.env,i=this._.id=CKEDITOR.tools.getNextId(),e="",f=this.command,k; this._.editor=a; var d={id:i,button:this, 
editor:a,focus:function(){CKEDITOR.document.getById(i).focus()},execute:function(){this.button.click(a)},attach:function(a){this.button.attach(a)}},o=CKEDITOR.tools.addFunction(function(a){if(d.onkey)return 
a=new CKEDITOR.dom.event(a),!1!==d.onkey(d,a.getKeystroke())}),p=CKEDITOR.tools.addFunction(function(a){var b; d.onfocus&&(b=!1!==d.onfocus(d,new 
CKEDITOR.dom.event(a))); return b}),l=0; d.clickFn=k=CKEDITOR.tools.addFunction(function(){l&&(a.unlockSelection(1),l=0); d.execute(); c.iOS&&a.focus()});

if(this.modes){var j={},g=function(){var b=a.mode; b&&(b=this.modes[b]?void 
0!=j[b]?j[b]:CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,b=a.readOnly&&!this.readOnly?CKEDITOR.TRISTATE_DISABLED:b,this.setState(b),this.refresh&&this.refresh())}; 
a.on("beforeModeUnload",function(){a.mode&&this._.state!=CKEDITOR.TRISTATE_DISABLED&&(j[a.mode]=this._.state)},this); a.on("activeFilterChange",g,this); 
a.on("mode",g,this); !this.readOnly&&a.on("readOnly",g,this)}else if(f&&(f=a.getCommand(f)))f.on("state",function(){this.setState(f.state)}, 
this),e+=f.state==CKEDITOR.TRISTATE_ON?"on":f.state==CKEDITOR.TRISTATE_DISABLED?"disabled":"off"; if(this.directional)a.on("contentDirChanged",function(b){var 
c=CKEDITOR.document.getById(this._.id),d=c.getFirst(),b=b.data; b!=a.lang.dir?c.addClass("cke_"+b):c.removeClass("cke_ltr").removeClass("cke_rtl"); 
d.setAttribute("style",CKEDITOR.skin.getIconStyle(h,"rtl"==b,this.icon,this.iconOffset))},this); f||(e+="off"); var h=g=this.name||this.command; 
this.icon&&!/\./.test(this.icon)&&(h=this.icon,this.icon= null); 
e={id:i,name:g,iconName:h,label:this.label,cls:this.className||"",state:e,ariaDisabled:"disabled"==e?"true":"false",title:this.title,titleJs:c.gecko&&!c.hc?"":(this.title||"").replace("'",""),hasArrow:this.hasArrow?"true":"false",keydownFn:o,focusFn:p,clickFn:k,style:CKEDITOR.skin.getIconStyle(h,"rtl"==a.lang.dir,this.icon,this.iconOffset),arrowHtml:this.hasArrow?m.output():""}; 
n.output(e,b); if(this.onRender)this.onRender(); return d},setState:function(a){if(this._.state==a)return!1; this._.state= a; var 
b=CKEDITOR.document.getById(this._.id); return 
b?(b.setState(a,"cke_button"),a==CKEDITOR.TRISTATE_DISABLED?b.setAttribute("aria-disabled",!0):b.removeAttribute("aria-disabled"),this.hasArrow?(a=a==CKEDITOR.TRISTATE_ON?this._.editor.lang.button.selectedLabel.replace(/%1/g,this.label):this.label,CKEDITOR.document.getById(this._.id+"_label").setText(a)):a==CKEDITOR.TRISTATE_ON?b.setAttribute("aria-pressed",!0):b.removeAttribute("aria-pressed"),!0):!1},getState:function(){return 
this._.state},toFeature:function(a){if(this._.feature)return this._.feature;

var b=this; !this.allowedContent&&(!this.requiredContent&&this.command)&&(b=a.getCommand(this.command)||b); return this._.feature=b}}; 
CKEDITOR.ui.prototype.addButton=function(a,b){this.add(a,CKEDITOR.UI_BUTTON,b)}})(); (function(){function w(a){function d(){for(var 
b=g(),e=CKEDITOR.tools.clone(a.config.toolbarGroups)||n(a),f=0; f<e.length; f++){var k=e[f]; if("/"!=k){"string"==typeof k&&(k=e[f]={name:k}); var i,d=k.groups; 
if(d)for(var h=0; h<d.length; h++)i=d[h],(i=b[i])&&c(k,i); (i=b[k.name])&&c(k,i)}}return e}function g(){var b={},c,f,e; for(c in 
a.ui.items)f=a.ui.items[c],e=f.toolbar||"others",e=e.split(","),f=e[0],e=parseInt(e[1]||-1,10),b[f]||(b[f]=[]),b[f].push({name:c,order:e}); for(f in 
b)b[f]=b[f].sort(function(b, a){return b.order==a.order?0:0>a.order?-1:0>b.order?1:b.order<a.order?-1:1}); return b}function 
c(c,e){if(e.length){c.items?c.items.push(a.ui.create("-")):c.items=[]; for(var f; f=e.shift(); )if(f="string"==typeof 
f?f:f.name,!b||-1==CKEDITOR.tools.indexOf(b,f))(f=a.ui.create(f))&&a.addFeature(f)&&c.items.push(f)}}function h(b){var a=[],e,d,h; for(e=0; e<b.length; 
++e)d=b[e],h={},"/"==d?a.push(d):CKEDITOR.tools.isArray(d)?(c(h,CKEDITOR.tools.clone(d)),a.push(h)):d.items&&(c(h,CKEDITOR.tools.clone(d.items)), 
h.name=d.name,a.push(h)); return a}var b=a.config.removeButtons,b=b&&b.split(","),e=a.config.toolbar; "string"==typeof e&&(e=a.config["toolbar_"+e]); return 
a.toolbar=e?h(e):d()}function n(a){return 
a._.toolbarGroups||(a._.toolbarGroups=[{name:"document",groups:["mode","document","doctools"]},{name:"clipboard",groups:["clipboard","undo"]},{name:"editing",groups:["find","selection","spellchecker"]},{name:"forms"},"/",{name:"basicstyles",groups:["basicstyles","cleanup"]},{name:"paragraph",groups:["list", 
"indent","blocks","align","bidi"]},{name:"links"},{name:"insert"},"/",{name:"styles"},{name:"colors"},{name:"tools"},{name:"others"},{name:"about"}])}var 
u=function(){this.toolbars=[]; this.focusCommandExecuted=!1}; u.prototype.focus=function(){for(var a=0,d; d=this.toolbars[a++]; )for(var g=0,c; c=d.items[g++]; 
)if(c.focus){c.focus(); return}}; var 
x={modes:{wysiwyg:1,source:1},readOnly:1,exec:function(a){a.toolbox&&(a.toolbox.focusCommandExecuted=!0,CKEDITOR.env.ie||CKEDITOR.env.air?setTimeout(function(){a.toolbox.focus()}, 
100):a.toolbox.focus())}}; CKEDITOR.plugins.add("toolbar",{requires:"button",init:function(a){var d,g=function(c,h){var 
b,e="rtl"==a.lang.dir,j=a.config.toolbarGroupCycling,o=e?37:39,e=e?39:37,j=void 0===j||j; switch(h){case 9:case CKEDITOR.SHIFT+9:for(; !b||!b.items.length; 
)if(b=9==h?(b?b.next:c.toolbar.next)||a.toolbox.toolbars[0]:(b?b.previous:c.toolbar.previous)||a.toolbox.toolbars[a.toolbox.toolbars.length-1],b.items.length)for(c=b.items[d?b.items.length-1:0]; 
c&&!c.focus; )(c=d?c.previous:c.next)|| (b=0); c&&c.focus(); return!1; case o:b=c; do b=b.next,!b&&j&&(b=c.toolbar.items[0]); while(b&&!b.focus); 
b?b.focus():g(c,9); return!1; case 40:return 
c.button&&c.button.hasArrow?(a.once("panelShow",function(b){b.data._.panel._.currentBlock.onKeyDown(40)}),c.execute()):g(c,40==h?o:e),!1; case e:case 38:b=c; do 
b=b.previous,!b&&j&&(b=c.toolbar.items[c.toolbar.items.length-1]); while(b&&!b.focus); b?b.focus():(d=1,g(c,CKEDITOR.SHIFT+9),d=0); return!1; case 27:return 
a.focus(),!1; case 13:case 32:return c.execute(), !1}return!0}; a.on("uiSpace",function(c){if(c.data.space==a.config.toolbarLocation){c.removeListener(); 
a.toolbox=new u; var d=CKEDITOR.tools.getNextId(),b=['<span id="',d,'" class="cke_voice_label">',a.lang.toolbar.toolbars,"</span>",'<span 
id="'+a.ui.spaceId("toolbox")+'" class="cke_toolbox" role="group" aria-labelledby="',d,'" onmousedown="return false; 
">'],d=!1!==a.config.toolbarStartupExpanded,e,j; a.config.toolbarCanCollapse&&a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE&&b.push('<span 
class="cke_toolbox_main"'+ (d?">":' style="display:none">')); for(var o=a.toolbox.toolbars,f=w(a),k=0; k<f.length; k++){var i,l=0,r,m=f[k],s; 
if(m)if(e&&(b.push("</span>"),j=e=0),"/"===m)b.push('<span class="cke_toolbar_break"></span>'); else{s=m.items||m; for(var t=0; t<s.length; t++){var p=s[t],n; 
if(p)if(p.type==CKEDITOR.UI_SEPARATOR)j=e&&p; else{n=!1!==p.canGroup; if(!l){i=CKEDITOR.tools.getNextId(); l={id:i,items:[]}; 
r=m.name&&(a.lang.toolbar.toolbarGroups[m.name]||m.name); b.push('<span id="',i,'" class="cke_toolbar"',r?' aria-labelledby="'+ i+'_label"':"",' 
role="toolbar">'); r&&b.push('<span id="',i,'_label" class="cke_voice_label">',r,"</span>"); b.push('<span class="cke_toolbar_start"></span>'); var 
q=o.push(l)-1; 0<q&&(l.previous=o[q-1],l.previous.next=l)}n?e||(b.push('<span class="cke_toolgroup" role="presentation">'),e=1):e&&(b.push("</span>"),e=0); 
i=function(c){c=c.render(a,b); q=l.items.push(c)-1; if(q>0){c.previous=l.items[q-1]; c.previous.next=c}c.toolbar=l; c.onkey=g; 
c.onfocus=function(){a.toolbox.focusCommandExecuted||a.focus()}};

j&&(i(j),j=0); i(p)}}e&&(b.push("</span>"),j=e=0); l&&b.push('<span class="cke_toolbar_end"></span></span>')}}a.config.toolbarCanCollapse&&b.push("</span>"); 
if(a.config.toolbarCanCollapse&&a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE){var v=CKEDITOR.tools.addFunction(function(){a.execCommand("toolbarCollapse")}); 
a.on("destroy",function(){CKEDITOR.tools.removeFunction(v)}); a.addCommand("toolbarCollapse",{readOnly:1,exec:function(b){var 
a=b.ui.space("toolbar_collapser"),c=a.getPrevious(),e=b.ui.space("contents"), 
d=c.getParent(),f=parseInt(e.$.style.height,10),h=d.$.offsetHeight,g=a.hasClass("cke_toolbox_collapser_min"); 
g?(c.show(),a.removeClass("cke_toolbox_collapser_min"),a.setAttribute("title",b.lang.toolbar.toolbarCollapse)):(c.hide(),a.addClass("cke_toolbox_collapser_min"),a.setAttribute("title",b.lang.toolbar.toolbarExpand)); 
a.getFirst().setText(g?"▲":"◀"); e.setStyle("height",f-(d.$.offsetHeight-h)+"px"); b.fire("resize")},modes:{wysiwyg:1,source:1}}); 
a.setKeystroke(CKEDITOR.ALT+(CKEDITOR.env.ie||CKEDITOR.env.webkit? 189:109),"toolbarCollapse"); b.push('<a 
title="'+(d?a.lang.toolbar.toolbarCollapse:a.lang.toolbar.toolbarExpand)+'" id="'+a.ui.spaceId("toolbar_collapser")+'" tabIndex="-1" 
class="cke_toolbox_collapser'); d||b.push(" cke_toolbox_collapser_min"); b.push('" onclick="CKEDITOR.tools.callFunction('+v+')">','<span 
class="cke_arrow">&#9650; </span>',"</a>")}b.push("</span>"); c.data.html+=b.join("")}}); a.on("destroy",function(){if(this.toolbox){var a,d=0,b,e,g; 
for(a=this.toolbox.toolbars; d<a.length; d++){e=a[d].items;

for(b=0; b<e.length; b++)g=e[b],g.clickFn&&CKEDITOR.tools.removeFunction(g.clickFn),g.keyDownFn&&CKEDITOR.tools.removeFunction(g.keyDownFn)}}}); 
a.on("uiReady",function(){var c=a.ui.space("toolbox"); c&&a.focusManager.add(c,1)}); a.addCommand("toolbarFocus",x); 
a.setKeystroke(CKEDITOR.ALT+121,"toolbarFocus"); a.ui.add("-",CKEDITOR.UI_SEPARATOR,{}); 
a.ui.addHandler(CKEDITOR.UI_SEPARATOR,{create:function(){return{render:function(a,d){d.push('<span class="cke_toolbar_separator" role="separator"></span>'); 
return{}}}}})}});

CKEDITOR.ui.prototype.addToolbarGroup=function(a,d,g){var c=n(this.editor),h=0===d,b={name:a}; if(g){if(g=CKEDITOR.tools.search(c,function(a){return 
a.name==g})){!g.groups&&(g.groups=[]); if(d&&(d=CKEDITOR.tools.indexOf(g.groups,d),0<=d)){g.groups.splice(d+1,0,a); 
return}h?g.groups.splice(0,0,a):g.groups.push(a); return}d=null}d&&(d=CKEDITOR.tools.indexOf(c,function(a){return a.name==d})); 
h?c.splice(0,0,a):"number"==typeof d?c.splice(d+1,0,b):c.push(a)}})(); CKEDITOR.UI_SEPARATOR="separator";

CKEDITOR.config.toolbarLocation="top"; (function(){function m(b,d,a){a=b.config.forceEnterMode||a; 
"wysiwyg"==b.mode&&(d||(d=b.activeEnterMode),b.elementPath().isContextFor("p")||(d=CKEDITOR.ENTER_BR,a=1),b.fire("saveSnapshot"),d==CKEDITOR.ENTER_BR?p(b,d,null,a):q(b,d,null,a),b.fire("saveSnapshot"))}function 
r(b){for(var b=b.getSelection().getRanges(!0),d=b.length-1; 0<d; d--)b[d].deleteContents(); return b[0]}function u(b){var 
d=b.startContainer.getAscendant(function(a){return a.type==CKEDITOR.NODE_ELEMENT&&"true"==a.getAttribute("contenteditable")}, !0); if(b.root.equals(d))return b; 
d=new CKEDITOR.dom.range(d); d.moveToRange(b); return 
d}CKEDITOR.plugins.add("enterkey",{init:function(b){b.addCommand("enter",{modes:{wysiwyg:1},editorFocus:!1,exec:function(b){m(b)}}); 
b.addCommand("shiftEnter",{modes:{wysiwyg:1},editorFocus:!1,exec:function(b){m(b,b.activeShiftEnterMode,1)}}); 
b.setKeystroke([[13,"enter"],[CKEDITOR.SHIFT+13,"shiftEnter"]])}}); var v=CKEDITOR.dom.walker.whitespaces(),w=CKEDITOR.dom.walker.bookmark(); 
CKEDITOR.plugins.enterkey={enterBlock:function(b, d,a,h){if(a=a||r(b)){var 
a=u(a),f=a.document,i=a.checkStartOfBlock(),k=a.checkEndOfBlock(),j=b.elementPath(a.startContainer),c=j.block,l=d==CKEDITOR.ENTER_DIV?"div":"p",e; 
if(i&&k){if(c&&(c.is("li")||c.getParent().is("li"))){c.is("li")||(c=c.getParent()); a=c.getParent(); e=a.getParent(); var 
h=!c.hasPrevious(),n=!c.hasNext(),l=b.getSelection(),g=l.createBookmarks(),i=c.getDirection(1),k=c.getAttribute("class"),o=c.getAttribute("style"),m=e.getDirection(1)!=i,b=b.enterMode!=CKEDITOR.ENTER_BR||m||o||k;

if(e.is("li"))if(h||n)c[h?"insertBefore":"insertAfter"](e); else c.breakParent(e); 
else{if(b)if(j.block.is("li")?(e=f.createElement(d==CKEDITOR.ENTER_P?"p":"div"),m&&e.setAttribute("dir",i),o&&e.setAttribute("style",o),k&&e.setAttribute("class",k),c.moveChildren(e)):e=j.block,h||n)e[h?"insertBefore":"insertAfter"](a); 
else c.breakParent(a),e.insertAfter(a); else if(c.appendBogus(!0),h||n)for(; f=c[h?"getFirst":"getLast"](); )f[h?"insertBefore":"insertAfter"](a); else 
for(c.breakParent(a); f=c.getLast(); )f.insertAfter(a);

c.remove()}l.selectBookmarks(g); return}if(c&&c.getParent().is("blockquote")){c.breakParent(c.getParent()); 
c.getPrevious().getFirst(CKEDITOR.dom.walker.invisible(1))||c.getPrevious().remove(); 
c.getNext().getFirst(CKEDITOR.dom.walker.invisible(1))||c.getNext().remove(); a.moveToElementEditStart(c); a.select(); return}}else 
if(c&&c.is("pre")&&!k){p(b,d,a,h); return}if(i=a.splitBlock(l)){d=i.previousBlock; c=i.nextBlock; j=i.wasStartOfBlock; b=i.wasEndOfBlock; 
if(c)g=c.getParent(),g.is("li")&&(c.breakParent(g), c.move(c.getNext(),1)); else 
if(d&&(g=d.getParent())&&g.is("li"))d.breakParent(g),g=d.getNext(),a.moveToElementEditStart(g),d.move(d.getPrevious()); 
if(!j&&!b)c.is("li")&&(e=a.clone(),e.selectNodeContents(c),e=new 
CKEDITOR.dom.walker(e),e.evaluator=function(a){return!(w(a)||v(a)||a.type==CKEDITOR.NODE_ELEMENT&&a.getName()in CKEDITOR.dtd.$inline&&!(a.getName()in 
CKEDITOR.dtd.$empty))},(g=e.next())&&(g.type==CKEDITOR.NODE_ELEMENT&&g.is("ul","ol"))&&(CKEDITOR.env.needsBrFiller?f.createElement("br"):f.createText(" ")).insertBefore(g)), 
c&&a.moveToElementEditStart(c); else{if(d){if(d.is("li")||!s.test(d.getName())&&!d.is("pre"))e=d.clone()}else c&&(e=c.clone()); 
e?h&&!e.is("li")&&e.renameNode(l):g&&g.is("li")?e=g:(e=f.createElement(l),d&&(n=d.getDirection())&&e.setAttribute("dir",n)); if(f=i.elementPath){h=0; 
for(l=f.elements.length; h<l; h++){g=f.elements[h]; if(g.equals(f.block)||g.equals(f.blockLimit))break; 
CKEDITOR.dtd.$removeEmpty[g.getName()]&&(g=g.clone(),e.moveChildren(g),e.append(g))}}e.appendBogus(); e.getParent()||a.insertNode(e);

e.is("li")&&e.removeAttribute("value"); if(CKEDITOR.env.ie&&j&&(!b||!d.getChildCount()))a.moveToElementEditStart(b?d:e),a.select(); 
a.moveToElementEditStart(j&&!b?c:e)}a.select(); a.scrollIntoView()}}},enterBr:function(b,d,a,h){if(a=a||r(b)){var f=a.document,i=a.checkEndOfBlock(),k=new 
CKEDITOR.dom.elementPath(b.getSelection().getStartElement()),j=k.block,c=j&&k.block.getName(); 
!h&&"li"==c?q(b,d,a,h):(!h&&i&&s.test(c)?(i=j.getDirection())?(f=f.createElement("div"),f.setAttribute("dir",i),f.insertAfter(j), 
a.setStart(f,0)):(f.createElement("br").insertAfter(j),CKEDITOR.env.gecko&&f.createText("").insertAfter(j),a.setStartAt(j.getNext(),CKEDITOR.env.ie?CKEDITOR.POSITION_BEFORE_START:CKEDITOR.POSITION_AFTER_START)):(b="pre"==c&&CKEDITOR.env.ie&&8>CKEDITOR.env.version?f.createText("\r"):f.createElement("br"),a.deleteContents(),a.insertNode(b),CKEDITOR.env.needsBrFiller?(f.createText("﻿").insertAfter(b),i&&(j||k.blockLimit).appendBogus(),b.getNext().$.nodeValue="",a.setStartAt(b.getNext(),CKEDITOR.POSITION_AFTER_START)): 
a.setStartAt(b,CKEDITOR.POSITION_AFTER_END)),a.collapse(!0),a.select(),a.scrollIntoView())}}}; var 
t=CKEDITOR.plugins.enterkey,p=t.enterBr,q=t.enterBlock,s=/^h[1-6]$/})(); (function(){function j(a,b){var 
d={},e=[],f={nbsp:" ",shy:"­",gt:">",lt:"<",amp:"&",apos:"'",quot:'"'},a=a.replace(/\b(nbsp|shy|gt|lt|amp|apos|quot)(?:,|$)/g,function(a,h){var c=b?"&"+h+"; 
":f[h]; d[c]=b?f[h]:"&"+h+"; "; e.push(c); return""}); if(!b&&a){var a=a.split(","),c=document.createElement("div"),g; c.innerHTML="&"+a.join("; &")+"; "; 
g=c.innerHTML; c=null; for(c=0; c<g.length; c++){var i=g.charAt(c); d[i]="&"+a[c]+"; "; e.push(i)}}d.regex=e.join(b?"|":""); return 
d}CKEDITOR.plugins.add("entities",{afterInit:function(a){var b= a.config; if(a=(a=a.dataProcessor)&&a.htmlFilter){var d=[]; 
!1!==b.basicEntities&&d.push("nbsp,gt,lt,amp"); 
b.entities&&(d.length&&d.push("quot,iexcl,cent,pound,curren,yen,brvbar,sect,uml,copy,ordf,laquo,not,shy,reg,macr,deg,plusmn,sup2,sup3,acute,micro,para,middot,cedil,sup1,ordm,raquo,frac14,frac12,frac34,iquest,times,divide,fnof,bull,hellip,prime,Prime,oline,frasl,weierp,image,real,trade,alefsym,larr,uarr,rarr,darr,harr,crarr,lArr,uArr,rArr,dArr,hArr,forall,part,exist,empty,nabla,isin,notin,ni,prod,sum,minus,lowast,radic,prop,infin,ang,and,or,cap,cup,int,there4,sim,cong,asymp,ne,equiv,le,ge,sub,sup,nsub,sube,supe,oplus,otimes,perp,sdot,lceil,rceil,lfloor,rfloor,lang,rang,loz,spades,clubs,hearts,diams,circ,tilde,ensp,emsp,thinsp,zwnj,zwj,lrm,rlm,ndash,mdash,lsquo,rsquo,sbquo,ldquo,rdquo,bdquo,dagger,Dagger,permil,lsaquo,rsaquo,euro"), 
b.entities_latin&&d.push("Agrave,Aacute,Acirc,Atilde,Auml,Aring,AElig,Ccedil,Egrave,Eacute,Ecirc,Euml,Igrave,Iacute,Icirc,Iuml,ETH,Ntilde,Ograve,Oacute,Ocirc,Otilde,Ouml,Oslash,Ugrave,Uacute,Ucirc,Uuml,Yacute,THORN,szlig,agrave,aacute,acirc,atilde,auml,aring,aelig,ccedil,egrave,eacute,ecirc,euml,igrave,iacute,icirc,iuml,eth,ntilde,ograve,oacute,ocirc,otilde,ouml,oslash,ugrave,uacute,ucirc,uuml,yacute,thorn,yuml,OElig,oelig,Scaron,scaron,Yuml"),b.entities_greek&&d.push("Alpha,Beta,Gamma,Delta,Epsilon,Zeta,Eta,Theta,Iota,Kappa,Lambda,Mu,Nu,Xi,Omicron,Pi,Rho,Sigma,Tau,Upsilon,Phi,Chi,Psi,Omega,alpha,beta,gamma,delta,epsilon,zeta,eta,theta,iota,kappa,lambda,mu,nu,xi,omicron,pi,rho,sigmaf,sigma,tau,upsilon,phi,chi,psi,omega,thetasym,upsih,piv"), 
b.entities_additional&&d.push(b.entities_additional)); var e=j(d.join(",")),f=e.regex?"["+e.regex+"]":"a^"; delete e.regex; 
b.entities&&b.entities_processNumerical&&(f="[^ -~]|"+f); var f=RegExp(f,"g"),c=function(a){return 
b.entities_processNumerical=="force"||!e[a]?"&#"+a.charCodeAt(0)+"; ":e[a]},g=j("nbsp,gt,lt,amp,shy",!0),i=RegExp(g.regex,"g"),k=function(a){return g[a]}; 
a.addRules({text:function(a){return a.replace(i,k).replace(f,c)}},{applyToAll:!0,excludeNestedEditable:!0})}}})})();

CKEDITOR.config.basicEntities=!0; CKEDITOR.config.entities=!0; CKEDITOR.config.entities_latin=!0; CKEDITOR.config.entities_greek=!0; 
CKEDITOR.config.entities_additional="#39"; (function(){function i(a){var j=a.config,m=a.fire("uiSpace",{space:"top",html:""}).html,p=function(){function 
f(a,c,e){b.setStyle(c,s(e)); b.setStyle("position",a)}function e(a){var b=i.getDocumentPosition(); switch(a){case "top":f("absolute","top",b.y-n-o); break; case 
"pin":f("fixed","top",t); break; case "bottom":f("absolute","top",b.y+(c.height||c.bottom-c.top)+o)}k=a}var 
k,i,l,c,h,n,r,m=j.floatSpaceDockedOffsetX||0,o=j.floatSpaceDockedOffsetY||0,q=j.floatSpacePinnedOffsetX||0,t=j.floatSpacePinnedOffsetY|| 0; return 
function(d){if(i=a.editable())if(d&&"focus"==d.name&&b.show(),b.removeStyle("left"),b.removeStyle("right"),l=b.getClientRect(),c=i.getClientRect(),h=g.getViewPaneSize(),n=l.height,r="pageXOffset"in 
g.$?g.$.pageXOffset:CKEDITOR.document.$.documentElement.scrollLeft,k){n+o<=c.top?e("top"):n+o>h.height-c.bottom?e("pin"):e("bottom"); var 
d=h.width/2,d=0<c.left&&c.right<h.width&&c.width>l.width?"rtl"==a.config.contentsLangDirection?"right":"left":d-c.left>c.right-d?"left":"right",f; 
l.width>h.width? (d="left",f=0):(f="left"==d?0<c.left?c.left:0:c.right<h.width?h.width-c.right:0,f+l.width>h.width&&(d="left"==d?"right":"left",f=0)); 
b.setStyle(d,s(("pin"==k?q:m)+f+("pin"==k?0:"left"==d?r:-r)))}else k="pin",e("pin"),p(d)}}(); if(m){var i=new CKEDITOR.template('<div id="cke_{name}" class="cke 
{id} cke_reset_all cke_chrome cke_editor_{name} cke_float cke_{langDir} '+CKEDITOR.env.cssClass+'" dir="{langDir}" title="'+(CKEDITOR.env.gecko?" ":"")+'" 
lang="{langCode}" role="application" style="{style}"'+ (a.title?' aria-labelledby="cke_{name}_arialbl"':" ")+">"+(a.title?'<span id="cke_{name}_arialbl" 
class="cke_voice_label">{voiceLabel}</span>':" ")+'<div class="cke_inner"><div id="{topId}" class="cke_top" 
role="presentation">{content}</div></div></div>'),b=CKEDITOR.document.getBody().append(CKEDITOR.dom.element.createFromHtml(i.output({content:m,id:a.id,langDir:a.lang.dir,langCode:a.langCode,name:a.name,style:"display:none; 
z-index:"+(j.baseFloatZIndex-1),topId:a.ui.spaceId("top"),voiceLabel:a.title}))), q=CKEDITOR.tools.eventsBuffer(500,p),e=CKEDITOR.tools.eventsBuffer(100,p); 
b.unselectable(); b.on("mousedown",function(a){a=a.data; a.getTarget().hasAscendant("a",1)||a.preventDefault()}); a.on("focus",function(b){p(b); 
a.on("change",q.input); g.on("scroll",e.input); g.on("resize",e.input)}); a.on("blur",function(){b.hide(); a.removeListener("change",q.input); 
g.removeListener("scroll",e.input); g.removeListener("resize",e.input)}); a.on("destroy",function(){g.removeListener("scroll",e.input); 
g.removeListener("resize", e.input); b.clearCustomData(); b.remove()}); a.focusManager.hasFocus&&b.show(); a.focusManager.add(b,1)}}var 
g=CKEDITOR.document.getWindow(),s=CKEDITOR.tools.cssLength; 
CKEDITOR.plugins.add("floatingspace",{init:function(a){a.on("loaded",function(){i(this)},null,null,20)}})})(); (function(){function k(a){var 
d=this.editor,b=a.document,c=b.body,e=b.getElementById("cke_actscrpt"); e&&e.parentNode.removeChild(e); 
(e=b.getElementById("cke_shimscrpt"))&&e.parentNode.removeChild(e); (e=b.getElementById("cke_basetagscrpt"))&&e.parentNode.removeChild(e); c.contentEditable=!0; 
CKEDITOR.env.ie&&(c.hideFocus=!0,c.disabled=!0,c.removeAttribute("disabled")); delete this._.isLoadingData; this.$=c; b=new CKEDITOR.dom.document(b); 
this.setup(); this.fixInitialSelection(); CKEDITOR.env.ie&&(b.getDocumentElement().addClass(b.$.compatMode), 
d.config.enterMode!=CKEDITOR.ENTER_P&&this.attachListener(b,"selectionchange",function(){var a=b.getBody(),c=d.getSelection(),e=c&&c.getRanges()[0]; 
e&&(a.getHtml().match(/^<p>(?:&nbsp;
|<br>)<\/p>$/i)&&e.startContainer.equals(a))&&setTimeout(function(){e=d.getSelection().getRanges()[0];
if(!e.startContainer.equals("body")){a.getFirst().remove(1); e.moveToElementEditEnd(a); e.select()}},0)})); 
if(CKEDITOR.env.webkit||CKEDITOR.env.ie&&10<CKEDITOR.env.version)b.getDocumentElement().on("mousedown",function(a){a.data.getTarget().is("html")&& 
setTimeout(function(){d.editable().focus()})}); l(d); 
try{d.document.$.execCommand("2D-position",!1,!0)}catch(g){}(CKEDITOR.env.gecko||CKEDITOR.env.ie&&"CSS1Compat"==d.document.$.compatMode)&&this.attachListener(this,"keydown",function(a){var 
b=a.data.getKeystroke(); if(b==33||b==34)if(CKEDITOR.env.ie)setTimeout(function(){d.getSelection().scrollIntoView()},0); else 
if(d.window.$.innerHeight>this.$.offsetHeight){var c=d.createRange(); c[b==33?"moveToElementEditStart":"moveToElementEditEnd"](this); c.select();

a.data.preventDefault()}}); CKEDITOR.env.ie&&this.attachListener(b,"blur",function(){try{b.$.selection.empty()}catch(a){}}); 
CKEDITOR.env.iOS&&this.attachListener(b,"touchend",function(){a.focus()}); c=d.document.getElementsByTag("title").getItem(0); c.data("cke-title",c.getText()); 
CKEDITOR.env.ie&&(d.document.$.title=this._.docTitle); CKEDITOR.tools.setTimeout(function(){if(this.status=="unloaded")this.status="ready"; 
d.fire("contentDom"); if(this._.isPendingFocus){d.focus(); this._.isPendingFocus=false}setTimeout(function(){d.fire("dataReady")}, 0); 
CKEDITOR.env.ie&&setTimeout(function(){if(d.document){var a=d.document.$.body; a.runtimeStyle.marginBottom="0px"; 
a.runtimeStyle.marginBottom=""}},1E3)},0,this)}function l(a){function d(){var c; a.editable().attachListener(a,"selectionChange",function(){var 
d=a.getSelection().getSelectedElement(); d&&(c&&(c.detachEvent("onresizestart",b),c=null),d.$.attachEvent("onresizestart",b),c=d.$)})}function 
b(a){a.returnValue=!1}if(CKEDITOR.env.gecko)try{var c=a.document.$; c.execCommand("enableObjectResizing", !1,!a.config.disableObjectResizing); 
c.execCommand("enableInlineTableEditing",!1,!a.config.disableNativeTableHandles)}catch(e){}else 
CKEDITOR.env.ie&&(11>CKEDITOR.env.version&&a.config.disableObjectResizing)&&d(a)}function m(){var a=[]; 
if(8<=CKEDITOR.document.$.documentMode){a.push("html.CSS1Compat [contenteditable=false]{min-height:0 !important}"); var d=[],b; for(b in 
CKEDITOR.dtd.$removeEmpty)d.push("html.CSS1Compat "+b+"[contenteditable=false]"); a.push(d.join(",")+"{display:inline-block}")}else CKEDITOR.env.gecko&& 
(a.push("html{height:100% !important}"),a.push("img:-moz-broken{-moz-force-broken-image-icon:1; min-width:24px; min-height:24px}")); a.push("html{cursor:text; 
*cursor:auto}"); a.push("img,input,textarea{cursor:default}"); return 
a.join("\n")}CKEDITOR.plugins.add("wysiwygarea",{init:function(a){a.config.fullPage&&a.addFeature({allowedContent:"html head title;
 style [media,type];
 body (*)[id];
 meta link [*]",requiredContent:"body"}); a.addMode("wysiwyg",function(d){function b(b){b&&b.removeListener(); a.editable(new j(a, 
e.$.contentWindow.document.body)); a.setData(a.getData(1),d)}var c="document.open(); "+(CKEDITOR.env.ie?"("+CKEDITOR.tools.fixDomain+")(); 
":"")+"document.close(); 
",c=CKEDITOR.env.air?"javascript:void(0)":CKEDITOR.env.ie?"javascript:void(function(){"+encodeURIComponent(c)+"}())":"",e=CKEDITOR.dom.element.createFromHtml('<iframe 
src="'+c+'" frameBorder="0"></iframe>'); e.setStyles({width:"100%",height:"100%"}); e.addClass("cke_wysiwyg_frame cke_reset"); var g=a.ui.space("contents"); 
g.append(e); if(c=CKEDITOR.env.ie|| CKEDITOR.env.gecko)e.on("load",b); var f=a.title,h=a.fire("ariaEditorHelpLabel",{}).label; f&&(CKEDITOR.env.ie&&h&&(f+=", 
"+h),e.setAttribute("title",f)); if(h){var f=CKEDITOR.tools.getNextId(),i=CKEDITOR.dom.element.createFromHtml('<span id="'+f+'" 
class="cke_voice_label">'+h+"</span>"); g.append(i,1); e.setAttribute("aria-describedby",f)}a.on("beforeModeUnload",function(a){a.removeListener(); 
i&&i.remove()}); e.setAttributes({tabIndex:a.tabIndex,allowTransparency:"true"}); !c&&b(); CKEDITOR.env.webkit&& (c=function(){g.setStyle("width","100%"); 
e.hide(); e.setSize("width",g.getSize("width")); g.removeStyle("width"); e.show()},e.setCustomData("onResize",c),CKEDITOR.document.getWindow().on("resize",c)); 
a.fire("ariaWidget",e)})}}); CKEDITOR.editor.prototype.addContentsCss=function(a){var d=this.config,b=d.contentsCss; 
CKEDITOR.tools.isArray(b)||(d.contentsCss=b?[b]:[]); d.contentsCss.push(a)}; var j=CKEDITOR.tools.createClass({$:function(a){this.base.apply(this,arguments); 
this._.frameLoadedHandler=CKEDITOR.tools.addFunction(function(a){CKEDITOR.tools.setTimeout(k, 0,this,a)},this); 
this._.docTitle=this.getWindow().getFrame().getAttribute("title")},base:CKEDITOR.editable,proto:{setData:function(a,d){var b=this.editor; 
if(d)this.setHtml(a),this.fixInitialSelection(),b.fire("dataReady"); else{this._.isLoadingData=!0; b._.dataStore={id:1}; var 
c=b.config,e=c.fullPage,g=c.docType,f=CKEDITOR.tools.buildStyleHtml(m()).replace(/<style>/,'<style data-cke-temp="1">'); 
e||(f+=CKEDITOR.tools.buildStyleHtml(b.config.contentsCss)); var h=c.baseHref?'<base href="'+c.baseHref+'" data-cke-temp="1" />': ""; 
e&&(a=a.replace(/<!DOCTYPE[^>]*>/i,function(a){b.docType=g=a; return""}).replace(/<\?xml\s[^\?]*\?>/i,function(a){b.xmlDeclaration=a; return""})); 
a=b.dataProcessor.toHtml(a); 
e?(/<body[\s|>]/.test(a)||(a="<body>"+a),/<html[\s|>]/.test(a)||(a="<html>"+a+"</html>"),/<head[\s|>]/.test(a)?/<title[\s|>]/.test(a)||(a=a.replace(/<head[^>]*>/,"$&<title></title>")):a=a.replace(/<html[^>]*>/,"$&<head><title></title></head>"),h&&(a=a.replace(/<head[^>]*?>/,"$&"+h)),a=a.replace(/<\/head\s*>/,f+"$&"),a=g+a):a= 
c.docType+'<html dir="'+c.contentsLangDirection+'" 
lang="'+(c.contentsLanguage||b.langCode)+'"><head><title>'+this._.docTitle+"</title>"+h+f+"</head><body"+(c.bodyId?' id="'+c.bodyId+'"':"")+(c.bodyClass?' 
class="'+c.bodyClass+'"':"")+">"+a+"</body></html>"; CKEDITOR.env.gecko&&(a=a.replace(/<body/,'<body contenteditable="true" 
'),2E4>CKEDITOR.env.version&&(a=a.replace(/<body[^>]*>/,"$&<\!-- cke-content-start --\>"))); c='<script id="cke_actscrpt" 
type="text/javascript"'+(CKEDITOR.env.ie?' defer="defer" ': "")+">var wasLoaded=0; function 
onload(){if(!wasLoaded)window.parent.CKEDITOR.tools.callFunction("+this._.frameLoadedHandler+",window); wasLoaded=1;
}"+(CKEDITOR.env.ie?"onload();
":'document.addEventListener("DOMContentLoaded", onload, false ); ')+"<\/script>"; CKEDITOR.env.ie&&9>CKEDITOR.env.version&&(c+='<script 
id="cke_shimscrpt">window.parent.CKEDITOR.tools.enableHtml5Elements(document)<\/script>'); h&&(CKEDITOR.env.ie&&10>CKEDITOR.env.version)&&(c+='<script 
id="cke_basetagscrpt">var baseTag = document.querySelector( "base" ); baseTag.href = baseTag.href; <\/script>');

a=a.replace(/(?=\s*<\/(:?head)>)/,c); this.clearCustomData(); this.clearListeners(); b.fire("contentDomUnload"); var i=this.getDocument(); 
try{i.write(a)}catch(j){setTimeout(function(){i.write(a)},0)}}},getData:function(a){if(a)return this.getHtml(); var 
a=this.editor,d=a.config,b=d.fullPage,c=b&&a.docType,e=b&&a.xmlDeclaration,g=this.getDocument(),b=b?g.getDocumentElement().getOuterHtml():g.getBody().getHtml(); 
CKEDITOR.env.gecko&&d.enterMode!=CKEDITOR.ENTER_BR&&(b=b.replace(/<br>(?=\s*(:?$|<\/body>))/, "")); b=a.dataProcessor.toDataFormat(b); e&&(b=e+"\n"+b); 
c&&(b=c+"\n"+b); return b},focus:function(){this._.isLoadingData?this._.isPendingFocus=!0:j.baseProto.focus.call(this)},detach:function(){var 
a=this.editor,d=a.document,a=a.window.getFrame(); j.baseProto.detach.call(this); this.clearCustomData(); d.getDocumentElement().clearCustomData(); 
a.clearCustomData(); CKEDITOR.tools.removeFunction(this._.frameLoadedHandler); (d=a.removeCustomData("onResize"))&&d.removeListener(); a.remove()}}})})();

CKEDITOR.config.disableObjectResizing=!1; CKEDITOR.config.disableNativeTableHandles=!0; CKEDITOR.config.disableNativeSpellChecker=!0; 
CKEDITOR.config.contentsCss=CKEDITOR.getUrl("contents.css"); (function(){function k(a,b){var e,f; b.on("refresh",function(a){var b=[i],c; for(c in 
a.data.states)b.push(a.data.states[c]); this.setState(CKEDITOR.tools.search(b,m)?m:i)},b,null,100); b.on("exec",function(b){e=a.getSelection(); 
f=e.createBookmarks(1); b.data||(b.data={}); b.data.done=!1},b,null,0); b.on("exec",function(){a.forceNextSelectionCheck(); 
e.selectBookmarks(f)},b,null,100)}var i=CKEDITOR.TRISTATE_DISABLED,m=CKEDITOR.TRISTATE_OFF; CKEDITOR.plugins.add("indent",{init:function(a){var 
b=CKEDITOR.plugins.indent.genericDefinition;

k(a,a.addCommand("indent",new b(!0))); k(a,a.addCommand("outdent",new b)); 
a.ui.addButton&&(a.ui.addButton("Indent",{label:a.lang.indent.indent,command:"indent",directional:!0,toolbar:"indent,20"}),a.ui.addButton("Outdent",{label:a.lang.indent.outdent,command:"outdent",directional:!0,toolbar:"indent,10"})); 
a.on("dirChanged",function(b){var f=a.createRange(),j=b.data.node; f.setStartBefore(j); f.setEndAfter(j); for(var l=new CKEDITOR.dom.walker(f),c; c=l.next(); 
)if(c.type==CKEDITOR.NODE_ELEMENT)if(!c.equals(j)&& c.getDirection()){f.setStartAfter(c); l=new CKEDITOR.dom.walker(f)}else{var d=a.config.indentClasses; 
if(d)for(var g=b.data.dir=="ltr"?["_rtl",""]:["","_rtl"],h=0; h<d.length; h++)if(c.hasClass(d[h]+g[0])){c.removeClass(d[h]+g[0]); 
c.addClass(d[h]+g[1])}d=c.getStyle("margin-right"); g=c.getStyle("margin-left"); d?c.setStyle("margin-left",d):c.removeStyle("margin-left"); 
g?c.setStyle("margin-right",g):c.removeStyle("margin-right")}})}}); CKEDITOR.plugins.indent={genericDefinition:function(a){this.isIndent= !!a; 
this.startDisabled=!this.isIndent},specificDefinition:function(a,b,e){this.name=b; this.editor=a; this.jobs={}; 
this.enterBr=a.config.enterMode==CKEDITOR.ENTER_BR; this.isIndent=!!e; this.relatedGlobal=e?"indent":"outdent"; this.indentKey=e?9:CKEDITOR.SHIFT+9; 
this.database={}},registerCommands:function(a,b){a.on("pluginsLoaded",function(){for(var a in b)(function(a,b){var e=a.getCommand(b.relatedGlobal),c; for(c in 
b.jobs)e.on("exec",function(d){d.data.done||(a.fire("lockSnapshot"),b.execJob(a,c)&&(d.data.done= 
!0),a.fire("unlockSnapshot"),CKEDITOR.dom.element.clearAllMarkers(b.database))},this,null,c),e.on("refresh",function(d){d.data.states||(d.data.states={}); 
d.data.states[b.name+"@"+c]=b.refreshJob(a,c,d.data.path)},this,null,c); a.addFeature(b)})(this,b[a])})}}; 
CKEDITOR.plugins.indent.genericDefinition.prototype={context:"p",exec:function(){}}; 
CKEDITOR.plugins.indent.specificDefinition.prototype={execJob:function(a,b){var e=this.jobs[b]; if(e.state!=i)return e.exec.call(this,a)},refreshJob:function(a, 
b,e){b=this.jobs[b]; b.state=a.activeFilter.checkFeature(this)?b.refresh.call(this,a,e):i; return b.state},getContext:function(a){return 
a.contains(this.context)}}})(); (function(){function s(c){function f(b){for(var e=d.startContainer,a=d.endContainer; e&&!e.getParent().equals(b); 
)e=e.getParent(); for(; a&&!a.getParent().equals(b); )a=a.getParent(); if(!e||!a)return!1; for(var g=e,e=[],i=!1; !i; 
)g.equals(a)&&(i=!0),e.push(g),g=g.getNext(); if(1>e.length)return!1; g=b.getParents(!0); for(a=0; a<g.length; a++)if(g[a].getName&&m[g[a].getName()]){b=g[a]; 
break}for(var g=j.isIndent?1:-1,a=e[0],e=e[e.length-1],i=CKEDITOR.plugins.list.listToArray(b,n),l=i[e.getCustomData("listarray_index")].indent, 
a=a.getCustomData("listarray_index"); a<=e.getCustomData("listarray_index"); a++)if(i[a].indent+=g,0<g){var h=i[a].parent; i[a].parent=new 
CKEDITOR.dom.element(h.getName(),h.getDocument())}for(a=e.getCustomData("listarray_index")+1; a<i.length&&i[a].indent>l; a++)i[a].indent+=g; 
e=CKEDITOR.plugins.list.arrayToList(i,n,null,c.config.enterMode,b.getDirection()); if(!j.isIndent){var f; if((f=b.getParent())&&f.is("li"))for(var 
g=e.listNode.getChildren(),o=[],k,a=g.count()-1; 0<=a; a--)(k=g.getItem(a))&&(k.is&& k.is("li"))&&o.push(k)}e&&e.listNode.replace(b); if(o&&o.length)for(a=0; 
a<o.length; a++){for(k=b=o[a]; (k=k.getNext())&&k.is&&k.getName()in m; 
)CKEDITOR.env.needsNbspFiller&&!b.getFirst(t)&&b.append(d.document.createText(" ")),b.append(k); b.insertAfter(f)}e&&c.fire("contentDomInvalidated"); 
return!0}for(var j=this,n=this.database,m=this.context,l=c.getSelection(),l=(l&&l.getRanges()).createIterator(),d; d=l.getNextRange(); ){for(var 
b=d.getCommonAncestor(); b&&!(b.type==CKEDITOR.NODE_ELEMENT&&m[b.getName()]); )b= b.getParent(); 
b||(b=d.startPath().contains(m))&&d.setEndAt(b,CKEDITOR.POSITION_BEFORE_END); if(!b){var h=d.getEnclosedNode(); h&&(h.type==CKEDITOR.NODE_ELEMENT&&h.getName()in 
m)&&(d.setStartAt(h,CKEDITOR.POSITION_AFTER_START),d.setEndAt(h,CKEDITOR.POSITION_BEFORE_END),b=h)}b&&(d.startContainer.type==CKEDITOR.NODE_ELEMENT&&d.startContainer.getName()in 
m)&&(h=new CKEDITOR.dom.walker(d),h.evaluator=p,d.startContainer=h.next()); b&&(d.endContainer.type==CKEDITOR.NODE_ELEMENT&&d.endContainer.getName()in m)&& 
(h=new CKEDITOR.dom.walker(d),h.evaluator=p,d.endContainer=h.previous()); if(b)return f(b)}return 0}function p(c){return 
c.type==CKEDITOR.NODE_ELEMENT&&c.is("li")}function t(c){return u(c)&&v(c)}var 
u=CKEDITOR.dom.walker.whitespaces(!0),v=CKEDITOR.dom.walker.bookmark(!1,!0),q=CKEDITOR.TRISTATE_DISABLED,r=CKEDITOR.TRISTATE_OFF; 
CKEDITOR.plugins.add("indentlist",{requires:"indent",init:function(c){function f(c){j.specificDefinition.apply(this,arguments); 
this.requiredContent=["ul","ol"]; c.on("key",function(f){if("wysiwyg"== c.mode&&f.data.keyCode==this.indentKey){var l=this.getContext(c.elementPath()); 
if(l&&(!this.isIndent||!CKEDITOR.plugins.indentList.firstItemInPath(this.context,c.elementPath(),l)))c.execCommand(this.relatedGlobal),f.cancel()}},this); 
this.jobs[this.isIndent?10:30]={refresh:this.isIndent?function(c,f){var d=this.getContext(f),b=CKEDITOR.plugins.indentList.firstItemInPath(this.context,f,d); 
return!d||!this.isIndent||b?q:r}:function(c,f){return!this.getContext(f)||this.isIndent?q:r},exec:CKEDITOR.tools.bind(s, this)}}var j=CKEDITOR.plugins.indent; 
j.registerCommands(c,{indentlist:new f(c,"indentlist",!0),outdentlist:new f(c,"outdentlist")}); 
CKEDITOR.tools.extend(f.prototype,j.specificDefinition.prototype,{context:{ol:1,ul:1}})}}); CKEDITOR.plugins.indentList={}; 
CKEDITOR.plugins.indentList.firstItemInPath=function(c,f,j){var n=f.contains(p); j||(j=f.contains(c)); return j&&n&&n.equals(j.getFirst(p))}})(); 
(function(){function g(a,b){var c=j.exec(a),d=j.exec(b); if(c){if(!c[2]&&"px"==d[2])return d[1]; if("px"==c[2]&&!d[2])return d[1]+"px"}return b}var 
i=CKEDITOR.htmlParser.cssStyle,h=CKEDITOR.tools.cssLength,j=/^((?:\d*(?:\.\d+))|(?:\d+))(.*)?$/i,k={elements:{$:function(a){var b=a.attributes; 
if((b=(b=(b=b&&b["data-cke-realelement"])&&new 
CKEDITOR.htmlParser.fragment.fromHtml(decodeURIComponent(b)))&&b.children[0])&&a.attributes["data-cke-resizable"]){var c=(new 
i(a)).rules,a=b.attributes,d=c.width,c= c.height; d&&(a.width=g(a.width,d)); c&&(a.height=g(a.height,c))}return b}}}; 
CKEDITOR.plugins.add("fakeobjects",{init:function(a){a.filter.allow("img[!data-cke-realelement,src,alt,title](*){*}","fakeobjects")},afterInit:function(a){(a=(a=a.dataProcessor)&&a.htmlFilter)&&a.addRules(k,{applyToAll:!0})}}); 
CKEDITOR.editor.prototype.createFakeElement=function(a,b,c,d){var 
e=this.lang.fakeobjects,e=e[c]||e.unknown,b={"class":b,"data-cke-realelement":encodeURIComponent(a.getOuterHtml()),"data-cke-real-node-type":a.type, 
alt:e,title:e,align:a.getAttribute("align")||""}; CKEDITOR.env.hc||(b.src=CKEDITOR.tools.transparentImageData); c&&(b["data-cke-real-element-type"]=c); 
d&&(b["data-cke-resizable"]=d,c=new i,d=a.getAttribute("width"),a=a.getAttribute("height"),d&&(c.rules.width=h(d)),a&&(c.rules.height=h(a)),c.populate(b)); 
return this.document.createElement("img",{attributes:b})}; CKEDITOR.editor.prototype.createFakeParserElement=function(a,b,c,d){var 
e=this.lang.fakeobjects,e=e[c]||e.unknown,f; f=new CKEDITOR.htmlParser.basicWriter;

a.writeHtml(f); f=f.getHtml(); 
b={"class":b,"data-cke-realelement":encodeURIComponent(f),"data-cke-real-node-type":a.type,alt:e,title:e,align:a.attributes.align||""}; 
CKEDITOR.env.hc||(b.src=CKEDITOR.tools.transparentImageData); c&&(b["data-cke-real-element-type"]=c); d&&(b["data-cke-resizable"]=d,d=a.attributes,a=new 
i,c=d.width,d=d.height,void 0!=c&&(a.rules.width=h(c)),void 0!=d&&(a.rules.height=h(d)),a.populate(b)); return new CKEDITOR.htmlParser.element("img",b)}; 
CKEDITOR.editor.prototype.restoreRealElement= function(a){if(a.data("cke-real-node-type")!=CKEDITOR.NODE_ELEMENT)return null; var 
b=CKEDITOR.dom.element.createFromHtml(decodeURIComponent(a.data("cke-realelement")),this.document); if(a.data("cke-resizable")){var 
c=a.getStyle("width"),a=a.getStyle("height"); c&&b.setAttribute("width",g(b.getAttribute("width"),c)); 
a&&b.setAttribute("height",g(b.getAttribute("height"),a))}return b}})(); (function(){function m(c){return c.replace(/'/g,"\\$&")}function n(c){for(var 
b,a=c.length,f=[],e=0; e<a; e++)b=c.charCodeAt(e),f.push(b); return"String.fromCharCode("+f.join(",")+")"}function o(c,b){var 
a=c.plugins.link,f=a.compiledProtectionFunction.params,e,d; d=[a.compiledProtectionFunction.name,"("]; for(var g=0; g<f.length; 
g++)a=f[g].toLowerCase(),e=b[a],0<g&&d.push(","),d.push("'",e?m(encodeURIComponent(b[a])):"","'"); d.push(")"); return d.join("")}function l(c){var 
c=c.config.emailProtection||"", b; c&&"encode"!=c&&(b={},c.replace(/^([^(]+)\(([^)]+)\)$/,function(a,c,e){b.name=c; b.params=[]; 
e.replace(/[^,\s]+/g,function(a){b.params.push(a)})})); return b}CKEDITOR.plugins.add("link",{requires:"dialog,fakeobjects",onLoad:function(){function 
c(b){return a.replace(/%1/g,"rtl"==b?"right":"left").replace(/%2/g,"cke_contents_"+b)}var 
b="background:url("+CKEDITOR.getUrl(this.path+"images"+(CKEDITOR.env.hidpi?"/hidpi":"")+"/anchor.png")+") no-repeat %1 center; border:1px dotted #00f; 
background-size:16px; ", a=".%2 a.cke_anchor,.%2 a.cke_anchor_empty,.cke_editable.%2 a[name],.cke_editable.%2 a[data-cke-saved-name]{"+b+"padding-%1:18px; 
cursor:auto;
}.%2 img.cke_anchor{"+b+"width:16px;
min-height:15px; height:1.15em; vertical-align:text-bottom;
}";
CKEDITOR.addCss(c("ltr")+c("rtl"))},init:function(c){var b="a[!href]"; 
CKEDITOR.dialog.isTabEnabled(c,"link","advanced")&&(b=b.replace("]",",accesskey,charset,dir,id,lang,name,rel,tabindex,title,type]{*}(*)")); 
CKEDITOR.dialog.isTabEnabled(c,"link","target")&&(b=b.replace("]", ",target,onclick]")); c.addCommand("link",new 
CKEDITOR.dialogCommand("link",{allowedContent:b,requiredContent:"a[href]"})); c.addCommand("anchor",new 
CKEDITOR.dialogCommand("anchor",{allowedContent:"a[!name,id]",requiredContent:"a[name]"})); c.addCommand("unlink",new CKEDITOR.unlinkCommand); 
c.addCommand("removeAnchor",new CKEDITOR.removeAnchorCommand); c.setKeystroke(CKEDITOR.CTRL+76,"link"); 
c.ui.addButton&&(c.ui.addButton("Link",{label:c.lang.link.toolbar,command:"link",toolbar:"links,10"}),c.ui.addButton("Unlink", 
{label:c.lang.link.unlink,command:"unlink",toolbar:"links,20"}),c.ui.addButton("Anchor",{label:c.lang.link.anchor.toolbar,command:"anchor",toolbar:"links,30"})); 
CKEDITOR.dialog.add("link",this.path+"dialogs/link.js"); CKEDITOR.dialog.add("anchor",this.path+"dialogs/anchor.js"); c.on("doubleclick",function(a){var 
b=CKEDITOR.plugins.link.getSelectedLink(c)||a.data.element; 
if(!b.isReadOnly())if(b.is("a")){a.data.dialog=b.getAttribute("name")&&(!b.getAttribute("href")||!b.getChildCount())?"anchor":"link";

a.data.link=b}else if(CKEDITOR.plugins.link.tryRestoreFakeAnchor(c,b))a.data.dialog="anchor"},null,null,0); c.on("doubleclick",function(a){a.data.dialog 
in{link:1,anchor:1}&&a.data.link&&c.getSelection().selectElement(a.data.link)},null,null,20); 
c.addMenuItems&&c.addMenuItems({anchor:{label:c.lang.link.anchor.menu,command:"anchor",group:"anchor",order:1},removeAnchor:{label:c.lang.link.anchor.remove,command:"removeAnchor",group:"anchor",order:5},link:{label:c.lang.link.menu,command:"link",group:"link", 
order:1},unlink:{label:c.lang.link.unlink,command:"unlink",group:"link",order:5}}); 
c.contextMenu&&c.contextMenu.addListener(function(a){if(!a||a.isReadOnly())return null; a=CKEDITOR.plugins.link.tryRestoreFakeAnchor(c,a); 
if(!a&&!(a=CKEDITOR.plugins.link.getSelectedLink(c)))return null; var b={}; 
a.getAttribute("href")&&a.getChildCount()&&(b={link:CKEDITOR.TRISTATE_OFF,unlink:CKEDITOR.TRISTATE_OFF}); 
if(a&&a.hasAttribute("name"))b.anchor=b.removeAnchor=CKEDITOR.TRISTATE_OFF; return b}); this.compiledProtectionFunction= 
l(c)},afterInit:function(c){c.dataProcessor.dataFilter.addRules({elements:{a:function(a){return!a.attributes.name?null:!a.children.length?c.createFakeParserElement(a,"cke_anchor","anchor"):null}}}); 
var b=c._.elementsPath&&c._.elementsPath.filters; 
b&&b.push(function(a,b){if("a"==b&&(CKEDITOR.plugins.link.tryRestoreFakeAnchor(c,a)||a.getAttribute("name")&&(!a.getAttribute("href")||!a.getChildCount())))return"anchor"})}}); 
var p=/^javascript:/,q=/^mailto:([^?]+)(?:\?(.+))?$/,r=/subject=([^; ?:@&=$,\/]*)/, s=/body=([^; 
?:@&=$,\/]*)/,t=/^#(.*)$/,u=/^((?:http|https|ftp|news):\/\/)?(.*)$/,v=/^(_(?:self|top|parent|blank))$/,w=/^javascript:void\(location\.href='mailto:'\+String\.fromCharCode\(([^)]+)\)(?:\+'(.*)')?\)$/,x=/^javascript:([^(]+)\(([^)]+)\)$/,y=/\s*window.open\(\s*this\.href\s*,\s*(?:'([^']*)'|null)\s*,\s*'([^']*)'\s*\)\s*; 
\s*return\s*false; 
*\s*/,z=/(?:^|,)([^=]+)=(\d+|yes|no)/gi,j={id:"advId",dir:"advLangDir",accessKey:"advAccessKey",name:"advName",lang:"advLangCode",tabindex:"advTabIndex",title:"advTitle", 
type:"advContentType","class":"advCSSClasses",charset:"advCharset",style:"advStyles",rel:"advRel"}; CKEDITOR.plugins.link={getSelectedLink:function(c){var 
b=c.getSelection(),a=b.getSelectedElement(); return 
a&&a.is("a")?a:(b=b.getRanges()[0])?(b.shrink(CKEDITOR.SHRINK_TEXT),c.elementPath(b.getCommonAncestor()).contains("a",1)):null},getEditorAnchors:function(c){for(var 
b=c.editable(),a=b.isInline()&&!c.plugins.divarea?c.document:b,b=a.getElementsByTag("a"),a=a.getElementsByTag("img"),f=[],e=0,d; d=b.getItem(e++); 
)if(d.data("cke-saved-name")|| d.hasAttribute("name"))f.push({name:d.data("cke-saved-name")||d.getAttribute("name"),id:d.getAttribute("id")}); for(e=0; 
d=a.getItem(e++); )(d=this.tryRestoreFakeAnchor(c,d))&&f.push({name:d.getAttribute("name"),id:d.getAttribute("id")}); return 
f},fakeAnchor:!0,tryRestoreFakeAnchor:function(c,b){if(b&&b.data("cke-real-element-type")&&"anchor"==b.data("cke-real-element-type")){var 
a=c.restoreRealElement(b); if(a.data("cke-saved-name"))return a}},parseLinkAttributes:function(c,b){var a=b&&(b.data("cke-saved-href")|| 
b.getAttribute("href"))||"",f=c.plugins.link.compiledProtectionFunction,e=c.config.emailProtection,d,g={}; 
a.match(p)&&("encode"==e?a=a.replace(w,function(a,b,c){return"mailto:"+String.fromCharCode.apply(String,b.split(","))+(c&&c.replace(/\\'/g,"'"))}):e&&a.replace(x,function(a,b,c){if(b==f.name){g.type="email"; 
for(var a=g.email={},b=/(^')|('$)/g,c=c.match(/[^,\s]+/g),d=c.length,e,h,i=0; i<d; 
i++)e=decodeURIComponent,h=c[i].replace(b,"").replace(/\\'/g,"'"),h=e(h),e=f.params[i].toLowerCase(),a[e]=h;

a.address=[a.name,a.domain].join("@")}})); if(!g.type)if(e=a.match(t))g.type="anchor",g.anchor={},g.anchor.name=g.anchor.id=e[1]; else 
if(e=a.match(q)){d=a.match(r); a=a.match(s); g.type="email"; var i=g.email={}; i.address=e[1]; d&&(i.subject=decodeURIComponent(d[1])); 
a&&(i.body=decodeURIComponent(a[1]))}else if(a&&(d=a.match(u)))g.type="url",g.url={},g.url.protocol=d[1],g.url.url=d[2]; 
if(b){if(a=b.getAttribute("target"))g.target={type:a.match(v)?a:"frame",name:a}; else if(a=(a=b.data("cke-pa-onclick")|| 
b.getAttribute("onclick"))&&a.match(y))for(g.target={type:"popup",name:a[1]}; e=z.exec(a[2]); 
)("yes"==e[2]||"1"==e[2])&&!(e[1]in{height:1,width:1,top:1,left:1})?g.target[e[1]]=!0:isFinite(e[2])&&(g.target[e[1]]=e[2]); var a={},h; for(h in 
j)(e=b.getAttribute(h))&&(a[j[h]]=e); if(h=b.data("cke-saved-name")||a.advName)a.advName=h; CKEDITOR.tools.isEmpty(a)||(g.advanced=a)}return 
g},getLinkAttributes:function(c,b){var a=c.config.emailProtection||"",f={}; switch(b.type){case "url":var a=b.url&&void 0!=b.url.protocol? 
b.url.protocol:"http://",e=b.url&&CKEDITOR.tools.trim(b.url.url)||""; f["data-cke-saved-href"]=0===e.indexOf("/")?e:a+e; break; case 
"anchor":a=b.anchor&&b.anchor.id; f["data-cke-saved-href"]="#"+(b.anchor&&b.anchor.name||a||""); break; case "email":var d=b.email,e=d.address; switch(a){case 
"":case "encode":var g=encodeURIComponent(d.subject||""),i=encodeURIComponent(d.body||""),d=[]; g&&d.push("subject="+g); i&&d.push("body="+i); 
d=d.length?"?"+d.join("&"):""; "encode"==a?(a=["javascript:void(location.href='mailto:'+", n(e)],d&&a.push("+'",m(d),"'"),a.push(")")):a=["mailto:",e,d]; break; 
default:a=e.split("@",2),d.name=a[0],d.domain=a[1],a=["javascript:",o(c,d)]}f["data-cke-saved-href"]=a.join("")}if(b.target)if("popup"==b.target.type){for(var 
a=["window.open(this.href, '",b.target.name||"","', '"],h="resizable status location toolbar menubar fullscreen scrollbars dependent".split(" 
"),e=h.length,g=function(a){b.target[a]&&h.push(a+"="+b.target[a])},d=0; d<e; d++)h[d]+=b.target[h[d]]?"=yes":"=no"; g("width"); g("left");

g("height"); g("top"); a.push(h.join(","),"');
 return false; "); f["data-cke-pa-onclick"]=a.join("")}else"notSet"!=b.target.type&&b.target.name&&(f.target=b.target.name); if(b.advanced){for(var k in 
j)(a=b.advanced[j[k]])&&(f[k]=a); f.name&&(f["data-cke-saved-name"]=f.name)}f["data-cke-saved-href"]&&(f.href=f["data-cke-saved-href"]); 
k=CKEDITOR.tools.extend({target:1,onclick:1,"data-cke-pa-onclick":1,"data-cke-saved-name":1},j); for(var l in f)delete k[l]; 
return{set:f,removed:CKEDITOR.tools.objectKeys(k)}}};

CKEDITOR.unlinkCommand=function(){}; CKEDITOR.unlinkCommand.prototype={exec:function(c){var b=new 
CKEDITOR.style({element:"a",type:CKEDITOR.STYLE_INLINE,alwaysRemoveElement:1}); c.removeStyle(b)},refresh:function(c,b){var 
a=b.lastElement&&b.lastElement.getAscendant("a",!0); 
a&&"a"==a.getName()&&a.getAttribute("href")&&a.getChildCount()?this.setState(CKEDITOR.TRISTATE_OFF):this.setState(CKEDITOR.TRISTATE_DISABLED)},contextSensitive:1,startDisabled:1,requiredContent:"a[href]"}; 
CKEDITOR.removeAnchorCommand= function(){}; CKEDITOR.removeAnchorCommand.prototype={exec:function(c){var b=c.getSelection(),a=b.createBookmarks(),f; 
if(b&&(f=b.getSelectedElement())&&(!f.getChildCount()?CKEDITOR.plugins.link.tryRestoreFakeAnchor(c,f):f.is("a")))f.remove(1); else 
if(f=CKEDITOR.plugins.link.getSelectedLink(c))f.hasAttribute("href")?(f.removeAttributes({name:1,"data-cke-saved-name":1}),f.removeClass("cke_anchor")):f.remove(1); 
b.selectBookmarks(a)},requiredContent:"a[name]"}; CKEDITOR.tools.extend(CKEDITOR.config,{linkShowAdvancedTab:!0, linkShowTargetTab:!0})})(); 
(function(){function E(c,j,e){function 
b(b){if((d=a[b?"getFirst":"getLast"]())&&(!d.is||!d.isBlockBoundary())&&(m=j.root[b?"getPrevious":"getNext"](CKEDITOR.dom.walker.invisible(!0)))&&(!m.is||!m.isBlockBoundary({br:1})))c.document.createElement("br")[b?"insertBefore":"insertAfter"](d)}for(var 
k=CKEDITOR.plugins.list.listToArray(j.root,e),g=[],h=0; h<j.contents.length; h++){var f=j.contents[h]; 
if((f=f.getAscendant("li",!0))&&!f.getCustomData("list_item_processed"))g.push(f),CKEDITOR.dom.element.setMarker(e, f,"list_item_processed",!0)}f=null; for(h=0; 
h<g.length; h++)f=g[h].getCustomData("listarray_index"),k[f].indent=-1; for(h=f+1; h<k.length; 
h++)if(k[h].indent>k[h-1].indent+1){g=k[h-1].indent+1-k[h].indent; for(f=k[h].indent; k[h]&&k[h].indent>=f; )k[h].indent+=g,h++; h--}var 
a=CKEDITOR.plugins.list.arrayToList(k,e,null,c.config.enterMode,j.root.getAttribute("dir")).listNode,d,m; b(!0); b(); a.replace(j.root); 
c.fire("contentDomInvalidated")}function x(c,j){this.name=c; this.context=this.type=j; this.allowedContent= j+" li"; this.requiredContent=j}function 
A(c,j,e,b){for(var k,g; k=c[b?"getLast":"getFirst"](F); 
)(g=k.getDirection(1))!==j.getDirection(1)&&k.setAttribute("dir",g),k.remove(),e?k[b?"insertBefore":"insertAfter"](e):j.append(k,b)}function B(c){var j; 
(j=function(e){var b=c[e?"getPrevious":"getNext"](q); b&&(b.type==CKEDITOR.NODE_ELEMENT&&b.is(c.getName()))&&(A(c,b,null,!e),c.remove(),c=b)})(); j(1)}function 
C(c){return c.type==CKEDITOR.NODE_ELEMENT&&(c.getName()in CKEDITOR.dtd.$block||c.getName()in CKEDITOR.dtd.$listItem)&& CKEDITOR.dtd[c.getName()]["#"]}function 
y(c,j,e){c.fire("saveSnapshot"); e.enlarge(CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS); var b=e.extractContents(); j.trim(!1,!0); var k=j.createBookmark(),g=new 
CKEDITOR.dom.elementPath(j.startContainer),h=g.block,g=g.lastElement.getAscendant("li",1)||h,f=new 
CKEDITOR.dom.elementPath(e.startContainer),a=f.contains(CKEDITOR.dtd.$listItem),f=f.contains(CKEDITOR.dtd.$list); 
h?(h=h.getBogus())&&h.remove():f&&(h=f.getPrevious(q))&&v(h)&&h.remove(); (h=b.getLast())&&(h.type== CKEDITOR.NODE_ELEMENT&&h.is("br"))&&h.remove(); 
(h=j.startContainer.getChild(j.startOffset))?b.insertBefore(h):j.startContainer.append(b); 
if(a&&(b=w(a)))g.contains(a)?(A(b,a.getParent(),a),b.remove()):g.append(b); for(; e.checkStartOfBlock()&&e.checkEndOfBlock(); ){f=e.startPath(); b=f.block; 
if(!b)break; b.is("li")&&(g=b.getParent(),b.equals(g.getLast(q))&&b.equals(g.getFirst(q))&&(b=g)); e.moveToPosition(b,CKEDITOR.POSITION_BEFORE_START); 
b.remove()}e=e.clone(); b=c.editable(); e.setEndAt(b,CKEDITOR.POSITION_BEFORE_END);

e=new CKEDITOR.dom.walker(e); e.evaluator=function(a){return q(a)&&!v(a)}; (e=e.next())&&(e.type==CKEDITOR.NODE_ELEMENT&&e.getName()in 
CKEDITOR.dtd.$list)&&B(e); j.moveToBookmark(k); j.select(); c.fire("saveSnapshot")}function 
w(c){return(c=c.getLast(q))&&c.type==CKEDITOR.NODE_ELEMENT&&c.getName()in r?c:null}var 
r={ol:1,ul:1},G=CKEDITOR.dom.walker.whitespaces(),D=CKEDITOR.dom.walker.bookmark(),q=function(c){return!(G(c)||D(c))},v=CKEDITOR.dom.walker.bogus(); 
CKEDITOR.plugins.list={listToArray:function(c, j,e,b,k){if(!r[c.getName()])return[]; b||(b=0); e||(e=[]); for(var g=0,h=c.getChildCount(); g<h; g++){var 
f=c.getChild(g); f.type==CKEDITOR.NODE_ELEMENT&&f.getName()in CKEDITOR.dtd.$list&&CKEDITOR.plugins.list.listToArray(f,j,e,b+1); 
if("li"==f.$.nodeName.toLowerCase()){var a={parent:c,indent:b,element:f,contents:[]}; 
k?a.grandparent=k:(a.grandparent=c.getParent(),a.grandparent&&"li"==a.grandparent.$.nodeName.toLowerCase()&&(a.grandparent=a.grandparent.getParent())); 
j&&CKEDITOR.dom.element.setMarker(j,f, "listarray_index",e.length); e.push(a); for(var d=0,m=f.getChildCount(),i; d<m; 
d++)i=f.getChild(d),i.type==CKEDITOR.NODE_ELEMENT&&r[i.getName()]?CKEDITOR.plugins.list.listToArray(i,j,e,b+1,a.grandparent):a.contents.push(i)}}return 
e},arrayToList:function(c,j,e,b,k){e||(e=0); if(!c||c.length<e+1)return null; for(var g,h=c[e].parent.getDocument(),f=new 
CKEDITOR.dom.documentFragment(h),a=null,d=e,m=Math.max(c[e].indent,0),i=null,n,l,p=b==CKEDITOR.ENTER_P?"p":"div"; ; ){var o=c[d]; g=o.grandparent; 
n=o.element.getDirection(1);

if(o.indent==m){if(!a||c[d].parent.getName()!=a.getName())a=c[d].parent.clone(!1,1),k&&a.setAttribute("dir",k),f.append(a); i=a.append(o.element.clone(0,1)); 
n!=a.getDirection(1)&&i.setAttribute("dir",n); for(g=0; g<o.contents.length; g++)i.append(o.contents[g].clone(1,1)); d++}else 
if(o.indent==Math.max(m,0)+1)o=c[d-1].element.getDirection(1),d=CKEDITOR.plugins.list.arrayToList(c,null,d,b,o!=n?n:null),!i.getChildCount()&&(CKEDITOR.env.needsNbspFiller&&!(7<h.$.documentMode))&&i.append(h.createText(" ")), 
i.append(d.listNode),d=d.nextIndex; else if(-1==o.indent&&!e&&g){r[g.getName()]?(i=o.element.clone(!1,!0),n!=g.getDirection(1)&&i.setAttribute("dir",n)):i=new 
CKEDITOR.dom.documentFragment(h); var 
a=g.getDirection(1)!=n,u=o.element,z=u.getAttribute("class"),v=u.getAttribute("style"),w=i.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT&&(b!=CKEDITOR.ENTER_BR||a||v||z),s,x=o.contents.length,t; 
for(g=0; g<x; g++)if(s=o.contents[g],D(s)&&1<x)w?t=s.clone(1,1):i.append(s.clone(1,1)); else if(s.type==CKEDITOR.NODE_ELEMENT&& 
s.isBlockBoundary()){a&&!s.getDirection()&&s.setAttribute("dir",n); l=s; var y=u.getAttribute("style"); y&&l.setAttribute("style",y.replace(/([^; ])$/,"$1; 
")+(l.getAttribute("style")||"")); z&&s.addClass(z); l=null; t&&(i.append(t),t=null); i.append(s.clone(1,1))}else 
w?(l||(l=h.createElement(p),i.append(l),a&&l.setAttribute("dir",n)),v&&l.setAttribute("style",v),z&&l.setAttribute("class",z),t&&(l.append(t),t=null),l.append(s.clone(1,1))):i.append(s.clone(1,1)); 
t&&((l||i).append(t),t=null); i.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT&& 
d!=c.length-1&&(CKEDITOR.env.needsBrFiller&&(n=i.getLast())&&(n.type==CKEDITOR.NODE_ELEMENT&&n.is("br"))&&n.remove(),n=i.getLast(q),(!n||!(n.type==CKEDITOR.NODE_ELEMENT&&n.is(CKEDITOR.dtd.$block)))&&i.append(h.createElement("br"))); 
n=i.$.nodeName.toLowerCase(); ("div"==n||"p"==n)&&i.appendBogus(); f.append(i); a=null; d++}else return null; l=null; 
if(c.length<=d||Math.max(c[d].indent,0)<m)break}if(j)for(c=f.getFirst(); c; 
){if(c.type==CKEDITOR.NODE_ELEMENT&&(CKEDITOR.dom.element.clearMarkers(j,c),c.getName()in CKEDITOR.dtd.$listItem&&(e=c,h=k=b=void 
0,b=e.getDirection()))){for(k=e.getParent(); k&&!(h=k.getDirection()); )k=k.getParent(); 
b==h&&e.removeAttribute("dir")}c=c.getNextSourceNode()}return{listNode:f,nextIndex:d}}}; var H=/^h[1-6]$/,F=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT); 
x.prototype={exec:function(c){this.refresh(c,c.elementPath()); var j=c.config,e=c.getSelection(),b=e&&e.getRanges(); if(this.state==CKEDITOR.TRISTATE_OFF){var 
k=c.editable(); if(k.getFirst(q)){var g=1==b.length&&b[0]; (j= g&&g.getEnclosedNode())&&(j.is&&this.type==j.getName())&&this.setState(CKEDITOR.TRISTATE_ON)}else 
j.enterMode==CKEDITOR.ENTER_BR?k.appendBogus():b[0].fixBlock(1,j.enterMode==CKEDITOR.ENTER_P?"p":"div"),e.selectRanges(b)}for(var 
j=e.createBookmarks(!0),k=[],h={},b=b.createIterator(),f=0; (g=b.getNextRange())&&++f; ){var a=g.getBoundaryNodes(),d=a.startNode,m=a.endNode; 
d.type==CKEDITOR.NODE_ELEMENT&&"td"==d.getName()&&g.setStartAt(a.startNode,CKEDITOR.POSITION_AFTER_START); m.type==CKEDITOR.NODE_ELEMENT&& 
"td"==m.getName()&&g.setEndAt(a.endNode,CKEDITOR.POSITION_BEFORE_END); g=g.createIterator(); for(g.forceBrBreak=this.state==CKEDITOR.TRISTATE_OFF; 
a=g.getNextParagraph(); )if(!a.getCustomData("list_block")){CKEDITOR.dom.element.setMarker(h,a,"list_block",1); for(var 
i=c.elementPath(a),d=i.elements,m=0,i=i.blockLimit,n,l=d.length-1; 0<=l&&(n=d[l]); 
l--)if(r[n.getName()]&&i.contains(n)){i.removeCustomData("list_group_object_"+f); 
(d=n.getCustomData("list_group_object"))?d.contents.push(a):(d={root:n,contents:[a]}, k.push(d),CKEDITOR.dom.element.setMarker(h,n,"list_group_object",d)); m=1; 
break}m||(m=i,m.getCustomData("list_group_object_"+f)?m.getCustomData("list_group_object_"+f).contents.push(a):(d={root:m,contents:[a]},CKEDITOR.dom.element.setMarker(h,m,"list_group_object_"+f,d),k.push(d)))}}for(n=[]; 
0<k.length; )if(d=k.shift(),this.state==CKEDITOR.TRISTATE_OFF)if(r[d.root.getName()]){b=c; f=d; d=h; g=n; m=CKEDITOR.plugins.list.listToArray(f.root,d); i=[]; 
for(a=0; a<f.contents.length; a++)if(l=f.contents[a],(l=l.getAscendant("li", 
!0))&&!l.getCustomData("list_item_processed"))i.push(l),CKEDITOR.dom.element.setMarker(d,l,"list_item_processed",!0); for(var l=f.root.getDocument(),p=void 
0,o=void 0,a=0; a<i.length; a++){var u=i[a].getCustomData("listarray_index"),p=m[u].parent; 
p.is(this.type)||(o=l.createElement(this.type),p.copyAttributes(o,{start:1,type:1}),o.removeStyle("list-style-type"),m[u].parent=o)}d=CKEDITOR.plugins.list.arrayToList(m,d,null,b.config.enterMode); 
m=void 0; i=d.listNode.getChildCount(); for(a=0; a<i&&(m=d.listNode.getChild(a)); a++)m.getName()== this.type&&g.push(m); d.listNode.replace(f.root); 
b.fire("contentDomInvalidated")}else{m=c; a=d; g=n; i=a.contents; b=a.root.getDocument(); f=[]; 
1==i.length&&i[0].equals(a.root)&&(d=b.createElement("div"),i[0].moveChildren&&i[0].moveChildren(d),i[0].append(d),i[0]=d); a=a.contents[0].getParent(); 
for(l=0; l<i.length; l++)a=a.getCommonAncestor(i[l].getParent()); p=m.config.useComputedState; m=d=void 0; p=void 0===p||p; for(l=0; l<i.length; l++)for(o=i[l]; 
u=o.getParent(); ){if(u.equals(a)){f.push(o); !m&&o.getDirection()&& (m=1); o=o.getDirection(p); null!==d&&(d=d&&d!=o?null:o); 
break}o=u}if(!(1>f.length)){i=f[f.length-1].getNext(); l=b.createElement(this.type); g.push(l); for(p=g=void 0; f.length; 
)g=f.shift(),p=b.createElement("li"),g.is("pre")||H.test(g.getName())||"false"==g.getAttribute("contenteditable")?g.appendTo(p):(g.copyAttributes(p),d&&g.getDirection()&&(p.removeStyle("direction"),p.removeAttribute("dir")),g.moveChildren(p),g.remove()),p.appendTo(l); 
d&&m&&l.setAttribute("dir",d); i?l.insertBefore(i):l.appendTo(a)}}else this.state== CKEDITOR.TRISTATE_ON&&r[d.root.getName()]&&E.call(this,c,d,h); for(l=0; 
l<n.length; l++)B(n[l]); CKEDITOR.dom.element.clearAllMarkers(h); e.selectBookmarks(j); c.focus()},refresh:function(c,j){var 
e=j.contains(r,1),b=j.blockLimit||j.root; 
e&&b.contains(e)?this.setState(e.is(this.type)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF):this.setState(CKEDITOR.TRISTATE_OFF)}}; 
CKEDITOR.plugins.add("list",{requires:"indentlist",init:function(c){c.blockless||(c.addCommand("numberedlist",new 
x("numberedlist","ol")),c.addCommand("bulletedlist", new 
x("bulletedlist","ul")),c.ui.addButton&&(c.ui.addButton("NumberedList",{label:c.lang.list.numberedlist,command:"numberedlist",directional:!0,toolbar:"list,10"}),c.ui.addButton("BulletedList",{label:c.lang.list.bulletedlist,command:"bulletedlist",directional:!0,toolbar:"list,20"})),c.on("key",function(j){var 
e=j.data.domEvent.getKey(); if(c.mode=="wysiwyg"&&e in{8:1,46:1}){var b=c.getSelection().getRanges()[0],k=b&&b.startPath(); if(b&&b.collapsed){var 
g=e==8,h=c.editable(),f=new CKEDITOR.dom.walker(b.clone());

f.evaluator=function(a){return q(a)&&!v(a)}; f.guard=function(a,b){return!(b&&a.type==CKEDITOR.NODE_ELEMENT&&a.is("table"))}; e=b.clone(); if(g){var a,d; 
if((a=k.contains(r))&&b.checkBoundaryOfElement(a,CKEDITOR.START)&&(a=a.getParent())&&a.is("li")&&(a=w(a))){d=a; a=a.getPrevious(q); 
e.moveToPosition(a&&v(a)?a:d,CKEDITOR.POSITION_BEFORE_START)}else{f.range.setStartAt(h,CKEDITOR.POSITION_AFTER_START); 
f.range.setEnd(b.startContainer,b.startOffset); if((a=f.previous())&&a.type==CKEDITOR.NODE_ELEMENT&&(a.getName()in 
r||a.is("li"))){if(!a.is("li")){f.range.selectNodeContents(a); f.reset(); f.evaluator=C; a=f.previous()}d=a; e.moveToElementEditEnd(d)}}if(d){y(c,e,b); 
j.cancel()}else if((e=k.contains(r))&&b.checkBoundaryOfElement(e,CKEDITOR.START)){d=e.getFirst(q); 
if(b.checkBoundaryOfElement(d,CKEDITOR.START)){a=e.getPrevious(q); if(w(d)){if(a){b.moveToElementEditEnd(a); b.select()}}else c.execCommand("outdent"); 
j.cancel()}}}else if(d=k.contains("li")){f.range.setEndAt(h,CKEDITOR.POSITION_BEFORE_END); h=(k=d.getLast(q))&& C(k)?k:d; d=0; 
if((a=f.next())&&a.type==CKEDITOR.NODE_ELEMENT&&a.getName()in r&&a.equals(k)){d=1; a=f.next()}else b.checkBoundaryOfElement(h,CKEDITOR.END)&&(d=1); 
if(d&&a){b=b.clone(); b.moveToElementEditStart(a); y(c,e,b); j.cancel()}}else{f.range.setEndAt(h,CKEDITOR.POSITION_BEFORE_END); 
if((a=f.next())&&a.type==CKEDITOR.NODE_ELEMENT&&a.is(r)){a=a.getFirst(q); if(k.block&&b.checkStartOfBlock()&&b.checkEndOfBlock()){k.block.remove(); 
b.moveToElementEditStart(a); b.select()}else if(w(a)){b.moveToElementEditStart(a);

b.select()}else{b=b.clone(); b.moveToElementEditStart(a); y(c,e,b)}j.cancel()}}setTimeout(function(){c.selectionChange(1)})}}}))}})})(); (function(){var 
g=[CKEDITOR.CTRL+90,CKEDITOR.CTRL+89,CKEDITOR.CTRL+CKEDITOR.SHIFT+90],l={8:1,46:1}; CKEDITOR.plugins.add("undo",{init:function(a){function 
b(a){d.enabled&&!1!==a.data.command.canUndo&&d.save()}function c(){d.enabled=a.readOnly?!1:"wysiwyg"==a.mode; d.onChange()}var d=a.undoManager=new 
e(a),j=d.editingHandler=new 
i(d),f=a.addCommand("undo",{exec:function(){d.undo()&&(a.selectionChange(),this.fire("afterUndo"))},startDisabled:!0,canUndo:!1}),h=a.addCommand("redo",{exec:function(){d.redo()&& 
(a.selectionChange(),this.fire("afterRedo"))},startDisabled:!0,canUndo:!1}); a.setKeystroke([[g[0],"undo"],[g[1],"redo"],[g[2],"redo"]]); 
d.onChange=function(){f.setState(d.undoable()?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED); 
h.setState(d.redoable()?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED)}; a.on("beforeCommandExec",b); a.on("afterCommandExec",b); 
a.on("saveSnapshot",function(a){d.save(a.data&&a.data.contentOnly)}); a.on("contentDom",j.attachListeners,j); 
a.on("instanceReady",function(){a.fire("saveSnapshot")});

a.on("beforeModeUnload",function(){"wysiwyg"==a.mode&&d.save(!0)}); a.on("mode",c); a.on("readOnly",c); 
a.ui.addButton&&(a.ui.addButton("Undo",{label:a.lang.undo.undo,command:"undo",toolbar:"undo,10"}),a.ui.addButton("Redo",{label:a.lang.undo.redo,command:"redo",toolbar:"undo,20"})); 
a.resetUndo=function(){d.reset(); a.fire("saveSnapshot")}; a.on("updateSnapshot",function(){d.currentImage&&d.update()}); 
a.on("lockSnapshot",function(a){a=a.data; d.lock(a&&a.dontUpdate,a&&a.forceUpdate)}); a.on("unlockSnapshot", d.unlock,d)}}); CKEDITOR.plugins.undo={}; var 
e=CKEDITOR.plugins.undo.UndoManager=function(a){this.strokesRecorded=[0,0]; this.locked=null; this.previousKeyGroup=-1; this.limit=a.config.undoStackSize||20; 
this.strokesLimit=25; this.editor=a; this.reset()}; e.prototype={type:function(a,b){var 
c=e.getKeyGroup(a),d=this.strokesRecorded[c]+1,b=b||d>=this.strokesLimit; this.typing||(this.hasUndo=this.typing=!0,this.hasRedo=!1,this.onChange()); 
b?(d=0,this.editor.fire("saveSnapshot")):this.editor.fire("change"); this.strokesRecorded[c]= d; this.previousKeyGroup=c},keyGroupChanged:function(a){return 
e.getKeyGroup(a)!=this.previousKeyGroup},reset:function(){this.snapshots=[]; this.index=-1; this.currentImage=null; this.hasRedo=this.hasUndo=!1; 
this.locked=null; this.resetType()},resetType:function(){this.strokesRecorded=[0,0]; this.typing=!1; 
this.previousKeyGroup=-1},refreshState:function(){this.hasUndo=!!this.getNextImage(!0); this.hasRedo=!!this.getNextImage(!1); this.resetType(); 
this.onChange()},save:function(a,b,c){var d=this.editor; if(this.locked|| "ready"!=d.status||"wysiwyg"!=d.mode)return!1; var e=d.editable(); 
if(!e||"ready"!=e.status)return!1; e=this.snapshots; b||(b=new f(d)); if(!1===b.contents)return!1; 
if(this.currentImage)if(b.equalsContent(this.currentImage)){if(a||b.equalsSelection(this.currentImage))return!1}else!1!==c&&d.fire("change"); 
e.splice(this.index+1,e.length-this.index-1); e.length==this.limit&&e.shift(); this.index=e.push(b)-1; this.currentImage=b; !1!==c&&this.refreshState(); 
return!0},restoreImage:function(a){var b=this.editor, c; a.bookmarks&&(b.focus(),c=b.getSelection()); this.locked={level:999}; 
this.editor.loadSnapshot(a.contents); 
a.bookmarks?c.selectBookmarks(a.bookmarks):CKEDITOR.env.ie&&(c=this.editor.document.getBody().$.createTextRange(),c.collapse(!0),c.select()); this.locked=null; 
this.index=a.index; this.currentImage=this.snapshots[this.index]; this.update(); this.refreshState(); b.fire("change")},getNextImage:function(a){var 
b=this.snapshots,c=this.currentImage,d; if(c)if(a)for(d=this.index-1; 0<=d; d--){if(a=b[d],!c.equalsContent(a))return a.index= d,a}else for(d=this.index+1; 
d<b.length; d++)if(a=b[d],!c.equalsContent(a))return a.index=d,a; return null},redoable:function(){return this.enabled&&this.hasRedo},undoable:function(){return 
this.enabled&&this.hasUndo},undo:function(){if(this.undoable()){this.save(!0); var a=this.getNextImage(!0); if(a)return 
this.restoreImage(a),!0}return!1},redo:function(){if(this.redoable()&&(this.save(!0),this.redoable())){var a=this.getNextImage(!1); if(a)return 
this.restoreImage(a),!0}return!1},update:function(a){if(!this.locked){a|| (a=new f(this.editor)); for(var b=this.index,c=this.snapshots; 
0<b&&this.currentImage.equalsContent(c[b-1]); )b-=1; c.splice(b,this.index-b+1,a); this.index=b; 
this.currentImage=a}},updateSelection:function(a){if(!this.snapshots.length)return!1; var b=this.snapshots,c=b[b.length-1]; return 
c.equalsContent(a)&&!c.equalsSelection(a)?(this.currentImage=b[b.length-1]=a,!0):!1},lock:function(a,b){if(this.locked)this.locked.level++; else 
if(a)this.locked={level:1}; else{var c=null; if(b)c=!0; else{var d=new f(this.editor, !0); 
this.currentImage&&this.currentImage.equalsContent(d)&&(c=d)}this.locked={update:c,level:1}}},unlock:function(){if(this.locked&&!--this.locked.level){var 
a=this.locked.update; this.locked=null; if(!0===a)this.update(); else if(a){var b=new f(this.editor,!0); a.equalsContent(b)||this.update()}}}}; 
e.navigationKeyCodes={37:1,38:1,39:1,40:1,36:1,35:1,33:1,34:1}; e.keyGroups={PRINTABLE:0,FUNCTIONAL:1}; 
e.isNavigationKey=function(a){return!!e.navigationKeyCodes[a]}; e.getKeyGroup=function(a){var b=e.keyGroups;

return l[a]?b.FUNCTIONAL:b.PRINTABLE}; e.getOppositeKeyGroup=function(a){var b=e.keyGroups; return a==b.FUNCTIONAL?b.PRINTABLE:b.FUNCTIONAL}; 
e.ieFunctionalKeysBug=function(a){return CKEDITOR.env.ie&&e.getKeyGroup(a)==e.keyGroups.FUNCTIONAL}; var 
f=CKEDITOR.plugins.undo.Image=function(a,b){this.editor=a; a.fire("beforeUndoImage"); var c=a.getSnapshot(); 
CKEDITOR.env.ie&&c&&(c=c.replace(/\s+data-cke-expando=".*?"/g,"")); this.contents=c; b||(this.bookmarks=(c=c&&a.getSelection())&&c.createBookmarks2(!0)); 
a.fire("afterUndoImage")}, h=/\b(?:href|src|name)="[^"]*?"/gi; f.prototype={equalsContent:function(a){var b=this.contents,a=a.contents; 
if(CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks))b=b.replace(h,""),a=a.replace(h,""); return b!=a?!1:!0},equalsSelection:function(a){var 
b=this.bookmarks,a=a.bookmarks; if(b||a){if(!b||!a||b.length!=a.length)return!1; for(var c=0; c<b.length; c++){var d=b[c],e=a[c]; 
if(d.startOffset!=e.startOffset||d.endOffset!=e.endOffset||!CKEDITOR.tools.arrayCompare(d.start,e.start)||!CKEDITOR.tools.arrayCompare(d.end, 
e.end))return!1}}return!0}}; var i=CKEDITOR.plugins.undo.NativeEditingHandler=function(a){this.undoManager=a; this.ignoreInputEvent=!1; this.keyEventsStack=new 
k; this.lastKeydownImage=null}; i.prototype={onKeydown:function(a){if(-1<CKEDITOR.tools.indexOf(g,a.data.getKeystroke()))a.data.preventDefault(); 
else{this.keyEventsStack.cleanUp(a); var a=a.data.getKey(),b=this.undoManager; this.keyEventsStack.getLast(a)||this.keyEventsStack.push(a); 
this.lastKeydownImage=new f(b.editor); if(e.isNavigationKey(a)||this.undoManager.keyGroupChanged(a))if(b.strokesRecorded[0]|| 
b.strokesRecorded[1])b.save(!1,this.lastKeydownImage,!1),b.resetType()}},onInput:function(){if(this.ignoreInputEvent)this.ignoreInputEvent=!1; else{var 
a=this.keyEventsStack.getLast(); a||(a=this.keyEventsStack.push(0)); this.keyEventsStack.increment(a.keyCode); 
this.keyEventsStack.getTotalInputs()>=this.undoManager.strokesLimit&&(this.undoManager.type(a.keyCode,!0),this.keyEventsStack.resetInputs())}},onKeyup:function(a){var 
b=this.undoManager,a=a.data.getKey(),c=this.keyEventsStack.getTotalInputs();

this.keyEventsStack.remove(a); if(!e.ieFunctionalKeysBug(a)||!this.lastKeydownImage||!this.lastKeydownImage.equalsContent(new f(b.editor,!0)))if(0<c)b.type(a); 
else if(e.isNavigationKey(a))this.onNavigationKey(!0)},onNavigationKey:function(a){var b=this.undoManager; (a||!b.save(!0,null,!1))&&b.updateSelection(new 
f(b.editor)); b.resetType()},ignoreInputEventListener:function(){this.ignoreInputEvent=!0},attachListeners:function(){var 
a=this.undoManager.editor,b=a.editable(),c=this; b.attachListener(b,"keydown", function(a){c.onKeydown(a); 
if(e.ieFunctionalKeysBug(a.data.getKey()))c.onInput()},null,null,999); b.attachListener(b,CKEDITOR.env.ie?"keypress":"input",c.onInput,c,null,999); 
b.attachListener(b,"keyup",c.onKeyup,c,null,999); b.attachListener(b,"paste",c.ignoreInputEventListener,c,null,999); 
b.attachListener(b,"drop",c.ignoreInputEventListener,c,null,999); 
b.attachListener(b.isInline()?b:a.document.getDocumentElement(),"click",function(){c.onNavigationKey()},null,null,999); 
b.attachListener(this.undoManager.editor, "blur",function(){c.keyEventsStack.remove(9)},null,null,999)}}; var 
k=CKEDITOR.plugins.undo.KeyEventsStack=function(){this.stack=[]}; k.prototype={push:function(a){return 
this.stack[this.stack.push({keyCode:a,inputs:0})-1]},getLastIndex:function(a){if("number"!=typeof a)return this.stack.length-1; for(var b=this.stack.length; 
b--; )if(this.stack[b].keyCode==a)return b; return-1},getLast:function(a){a=this.getLastIndex(a); 
return-1!=a?this.stack[a]:null},increment:function(a){this.getLast(a).inputs++},remove:function(a){a= this.getLastIndex(a); 
-1!=a&&this.stack.splice(a,1)},resetInputs:function(a){if("number"==typeof a)this.getLast(a).inputs=0; else for(a=this.stack.length; a--; 
)this.stack[a].inputs=0},getTotalInputs:function(){for(var a=this.stack.length,b=0; a--; )b+=this.stack[a].inputs; return b},cleanUp:function(a){a=a.data.$; 
!a.ctrlKey&&!a.metaKey&&this.remove(17); a.shiftKey||this.remove(16); a.altKey||this.remove(18)}}})(); 
CKEDITOR.config.plugins='dialogui,dialog,about,basicstyles,clipboard,button,toolbar,enterkey,entities,floatingspace,wysiwygarea,indent,indentlist,fakeobjects,link,list,undo'; 
CKEDITOR.config.skin='moono'; (function() {var setIcons = function(icons, strip) {var path = CKEDITOR.getUrl( 'plugins/' + strip ); icons = icons.split( ',' ); 
for ( var i = 0;
 i < icons.length;
 i++ )CKEDITOR.skin.icons[ icons[ i ] ] = { path: path, offset: -icons[ ++i ], bgsize : icons[ ++i ] };
};
if (CKEDITOR.env.hidpi) 
setIcons('about,0,,bold,24,,italic,48,,strike,72,,subscript,96,,superscript,120,,underline,144,,copy-rtl,168,,copy,192,,cut-rtl,216,,cut,240,,paste-rtl,264,,paste,288,,indent-rtl,312,,indent,336,,outdent-rtl,360,,outdent,384,,anchor-rtl,408,,anchor,432,,link,456,,unlink,480,,bulletedlist-rtl,504,,bulletedlist,528,,numberedlist-rtl,552,,numberedlist,576,,redo-rtl,600,,redo,624,,undo-rtl,648,,undo,672,','icons_hidpi.png'); 
else 
setIcons('about,0,auto,bold,24,auto,italic,48,auto,strike,72,auto,subscript,96,auto,superscript,120,auto,underline,144,auto,copy-rtl,168,auto,copy,192,auto,cut-rtl,216,auto,cut,240,auto,paste-rtl,264,auto,paste,288,auto,indent-rtl,312,auto,indent,336,auto,outdent-rtl,360,auto,outdent,384,auto,anchor-rtl,408,auto,anchor,432,auto,link,456,auto,unlink,480,auto,bulletedlist-rtl,504,auto,bulletedlist,528,auto,numberedlist-rtl,552,auto,numberedlist,576,auto,redo-rtl,600,auto,redo,624,auto,undo-rtl,648,auto,undo,672,auto','icons.png');
})();
CKEDITOR.lang.languages={"af":1,"sq":1,"ar":1,"eu":1,"bn":1,"bs":1,"bg":1,"ca":1,"zh-cn":1,"zh":1,"hr":1,"cs":1,"da":1,"nl":1,"en":1,"en-au":1,"en-ca":1,"en-gb":1,"eo":1,"et":1,"fo":1,"fi":1,"fr":1,"fr-ca":1,"gl":1,"ka":1,"de":1,"el":1,"gu":1,"he":1,"hi":1,"hu":1,"is":1,"id":1,"it":1,"ja":1,"km":1,"ko":1,"ku":1,"lv":1,"lt":1,"mk":1,"ms":1,"mn":1,"no":1,"nb":1,"fa":1,"pl":1,"pt-br":1,"pt":1,"ro":1,"ru":1,"sr":1,"sr-latn":1,"si":1,"sk":1,"sl":1,"es":1,"sv":1,"tt":1,"th":1,"tr":1,"ug":1,"uk":1,"vi":1,"cy":1};
}());
