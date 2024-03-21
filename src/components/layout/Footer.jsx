import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const FooterDiv = styled.footer`
color: white;
 display: flex;
 justify-content: center;
 align-items: flex-end;
margin-top: 5px;
bottom: 0;
width: 100%;
height: 50px;

{
    padding-bottom: 10px;
    font-size: 14px;

    @media only screen and (max-width: 320px){
    text-align:center;
    display:flex;
    align-items: center;
  }
  }
  @media only screen and (max-width: 320px){
   
  }
`


const Footer = () => {
  return (
    <FooterDiv> 
        <h2 className="copy">  &copy;  
          {" "}
          <Link to="/copy"> 2024 Deimov </Link>{" "}
          </h2>
    


       
          </FooterDiv>
  )
}

export default Footer