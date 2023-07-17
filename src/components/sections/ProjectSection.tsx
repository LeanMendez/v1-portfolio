import React from 'react'
import Title from '../ui-components/Title'
import ProjectCard from '../ui-components/ProjectCard'
import { IProjects } from '@/types'

const ProjectSection = (projects:any) => {
  const { props } = projects
  return (
    <section id="projects" className='scroll-m-24 mb-10'>
      <Title className='mb-8'>Side Projects</Title>
      <div  className="flex flex-col min-h-[400px] gap-6">

      {props ? props.map((card:IProjects) => <ProjectCard key={card.slug} {...card} />) : <span>Working on it</span>}
      </div>
    </section>
  )
}

export default ProjectSection