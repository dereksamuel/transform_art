import styled from "@emotion/styled";

export const HomeComponent = styled.div`
  .content {
    display: flex;
    justify-content: center;
    margin: 10px;
    article {
      padding: 40px;
      p {
        margin: 30px 0;
        max-width: 550px;
        line-height: 30px;
      }
      .link {
        color: var(--color-radioactive);
        margin-right: 10px;
      }
      .whatsapplink {
        color: var(--color-radioactive);
        display: flex;
        align-items: center;
        margin-bottom: 10px;
      }
      .whatsapp {
        color: green;
        font-size: 40px;
        margin-right: 10px;
      }
      .homelink {
        display: flex;
        align-items: center;
      }
      .homeAll {
        font-size: 40px;
        margin-right: 10px;
      }
    }
    figure {
      max-width: 400px;
      margin: 20px 80px;
      img {
        height: 400px;
        width: 100%;
        object-fit: contain;
      }
    }
    .Decorative2 {
      margin-left: 0;
    }
  }
  @media screen and (max-width: 850px) {
    .content.twoDecorative {
      flex-direction: column-reverse;
    }
    .content {
      flex-wrap: wrap;
      article {
        padding: 20px;
        p {
          margin: 10px 0;
        }
      }
      figure {
        margin: 0;
        img {
          height: 300px;
          margin-bottom: 40px;
          width: 100%;
          object-fit: contain;
        }
      }
      article {
        p {
          max-width: 100%;
        }
      }
    }
  }
`;
