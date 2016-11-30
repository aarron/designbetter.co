window.$ = window.jQuery = require('jquery');

module.exports = {
  validateEmail: function(email){
    var emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var valid = emailReg.test(email);

    if(!valid) {
      return false;
    } else {
      return true;
    }
  }
}
