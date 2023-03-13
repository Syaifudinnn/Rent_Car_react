import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Beranda from './Beranda'
import Galeri from './Galeri'
import Kontak from './Kontak'

const Utama = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Beranda />} />
        <Route path='/Galeri' element={<Galeri />} />
        <Route path='/Kontak' element={<Kontak />} />
    </Routes>
  )
}

export default Utama