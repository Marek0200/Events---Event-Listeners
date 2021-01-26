$('.button1').click(() => {
    console.log ('Yeah, you clicked me');
  });

  $('.button2').click(() => {
    $(".button1").text('Yeah, you clicked me');
  });

  
//$(".button3").click(() => {
   // $("button").css("background-color", "red")
//});


$(".button3").click(() => {
  $('button').css('background-color',"[inputValue]");
});

