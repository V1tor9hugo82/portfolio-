//portfolio slider

//declarando variaves do slider
var sliderContainer = document.querySelector('.vh-slider-container');
var sliderList = document.querySelector('.vh-slider-list');
var sliderItem = document.querySelectorAll('.vh-slider-item');
const sliderTotalItems = sliderItem.length;
var sliderListWidth = null;
var prevItem = document.querySelector('.vh-item-prev');
var nextItem = document.querySelector('.vh-item-next');
var sliderPos = 0;
var currentSlider = document.querySelector('.current-slider');
var totalSlider = document.querySelector('.vh-total-slider');
var currentCounter = 1;




//capturando larguras individuais 
var containerWidth = sliderContainer.parentElement.offsetWidth;

//passando largura dinamica
sliderContainer.style.width = containerWidth + 'px';

for (var p = 0; p < sliderItem.length; p++) {
  sliderItem[p].style.width = containerWidth + 'px';
  var sliderItemWidth = sliderItem[p].offsetWidth;

  sliderListWidth += sliderItemWidth;
}
sliderList.style.width = sliderListWidth + 'px';

//fazendo animaçao do slider onClick


//Handlers

//next slider Animação
var nextSliderAnim = function () {
  var lastItem = sliderListWidth - containerWidth;

  if ((-1 * (sliderPos) === lastItem)) {
    return;
  }
  sliderPos -= containerWidth;
  anime({
    targets: sliderList,
    translateX: sliderPos,
  });
}

//prev slider Animação
var prevSliderAnim = function () {
  if (sliderPos === 0) {
    return;
  }
  sliderPos += containerWidth;
  anime({
    targets: sliderList,
    translateX: sliderPos,
  });
}

//counter formatter
var counterFormatter = function (n) {
  if (n < 10) {
    return '0' + n;
  } else {
    return n;
  }
};

//counter add
var counterAdd = function () {
  if ((currentCounter >= 0) && (currentCounter < sliderTotalItems)) {
    currentCounter++;
    currentSlider.innerHTML = counterFormatter(currentCounter);
  }

}

//counter remove
var counterRemove = function () {
  if ((currentCounter > 1) && (currentCounter <= sliderTotalItems)) {
    currentCounter--;
    currentSlider.innerHTML = counterFormatter(currentCounter);
  }

}

//actions
totalSlider.innerHTML = counterFormatter(sliderTotalItems);


nextItem.addEventListener('click', function () {
  nextSliderAnim();
  counterAdd();
});

prevItem.addEventListener('click', function () {
  prevSliderAnim();
  counterRemove();
});