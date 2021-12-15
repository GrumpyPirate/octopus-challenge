import {
  createContext,
  FunctionComponent,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { Product } from '../../types';

type BasketProduct = Pick<Product, 'name' | 'price'>;

interface BasketProducts {
  [id: Product['id']]: {
    quantity: number;
    product: BasketProduct;
  };
}

export interface BasketContextType {
  products: BasketProducts;
  addProduct: (
    quantity: number,
    product: Pick<Product, 'id'> & BasketProduct,
  ) => void;
  removeProduct: (productId: Product['id']) => void;
}

const initialContextValue: BasketContextType = {
  addProduct: () => undefined,
  removeProduct: () => undefined,
  products: {},
};

export const BasketContext = createContext(initialContextValue);

export const BasketContextProvider: FunctionComponent = function ({
  children,
}) {
  const [products, setProducts] = useState<BasketProducts>(
    initialContextValue.products,
  );

  const addProduct = useCallback<BasketContextType['addProduct']>(
    (quantity, { name, price, id }) => {
      setProducts((currentProducts) => {
        const existingProduct = currentProducts[id];

        return {
          ...currentProducts,
          [id]: existingProduct
            ? {
                ...existingProduct,
                quantity: existingProduct.quantity + quantity,
              }
            : {
                product: { name, price },
                quantity,
              },
        };
      });
    },
    [],
  );

  const removeProduct = useCallback<BasketContextType['removeProduct']>(
    (productId) => {
      setProducts(({ [productId]: product, ...remainingItems }) => ({
        ...remainingItems,
      }));
    },
    [],
  );

  const contextValue = useMemo(
    () => ({
      products,
      addProduct,
      removeProduct,
    }),
    [addProduct, products, removeProduct],
  );

  return (
    <BasketContext.Provider value={contextValue}>
      {children}
    </BasketContext.Provider>
  );
};
