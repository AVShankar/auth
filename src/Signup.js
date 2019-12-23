import React from 'react'
import ReactDOM from 'react-dom'
import firebaseApp from './firebaseConfig';

class Signup extends React.Component
{

    constructor(props)
    {
      super(props)
      this.state = { newemail: "", newpassword: "" }
    }

    signup()
    {
    firebaseApp.auth().createUserWithEmailAndPassword(this.state.newemail, this.state.newpassword)
    .then(success => console.log("Successfully Signedup"))
    .catch((err) => console.log(err.message));
    }

    cancel()
    {
        ReactDOM.unmountComponentAtNode(document.getElementById('signup'))
    }

    handleChange(event){
        this.setState({
            newemail: this.refs.newemail.value,
            newpassword: this.refs.newpassword.value
        })
    }

    render()
    {
        return(
            <div className="table-bordered">
                <br />
                Create a new account! 
                <input type="text" ref="newemail" className="form-control" onChange={this.handleChange.bind(this)} placeholder="Enter new email address" autoFocus /><br/>
                <input type="password" ref="newpassword" className="form-control" onChange={this.handleChange.bind(this)} placeholder="Create password" /><br/>
                <input type="button" value="Signup" onClick={this.signup.bind(this)} className="btn btn-md btn-success"/> &nbsp;
                <input type="button" value="Cancel" onClick={this.cancel.bind(this)} className="btn btn-md btn-danger"/>
                <br /><br />
            </div>
        )
    }
}

export default Signup;