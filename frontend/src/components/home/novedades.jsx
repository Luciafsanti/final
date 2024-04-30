import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  && h2 {
    color: var(--Reseda-green);
    font-size: 1.5rem;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const NovedadContainer = styled.div`
  overflow: hidden;
  width: 100%; // Ajusta el ancho del contenedor si es necesario
  height: auto; // Ajusta la altura del contenedor si es necesario
  position: relative;
`;

const SlideContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out; // Duración y estilo de la transición
  transform: translateX(
    ${(props) => props.translateX}%
  ); // Controla la posición de la animación
`;

const Novedad = styled.div`
  min-width: 100%; // Ajusta el ancho de cada tarjeta
  background-color: var(--WhiteSmoke);
  padding: 0rem;
  margin: 0rem;
  color: var(--Reseda-green);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 200px;
  }
  
  h3 {
    font-size: 1rem;
    margin-top: 2px;
    margin-left: 1rem;
  }

  @media (min-width: 768px){
    img {
        height: 400px;
  }
`;

const Novedades = () => {
  // Lista de tarjetas (puedes personalizar estas tarjetas con tus propios datos)
  const cards = [
    {
      id: 1,
      image:
        "https://lalibrearteylibros.files.wordpress.com/2020/07/ya-estamso.png",
      novedad: "/novedad1",
      title: "10% de descuento los dias martes del mes de mayo",
    },
    {
      id: 2,
      image:
        "https://opinionsemanariocdn.eleco.com.ar/cdn-cgi/image/format=auto,width=1024,quality=80/media/2023/12/Diseno-sin-titulo-12.jpg",
      novedad: "/novedad2",
      title: "Viernes 10 de abril presentacion del libro...",
    },
    // Agrega más tarjetas según sea necesario
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Función para rotar a la siguiente tarjeta
  const rotateCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  // Usar un efecto para rotar las tarjetas automáticamente a intervalos regulares
  useEffect(() => {
    const interval = setInterval(rotateCard, 5000); // Cambia la tarjeta cada 3 segundos

    // Limpiar el intervalo cuando se desmonte el componente
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Título del componente */}
      <Title>
        <h2>Novedades</h2>
      </Title>
      {/* Contenedor para las tarjetas */}
      <NovedadContainer>
        {/* Contenedor de las tarjetas con el efecto de movimiento */}
        <SlideContainer translateX={-currentCardIndex * 100}>
          {cards.map((card) => (
            <Novedad key={card.id}>
              <Link to={card.novedad}>
                <img src={card.image} alt={card.title} />
              </Link>
              <h3>{card.title}</h3>
            </Novedad>
          ))}
        </SlideContainer>
      </NovedadContainer>
    </div>
  );
};

export default Novedades;
