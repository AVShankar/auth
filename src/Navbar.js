import React from "react";
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseApp from './firebaseConfig';
import Signin from './Signin'
import Homepage from './Homepage'

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class Navbar extends React.Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
    return (
      <div>
        <div>
          <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand">OAuth</a>
            <form className="form-inline">
            {user 
            ?
              <button className="btn btn-outline-danger my-2 my-sm-0" type="button" onClick={signOut}>Sign out</button> : 
              <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={signInWithGoogle}>Sign in with Google</button>
            }
            </form>
          </nav>
        </div>
        <div className="App">
            {
              user 
                ? <div>
                  <Homepage /> 
                  </div>
                : <div><header className="App"><Signin /><br/>
                <button className="btn btn-primary" onClick={signInWithGoogle}>Sign in with Google</button>
                </header></div>
            }
        </div>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Navbar);
