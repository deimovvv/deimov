import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Project = styled.div`
  margin-inline: auto;
  padding: 0%;
  display: grid;
`;

const IMG = styled.img`
  width: 100%;
  max-height: 500px;
  margin-top: 0%;
  object-fit: cover;
`;

const TitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.33); /* Cambia el color y la opacidad del fondo */
  padding: 1.5px;
  text-align: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.8s ease;
  transform: translateY(100%);
  height: 30px;

  ${Project}:hover & {
    opacity: 1;
    transform: translateY(0%);
  }

  /* Estilos para dispositivos móviles */
  @media only screen and (max-width: 600px) {
    position: static;
    background: none;
    opacity: 1;
    transform: none;
    padding: 2.5px;
    text-align: left;
  }

`;





const H3 = styled.h3`
  font-weight: 200;
  font-size: 1rem;
`;

const ImageContainer = styled.div`
  position: relative;
  max-height: 500px;
`;

const ProjectCard = ({ id, description, title }) => {
  const projectURL = `/assets/${id}.jpg`;

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0, ease: "circOut", duration: 0.8 }}
    >
      <Project className="animate__animated animate__fadeIn">
        <ImageContainer>
          <Link to={`/project/${id}`}>
            <IMG src={projectURL} alt={title} />
            <TitleContainer>
              <H3>{title}</H3>
            </TitleContainer>
          </Link>
        </ImageContainer>
      </Project>
    </motion.div>
  );
};

export default ProjectCard;
