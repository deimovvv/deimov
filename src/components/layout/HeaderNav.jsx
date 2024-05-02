import React from "react";
import { Link, useLocation  } from "react-router-dom";
import styled from "styled-components";
import '../../css/style.css';

const Header = styled.div`
  max-width:100%;
  /* height: 132px; */
  z-index: 199999;
/*   font-family: 'Finalnew'; */


  background: transparent;

  @media only screen and (max-width: 600px) {
    padding: 10px 10px;
    height: 60px;
    background: ${props =>
      props.isHome && props.isMobile
        ? 'linear-gradient(0deg, rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.85))'
        : 'transparent'};
   
  }



`;

const DeimovLink = styled(Link)`
  font-family: 'Cinzel-VariableFont_wght';
  color: #ffffff;
  font-size: 1.1rem;


  @media only screen and (max-width: 600px) {
  font-size: 0.92rem;

  
  }
`;

const Wrapper = styled.div`
padding: 30px 15px;
display: flex;
flex: 2 1 auto;
/* align-items: flex-end; */


@media only screen and (max-width: 600px) {
    padding: 10px 0px;
    
  }
`


const Nav = styled.nav`
  z-index: 999999;
  flex: 1 1 auto;
  
  
`;

const Ul = styled.ul`
  list-style: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
 


  @media (max-width: 700px) {

  } 
`;

const Li = styled.li`
  text-transform: uppercase;
  margin-left: 15px;


  a{
      color: #ffffff;
  font-size: 1rem;

  @media (max-width: 700px) {
    font-size: 12.5px;
    padding:20px 0px;

   

  }
 

  }

  a:hover {
    color: #b3b6ba;
  }

 
  
`;


const Span = styled.span`
margin-top: 0px;
color: whitesmoke;
z-index: 999999;

@media (max-width: 700px) {
  margin-top: 0px;
  padding-left: 0px;
}
`

const HeaderNav = () => {

  const location = useLocation();
  const isMobile = window.innerWidth <= 600;
  const isHome = location.pathname === '/';

  return (
    <Header isMobile={isMobile} isHome={isHome}>
      <Wrapper>
        <Span>
          {" "}
          <DeimovLink to="/"> Deimov </DeimovLink>{" "}
        </Span>
        
        <Nav>
        <Ul>
          <Li>
            {" "}
            <Link to="/projects"> Projects </Link>{" "}
          </Li>

          <Li>
            {" "}
            <Link to="/music">Music</Link>{" "}
          </Li>

          {/* <Li>
            {" "}
            <Link to="/presskit">Presskit</Link>{" "}
          </Li> */}

        {/*   <Li>
            {" "}
            <Link to="/presskit">Shop</Link>{" "}
          </Li>
 */}

          <Li>
            {" "}
            <Link to="/about">About</Link>{" "}
          </Li>
          <Li>
            {" "}
            <Link to="/contact">Contact</Link>{" "}
          </Li>
        </Ul>
      </Nav>
     
     
      </Wrapper>

     
    </Header>
  );
};

export default HeaderNav;
