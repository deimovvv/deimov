import React from 'react'
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
        <h4 className="copy">  &copy; Deimov </h4>
       
          </FooterDiv>
  )
}

export default Footer