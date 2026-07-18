import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  name: string;
  phone: string;
  icon: LucideIcon;
}

const ContactCard = ({ title, name, phone, icon: Icon }: Props) => {
  return (
    <div className="group rounded-[22px] border bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[3px] text-gray-500">
            {title}
          </p>

          <h3 className="mt-1.5 text-xl font-serif text-[#184F34]">
            {name}
          </h3>

          <p className="mt-1 text-sm text-gray-600">{phone}</p>
        </div>

        <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#184F34] text-white transition group-hover:scale-110">
          <Icon size={18} />
        </button>
      </div>
    </div>
  );
};

export default ContactCard;