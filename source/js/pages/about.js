var $ = require('jquery');
var validate = require('jquery-validation');
require('../helpers/stretchy.js');

module.exports = {
  onload: function () {
    // Form radio button fills
    // fires when specific label parent is clicked
    // because you can't click labels
    // adds the checked class to the child input of that label
    $(".option").click(function() {
      $(this).children().toggleClass("checked");
      $(this).siblings().children().removeClass("checked");
    });

    // Add Stretchy if there is a textarea class
    Stretchy.selectors.filter = ".textarea";

    // https://www.sitepoint.com/basic-jquery-form-validation-tutorial/
    $('form[name="contact"]').validate({
       // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        messageSubject: "required",
        fullName: "required",
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        siteURL: "required",
        message: "required"
      },
      // Specify validation error messages
      messages: {
        messageSubject: "Please select a message subject",
        fullName: "Please enter your full name",
        email: {
          required: "Please enter a valid email address",
          email: "Your email address must be in the format of name@domain.com"
        },
        siteURL: "Please add your website URL",
        message: "Please add a brief messaage"
      },
      errorElement: 'span',
      errorPlacement: function(error, element) {
        if (element.attr("name") == "messageSubject" ) {
          error.appendTo(".form-item__message-subject");
        } else {
          error.insertAfter(element);
        }
      },
      submitHandler: function(form) {
        $(form).ajaxSubmit();
      }
    });
    // https://www.sitepoint.com/basic-jquery-form-validation-tutorial/
    $('form[name="subscribe"]').validate({
       // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        }
      },
      // Specify validation error messages
      messages: {
        email: {
          required: "Please enter a valid email address",
          email: "Your email address must be in the format of name@domain.com"
        }
      },
      errorElement: 'span',
      errorPlacement: function(error, element) {
        if (element.attr("name") == "messageSubject" ) {
          error.appendTo(".form-item__message-subject");
        } else {
          error.insertAfter(element);
        }
      },
      submitHandler: function(form) {
        $(form).ajaxSubmit();
      }
    });
  }
};
