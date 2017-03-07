$(function() {
  // Validation and disable review submit button
  var $input = $('#review_content'),
      $select = $('#review_rating'),
      $register = $(':submit');
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
});