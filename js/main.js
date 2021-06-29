$( window ).load(function() {

    var width = $(document).width();

    var wow = new WOW({
        animateClass: 'animate__animated',
    })
    wow.init();

    $('.slider-banner').slick({
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
    });


    
    
    $('.mobile-switcher').on('click', function(e){
        e.preventDefault();
        
        $(this).toggleClass('open');
        $('.wrap-nav').toggleClass('open');
    })


    $(document).on('click', '.js-scroll', function(e){
        e.preventDefault();
        var href = $(this).attr('href');
    
        var el = $('*[data-scroll=' + href + ']');
        var offdetEl = el.offset().top;

        $('html, body').animate({
            scrollTop: offdetEl
          }, 800 );

    })


})

