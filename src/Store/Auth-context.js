// import React from "react";

// const AuthContext = React.createContext({
//   ///text,object
//   isLoggedIn: false
// });
// export default AuthContext;

///////////bulding and using custom context provider
//////////////////////////
import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  ///text,object
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, colname, password) => {}
});

export const Authcontexprovider = (props) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    const storelogininfo = localStorage.getItem("isLoggedIn");

    if (storelogininfo === "1") {
      setisLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");

    setisLoggedIn(false);
  };
  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setisLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

/////rules
//1)only call react hook in react function
//o2)only call react hook at the top level
//not call hook inside hook
//if statment inside hook not callow

//
