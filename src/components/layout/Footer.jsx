import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const FooterDiv = styled.footer`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 5px;
  z-index: 99999 ;
  padding: 10px 0;
  /* background: rgba(0, 0, 0, 0.98); */ // Optional for better visibility
  font-size: 14px;


 @media (max-width: 700px) {
  bottom: 25px;
 
 } 

{
    padding-bottom: 10px;
    font-size: 14px;

    @media only screen and (max-width: 320px){
    text-align:center;
    display:flex;
    align-items: center;
    
  }
  }
  .copy{
    .link{
      font-size: 1em;
  font-family: 'Cinzel-VariableFont_wght';
/*   font-family: Arial, Helvetica, sans-serif; */


  @media only screen and (max-width: 600px){
      font-size: 0.8em;
  }

    }

   
  }
`

const Footer = () => {
  return (
    <FooterDiv> 
        <h2 className="copy">  &copy;  
          {" "}
          <Link className="link"to="/">{/*  2024 */} Deimov </Link>{" "}
          </h2>
    

       
          </FooterDiv>
  )
}

export default Footer