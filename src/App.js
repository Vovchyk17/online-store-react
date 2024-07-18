import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import SingleProduct from './pages/SingleProduct'
import ProductsItem from './ProductsItem'
import CategoryFilter from './CategoryFilter'
import LoadMore from './LoadMore'
import Search from './Search'

 const [products, setProducts] = useState([])
 const [limit, setLimit] = useState(4)
 const [categories, setCategories] = useState([])
 const [selectedCategory, setSelectedCategory] = useState(null)
 const [hasMore, setHasMore] = useState(true)
 const [searchQuery, setSearchQuery] = useState('')

 useEffect(() => {
   const fetchData = async (limit, selectedCategory) => {
     try {
       let apiUrl = 'https://fakestoreapi.com/products'

       const allProdResponse = await fetch(apiUrl)
       const allProdJson = await allProdResponse.json()

       if (searchQuery !== '') {
         const filteredProducts = allProdJson.filter((product) => {
           return product.title.toLowerCase().includes(searchQuery)
         })
         setProducts(filteredProducts)
         setHasMore(false)
       } else {
         if (selectedCategory && selectedCategory !== null) {
           apiUrl += `/category/${selectedCategory}`
         }
         apiUrl += `?limit=${limit}`

         const response = await fetch(apiUrl)
         const json = await response.json()

         const totalCount = await fetchTotalCount(selectedCategory)

         const displayedProducts = json.slice(0, limit)
         setProducts(displayedProducts) // Slice the array to display only the required number of products

         setHasMore(totalCount > displayedProducts.length) // Set hasMore based on whether there are more products available
       }
     } catch (err) {
       console.log(err)
     }
   }

   fetchData(limit, selectedCategory)
 }, [limit, selectedCategory, searchQuery])

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

 const handleSearch = (event) => {
   const searchValue = event.target.value.toLowerCase()
   setSearchQuery(searchValue)
 }

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="flex-1 pb-24 pt-12">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <div className="products container">
                    <h2 className="mb-16 text-center text-4xl font-bold">
                      Products
                    </h2>
                    <div className="mb-8 flex flex-wrap items-center justify-between  gap-6">
                      <CategoryFilter
                        categories={categories}
                        handleCategoryClick={handleCategoryClick}
                        selectedCategory={selectedCategory}
                      />
                      <Search handleSearch={handleSearch} />
                    </div>
                    <div className="grid grid-cols-1 gap-8 min-[540px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {products.map((product) => (
                        <ProductsItem
                          product={product}
                          key={`product_${product.id}`}
                        />
                      ))}
                    </div>
                    {hasMore && <LoadMore handleLoadMore={handleLoadMore} />}
                  </div>
                </>
              }
            />
            <Route path="/products/:productId" element={<SingleProduct />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
