$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  $( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    user_input = $(this).serialize();
    console.log(user_input);
     $.post('/grandma', user_input, function(data_response){
      console.log(data_response);
      $('.hold_me').html(data_response);

      
    })



  });

});
