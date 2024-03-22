import React from 'react'
import styled from "styled-components";
import Footer from '../components/layout/Footer';
import MusicList from '../components/Music/MusicList';



const Projects = styled.div`

  overflow-y: hidden;

  display: flex;
  justify-content: center;
  align-items: stretch;
  width:100%;

  @media only screen and (max-width: 320px){
    align-items: stretch;
  }
`


const Title = styled.h3`
color: whitesmoke;
text-align: center;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
font-size: 1.1rem;

`

const Music = () => {



  return (
    <>
    <Projects>
        <Title>
         
        </Title>

        <MusicList category={"music"}/>
       
    </Projects>
    
</>
  )
}

export default Music