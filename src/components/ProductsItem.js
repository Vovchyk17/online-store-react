import { Link } from 'react-router-dom'

export default function ProductsItem({ product }) {
  return (
    <div className="products_item" key={product.id}>
      <figure className="products_item__thumb">
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt={product.title} />
        </Link>
      </figure>
      <span className="products_item__category">{product.category}</span>
      <h3 className="products_item__title">
        <Link to={`/products/${product.id}`}>{product.title}</Link>
      </h3>
      <div className="flex">
        <span className="products_item__price">${product.price}</span>
        <button className="button">Add to cart</button>
      </div>
    </div>
  )
}
