import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { colors } from "./GlobalStyled";
import { useEffect, useRef } from "react";

const Container = styled.header`
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  @media screen and (max-width: 450px) {
    padding: 20px 20px;
  }
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
  a {
    color: ${colors.point};
  }
`;

const Nav = styled.ul`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  li {
    margin-left: 100px;
  }

  @media screen and (max-width: 450px) {
    li {
      margin-left: 30px;
      font-size: 16px;
    }
  }
`;

export const Header = () => {
  const headerRef = useRef();

  const scrollHandler = () => {
    const pageY = window.scrollY;
    const current = headerRef.current;

    if (pageY >= 400) {
      current.style.position = "fixed";
      current.style.backgroundColor = "rgba(0,0,0,0.5)";
      current.style.backdropFilter = "blur(10px)";
    } else {
      current.style.position = "absolute";
      current.style.backgroundColor = "transparent";
      current.style.backdropFilter = "blur(0px)";
    }
  };

  useEffect(() => {
    return window.addEventListener("scroll", scrollHandler);
  });

  return (
    <Container ref={headerRef}>
      <Logo>
        <Link to={routes.home}>PNMOVIE</Link>
      </Logo>

      <Nav>
        <li>
          <Link to={routes.home}>HOME</Link>
        </li>
        <li>
          <Link to={routes.search}>SEARCH</Link>
        </li>
      </Nav>
    </Container>
  );
};
