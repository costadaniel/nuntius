import React, { Component } from 'react';
import Reactotron from 'reactotron-react-native';
import LinkPreview from 'react-native-link-preview';
import { Container, TestImage } from './styles';

// import Drawer from '~/components/Drawer';
import Header from '~/components/Header';

import api from '~/services/api';

export default class Main extends Component {
  state = {
    imageUrl: '',
  };

  async componentDidMount() {
    const news = await api.get('/topstories.json');
    const story = await api.get(`/item/${news.data[3]}.json`);

    const infos = await LinkPreview.getPreview(story.data.url, {
      imagesPropertyType: 'og', // fetches only open-graph images
    });

    this.setState({ imageUrl: infos.images[0] });

    Reactotron.log(infos);
  }

  render() {
    const { imageUrl } = this.state;

    return (
      <Container>
        <Header />
        <TestImage
          source={{ uri: imageUrl }}
        />
      </Container>
    );
  }
}
