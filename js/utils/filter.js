'use strict';

const filterByName = (pokemons,query) => {
  return pokemons.filter((pokemon) => { if(pokemon.pokemon_species.name.toLowerCase().indexOf(query.toLowerCase()) != -1) return pokemon;
  });
}