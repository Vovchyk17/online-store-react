export default function CategoryFilter({
  categories,
  handleCategoryClick,
  selectedCategory,
}) {
  return (
    <div className="category-filter flex items-center justify-start gap-4">
      <button
        className={`button ${selectedCategory === null ? 'selected' : ''}`}
        onClick={() => handleCategoryClick(null)}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          className={`button ${
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
