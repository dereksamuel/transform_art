import { AlertComponents } from ".";

export const Alert = (props) => {
  return (
    <AlertComponents {...props}>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </AlertComponents>
  );
};
