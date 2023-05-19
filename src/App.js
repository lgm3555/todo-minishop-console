import React from "react";
import Helmet from 'react-helmet';
import { StylesProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";

function App() {
  return (
    <React.Fragment>
        <Helmet defaultTitle={`todo minishop`} />
        <StylesProvider injectFirst>
            <Router>
                <Routes>
                    <Route path='/signIn' exact element={<SignIn />}></Route>
                    <Route path='/signUp' exact element={<SignUp />}></Route>
                    <Route path='/' exact element={<Main />}></Route>
                </Routes>
            </Router>
        </StylesProvider>
    </React.Fragment>
  );
}

export default App;
