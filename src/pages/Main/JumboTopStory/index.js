/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Reactotron from 'reactotron-react-native';

import LinkPreview from 'react-native-link-preview';
import {
  Container,
  LoadingIndicator,
  MediaContainer,
  InfoContainer,
  Title,
  globalStyle,
} from './styles';

import api from '~/services/api';

export default class Main extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  state = {
    mediaUrl: '~/assets/images/white-bg.jpg',
    storyInfos: {},
    onLoading: true,
  };

  async componentDidMount() {
    const { id } = this.props;

    const story = await api.get(`/item/${id}.json`);

    this.setState({ storyInfos: story.data });

    const infos = await LinkPreview.getPreview(story.data.url, {
      imagesPropertyType: 'og', // fetches only open-graph images
    });

    if (infos.images.length > 0) {
      this.setState({
        mediaUrl: infos.images[0],
        onLoading: false,
      });
    } else {
      this.setState({
        onLoading: false,
      });
    }
  }

  render() {
    const { mediaUrl, storyInfos, onLoading } = this.state;

    return (
      <Container style={globalStyle.shadow}>
        {onLoading ? (
          <LoadingIndicator />
        ) : (
          <MediaContainer source={{ uri: mediaUrl }} />
        )}
        <InfoContainer>
          <Title>{storyInfos.title}</Title>
        </InfoContainer>
      </Container>
    );
  }
}
