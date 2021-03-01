import React, { useState } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList';

function Menu({ setState, state }) {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  const [menuList, setMenuList] = useState([
    'Create New Pokemon',
    'Attack',
    'Market Place',
  ]);

  const handleClick = async (el, state) => {
    switch (el) {
      case 'Create New Pokemon':
        const { accounts, contract } = state;
        const randomNumber = Math.floor(Math.random() * 100 + 1);
        const response = await axios.get(baseUrl + randomNumber);
        const name = response.data.name;
        const hp = response.data.stats[0].base_stat;
        const attack = response.data.stats[1].base_stat;
        const imgUrl = response.data.sprites.front_default;
        await contract.methods
          ._createPokemon(name, hp, attack, imgUrl)
          .send({ from: accounts[0] });
        const response1 = await contract.methods
          .getPokemonsByOwner(state.accounts[0])
          .call();
        console.log(response1);
        setState({ ...state, PokeList: [...response1] });
        // Luu vao database pokemon
        // get pokemon ra set Pokemon list o app.js
        // va hien no ra o MyPokemonList
        break;
    }
  };
  const listItems = menuList.map(el => (
    <div className="MenuIcon" onClick={() => handleClick(el, state)}>
      {el}
    </div>
  ));

  return <div className="Menu">{listItems}</div>;
}

export default Menu;
