var IMGS={"chairs": "img/chairs.jpg", "dog": "img/dog.jpg", "logo": "img/logo.jpg", "chair": "img/chair.jpg", "brick": "img/brick.jpg", "selfie": "img/selfie.jpg", "facade": "img/facade.jpg", "sign": "img/sign.jpg", "kid": "img/kid.jpg", "kid2": "img/kid2.jpg", "entrance": "img/entrance.jpg", "mirror": "img/mirror.jpg", "cut": "img/cut.jpg", "wide": "img/wide.jpg"},N="573224213654",$=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
var RM=matchMedia("(prefers-reduced-motion:reduce)").matches,FP=matchMedia("(hover:hover) and (pointer:fine)").matches;
$$("img[data-i]").forEach(function(i){i.src=IMGS[i.dataset.i]});
function wa(t){return"https://wa.me/"+N+"?text="+encodeURIComponent(t)}
$$("[data-wa]").forEach(function(a){a.href=wa(a.dataset.wa);a.target="_blank";a.rel="noopener"});
$$("[data-s]").forEach(function(b){b.onclick=function(){window.open(wa("Hola, The Cavaliere. Quisiera consultar por el servicio: "+b.dataset.s+"."),"_blank","noopener")}});
// titulares por palabras
$$(".sp").forEach(function(el){var i=0;el.setAttribute("aria-label",el.textContent);el.innerHTML=el.innerHTML.split("<br>").map(function(l,j){return l.trim().split(/\s+/).map(function(w){return'<span class="w'+(el.hasAttribute("data-it")&&j>0?" it":"")+'" aria-hidden="true"><span style="transition-delay:'+(i++*80)+'ms">'+w+"</span></span>"}).join(" ")}).join("<br>")});
// precarga
var pre=$("#pre");
function ready(){document.body.classList.add("ready");$("#h1").classList.add("v");$$(".ir,.hf .ir").forEach(function(x){if(x.closest(".hf"))x.classList.add("v")})}
if(RM){pre.remove();ready()}else{setTimeout(function(){pre.classList.add("go");setTimeout(ready,350);setTimeout(function(){pre.remove()},1800)},1700)}
// nav
var nav=$("#nav"),bg=$("#bg"),lk=$("#lk");
function tog(o){lk.classList.toggle("o",o);bg.setAttribute("aria-expanded",o);bg.setAttribute("aria-label",o?"Cerrar menú":"Abrir menú")}
bg.onclick=function(){tog(!lk.classList.contains("o"))};
$$("a",lk).forEach(function(a){a.addEventListener("click",function(){tog(false)})});
addEventListener("keydown",function(e){if(e.key==="Escape")tog(false)});
// revelados
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("v");io.unobserve(e.target)}})},{threshold:.12});
$$(".r,.sp:not(#h1),.idx").forEach(function(e){io.observe(e)});
// imágenes: el recorte (clip-path) impide que IntersectionObserver las vea en celular, se revisan por posición
var irs=$$(".ir:not(.hf .ir)");
function rv(){irs=irs.filter(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight*.92){e.classList.add("v");return false}return true})}
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)$$(".links a").forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id)})})},{rootMargin:"-45% 0px -50% 0px"});
$$("main section[id]").forEach(function(s){so.observe(s)});
// scroll: progreso, parallax, cinta
var par=$$("[data-par]"),mq=$("#mq"),pg=$("#pg"),tk=0;
function sc(){tk=0;rv();var y=scrollY,d=document.documentElement;nav.classList.toggle("s",y>40);pg.style.transform="scaleX("+y/Math.max(1,d.scrollHeight-innerHeight)+")";
if(RM)return;var vh=innerHeight;
par.forEach(function(i){var r=i.parentNode.getBoundingClientRect();if(r.bottom<-100||r.top>vh+100)return;var lim=r.height*.035,v=(r.top+r.height/2-vh/2)*-parseFloat(i.dataset.par);i.style.setProperty("--py",Math.max(-lim,Math.min(lim,v)).toFixed(1)+"px")});
var m=mq.parentNode.getBoundingClientRect();if(m.bottom>0&&m.top<vh)mq.style.transform="translateX("+(-(vh-m.top)*.45)+"px)"}
addEventListener("resize",rv);addEventListener("load",rv);addEventListener("scroll",function(){if(!tk){tk=1;requestAnimationFrame(sc)}},{passive:true});sc();
// galeria
var figs=$$("#gal figure");
$$(".filt button").forEach(function(b){b.onclick=function(){$$(".filt button").forEach(function(x){x.setAttribute("aria-pressed",x===b)});figs.forEach(function(f){f.classList.toggle("h",b.dataset.f!=="all"&&f.dataset.c!==b.dataset.f)})}});
var lb=$("#lb"),cur=0;
function vis(){return figs.filter(function(f){return!f.classList.contains("h")})}
function show(i){var v=vis();cur=(i+v.length)%v.length;var im=$("img",v[cur]),L=$("img",lb);L.style.animation="none";L.offsetHeight;L.style.animation="";L.src=im.src;L.alt=im.alt;$("p",lb).textContent=im.alt}
figs.forEach(function(f){$("button",f).onclick=function(){show(vis().indexOf(f));lb.showModal()}});
$(".lx",lb).onclick=function(){lb.close()};$(".lp",lb).onclick=function(){show(cur-1)};$(".ln",lb).onclick=function(){show(cur+1)};
lb.addEventListener("click",function(e){if(e.target===lb)lb.close()});
lb.addEventListener("keydown",function(e){if(e.key==="ArrowLeft")show(cur-1);if(e.key==="ArrowRight")show(cur+1)});
// formulario
var form=$("#f"),t=new Date(),sb=$(".btn",form),st=sb.textContent;form.d.min=t.getFullYear()+"-"+String(t.getMonth()+1).padStart(2,"0")+"-"+String(t.getDate()).padStart(2,"0");
form.onsubmit=function(e){e.preventDefault();var fe=$("#fe");
if(!form.n.value.trim()||!form.s.value||!form.d.value||!form.h.value){fe.textContent="Completa tu nombre, el servicio, la fecha y la hora para continuar.";fe.style.color="#fff";return}
var d=form.d.value.split("-").reverse().join("/");
window.open(wa("Hola, The Cavaliere. Quisiera solicitar una cita (pendiente de confirmación).\n\nNombre: "+form.n.value.trim()+"\nServicio: "+form.s.value+"\nFecha deseada: "+d+"\nHora deseada: "+form.h.value+(form.m.value.trim()?"\nMensaje: "+form.m.value.trim():"")),"_blank","noopener");
sb.textContent="Abriendo WhatsApp…";sb.classList.add("ok");setTimeout(function(){sb.textContent=st;sb.classList.remove("ok")},2500)};
// clic: anillo, chispas y onda en botones
var bursts=[],rings=[];
if(!RM){document.addEventListener("pointerdown",function(e){
var x=e.clientX,y=e.clientY,r=document.createElement("div");r.className="fxr";r.style.left=x+"px";r.style.top=y+"px";document.body.appendChild(r);
r.animate([{transform:"scale(.3)",opacity:.9},{transform:"scale(5)",opacity:0}],{duration:900,easing:"cubic-bezier(.2,.8,.2,1)"}).onfinish=function(){r.remove()};
for(var i=0;i<16;i++){var a=Math.random()*6.283,s=40+Math.random()*180;bursts.push({x:x,y:y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,t:0,l:.8+Math.random()*1,r:.8+Math.random()*1.8})}
var b=e.target.closest&&e.target.closest(".btn,.filt button");
if(b){var br=b.getBoundingClientRect(),p=document.createElement("span");p.className="rp";p.style.left=x-br.left+"px";p.style.top=y-br.top+"px";b.appendChild(p);
p.animate([{transform:"scale(0)",opacity:.35},{transform:"scale("+Math.max(br.width,br.height)/6+")",opacity:0}],{duration:800,easing:"ease-out"}).onfinish=function(){p.remove()}}
},{passive:true})}
// polvo de luz
var cv=$("#dust"),cx=cv.getContext("2d"),W,H,P=[],mx=-999,my=-999,dpr=Math.min(devicePixelRatio||1,1.5),lt=0,lsy=scrollY,sv=0;
function rs(){W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;cv.style.width=W+"px";cv.style.height=H+"px";cx.setTransform(dpr,0,0,dpr,0,0)}
rs();addEventListener("resize",rs);
if(!RM){for(var i=0;i<(innerWidth<700?14:30);i++)P.push({x:Math.random(),y:Math.random(),z:.25+Math.random()*.75,r:.5+Math.random()*1.5,a:Math.random()*6.28,s:.5+Math.random()});
addEventListener("pointermove",function(e){mx=e.clientX;my=e.clientY},{passive:true});
(function L(t){var dt=Math.min(.05,(t-lt)/1000||0);lt=t;sv+=((scrollY-lsy)-sv)*.1;lsy=scrollY;cx.clearRect(0,0,W,H);
var px=(mx>0?mx/W-.5:0)*-26;
P.forEach(function(p){p.y-=dt*.012*p.z;p.x+=Math.sin(t*.0003*p.s+p.a)*dt*.006;p.y-=sv*.00012*p.z;if(p.y<-.02)p.y=1.02;if(p.y>1.02)p.y=-.02;if(p.x<-.02)p.x=1.02;if(p.x>1.02)p.x=-.02;
var X=p.x*W+px*p.z,Y=p.y*H,dx=X-mx,dy=Y-my,d=Math.sqrt(dx*dx+dy*dy);if(0){var f=Math.pow(1-d/160,2)*46;X+=dx/d*f;Y+=dy/d*f}
var tw=.5+.5*Math.sin(t*.0017*p.s+p.a),al=(.07+.28*p.z)*tw;
cx.fillStyle="rgba(255,255,255,"+al.toFixed(3)+")";cx.beginPath();cx.arc(X,Y,p.r*p.z+.3,0,6.283);cx.fill();
if(p.z>.8){cx.fillStyle="rgba(255,255,255,"+(al*.1).toFixed(3)+")";cx.beginPath();cx.arc(X,Y,p.r*5,0,6.283);cx.fill()}});
for(var i=bursts.length-1;i>=0;i--){var b=bursts[i];b.t+=dt;if(b.t>b.l){bursts.splice(i,1);continue}b.x+=b.vx*dt;b.y+=b.vy*dt;b.vx*=.96;b.vy*=.96;cx.fillStyle="rgba(255,255,255,"+((1-b.t/b.l)*.9).toFixed(3)+")";cx.beginPath();cx.arc(b.x,b.y,b.r,0,6.283);cx.fill()}
requestAnimationFrame(L)})(0)}
// cursor, vista previa de servicios y botones magnéticos
if(FP&&!RM){
var pv=$("#pv"),pi=$("img",pv),tx=0,ty=0,px2=0,py2=0;
addEventListener("pointermove",function(e){tx=e.clientX;ty=e.clientY},{passive:true});
$$(".sv").forEach(function(s){s.addEventListener("pointerenter",function(){pi.src=IMGS[s.dataset.p];pv.classList.add("on")});s.addEventListener("pointerleave",function(){pv.classList.remove("on")})});
(function L(){px2+=(tx-px2)*.09;py2+=(ty-py2)*.09;pv.style.transform="translate("+(px2+40)+"px,"+(py2-180)+"px) rotate("+((tx-px2)*.03)+"deg)";requestAnimationFrame(L)})();
var hero=$("#inicio");hero.addEventListener("pointermove",function(e){hero.style.setProperty("--hx",e.clientX/innerWidth*100+"%");hero.style.setProperty("--hy",e.clientY/innerHeight*100+"%")},{passive:true});
$$(".cta .btn,.links .btn,#f .btn,#mb").forEach(function(b){b.addEventListener("pointermove",function(e){var r=b.getBoundingClientRect();b.style.setProperty("--tx",0+"px");b.style.setProperty("--ty",0+"px")});b.addEventListener("pointerleave",function(){b.style.setProperty("--tx","0px");b.style.setProperty("--ty","0px")})})}
