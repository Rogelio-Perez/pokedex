export const searchPokemon = async (pokemon) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const response = await fetch(url)
    const data = response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getPokemons = async (limit = 12, offset = 0) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    const response = await fetch(url)
    const data = response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url)
    const data = response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
