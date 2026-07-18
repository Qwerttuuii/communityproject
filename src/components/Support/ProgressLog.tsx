import { CheckCircle2, Clock, Circle } from "lucide-react";
import { progressData, milestones } from "./progressData";

const markerStyles = {
  completed: "bg-[#184F34] text-white",
  current: "bg-[#FBEBC7] text-[#E8B12D] ring-4 ring-[#FBEBC7]/60",
  upcoming: "bg-white text-gray-300 border border-gray-300",
};

const statusStyles = {
  completed: "text-[#184F34]",
  current: "text-[#184F34]",
  upcoming: "text-gray-400",
};

const ProgressLog = () => {
  return (
    <section
      id="progress"
      className="scroll-mt-24 bg-[#FAF8F4] px-5 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 flex items-center gap-2 text-[11px] uppercase tracking-[3px] text-[#184F34]/70 sm:mb-5 sm:gap-3 sm:text-xs sm:tracking-[4px]">
          <span className="h-px w-6 bg-[#184F34]/70 sm:w-8" />
          {progressData.subtitle}
        </p>

        <h2 className="max-w-xl font-serif text-3xl leading-tight text-[#184F34] sm:text-4xl md:text-5xl">
          {progressData.title}
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:mt-5 sm:text-base sm:leading-7">
          {progressData.description}
        </p>

        <div className="relative mt-12 sm:mt-14">
          {/* Connecting line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gray-200 sm:left-[19px]" />

          <div className="space-y-12 sm:space-y-14">
            {milestones.map((item) => {
              const Icon =
                item.state === "completed"
                  ? CheckCircle2
                  : item.state === "current"
                  ? Clock
                  : Circle;

              return (
                <div key={item.title} className="relative flex gap-5 sm:gap-6">
                  <div
                    className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10 ${
                      markerStyles[item.state as keyof typeof markerStyles]
                    }`}
                  >
                    <Icon size={16} className="sm:hidden" />
                    <Icon size={20} className="hidden sm:block" />
                  </div>

                  <div className="pt-0.5">
                    <p
                      className={`text-[11px] font-semibold uppercase tracking-[2px] sm:text-xs sm:tracking-[3px] ${
                        statusStyles[item.state as keyof typeof statusStyles]
                      }`}
                    >
                      {item.status}{" "}
                      <span className="font-normal text-gray-400">
                        · {item.date}
                      </span>
                    </p>

                    <h3 className="mt-2 font-serif text-xl leading-snug text-[#184F34] sm:text-2xl md:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressLog;