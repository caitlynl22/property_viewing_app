import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PropertiesPage from "./pages/PropertiesPage"
import PropertyShowPage from "./pages/PropertyShowPage"
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PropertiesPage />} />
        <Route path="/properties/:id" element={<PropertyShowPage />} />
      </Routes>
    </Router>
  )
}

export default App
