import React, { useState, useEffect, useRef } from "react";

const Popup = () => {
  const images = [
    "https://picsum.photos/800/400?random=1",
    "https://picsum.photos/800/400?random=2",
    "https://picsum.photos/800/400?random=3",
    "https://picsum.photos/800/400?random=4",
    "https://picsum.photos/800/400?random=5",
    "https://picsum.photos/800/400?random=6",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navRefs = useRef([]);

  // ✅ Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  // ✅ Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Home") setCurrentIndex(0);
      else if (event.key === "End") setCurrentIndex(images.length - 1);
      else if (event.key === "ArrowRight") handleNext();
      else if (event.key === "ArrowLeft") handlePrev();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleNavClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (navRefs.current[currentIndex]) {
      navRefs.current[currentIndex].focus();
    }
  }, [currentIndex]);

  return (
    <div className="portfolio-pop-image-slider">
      <section className="portfolio-pop-slider__content">
        <button
          type="button"
          className="portfolio-pop-slider-control--button prev-button"
          onClick={handlePrev}
        >
          <svg
            width="16"
            height="16"
            fill="currentColor"
            className="portfolio-pop-icon arrow-left-circle"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
            />
          </svg>
        </button>

        {/* Main Image Display */}
        <main className="portfolio-pop-image-display">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="main-image"
          />
        </main>

        <button
          type="button"
          className="portfolio-pop-slider-control--button next-button"
          onClick={handleNext}
        >
          <svg
            width="16"
            height="16"
            fill="currentColor"
            className="portfolio-pop-icon arrow-right-circle"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
            />
          </svg>
        </button>
      </section>

      <nav className="portfolio-pop-slider-navigation">
        {images.map((src, index) => (
          <button
            key={index}
            className="portfolio-pop-nav-button"
            aria-selected={index === currentIndex}
            onClick={() => handleNavClick(index)}
            ref={(el) => (navRefs.current[index] = el)}
          >
            <img
              className="portfolio-pop-thumbnail"
              src={src}
              alt={`Thumbnail ${index + 1}`}
            />
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Popup;
