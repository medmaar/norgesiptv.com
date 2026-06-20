function tNav(){document.getElementById('mmenu').classList.toggle('open')}function cNav(){document.getElementById('mmenu').classList.remove('open')}


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
