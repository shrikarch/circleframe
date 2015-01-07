$(document).ready(function() {

    $("#footer").load("footing.html");

    $('#footer .fa').mouseover(function() {
        var prefix = '.' + $(this).data('social') + '-content';
        $('.pholder').addClass('hide');
        $(prefix).removeClass('fadeOut');
        $(prefix).addClass('fadeIn');
        $(prefix).removeClass('hide');
    });
    $('#footer .fa-facebook').mouseout(function() {
        $('.fb-content').addClass('hide fadeOut');
        $('.pholder').removeClass('hide');
    });
    $('#footer .fa-twitter').mouseout(function() {
        $('.tw-content').addClass('hide fadeOut');
        $('.pholder').removeClass('hide');
    });

    $(document).bind('contextmenu', function (e) {
        e.preventDefault();
        //alert('temporary message showing right click is off.');
    });
    //$('.navigation .nav a').smoothScroll({
    $('.navigation .nav a').smoothScroll({
        offset: -130,
        speed: 1500
    });


});
