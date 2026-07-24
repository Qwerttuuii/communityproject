import { ScrollTrigger } from "gsap/ScrollTrigger";
import FundraisingCard from "../Fundraising/FundraisingCard";
import { aboutData } from "./aboutData";
import aboutBg from "../../assets/images/about/fundoverlay.jpeg";

const About = () => {
  return (
    <section className="relative">
      {/* Background */}

      <div className="relative pb-16 pt-20 sm:pb-20 sm:pt-28">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={aboutBg}
            className="h-full w-full object-cover"
            onLoad={() => ScrollTrigger.refresh()}
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-[#103323]/80"></div>
        </div>

        {/* Content */}

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[3px] text-[#E8B12D] sm:text-base sm:tracking-[5px]">
              {aboutData.subtitle}
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:mt-4 sm:text-5xl md:text-6xl">
              {aboutData.title}
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/90 sm:mt-8 sm:text-base sm:leading-8">
              {aboutData.description1}
            </p>
          </div>
        </div>
      </div>

      {/* Floating Card — sits in normal flow, pulled up by a fixed
          amount so it overlaps the section above regardless of how
          tall the content or the card itself grows on any screen size */}

      <div className="relative z-10 mx-auto -mt-16 max-w-5xl px-5 sm:-mt-24 sm:px-6">
        <FundraisingCard />
      </div>

      {/* Space below the card */}

      <div className="h-16 bg-[#FAF8F4] sm:h-24"></div>
    </section>
  );
};

export default About;