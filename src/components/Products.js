import { useEffect, useState } from 'react'

export default () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json))
  }, [])

  return (
    <div className="products">
      <div className="container">
        <h2 className="products_title">Products</h2>
        <div className="products_items">
          {products.map((product) => (
            <div className="products_item" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <h4>{product.category}</h4>
              <p>{product.description}</p>
              <span>${product.price}</span>
              <button>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
