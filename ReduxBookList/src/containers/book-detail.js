import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return (
        <div>클릭하세요</div>
      );
    }
    return (
      <div>
        <h1>{this.props.book.title}</h1>
        <div>pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book : state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)