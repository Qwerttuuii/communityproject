import {
  supportImpactData,
  impactCards,
} from "./supportImpactData";

const SupportImpact = () => {
  return (
    <section className="bg-[#FAF8F4] px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 flex items-center gap-2 text-[11px] uppercase tracking-[3px] text-[#184F34]/70 sm:mb-5 sm:gap-3 sm:text-xs sm:tracking-[4px]">
          <span className="h-px w-6 bg-[#184F34]/70 sm:w-8" />
          {supportImpactData.subtitle}
        </p>

        <h2 className="max-w-2xl font-serif text-3xl leading-tight text-[#184F34] sm:text-4xl md:text-5xl">
          {supportImpactData.title}
        </h2>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8">
          {supportImpactData.description}
        </p>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {impactCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className={`rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg sm:p-7 ${
                  card.highlighted
                    ? "border-[#E8B12D]"
                    : "border-gray-200"
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#184F34] text-white sm:h-12 sm:w-12">
                  <Icon size={20} />
                </div>

                <h3 className="mt-4 text-lg font-serif text-[#184F34] sm:mt-5 sm:text-xl">
                  {card.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-[15px] sm:leading-7">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SupportImpact;