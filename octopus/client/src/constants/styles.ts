import { css, DefaultTheme } from 'styled-components';
import { colord } from 'colord';

declare module 'styled-components' {
  export interface DefaultTheme {
    layout: {
      gutters: {
        small: string;
        large: string;
      };
    };
    palette: {
      blueDark01: string;
      blueDark02: string;
      blueMid01: string;
      blueMid02: string;
      blueLight01: string;
      blueLight02: string;
      pink: string;
      pinkDark: string;
      bodyBackground: string;
      bodyColor: string;
    };
  }
}

export const theme: DefaultTheme = {
  layout: {
    gutters: {
      small: '1rem', // 16w
      large: '2.375rem', // 38w
    },
  },
  palette: {
    blueDark01: '#070c1f',
    blueDark02: '#02122d',
    blueMid01: '#29457a',
    blueMid02: '#151e33',
    blueLight01: '#5280d6',
    blueLight02: '#7c90b4',
    pink: '#f60068',
    pinkDark: colord('#f60068').darken(0.125).toHex(),
    bodyBackground: '#070c1f',
    bodyColor: '#fff',
  },
};

export const screenSizes = {
  sm: '30em', // 480w
  md: '48em', // 768w
  lg: '64em', // 1024w
  xl: '80em', // 1280w
  xxl: '90em', // 1440w
};

export const buttonReset = css`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  cursor: pointer;

  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;

  /* Normalize 'line-height'. Cannot be changed from 'normal' in Firefox 4+. */
  line-height: normal;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* Corrects inability to style clickable 'input' types in iOS */
  -webkit-appearance: none;

  /* Remove excess padding and border in Firefox 4+ */
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  touch-action: manipulation;
`;
