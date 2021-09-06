/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { PictureComponent, Price } from ".";
import { Title } from "../Title/index.jsx";
import { Input } from "../Input/index.jsx";
import { Button } from "../Button/index.jsx";
import { MdBorderHorizontal, MdBorderVertical, MdPlayArrow } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { changeProduct } from "../../features/cart/cartSlice";
import { PictureContent } from "./index.jsx";

export const PictureItem = ({
  product,
  products,
  video
}) => {
  const productsToAdd = useSelector((state) => state.cart.productsToAdd);
  const selected = productsToAdd.filter((productAdded) => productAdded.id === product.id);
  const dispatch = useDispatch();
  const [controls, setControls] = useState(false);
  const refVideo = useRef(null);
  const inputWidthRef = useRef(null);
  const inputHeightRef = useRef(null);
  const history = useHistory();

  const calculateOffer = (offer, price) => {
    const percentagePrice = 100 - offer;
    return (price * percentagePrice) / 100;
  };

  const handlePlay = () => {
    if (controls || !product.src_video) return;
    if (refVideo.current) {
      const timer = setTimeout(() => {
        refVideo.current.play();
        clearTimeout(timer);
        setControls(true);
      }, 0);
    }
  };

  const handleAddToCart = () => {
    const copyProducts = JSON.parse(JSON.stringify(product));

    copyProducts.width = inputWidthRef.current.value;
    copyProducts.height = inputHeightRef.current.value;

    dispatch(changeProduct([
      ...productsToAdd,
      copyProducts,
    ]));
    history.push("/cart");
  };

  useEffect(() => {
    if (inputWidthRef.current && inputHeightRef.current) {
      inputWidthRef.current.value = product.width;
      inputHeightRef.current.value = product.height;
    }
    setControls(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.pathname]);

  function shuffleArray(inputArray) {
    return inputArray.slice().sort(() => Math.random() - 0.5);
  }

  const handleBack = () => {
    history.goBack();
  };

  const productRandoms = shuffleArray(products);

  return (
    <PictureComponent className={video ? "box_video" : "box"} url={product.src}>
      {
        !video ? <Link to={{
          pathname: `/picture/${product.id}`,
          state: {
            products
          },
        }}>
          {
            product.offer && !video && <div className="offer_radio">Oferta: {product.offer}%</div>
          }
          <figure className="bg">
            {
              video && <video src={product.src_video}></video>
            }
            <img src={product.src} alt={product.name} />
            <p>{product.name}</p>
          </figure>
          <article className="bg">
            <Price offer={product.offer}>Precio: ${new Intl.NumberFormat().format(product.price)}</Price>
            {
              product.offer && <p className="offer">Precio con descuento: ${new Intl.NumberFormat().format(calculateOffer(product.offer, product.price))}</p>
            }
          </article>
        </Link> :
        <>
          <div className="ContainerCard">
            <div className="Container_All">
              <figure onClick={handlePlay}>
                {
                  product.src_video ?
                    <video ref={refVideo} src={product.src_video} controls={controls} poster={product.src} className="imagePicture"></video> :
                    <img src={product.src} alt={product.name} className="imagePicture" />
                }
                {
                  !controls && product.src_video && <div className="Play"><MdPlayArrow /></div>
                }
              </figure>
              <div className="Card_two">
                {
                  controls && <img src={product.src} alt={product.name} className="imageAll" />
                }
                {
                  product.offer && <p className="offerNewText">El cuadro {product.name} tiene una oferta del {product.offer}%</p>
                }
                <article>
                  <Title>{product.name}</Title>
                  <p className="description">{product.description}</p>
                  <Price offer={product.offer}>Precio: ${new Intl.NumberFormat().format(product.price)}</Price>
                  {
                    product.offer && <p className="offer">Precio con descuento: ${new Intl.NumberFormat().format(calculateOffer(product.offer, product.price))}</p>
                  }
                  <div className="flex">
                    <div>
                      <p>Modifica el ancho de tu cuadro(medidas en cm):</p>
                      <Input
                        inputProps={{
                          type: "number",
                          defaultValue: product.width,
                          placeholder: "Ancho del cuadro",
                          id: "width",
                          ref: inputWidthRef,
                        }}
                      >
                        <MdBorderHorizontal />
                      </Input>
                    </div>
                    <div>
                      <p>Modifica el alto de tu cuadro(medidas en cm):</p>
                      <Input
                        inputProps={{
                          type: "number",
                          defaultValue: product.height,
                          placeholder: "Alto del cuadro",
                          id: "height",
                          ref: inputHeightRef,
                        }}
                      >
                        <MdBorderVertical />
                      </Input>
                    </div>
                  </div>
                  <Button onClick={handleAddToCart}>Agregar al carrito</Button>
                  {
                    selected.length ? <span className="totalMe">Haz agregado {selected.length} {selected.length === 1 ? "cuadro" : "cuadros"} de {product.name}</span> : null
                  }
                </article>
              </div>
            </div>
          </div>
          {
            productRandoms.length ? <div className="Maybe">
              <Title>Quizá te interese lo siguiente</Title>
            </div> : ""
          }
          <PictureContent products={productRandoms} number={3} id={product.id} from="PictureItem"></PictureContent>
          <a onClick={handleBack} className="back">Atrás</a>
        </>
      }
    </PictureComponent>
  )
};
