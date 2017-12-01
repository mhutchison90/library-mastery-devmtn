
import React, { Component } from 'react';
import './Cart.css';
import { connect } from 'react-redux';



class Cart extends Component {
    
  render() {
    return (
      <div className="Cart-Container">
Cart
      </div>
    );
  }
}

function mapStateToProps({user}) {
  return {user};
}

export default connect(mapStateToProps)(Cart);