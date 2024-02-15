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
import Presskit from "../pages/Presskit";

const Content = styled.section`




`

const Main = styled.main`
  flex: 1; /* Hace que el contenido principal ocupe todo el espacio disponible */
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;



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

        <Layout>  
    {/* Header y Navegacion  */}
    <HeaderNav />
    <Experience/> 
  
     
     {/* Contenido central */}
     <Main>
     <Content>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects />} />
        <Route exact path="/about" element={<About/>} />
        <Route path="/music" element={<Music />} />
        <Route path="/presskit" element={<Presskit/>} />
        <Route path="/project/:id" element={<ProjectsDetail />} />

      </Routes>

      </Content>
      </Main>

      {/* Footer */}
      <Footer/>
      </Layout>
      </div>
    </div>
  );
};

export default DeimovRouter;
