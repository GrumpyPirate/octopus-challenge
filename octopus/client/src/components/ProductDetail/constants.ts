import styled, { css } from 'styled-components';

import { screenSizes } from '../../constants/styles';
import rem from '../../utils/styles';

export const ProductHeader = styled.header`
  @media (min-width: ${screenSizes.md}) {
    display: grid;
    grid-template-columns: ${rem(256)} 1fr;
    grid-gap: ${({ theme }) => theme.layout.gutters.large};
    padding: 0 ${({ theme }) => theme.layout.gutters.large};
  }

  @media (min-width: ${screenSizes.lg}) {
    grid-template-columns: ${rem(320)} 1fr;
  }
`;

export const ProductImage = styled.figure`
  position: relative;
  margin: 0 ${({ theme }) => theme.layout.gutters.large};
  height: ${rem(390)};

  img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  @media (min-width: ${screenSizes.md}) {
    margin: 0;

    img {
      object-position: top center;
    }
  }
`;

export const ProductHeading = styled.div`
  padding: ${rem(48)} ${({ theme }) => theme.layout.gutters.large} ${rem(24)};
  background-color: ${({ theme }) => theme.palette.blueDark02};

  @media (min-width: ${screenSizes.md}) {
    background: none;
    padding-top: 0;
    padding-right: 0;
    padding-left: 0;
  }
`;

export const ProductForm = styled.div`
  padding: 0 ${({ theme }) => theme.layout.gutters.large};

  @media (min-width: ${screenSizes.md}) {
    padding: 0;
    max-width: ${rem(400)};
  }
`;

export const ProductMain = styled.div`
  margin-top: ${rem(-32)};

  @media (min-width: ${screenSizes.md}) {
    margin-top: 0;
  }
`;

export const ProductName = styled.h1`
  font-size: ${rem(36)};
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 ${rem(16)};
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.palette.blueLight01};
  font-size: ${rem(18)};
  font-weight: 400;
  margin: 0;
`;

export const Section = styled.section<{ lighter?: boolean }>`
  padding: ${rem(32)} 0 ${rem(28)};

  ${({ lighter }) =>
    !!lighter &&
    css`
      background-color: ${({ theme }) => theme.palette.blueDark02};
    `}
`;

export const SectionHeading = styled.h3`
  font-size: ${rem(28)};
  font-weight: 700;
  margin: 0 0 ${rem(16)};
`;

export const Description = styled.p`
  margin: 0;
`;

export const SpecificationList = styled.dl`
  display: grid;
  grid-gap: ${rem(16)};
  grid-template-columns: ${rem(176)} 1fr;
  margin: 0;
`;

export const SpecificationValue = styled.dd`
  margin: 0;
`;
