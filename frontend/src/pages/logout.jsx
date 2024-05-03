import styled from "styled-components";
import FormButton from "../components/form/formButton";
import useLogin from "../store/useLogin";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import FormTitle from "../components/form/formTitle";
import FormContainer from "../components/form/formContainer";
import FormInput from "../components/form/formInput";
import FormLink from "../components/form/formLink";
import FormComponent from "../components/form/form";

const Logout = () => {
  const { logout } = useLogin();
  const navigate = useNavigate();
  const [action, setAction] = useState(false);

  const handleAccept = () => {
    logout();
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <FormContainer>
      <FormTitle>
        <h2>¿Cerrar sesión?</h2>
      </FormTitle>
      <FormComponent>
        <FormButton onClick={handleAccept}>Aceptar</FormButton>
        <FormButton onClick={handleCancel}>Cancelar</FormButton>
      </FormComponent>
    </FormContainer>
  );
};

export default Logout;
