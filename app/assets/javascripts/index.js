$(function() {

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
    var $topLink = $("<span>").addClass("scroll-top").html("Scroll to top &uarr;");
    $(".nav").prepend($topLink);
  });

  $(document).on("click", ".scroll-top", function() {
    $(window).scrollTo("body", 1000);
  });

});