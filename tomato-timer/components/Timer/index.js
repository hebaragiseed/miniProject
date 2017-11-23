import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as tomatoActions } from '../../reducer';
import Timer from './presenter';

function mapStateToProps(state) {
  const {isPlaying, elapedTime, timerDuration} = state;
  return {
    isPlaying,
    elapedTime,
    timerDuration
  };
}

function mapDispachToProps(dispach) {
  return {
    startTimer: bindActionCreators(tomatoActions.startTimer, dispach),
    restartTimer: bindActionCreators(tomatoActions.restartTimer, dispach),
    addSecond: bindActionCreators(tomatoActions.addSecond, dispach)

  }
}
export default connect(mapStateToProps, mapDispachToProps)(Timer);