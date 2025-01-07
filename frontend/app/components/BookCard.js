import Link from 'next/link'
import { Book, User, Tag } from 'lucide-react'

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border ">
      <div className="relative aspect-[3/4]">
        <img 
          src={book.imageUrl} 
          alt={book.name} 
          className="w-full h-full"
        />
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-3 rounded-full text-sm font-medium">
          ${book.price.toFixed(2)}
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">{book.name}</h2>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <User size={16} className="mr-2 flex-shrink-0" />
            <p className="text-sm truncate">{book.author}</p>
          </div>
          <div className="flex items-center text-gray-600">
            <Tag size={16} className="mr-2 flex-shrink-0" />
            <p className="text-sm truncate">{book.category}</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{book.description}</p>
        <Link 
          href={`/book/${book._id}`} 
          className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
        >
          <Book className="w-4 h-4 mr-2" />
          View Details
        </Link>
      </div>
    </div>
  )
}
