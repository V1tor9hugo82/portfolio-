//declarando variaveis
var btnContact = document.querySelector('.vh-btn-contact');

//page preloader
window.addEventListener('load', function(){
  var pagePreloder = document.querySelector('.vh-preloader');
  pagePreloder.classList.add('vh-fade-out');

  setTimeout(function () {
    pagePreloder.style.display = 'none';
}, 2000);

});

//btn de informações de contato contact
btnContact.addEventListener('click', function() {
  var boxContact = document.querySelector('.vh-contact-info');
  boxContact.classList.toggle('vh-is-open');
  this.classList.toggle('vh-change-icon');
  
});