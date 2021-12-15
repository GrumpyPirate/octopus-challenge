import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import READ_PRODUCT_BY_ID from '../../api/queries';
import { theme } from '../../constants/styles';
import { BasketContextProvider } from '../../context/Basket/Basket';
import productFixture from '../../testing/fixtures/Product';
import App from './App';

const mockProductId = '1';
const mocks: MockedResponse[] = [
  {
    request: {
      query: READ_PRODUCT_BY_ID,
      variables: { id: mockProductId },
    },
    result: {
      data: { product: productFixture },
    },
  },
];

const withWrapper = function (element: ReactElement) {
  return (
    <MockedProvider mocks={mocks}>
      <ThemeProvider theme={theme}>
        <BasketContextProvider>
          <MemoryRouter initialEntries={['/products/1']}>
            {element}
          </MemoryRouter>
        </BasketContextProvider>
      </ThemeProvider>
    </MockedProvider>
  );
};

const waitForPage = async () => {
  await waitFor(() => screen.getByText('Loading product...'));

  jest.runAllTimers();

  return waitFor(() => screen.getByText(productFixture.name));
};

describe('Components.App', () => {
  it('should render as expected, without crashing', async () => {
    const { asFragment } = render(withWrapper(<App />));

    await waitForPage();

    expect(asFragment()).toMatchSnapshot();
  });

  it('should be able to increase and decrease product quantity', async () => {
    const { getByLabelText, getByRole } = render(withWrapper(<App />));

    await waitForPage();

    const increaseButton = getByLabelText('Increase Quantity');
    const decreaseButton = getByLabelText('Decrease Quantity');
    const quantityTextbox = getByRole('textbox');

    expect(quantityTextbox).toHaveTextContent('1');
    expect(getByLabelText('Quantity')).toBeInTheDocument();

    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    expect(quantityTextbox).toHaveTextContent('3');

    fireEvent.click(decreaseButton);
    expect(quantityTextbox).toHaveTextContent('2');
  });

  it('should be able to add items to the basket', async () => {
    const { queryByLabelText, getByLabelText, getByText } = render(
      withWrapper(<App />),
    );

    await waitForPage();

    const submitButton = getByText('Add to cart');

    expect(queryByLabelText('You have 1 products in your basket')).toBeNull();

    fireEvent.click(submitButton);

    expect(
      getByLabelText('You have 1 products in your basket'),
    ).toBeInTheDocument();
  });
});
