import { useState } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Link to={ROUTES.HOME} style={{ textDecoration: "none" }}>
        <Logo>eStore</Logo>
      </Link>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <PageLink>
          <Link
            to={ROUTES.PRODUCTS}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Products
          </Link>
        </PageLink>
        <PageLink>
          <Link
            to={ROUTES.ABOUT}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            About
          </Link>
        </PageLink>
        <PageLink>
          <Link
            to={ROUTES.CONTACT}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Contact
          </Link>
        </PageLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  padding: 0 7rem;
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #111111;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const PageLink = styled.div`
  padding: 1rem 1.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  border-bottom: 3px solid #111111;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  font-size: 0.9rem;
  &:hover {
    border-bottom: 3px solid #eeeeee;
  }
`;

const Logo = styled.div`
  padding: 1rem 0;
  color: #ffffff;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    opacity: 0.8;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #ffffff;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
