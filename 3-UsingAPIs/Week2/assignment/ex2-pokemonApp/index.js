/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
const url = "https://pokeapi.co/api/v2/pokemon?limit=151"
function fetchData(url) {
  return fetch(url)
  .then((response)=>{
    if(!(response.ok)){
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    console.error(`Fetching data failed: ${error.message}`);
    throw error; 
  });
}


async function fetchAndPopulatePokemons() {
  const selectElement = document.createElement('select');
  document.body.appendChild(selectElement);
try{
const data = await fetchData(url);
data.results.forEach((pokemon)=>{
  const option = document.createElement('option');
  option.value = pokemon.name;
  option.textContent = pokemon.name;
  selectElement.appendChild(option);
});
selectElement.addEventListener('change',async (event) =>{
  await fetchImage(event.target.value);
});
}catch (error) {
  console.error("Error populating Pokémon list:", error.message);
}
}

async function fetchImage(pokemonName) {
  try {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const data = await fetchData(pokemonUrl); 
    const imgElement = document.querySelector('img') || document.createElement('img');
    imgElement.src = data.sprites.front_default;
    if (!imgElement.parentNode) {
      document.body.appendChild(imgElement);
    }
  } catch (error) {
    console.error("Error fetching Pokémon image:", error.message);
  }
}


 function main() {

  fetchAndPopulatePokemons();

 
}
window.addEventListener('load', main);