// 스테이트 요소는 어플리케이션 스테이트가 아니고 오직 스테이트는 리듀서가 권한을 가지고 있다.
//같은 스테이트가 리듀서로 흘러들어 가는것 state가 숫자고 하나씩 증가 시키면 숫자는 계속 증가
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
    //반환되는 값은 깨끗해야함 이런거 안됨 -> ex)state.title = book.title
      return action.payload
  } 
  return state
}