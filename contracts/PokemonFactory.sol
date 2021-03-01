pragma solidity >=0.5.0 <0.6.0;

contract PokemonFactory {
        uint cooldownTime = 1 days;


    // declare our event here
    event NewPokemon(uint id, string _name, uint _hp, uint _attack ,string _imgUrl);


    struct Pokemon {
        string name;
        uint hp;
        uint attack ;
        string _imgUrl;
    }

    Pokemon[] public pokemons;

    
    mapping (uint => address) public pokemonToOwner;
    mapping (address => uint) ownerPokemonsCount;

    function _createPokemon(string memory _name, uint _hp, uint _attack , string memory _imgUrl) internal  {
        pokemons.push(Pokemon(_name, _hp, _attack , _imgUrl));
        uint id = pokemons.push(Pokemon(_name, _hp, _attack, _imgUrl)) - 1;
        pokemonToOwner[id] = msg.sender;
        ownerPokemonsCount[msg.sender]++;
        emit NewPokemon(id, _name, _hp, _attack ,_imgUrl);
    }

   


}
