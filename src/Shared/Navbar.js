import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='mx-6'>
            <div className='flex justify-between items-center'>
                <NavLink to="/">
                    <h1 className='text-xl font-semibold uppercase'>Shopping Corner</h1>
                </NavLink>
                <div className='flex'>
                    <NavLink to="/products" className="p-2">
                        <h3>Products</h3>
                    </NavLink>
                    <NavLink to="/products" className="p-2">
                        <h3>Wishlist</h3>
                    </NavLink>
                    <NavLink to="/products" className="p-2">
                        <h3>My Collection</h3>
                    </NavLink>
                </div>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar