
var pokemonRepository = (function () {
  var pokemonList = [
      {
      name: 'Evevee ',
      height: 0.3 ,
      color: 'brown and yellow ',
      abilities: ['run-away ', 'adaptable ']
      },
      {
        name: 'Pikachu ',
        height: 0.4 ,
        color: 'yellow ',
        abilities: ['static ', 'lightningrod ']
      },
      {
        name: 'Wigglytuff ',
        height: 1 ,
        color: 'pink ',
        abilities: ['cute-charm ', 'frisk ']
      }
    ];

    function getAll() {
      return pokemonList;
    }
    function add(pokemon) {
      pokemonList.push(pokemon);
    }
    return {
      getAll: getAll,
      add: add
    };
  })();

getAll.forEach(function(pokemon){
  document.write("<p>" + "name: " + pokemon.name + "height: " + pokemon.height +
  '<br>' + "color: " + pokemon.color + "abilities: " + pokemon.abilities + "</p>");
});
