import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FormTitle from "../components/form/formTitle";
import FormContainer from "../components/form/formContainer";
import FormInput from "../components/form/formInput";
import FormButton from "../components/form/formButton";
import FormLink from "../components/form/formLink";
import FormComponent from "../components/form/form";

const Login = () => {

    return (
        <FormContainer>
            <FormTitle><h2>Iniciar Sesión</h2></FormTitle>
            <FormComponent>
                <FormInput type="email" placeholder="Email" />
                <FormInput type="password" placeholder="Contraseña" />
                <div><input type="checkbox" name="save-session" id="save-session"/><label htmlFor="save-session">Recordarme</label></div>
                <FormButton type="submit">Acceder</FormButton>
                <FormLink to="/register">Registrarse</FormLink>
                <FormLink to="/lost-password">Olvidé mi contraseña</FormLink>
            </FormComponent>
        </FormContainer>
    )

};

export default Login;