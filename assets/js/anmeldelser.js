
function tNav(){document.getElementById('mmenu').classList.toggle('open');}
function cNav(){document.getElementById('mmenu').classList.remove('open');}
window.addEventListener('scroll',function(){document.getElementById('nav').style.background=window.scrollY>60?'rgba(6,9,15,0.97)':'rgba(6,9,15,0.88)';},{passive:true});

/* ── REVIEW DATA ── */
var tpRevs=[
  {name:"Lars Eriksen",flag:"🇳🇴",title:"Beste IPTV Norge jeg har prøvd – endelig ingen buffering",text:"Jeg har prøvd minst fire IPTV-leverandører de siste to årene, og ingen kom i nærheten av NorgesIPTV. Aktivering var rask, support svarte kjapt, og live sport går endelig jevnt."},
  {name:"Anders Dahl",flag:"🇳🇴",title:"Nordic IPTV support som faktisk hjelper",text:"Kundeservice er det som fikk meg til å bli. NorgesIPTV lytter og svarer raskt. Strømmene er stabile selv i rushtiden – stor forskjell fra min forrige IPTV Norway-leverandør."},
  {name:"Oliver Hansen",flag:"🇳🇴",title:"Konsistent beste IPTV fra dag én",text:"Jeg var skeptisk fordi tidligere IPTV-tjenester fungerte fint i en uke og ble ubrukelige. NorgesIPTV har vært konsistent fra dag én. Testet under live IPTV Premier League – jevnt hele veien."},
  {name:"Jonas Berg",flag:"🇳🇴",title:"Beste IPTV Norge – kvalitet og omsorg over resten",text:"Etter å ha sammenlignet NorgesIPTV med to andre Nordic IPTV-leverandører var forskjellen åpenbar. NorgesIPTV hjalp med oppsett av IPTV Smarters Pro og fulgte opp."},
  {name:"Martin Holm",flag:"🇳🇴",title:"Smart IPTV – internett var aldri problemet",text:"Min forrige IPTV-leverandør skyldte alltid på internett. Med NorgesIPTV og Smart IPTV innså jeg at problemet aldri var internett mitt. Stabil 4K IPTV og live sport uten avbrudd."},
  {name:"Simen Nygaard",flag:"🇳🇴",title:"Transparent IPTV Norway-tjeneste",text:"Det som imponerer meg mest med NorgesIPTV er transparens. Support ga ærlige svar uten å overdrive. Etter abonnement stemte alt med det de lovet."},
  {name:"Kristian Lund",flag:"🇳🇴",title:"Rask aktivering og ekte IPTV Smarters Pro-hjelp",text:"Byttet til NorgesIPTV etter at den gamle tjenesten sviktet under kamp. NorgesIPTV aktiverte raskt og veiledet meg tålmodig gjennom IPTV Smarters Pro-oppsett på Smart TV."},
  {name:"Thomas Hagen",flag:"🇳🇴",title:"Bedre stabilitet og best IPTV provider support",text:"NorgesIPTV tilbyr bedre stabilitet enn andre IPTV Norway-leverandører. Kanaler laster raskt og alt fungerer som det skal."},
  {name:"Andreas Karlsen",flag:"🇳🇴",title:"Nordic IPTV – optimalisert og pålitelig",text:"Support ga nyttige tips i stedet for kopier-lim-svar. Tjenesten føles optimalisert og pålitelig – ekte Nordic IPTV-kvalitet."},
  {name:"Nicolai Christensen",flag:"🇳🇴",title:"Beste IPTV Norge – konsistens andre ikke kan matche",text:"Den største forskjellen mellom NorgesIPTV og andre IPTV-tjenester er konsistens. Kundeservice sjekket inn etter aktivering – det skjer ikke med vanlig IPTV Norway."},
  {name:"William Jensen",flag:"🇳🇴",title:"Sammenligningen var ikke engang nær",text:"Testet NorgesIPTV ved siden av min gamle leverandør i en uke. Bedre bildekvalitet, raskere kanalbytte og ingen tilfeldige frakoblinger. Klart beste IPTV."},
  {name:"Emil Andersen",flag:"🇳🇴",title:"Smart IPTV-support forsvinner ikke etter betaling",text:"Det jeg setter pris på med NorgesIPTV er at support ikke forsvinner etter betaling. Spørsmål om Chromecast IPTV og GSE Smart IPTV ble forklart tydelig."},
  {name:"Markus Larsen",flag:"🇳🇴",title:"Mest stabil Nordic IPTV-tjeneste jeg har hatt",text:"Har brukt NorgesIPTV i flere måneder. IPTV Premier League fungerer perfekt, VOD laster raskt, og support er responsiv. Beste Nordic IPTV."},
  {name:"Benjamin Rasmussen",flag:"🇳🇴",title:"Best IPTV provider – sterk ytelse og ekte support",text:"Byttet til NorgesIPTV etter å ha sammenlignet med billigere alternativer. De tjenestene hadde alltid kompromisser. NorgesIPTV leverer sterk ytelse – klart best IPTV provider."},
  {name:"Chris Aas",flag:"🇳🇴",title:"NorgesIPTV gjenopprettet min tillit til IPTV Norge",text:"Etter flere dårlige IPTV Norway-erfaringer var jeg klar til å slutte. NorgesIPTV beviste at en tjeneste kan være stabil, ærlig og støttet av ekte mennesker."},
  {name:"Patrick Olsen",flag:"🇳🇴",title:"Premium Nordic IPTV – pålitelig og ekte",text:"Tjenestekvaliteten med NorgesIPTV er tydelig høyere enn andre IPTV Nordic-leverandører. VOD-utvalget er utmerket og IPTV Smarters Pro fungerer feilfritt."},
  {name:"Stefan Magnusson",flag:"🇳🇴",title:"Leverer nøyaktig hva de annonserer om IPTV Norge",text:"Jeg setter pris på hvor kunnskapsfullt NorgesIPTV-supportteamet er. De forklarte forskjeller mellom IPTV Smarters Pro, Smart IPTV og GSE Smart IPTV."},
  {name:"Jason Falck",flag:"🇳🇴",title:"Pålitelig IPTV Premier League i rushtiden",text:"Det som skiller NorgesIPTV er pålitelighet under store IPTV Premier League-arrangementer. Min gamle leverandør sviktet alltid. NorgesIPTV håndterte alt jevnt."},
  {name:"Daniel Nilsen",flag:"🇳🇴",title:"Raskere, skarpere, bedre – beste IPTV Norway",text:"Etter bytte til NorgesIPTV innså jeg hvor dårlig min forrige IPTV-tjeneste var. 4K IPTV, raskere lasting og ekte Norsk IPTV-support gjør all forskjellen."},
  {name:"Alex Gundersen",flag:"🇳🇴",title:"Premium Nordic IPTV gjort riktig",text:"NorgesIPTV føles som premium Nordic IPTV gjort riktig. Ingen andre matcher dette nivået av stabilitet og kundeomsorg – klart beste IPTV Norge."},
];
var waRevs=[
  {name:"Markus Wilson",flag:"🇳🇴",text:"Bare ville si at tjenesten fungerer kjempebra 👍 IPTV Premier League er jevnt og ingen buffering. Setter pris på den raske hjelpen."},
  {name:"Daniel Cooper",flag:"🇳🇴",text:"Takk for support. Oppsett med IPTV Smarters Pro var enkelt med din hjelp. Mye bedre enn min forrige IPTV Norway-leverandør."},
  {name:"Jakob Fletcher",flag:"🇳🇴",text:"Alt bra nå. Strømmene er stabile selv under kamper. Stor forskjell fra min gamle Nordic IPTV-leverandør."},
  {name:"Ryan Mitchell",flag:"🇳🇴",text:"Fungerer perfekt nå via Smart IPTV på Samsung. Kundeservice var veldig tålmodig. Beste IPTV Norge."},
  {name:"Michael Turner",flag:"🇳🇴",text:"Live kanaler er jevne og VOD laster raskt via GSE Smart IPTV. Fornøyd med IPTV Norway-abonnementet."},
  {name:"Liam Andersen",flag:"🇳🇴",text:"Forventet ikke at support skulle svare så raskt 😅 IPTV Smarters Pro fungerte umiddelbart. Tjenesten ser bra ut."},
  {name:"Thomas Reed",flag:"🇳🇴",text:"Mye mer stabilt enn IPTV-en jeg brukte før. Chromecast IPTV fungerer perfekt med NorgesIPTV."},
  {name:"Chris Walker",flag:"🇳🇴",text:"Testet under IPTV Premier League-kamp og ingen buffering i det hele tatt. Virkelig imponert over Nordic IPTV-kvaliteten."},
  {name:"Nathan Brooks",flag:"🇳🇴",text:"Ingen problemer med IPTV Norway-tjenesten så langt. Stor forbedring fra min forrige leverandør."},
  {name:"Kevin Morris",flag:"🇳🇴",text:"Oppsett av IPTV Smarters Pro gjort og alt fungerer. Takk for steg-for-steg-veiledning, veldig verdsatt."},
  {name:"Daniel Hughes",flag:"🇳🇴",text:"Kanaler laster raskt og 4K IPTV-kvaliteten er god. Anbefaler NorgesIPTV til alle som vil ha beste IPTV Norge."},
  {name:"Alex Peterson",flag:"🇳🇴",text:"Support svarer faktisk og hjelper – det er sjeldent med IPTV. NorgesIPTV er klart best IPTV provider."},
  {name:"Matthew Collins",flag:"🇳🇴",text:"Så på IPTV Premier League og filmer uten problemer. God Nordic IPTV-tjeneste."},
  {name:"Oliver Grant",flag:"🇳🇴",text:"Alt fortsetter å gå jevnt på Smart IPTV. Fornøyd med beste IPTV Norge-abonnementet."},
  {name:"Ryan Scott",flag:"🇳🇴",text:"Testet i rushtiden. Ingen forsinkelse. Stor oppgradering fra siste IPTV Norway-leverandør."},
  {name:"Jonathan Price",flag:"🇳🇴",text:"Solid Nordic IPTV-tjeneste. Support svarte raskt på spørsmål om IPTV Smarters Pro."},
  {name:"Ben Harris",flag:"🇳🇴",text:"Strømmene er klare og stabile. Oppsett av Smart IPTV var enklere enn forventet."},
  {name:"Paul Edwards",flag:"🇳🇴",text:"Fikk ikke denne stabiliteten med min forrige IPTV Norway-leverandør. NorgesIPTV er en stor forskjell."},
  {name:"Jason Miller",flag:"🇳🇴",text:"Alt fungerer som lovet – beste IPTV Norge. Ingen klager på Nordic IPTV-kvaliteten."},
  {name:"Daniel Foster",flag:"🇳🇴",text:"Veldig fornøyd med IPTV Norway-tjenesten. Kundestøtten for IPTV Smarters Pro var utmerket."},
];
var gRevs=[
  {name:"Mattias Collins",rating:5,text:"NorgesIPTV er den første IPTV Norge-tjenesten som ikke skuffet etter første uken. IPTV Premier League er jevnt og 4K IPTV-kvaliteten holder seg konsistent."},
  {name:"Daniel Thompson",rating:5,text:"Byttet fra annen Nordic IPTV-leverandør som bufret under live spill. NorgesIPTV har vært mye bedre. IPTV Smarters Pro-oppsett var enkelt."},
  {name:"Christopher Miller",rating:5,text:"Aktivering av IPTV Norway-abonnementet var rask. Bruker det mest for IPTV Premier League og filmer – ingen store problemer."},
  {name:"Jakob Walker",rating:5,text:"Etter dårlige Nordic IPTV-erfaringer overrasket NorgesIPTV meg. Bildekvaliteten er god og Smart IPTV-oppsett fungerte perfekt."},
  {name:"Ryan Peterson",rating:5,text:"NorgesIPTV har vært pålitelig IPTV Norway-leverandør. Testet i travle timer – alt gikk jevnt med IPTV Smarters Pro."},
  {name:"Andreas Johnson",rating:5,text:"Nordic IPTV med konsistens. Med andre tjenester endrer kvaliteten seg fra dag til dag. NorgesIPTV har vært stabil siden abonnement."},
  {name:"Liam O'Brien",rating:5,text:"Ser mest på IPTV Premier League og PPV-arrangementer. NorgesIPTV håndterer dem bra via Chromecast IPTV."},
  {name:"Michael Harris",rating:5,text:"Kontaktet IPTV Norway-support bare for å bekrefte noen ting og de svarte raskere enn forventet. Best IPTV provider."},
  {name:"Benjamin Carter",rating:5,text:"Sammenlignet med min gamle IPTV Norge-tjeneste er dette mer stabilt og enklere å bruke med IPTV Smarters Pro."},
  {name:"Jason Reynolds",rating:5,text:"Kanaler bytter raskt via Smart IPTV og Nordic IPTV-kvaliteten er konsistent. Support hjalp meg fikse IPTV EIT på noen minutter."},
  {name:"William Andersen",rating:5,text:"Har brukt NorgesIPTV i noen måneder. IPTV Premier League er pålitelig og GSE Smart IPTV fungerer perfekt."},
];

/* ── SLIDER ENGINE ── */
function makeSlider(revs,perPage,renderFn,slideId,dotsId,interval){
  var cur=0,total=Math.ceil(revs.length/perPage),paused=0;
  var slideEl=document.getElementById(slideId),dotsEl=document.getElementById(dotsId);
  function renderDots(){dotsEl.innerHTML='';for(var i=0;i<total;i++){var d=document.createElement('button');d.className='pdot'+(i===cur?' on':'');d.style.width=i===cur?'26px':'10px';d.setAttribute('aria-label','Anmeldelse '+(i+1));(function(idx){d.onclick=function(){go(idx);paused=Date.now()+9000;};})(i);dotsEl.appendChild(d);}}
  function render(){renderFn(revs.slice(cur*perPage,cur*perPage+perPage));renderDots();}
  render();
  requestAnimationFrame(function(){var h=slideEl.scrollHeight;slideEl.style.height=h+'px';slideEl.style.minHeight=h+'px';slideEl.style.overflow='hidden';});
  function go(n){
   var lockedH=slideEl.style.height;
   var inner=slideEl.firstElementChild;
   if(inner){inner.style.animation='none';inner.style.animation='slideOut .28s ease forwards';}
   setTimeout(function(){
    cur=n;render();
    slideEl.style.height=lockedH;slideEl.style.minHeight=lockedH;
    var ni=slideEl.firstElementChild;
    if(ni){ni.style.animation='slideIn .32s ease forwards';}
   },280);
  }
  setInterval(function(){if(Date.now()<paused)return;go((cur+1)%total);},interval);
}

var waIco='<svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

function flagSVG(f){return'<span style="font-size:1.1rem">'+f+'</span>';}
function renderTP(revs){var r=revs[0];document.getElementById('tp-card').innerHTML='<div class="tp-stars">'+'<div class="tp-star"><span>★</span></div>'.repeat(5)+'</div><h3 class="tp-title">'+r.title+'</h3><p class="tp-text">'+r.text+'</p><p class="tp-author">— '+r.name+' '+flagSVG(r.flag)+'</p>';}
function renderWA(revs){document.getElementById('wa-cards').innerHTML=revs.map(function(r){return'<div class="wa-card"><div class="wa-head"><div class="wa-ico">'+waIco+'</div><span class="wa-label">WhatsApp</span></div><p class="wa-text">'+r.text+'</p><p class="wa-author">— '+r.name+' '+flagSVG(r.flag)+'</p></div>';}).join('');}
function renderG(revs){document.getElementById('g-cards').innerHTML=revs.map(function(r){return'<div class="g-card"><div class="g-stars">'+'★★★★★'.split('').map(function(s){return'<span style="color:#FBBC04;font-size:18px">'+s+'</span>';}).join('')+'</div><p class="g-name">'+r.name+'</p><p class="g-text">'+r.text+'</p></div>';}).join('');}

makeSlider(tpRevs,1,renderTP,'tp-slide','tp-dots',5200);
makeSlider(waRevs,2,renderWA,'wa-slide','wa-dots',5700);
makeSlider(gRevs,3,renderG,'g-slide','g-dots',6100);



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
