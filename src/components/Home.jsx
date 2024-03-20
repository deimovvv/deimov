import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoaderDeimov from "./layout/LoaderDeimov";



const Title = styled.span`
  color: #c5c5c5;
  
font-size: clamp(0.9rem,1.5vw, 1.3rem);
  /* font-size: 2.5rem */
  text-align: center;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 200;


  @media only screen and (max-width: 320px){
  margin-line: auto;
  font-size:1.5rem;
  top:50px;

}
`;

const TitleContainer = styled.div`
max-widht:200px;
display:grid;
align-items: strech;
justify-content:start;
padding-top: 180px;


`;

const home = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Simula el tiempo de carga de la página
  }, []);


  return (
    <>{ isLoading ?  <LoaderDeimov /> :  <TitleContainer>
      <Title>Welcome to Deimov Ecosystem</Title>
    </TitleContainer>}
    </>
  );
};

export default home;
