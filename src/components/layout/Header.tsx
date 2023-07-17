import React from 'react'
import Hero from './Hero'
import Nav from './Nav'
import Media from './Media'
import Footer from './Footer'

const Header = () => {
  return (
    <div className={`flex flex-1 flex-col justify-between pt-10 sm:pt-24 lg:sticky top-0 max-h-[calc(100vh-2rem)] `}>
      <Hero/>
      <Media/>
      <Nav/>
      <Footer StyleClass='hidden lg:block'/>
    </div>
  )
}

export default Header