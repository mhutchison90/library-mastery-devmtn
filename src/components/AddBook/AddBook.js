
import React, { Component } from 'react';
import './AddBook.css';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import axios from 'axios';



class AddBook extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      genre: '',
      description: '',
      inStock: false,
      image: ''
    }
    this.saveBook = this.saveBook.bind(this)
  }

  handleChange() {

  }
  saveBook() {
    const {title, author, in_stock, image, genre, description } = this.state
    axios.post('/api/addbook', {title, author, in_stock, image, genre, description }).then(res => {
  })
  }

  render() {
    console.log('state:',this.state)
    return (
      <div className="Browse-Container">
        <div className="AddBook-Container">
          <bookname><input type='text' value={this.state.title} onChange={(e) => {
                    this.setState({
                      title: e.target.value
                    })
                }} /></bookname>
          <authorinput><input type='text' value={this.state.author} onChange={(e) => {
                    this.setState({
                      author: e.target.value
                    })
                }}  /></authorinput>
          <genre><select value={this.state.genre} onChange={(e) => {
                    this.setState({
                      genre: e.target.value
                    })
                }}>
            <option value="" selected disabled placeholder='Please select an option...'></option>
            <option value='Childrens'>Childrens</option>
            <option value='Teen'>Teen</option>
            <option value='Romance'>Romance</option>
            <option value='Horror'>Horror</option>
          </select></genre>
          <description><textarea type='text' value={this.state.description} onChange={(e) => {
                    this.setState({
                      description: e.target.value
                    })
                }} /> </description>
          <imageinput><input type='text' value={this.state.image} onChange={(e) => {
                    this.setState({
                      image: e.target.value
                    })
                }}  /></imageinput>
          <div className='image-preview'>
            <img src={this.state.image} alt='Preview Image' />

          </div>
            <Link className='save-book-link' to='/addbook' onClick={this.saveBook}>+ Add Book To Inventory</Link>
            {/* <button onClick={this.saveBook}>Save!</button> */}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(AddBook);