'use strict';

const Modal = (data) => {
    console.log(data.id);
    console.log(data);
    const modal = $('<div class="modal"></div>');
    const contenedor = $('<div class="container-flex"></div>');
    const left  = $('<div></div>');
    const rigth  = $('<div></div>');
    const description = $('<div class="description"></div>');
        
    const sexo = $('<p>Sexo :<p>'+'<span>'+S+'</span>');
    const category = $('<p>Categoria :<p>'+'<span>'+data.category+'</span>');
    
    //Datos del Pokemon especifico se obtiene mediante el state.pokemonSelected
    $.getJSON('https://pokeapi.co/api/v2/pokemon/'+state.pokemonSelected+'/', (data) => {
        const altura = $('<p>Altura :<p>'+'<span>'+data.height+' M</span>');
        const peso = $('<p>Peso :<p>'+'<span>'+data.weight+' Kg</span>');
                
        $.each(data.abilities,(e) => {
            const ability = $('<p>Habilidad :<p>'+'<span>'+e.ability+'</span>');
        });    
    });
    
    //Description
    $.getJSON('https://pokeapi.co/api/v2/pokemon-species/'+data.id+'/', (json) => {
        //Obteniendo data en Español 11
        description.append('<p>'+json.flavor_text_entries[11].flavor_text+'</p>');
    });  
    
    return modal;
}