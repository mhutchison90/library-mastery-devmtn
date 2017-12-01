import React, {Component} from 'react';
import{Route, Switch} from 'react-router-dom';

import Login from './components/Login/Login.js';
import AddBook from './components/AddBook/AddBook';
import Browse from './components/Browse/Browse';
import Cart from './components/Cart/Cart';
import Details from './components/Details/Details';
import MyShelf from './components/MyShelf/MyShelf';


export default (
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/addbook' component={AddBook}/>
        <Route path='/browse' component={Browse}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/details' component={Details}/>
        <Route path='/myshelf' component={MyShelf}/>
    </Switch>
)