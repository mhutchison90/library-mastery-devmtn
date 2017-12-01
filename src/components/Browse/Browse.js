
import React, { Component } from 'react';
import './Browse.css';
import { connect } from 'react-redux';
import {getBooks} from '../../ducks/reducer';



class Browse extends Component {
  componentDidMount(){
    this.props.getBooks();
  }
  render() {
    console.log('books',this.props.books)
    return (
      <div className="Browse-Container">
Browse
      {this.props.books.map((book,i) => {
        return (
        <div key={i} className="Book-Container">
        <div className='book-detail title'> Book Title: {book.title} 
        <div className='book-detail author'>{book.author}</div>
        <div className='book-detail description'>{book.description}</div>
        <div className='book-detail genre'>{book.genre}</div>
        <div className='book-detail image'> <img src={book.image} alt='Image of book cover'/> </div>
        <div className='book-detail in_stock'>{book.in_stock ? 'instock': 'Out Of Stock'}</div>
        </div>
        </div>
        )
      })}

      </div>
    );
  }
}

function mapStateToProps({books}) {
  return {books};
}

export default connect(mapStateToProps, {getBooks})(Browse);