import React from "react";
import { useEffect, useState } from "react";
import { checkAuth } from "../service/firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    checkAuth(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider;