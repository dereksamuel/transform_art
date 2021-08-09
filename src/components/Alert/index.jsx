import { MdClose } from "react-icons/md";
import { AlertComponents } from ".";

export const Alert = (props) => {
  return (
    <AlertComponents {...props}>
      <h3>
        {props.title}
        <span className="close" onClick={props.deleteAlert}><MdClose /></span>
      </h3>
      <p>{props.text}</p>
    </AlertComponents>
  );
};
