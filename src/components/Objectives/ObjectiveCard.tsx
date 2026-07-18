import type { LucideIcon } from "lucide-react";



interface ObjectiveCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ObjectiveCard = ({
  icon: Icon,
  title,
  description,
}: ObjectiveCardProps) => {
  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#E8B12D] hover:shadow-2xl">
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#184F34]/10 transition group-hover:bg-[#184F34]">
        <Icon
          size={30}
          className="text-[#184F34] transition group-hover:text-white"
        />
      </div>

      <h3 className="mb-4 text-2xl font-semibold text-[#184F34]">
        {title}
      </h3>

      <p className="leading-8 text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default ObjectiveCard;