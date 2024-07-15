import React from "react";
import { useForm } from "react-hook-form";
import H1AndFields from "./../container/H1&Fields";
import "./../container/container.css"; 

const Signin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log('Form submitted', data);
      };

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <H1AndFields  register={register} errors={errors}/>
        <button type="submit">Acessar plataforma</button>
        <p>Não possui conta? <a href="/">Crie uma agora!</a></p>
        </form>
       
      </div>
    )
  }
  
  export default Signin