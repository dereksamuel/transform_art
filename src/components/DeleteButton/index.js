import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-left: 15px;
    opacity: 0;
    animation: fade 0.5s forwards ease-in-out;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;