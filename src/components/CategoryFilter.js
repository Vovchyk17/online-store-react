export default function CategoryFilter({
  categories,
  handleCategoryClick,
  selectedCategory,
}) {
  return (
    <div className="category-filter mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`button mr-4 ${
            category === selectedCategory ? 'selected' : ''
          }`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
