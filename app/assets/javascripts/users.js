/* global $, Stripe */
//Document ready.
$(document).on('turbolinks:load', function(){
  var theFrom = $('#pro_form');
  var submitBtn = $('#form-submit-btn');
  
  //Set Stripe public key.
  Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
  
  //When users clicks form submit btn,
  submitBtn.click(function(event){
    //prevent default submission behavior.
    event.preventDefault();
      
    //Collect the credit card fields.
    var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
    //Send the card information to Stripe.
  });
  
  
  
  //Stripe will return a card token.
  //Inject card token as hidden field into form.
  //Submit form to our Rails app.  
});
