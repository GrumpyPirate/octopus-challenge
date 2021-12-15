import styled, { css } from 'styled-components';

import rem from '../../utils/styles';

const Container = styled.div<{ condensed?: boolean }>`
  width: 100%;
  max-width: ${rem(1440)};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.gutters.large};

  ${({ condensed, theme }) =>
    !!condensed &&
    css`
      padding-right: ${theme.layout.gutters.small};
      padding-left: ${theme.layout.gutters.small};
    `}
`;

export default Container;
