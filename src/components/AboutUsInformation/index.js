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
  margin: 10px 0;
  font-family: var(--font-1);
  background: none;
  border: none;
  outline: none;
  width: 100%;
`;

export const ImgContainer = styled.figure`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11.5rem, 1fr));
  gap: 15px;
  margin: 1rem;
  img {
    max-width: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  img.select {
    border: 1px solid var(--color-secondary);
  }
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  min-height: 150px;
`;

export const ContainerImg = styled.div`
  position: relative;
  .edit {
    position: absolute;
    right: 5px;
    top: 5px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    color: var(--color-light);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-dark);
  }
  .cancel {
    position: absolute;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-weight: bold;
    color: var(--color-light);
    cursor: pointer;
    left: 5px;
    top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-dark);
  }
`;
