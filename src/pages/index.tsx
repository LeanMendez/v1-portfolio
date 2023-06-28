import fs from 'fs'
import Header from '@/components/layout/Header'
import ProjectCard from '@/components/ui-components/ProjectCard'
import About from '@/components/sections/About'
import BlogSection from '@/components/sections/BlogSection'
import { Inter } from 'next/font/google'
import { IHome } from '@/types'

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps = async() => {
    const folder = "content/"
    const files = fs.readdirSync(folder);
    const markdownContent = files.filter((file) => file.endsWith('.md'))
    const slugs = markdownContent.map((file) => file.replace(".md", ""))


  return {
    props: {
      slugs,
    },
  };
} 

 const Home = ({slugs}:IHome) => {
  return (
    <main
      className={`flex gap-x-16 min-h-screen mx-auto max-w-screen-xl px-24 ${inter.className}`}
    >
     <Header/> 
     <aside className={`flex flex-col flex-1 pt-24 gap-5`}>
      <About/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <BlogSection slugs={slugs}/>
     </aside>
     
    </main>
  )
}

export default Home;
