import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
   
height: 60vh;
background-color: rgba(0,0,0,0.33);
display: flex;
justify-content: space-around;
align-items: center;
z-index: 2;
position: relative;

   .div{
    align-content:center;
   }
`

const MediaContainer = styled.div`
display: flex;
justify-content: center;
justify-items:center;

`

const IMG = styled.img`

padding: 10px 10px;

`

const Test = styled.div`
display:flex;
justify-content:center;

.copy{
position:relative;
top:100px;
}
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
        <Test>
          <h3 className="copy">  &copy;  
           2024 Deimov
          </h3>
          </Test>
    </>
  )
}

export default contact