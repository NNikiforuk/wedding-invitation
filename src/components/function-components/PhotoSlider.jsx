import { useState, useEffect, useRef } from 'react';
import photo2019 from "../../assets/photos/2019.webp";
import photo2020 from "../../assets/photos/2020.webp";
import photo2021 from "../../assets/photos/2021.webp";
import photo2022 from "../../assets/photos/2022.webp";
import photo2023 from "../../assets/photos/2023.webp";
import photo2024 from "../../assets/photos/2024.webp";

import leftArrow from "../../assets/icons/left.svg";
import rightArrow from "../../assets/icons/right.svg";

const PhotoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef(null);

  const slides = [
    { year: '2019', image: photo2019, alt: '2019' },
    { year: '2020', image: photo2020, alt: '2020' },
    { year: '2021', image: photo2021, alt: '2021' },
    { year: '2022', image: photo2022, alt: '2022' },
    { year: '2023', image: photo2023, alt: '2023' },
    { year: '2024', image: photo2024, alt: '2024' },
  ];

    const minSwipeDistance = 50;

    const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && !isTransitioning) {
      nextSlide();
    }
    if (isRightSwipe && !isTransitioning) {
      previousSlide();
    }
  };

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }
  };

  const previousSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="relative w-full max-w-5xl mx-auto px-4 py-8">
      <div ref={sliderRef} onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd} className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
        <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full relative">
              <img
                src={slide.image.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute top-0 left-0 ">
                  <span className=" p-2 text-2xl font-bold text-orange-100 tracking-tight">
                    {slide.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

          <div className='flex mt-4 justify-center gap-4'>
      <button
          onClick={previousSlide}
          disabled={isTransitioning}
        >
          <img src={leftArrow.src} alt="strzałka w lewo" className='w-10 h-10 md:w-6 md:h-6' />
        </button>
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
        >
          <img src={rightArrow.src} alt="strzałka w prawo" className='w-10 h-10 md:w-6 md:h-6' />
        </button>
          </div>
    </section>
  );
};


export default PhotoSlider;


