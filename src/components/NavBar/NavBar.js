
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
          <img  id='tan-logo' src={tanLogo} alt='logo of an open book'/>
            <NavLink id='nav-link' exact to='/browse'>Browse</NavLink>
            <NavLink id='nav-link' exact to='/cart'>Cart</NavLink>
            <NavLink id='nav-link' exact to='/myshelf'>My Shelf</NavLink>
            <NavLink id='nav-link' exact to='/'>Logout</NavLink>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(NavBar);