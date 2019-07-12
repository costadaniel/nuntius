import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Reactotron from 'reactotron-react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container, HeaderIcon, HeaderText, Space, StatusBar,
} from './styles';

class Header extends Component {
  static propTypes = {}

  state = {};

  openDrawer = () => {
    Reactotron.log(this.props);
  }

  render() {
    return (
      <Container>
        <StatusBar />
        <HeaderIcon onPress={this.openDrawer}>
          <Icon name="menu" size={30} color="#000" />
        </HeaderIcon>
        <HeaderText>Nuntius</HeaderText>
        <Space />
      </Container>
    );
  }
}

export default Header;
