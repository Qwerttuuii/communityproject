import { supportHeroData } from "./supportData";
import supportBg from "../../assets/images/support/supportbg.avif";

const SupportHero = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
      {/* Background */}

      <div className="absolute inset-0">
        {/* Replace bg-[#184F34] with the image below once it's added locally */}
         <img
          src={supportBg}
          alt=""
          className="h-full w-full object-cover"
        />
       

        {/* Overlay */}

        <div className="absolute inset-0 bg-[#103323]/80" />
      </div>

      {/* Content */}

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6">
        <p className="mb-4 flex items-center gap-2 text-[11px] uppercase tracking-[3px] text-[#E8B12D] sm:mb-6 sm:gap-3 sm:text-xs sm:tracking-[5px]">
          <span className="h-px w-6 bg-[#E8B12D] sm:w-8" />
          {supportHeroData.subtitle}
        </p>

        <h1 className="font-serif text-3xl leading-[1.15] text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {supportHeroData.title}{" "}
          <span className="italic text-[#E8B12D]">
            {supportHeroData.titleHighlight}
          </span>
          .
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:mt-6 sm:text-base sm:leading-8">
          {supportHeroData.description1}
        </p>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:mt-5 sm:text-base sm:leading-8">
          {supportHeroData.description2}
        </p>
      </div>
    </section>
  );
};

export default SupportHero;