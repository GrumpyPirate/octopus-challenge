import styled from 'styled-components';
import { buttonReset } from '../../constants/styles';
import rem from '../../utils/styles';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Quantity = styled.span`
  font-size: ${rem(32)};
  line-height: ${rem(40)};
  font-weight: 700;
  padding: 0 ${rem(8)};
`;

export const LabelText = styled.div`
  font-size: ${rem(14)};
  color: ${({ theme }) => theme.palette.blueLight01};
  text-transform: uppercase;
  margin-bottom: ${rem(4)};
`;

export const Button = styled.button`
  ${buttonReset}
  font-size: ${rem(24)};
  line-height: 1;
  width: ${rem(40)};
  height: ${rem(40)};
  border-radius: ${rem(4)};
  background-color: ${({ theme }) => theme.palette.blueLight01};

  &[disabled] {
    background-color: ${({ theme }) => theme.palette.blueMid02};
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: stretch;
`;
