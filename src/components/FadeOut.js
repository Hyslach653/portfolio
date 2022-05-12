/** @jsxRuntime classic */
/* @jsx jsx */
import { jsx } from '@emotion/react';

export default function FadeOut() {
  return (
    <div css={fadeoutStyle} />
  )
}

const fadeoutStyle = {
  backgroundImage: "linear-gradient(to top, rgba(225, 229, 242, 0), rgba(225, 229, 242))",
  position: "fixed",
  top: 0,
  width: "100%",
  height: "70px",
  zIndex: 5
}