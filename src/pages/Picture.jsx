import { PictureContent } from "../components/PictureContent/index.jsx";

export const Picture = ({ editApp }) => {
  return (
    <div className="Picture">
      <PictureContent products={editApp.products} />
    </div>
  );
};
