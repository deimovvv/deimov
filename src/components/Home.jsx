import React from "react";
import styled from "styled-components";


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
  return (
    <>
      <TitleContainer>
        <Title>Welcome to Deimov Ecosystem</Title>
      </TitleContainer>
    </>
  );
};

export default home;
