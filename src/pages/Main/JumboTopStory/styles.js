import styled from 'styled-components/native';
import { colors, metrics, global } from '~/styles';

export const globalStyle = global;

export const Container = styled.View`
  justify-content: center;
  width: ${metrics.screenWith - 4 * metrics.basePadding}px;
  height: 150px;
  flex-direction: row;
  margin: ${metrics.baseMargin}px;
  margin-right: 0px;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
  color: colors.gray,
})``;

export const MediaContainer = styled.Image.attrs({
  borderRadius: metrics.baseRadius,
})`
  width: ${metrics.screenWith - 4 * metrics.basePadding}px;
  height: 150px;
`;

export const InfoContainer = styled.View`
  padding: ${metrics.basePadding / 2}px;
  align-self: flex-end;
  flex-grow: 1;
  position: absolute;
  background-color: ${colors.darkTransparent};
  border-bottom-left-radius: ${metrics.baseRadius};
  border-bottom-right-radius: ${metrics.baseRadius};
  width: ${metrics.screenWith - 4 * metrics.basePadding}px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: ${colors.white};
`;
