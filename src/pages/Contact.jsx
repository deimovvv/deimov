import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from '../components/layout/Footer';
import { motion } from "framer-motion";


const Section = styled.section`
   
height: 80vh;
background: linear-gradient(
  0deg,
  rgba(0, 0, 0, 0.56) 100%,
  rgba(0, 0, 0, 0.8505996148459384) 100%
);
display: flex;
justify-content: space-around;
align-items: center;

position: relative;

   .div{
    align-content:center;
   }

   @media (max-width: 700px) {
    height: 75vh;
    position:relative;
    top:-35px;
    margin-bottom:20px;
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

/* const Test = styled.div`
display:flex;
justify-content:center;

.copy{
position:relative;
top:100px;
}
` */
const contact = () => {
  return (
    <>
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0, ease: "circOut", duration: 0.8}}
    >
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

        {/* <Footer/> */}
        </motion.div>
    </>
  )
}

export default contact