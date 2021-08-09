import { useState, useEffect } from "react";
import { Input } from "../Input"
import { MdPhone, MdPhoneAndroid } from "react-icons/md";
import { InformationComponent } from ".";

export const Contact_Information = ({
  information = [],
}) => {
  const [phoneHouse, setPhoneHouse] = useState("");
  const [personalPhone, setPersonalPhone] = useState("");

  useEffect(() => {
    setPhoneHouse(information[0]?.phone_number_house);
    setPersonalPhone(information[0]?.phone_number_personal);
  }, []);

  return (
    <InformationComponent>
      <div className="input">
        <Input
          inputProps={{
            type: "number",
            min: 0,
            defaultValue: personalPhone,
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
            min: 0,
            defaultValue: phoneHouse,
            placeholder: "Teléfono de la casa",
          }}
        >
          <MdPhone />
        </Input>
      </div>
    </InformationComponent>
  );
};