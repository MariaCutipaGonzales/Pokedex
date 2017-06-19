'use strict';

const Header = () => {
	const header = $('<header class="row"></header>');
	const title = $('<h1>Pokédex</h1>');
	
	header.append(title);	
	
	return header;
}