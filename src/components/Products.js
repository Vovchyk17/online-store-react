import React, { useEffect, useState } from 'react'
import ProductsItem from './ProductsItem'
import CategoryFilter from './CategoryFilter'
import LoadMore from './LoadMore'

export default function Products() {
  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(4)
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [hasMore, setHasMore] = useState(true)
  const [totalProductsCount, setTotalProductsCount] = useState(0)

  useEffect(() => {
    const fetchData = async (limit, selectedCategory) => {
      try {
        let apiUrl = 'https://fakestoreapi.com/products'
        if (selectedCategory) {
          apiUrl += `/category/${selectedCategory}`
        }
        apiUrl += `?limit=${limit}`

        const response = await fetch(apiUrl)
        const json = await response.json()

        const totalCount = await fetchTotalCount(selectedCategory)
        setTotalProductsCount(totalCount) // Set total products count

        const displayedProducts = json.slice(0, limit)
        setProducts(displayedProducts) // Slice the array to display only the required number of products

        setHasMore(totalCount > displayedProducts.length) // Set hasMore based on whether there are more products available
      } catch (err) {
        console.log(err)
      }
    }

    fetchData(limit, selectedCategory)
  }, [limit, selectedCategory])

  useEffect(() => {
    getAllCategories()
  }, [])

  const getAllCategories = async () => {
    try {
      const response = await fetch(
        'https://fakestoreapi.com/products/categories'
      )
      const json = await response.json()
      setCategories(json)
    } catch (err) {
      console.log(err)
    }
  }

  const fetchTotalCount = async (selectedCategory) => {
    try {
      let apiUrl = 'https://fakestoreapi.com/products'
      if (selectedCategory) {
        apiUrl += `/category/${selectedCategory}`
      }

      const response = await fetch(apiUrl)
      const json = await response.json()
      return json.length
    } catch (err) {
      console.log(err)
      return 0
    }
  }

  const handleLoadMore = () => {
    setLimit(limit + 4)
  }

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category)
    setLimit(4) // Reset limit when a new category is selected to start from the beginning
  }

  // Calculate remaining products count
  const remainingProductsCount = totalProductsCount - products.length

  return (
    <div className="products container">
      <h2 className="mb-16 text-center text-4xl font-bold">Products</h2>
      <CategoryFilter
        categories={categories}
        handleCategoryClick={handleCategoryClick}
        selectedCategory={selectedCategory}
      />
      <div className="grid grid-cols-1 gap-8 min-[540px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductsItem product={product} key={`product_${product.id}`} />
        ))}
      </div>
      {hasMore && <LoadMore handleLoadMore={handleLoadMore} />}
      {remainingProductsCount > 0 && (
        <p>Remaining products to upload: {remainingProductsCount}</p>
      )}{' '}
      {/* Display remaining products count only if there are remaining products */}
    </div>
  )
}
