import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Nosotros from "./page/Nosotros";
import Especialidades from "./page/Especialidades";
import Login from "./page/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
