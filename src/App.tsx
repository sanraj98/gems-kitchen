import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MealPlannerPage from './pages/MealPlannerPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/planner/select" element={<MealPlannerPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
