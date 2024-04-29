import styled from "styled-components";

const FormButton = styled.button`
    margin-right: 0.5rem;padding: 0.6rem 1rem;
    width: 40%;
    background-color: var(--Reseda-green);
    border: 0px;
    border-radius: 0.25rem;
    color: var(--WhiteSmoke);
    cursor: pointer;
    transition: background-color 0.4s ease;
    font-size:0.8rem;

    &:hover {
        background-color: var(--Reseda-green-hover);
    }

    @media(min-width:768px){
        font-size: 1rem;
    }
`

export default FormButton;