import React from 'react';
import { ThemeProvider }  from '@material-ui/styles';
import Theme from 'theme/AuthTheme';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MenuBar from "components/ManuBar";
import LandingPage from "components/LandingPage";
import LoginPage from "components/LoginPage";
import RegisterPage from "components/RegisterPage";


function App() {
  return (
    <div className="App">
      <ThemeProvider  theme={Theme}>
      <Router>
        <header className="App-header">
          <MenuBar />
        </header>

          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/" component={LandingPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </ThemeProvider >

    </div>
  );
}

export default App;
