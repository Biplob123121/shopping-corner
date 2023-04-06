import React from 'react'

function Product({ product }) {
    const { name, description, image } = product;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className='w-52'><img src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    )
}

export default Product