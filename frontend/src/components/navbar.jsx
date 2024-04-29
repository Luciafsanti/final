import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--Reseda-green);
  padding: 1rem 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: var(--WhiteSmoke);
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0.5rem 0.25rem;
  font-size: 0.75rem;

  &:hover {
    background-color: var(--Reseda-green);
  }

  @media (min-width: 768px) {
    padding: 1rem 0.5rem;
    font-size: 1rem;
  }
`;

const Logo = styled.div`
  color: var(--WhiteSmoke);
  font-family: var(--logofont);
  font-size: 25px;
  font-weight: lighter;
  text-decoration: none;

  @media (min-width: 768px) {
    font-size: 30px;
    font-weight: normal;
  }

  && a {
    color: var(--WhiteSmoke);
    text-decoration: none;
    display: flex;
    align-content: center;
    gap: 0.5em;
  }
`;

const LogoImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const SearchInput = styled.input`
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0.5rem;
  margin-right: 0.5rem;
`;

const Button = styled.button`
  color: var(--WhiteSmoke);
  background-color: var(--Reseda-green);
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--Reseda-green-hover);
  }
`;

const SearchButton = styled(Button)`
  margin-right: 0.5rem;
`;

const FilterButton = styled(Button)`
  margin-right: 1rem;
`;

const MenuIcon = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--WhiteSmoke);
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavbarMenu = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Logo>
        <Link to="/">
          <LogoImg src="/LogoImg.jfif" alt="Logo" />
          Aromito Librería{" "}
        </Link>
      </Logo>
      <MenuIcon onClick={toggleMenu}>&#9776;</MenuIcon>
      <NavbarMenu isOpen={isOpen}>
        <SearchContainer>
          <SearchInput type="text" placeholder="Buscar..." />
          <SearchButton>Buscar</SearchButton>
          <FilterButton>Filtro</FilterButton>
        </SearchContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Iniciar sesión</NavLink>
        <NavLink to="/register">Registrarse</NavLink>
        <NavLink to="/cart">Carrito</NavLink>
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default Navbar;
