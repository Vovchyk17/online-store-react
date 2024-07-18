import { Link } from 'react-router-dom'

export default function ProductsItem({ product }) {
  return (
    <div className="products_item flex flex-col" key={product.id}>
      <figure className="mb-6 flex items-center justify-center overflow-hidden rounded-lg border-2 border-black bg-white px-4 py-8">
        <Link to={`/products/${product.id}`} className="block w-full">
          <img
            src={product.image}
            alt={product.title}
            className="h-56 w-full object-contain transition delay-0 duration-300 ease-in-out hover:scale-110"
          />
        </Link>
      </figure>
      <span className="mb-2 block text-sm font-bold text-blue-800">
        {product.category}
      </span>
      <h3 className="mb-4 text-xl font-bold leading-tight text-black hover:text-blue-800">
        <Link to={`/products/${product.id}`}>{product.title}</Link>
      </h3>
      <div className="mt-auto flex flex-wrap items-center justify-between">
        <span className="text-xl font-bold">${product.price}</span>
        <button className="button">Add to cart</button>
      </div>
    </div>
  )
}
