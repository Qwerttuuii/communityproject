import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { blueprintImages } from "./blueprintImages";

const Blueprint = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % blueprintImages.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + blueprintImages.length) % blueprintImages.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#F8F6F2] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-left">
          <p className="uppercase tracking-[5px] text-[#E8B12D]">
            Future Blueprint
          </p>

          <h2 className="mt-4 font-serif text-5xl text-[#103323]">
            A Vision Taking Shape
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore the proposed architectural design of the Umuchukwu
            Community Resource & Youth Development Center.
          </p>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={blueprintImages[current].image}
            alt={blueprintImages[current].title}
            className="h-75 w-full object-cover md:h-162.5"
          />

          <div className="absolute inset-0 bg-black/15"></div>

          {/* Title */}
          <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/80 to-transparent p-8">
            <h3 className="text-3xl font-semibold text-white">
              {blueprintImages[current].title}
            </h3>
          </div>

          {/* Left */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:scale-110"
          >
            <ChevronLeft />
          </button>

          {/* Right */}
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:scale-110"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {blueprintImages.map((image, index) => (
            <button
              key={image.title}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-3 w-3 rounded-full transition ${
                current === index ? "w-10 bg-[#E8B12D]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blueprint;