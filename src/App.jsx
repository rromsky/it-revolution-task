import Index from "./pages/Home/Index";
import SeaAnimal from "./pages/AddSeaAnimal/SeaAnimal";
import Analitics from "./pages/Analitics/Analitics";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import { checkAuth } from "./services";
import { ToastContainer } from "react-toastify";
import Authorization from "./pages/Authorization";

function App() {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    checkAuth().then((data) => {
      if (data) {
        setUserToken(data);
      }
    });
  }, []);

  if (!userToken) {
    return <Authorization setUserToken={setUserToken} />;
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/add" element={<SeaAnimal />} />
          <Route path="/analitics" element={<Analitics />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
