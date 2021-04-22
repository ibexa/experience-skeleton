$(document).on('click', 'ul.inside-nav li a[href^="#"]', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-70
    }, 500);
});
