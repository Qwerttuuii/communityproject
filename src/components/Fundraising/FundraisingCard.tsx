import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fundraising } from "./fundraisingData";

gsap.registerPlugin(ScrollTrigger);

const FundraisingCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLSpanElement>(null);
  const raisedRef = useRef<HTMLHeadingElement>(null);

  const percentage = Math.min(
    (fundraising.raised / fundraising.target) * 100,
    100
  );

  const remaining = fundraising.target - fundraising.raised;

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(amount);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
      });

      gsap.fromTo(
        progressRef.current,
        {
          width: "0%",
        },
        {
          width: `${percentage}%`,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
          },
        }
      );

      const percentCounter = { value: 0 };

      gsap.to(percentCounter, {
        value: percentage,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
        onUpdate: () => {
          if (percentageRef.current) {
            percentageRef.current.textContent = `${Math.round(
              percentCounter.value
            )}%`;
          }
        },
      });

      const raisedCounter = { value: 0 };

      gsap.to(raisedCounter, {
        value: fundraising.raised,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
        onUpdate: () => {
          if (raisedRef.current) {
            raisedRef.current.textContent = formatCurrency(
              Math.round(raisedCounter.value)
            );
          }
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="rounded-[24px] bg-white p-5 shadow-[0_30px_70px_rgba(0,0,0,0.12)] sm:rounded-[36px] sm:p-8 md:p-12"
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div>
          <p className="text-xs uppercase tracking-[3px] text-[#E8B12D] sm:text-sm sm:tracking-[4px]">
            Fundraising Progress
          </p>

          <h2 className="mt-2 text-xl font-semibold text-[#184F34] sm:mt-3 sm:text-2xl md:text-3xl">
            Help Build Our Modern Community Resource And Youth Development center
          </h2>
        </div>

        <div className="text-left lg:text-right">
          <span
            ref={percentageRef}
            className="text-3xl font-bold text-[#184F34] sm:text-4xl md:text-5xl"
          >
            0%
          </span>

          <p className="mt-1 text-sm text-gray-500 sm:mt-2 sm:text-base">
            of target achieved
          </p>
        </div>
      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-gray-200 sm:mt-10 sm:h-5">
        <div ref={progressRef} className="h-full rounded-full bg-[#E8B12D]" />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-5 sm:mt-12 sm:gap-8 lg:grid-cols-4">
        <div>
          <p className="text-xs text-gray-500 sm:text-sm">Raised</p>

          <h3
            ref={raisedRef}
            className="mt-1 text-lg font-bold text-[#184F34] sm:mt-2 sm:text-2xl"
          >
            ₦0
          </h3>
        </div>

        <div>
          <p className="text-xs text-gray-500 sm:text-sm">Remaining</p>

          <h3 className="mt-1 text-lg font-bold text-[#184F34] sm:mt-2 sm:text-2xl">
            {formatCurrency(remaining)}
          </h3>
        </div>

        <div>
          <p className="text-xs text-gray-500 sm:text-sm">Donors</p>

          <h3 className="mt-1 text-lg font-bold text-[#184F34] sm:mt-2 sm:text-2xl">
            {fundraising.donors}
          </h3>
        </div>

        <div>
          <p className="text-xs text-gray-500 sm:text-sm">Progress</p>

          <h3 className="mt-1 text-lg font-bold text-[#E8B12D] sm:mt-2 sm:text-2xl">
            {percentage.toFixed(0)}%
          </h3>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t pt-6 sm:mt-12 sm:pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[#184F34] sm:text-xl">
            Every Contribution Counts
          </h3>

          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Join fellow sons and daughters of Umuchukwu in bringing this
            vision to life.
          </p>
        </div>

        <button className="rounded-full bg-[#184F34] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#103323] sm:px-8 sm:py-4 sm:text-base">
          Donate Today
        </button>
      </div>
    </div>
  );
};

export default FundraisingCard;