import { CheckBox, Label, Prepend } from "./input.js";

export const Textarea = ({ txtProps, setValue, children, value, prependColors }) => {
  const handleChangeInput = (event) => {
    setValue?.(event.target.value);
  };

  return (
    <>
      <Label htmlFor={txtProps?.id || ""}>
        {
          children && <Prepend prependColors={prependColors}>{children}</Prepend>
        }
        <textarea
          onChange={handleChangeInput}
          {...txtProps}
          value={value} />
      </Label>
    </>
  );
};

export const Input = ({ inputProps, setValue, children, value, prependColors }) => {
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
          <span className="preppend">{children}</span>
          <input
            className="CheckBox"
            onChange={handleChangeCheck}
            {...inputProps}
            value={value} />
          <span className="checkmark"></span>
        </CheckBox> : <Label htmlFor={inputProps?.id || ""}>
          {
            children && <Prepend prependColors={prependColors}>{children}</Prepend>
          }
          <input
            onChange={handleChangeInput}
            {...inputProps}
            value={value} />
        </Label>
      }
    </>
  );
};