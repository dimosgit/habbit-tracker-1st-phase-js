import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Home from './pages/Home'
import Habbit from './pages/Habit'
import Stats from './pages/Stats'
import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation using React Router */}

        <Header />

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
