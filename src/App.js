import React from "react";
import Helmet from 'react-helmet';
import { StylesProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import SearchPwd from "./pages/FindPwd";

function App() {
  return (
    <React.Fragment>
        <Helmet defaultTitle={`todo minishop`} />
        <StylesProvider injectFirst>
            <Router>
                <Routes>
                    <Route path='/sign-in' exact element={<SignIn />}></Route>
                    <Route path='/sign-up' exact element={<SignUp />}></Route>
                    <Route path='/find-pwd' exact element={<SearchPwd />}></Route>
                    <Route path='/' exact element={<Main />}></Route>
                </Routes>
            </Router>
        </StylesProvider>
    </React.Fragment>
  );
}

export default App;
