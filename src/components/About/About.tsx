import { ScrollTrigger } from "gsap/ScrollTrigger";
import FundraisingCard from "../Fundraising/FundraisingCard";
import { aboutData } from "./aboutData";
import aboutBg from "../../assets/images/about/fundoverlay.jpeg";

const About = () => {
  return (
    <section className="relative">
      {/* Background */}

      <div className="relative py-28">
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

        <div className="relative mx-auto max-w-7xl px-6 pb-56">
          <div className="max-w-2xl">
            <p className="uppercase tracking-[5px] text-[#E8B12D]">
              {aboutData.subtitle}
            </p>

            <h2 className="mt-4 font-serif text-5xl leading-tight text-white md:text-6xl">
              {aboutData.title}
            </h2>

            <p className="mt-8 leading-8 text-white/90">
              {aboutData.description1}
            </p>


          

           
          </div>
        </div>

        {/* Floating Card */}

        <div className="absolute bottom-0 left-1/2 z-10 w-full max-w-5xl -translate-x-1/2 translate-y-1/2 px-6">
          <FundraisingCard />
        </div>
      </div>

      {/* Space for overlap */}

      <div className="h-64 bg-[#FAF8F4]"></div>
    </section>
  );
};

export default About;