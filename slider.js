const sliderLine = document.querySelector('.slider-line');
let offset = 0;
let timer = 0;

autoSlider();

function autoSlider (){
    timer = setTimeout(function() {
        offset = offset + 256;
        if(offset > 756) {
        offset = 0;
        }
        sliderLine.style.left = - offset + 'px';
        autoSlider();
    },2000);
};