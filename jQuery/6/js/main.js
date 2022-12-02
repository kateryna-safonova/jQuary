$(document).ready(function () {
    // const heading = $('h1');

    // $('#hide').click(function(){
    //     heading.hide(2000, function () {
    //         alert('Element ukryty');
    //     });
    // })
    // $('#show').click(function(){
    //     heading.show(3000);
    // })   
    // $('#show-toggle').click(function(){
    //     heading.toggle(3000);
    // })   
    // $('#fade-out').click(function(){
    //     heading.fadeOut(4000);
    // })   
    // $('#fade-in').click(function(){
    //     heading.fadeIn(2500);
    // })   
    // $('#fade-toggle').click(function(){
    //     heading.fadeToggle(4000);
    // })   
    // $('#slide-up').click(function(){
    //     heading.slideUp(1500);
    // })   
    // $('#slide-down').click(function(){
    //     heading.slideDown(2000);
    // })   
    // $('#slide-toggle').click(function(){
    //     heading.slideToggle(3000);
    // })   
    const heading = $('h1');
    $('#animate').click(function(){
        heading.animate({opacity: 0.3, fontSize: '3em'}, 2000, function(){
            $(this).after('<p>Animacja zakonczona</p>')
        });

    })
});
