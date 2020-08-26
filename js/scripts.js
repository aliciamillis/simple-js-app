let pokemonList = [
  {name: 'Evevee', height: 0.3, color: 'brown and yellow', abilities: ['run-away', 'adaptable']},
  {name: 'Pikachu', height: 0.4, color: 'yellow', abilities: ['static', 'lightningrod']},
  {name: 'Wigglytuff', height: 1, color: 'pink', abilities: ['cute-charm', 'frisk']}
]
for (let i=0; i < pokemonList.length; i++) {
  if (pokemonList[i].height < 0.5){
    console.log(pokemonList[i].name + " is so small!");
  }
}
