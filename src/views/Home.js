/** @jsxRuntime classic */
/* @jsx jsx */
import { jsx } from '@emotion/react'

export default function Home () {
  return (
    <div css={homeStyle}>
      {/* if hover => show actual image ?? */}
      <img className='profileGif' alt='profile' src='/pictures/profile.gif' />
      <p>Learn react</p>
    </div>
  )
}

const homeStyle = {
  minHeight: '200vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '10vh',
  '.profileGif': {
    borderRadius: '100%',
    // make width responsive!
    width: '25vw'
  }
}
