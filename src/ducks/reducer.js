import axios from 'axios';

const initialState = {
    // user: {} ,
    books: []
}

// --ACTION CONSTRAINTS--
const GET_BOOKS = 'GET_BOOKS';


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
        return Object.assign({}, state, {books: action.payload})

        default:
        return state;
    }
}