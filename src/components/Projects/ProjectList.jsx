import React from 'react'
/* import getProjectByCategory  from '../helpers/getProjectsByCategory' */
import { getProjectByCategory} from '../../helpers/getProjectsByCategory'
import ProjectCard from './ProjectCard'
import styled from "styled-components";

const Container = styled.div`
max-width:1090px;
margin-inline:auto;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))

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