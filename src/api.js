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
