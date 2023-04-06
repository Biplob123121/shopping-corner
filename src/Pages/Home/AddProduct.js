import React from 'react'
import { useForm } from 'react-hook-form';

function AddProduct() {

  const { register, handleSubmit, reset } = useForm();

  const handleAddProduct = data => {
 
          const product = {
            name: data.name,
            price: data.price,
            image: data.image,
            description: data.description
          }

          fetch('https://microdeft.rifatewu.com/products/add', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(product)
          })
            .then(res => res.json())
            .then(data => {
              if (data.acknowledged) {
                reset()
              }
            })
      })
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='w-96 p-6 shadow-2xl'>
        <h2 className='text-2xl text-center font-semibold'>Add New Product</h2>
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Name</span></label>
            <input type="text" {...register("name")} className="input input-bordered w-full" />
          </div>
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Price</span></label>
            <input type="text" {...register("price")} className="input input-bordered w-full" />
          </div>
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Image Url</span></label>
            <input type="text" {...register("image")} className="input input-bordered w-full" />
          </div>
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Description</span></label>
            <textarea type="text" {...register("description")} className="input input-bordered w-full" />
          </div>
          <input className='btn w-full btn-accent mt-4' value="Add product" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default AddProduct