$(document).ready(function () {
  // $('#about h2').attr('id','main-heading');
  // let titleValue = $('a').eq(1).attr('title');
  // console.log(titleValue)
  // $('section').removeAttr('id');
  // $('section').addClass('main-section');
  // $('.description').removeClass('description');
  // console.log($('section').hasClass('main-section'));
  // $('p').toggleClass('content');
  // $('li').addClass('item ul-item');
  // $('p').css('background-color', 'pink');
  // $('a').css({
  //     'text-decoration': 'none',
  //     'color': 'red',
  //     'font-size': '2em'
  // })
  //   let headingText = $('h2').text();
  //   console.log(headingText)

  //   let parContent = $('p').eq(0).html();
  //   console.log(parContent);

  //     $('h2').text('New heading text');

  //     $('p').eq(0).html('Lorem <span>ipsum</span>');

  //     $('#name').val('Lukash');
  //     $('#contact-form').submit(function (e) {
  //         e.preventDefault();
  //         console.log($("#name").val());
  //         console.log($('#sname').val());
  //     })
//   $(".list-item").css("margin-left", "15px");

  $('.list-item').each(function (index) {
      $(this).css('margin-left', index * 10 +'px'); 
  })

});
