var xtdr = 30;
var xw = window;
var xd = document;
xtdmc = (xw.xtdmc!=null) ? ";domain=" + xw.xtdmc  : "" ;
xtnv = (xw.xtnv!=null) ? xw.xtnv : xd ;
xtsd = (xw.xtsd!=null) ? xw.xtsd : "http://www" ;
xtsite = (xw.xtsite!=null) ? xw.xtsite : 0;
xtn2 = (xw.xtn2!=null) ? "&s2="+xw.xtn2 : "";
xtp = (xw.xtpage!=null) ? xw.xtpage : "";
xtrd = (xtsite=="redirect") ? true : false;
xtdi = ((xw.xtdi!=null)&&(xw.xtdi!="")) ? "&di=" + xw.xtdi : "";
xtm = (xw.xtparam!=null) ? xw.xtparam : "";

xter = ((xw.xterr!=null)&&(xw.xterr!="")&&(xtm.indexOf("&err",0)<0)) ? "&err=" + xw.xterr : "";
xtmc = ((xw.xtmc!=null)&&(xw.xtmc!="")&&(xtm.indexOf("&mc",0)<0)) ? "&mc=" + xw.xtmc : "";
xtac = ((xw.xtac!=null)&&(xw.xtac!="")&&(xtm.indexOf("&ac",0)<0)) ? "&ac=" + xw.xtac : "";
xtan = ((xw.xtan!=null)&&(xw.xtan!="")&&(xtm.indexOf("&an",0)<0)) ? "&an=" + xw.xtan : "";
xtnp = ((xw.xtnp!=null)&&(xw.xtnp!="")&&(xtm.indexOf("&an",0)<0)) ? "&np=" + xw.xtnp : "";
xtprm = ((xw.xtprm!=null)&&(xtm.indexOf("&x",0)<0)) ? xw.xtprm : "";
xtm += xter+xtmc+xtac+xtan+xtnp+xtprm+xtdi;

try {xt_rfr = top.document.referrer;}
catch(e) {xt_rfr = xtnv.referrer; }
xts = screen;
var xtxp = new Date();
xtxp.setTime(xtxp.getTime()+(xtdr*1000));
var xtdate = new Date();
var xtheureh = xtdate.getTime() / (1000*3600);

function Getxtorcookie(nom)
{	var arg = nom + "=";
	var i = 0 ;
	while (i<xd.cookie.length)
	{var j = i + arg.length;if (xd.cookie.substring(i,j) == arg) {return valeurxtorcook(j);}
	i = xd.cookie.indexOf(" ",i) + 1;if (i==0) {break;}	}
	return null;}

function valeurxtorcook(index)
{var fin = xd.cookie.indexOf(";",index);
if (fin==-1) {fin=xd.cookie.length;};
return unescape(xd.cookie.substring(index,fin));}
	
function recupxtor(param)
{
	var xturl = xtnv.location.search.toLowerCase().replace(/%3d/g,'=');
	xtpos = xturl.indexOf(param+"=");
	if (xtpos > 0)
	{chq = xturl.substring(1, xturl.length);mq = chq.substring(chq.indexOf(param+"="), chq.length);pos3 = mq.indexOf("&");
		if (pos3 == -1) pos3 = mq.indexOf("%26")
		if (pos3 == -1) pos3 = mq.length;
		return mq.substring(mq.indexOf("=")+1, pos3);}
	else {	return null; }
}

function xt_med(type,section,page,x1,x2,x3,x4,x5)
{
	xt_img = new Image();
	xt_ajout = (type=="F") ? "" : (type=="M") ? "&a="+x1+"&m1="+x2+"&m2="+x3+"&m3="+x4+"&m4="+x5 : "&clic="+x1;
	Xt_im = xtsd+'.xiti.com/hit.xiti?s='+xtsite+'&s2='+section;
	Xt_im += '&p='+page+xt_ajout+'&hl=' + xtdate.getHours() + 'x' + xtdate.getMinutes() + 'x' + xtdate.getSeconds();
	if(parseFloat(navigator.appVersion)>=4)
	{Xt_im += '&r=' + xts.width + 'x' + xts.height + 'x' + xts.pixelDepth + 'x' + xts.colorDepth;}
	xt_img.src = Xt_im;
	if ((x2 != null)&&(x2!=undefined)&&(type=="C"))
	{ if ((x3=='')||(x3==null)) { document.location = x2} else {xfen = window.open(x2,'xfen',''); xfen.focus();}}
	else	{return;}
}

if((xtsite!=0)||(xtrd))
{
	xtourl_rf = recupxtor("xtref");		//referrer prioritaire si dans URL
	if (!xtrd)
	{		
		var xtnav = navigator.appName+" "+navigator.appVersion;
		var xtIE = (xtnav.indexOf('MSIE'));
		if (xtIE>=0) {xtvers = parseInt(xtnav.substr(xtIE+5));xtIE=true;}
		else {xtvers = parseFloat(navigator.appVersion);xtIE=false;}
		var xtnet=(xtnav.indexOf('Netscape') >=0);
		var xtmac=(xtnav.indexOf('Mac') >=0);
		var xtOP=(navigator.userAgent.indexOf('Opera') >=0);
		if((xtIE)&&(xtvers >=5)&&(!xtmac)&&(!xtOP)&&(!xtrd))
	 	{
	    	xd.body.addBehavior("#default#clientCaps");
	    	xtconn = '&cn=' + xd.body.connectionType;
	    	xtconn += '&ul=' + xd.body.UserLanguage;
	    	xd.body.addBehavior("#default#homePage");
	    	xthome = (xd.body.isHomePage(location.href))? '&hm=1': '&hm=0';
		   xtresr = '&re='+xd.body.offsetWidth+'x'+xd.body.offsetHeight;
	 	}
		else
		{xtconn = ''; xthome='';if(xtvers >=5){xtresr = '&re='+xw.innerWidth+'x'+xw.innerHeight;}else{xtresr =''};}
		if((xtnet)&&(xtvers >=4)||(xtOP)){var xtlang = '&lng=' + navigator.language;}
		else {if((xtIE)&&(xtvers >=4)&&(!xtOP)){var xtlang = '&lng=' +navigator.userLanguage;} else {xtlang = '';}}
	
		Xt_r = (xtourl_rf!=null) ? xtourl_rf.replace(/[<>]/g, '') : Getxtorcookie("xtref");
		if(Xt_r==null)	{	Xt_r = xt_rfr.replace(/[<>]/g, '')	}			
		Xt_param = 's='+xtsite+xtn2+'&p='+xtp+'&hl='+xtdate.getHours()+'x'+xtdate.getMinutes()+'x'+xtdate.getSeconds();
		Xt_param += xtm+xtconn+xthome+xtlang;
		Xt_i = '<img width="1" height="1" src="'+xtsd+'.xiti.com/hit.xiti?'+Xt_param;
		if(xtvers>=4)
		{Xt_i+='&r='+xts.width+'x'+xts.height+'x'+xts.pixelDepth+'x'+xts.colorDepth;}
		xd.write(Xt_i+xtresr+'&ref='+Xt_r.replace(/&/g, '$')+'" >');
	}
	else
	{
		if(xtourl_rf==null)
		{	xtref = xt_rfr.replace(/[<>]/g, '').replace(/&/g, '$');	}
		else
		{	xtref = xtourl_rf.replace(/[<>]/g, '').replace(/&/g, '$');		}
		xd.cookie = "xtref=" + xtref + " ;expires=" + xtxp.toGMTString() + " ;path=/;" + xtdmc;
		if(xw.xtloc!=null)	{xtnv.location=xw.xtloc;}
	}
}