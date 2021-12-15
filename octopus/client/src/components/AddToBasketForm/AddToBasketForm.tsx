import {
  FormEventHandler,
  FunctionComponent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { BasketContext } from '../../context/Basket/Basket';
import ProductContext from '../../context/Product';
import QuantityField from '../QuantityField/QuantityField';
import { Form, Pence, Pounds, Price, SubmitButton, TopRow } from './constants';

const AddToBasketForm: FunctionComponent = function () {
  const product = useContext(ProductContext);
  const { addProduct } = useContext(BasketContext);

  const [quantity, setQuantity] = useState(1);

  const [pounds, pence] = useMemo(
    () =>
      Intl.NumberFormat('en-GB', { currency: 'GBP' })
        .format(product.price / 100)
        .split('.'),
    [product.price],
  );

  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (e) => {
      e.preventDefault();

      addProduct(quantity, {
        id: product.id,
        name: product.name,
        price: product.price,
      });
    },
    [addProduct, product.id, product.name, product.price, quantity],
  );

  return (
    <Form onSubmit={onSubmit}>
      <TopRow>
        <Price>
          <Pounds>{pounds}</Pounds>
          <Pence>.{pence}</Pence>
        </Price>
        <QuantityField
          onChange={(value) => {
            setQuantity(value);
          }}
        />
      </TopRow>
      <SubmitButton type="submit">Add to cart</SubmitButton>
    </Form>
  );
};

export default AddToBasketForm;
