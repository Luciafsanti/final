import styled from "styled-components";
import FormContainer from "../components/form/formContainer";
import FormComponent from "../components/form/form";
import FormInput from "../components/form/formInput";
import FormTitle from "../components/form/formTitle";
import FormButton from "../components/form/formButton";

const Register = () => {

    return (
        <FormContainer>
            <FormTitle><h2>Registrarse</h2></FormTitle>
            <FormComponent>
                <FormInput type="text" placeholder="Usuario"/>
                <FormInput type="email" placeholder="Email"/>
                <FormInput type="password" placeholder="Contraseña"/>
                <FormButton>Registrarse</FormButton>
            </FormComponent>
        </FormContainer>
    )

}

export default Register;