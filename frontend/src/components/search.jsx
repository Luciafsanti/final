import React, { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.form`
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

const Search = ({ handleSearch }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(title);
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Buscar..."
      />
      <SearchButton>Buscar</SearchButton>
      {/*<FilterButton>Filtro</FilterButton>*/}
    </SearchContainer>
  );
};

export default Search;
