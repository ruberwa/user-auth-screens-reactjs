export const validateLoginForm = (formData: any) => {
  const errors: any = {};

  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email is invalid';
  }

  if (!formData.password) {
    errors.password = 'Password is required';
  }

  return errors;
};
