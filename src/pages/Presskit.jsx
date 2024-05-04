import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container1 = styled.section`
display: grid;
grid-template-columns: 600px 1fr;
justify-items: center;
gap: 0;
`

const Text1 = styled.p`
width: 80%;
text-align: center;
padding-top: 150px;
`
const Img1 = styled.img`
width: 70%;

`


const Container2 = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
`;


const Text2 = styled.p`
width: 80%;
text-align: center;
padding-top: 150px;
`
const Img2 = styled.img`
width: 70%;

`

const Container3 = styled.section`
display: grid;
grid-template-columns: 1fr;
`;


const Text3 = styled.p`
width: 80%;
text-align: center;
padding-top: 150px;
`
const Img3 = styled.img`
width: 1200px;
height: 500px;

`

const Presskit = () => {
  return (
    <> 
    <Container1>
    <Img1 src="/public/assets/DeimovAI_WEB.jpg" alt="" />
      <Text1>
        {" "}
        Deimov is an Interdisciplinary Artist Co-Founder of {" "}
        <Link target="_blank" className="link" to="https://coevo-studio.com/"> COEVO </Link><br/><br/>
        who channels his passion for music and technology into avant-garde
        compositions that transport the listener to abstract soundscapes, his
        distinctive style lies in the emulation of natural sounds fused with the
        powerful rhythm of techno, which gives his creations an innovative and
        original character. In his tireless search to expand dimensions.
         <br/><br/>
         Deimov
        has explored the intersection between sound art and virtual reality, his
        vision being to take the public to immerse themselves in parallel
        universes where music and technology converge in a unique and authentic
        experience.
      </Text1>
     
    </Container1>

      <Container2>
  
      <Text2>Technical Rider</Text2>
      <Img2 src="/public/assets/DeimovAI_WEB.jpg" alt="" />

      </Container2>

      <Container3>

      <Text3>Technical Rider</Text3>
      
      <Img3 src="/public/assets/DeimovAI_WEB.jpg" alt="" />

      </Container3>

    </>
  );
};

export default Presskit;
