import React, { useEffect, useState } from "react";
import ProjectList from "../components/Projects/ProjectList";
import styled from "styled-components";
import LoaderDeimov from "../components/layout/LoaderDeimov";

const Container = styled.div`
  margin: 50px auto; /* Centra el contenido horizontalmente */
  max-width: 1200px; /* Ancho máximo para pantallas grandes */
  padding: 0 20px; /* Espaciado interno para pantallas más pequeñas */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el contenido verticalmente */
  gap: 20px; /* Espacio entre elementos */

  @media (min-width: 1200px) {
    padding: 0; /* Remueve el padding en pantallas grandes */
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 0 10px; /* Aumenta el padding en pantallas pequeñas */
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
   const categories = ['All', 'Web', 'VR', '3D & Environment', 'Media & Interactive', 'AI'];

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
