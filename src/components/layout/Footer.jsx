import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const FooterDiv = styled.footer`
color: white;
 display: flex;
 justify-content: center;
 align-items: flex-end;
margin-top: 5px;

.copy{
    padding-bottom: 10px;
    font-size: 14px;


    
}

`


const Footer = () => {
  return (
    <FooterDiv> 
        <h2 className="copy">  &copy;  
          {" "}
          <Link to="/copy"> Deimov </Link>{" "}
          </h2>
    


       
          </FooterDiv>
  )
}

export default Footer