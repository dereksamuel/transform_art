import styled from "@emotion/styled";

export const CarrouselContainer = styled.div`
  background: transparent linear-gradient(180deg, var(--color-good) 0%, var(--color-primary) 100%) 0% 0% no-repeat padding-box;
  position: relative;
  display: flex;
  align-items: center;
  min-height: 400px;
  ul {
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow: hidden;
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
    scroll-behavior: smooth;
    height: 100%;
  }
  .arrow {
    position: absolute;
    transform: translateY(-50%);
    color: var(--color-light_gray);
    font-size: 55px;
    background: var(--color-dark);
    z-index: 50;
    display: flex;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }

  .arrow-left {
    top: 50%;
    left: 10px;
  }

  .arrow-right {
    top: 50%;
    right: 10px;
  }
  li:hover {
    opacity: 1;
    img {
      transform: scale(1);
    }
  }
  li {
    margin: 50px;
    list-style: none;
    min-width: 300px;
    height: 300px;
    opacity: 0.9;
    transition: 0.25s all;
    will-change: transition opacity;
    img {
      scroll-snap-align: center;
      transition: 0.25s all;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 15px;
      box-shadow: 0px 0px 20px #48918c;
      transform: scale(0.8);
      cursor: pointer;
    }
  }
  @media screen and (max-width: 800px) {
    ul {
      li {
        margin: 50px 100px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    ul {
      li {
        margin: 50px;
      }
    }
  }
  @media screen and (max-width: 360px) {
    ul {
      li {
        margin: 50px;
        margin-left: 0;
      }
    }
  }
`;
