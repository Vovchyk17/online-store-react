import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'

export default function SingleProduct() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)

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
      <div className="container">
        <div className="single_product__back">
          <a href="/">
            <IoIosArrowRoundBack />
            Back to home page
          </a>
        </div>
        <div className="single_product__content">
          <div className="single_product__image">
            <img src={product?.image} alt={product?.title} />
          </div>
          <div className="single_product__info">
            <span className="single_product__category">
              {product?.category}
            </span>
            <h1 className="single_product__title">{product?.title}</h1>
            <p className="single_product__description">
              {product?.description}
            </p>
            <div className="flex">
              <div className="single_product__price">${product?.price}</div>
              <button className="button">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
