import React from "react";
import styled from "styled-components";
import Contact from "../components/Contact";

const Section = styled.section`
 
  position: relative;

  display: flex;
  justify-content: space-around;
  overflow-y: hidden;
 
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  transition: 0.5s;
  object-fit: cover;

  :hover {
    transform: scale(1.02);
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
      <Section id="about-section">
        <Image src="/public/deimov.jpg"></Image>

        <Description>
          <H2>//</H2>
          <hr />
          <br />
          <Span>
            Gonzalo Cortez aka Deimov <br /> is a Systemic Thinker lover of
            learning, <br /> art, nature and most important, <br /> how they are
            interconnected. <br /> <br /> CO-FOUNDER of <a href="https://coevoo.vercel.app/" target="blank">  Coevo Studio </a> & Obsidian,{" "}
            <br />
            <br /> <br />
            His interdisciplinary specialization covers branches such as Dj,
            Producer, Sound Design, Environment & Code Art, Virtual Reality, Web
            Development, User Experience, Marketing Analyst.
          </Span>
        </Description>
      </Section>
    </>
  );
};

export default about;
