import { CarrouselContainer } from ".";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const Carrousel = ({ products }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const imgs = [...ref.current.children].map(($children) => $children.children[0]);

      const observer = new IntersectionObserver(entries => {
        for (const { target, isIntersecting } of entries) {
          if (isIntersecting) {
            // target.setAttribute("src", target.dataset.src)
            target.setAttribute("style", "opacity: 1;")
          } else {
            target.setAttribute("style", "opacity: 0;")
          }
        }
      }, {
        rootMargin: "500px",
      })

      imgs.forEach(img => {
        observer.observe(img)
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);  

  const handleScroll = (left) => {
    if (left) {
      ref.current.scrollLeft -= ref.current.offsetWidth;
    } else {
      ref.current.scrollLeft += ref.current.offsetWidth;
    }
  };

  return (
    <CarrouselContainer>
      <button className="arrow arrow-left" onClick={() => handleScroll("left")}>
        <MdKeyboardArrowLeft />
      </button>
      <ul id="carrousel_home" ref={ref}>
        {
          products?.map((product, index) => !(index > 9) ? (
            <Link to={{
              pathname: `/picture/${product.id}`,
              state: {
                products
              },
            }} key={product.id}>
              <li>
                <img src={product.src} alt={product.name} className="img_carrousell" />
              </li>
            </Link>
          ) : "")
        }
      </ul>
      <button className="arrow arrow-right" onClick={() => handleScroll()}>
        <MdKeyboardArrowRight />
      </button>
    </CarrouselContainer>
  );
};
