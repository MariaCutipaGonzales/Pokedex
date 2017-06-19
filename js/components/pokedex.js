'use strict';
const pokemonList = (data, update) => {
	const list  = $('<div class="list"></div>');
	const divCnt= $('<div class="bg-gray content"></div>');
	const link  = $('<a href="#"></a>');
	const image = $('<img src="http://serebii.net/art/th/'+data.entry_number+'.png" class="im">');
	
    //Info
    const base     = $('<div class="base"></div>');
    const contIcon = $('<div class="contIcon center-align"></div>');
    const iPokeball= $('<a href="#"><img src="icon/pokeball_gray.png" class="icons"/></a>');
    const iHeart   = $('<a href="#"><img src="icon/valentines-heart.png" class="icons"/></a>');
    const iData    = $('<a href="#"><img src="icon/data.png" class="icons"/></a>');
    const iName    = $('<div class="name"><h5>'+data.pokemon_species.name+'</h5></div>');
	
    link.on('click', (e) => {
		e.preventDefault();
         state.selectedPokemon = data.entry_number;
        $.getJSON(pokemon.pokemon_species.url,(response)=>{
            state.selectedPokemon = response;
        });
		update();
	});
    
    contIcon.append(iPokeball);
    contIcon.append(iHeart);
    contIcon.append(iData);
    base.append(contIcon);
    base.append(iName);
    
    
	link.append(image);
    divCnt.append(link);
	divCnt.append(base);
    list.append(divCnt);
    
	return list;
} 

const reRender = (container, data, update) => {
 	container.empty();
 	$.each(data,(i,pokemon) => {
 		container.append(pokemonList(pokemon,update));
    });
}

const Pokedex = (update) => {
	const search = $('<section class="row pokedex"></section>');
    const pokedex= $('<div class="row"></div>');
	const input  = $('<input type="text"/>');
	const icon   = $('<i class="fa fa-search"></i>');
    const div    = $('<div class="col s6 offset-s1"></div>');
	const az     = $('<div class="col s3 offset-s2 center-align"><button class="az btn-large">A-Z</button></div>');
	const result = $('<div class="flex-container result"></div>');
    
    div.append(icon);
    div.append(input);
	pokedex.append(div);
	pokedex.append(az);
    search.append(pokedex);
    search.append(result);

    $.each(state.pokemon.pokemon_entries,(i, pokemon) => {
        result.append(pokemonList(pokemon,update));
         if (i == 9) return false;
    });
    
	input.on('keyup' ,(e) => {
		const filter = filterByName(state.pokemon.pokemon_entries,input.val());
		reRender(result,filter,update);
	});
	return search;
}