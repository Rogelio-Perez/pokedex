import React from 'react'

const Pokedex = () => {
  return (
    <section className='text-gray-400 bg-gray-900 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
            Pokédex
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Esta es una Pokédex, se creo utilizando la API de PokéAPI
          </p>
        </div>
        <div className='flex flex-wrap -m-4'>
          <div className='lg:w-1/3 sm:w-1/2 p-4'>
            <div className='flex relative'>
              <img
                alt='gallery'
                className='absolute inset-0 w-full h-full object-cover object-center'
                src='https://dummyimage.com/605x365'
              />
              <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100'>
                <h2 className='tracking-widest text-sm title-font font-medium text-indigo-400 mb-1'>
                  THE SUBTITLE
                </h2>
                <h1 className='title-font text-lg font-medium text-white mb-3'>
                  Holden Caulfield
                </h1>
                <p className='leading-relaxed'>
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pokedex