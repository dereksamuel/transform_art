import { useEffect, useState } from "react";

export const useIntersection = ({ options, ref }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      setVisible(entries);
      observer.disconnect();
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return observer.disconnect();
  }, [options, ref]);

  return visible;
};
