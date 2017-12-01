import axios from 'axios';

const initialState = {
    // user: {} ,
    books: [],
    book:{},
    booksTwo:[]
}

// --ACTION CONSTRAINTS--
const GET_BOOKS = 'GET_BOOKS';
const SET_ONE_BOOK_ON_REDUX = 'SET_ONE_BOOK_ON_REDUX';
const SET_BOOKS_ON_REDUX = 'SET_BOOKS_ON_REDUX';



// --ACTION CREATORS--
export function getBooks(){
    const bookList = axios.get('/api/getBooks').then(res =>{
        return res.data
    })
    return {
        type: GET_BOOKS,
        payload: bookList
    }
}
export function setOneBookOnRedux(val) {
    return {
        type: SET_ONE_BOOK_ON_REDUX,
        payload: val
    }
}
export function setBooksOnRedux(val) {
    return {
        type: SET_BOOKS_ON_REDUX,
        payload: val
    }
}

// export function getUserInfo() {
//     const userData = axios.get('/auth/me').then(res => {
//         return res.data
//     })
//     return {
//         type: GET_USER_INFO,
//         payload: userData
//     }
// }
// --REDUCER--
export default function reducer( state = initialState , action){
    console.log('action fired!! ', action)    
    switch( action.type ){
        case GET_BOOKS + '_FULFILLED':
        return Object.assign({}, state, {books: action.payload});
        case SET_ONE_BOOK_ON_REDUX:
        return Object.assign({}, state, {oneBook: action.payload});
        case SET_BOOKS_ON_REDUX:
        return Object.assign({}, state, {booksTwo: action.payload});

        default:
        return state;
    }
}