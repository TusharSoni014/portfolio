import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
    const projects = [
        {
            img:'https://i.imgur.com/gRKxpll.png',
            title:'Vanilla Javascript Piano App',
            desc:'This is a online piano app made using vanilla javascript with volume control and mobile responsive.'
        },
        {
            img:'https://i.imgur.com/E0YTq1p.png',
            title:'React.js Notes App',
            desc:'This is a online Notes app made using React.js with mobile responsive and dark mode.'
        },
        {
            img:'https://i.imgur.com/Ut3C1ce.png',
            title:'Vanilla Javascript Tic Tac Toe App',
            desc:'This is a tic-tac-toe game made using vanilla javascript with win effects and mobile responsive.'
        },
        {
            img:'https://i.imgur.com/tLhPBVQ.png',
            title:'Vanilla Javascript Weather App',
            desc:'This is a online Weather app made using vanilla javascript with mobile responsive.'
        },
    ]
  return (
    <div className='projects'>
    {projects.map(project => {
        return <ProjectCard img={project.img} title={project.title} desc={project.desc}/>
    })}
    </div>
  )
}
