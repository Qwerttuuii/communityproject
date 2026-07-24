import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { blueprintData, progressSlides } from "./blueprintData";

const ArchitecturalHighlights = () => {
  const [current, setCurrent] = useState(0);

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + progressSlides.length) % progressSlides.length);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % progressSlides.length);
  };

  return (
    <section className="bg-white px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 flex items-center gap-2 text-[11px] uppercase tracking-[3px] text-[#184F34]/70 sm:mb-5 sm:gap-3 sm:text-xs sm:tracking-[4px]">
              <span className="h-px w-6 bg-[#184F34]/70 sm:w-8" />
              {blueprintData.subtitle}
            </p>

            <h2 className="font-serif text-3xl leading-tight text-[#184F34] sm:text-4xl md:text-5xl">
              {blueprintData.title}
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-gray-600 sm:text-right sm:text-[15px] sm:leading-7">
            {blueprintData.description}
          </p>
        </div>

        {/* Stacked slideshow */}

        <div className="relative mx-auto mt-12 h-[420px] w-full max-w-2xl sm:mt-16 sm:h-[480px]">
          {progressSlides.map((slide, index) => {
            const offset = index - current;
            const isActive = offset === 0;

            // Only render the active slide plus the two directly behind it,
            // so the stack never shows more than 3 layered cards.
            if (Math.abs(offset) > 2) return null;

            return (
              <div
                key={slide.stage}
                className="absolute inset-0 overflow-hidden rounded-[28px] transition-all duration-500 ease-out"
                style={{
                  transform: isActive
                    ? "translateY(0) scale(1)"
                    : `translateY(${offset > 0 ? offset * 14 : 0}px) scale(${
                        1 - Math.abs(offset) * 0.04
                      })`,
                  zIndex: progressSlides.length - Math.abs(offset),
                  opacity: offset < 0 ? 0 : 1,
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                {slide.image ? (
                  <img
                    src={slide.image}
                    alt={`${slide.stage}: ${slide.label}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-[#184F34]/20" />
                )}

                {/* Green overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#103323]/90 via-[#103323]/10 to-transparent" />

                {/* Stage tag */}
                <div className="absolute bottom-6 left-6 rounded-full bg-[#184F34] px-5 py-2.5 shadow-lg sm:bottom-8 sm:left-8">
                  <span className="text-xs font-medium text-white sm:text-sm">
                    <span className="text-[#E8B12D]">{slide.stage}:</span>{" "}
                    {slide.label}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Vertical nav arrows */}
          <div className="absolute -right-3 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-3 sm:-right-5">
            <button
              onClick={goPrev}
              aria-label="Previous stage"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#184F34] shadow-lg transition hover:scale-105 hover:bg-[#184F34] hover:text-white sm:h-12 sm:w-12"
            >
              <ChevronUp size={20} />
            </button>

            <button
              onClick={goNext}
              aria-label="Next stage"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#184F34] shadow-lg transition hover:scale-105 hover:bg-[#184F34] hover:text-white sm:h-12 sm:w-12"
            >
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalHighlights;