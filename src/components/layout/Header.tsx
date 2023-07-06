import React from 'react'
import Hero from './Hero'
import Nav from './Nav'
import Media from './Media'

const Header = () => {
  return (
    <div className={`flex flex-1 flex-col justify-between pt-10 sm:pt-24 lg:sticky top-0 max-h-[calc(100vh-2rem)] `}>
      <Hero/>
      <Nav/>
      <Media/>
    </div>
  )
}

export default Header