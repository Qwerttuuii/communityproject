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
      className="rounded-[36px] bg-white p-8 shadow-[0_30px_70px_rgba(0,0,0,0.12)] md:p-12"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[4px] text-[#E8B12D]">
            Fundraising Progress
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#184F34]">
            Help Build Our Modern Community Resource And Youth Development center
          </h2>
        </div>

        <div className="text-left lg:text-right">
          <span
            ref={percentageRef}
            className="text-5xl font-bold text-[#184F34]"
          >
            0%
          </span>

          <p className="mt-2 text-gray-500">of target achieved</p>
        </div>
      </div>

      <div className="mt-10 h-5 overflow-hidden rounded-full bg-gray-200">
        <div ref={progressRef} className="h-full rounded-full bg-[#E8B12D]" />
      </div>

      <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
        <div>
          <p className="text-sm text-gray-500">Raised</p>

          <h3
            ref={raisedRef}
            className="mt-2 text-2xl font-bold text-[#184F34]"
          >
            ₦0
          </h3>
        </div>

        <div>
          <p className="text-sm text-gray-500">Remaining</p>

          <h3 className="mt-2 text-2xl font-bold text-[#184F34]">
            {formatCurrency(remaining)}
          </h3>
        </div>

        <div>
          <p className="text-sm text-gray-500">Donors</p>

          <h3 className="mt-2 text-2xl font-bold text-[#184F34]">
            {fundraising.donors}
          </h3>
        </div>

        <div>
          <p className="text-sm text-gray-500">Progress</p>

          <h3 className="mt-2 text-2xl font-bold text-[#E8B12D]">
            {percentage.toFixed(0)}%
          </h3>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-[#184F34]">
            Every Contribution Counts
          </h3>

          <p className="mt-2 text-gray-600">
            Join fellow sons and daughters of Umuchukwu in bringing this
            vision to life.
          </p>
        </div>

        <button className="rounded-full bg-[#184F34] px-8 py-4 font-medium text-white transition hover:bg-[#103323]">
          Donate Today
        </button>
      </div>
    </div>
  );
};

export default FundraisingCard;