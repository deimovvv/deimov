import React, { useEffect, useState } from "react";
import ProjectList from "../components/Projects/ProjectList";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 150px;
  align-items: center;

  margin-bottom: 100px !important;
  z-index: -1;


`;

const Filter = styled.div`
color: white;
margin-bottom: 40px;


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

text-transform: uppercase;
font-family: "Syncopate", sans-serif;
font-size: 12px;

@media screen and (max-width: 40em) {
  font-size: 10px;
  }


:hover{
  
  border-bottom: solid 0.2px;    
}



`



const projects = () => {

  const [selectedCategory, setSelectedCategory] = useState('All');


   // Tu lista de categorías
   const categories = ['All', 'Web', 'VR', '3D & Environment', 'Media'];



  return (
 
      <>

          <h3>Selected Projects</h3>
          
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
           
          
          <ProjectList  category={selectedCategory === 'All' ? '' : selectedCategory}/>



        
      </>
 
  );
};

export default projects;
