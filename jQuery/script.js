$(function () {
  $(".text").text("Hello World!");

  $(".buttons button:nth-child(1)").on('click' , function () {
    $(".text").hide();
  });

  $(".buttons button:nth-child(2)").on('click', function () {
    $(".text").show();
  });

  $(".buttons button:nth-child(3)").on('click',function () {
    $(".text").toggle(500); // 500 milliseconds
  });

  $("li").each(function (index) {
    console.log(index + 1 + ": " + $(this).text());
  });

  $("button").attr("title" , "click me");

  $("p").removeAttr("title");

  $(".second-section input").on('focus',function () {
    $(this).css("background-color" , "#1098ad");
    $(this).on('mouseleave',function () {
      $(this).css("background-color" , "transparent");
    });
  });

  $(".third-section input").on({
    mouseenter: function () {
      $(this).css("background-color" , "aqua");
    } ,
    mouseleave: function () {
      $(this).css("background-color" , "lightgray");
    } ,
    click: function () {
      $(this).css("background-color" , "red");
    } ,
  });

  $(".btn-fadein").on('click',function () {
    $(".text-section").fadeIn();
  });
  $(".btn-fadeout").on('click',function () {
    $(".text-section").fadeOut("slow");
  });
  $(".btn-fadetoggle").on('click',function () {
    $(".text-section").fadeToggle(1000); //millisecond
  });

  $(".btn-slideup").on('click',function () {
    $(".slide-text-section").slideUp();
  });
  $(".btn-slidedown").on('click',function () {
    $(".slide-text-section").slideDown("slow");
  });
  $(".btn-slidetoggle").on('click',function () {
    $(".slide-text-section").slideToggle(1000); //millisecond
  });

  $(".animate-btn").on('click',function () {
    $('.animate-section > span').animate({
      width: '+=150px' ,
      fontSize: '2rem' ,
      left: '350px'
    })
    $('.animate-section > span').animate({width: 'toggle'} , 'fast')
  });
}); // end of jq
