
var prices={1:[81,261,351,441],2:[162,450,621,801],3:[243,675,945,1215],4:[324,891,1260,1620],5:[405,1080,1575,2025],6:[486,1296,1890,2430],7:[567,1512,2205,2835],8:[648,1728,2520,3240],9:[729,1944,2835,3645],10:[810,2160,3150,4050]};
var origPrices={1:[null,243,486,972],2:[null,486,972,1944],3:[null,729,1458,2916],4:[null,972,1944,3888],5:[null,1215,2430,4860],6:[null,1458,2916,5832],7:[null,1701,3402,6804],8:[null,1944,3888,7776],9:[null,2187,4374,8748],10:[null,2430,4860,9720]};
var plans=[{name:'1 Måned',badge:null,featured:false},{name:'3 Måneder',badge:null,featured:false},{name:'6 Måneder',badge:'Mest Populær',featured:true},{name:'12 Måneder',badge:'Beste Verdi',featured:false}];
var planSave=[null,'Spar 14% – 3 måneder ekstra verdi','Spar 28% – Mest populær valg','Spar 55% – Beste verdi!'];
var planFeatures=[
  ['50 000+ kanaler + Netflix','120 000+ filmer &amp; serier','4K og HD kvalitet','Alle enheter støttet','VIP 24/7 support','Gratis Ibo Pro-aktivering','30-dagers garanti','Prioritert server'],
  ['50 000+ kanaler + Netflix','120 000+ filmer &amp; serier','4K og HD kvalitet','Alle enheter støttet','VIP 24/7 support','Gratis Ibo Pro-aktivering','30-dagers garanti','Prioritert server'],
  ['50 000+ kanaler + Netflix','120 000+ filmer &amp; serier','4K og HD kvalitet','Alle enheter støttet','VIP 24/7 support','Gratis Ibo Pro-aktivering','30-dagers garanti','Prioritert server'],
  ['🎁 Gratis Ibo Player Pro abonnement','50 000+ kanaler + Netflix','120 000+ filmer &amp; serier','4K og HD kvalitet','Alle enheter støttet','VIP 24/7 support','Gratis Ibo Pro-aktivering','30-dagers garanti','Prioritert server']
];
var selConn=1;

function renderPricing(){
  var cs=document.getElementById('conn-scroll');
  cs.innerHTML='';
  for(var n=1;n<=10;n++){
   var b=document.createElement('button');
   b.className='conn-btn'+(n===selConn?' on':'');
   b.textContent=n+' Tilkobling'+(n>1?'er':'');
   (function(nn){b.onclick=function(){selConn=nn;renderPricing();};})(n);
   cs.appendChild(b);
  }
  var pg=document.getElementById('pgrid');
  pg.innerHTML='';
  var pp=prices[selConn],op=origPrices[selConn];
  var connLabel=selConn+' tilkobling'+(selConn>1?'er':'');
  plans.forEach(function(pl,i){
   var card=document.createElement('div');
   card.className='pcard'+(pl.featured?' featured':'');
   var badgeHtml=pl.badge?'<span class="pbadge">'+pl.badge+'</span>':'';
   var origHtml=op[i]?'<div class="p-orig">Ordinær pris: kr '+op[i]+'</div>':'<div class="p-orig" style="opacity:0">–</div>';
   var saveHtml=planSave[i]?'<div class="p-save">'+planSave[i]+'</div>':'';
   var bonusHtml='';
   var featList=planFeatures[i].filter(function(f){
    if(f.indexOf('🎁')===0){bonusHtml='<div class="p-bonus"><span class="pbi">🎁</span>'+f.replace('🎁 ','')+'</div>';return false;}
    return true;
   });
   var feats=featList.map(function(f){return '<li><span class="ck">✓</span>'+f+'</li>';}).join('');
   card.innerHTML=badgeHtml+
    '<div class="p-period">'+pl.name+'</div>'+
    '<div class="p-price-row"><span class="p-cur">kr</span><span class="p-num">'+pp[i]+'</span></div>'+
    origHtml+saveHtml+
    '<div class="p-conn">/ '+connLabel+'</div>'+
    bonusHtml+'<ul class="p-feats">'+feats+'</ul>'+
    '<a href="bestill.html?plan='+encodeURIComponent(pl.name)+'&connections='+selConn+'&price='+pp[i]+'" class="pbuy-btn">Bestill nå</a>';
   pg.appendChild(card);
  });
}
renderPricing();

function tFaq(btn){var i=btn.parentElement;i.classList.toggle('open');btn.setAttribute('aria-expanded',i.classList.contains('open'));}
function tNav(){document.getElementById('mmenu').classList.toggle('open');}
function cNav(){document.getElementById('mmenu').classList.remove('open');}
function toggleFloat(){document.getElementById('fm').classList.toggle('hidden');}
document.addEventListener('click',function(e){
  var m=document.getElementById('mmenu'),h=document.getElementById('ham');
  if(m.classList.contains('open')&&!m.contains(e.target)&&!h.contains(e.target))m.classList.remove('open');
});



(function(){
  var sales=[
    {code:'no',name:'Ole fra Oslo',action:'kjøpte 12 måneder abonnement',time:'1 minutt siden'},
    {code:'no',name:'Ingrid fra Bergen',action:'kjøpte 6 måneder abonnement',time:'3 minutter siden'},
    {code:'se',name:'Erik fra Stockholm',action:'kjøpte 12 måneder abonnement',time:'2 minutter siden'},
    {code:'no',name:'Lars fra Trondheim',action:'startet gratis prøveperiode',time:'5 minutter siden'},
    {code:'dk',name:'Mads fra København',action:'kjøpte 6 måneder abonnement',time:'4 minutter siden'},
    {code:'no',name:'Kari fra Stavanger',action:'kjøpte 12 måneder abonnement',time:'6 minutter siden'},
    {code:'se',name:'Anna fra Göteborg',action:'kjøpte 3 måneder abonnement',time:'7 minutter siden'},
    {code:'no',name:'Per fra Drammen',action:'kjøpte 6 måneder abonnement',time:'8 minutter siden'},
    {code:'fi',name:'Mikael fra Helsinki',action:'kjøpte 12 måneder abonnement',time:'9 minutter siden'},
    {code:'no',name:'Hanne fra Kristiansand',action:'startet gratis prøveperiode',time:'11 minutter siden'},
    {code:'no',name:'Bjørn fra Tromsø',action:'kjøpte 6 måneder abonnement',time:'13 minutter siden'},
    {code:'se',name:'Sara fra Malmö',action:'kjøpte 12 måneder abonnement',time:'14 minutter siden'},
    {code:'no',name:'Tor fra Fredrikstad',action:'kjøpte 3 måneder abonnement',time:'16 minutter siden'},
    {code:'dk',name:'Sofie fra Aarhus',action:'kjøpte 6 måneder abonnement',time:'18 minutter siden'},
    {code:'no',name:'Rune fra Ålesund',action:'kjøpte 12 måneder abonnement',time:'20 minutter siden'},
  ];
  var snack=document.getElementById('snack-inner');
  var idx=0;
  var showing=false;

  function show(){
    if(showing) return;
    showing=true;
    var s=sales[idx % sales.length]; idx++;
    document.getElementById('snack-flag').src='https://flagcdn.com/w40/'+s.code+'.png';
    document.getElementById('snack-flag').alt=s.code.toUpperCase();
    document.getElementById('snack-name').textContent=s.name;
    document.getElementById('snack-action').textContent=s.action;
    document.getElementById('snack-time').textContent=s.time;
    snack.style.opacity='1';
    snack.style.transform='translateY(0)';
    setTimeout(function(){
      snack.style.opacity='0';
      snack.style.transform='translateY(20px)';
      setTimeout(function(){ showing=false; }, 500);
    }, 4500);
  }

  setTimeout(function(){
    show();
    setInterval(function(){ show(); }, 8000 + Math.random()*6000);
  }, 3000);
})();
