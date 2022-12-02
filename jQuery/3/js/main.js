$(document).ready(function () {
    const newLi = $('<li class="list-item">new item</li>');
    console.log(newLi);

    $('ul').prepend(newLi)

    $('ul').append('<li class="list-item">last-item</li>');

    $('ul').before('<h2>Lista</h2>');

    const newFooter = $('<foteer> Autor: Kateryna Safonova</foteer>');

    $('ul').after(newFooter);

    $('h2').empty();

    $(".content").remove();
})