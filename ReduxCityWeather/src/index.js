import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//redux-promise
//리덕스를 위한 미들웨어 패키지
//어플리케이션 안에 ajax 리퀘스트를 다룰 수 있게 할 것입니다
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

//어플리케이션과 연결하는 방식
//미들웨어를 리덕스 프로세스에 연결
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
