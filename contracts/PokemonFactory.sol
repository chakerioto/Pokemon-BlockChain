pragma solidity >=0.5.0 <0.6.0;

contract PokemonFactory {

    // declare our event here
    event NewPokemon(uint id, string name, uint _hp, uint _attack);


    struct Pokemon {
        string name;
        uint hp;
        uint attack ;
    }

    Pokemon[] public pokemons;

    function _createPokemon(string memory _name, uint _hp, uint _attack) private {
        pokemons.push(Pokemon(_name, _hp, _attack));
         uint id = pokemons.push(Pokemon(_name, _hp, _attack)) - 1;
        emit NewPokemon(id, _name, _hp, _attack);
    }

   


}
