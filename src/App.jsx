import Index from "./pages/Home/Index"
import SeaAnimal from "./pages/AddSeaAnimal/SeaAnimal";
import Analitics from "./pages/Analitics/Analitics";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css'

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/add" element={<SeaAnimal/>} />
        <Route path="/analitics" element={<Analitics/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
