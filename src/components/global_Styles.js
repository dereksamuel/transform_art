import styled from "@emotion/styled";

export const NavBar = styled.section`
  padding: 15px;
  background-color: var(--color-dark);

  .NavBar__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 1300px;
    margin: auto;
  }

  .Link__image {
    display: flex;
    align-items: center;
    padding: 0 30px;
  }

  .Links {
    list-style: none;
  }

  label {
    flex: 2;
  }

  .Links__item {
    display: inline-block;
    vertical-align: middle;
    padding: 0 30px;
    position: relative;
  }

  .NavBar__image {
    max-width: 150px;
    height: auto;
  }

  .Links__item a {
    color: var(--color-secondary);
    font-size: 14px;
    text-decoration: none;
    transition: color 0.5s;
  }

  .Links__item a:hover {
    color: var(--color-light);
  }

  .Links__item--icon {
    color: var(--color-secondary);
    font-size: 40px;
    text-decoration: none;
  }

  .NavBar__text {
   color: var(--color-light);
  }

  .Links__menu {
    display: none;
    opacity: 0;
    padding: 0 30px;
    & svg {
      color: var(--color-light);
    }
  }

  .inputMdBefore {
    flex: 1;
    transition: 1s all;
  }

  .cancelButton {
    display: none;
  }

  .input_after {
    display: none;
  }

  @media screen and (max-width: 814px) {
    .Links_Header {
      display: none;
      opacity: 0;
    }
    .Links {
      text-align: center;
    }
    .Links__menu {
      display: block;
      opacity: 1;
      cursor: pointer;
    }
    .toggleMenu {
      display: block;
      opacity: 0;
      position: absolute;
      transform-origin: top;
      right: -500px;
      transform: translate(-500px);
      animation: fadeInX 0.5s forwards alternate;
      will-change: opacity right top display;
      transition: 0.5s all;
      z-index: 500;
      svg {
        z-index: 5;
      }
      background-color: #2a3b38e0;
    }

    .toggleMenu .Links__item {
      display: block;
      padding: 35px;
      border: 1px solid var(--color-dark);
    }

    .container__item {
      position: relative;
    }

    .badge {
      top: -25px;
      right: -1px;
    }

    .input_after {
      display: none !important;
    }

    .cancelButton {
      display: block;
      color: var(--color-light);
      font-weight: bold;
      font-size: 40px;
      position: relative;
      cursor: pointer;
    }

    .cancelButton i, .cancelButton svg {
      position: absolute;
      right: 5px;
      top: 5px;
    }
  }

  @media screen and (max-width: 521px) {
    .inputMdBefore {
      animation: fadeNav 1s forwards;
    }
    .input_after {
      padding-top: 16px;
      display: block !important;
    }
    .Links__menu {
      padding: 0;
    }
  }

  @keyframes fadeNav {
    0% {
      opacity: 1;
      display: block;
    }
    50% {
      opacity: 0;
      display: block;
    }
    100% {
      opacity: 0;
      display: none;
    }
  }

  @keyframes fadeInX {
    0% {
      right: -500px;
      transform: translate(-500px);
    }
    100% {
      opacity: 1;
      display: block;
      top: 0;
      right: 0;
      transform: translate(0px);
    }
  }
`;
