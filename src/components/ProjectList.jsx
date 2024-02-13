import React from 'react'
/* import getProjectByCategory  from '../helpers/getProjectsByCategory' */
import { getProjectByCategory} from '../helpers/getProjectsByCategory.js'
import ProjectCard from './ProjectCard'
import styled from "styled-components";

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 0px;
`


const ProjectList = ({category}) => {

  const projects = getProjectByCategory(category)
/*   const projects = useMemo( () => getProjectByCategory(category), [category]); */


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