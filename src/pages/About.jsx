import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"; 
import { motion } from "framer-motion";


const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  padding-bottom: 50px;
  align-items: stretch;
  justify-items: center;
  overflow-y: hidden;
  
  @media (max-width: 780px){

    grid-template-columns:1fr;
  }
 
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  transition: 0.5s;
  object-fit: cover;
  object-position:50%;

  :hover {
    transform: scale(1.02);
  }
  @media (max-width: 780px){
    width: 350px;
  height: 350px;
  }
  
`;

const Description = styled.div`
`;

const H2 = styled.h2`
  color: whitesmoke;
  font-weight: 150;
  text-align: center;
`;

const Span = styled.p`
  color: whitesmoke;
  font-weight: 150;
  width: 400px;
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
        <Image src="/assets/projectimages/DeimovAI_WEB.jpg"></Image>

        <Description>
          <H2>//</H2>
          <hr />
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
