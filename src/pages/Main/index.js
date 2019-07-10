import React, { Component } from 'react';

import { Text, View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class Main extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Icon name="guy-fawkes-mask" size={30} color="#000" />
        <Text>Nuntius</Text>
      </View>
    );
  }
}
