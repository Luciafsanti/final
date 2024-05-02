import styled from "styled-components";
import FormButton from "../components/form/formButton";
import useLogin from "../store/useLogin";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
    <>
      <h2>¿Cerrar sesión?</h2>
      <FormButton onClick={handleAccept}>Aceptar</FormButton>
      <FormButton onClick={handleCancel}>Cancelar</FormButton>
    </>
  );
};

export default Logout;
