import { useEffect, useRef, useState } from "react";

export const useIsScroll = () => {
  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);
  useEffect(() => {
    const handlescroll = () => {
      const currentScroll = window.scrollY;
      setShow(currentScroll > lastScroll.current ? false : true);
      lastScroll.current = currentScroll;
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  return show;
};
