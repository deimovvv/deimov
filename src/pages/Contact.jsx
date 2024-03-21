import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
    height: 70vh;
    background-color: rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 2;
    position: relative;
   
`

const MediaContainer = styled.div`
display: flex;
justify-content: center;


`

const IMG = styled.img`

padding: 10px 10px;

`

const contact = () => {
  return (
    <>
        <Section id="contact-section">
            <div>

              <p> 
                <span>
                  <a href="mailto:correo@ejemplo.com"> deimovv@gmail.com</a>
                </span>
                <br/>
                </p>

              <MediaContainer>

              <a href='https://www.linkedin.com/in/gonzalo-cortez-20b5a2160/' target="_blank">
                <IMG src="/icons8-linkedin-24.png" alt="" />
              </a>
              <a href='https://www.instagram.com/deimovvv/' target="_blank">
                <IMG src="/icons8-instagram-24.png" alt=""/>
              </a>
              </MediaContainer>
              

            </div>
        </Section>
    </>
  )
}

export default contact