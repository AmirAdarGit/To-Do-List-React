import React from "react";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import THEME from "./styled/theme.constants";
import { useState } from "react";
import Header from "./components/Header.component";
import GoogleLogin from "react-google-login";
import ToDoListWrapper from "./components/ToDoListWrapper.component";

function App() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const handleLogin = (googleData) => {
    console.log(googleData);
    setLoginData(googleData);
    console.log(loginData);
  };
  const handleFailure = (results) => {
    alert(results);
  };

  const logOutHandler = (e) => {
    localStorage.removeItem("loginData");
    setLoginData("");
  };
  return (
    <div className="App">
      <ThemeProvider theme={THEME}>
        <Header />
        {!loginData ? (
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={"single_host_origin"}
          ></GoogleLogin>
        ) : (
          <div>
            <ToDoListWrapper
              logOutHandler={logOutHandler}
              loginData={loginData}
            />
          </div>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
