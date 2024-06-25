import React from 'react'
import ProductList from './components/ProductList'

const Products = () => {
  return (
    <div className='p-6'>
        <h1 className='text-2xl font-medium'>Products</h1>
        <ProductList />
    </div>
  )
}

export default Products