import React from 'react'
/* import getProjectByCategory  from '../helpers/getProjectsByCategory' */
import { getProjectByCategory} from '../../helpers/getProjectsByCategory'
import ProjectCard from './ProjectCard'
import styled from "styled-components";

const Container = styled.div`
max-width:1500px;
margin:auto;
display: grid;
/* grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)) */
grid-template-columns: repeat(3, 1fr);


@media (max-width: 320px) {
    /* Cambiar a una sola columna en dispositivos más pequeños */
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))
  }

`


const ProjectList = ({category}) => {

  const projects = getProjectByCategory(category)


  return (
    <Container>
      {projects.map(project => (
        <ProjectCard 
        key={project.id}
        {...project}
         />
      ) )}
    </Container>
  )
}

export default ProjectList