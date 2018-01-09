export function selectBook(book) {
  //선택한 책은 액션생성자이고 액션반환이 필요하다
  //object는 type 프로퍼티를 가진다
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}