import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import SignIn from './containers/Signin';
import SignUp from './containers/Singup';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
