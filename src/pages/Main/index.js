import React, { Component } from 'react';
// import Reactotron from 'reactotron-react-native';

import { Container, TrendingList } from './styles';

// import Drawer from '~/components/Drawer';
import Header from '~/components/Header';

import JumboTopStory from './JumboTopStory';
import api from '~/services/api';

export default class Main extends Component {
  state = {
    news: [],
  };

  async componentDidMount() {
    function itemToObject(item) {
      return { value: item.toString() };
    }

    const topStories = await api.get('/topstories.json');
    this.setState({ news: topStories.data.slice(0, 10).map(itemToObject) });
  }

  renderJumboTopStory = ({ item }) => <JumboTopStory id={item.value} />;

  render() {
    const { news } = this.state;

    return (
      <Container>
        <Header />
        <TrendingList
          horizontal
          data={news}
          keyExtractor={item => String(item.value)}
          renderItem={this.renderJumboTopStory}
        />
      </Container>
    );
  }
}
