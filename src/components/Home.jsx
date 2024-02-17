import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoaderDeimov from "./layout/LoaderDeimov";


const Title = styled.span`
  color: #c5c5c5;
  

  font-size: 2.5rem;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 200;
  right: 150px;
`;

const TitleContainer = styled.div`
  text-align: center;
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
