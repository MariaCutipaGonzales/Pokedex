'use strict';

const render = (root,data) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  wrapper.append(Pokedex());
  
  if(state.pokemonSelected != null){
	wrapper.append(Modal());
  }
    
  root.append(wrapper);
}

const state = {
  pokemon: null,
  selectedPokemon: null
};


$( _ => {
  getPokemon((err, data) => {
    if (err) console.log(err);
    const root = $("#root");
    state.pokemon=data;
    render(root,data);
  });

});
