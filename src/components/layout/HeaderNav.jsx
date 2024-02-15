import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  height: 132px;
  padding-top: 10px;
  margin-bottom: 0px;
`;

const Logo = styled.div`
  flex: 2 1 auto;

  .h2 {
    font-size: 40px;
  }
`;

const Nav = styled.nav`
  z-index: 999999;
  flex: 1 1 auto;
`;

const Ul = styled.ul`
  list-style: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Li = styled.li`
  text-transform: uppercase;
  margin-left: 15px;

  a{
      color: #ffffff;
  font-size: 15px;

  }

  a:hover {
    color: #b3b6ba;
  }
`;

const HeaderNav = () => {
  return (
    <Header>
      <Logo>
        <h2>
          {" "}
          <Link to="/"> Deimov </Link>{" "}
        </h2>
      </Logo>

      <Nav>
        <Ul>
          <Li>
            {" "}
            <Link to="/projects"> Portfolio </Link>{" "}
          </Li>

          <Li>
            {" "}
            <Link to="/music">Music</Link>{" "}
          </Li>

          <Li>
            {" "}
            <Link to="/presskit">Presskit</Link>{" "}
          </Li>


          <Li>
            {" "}
            <Link to="/about">About</Link>{" "}
          </Li>
        </Ul>
      </Nav>
    </Header>
  );
};

export default HeaderNav;
