import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { chairmanData } from "./chairmanData";
import chairmanImage from "../../assets/images/chairman/chairman.avif";

gsap.registerPlugin(ScrollTrigger);

const ChairmanMessage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(".chairman-image", {
        x: -60,
        opacity: 0,
        duration: 0.9,
      })
        .from(
          ".chairman-content > *",
          {
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
          },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAF8F4] py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <div className="chairman-image relative">


         <img
        src={chairmanImage}
        alt="Chairman"
        className="aspect-[4/5] w-full rounded-[32px] object-cover"
/>

          {/* Chairman Card */}

          <div className="absolute bottom-6 left-6 rounded-3xl bg-[#184F34] px-6 py-5 shadow-xl">

            <p className="text-xs uppercase tracking-[4px] text-[#E8B12D]">
              {chairmanData.designation}
            </p>

            <h3 className="mt-2 text-2xl text-white">
              {chairmanData.committee}
            </h3>

          </div>

        </div>

        {/* RIGHT */}

        <div className="chairman-content">

          <div className="mb-5 flex items-center gap-3">

            <div className="h-px w-10 bg-[#184F34]" />

            <p className="text-sm uppercase tracking-[4px] text-[#184F34]">
              Chairman's Message
            </p>

          </div>

          <h2 className="font-serif text-3xl leading-tight text-[#184F34] sm:text-4xl">
            {chairmanData.title}{" "}
            <span className="italic text-[#E8B12D]">
              {chairmanData.highlight}
            </span>
          </h2>

          

          <p className="mt-10 text-base leading-7 text-gray-600">
            {chairmanData.message}
          </p>

          <p className="mt-8 text-2xl italic text-[#E8B12D]">
            "{chairmanData.signature}"
          </p>

        </div>

      </div>
    </section>
  );
};

export default ChairmanMessage;