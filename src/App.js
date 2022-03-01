import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home.js";
import NavBar from "./components/NavBar.js";

export default function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
