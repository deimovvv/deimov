import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./layout/Footer";
import LoaderDeimov from "./layout/LoaderDeimov";

const Container = styled.div`
display: flex;
justify-content: center;
min-height: calc(100vh - 25vh); 
padding: 25vh 5vw; 
box-sizing: border-box; 
overflow-y: hidden; 
  
@media only screen and (max-width: 320px){

  min-height: calc(100vh - 35vh); 
}
`;


const Title = styled.span`
  color: #c5c5c5;
  
font-size: clamp(1.9rem,1.5vw, 2.3rem);
 /*  font-size: 2.5rem */
  text-align: center;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
 font-weight: 200;


  @media only screen and (max-width: 320px){
  margin-line: auto;

}
`;

const TitleContainer = styled.div`
max-width: 800px; /* Establece un máximo para el contenedor del título */
padding: 0; /* Elimina el padding aquí para un control más fino en Container */
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

@media only screen and (max-width: 430px){
 position:relative;
 

}


`;

const Test = styled.div`
display:flex;
justify-content:center;

.copy{
/* position:relative;
top:150px; */
}
`

const home = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Simula el tiempo de carga de la página
  }, []);


  return (
    <>{ isLoading ?  <LoaderDeimov /> : (
      <Container>
        <TitleContainer>
      <Title>Welcome to Deimov Ecosystem</Title>
    </TitleContainer>  
   
    </Container>
    )}

{/*    <Test>
          <h3 className="copy">  &copy;  
           2024 Deimov
          </h3>
   </Test>
  */}
  <Footer/>
   

    </>
  );
};

export default home;
