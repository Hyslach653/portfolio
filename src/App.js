/** @jsxRuntime classic */
/* @jsx jsx */
import { jsx } from '@emotion/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home.js";
import NavBar from "./components/NavBar.js";
import FadeOut from "./components/FadeOut.js";

export default function App() {
  return (
    <div css={appStyle}>
      <BrowserRouter >
        <NavBar />
        <FadeOut />
        <div className="paddingTop">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

const appStyle = {
  minHeight: "100vh",
  backgroundColor: "#e1e5f2",
  ".paddingTop": {
    paddingTop: "50px"
  }
}

// PALETTE
// #ffffff
// #e1e5f2
// #bfdbf7
// #1f7a8c
// #022b3a