(function($) {
    'use strict';
    
    // Handle page transitions
    $('a').not('[href^="#"]').not('[target="_blank"]').not('[href^="mailto"]').not('[href^="tel"]').click(function(e) {
        var href = $(this).attr('href');
        
        // Only handle internal links
        if (href && href.indexOf('http') !== 0) {
            e.preventDefault();
            
            $('body').addClass('page-transitioning');
            
            setTimeout(function() {
                window.location.href = href;
            }, 300);
        }
    });
    
    // Handle page load
    $(window).on('load', function() {
        $('body').removeClass('page-transitioning');
    });

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
