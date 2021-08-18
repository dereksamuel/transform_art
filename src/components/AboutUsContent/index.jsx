import { Container } from ".";

export const AboutUsContent = ({ about_us }) => {
  const evaluateLinkOrText = (item) => {
    let regex = new RegExp(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/);
    return !item.data.match(regex) ? <p>{item.data}</p> : <a href={item.data} target="_blank">{item.data}</a>;
  };

  return (
    <Container>
      {
        about_us
          ?.slice()
          .sort((a, b) => a.INDEX - b.INDEX)
          .map((item) =>
            item.type === "text" ? evaluateLinkOrText(item) : <img src={item.data} alt={item.type} />)
      }
    </Container>
  );
};