import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./login/login"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import List, { ListItem, ListItemText } from 'material-ui/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
            <List>
              <ListItem>
                <Link to="/login">
                  <ListItemText primary="Login"/>
                </Link>
              </ListItem>
            </List>
            <hr/>

            <Route path="/login" component={Login}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
