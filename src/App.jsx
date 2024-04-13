import Index from "../src/pages/Home/Index"
import SeaAnimal from "./pages/AddSeaAnimal/SeaAnimal";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css'

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/add" element={<SeaAnimal/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
