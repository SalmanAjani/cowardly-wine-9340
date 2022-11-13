export const loginSuccessAction = (value) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: value,
  };
};

export const loginFailureAction = () => {
  return {
    type: "LOGIN_FAILURE",
  };
};

export const loginLoadingAction = () => {
  return {
    type: "LOGIN_LOADING",
  };
};

export const loginLogoutAction = () => {
  return {
    type: "LOGIN_LOGOUT",
  };
};
