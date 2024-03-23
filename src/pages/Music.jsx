import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import Footer from '../components/layout/Footer';
import LoaderDeimov from '../components/layout/LoaderDeimov';
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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Simula el tiempo de carga de la página
  });





  return (
    <>
    {isLoading ? (<LoaderDeimov/> ) : (  <Projects>
        <Title>
         
        </Title>

        <MusicList category={"music"}/>
       
    </Projects>) }
  
    
</>
  )
}

export default Music