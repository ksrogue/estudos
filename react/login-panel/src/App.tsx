import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("E-mail inválido!")
      .required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "No mínimo 6 carácteres!")
      .required("Campo obrigatório!"),
  })
  .required();

function App() {
  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const form = watch();

  console.log(form);
  return (
    <div className="app-container">
      <form>
        <h1>Login</h1>
        <input type="text" placeholder="email" {...register("email")} />
        <input type="password" placeholder="senha" {...register("password")} />

        <input type="submit" value="Entrar" className="login-button" disabled={!isValid} />
      {errors.email?.message ? <span className="error-msg">{errors.email?.message}</span> : null}
      {errors.password?.message ? <span className="error-msg">{errors.password?.message}</span> : null }
      </form>
    </div>
  );
}

export default App;
