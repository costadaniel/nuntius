/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Reactotron from 'reactotron-react-native';

import LinkPreview from 'react-native-link-preview';
import { Container, LoadingIndicator, InfoContainer, Title } from './styles';

import api from '~/services/api';

export default class Main extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  state = {
    mediaUrl: '',
    storyInfos: {},
    onLoading: true,
  };

  async componentDidMount() {
    const { id } = this.props;

    Reactotron.log(this.props);

    const story = await api.get(`/item/${id}.json`);

    const infos = await LinkPreview.getPreview(story.data.url, {
      imagesPropertyType: 'og', // fetches only open-graph images
    });

    if (infos.images.length > 0) {
      this.setState({
        mediaUrl: infos.images[0],
        storyInfos: story.data,
        onLoading: false,
      });
    } else {
      this.setState({
        storyInfos: story.data,
        onLoading: false,
      });
    }
  }

  render() {
    const { mediaUrl, storyInfos, onLoading } = this.state;

    return (
      <Container
        source={
          mediaUrl.length > 0
            ? { uri: mediaUrl }
            : require('../../../../assets/images/white-bg.jpg')
        }
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
        }}
      >
        {onLoading ? (
          <LoadingIndicator />
        ) : (
          <InfoContainer>
            <Title>{storyInfos.title}</Title>
          </InfoContainer>
        )}
      </Container>
    );
  }
}
