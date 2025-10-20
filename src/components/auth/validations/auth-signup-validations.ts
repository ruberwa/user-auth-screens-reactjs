export const validateSignupForm = (formData: any) => {
  const errors: any = {};

  if (!formData.firstName.trim()) {
    errors.firstName = 'First name is required';
  }

  if (!formData.lastName.trim()) {
    errors.lastName = 'Last name is required';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email is invalid';
  }

  if (!formData.password) {
    errors.password = 'Password is required';
  } else if (formData.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  if (!formData.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password';
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  if (!formData.agreeToTerms) {
    errors.agreeToTerms = 'You must agree to the terms and conditions';
  }

  return errors;
};

export const getPasswordStrength = (password: string) => {
  if (password.length === 0) return { strength: '', color: '' };
  
  let score = 0;
  if (password.length >= 8) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const strengthLevels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
  const colors = ['text-red-600', 'text-red-500', 'text-yellow-500', 'text-blue-500', 'text-green-500'];

  return {
    strength: strengthLevels[score - 1] || 'Very Weak',
    color: colors[score - 1] || 'text-red-600'
  };
};
