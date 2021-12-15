import styled from 'styled-components';

import rem from '../../utils/styles';

export const Wrapper = styled.footer`
  padding: ${rem(20)} 0 ${rem(24)};
  color: ${({ theme }) => theme.palette.blueLight02};
  font-size: ${rem(12)};
  background-color: ${({ theme }) => theme.palette.blueDark02};
`;

export const Copy = styled.p`
  margin: 0;
`;
