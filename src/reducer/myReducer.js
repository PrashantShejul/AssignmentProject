import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

const books = [
  {
    id: 1,
    name: 'The Book Thief',
    author: 'Markus Zusak',
    imgUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522157426l/19063._SY475_.jpg'
  },
  {
    id: 2,
    name: 'Sapiens',
    author: 'Yuval Noah Harari',
    imgUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1420585954l/23692271.jpg'
  },
  {
    id: 3,
    name: 'Crime and Punishment',
    author: 'Fyodor Dostoyevsky',
    imgUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1382846449l/7144.jpg'
  },
  {
    id: 4,
    name: 'No Longer Human',
    author: 'Osamu Dazai',
    imgUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1422638843l/194746.jpg'
  },
  {
    id: 5,
    name: 'Atomic Habits',
    author: 'James Clear',
    imgUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535115320l/40121378._SY475_.jpg'
  },
  {
    id: 7,
    name: 'Dune',
    author: 'Frank Herbert',
    imgUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1434908555l/234225._SY475_.jpg'
  },
  {
    id: 8,
    name: 'Atlas Shrugged',
    author: 'Ayn Rand',
    imgUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405868167l/662.jpg'
  }
]

const INITIAL_STATE = {
  selected: [],
  bookdata: books,
 
};

export const myReducer = (state = INITIAL_STATE, action) => {
  const {
    selected,
    bookdata
  } = state;
  switch (action.type) {
    case ADD_TO_CART:
      {
        let id;
        bookdata.find((item,indx) => {
          if (item.id === action.data.id) {
            id = indx;
          }
        })
        bookdata.splice(id, 1, action.data);
        selected.push(action.data);
        const newState = {
          selected,
          bookdata
        };
        return newState;
      }
    case REMOVE_FROM_CART:
      {
        let id;
        bookdata.find((item,indx) => {
          if (item.id === action.data.id) {
            id = indx;
          }
        })
        bookdata.splice(id, 1, action.data);
        selected.splice(id, 1);
        const newState = {
          selected,
          bookdata
        };
        return newState;
      }
    
    default:
      return state
  }
}

export default combineReducers({
  bookdata: myReducer
});
