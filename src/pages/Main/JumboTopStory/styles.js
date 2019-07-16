import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.ImageBackground.attrs({
  borderRadius: metrics.baseRadius,
})`
  justify-content: center;
  width: ${metrics.screenWith - 3 * metrics.basePadding}px;
  height: 150px;
  flex-direction: row;
  margin: ${metrics.baseMargin}px;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
  color: colors.gray,
})``;

export const InfoContainer = styled.View`
  padding: ${metrics.basePadding / 2}px;
  align-self: flex-end;
  flex-grow: 1;
  background-color: ${colors.darkTransparent};
  border-bottom-left-radius: ${metrics.baseRadius};
  border-bottom-right-radius: ${metrics.baseRadius};
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: ${colors.white};
`;
