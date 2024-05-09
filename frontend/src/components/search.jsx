import React, { useState } from "react";
import styled from "styled-components";
import useCategories from "../hooks/use-categories";

const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    flex-direction: row;
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

const FilterSelect = styled.select`
  height: auto;
  max-width: 6rem;
  font-size: auto;
  margin-right: 0.5rem;
`;

const FilterPrice = styled.input`
  height: 25px;
  max-width: 6rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 0.5rem;
`;

const Search = ({ handleSearch }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [order, setOrder] = useState("");

  const { categories, setCategories } = useCategories();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(title, price, category, order);
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <div>
        <SearchInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Buscar..."
        />
        <SearchButton>Buscar</SearchButton>
      </div>
      <div>
        <FilterSelect
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="" placeholder="Categoria" defaultChecked={true}>
            Categoría
          </option>
          {categories.map((category) => {
            return (
              <option
                key={category.category_id}
                value={category.category_id}
                onChange={(e) => setCategory(e.target.value)}
                placeholder={category.category_name}
              >
                {category.category_name}
              </option>
            );
          })}
          {category}
        </FilterSelect>
        <FilterSelect
          name=""
          id=""
          onChange={(e) => {
            setOrder(e.target.value);
          }}
        >
          <option value="">Ordenar</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="mayor-menor-precio">Precio Mayor-Menor</option>
          <option value="menor-mayor-precio">Precio Menor-Mayor</option>
        </FilterSelect>
        <FilterPrice
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Precio max."
        />
      </div>
    </SearchContainer>
  );
};

export default Search;
