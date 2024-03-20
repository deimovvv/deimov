import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Project = styled.div`
  margin-inline:auto;
  padding: 0%;
  display:grid;
`;

const IMG = styled.img`
  width:100%;
  max-height: 500px;
  margin-top: 0%;
  object-fit:cover;

`;

const TitleContainer = styled.div`
  max-height: 500px;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
/*   display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  opacity: 0;
  transition: 0.6s;

  &:hover {
    opacity: 1;
  }

  & > * {
    transform: translateY(25px);
    transition: transform 0.6s;
  }
  &:hover > * {
    transform: translateY(0px);
  }
  @media only screen and (max-width: 430px){
   
  }
`;

const ImageContainer = styled.div`
  position: relative;
  max-height: 500px;

`;

const H3 = styled.h3`
  font-weight: 200;
  font-size: 1rem;
  color: white;
  position: absolute;
  bottom: 25px;
`;




const ProjectCard = ({ id,  description, title }) => {

  const projectURL = `/assets/projectimages/${id}.jpg`;


  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0, ease: "circOut", duration: 1 }}
    >
      <Project className="animate__animated animate__fadeIn">
        <ImageContainer>
          <Link
            onClick={() => handleClick("project-section")}
            to={`/project/${id}`}
          > 
        
             <IMG src={projectURL} />
         

             
          
             
            <TitleContainer>{<H3> {title} </H3>}</TitleContainer>
          </Link>
        </ImageContainer>
      </Project>
    </motion.div>
  );
};

export default ProjectCard;

