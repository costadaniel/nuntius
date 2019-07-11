import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container, HeaderIcon, HeaderText, Space, StatusBar,
} from './styles';

class Header extends Component {
  state = {};

  render() {
    return (
      <Container>
        <StatusBar />
        <HeaderIcon>
          <Icon name="menu" size={30} color="#000" />
        </HeaderIcon>
        <HeaderText>Nuntius</HeaderText>
        <Space />
      </Container>
    );
  }
}

export default withNavigation(Header);
