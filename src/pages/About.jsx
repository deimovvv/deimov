import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"; 
import { motion } from "framer-motion";


const Section = styled.section`

max-width: 1000px; /* Ancho máximo del contenedor */
margin: 0 auto; /* Centra el contenedor horizontalmente */
padding: 20px; /* Agrega un poco de espacio alrededor del contenido */
position: relative;
height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding-bottom: 50px;
  align-items: center; /* Alinea los elementos verticalmente */
  justify-items: center; /* Alinea los elementos horizontalmente */
  overflow-y: hidden;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    height: 100vh;
    align-items: start
    padding-bottom: 35px;
  } 

  
 
`;

const Image = styled.img`
width: 100%; /* Ocupa el 100% del ancho del contenedor */
  max-width: 400px; /* Ancho máximo de la imagen */
  height: auto; /* Altura automática para mantener la proporción */
  transition: 0.5s;
  transition: 0.5s;
  object-fit: cover

  :hover {
    transform: scale(1.02);
   
  }


  @media (max-width: 700px) {
    height: 300px;
    width: 300px;

  object-fit: cover

  } 

  
`;

const Description = styled.div`
  display: grid;
  gap: 10px;

  @media (max-width: 700px) {
    gap: 0px;

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
  max-width: 400px;
  /* text-align: center; */
`;




const about = () => {
  return (
    <>
   <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0, ease: "circOut", duration: 1 }}
    >
      <Section id="about-section" className="animate__animated animate__fadeIn">
        <Image src="/assets/DeimovAI_WEB.jpg"></Image>

        <Description>
          <H2>//</H2>
        
          <br />
          <Span>
            Gonzalo Cortez aka Deimov <br /> is a Systemic Thinker lover of
            learning, <br /> art, nature and most important, <br /> how they are
            interconnected. <br /> <br /> CO-FOUNDER of 
            <span>
            <a href="https://coevoo.vercel.app/" target="blank">  Coevo Studio </a>
            </span> 
            & Obsidian,{" "}
            <br />
            <br /> <br />
            His interdisciplinary specialization covers branches such as Dj,
            Producer, Sound Design, Environment & Code Art, Virtual Reality, Web
            Development, User Experience, Marketing Analyst.
          </Span>
        
         
        </Description>
      </Section>
      </motion.div>
    </>

  );
};

export default about;
