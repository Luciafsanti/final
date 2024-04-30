import React, { useState } from "react";
import FilterContainer from "./filterContainer";
import FormButton from "./formButton";

const formInputsStyles = { borderRadius: "5px", padding: "0.3rem" };

const categorys = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

function Search({ handleSearch }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [order, setOrder] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(name, price, category, order);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FilterContainer>
        <div style={{ color: "white", fontSize: "1.3rem" }}>Filtrado</div>
        <input
          style={formInputsStyles}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Buscar nombre"
        />
        <input
          style={formInputsStyles}
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Bucar precio"
        />
        <select
          style={formInputsStyles}
          name="categorys"
          id="categorys"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          defaultValue={""}
        >
          <option value="" disabled>
            Selecciona una categoria
          </option>
          {categorys.map((category) => {
            return (
              <option value={category} key={category}>
                {category}
              </option>
            );
          })}
        </select>

        <input
          type="checkbox"
          checked={order}
          onChange={() => setOrder((prev) => !prev)}
        />
        <label style={{ color: "white", fontSize: "0.7rem" }}>
          Ordenar alfabeticamente
        </label>

        <FormButton>Buscar</FormButton>
      </FilterContainer>
    </form>
  );
}

export default Search;
