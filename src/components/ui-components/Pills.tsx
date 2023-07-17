import React from 'react'

interface IPill {
  str: string;
}

const Pill = ({str}:IPill ) => {



  return (
    <div className={`flex justify-center bg-slate-50 bg-opacity-10 backdrop-filter backdrop-blur-lg w-fit rounded-full px-3 py-1`}>
      <span className={` text-xs text-yellow-200`}>{str}</span>
    </div>
    
  )
}

export default Pill