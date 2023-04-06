import React from 'react'
import Navbar from '../../Shared/Navbar'
import Products from './Products'

function Home() {
  return (
    <div className='bg-slate-100'>
        <Navbar />
        <Products />
    </div>
  )
}

export default Home