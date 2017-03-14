$(document).ready(function main () {

  $('#createGreeting').on('click',
  function () {
    $('#greetingOutput').val($('#greetingSelect').val() + ", " + $('#nameInput').val() + "!");
  });
});

//$('.skillset').hide();
//$('.skillset').fadeIn(1000);
//$('.projects').hide();
//$('div').hide();
//$(this).text('Projects Viewed');
//$(this).next().slideToggle(250);
