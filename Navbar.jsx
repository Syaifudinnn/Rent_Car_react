import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="text-black bg-slate-200">
        <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center border-b-2">
            <a href='/' className="flex title-font font-medium items-center text-black-900 ml-4 mb-4 md:mb-0">
            <img className='ml-10' src="./image/logo.png" alt="Logo" />
              <span className="ml-5 text-xl">Rent_Car</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center mr-10">
              <Link to='/' className="mr-6 hover:text-blue-500">Beranda</Link>
              <Link to='/Galeri' className="mr-6 hover:text-blue-500">Galeri</Link>
              <Link to='/Kontak' className="mr-6 hover:text-blue-500">Kontak</Link>
              <button class="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 hover:text-white rounded text-base mt-4 md:mt-0 ml-5">Login</button>
            </nav>
        </div>
    </header>
  )
}

export default Navbar