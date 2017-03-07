$(function() {
  // Add a token to the create Event form for Rails security
  // var token = $('meta[name=csrf-token]').attr("content");
  // $(".modal").find("#create-event").prepend(
  //   $('<input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value=' + token + '>')
  // );

  // Dropdown menu
  $(".dropdown-item").click(function(e) {
    e.stopPropagation();
    $(this).children(".dropdown-menu").slideToggle();
  });

  $(".dropdown-menu").click(function(e) {
    e.stopPropagation();
  });

  $(document).on("click", function() {
    if($(".dropdown-menu").attr("style") == "display: block;") {
      $(".dropdown-menu").slideToggle();
    }
  });

  $(".index-map").find(".search-events").click(function() {
    $(window).scrollTo("#map", 1000);
    var $topLink = $("<span>").addClass("scroll-top").text("Top");
    $(".nav").prepend($topLink);
  });

  $(document).on("click", ".scroll-top", function() {
    $(window).scrollTo("body", 1000);
    // $(".scroll-top").remove();
  });


  // Google Map resize
  // $(window).resize(function() {
  //   var height = $(window).height() - $('nav').height() - $('.index-map .container').height();
  //   $("#map").css('height', height);
  //   google.maps.event.trigger(map,'resize')
  //   console.log(height);
  // });

  // $(window).trigger('resize');
  // var height = $(window).height() - $('nav').height();
  // $(".index-map").css('height', height);
  // // console.log(height);

  // var mapHeight = $(window).height();
  // $("#map").css('height', height);

});