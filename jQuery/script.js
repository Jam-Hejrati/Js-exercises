$(document).ready(function () {
  $(".text").text("Hello World!");

  $(".buttons button:nth-child(1)").click(function () {
    $(".text").hide();
  });

  $(".buttons button:nth-child(2)").click(function () {
    $(".text").show();
  });

  $(".buttons button:nth-child(3)").click(function () {
    $(".text").toggle(500); // 500 milliseconds
  });

  $("li").each(function (index) {
    console.log(index + 1 + ": " + $(this).text());
  });

  $("button").attr("title", "click me");

  $("p").removeAttr("title");

  $(".second-section input").focus(function () {
    $(this).css("background-color", "#1098ad");
    $(this).mouseleave(function () {
      $(this).css("background-color", "transparent");
    });
  });

  $(".third-section input").on({
    mouseenter: function () {
      $(this).css("background-color", "aqua");
    },
    mouseleave: function () {
      $(this).css("background-color", "lightgray");
    },
    click: function () {
      $(this).css("background-color", "red");
    },
  });

  $(".btn-fadein").click(function () {
    $(".text-section").fadeIn();
  });
  $(".btn-fadeout").click(function () {
    $(".text-section").fadeOut('slow');
  });
  $(".btn-fadetoggle").click(function () {
    $(".text-section").fadeToggle(1000); //milisecond
  });

}); // end of jq
