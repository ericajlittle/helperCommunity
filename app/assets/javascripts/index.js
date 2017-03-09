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

  // $(document).on("click", "#create-event", function() {
  //   $(this).closest(".modal-card-body").find("input[type=text], textarea").val("");
  // });

  // $(window).trigger('resize');
  // var height = $(window).height() - $('nav').height();
  // $(".index-map").css('height', height);
  // // console.log(height);

  // var mapHeight = $(window).height();
  // $("#map").css('height', height);

  // Validation and disable review submit button
  var $input = $('#review_content'),
      $select = $('#review_rating'),
      $register = $("input[value='Create Review']");
  $register.attr('disabled', true);

  function validateInputs() {
    return ($input.val().length > 0) && ($select.find(':selected').val().length > 0)
  }

  function validateSubmit() {
    if (validateInputs()) {
      $register.attr('disabled', false);
    } else {
      $register.attr('disabled', true);
    }
  }

  $input.on('blur input', function() {
    validateSubmit();
  })

  $select.on('change', function() {
    validateSubmit();
  })

  if($(".user-profile").length) {
    $("nav").addClass("user-nav");
  }

});