import React from "react";
import "./login.css"
import {auth} from "firebase"
import firebaseui from "firebaseui"
import "firebaseui/dist/firebaseui.css"

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

  constructor (props) {
    super(props);
    this.state = {
      loginStatus: null
    }
  }

  componentDidMount() {
    // Initialize the FirebaseUI Widget using Firebase.
    let ui = new firebaseui.auth.AuthUI(auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
  }

  render() {
    return (
      <div>
      <h1>Status: {this.state.loginStatus}</h1>
      <div id={"firebaseui-auth-container"}/>
      </div>
    )
  }
}