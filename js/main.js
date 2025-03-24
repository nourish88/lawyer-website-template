(function($) {
    'use strict';
    
    // Smooth scrolling for anchor links
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
            }
        }
    });
    
    // Sticky header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('navbar-sticky');
        } else {
            $('.navbar').removeClass('navbar-sticky');
        }
    });
    
    // Contact form submission
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        // Here you would normally add AJAX to submit the form
        alert('Mesajınız gönderildi. En kısa sürede size dönüş yapacağız.');
        this.reset();
    });
    
    // Initialize AOS animation library if included
    if(typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }
    
})(jQuery);
