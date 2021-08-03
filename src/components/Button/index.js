import { css } from "@emotion/react";
import styled from "@emotion/styled";

const buttonThemes = {
  "primary": css`
    background: transparent linear-gradient(180deg, #94e0db 0%, #50a1b1 100%) 0% 0% no-repeat padding-box;
  `,
  "secondary": css`
    background: transparent linear-gradient(180deg, #f37070 0%, var(--color-radioactive) 100%) 0% 0% no-repeat padding-box;
    color: var(--color-light);
    font-size: 14px;
    box-shadow: 0px 0px 40px var(--color-dark);
    transition: 0.1s all;
    /* border: 1px solid var(--color-primary); */
    &:hover {
      transform: scale(1.01);
    }
    &:focus {
      transform: scale(0.98);
    }
  `,
  "dark": css`
    background: transparent linear-gradient(180deg, #3B403F 0%, #111100 100%) 0% 0% no-repeat padding-box;
  `,
  "light": css`
    background: transparent linear-gradient(180deg, #DDDDDD 0%, #DFDFDD 100%) 0% 0% no-repeat padding-box;
  `,
};

export const ButtonComponents = styled.button`
  text-align: center;
  font-weight: bold;
  font-family: var(--font-2);
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 15px;
  background: transparent linear-gradient(180deg, #94e0db 0%, #50a1b1 100%) 0% 0% no-repeat padding-box;
  &:disabled {
    opacity: 0.58;
  }
  ${(props) => {
    return buttonThemes[props.theme] || buttonThemes[0];
  }}
  ${(props) => props.block ? css`width: 100%;` : ""}
`;
