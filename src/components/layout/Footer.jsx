import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const FooterDiv = styled.footer`
color: white;
 display: flex;
 justify-content: center;
 align-items: flex-end;
 position:relative;
 z-index:30;
 bottom: 0%;
 padding:1rem;

 @media (max-width: 700px) {
  bottom:45px;
 
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
    }
  }
`

const Footer = () => {
  return (
    <FooterDiv> 
        <h2 className="copy">  &copy;  
          {" "}
          <Link className="link"to="/copy"> 2024 Deimov </Link>{" "}
          </h2>
    

       
          </FooterDiv>
  )
}

export default Footer