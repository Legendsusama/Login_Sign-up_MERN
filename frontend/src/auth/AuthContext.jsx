import { createContext, useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";



const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: localStorage.getItem("token") || null,
  });

  const isTokenExpired = () => {
    if (!auth?.token) return true;
    const { exp } = jwtDecode(auth.token);
    return Date.now() >= exp * 1000;
  };


  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token && user) {
      setAuth({ user: JSON.parse(user), token });
    }

    
    if (auth && isTokenExpired()) {
      logout();
    }


  }, []);

  const login = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setAuth({ token, user });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuth({ token: null, user: null });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
