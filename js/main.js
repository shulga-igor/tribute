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
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 7000,
        prevArrow: '<div class="arrow-prev"><svg width="20" height="37" xmlns="http://www.w3.org/2000/svg"><path d="M4.001 18.232L19.404 2.83A1.657 1.657 0 1017.06.486L.486 17.06a1.657 1.657 0 000 2.344L17.06 35.979c.324.323.748.485 1.172.485a1.657 1.657 0 001.172-2.83L4.001 18.233z" fill="#FFF" fill-rule="nonzero"/></svg><div>',
        nextArrow: '<div class="arrow-next"><svg width="20" height="37" xmlns="http://www.w3.org/2000/svg"><path d="M15.999 18.232L.596 2.83A1.657 1.657 0 112.94.486L19.514 17.06a1.657 1.657 0 010 2.344L2.94 35.979a1.652 1.652 0 01-1.172.485 1.657 1.657 0 01-1.172-2.83l15.403-15.402z" fill="#FFF" fill-rule="nonzero"/></svg><div>',
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

