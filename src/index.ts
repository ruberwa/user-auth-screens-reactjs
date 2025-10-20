export type {
  SignupFormData,
  SignupFormErrors,
  SignupProps,
  LoginFormData,
  LoginFormErrors,
  LoginProps
} from './components/auth/interfaces/auth-interfaces';

export {
  validateSignupForm,
  getPasswordStrength
} from './components/auth/validations/auth-signup-validations';
export { validateLoginForm } from './components/auth/validations/auth-login-validations';

export { createSignupHandlers } from './components/auth/utils/auth-signup-utils';
export { createLoginHandlers } from './components/auth/utils/auth-login-utils';

export {
  signupContent,
  authContent
} from './components/auth/book/auth-signup-book';
export { loginContent } from './components/auth/book/auth-login-book';

export { navbarContent } from './shared/book/shared-navbar-book';
export { footerContent } from './shared/book/shared-footer-book';

export { default as Login } from './components/auth/components/forms/Login';
export { default as Signup } from './components/auth/components/forms/Signup';
export { default as Auth } from './components/auth/pages/Auth';
export { default as Navbar } from './shared/layouts/Navbar';
export { default as Footer } from './shared/layouts/Footer';
export { default as Layout } from './shared/layouts/Layout';