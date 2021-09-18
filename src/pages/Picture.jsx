import { PictureContent } from "../components/PictureContent/index.jsx";
import { Title } from "../components/Title/index.jsx";

export const Picture = ({ editApp }) => {
  let listOfTypes = {};
  editApp.products.map((product) => {
    if (!listOfTypes[product.type]) listOfTypes[product.type] = {};
    if (!listOfTypes[product.type].data) listOfTypes[product.type].data = [];

    listOfTypes[product.type].type = product.type;
    listOfTypes[product.type].data.push(product);
  });

  return (
    <div className="Picture">
      {
        Object.values(listOfTypes)?.slice().sort().map((item, index) => {
          return (
            <section className="Section" key={index}>
              <Title>{item.type}</Title>
              <PictureContent products={item.data} />
            </section>
          );
        })
      }
    </div>
  );
};
