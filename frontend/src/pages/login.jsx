import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import FormTitle from "../components/form/formTitle";
import FormContainer from "../components/form/formContainer";
import FormInput from "../components/form/formInput";
import FormButton from "../components/form/formButton";
import FormLink from "../components/form/formLink";
import FormComponent from "../components/form/form";
import useUsers from "../hooks/use-users";
import ErrorSpan from "../components/form/error-span";
import useLogin from "../store/useLogin";
import bcrypt from "bcryptjs-react";

const Login = () => {
  const { compareUsers } = useUsers();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useLogin();
  const [errors, setErrors] = useState({});
  const { users } = useUsers();

  const handleSubmit = (e) => {
    e.preventDefault();

    let errorFinded = false;
    let user = users.find((user) => user.username === username);

    if (
      !user.username === username ||
      !bcrypt.compareSync(password, user.password)
    ) {
      setErrors((prev) => ({
        ...prev,
        login: {
          message: "Usuario o contraseña incorrectos",
        },
      }));
      errorFinded = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        username: null,
      }));
    }
    if (errorFinded) {
      return;
    }
    if (!errorFinded) {
      navigate("/");
      alert("Sesion iniciada correctamente");
      login(username, user.user_id);
    }
  };

  return (
    <FormContainer>
      <FormTitle>
        <h2>Iniciar Sesión</h2>
      </FormTitle>
      <FormComponent onSubmit={handleSubmit}>
        {errors.login && <ErrorSpan>{errors.login.message}</ErrorSpan>}
        <FormInput
          type="username"
          placeholder="Usuario"
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormInput
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <input type="checkbox" name="save-session" id="save-session" />
          <label htmlFor="save-session">Recordarme</label>
        </div>
        <FormButton type="submit">Acceder</FormButton>
        <FormLink to="/register">Registrarse</FormLink>
        <FormLink to="/lost-password">Olvidé mi contraseña</FormLink>
      </FormComponent>
    </FormContainer>
  );
};

export default Login;
