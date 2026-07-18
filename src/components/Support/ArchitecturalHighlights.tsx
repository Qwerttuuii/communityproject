import { blueprintData, blueprintElements } from "./blueprintData";

const ArchitecturalHighlights = () => {
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

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3 md:gap-6">
          {blueprintElements.map((el) => {
            const Icon = el.icon;

            return (
              <div
                key={el.title}
                className={`rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg sm:p-7 ${
                  el.highlighted ? "border-[#E8B12D]" : "border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#184F34]/10 text-[#184F34] sm:h-12 sm:w-12">
                    <Icon size={20} />
                  </div>

                  <span className="text-[10px] uppercase tracking-[2px] text-gray-400 sm:text-xs sm:tracking-[3px]">
                    {el.label}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-serif text-[#184F34] sm:mt-6 sm:text-xl">
                  {el.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-[15px] sm:leading-7">
                  {el.description}
                </p>

                <div className="mt-6 border-t border-gray-100 pt-4 sm:mt-7 sm:pt-5">
                  <span className="inline-block rounded-full bg-[#FBEBC7] px-4 py-1.5 text-xs font-medium text-[#184F34]">
                    {el.stat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalHighlights;