import { useState } from "react";
import styled from "styled-components";
import useProducts from "../../hooks/use-products";

const productContainer = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: row;
    align-items: space-between;
    background-color: red ;
    border-radius: 0.5rem;
    height: 50rem;
    width: 100%;
`;

const RightButton = styled.div`
height: 1rem;
width: 1rem;
background-color: red;

`

const ProductosSlide = () => {

    const { products, loading } = useProducts();

    let rightButton = document.querySelector('rigthButton');

    rightButton.addEventListener("click", () =>{
        console.log("click");
    });

    return (
        <productContainer>
            <RightButton id="rigthButton"></RightButton>
            {products.map((product) => (
          <ProductCard key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>Ver detalles</button>
          </ProductCard>
        ))}<LeftButton></LeftButton>
        </productContainer>
    )
};

export default ProductosSlide;
