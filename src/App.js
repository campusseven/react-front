import React from "react";
import BookMain from "./view/menu/BookMain";
import TodoMain from "./view/menu/TodoMain";
import Home from "./view/menu/Home";
import NavBar from "./view/menu/NavBar";
import GoogleLogin from "./container/GoogleLogin";
import { observer } from "mobx-react";
import { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";


@observer
class App extends Component {
 
  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
            <Route exact path="/books" component={BookMain} />
            <Route exact path="/todos" component={TodoMain} />
             <Route exact path={["/login", "/login/:email","/logout"]} component={GoogleLogin} />
            <Route exact path={["/","/home"]} component={Home} /> 
        </Switch>
      </Router>
    );
  }
}

export default App;
