import Header from '@/components/layout/Header'
import { Inter } from 'next/font/google'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { IPostMetadata } from '@/types'
import BlogSection from '@/components/sections/BlogSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectSection from '@/components/sections/ProjectSection'
import ScrollToTopArrow from '@/components/ui-components/ScrollToTop'
import Footer from '@/components/layout/Footer'



const inter = Inter({ subsets: ['latin'] })


export const getStaticProps = async() => {
    const projects = await getAllFilesFrontMatter("projects")
    const articles = await getAllFilesFrontMatter("blog")
  return {
    props: {
      projects,
      articles
    },
  };
} 

 const Home = (props:IPostMetadata) => {
  
  const {projects, articles} = props
  return (
    <main
      className={`flex flex-col lg:flex-row gap-x-16 min-h-screen mx-auto max-w-screen-xl px-4 lg:px-6 md:px-24 ${inter.className} text-sm sm:text-base`}
    >
     <Header/> 
     <aside className={`flex flex-col flex-1 pt-24 gap-5`}>
      <AboutSection/>
      <SkillsSection/>
      <ProjectSection props={projects} />
      <BlogSection props={articles}/>
      <ScrollToTopArrow />
      <Footer/>
     </aside>
    </main>
  )
}

export default Home;
