import styled from "@emotion/styled";

export const Form = styled.form`
  max-width: 525px;
  width: 100%;
  margin: 0 20px;
  .User {
    color: var(--color-dark);
    font-size: 100px;
    max-width: fit-content;
    margin: auto;
    display: block;
  }
  label[for="userName"], label[for="password"] {
    margin: 40px 0;
  }
  .d-flex {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 20px 0;
    p {
      text-decoration: underline;
      cursor: pointer;
      font-size: 14px;
    }
  }
`;
