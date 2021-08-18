import { CarrouselContainer } from ".";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useRef } from "react";

export const Carrousel = ({ products }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const imgs = [...ref.current.children].map(($children) => $children.children[0]);

      const observer = new IntersectionObserver(entries => {
        for (const { target, isIntersecting } of entries) {
          console.log(entries);
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
          products?.map((product, index) => index > 9 ? <></> : (
            <li key={product.id}>
              <img src={product.src} alt={product.name} className="img_carrousell" />
            </li>
          ))
        }
      </ul>
      <button className="arrow arrow-right" onClick={() => handleScroll()}>
        <MdKeyboardArrowRight />
      </button>
    </CarrouselContainer>
  );
};
