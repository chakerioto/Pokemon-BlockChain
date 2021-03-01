import React from 'react';
import PokemonList from './PokemonList';

function MyDeck({ state }) {
  return (
    <div className="MyDeck">
      <h4>Here are my PokemonList :</h4>
      <PokemonList state={state} />
    </div>
  );
}

export default MyDeck;
