import { BookOpen, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">BookHaven</span>
            </div>
            <p className="mt-4 text-gray-600">Discover your next favorite book from our carefully curated collection</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/categories" className="text-gray-600 hover:text-blue-600">Categories</a></li>
              <li><a href="/authors" className="text-gray-600 hover:text-blue-600">Authors</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-blue-600">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span>support@bookhaven.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to get updates on new books and exclusive offers</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} BookHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

