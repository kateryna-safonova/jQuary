$(document).ready(function () {
    $('#click-button').click(function(){
        $('h1').toggleClass('color-orange');
        $(this).css('background-color', 'green')
    });


    function changeFontSize(e) {
        e.preventDefault();
        $(this).css('font-size', '2em') ;
    }
    $('a').on('click', changeFontSize);



    $('#click-button').on({
        focus: function() {
            $(this).css('border', '10px solid red')
        },
        blur: function() {
            $(this).css('border', '0px solid red')
        }
    });
    


    $('#remove-event').click(function () {
        $('a').off('click', changeFontSize);

        $('#click-button').off('click');

        $('#click-button').off()
    })
});

