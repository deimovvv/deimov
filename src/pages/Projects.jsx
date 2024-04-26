import React, { useEffect, useState } from "react";
import ProjectList from "../components/Projects/ProjectList";
import styled from "styled-components";
import LoaderDeimov from "../components/layout/LoaderDeimov";

const Container = styled.div`




  margin-top: 50px;
  align-items: center;

  margin-bottom: 100px !important;
  z-index: -1;
 

  @media only screen and (max-width: 320px){
    margin-top:0px;
  }

`;

const Filter = styled.div`
color: white;
margin-bottom: 40px;
z-index: 999999;


ul{
  display: flex;
  list-style: none; 

}

li{
  padding-right: 7px;
  cursor: pointer;
}

li:hover{
  border-bottom: 0.5px solid;
}

`


const Button = styled.button`
background: transparent;
color: white;
border: none;
padding-right: 16px;
cursor: pointer;
z-index: 9999999;

text-transform: uppercase;
font-family: "Syncopate", sans-serif;
font-size: 12px;

@media screen and (max-width: 320px) {
  font-size: 10px;
  }


:hover{
  
  border-bottom: solid 0.1px; 
  text-align: center;
}



`



const projects = () => {

  const [selectedCategory, setSelectedCategory] = useState('All');


   // Tu lista de categorías
   const categories = ['All', 'Web', 'VR', '3D & Environment', 'Media'];

   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Simula el tiempo de carga de la página
  });



  return (
 
      <>
      {isLoading ? <LoaderDeimov/> : (
        <>
        <h3 className="titleProyects">Selected Projects</h3>
          
          <Filter className="prueba" >   
          {categories.map(category => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </Button>
          
        ))}
           </Filter>
           
          <Container>
          <ProjectList  category={selectedCategory === 'All' ? '' : selectedCategory}/>
          </Container>
          </>
        )}
        
      </>
 
  );
};

export default projects;
