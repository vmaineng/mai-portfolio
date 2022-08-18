import React from 'react'
import Project from '../components/Project';

function ProjectPage({projects}) {
  const cards = projects.map(project => 
    <Project key={project.id} {...project} />)

     return (
    <div>
        {cards}
    </div>
  )
}

export default ProjectPage