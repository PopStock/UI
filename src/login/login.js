import React from "react";
import "./login.css";
import {auth} from "firebase";
import firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import {Button} from "material-ui";

// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    auth.GoogleAuthProvider.PROVIDER_ID,
    auth.GithubAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: null
};

export default class Login extends React.Component {


  ui;
  constructor (props) {
    super(props);
    this.state = {
      loginStatus: null,
      loggedIn: false
    };

    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    // Initialize the FirebaseUI Widget using Firebase.
    this.ui = new firebaseui.auth.AuthUI(auth());
    // The start method will wait until the DOM is loaded.
    this.ui.start('#firebaseui-auth-container', uiConfig);

    auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    });
  }

  componentWillUnmount() {
    this.ui.delete();
  }

  logOut() {
    auth().signOut().then(() => {
      this.setState({
        loggedIn: false
      });
    })
  }

  render() {
    return (
      <div>
      <h1>Status: {this.state.loggedIn.toString()}</h1>
        <div className={this.state.loggedIn ? "" : "hidden"}>
          <Button onClick={this.logOut} raised={true}>Log Out</Button>
        </div>
        <div className={this.state.loggedIn ? "hidden" : ""}>
          <div id={"firebaseui-auth-container"}/>
        </div>
      </div>
    )
  }
}