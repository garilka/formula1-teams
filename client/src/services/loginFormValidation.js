const validateLogin = (values) => {
  const errors = {};

  // email validation
  if (!values.email) {
    errors.email = 'Email is required';
  }

  // password validation
  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
};

export default validateLogin;
