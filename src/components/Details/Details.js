
import React, { Component } from 'react';
import './Details.css';
import { connect } from 'react-redux';
import { setOneBookOnRedux } from '../../ducks/reducer';
import axios from 'axios';




class Details extends Component {
  constructor() {
    super();
    this.state = {
      bookid:''
    }
  }

  componentWillMount(){
    const bookID = this.props.match.params.bookId;
    this.setState({
      bookid: this.props.match.params.bookid
  })
  console.log(bookID)
  
    axios.get(`/api/getBook/${bookID}`)
    .then(book => {
      this.props.setOneBookOnRedux(book.data);
      // console.log(book.data)
    })
  }
    render() {
    return (
      <div className="Details-Container">
Details
      </div>
    );
  }
}

function mapStateToProps({user, book}) {
  return {user, book};
}
const mapDispatchToProps = {
  setOneBookOnRedux: setOneBookOnRedux
  }

export default connect(mapStateToProps, mapDispatchToProps)(Details);