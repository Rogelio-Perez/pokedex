import React from 'react'
import Pokemon from './Pokemon'

const Pokedex = ({ pokemons }) => {
  return (
    <section className='text-gray-400 bg-gray-900 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
            Pokédex
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Pokédex creada con la API de{' '}
            <a
              target='_blank'
              className='text-blue-400'
              href='https://pokeapi.co/'
              rel='noreferrer'
            >
              PokéAPI
            </a>
            , esta aplicación esta desarrollada en{' '}
            <a
              target='_blank'
              className='text-blue-400'
              href='https://es.reactjs.org/'
              rel='noreferrer'
            >
              React
            </a>
            , utilizando un framework de CSS llamado{' '}
            <a
              target='_blank'
              className='text-blue-400'
              href='https://tailwindcss.com/'
              rel='noreferrer'
            >
              Tailwind
            </a>
            . La aplicación tiene como objetivo la practica de las tecnologias
            ya nombradas anteriormente, de igual forma el poder ayudar a la
            comunidad de Pokémon a que pueda disfrutar de esta App.
          </p>
        </div>
        <div className='grid gap-5 grid-cols-3 items-center justify-center'>
          {/* ::::::::::CARD:::::::::: */}

          {pokemons.map((pokemon, i) => {
            return <Pokemon pokemon={pokemon} key={pokemon.name} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Pokedex
