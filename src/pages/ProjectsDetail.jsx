import React from "react";
import { Link, useParams } from "react-router-dom";
import getProjectByid from "../helpers/getProjectByid";
import styled from "styled-components";
import ReactPlayer from "react-player";

const SectionMain = styled.div`
  width: 90vw;
  margin: 0 auto; /* Centra el contenido horizontalmente */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el contenido verticalmente */
`;

const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: space-around;
  overflow-y: hidden;
  gap: 40px; 
`;

const IMGContainer = styled.div`
  height: 580px;
`;

const IMG = styled.img`
  width: 440px;
  height: 500px;
  padding-bottom: 5px;
  transition: 0.5s;

  :hover {
    transform: scale(1.02);
  }
`;

const SectionDescription = styled.div`
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
  max-width: 1220px;
  width: 100%;
`;

const ProjectsDetail = () => {
  const { id } = useParams();

  const project = getProjectByid(id);
  const projectURL = `/assets/${project.id}.jpg`;

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
        </SectionVideo>
      ) : null}
    </SectionMain>
  );
};

export default ProjectsDetail;
