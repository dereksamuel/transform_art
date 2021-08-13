import { Input } from "../Input"
import { MdPhone, MdPhoneAndroid } from "react-icons/md";
import { InformationComponent } from ".";
import { useEffect } from "react";

export const Contact_Information = ({
  contact_information,
  inputHouseRef,
  inputPrivateRef
}) => {

  useEffect(() => {
    inputHouseRef.current.value = contact_information[0]?.phone_number_house;
    inputPrivateRef.current.value = contact_information[0]?.phone_number_personal;
  }, [contact_information, inputHouseRef, inputPrivateRef]);

  return (
    <InformationComponent>
      <div className="input">
        <Input
          inputProps={{
            type: "number",
            min: 0,
            ref: inputPrivateRef,
            placeholder: "Número del celular",
          }}
        >
          <MdPhoneAndroid />
        </Input>
      </div>
      <div className="input">
        <Input
          inputProps={{
            type: "number",
            ref: inputHouseRef,
            min: 0,
            placeholder: "Teléfono de la casa",
          }}
        >
          <MdPhone />
        </Input>
      </div>
    </InformationComponent>
  );
};