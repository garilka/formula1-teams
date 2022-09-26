const validateRegister = (values) => {
  const errors = {};

  // email validation
  if (!values.email) {
    errors.email = 'Email required';
  } else if (
    !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        .test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  // password validation
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password needs to be at least 8 character long';
  } else if (
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}(?<![0-9])$/
        .test(values.password)) {
    errors.password =
    'The password must contain at least 1 from all of the following characters'+
    ': upper case letter, lower case letter, special charcter, number.'+
    ' Number must not be at the end of the password';
  }

  // passwordAgain validation
  if (!values.passwordAgain) {
    errors.passwordAgain = 'You need to repeat your password here';
  } else if (values.passwordAgain !== values.password) {
    errors.passwordAgain = 'Passwords do not match';
  }

  // nickname validation
  if (!values.nickname.trim()) {
    errors.nickname = 'Nickname required';
  } else if (
    !/^[A-Za-z0-9_]{4,}$/.test(values.nickname)) {
    errors.nickname =
    'Nickname should be at least 4 characters long, '+
    'and cannot contain special characters other than _';
  }

  return errors;
};

export default validateRegister;
