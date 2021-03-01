import React from 'react';

function PokemonList({ state }) {
  const PokePoke = state.PokeList.map(el => <li key={el.name}>{el.name}</li>);

  return <ul>{PokePoke}</ul>;
}

export default PokemonList;
