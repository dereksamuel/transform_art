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
  z-index: 50;
  bottom: 5px;
  right: 5px;
  opacity: 0.85;
  h3 {
    font-size: 20px;
  }
  p {
    font-size: 14px;
  }
  ${(props) => alertThemes[props.theme] || alertThemes[0]}
`;
