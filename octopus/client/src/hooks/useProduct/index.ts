import { QueryResult, useQuery } from '@apollo/client';

import READ_PRODUCT_BY_ID from '../../api/queries';
import { Product } from '../../types';

type Result = Omit<QueryResult<{ product: Product }>, 'data'> & {
  product?: Product;
};

/**
 * Provides a simple abstraction to `useQuery`, exposing its API.
 * Used to read a Product, with a given id, from the GraphQL backend.
 *
 * @param {string} id
 */
const useProduct = function (id?: Product['id']): Result {
  const { data, ...rest } = useQuery<{ product: Product }>(READ_PRODUCT_BY_ID, {
    variables: { id },
    skip: !id,
  });

  return { product: data?.product, ...rest };
};

export default useProduct;
