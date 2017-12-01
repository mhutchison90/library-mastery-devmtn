
import React, { Component } from 'react';
import './MyShelf.css';
import { connect } from 'react-redux';



class MyShelf extends Component {
    
  render() {
    return (
      <div className="MyShelf-Container">
MyShelf
      </div>
    );
  }
}

function mapStateToProps({user}) {
  return {user};
}

export default connect(mapStateToProps)(MyShelf);