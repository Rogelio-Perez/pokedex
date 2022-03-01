import React from 'react'

function Pokemon({ pokemon }) {
  console.log(pokemon)
  return (
    <div className='w-full shadow-sm flex flex-col items-center justify-center rounded bg-gray-800'>
      <img
        className='w-1/2'
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <h1 className='text-center capitalize'>
        #{pokemon.id} - {pokemon.name}
      </h1>
    </div>
    // <div className='relative'>
    //   <img
    //     alt={pokemon.name}
    //     className='absolute w-full h-full object-cover object-center'
    //     src={pokemon.sprites.front_default}
    //   />
    //   <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100'>
    //     <h2 className='tracking-widest text-sm title-font font-medium text-indigo-400 mb-1'>
    //       # {pokemon.id}
    //     </h2>
    //     <h1 className='title-font text-lg font-medium capitalize  text-white mb-3'>
    //       {pokemon.name}
    //     </h1>
    //     <div>
    //       {pokemon.types.map((type, i) => {
    //         return (
    //           <p key={i} className='leading-relaxed'>
    //             {type.name}
    //           </p>
    //         )
    //       })}
    //     </div>
    //   </div>
    // </div>
  )
}

export default Pokemon
