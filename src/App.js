// import "./styles.css";

import React, { useContext } from "react";
import Login from "./components/Login/Login";
// import Step2login from "./components/Login/Step2login";
// import Step3login from "./components/Login/Step3login";

import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./Store/Auth-context";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <frameElement>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </frameElement>
  );
}

export default App;
