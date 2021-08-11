import styled from "@emotion/styled";

export const Badge = styled.div`
  border: 1px solid gray;
  color: gray;
  font-size: 30px;
  padding: 10px;
  border-radius: 50%;
  max-width: fit-content;
  cursor: pointer;
  width: 45px;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-light);
  transition: 0.25s background;
  margin: 10px;
  &:hover {
    background: var(--color-light_gray);
  }
`;

export const Badges = styled.section`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px;
  font-family: var(--font-1);
  background: none;
  border: none;
  outline: none;
  width: 100%;
`;
