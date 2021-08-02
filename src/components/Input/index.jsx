import { CheckBox, Label } from "./input.js";

export const Input = ({ inputProps, setValue, children, value }) => {
  const handleChangeInput = (event) => {
    setValue?.(event.target.value);
  };

  const handleChangeCheck = (event) => {
    console.log(event.target.checked === false);
    setValue?.(event.target.checked || event.target.checked === false || event.target.value);
  };

  return (
    <>
      {
        inputProps.type === "checkbox" ? <CheckBox>
          <span>{children}</span>
          <input
            className="CheckBox"
            onChange={handleChangeCheck}
            {...inputProps}
            value={value} />
          <span className="checkmark"></span>
        </CheckBox> : <Label htmlFor={inputProps?.id || ""}>
          <span className={children && "preppend"}>{children}</span>
          <input
            onChange={handleChangeInput}
            {...inputProps}
            value={value} />
        </Label>
      }
    </>
  );
};