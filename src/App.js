import React, { Component } from 'react';
import './App.css';
import Login from "./login/login"
import AddStock from "./addStock/addStock"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import List, { ListItem, ListItemText } from 'material-ui/List';
import StockListPage from "./stock/StockListPage"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pop Stock</h1>
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
                <Link to="/addStock">
                  <ListItemText primary="List a Stock"/>
                </Link>
              </ListItem>
            </List>
            <hr/>

            <Route path="/login" component={Login}/>
            <Route exact path="/" component={StockListPage}/>
            <Route path="/addStock" component={AddStock}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
