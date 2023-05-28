export const isAuthenticated = () => {
  return true;
};

export interface LoginResponseData {
  token: string;
}

export interface RegisterResponseData {
  token: string;
}

export interface APIResponse {
  success: boolean;
  data?: LoginResponseData | RegisterResponseData;
  error?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const login = (_email: string, _password: string): APIResponse => {
  // TODO: implement login
  return {
    success: true,
    data: {
      token: "token",
    },
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const register = (_email: string, _password: string): APIResponse => {
  // TODO: implement register
  return {
    success: true,
    data: {
      token: "token",
    },
  };
};
