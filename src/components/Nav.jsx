import React from 'react'
import Searchbar from './Searchbar'

function Nav() {
  const logo = '../assets/logo.png'

  return (
    <nav className='bg-white shadow dark:bg-gray-800'>
      <div className='container px-6 py-3 mx-auto md:flex'>
        <div className='flex items-center justify-between'>
          <div>
            <a
              className='text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300'
              href='/'
            >
              <img src={logo} alt='pokedex logo' />
            </a>
          </div>
          {/* Mobile menu button */}
          <div className='flex md:hidden'>
            <button
              type='button'
              className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
              aria-label='toggle menu'
            >
              <svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
                <path
                  fillRule='evenodd'
                  d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div className='w-full md:flex md:items-center md:justify-between'>
          <div className='flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0'>
            <a
              href='/home'
              className='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2'
            >
              Home
            </a>
            <a
              href='/about'
              className='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2'
            >
              About
            </a>
            <a
              href='/contact'
              className='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2'
            >
              Contact
            </a>
          </div>
          <Searchbar />
        </div>
      </div>
    </nav>
  )
}

export default Nav
