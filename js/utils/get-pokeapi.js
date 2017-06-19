'use strict';
const getPokemon = (callback) => {

  var Url = 'https://pokeapi.co/api/v2/pokedex/1/';
  
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load',_=>{
    if(xhr.status !=200) callback(new Error("Error al obtener datos"));
    callback(null,xhr.response);
  });

  xhr.open('GET', Url);
  xhr.responseType ='json';
  xhr.send();
};
