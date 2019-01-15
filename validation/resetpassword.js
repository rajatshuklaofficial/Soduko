const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateresetpasswordInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.oldpassword = !isEmpty(data.oldpassword) ? data.oldpassword : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (Validator.isEmpty(data.oldpassword)) {
    errors.password = 'Password field is required';
  }
  if (Validator.isEmpty(data.newpassword)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
