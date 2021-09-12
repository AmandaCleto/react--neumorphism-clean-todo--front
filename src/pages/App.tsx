import React from 'react';
import '../assets/scss/global.scss';

import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import PersonalProfileContainer from './personalProfile';
import Painel from './painel';
import Login from './login';
import Register from './register';

function App() {
  const loggedIn = true;
  return (
    <Router>
      <div className="screen">
        <Route path="/" exact component={Login}>
          <Redirect to="/login" />
        </Route>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/painel" component={Painel} />
      </div>
    </Router>
  );

}

export default App;
