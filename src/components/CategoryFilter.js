import { v4 as uuidv4 } from 'uuid'

export default function CategoryFilter({
  categories,
  handleCategoryClick,
  selectedCategory,
}) {
  return (
    <div className="category-filter flex flex-wrap items-center justify-start gap-4">
      <button
        className={`button ${selectedCategory === null ? 'selected' : ''}`}
        onClick={() => handleCategoryClick(null)}
      >
        All
      </button>
      {categories.map((category, i) => (
        <button
          key={uuidv4()}
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
