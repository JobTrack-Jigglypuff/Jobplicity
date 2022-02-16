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
}

export interface Application {
  app_id?: number;
  company_name?: string;
  contact?: string;
  deadline?: string;
  description?: string;
  job_title?: string;
  location?: string;
  salary?: string;
  stage?: string;
  url?: string;
  user_id?: number;
}

export interface DashBoardState {
  data: {
    applied: Application[];
    interview: Application[];
    offer: Application[];
    phone: Application[];
    rejected: Application[];
    user_id: number;
  };
}
