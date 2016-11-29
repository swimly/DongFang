/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import MainView from './assets/views/MainView.js';
export default class DongFang extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
        />
        <MainView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('DongFang', () => DongFang);
