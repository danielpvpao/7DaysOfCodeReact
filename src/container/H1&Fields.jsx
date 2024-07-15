import React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";

const H1AndFields = ({ register, errors }) => {
  return (
    <>
      <h1>Aluritter</h1>
      <input
        type="email"
        className={classNames("input-field", { "invalid": errors.email })}
        placeholder="email@exemplo.com"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Email inválido",
          }
        })}
      />
      {errors.email && <span className="error-message">{errors.email.message}</span>}
      <input
        type="password"
        className={classNames("input-field", { "invalid": errors.senha })}
        placeholder="Senha"
        {...register("senha", {
          required: "Password is required"
        })}
      />
      {errors.senha && <span className="error-message">{errors.senha.message}</span>}
    </>
  );
};

export default H1AndFields;
