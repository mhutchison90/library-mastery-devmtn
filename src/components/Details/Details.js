
import React, { Component } from 'react';
import './Details.css';
import { connect } from 'react-redux';



class Details extends Component {
    
  render() {
    return (
      <div className="Details-Container">
Details
      </div>
    );
  }
}

function mapStateToProps({user}) {
  return {user};
}

export default connect(mapStateToProps)(Details);