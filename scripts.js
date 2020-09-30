$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      items: 1,
      dots: true,
      dotsEach: true,
      autoplay: true,
      autoplayTimeout: 4000,
      loop: true
    });
  });

  document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu( "#my-menu", {
          navbar: {
            title: 'Основное меню сайта'
          }, 
        });
    }
);

let form = document.getElementById('form');
form.onsubmit = (EO) => {
  let ok = true
    ok=emailValid(ok) && ok;
    ok=phoneValidationAA(ok) && ok;
    if(!ok) {
        EO.preventDefault()
    } else {
      let data = $('#form').serialize();
      $.ajax({
          url: 'form.php',
          type: 'POST',
          data: data,
          success: function(){
          },
          error: function(){
              alert('Ошибка');
          }
      });
      $('#answer-modal').modal()
      return false
    }
}
function emailValid(err) {

  var emailField=document.getElementById('email-form');
  var emailValue=emailField.value;

  if(emailValue.search(/[А-яЁё]/) !== -1) {
      emailField.className = 'not-valid'
      if(err) emailField.focus()
      return false
  } else if(!emailValue) {
      emailField.className = 'not-valid'
      if(err) emailField.focus()
      return false            
  } else if(emailValue.indexOf('@') === -1 || emailValue.indexOf('&') !== -1
       || emailValue.indexOf('?') !== -1 || emailValue.indexOf('^') !== -1
        || emailValue.indexOf('.') === -1) {
      if(err) emailField.focus()
      emailField.className = 'not-valid'
      return false            
  } else {
      emailField.className = ''
      return true
  }       

};
document.getElementById('email-form').addEventListener('blur', (EO) => emailValid(false), false)

$('#phone-form').mask("+375(99)999-99-99");
function phoneValidationAA(err) {
  let re = /\+\d{3}\(\d{2}\)\d{3}-\d{2}-\d{2}/;

  let phone = document.getElementById('phone-form');
  let phoneField = phone.value
  if(!re.test(phoneField)) {
    phone.className = 'not-valid'
    if(err) phone.focus()
    return false    
  } else {
    phone.className = ''
    return true
  }
}  
document.getElementById('phone-form').addEventListener('blur', (EO) => phoneValidationAA(false), false)