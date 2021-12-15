import { FunctionComponent } from 'react';
import Container from '../Container/Container';

import { Copy, Wrapper } from './constants';

const Footer: FunctionComponent = function () {
  return (
    <Wrapper>
      <Container condensed>
        <Copy>
          Octopus Energy Ltd is a company registered in England and Wales.
          <br />
          Registered number: 09265424. Registered oftice: 35 Holborn London.
          ECIN 2HT. Trading office: 20-24 Broadwick Street London, WiF 8HT
        </Copy>
      </Container>
    </Wrapper>
  );
};

export default Footer;
