import React, {useState, useEffect} from 'react'
import Project from '../components/Project';

function ProjectPage() {
const [projects, setProjects] = useState([]);

useEffect(() => {
  fetch('http://localhost:4000/projects')
  .then((r) => r.json())
  .then(setProjects)
}, []);



  const cards = projects.map((project) => 
    <Project key={project.id} project={project} />)

     return (
    <div>
        {cards}
    </div>
  )
}

export default ProjectPage