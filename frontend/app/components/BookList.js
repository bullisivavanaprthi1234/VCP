import BookCard from './BookCard'

export default function BookList({ books }) {
  if (books.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-gray-900">No books found</h2>
        <p className="text-gray-600 mt-2">Try adjusting your search criteria</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {books.map(book => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  )
}
