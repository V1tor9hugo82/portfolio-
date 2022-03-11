//declarando variaveis
var btnContact = document.querySelector('.vh-btn-contact');
var toggleModal = document.querySelectorAll('.vh-toggle-modal');

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

//abrindo e fechando o modal orçamento
for(var i = 0; i < toggleModal.length; i++){
  toggleModal[i].addEventListener('click', function(){
    var overlay = document.querySelector('.vh-overlay');
    var modalOrcamento = document.querySelector('#vh-modal-orcamento');


    overlay.classList.toggle('vh-is-open');
    modalOrcamento.classList.toggle('vh-is-open');
    modalOrcamento.classList.toggle('vh-slide-top-in');
  });
}