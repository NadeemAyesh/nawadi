/*global $, jQuery, console, alert, prompt */
$(document).ready(function () {
    new WOW().init();

    $('.filter-btn').click(function (e) {
        e.preventDefault();
        $(this).parent().find('.drop-down-filter').slideToggle(250);
        $('#closeSub').click(function (e) {
            e.preventDefault();
            $('.drop-down-filter').slideUp(250);
        })
    });

    $('.scroll-btn').click(function () {
        var body = $("html, body");
        body.stop().animate({scrollTop:$(window).height()}, 800, 'swing', function() {
            // alert("Finished animating");
        });
    });

    $('.scroll-top').click(function () {
        var body = $("html, body");
        body.stop().animate({scrollTop: 0}, 800, 'swing', function() {
            // alert("Finished animating");
        });
    })
});

window.onload = function() {
    $('.loader').fadeOut();
}