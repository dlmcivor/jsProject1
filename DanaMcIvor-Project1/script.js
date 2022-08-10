// when user clicks yes, affirmative image shows
// when user clicks no, negative image shows
// when user clicks maybe, maybe image shows


$(document).ready(function() {
  $("input[name='answer']").on('click', function() {
    if ($(this).val() === 'aYes') {
      $('#divAffirmative').css("display", "block")
    } else {
      $('#divAffirmative').css("display", "none");
    }
  });

  $("input[name='answer']").on('click', function() {
    if ($(this).val() === 'aNo') {
      $('#divNegative').css("display", "block");
    } else {
      $('#divNegative').css("display", "none");
    }
  });

  $("input[name='answer']").on('click', function() {
    if ($(this).val() === 'aMaybe') {
      $('#divMaybe').css("display", "block");
    } else {
      $('#divMaybe').css("display", "none");
    }
  });
});