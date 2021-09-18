import styled from "@emotion/styled";

export const ItemCart = styled.tr`
  background-color: white;
  border: ${({ selected }) => selected ? "1px solid var(--color-radioactive)" : "none"};
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  img {
    max-width: 220px;
    width: 100%;
    height: 100px;
    object-fit: contain;
    border-radius: 1px;
    background-color: var(--color-dark);
  }
  .Total {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    p {
      font-size: 20px;
    }
  }
  article {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;
    width: 400px;
    h4 {
      color: var(--color-dark);
    }
    p {
      height: 95px;
      text-overflow: ellipsis;
      overflow: hidden;
      /* text-align: center; */
    }
  }
  .buttons {
    max-width: 300px;
    width: 100%;
    button {
      margin-top: 10px;
    }
  }
`;
