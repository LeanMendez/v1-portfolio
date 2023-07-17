import { ISkillCard } from '@/types'
import React from 'react'

const SkillsCard:React.FC<ISkillCard> = (props) => {
  const skillStyle = 'text-slate-300 text-base font-light'

  return (
    <div className={`flex flex-col flex-1 border-[1px] border-slate-200 border-opacity-10  p-3 lg:p-8 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm max-h-80`}>
      <h2 className={`text-2xl mb-3 font-medium text-yellow-200`}>{props.title}</h2>
      <ul className='flex flex-col gap-2'>
        {props.skills.slice(0,6).map((skill)=>(<li key={skill} className={`${skillStyle}`}>{skill}</li>))}
      </ul>
    
    </div>
  )
}

export default SkillsCard