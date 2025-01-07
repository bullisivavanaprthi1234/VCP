'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { BookOpen, ChevronDown } from 'lucide-react'

const categories = [
  'Fiction',
  'Non-fiction',
  'Science Fiction',
  'Mystery',
  'Romance',
  'Biography',
  'History',
  'Self-help',
  'Children\'s Books',
  'Cookbooks'
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">BookHaven</span>
          </Link>
          <div className="flex items-center space-x-6">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                Categories
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        href={`/category/${category.toLowerCase().replace(' ', '-')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/authors" className="text-gray-600 hover:text-blue-600">
              Authors
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

