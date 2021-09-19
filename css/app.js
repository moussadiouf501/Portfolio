// ************************** SEND EMAIL  ********************

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_z5bzimd';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'ENVOYER';
      alert('Sent!');
      document.getElementById('nom').value='';
      document.getElementById('adr').value='';
      document.getElementById('objet').value='';
      document.getElementById('message').value='';
    }, (err) => {
      btn.value = 'ENVOYER';
      alert(JSON.stringify(err));
    });
});

// ******************** FIN SEND EMAIL *********************

// ******************** Scrol menu *********************

var nav = document.getElementById('nav');
window.onscroll = function () {

  if(window.pageYOffset > 80){

   nav.style.position = "fixed";
   nav.style.top = 0;

   }else{
     // nav.style.position = "absolute";
     nav.style.position = 'relative'; //fixed
     nav.style.top = 0;
   }
}

