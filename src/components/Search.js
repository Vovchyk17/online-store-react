export default function Search({ handleSearch }) {
  return (
    <label htmlFor="searchField">
      <span>Search: </span>
      <input
        type="text"
        id="searchField"
        className="search h-[40px] rounded-md border border-solid border-blue-800 p-2"
        onChange={handleSearch}
      />
    </label>
  )
}
