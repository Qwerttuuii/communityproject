import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { heroImages } from "./heroImages";



const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: number;

    const startSlider = () => {
      interval = window.setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
      }, 5000);
    };

    const stopSlider = () => {
      clearInterval(interval);
    };

    startSlider();

    const handleVisibility = () => {
      if (document.hidden) {
        stopSlider();
      } else {
        startSlider();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      stopSlider();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-location", {
        y: 30,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".hero-title",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.2"
        )
        .from(
          ".hero-text",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
       
        .from(
          ".hero-buttons",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.2"
        )
        .from(
          ".hero-stats",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.2"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[6000ms] ease-linear ${
            index === currentImage
              ? "scale-110 opacity-100"
              : "scale-100 opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#103323]/65"></div>

      {/* Content */}
      <div
        ref={heroRef}
        className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pt-28 sm:px-6 sm:pt-32"
      >
        <p className="hero-location mb-5 flex items-center gap-2 text-[10px] uppercase tracking-[3px] text-[#E8B12D] sm:mb-8 sm:gap-3 sm:text-xs sm:tracking-[5px]">
          <span className="h-px w-6 bg-[#E8B12D] sm:w-8" />
          Umuagu Village · Obowo LGA · Imo State
        </p>

        <h1 className="hero-title max-w-4xl font-serif text-3xl leading-[1.1] text-white sm:text-4xl sm:leading-[1.05] md:text-6xl lg:text-[4.5rem]">
          The{" "}
          <span className="italic text-[#E8B12D]">Umuchukwu</span>
          <br />
          Community Resource & Youth Development Center.
          <br />
          
        </h1>

   <div className="hero-text mt-5 max-w-2xl sm:mt-6">

  <p className="text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
    The New Umuchukwu Community Resource & Youth Development Center will serve as a structured environment for:
  </p>

  <ul className="mt-5 space-y-3 text-sm text-white/90 sm:text-base">

    <li className="flex items-start gap-3">
      <span className="mt-2 h-2 w-2 rounded-full bg-[#E8B12D] flex-shrink-0"></span>
      <span>Skill Acquisition and Vocational Training</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-2 h-2 w-2 rounded-full bg-[#E8B12D] flex-shrink-0"></span>
      <span>Incubation Hub for Youth Empowerment</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-2 h-2 w-2 rounded-full bg-[#E8B12D] flex-shrink-0"></span>
      <span>Leadership, Civic Engagement & Community Advocacy</span>
    </li>

  </ul>

</div>
     

        <div className="hero-buttons mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
          <Link
            to="/support#donation"
            className="flex items-center gap-2 rounded-full bg-[#E8B12D] px-5 py-2.5 text-xs font-semibold transition hover:scale-105 sm:px-6 sm:py-3 sm:text-sm"
          >
            How to Donate
            <span aria-hidden="true">→</span>
          </Link>

          <Link
            to="/support#progress"
            className="rounded-full border border-white px-5 py-2.5 text-xs text-white transition hover:bg-white hover:text-[#184F34] sm:px-6 sm:py-3 sm:text-sm"
          >
            View Project Timeline
          </Link>
        </div>

        <div className="hero-stats mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/20 pt-6 text-white sm:mt-14 sm:gap-10 sm:pt-8">
          <div>
            <p className="text-[10px] uppercase tracking-[2px] text-white/60 sm:text-xs sm:tracking-[3px]">
              Phase
            </p>

            <h2 className="mt-1 text-lg text-[#E8B12D] sm:mt-2 sm:text-2xl">
              Foundation
            </h2>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[2px] text-white/60 sm:text-xs sm:tracking-[3px]">
              Target
            </p>

            <h2 className="mt-1 text-lg sm:mt-2 sm:text-2xl">2027</h2>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[2px] text-white/60 sm:text-xs sm:tracking-[3px]">
              Sons &amp; Daughters
            </p>

            <h2 className="mt-1 text-lg sm:mt-2 sm:text-2xl">10,000+</h2>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-3 sm:mt-10">
  {heroImages.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentImage(index)}
      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 sm:h-5 sm:w-3 ${
        currentImage === index
          ? "w-8 bg-[#E8B12D] sm:w-10"
          : "bg-white/50 hover:bg-white"
      }`}
    />
  ))}
</div>
      </div>


    
    </section>
  );
};

export default Hero;