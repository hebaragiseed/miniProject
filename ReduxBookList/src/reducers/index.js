//리듀서는 어플리케이션 스테이트를 반환하는 함수
//어플리케이션은 평범한 JS객체
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// 객체를 combineReducers로 넘길때 redux가 어플리케이션 state를 생성
const rootReducer = combineReducers({
  //키는 state의 이름 ,값은 리듀서 그자체
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
