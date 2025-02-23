import { useState, useEffect } from 'react';

function Carousel() {
  const [carousel, setCarousel] = useState(null);
  const [arrowBtns, setArrowBtns] = useState([]);
  const [wrapper, setWrapper] = useState(null);

  useEffect(() => {
    const carouselElem = document.querySelector(".carousel");
    const arrowBtnsElems = document.querySelectorAll(".wrapper i");
    const wrapperElem = document.querySelector(".wrapper");
    
    setCarousel(carouselElem);
    setArrowBtns(Array.from(arrowBtnsElems));
    setWrapper(wrapperElem);
  }, []);

  useEffect(() => {
    if (!carousel || !wrapper) return;

    const firstCard = carousel.querySelector(".card");
    const firstCardWidth = firstCard.offsetWidth;

    let timeoutId;
    let autoplayInterval;

    const autoPlay = () => {
      if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: firstCardWidth, behavior: 'smooth' });
      }
    };

    const startAutoPlay = () => {
      autoplayInterval = setInterval(autoPlay, 2750);
    };

    const stopAutoPlay = () => {
      clearInterval(autoplayInterval);
    };

    const handleMouseEnter = () => {
      clearTimeout(timeoutId);
      stopAutoPlay();
    };

    const handleMouseLeave = () => {
      timeoutId = setTimeout(startAutoPlay, 1000);
    };

    const handleArrowButtonClick = (btn) => {
      if (btn.id === "left") {
        carousel.scrollBy({ left: -firstCardWidth, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: firstCardWidth, behavior: 'smooth' });
      }
    };

    wrapper.addEventListener("mouseenter", handleMouseEnter);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    arrowBtns.forEach(btn => {
      btn.addEventListener("click", () => handleArrowButtonClick(btn));
    });

    startAutoPlay();

    return () => {
      wrapper.removeEventListener("mouseenter", handleMouseEnter);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
      arrowBtns.forEach(btn => {
        btn.removeEventListener("click", () => handleArrowButtonClick(btn));
      });
      stopAutoPlay(); // Clear the interval when component unmounts
    };
  }, [carousel, wrapper, arrowBtns]);

  return null; // Assuming this component is just for side effects, returning null
}

export default Carousel;
