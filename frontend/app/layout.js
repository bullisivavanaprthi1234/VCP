import './globals.css'
import Header from './components/header'
import Footer from './components/footer'

export const metadata = {
  title: 'BookHaven - Your Online Bookstore',
  description: 'Discover your next favorite book from our carefully curated collection',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-rose-50 to-white">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
