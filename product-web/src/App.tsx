import { ProductsPage } from './pages/ProductsPage'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-blue-100">
        <div className="container mx-auto px-4 py-4 text-center">
          <h1 className="text-2xl font-semibold text-blue-600">Product Management</h1>
        </div>
      </nav>
      <div className="max-w-6xl mx-auto">
        <ProductsPage />
      </div>
    </div>
  )
}

export default App
