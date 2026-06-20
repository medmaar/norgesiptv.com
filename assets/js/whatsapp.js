
emailjs.init('rXnp1UdbIWXEUMeFc');
document.getElementById('wa-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var btn = document.getElementById('wa-submit');
  var name = document.getElementById('wa-name').value.trim();
  var phone = document.getElementById('wa-phone').value.trim();
  btn.disabled = true;
  btn.textContent = 'Sender…';
  emailjs.send('service_9lgohwf', 'template_3ft4wxn', {
   from_name:  name,
   from_email: 'Ikke oppgitt',
   phone:    phone,
   country:   'Ikke oppgitt',
   device:    'WhatsApp forespørsel',
   plan:     'WhatsApp-kontakt forespørsel',
   message:   'Navn: ' + name + '\nWhatsApp: ' + phone,
   site_name:  'NorgesIPTV.com',
   to_email:  'hjelp@norgesiptv.com',
  }).finally(function() {
   document.getElementById('success-name').textContent = name;
   document.getElementById('form-area').style.display = 'none';
   document.getElementById('success-area').style.display = 'block';
  });
});
