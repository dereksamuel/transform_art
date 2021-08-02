/* eslint-disable no-undef */
import { MdPerson, MdVpnKey } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { Input } from "../Input";
import { Form } from "./index";
import { Button} from "../Button/index.jsx";
import { useState } from "react";
import { Alert } from "../Alert/index.jsx";

export const LoginForm = () => {
  let timerError = null;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const clearTimer = () => {
    clearTimeout(timerError);
    setError(null);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (timerError) {
      clearTimer();
    }
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
      timerError = setTimeout(() => {
        clearTimer();
      }, 4000);
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      {
        error && <Alert text="Lo sentimos, su contraseña o nombre de usuario son incorrectos" theme="bad" title="Error:" />
      }
      <span className="User">
        <FaUserCircle />
      </span>
      <Input
        inputProps={{
          type: "email",
          placeholder: "Nombre de usuario",
          id: "userName",
          required: true,
        }}
        setValue={setEmail}
        value={email}
      >
        <MdPerson />
      </Input>
      <Input
        inputProps={{
          type: "password",
          placeholder: "Contraseña",
          id: "password",
          required: true,
        }}
        setValue={setPassword}
        value={password}
      >
        <MdVpnKey />
      </Input>
      <div className="d-flex">
        <Input
          inputProps={{
            type: "checkbox",
            id: "rememberMe",
          }}
          setValue={setRememberMe}
          value={rememberMe}
        >
          <small>Recordarme</small>
        </Input>
        <p>
          <small>¿Olvidó su clave?</small>
        </p>
      </div>
      <Button
        block
        theme="secondary"
        disabled={loading}
      >
        { loading ? "Cargando" : "Inicia sesión" }
      </Button>
    </Form>
  );
};