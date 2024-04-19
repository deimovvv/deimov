import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import Home from "../components/Home"
import Projects from "../pages/Projects"
import Music from "../pages/Music"
import About from "../pages/About";
import HeaderNav from '../components/layout/HeaderNav'
import Footer from "../components/layout/Footer";
import Experience from "../components/Experience/Experience";
import styled from "styled-components";
import "../css/style.css";
import ProjectsDetail from "../pages/ProjectsDetail";
import Presskit from "../pages/Presskit";
import Contact from "../pages/Contact";
import Copy from "../pages/Copy";
import LoaderDeimov from "../components/layout/LoaderDeimov";

const Content = styled.section`
  flex: 1;
  margin-top: 50px;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100% - 5rem);
  position:relative;
  


`;

const DeimovRouter = () => {
  const location = useLocation();
  const [shouldApplyOpacity, setShouldApplyOpacity] = useState(false);

  useEffect(() => {
    const routesWithOpacity = ['/projects', '/about', '/music', '/project', '/copy',  ];
    const hasOpacity = routesWithOpacity.some(route => location.pathname.includes(route));
    setShouldApplyOpacity(hasOpacity);
  }, [location]);


  return (
    <> 
   
    <div className={shouldApplyOpacity ? 'opacity' : ''}>
      <HeaderNav />
      <div className="layoutChild">
        <Layout >
          <Experience />
          <Content>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route exact path="/about" element={<About />} />
              <Route path="/music" element={<Music />} />
              <Route path="/presskit" element={<Presskit />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project/:id" element={<ProjectsDetail />} />
              <Route path="/copy" element={<Copy />} />
            </Routes>
          </Content>
        </Layout>
      </div>
    
    </div>
    
    </>
  );
};

export default DeimovRouter;
