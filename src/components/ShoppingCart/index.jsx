import React from 'react';
import * as S from './styles';
import { divCard } from '../Card/styles';

export default function ShoppingCart({
  removeStatePokemon, pokemonCart, totalPrice, endShop,
}) {
  return (
    <S.Container>
      <S.containerCart>
        <S.title>Meus Pokémon</S.title>
        <S.listShoppingCart>
          {pokemonCart ? pokemonCart.map((pokemonCurrent, index) => (
            <S.listItem
              key={index}
            >
              <S.info>
                <S.img src={pokemonCurrent.image} alt="Avatar" />
                <p>{pokemonCurrent.name}</p>

              </S.info>
              <div>
                <strong>
                  R$
                  {pokemonCurrent.order}
                </strong>
                <S.closeIcon onClick={() => removePokemon(pokemonCurrent)} />
              </div>
            </S.listItem>
          )) : <S.p>Carrinho vazio :(</S.p>}
        </S.listShoppingCart>
        <S.total>
          <h2>Total:</h2>
          <strong>
            R$
            {totalPrice || 0}
          </strong>
        </S.total>
        <S.button onClick={() => endShop()}>Finalizar Compra</S.button>
      </S.containerCart>
    </S.Container>
  );

  function removePokemon(pokemon) {
    pokemonCart.splice(pokemonCart.indexOf(pokemon), 1);
    removeStatePokemon(pokemonCart, pokemon.order);
  }
}
