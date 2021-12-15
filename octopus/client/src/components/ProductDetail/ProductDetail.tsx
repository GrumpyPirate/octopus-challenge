import { FunctionComponent, useContext } from 'react';

import ProductContext from '../../context/Product';
import AddToBasketForm from '../AddToBasketForm/AddToBasketForm';
import Container from '../Container/Container';
import {
  Description,
  ProductForm,
  ProductHeader,
  ProductHeading,
  ProductImage,
  ProductMain,
  ProductName,
  Section,
  SectionHeading,
  SpecificationList,
  SpecificationValue,
  Subtitle,
} from './constants';

const ProductDetail: FunctionComponent = function () {
  const product = useContext(ProductContext);

  return (
    <>
      <ProductHeader>
        <ProductImage>
          <img src={product.imgUrl} alt="" />
        </ProductImage>
        <ProductMain>
          <ProductHeading>
            <ProductName>{product.name}</ProductName>
            <Subtitle>
              {product.power}
              {' // '}Packet of {product.quantity}
            </Subtitle>
          </ProductHeading>
          <ProductForm>
            <AddToBasketForm />
          </ProductForm>
        </ProductMain>
      </ProductHeader>

      <Section lighter>
        <Container>
          <SectionHeading>Description</SectionHeading>
          <Description>{product.description}</Description>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading>Specifications</SectionHeading>
          <SpecificationList>
            <dt>Brand</dt>
            <SpecificationValue>{product.brand}</SpecificationValue>

            <dt>Item weight</dt>
            <SpecificationValue>{product.weight}</SpecificationValue>

            <dt>Dimensions</dt>
            <SpecificationValue>
              {product.width}x{product.height}x{product.length}
            </SpecificationValue>

            <dt>Item model number</dt>
            <SpecificationValue>{product.modelCode}</SpecificationValue>

            <dt>Colour</dt>
            <SpecificationValue>{product.colour}</SpecificationValue>
          </SpecificationList>
        </Container>
      </Section>
    </>
  );
};

export default ProductDetail;
