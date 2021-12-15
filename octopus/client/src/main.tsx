import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import App from './components/App/App';
import { theme } from './constants/styles';
import { BasketContextProvider } from './context/Basket/Basket';

import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:8000/graphql',
});

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Gotham SSm A', 'Gotham SSm B', 'Montserrat', helvetica, arial, sans-serif;
    background-color: ${(props) => props.theme.palette.bodyBackground};
    color: ${(props) => props.theme.palette.bodyColor};
    min-height: 100vh;
  }
`;

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={theme}>
      <BasketContextProvider>
        <BrowserRouter>
          <GlobalStyles />
          <App />
        </BrowserRouter>
      </BasketContextProvider>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
