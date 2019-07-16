import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.light};
`;

export const Page = styled.View``;

export const Botao = styled.Button.attrs({
  title: 'Teste',
})``;

export const TestImage = styled.Image`
  width: 100;
  height: 100;
`;
