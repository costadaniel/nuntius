import React, { Component } from 'react';

import { Text, View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Reactotron from 'reactotron-react-native';

import Header from '~/components/Header';

import api from '~/services/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class Main extends Component {
  state = {};

  async componentDidMount() {
    const news = await api.get('/topstories.json');
    const story = await api.get(`/item/${news.data[0]}.json`);

    Reactotron.log(story);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>
          <Icon name="guy-fawkes-mask" size={30} color="#000" />
          <Text>Nuntius</Text>
        </View>
      </View>
    );
  }
}
