import FormContainer from "../components/form/formContainer";
import FormComponent from "../components/form/form";
import FormInput from "../components/form/formInput";
import FormTitle from "../components/form/formTitle";
import FormButton from "../components/form/formButton";
import { useState } from "react";
import axios from "axios";
import ErrorSpan from "../components/form/error-span";
import { useNavigate } from "react-router-dom";
import useUsers from "../hooks/use-users";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [uName, setUName] = useState("");
  const [lastname, setLastname] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { users } = useUsers();

  const handleSubmit = (e) => {
    e.preventDefault();

    let errorFinded = false;
    if (
      !username ||
      username.length < 5 ||
      users.find((user) => user.username === username)
    ) {
      setErrors((prev) => ({
        ...prev,
        username: {
          message: users.find((user) => user.username === username)
            ? "Este usuario ya existe."
            : "Este campo es requerido y debe tener al menos 5 caracteres.",
        },
      }));
      errorFinded = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        username: null,
      }));
    }

    if (!uName) {
      setErrors((prev) => ({
        ...prev,
        uName: { message: "Este campo es requerido." },
      }));
      errorFinded = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        uName: null,
      }));
    }

    if (!lastname) {
      setErrors((prev) => ({
        ...prev,
        lastname: { message: "Este campo es requerido." },
      }));
      errorFinded = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        lastname: null,
      }));
    }

    if (!email || users.find((user) => user.email === email)) {
      setErrors((prev) => ({
        ...prev,
        email: {
          message: users.find((user) => user.email === email)
            ? "Este email ya se encuentra registrado."
            : "Este campo es requerido.",
        },
      }));
      errorFinded = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        email: null,
      }));
    }

    if (
      !password ||
      password.length < 6 ||
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)
    ) {
      setErrors((prev) => ({
        ...prev,
        password: {
          message:
            "Este campo es requerido, debe contener al menos una letra mayúscula, una letra minúscula y un número.",
        },
      }));
      errorFinded = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        password: null,
      }));
    }

    if (errorFinded) {
      return;
    }

    axios
      .post("http://localhost:3000/usuarios", {
        acces_type: "client",
        username: username,
        password: password,
        email: email,
        name: uName,
        lastname: lastname,
      })
      .then(function (response) {
        console.log(response);
        navigate("/");
        alert("Usuario creado exitosamente");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <FormContainer>
      <FormTitle>
        <h2>Registrarse</h2>
      </FormTitle>
      <FormComponent onSubmit={handleSubmit} action="/">
        <FormInput
          type="text"
          placeholder="Usuario"
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <ErrorSpan>{errors.username.message}</ErrorSpan>}
        <FormInput
          type="text"
          placeholder="Nombre"
          onChange={(e) => setUName(e.target.value)}
        />
        {errors.uName && <ErrorSpan>{errors.uName.message}</ErrorSpan>}
        <FormInput
          type="text"
          placeholder="Apellido"
          onChange={(e) => setLastname(e.target.value)}
        />
        {errors.lastname && <ErrorSpan>{errors.lastname.message}</ErrorSpan>}
        <FormInput
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}
        <FormInput
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <ErrorSpan>{errors.password.message}</ErrorSpan>}
        <FormButton>Registrarse</FormButton>
      </FormComponent>
    </FormContainer>
  );
};

export default Register;
