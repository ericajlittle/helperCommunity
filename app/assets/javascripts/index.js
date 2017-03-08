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

  // Validation and disable review submit button
  // var $input = $('#review_content'),
  //     $select = $('#review_rating'),
  //     $register = $(':submit');
  // $register.attr('disabled', true);

  // function validateInputs() {
  //   return ($input.val().length > 0) && ($select.find(':selected').val().length > 0)
  // }

  // function validateSubmit() {
  //   if (validateInputs()) {
  //     $register.attr('disabled', false);
  //   } else {
  //     $register.attr('disabled', true);
  //   }
  // }

  // $input.on('blur input', function() {
  //   validateSubmit();
  // })

  // $select.on('change', function() {
  //   validateSubmit();
  // })


});