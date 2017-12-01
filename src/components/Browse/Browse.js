
import React, { Component } from 'react';
import './Browse.css';
import { connect } from 'react-redux';



class Browse extends Component {
    
  render() {
    return (
      <div className="Browse-Container">
Browse
      </div>
    );
  }
}

function mapStateToProps({user}) {
  return {user};
}

export default connect(mapStateToProps)(Browse);