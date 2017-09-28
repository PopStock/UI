import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import List, { ListItem, ListItemText } from 'material-ui/List';

import Login from "./login/login"
import StockListPage from "./stock/StockListPage"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PopStock</h1>
        </header>
        <Router>
          <div>
            <List>
              <ListItem>
                <Link to="/">
                  <ListItemText primary="Stocks"/>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/login">
                  <ListItemText primary="Login"/>
                </Link>
              </ListItem>
            </List>
            <hr/>

            <Route path="/login" component={Login}/>
            <Route exact path="/" component={StockListPage}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
