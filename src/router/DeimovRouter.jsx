import React from "react";
import { Route, Routes, useLocation, useParams } from "react-router";
import Home from "../components/Home"
import Projects  from "../pages/Projects"
import Music from "../pages/Music"
import About from "../pages/About";
import HeaderNav from '../components/layout/HeaderNav'
import Footer from "../components/layout/Footer";
import Experience from ".././components/Experience/Experience";
import styled from "styled-components";
import "../css/style.css";
import ProjectsDetail from "../pages/ProjectsDetail";
import getProjectByid from "../helpers/getProjectByid";

const Content = styled.section`
min-height: 502px;



`


const DeimovRouter = () => {

    const location = useLocation();
    const { id } = useParams();



    const routesWithOpacity = ['/projects', '/about', '/music', '/project'];
const shouldApplyOpacity = routesWithOpacity.some(route =>
  location.pathname.includes(route)
);
  
    // Verifica si la ubicación actual es una de las páginas que necesita opacidad
   /*  const shouldApplyOpacity = ['/projects', '/about', '/music', '/project'].includes(
      location.pathname.split('/')[1]
    );
     */
    console.log('shouldApplyOpacity:', shouldApplyOpacity)

  return (
    <div className={`layout ${shouldApplyOpacity ? 'opacity' : ''}`}>
        <div className="layoutChild" >

    {/* Header y Navegacion */}
    <HeaderNav />
    <Experience/> 
  
     
     {/* Contenido central */}
     <Content>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects />} />
        <Route exact path="/about" element={<About/>} />
        <Route path="/music" element={<Music />} />
        <Route path="/project/:id" element={<ProjectsDetail />} />

      </Routes>

      </Content>

      {/* Footer */}
      <Footer/>
      </div>
    </div>
  );
};

export default DeimovRouter;
