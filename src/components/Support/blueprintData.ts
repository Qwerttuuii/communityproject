import { Building2, Briefcase, Users } from "lucide-react";

export const blueprintData = {
  subtitle: "Blueprint",
  title: "Architectural highlights.",
  description:
    "What we're building, room by room — designed by community-appointed architects for long-term use.",
};

export const blueprintElements = [
  {
    icon: Building2,
    label: "Element 01",
    title: "Main Auditorium",
    description:
      "Capacity for community-wide gatherings, festivals and cultural performances under one roof.",
    stat: "600+ seats",
    highlighted: false,
  },
  {
    icon: Briefcase,
    label: "Element 02",
    title: "Administrative Offices",
    description:
      "Dedicated rooms for community leadership, steering committees and record-keeping.",
    stat: "6 offices",
    highlighted: true,
  },
  {
    icon: Users,
    label: "Element 03",
    title: "Conference & Board Rooms",
    description:
      "Intimate spaces reserved for smaller stakeholder meetings and local deliberations.",
    stat: "3 rooms",
    highlighted: false,
  },
];