import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.light};
`;

export const TrendingList = styled.FlatList`
  margin-right: ${metrics.baseMargin};
`;
