import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native';
import Button from '../Button';

function formatTime(time) {
  let minutes = Math.floor(time/60);
  time -= minutes * 60
  let seconds = parseInt(time % 60, 10);
  return `${minutes < 10 ? `0${minutes}`: minutes} : ${seconds < 10 
    ? `0${seconds}`
    : seconds}`;
}

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      console.log('should start')
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      },1000);
      this.setState({
        timerInterval
      });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      console.log('should stop')
      clearInterval(this.state.timerInterval);
    }
  }
  render() {
    const { 
      isPlaying,
      elapedTime,
      timerDuration,
      startTimer,
      restartTimer,
      addSecond
    } = this.props;
    console.log(timerDuration,elapedTime)
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <View style={styles.upper}>
          <Text style={styles.time}>
            {formatTime(timerDuration-elapedTime)}
          </Text>
        </View>
        <View style={styles.lower}>
            { !isPlaying && (
              <Button iconName='play-circle' onPress={startTimer} />
            )}
            {isPlaying && (
              <Button iconName='stop-circle' onPress={restartTimer} />
            )}       
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    
  },
  upper: {
    flex: 2,
    justifyContent: 'center',
    alignItems:'center'
  },
  time: {
    color: 'white',
    fontSize: 120,
    fontWeight: '100'
  },
  lower: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})
export default Timer;