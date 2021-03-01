import React, { useState } from 'react';
import axios from 'axios';

function Menu({ setState }) {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  const [menuList, setMenuList] = useState([
    'Create New Pokemon',
    'Attack',
    'Market Place',
  ]);
  const [currentPokemon, setCurrentPokemon] = useState({});

  const handleClick = async el => {
    switch (el) {
      case 'Create New Pokemon':
        const randomNumber = Math.floor(Math.random() * 100 + 1);
        const response = await axios.get(baseUrl + randomNumber);
        const name = response.data.name;
        const hp = response.data.stats[0].base_stat;
        const attack = response.data.stats[1].base_stat;
        const imgUrl = response.data.sprites.front_default;

        // Luu vao database pokemon
        // get pokemon ra set Pokemon list o app.js
        // va hien no ra o MyPokemonList
        break;
    }
  };
  const listItems = menuList.map(el => (
    <div className="MenuIcon" onClick={() => handleClick(el)}>
      {el}
    </div>
  ));

  return <div className="Menu">{listItems}</div>;
}

export default Menu;
