import React from 'react'
import styled from "styled-components";

const Section = styled.section`
    width: 100vw;
    height: 200px;
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
width: 28px;
height: 28px;
padding-right: 5px;

`

const Contact = () => {
  return (
    <>
        <Section id="contact-section">
            
    
            <div>
              <p> SocialMedia</p>

              <MediaContainer>
              <a href='https://www.linkedin.com/in/gonzalo-cortez-20b5a2160/' target="_blank">
                <IMG src="/public/icons8-linkedin-24.png" alt="" />
              </a>
              <a href='https://www.instagram.com/deimovvv/' target="_blank">
                <IMG src="/assets/deimovAI.jpg" alt="" />
              </a>
              </MediaContainer>
              

            </div>


        </Section>
    </>
  )
}

export default Contact