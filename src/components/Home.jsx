import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./layout/Footer";
import LoaderDeimov from "./layout/LoaderDeimov";
import { motion } from "framer-motion";
import PageWithAudio from "./PageAudio";
import HeaderNav from "./layout/HeaderNav";


const Container = styled.div`
display: flex;
justify-content: center;
min-height: calc(100vh - 20vh); 
padding: 5vh 5vw; 
box-sizing: border-box; 
overflow-y: hidden; 
 
@media only screen and (max-width: 320px){

  min-height: calc(100vh - 35vh); 
}
`;


const Title = styled.span`
  color: #e3e2e2;
  
font-size: clamp(3.5rem,1.5vw, 2.3rem);

  text-align: center;
 padding: 10px 5px;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
 font-weight: 300;


  @media only screen and (max-width: 320px){
  margin-line: auto;

}
`;

const TitleContainer = styled.div`
max-width: 800px; 
padding: 0; 
display: flex;
/* background: linear-gradient(
  0deg,
  rgba(0, 0, 0, 0.90) 100%,
  rgba(0, 0, 0, 0.8505996148459384) 100%
); */
margin-top: 150px;
height: 100px;
flex-direction: row;
align-items: center;


@media only screen and (max-width: 430px){
 position:relative;
 

}


`;


const home = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000); // Simula el tiempo de carga de la página
  }, []);


  return (
    <>{ isLoading ?  <LoaderDeimov /> : (
      <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0, ease: "circOut", duration: 1 }}
    >

   
      <Container>
        <TitleContainer>
      <Title></Title>
    </TitleContainer>  
   
    </Container>
    </motion.div>
    )}


  <Footer/>
 {/*  <PageWithAudio/> */}
 

    </>
  );
};

export default home;
