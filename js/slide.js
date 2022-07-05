var slideWrapper = document.querySelector('.l_container');
var slideitem = document.querySelectorAll('.l_item');
var totalSlides = slideitem.length; // item의 갯수


var sliderWidth = slideWrapper.clientWidth; // container의 width
var slideIndex = 0;
var slider = document.querySelector('.l_slider');

slider.style.width = sliderWidth * totalSlides + 'px';

showSlides()

function showSlides() {
    for (var i = 0; i < slideitem.length; i++) {
        slider.style.left = -(sliderWidth * slideIndex) + 'px';
    }
    slideIndex++;
    if (slideIndex === totalSlides) {
        slideIndex = 0;
    }
    setTimeout(showSlides, 2000);
}
