
import React, { Component } from 'react';
import './NavBar.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";
import tanLogo from '../assets/tan-logo.svg'


class NavBar extends Component {

  render() {
    return (
      <div className="NavBar-Container">
        <div className='nav-bar'>
          <ul className='nav-ul-links'>
          <img src={tanLogo} alt='logo of an open book'/>
            <li className='li-nav-link'> <NavLink className='li-link' exact to='/browse'>Browse</NavLink></li>
            <li className='li-nav-link'> <NavLink className='li-link' exact to='/cart'>Cart</NavLink></li>
            <li className='li-nav-link'> <NavLink className='li-link' exact to='/myshelf'>My Shelf</NavLink></li>
            <li className='li-nav-link'> <NavLink className='li-link' exact to='/'>Logout</NavLink></li>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(NavBar);