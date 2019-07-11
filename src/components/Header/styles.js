import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

export const StatusBar = styled.StatusBar.attrs({
  backgroundColor: '#fff',
  barStyle: 'dark-content',
})``;

export const Container = styled.View`
  height: ${56 + getStatusBarHeight(true)};
  padding-top: ${getStatusBarHeight(true)};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10;
  padding-right: 10;
  background-color: #fff;
  border-bottom-color: #eee;
  border-bottom-width: 1;
`;

export const HeaderIcon = styled.TouchableOpacity``;

export const HeaderText = styled.Text`
  color: #000;
  font-size: 20;
`;

export const Space = styled.View`
  width: 30;
`;
