import { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';

import BasketIcon from '../../assets/basket.svg';
import LogoGraphic from '../../assets/logo.svg';
import { BasketContext } from '../../context/Basket/Basket';
import {
  Basket,
  BasketButton,
  BasketProductCount,
  Logo,
  Wrapper,
} from './constants';

const Header = function () {
  const { products } = useContext(BasketContext);

  const totalProducts = useMemo(
    () =>
      Object.values(products).reduce(
        (accTotal, { quantity }) => accTotal + quantity,
        0,
      ),
    [products],
  );

  return (
    <Wrapper>
      <Link to="/">
        <Logo src={LogoGraphic} alt="Octopus Energy" width="192" height="28" />
      </Link>
      <Basket>
        <BasketButton type="button" aria-label="Your basket">
          <img src={BasketIcon} alt="" />
        </BasketButton>
        <BasketProductCount
          aria-label={`You have ${totalProducts} products in your basket`}
        >
          <span aria-hidden="true">{totalProducts}</span>
        </BasketProductCount>
      </Basket>
    </Wrapper>
  );
};

export default Header;
