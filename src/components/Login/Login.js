
import React, { Component } from 'react';
import './Login.css';
import { connect } from 'react-redux';



class Login extends Component {
    
  render() {
    return (
      <div className="Login-Container">
Login
      </div>
    );
  }
}

function mapStateToProps({user}) {
  return {user};
}

export default connect(mapStateToProps)(Login);