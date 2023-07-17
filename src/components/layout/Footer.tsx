import React from 'react'
import Link from '../ui-components/Link'
import { IFooter } from '@/types'

const Footer = ({StyleClass}:IFooter) => {
  return (
    <footer className={`${StyleClass} max-h-24 font-light tracking-normal max-w-md mb-10 text-xs`}>
      Casually designed in <Link href='https://www.figma.com' icon={true} className='font-medium h-4 no-underline'>Figma</Link> and coded in <Link href='https://code.visualstudio.com/' icon={true} className='font-medium h-4 no-underline '>Visual Studio Code</Link>, this site comes to life with the power of <Link href='https://www.nextjs.org' icon={true} className='font-medium h-4 no-underline'>Next.js</Link>, <Link href='https://tailwindcss.com/' icon={true} className='font-medium h-4 no-underline'>TailwindCSS</Link>, and <Link href='https://www.vercel.org' icon={true} className='font-medium h-4 no-underline'>Vercel</Link>&apos;s seamless deployment.
    </footer>
  )
}

export default Footer