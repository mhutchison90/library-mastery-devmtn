
import React, { Component } from 'react';
import './AddBook.css';
import { connect } from 'react-redux';



class AddBook extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author:'',
      genre:'',
      description:'',
      inStock: false
    }
    this.saveBook = this.saveBook.bind(this)

  } 
  render() {
    return (
      <div className="Browse-Container">
AddBook
      </div>
    );
  }
}

function mapStateToProps({user}) {
  return {user};
}

export default connect(mapStateToProps)(AddBook);