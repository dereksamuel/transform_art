import { Container } from ".";

export const AboutUsContent = ({ about_us }) => {
  const evaluateLinkOrText = (item) => {
    const splitText = item.data.split("https");
    console.log(splitText);
    let regex = new RegExp(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/);
    return !item.data.match(regex) ? <p>{item.data}</p> : splitText.map((text) => {
      if (text) {
        return <a href={`https${text}`} target="_blank">https{text}</a>
      }
    });
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