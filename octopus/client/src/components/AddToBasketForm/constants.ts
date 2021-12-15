import styled from 'styled-components';

import { buttonReset } from '../../constants/styles';
import rem from '../../utils/styles';

export const Form = styled.form`
  padding: ${rem(10)} 0 ${rem(24)};
`;

export const TopRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: ${rem(20)};
`;

export const Price = styled.h3`
  font-size: ${rem(40)};
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  margin: 0;
`;

export const Pounds = styled.span`
  display: inline-block;
  vertical-align: top;
`;

export const Pence = styled.span`
  position: relative;
  top: 0.0625em;
  display: inline-block;
  vertical-align: top;
  font-size: 0.75em;
`;

export const SubmitButton = styled.button`
  ${buttonReset}
  display: block;
  width: 100%;
  padding: ${rem(12)} ${rem(24)};
  font-size: ${rem(24)};
  font-weight: 700;
  text-align: center;
  border-radius: ${rem(4)};
  background-color: ${({ theme }) => theme.palette.pink};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 50%;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.25)
    );
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
  }

  &:active {
    background-color: ${({ theme }) => theme.palette.pinkDark};
  }
`;
