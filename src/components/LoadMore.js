export default function LoadMore({ handleLoadMore }) {
  return (
    <div className="mt-16 text-center">
      <button className="button" onClick={handleLoadMore}>
        Load more products
      </button>
    </div>
  )
}
