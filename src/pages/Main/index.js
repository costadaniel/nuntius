import React, { Component } from 'react';
// import Reactotron from 'reactotron-react-native';

import { Container, TrendingList } from './styles';
// import Drawer from '~/components/Drawer';
import Header from '~/components/Header';

import JumboTopStory from './JumboTopStory';
// import api from '~/services/api';

export default class Main extends Component {
  async componentDidMount() {
    // const news = await api.get('/topstories.json');

    // Reactotron.log(news.data.slice(0, 10));
    // const story = await api.get(`/item/${news.data[0]}.json`);
  }

  renderJumboTopStory = ({ item }) => <JumboTopStory id={item.value} />

  render() {
    const news = [{ key: 0, value: '20454966' },
      { key: 1, value: '20451536' },
      { key: 2, value: '20452013' },
      { key: 3, value: '20453134' },
      { key: 4, value: '20453241' },
      { key: 5, value: '20454375' },
      { key: 6, value: '20453047' },
      { key: 7, value: '20439297' },
      { key: 8, value: '20454204' },
      { key: 9, value: '20453248' }];

    return (
      <Container>
        <Header />
        <TrendingList
          horizontal
          data={news}
          keyExtractor={item => String(item.key)}
          renderItem={this.renderJumboTopStory}
        />
      </Container>
    );
  }
}
