import { useEffect, useState } from 'react'

export default () => {
  //I need to fetch the data from the API https://fakestoreapi.com/products
  //and store it in a state variable
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json))
  }, [products])

  return (
    <div className="products">
      <div className="container">
        <h2 className="products_title">Products</h2>
        <div className="products_items">
          {products.map((product) => (
            <div className="products_item" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
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
