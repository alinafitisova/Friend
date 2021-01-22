
//WebP support detection function

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
});
// burger function
;$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header-slider').slick({
        dots: true,
        arrows : false,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        cssEase: 'linear',
        appendArrows: false,
        pauseOnDotsHover: true
        });

    $('.lost-slider').slick({
        dots: false,
        arrows : true,
        infinite: true,
        lazyLoad: 'ondemand',
        speed: 1000,
        cssEase: 'linear',
        appendArrows: false,
        
        });
});

