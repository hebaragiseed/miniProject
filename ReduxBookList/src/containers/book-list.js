//컨테이너는 리액트 컴포넌트로서, 리덕스에 의해 관리되는 (리덕스에 의해 만들어지는)
//스테이트에 직접적인 연결이 가능합니다.

//리액트 컴포넌트에서 스테이트를 주입할 때,
//이 데이터를 컴포넌트로 주입시키는 것을 컨테이너라 부른다.
import React, { Component } from 'react';
import { connect } from 'react-redux';//하나의 프로퍼티 가져오려면 {}사용
import { selectBook } from '../actions/index';
//생성된 액션이 리듀서에게 흘러가도록 연결
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          className="list-group-item" 
          onClick={() => this.props.selectBook(book)}
          key={book.title}>{book.title}
        </li>
      );
    })
  }
  render() {
    return (
      <div>
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

//어플리케이션 스테이트를 가져와서, 여기서 반환되는 것 무엇이던지
//BookList안에 props로 보여집니다.

//state가 변하면 컨테이너는 즉시 리렌더링하여 새 책 리스트를 갖겠죠
function mapStateToProps(state) {
  return {
    books: state.books 
  }
}
//이 함수로 반환받은 것이 북리스트 컨테이너의 props로 연결된 것입니다.
function mapDispatchToProps(dispatch) {
  //액션들을 가져와 어플리케이션안의 모든 리듀서로 전달 하는게
  //bindActionCreators와 dispatch의 역할
  //seletbook이 호출될 때미다 결과는 리듀서로 전달되야 합니다.
  // 호출하면 결과가 dispatch 함수로 흘러들어가고 액션을 가지고 이것들로 부터 받게된다.
  return (
    bindActionCreators({
      selectBook: selectBook}, dispatch)
  );
}
//컴포넌트에서 컨테이너로 북리스트를 바꿔야 하는데 -이는 새로운 dispatch메소드인 selectBook을 알아야하고요
//이는 prop으로 이용이 가능합니다.
export default connect(mapStateToProps, mapDispatchToProps)(BookList)