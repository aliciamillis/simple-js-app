
//this is my pokemon list
let pokemonList = [
  {name: 'Evevee ', height: 0.3 , color: 'brown and yellow ', abilities: ['run-away ', 'adaptable ']},
  {name: 'Pikachu ', height: 0.4 , color: 'yellow ', abilities: ['static ', 'lightningrod ']},
  {name: 'Wigglytuff ', height: 1 , color: 'pink ', abilities: ['cute-charm ', 'frisk ']}
]
document.write('<h2>===Pokemon List===</h2>');
document.write("<p>" + "name: " + pokemonList.name + "height: " + pokemonList.height + '<br>' + "color: " + pokemonList.color + "abilities: " + pokemonList.abilities + "</p>");

//this loop shows which pokemon are small
for (let i=0; i < pokemonList.length; i++) {
  if (pokemonList[i].height < 0.5){
    document.write("<p>" + "name: " + pokemonList[i].name + "height: " + pokemonList[i].height + '<br>' + "color: " + pokemonList[i].color + "abilities: " + pokemonList[i].abilities + "</p>");
    console.log(pokemonList[i].name + " is so small!");
  }
}
