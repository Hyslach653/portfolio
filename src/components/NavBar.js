/** @jsxRuntime classic */
/* @jsx jsx */
import { jsx } from '@emotion/react';
import { NavLink } from "react-router-dom"

export default function NavBar() {
  return (
    <div css={headerStyle}>
      <NavLink to="/">
        Home
      </NavLink>
    </div>
  )
}

const headerStyle = {
  // backgroundImage: "linear-gradient(to top, rgba(225, 229, 242, 0.1), rgba(225, 229, 242))",
  position: "fixed",
  top: 0,
  width: "100%",
  height: "50px",
  zIndex: 10,
  display: "flex",
  alignItems: "center",
  padding: "0 20px"
}