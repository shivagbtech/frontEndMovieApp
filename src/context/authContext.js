import React from 'react';

export const AuthContext = React.createContext({
  token: "",
  isadmin: false,
  isLoggedIn: false,
  userLogin: (loginResponse) => {},
  userLogout: () => {},
});
