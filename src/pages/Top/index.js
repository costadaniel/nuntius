import React, { Component } from 'react';

import { View } from 'react-native';

// import { Container } from './styles';
import Header from '~/components/Header';

export default class Top extends Component {
  state = {}

  render() {
    return (
      <View>
        <Header />
      </View>
    );
  }
}
