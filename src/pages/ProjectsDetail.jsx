import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import getProjectByid from "../helpers/getProjectByid";
import styled from "styled-components";
/* import ReactPlayer from "react-player"; */
import LoaderDeimov from "../components/layout/LoaderDeimov";
import { motion } from "framer-motion";
import YouTube from "react-youtube";

const SectionMain = styled.div`
  max-width: 100%;
  margin: 0 auto; /* Centra el contenido horizontalmente */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el contenido verticalmente */

  @media (max-width: 700px) {
    overflow-x: hidden;
  }
`;

const Section = styled.section`
  width: 100%; /* Ancho máximo del contenedor */
  padding: 20px; /* Agrega un poco de espacio alrededor del contenido */
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0px;
  padding-bottom: 50px;
  align-items: center; /* Alinea los elementos verticalmente */
  justify-items: start; /* Alinea los elementos horizontalmente */
  overflow-y: hidden;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
 

  }
`;

const IMGContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  width: 80%;

  @media (max-width: 700px) {
    padding-left: 0;

 

  }
`;

const IMG = styled.img`
  width: 100%;
 /*  height: 500px; */
 height: auto;
  padding-bottom: 5px;
  transition: 0.5s;

  :hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 430px) {
 

    width: 400px;
    height: 430px;
  }
`;

const SectionDescription = styled.div`
display:grid;
gap:10px;
max-width:100%;
@media (max-width: 768px) {
 
} 

.projectDescription{

  @media (max-width: 768px) {
    width: 90%;
} 

}
 


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
  

    @media (max-width: 600px) {
      padding-top: 10px;
     
} 
   

  }

  .dataProject1 {
    display: flex;
    padding-top: 10px;
    justify-content:space-between;
   

    @media (max-width: 912px) {
      padding-right:90px;
  
    } 
  @media (max-width: 768px) {
    
    display: grid;
    grid-template-columns: 1fr 1fr;

    padding-top: 5px;
   

  } 
  

  
  .client{

    @media (max-width: 768px) {
      display: flex;
      padding-right: 10px;
    


  } 
  .date{
  

  
  } 
   
  }

  }

  span {
    font-weight: 250;
    color: #c2c2c2; 
   

  } 
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

  @media (max-width: 600px) {
    /* Cambiar a una sola columna en dispositivos más pequeños */
    display: none;
  }
`;

const HR = styled.hr`
  @media (max-width: 600px) {
    /* Cambiar a una sola columna en dispositivos más pequeños */
    display: none;
  }
`;

const Span = styled.p`
  color: whitesmoke;
  font-weight: 150;
  width: 600px;
  padding-top: 15px;

  @media (max-width: 600px) {
    /* Cambiar a una sola columna en dispositivos más pequeños */
    width: 90%;
    padding-top: 10px;
  }
`;

const SectionImagenes = styled.section`
  display: grid;
  /* justify-content: center;
  align-items: center; */
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 90%;
  height: auto;


  @media (max-width: 600px) {
    /* Cambiar a una sola columna en dispositivos más pequeños */
    grid-template-columns: 1fr;
  }
`;

const IMG2 = styled.img`
  width: 100%;
  height: auto;
  padding-bottom: 5px;
  transition: 0.5s;

  @media (max-width: 600px) {
    /* Cambiar a una sola columna en dispositivos más pequeños */
    width: 366px;
    height: 330px;
  }
`;

const SectionVideo = styled.section`
  margin-top: 80px;
  margin-bottom: 30px;

  width: 100%;
text-align: center;

  @media screen and (max-width: 600px) {
    margin-top: 0px;
  }
`;

const Back = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 20px;
  cursor: pointer;

  @media screen and (max-width: 30em) {
    justify-content: center;
    align-items: center;
  }

  .flecha {
    display: flex;
    justify-items: flex-end;
    align-self: flex-end;
    margin-top: 5px;
  }
`;

const ButtonBack = styled.button`
  font-family: "Syncopate", sans-serif;
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  border: none;
  color: whitesmoke;
  cursor: pointer;
  margin-top: 10px;
  font-size: 15px;

  :hover {
    color: #cfcdcd;
  }

  @media screen and (max-width: 320px) {
    margin-top: 12px;
    left: 87%;
    font-size: 14px;
  }
`;

const ProjectsDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  /* const project = getProjectByid(id); */
  const project = useMemo(() => getProjectByid(id), [id]);

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
      {isLoading ? (
        <LoaderDeimov />
      ) : (
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0, ease: "circOut", duration: 0.8 }}
        >
          <SectionMain>
            <Section id="project-section">
              <IMGContainer>
                <IMG src={`/assets/${project.id}.jpg`} />
              </IMGContainer>

              <SectionDescription>
                <H2>//</H2>
                <HR />
                <Span>{project.description}</Span>
                <br />
                <h3 className="projectDescription">
                  {" "}
                  {project.projectDescription}{" "}
                </h3>

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
                  <p className="client">
                    Client: {project.client}
                  </p>
                  <p className="date">
                    Date: {project.date}
                  </p>
                </div>
              </SectionDescription>
            </Section>

            {project.image && project.image2 ? (
              <SectionImagenes>
                <IMG2 src={project.image} />
                <IMG2 src={project.image2} />
              </SectionImagenes>
            ) : null}

            {project.image3 && project.image4 ? (
              <SectionImagenes>
                <IMG2 src={project.image3} />
                <IMG2 src={project.image4} />
              </SectionImagenes>
            ) : null}

            {project.video ? (
              <SectionVideo>
                <YouTube
                  className="video"
                  videoId={project.youtubeID} // El ID del video de YouTube que deseas reproducir
                  opts={{
                    width: "90%", // Ancho del reproductor de video
                    height: "500px", // Altura del reproductor de video
                  }}
                />
                <Back onClick={handleBack}>
                  <box-icon
                    className="flecha"
                    animation="flashing"
                    name="left-arrow-alt"
                    flip="vertical"
                    color="#ffffff"
                  ></box-icon>

                  <ButtonBack> BACK </ButtonBack>
                </Back>
              </SectionVideo>
            ) : null}
          </SectionMain>
        </motion.div>
      )}
    </>
  );
};

export default ProjectsDetail;
