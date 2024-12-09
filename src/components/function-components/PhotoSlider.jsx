import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import photo2019 from "../../assets/2019.webp";
import photo2020 from "../../assets/2020.webp";
import photo2021 from "../../assets/2021.webp";
import photo2022 from "../../assets/2022.webp";
import photo2023 from "../../assets/2023.webp";
import photo2024 from "../../assets/2024.webp";

const PhotoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    { year: '2019', image: photo2019, alt: '2019' },
    { year: '2020', image: photo2020, alt: '2020' },
    { year: '2021', image: photo2021, alt: '2021' },
    { year: '2022', image: photo2022, alt: '2022' },
    { year: '2023', image: photo2023, alt: '2023' },
    { year: '2024', image: photo2024, alt: '2024' },
  ];

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
    <div className="relative w-full max-w-5xl mx-auto px-4 py-8">
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
        {/* Main image */}
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
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-6xl font-bold text-white tracking-tight">
                    {slide.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={previousSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors duration-200"
          disabled={isTransitioning}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors duration-200"
          disabled={isTransitioning}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Thumbnail navigation */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-gray-800 w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;


