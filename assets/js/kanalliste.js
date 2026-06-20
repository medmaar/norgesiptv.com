
var NORDIC = ["NORWAY", "SWEDEN", "DENMARK", "FINLAND", "ICELAND"];
var EUROPE = ["NORWAY", "SWEDEN", "DENMARK", "FINLAND", "ICELAND", "UK", "FRANCE", "GERMANY", "SPAIN", "ITALY", "NETHERLANDS", "GREECE", "SWITZERLAND", "BELGIUM", "PORTUGAL", "AUSTRIA", "POLAND", "RUSSIA", "UKRAINE", "BULGARIA", "HUNGARY", "CZECH REPUBLIC", "ROMANIA", "ALBANIA", "CROATIA", "SERBIA", "SLOVENIA", "MONTENEGRO", "ESTONIA", "LATVIA", "LITHUANIA", "GEORGIA", "ARMENIA", "AZERBAIJAN", "CYPRUS", "MALTA", "ANDORRA", "LUXEMBOURG", "LIECHTENSTEIN", "SAN MARINO", "VATICAN CITY", "MONACO", "MAKEDONIA", "EXYU", "BOSNIA AND HERZEGOVINA", "KOSOVO", "SLOVAKIA"];
var AMERICA = ["USA", "CANADA", "BRAZIL", "MEXICO", "ARGENTINA", "COLOMBIA", "CHILE", "PERU", "ECUADOR", "URUGUAY", "CUBA", "PANAMA", "DOMINICAN", "NICARAGUA", "GUYANA", "SURINAME", "CARIBBEAN", "LATINO"];
var ASIA_ME = ["IRAN", "INDIA [EUROPE/UK]", "TURKEY", "PAKISTAN", "HINDI", "TAMIL", "TELUGU", "BENGALI", "KANNADA", "MALAYALAM", "PUNJABI", "GUJARATI", "BHOJPURI", "SPORTS", "BANGLA", "PHILIPPINES", "SOUTH KOREA", "MALAYSIA", "JAPAN", "THAILAND", "INDONESIA", "VIETNAM", "MYANMAR (BURMA)", "CAMBODIA", "SINGAPORE", "BRUNEI", "NEPAL", "SRI LANKA", "MALDIVES", "BHUTAN", "EAST TIMOR (TIMOR-LESTE)", "NORTH KOREA", "KYRGYZSTAN", "TAJIKISTAN", "TURKMENISTAN", "UZBEKISTAN", "KAZAKHSTAN", "AFGHANISTAN", "ARABIC NEWS & FACTUAL", "MOROCCO", "TUNISIA", "LEBANON", "UAE", "KUWAIT", "LIBYA", "MAURITANIA", "COMOROS", "DJIBOUTI", "SOMALIA", "YEMEN", "PALESTINE", "BEIN SPORTS 4K", "MYHD & OSN", "ALGERIA", "EGYPT", "JORDAN", "SAUDI ARABIA", "OMAN", "QATAR", "BAHRAIN", "SYRIA", "IRAQ", "SUDAN", "KURDISH"];
var AFRICA = ["SOUTH AFRICA", "GHANA", "KENYA", "UGANDA", "TANZANIA", "RWANDA", "BURUNDI", "MALAWI", "NIGERIA", "ZAMBIA", "ZIMBABWE", "BOTSWANA", "NAMIBIA", "MOZAMBIQUE", "ANGOLA", "GABON", "SOMALIA"];
var SPORT_CATS = ["SPORTS", "BEIN SPORTS 4K"];

var currentFilter = 'all';
var currentSearch = '';

function isInFilter(name) {
  if (currentFilter === 'all') return true;
  if (currentFilter === 'nordic') return NORDIC.indexOf(name) >= 0;
  if (currentFilter === 'europe') return EUROPE.indexOf(name) >= 0;
  if (currentFilter === 'america') return AMERICA.indexOf(name) >= 0;
  if (currentFilter === 'asia') return ASIA_ME.indexOf(name) >= 0;
  if (currentFilter === 'africa') return AFRICA.indexOf(name) >= 0;
  if (currentFilter === 'sport') return SPORT_CATS.indexOf(name) >= 0;
  return true;
}

function setFilter(f, btn) {
  currentFilter = f;
  document.querySelectorAll('.ftab').forEach(function(b){ b.classList.remove('on'); });
  btn.classList.add('on');
  applyVisibility();
}

function filterChannels(q) {
  currentSearch = q.toLowerCase().trim();
  applyVisibility();
}

function applyVisibility() {
  var sections = document.querySelectorAll('.country-sec');
  var noRes = document.getElementById('noResults');
  var shownSections = 0;

  sections.forEach(function(sec) {
    var catName = sec.getAttribute('data-cat');

    if (!isInFilter(catName)) {
      sec.style.display = 'none';
      return;
    }

    var pills = sec.querySelectorAll('.ch-pill');
    var visibleCount = 0;

    if (!currentSearch) {
      pills.forEach(function(p){ p.style.display = ''; });
      visibleCount = pills.length;
      if (NORDIC.indexOf(catName) >= 0) { sec.classList.add('open'); } else { sec.classList.remove('open'); }
    } else if (catName.toLowerCase().indexOf(currentSearch) >= 0) {
      pills.forEach(function(p){ p.style.display = ''; });
      visibleCount = pills.length;
      sec.classList.add('open');
    } else {
      pills.forEach(function(p){
        var match = p.textContent.toLowerCase().indexOf(currentSearch) >= 0;
        p.style.display = match ? '' : 'none';
        if (match) visibleCount++;
      });
      if (visibleCount === 0) {
        sec.style.display = 'none';
        return;
      }
      sec.classList.add('open');
    }

    sec.style.display = '';
    var countEl = sec.querySelector('.ccount');
    if (countEl) countEl.textContent = visibleCount + ' kanaler';
    shownSections++;
  });

  noRes.style.display = shownSections === 0 ? 'block' : 'none';
}

function toggleSec(el) {
  el.classList.toggle('open');
}

function tNav(){document.getElementById('mmenu').classList.toggle('open')}
function cNav(){document.getElementById('mmenu').classList.remove('open')}
function toggleFloat(){document.getElementById('fm').classList.toggle('hidden')}

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
