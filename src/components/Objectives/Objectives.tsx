import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import ObjectiveCard from "./ObjectiveCard";
import { objectives } from "./objectiveData";

const Objectives = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".objective-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAF8F4] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-center text-sm uppercase tracking-[6px] text-[#E8B12D]">
          Our Mission
        </p>

        <h2 className="mx-auto max-w-3xl text-center text-5xl font-serif text-[#184F34]">
          Core Objectives
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center leading-8 text-gray-600">
          Every contribution supports a transparent community effort to build
          a civic hall that will benefit present and future generations of
          Umuchukwu.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {objectives.map((objective) => (
            <div
              key={objective.title}
              className="objective-card"
            >
              <ObjectiveCard {...objective} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;