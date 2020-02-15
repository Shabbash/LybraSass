$(document).ready(function() {

    /////////// Navbar Scroll Styling//////////////////////////

    var myNavbar = $('.navbar');

    $(window).scroll(function() {
        if ($(window).scrollTop() <= 100) {
            myNavbar.removeClass('navbar-scroll');

        } else {
            myNavbar.addClass('navbar-scroll');
        }
    });


});