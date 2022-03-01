import { useState, useEffect } from 'react'
import { getPokemonData, getPokemons } from './api'
import Nav from './components/Nav'
import Pokedex from './components/Pokedex'

function App() {
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons()
      console.log(data.results)
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
    } catch (error) {}
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <>
      <Nav />
      <Pokedex pokemons={pokemons} />
    </>
  )
}

export default App
