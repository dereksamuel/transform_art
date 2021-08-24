import styled from "@emotion/styled";

export const Prepend = styled.span`
  background-color: ${({ prependColors }) => {
    return prependColors === "white" ? "var(--color-secondary)" : "var(--color-dark)";
  }};
  display: flex;
  align-items: center;
  border-radius: 12px 0px 0px 12px;
  padding: 0 20px;
  color: ${({ prependColors }) => {
    return prependColors === "white" ? "var(--color-dark)" : "var(--color-light)";
  }};
  font-size: 20px;
  &.last {
    border-radius: 0px 12px 12px 0px;
  }
`;

export const Label = styled.label`
  background-color: var(--color-light-gray-2);
  border-radius: 12px;
  display: flex;
  /* max-width: fit-content; */
  box-shadow: inset 0px 3px 16px #00000042;

  & input, & textarea {
    background: none;
    border: none;
    font-family: var(--font-1);
    outline: none;
    width: 100%;
    /* border-radius: 12px; */
    color: var(--color-dark);
    padding: 1rem;
    transition: 0.2s all;
  }

  & textarea {
    min-height: 100px;
    max-height: 150px;
    min-width: 100%;
  }

  input::-webkit-file-upload-button {
    background: none;
    border: none;
    visibility: hidden;
    -webkit-appearance: none;
   float: right;
  }

  & input[type="text"]:read-only {
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  input[type="file"]::before {
    font-family: var(--font-2);
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
    /* content: ${(props) => props?.beforeInput || "Seleccioanar archivos"}; */
  }

  /* & input:focus ~ label {
    border: 1px solid var(--color-secondary);
  } */

  & input::placeholder {
    color: gray;
  }

  input[type="search"]::-webkit-search-cancel-button {

    /* Remove default */
    /* -webkit-appearance: none; */
      
    /* Now your own custom styles */
    height: 10px;
    width: 10px;
    /* Will place small red box on the right of input (positioning carries over) */

  }
`;

export const CheckBox = styled.label`
  display: block;
  position: relative;
  padding-right: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 14px;
  color: var(--color-dark);

  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    right: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 10px;
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  input:checked ~ .checkmark {
    background-color: #2196F3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark::before {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  input:checked ~ .checkmark::before {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkmark::before {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
