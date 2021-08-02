import { ButtonComponents } from ".";

export const Button = (props) => {
  return (
    <ButtonComponents
      {...props}
    >
      {props.children}
    </ButtonComponents>
  );
};
