
import React, { Component } from 'react';
import './Browse.css';
import { connect } from 'react-redux';
import { getBooks,setBooksOnRedux } from '../../ducks/reducer';
import { Link } from "react-router-dom";
import axios from 'axios';


class Browse extends Component {
  constructor() {
    super();
    this.state = {
      bookId:''
    }
    this.deleteBook = this.deleteBook.bind(this)
    
  }
  componentDidMount() {
    this.props.getBooks();
  }
  // deleteBook(bookId) {
  //   const {bookId} = this.state
  //   axios.post(`/api/deletebook/${bookId}`, {}).then(res => {
  // })
  // }

  deleteBook(bookId) {
    console.log('deleted!')
    axios.delete('/api/boook/delete/' + bookId)
      .then(res => {
        this.setState({
          test: res.data
        })
      })
  }
  render() {
    // console.log('books',this.props.books)
    return (
      <div className="Browse-Container">
        <h6>Browse inventory</h6>
        <input type="checkbox"/>
        {this.props.books.map((book, i) => {
          return (
            <div key={i} className="Book-Container">
              <book>{book.title}</book>
              <author>{book.author}</author>
              {/* <description>{book.description}</description> */}
              {/* <genre>{book.genre}</genre> */}
              <img src={book.image} alt='Image of book cover' />
              <instock>{book.in_stock ? 'instock' : 'Out Of Stock'}</instock>
              <button> Details</button>
              <Link className='details-link' to={`/details/${book.book_id}`}> link to details</Link>
              <button onClick={this.deleteBook(book.book_id)}>delete</button>
            </div>
          )
        })}
          <Link className='new-book-link' to='/addbook'>+ Add New Book</Link>
      </div>
    );
  }
}

function mapStateToProps({ books }) {
  return { books };
}
// const mapDispatchToProps = { setBooksOnRedux: setBooksOnRedux  }
// mapDispatchToProps,
export default connect(mapStateToProps,  { getBooks })(Browse);