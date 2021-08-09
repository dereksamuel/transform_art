import { css } from "@emotion/react";
import styled from "@emotion/styled";

const alertThemes = {
  "primary": css`
    background: var(--color-primary);
  `,
  "bad": css`
    background: var(--color-bad);
    color: var(--color-white);
  `,
  "good": css`
    background: var(--color-good);
    color: var(--color-dark);
  `,
};

export const AlertComponents = styled.div`
  padding: 1rem;
  position: fixed;
  z-index: 500;
  bottom: 5px;
  right: 5px;
  opacity: 0.85;
  h3 {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p {
    font-size: 14px;
  }
  .close {
    background: var(--color-dark);
    color: var(--color-light);
    border-radius: 50%;
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
  }
  ${(props) => alertThemes[props.theme] || alertThemes[0]}
`;
