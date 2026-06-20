
/* ── Nav toggle (matches main site) ── */
function tNav(){document.getElementById('mmenu').classList.toggle('open');}
function cNav(){document.getElementById('mmenu').classList.remove('open');}
window.addEventListener('scroll',function(){
  document.getElementById('nav').style.background=window.scrollY>60?'rgba(6,9,15,0.97)':'rgba(6,9,15,0.88)';
},{passive:true});

/* ── Form → Cloudflare Worker (auto-provisions IPTV trial) ── */
document.addEventListener('DOMContentLoaded', function () {

  var WORKER_URL = 'https://iptv-trial-norgesiptv.medmaar.workers.dev';

  var form      = document.getElementById('trialForm');
  var submitBtn  = document.getElementById('submitBtn');
  var submitText  = document.getElementById('submitText');
  var formContent = document.getElementById('formContent');
  var formSuccess = document.getElementById('formSuccess');
  var errorMsg   = document.getElementById('formErrorMsg');

  function showError(msg) {
   errorMsg.textContent = msg;
   errorMsg.style.display = 'block';
   submitBtn.disabled = false;
   submitText.innerHTML = '🚀 Aktiver gratis IPTV trial';
  }

  function setLoading(on) {
   submitBtn.disabled = on;
   submitText.innerHTML = on
    ? '<span class="spinner"></span> Sender…'
    : '🚀 Aktiver gratis IPTV trial';
  }

  function validate() {
   var email = document.getElementById('fieldEmail').value.trim();
   var phone = document.getElementById('fieldPhone').value.trim();
   /* At least email OR phone must be provided so we can reach the customer */
   if (!email && !phone) {
    showError('⚠️ Vennligst fyll inn e-postadresse eller telefonnummer.');
    return false;
   }
   if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError('⚠️ E-postadressen ser ikke riktig ut.');
    return false;
   }
   return true;
  }

  form.addEventListener('submit', function (e) {
   e.preventDefault();
   errorMsg.style.display = 'none';
   if (!validate()) return;
   setLoading(true);

   var nameVal   = document.getElementById('fieldName').value.trim();
   var emailVal  = document.getElementById('fieldEmail').value.trim();
   var phoneVal  = document.getElementById('fieldPhone').value.trim();
   var countryEl = document.getElementById('fieldCountry'); var countryVal = countryEl.options[countryEl.selectedIndex].text;
   var deviceVal  = document.getElementById('fieldDevice').value;
   var notesVal  = form.querySelector('textarea[name="notes"]').value.trim();

   fetch(WORKER_URL, {
    method  : 'POST',
    headers : { 'Content-Type': 'application/json' },
    body   : JSON.stringify({
      name     : nameVal  || 'Ikke oppgitt',
      email    : emailVal,
      whatsapp  : phoneVal,
      country   : countryVal,
      device   : deviceVal,
      notes    : notesVal
    })
   })
   .then(function(res) {
    return res.json().then(function(data) {
      if (res.ok && data.success) {
        formContent.style.display = 'none';
        formSuccess.style.display = 'block';
        document.getElementById('formCard').scrollIntoView({behavior:'smooth', block:'center'});
      } else {
        showError('⚠️ Feil: ' + (data.error || 'Ukjent feil') + '. Kontakt oss: hjelp@norgesiptv.com');
      }
    });
   })
   .catch(function(err) {
    console.error(err);
    showError('⚠️ Nettverksfeil. Sjekk tilkoblingen eller kontakt oss: hjelp@norgesiptv.com');
    setLoading(false);
   });
  });

  /* FAQ accordion */
  document.querySelectorAll('.fqq').forEach(function(btn) {
   btn.addEventListener('click', function() {
    var item = btn.closest('.fqi'), open = item.classList.contains('open');
    document.querySelectorAll('.fqi.open').forEach(function(x){ x.classList.remove('open'); });
    if (!open) item.classList.add('open');
   });
  });

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

