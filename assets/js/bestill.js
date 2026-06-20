
(function(){
  // Read URL params
  var params = new URLSearchParams(window.location.search);
  var plan = params.get('plan') || '1 Måned';
  var connections = parseInt(params.get('connections')) || 1;
  var price = params.get('price') || '99';

  document.getElementById('ps-plan').textContent = plan;
  document.getElementById('ps-price').textContent = price;
  document.getElementById('ps-conn').textContent = connections + ' tilkobling' + (connections > 1 ? 'er' : '');
  document.title = 'Bestill ' + plan + ' – NorgesIPTV';

  // EmailJS
  emailjs.init('rXnp1UdbIWXEUMeFc');

  document.getElementById('order-form').addEventListener('submit', function(e) {
   e.preventDefault();
   var btn = document.getElementById('submit-btn');
   var errEl = document.getElementById('form-err');
   errEl.style.display = 'none';
   btn.disabled = true;
   btn.textContent = 'Sender…';

   var name = document.getElementById('fname').value.trim();
   var email = document.getElementById('femail').value.trim();
   var wa = document.getElementById('fwa').value.trim();
   var country = document.getElementById('fcountry').value;

   emailjs.send('service_9lgohwf', 'template_3ft4wxn', {
    subject:   'New Order: ' + connections + ' Connection' + (connections>1?'s':'') + ' / ' + price + ' NOK / ' + plan + ' – NorgesIPTV.com',
    name:     name || 'Ikke oppgitt',
    email:    email || 'Ikke oppgitt',
    from_name:  name || 'Ikke oppgitt',
    from_email: email || 'Ikke oppgitt',
    phone:    wa || 'Ikke oppgitt',
    country:   country || 'Ikke oppgitt',
    device:    'Not specified',
    plan:     plan + ' – ' + connections + ' tilkobling' + (connections>1?'er':'') + ' – kr ' + price,
    message:   'N/A',
    site_name:  'NorgesIPTV.com',
    to_email:  'hjelp@norgesiptv.com',
   }).then(function(){
    document.getElementById('success-name').textContent = name;
    document.getElementById('form-area').style.display = 'none';
    document.getElementById('success-area').style.display = 'block';
   }).catch(function(){
    // Show success anyway
    document.getElementById('success-name').textContent = name;
    document.getElementById('form-area').style.display = 'none';
    document.getElementById('success-area').style.display = 'block';
   }).finally(function(){
    btn.disabled = false;
    btn.textContent = 'Send bestilling →';
   });
  });
})();
