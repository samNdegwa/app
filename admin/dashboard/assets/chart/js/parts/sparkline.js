if(!_.sparkline){_.sparkline=1;(function($){var Sfa=function(a,b){return $.wk(Rfa,a,b||"line")},rW=function(a){$.V(this);$.Y.call(this);this.Aa=a;this.da(!1)},sW=function(a,b){function c(){this.Pa&&this.Pa.u(16,1)}function d(){this.Pa&&this.Pa.u(64,1)}$.Vw.call(this);this.Fa("sparkline");this.aG=this.$_;this.state=new $.Jw(this);this.Pa=this.vc=this.bb=null;this.Wf=[];this.Zf=[];this.ag=[];this.Hf=null;this.b={};this.Vw=!0;this.O=new $.Dx;this.O.qa("positionFormatter",$.Wo);this.O.qa("size",10);this.O.qa("anchor","center");this.O.qa("offsetX",
0);this.O.qa("offsetY",0);this.O.qa("rotation",0);this.O.pb(this);this.O.Lh=Tfa;this.G=new $.ou;this.G.positionFormatter($.Wo);this.G.format($.Wo);this.G.background(null);this.G.rotation(0);this.G.width(null);this.G.height(null);this.G.fontSize(11);this.G.minFontSize(8);this.G.maxFontSize(72);this.G.pb(this);this.G.Lh=Ufa;this.data(a||null,b);$.Ut(this,this,this.pg,this.Dg,null,this.pg,null,this.sj);$.T(this.va,[["seriesType",8192,1,0,function(){this.Pa&&($.rd(this.Pa),this.Pa=null)}],["pointWidth",
0,0,0,function(){this.Pa&&this.Pa.Uo()&&this.Pa.u(80,1)}],["connectMissingPoints",0,0,0,function(){this.Pa&&!this.Pa.Uo()&&this.Pa.u(80,1)}],["fill",0,0,0,c,this],["negativeFill",0,0,0,c,this],["firstFill",0,0,0,c,this],["lastFill",0,0,0,c,this],["maxFill",0,0,0,c,this],["minFill",0,0,0,c,this],["stroke",0,0,0,c,this],["hatchFill",0,0,0,d,this],["firstHatchFill",0,0,0,d,this],["lastHatchFill",0,0,0,d,this],["maxHatchFill",0,0,0,d,this],["minHatchFill",0,0,0,d,this],["negativeHatchFill",0,0,0,d,this]]);
this.Va()},tW=function(a,b){var c=a.aa().la();if($.E(b)){var d=$.$b("diagonal-brick");c={index:c,sourceHatchFill:d,iterator:a.aa()};c=$.$b(b.call(c))}else c=$.da(b)?b?$.$b("diagonal-brick"):null:$.$b(b);return c},Vfa=function(a){var b=a.aa(),c=b.get("value"),d=b.la();b=$.n(b.get("hatchFill"))?b.get("hatchFill"):d==b.Gb()-1&&$.n(a.i("lastHatchFill"))?a.i("lastHatchFill"):!d&&$.n(a.i("firstHatchFill"))?a.i("firstHatchFill"):c==a.Bg("max")&&$.n(a.i("maxHatchFill"))?a.i("maxHatchFill"):c==a.Bg("min")&&
$.n(a.i("minHatchFill"))?a.i("minHatchFill"):0>c&&$.n(a.i("negativeHatchFill"))?a.i("negativeHatchFill"):a.i("hatchFill");return tW(a,b)},uW=function(a,b){for(var c={},d=a.length;d--;){var e=a[d];if(e){var f=!$.K(e,$.Y);if(f?e.enabled:e.enabled())for(var h=0,k=b.length;h<k;h++){var l=b[h],m=f?e[l]:e[l]();$.n(m)&&(c[l]=$.K(m,$.Xq)?m.F():m)}}}return c},vW=function(a,b){for(var c={},d=a.length;d--;){var e=a[d];if(e)for(var f=!$.K(e,$.Y),h=0,k=b.length;h<k;h++){var l=b[h],m=f?e[l]:e[l]();$.n(m)&&(c[l]=
$.K(m,$.Xq)?m.F():m)}}return c},wW=function(a,b,c,d){if($.ea(b))var e=c[b];else $.z(b)?(e=$.Qs(b,null))||(e=c[b]):$.D(b)?(e=$.Qs(b.type,!0),e.K(b)):e=null;if(e)a[d](e)},xW=function(a,b,c,d){if($.A(b))for(var e=0;e<b.length;e++){var f=b[e];a[d](e,f);$.D(f)&&"scale"in f&&1<f.scale&&a[d](e).scale(c[f.scale])}},yW=function(a,b){var c=a.Dt(b.scales);wW(a,b.xScale,c,"xScale");wW(a,b.yScale,c,"yScale");xW(a,b.lineAxesMarkers,c,"lineMarker");xW(a,b.rangeAxesMarkers,c,"rangeMarker");xW(a,b.textAxesMarkers,
c,"textMarker")},zW=function(a){rW.call(this,a);this.path=$.nk();this.path.zIndex(1);this.f=null;this.b=[this.path]},AW=function(a){zW.call(this,a);this.g=$.nk();this.g.zIndex(1.1);this.b.push(this.g)},BW=function(a){rW.call(this,a)},CW=function(a){zW.call(this,a)},DW=function(a){rW.call(this,a)},EW=function(a,b){var c=new sW(a,b);c.qg();return c},Rfa={kB:"area",mE:"column",Ws:"line",Aoa:"win-loss"};$.H(rW,$.Yt);var FW={};$.g=rW.prototype;$.g.ea=null;$.g.pa=$.Yt.prototype.pa|20;
$.g.sa=$.Yt.prototype.sa|976;$.g.Ax=!1;$.g.li=0;$.g.aa=function(){return this.Aa.aa()};$.g.xc=function(){return this.Aa.xc()};$.g.lc=function(){return this.Aa};$.g.Yj=function(){return!1};
$.g.AB=function(){if(!this.enabled())return null;var a=this.Aa.cb(),b=this.Aa.Xa(),c=this.aa(),d=!1,e=c.get("x");c=c.get("value");if(!$.n(e)||!$.n(c))return null;a.Xj(c)&&(c=window.NaN);b=b.Xj(e)?window.NaN:this.Je(b.transform(e,.5),!0);a=this.Je(a.transform(c,.5),!1);if((0,window.isNaN)(b)||(0,window.isNaN)(a))d=!0;return d?null:[b,a]};$.g.Uo=function(){return!1};$.g.dn=function(){this.enabled()&&(this.Ax=this.Ax?this.QE():this.tJ())&&this.tf();this.enabled()&&this.Ax&&this.Jp()};
$.g.remove=function(){this.Aa.Eb().P(null);this.wa&&this.wa.remove();this.Aa.labels().P(null);rW.B.remove.call(this)};$.g.td=function(){this.Ax=!1;this.ea=this.nb();this.wa||(this.wa=$.lk());this.Bc();var a=this.Aa.G;$.V(a);a.clear();a.P(this.P());a.ja(this.nb());a=this.Aa.O;$.V(a);var b=this.uv();a.dI(b);b=this.Fx();a.eI(b);a.clear();a.P(this.P());a.ja(this.ea)};
$.g.yl=function(){var a=this.Aa.O;a.$();var b=$.da(this.Aa.clip())?this.Aa.clip()?this.Aa.nb():"none":this.Aa.clip();var c=a.Id();c&&c.clip(b);a.da(!1);a.I(4294967295);a=this.Aa.G;a.$();(c=a.Id())&&c.clip(b);a.da(!1);a&&a.I(4294967295);this.J(2)?this.I(0):this.I(4294967295)};
$.g.Fc=function(a){if(!this.de||a)this.de=new $.fw;a=this.aa();var b={chart:{value:this.lc(),type:""},series:{value:this,type:""},index:{value:a.la(),type:"number"},value:{value:a.get("value"),type:"number"},x:{value:a.get("x"),type:"string"},seriesName:{value:"Series "+a.la(),type:"string"}};this.de.yg(a).fj([this,this.lc()]).om({"%XValue":"x"});return $.Pu(this.de,b)};$.g.nk=function(){return this.Fc()};
$.g.lj=function(a){var b=this.aa(),c=b.o("shape");return c?(b=c.mb(),a=$.Ak(a),{value:$.wo(b,a)}):{value:{x:b.o("x"),y:b.o("value")}}};$.g.tJ=function(){return this.QE()};$.g.Je=function(a,b){if(b){var c=this.ea.left;var d=this.ea.width}else c=this.ea.Ta(),d=-this.ea.height;return c+a*d};
$.g.tf=function(){var a=this.Aa;var b=a.aa(),c=b.get("value"),d=b.la();var e=b.get("label");if(d==b.Gb()-1){var f=a.fH();var h=a.b.lastLabels}else d||(f=a.RF(),h=a.b.firstLabels);if(c==a.Bg("max")){var k=a.fh();var l=a.b.maxLabels}else c==a.Bg("min")&&(k=a.gh(),l=a.b.minLabels);if(0>c){var m=a.JH();var p=a.b.negativeLabels}b=a.labels();h=vW([h,l,p,a.b.labels],GW);e=uW([e,f,k,m,b],GW);e=vW([e,h],GW);f=a.G.ie(d);k=null;e.enabled?(k=e.position||a.G.i("position"),k=a.Pa.lj(k),m=a.Pa.Fc(),f?(f.If(m),f.Ec(k)):
f=a.G.add(m,k,d),f.Ei(),f.md(e),k=f):f&&f.clear();(a=k)&&a.$()};
$.g.Jp=function(){var a=this.Aa;var b=a.aa(),c=b.get("value"),d=b.la();var e=b.get("marker");if(d==b.Gb()-1){var f=a.gH();var h=a.b.lastMarkers}else d||(f=a.SF(),h=a.b.firstMarkers);if(c==a.Bg("max")){var k=a.tH();var l=a.b.maxMarkers}else c==a.Bg("min")&&(k=a.AH(),l=a.b.minMarkers);if(0>c){var m=a.KH();var p=a.b.negativeMarkers}b=a.Eb();c=a.b.markers;var q=a.tv(!0);q={fill:q,stroke:$.Il(q)};h=vW([h,l,p,c,q],HW);e=uW([e,f,k,m,b],HW);e=vW([e,h],HW);f=a.O.Pq(d);k=null;e.enabled?(k=e.position||a.O.i("position"),
k=a.Pa.lj(k),f?f.Ec(k):f=a.O.add(k,d),f.Ei(),$.Gx(f,a.O),f.md(e),k=f):f&&f.clear();(a=k)&&a.$()};$.g.uv=function(){return $.Vb(this.Aa.PE(this.Aa.i("fill")))};$.g.Fx=function(){return $.Il(this.uv())};$.g.Ur=function(){var a=this.Aa.O;a.type("circle");a.qa("size",1.8);a.qa("position","center");return{labels:{background:{enabled:!1},position:"center",anchor:"center-bottom"},color:"#4682B4"}};$.g.R=function(){$.rd(this.wa);this.wa=null;rW.B.R.call(this)};$.H(sW,$.Vw);sW.prototype.Oa=function(){return"sparkline"};sW.prototype.sa=$.Vw.prototype.sa|28672;var Tfa=40,Ufa=40;$.g=sW.prototype;$.g.fg=function(a){a=sW.B.fg.call(this,a);var b=this.Pa&&this.Pa.ea||$.fn(0,0,0,0),c=a.clientX;var d=b.left+$.Wj(this.P().Ha()).x;b=(c-d)/b.width;b=this.Xa().Oc(b);b=this.data().find("x",b);0>b&&(b=window.NaN);a.pointIndex=b;return a};$.g.Od=function(){};
$.g.Xr=function(a){var b=this.Pa&&this.Pa.ea||$.fn(0,0,0,0),c=a.clientX;a=a.clientY;var d=$.Wj(this.P().Ha());c-=d.x;a-=d.y;d=b.left;var e=b.top,f=b.width;b=b.height;if(c<d||c>d+f||a<e||a>e+b)return null;b=[];d=(c-d)/f;d=this.Xa().Oc(d);d=$.qr(this.data(),d,$.K(this.Xa(),$.rt));d=d.length?d[0]:window.NaN;e=this.aa();e.select(d)&&(f=e.o("x"),e=e.o("value"),c=$.cn(f,e,c,a),(0,window.isNaN)(f)||(0,window.isNaN)(e)||b.push({W:this,od:[d],tn:d,we:{index:d,dg:c}}));return b};$.g.Hi=function(){return"none"};
$.g.Fc=function(){this.de||(this.de=new $.fw);var a=this.aa();this.de.yg(a).fj([this]);a={x:{value:a.get("x"),type:"string"},value:{value:a.get("value"),type:"number"},index:{value:a.la(),type:"number"},chart:{value:this,type:""}};$.Pu(this.de,a);return this.de};$.g.nk=function(){return this.Fc()};$.g.tu=function(){return!0};$.g.uh=function(a){(a=this.Fg(a))&&this.dispatchEvent(a)};
$.g.Fg=function(a){var b;"pointIndex"in a?b=a.pointIndex:"labelIndex"in a?b=a.labelIndex:"markerIndex"in a&&(b=a.markerIndex);b=$.N(b);a.pointIndex=b;var c=a.type;switch(c){case "mouseout":c="pointmouseout";break;case "mouseover":c="pointmouseover";break;case "mousemove":c="pointmousemove";break;case "mousedown":c="pointmousedown";break;case "mouseup":c="pointmouseup";break;case "click":c="pointclick";break;case "dblclick":c="pointdblclick";break;default:return null}var d=this.data().aa();d.select(b)||
d.reset();return{type:c,actualTarget:a.target,pie:this,iterator:d,sliceIndex:b,pointIndex:b,target:this,originalEvent:a}};$.g.Gi=function(){return this};$.g.Ai=function(){return this};$.g.Te=function(){return[this]};$.g.$d=$.ia;$.g.El=function(a){return $.n(a)?(a=$.xk(a),a!=this.N&&(this.N=a),this):this.N};$.g.Ld=function(){return null};$.g.Rg=function(){return!1};$.g.Yj=function(){return!1};$.g.Ok=$.ia;$.g.Oj=$.ia;$.g.bm=$.ia;$.g.Rp=$.ia;
$.g.Mr=function(a){if($.n(a))return this.si=a,this;this.si||(this.si={});a=$.om(this.i("seriesType"));this.si[a]||(this.si[a]=$.Qc(this.Pa.ma));return this.si};var HW="enabled position anchor offsetX offsetY type size fill stroke".split(" "),GW="enabled background padding position anchor offsetX offsetY rotation width height fontSize fontFamily fontColor fontOpacity fontDecoration fontStyle fontVariant fontWeight letterSpacing textDirection lineHeight textIndent vAlign hAlign wordWrap wordBreak textOverflow selectable disablePointerEvents useHtml".split(" ");
$.g=sW.prototype;$.g.Xa=function(a){if($.n(a)){if(a=$.Ws(this.bb,a,null,15))this.bb=a,this.bb.da(!1),this.u(4096,1);return this}this.bb||(this.bb=$.Vs());return this.bb};$.g.cb=function(a){if($.n(a)){if(a=$.Ws(this.vc,a,null,15))this.vc=a,this.vc.da(!1),this.u(4096,1);return this}this.vc||(this.vc=$.Ss());return this.vc};
$.g.Hm=function(a,b){var c=$.N(a);if((0,window.isNaN)(c)){c=0;var d=a}else c=a,d=b;var e=this.Wf[c];e||(e=new $.Ez,$.W(this,"lineMarker",e),this.Wf[c]=e,$.L(e,this.hy,this),this.u(16384,1));return $.n(d)?(e.K(d),this):e};$.g.Om=function(a,b){var c=$.N(a);if((0,window.isNaN)(c)){c=0;var d=a}else c=a,d=b;var e=this.Zf[c];e||(e=new $.Hz,this.Zf[c]=e,$.L(e,this.hy,this),this.u(16384,1));return $.n(d)?(e.K(d),this):e};
$.g.Sm=function(a,b){var c=$.N(a);if((0,window.isNaN)(c)){c=0;var d=a}else c=a,d=b;var e=this.ag[c];e||(e=new $.Kz,$.W(this,"textMarker",e),this.ag[c]=e,$.L(e,this.hy,this),this.u(16384,1));return $.n(d)?(e.K(d),this):e};$.g.hy=function(){this.u(16384,1)};
$.g.data=function(a,b){return $.n(a)?(this.gg!==a&&(this.gg=a,$.rd(this.kd),$.K(a,$.or)?this.j=this.kd=a.mj():this.j=$.K(a,$.yr)?this.kd=a.ke():(this.kd=new $.yr($.A(a)||$.z(a)?a:null,b)).ke(),this.na=this.j,$.L(this.na,this.Gd,this),this.Pa&&this.Pa.u(16,21),this.u(256,1)),this):this.na};$.g.Gd=function(a){$.X(a,16)&&(this.Pa&&this.Pa.u(16,21),this.u(256,1))};$.g.aa=function(){return this.Xd||this.xc()};$.g.xc=function(){return this.Xd=this.data().aa()};
$.g.cI=function(a){var b=0;$.X(a,32768)&&(b|=256);$.X(a,2048)&&(b=32);$.X(a,1)&&(b=8192);$.X(a,16)&&(b|=8448,this.Nv());$.X(a,4)&&(b|=4096);this.u(b,1)};
var IW=function(){var a={};$.gq(a,[$.Z.lB,$.Z.AX,$.Z.oE,$.Z.BX,$.Z.xX,[0,"seriesType",Sfa],[0,"pointWidth",function(a){return $.ro(a,this.i("pointWidth"))}],[0,"connectMissingPoints",$.sq],[1,"firstFill",$.zq],[1,"lastFill",$.zq],[1,"maxFill",$.zq],[1,"minFill",$.zq],[1,"lastHatchFill",$.Aq],[1,"firstHatchFill",$.Aq],[1,"maxHatchFill",$.Aq],[1,"minHatchFill",$.Aq]]);return a}();$.U(sW,IW);$.g=sW.prototype;
$.g.clip=function(a){return $.n(a)?(null===a&&(a=!1),this.Gf!=a&&(this.Gf=a,this.Pa&&this.Pa.u(4,9)),this):this.Gf};$.g.PE=function(a,b){if($.E(a)){var c=1<arguments.length?this.PE.apply(this,$.Ja(arguments,1)):this.b.color;c={index:this.aa().la(),sourceColor:c,iterator:this.aa()};c=a.call(c)}else c=a;return c};
$.g.i=function(a){var b=sW.B.i.call(this,a);if(!b)switch(a){case "fill":case "negativeFill":case "firstFill":case "lastFill":case "maxFill":case "minFill":case "stroke":case "lastHatchFill":case "firstHatchFill":case "maxHatchFill":case "minHatchFill":b=this.b[a];break;case "hatchFill":case "negativeHatchFill":b=$.n(b)?b:this.b[a]}return b};
$.g.tv=function(a){var b=this.aa(),c=b.get("value"),d=b.la();a=a&&$.n(b.get("fill"))?b.get("fill"):d==b.Gb()-1&&$.n(this.i("lastFill"))?this.i("lastFill"):!d&&$.n(this.i("firstFill"))?this.i("firstFill"):c==this.Bg("max")&&$.n(this.i("maxFill"))?this.i("maxFill"):c==this.Bg("min")&&$.n(this.i("minFill"))?this.i("minFill"):0>c&&$.n(this.i("negativeFill"))?this.i("negativeFill"):this.i("fill");a=this.PE(a);return $.Vb(a)};$.g.Nq=function(){return $.Yb(this.PE(this.i("stroke")))};
$.g.Eb=function(a){this.f||(this.f=new $.Ex,$.W(this,"markers",this.f),$.L(this.f,this.Yo,this));return $.n(a)?(!$.D(a)||"enabled"in a||(a.enabled=!0),this.f.K(a),this):this.f};$.g.KH=function(a){this.Na||(this.Na=new $.Ex,$.W(this,"negativeMarkers",this.Na),$.L(this.Na,this.Yo,this));return $.n(a)?(!$.D(a)||"enabled"in a||(a.enabled=!0),this.Na.K(a),this):this.Na};
$.g.SF=function(a){this.ca||(this.ca=new $.Ex,$.W(this,"firstMarkers",this.ca),$.L(this.ca,this.Yo,this));return $.n(a)?(!$.D(a)||"enabled"in a||(a.enabled=!0),this.ca.K(a),this):this.ca};$.g.gH=function(a){this.ka||(this.ka=new $.Ex,$.W(this,"lastMarkers",this.ka),$.L(this.ka,this.Yo,this));return $.n(a)?(!$.D(a)||"enabled"in a||(a.enabled=!0),this.ka.K(a),this):this.ka};
$.g.tH=function(a){this.ua||(this.ua=new $.Ex,$.W(this,"maxMarkers",this.ua),$.L(this.ua,this.Yo,this));return $.n(a)?(!$.D(a)||"enabled"in a||(a.enabled=!0),this.ua.K(a),this):this.ua};$.g.AH=function(a){this.Ga||(this.Ga=new $.Ex,$.W(this,"minMarkers",this.Ga),$.L(this.Ga,this.Yo,this));return $.n(a)?(!$.D(a)||"enabled"in a||(a.enabled=!0),this.Ga.K(a),this):this.Ga};$.g.Yo=function(a){$.X(a,1)&&this.Pa&&this.Pa.u(128,1)};
$.g.labels=function(a){this.Da||(this.Da=new $.vu,$.W(this,"labels",this.Da),$.L(this.Da,this.Yd,this));return $.n(a)?(!$.D(a)||"enabled"in a||(a.enabled=!0),this.Da.K(a),this):this.Da};$.g.JH=function(a){this.Ja||(this.Ja=new $.vu,$.W(this,"negativeLabels",this.Ja),$.L(this.Ja,this.Yd,this));return $.n(a)?(!$.D(a)||"enabled"in a||(a.enabled=!0),this.Ja.K(a),this):this.Ja};
$.g.RF=function(a){this.U||(this.U=new $.vu,$.W(this,"firstLabels",this.U),$.L(this.U,this.Yd,this));return $.n(a)?(!$.D(a)||"enabled"in a||(a.enabled=!0),this.U.K(a),this):this.U};$.g.fH=function(a){this.ga||(this.ga=new $.vu,$.W(this,"lastLabels",this.ga),$.L(this.ga,this.Yd,this));return $.n(a)?(!$.D(a)||"enabled"in a||(a.enabled=!0),this.ga.K(a),this):this.ga};
$.g.fh=function(a){this.g||(this.g=new $.vu,$.W(this,"maxLabels",this.g),$.L(this.g,this.Yd,this));return $.n(a)?(!$.D(a)||"enabled"in a||(a.enabled=!0),this.g.K(a),this):this.g};$.g.gh=function(a){this.D||(this.D=new $.vu,$.W(this,"minLabels",this.D),$.L(this.D,this.Yd,this));return $.n(a)?(!$.D(a)||"enabled"in a||(a.enabled=!0),this.D.K(a),this):this.D};$.g.Yd=function(a){$.X(a,1)&&this.Pa&&this.Pa.u(256,1)};
$.g.ob=function(){var a;if(this.J(4096)){this.YH();var b=this.Xa(),c=this.cb();b.Cf()&&b.rg();c.Cf()&&c.rg();for(a=this.xc();a.advance();){var d=a.get("x");var e=a.get("value");$.n(d)&&b.Sc(d);$.n(e)&&c.Sc(e)}a=!1;b.Cf()&&(a|=b.Ag());c.Cf()&&(a|=c.Ag());a&&this.Nv();b=-window.Infinity;c=window.Infinity;var f=d=0;for(a=this.xc();a.advance();){var h=this.aa();e=this.cb();h=h.get("value");if(e=e.Xj(h)?null:h)e=$.N(e),(0,window.isNaN)(e)||(b=Math.max(b,e),c=Math.min(c,e),d+=e);f++}a=d/f;this.Ia("max",
b);this.Ia("min",c);this.Ia("sum",d);this.Ia("average",a);this.Ia("pointsCount",f);this.I(4096)}};
$.g.Ri=function(a){if(this.J(8192)&&!this.Pa){var b=this.i("seriesType"),c=FW[b];if(c){c=new c(this);b=$.om(b);c.Fa("chart.defaultSeriesSettings.base.normal");c.Fa("chart.defaultSeriesSettings."+b+".normal");var d=this.ma.defaultSeriesSettings;d&&c.Fa(d.base);d[b]&&c.Fa(d[b]);this.Pa=c;c.Lh=30;$.L(c,this.cI,this);this.b=this.Mr()[$.om(b)]||this.Pa.Ur();this.u(12288,1)}else $.bl(4,null,[b+" series"]),c=null;this.Pa=c}this.ob();if(!this.bf()){$.jr(this.Pa);this.J(4)&&(this.Hf=a.clone().round(),this.Pa.Uo()&&
(c=this.Pa,a=this.Hf,b=c.xc().Gb(),c=c.jG(a),b=(a.width-b*c)%(b-1),0!=a.height%2&&--a.height,0!=b&&(a.left+=Math.floor(b/2),a.width-=b)),this.Nv(),this.u(24576));if(this.J(16384)){a=$.Ga(this.Wf,this.Zf,this.ag);b=0;for(c=a.length;b<c;b++)if(d=a[b])$.V(d),d.Hb()?d.scale(this.cb()):d.scale(this.Xa()),d.ja(this.Hf),d.P(this.Ma),d.$(),d.da(!1);this.I(16384)}if(this.J(8192)){if(a=this.Pa){a.P(this.Ma);a.ja(this.Hf);this.Pa.td();for(a=this.xc();a.advance();)this.Pa.dn();this.Pa.yl();this.Eb().I(4294967295);
this.AH().I(4294967295);this.tH().I(4294967295);this.KH().I(4294967295);this.SF().I(4294967295);this.gH().I(4294967295);this.labels().I(4294967295);this.gh().I(4294967295);this.fh().I(4294967295);this.JH().I(4294967295);this.RF().I(4294967295);this.fH().I(4294967295)}this.I(8192)}$.lr(this.Pa)}};$.g.Nv=function(){this.Pa&&this.Pa.u(80)};$.g.xC=function(){return["x"]};$.g.yC=function(a){return a.get("x")};$.g.wC=function(a){a=a.get("name");return $.z(a)?a:null};
$.g.tj=function(){return!this.aa().Gb()||!(this.Pa&&this.Pa.enabled())};$.g.Dt=function(a){var b,c=this.Oa(),d={};if($.A(a))for(b=0;b<a.length;b++){var e=a[b];$.z(e)&&(e={type:e});e=$.pm(e,b,c);var f=$.Qs(e.type,!1);f.K(e);d[b]=f}else if($.D(a))for(b in a)a.hasOwnProperty(b)&&(e=a[b],$.z(e)&&(e={type:e}),e=$.pm(e,b,c),f=$.Qs(e.type,!1),f.K(e),d[b]=f);return d};$.g.qg=function(){yW(this,this.ma)};
$.g.X=function(a,b){sW.B.X.call(this,a,b);"defaultSeriesSettings"in a&&this.Mr(a.defaultSeriesSettings);this.data(a.data);$.xq(this,IW,a);this.clip(a.clip);this.data(a.data);yW(this,a);a.lastMarkers&&this.gH().ia(!!b,a.lastMarkers);a.firstMarkers&&this.SF().ia(!!b,a.firstMarkers);a.maxMarkers&&this.tH().ia(!!b,a.maxMarkers);a.minMarkers&&this.AH().ia(!!b,a.minMarkers);a.negativeMarkers&&this.KH().ia(!!b,a.negativeMarkers);a.markers&&this.Eb().ia(!!b,a.markers);a.firstLabels&&this.RF().ia(!!b,a.firstLabels);
a.lastLabels&&this.fH().ia(!!b,a.lastLabels);a.maxLabels&&this.fh().ia(!!b,a.maxLabels);a.minLabels&&this.gh().ia(!!b,a.minLabels);a.negativeLabels&&this.JH().ia(!!b,a.negativeLabels);a.labels&&this.labels().ia(!!b,a.labels)};
$.g.F=function(){var a=sW.B.F.call(this);$.Fq(this,IW,a);var b,c={},d=[],e;c[$.oa(this.Xa())]=this.Xa().F();d.push(c[$.oa(this.Xa())]);a.xScale=d.length-1;this.Xa()!=this.cb()&&(c[$.oa(this.cb())]=this.cb().F(),d.push(c[$.oa(this.cb())]));a.yScale=d.length-1;a.clip=$.K(this.Gf,$.J)?this.Gf.F():this.Gf;a.data=this.data().F();a.lastMarkers=this.gH().F();a.lastLabels=this.fH().F();a.firstMarkers=this.SF().F();a.firstLabels=this.RF().F();a.maxMarkers=this.tH().F();a.maxLabels=this.fh().F();a.minMarkers=
this.AH().F();a.minLabels=this.gh().F();a.negativeMarkers=this.KH().F();a.negativeLabels=this.JH().F();a.markers=this.Eb().F();a.labels=this.labels().F();var f=[];for(b=0;b<this.Wf.length;b++)if(e=this.Wf[b]){var h=e.F();if(e=e.scale()){var k=$.oa(e);c[k]?h.scale=(0,$.za)(d,c[k]):(c[k]=e.F(),d.push(c[k]),h.scale=d.length-1)}f.push(h)}f.length&&(a.lineAxesMarkers=f);f=[];for(b=0;b<this.Zf.length;b++)if(e=this.Zf[b]){h=e.F();if(e=e.scale())k=$.oa(e),c[k]?h.scale=(0,$.za)(d,c[k]):(c[k]=e.F(),d.push(c[k]),
h.scale=d.length-1);f.push(h)}f.length&&(a.rangeAxesMarkers=f);f=[];for(b=0;b<this.ag.length;b++)if(e=this.ag[b]){h=e.F();if(e=e.scale())k=$.oa(e),c[k]?h.scale=(0,$.za)(d,c[k]):(c[k]=e.F(),d.push(c[k]),h.scale=d.length-1);f.push(h)}f.length&&(a.textAxesMarkers=f);a.scales=d;return{chart:a}};
$.g.R=function(){$.td(this.Wf,this.Zf,this.ag,this.kd,this.j,this.na,this.Pa,this.f,this.Na,this.ca,this.ka,this.ua,this.Ga,this.Da,this.Ja,this.U,this.ga,this.g,this.D);this.Wf.length=0;this.Zf.length=0;this.ag.length=0;this.j=this.kd=null;delete this.na;delete this.Xd;this.b=this.D=this.g=this.ga=this.U=this.Ja=this.Da=this.Ga=this.ua=this.ka=this.ca=this.Na=this.f=this.Pa=null;sW.B.R.call(this)};$.Ip.sparkline=EW;var JW=sW.prototype;$.F("anychart.sparkline",EW);JW.xScale=JW.Xa;JW.yScale=JW.cb;
JW.lineMarker=JW.Hm;JW.rangeMarker=JW.Om;JW.textMarker=JW.Sm;JW.data=JW.data;JW.clip=JW.clip;JW.lastMarkers=JW.gH;JW.lastLabels=JW.fH;JW.firstMarkers=JW.SF;JW.firstLabels=JW.RF;JW.maxMarkers=JW.tH;JW.maxLabels=JW.fh;JW.minMarkers=JW.AH;JW.minLabels=JW.gh;JW.negativeMarkers=JW.KH;JW.negativeLabels=JW.JH;JW.markers=JW.Eb;JW.labels=JW.labels;JW.getType=JW.Oa;JW.noData=JW.Lm;$.H(zW,rW);$.g=zW.prototype;$.g.dn=function(){if(this.enabled()){var a;if(a=this.Ax?this.QE():this.tJ())this.Jp(),this.tf();this.Ax=this.Aa.i("connectMissingPoints")&&this.Ax||a}};
$.g.td=function(){zW.B.td.call(this);if(!this.bf()&&this.enabled()){var a=this.Aa.cb().transform(0);(0,window.isNaN)(a)&&(a=0);this.li=this.Je($.Za(a,0,1),!1);var b;a=this.b.length;this.J(8)&&(this.wa.zIndex(this.zIndex()),this.I(8));this.J(4)&&(this.Aa.clip()&&($.da(this.Aa.clip())?b=this.ea:b=this.Aa.clip(),this.wa.clip(b)),this.I(4));if(this.J(16)){for(b=0;b<a;b++)this.b[b].clear();this.PY()}if(this.J(2)){b=this.P();this.wa.parent(b);for(b=0;b<a;b++)this.b[b].parent(this.wa);this.f&&this.f.parent(this.wa);
this.I(2)}this.J(64)&&!this.f&&(this.f=$.nk(),this.f.parent(this.wa),this.f.zIndex(2),this.f.vd(!0))}};$.g.yl=function(){this.WP();this.O_();zW.B.yl.call(this)};$.g.lj=function(){var a=this.aa();return{value:{x:a.o("x"),y:a.o("value")}}};$.g.WP=$.ia;$.g.O_=$.ia;$.g.PY=function(){this.path.stroke(this.Aa.Nq(),1);this.path.fill(null)};$.g.Ur=function(){return zW.B.Ur.call(this)};$.H(AW,zW);FW.area=AW;$.g=AW.prototype;$.g.td=function(){AW.B.td.call(this);this.j=window.NaN};$.g.PY=function(){var a=$.Vb(this.Aa.PE(this.Aa.fill()));this.path.stroke(null);this.path.fill(a);this.g.stroke(this.Aa.Nq());this.g.fill(null)};$.g.O_=function(){this.J(64)&&this.f&&(this.f.he(this.path.F()),this.f&&(this.f.stroke(null),this.f.fill(tW(this.Aa,this.Aa.i("hatchFill")))))};
$.g.tJ=function(){var a=this.AB();if(!a)return!1;if(this.J(16)){var b=a[0];a=a[1];this.WP();this.path.moveTo(b,this.li).lineTo(b,a);this.g.moveTo(b,a);this.j=b;this.aa().o("x",b).o("value",a)}return!0};$.g.QE=function(){var a=this.AB();if(!a)return!1;if(this.J(16)){var b=a[0];a=a[1];this.path.lineTo(b,a);this.g.lineTo(b,a);this.j=b;this.aa().o("x",b).o("value",a)}return!0};$.g.WP=function(){(0,window.isNaN)(this.j)||this.path.lineTo(this.j,this.li).close()};
$.g.Ur=function(){var a=AW.B.Ur.call(this);a.stroke={color:"#64b5f6",thickness:1.5};a.fill={color:"#64b5f6",opacity:.5};return a};$.H(BW,rW);FW.column=BW;$.g=BW.prototype;$.g.Ma=null;$.g.Gt=null;$.g.Uo=function(){return!0};$.g.A3=function(){return $.jk()};$.g.jG=function(a){a=a||this.ea;a=Math.floor((this.Aa.Xa().nL()||1/this.aa().Gb())*a.width);a=Math.floor($.M(this.Aa.i("pointWidth"),a));1>a&&(a=1);return a};
$.g.td=function(){BW.B.td.call(this);var a=this.Aa.cb().transform(0);(0,window.isNaN)(a)&&(a=0);this.li=this.Je($.Za(a,0,1),!1);!this.bf()&&this.enabled()&&(this.Ma||(this.Ma=new $.vB(this.A3,$.ia),this.Ma.zIndex(1)),this.J(8)&&(this.wa.zIndex(this.zIndex()),this.I(8)),this.J(4)&&(a=$.da(this.Aa.clip())?this.Aa.clip()?this.ea:"none":this.Aa.clip(),this.wa.clip(a),this.I(4)),this.J(16)&&this.Ma.clear(),this.J(64)&&(this.Gt||(this.Gt=new $.vB(this.A3,$.ia),this.Gt.parent(this.wa),this.Gt.zIndex(2),
this.Gt.vd(!0)),this.Gt.clear()),this.J(2)&&(this.wa.parent(this.P()),this.Ma.parent(this.wa),this.Gt&&this.Gt.parent(this.wa),this.I(2)))};
$.g.QE=function(){var a=this.AB();if(!a)return!1;if(this.J(16)){var b=a[0],c=a[1];c=c<this.li?Math.ceil(c):Math.floor(c);a=$.wB(this.Ma);var d=this.jG(),e=0==d%2?0:.5;this.aa().o("x",b).o("value",c).o("shape",a);var f=Math.min(this.li,c);c=Math.abs(this.li-c);a.po(Math.ceil(b+e-d/2)).qo(f).oo(d).no(c);b=this.aa().o("shape");$.n(b)&&(b.fill(this.Aa.tv(!0)),b.stroke(null))}this.J(64)&&(a=this.aa(),b=this.Gt?$.wB(this.Gt):null,a.o("hatchFillShape",b),a=a.o("shape"),$.n(a)&&b&&b.he(a.F()),b=this.aa().o("hatchFillShape"),
null!=b&&b.stroke(null).fill(Vfa(this.Aa)));return!0};
$.g.Ur=function(){var a=BW.B.Ur.call(this);a.markers||(a.markers={});a.markers.position="center-top";a.labels||(a.labels={});a.labels.position="center-top";a.labels.anchor="center-bottom";a.negativeMarkers||(a.negativeMarkers={});a.negativeMarkers.position="center-bottom";a.negativeLabels||(a.negativeLabels={});a.negativeLabels.position="center-bottom";a.negativeLabels.anchor="center-top";a.stroke={color:"#64b5f6",thickness:1.5};a.fill={color:"#64b5f6",opacity:.7};a.negativeFill={color:"#ef6c00",
opacity:.7};return a};$.H(CW,zW);FW.line=CW;$.g=CW.prototype;$.g.tJ=function(){var a=this.AB();if(!a)return!1;if(this.J(16)){var b=a[0];a=a[1];this.path.moveTo(b,a);this.aa().o("x",b).o("value",a)}return!0};$.g.QE=function(){var a=this.AB();if(!a)return!1;if(this.J(16)){var b=a[0];a=a[1];this.path.lineTo(b,a);this.aa().o("x",b).o("value",a)}return!0};$.g.uv=function(){return this.Aa.Nq()};$.g.Fx=function(){return $.Il(this.Aa.Nq())};
$.g.Ur=function(){var a=CW.B.Ur.call(this);a.stroke={color:"#64b5f6",thickness:1.5};a.fill={color:"#64b5f6",opacity:.5};return a};$.H(DW,BW);FW["win-loss"]=DW;DW.prototype.td=function(){DW.B.td.call(this);this.li=Math.round(this.Je(.5,!1))};DW.prototype.AB=function(){if(!this.enabled())return null;var a=this.Aa.cb(),b=this.Aa.Xa(),c=this.aa(),d=!1,e=c.get("x");c=c.get("value");c=0<c?a.Lf()?0:1:0>c?a.Lf()?1:0:.5;if(!$.n(e)||!$.n(c))return null;a.Xj(c)&&(c=window.NaN);a=b.Xj(e)?window.NaN:this.Je(b.transform(e,.5),!0);b=this.Je(c,!1);if((0,window.isNaN)(a)||(0,window.isNaN)(b))d=!0;return d?null:[a,b]};
DW.prototype.Ur=function(){var a=DW.B.Ur.call(this);a.markers||(a.markers={});a.markers.position="center-top";a.markers.anchor="center-top";a.labels||(a.labels={});a.labels.position="center-top";a.labels.anchor="center-top";a.negativeMarkers||(a.negativeMarkers={});a.negativeMarkers.position="center-bottom";a.negativeMarkers.anchor="center-bottom";a.negativeLabels||(a.negativeLabels={});a.negativeLabels.position="center-bottom";a.negativeLabels.anchor="center-bottom";a.stroke={color:"#64b5f6",thickness:1.5};
a.fill={color:"#64b5f6",opacity:.7};a.negativeFill={color:"#ef6c00",opacity:.7};return a};$.Ip.sparkline=EW;$.F("anychart.sparkline",EW);}).call(this,$)}