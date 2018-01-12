//미들웨어? 일종의 문지기-액션을 조사하고 멈추고 통과 할 수있거나 리듀서로 갈수 없다는 식으로 통보하죠 또는 가도되지만 특정한 값을 바꿔서 액션을 조작하기를 원한다는 식으로 말이죠
//함수로 액션을 취하고 액션타입과 액션페이로드, 다른 요소에 의존하여
//미들웨어는 액션을 전달하도록 선택할 수 있고요
//액션을 조작할 수 있고, 모든 것을 멈출 수 있으며, 이 액션들의 작은 태스크의 타입들을 말이죠
//이는 리듀서로 가지전에 벌어집니다.

//redux-promise
//리덕스를 위한 미들웨어 패키지
//어플리케이션 안에 ajax 리퀘스트를 다룰 수 있게 할 것입니다
//index에서 불러오기
//ajax리퀘스트에 도움

//axios는 ajax 리퀘스트를 브라우저에서 만들수 있는 라이브러리
//axios.get() ... .then()
//.get리퀘스트가 있고 해당 url을 전달하여 프로미스를 반환
//then을 통해 함수를 가지고 해당 반환값을 다룰 수 있죠
import axios from 'axios'

const API_KEY = '5884da9af8df4e9e907c0d71e234feb7';
const ROOT_URL  = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log('request:',request)
  return {
    type: FETCH_WEATHER,
    //request는 promise이고 이를 payload로 반환하고 이 액션은 리듀서로 향해 갑니다
    payload: request
  }
}