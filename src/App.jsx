import { Routes, Route } from "react-router";
import Home from './pages/Home'
import Habbit from './pages/Habbit'
import Stats from './pages/Stats'
import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation using React Router */}
        <nav className="bg-white shadow-md rounded-lg p-4 mb-8">
          <ul className="flex space-x-6 justify-center">
            <li>
              <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">Home</a>
            </li>
            <li>
              <a href="/habbit" className="text-blue-600 hover:text-blue-800 font-medium">Habbit</a>
            </li>
            <li>
              <a href="/stats" className="text-blue-600 hover:text-blue-800 font-medium">Stats</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/habbit" element={<Habbit />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>

      </div>
    </div>
  )
}

export default App
