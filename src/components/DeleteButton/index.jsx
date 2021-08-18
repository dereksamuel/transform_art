import { useState } from "react";
import { Button } from "../Button/index.jsx";
import { Container } from "./index.js";

export const DeleteButton = ({ functionClick, modalInfo, timer, disabled }) => {
  const [deleteMode, setDeleteMode] = useState(false);

  return (
    <>
      {
        !deleteMode ?
          <Button disabled={disabled} type="button" theme="danger" padding="10px" onClick={() => setDeleteMode(true)}>Eliminar</Button> :
          <Container>
            <small>¿Está seguro?</small>
            <Button type="button" theme="light" onClick={() => {
              setDeleteMode(false);
              functionClick(modalInfo, timer);
            }}
            padding="5px">Si</Button>
            <Button type="button" theme="danger" onClick={() => setDeleteMode(false)} padding="5px">No</Button>
          </Container>
      }
    </>
  );
};
