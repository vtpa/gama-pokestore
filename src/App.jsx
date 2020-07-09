/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import GlobalStyle from './styles/global';
import {
  Container, Button, Center, ContainerHead, ContainerCart,
} from './styles/styled';

import cartImg from './assets/cart.png';
import { allPokemon } from './services/api';

import Card from './components/Card';
import Modal from './components/Modal';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [pokemonCart, setPokemonCart] = useState([]);
  const [offset, setOffset] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModalState, setShowModalState] = useState(false);
  const [showCart, setShowCart] = useState(true);
  const limit = 15;

  async function loadPokemon(limit, offset) {
    setOffset(offset + limit);
    const response = await allPokemon(limit, offset).then(
      (result) => result.results,
    );
    setPokemonArray(pokemonArray.concat(response));
  }

  useEffect(() => {
    loadPokemon(limit, offset);
  }, []);

  function sumPriceTotal(value) {
    localStorage.setItem('totalPrice', (parseInt(totalPrice) + value));
    setTotalPrice(savedTotalPrice());
  }

  function savedTotalPrice() {
    return localStorage.getItem('totalPrice');
  }

  function savedPokemonCart() {
    return JSON.parse(localStorage.getItem('pokemons'));
  }

  function savePokemon(pokemon) {
    const savedLocalPokemon = savedPokemonCart() || [];
    localStorage.setItem('pokemons', JSON.stringify(savedLocalPokemon.concat(pokemon)));
    setPokemonCart(savedPokemonCart());
  }

  function subTotalPrice(value) {
    localStorage.setItem('totalPrice', savedTotalPrice() - value);
    setTotalPrice(savedTotalPrice());
  }

  function removeStatePokemon(pokemon, price) {
    localStorage.setItem('pokemons', JSON.stringify(pokemon));
    subTotalPrice(price);
  }

  function isShowModal() {
    return showModalState ? (<Modal hideModal={() => { setShowModalState(false); }} />) : '';
  }

  function endShop() {
    localStorage.clear();
    setPokemonCart([]);
    setTotalPrice(0);
    setShowModalState(true);
  }

  function renderCards(pokemon) {
    return pokemon.map((pokemonCurrent, index) => (
      <Card
        pokemonCart={(pokemon) => {
          sumPriceTotal(pokemon.order);
          savePokemon(pokemon);
        }}
        pokemon={pokemonCurrent}
        key={index}
      />
    ));
  }

  return (
    <>
      <ContainerHead>
        <Center>
          <h1>PokeStore</h1>
          <ContainerCart onClick={() => { setShowCart(!showCart); }}>
            <img src={cartImg} alt="Carrinho" />
          </ContainerCart>
        </Center>
      </ContainerHead>
      <Container>
        {showCart ? (
          <ShoppingCart
            removeStatePokemon={(pokemon, price) => removeStatePokemon(pokemon, price)}
            pokemonCart={savedPokemonCart()}
            endShop={() => endShop()}
            totalPrice={savedTotalPrice()}
          />
        ) : ''}
      </Container>
      <Container>
        {renderCards(pokemonArray)}
      </Container>
      <Container>
        <Button onClick={() => loadPokemon(limit, offset)}> + Ver Mais + </Button>
      </Container>
      {isShowModal()}
      <GlobalStyle />
    </>
  );
}
export default App;
