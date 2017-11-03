import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo';

export default class Weather extends Component {
  render() {    
    return(
      <LinearGradient
        colors={["#00C6FB", "#005BEA"]}
        style={styles.container}>
        <View style={styles.upper}>
          <Text>Icon here</Text>
          <Text style={styles.temp}>35</Text>          
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>Raining like a MF</Text>
          <Text style={styles.subtitle}>For more info look outside</Text>          
        </View>
        
      </LinearGradient>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  temp: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10,
  },
  lower: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding: 25,
  },
  title: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 38,
    marginBottom: 24,
    fontWeight: "300",
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
});