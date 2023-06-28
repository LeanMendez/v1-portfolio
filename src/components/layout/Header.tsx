import React from 'react'
import Hero from './Hero'
import Nav from './Nav'
import Media from './Media'

const Header = () => {
  return (
    <div className={`flex flex-1 flex-col justify-between pt-24 h-screen sticky top-0`}>
      <Hero/>
      <Nav/>
      <Media/>
    </div>
  )
}

export default Header