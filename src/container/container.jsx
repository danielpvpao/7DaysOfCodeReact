import React from "react";
import { useForm } from "react-hook-form";
import H1AndFields from "../container/H1&Fields";
import "../container/container.css";

const Container = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <H1AndFields register={register} errors={errors} />
      <button type="submit">Criar uma nova conta</button>
      <p>Já possui uma conta? <a href="/Signin">Acesse agora!</a></p>
    </form>
  );
};

export default Container;
