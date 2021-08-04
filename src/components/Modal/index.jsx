import { MdClose } from "react-icons/md";
import { ModalComponent, Overlay } from ".";

export const Modal = ({ children, onClick, closeButton }) => {
  return (
    <>
      <Overlay onClick={() => onClick(false)}></Overlay>
      <ModalComponent>
        {
          closeButton && (
            <div className="badge" onClick={() => onClick(false)}>
              <MdClose />
            </div>
          )
        }
        { children }
      </ModalComponent>
    </>
  );
};
