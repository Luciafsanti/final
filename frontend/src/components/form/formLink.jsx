import styled from "styled-components";
import { Link } from "react-router-dom";

const FormLink = styled(Link)`
  text-decoration: none;
  color: var(--Reseda-green);

  &:hover{
    color: var(--Reseda-green-hover);
  }

  &:active{
    color: purple;
  }
`

export default FormLink;