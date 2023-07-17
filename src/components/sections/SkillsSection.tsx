import React from 'react'
import Title from '../ui-components/Title'
import SkillsCard from '../ui-components/SkillsCard'
import { ISkillCard } from '@/types'

const SkillsSection = (skills:any) => {
  const {props} = skills
  return (
    <section id="skills" className='scroll-m-24 mb-10'>
    <Title className='mb-8'>Skills Section</Title>
    <div  className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
  
    {props ? props.map((card:ISkillCard) => <SkillsCard key={card.title} {...card} />) : <span>Working on it</span>}
    </div>
    </section>
  )
}

export default SkillsSection