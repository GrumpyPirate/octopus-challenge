import { createContext } from 'react';
import { Product } from '../../types';

const initialContext: Product = {
  brand: '',
  width: 0,
  height: 0,
  length: 0,
  weight: 0,
  quantity: 0,
  price: 0,
  power: '',
  name: '',
  modelCode: '',
  imgUrl: '',
  id: '',
  description: '',
  colour: '',
};

const ProductContext = createContext(initialContext);

export default ProductContext;
