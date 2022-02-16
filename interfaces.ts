export interface LoginForm {
  username: string;
  password: string;
}

export interface SignupForm {
  fullName: string;
  username: string;
  password: string;
}

export interface SignupState {
  isSignup: boolean;
};
