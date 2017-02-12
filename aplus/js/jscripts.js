$(document).ready(function() {
    
    // Hidden menu
    $( '.hidden__list-icon, .hidden__list ul a' ).click( function() {
        if ( $( '.hidden__list' ).is( ':hidden' ) ) {
            $( '.hidden__list' ).show();
        } else {
            $( '.hidden__list' ).hide();
        }
    });
    
    // Page scroll
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset:30
    });

    $('.element').addClass('animated flipInX');

    $('.center').slick({
        centerPadding: '200px',
        centerMode: true,
        dots: true,
        slidesToShow: 1,
    });

    $('.single-item').slick();
    
});