import styled from "@emotion/styled";

export const Container = styled.ul`
  margin: 20px;
  display: grid;
  gap: 80px;
  max-width: 1500px;
  grid-template-columns: repeat(auto-fill, minmax(11.5rem, 250px));
  justify-content: ${(props) => props.from ? "start" : "center"};
`;

export const Price = styled.p`
  ${(props) => props.offer ? `text-decoration: line-through;` : "text-decoration: none;"}
`;

export const PictureComponent = styled.div`
  position: relative;
  list-style: none;
  min-height: calc(100vh - 139.95px);
  transition: 0.25s all;
  &.box:hover {
    box-shadow: 0px 0px 20px #48918c;
  }
  &.box {
    box-shadow: 0px 3px 10px #00000029;
    height: fit-content;
    min-height: fit-content;
  }
  .back {
    color: var(--color-radioactive);
    text-decoration: underline;
    margin: 10px;
    cursor: pointer;
  }
  .Maybe {
    margin: 10px;
  }
  .description {
    margin-top: 10px;
    max-height: 150px;
    overflow-y: auto;
  }
  .ContainerInput {
    max-width: 200px;
    margin-left: 10px;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
  }
  .articleVideo {
    padding: 0;
  }
  .offerNewText {
    color: var(--color-bad);
    font-weight: 600;
    padding: 10px;
    font-size: 15px;
    animation: radioactiveText 2s infinite alternate;
    color: var(--color-white);
    margin: 0;
    /* margin-bottom: 10px; */
  }
  .offer {
    color: var(--color-radioactive);
  }
  .bg {
    background-color: white;
  }
  .offer_radio {
    background-color: var(--color-bad);
    color: var(--color-white);
    font-weight: bold;
    text-align: center;
    font-size: 0.8rem;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    z-index: 5;
    position: absolute;
    right: -10px;
    top: -10px;
    animation: radioactiveText 2s infinite alternate;
  }
  .ContainerCard {
    display: flex;
    /* margin: 0 10px; */
    align-items: start;
    justify-content: center;
    height: 100%;
    video, img {
      max-width: 800px;
      min-width: 800px;
      min-height: 100%;
      max-height: 380px;
      width: 100%;
      object-fit: contain;
      background: #090d17;
    }
    /* .video_play {
      height: 200px;
    } */
    .imageAll {
      max-width: 100%;
      min-width: 33px;
      min-height: 220px;
      max-height: 220px;
      opacity: 0;
      object-fit: contain;
      background: url(${({ url }) => `"${url}"`});
      background-position: center;
      background-attachment: scroll;
      animation: visible 0.25s forwards ease-in;
    }
    .img_video {
      max-width: 100%;
    }
    .Container_All {
      display: flex;
      background-color: white;
      box-shadow: 0px 3px 10px #00000029;
      max-width: 100%;
      width: 100%;
    }
    .Card_two {
      padding: 0;
      max-width: 100%;
      width: 100%;
      article {
        padding: 20px;
        p {
          margin: 10px 0;
        }
      }
    }
    .Play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 40px;
      border-radius: 50%;
      padding: 20px;
      background-color: var(--color-white);
      opacity: 0.5;
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .Card {
    box-shadow: 0px 3px 10px #00000029;
    max-width: 50%;
    margin: 0 30px;
    margin-left: 0;
    background-color: white;
    min-width: 500px;
  }
  a {
    text-decoration: none;
    color: var(--color-dark);
  }
  figure {
    position: relative;
    p {
      position: absolute;
      bottom: 5px;
      left: 0px;
      padding: 10px;
      background-color: var(--color-dark);
      color: var(--color-white);
      font-weight: bold;
      font-size: 15px;
    }
  }
  article {
    padding: 10px;
  }
  .totalMe {
    /* margin-left: 10px; */
    font-size: 16px;
    font-style: italic;
    /* color: #4ba08f;
    background: #55a6b4; */
    padding: 14px;
    color: var(--color-dark);
  }
  img {
    max-width: 300px;
    height: 320px;
    object-fit: cover;
    object-position: top;
    width: 100%;
  }
  @keyframes radioactive {
    0% {
      background-color: var(--color-bad);
    }
    100% {
      background-color: #e64444;
    }
  }
  @keyframes radioactiveText {
    0% {
      background-color: #4ba08f;
    }
    100% {
      background-color: #21bfa0;
    }
  }
  @keyframes visible {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1200px) {
    .ContainerCard {
      video, img {
        max-width: 430px;
        min-width: 430px;
      }
    }
  }
  @media screen and (max-width: 790px) {
    .ContainerCard {
      flex-wrap: wrap;
      flex-direction: column-reverse;
      figure {
        min-height: 380px;
      }
      video, img {
        max-width: 100%;
        min-width: 100%;
      }
      img {
        min-height: 380px;
        max-height: 380px;
      }
      .flex {
        div {
          margin: 10px;
          width: 100%;
        }
      }
    }
    .Container_All {
      flex-wrap: wrap;
      flex-direction: column-reverse;
    }
    .Card {
      margin: 0;
      min-width: 100%;
    }
    video {
      min-width: 100%;
    }
    .img_video {
      height: auto;
    }
  }
  @media screen and (max-width: 658px) {
    .ContainerCard {
      flex-wrap: wrap;
      flex-direction: column-reverse;
      figure {
        /* min-height: 100%;
        margin-bottom: 200px; */
        video {
          min-height: 380px;
        }
      }
      .flex {
        flex-wrap: wrap;
      }
      img {
        object-fit: cover;
      }
    }
  }
`;
