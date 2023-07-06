import React from 'react'
import Title from '../ui-components/Title'
import ProjectCard from '../ui-components/ProjectCard'

const ProjectSection = (projects:any) => {
  const { props } = projects
  return (
    <section id="projects" className='scroll-m-24'>
      <Title>Side Projects</Title>
      <div  className="flex flex-col min-h-[800px] gap-6">

      {props.map((card:any) => <ProjectCard key={card.slug} title={card.title} date={card.date} github={card.github} external={card.external} tech={card.tech} company={card.company} showInProjects={card.showInProjects} slug={card.slug} source={card.source} />)}
      </div>
    </section>
  )
}

export default ProjectSection