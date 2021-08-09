import { css } from "@emotion/react";
import styled from "@emotion/styled";

const buttonThemes = {
  "primary": css`
    background: transparent linear-gradient(180deg, #94e0db 0%, #50a1b1 100%) 0% 0% no-repeat padding-box;
    color: var(--color-dark);
  `,
  "primary-outline": css`
    background: none;
    border: #50a1b1 1px solid;
    color: var(--color-primary);
  `,
  "secondary": css`
    background: transparent linear-gradient(180deg, #f37070 0%, var(--color-radioactive) 100%) 0% 0% no-repeat padding-box;
    color: var(--color-light);
  `,
  "danger": css`
    background: transparent linear-gradient(180deg, var(--color-bad) 0%,  #b12630 100%) 0% 0% no-repeat padding-box;
    color: var(--color-light);
  `,
  "dark": css`
    background: transparent linear-gradient(180deg, #3B403F 0%, #111100 100%) 0% 0% no-repeat padding-box;
  `,
  "light": css`
    background: transparent linear-gradient(180deg, #DDDDDD 0%, #DFDFDD 100%) 0% 0% no-repeat padding-box;
  `,
  "light-outline": css`
    background: none;
    border: var(--color-light_gray) 1px solid;
    color: var(--color-light_gray);
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
  padding: ${({ padding }) => padding || "15px" };
  background: transparent linear-gradient(180deg, #94e0db 0%, #50a1b1 100%) 0% 0% no-repeat padding-box;
  font-size: 14px;
  transition: 0.1s all;
  &:disabled {
    opacity: 0.58;
  }
  &:hover {
    transform: scale(1.01);
  }
  &:focus {
    transform: scale(0.98);
  }
  ${(props) => {
    return buttonThemes[props.theme] || buttonThemes[0];
  }}
  ${(props) => props.block ? css`width: 100%;` : ""}
`;
