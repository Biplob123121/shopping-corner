import React, { useEffect, useState } from 'react'
import Product from './Product';
import AddProduct from './AddProduct';

function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    console.log(products)

    useEffect(() => {
        fetch('https://microdeft.rifatewu.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setIsLoading(false)
            })
    }, [products])
    return (
        <section className='mx-6 flex justify-between mt-12'>
            <div className='w-full'>
                <h1 className='text-center text-xl font-semibold'>Product List</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {
                        products.map(product => <Product
                            key={product.product_id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
            <div className='w-80'>
                <AddProduct />
            </div>
        </section>
    )
}

export default Products