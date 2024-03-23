import React, { useEffect, useState } from "react";
import { Link, useParams,  useNavigate } from "react-router-dom";
import getProjectByid from "../helpers/getProjectByid";
import styled from "styled-components";
import ReactPlayer from "react-player";
import LoaderDeimov from "../components/layout/LoaderDeimov";

const SectionMain = styled.div`
max-width:100%;
  margin: 0 auto; /* Centra el contenido horizontalmente */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el contenido verticalmente */

  @media only screen and (max-width: 320px){
    
  }
  
`;

const Section = styled.section`

width: 100%; /* Ancho máximo del contenedor */
padding: 20px; /* Agrega un poco de espacio alrededor del contenido */
position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding-bottom: 50px;
  align-items: center; /* Alinea los elementos verticalmente */
  justify-items: start; /* Alinea los elementos horizontalmente */
  overflow-y: hidden;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  } 

`;

const IMGContainer = styled.div`

display:flex;
flex-direction:column;
`;

const IMG = styled.img`
max-width: 100%;
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
 
`;

const SectionDescription = styled.div`
display:grid;
gap:10px;
max-width:100%;
@media (max-width: 768px) {
  
} 
/* @media screen and (max-width: 320px){
  width: 400px;
  } */

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
    padding-top: 10px;
    justify-content:space-between;
   /*  padding-right:50px; */

    @media (max-width: 912px) {
      padding-right:90px;
  
    } 
  @media (max-width: 768px) {
    padding-right:170px;

  } 
  @media (max-width: 412px) {
    padding-right:170px;
    padding-left:106px;

  } 
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
margin-top: 10px;
font-size: 15px;


:hover{
color: #cfcdcd;

}

@media screen and (max-width:320px) {
margin-top: 12px;
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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Simula el tiempo de carga de la página
  });


  if (!project || Object.keys(project).length === 0) {
    // Opción 1: Redirigir
    // navigate('/some/path');

    // Opción 2: Mostrar un mensaje simple (este ejemplo seguirá mostrando el layout base de la página).
    return <div>Project not found</div>;
  }



  return (
    <> 
    {isLoading ? (<LoaderDeimov/>) : (<SectionMain>
      <Section id="project-section">
        <IMGContainer>
          <IMG src={`/assets/projectimages/${project.id}.jpg`} />
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
            <span className="span1">
              Client: <h3>{project.client}</h3>
            </span>
            <span className="span2">
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
    </SectionMain>)}
    
    </>
  );
};

export default ProjectsDetail;
