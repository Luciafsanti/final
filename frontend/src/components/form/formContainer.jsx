import { Link } from "react-router-dom";
import styled from "styled-components";


const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  
    @media (max-width: 768px) {
      padding: 1.5rem;
    }
  
`

export default FormContainer