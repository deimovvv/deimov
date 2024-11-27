import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container1 = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 20px;
  padding: 50px 0;
  text-align: center;
`

const Text1 = styled.p`
width: 85%;
text-align: center;
padding-top: 50px;
`
const Img1 = styled.img`
width: 650px;


`


const Container2 = styled.section`
display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 20px;
  padding: 50px 0;
  text-align: center;
`;


const Text2 = styled.p`
width: 85%;
text-align: center;

padding-left: 80px;

`
const Img2 = styled.img`
width: 540px;
height: 530px;
padding-left: 140px;


`

const Container3 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 150px;
  gap: 20px;
`;

const Text3 = styled.p`
  max-width: 80%;
  text-align: center;
`;
const Img3 = styled.img`
width: 1200px;
height: 500px;

`

const Presskit = () => {
  return (
    <> 
    <Container1>
    <Img1 src="/public/assets/gonioyokaii.jpg" alt="" />
      <Text1>
        {" "}
        <h1>DJ & PRODUCER</h1>
        Deimov is an Interdisciplinary Artist Co-Founder of {" "}
        <Link target="_blank" className="link" to="https://coevo-studio.com/"> COEVO </Link><br/><br/>
        who channels his passion for music and technology into avant-garde
        compositions that transport the listener to abstract soundscapes, his
        distinctive style lies in the emulation of natural sounds fused with the
        powerful rhythm of techno, which gives his creations an innovative and
        original character. In his tireless search to expand dimensions.
         <br/><br/>
        
      </Text1>

     
     
    </Container1>

      <Container2>
  
      <Text2> Deimov
        has explored the intersection between sound art and virtual reality, his
        vision being to take the public to immerse themselves in parallel
        universes where music and technology converge in a unique and authentic
        experience.</Text2>
      <Img2 src="/public/assets/deimov-insecto.jpg" alt="" />
      
      </Container2>

      <Container3>

      <Text3>Technical Rider</Text3>
      
      <Img3 src="/public/assets/DeimovAI_WEB.jpg" alt="" />

      </Container3>

    </>
  );
};

export default Presskit;
