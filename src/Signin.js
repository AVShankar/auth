import React from "react";
import ReactDOM from 'react-dom'
import firebaseApp from './firebaseConfig';
import Signup from './Signup';



class Signin extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = { email: "", password: "" }
  }

  signin(e){
    e.preventDefault();
    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(user => console.log("Logged in Successfully!"))
    .catch(err => console.log(err.message))
  }

  getDetails()
  {
    this.setState({
      email: this.refs.email.value,
      password: this.refs.pwd.value
    })
  }

  signUp = () =>
  {
    ReactDOM.render(<Signup />, document.getElementById('signup'))
  }

  render() {
    return (
      <div>
        <div className="App">
          <div id="signin">
            <h3>Hello! Welcome to Authenticator</h3><br />
            <input ref="email" type="text" className="form-control" onChange={this.getDetails.bind(this)} placeholder="Email address" autoFocus /><br/>
            <input ref="pwd" type="password" className="form-control" onChange={this.getDetails.bind(this)} placeholder="Password" /><br/>
            <input type="button" value="Login" onClick={this.signin.bind(this)} className="btn btn-md btn-primary"/> OR &nbsp;
            <input type="button" value="Sign-up" onClick={this.signUp} className="btn btn-md btn-primary"/>
          </div><br />
          <div id="signup"></div>
        </div>
      </div>
    );
  }
}

export default Signin;
