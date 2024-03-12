import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ProductsItem from './ProductsItem'

export default function Products() {
  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(4)

  useEffect(() => {
    fetchData(limit)
  })

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=${limit}`
      )
      const json = await response.json()
      setProducts(json)
    } catch (err) {
      console.log(err)
    }
  }

  const handleLoadMore = () => {
    setLimit(limit + 4)
  }

  return (
    <div className="products container">
      <h2 className="mb-16 text-center text-4xl font-bold">Products</h2>
      <div className="grid grid-cols-1 gap-8 min-[540px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductsItem product={product} key={uuidv4()} />
        ))}
      </div>
      {products.length > 0 && (
        <div className="mt-16 text-center">
          <button className="button" onClick={handleLoadMore}>
            Load more products
          </button>
        </div>
      )}
    </div>
  )
}
