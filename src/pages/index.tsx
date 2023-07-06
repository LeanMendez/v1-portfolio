import Header from '@/components/layout/Header'
import { Inter } from 'next/font/google'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { IPostMetadata } from '@/types'
import BlogSection from '@/components/sections/BlogSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectSection from '@/components/sections/ProjectSection'
import ScrollToTopArrow from '@/components/ui-components/ScrollToTop'



const inter = Inter({ subsets: ['latin'] })


export const getStaticProps = async() => {
    const projects = await getAllFilesFrontMatter("projects")
  return {
    props: {
      projects
    },
  };
} 

 const Home = (props:IPostMetadata) => {
  
  const {projects} = props
  return (
    <main
      className={`flex gap-x-16 min-h-screen mx-auto max-w-screen-xl px-24 ${inter.className}`}
    >
     <Header/> 
     <aside className={`flex flex-col flex-1 pt-24 gap-5`}>
      <AboutSection/>
      <SkillsSection/>
      <ProjectSection props={projects} />
      <BlogSection/>
      <ScrollToTopArrow />
     </aside>
    </main>
  )
}

export default Home;
