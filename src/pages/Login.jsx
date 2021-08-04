import { Redirect } from "react-router";
import { LoginForm } from "../components/LoginForm/index.jsx";

export const Login = ({ currentUser }) => {
  if (currentUser)
    return <Redirect exact to="/edit_app" />

  return (
    <section className="Login">
      <LoginForm />
    </section>
  );
};