import styled from 'styled-components';

import { buttonReset } from '../../constants/styles';
import rem from '../../utils/styles';

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${rem(12)} ${({ theme }) => theme.layout.gutters.small};
  background-color: ${({ theme }) => theme.palette.bodyBackground};
  z-index: 1;
`;

export const Logo = styled.img`
  display: block;
  width: ${rem(192)};
  height: ${rem(28)};
`;

export const Basket = styled.div`
  position: relative;
`;

export const BasketButton = styled.button`
  ${buttonReset}

  img {
    display: block;
    width: ${rem(30)};
    height: ${rem(30)};
  }
`;

export const BasketProductCount = styled.span`
  display: inline-block;
  padding: ${rem(2)} ${rem(6)};
  background-color: ${({ theme }) => theme.palette.pink};
  color: #fff;
  font-size: ${rem(12)};
  font-weight: 700;
  border-radius: ${rem(8)};
  position: absolute;
  top: 100%;
  right: 100%;
  transform: translate(calc(50% + ${rem(6)}), calc(-50% - ${rem(6)}));
`;
