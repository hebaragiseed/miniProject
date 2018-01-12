import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  //payload의 promise대신에 응답값을 얻었죠
  //이는 리덕스프로미스의 목적입니다. 이 라이브러리가 하는 일이죠
  //리덕스프로미스는 미들웨어고 
  //미들웨어는 리듀서로 가기전에 멈추거나 액션을 조정할 수 있는 능력이 있죠
  //payload 프로퍼티를 보았는데 
  //만약 payload가 프로미스이면 리덕스프로미스는 액션전체를 멈추지요 59강좌 ...
 //console.log('received',action)
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ] //[city,city,city] not[city[city,city]]이거 아니고,
 } 
  return state
}