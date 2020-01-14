export const TOKEN_KEY = "@MbToken";
export const USER_ID_KEY = "@MbUser";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = (token, _id) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_ID_KEY, _id)
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};