import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function SingleProduct() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)

  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        )
        const json = await response.json()
        setProduct(json)
      } catch (err) {
        console.error(err)
      }
    }
    fetchProduct()
  }, [productId])

  return (
    <div className="single_product">
      <div className="container max-w-screen-lg">
        <div className="mb-8">
          <Link
            to="/"
            className="flex items-center justify-start text-lg font-bold hover:text-blue-800"
          >
            <IoIosArrowRoundBack className=" mr-2 h-8 w-8" />
            Back to home page
          </Link>
        </div>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="flex items-center justify-center overflow-hidden rounded-lg border-2 border-black bg-white px-4 py-8">
            <img src={product?.image} alt={product?.title} />
          </div>
          <div className="single_product__info">
            <span className="mb-4 block text-left text-sm font-bold text-blue-800">
              {product?.category}
            </span>
            <h1 className="mb-4 text-5xl font-bold leading-tight text-black">
              {product?.title}
            </h1>
            <p className="mb-8 text-lg leading-normal text-gray-600">
              {product?.description}
            </p>
            <div className="flex flex-wrap items-center justify-between">
              <div className="text-4xl font-bold">${product?.price}</div>
              <button className="button" onClick={() => addToCart(product)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
