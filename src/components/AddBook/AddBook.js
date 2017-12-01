
import React, { Component } from 'react';
import './AddBook.css';
import { connect } from 'react-redux';



class AddBook extends Component {
    
  render() {
    return (
      <div className="AddBook-Container">
AddBook
      </div>
    );
  }
}

function mapStateToProps({user}) {
  return {user};
}

export default connect(mapStateToProps)(AddBook);