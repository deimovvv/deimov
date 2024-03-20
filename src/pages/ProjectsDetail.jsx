import React from "react";
import { Link, useParams,  useNavigate } from "react-router-dom";
import getProjectByid from "../helpers/getProjectByid";
import styled from "styled-components";
import ReactPlayer from "react-player";

const SectionMain = styled.div`
  width: 90vw;
  margin: 0 auto; /* Centra el contenido horizontalmente */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el contenido verticalmente */

  @media only screen and (max-width: 320px){
    
  }
  
`;

const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: space-around;
  overflow-y: hidden;
  gap: 40px; 

  @media only screen and (max-width: 320px){
    display:grid;
    grid-template-columns:1fr;
    justify-items: center;
  }
`;

const IMGContainer = styled.div`
  height: 580px;

  
  @media only screen and (max-width: 320px){
  height: 380px;
  }
`;

const IMG = styled.img`
  width: 440px;
  height: 500px;
  padding-bottom: 5px;
  transition: 0.5s;
  
  :hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 320px){
  width: 400px;
  height: 440px;
  }
  :hover {
  
  }
`;

const SectionDescription = styled.div`
@media screen and (max-width: 320px){
  width: 400px;
  }
  .link {
    font-weight: 150;
    font-size: 15px;
    color: #58b8a0;
  }

  .dataProject {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
  }

  .dataProject1 {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }

  span {
    font-weight: 250;
    color: #c2c2c2;
  }

  h3 {
    font-weight: 150;
    font-size: 15px;
    display: inline;
    color: whitesmoke;
  }
`;

const H2 = styled.h2`
  color: whitesmoke;
  font-weight: 150;
  text-align: center;
`;

const Span = styled.p`
  color: whitesmoke;
  font-weight: 150;
  width: 600px;
`;

const SectionImagenes = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  height: auto;
  gap: 0;
`;

const IMG2 = styled.img`
  width: 600px;
  height: 440px;
  padding-bottom: 5px;
  transition: 0.5s;

  :hover {
    transform: scale(1.02);
  }
`;

const SectionVideo = styled.section`
  margin-top: 80px;
  margin-bottom: 30px;
  max-width: 1200px;
  width: 100%;
`;

const Back = styled.div`
display:flex;
justify-content:flex-end;
align-items:flex-end;
flex-direction:column;
margin-top: 20px;
cursor: pointer;

@media screen and (max-width: 30em) {

justify-content:center;
align-items: center;
  

}


.flecha{
  display: flex;
  justify-items:flex-end;
  align-self: flex-end;
  margin-top: 5px;


}


`

const ButtonBack = styled.button`
font-family: "Syncopate", sans-serif;
display:flex;
justify-content:flex-end;
background-color: transparent;
border: none;
color: whitesmoke;
cursor: pointer;
margin-top: 5px;
font-size: 12px;


:hover{
color: #cfcdcd;

}

@media screen and (max-width:320px) {
margin-top: 18px;
  left: 87%;
  font-size: 14px;

}


`

const ProjectsDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const project = getProjectByid(id);
  const projectURL = `/assets/projectimages/${project.id}.jpg`;

  const handleBack = () => {
    navigate(-1); // Navega hacia atrás
  };


  return (
    <SectionMain>
      <Section id="project-section">
        <IMGContainer>
          <IMG src={projectURL} />
        </IMGContainer>

        <SectionDescription>
          <H2>//</H2>
          <hr />
          <Span>{project.description}</Span>

          {project.url ? (
            <Link target="_blank" className="link" to={project.url}>
              {" "}
              Website{" "}
            </Link>
          ) : null}

          <div className="dataProject">
            <span>
              Technologies: <h3>{project.technologies}</h3>
            </span>
          </div>

          <div className="dataProject1">
            <span>
              Client: <h3>{project.client}</h3>
            </span>
            <span>
              Date: <h3>{project.date}</h3>{" "}
            </span>
          </div>
        </SectionDescription>
      </Section>

      {project.image && project.image2 ? (
        <SectionImagenes>
          <IMG2 src={project.image} />
          <IMG2 src={project.image2} />
        </SectionImagenes>
      ) : null}

      {project.video ? (
        <SectionVideo>
          <ReactPlayer
            className="video"
            url={project.video}
            controls
            loop
            width="100%"
            height="500px"
          />
            <Back onClick={handleBack}>
           
           <box-icon
             className="flecha"
             animation="flashing"
             name="left-arrow-alt"
             flip="vertical"
             color="#ffffff"
           ></box-icon>

            <ButtonBack > BACK </ButtonBack>

           </Back>
        </SectionVideo>
      ) : null}
    </SectionMain>
  );
};

export default ProjectsDetail;
