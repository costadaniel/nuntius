import React, { Component } from 'react';
import { Container } from './styles';

// import Drawer from '~/components/Drawer';
import Header from '~/components/Header';

import JumboTopStory from './JumboTopStory';
// mport api from '~/services/api';

export default class Main extends Component {
  async componentDidMount() {
    // const news = await api.get('/topstories.json');
    // const story = await api.get(`/item/${news.data[0]}.json`);
  }

  render() {
    return (
      <Container>
        <Header />
        <JumboTopStory id="20451536" />
      </Container>
    );
  }
}
