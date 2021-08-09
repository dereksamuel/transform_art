import styled from "@emotion/styled";

export const Overlay = styled.div`
  background: #dcf3efd1;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ModalComponent = styled.div`
  background: var(--color-dark);
  color: var(--color-light);
  max-height: 613px;
  overflow: auto;
  border-radius: 12px;
  position: fixed;
  z-index: 101;
  left: 50%;
  top: 50%;
  transform: translateY(-1000px);
  animation: fadeInByY 0.5s ease-in-out forwards;
  /* margin: 15px; */
  max-width: 470px;
  width: 100%;
  /* transition: 0.2s all; */
  .buttons {
    align-items: center;
    margin-top: 15px;
  }
  .title {
    position: absolute;
    z-index: 102;
    font-size: 40px;
    right: 5px;
    cursor: pointer;
    top: 5px;
    width: fit-content;
    transition: 0.2s transform;
    height: fit-content;
    &:hover {
      transform: scale(1.01);
    }
  }
  .badge {
    position: absolute;
    background: var(--color-dark);
    z-index: 102;
    font-size: 40px;
    left: 5px;
    cursor: pointer;
    top: 5px;
    width: fit-content;
    transition: 0.2s transform;
    height: fit-content;
    &:hover {
      transform: scale(1.05);
    }
  }
  .full__image {
    width: 100%;
    max-height: 200px;
    object-fit: contain;
    object-position: top;
    border-radius: 12px 12px 0 0;
    background: gray;
  }
  .d-flex-dk {
    display: flex;
    p {
      padding: 15px;
      padding-top: 0;
      cursor: pointer;
      color: #adadad;
      text-decoration: underline;
    }
  }
  figure.image {
    position: relative;
  }
  .full__image__empty {
    width: 100%;
    min-height: 200px;
    height: 100%;
    object-fit: cover;
    background-color: gray;
    border-radius: 12px 12px 0 0;
  }
  .Title {
    position: absolute;
    bottom: 5px;
    left: 0px;
    padding: 0 15px;
    color: var(--color-white);
    font-size: 20px;
    background: var(--color-dark);
  }
  .d-flex {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
  .container__input {
    max-width: 210px;
    margin: 0 5px;
    margin-top: 10px;
    button {
      margin-top: 10px;
    }
  }
  .input {
    margin: 10px 2px;
  }
  .content {
    padding: 15px;
  }
  @keyframes fadeInByY {
    0% {
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateY(-50%) translateX(-50%);
      opacity: 1;
    }
  }
`;
