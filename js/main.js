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
    });


    if(width <= 767){
        chooseSlider();
        stepsSlider();
    }

    function chooseSlider() {
        $('.choose .list').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            prevArrow: '<div class="arrow-prev"><div>',
            nextArrow: '<div class="arrow-next"><div>',
        });
    }

    function stepsSlider() {
        $('.steps .steps-list').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            prevArrow: '<div class="arrow-prev"><div>',
            nextArrow: '<div class="arrow-next"><div>',
            centerPadding: '60px',
        });
    }

    
    


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

