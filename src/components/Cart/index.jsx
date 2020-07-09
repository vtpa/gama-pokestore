import React from 'react';

import { ContainerCart } from './styles';

import cartImg from '../../assets/cart.png';

function Cart({ showCart, setShowCart }) {
  return (
    <ContainerCart onClick={() => { setShowCart(!showCart); }}>
      <img src={cartImg} alt="Carrinho" />
    </ContainerCart>
  );
}

export default Cart;
