import React from 'react'

export default function SkillCard({icon, language}) {
  return (
    <div className='skill-card'>
        <div className="icon">{icon}</div>
        <h3>{language}</h3>
    </div>
  )
}
