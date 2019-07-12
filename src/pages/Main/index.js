import React, { Component } from 'react';
import Reactotron from 'reactotron-react-native';
import { Container } from './styles';

// import Drawer from '~/components/Drawer';
import Header from '~/components/Header';

// import api from '~/services/api';

export default class Main extends Component {
  state = {};

  async componentDidMount() {
    // const news = await api.get('/topstories.json');
    // const story = await api.get(`/item/${news.data[0]}.json`);

    Reactotron.log(this.props);
  }

  render() {
    return (
      <Container>
        <Header />
      </Container>
    );
  }
}
