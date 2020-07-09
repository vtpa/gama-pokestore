import React from 'react';

import { Container, Center } from './styles';

import Cart from '../Cart';

function Header({ showCart, setShowCart }) {
  return (
    <Container>
      <Center>
        <h1>PokeStore</h1>
        <Cart onClick={() => setShowCart(!!showCart)} />
      </Center>
    </Container>
  );
}

export default Header;
