import { connect } from 'react-redux';
import Timer from './presenter';

function mapStateToProps(state) {
  const {isPlaying, elapedTime, timerDuration} = state;
  return {
    isPlaying,
    elapedTime,
    timerDuration
  };
}
export default connect(mapStateToProps)(Timer);