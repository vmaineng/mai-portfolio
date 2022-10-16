import React, {useState, useEffect} from 'react'
import Project from '../components/Project';
import {
  Text,
 
} from "@chakra-ui/react";

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
<Text> Please note: if projects do not appear, please click on Github link and click back arrow to return back to this website. Projects should render.</Text>
      
        {cards}
    </div>
  )
}

export default ProjectPage