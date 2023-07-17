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
    const skills = await getAllFilesFrontMatter("skills")
  return {
    props: {
      skills,
      projects,
      articles
    },
  };
} 

 const Home = (props:IPostMetadata) => {
  
  const {projects, articles, skills} = props
  return (
    <main
      className={`flex flex-col lg:flex-row gap-x-16 min-h-screen mx-auto max-w-screen-xl  lg:px-24 sm:px-12 px-4 ${inter.className} text-sm sm:text-base`}
    >
     <Header/> 
     <aside className={`flex flex-col flex-1 pt-24 gap-5`}>
      <AboutSection/>
      <SkillsSection props={skills}/>
      <ProjectSection props={projects} />
      <BlogSection props={articles}/>
      <Footer StyleClass='lg:hidden'/>
      <ScrollToTopArrow />
     </aside>
    </main>
  )
}

export default Home;
