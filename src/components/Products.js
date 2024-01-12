import React, { useEffect, useState } from 'react'
import ProductsItem from './ProductsItem'

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products?limit=4'
        )
        const json = await response.json()
        setProducts(json)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="products container">
      <h2 className="products_title">Products</h2>
      <div className="products_items">
        {products.map((product) => (
          <ProductsItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
