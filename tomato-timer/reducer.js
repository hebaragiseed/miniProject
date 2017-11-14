//import
//action
const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';

//action creator
function startTimer() {
  return {
    type: START_TIMER
  };
}
fuction restartTimer() {
  return {
    type: RESTART_TIMER
  };
}
function addSecond() {
  return (
    type: ADD_SECOND
  );
}
//reducer
const TIME_DURATION = 1500

const initialState = {
  isPlaying: false,
  elapsedTime: 0,
  timeDuration: TIME_DURATION
}

function reducer(state = initialState, action) {
  switch(action, type) {
    case START_TIMER:
      return applyStartTimer(state);
    case RESTART_TIMER:
      return applyRestartTimer(state);
    case ADD_SECOND:
      return applyAddSecond(state)
  }  
}

//Reducer Functions
function applyStartTimer(state) {
  return {
    ...state,
    isplaying: true
  }
}
function applyAddSecond(state) {
  if(elapsedTime < timeDuration) {
    return {
      ...state,
      elapsedTime: state.elapsedTime +1
    }
  }else {
    return {
      ...state,
      isplaying: false
    }
  }
}
//export Action Creator
const actionCreators = {
  startTimer,
  restartTimer,
  addSecond
};
//export Reducer

export default reducer