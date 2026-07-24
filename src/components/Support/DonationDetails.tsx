import { useState } from "react";
import { ShieldCheck, Copy, Check } from "lucide-react";
import { donationData, bankDetails } from "./donationData";

const DonationDetails = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      
    }
  };

  return (
    <section
      id="donation"
      className="scroll-mt-24 bg-[#FAF8F4] px-5 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 flex items-center gap-2 text-[11px] uppercase tracking-[3px] text-[#184F34]/70 sm:mb-5 sm:gap-3 sm:text-xs sm:tracking-[4px]">
          <span className="h-px w-6 bg-[#184F34]/70 sm:w-8" />
          {donationData.subtitle}
        </p>

        <h2 className="font-serif text-3xl leading-tight text-[#184F34] sm:text-4xl md:text-5xl">
          {donationData.title}{" "}
          <span className="italic text-[#E8B12D]">
            {donationData.titleHighlight}
          </span>{" "}
          {donationData.titleEnd}
        </h2>

      

        {/* Donation card */}

        <div className="mt-10 rounded-[28px] bg-linear-to-br from-[#184F34] to-[#0F3322] p-6 sm:mt-12 sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[3px] text-[#E8B12D] sm:text-xs sm:tracking-[4px]">
                {bankDetails.label}
              </p>

              <h3 className="mt-2 text-2xl font-serif text-white sm:text-3xl md:text-4xl">
                {bankDetails.fundName}
              </h3>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[#E8B12D] sm:text-sm">
              <ShieldCheck size={16} />
              {bankDetails.verifiedText}
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-7">
            {bankDetails.fields.map((field) => (
              <div
                key={field.label}
                className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 sm:border-none sm:pb-0"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[2px] text-[#E8B12D]/80 sm:text-xs sm:tracking-[3px]">
                    {field.label}
                  </p>

                  <p className="mt-1 text-base font-serif text-white sm:text-lg">
                    {field.value}
                  </p>
                </div>

                <button
                  onClick={() => handleCopy(field.label, field.value)}
                  className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#E8B12D] px-3.5 py-2 text-xs font-medium text-[#184F34] transition hover:scale-105 sm:px-4 sm:text-sm"
                >
                  {copiedField === field.label ? (
                    <>
                      <Check size={14} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copy
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-white/10 pt-6 text-xs leading-6 text-white/60 sm:mt-10 sm:pt-8 sm:text-sm sm:leading-7">
            {bankDetails.note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonationDetails;