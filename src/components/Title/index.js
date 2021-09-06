import styled from "@emotion/styled";

export const Text = styled.h3`
  background: ${({ color }) => color ? color : "#2d2b2b"};
  color: ${({ color }) => color ? "var(--color-light)" : "var(--color-radioactive)"};
  cursor: ${({ color }) => color && "pointer"};
  font-style: italic;
  padding: ${({ color }) => color ? "5px 15px" : "15px 30px"};
  font-size: ${({ color }) => color ? "12px" : "16px"};
  width: fit-content;
  border-radius: 90px 0px 90px 0px;
`;

export const SubText = styled.h3`
  font-style: italic;
  font-size: 16px;
  margin: 20px 0;
  width: fit-content;
`;
