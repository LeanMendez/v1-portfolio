import React from 'react'
import Link from '../ui-components/Link'

const Footer = () => {
  return (
    <footer className={`max-h-24 font-light tracking-normal max-w-md mb-20 text-sm`}>
      Casually designed in <Link href='https://www.figma.com' icon={true} className='font-medium h-4 '>Figma</Link> and coded in <Link href='https://code.visualstudio.com/' icon={true} className='font-medium h-4 '>Visual Studio Code</Link>, this site comes to life with the power of <Link href='https://www.nextjs.org' icon={true} className='font-medium h-4 '>Next.js</Link>, <Link href='https://tailwindcss.com/' icon={true} className='font-medium h-4 '>TailwindCSS</Link>, and <Link href='https://www.vercel.org' icon={true} className='font-medium h-4 '>Vercel</Link>&apos;s seamless deployment.
    </footer>
  )
}

export default Footer

