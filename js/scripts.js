
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
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "height" in pokemon &&
        "color" in pokemon &&
        "abilities" in pokemon
      ) {
      pokemonList.push(pokemon);
      } else {
        console.log("pokemon is not correct");
      }
    }

    function addListItem(pokemon){
      let pokemonList = document.querySelector(".pokemon-list");
      let listPokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button");
      listPokemon.appendChild(button);
      pokemonList.appendChild(listPokemon);
      document.createElement("button").addEventListener("click", showDetails);
    }

    function showDetails(pokemon){
      console.log(pokemon);
    }

    return {
      getAll: getAll,
      add: add,
      addListItem: addListItem
    }
    ;
  })();

pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});
