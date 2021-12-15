import { FunctionComponent, useEffect, useState } from 'react';
import { Loader } from 'react-feather';
import { useParams } from 'react-router-dom';
import ProductContext from '../../context/Product';

import useProduct from '../../hooks/useProduct';
import ProductDetail from '../ProductDetail/ProductDetail';
import { Loading, LoadingText } from './constants';

const ProductPage: FunctionComponent = function () {
  const { productId } = useParams<{ productId: string }>();
  const { product, loading } = useProduct(productId);
  const [delayedIsLoading, setDelayedIsLoading] = useState(loading);

  /**
   * Use a side-effect to:
   *  - Artificially delay changes to the 'loading' state
   */
  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setDelayedIsLoading(false);
      }, 300);

      return;
    }

    setDelayedIsLoading(true);
  }, [loading]);

  return delayedIsLoading || !product ? (
    <Loading>
      <LoadingText>Loading product...</LoadingText>
      <Loader />
    </Loading>
  ) : (
    <ProductContext.Provider value={product}>
      <ProductDetail />
    </ProductContext.Provider>
  );
};

export default ProductPage;
