import styled, { keyframes } from 'styled-components';

import rem from '../../utils/styles';

const spinner = keyframes`
  from {
    transform: rotateZ(0turn);
  }

  to {
    transform: rotateZ(1turn);
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  min-height: ${rem(320)};
  color: ${({ theme }) => theme.palette.pink};

  svg {
    display: block;
    width: ${rem(48)};
    height: ${rem(48)};
    fill: currentColor;
    animation: ${spinner} 2s linear 0s infinite;
  }
`;

export const LoadingText = styled.h1`
  font-size: ${rem(16)};
  font-weight: 400;
  color: ${({ theme }) => theme.palette.bodyColor};
`;
