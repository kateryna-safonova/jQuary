$(document).ready(function(){
    const heading = $('div');
    $('#animate').click(function(e){
        heading.animate({marginRight: '100px', height: '100' , width: '100'},3000)
        heading.animate(
            {backgroundColor: 'blue'},5000,function () {
                heading.append('<p></p>').text('Animacja zakonczona').css({
                    color: 'white',
                    'text-align': 'center',
                    'line-height': '30px'
                })
            }
        )
    })

})