import { Input } from "../Input"

export const Contact_Information = () => {
  return (
    <div>
      <Input
        inputProps={{
          type: "text",
        }}
      />
      <Input
        inputProps={{
          type: "text",
        }}
      />
    </div>
  );
};