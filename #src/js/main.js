
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
const docWidth = document.documentElement.offsetWidth;
[].forEach.call(
    document.querySelectorAll('*'),
    function(el){
        if (el.offsetWidth > docWidth) {
            console.log(el);
        }
    }
)

// jQuery toggleurger function
;$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
// jQuery sliders function
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
        cssEase: 'linear'
    });
    // jQuery readMore function
    
    $('.readMore').click(function(event) {
        $('.adopt__text').toggleClass('short');
    });
     // To up window button
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
        $('.up-button').fadeIn();
        } else {
        $('.up-button').fadeOut();
        }
    });
    // Modal window DONATE
    $(document).ready(function() {
        $('a.donateLink').click( function(event){
            event.preventDefault();
            $('#Overlay').fadeIn(297,	function(){
            $('#donatModal') 
            .css('display', 'block')
            .animate({opacity: 1}, 198);
            });
        });
        $('#donatModal__close, #Overlay').click( function(){
            $('#donatModal').animate({opacity: 0}, 198, function(){
                $(this).css('display', 'none');
                $('#Overlay').fadeOut(297);
            });
        });
    });
});

